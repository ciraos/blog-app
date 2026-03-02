// app/types/siteConfig.ts (建议单独抽离到类型文件)

/** API返回的根类型 */
export interface SiteConfigResponse {
    code: number;
    message: string;
    data: SiteConfigData;
}

interface SiteConfigData {
    ABOUT_LINK: string;
    API_URL: string;
    APP_NAME: string;
    APP_VERSION: string;
    BUILTIN_DIRECT_SERVE_EXTS: string;
    BUILTIN_MAX_FILE_SIZE: number;
    CREATIVITY: CreativityConfig;
    CUSTOM_CSS: string;
    CUSTOM_FOOTER_HTML: string;
    CUSTOM_HEADER_HTML: string;
    CUSTOM_JS: string;
    CUSTOM_POST_BOTTOM_HTML: string;
    CUSTOM_POST_TOP_HTML: string;
    CUSTOM_SIDEBAR: string;
    DEFAULT_BIG_PARAM: string;
    DEFAULT_GRAVATAR_TYPE: string;
    DEFAULT_THEME_MODE: string;
    DEFAULT_THUMB_PARAM: string;
    ENABLE_BUILTIN_GENERATOR: boolean;
    ENABLE_EXIF_EXTRACTOR: boolean;
    ENABLE_EXTERNAL_LINK_WARNING: boolean;
    ENABLE_FFMPEG_GENERATOR: boolean;
    ENABLE_LIBRAW_GENERATOR: boolean;
    ENABLE_MUSIC_COVER_GENERATOR: boolean;
    ENABLE_MUSIC_EXTRACTOR: boolean;
    ENABLE_REGISTRATION: boolean;
    ENABLE_VIPS_GENERATOR: boolean;
    EXIF_MAX_SIZE_LOCAL: number;
    EXIF_MAX_SIZE_REMOTE: number;
    EXIF_USE_BRUTE_FORCE: boolean;
    FFMPEG_CAPTURE_TIME: string;
    FFMPEG_MAX_FILE_SIZE: number;
    FFMPEG_SUPPORTED_EXTS: string;
    FRIEND_LINK_APPLY_CONDITION: string[];
    FRIEND_LINK_APPLY_CUSTOM_CODE: string;
    FRIEND_LINK_APPLY_CUSTOM_CODE_HTML: string;
    FRIEND_LINK_DEFAULTCATEGORY: number;
    FRIEND_LINK_PLACEHOLDER_DESCRIPTION: string;
    FRIEND_LINK_PLACEHOLDER_LOGO: string;
    FRIEND_LINK_PLACEHOLDER_NAME: string;
    FRIEND_LINK_PLACEHOLDER_SITESHOT: string;
    FRIEND_LINK_PLACEHOLDER_URL: string;
    GRAVATAR_URL: string;
    HOME_TOP: HomeTopConfig;
    ICON_URL: string;
    ICP_NUMBER: string;
    LIBRAW_MAX_FILE_SIZE: number;
    LIBRAW_SUPPORTED_EXTS: string;
    LOGO_HORIZONTAL_DAY: string;
    LOGO_HORIZONTAL_NIGHT: string;
    LOGO_URL: string;
    LOGO_URL_192x192: string;
    LOGO_URL_512x512: string;
    MUSIC_COVER_MAX_FILE_SIZE: number;
    MUSIC_COVER_SUPPORTED_EXTS: string;
    MUSIC_MAX_SIZE_LOCAL: number;
    MUSIC_MAX_SIZE_REMOTE: number;
    POLICE_RECORD_NUMBER: string;
    SITE_ANNOUNCEMENT: string;
    SITE_DESCRIPTION: string;
    SITE_KEYWORDS: string;
    SITE_URL: string;
    SUB_TITLE: string;
    THEME_COLOR: string;
    UPLOAD_ALLOWED_EXTENSIONS: string;
    UPLOAD_DENIED_EXTENSIONS: string;
    USER_AVATAR: string;
    VIPS_MAX_FILE_SIZE: number;
    VIPS_SUPPORTED_EXTS: string;
    about: AboutConfig;
    comment: CommentConfig;
    equipment: EquipmentConfig;
    essay: EssayConfig;
    footer: FooterConfig;
    runtime: RuntimeConfig;
    socialBar: SocialBarConfig;
    frontDesk: FrontDeskConfig;
    header: HeaderConfig;
    moments: MomentsConfig;
    music: MusicConfig;
    oauth: OAuthConfig;
    page: PageConfig;
    post: PostConfig;
    recent_comments: RecentCommentsConfig;
    sidebar: SidebarConfig;
}

