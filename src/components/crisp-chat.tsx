"use client"

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("e9fed556-8784-4164-879e-f0941d86feea")
    }, [])

    return null
}

export default CrispChat;