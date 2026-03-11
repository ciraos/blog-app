"use client";
import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardAction,
    CardDescription,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${baseUrl}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log(data);

            if (res.ok && data.code === 0) {
                const { accessToken, refreshToken } = data.data;

                // ✅ 关键：存进 cookie，让中间件能读到
                document.cookie = `token=${accessToken}; path=/; max-age=86400; SameSite=Lax`;
                document.cookie = `refreshToken=${refreshToken}; path=/; max-age=2592000; SameSite=Lax`;

                router.push("/admin/dashboard");
                router.refresh();
            } else {
                throw new Error(data.message || "登录失败");
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Card className="w-full max-w-md mx-auto">

                <CardHeader>
                    <CardTitle>登录</CardTitle>
                    <CardDescription>
                        请在下方输入您的电子邮件，以登录您的账户。
                    </CardDescription>
                    <CardAction>
                        <Link href="/register" className="hover:underline">注册</Link>
                    </CardAction>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="emaol">邮箱</Label>
                                <Input
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="请输入您的邮箱····"
                                    required
                                    type="email"
                                    value={email}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">密码</Label>
                                    <Link href="/forget-password" className="hover:underline">忘记密码？</Link>
                                </div>
                                <Input
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="密码"
                                    required
                                    type="password"
                                    value={password}
                                />
                            </div>
                        </div>

                        {error && <p className="text-sm text-center text-destructive">{error}</p>}

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "登录中..." : "登录"}
                        </Button>
                    </form>
                </CardContent>

            </Card>
        </>
    );
}
