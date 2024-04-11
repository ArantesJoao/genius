import { Code, ImageIcon, LayoutDashboard, LucideIcon, MessageSquare, Music, Settings, Video } from "lucide-react";

export type routesType = {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: string;
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