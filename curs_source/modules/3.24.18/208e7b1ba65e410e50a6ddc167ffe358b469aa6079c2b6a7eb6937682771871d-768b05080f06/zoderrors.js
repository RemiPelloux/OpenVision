import { ud } from "./extraerrordata.js";
import { ar } from "./integration.js";
import { fn } from "./is.js";
import { AC } from "./scope.js";
import { Ui } from "./string.js";
import { h } from "./tslib.es6.js";
function e8e(e) {
    return ud(e) && e.name === "ZodError" && Array.isArray(e.issues);
}
function t8e(e) {
    return {
        ...e,
        path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
        keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
    };
}
function n8e(e) {
    return e.map((t)=>typeof t == "number" ? "<array>" : t).join(".");
}
function r8e(e) {
    const t = new Set;
    for (const r of e.issues){
        const s = n8e(r.path);
        s.length > 0 && t.add(s);
    }
    const n = Array.from(t);
    if (n.length === 0) {
        let r = "variable";
        if (e.issues.length > 0) {
            const s = e.issues[0];
            s !== void 0 && "expected" in s && typeof s.expected == "string" && (r = s.expected);
        }
        return `Failed to validate ${r}`;
    }
    return `Failed to validate keys: ${AC(n.join(", "), 100)}`;
}
function s8e(e, t = !1, n, r) {
    if (!n.exception?.values || !r.originalException || !e8e(r.originalException) || r.originalException.issues.length === 0) return n;
    try {
        const i = (t ? r.originalException.issues : r.originalException.issues.slice(0, e)).map(t8e);
        return t && (Array.isArray(r.attachments) || (r.attachments = []), r.attachments.push({
            filename: "zod_issues.json",
            data: JSON.stringify({
                issues: i
            })
        })), {
            ...n,
            exception: {
                ...n.exception,
                values: [
                    {
                        ...n.exception.values[0],
                        value: r8e(r.originalException)
                    },
                    ...n.exception.values.slice(1)
                ]
            },
            extra: {
                ...n.extra,
                "zoderror.issues": i.slice(0, e)
            }
        };
    } catch (s) {
        return {
            ...n,
            extra: {
                ...n.extra,
                "zoderrors sentry integration parse error": {
                    message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                    error: s instanceof Error ? `${s.name}: ${s.message}
${s.stack}` : "unknown"
                }
            }
        };
    }
}
var _B, vB, TB, i8e;
export { TB, _B, e8e, i8e, n8e, r8e, s8e, t8e, vB };
var __wakaru_a8e_initialized = false;
export function a8e() {
if (__wakaru_a8e_initialized) return;
__wakaru_a8e_initialized = true;
"use strict";
h(), ar(), fn(), Ui(), _B = 10, vB = "ZodErrors", TB = ((e = {})=>{
    const t = e.limit ?? _B;
    return {
        name: vB,
        processEvent (n, r) {
            return s8e(t, e.saveZodIssuesAsAttachment, n, r);
        }
    };
}), i8e = TB;

}
