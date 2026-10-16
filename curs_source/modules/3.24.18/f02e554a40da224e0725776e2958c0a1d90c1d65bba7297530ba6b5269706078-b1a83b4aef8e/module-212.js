"use strict";
require.d(exports, {
    Kr: ()=>m,
    NV: ()=>a,
    _O: ()=>i,
    rO: ()=>n,
    sJ: ()=>c
});
const n = {
    autoTitle: "Cursor Models",
    autoDescription: "Includes Cursor Grok and Composer",
    apiTitle: "Other Models",
    apiDescription: "Consumed by named models.",
    autoBeyondLimitDescription: "Additional usage beyond limits consumes Other Models quota or on-demand spend.",
    autoUsageBarLabel: "your included total usage",
    apiUsageBarLabel: "your included API usage"
}, s = new Set([
    "Auto + Composer",
    "Composer + Auto",
    "First-party models",
    "First-Party Models"
]);
function i(t) {
    return s.has(t) ? n.autoTitle : t;
}
const o = new Set([
    "API",
    "Other API"
]);
function a(t) {
    return o.has(t) ? n.apiTitle : t;
}
const u = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Includes Auto, Grok 4.5 and Composer 2.5",
    "Includes Auto, Cursor Grok 4.5 and Composer 2.5",
    "Includes Cursor Grok 4.5 and Composer 2.5"
]);
function c(t) {
    return u.has(t) ? n.autoDescription : t;
}
const l = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Additional usage beyond limits consumes API quota or on-demand usage."
]);
function m(t) {
    return l.has(t) ? n.autoBeyondLimitDescription : t;
}
