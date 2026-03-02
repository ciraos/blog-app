import { NextRequest, NextResponse } from "next/server";

export default function proxy(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const pathname = req.nextUrl.pathname;

    const isDashboardPage = pathname === ('/dashboard') || pathname === ('/flink-management');
    const isLoginPage = pathname === '/login';

    //! 场景1: 无token
    if (!token) {
        //? 场景1.1 访问需要认证的页面时重定向到登录页
        if (isDashboardPage) {
            // return NextResponse.redirect(new URL('/login', req.url));
        }
        return;
    }

    //! 场景2: 有token
    if (token) {
        //? 场景2.1 在登录页时重定向到仪表板
        if (isLoginPage) {
            // return NextResponse.redirect(new URL('/dashboard', req.url));
        }
    }
}