/** 创造力配置 */
interface CreativityConfig {
    creativity_list: CreativityItem[];
    subtitle: string;
    title: string;
}

/** 创造力/技能列表项 */
interface CreativityItem {
    color: string;
    icon: string;
    name: string;
}

/** 首页顶部配置 */
interface HomeTopConfig {
    banner: HomeTopBanner;
    category: HomeTopCategory[];
    siteText: string;
    subTitle: string;
    title: string;
}

/** 首页顶部 banner 配置 */
interface HomeTopBanner {
    image: string;
    isExternal: boolean;
    link: string;
    tips: string;
    title: string;
}

/** 首页顶部分类项 */
interface HomeTopCategory {
    background: string;
    icon: string;
    isExternal: boolean;
    name: string;
    path: string;
}

/** 关于页 - 站点提示 */
interface AboutSiteTips {
    tips: string;
    title1: string;
    title2: string;
    word: string[];
}

/** 关于页 - 生涯项 */
interface AboutCareerItem {
    color: string;
    desc: string;
}

/** 关于页 - 生涯配置 */
interface AboutCareers {
    img: string;
    list: AboutCareerItem[];
    tips: string;
    title: string;
}

/** 关于页 - 番剧项 */
interface AboutComicItem {
    cover: string;
    href: string;
    name: string;
}

/** 关于页 - 番剧配置 */
interface AboutComic {
    list: AboutComicItem[];
    tips: string;
    title: string;
}

/** 关于页 - BUFF配置 */
interface AboutBuff {
    bottom: string;
    tips: string;
    top: string;
}

/** 关于页 - 游戏配置 */
interface AboutGame {
    background: string;
    tips: string;
    title: string;
    uid: string;
}

/** 关于页 - 关注偏好 */
interface AboutLike {
    background: string;
    bottom: string;
    tips: string;
    title: string;
}

/** 关于页 - 地图配置 */
interface AboutMap {
    background: string;
    backgroundDark: string;
    strengthenTitle: string;
    title: string;
}

/** 关于页 - 座右铭 */
interface AboutMaxim {
    bottom: string;
    tips: string;
    top: string;
}

/** 关于页 - 音乐偏好 */
interface AboutMusic {
    background: string;
    link: string;
    tips: string;
    title: string;
}

/** 关于页 - 性格配置 */
interface AboutPersonalities {
    authorName: string;
    nameUrl: string;
    personalityImg: string;
    personalityType: string;
    personalityTypeColor: string;
    photoUrl: string;
    tips: string;
}

/** 关于页 - 个人信息 */
interface AboutSelfInfo {
    content2: string;
    content3: string;
    contentYear: string;
    tips1: string;
    tips2: string;
    tips3: string;
}

/** 关于页 - 技能提示 */
interface AboutSkillsTips {
    tips: string;
    title: string;
}

/** 关于页 - 启用配置 */
interface AboutEnable {
    author_box: boolean;
    buff: boolean;
    careers: boolean;
    comic: boolean;
    custom_code: boolean;
    game: boolean;
    like_tech: boolean;
    map_and_info: boolean;
    maxim: boolean;
    music: boolean;
    page_content: boolean;
    personality: boolean;
    photo: boolean;
    skills: boolean;
    statistic: boolean;
}

/** 关于页整体配置 */
interface AboutConfig {
    page: {
        about_site_tips: AboutSiteTips;
    };
    avatar_img: string;
    avatar_skills_left: string[];
    avatar_skills_right: string[];
    buff: AboutBuff;
    careers: AboutCareers;
    comic: AboutComic;
    custom_code: string;
    custom_code_html: string;
    description: string;
    enable: AboutEnable;
    game: AboutGame;
    like: AboutLike;
    map: AboutMap;
    maxim: AboutMaxim;
    music: AboutMusic;
    name: string;
    personalities: AboutPersonalities;
    self_info: AboutSelfInfo;
    skills_tips: AboutSkillsTips;
    statistics_background: string;
    subtitle: string;
}

