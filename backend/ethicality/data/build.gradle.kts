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