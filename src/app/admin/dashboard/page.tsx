import type { Metadata } from "next";
import { SiteConfigResponse } from "@/types/site-config";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
    title: "仪表盘",
    description: "",
};

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

export default async function Dashboard() {
    const config = await getSiteConfigs();

    return (
        <>
            <div className="text-2xl font-medium">欢迎回来，{config?.frontDesk.siteOwner.name}！</div>
        </>
    )
}