/** 评论配置 */
interface CommentConfig {
    allow_image_upload: boolean;
    anonymous_email: string;
    blogger_email: string;
    emoji_cdn: string;
    enable: boolean;
    limit_length: number;
    login_required: boolean;
    master_tag: string;
    page_size: number;
    placeholder: string;
    show_region: boolean;
    show_ua: boolean;
}

/** 装备配置 */
interface EquipmentBanner {
    background: string;
    description: string;
    tip: string;
    title: string;
}

/** 装备整体配置 */
interface EquipmentConfig {
    banner: EquipmentBanner;
    list: never[]; // 空数组，用 never 表示无元素
}

/** 短文配置 */
interface EssayConfig {
    button_link: string;
    button_text: string;
    home_enable: boolean;
    limit: number;
    subtitle: string;
    tips: string;
    title: string;
    top_background: string;
}

/** 页脚 - 徽章项 */
interface FooterBadgeItem {
    link: string;
    message: string;
    shields: string;
}

/** 页脚 - 徽章配置 */
interface FooterBadge {
    enable: boolean;
    list: FooterBadgeItem[];
}

/** 页脚 - 导航栏链接项 */
interface FooterBarLinkItem {
    link: string;
    text: string;
}

/** 页脚 - 导航栏配置 */
interface FooterBar {
    authorLink: string;
    cc: {
        link: string;
    };
    linkList: FooterBarLinkItem[];
}

/** 页脚 - 项目链接项 */
interface FooterProjectLinkItem {
    link: string;
    title: string;
}

/** 页脚 - 项目配置项 */
interface FooterProjectItem {
    links: FooterProjectLinkItem[];
    title: string;
}

/** 页脚 - 列表配置 */
interface FooterList {
    randomFriends: number;
}

/** 页脚 - 站长信息 */
interface FooterOwner {
    name: string;
    since: number;
}

/** 页脚整体配置 */
interface FooterConfig {
    badge: FooterBadge;
    bar: FooterBar;
    custom_text: string;
    list: FooterList;
    owner: FooterOwner;
    project: FooterProjectItem[];
}

/** 运行时配置 */
interface RuntimeConfig {
    enable: boolean;
    launch_time: string;
    offduty_description: string;
    offduty_img: string;
    work_description: string;
    work_img: string;
}

/** 社交栏 - 链接项 */
interface SocialBarLinkItem {
    icon: string;
    link: string;
    title: string;
}

/** 社交栏配置 */
interface SocialBarConfig {
    centerImg: string;
    left: SocialBarLinkItem[];
    right: SocialBarLinkItem[];
}

/** 前台 - 站点所有者 */
interface FrontDeskSiteOwner {
    email: string;
    name: string;
}

/** 前台配置 */
interface FrontDeskConfig {
    siteOwner: FrontDeskSiteOwner;
}

/** 头部 - 菜单子项 */
interface HeaderMenuItem {
    icon: string;
    isExternal: boolean;
    path: string;
    title: string;
}

/** 头部 - 菜单配置项 */
interface HeaderMenu {
    items: HeaderMenuItem[];
    title: string;
}

/** 头部 - 导航子项 */
interface HeaderNavItem {
    icon: string;
    link: string;
    name: string;
}

/** 头部 - 导航配置项 */
interface HeaderNavMenu {
    items: HeaderNavItem[];
    title: string;
}

/** 头部 - 导航整体配置 */
interface HeaderNav {
    clock: boolean;
    menu: HeaderNavMenu[];
    travelling: boolean;
}

/** 头部整体配置 */
interface HeaderConfig {
    menu: HeaderMenu[];
    nav: HeaderNav;
}

/** 朋友圈配置 */
interface MomentsConfig {
    button_link: string;
    button_text: string;
    display_limit: number;
    enable: boolean;
    subtitle: string;
    tips: string;
    title: string;
    top_background: string;
}

/** 音乐 - API配置 */
interface MusicApiConfig {
    base_url: string;
}

/** 音乐 - 播放器配置 */
interface MusicPlayerConfig {
    custom_playlist: string;
    enable: boolean;
    playlist_id: number;
}

/** 音乐 - 黑胶唱片配置 */
interface MusicVinylConfig {
    background: string;
    groove: string;
    inner: string;
    needle: string;
    outer: string;
}

