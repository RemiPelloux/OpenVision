import { Squ, _qu } from "./SZu.js";
import { hQ } from "./integration.js";
import { wqu } from "./path.js";
import { E } from "./tslib.es6.js";
import { o_, r7 } from "./worldwide.js";
function Ipy({ isBrowser: t, root: e, prefix: n }) {
    return (i)=>{
        if (!i.filename) return i;
        const r = /^[a-zA-Z]:\\/.test(i.filename) || i.filename.includes("\\") && !i.filename.includes("/"), s = /^\//.test(i.filename);
        if (t) {
            if (e) {
                const o = i.filename;
                o.indexOf(e) === 0 && (i.filename = o.replace(e, n));
            }
        } else if (r || s) {
            const o = r ? i.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : i.filename, a = e ? _qu(e, o) : Squ(o);
            i.filename = `${n}${a}`;
        }
        return i;
    };
}
var Cqu, lwo;
export { Cqu, Ipy, lwo };
var __wakaru_xpy_initialized = false;
export function xpy() {
if (__wakaru_xpy_initialized) return;
__wakaru_xpy_initialized = true;
"use strict";
E(), hQ(), wqu(), r7(), Cqu = "RewriteFrames", lwo = (t = {})=>{
    const e = t.root, n = t.prefix || "app:///", i = "window" in o_ && !!o_.window, r = t.iteratee || Ipy({
        isBrowser: i,
        root: e,
        prefix: n
    });
    function s(a) {
        try {
            return {
                ...a,
                exception: {
                    ...a.exception,
                    values: a.exception.values.map((l)=>({
                            ...l,
                            ...l.stacktrace && {
                                stacktrace: o(l.stacktrace)
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
            frames: a?.frames?.map((l)=>r(l))
        };
    }
    return {
        name: Cqu,
        processEvent (a) {
            let l = a;
            return a.exception && Array.isArray(a.exception.values) && (l = s(l)), l;
        }
    };
};

}
