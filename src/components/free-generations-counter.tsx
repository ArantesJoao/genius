"use client"

import { useEffect, useState } from "react"

import { Zap } from "lucide-react"

import { MAX_FREE_GENERATIONS } from "@/consts"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import useProModal from "@/hooks/use-pro-modal"

interface FreeGenerationsCounterProps {
    apiLimitCount: number
    isPro: boolean
}

const FreeGenerationsCounter = ({ apiLimitCount, isPro = false }: FreeGenerationsCounterProps) => {
    const proModal = useProModal()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    if (isPro) return null

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
                    <Button onClick={proModal.onOpen} variant="premium" className="w-full">
                        Upgrade
                        <Zap className="h-4 w-4 ml-2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default FreeGenerationsCounter;