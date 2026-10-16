"use strict";
require.d(exports, {
    Kr: ()=>d,
    NV: ()=>a,
    _O: ()=>o,
    rO: ()=>n,
    sJ: ()=>l
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
function o(e) {
    return s.has(e) ? n.autoTitle : e;
}
const i = new Set([
    "API",
    "Other API"
]);
function a(e) {
    return i.has(e) ? n.apiTitle : e;
}
const c = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Includes Auto, Grok 4.5 and Composer 2.5",
    "Includes Auto, Cursor Grok 4.5 and Composer 2.5",
    "Includes Cursor Grok 4.5 and Composer 2.5"
]);
function l(e) {
    return c.has(e) ? n.autoDescription : e;
}
const u = new Set([
    "Consumed by Auto. Additional usage consumes API quota.",
    "Additional usage beyond limits consumes API quota or on-demand spend.",
    "Additional usage beyond limits consumes API quota or on-demand usage."
]);
function d(e) {
    return u.has(e) ? n.autoBeyondLimitDescription : e;
}
