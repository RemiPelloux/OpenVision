import { yOe } from "./Iwo.js";
import { hQ } from "./integration.js";
import { _j } from "./is.js";
import { kun } from "./scope.js";
import { Wje } from "./string.js";
import { E } from "./tslib.es6.js";
function Opy(t) {
    return yOe(t) && t.name === "ZodError" && Array.isArray(t.issues);
}
function Fpy(t) {
    return {
        ...t,
        path: "path" in t && Array.isArray(t.path) ? t.path.join(".") : void 0,
        keys: "keys" in t ? JSON.stringify(t.keys) : void 0,
        unionErrors: "unionErrors" in t ? JSON.stringify(t.unionErrors) : void 0
    };
}
function Bpy(t) {
    return t.map((e)=>typeof e == "number" ? "<array>" : e).join(".");
}
function Upy(t) {
    const e = new Set;
    for (const i of t.issues){
        const r = Bpy(i.path);
        r.length > 0 && e.add(r);
    }
    const n = Array.from(e);
    if (n.length === 0) {
        let i = "variable";
        if (t.issues.length > 0) {
            const r = t.issues[0];
            r !== void 0 && "expected" in r && typeof r.expected == "string" && (i = r.expected);
        }
        return `Failed to validate ${i}`;
    }
    return `Failed to validate keys: ${kun(n.join(", "), 100)}`;
}
function jpy(t, e = !1, n, i) {
    if (!n.exception?.values || !i.originalException || !Opy(i.originalException) || i.originalException.issues.length === 0) return n;
    try {
        const s = (e ? i.originalException.issues : i.originalException.issues.slice(0, t)).map(Fpy);
        return e && (Array.isArray(i.attachments) || (i.attachments = []), i.attachments.push({
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
                        value: Upy(i.originalException)
                    },
                    ...n.exception.values.slice(1)
                ]
            },
            extra: {
                ...n.extra,
                "zoderror.issues": s.slice(0, t)
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
var Pqu, Mqu, Dqu, Vhr;
export { Bpy, Dqu, Fpy, Mqu, Opy, Pqu, Upy, Vhr, jpy };
var __wakaru_$py_initialized = false;
export function $py() {
if (__wakaru_$py_initialized) return;
__wakaru_$py_initialized = true;
"use strict";
E(), hQ(), _j(), Wje(), Pqu = 10, Mqu = "ZodErrors", Dqu = ((t = {})=>{
    const e = t.limit ?? Pqu;
    return {
        name: Mqu,
        processEvent (n, i) {
            return jpy(e, t.saveZodIssuesAsAttachment, n, i);
        }
    };
}), Vhr = Dqu;

}
