import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import "../page-content.css";

import RightSide from "@/components/(blog)/rightside";
import LogoutButton1 from "@/components/buttons/logout1";
import { ModeToggle } from "@/components/buttons/modetoggle";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    // console.log(data);
    return data.data;
  } catch (error) {
    return { APP_NAME: "博客", ICON_URL: "/favicon.ico", error };
  }
}

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const isLoggedin = !!token;
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
                <nav className="nav flex items-center justify-start">
                  <ul className="navlist">
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
                    <ModeToggle />
                  </ul>
                  {/* <div className="flex items-center justify-around gap-1"> */}
                  {isLoggedin ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Avatar>
                            <AvatarImage src="/favicon.ico" alt="shadcn" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-32">
                        <DropdownMenuGroup>
                          <DropdownMenuItem><Link href="/admin/dashboard">仪表盘</Link></DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem variant="destructive"><LogoutButton1 /></DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      className="py-1 px-2 hover:bg-[#39c5bb] hover:rounded-lg"
                      href="/login"
                    >
                      登录/注册
                    </Link>
                  )}
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
