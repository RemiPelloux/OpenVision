import { ar } from "./integration.js";
import { cB, oB } from "./path_2.js";
import { h } from "./tslib.es6.js";
import { Ot, dn } from "./worldwide.js";
function W6e(e, t) {
    let n = 0;
    for(let r = e.length - 1; r >= 0; r--){
        const s = e[r];
        s === "." ? e.splice(r, 1) : s === ".." ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
    }
    if (t) for(; n--; n)e.unshift("..");
    return e;
}
function B6e(e) {
    const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e, n = oB.exec(t);
    return n ? n.slice(1) : [];
}
function iB(...e) {
    let t = "", n = !1;
    for(let r = e.length - 1; r >= -1 && !n; r--){
        const s = r >= 0 ? e[r] : "/";
        s && (t = `${s}/${t}`, n = s.charAt(0) === "/");
    }
    return t = W6e(t.split("/").filter((r)=>!!r), !n).join("/"), (n ? "/" : "") + t || ".";
}
function aB(e) {
    let t = 0;
    for(; t < e.length && e[t] === ""; t++);
    let n = e.length - 1;
    for(; n >= 0 && e[n] === ""; n--);
    return t > n ? [] : e.slice(t, n - t + 1);
}
function G6e(e, t) {
    e = iB(e).slice(1), t = iB(t).slice(1);
    const n = aB(e.split("/")), r = aB(t.split("/")), s = Math.min(n.length, r.length);
    let i = s;
    for(let o = 0; o < s; o++)if (n[o] !== r[o]) {
        i = o;
        break;
    }
    let a = [];
    for(let o = i; o < n.length; o++)a.push("..");
    return a = a.concat(r.slice(i)), a.join("/");
}
function V6e(e, t) {
    let n = B6e(e)[2] || "";
    return t && n.slice(t.length * -1) === t && (n = n.slice(0, n.length - t.length)), n;
}
function $6e({ isBrowser: e, root: t, prefix: n }) {
    return (r)=>{
        if (!r.filename) return r;
        const s = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"), i = /^\//.test(r.filename);
        if (e) {
            if (t) {
                const a = r.filename;
                a.indexOf(t) === 0 && (r.filename = a.replace(t, n));
            }
        } else if (s || i) {
            const a = s ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename, o = t ? G6e(t, a) : V6e(a);
            r.filename = `${n}${o}`;
        }
        return r;
    };
}
var lB, j6e;
export { $6e, B6e, G6e, V6e, W6e, aB, iB, j6e, lB };
var __wakaru_H6e_initialized = false;
export function H6e() {
if (__wakaru_H6e_initialized) return;
__wakaru_H6e_initialized = true;
"use strict";
h(), ar(), cB(), dn(), lB = "RewriteFrames", j6e = (e = {})=>{
    const t = e.root, n = e.prefix || "app:///", r = "window" in Ot && !!Ot.window, s = e.iteratee || $6e({
        isBrowser: r,
        root: t,
        prefix: n
    });
    function i(o) {
        try {
            return {
                ...o,
                exception: {
                    ...o.exception,
                    values: o.exception.values.map((l)=>({
                            ...l,
                            ...l.stacktrace && {
                                stacktrace: a(l.stacktrace)
                            }
                        }))
                }
            };
        } catch  {
            return o;
        }
    }
    function a(o) {
        return {
            ...o,
            frames: o?.frames?.map((l)=>s(l))
        };
    }
    return {
        name: lB,
        processEvent (o) {
            let l = o;
            return o.exception && Array.isArray(o.exception.values) && (l = i(l)), l;
        }
    };
};

}
