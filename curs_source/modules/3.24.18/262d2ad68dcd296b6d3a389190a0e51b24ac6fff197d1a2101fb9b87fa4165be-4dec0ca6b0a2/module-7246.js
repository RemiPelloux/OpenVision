"use strict";
function n(e) {
    const t = Object.values(e).filter((e)=>"number" == typeof e);
    return Object.entries(e).filter(([e, r])=>-1 === t.indexOf(+e)).map(([e, t])=>t);
}
function o(e, t) {
    return "bigint" == typeof t ? t.toString() : t;
}
function s(e) {
    return {
        get value () {
            {
                const t = e();
                return Object.defineProperty(this, "value", {
                    value: t
                }), t;
            }
        }
    };
}
function i(e) {
    return null == e;
}
function a(e) {
    const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, r);
}
function l(e, t) {
    const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, o = r > n ? r : n;
    return Number.parseInt(e.toFixed(o).replace(".", "")) % Number.parseInt(t.toFixed(o).replace(".", "")) / 10 ** o;
}
function c(e, t, r) {
    Object.defineProperty(e, t, {
        get () {
            {
                const n = r();
                return e[t] = n, n;
            }
        },
        set (r) {
            Object.defineProperty(e, t, {
                value: r
            });
        },
        configurable: !0
    });
}
function u(e, t, r) {
    Object.defineProperty(e, t, {
        value: r,
        writable: !0,
        enumerable: !0,
        configurable: !0
    });
}
function d(e) {
    return JSON.stringify(e);
}
require.d(exports, {
    $f: ()=>y,
    A2: ()=>w,
    Gv: ()=>h,
    LG: ()=>l,
    NM: ()=>b,
    OH: ()=>T,
    PO: ()=>s,
    QH: ()=>I,
    Qd: ()=>f,
    Rc: ()=>R,
    UQ: ()=>d,
    Up: ()=>S,
    Vy: ()=>u,
    X$: ()=>k,
    cJ: ()=>x,
    cl: ()=>i,
    gJ: ()=>c,
    gx: ()=>p,
    h1: ()=>E,
    hI: ()=>m,
    iR: ()=>M,
    k8: ()=>o,
    lQ: ()=>A,
    mw: ()=>C,
    o8: ()=>v,
    p6: ()=>a,
    qQ: ()=>g,
    sn: ()=>O,
    w5: ()=>n,
    zH: ()=>_
});
const p = Error.captureStackTrace ? Error.captureStackTrace : (...e)=>{};
function h(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
const m = s(()=>{
    if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        return new Function(""), !0;
    } catch (e) {
        return !1;
    }
});
function f(e) {
    if (!1 === h(e)) return !1;
    const t = e.constructor;
    if (void 0 === t) return !0;
    const r = t.prototype;
    return !1 !== h(r) && !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf");
}
const g = new Set([
    "string",
    "number",
    "symbol"
]);
new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
function y(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function v(e, t, r) {
    const n = new e._zod.constr(t ?? e._zod.def);
    return t && !r?.parent || (n._zod.parent = e), n;
}
function w(e) {
    const t = e;
    if (!t) return {};
    if ("string" == typeof t) return {
        error: ()=>t
    };
    if (void 0 !== t?.message) {
        if (void 0 !== t?.error) throw new Error("Cannot specify both `message` and `error` params");
        t.error = t.message;
    }
    return delete t.message, "string" == typeof t.error ? {
        ...t,
        error: ()=>t.error
    } : t;
}
function b(e) {
    return Object.keys(e).filter((t)=>"optional" === e[t]._zod.optin && "optional" === e[t]._zod.optout);
}
const _ = {
    safeint: [
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    ],
    int32: [
        -2147483648,
        2147483647
    ],
    uint32: [
        0,
        4294967295
    ],
    float32: [
        -34028234663852886e22,
        34028234663852886e22
    ],
    float64: [
        -Number.MAX_VALUE,
        Number.MAX_VALUE
    ]
};
function S(e, t) {
    const r = {}, n = e._zod.def;
    for(const e in t){
        if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
        t[e] && (r[e] = n.shape[e]);
    }
    return v(e, {
        ...e._zod.def,
        shape: r,
        checks: []
    });
}
function x(e, t) {
    const r = {
        ...e._zod.def.shape
    }, n = e._zod.def;
    for(const e in t){
        if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
        t[e] && delete r[e];
    }
    return v(e, {
        ...e._zod.def,
        shape: r,
        checks: []
    });
}
function k(e, t) {
    if (!f(t)) throw new Error("Invalid input to extend: expected a plain object");
    const r = {
        ...e._zod.def,
        get shape () {
            const r = {
                ...e._zod.def.shape,
                ...t
            };
            return u(this, "shape", r), r;
        },
        checks: []
    };
    return v(e, r);
}
function E(e, t) {
    return v(e, {
        ...e._zod.def,
        get shape () {
            const r = {
                ...e._zod.def.shape,
                ...t._zod.def.shape
            };
            return u(this, "shape", r), r;
        },
        catchall: t._zod.def.catchall,
        checks: []
    });
}
function T(e, t, r) {
    const n = t._zod.def.shape, o = {
        ...n
    };
    if (r) for(const t in r){
        if (!(t in n)) throw new Error(`Unrecognized key: "${t}"`);
        r[t] && (o[t] = e ? new e({
            type: "optional",
            innerType: n[t]
        }) : n[t]);
    }
    else for(const t in n)o[t] = e ? new e({
        type: "optional",
        innerType: n[t]
    }) : n[t];
    return v(t, {
        ...t._zod.def,
        shape: o,
        checks: []
    });
}
function C(e, t, r) {
    const n = t._zod.def.shape, o = {
        ...n
    };
    if (r) for(const t in r){
        if (!(t in o)) throw new Error(`Unrecognized key: "${t}"`);
        r[t] && (o[t] = new e({
            type: "nonoptional",
            innerType: n[t]
        }));
    }
    else for(const t in n)o[t] = new e({
        type: "nonoptional",
        innerType: n[t]
    });
    return v(t, {
        ...t._zod.def,
        shape: o,
        checks: []
    });
}
function I(e, t = 0) {
    for(let r = t; r < e.issues.length; r++)if (!0 !== e.issues[r]?.continue) return !0;
    return !1;
}
function A(e, t) {
    return t.map((t)=>{
        var r;
        return (r = t).path ?? (r.path = []), t.path.unshift(e), t;
    });
}
function P(e) {
    return "string" == typeof e ? e : e?.message;
}
function M(e, t, r) {
    const n = {
        ...e,
        path: e.path ?? []
    };
    if (!e.message) {
        const o = P(e.inst?._zod.def?.error?.(e)) ?? P(t?.error?.(e)) ?? P(r.customError?.(e)) ?? P(r.localeError?.(e)) ?? "Invalid input";
        n.message = o;
    }
    return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function R(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function O(...e) {
    const [t, r, n] = e;
    return "string" == typeof t ? {
        message: t,
        code: "custom",
        input: r,
        inst: n
    } : {
        ...t
    };
}
