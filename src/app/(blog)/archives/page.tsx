/*
 * @Description: 归档
 * @author: Ciraos
 * Server Component
*/
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PostListResponse } from "@/types/articles";
import moment from "moment";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
    title: "文章 | 归档",
};

// 获取文章列表
async function getPostLists() {
    try {
        const res = await fetch(`${baseUrl}/public/articles`, { next: { revalidate: 60 } });
        const data = await res.json() as PostListResponse;
        return data.data.list || [];
    } catch (error) {
        console.error("获取文章失败:", error);
        return [];
    }
}

//! 按年份分组工具函数
function groupPostsByYear(posts: any[]) {
    const grouped: Record<string, any[]> = {};
    posts.forEach(post => {
        const year = moment(post.created_at).format("YYYY");
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(post);
    });
    // 年份降序排列（最新的在上）
    return Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a)).map(year => ({
        year,
        posts: grouped[year]
    }));
}

export default async function Archives() {
    const posts = await getPostLists();
    const groupedPosts = groupPostsByYear(posts);

    return (
        <>
            <h2 className="text-3xl font-bold mb-12 text-gray-800">📁 文章归档</h2>

            {!posts?.length ? (
                <p className="text-center text-gray-500">暂无文章</p>
            ) : (
                <div className="relative">
                    {/* 时间轴竖线 */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 z-0" />

                    {/* 按年份渲染 */}
                    {groupedPosts.map((group) => (
                        <div key={group.year} className="mb-10 relative">
                            {/* 年份标签 */}
                            <div className="flex items-center mb-6 relative">
                                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center z-10">
                                    <span className="text-white text-sm font-semibold">{group.year}</span>
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-700">{group.year} 年</h3>
                            </div>

                            {/* 该年份下的文章列表 */}
                            <div className="ml-8 space-y-5">
                                {group.posts.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/posts/${item.id}`}
                                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                    >
                                        {/* 时间轴小圆点 */}
                                        <div className="relative w-2 h-2 mt-4 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors" />

                                        {/* 封面图 */}
                                        <div className="shrink-0">
                                            <Image
                                                alt={item.title}
                                                src={item.cover_url}
                                                width={120}
                                                height={68}
                                                className="w-32 h-20 object-cover rounded-lg shadow-sm"
                                            />
                                        </div>

                                        {/* 文章信息 */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-500 mb-1">
                                                {moment(item.created_at).format("YYYY-MM-DD")}
                                            </p>
                                            <h4 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 truncate">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
