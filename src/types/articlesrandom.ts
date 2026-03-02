
//!
export interface ArticlesRandomResponse {
    code: number;
    data: articlesRandomItems[],
    message: string;
}

interface articlesRandomItems {
    abbrlink: string;
    content_html: string;
    copyright_md: string;
    copyright: boolean;
    copyright_author: string;
    copyright_author_href: string;
    copyright_url: string;
    created_at: string;
    home_sort: number;
    id: string;
    ip_location: string;
    is_primary_color_manual: boolean;
    keywords: string;
    pin_sort: number;
    post_categories: PostCategories[];
    post_tags: PostTags[];
    primary_color: string;
    reading_time: number;
    status: string;
    summaries: string[];
    title: string;
    top_img_url: string;
    updated_at: string;
    view_count: number;
    word_count: number;
}

interface PostCategories {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description: string;
    count: number;
    is_series: boolean;
}

interface PostTags {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    count: number;
}
