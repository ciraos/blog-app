import type { Metadata } from "next";
import Link from "next/link";
import { PostListResponse } from "@/types/articles";
import { SiteConfigResponse } from "@/types/site-config";
import { fetchPostList } from "@/utils/article";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteConfig() {
    try {
        const res = await fetch(`${baseUrl}/public/site-config`, {
            next: { revalidate: 60 * 60 },
        });
        if (!res.ok) throw new Error("获取配置失败！");
        const data = (await res.json()) as SiteConfigResponse;
        return data.data;
    } catch (error) {
        return { APP_NAME: "博客", ICON_URL: "/favicon.ico" };
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const config = await getSiteConfig();
    return {
        title: `${config.APP_NAME} | 标签`,
        icons: { icon: config.ICON_URL },
    };
}

export default function Tags() {
    return (
        <>
            <h2 className="font-semibold text-2xl">标签</h2>

            {/*! 标签列表 */}
        </>
    );
}
