"use client"

import { useEffect, useState } from "react"

import { Zap } from "lucide-react"

import { MAX_FREE_GENERATIONS } from "@/consts"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

interface FreeGenerationsCounterProps {
    apiLimitCount: number
}

const FreeGenerationsCounter = ({ apiLimitCount }: FreeGenerationsCounterProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    })

    if (!isMounted) return null

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_GENERATIONS} free generations
                        </p>
                        <Progress
                            className="h-3"
                            value={(apiLimitCount / MAX_FREE_GENERATIONS) * 100}
                        />
                    </div>
                    <Button variant="premium" className="w-full">
                        Upgrade
                        <Zap className="h-4 w-4 ml-2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default FreeGenerationsCounter;