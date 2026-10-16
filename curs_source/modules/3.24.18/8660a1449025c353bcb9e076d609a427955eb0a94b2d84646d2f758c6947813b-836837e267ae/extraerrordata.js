import { Mte, lQ, yOe } from "./Iwo.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { hQ } from "./integration.js";
import { _j } from "./is.js";
import { EFt } from "./normalize.js";
import { Rte } from "./object.js";
import { kun, xse } from "./scope.js";
import { Wje } from "./string.js";
import { E } from "./tslib.es6.js";
function wpy(t, e = {}, n, i, r) {
    if (!e.originalException || !yOe(e.originalException)) return t;
    const s = e.originalException.name || e.originalException.constructor.name, o = hqu(e.originalException, i, r);
    if (o) {
        const a = {
            ...t.contexts
        }, l = Mte(o, n);
        return xse(l) && (lQ(l, "__sentry_skip_normalization__", !0), a[s] = l), {
            ...t,
            contexts: a
        };
    }
    return t;
}
function hqu(t, e, n) {
    try {
        const i = [
            "name",
            "message",
            "stack",
            "line",
            "column",
            "fileName",
            "lineNumber",
            "columnNumber",
            "toJSON"
        ], r = {};
        for (const s of Object.keys(t)){
            if (i.indexOf(s) !== -1) continue;
            const o = t[s];
            r[s] = yOe(o) || typeof o == "string" ? n ? kun(`${o}`, n) : `${o}` : o;
        }
        if (e && t.cause !== void 0) if (yOe(t.cause)) {
            const s = t.cause.name || t.cause.constructor.name;
            r.cause = {
                [s]: hqu(t.cause, !1, n)
            };
        } else r.cause = t.cause;
        if (typeof t.toJSON == "function") {
            const s = t.toJSON();
            for (const o of Object.keys(s)){
                const a = s[o];
                r[o] = yOe(a) ? a.toString() : a;
            }
        }
        return r;
    } catch (i) {
        rg && so.error("Unable to extract extra data from the Error object:", i);
    }
    return null;
}
var pqu, mqu, Whr;
export { Whr, hqu, mqu, pqu, wpy };
var __wakaru_Cpy_initialized = false;
export function Cpy() {
if (__wakaru_Cpy_initialized) return;
__wakaru_Cpy_initialized = true;
"use strict";
E(), qR(), hQ(), JC(), _j(), EFt(), Rte(), Wje(), pqu = "ExtraErrorData", mqu = ((t = {})=>{
    const { depth: e = 3, captureErrorCause: n = !0 } = t;
    return {
        name: pqu,
        processEvent (i, r, s) {
            const { maxValueLength: o } = s.getOptions();
            return wpy(i, r, e, n, o);
        }
    };
}), Whr = mqu;

}
