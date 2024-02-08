"use client"

import { NextUIProvider } from "@nextui-org/react"

// This file allows different states to be shared across the app using the Context API.

interface ProvidersProps {
    children: React.ReactNode
}

export default function Providers({ children}: ProvidersProps) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}