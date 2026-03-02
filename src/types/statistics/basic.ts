
//! 基础统计数据
export interface statisticsBasic {
    code: number;
    data: {
        today_visitors: number;
        today_views: number;
        yesterday_visitors: number;
        yesterday_views: number;
        month_views: number;
        year_views: number;
    };
    message: string;
}
