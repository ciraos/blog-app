import {
    NextRequest,
    NextResponse
} from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: "邮箱和密码不能为空" },
                { status: 400 }
            );
        }
        if (!baseUrl) {
            return NextResponse.json(
                { success: false, message: "服务器配置错误" },
                { status: 500 }
            );
        }

        const a = await fetch(`${baseUrl}/auth/login`, {
            "method": "POST",
            'headers': { "Content-Type": "application/json" },
            "body": JSON.stringify({ email, password }),
        });

        const data = await a.json();

        if (!a.ok) {
            return NextResponse.json(
                { success: false, message: data.message || "登录失败" },
                { status: a.status }
            );
        }

        if (!data.data || !data.data.accessToken) {
            return NextResponse.json(
                { success: false, message: "登录响应格式错误" },
                { status: 500 }
            );
        }

        const res = NextResponse.json(
            { success: true }
        );

        res.cookies.set("token", data.data.accessToken, { path: "/", maxAge: 86400, httpOnly: true, sameSite: "strict" });
        res.cookies.set("refresh_token", data.data.refreshToken, { path: "/", maxAge: 86400, httpOnly: true, sameSite: "strict" })

        return res;
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "服务器内部错误" },
            { status: 500 }
        );
    }
}
