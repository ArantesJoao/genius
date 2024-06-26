import { Code, ImageIcon, LayoutDashboard, LucideIcon, MessageSquare, Music, Settings, Video, VideoIcon } from "lucide-react";
import { title } from "process";

export type routesType = {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: string;
};

export type toolsType = {
    label: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    href: string;
};

export const routes: Array<routesType> = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image-generation",
        color: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: Video,
        href: "/video-generation",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music-generation",
        color: "text-emerald-700",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code-generation",
        color: "text-green-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];

export const tools: toolsType[] = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation",
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music-generation",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image-generation",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/video-generation",
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/code-generation",
    },
];

export const MAX_FREE_GENERATIONS = 5

export const testimonials = [
    {
        name: "John Doe",
        avatar: "J",
        title: "Software Engineer",
        description: "This is the best AI tool I've ever used! Everything in one place!",
    },
    {
        name: "Arthur Doe",
        avatar: "A",
        title: "College Student",
        description: "Genius helps me a lot on my essays!",
    },
    {
        name: "Jane Doe",
        avatar: "J",
        title: "Product Manager",
        description: "This helps me a lot to create new tasks in the projects I run!",
    },
    {
        name: "Emily Smith",
        avatar: "E",
        title: "Data Scientist",
        description: "The insights provided by Genius are incredibly accurate and save me hours of analysis!",
    }
]
