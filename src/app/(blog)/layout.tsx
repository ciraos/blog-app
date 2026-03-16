import { Inter } from "next/font/google";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import "../page-content.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/buttons/modetoggle";
import RightSide from "@/components/(blog)/rightside";
import { SiteConfigResponse } from "@/types/site-config";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const inter = Inter({ subsets: ["latin"] });

async function getSiteConfig() {
  try {
    const res = await fetch(`${baseUrl}/public/site-config`, {
      next: { revalidate: 60 * 60 },
    });
    if (!res.ok) throw new Error("获取配置失败！");
    const data = (await res.json()) as SiteConfigResponse;
    console.log(data);
    return data.data;
  } catch (error) {
    return { APP_NAME: "博客", ICON_URL: "/favicon.ico", error };
  }
}

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const config = await getSiteConfig();

  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
    >
      {/* <head /> */}
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableColorScheme
          enableSystem
        >
          <div id="CIRAOS">
            <NextTopLoader
              color="#39C5BB"
              crawl
              easing="ease"
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              showSpinner={false}
            />

            <header className="header">
              <div className="container">
                <Link href="/" className="logo font-semibold">葱苓小筑</Link>
                <nav className="nav">
                  <ul className="navlist">
                    {/* <li className="btli"><Link href="/">首页</Link></li> */}
                    <li className="btli"><Link href="/posts">文章</Link>
                      <ul className="droplist">
                        <li><Link href="/archives">时间轴</Link></li>
                        <li><Link href="/categories">分类</Link></li>
                        <li><Link href="/tags">标签</Link></li>
                      </ul>
                    </li>
                    <li className="btli"><div>友联</div>
                      <ul className="droplist">
                        <li>
                          <Link href="/link">友链</Link>
                        </li>
                        <li>
                          <Link href="/fcircle"></Link>
                        </li>
                        <li>
                          <Link href="/talk"></Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* <ModeToggle /> */}
                </nav>
              </div>
            </header>

            <main className="main container">
              {children}
              {/* <div className="my-5 border-t"></div> */}
              {/* <AppCalendar /> */}
            </main>

            <footer className="footer">
              <Link className="hover:underline" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">皖ICP备2023018992号-1</Link>
              <p>宝剑锋从磨砺出，梅花香自苦寒来。</p>
            </footer>

            <RightSide />

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
