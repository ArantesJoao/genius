import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessage } from "openai/resources";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionMessage = {
    role: 'assistant',
    content: "You are a code generator with the knowledge of a senior software engineer. You must always send a markdown code snippets and a very direct explanation under it."
}

export async function POST(req: Request) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { messages } = body

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!openai.apiKey) {
            return new Response("OpenAI key not configured", {
                status: 500,
            });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 })
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [instructionMessage, ...messages]
        })

        return NextResponse.json(response.choices[0].message)
    } catch (error) {
        console.log("[CODE_ERROR] ", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}