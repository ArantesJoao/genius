"use client"

import { useState } from "react";

import * as z from "zod"
import axios from "axios";
import toast from "react-hot-toast";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";

import Empty from "@/components/empty";
import Loader from "@/components/loader";
import Heading from "@/components/heading";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useProModal from "@/hooks/use-pro-modal";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";

const MusicGenerationPage = () => {
    const router = useRouter()
    const proModal = useProModal()
    const [music, setMusic] = useState<string>()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic(undefined)

            const response = await axios.post('/api/music-generation', values)

            setMusic(response.data.audio)

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
                title="Music generation"
                description="Turn your prompt into music."
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="bg-emerald-500/10"
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
                                                placeholder="Piano solo in C major"
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
                    {!music && !isLoading && (
                        <Empty label="No music generated." />
                    )}
                    {music && (
                        <audio controls className="w-full mt-8">
                            <source src={music} />
                        </audio>

                    )}
                </div>
            </div>
        </div>
    );
}

export default MusicGenerationPage;