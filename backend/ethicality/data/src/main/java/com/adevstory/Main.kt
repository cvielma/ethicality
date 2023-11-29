package com.adevstory

import com.aallam.openai.api.chat.ChatCompletion
import com.aallam.openai.api.chat.ChatCompletionRequest
import com.aallam.openai.api.chat.ChatMessage
import com.aallam.openai.api.chat.ChatRole
import com.aallam.openai.api.http.Timeout
import com.aallam.openai.api.model.ModelId
import com.aallam.openai.client.OpenAI
import kotlin.time.Duration.Companion.seconds

suspend fun main(args: Array<String>) {
    val openai = OpenAI(
        token = System.getenv("OPENAI_API_KEY"),
        timeout = Timeout(socket = 60.seconds),
        // additional configurations...
    )

    val chatCompletionRequest = ChatCompletionRequest(
        model = ModelId("gpt-3.5-turbo"),
        messages = listOf(
            ChatMessage(
                role = ChatRole.System,
                content = "You are a helpful assistant!"
            ),
            ChatMessage(
                role = ChatRole.User,
                content = "Hello!"
            )
        )
    )

    val completion: ChatCompletion = openai.chatCompletion(chatCompletionRequest)
    println(completion);
}