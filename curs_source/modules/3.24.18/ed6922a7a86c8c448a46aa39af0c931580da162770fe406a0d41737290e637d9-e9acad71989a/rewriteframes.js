import { YH } from "./integration.js";
import { n0c } from "./path.js";
import { ZCc, e0c } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Og, c3 } from "./worldwide.js";
function Hrg({ isBrowser: e, root: t, prefix: n }) {
    return (i)=>{
        if (!i.filename) return i;
        const r = /^[a-zA-Z]:\\/.test(i.filename) || i.filename.includes("\\") && !i.filename.includes("/"), s = /^\//.test(i.filename);
        if (e) {
            if (t) {
                const o = i.filename;
                o.indexOf(t) === 0 && (i.filename = o.replace(t, n));
            }
        } else if (r || s) {
            const o = r ? i.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : i.filename, a = t ? ZCc(t, o) : e0c(o);
            i.filename = `${n}${a}`;
        }
        return i;
    };
}
var i0c, kVr;
export { Hrg, i0c, kVr };
var __wakaru_Wrg_initialized = false;
export function Wrg() {
if (__wakaru_Wrg_initialized) return;
__wakaru_Wrg_initialized = true;
"use strict";
x(), YH(), n0c(), c3(), i0c = "RewriteFrames", kVr = (e = {})=>{
    const t = e.root, n = e.prefix || "app:///", i = "window" in Og && !!Og.window, r = e.iteratee || Hrg({
        isBrowser: i,
        root: t,
        prefix: n
    });
    function s(a) {
        try {
            return {
                ...a,
                exception: {
                    ...a.exception,
                    values: a.exception.values.map((c)=>({
                            ...c,
                            ...c.stacktrace && {
                                stacktrace: o(c.stacktrace)
                            }
                        }))
                }
            };
        } catch  {
            return a;
        }
    }
    function o(a) {
        return {
            ...a,
            frames: a?.frames?.map((c)=>r(c))
        };
    }
    return {
        name: i0c,
        processEvent (a) {
            let c = a;
            return a.exception && Array.isArray(a.exception.values) && (c = s(c)), c;
        }
    };
};

}
