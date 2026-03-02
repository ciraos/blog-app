import Link from "next/link";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/buttons/modetoggle";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="CIRAOS">
            <div className="header w-4/5 h-16 mx-auto py-0 px-5 rounded-xl flex items-center justify-between shadow-md hover:shadow-xl">
              <Link href="/" className="text-lg font-semibold">葱苓小筑</Link>
              <div className="menu">

              </div>
              <div className="buttons">
                <ModeToggle />
              </div>
            </div>
            <main id="main" className="main">
              {children}
            </main>
            <footer className="footer w-full h-16 py-4 px-6 text-center">
              <Link className="hover:underline" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">皖ICP备2023018992号-1</Link>
              <p>宝剑锋从磨砺出，梅花香自苦寒来。</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
