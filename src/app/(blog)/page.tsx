import type { Metadata } from "next";
import Link from "next/link";
import moment from "moment";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconFolderCode } from "@tabler/icons-react";
import { ArrowUpRightIcon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  // PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
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
    console.error(error);
    return { APP_NAME: "博客", ICON_URL: "/favicon.ico", error };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: `${config.APP_NAME} | 首页`,
    icons: { icon: config.ICON_URL },
  };
}

// ✅ Next.js 15+ 正确的 searchParams 写法
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageSize = 10; // ✅ 固定每页10篇

  // ✅ 传给后端：页码 + 每页数量
  const postData: PostListResponse = await fetchPostList(currentPage, pageSize);
  const { code, data, message } = postData;

  if (code !== 200) {
    return <div className="py-10 text-center">Error: {message}</div>;
  }

  const { list: postList, total } = data;
  const totalPages = Math.ceil(total / pageSize);
  // console.log(total);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <h2 className="text-xl font-bold">最新文章</h2>

      {total === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <IconFolderCode />
            </EmptyMedia>
            <EmptyTitle>暂无文章</EmptyTitle>
            <EmptyDescription>
              你还没有文章呢，快去创建一个吧！
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row justify-center gap-2">
            <Button
              variant="link"
            >
              <Link href="/admin/dashboard">写文章</Link>
            </Button>
            <Button
              variant="link"
            >
              <Link href="/admin/dashboard">导入文章</Link>
            </Button>
          </EmptyContent>
          <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <Link href="#">了解更多<ArrowUpRightIcon /></Link>
          </Button>
        </Empty>
      ) : (
        <ul className="post-list">
          {postList.map((post) => {
            const summaryText = post.summaries?.join(" ") || "摘要为空捏~";
            return (
              <li key={post.id} className="post-item">
                <h3 className="post-title line-clamp-1">
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </h3>

                <div className="post-meta">
                  {moment(post.created_at).format("YYYY-MM-DD")}
                  {" | "} Views: {post.view_count}
                  {" | "} {post.reading_time} min
                </div>

                <p className="post-excerpt line-clamp-2">{summaryText}</p>
              </li>
            );
          })}
        </ul>
      )}

      {/* 分页 */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>

            {currentPage > 1 ? (
              <PaginationItem>
                <PaginationPrevious href={`/?page=${currentPage - 1}`} />
              </PaginationItem>
            ) : (
              <span className="px-3 py-1 border rounded opacity-50">上一页</span>
            )}

            <span className="text-sm">{currentPage}/{totalPages}</span>
            <span className="text-sm"></span>

            {/* <PaginationItem><PaginationEllipsis /></PaginationItem> */}

            {currentPage < totalPages ? (
              <PaginationItem>
                <PaginationNext href={`/?page=${currentPage + 1}`} />
              </PaginationItem>
            ) : (
              <span className="px-3 py-1 border rounded opacity-50">下一页</span>
            )}

          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
