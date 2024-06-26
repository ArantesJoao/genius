import { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/modal-provider'
import CrispProvider from '@/components/crips-provider'
import ToasterProvider from '@/components/toaster-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Genius',
    description: 'AI Platform',
    icons: {
        icon: '/favicon.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <CrispProvider />
                    <ModalProvider />
                    <ToasterProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
