import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
    title: "登录",
};

export default function Login() {
    return (
        <>
            <Card className="w-full max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle>登录</CardTitle>
                    <CardDescription>
                        请在下方输入您的电子邮件，以登录您的账户。
                    </CardDescription>
                    <CardAction>
                        {/* <Button variant="link">注册</Button> */}
                        <Link href="/register" className="hover:underline">注册</Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">邮箱</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">密码</Label>
                                    <a
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        忘记密码了？
                                    </a>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        登录
                    </Button>
                    <Button className="w-full cursor-not-allowed" variant="outline">
                        通过 Google 登录
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
