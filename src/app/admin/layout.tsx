import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "../globals.css";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="zh-CN">
            <body>
                <SidebarProvider id="CIRAOS">
                    <AppSidebar />
                    <main>
                        <SidebarTrigger />
                        <div className="py-3 px-5">{children}</div>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
