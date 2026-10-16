"use strict";
require.d(exports, {
    $C: ()=>p,
    Ds: ()=>T,
    GU: ()=>I,
    HD: ()=>B,
    N8: ()=>A,
    NR: ()=>a,
    S: ()=>C,
    WL: ()=>g,
    Z9: ()=>M,
    ZZ: ()=>v,
    ae: ()=>D,
    cV: ()=>R,
    cb: ()=>c,
    eu: ()=>y,
    hK: ()=>d,
    m2: ()=>i,
    n_: ()=>q,
    sl: ()=>x,
    u1: ()=>m,
    v0: ()=>S,
    xI: ()=>b,
    zf: ()=>f
});
var n = require("./module-29017.js"), s = require("./module-34230.js"), o = require("./module-42918.js");
function i(...e) {
    return e.reduce((e, t)=>({
            ...e,
            ...null != t ? t : {}
        }), {});
}
function a(e) {
    return new ReadableStream({
        async pull (t) {
            try {
                const { value: r, done: n } = await e.next();
                n ? t.close() : t.enqueue(r);
            } catch (e) {
                t.error(e);
            }
        },
        cancel () {}
    });
}
async function c(e) {
    return null == e ? Promise.resolve() : new Promise((t)=>setTimeout(t, e));
}
function l() {
    let e, t, r, n = "", s = [];
    function o(e, t) {
        if ("" === e) return void i(t);
        if (e.startsWith(":")) return;
        const r = e.indexOf(":");
        if (-1 === r) return void a(e, "");
        const n = r + 1;
        a(e.slice(0, r), n < e.length && " " === e[n] ? e.slice(n + 1) : e.slice(n));
    }
    function i(n) {
        s.length > 0 && (n.enqueue({
            event: e,
            data: s.join("\n"),
            id: t,
            retry: r
        }), s = [], e = void 0, r = void 0);
    }
    function a(n, o) {
        switch(n){
            case "event":
                e = o;
                break;
            case "data":
                s.push(o);
                break;
            case "id":
                t = o;
                break;
            case "retry":
                const n = parseInt(o, 10);
                isNaN(n) || (r = n);
        }
    }
    return new TransformStream({
        transform (e, t) {
            const { lines: r, incompleteLine: s } = function(e, t) {
                const r = [];
                let n = e;
                for(let e = 0; e < t.length;){
                    const s = t[e++];
                    "\n" === s ? (r.push(n), n = "") : "\r" === s ? (r.push(n), n = "", "\n" === t[e] && e++) : n += s;
                }
                return {
                    lines: r,
                    incompleteLine: n
                };
            }(n, e);
            n = s;
            for(let e = 0; e < r.length; e++)o(r[e], t);
        },
        flush (e) {
            o(n, e), i(e);
        }
    });
}
function u(e) {
    const t = {};
    return e.headers.forEach((e, r)=>{
        t[r] = e;
    }), t;
}
var d = ({ prefix: e, size: t = 16, alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: o = "-" } = {})=>{
    const i = (0, s.customAlphabet)(r, t);
    if (null == e) return i;
    if (r.includes(o)) throw new n.Di({
        argument: "separator",
        message: `The separator "${o}" must not be part of the alphabet "${r}".`
    });
    return (t)=>`${e}${o}${i(t)}`;
}, p = d();
function m(e) {
    return null == e ? "unknown error" : "string" == typeof e ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function h(e) {
    return Object.fromEntries(Object.entries(e).filter(([e, t])=>null != t));
}
function f(e) {
    return e instanceof Error && ("AbortError" === e.name || "TimeoutError" === e.name);
}
function g({ apiKey: e, environmentVariableName: t, apiKeyParameterName: r = "apiKey", description: s }) {
    if ("string" == typeof e) return e;
    if (null != e) throw new n.Kq({
        message: `${s} API key must be a string.`
    });
    if ("undefined" == typeof process) throw new n.Kq({
        message: `${s} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`
    });
    if (null == (e = process.env[t])) throw new n.Kq({
        message: `${s} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`
    });
    if ("string" != typeof e) throw new n.Kq({
        message: `${s} API key must be a string. The value of the ${t} environment variable is not a string.`
    });
    return e;
}
var y = Symbol.for("vercel.ai.validator");
function w(e) {
    return function(e) {
        return "object" == typeof e && null !== e && y in e && !0 === e[y] && "validate" in e;
    }(e) ? e : (t = e, r = (e)=>{
        const r = t.safeParse(e);
        return r.success ? {
            success: !0,
            value: r.data
        } : {
            success: !1,
            error: r.error
        };
    }, {
        [y]: !0,
        validate: r
    });
    var t, r;
}
function v({ value: e, schema: t }) {
    const r = w(t);
    try {
        if (null == r.validate) return {
            success: !0,
            value: e
        };
        const t = r.validate(e);
        return t.success ? t : {
            success: !1,
            error: n.iM.wrap({
                value: e,
                cause: t.error
            })
        };
    } catch (t) {
        return {
            success: !1,
            error: n.iM.wrap({
                value: e,
                cause: t
            })
        };
    }
}
function _({ text: e, schema: t }) {
    try {
        const r = o.parse(e);
        return null == t ? r : function({ value: e, schema: t }) {
            const r = v({
                value: e,
                schema: t
            });
            if (!r.success) throw n.iM.wrap({
                value: e,
                cause: r.error
            });
            return r.value;
        }({
            value: r,
            schema: t
        });
    } catch (t) {
        if (n.u6.isInstance(t) || n.iM.isInstance(t)) throw t;
        throw new n.u6({
            text: e,
            cause: t
        });
    }
}
function A({ text: e, schema: t }) {
    try {
        const r = o.parse(e);
        if (null == t) return {
            success: !0,
            value: r,
            rawValue: r
        };
        const n = v({
            value: r,
            schema: t
        });
        return n.success ? {
            ...n,
            rawValue: r
        } : n;
    } catch (t) {
        return {
            success: !1,
            error: n.u6.isInstance(t) ? t : new n.u6({
                text: e,
                cause: t
            })
        };
    }
}
function S(e) {
    try {
        return o.parse(e), !0;
    } catch (e) {
        return !1;
    }
}
function b({ provider: e, providerOptions: t, schema: r }) {
    if (null == (null == t ? void 0 : t[e])) return;
    const s = v({
        value: t[e],
        schema: r
    });
    if (!s.success) throw new n.Di({
        argument: "providerOptions",
        message: `invalid ${e} provider options`,
        cause: s.error
    });
    return s.value;
}
var E = ()=>globalThis.fetch, I = async ({ url: e, headers: t, body: r, failedResponseHandler: n, successfulResponseHandler: s, abortSignal: o, fetch: i })=>k({
        url: e,
        headers: {
            "Content-Type": "application/json",
            ...t
        },
        body: {
            content: JSON.stringify(r),
            values: r
        },
        failedResponseHandler: n,
        successfulResponseHandler: s,
        abortSignal: o,
        fetch: i
    }), C = async ({ url: e, headers: t, formData: r, failedResponseHandler: n, successfulResponseHandler: s, abortSignal: o, fetch: i })=>k({
        url: e,
        headers: t,
        body: {
            content: r,
            values: Object.fromEntries(r.entries())
        },
        failedResponseHandler: n,
        successfulResponseHandler: s,
        abortSignal: o,
        fetch: i
    }), k = async ({ url: e, headers: t = {}, body: r, successfulResponseHandler: s, failedResponseHandler: o, abortSignal: i, fetch: a = E() })=>{
    try {
        const c = await a(e, {
            method: "POST",
            headers: h(t),
            body: r.content,
            signal: i
        }), l = u(c);
        if (!c.ok) {
            let t;
            try {
                t = await o({
                    response: c,
                    url: e,
                    requestBodyValues: r.values
                });
            } catch (t) {
                if (f(t) || n.hL.isInstance(t)) throw t;
                throw new n.hL({
                    message: "Failed to process error response",
                    cause: t,
                    statusCode: c.status,
                    url: e,
                    responseHeaders: l,
                    requestBodyValues: r.values
                });
            }
            throw t.value;
        }
        try {
            return await s({
                response: c,
                url: e,
                requestBodyValues: r.values
            });
        } catch (t) {
            if (t instanceof Error && (f(t) || n.hL.isInstance(t))) throw t;
            throw new n.hL({
                message: "Failed to process successful response",
                cause: t,
                statusCode: c.status,
                url: e,
                responseHeaders: l,
                requestBodyValues: r.values
            });
        }
    } catch (t) {
        if (f(t)) throw t;
        if (t instanceof TypeError && "fetch failed" === t.message) {
            const s = t.cause;
            if (null != s) throw new n.hL({
                message: `Cannot connect to API: ${s.message}`,
                cause: s,
                url: e,
                requestBodyValues: r.values,
                isRetryable: !0
            });
        }
        throw t;
    }
};
var x = ({ errorSchema: e, errorToMessage: t, isRetryable: r })=>async ({ response: s, url: o, requestBodyValues: i })=>{
        const a = await s.text(), c = u(s);
        if ("" === a.trim()) return {
            responseHeaders: c,
            value: new n.hL({
                message: s.statusText,
                url: o,
                requestBodyValues: i,
                statusCode: s.status,
                responseHeaders: c,
                responseBody: a,
                isRetryable: null == r ? void 0 : r(s)
            })
        };
        try {
            const l = _({
                text: a,
                schema: e
            });
            return {
                responseHeaders: c,
                value: new n.hL({
                    message: t(l),
                    url: o,
                    requestBodyValues: i,
                    statusCode: s.status,
                    responseHeaders: c,
                    responseBody: a,
                    data: l,
                    isRetryable: null == r ? void 0 : r(s, l)
                })
            };
        } catch (e) {
            return {
                responseHeaders: c,
                value: new n.hL({
                    message: s.statusText,
                    url: o,
                    requestBodyValues: i,
                    statusCode: s.status,
                    responseHeaders: c,
                    responseBody: a,
                    isRetryable: null == r ? void 0 : r(s)
                })
            };
        }
    }, T = (e)=>async ({ response: t })=>{
        const r = u(t);
        if (null == t.body) throw new n.Tt({});
        return {
            responseHeaders: r,
            value: t.body.pipeThrough(new TextDecoderStream).pipeThrough(l()).pipeThrough(new TransformStream({
                transform ({ data: t }, r) {
                    "[DONE]" !== t && r.enqueue(A({
                        text: t,
                        schema: e
                    }));
                }
            }))
        };
    }, R = (e)=>async ({ response: t, url: r, requestBodyValues: s })=>{
        const o = await t.text(), i = A({
            text: o,
            schema: e
        }), a = u(t);
        if (!i.success) throw new n.hL({
            message: "Invalid JSON response",
            cause: i.error,
            statusCode: t.status,
            responseHeaders: a,
            responseBody: o,
            url: r,
            requestBodyValues: s
        });
        return {
            responseHeaders: a,
            value: i.value,
            rawValue: i.rawValue
        };
    }, B = ()=>async ({ response: e, url: t, requestBodyValues: r })=>{
        const s = u(e);
        if (!e.body) throw new n.hL({
            message: "Response body is empty",
            url: t,
            requestBodyValues: r,
            statusCode: e.status,
            responseHeaders: s,
            responseBody: void 0
        });
        try {
            const t = await e.arrayBuffer();
            return {
                responseHeaders: s,
                value: new Uint8Array(t)
            };
        } catch (o) {
            throw new n.hL({
                message: "Failed to read response as array buffer",
                url: t,
                requestBodyValues: r,
                statusCode: e.status,
                responseHeaders: s,
                responseBody: void 0,
                cause: o
            });
        }
    }, { btoa: P, atob: J } = globalThis;
function M(e) {
    const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = J(t);
    return Uint8Array.from(r, (e)=>e.codePointAt(0));
}
function q(e) {
    let t = "";
    for(let r = 0; r < e.length; r++)t += String.fromCodePoint(e[r]);
    return P(t);
}
function D(e) {
    return null == e ? void 0 : e.replace(/\/$/, "");
}
