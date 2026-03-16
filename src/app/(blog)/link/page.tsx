/*
 * server Page
*/
import type { Metadata } from "next";
import Link from "next/link";
import {
    LinkCategoriesResponse,
    LinkResponse
} from "@/types/links";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
    title: "友情链接",
};

export default async function FriendLink() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-12 text-gray-800">🔗 友情链接</h2>

            {/* 友情链接 */}
        </>
    )
}
