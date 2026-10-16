import { qke } from "./HVr.js";
import { YH } from "./integration.js";
import { YB } from "./is.js";
import { vLt } from "./scope.js";
import { oAe } from "./string.js";
import { x } from "./tslib.es6.js";
function Xrg(e) {
    return qke(e) && e.name === "ZodError" && Array.isArray(e.issues);
}
function Zrg(e) {
    return {
        ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
    };
}
function Qrg(e) {
    return e.map((t)=>typeof t == "number" ? "<array>" : t).join(".");
}
function Jrg(e) {
    const t = new Set;
    for (const i of e.issues){
        const r = Qrg(i.path);
        r.length > 0 && t.add(r);
    }
    const n = Array.from(t);
    if (n.length === 0) {
        let i = "variable";
        if (e.issues.length > 0) {
            const r = e.issues[0];
            r !== void 0 && "expected" in r && typeof r.expected == "string" && (i = r.expected);
        }
        return `Failed to validate ${i}`;
    }
    return `Failed to validate keys: ${vLt(n.join(", "), 100)}`;
}
function esg(e, t = !1, n, i) {
    if (!n.exception?.values || !i.originalException || !Xrg(i.originalException) || i.originalException.issues.length === 0) return n;
    try {
        const s = (t ? i.originalException.issues : i.originalException.issues.slice(0, e)).map(Zrg);
        return t && (Array.isArray(i.attachments) || (i.attachments = []), i.attachments.push({
            filename: "zod_issues.json",
            data: JSON.stringify({
                issues: s
            })
        })), {
            ...n,
            exception: {
                ...n.exception,
                values: [
                    {
                        ...n.exception.values[0],
                        value: Jrg(i.originalException)
                    },
                    ...n.exception.values.slice(1)
                ]
            },
            extra: {
                ...n.extra,
                "zoderror.issues": s.slice(0, e)
            }
        };
    } catch (r) {
        return {
            ...n,
            extra: {
                ...n.extra,
                "zoderrors sentry integration parse error": {
                    message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                    error: r instanceof Error ? `${r.name}: ${r.message}
${r.stack}` : "unknown"
                }
            }
        };
    }
}
var u0c, d0c, h0c, Zhi;
export { Jrg, Qrg, Xrg, Zhi, Zrg, d0c, esg, h0c, u0c };
var __wakaru_tsg_initialized = false;
export function tsg() {
if (__wakaru_tsg_initialized) return;
__wakaru_tsg_initialized = true;
"use strict";
x(), YH(), YB(), oAe(), u0c = 10, d0c = "ZodErrors", h0c = ((e = {})=>{
    const t = e.limit ?? u0c;
    return {
        name: d0c,
        processEvent (n, i) {
            return esg(t, e.saveZodIssuesAsAttachment, n, i);
        }
    };
}), Zhi = h0c;

}
