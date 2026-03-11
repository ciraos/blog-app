import { Inter } from "next/font/google";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import "../page-content.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/buttons/modetoggle";

const inter = Inter({ subsets: ["latin"] });

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

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
          // enableColorScheme
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
                <h1 className="logo">葱苓小筑</h1>
                <nav className="nav">
                  <ul className="navlist">
                    <li className="btli"><Link href="/">首页</Link></li>
                    <li className="btli"><Link href="#">文章</Link>
                      <ul className="droplist">
                        <li><Link href="/archives">时间轴</Link></li>
                        <li><Link href="/categories">分类</Link></li>
                        <li><Link href="/tags">标签</Link></li>
                      </ul>
                    </li>
                    <li className="btli"><Link href="#">友联</Link>
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
                  <ModeToggle />
                </nav>

              </div>
            </header>

            <main className="main container">
              {children}
            </main>

            <footer className="footer">
              <Link className="hover:underline" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">皖ICP备2023018992号-1</Link>
              <p>宝剑锋从磨砺出，梅花香自苦寒来。</p>
            </footer>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
