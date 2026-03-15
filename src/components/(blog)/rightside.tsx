"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import {
    CircleFadingArrowUpIcon,
    BookMarkedIcon,
    MessageSquareIcon,
    RefreshCwIcon,
} from "lucide-react";

export default function RightSide() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isPostPage = pathname.startsWith("/posts/");

    return (
        <div
            className="fixed right-6 bottom-6 flex flex-col items-center gap-2"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* 弹出的子按钮：向上弹出 ✅✅✅ */}
            <div
                className={`flex flex-col gap-2 items-center transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
            >
                {/* 刷新按钮 */}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="icon" variant="outline">
                                <RefreshCwIcon className="w-4 h-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left">刷新</TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                {/* 评论按钮 */}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="icon" variant="outline">
                                <MessageSquareIcon className="w-4 h-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left">评论</TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                {/* 目录按钮 */}
                {isPostPage && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size="icon" variant="outline">
                                    <BookMarkedIcon className="w-4 h-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="left">目录</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>

            {/* 主按钮（回到顶部） */}
            <Button size="icon" variant="outline" className="shadow-md">
                <CircleFadingArrowUpIcon className="w-5 h-5" />
            </Button>
        </div>
    );
}
