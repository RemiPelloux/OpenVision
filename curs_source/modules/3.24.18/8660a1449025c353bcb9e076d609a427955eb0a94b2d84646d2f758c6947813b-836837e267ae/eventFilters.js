import { Pte } from "./Iwo.js";
import { ret } from "./SZu.js";
import { oGu } from "./client.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { aGu } from "./eventUtils.js";
import { hQ } from "./integration.js";
import { uve } from "./misc.js";
import { Wje } from "./string.js";
import { E } from "./tslib.es6.js";
function jGu(t = {}, e = {}) {
    return {
        allowUrls: [
            ...t.allowUrls || [],
            ...e.allowUrls || []
        ],
        denyUrls: [
            ...t.denyUrls || [],
            ...e.denyUrls || []
        ],
        ignoreErrors: [
            ...t.ignoreErrors || [],
            ...e.ignoreErrors || [],
            ...t.disableErrorDefaults ? [] : $Gu
        ],
        ignoreTransactions: [
            ...t.ignoreTransactions || [],
            ...e.ignoreTransactions || []
        ]
    };
}
function Xhy(t, e) {
    if (t.type) {
        if (t.type === "transaction" && Qhy(t, e.ignoreTransactions)) return rg && so.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${ret(t)}`), !0;
    } else {
        if (Zhy(t, e.ignoreErrors)) return rg && so.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ret(t)}`), !0;
        if (npy(t)) return rg && so.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${ret(t)}`), !0;
        if (Jhy(t, e.denyUrls)) return rg && so.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ret(t)}.
Url: ${Fhr(t)}`), !0;
        if (!epy(t, e.allowUrls)) return rg && so.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ret(t)}.
Url: ${Fhr(t)}`), !0;
    }
    return !1;
}
function Zhy(t, e) {
    return e?.length ? oGu(t).some((n)=>Pte(n, e)) : !1;
}
function Qhy(t, e) {
    if (!e?.length) return !1;
    const n = t.transaction;
    return n ? Pte(n, e) : !1;
}
function Jhy(t, e) {
    if (!e?.length) return !1;
    const n = Fhr(t);
    return n ? Pte(n, e) : !1;
}
function epy(t, e) {
    if (!e?.length) return !0;
    const n = Fhr(t);
    return n ? Pte(n, e) : !0;
}
function tpy(t = []) {
    for(let e = t.length - 1; e >= 0; e--){
        const n = t[e];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
    }
    return null;
}
function Fhr(t) {
    try {
        const n = [
            ...t.exception?.values ?? []
        ].reverse().find((i)=>i.mechanism?.parent_id === void 0 && i.stacktrace?.frames?.length)?.stacktrace?.frames;
        return n ? tpy(n) : null;
    } catch  {
        return rg && so.error(`Cannot extract url for event ${ret(t)}`), null;
    }
}
function npy(t) {
    return t.exception?.values?.length ? !t.message && !t.exception.values.some((e)=>e.stacktrace || e.type && e.type !== "Error" || e.value) : !1;
}
var $Gu, HGu, Fun, Bun;
export { $Gu, Bun, Fhr, Fun, HGu, Jhy, Qhy, Xhy, Zhy, epy, jGu, npy, tpy };
var __wakaru_WGu_initialized = false;
export function WGu() {
if (__wakaru_WGu_initialized) return;
__wakaru_WGu_initialized = true;
"use strict";
E(), qR(), hQ(), JC(), aGu(), uve(), Wje(), $Gu = [
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
], HGu = "EventFilters", Fun = (t = {})=>{
    let e;
    return {
        name: HGu,
        setup (n) {
            const i = n.getOptions();
            e = jGu(t, i);
        },
        processEvent (n, i, r) {
            if (!e) {
                const s = r.getOptions();
                e = jGu(t, s);
            }
            return Xhy(n, e) ? null : n;
        }
    };
}, Bun = ((t = {})=>({
        ...Fun(t),
        name: "InboundFilters"
    }));

}
