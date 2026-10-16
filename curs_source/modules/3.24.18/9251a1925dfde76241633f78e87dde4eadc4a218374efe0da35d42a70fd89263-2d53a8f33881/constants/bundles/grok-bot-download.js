var GROK_BOT_STABLE_DOWNLOAD_PERMALINKS, GROK_BOT_DOWNLOAD_INITIATION_ORIGIN, GROK_BOT_DOWNLOAD_ROUTE_PREFIX, GROK_BOT_DOWNLOAD_ATTRIBUTION_PARAMS, GROK_BOT_DOWNLOAD_ATTRIBUTION_VALUES;
export { GROK_BOT_DOWNLOAD_ATTRIBUTION_PARAMS, GROK_BOT_DOWNLOAD_ATTRIBUTION_VALUES, GROK_BOT_DOWNLOAD_INITIATION_ORIGIN, GROK_BOT_DOWNLOAD_ROUTE_PREFIX, GROK_BOT_STABLE_DOWNLOAD_PERMALINKS };
var __wakaru_init_grok_bot_download_initialized = false;
export function init_grok_bot_download() {
if (__wakaru_init_grok_bot_download_initialized) return;
__wakaru_init_grok_bot_download_initialized = true;
"use strict";
GROK_BOT_STABLE_DOWNLOAD_PERMALINKS = [
    {
        path: "/download/stable/darwin-arm64/grok-bot-bd824e1890d8b96f",
        platform: "darwin-arm64"
    },
    {
        path: "/download/stable/darwin-x64/grok-bot-101a8917d3e40552",
        platform: "darwin-x64"
    },
    {
        path: "/download/stable/win32-x64/grok-bot-cf55d121b6d17368",
        platform: "win32-x64"
    },
    {
        path: "/download/stable/win32-arm64/grok-bot-3e9a7c51d0b6f284",
        platform: "win32-arm64"
    },
    {
        path: "/download/stable/linux-x64/grok-bot-fb0a830618be0c54",
        platform: "linux-x64",
        linuxPackage: "deb"
    },
    {
        path: "/download/stable/linux-x64/grok-bot-6f47c900083d6a0c",
        platform: "linux-x64",
        linuxPackage: "AppImage"
    },
    {
        path: "/download/stable/linux-x64/grok-bot-cc18e4e726507b90",
        platform: "linux-x64",
        linuxPackage: "rpm"
    },
    {
        path: "/download/stable/linux-arm64/grok-bot-922bf0a2bf7ebaa3",
        platform: "linux-arm64",
        linuxPackage: "deb"
    },
    {
        path: "/download/stable/linux-arm64/grok-bot-8719c297a3a85a27",
        platform: "linux-arm64",
        linuxPackage: "AppImage"
    },
    {
        path: "/download/stable/linux-arm64/grok-bot-489eca1c3d454930",
        platform: "linux-arm64",
        linuxPackage: "rpm"
    },
    {
        path: "/download/stable/darwin-arm64/sand-45887649d6669879",
        platform: "darwin-arm64"
    }
];
GROK_BOT_DOWNLOAD_INITIATION_ORIGIN = "https://api2.cursor.sh";
GROK_BOT_DOWNLOAD_ROUTE_PREFIX = "/updates";
GROK_BOT_DOWNLOAD_ATTRIBUTION_PARAMS = {
    source: "source",
    cta: "cta",
    surface: "surface"
};
GROK_BOT_DOWNLOAD_ATTRIBUTION_VALUES = {
    source: [
        "bot_onboarding",
        "dashboard_grok_bot_card",
        "dashboard_sidebar_cta",
        "dashboard_team_bots",
        "glass_account_menu",
        "glass_topbar_cta",
        "ide_customize_callout",
        "in_app_launch_ad",
        "overview_checklist",
        "sand_update_required",
        "web_in_app_launch_ad"
    ],
    cta: [
        "download"
    ],
    surface: [
        "editor",
        "glass",
        "web"
    ]
};

}
