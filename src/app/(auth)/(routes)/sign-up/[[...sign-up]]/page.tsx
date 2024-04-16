import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/app/(dashboard)/(routes)/conversation/constants";
import { SignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import OpenAI from "openai";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import * as z from "zod";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import OpenAI from "openai";
import { Chat, CreateChatCompletionRequestMessage } from "openai/resources";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
    return <SignUp />;
}
export const ConversationPage = () => {
    const router = useRouter();
    const [messages, setMessages] = useState<OpenAI.Chat.CreateChatCompletionRequestMessage[]>([]);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
                role: 'user',
                content: values.prompt
            };

            const newMessages = [...messages, userMessage];

            const response = await axios.post('/api/conversation', {
                messages: newMessages
            });

            setMessages((current) => [...current, userMessage, response.data]);

            form.reset();
        } catch (error: any) {
            console.log(error);
        } finally {
            router.refresh();
        }
    };

    return (
        <div>
            <Heading
                title="Conversation"
                description="Our most advanced conversation model."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10" />
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
                                                placeholder="How do I calculate the radius of a circle?"
                                                {...field} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                            <Button
                                disabled={isLoading}
                                className="col-span-12 lg:col-span-2 w-full"
                            >
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    <div className="flex flex-col-reverse gap-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.content}
                                className={cn(
                                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                                    message.role === "user"
                                        ? "bg-white border border-black border-opacity-10"
                                        : "bg-muted"
                                )}
                            >
                                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                                <div
                                    className="text-sm overflow-hidden leading-7"
                                    dangerouslySetInnerHTML={{
                                        __html: message.content
                                            ? message.content.replace(/\n/g, "<br />")
                                            : "",
                                    }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
