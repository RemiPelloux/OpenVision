import { f8, g8 } from "./browser.js";
import { d8, h8 } from "./console.js";
import { gt, tt } from "./debug-build.js";
import { Ke, lt } from "./debug-logger.js";
import { ar } from "./integration.js";
import { CC, fn } from "./is.js";
import { kc } from "./linkederrors.js";
import { Y8, bc } from "./normalize.js";
import { _r } from "./object.js";
import { AC, ao, ok } from "./scope.js";
import { ak } from "./spanUtils.js";
import { Ui } from "./string.js";
import { h } from "./tslib.es6.js";
function ud(e) {
    switch(CC.call(e)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return kc(e, Error);
    }
}
function c3e(e) {
    return typeof Event < "u" && kc(e, Event);
}
function l3e(e) {
    return typeof Element < "u" && kc(e, Element);
}
function u3e(e) {
    return ok(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function m3e(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n = e;
        const r = 5, s = [];
        let i = 0, a = 0;
        const o = " > ", l = o.length;
        let d;
        const u = Array.isArray(t) ? t : t.keyAttrs, m = !Array.isArray(t) && t.maxStringLength || f8;
        for(; n && i++ < r && (d = p3e(n, u), !(d === "html" || i > 1 && a + s.length * l + d.length >= m));)s.push(d), a += d.length, n = n.parentNode;
        return s.reverse().join(o);
    } catch  {
        return "<unknown>";
    }
}
function p3e(e, t) {
    const n = e, r = [];
    if (!n?.tagName) return "";
    if (g8.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    r.push(n.tagName.toLowerCase());
    const s = t?.length ? t.filter((a)=>n.getAttribute(a)).map((a)=>[
            a,
            n.getAttribute(a)
        ]) : null;
    if (s?.length) s.forEach((a)=>{
        r.push(`[${a[0]}="${a[1]}"]`);
    });
    else {
        n.id && r.push(`#${n.id}`);
        const a = n.className;
        if (a && ak(a)) {
            const o = a.split(/\s+/);
            for (const l of o)r.push(`.${l}`);
        }
    }
    const i = [
        "aria-label",
        "type",
        "name",
        "title",
        "alt"
    ];
    for (const a of i){
        const o = n.getAttribute(a);
        o && r.push(`[${a}="${o}"]`);
    }
    return r.join("");
}
function f3e(e) {
    if (ud(e)) return {
        message: e.message,
        name: e.name,
        stack: e.stack,
        ...T8(e)
    };
    if (c3e(e)) {
        const t = {
            type: e.type,
            target: v8(e.target),
            currentTarget: v8(e.currentTarget),
            ...T8(e)
        };
        return typeof CustomEvent < "u" && kc(e, CustomEvent) && (t.detail = e.detail), t;
    } else return e;
}
function v8(e) {
    try {
        return l3e(e) ? m3e(e) : Object.prototype.toString.call(e);
    } catch  {
        return "<unknown>";
    }
}
function T8(e) {
    if (typeof e == "object" && e !== null) {
        const t = {};
        for(const n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    } else return {};
}
function HC(e, t = 100, n = 1 / 0) {
    try {
        return qC("", e, t, n);
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        };
    }
}
function qC(e, t, n = 1 / 0, r = 1 / 0, s = X3e()) {
    const [i, a] = s;
    if (t == null || [
        "boolean",
        "string"
    ].includes(typeof t) || typeof t == "number" && Number.isFinite(t)) return t;
    if (Y3e(t)) return "[SolidStore]";
    const o = z3e(e, t);
    if (!o.startsWith("[object ")) return o;
    if (t.__sentry_skip_normalization__) return t;
    const l = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
    if (l === 0) return o.replace("object ", "");
    if (i(t)) return "[Circular ~]";
    const d = t;
    if (d && typeof d.toJSON == "function") try {
        const v = d.toJSON();
        return qC("", v, l - 1, r, s);
    } catch  {}
    const u = Array.isArray(t) ? [] : {};
    let m = 0;
    const f = f3e(t);
    for(const v in f){
        if (!Object.prototype.hasOwnProperty.call(f, v)) continue;
        if (m >= r) {
            u[v] = "[MaxProperties ~]";
            break;
        }
        const T = Object.getOwnPropertyDescriptor(f, v);
        if (v === "children" && T && !("value" in T)) {
            u[v] = "[Getter]", m++;
            continue;
        }
        const S = f[v];
        u[v] = qC(v, S, l - 1, r, s), m++;
    }
    return a(t), u;
}
function z3e(e, t) {
    try {
        if (e === "domain" && t && typeof t == "object" && t._events) return "[Domain]";
        if (e === "domainEmitter") return "[DomainEmitter]";
        if (typeof global < "u" && t === global) return "[Global]";
        if (typeof window < "u" && t === window) return "[Window]";
        if (typeof document < "u" && t === document) return "[Document]";
        if (h8(t)) return "[VueViewModel]";
        if (u3e(t)) return "[SyntheticEvent]";
        if (typeof t == "number" && !Number.isFinite(t)) return `[${t}]`;
        if (typeof t == "function") return `[Function: ${d8(t)}]`;
        if (typeof t == "symbol") return `[${String(t)}]`;
        if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
        const n = J3e(t);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
    } catch (n) {
        return `**non-serializable** (${n})`;
    }
}
function Y3e(e) {
    if (e === null || typeof e != "object") return !1;
    try {
        return Object.getOwnPropertySymbols(e).some((t)=>t.description === Y8);
    } catch  {
        return !1;
    }
}
function J3e(e) {
    const t = Object.getPrototypeOf(e);
    return t?.constructor ? t.constructor.name : "null prototype";
}
function X3e() {
    const e = new WeakSet;
    function t(r) {
        return e.has(r) ? !0 : (e.add(r), !1);
    }
    function n(r) {
        e.delete(r);
    }
    return [
        t,
        n
    ];
}
function U6e(e, t = {}, n, r, s) {
    if (!t.originalException || !ud(t.originalException)) return e;
    const i = t.originalException.name || t.originalException.constructor.name, a = nB(t.originalException, r, s);
    if (a) {
        const o = {
            ...e.contexts
        }, l = HC(a, n);
        return ok(l) && (ao(l, "__sentry_skip_normalization__", !0), o[i] = l), {
            ...e,
            contexts: o
        };
    }
    return e;
}
function nB(e, t, n) {
    try {
        const r = [
            "name",
            "message",
            "stack",
            "line",
            "column",
            "fileName",
            "lineNumber",
            "columnNumber",
            "toJSON"
        ], s = {};
        for (const i of Object.keys(e)){
            if (r.indexOf(i) !== -1) continue;
            const a = e[i];
            s[i] = ud(a) || typeof a == "string" ? n ? AC(`${a}`, n) : `${a}` : a;
        }
        if (t && e.cause !== void 0) if (ud(e.cause)) {
            const i = e.cause.name || e.cause.constructor.name;
            s.cause = {
                [i]: nB(e.cause, !1, n)
            };
        } else s.cause = e.cause;
        if (typeof e.toJSON == "function") {
            const i = e.toJSON();
            for (const a of Object.keys(i)){
                const o = i[a];
                s[a] = ud(o) ? o.toString() : o;
            }
        }
        return s;
    } catch (r) {
        tt && lt.error("Unable to extract extra data from the Error object:", r);
    }
    return null;
}
var rB, sB, x6e;
export { HC, J3e, T8, U6e, X3e, Y3e, c3e, f3e, l3e, m3e, nB, p3e, qC, rB, sB, u3e, ud, v8, x6e, z3e };
var __wakaru_F6e_initialized = false;
export function F6e() {
if (__wakaru_F6e_initialized) return;
__wakaru_F6e_initialized = true;
"use strict";
h(), gt(), ar(), Ke(), fn(), bc(), _r(), Ui(), rB = "ExtraErrorData", sB = ((e = {})=>{
    const { depth: t = 3, captureErrorCause: n = !0 } = e;
    return {
        name: rB,
        processEvent (r, s, i) {
            const { maxValueLength: a } = i.getOptions();
            return U6e(r, s, t, n, a);
        }
    };
}), x6e = sB;

}
