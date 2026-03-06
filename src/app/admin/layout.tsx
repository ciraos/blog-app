import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "../globals.css";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="zh-CN">
            <body>
                <div id="CIRAOS">
                    <SidebarProvider>
                        <AppSidebar />
                        <main>
                            <SidebarTrigger />
                            {children}
                        </main>
                    </SidebarProvider>
                </div>
            </body>
        </html>
    );
}
