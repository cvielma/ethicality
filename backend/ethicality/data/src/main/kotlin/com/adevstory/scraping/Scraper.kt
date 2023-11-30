package com.adevstory.scraping

import com.adevstory.Config
import com.github.kittinunf.fuel.gson.responseObject
import com.github.kittinunf.fuel.httpGet
import com.google.gson.annotations.SerializedName

fun main(args: Array<String>) {
    val config = Config(
        System.getenv("GOOGLE_SEARCH_API_KEY"),
        System.getenv("SEARCH_ENGINE_ID"),
        ""
    )

    val scraper = Scraper(config);
    val brands = scraper.getBrands()

    for (brand in brands) {
        scraper.searchBrand(brand)
    }
}

class Scraper(private val config: Config) {
    fun getBrands(): List<String> {
        return listOf(
//        "adidas",
//        "billabong",
            "coca cola"
//        "skechers"
        )
    }

    fun searchBrand(brand: String): GoogleSearchResult {
        val apiUrl = "https://www.googleapis.com/customsearch/v1?key=${config.apiKey}&cx=${config.searchEngineId}&q=${brand.replace(" ", "+")}+brand+environmental+impact&lr=lang_en" //2DO: sanitize input better

        val (request, response, result) = apiUrl.httpGet().responseObject<GoogleSearchResult>()

        return result.get()
    }

    data class GoogleSearchResult(
        @SerializedName("items") val items: List<Result>
    )

    data class Result(
        @SerializedName("title") val title: String,
        @SerializedName("link") val link: String,
        @SerializedName("snippet") val snippet: String
    )

}