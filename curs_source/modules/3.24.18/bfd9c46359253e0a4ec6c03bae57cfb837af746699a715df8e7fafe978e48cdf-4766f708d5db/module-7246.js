"use strict";
function n(e) {
    const t = Object.values(e).filter((e)=>"number" == typeof e);
    return Object.entries(e).filter(([e, r])=>-1 === t.indexOf(+e)).map(([e, t])=>t);
}
function s(e, t) {
    return "bigint" == typeof t ? t.toString() : t;
}
function o(e) {
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
function c(e, t) {
    const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n;
    return Number.parseInt(e.toFixed(s).replace(".", "")) % Number.parseInt(t.toFixed(s).replace(".", "")) / 10 ** s;
}
function l(e, t, r) {
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
    A2: ()=>v,
    Gv: ()=>m,
    LG: ()=>c,
    NM: ()=>_,
    OH: ()=>I,
    PO: ()=>o,
    QH: ()=>C,
    Qd: ()=>f,
    Rc: ()=>M,
    UQ: ()=>d,
    Up: ()=>S,
    Vy: ()=>u,
    X$: ()=>x,
    cJ: ()=>k,
    cl: ()=>i,
    gJ: ()=>l,
    gx: ()=>p,
    h1: ()=>E,
    hI: ()=>h,
    iR: ()=>R,
    k8: ()=>s,
    lQ: ()=>P,
    mw: ()=>T,
    o8: ()=>w,
    p6: ()=>a,
    qQ: ()=>g,
    sn: ()=>J,
    w5: ()=>n,
    zH: ()=>b
});
const p = Error.captureStackTrace ? Error.captureStackTrace : (...e)=>{};
function m(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
const h = o(()=>{
    if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        return new Function(""), !0;
    } catch (e) {
        return !1;
    }
});
function f(e) {
    if (!1 === m(e)) return !1;
    const t = e.constructor;
    if (void 0 === t) return !0;
    const r = t.prototype;
    return !1 !== m(r) && !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf");
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
function w(e, t, r) {
    const n = new e._zod.constr(t ?? e._zod.def);
    return t && !r?.parent || (n._zod.parent = e), n;
}
function v(e) {
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
function _(e) {
    return Object.keys(e).filter((t)=>"optional" === e[t]._zod.optin && "optional" === e[t]._zod.optout);
}
const b = {
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
    return w(e, {
        ...e._zod.def,
        shape: r,
        checks: []
    });
}
function k(e, t) {
    const r = {
        ...e._zod.def.shape
    }, n = e._zod.def;
    for(const e in t){
        if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
        t[e] && delete r[e];
    }
    return w(e, {
        ...e._zod.def,
        shape: r,
        checks: []
    });
}
function x(e, t) {
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
    return w(e, r);
}
function E(e, t) {
    return w(e, {
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
function I(e, t, r) {
    const n = t._zod.def.shape, s = {
        ...n
    };
    if (r) for(const t in r){
        if (!(t in n)) throw new Error(`Unrecognized key: "${t}"`);
        r[t] && (s[t] = e ? new e({
            type: "optional",
            innerType: n[t]
        }) : n[t]);
    }
    else for(const t in n)s[t] = e ? new e({
        type: "optional",
        innerType: n[t]
    }) : n[t];
    return w(t, {
        ...t._zod.def,
        shape: s,
        checks: []
    });
}
function T(e, t, r) {
    const n = t._zod.def.shape, s = {
        ...n
    };
    if (r) for(const t in r){
        if (!(t in s)) throw new Error(`Unrecognized key: "${t}"`);
        r[t] && (s[t] = new e({
            type: "nonoptional",
            innerType: n[t]
        }));
    }
    else for(const t in n)s[t] = new e({
        type: "nonoptional",
        innerType: n[t]
    });
    return w(t, {
        ...t._zod.def,
        shape: s,
        checks: []
    });
}
function C(e, t = 0) {
    for(let r = t; r < e.issues.length; r++)if (!0 !== e.issues[r]?.continue) return !0;
    return !1;
}
function P(e, t) {
    return t.map((t)=>{
        var r;
        return (r = t).path ?? (r.path = []), t.path.unshift(e), t;
    });
}
function A(e) {
    return "string" == typeof e ? e : e?.message;
}
function R(e, t, r) {
    const n = {
        ...e,
        path: e.path ?? []
    };
    if (!e.message) {
        const s = A(e.inst?._zod.def?.error?.(e)) ?? A(t?.error?.(e)) ?? A(r.customError?.(e)) ?? A(r.localeError?.(e)) ?? "Invalid input";
        n.message = s;
    }
    return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function M(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function J(...e) {
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
