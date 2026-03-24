import Link from "next/link";
import LogoutButton from "@/components/buttons/logout";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarBadge
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    ChevronDown,
    ChevronsUpDown
} from "lucide-react";
import { SiteConfigResponse } from "@/types/site-config";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteConfigs() {
    try {
        const i = await fetch(`${baseUrl}/public/site-config`);
        if (!i.ok) throw new Error("获取配置失败！");
        const data = (await i.json()) as SiteConfigResponse;
        // console.log(data);
        return data.data;
    } catch (error) {
        // return { APP_NAME: "博客", ICON_URL: "/favicon.ico", error };
        console.error(error);
    }
}

export async function AppSidebar() {
    const config = await getSiteConfigs();

    return (
        <Sidebar>

            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    Select Workspace
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem>
                                    <span>Acme Inc</span>
                                    {/* <LogoutButton /> */}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent></SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <div className="flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src={`${config?.LOGO_URL}`} />
                                            <AvatarFallback>U</AvatarFallback>
                                            {/* <AvatarBadge className="bg-green-600 dark:bg-green-800" /> */}
                                        </Avatar>
                                        <div>
                                            <div className="text-xs">{config?.frontDesk.siteOwner.name}</div>
                                            <div className="text-xs font-semibold">{config?.frontDesk.siteOwner.email}</div>
                                        </div>
                                    </div>
                                    <ChevronsUpDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>a</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

            {/* <LogoutButton /> */}
        </Sidebar>
    )
}
