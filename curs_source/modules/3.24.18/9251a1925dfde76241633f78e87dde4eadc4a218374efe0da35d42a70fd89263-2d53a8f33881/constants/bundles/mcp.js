import { mcpOAuthLoopbackCallbackUrlForPort, mcpOAuthLoopbackRedirectUrl } from "../../utils_pb_exports.js";
var MCP_REDACTED_VALUE, MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY, ORIGIN_MCP_SERVER_URL, ORIGIN_MCP_BUILTIN_TARGET, ORIGIN_MCP_READONLY_SERVER_URL, MCP_OAUTH_GROK_WEB_CALLBACK_URL, MCP_OAUTH_X_APP_CALLBACK_URL, GOOGLE_WORKSPACE_POLICY_BASE, X_MONEY_POLICY_BASE, HUBSPOT_POLICY_BASE, HOSTED_MCP_ROUTING_REPORT_STATE_COMMAND, REST_MCP_HOST, REST_MCP_CURSOR_AUTH_HEADER, REST_MCP_SCM_ERROR_CODES, REST_MCP_SCM_NOT_CONNECTED_REASONS, CURSOR_SCM_MCP_SERVER_IDENTIFIER_PREFIX, CURSOR_SCM_MCP_PROVIDERS, ADMIN_TOOL_POLICY_BUILTIN_MCP_PROVIDERS, REST_MCP_SCM_ERROR_CODE_SET, REST_MCP_SCM_NOT_CONNECTED_REASON_SET, CURSOR_SCM_SSO_AUTHORIZATION_PAGES, GROK_CONNECTORS_POLICY_BASE, MCP_OAUTH_PROVIDER_POLICIES, SHOPIFY_MERCHANT_MCP_SHOP_RESOURCE_PATH, GOOGLE_WORKSPACE_MCP_HOSTS, MCP_OAUTH_CLIENT_LOGO_URI, MCP_OAUTH_EXTENSION_ID, MCP_OAUTH_CALLBACK_PATH, MCP_OAUTH_RETURN_PATH, MCP_OAUTH_DESKTOP_RETURN_URL, MCP_OAUTH_GROK_BOT_RETURN_URL, MCP_OAUTH_SAND_RETURN_URL, MCP_OAUTH_LEGACY_SAND_RETURN_URL, MCP_OAUTH_POST_AUTH_RETURN_URLS, MCP_OAUTH_CANONICAL_DESKTOP_URL_PROTOCOLS, MCP_OAUTH_PORTAL_CALLBACK_URL, MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL, MCP_OAUTH_STATE_ACCOUNT_MISMATCH_MESSAGE, MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL, MCP_OAUTH_LOOPBACK_CALLBACK_URL, MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE, MCP_OAUTH_STATE_TARGET_GROK_WEB, MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK, MCP_OAUTH_RELAYED_LOOPBACK_HEADER, MCP_OAUTH_STATE_TARGET_X_APP, MCP_OAUTH_STATE_TARGET_MARKER, MCP_OAUTH_LOOPBACK_FALLBACK_PORTS, MCP_OAUTH_STATE_DESKTOP_LOOPBACK_SUFFIX, MCP_OAUTH_STATE_TARGET_URLS, MCP_OAUTH_APP_REDIRECT_TARGETS, GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, MCP_OAUTH_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, LEGACY_GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, MCP_OAUTH_LEGACY_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, MCP_OAUTH_PORTAL_RETURN_PATH_PREFIXES, MCP_OAUTH_LOOPBACK_IPV4_HOSTNAME, MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_URL, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_REDIRECT_URIS, MCP_OAUTH_CURSOR_CLIENT_BRANDING, MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_GROK_BOT_CLIENT_BRANDING;
export { ADMIN_TOOL_POLICY_BUILTIN_MCP_PROVIDERS, CURSOR_SCM_MCP_PROVIDERS, CURSOR_SCM_MCP_SERVER_IDENTIFIER_PREFIX, CURSOR_SCM_SSO_AUTHORIZATION_PAGES, GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, GOOGLE_WORKSPACE_MCP_HOSTS, GOOGLE_WORKSPACE_POLICY_BASE, GROK_CONNECTORS_POLICY_BASE, HOSTED_MCP_ROUTING_REPORT_STATE_COMMAND, HUBSPOT_POLICY_BASE, LEGACY_GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID, MCP_OAUTH_APP_REDIRECT_TARGETS, MCP_OAUTH_CALLBACK_PATH, MCP_OAUTH_CANONICAL_DESKTOP_URL_PROTOCOLS, MCP_OAUTH_CLIENT_LOGO_URI, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_REDIRECT_URIS, MCP_OAUTH_CLIENT_METADATA_DOCUMENT_URL, MCP_OAUTH_CURSOR_CLIENT_BRANDING, MCP_OAUTH_DESKTOP_RETURN_URL, MCP_OAUTH_EXTENSION_ID, MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_CLIENT_BRANDING, MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH, MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, MCP_OAUTH_GROK_BOT_RETURN_URL, MCP_OAUTH_GROK_WEB_CALLBACK_URL, MCP_OAUTH_LEGACY_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL, MCP_OAUTH_LEGACY_SAND_RETURN_URL, MCP_OAUTH_LOOPBACK_CALLBACK_URL, MCP_OAUTH_LOOPBACK_FALLBACK_PORTS, MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL, MCP_OAUTH_LOOPBACK_IPV4_HOSTNAME, MCP_OAUTH_PORTAL_CALLBACK_URL, MCP_OAUTH_PORTAL_RETURN_PATH_PREFIXES, MCP_OAUTH_POST_AUTH_RETURN_URLS, MCP_OAUTH_PROVIDER_POLICIES, MCP_OAUTH_RELAYED_LOOPBACK_HEADER, MCP_OAUTH_RETURN_PATH, MCP_OAUTH_SAND_RETURN_URL, MCP_OAUTH_STATE_ACCOUNT_MISMATCH_MESSAGE, MCP_OAUTH_STATE_DESKTOP_LOOPBACK_SUFFIX, MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK, MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE, MCP_OAUTH_STATE_TARGET_GROK_WEB, MCP_OAUTH_STATE_TARGET_MARKER, MCP_OAUTH_STATE_TARGET_URLS, MCP_OAUTH_STATE_TARGET_X_APP, MCP_OAUTH_X_APP_CALLBACK_URL, MCP_REDACTED_VALUE, MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY, ORIGIN_MCP_BUILTIN_TARGET, ORIGIN_MCP_READONLY_SERVER_URL, ORIGIN_MCP_SERVER_URL, REST_MCP_CURSOR_AUTH_HEADER, REST_MCP_HOST, REST_MCP_SCM_ERROR_CODES, REST_MCP_SCM_ERROR_CODE_SET, REST_MCP_SCM_NOT_CONNECTED_REASONS, REST_MCP_SCM_NOT_CONNECTED_REASON_SET, SHOPIFY_MERCHANT_MCP_SHOP_RESOURCE_PATH, X_MONEY_POLICY_BASE };
var __wakaru_init_mcp_initialized = false;
export function init_mcp() {
if (__wakaru_init_mcp_initialized) return;
__wakaru_init_mcp_initialized = true;
"use strict";
MCP_REDACTED_VALUE = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY = "cursor/requiresConfirmation";
ORIGIN_MCP_SERVER_URL = "https://api.origin.cursor.com/mcp";
ORIGIN_MCP_BUILTIN_TARGET = {
    identifier: "cursor-origin",
    serverUrl: "https://api.origin.cursor.com/mcp"
};
ORIGIN_MCP_READONLY_SERVER_URL = "https://api.origin.cursor.com/mcp/readonly";
MCP_OAUTH_GROK_WEB_CALLBACK_URL = "https://grok.com/connectors-oauth-exchange-code/";
MCP_OAUTH_X_APP_CALLBACK_URL = "https://x.com/i/connectors/oauth_callback";
GOOGLE_WORKSPACE_POLICY_BASE = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: true,
    rejectsCustomSchemeRedirects: true,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
};
X_MONEY_POLICY_BASE = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: true,
    unauthenticatedConnect: false,
    backendOnlyTokenExchange: true,
    registeredAppRedirectUris: [
        MCP_OAUTH_GROK_WEB_CALLBACK_URL,
        MCP_OAUTH_X_APP_CALLBACK_URL
    ]
};
HUBSPOT_POLICY_BASE = {
    provider: "hubspot",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: true,
    unauthenticatedConnect: false,
    backendOnlyTokenExchange: true
};
HOSTED_MCP_ROUTING_REPORT_STATE_COMMAND = "cursor.hostedMcpRouting.reportState";
REST_MCP_HOST = "api.cursor.com";
REST_MCP_CURSOR_AUTH_HEADER = "x-cursor-auth";
REST_MCP_SCM_ERROR_CODES = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
};
REST_MCP_SCM_NOT_CONNECTED_REASONS = {
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
};
CURSOR_SCM_MCP_SERVER_IDENTIFIER_PREFIX = "cursor-";
CURSOR_SCM_MCP_PROVIDERS = [
    "github",
    "origin"
];
ADMIN_TOOL_POLICY_BUILTIN_MCP_PROVIDERS = [
    "github"
];
REST_MCP_SCM_ERROR_CODE_SET = new Set(Object.values(REST_MCP_SCM_ERROR_CODES));
REST_MCP_SCM_NOT_CONNECTED_REASON_SET = new Set(Object.values(REST_MCP_SCM_NOT_CONNECTED_REASONS));
CURSOR_SCM_SSO_AUTHORIZATION_PAGES = {
    github: {
        hostname: "github.com",
        pathname: /^\/orgs\/[^/]+\/sso$/
    }
};
GROK_CONNECTORS_POLICY_BASE = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: true,
    unauthenticatedConnect: false,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
};
MCP_OAUTH_PROVIDER_POLICIES = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...GOOGLE_WORKSPACE_POLICY_BASE,
            scopes: [
                "https://www.googleapis.com/auth/gmail.readonly",
                "https://www.googleapis.com/auth/gmail.compose",
                "https://www.googleapis.com/auth/gmail.modify"
            ]
        }
    ],
    [
        "drivemcp.googleapis.com",
        {
            ...GOOGLE_WORKSPACE_POLICY_BASE,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...GOOGLE_WORKSPACE_POLICY_BASE,
            scopes: [
                "https://www.googleapis.com/auth/calendar.events",
                "https://www.googleapis.com/auth/calendar.calendarlist.readonly",
                "https://www.googleapis.com/auth/calendar.events.readonly",
                "https://www.googleapis.com/auth/calendar.events.freebusy"
            ]
        }
    ],
    [
        "docsmcp.googleapis.com",
        {
            ...GOOGLE_WORKSPACE_POLICY_BASE,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...GOOGLE_WORKSPACE_POLICY_BASE,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...GOOGLE_WORKSPACE_POLICY_BASE,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...GOOGLE_WORKSPACE_POLICY_BASE,
            scopes: [
                "https://www.googleapis.com/auth/bigquery"
            ]
        }
    ],
    [
        "api.x.com",
        {
            provider: "x",
            clientRegistration: "static",
            unauthenticatedConnect: false,
            rejectsCustomSchemeRedirects: false,
            scopes: [
                "tweet.read",
                "users.read",
                "follows.read",
                "space.read",
                "mute.read",
                "like.read",
                "list.read",
                "list.write",
                "block.read",
                "block.write",
                "bookmark.read",
                "bookmark.write",
                "dm.read",
                "dm.write",
                "developer.billing.write",
                "developer.write",
                "offline.access"
            ],
            pinsScopesOverConfiguredScopes: true
        }
    ],
    [
        "mcp.money-dev.x.com",
        X_MONEY_POLICY_BASE
    ],
    [
        "mcp.money-staging.x.com",
        X_MONEY_POLICY_BASE
    ],
    [
        "mcp.money.x.com",
        X_MONEY_POLICY_BASE
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        GROK_CONNECTORS_POLICY_BASE
    ],
    [
        "connectors-gateway.grok.com",
        GROK_CONNECTORS_POLICY_BASE
    ],
    [
        "mcp.hubspot.com",
        HUBSPOT_POLICY_BASE
    ],
    [
        "setup.shopify.com",
        {
            provider: "shopify",
            clientRegistration: "static",
            unauthenticatedConnect: true,
            rejectsCustomSchemeRedirects: false
        }
    ]
]);
SHOPIFY_MERCHANT_MCP_SHOP_RESOURCE_PATH = /^\/shops\/[A-Za-z0-9-]+\/mcp$/;
GOOGLE_WORKSPACE_MCP_HOSTS = new Set([
    ...MCP_OAUTH_PROVIDER_POLICIES
].filter(([, policy])=>policy.provider === "google-workspace").map(([hostname3])=>hostname3));
MCP_OAUTH_CLIENT_LOGO_URI = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg";
MCP_OAUTH_EXTENSION_ID = "anysphere.cursor-mcp";
MCP_OAUTH_CALLBACK_PATH = "/oauth/callback";
MCP_OAUTH_RETURN_PATH = "/oauth/return";
MCP_OAUTH_DESKTOP_RETURN_URL = `cursor://${MCP_OAUTH_EXTENSION_ID}${MCP_OAUTH_RETURN_PATH}`;
MCP_OAUTH_GROK_BOT_RETURN_URL = "grokbot://app/v1/mcp/oauth/return";
MCP_OAUTH_SAND_RETURN_URL = MCP_OAUTH_GROK_BOT_RETURN_URL;
MCP_OAUTH_LEGACY_SAND_RETURN_URL = "sand://app/v1/mcp/oauth/return";
MCP_OAUTH_POST_AUTH_RETURN_URLS = [
    MCP_OAUTH_DESKTOP_RETURN_URL,
    MCP_OAUTH_GROK_BOT_RETURN_URL,
    MCP_OAUTH_LEGACY_SAND_RETURN_URL
];
MCP_OAUTH_CANONICAL_DESKTOP_URL_PROTOCOLS = [
    "cursor"
];
MCP_OAUTH_PORTAL_CALLBACK_URL = "https://www.cursor.com/agents/mcp/oauth/callback";
MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL = "https://www.cursor.com/bot/mcp/oauth/callback";
MCP_OAUTH_STATE_ACCOUNT_MISMATCH_MESSAGE = "OAuth state was created by a different Cursor account";
MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL = "grokbot://mcp/oauth/callback";
MCP_OAUTH_LOOPBACK_CALLBACK_URL = "http://localhost:8787/callback";
MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE = "gb";
MCP_OAUTH_STATE_TARGET_GROK_WEB = "gw";
MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK = "gd";
MCP_OAUTH_RELAYED_LOOPBACK_HEADER = "x-cursor-mcp-oauth-relayed-loopback";
MCP_OAUTH_STATE_TARGET_X_APP = "xa";
MCP_OAUTH_STATE_TARGET_MARKER = ".t";
MCP_OAUTH_LOOPBACK_FALLBACK_PORTS = [
    18787,
    28787,
    31787
];
MCP_OAUTH_STATE_DESKTOP_LOOPBACK_SUFFIX = `${MCP_OAUTH_STATE_TARGET_MARKER}${MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK}`;
MCP_OAUTH_STATE_TARGET_URLS = new Map([
    [
        MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE,
        MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL
    ],
    [
        MCP_OAUTH_STATE_TARGET_GROK_WEB,
        MCP_OAUTH_GROK_WEB_CALLBACK_URL
    ],
    [
        MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK,
        MCP_OAUTH_LOOPBACK_CALLBACK_URL
    ],
    [
        MCP_OAUTH_STATE_TARGET_X_APP,
        MCP_OAUTH_X_APP_CALLBACK_URL
    ],
    ...MCP_OAUTH_LOOPBACK_FALLBACK_PORTS.map((port)=>[
            `${MCP_OAUTH_STATE_TARGET_DESKTOP_LOOPBACK}${port}`,
            mcpOAuthLoopbackCallbackUrlForPort(port)
        ])
]);
MCP_OAUTH_APP_REDIRECT_TARGETS = new Map([
    [
        MCP_OAUTH_GROK_BOT_MOBILE_CALLBACK_URL,
        MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE
    ],
    [
        MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL,
        MCP_OAUTH_STATE_TARGET_GROK_BOT_MOBILE
    ],
    [
        MCP_OAUTH_GROK_WEB_CALLBACK_URL,
        MCP_OAUTH_STATE_TARGET_GROK_WEB
    ],
    [
        MCP_OAUTH_X_APP_CALLBACK_URL,
        MCP_OAUTH_STATE_TARGET_X_APP
    ]
]);
GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID = "313336824172-o9ui5flcldhm6d0gp487a9vnnpo8unap.apps.googleusercontent.com";
MCP_OAUTH_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL = "com.googleusercontent.apps.313336824172-o9ui5flcldhm6d0gp487a9vnnpo8unap:/oauth2redirect";
LEGACY_GOOGLE_WORKSPACE_IOS_OAUTH_CLIENT_ID = "253367402103-5sehq8pc5rha37tkd0om6tj1l1576slb.apps.googleusercontent.com";
MCP_OAUTH_LEGACY_GROK_BOT_MOBILE_GOOGLE_CALLBACK_URL = "com.googleusercontent.apps.253367402103-5sehq8pc5rha37tkd0om6tj1l1576slb:/oauth2redirect";
MCP_OAUTH_PORTAL_RETURN_PATH_PREFIXES = [
    "/codebase/apps/install"
];
MCP_OAUTH_LOOPBACK_IPV4_HOSTNAME = "127.0.0.1";
MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL = mcpOAuthLoopbackRedirectUrl({
    loopbackIpv4: true
});
MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH = "/oauth/mcp-client.json";
MCP_OAUTH_CLIENT_METADATA_DOCUMENT_URL = `https://cursor.com${MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH}`;
MCP_OAUTH_CLIENT_METADATA_DOCUMENT_REDIRECT_URIS = [
    MCP_OAUTH_PORTAL_CALLBACK_URL,
    MCP_OAUTH_GROK_BOT_BOUNCE_CALLBACK_URL,
    MCP_OAUTH_GROK_WEB_CALLBACK_URL,
    MCP_OAUTH_LOOPBACK_CALLBACK_URL,
    MCP_OAUTH_LOOPBACK_IPV4_CALLBACK_URL
];
MCP_OAUTH_CURSOR_CLIENT_BRANDING = {
    clientName: "Cursor",
    logoUri: MCP_OAUTH_CLIENT_LOGO_URI,
    metadataDocumentPath: MCP_OAUTH_CLIENT_METADATA_DOCUMENT_PATH
};
MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH = "/oauth/grok-bot-mcp-client.json";
MCP_OAUTH_GROK_BOT_CLIENT_BRANDING = {
    clientName: "Grok Bot",
    logoUri: "https://cursor.com/assets/sand-onboarding/grok-bot-icon.png",
    metadataDocumentPath: MCP_OAUTH_GROK_BOT_CLIENT_METADATA_DOCUMENT_PATH
};

}
