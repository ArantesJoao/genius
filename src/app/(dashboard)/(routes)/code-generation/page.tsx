"use client"

import { useState } from "react";

import * as z from "zod"
import axios from "axios";
import { Code } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

import Empty from "@/components/empty";
import Loader from "@/components/loader";
import Heading from "@/components/heading";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BotAvatar from "@/components/bot-avatar";
import useProModal from "@/hooks/use-pro-modal";
import UserAvatar from "@/components/user-avatar";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";

type Message = {
    role: 'user' | 'assistant',
    content: string
}

const CodePage = () => {
    const router = useRouter()
    const proModal = useProModal()
    const [messages, setMessages] = useState<Message[]>([])


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: Message = {
                role: 'user',
                content: values.prompt
            }

            const newMessages = [...messages, userMessage]

            const response = await axios.post('/api/code-generation', {
                messages: newMessages
            })

            setMessages((current) => [...current, userMessage, response.data])

            form.reset()
        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen()
            } else {
                toast.error("Something went wrong.")
            }
        } finally {
            router.refresh()
        }
    }

    return (
        <div>
            <Heading
                title="Code generation"
                description="Generate code using descriptive text."
                icon={Code}
                iconColor="text-green-700"
                bgColor="bg-green-700/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Simple toggle button using React hooks."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                disabled={isLoading}
                                className="col-span-12 lg:col-span-2 w-full"
                            >
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4 pb-6">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                    )}
                    {messages.length === 0 && !isLoading && (
                        <Empty label="No conversation started." />
                    )}
                    {messages.length > 0 && (
                        <div className="flex flex-col-reverse gap-y-6 bg-zinc-700 text-white rounded-lg p-3.5">
                            {messages.map((message) => (
                                <div
                                    key={message.content}
                                    className="flex items-center gap-x-4"
                                >
                                    {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                                    <div className="">
                                        <p className="font-bold">
                                            {message.role === 'user' ? "You" : "Genius"}
                                        </p>
                                        <ReactMarkdown
                                            components={{
                                                pre: ({ node, ...props }) => (
                                                    <div className="overflow-auto w-full my-2 bg-black/20 p-2 rounded-lg">
                                                        <pre {...props} />
                                                    </div>
                                                ),
                                                code: ({ node, ...props }) => (
                                                    <code className="bg-black/20 p-1 rounded-lg" {...props} />
                                                )
                                            }}
                                            className="overflow-hidden leading-7"
                                        >
                                            {message.content || ""}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CodePage;