import "../globals.css";

export default function MusicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="zh-CN">
            <body>
                <body>
                    <div id="CIRAOS">
                        {children}
                    </div>
                </body>
            </body>
        </html>
    )
}