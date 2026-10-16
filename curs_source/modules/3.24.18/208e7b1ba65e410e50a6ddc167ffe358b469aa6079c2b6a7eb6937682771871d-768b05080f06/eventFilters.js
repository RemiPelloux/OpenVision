import { gt, tt } from "./debug-build.js";
import { Ke, lt } from "./debug-logger.js";
import { TW } from "./eventUtils.js";
import { ar } from "./integration.js";
import { es } from "./misc.js";
import { ck } from "./spanUtils.js";
import { Ui } from "./string.js";
import { h } from "./tslib.es6.js";
function lk(e, t = [], n = !1) {
    return t.some((r)=>ck(e, r, n));
}
function S8(e) {
    return e.exception?.values?.[0];
}
function pd(e) {
    const { message: t, event_id: n } = e;
    if (t) return t;
    const r = S8(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function LFe(e) {
    const t = [];
    e.message && t.push(e.message);
    try {
        const n = e.exception.values[e.exception.values.length - 1];
        n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
    } catch  {}
    return t;
}
function MW(e = {}, t = {}) {
    return {
        allowUrls: [
            ...e.allowUrls || [],
            ...t.allowUrls || []
        ],
        denyUrls: [
            ...e.denyUrls || [],
            ...t.denyUrls || []
        ],
        ignoreErrors: [
            ...e.ignoreErrors || [],
            ...t.ignoreErrors || [],
            ...e.disableErrorDefaults ? [] : PW
        ],
        ignoreTransactions: [
            ...e.ignoreTransactions || [],
            ...t.ignoreTransactions || []
        ]
    };
}
function n6e(e, t) {
    if (e.type) {
        if (e.type === "transaction" && s6e(e, t.ignoreTransactions)) return tt && lt.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${pd(e)}`), !0;
    } else {
        if (r6e(e, t.ignoreErrors)) return tt && lt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${pd(e)}`), !0;
        if (c6e(e)) return tt && lt.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${pd(e)}`), !0;
        if (i6e(e, t.denyUrls)) return tt && lt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${pd(e)}.
Url: ${Pk(e)}`), !0;
        if (!a6e(e, t.allowUrls)) return tt && lt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${pd(e)}.
Url: ${Pk(e)}`), !0;
    }
    return !1;
}
function r6e(e, t) {
    return t?.length ? LFe(e).some((n)=>lk(n, t)) : !1;
}
function s6e(e, t) {
    if (!t?.length) return !1;
    const n = e.transaction;
    return n ? lk(n, t) : !1;
}
function i6e(e, t) {
    if (!t?.length) return !1;
    const n = Pk(e);
    return n ? lk(n, t) : !1;
}
function a6e(e, t) {
    if (!t?.length) return !0;
    const n = Pk(e);
    return n ? lk(n, t) : !0;
}
function o6e(e = []) {
    for(let t = e.length - 1; t >= 0; t--){
        const n = e[t];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
    }
    return null;
}
function Pk(e) {
    try {
        const n = [
            ...e.exception?.values ?? []
        ].reverse().find((r)=>r.mechanism?.parent_id === void 0 && r.stacktrace?.frames?.length)?.stacktrace?.frames;
        return n ? o6e(n) : null;
    } catch  {
        return tt && lt.error(`Cannot extract url for event ${pd(e)}`), null;
    }
}
function c6e(e) {
    return e.exception?.values?.length ? !e.message && !e.exception.values.some((t)=>t.stacktrace || t.type && t.type !== "Error" || t.value) : !1;
}
var PW, NW, DW, l6e;
export { DW, LFe, MW, NW, PW, Pk, S8, a6e, c6e, i6e, l6e, lk, n6e, o6e, pd, r6e, s6e };
var __wakaru_OW_initialized = false;
export function OW() {
if (__wakaru_OW_initialized) return;
__wakaru_OW_initialized = true;
"use strict";
h(), gt(), ar(), Ke(), TW(), es(), Ui(), PW = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    `can't redefine non-configurable property "solana"`,
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    /^Java exception was raised during method invocation$/
], NW = "EventFilters", DW = (e = {})=>{
    let t;
    return {
        name: NW,
        setup (n) {
            const r = n.getOptions();
            t = MW(e, r);
        },
        processEvent (n, r, s) {
            if (!t) {
                const i = s.getOptions();
                t = MW(e, i);
            }
            return n6e(n, t) ? null : n;
        }
    };
}, l6e = ((e = {})=>({
        ...DW(e),
        name: "InboundFilters"
    }));

}
