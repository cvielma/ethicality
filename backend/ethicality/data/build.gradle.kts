plugins {
    kotlin("jvm") version "1.9.0"
    application
}

group = "com.adevstory"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(platform("com.aallam.openai:openai-client-bom:3.6.1"))

    implementation("com.aallam.openai:openai-client")
    implementation("com.github.kittinunf.fuel:fuel:2.3.1")
    implementation("com.github.kittinunf.fuel:fuel-gson:2.3.1")
    implementation ("com.google.code.gson:gson:2.8.9")

    runtimeOnly("io.ktor:ktor-client-okhttp")

    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

kotlin {
    jvmToolchain(17)
}

application {
    mainClass.set("MainKt")
}