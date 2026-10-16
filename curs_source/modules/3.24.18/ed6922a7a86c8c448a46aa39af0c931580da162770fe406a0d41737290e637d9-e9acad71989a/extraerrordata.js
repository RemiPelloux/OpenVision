import { TV, jH, qke } from "./HVr.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { YH } from "./integration.js";
import { YB } from "./is.js";
import { Rdt } from "./normalize.js";
import { wV } from "./object.js";
import { mK, vLt } from "./scope.js";
import { oAe } from "./string.js";
import { x } from "./tslib.es6.js";
function Frg(e, t = {}, n, i, r) {
    if (!t.originalException || !qke(t.originalException)) return e;
    const s = t.originalException.name || t.originalException.constructor.name, o = jCc(t.originalException, i, r);
    if (o) {
        const a = {
            ...e.contexts
        }, c = TV(o, n);
        return mK(c) && (jH(c, "__sentry_skip_normalization__", !0), a[s] = c), {
            ...e,
            contexts: a
        };
    }
    return e;
}
function jCc(e, t, n) {
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
        for (const s of Object.keys(e)){
            if (i.indexOf(s) !== -1) continue;
            const o = e[s];
            r[s] = qke(o) || typeof o == "string" ? n ? vLt(`${o}`, n) : `${o}` : o;
        }
        if (t && e.cause !== void 0) if (qke(e.cause)) {
            const s = e.cause.name || e.cause.constructor.name;
            r.cause = {
                [s]: jCc(e.cause, !1, n)
            };
        } else r.cause = e.cause;
        if (typeof e.toJSON == "function") {
            const s = e.toJSON();
            for (const o of Object.keys(s)){
                const a = s[o];
                r[o] = qke(a) ? a.toString() : a;
            }
        }
        return r;
    } catch (i) {
        Qh && zr.error("Unable to extract extra data from the Error object:", i);
    }
    return null;
}
var qCc, zCc, zhi;
export { Frg, jCc, qCc, zCc, zhi };
var __wakaru_Brg_initialized = false;
export function Brg() {
if (__wakaru_Brg_initialized) return;
__wakaru_Brg_initialized = true;
"use strict";
x(), kE(), YH(), Xk(), YB(), Rdt(), wV(), oAe(), qCc = "ExtraErrorData", zCc = ((e = {})=>{
    const { depth: t = 3, captureErrorCause: n = !0 } = e;
    return {
        name: qCc,
        processEvent (i, r, s) {
            const { maxValueLength: o } = s.getOptions();
            return Frg(i, r, t, n, o);
        }
    };
}), zhi = zCc;

}
