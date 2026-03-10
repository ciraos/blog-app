/*
 * @description: 评论系统
 * @ server component
*/
import { Icon } from "@iconify/react";
import CommentInputArea from "./commentinputarea";
import { CommentResponse } from "@/types/comments";

interface CommentProps {
    id: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function Comment({ id }: CommentProps) {
    const commentCount = 0;
    try {
        const g = await fetch(`${baseUrl}/public/comments?target_path=/posts/${id}`);
        const res = await g.json() as CommentResponse;
        const commentCount = res.data.total_with_children;
        // const content = res.data.list.map;
        // console.log(res);
        // console.log(content);
        // console.log('本页连同回复一共有' + commentCount + '条评论。');
    } catch (error) {
        console.error("加载评论错误:", error);
    }

    return (
        <></>
    );
}
