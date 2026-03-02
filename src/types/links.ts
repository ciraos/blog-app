
//! - 友链分类
export interface LinkCategoriesResponse {
    code: number;
    data: LinkCategoriesItem[]
    message: string;
}

interface LinkCategoriesItem {
    id: number;
    name: string;
    style: string;
    description?: string;
}

//! - 友链
export interface LinkResponse {
    code: number;
    data: LinkData[];
    message: string;
}

interface LinkData {
    id: number;
    name: string;
    url: string;
    logo: string;
    description: string;
    status: string;
    sort_order: number;
    skip_health_check: boolean;
    category: LinkCategoriesItem;
    tag: LinkTagsItem[]
    siteshot?: string;
}

interface LinkTagsItem {
    id: number;
    color: string;
    name: string;
}
