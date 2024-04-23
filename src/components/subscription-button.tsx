"use client"

import { useState } from "react";

import axios from "axios";
import { Zap } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";

interface SubscriptionButtonProps {
    isPro: boolean
}

const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const onClick = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("/api/stripe")

            window.location.href = response.data.url
        } catch (error) {
            toast.error("Something went wrong.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="">
            <Button disabled={isLoading} variant={isPro ? "default" : "premium"} onClick={onClick}>
                {isPro ? "Manage Subscription" : "Upgrade to Pro"}
                {!isPro && <Zap className="h-4 w-4 ml-2 fill-white" />}
            </Button>
        </div>
    );
}

export default SubscriptionButton;