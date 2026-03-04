import { NextRequest, NextResponse } from "next/server";

// const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const nsuuUrl = process.env.NEXT_PUBLIC_NSUUU_API_URL;
const nsuuKey = process.env.NEXT_PUBLIC_NSUUU_ADMIN_API_KEY;

export async function GET(req: NextRequest) {
    const { ip } = await req.json();

    try {
        const i = await fetch(`${nsuuUrl}/ipip`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${nsuuKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ip })
        })
    } catch (error) {
        return NextResponse.json(
            {
                status: 500,
                success: false,
                message: "服务器配置错误",
            }
        );
    }
}
