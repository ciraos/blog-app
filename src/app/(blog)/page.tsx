import type { Metadata } from "next";
import Link from "next/link";
import moment from "moment";
import { PostListResponse } from "@/types/articles";
import { SiteConfigResponse } from "@/types/site-config";
import { fetchPostList } from "@/utils/article";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteConfig() {
  const k = await fetch(`${baseUrl}/public/site-config`);
  const res = await k.json() as SiteConfigResponse;
  return res.data;
}

const a = await getSiteConfig();

export const metadata: Metadata = {
  title: `${a.APP_NAME} | 首页`,
  icons: `${a.ICON_URL}`
};

export default async function Home() {
  const postData: PostListResponse = await fetchPostList();
  const { code, message, data } = postData;
  const {
    list:
    postList,
    total,
    // page,
    pageSize
  } = data;

  if (code !== 200) {
    return <div>获取失败：{message}</div>;
  }

  return (
    <>
      <h2 style={{ marginBottom: "30px", fontSize: "1.6rem" }}>最新文章</h2>

      <ul className="post-list">
        {postList.map((post, index) => (
          <li key={index} className="post-item">
            <h3 className="post-title">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <div className="post-meta">
              {post.created_at ? moment(post.created_at).format('YYYY-MM-DD') : '未知'} | 作者：{ } | 阅读量：{post.view_count} | 阅读时间：{post.reading_time}分钟
            </div>
            <p className="post-excerpt">{post.summaries}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
