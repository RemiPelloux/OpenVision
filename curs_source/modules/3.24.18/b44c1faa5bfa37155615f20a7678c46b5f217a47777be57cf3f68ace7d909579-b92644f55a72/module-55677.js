"use strict";
require.d(exports, {
    uz: ()=>Je,
    bm: ()=>Pe,
    U$: ()=>Re,
    ME: ()=>n.MEY,
    SW: ()=>a,
    Y: ()=>n.YaX,
    _o: ()=>Be,
    _N: ()=>n._NE
});
var n = require("./module-51108.js"), s = require("./module-77598.js"), o = require("./module-51455.js"), i = require("./module-76760.js");
"function" == typeof SuppressedError && SuppressedError;
Error;
Error;
"function" == typeof SuppressedError && SuppressedError;
function a(e) {
    const t = e;
    if (!t.resource || "object" != typeof t.resource) return t.uri ? `Resource: ${t.uri}${t.name ? ` (${t.name})` : ""}` : `Unsupported content type "${e.type}": ${JSON.stringify(e)}`;
    {
        const e = t.resource;
        if ("string" == typeof e.text) return e.text;
        if ("string" != typeof e.blob) return `Resource: ${e.uri ?? "unknown"}${e.name ? ` (${e.name})` : ""}`;
        try {
            return Buffer.from(e.blob, "base64").toString("utf8");
        } catch  {
            return `[Binary resource: ${e.uri ?? "unknown"}]`;
        }
    }
}
var c = require("./module-47381.js"), l = require("./module-25521.js"), u = require("./module-7246.js"), d = require("./module-87888.js"), p = require("./module-4287.js");
const m = c.xI("ZodMiniType", (e, t)=>{
    if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    l.W4.init(e, t), e.def = t, e.parse = (t, r)=>p.qg(e, t, r, {
            callee: e.parse
        }), e.safeParse = (t, r)=>p.xL(e, t, r), e.parseAsync = async (t, r)=>p.EJ(e, t, r, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (t, r)=>p.bp(e, t, r), e.check = (...r)=>e.clone({
            ...t,
            checks: [
                ...t.checks ?? [],
                ...r.map((e)=>"function" == typeof e ? {
                        _zod: {
                            check: e,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : e)
            ]
        }), e.clone = (t, r)=>u.o8(e, t, r), e.brand = ()=>e, e.register = (t, r)=>(t.add(e, r), e);
}), h = c.xI("ZodMiniString", (e, t)=>{
    l.$v.init(e, t), m.init(e, t);
});
function f(e) {
    return d.Rl(h, e);
}
const g = c.xI("ZodMiniNever", (e, t)=>{
    l.Um.init(e, t), m.init(e, t);
});
function y(e) {
    return d.G8(g, e);
}
const w = c.xI("ZodMiniArray", (e, t)=>{
    l.$p.init(e, t), m.init(e, t);
});
function v(e, t) {
    return new w({
        type: "array",
        element: e,
        ...u.A2(t)
    });
}
const _ = c.xI("ZodMiniObject", (e, t)=>{
    l.L8.init(e, t), m.init(e, t), u.gJ(e, "shape", ()=>t.shape);
});
function A(e, t) {
    const r = {
        type: "object",
        get shape () {
            return u.Vy(this, "shape", {
                ...e
            }), this.shape;
        },
        ...u.A2(t)
    };
    return new _(r);
}
const S = c.xI("ZodMiniUnion", (e, t)=>{
    l.cu.init(e, t), m.init(e, t);
});
function b(e, t) {
    return new S({
        type: "union",
        options: e,
        ...u.A2(t)
    });
}
const E = c.xI("ZodMiniRecord", (e, t)=>{
    l.h.init(e, t), m.init(e, t);
});
function I(e, t, r) {
    return new E({
        type: "record",
        keyType: e,
        valueType: t,
        ...u.A2(r)
    });
}
const C = c.xI("ZodMiniEnum", (e, t)=>{
    l.VO.init(e, t), m.init(e, t);
});
function k(e, t) {
    const r = Array.isArray(e) ? Object.fromEntries(e.map((e)=>[
            e,
            e
        ])) : e;
    return new C({
        type: "enum",
        entries: r,
        ...u.A2(t)
    });
}
const x = c.xI("ZodMiniLiteral", (e, t)=>{
    l.nu.init(e, t), m.init(e, t);
});
function T(e, t) {
    return new x({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...u.A2(t)
    });
}
const R = c.xI("ZodMiniOptional", (e, t)=>{
    l.ig.init(e, t), m.init(e, t);
});
function B(e) {
    return new R({
        type: "optional",
        innerType: e
    });
}
const P = A({
    CLIENT_ID: f(),
    CLIENT_SECRET: B(f()),
    scopes: B(v(f()))
}), J = (M = {
    caBundle: f().check(d.WN(), d.m9(1), d.Eb(131072))
}, new _({
    type: "object",
    get shape () {
        return u.Vy(this, "shape", {
            ...M
        }), this.shape;
    },
    catchall: y(),
    ...u.A2(q)
}));
var M, q;
const D = b([
    A({
        type: B(T("stdio")),
        command: f(),
        args: B(v(f())),
        env: B(I(f(), f())),
        envFile: B(f()),
        cwd: B(f()),
        enabledTools: B(v(f()))
    }),
    A({
        type: B(k([
            "http",
            "sse"
        ])),
        url: f(),
        headers: B(I(f(), f())),
        auth: B(P),
        tls: B(J),
        placement: B(k([
            "server",
            "client"
        ])),
        enabledTools: B(v(f()))
    })
]);
A({
    mcpServers: I(f(), D)
});
Error;
require("./module-40283.js");
require("./module-48161.js");
var O = require("./module-37949.js"), N = require("./module-98875.js");
require("./module-65716.js");
require("./module-31421.js"), require("./module-61771.js"), require("./module-34175.js"), require("./module-73015.js"), require("./module-88485.js");
require("./module-3925.js");
require("./module-69361.js");
var F = require("./module-97712.js"), U = require("./module-90545.js");
class L {
    constructor(e){
        this._ajv = e ?? function() {
            const e = new F({
                strict: !1,
                validateFormats: !0,
                validateSchema: !1,
                allErrors: !0
            });
            return U(e), e;
        }();
    }
    getValidator(e) {
        const t = "$id" in e && "string" == typeof e.$id ? this._ajv.getSchema(e.$id) ?? this._ajv.compile(e) : this._ajv.compile(e);
        return (e)=>t(e) ? {
                valid: !0,
                data: e,
                errorMessage: void 0
            } : {
                valid: !1,
                data: void 0,
                errorMessage: this._ajv.errorsText(t.errors)
            };
    }
}
class $ extends Error {
    constructor(e, t){
        super(e), this.name = "ParseError", this.type = t.type, this.field = t.field, this.value = t.value, this.line = t.line;
    }
}
const Q = 32;
function j(e) {}
function G(e) {
    if ("function" == typeof e) throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent: t = j, onError: r = j, onRetry: n = j, onComment: s } = e, o = [];
    let i, a, c = !0, l = "", u = 0;
    function d(e) {
        let r = 0;
        if (-1 === e.indexOf("\r")) {
            let n = e.indexOf("\n", r);
            for(; -1 !== n;){
                if (r === n) {
                    u > 0 && t({
                        id: i,
                        event: a,
                        data: l
                    }), i = void 0, l = "", u = 0, a = void 0, r = n + 1, n = e.indexOf("\n", r);
                    continue;
                }
                const s = e.charCodeAt(r);
                if (H(e, r, s)) {
                    const s = e.charCodeAt(r + 5) === Q ? r + 6 : r + 5, o = e.slice(s, n);
                    if (0 === u && 10 === e.charCodeAt(n + 1)) {
                        t({
                            id: i,
                            event: a,
                            data: o
                        }), i = void 0, l = "", a = void 0, r = n + 2, n = e.indexOf("\n", r);
                        continue;
                    }
                    l = 0 === u ? o : `${l}\n${o}`, u++;
                } else z(e, r, s) ? a = e.slice(e.charCodeAt(r + 6) === Q ? r + 7 : r + 6, n) || void 0 : p(e, r, n);
                r = n + 1, n = e.indexOf("\n", r);
            }
            return e.slice(r);
        }
        for(; r < e.length;){
            const t = e.indexOf("\r", r), n = e.indexOf("\n", r);
            let s = -1;
            if (-1 !== t && -1 !== n ? s = t < n ? t : n : -1 !== t ? s = t === e.length - 1 ? -1 : t : -1 !== n && (s = n), -1 === s) break;
            p(e, r, s), r = s + 1, 13 === e.charCodeAt(r - 1) && 10 === e.charCodeAt(r) && r++;
        }
        return e.slice(r);
    }
    function p(e, r, n) {
        if (r === n) return u > 0 && t({
            id: i,
            event: a,
            data: l
        }), i = void 0, l = "", u = 0, void (a = void 0);
        const o = e.charCodeAt(r);
        if (H(e, r, o)) {
            const t = e.charCodeAt(r + 5) === Q ? r + 6 : r + 5, s = e.slice(t, n);
            return l = 0 === u ? s : `${l}\n${s}`, void u++;
        }
        if (z(e, r, o)) return void (a = e.slice(e.charCodeAt(r + 6) === Q ? r + 7 : r + 6, n) || void 0);
        if (105 === o && 100 === e.charCodeAt(r + 1) && 58 === e.charCodeAt(r + 2)) {
            const t = e.slice(e.charCodeAt(r + 3) === Q ? r + 4 : r + 3, n);
            return void (i = t.includes("\0") ? void 0 : t);
        }
        if (58 === o) {
            if (s) {
                const t = e.slice(r, n);
                s(t.slice(e.charCodeAt(r + 1) === Q ? 2 : 1));
            }
            return;
        }
        const c = e.slice(r, n), d = c.indexOf(":");
        if (-1 === d) return void m(c, "", c);
        const p = c.slice(0, d), h = c.charCodeAt(d + 1) === Q ? 2 : 1;
        m(p, c.slice(d + h), c);
    }
    function m(e, t, s) {
        switch(e){
            case "event":
                a = t || void 0;
                break;
            case "data":
                l = 0 === u ? t : `${l}\n${t}`, u++;
                break;
            case "id":
                i = t.includes("\0") ? void 0 : t;
                break;
            case "retry":
                /^\d+$/.test(t) ? n(parseInt(t, 10)) : r(new $(`Invalid \`retry\` value: "${t}"`, {
                    type: "invalid-retry",
                    value: t,
                    line: s
                }));
                break;
            default:
                r(new $(`Unknown field "${e.length > 20 ? `${e.slice(0, 20)}…` : e}"`, {
                    type: "unknown-field",
                    field: e,
                    value: t,
                    line: s
                }));
        }
    }
    return {
        feed: function(e) {
            if (c && (c = !1, 239 === e.charCodeAt(0) && 187 === e.charCodeAt(1) && 191 === e.charCodeAt(2) && (e = e.slice(3))), 0 === o.length) {
                const t = d(e);
                return void ("" !== t && o.push(t));
            }
            if (-1 === e.indexOf("\n") && -1 === e.indexOf("\r")) return void o.push(e);
            o.push(e);
            const t = o.join("");
            o.length = 0;
            const r = d(t);
            "" !== r && o.push(r);
        },
        reset: function(e = {}) {
            if (e.consume && o.length > 0) {
                const e = o.join("");
                p(e, 0, e.length);
            }
            c = !0, i = void 0, l = "", u = 0, a = void 0, o.length = 0;
        }
    };
}
function H(e, t, r) {
    return 100 === r && 97 === e.charCodeAt(t + 1) && 116 === e.charCodeAt(t + 2) && 97 === e.charCodeAt(t + 3) && 58 === e.charCodeAt(t + 4);
}
function z(e, t, r) {
    return 101 === r && 118 === e.charCodeAt(t + 1) && 101 === e.charCodeAt(t + 2) && 110 === e.charCodeAt(t + 3) && 116 === e.charCodeAt(t + 4) && 58 === e.charCodeAt(t + 5);
}
class W extends Event {
    constructor(e, t){
        var r, n;
        super(e), this.code = null != (r = null == t ? void 0 : t.code) ? r : void 0, this.message = null != (n = null == t ? void 0 : t.message) ? n : void 0;
    }
    [Symbol.for("nodejs.util.inspect.custom")](e, t, r) {
        return r(K(this), t);
    }
    [Symbol.for("Deno.customInspect")](e, t) {
        return e(K(this), t);
    }
}
function V(e) {
    return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(V).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${V(e.cause)}` : e.message : `${e}`;
}
function K(e) {
    return {
        type: e.type,
        message: e.message,
        code: e.code,
        defaultPrevented: e.defaultPrevented,
        cancelable: e.cancelable,
        timeStamp: e.timeStamp
    };
}
var Y, Z, X, ee, te, re, ne, se, oe, ie, ae, ce, le, ue, de, pe, me, he, fe, ge, ye, we, ve, _e = (e)=>{
    throw TypeError(e);
}, Ae = (e, t, r)=>t.has(e) || _e("Cannot " + r), Se = (e, t, r)=>(Ae(e, t, "read from private field"), r ? r.call(e) : t.get(e)), be = (e, t, r)=>t.has(e) ? _e("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ee = (e, t, r, n)=>(Ae(e, t, "write to private field"), t.set(e, r), r), Ie = (e, t, r)=>(Ae(e, t, "access private method"), r);
class Ce extends EventTarget {
    constructor(e, t){
        var r, n;
        super(), be(this, ue), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, be(this, Y), be(this, Z), be(this, X), be(this, ee), be(this, te), be(this, re), be(this, ne), be(this, se, null), be(this, oe), be(this, ie), be(this, ae, null), be(this, ce, null), be(this, le, null), be(this, pe, async (e)=>{
            var t;
            Se(this, ie).reset();
            const { body: r, redirected: n, status: s, headers: o } = e;
            if (204 === s) return Ie(this, ue, ye).call(this, "Server sent HTTP 204, not reconnecting", 204), void this.close();
            if (Ee(this, X, n ? new URL(e.url) : void 0), 200 !== s) return void Ie(this, ue, ye).call(this, `Non-200 status code (${s})`, s);
            if (!(o.get("content-type") || "").startsWith("text/event-stream")) return void Ie(this, ue, ye).call(this, 'Invalid content type, expected "text/event-stream"', s);
            if (Se(this, Y) === this.CLOSED) return;
            Ee(this, Y, this.OPEN);
            const i = new Event("open");
            if (null == (t = Se(this, le)) || t.call(this, i), this.dispatchEvent(i), "object" != typeof r || !r || !("getReader" in r)) return Ie(this, ue, ye).call(this, "Invalid response body, expected a web ReadableStream", s), void this.close();
            const a = new TextDecoder, c = r.getReader();
            let l = !0;
            do {
                const { done: e, value: t } = await c.read();
                t && Se(this, ie).feed(a.decode(t, {
                    stream: !e
                })), e && (l = !1, Se(this, ie).reset(), Ie(this, ue, we).call(this));
            }while (l)
        }), be(this, me, (e)=>{
            Ee(this, oe, void 0), "AbortError" !== e.name && "aborted" !== e.type && Ie(this, ue, we).call(this, V(e));
        }), be(this, fe, (e)=>{
            "string" == typeof e.id && Ee(this, se, e.id);
            const t = new MessageEvent(e.event || "message", {
                data: e.data,
                origin: Se(this, X) ? Se(this, X).origin : Se(this, Z).origin,
                lastEventId: e.id || ""
            });
            Se(this, ce) && (!e.event || "message" === e.event) && Se(this, ce).call(this, t), this.dispatchEvent(t);
        }), be(this, ge, (e)=>{
            Ee(this, re, e);
        }), be(this, ve, ()=>{
            Ee(this, ne, void 0), Se(this, Y) === this.CONNECTING && Ie(this, ue, de).call(this);
        });
        try {
            if (e instanceof URL) Ee(this, Z, e);
            else {
                if ("string" != typeof e) throw new Error("Invalid URL");
                Ee(this, Z, new URL(e, function() {
                    const e = "document" in globalThis ? globalThis.document : void 0;
                    return e && "object" == typeof e && "baseURI" in e && "string" == typeof e.baseURI ? e.baseURI : void 0;
                }()));
            }
        } catch  {
            throw function(e) {
                const t = globalThis.DOMException;
                return "function" == typeof t ? new t(e, "SyntaxError") : new SyntaxError(e);
            }("An invalid or illegal string was specified");
        }
        Ee(this, ie, G({
            onEvent: Se(this, fe),
            onRetry: Se(this, ge)
        })), Ee(this, Y, this.CONNECTING), Ee(this, re, 3e3), Ee(this, te, null != (r = null == t ? void 0 : t.fetch) ? r : globalThis.fetch), Ee(this, ee, null != (n = null == t ? void 0 : t.withCredentials) && n), Ie(this, ue, de).call(this);
    }
    get readyState() {
        return Se(this, Y);
    }
    get url() {
        return Se(this, Z).href;
    }
    get withCredentials() {
        return Se(this, ee);
    }
    get onerror() {
        return Se(this, ae);
    }
    set onerror(e) {
        Ee(this, ae, e);
    }
    get onmessage() {
        return Se(this, ce);
    }
    set onmessage(e) {
        Ee(this, ce, e);
    }
    get onopen() {
        return Se(this, le);
    }
    set onopen(e) {
        Ee(this, le, e);
    }
    addEventListener(e, t, r) {
        const n = t;
        super.addEventListener(e, n, r);
    }
    removeEventListener(e, t, r) {
        const n = t;
        super.removeEventListener(e, n, r);
    }
    close() {
        Se(this, ne) && clearTimeout(Se(this, ne)), Se(this, Y) !== this.CLOSED && (Se(this, oe) && Se(this, oe).abort(), Ee(this, Y, this.CLOSED), Ee(this, oe, void 0));
    }
}
Y = new WeakMap, Z = new WeakMap, X = new WeakMap, ee = new WeakMap, te = new WeakMap, re = new WeakMap, ne = new WeakMap, se = new WeakMap, oe = new WeakMap, ie = new WeakMap, ae = new WeakMap, ce = new WeakMap, le = new WeakMap, ue = new WeakSet, de = function() {
    Ee(this, Y, this.CONNECTING), Ee(this, oe, new AbortController), Se(this, te)(Se(this, Z), Ie(this, ue, he).call(this)).then(Se(this, pe)).catch(Se(this, me));
}, pe = new WeakMap, me = new WeakMap, he = function() {
    var e;
    const t = {
        mode: "cors",
        redirect: "follow",
        headers: {
            Accept: "text/event-stream",
            ...Se(this, se) ? {
                "Last-Event-ID": Se(this, se)
            } : void 0
        },
        cache: "no-store",
        signal: null == (e = Se(this, oe)) ? void 0 : e.signal
    };
    return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, fe = new WeakMap, ge = new WeakMap, ye = function(e, t) {
    var r;
    Se(this, Y) !== this.CLOSED && Ee(this, Y, this.CLOSED);
    const n = new W("error", {
        code: t,
        message: e
    });
    null == (r = Se(this, ae)) || r.call(this, n), this.dispatchEvent(n);
}, we = function(e, t) {
    var r;
    if (Se(this, Y) === this.CLOSED) return;
    Ee(this, Y, this.CONNECTING);
    const n = new W("error", {
        code: t,
        message: e
    });
    null == (r = Se(this, ae)) || r.call(this, n), this.dispatchEvent(n), Ee(this, ne, setTimeout(Se(this, ve), Se(this, re)));
}, ve = new WeakMap, Ce.CONNECTING = 0, Ce.OPEN = 1, Ce.CLOSED = 2;
Error;
require("./module-31762.js");
const ke = require("node:process");
require("./module-57075.js");
ke.platform;
TransformStream;
Error;
new class {
    constructor({ maxSchemasPerCompiler: e = 2048, createCompiler: t = ()=>new L } = {}){
        this.compiled = new Map, this.maxSchemasPerCompiler = e, this.createCompiler = t, this.compiler = t();
    }
    get compiledSchemaCount() {
        return this.compiled.size;
    }
    getValidator(e) {
        let t;
        return (r)=>(t ??= this.compile(e), t(r));
    }
    compile(e) {
        const t = JSON.stringify(e), r = (0, s.createHash)("sha256").update(t).digest("base64url"), n = this.compiled.get(r);
        if (void 0 !== n) return n;
        this.compiled.size >= this.maxSchemasPerCompiler && (this.compiler = this.createCompiler(), this.compiled.clear());
        const o = (t.includes('"$id"') ? this.createCompiler() : this.compiler).getValidator(e);
        return this.compiled.set(r, o), o;
    }
};
var xe = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Te = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
new Set;
class Re extends Error {
    constructor(e, t){
        super(`Tool ${e} not found, available tools: ${t.join(", ")}`), this.toolName = e, this.availableTools = t, this.name = "McpToolNotFoundError";
    }
}
function Be(e) {
    if (e instanceof Re) return !0;
    if (!(e instanceof Error) || "McpToolNotFoundError" !== e.name) return !1;
    const t = e;
    return "string" == typeof t.toolName && Array.isArray(t.availableTools);
}
class Pe extends Error {
    constructor(e, t){
        super(`MCP server ${e} not found, available servers: ${t.join(", ")}`), this.serverName = e, this.availableServers = t, this.name = "McpServerNotFoundError";
    }
}
Error;
Error;
class Je {
    constructor(e){
        this.manager = e;
    }
    async getClients(e) {
        return this.manager.getClients();
    }
    async getClient(e, t) {
        return this.manager.getClient(t);
    }
    async getInstructions(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = xe(t, (0, N.VI)(e.withName("ManagerMcpLease.getInstructions")), !1);
            return await this.manager.getInstructions(r.ctx);
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            Te(t);
        }
    }
    async getToolSet(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = xe(t, (0, N.VI)(e.withName("ManagerMcpLease.getToolSet")), !1);
            return await this.manager.getToolSet(r.ctx);
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            Te(t);
        }
    }
    async getTools(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = xe(t, (0, N.VI)(e.withName("ManagerMcpLease.getTools")), !1);
            return (await this.getToolSet(r.ctx)).getTools();
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            Te(t);
        }
    }
    async getToolsForServers(e, t) {
        const r = new Set(t);
        return (await this.getTools(e)).filter((e)=>r.has(e.clientKey));
    }
    onDidChange(e) {
        return {
            dispose: this.manager.onDidChange(()=>e(void 0))
        };
    }
    async reconcileSelection(e, t, r) {
        for (const e of t.removed){
            const t = this.manager.getClient(e);
            this.manager.deleteClient(e);
            try {
                await t?.close?.();
            } catch  {}
        }
        for (const n of t.added){
            if (this.manager.getClient(n)) continue;
            const t = await r(e, n);
            this.manager.setClient(n, t);
        }
    }
}
Error;
"function" == typeof SuppressedError && SuppressedError;
(0, O.h)("DefinitionMcpLoader");
Error;
require("./module-42233.js");
class Me {
    constructor(e){
        this.mcpAuthPath = e;
        const t = Me.mcpAuthPromises.get(e);
        if (t) this.mcpAuthPromise = t;
        else {
            const t = this.loadMcpAuth();
            this.mcpAuthPromise = t, Me.mcpAuthPromises.set(e, t), t.catch(()=>{
                Me.mcpAuthPromises.get(e) === t && Me.mcpAuthPromises.delete(e);
            });
        }
        Me.saveLocks.has(e) || Me.saveLocks.set(e, Promise.resolve());
    }
    async loadMcpAuth() {
        try {
            const e = await (0, o.readFile)(this.mcpAuthPath, "utf8"), t = JSON.parse(e);
            if (t && "object" == typeof t) {
                if (Object.values(t).some((e)=>e && "object" == typeof e && null !== e && ("access_token" in e || "refresh_token" in e) && !("tokens" in e) && !("clientInfo" in e))) {
                    const e = {};
                    for (const [r, n] of Object.entries(t))e[r] = {
                        tokens: n
                    };
                    return e;
                }
                const e = {};
                for (const [r, n] of Object.entries(t))n && "object" == typeof n && null !== n && (e[r] = {
                    tokens: "tokens" in n ? n.tokens : void 0,
                    clientInfo: "clientInfo" in n ? n.clientInfo : void 0
                });
                return e;
            }
            return {};
        } catch (e) {
            if (e instanceof Error && e.message.includes("ENOENT")) return {};
            throw e;
        }
    }
    async loadTokens(e) {
        const t = await this.mcpAuthPromise;
        return t[e]?.tokens;
    }
    async saveTokens(e, t) {
        await this.withSaveLock(async ()=>{
            const r = await this.mcpAuthPromise;
            r[e] || (r[e] = {}), r[e].tokens = t, await this.saveMcpAuth(r);
        });
    }
    async loadClientInformation(e) {
        const t = await this.mcpAuthPromise;
        return t[e]?.clientInfo;
    }
    async withSaveLock(e) {
        const t = Me.saveLocks.get(this.mcpAuthPath) ?? Promise.resolve();
        let r;
        Me.saveLocks.set(this.mcpAuthPath, new Promise((e)=>{
            r = e;
        }));
        try {
            return await t, await e();
        } finally{
            r();
        }
    }
    async saveClientInformation(e, t) {
        await this.withSaveLock(async ()=>{
            const r = await this.mcpAuthPromise;
            r[e] || (r[e] = {}), r[e].clientInfo = t, await this.saveMcpAuth(r);
        });
    }
    async deleteCredentials(e) {
        await this.withSaveLock(async ()=>{
            const t = await this.mcpAuthPromise;
            e in t && (delete t[e], await this.saveMcpAuth(t));
        });
    }
    async saveMcpAuth(e) {
        await (0, o.mkdir)(i.dirname(this.mcpAuthPath), {
            recursive: !0
        }), await (0, o.writeFile)(this.mcpAuthPath, JSON.stringify(e, null, 2));
    }
}
Me.mcpAuthPromises = new Map, Me.saveLocks = new Map;
