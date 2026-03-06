import "../globals.css";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="zh-CN"
        >
            <body
                className="w-full min-h-screen flex items-center justify-center"
            >
                {/* <div id="CIRAOS"> */}
                {children}
                {/* </div> */}
            </body>
        </html>
    )
}
