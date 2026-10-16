import { CV } from "./HVr.js";
import { Uwc } from "./client.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { $wc } from "./eventUtils.js";
import { YH } from "./integration.js";
import { Mie } from "./misc.js";
import { F3e } from "./qIc.js";
import { oAe } from "./string.js";
import { x } from "./tslib.es6.js";
function bCc(e = {}, t = {}) {
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
            ...e.disableErrorDefaults ? [] : yCc
        ],
        ignoreTransactions: [
            ...e.ignoreTransactions || [],
            ...t.ignoreTransactions || []
        ]
    };
}
function urg(e, t) {
    if (e.type) {
        if (e.type === "transaction" && hrg(e, t.ignoreTransactions)) return Qh && zr.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${F3e(e)}`), !0;
    } else {
        if (drg(e, t.ignoreErrors)) return Qh && zr.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${F3e(e)}`), !0;
        if (frg(e)) return Qh && zr.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${F3e(e)}`), !0;
        if (prg(e, t.denyUrls)) return Qh && zr.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${F3e(e)}.
Url: ${Hhi(e)}`), !0;
        if (!mrg(e, t.allowUrls)) return Qh && zr.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${F3e(e)}.
Url: ${Hhi(e)}`), !0;
    }
    return !1;
}
function drg(e, t) {
    return t?.length ? Uwc(e).some((n)=>CV(n, t)) : !1;
}
function hrg(e, t) {
    if (!t?.length) return !1;
    const n = e.transaction;
    return n ? CV(n, t) : !1;
}
function prg(e, t) {
    if (!t?.length) return !1;
    const n = Hhi(e);
    return n ? CV(n, t) : !1;
}
function mrg(e, t) {
    if (!t?.length) return !0;
    const n = Hhi(e);
    return n ? CV(n, t) : !0;
}
function grg(e = []) {
    for(let t = e.length - 1; t >= 0; t--){
        const n = e[t];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
    }
    return null;
}
function Hhi(e) {
    try {
        const n = [
            ...e.exception?.values ?? []
        ].reverse().find((i)=>i.mechanism?.parent_id === void 0 && i.stacktrace?.frames?.length)?.stacktrace?.frames;
        return n ? grg(n) : null;
    } catch  {
        return Qh && zr.error(`Cannot extract url for event ${F3e(e)}`), null;
    }
}
function frg(e) {
    return e.exception?.values?.length ? !e.message && !e.exception.values.some((t)=>t.stacktrace || t.type && t.type !== "Error" || t.value) : !1;
}
var yCc, SCc, MLt, PLt;
export { Hhi, MLt, PLt, SCc, bCc, drg, frg, grg, hrg, mrg, prg, urg, yCc };
var __wakaru_kCc_initialized = false;
export function kCc() {
if (__wakaru_kCc_initialized) return;
__wakaru_kCc_initialized = true;
"use strict";
x(), kE(), YH(), Xk(), $wc(), Mie(), oAe(), yCc = [
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
], SCc = "EventFilters", MLt = (e = {})=>{
    let t;
    return {
        name: SCc,
        setup (n) {
            const i = n.getOptions();
            t = bCc(e, i);
        },
        processEvent (n, i, r) {
            if (!t) {
                const s = r.getOptions();
                t = bCc(e, s);
            }
            return urg(n, t) ? null : n;
        }
    };
}, PLt = ((e = {})=>({
        ...MLt(e),
        name: "InboundFilters"
    }));

}
