import { E } from "./tslib.es6.js";
var m_t, Ptd, Mtd, Dtd, Ntd;
export { Dtd, Mtd, Ntd, Ptd, m_t };
var __wakaru_M1y_initialized = false;
export function M1y() {
if (__wakaru_M1y_initialized) return;
__wakaru_M1y_initialized = true;
"use strict";
E(), m_t = {
    autoTitle: "Cursor Models",
    autoDescription: "Includes Cursor Grok and Composer",
    apiTitle: "Other Models",
    apiDescription: "Consumed by named models.",
    autoBeyondLimitDescription: "Additional usage beyond limits consumes Other Models quota or on-demand spend.",
    autoUsageBarLabel: "your included total usage",
    apiUsageBarLabel: "your included API usage"
}, Ptd = new Set([
    "Auto + Composer",
    "Composer + Auto",
    "First-party models",
    "First-Party Models"
]), Mtd = new Set([
    "API",
    "Other API"
]), Dtd = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Includes Auto, Grok 4.5 and Composer 2.5",
    "Includes Auto, Cursor Grok 4.5 and Composer 2.5",
    "Includes Cursor Grok 4.5 and Composer 2.5"
]), Ntd = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Additional usage beyond limits consumes API quota or on-demand usage."
]);

}
