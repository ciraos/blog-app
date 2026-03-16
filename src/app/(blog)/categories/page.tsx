/*
 * @description: 标签页面
 * Server page
*/
import type { Metadata } from "next";
import Link from "next/link";
import { PostTagsResponse } from "@/types/psottags";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
    title: "文章 | 分类",
};

//? 随机颜色类（保证好看不刺眼）
const tagColors = [
    "bg-blue-100 text-blue-700 hover:bg-blue-200",
    "bg-green-100 text-green-700 hover:bg-green-200",
    "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
    "bg-purple-100 text-purple-700 hover:bg-purple-200",
    "bg-pink-100 text-pink-700 hover:bg-pink-200",
    "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
    "bg-orange-100 text-orange-700 hover:bg-orange-200",
    "bg-red-100 text-red-700 hover:bg-red-200",
];

// 获取标签列表
async function getPostTags(): Promise<any[]> {
    try {
        const response = await fetch(`${baseUrl}/post-tags?sort=name`, { next: { revalidate: 60 } });
        const res = await response.json() as PostTagsResponse;
        return res.data || [];
    } catch (error) {
        console.error("获取分类失败：", error);
        return [];
    }
}

export default async function Categories() {
    const tags = await getPostTags();

    return (
        <>
            {/* 标题 */}
            <h2 className="font-bold text-3xl mb-10 text-gray-800">
                🏷️ 文章分类
            </h2>

            {!tags.length ? (
                <p className="text-center text-gray-500">暂无分类</p>
            ) : (
                <div className="flex flex-wrap gap-3 justify-center">
                    {tags.map((item, index) => {
                        const colorClass = tagColors[index % tagColors.length];
                        const count = item.count || 0;

                        return (
                            <Link
                                key={item.id}
                                href={`/tags/${item.name}`} // 跳转到标签详情页
                                className={`
                                    ${colorClass} px-4 py-2 rounded-full text-sm font-medium
                                    transition-all duration-300 hover:scale-105 hover:shadow-md
                                    flex items-center gap-1.5
                                `}
                            >
                                {item.name}
                                <span className="bg-white bg-opacity-60 px-1.5 rounded-full text-xs">
                                    {count}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
}
