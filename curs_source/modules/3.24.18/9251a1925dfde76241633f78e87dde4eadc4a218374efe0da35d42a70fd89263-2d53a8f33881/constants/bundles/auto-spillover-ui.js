var AUTO_SPILLOVER_UI_DEFAULTS, LEGACY_AUTO_SPILLOVER_AUTO_TITLES, LEGACY_AUTO_SPILLOVER_API_TITLES, LEGACY_AUTO_SPILLOVER_AUTO_DESCRIPTIONS, LEGACY_AUTO_SPILLOVER_BEYOND_LIMIT_DESCRIPTIONS;
export { AUTO_SPILLOVER_UI_DEFAULTS, LEGACY_AUTO_SPILLOVER_API_TITLES, LEGACY_AUTO_SPILLOVER_AUTO_DESCRIPTIONS, LEGACY_AUTO_SPILLOVER_AUTO_TITLES, LEGACY_AUTO_SPILLOVER_BEYOND_LIMIT_DESCRIPTIONS };
var __wakaru_init_auto_spillover_ui_initialized = false;
export function init_auto_spillover_ui() {
if (__wakaru_init_auto_spillover_ui_initialized) return;
__wakaru_init_auto_spillover_ui_initialized = true;
"use strict";
AUTO_SPILLOVER_UI_DEFAULTS = {
    autoTitle: "Cursor Models",
    autoDescription: "Includes Cursor Grok and Composer",
    apiTitle: "Other Models",
    apiDescription: "Consumed by named models.",
    autoBeyondLimitDescription: "Additional usage beyond limits consumes Other Models quota or on-demand spend.",
    autoUsageBarLabel: "your included total usage",
    apiUsageBarLabel: "your included API usage"
};
LEGACY_AUTO_SPILLOVER_AUTO_TITLES = new Set([
    "Auto + Composer",
    "Composer + Auto",
    "First-party models",
    "First-Party Models"
]);
LEGACY_AUTO_SPILLOVER_API_TITLES = new Set([
    "API",
    "Other API"
]);
LEGACY_AUTO_SPILLOVER_AUTO_DESCRIPTIONS = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Includes Auto, Grok 4.5 and Composer 2.5",
    "Includes Auto, Cursor Grok 4.5 and Composer 2.5",
    "Includes Cursor Grok 4.5 and Composer 2.5"
]);
LEGACY_AUTO_SPILLOVER_BEYOND_LIMIT_DESCRIPTIONS = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Additional usage beyond limits consumes API quota or on-demand usage."
]);

}