/** 音乐整体配置 */
interface MusicConfig {
    api: MusicApiConfig;
    player: MusicPlayerConfig;
    vinyl: MusicVinylConfig;
}

/** OAuth - 通用配置 */
interface OAuthCommonConfig {
    display_name: string;
    enable: boolean;
}

/** OAuth - Rainbow配置 */
interface OAuthRainbowConfig {
    api_url: string;
    app_id: string;
    callback_url: string;
    enable: boolean;
    login_methods: string;
}

/** OAuth整体配置 */
interface OAuthConfig {
    logto: OAuthCommonConfig;
    oidc: OAuthCommonConfig;
    qq: OAuthCommonConfig;
    rainbow: OAuthRainbowConfig;
    wechat: OAuthCommonConfig;
}

/** 单页图片 - 页面配置 */
interface PageOneImagePageConfig {
    background: string;
    enable: boolean;
    hitokoto: boolean;
    mainTitle: string;
    subTitle: string;
    typingEffect: boolean;
}

/** 单页图片 - 整体配置 */
interface PageOneImageConfig {
    config: {
        archives: PageOneImagePageConfig;
        categories: PageOneImagePageConfig;
        home: PageOneImagePageConfig;
        tags: PageOneImagePageConfig;
    };
    hitokoto_api: string;
    typing_speed: number;
}

/** 页面整体配置 */
interface PageConfig {
    one_image: PageOneImageConfig;
}

/** 文章 - 代码块配置 */
interface PostCodeBlockConfig {
    code_max_lines: number;
}

/** 文章 - 复制配置 */
interface PostCopyConfig {
    copyright_enable: boolean;
    copyright_original: string;
    copyright_reprint: string;
    enable: boolean;
}

/** 文章 - 默认配置 */
interface PostDefaultConfig {
    cover: string;
    double_column: boolean;
    page_size: number;
}

/** 文章 - 打赏配置 */
interface PostRewardConfig {
    alipay_qr: string;
    enable: boolean;
    wechat_qr: string;
}

/** 文章整体配置 */
interface PostConfig {
    code_block: PostCodeBlockConfig;
    copy: PostCopyConfig;
    default: PostDefaultConfig;
    expiration_time: number;
    page404: {
        default_image: string;
    };
    reward: PostRewardConfig;
}

/** 最近评论 - Banner配置 */
interface RecentCommentsBanner {
    background: string;
    description: string;
    tip: string;
    title: string;
}

/** 最近评论整体配置 */
interface RecentCommentsConfig {
    banner: RecentCommentsBanner;
}

/** 侧边栏 - 作者社交配置 */
interface SidebarAuthorSocial {
    BiliBili: {
        icon: string;
        link: string;
    };
    Github: {
        icon: string;
        link: string;
    };
}

/** 侧边栏 - 作者配置 */
interface SidebarAuthorConfig {
    description: string;
    enable: boolean;
    skills: string[];
    social: SidebarAuthorSocial;
    statusImg: string;
}

/** 侧边栏 - 自定义配置 */
interface SidebarCustomConfig {
    showInPost: boolean;
}

/** 侧边栏 - 站点信息 */
interface SidebarSiteInfoConfig {
    runtimeEnable: boolean;
    totalPostCount: number;
    totalWordCount: number;
}

/** 侧边栏 - 标签配置 */
interface SidebarTagsConfig {
    enable: boolean;
    highlight: never[];
}

/** 侧边栏 - TOC配置 */
interface SidebarTocConfig {
    collapseMode: boolean;
}

/** 侧边栏 - 天气配置 */
interface SidebarWeatherConfig {
    default_rectangle: boolean;
    enable: boolean;
    enable_page: string;
    ip_api_key: string;
    loading: string;
    qweather_api_host: string;
    qweather_key: string;
    rectangle: string;
}

/** 侧边栏 - 微信配置 */
interface SidebarWechatConfig {
    backFace: string;
    blurBackground: string;
    enable: boolean;
    face: string;
}

/** 侧边栏整体配置 */
interface SidebarConfig {
    archive: {
        displayMonths: number;
    };
    author: SidebarAuthorConfig;
    custom: SidebarCustomConfig;
    siteinfo: SidebarSiteInfoConfig;
    tags: SidebarTagsConfig;
    toc: SidebarTocConfig;
    weather: SidebarWeatherConfig;
    wechat: SidebarWechatConfig;
}
