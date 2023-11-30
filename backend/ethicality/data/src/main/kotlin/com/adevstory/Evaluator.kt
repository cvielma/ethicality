package com.adevstory

import com.aallam.openai.api.chat.*
import com.aallam.openai.api.http.Timeout
import com.aallam.openai.api.model.ModelId
import com.aallam.openai.client.OpenAI
import com.adevstory.scraping.Scraper
import com.google.gson.Gson
import kotlin.time.Duration.Companion.seconds


suspend fun main(args: Array<String>) {
    val config = Config(
        System.getenv("GOOGLE_SEARCH_API_KEY"),
        System.getenv("SEARCH_ENGINE_ID"),
        System.getenv("OPENAI_API_KEY")
    )

    val gson = Gson()
    val category = "environmental"
    val evaluator = Evaluator(config, category, fromFile("$category.txt"))
    val scraper = Scraper(config)
    val searchResult = scraper.searchBrand("coca cola")
    println("Search Result: \n -------------- \n ${gson.toJson(searchResult)}")
    val evaluationResult = evaluator.evaluate("coca cola", searchResult)
    println("Evaluation Result: \n -------------- \n ${evaluationResult}")
}

fun fromFile(fileName: String): String {
    val inputStream = object {}.javaClass.classLoader.getResourceAsStream(fileName)
    return inputStream?.bufferedReader().use { it?.readText() ?: "" }
}

class Evaluator(private val config: Config, private val category: String, private val description: String) {
    private val context = "An ethical company in $category area is defined by: " +
            "\n------\n" +
            description +
            "\n------\n" +
            "The user will ask you about a specific brand and give you a list of links in json format inside the 'items' array, each with the format:" +
            "```" +
            "{" +
            "\"title\": <title of the link>" +
            "\"url\": <website url>" +
            "\"snippet\": <short description from the article>" +
            "}" +
            "```" +
            "\n" +
            "You will: \n " +
            "- Get a brief (less than 50 characters) objective description from the company or brand requested.\n" +
            "- Evaluate the company ethical score based on user input.\n" +
            "- Return the result with the complete response including all the evaluated links in json format.\n" +
            "To evaluate the company ethical score you will do the following: " +
            "- When the user submits the company/brand and the list of links, you will evaluate the links into 3 categories:" +
            " positive, neutral or negative depending whether they match or not the 'ethical company' description from above." +
            " For this evaluation, you will take into consideration both the title and the snippet content." +
            " Then get a total score for the company/brand by summing up all positive, neutral and negative links. " +
            "Each link with a positive result count as 1, neutral as 0.5 and negative as 0." +
            "Additionally, for each link decide to highlight it or not depending on its relevancy with the ethical profile from above. " +
            "You must highlight 3 links.\n" +
            "To return the result you will do it in the following json format: " +
            "```" +
            "{" +
            "\"description\": <your brief description of the company, like the company profile>" +
            "\"score\": <the calculated score from above>" +
            "\"links\": [" +
            "{" +
            "\"title:\" <the title from the link shared by the user>" +
            "\"url:\" <url from the link shared by the user>" +
            "\"snippet:\" <snippet from the link shared by the user>" +
            "\"verdict:\" <your evaluation if it's positive, neutral or negative>" +
            "\"highlight:\" <true if this is one of the 3 links that should be highlighted>" +
            "}" +
            "] <these links are the complete list of links from the user, only with the added information from your evaluation>" +
            "```"

    private val openai = OpenAI(
        token = config.openAIKey,
        timeout = Timeout(socket = 120.seconds),
        // additional configurations...
    )

    private val gson = Gson()

    suspend fun evaluate(brand: String, linksList: Scraper.GoogleSearchResult): MutableList<Content?>? {
        val chatCompletionRequest = ChatCompletionRequest(
            model = ModelId("gpt-3.5-turbo"),
            messages = listOf(
                ChatMessage(
                    role = ChatRole.System,
                    content = context
                ),
                ChatMessage(
                    role = ChatRole.User,
                    content = "Evaluate company/brand: $brand\n. This is the links list: ```\n" +
                            gson.toJson(linksList) +
                            "```"
                )
            )
        )

        val completion: ChatCompletion = openai.chatCompletion(chatCompletionRequest)
        //2DO: do this for all the companies and just get the result, so that way we don't need to specify the context every time
        return completion.choices.stream().map { c -> c.message.messageContent }.toList();
    }
}