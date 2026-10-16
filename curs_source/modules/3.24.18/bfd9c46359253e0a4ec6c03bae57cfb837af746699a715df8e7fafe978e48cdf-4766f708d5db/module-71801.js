"use strict";
require.d(exports, {
    bm: ()=>Pe,
    U$: ()=>Te,
    ME: ()=>n.MEY,
    SW: ()=>a,
    Y: ()=>n.YaX,
    _o: ()=>Ce,
    _N: ()=>n._NE
});
var n = require("./module-41250.js"), s = require("./module-77598.js"), o = require("./module-51455.js"), i = require("./module-76760.js");
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
function b(e, t) {
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
function k(e, t) {
    return new S({
        type: "union",
        options: e,
        ...u.A2(t)
    });
}
const x = c.xI("ZodMiniRecord", (e, t)=>{
    l.h.init(e, t), m.init(e, t);
});
function E(e, t, r) {
    return new x({
        type: "record",
        keyType: e,
        valueType: t,
        ...u.A2(r)
    });
}
const I = c.xI("ZodMiniEnum", (e, t)=>{
    l.VO.init(e, t), m.init(e, t);
});
function T(e, t) {
    const r = Array.isArray(e) ? Object.fromEntries(e.map((e)=>[
            e,
            e
        ])) : e;
    return new I({
        type: "enum",
        entries: r,
        ...u.A2(t)
    });
}
const C = c.xI("ZodMiniLiteral", (e, t)=>{
    l.nu.init(e, t), m.init(e, t);
});
function P(e, t) {
    return new C({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...u.A2(t)
    });
}
const A = c.xI("ZodMiniOptional", (e, t)=>{
    l.ig.init(e, t), m.init(e, t);
});
function R(e) {
    return new A({
        type: "optional",
        innerType: e
    });
}
const M = b({
    CLIENT_ID: f(),
    CLIENT_SECRET: R(f()),
    scopes: R(v(f()))
}), J = (O = {
    caBundle: f().check(d.WN(), d.m9(1), d.Eb(131072))
}, new _({
    type: "object",
    get shape () {
        return u.Vy(this, "shape", {
            ...O
        }), this.shape;
    },
    catchall: y(),
    ...u.A2(B)
}));
var O, B;
const D = k([
    b({
        type: R(P("stdio")),
        command: f(),
        args: R(v(f())),
        env: R(E(f(), f())),
        envFile: R(f()),
        cwd: R(f()),
        enabledTools: R(v(f()))
    }),
    b({
        type: R(T([
            "http",
            "sse"
        ])),
        url: f(),
        headers: R(E(f(), f())),
        auth: R(M),
        tls: R(J),
        placement: R(T([
            "server",
            "client"
        ])),
        enabledTools: R(v(f()))
    })
]);
b({
    mcpServers: E(f(), D)
});
Error;
require("./module-40283.js");
require("./module-48161.js");
var q = require("./module-37949.js");
require("./module-98875.js"), require("./module-65716.js");
require("./module-31421.js"), require("./module-61771.js"), require("./module-34175.js"), require("./module-73015.js"), require("./module-88485.js");
require("./module-26306.js");
require("./module-69361.js");
var N = require("./module-97712.js"), F = require("./module-90545.js");
class U {
    constructor(e){
        this._ajv = e ?? function() {
            const e = new N({
                strict: !1,
                validateFormats: !0,
                validateSchema: !1,
                allErrors: !0
            });
            return F(e), e;
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
class L extends Error {
    constructor(e, t){
        super(e), this.name = "ParseError", this.type = t.type, this.field = t.field, this.value = t.value, this.line = t.line;
    }
}
const $ = 32;
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
                if (z(e, r, s)) {
                    const s = e.charCodeAt(r + 5) === $ ? r + 6 : r + 5, o = e.slice(s, n);
                    if (0 === u && 10 === e.charCodeAt(n + 1)) {
                        t({
                            id: i,
                            event: a,
                            data: o
                        }), i = void 0, l = "", a = void 0, r = n + 2, n = e.indexOf("\n", r);
                        continue;
                    }
                    l = 0 === u ? o : `${l}\n${o}`, u++;
                } else W(e, r, s) ? a = e.slice(e.charCodeAt(r + 6) === $ ? r + 7 : r + 6, n) || void 0 : p(e, r, n);
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
        if (z(e, r, o)) {
            const t = e.charCodeAt(r + 5) === $ ? r + 6 : r + 5, s = e.slice(t, n);
            return l = 0 === u ? s : `${l}\n${s}`, void u++;
        }
        if (W(e, r, o)) return void (a = e.slice(e.charCodeAt(r + 6) === $ ? r + 7 : r + 6, n) || void 0);
        if (105 === o && 100 === e.charCodeAt(r + 1) && 58 === e.charCodeAt(r + 2)) {
            const t = e.slice(e.charCodeAt(r + 3) === $ ? r + 4 : r + 3, n);
            return void (i = t.includes("\0") ? void 0 : t);
        }
        if (58 === o) {
            if (s) {
                const t = e.slice(r, n);
                s(t.slice(e.charCodeAt(r + 1) === $ ? 2 : 1));
            }
            return;
        }
        const c = e.slice(r, n), d = c.indexOf(":");
        if (-1 === d) return void m(c, "", c);
        const p = c.slice(0, d), h = c.charCodeAt(d + 1) === $ ? 2 : 1;
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
                /^\d+$/.test(t) ? n(parseInt(t, 10)) : r(new L(`Invalid \`retry\` value: "${t}"`, {
                    type: "invalid-retry",
                    value: t,
                    line: s
                }));
                break;
            default:
                r(new L(`Unknown field "${e.length > 20 ? `${e.slice(0, 20)}…` : e}"`, {
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
function z(e, t, r) {
    return 100 === r && 97 === e.charCodeAt(t + 1) && 116 === e.charCodeAt(t + 2) && 97 === e.charCodeAt(t + 3) && 58 === e.charCodeAt(t + 4);
}
function W(e, t, r) {
    return 101 === r && 118 === e.charCodeAt(t + 1) && 101 === e.charCodeAt(t + 2) && 110 === e.charCodeAt(t + 3) && 116 === e.charCodeAt(t + 4) && 58 === e.charCodeAt(t + 5);
}
class H extends Event {
    constructor(e, t){
        var r, n;
        super(e), this.code = null != (r = null == t ? void 0 : t.code) ? r : void 0, this.message = null != (n = null == t ? void 0 : t.message) ? n : void 0;
    }
    [Symbol.for("nodejs.util.inspect.custom")](e, t, r) {
        return r(V(this), t);
    }
    [Symbol.for("Deno.customInspect")](e, t) {
        return e(V(this), t);
    }
}
function K(e) {
    return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(K).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${K(e.cause)}` : e.message : `${e}`;
}
function V(e) {
    return {
        type: e.type,
        message: e.message,
        code: e.code,
        defaultPrevented: e.defaultPrevented,
        cancelable: e.cancelable,
        timeStamp: e.timeStamp
    };
}
var Y, Q, X, Z, ee, te, re, ne, se, oe, ie, ae, ce, le, ue, de, pe, me, he, fe, ge, ye, we, ve = (e)=>{
    throw TypeError(e);
}, _e = (e, t, r)=>t.has(e) || ve("Cannot " + r), be = (e, t, r)=>(_e(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Se = (e, t, r)=>t.has(e) ? ve("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ke = (e, t, r, n)=>(_e(e, t, "write to private field"), t.set(e, r), r), xe = (e, t, r)=>(_e(e, t, "access private method"), r);
class Ee extends EventTarget {
    constructor(e, t){
        var r, n;
        super(), Se(this, le), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, Se(this, Y), Se(this, Q), Se(this, X), Se(this, Z), Se(this, ee), Se(this, te), Se(this, re), Se(this, ne, null), Se(this, se), Se(this, oe), Se(this, ie, null), Se(this, ae, null), Se(this, ce, null), Se(this, de, async (e)=>{
            var t;
            be(this, oe).reset();
            const { body: r, redirected: n, status: s, headers: o } = e;
            if (204 === s) return xe(this, le, ge).call(this, "Server sent HTTP 204, not reconnecting", 204), void this.close();
            if (ke(this, X, n ? new URL(e.url) : void 0), 200 !== s) return void xe(this, le, ge).call(this, `Non-200 status code (${s})`, s);
            if (!(o.get("content-type") || "").startsWith("text/event-stream")) return void xe(this, le, ge).call(this, 'Invalid content type, expected "text/event-stream"', s);
            if (be(this, Y) === this.CLOSED) return;
            ke(this, Y, this.OPEN);
            const i = new Event("open");
            if (null == (t = be(this, ce)) || t.call(this, i), this.dispatchEvent(i), "object" != typeof r || !r || !("getReader" in r)) return xe(this, le, ge).call(this, "Invalid response body, expected a web ReadableStream", s), void this.close();
            const a = new TextDecoder, c = r.getReader();
            let l = !0;
            do {
                const { done: e, value: t } = await c.read();
                t && be(this, oe).feed(a.decode(t, {
                    stream: !e
                })), e && (l = !1, be(this, oe).reset(), xe(this, le, ye).call(this));
            }while (l)
        }), Se(this, pe, (e)=>{
            ke(this, se, void 0), "AbortError" !== e.name && "aborted" !== e.type && xe(this, le, ye).call(this, K(e));
        }), Se(this, he, (e)=>{
            "string" == typeof e.id && ke(this, ne, e.id);
            const t = new MessageEvent(e.event || "message", {
                data: e.data,
                origin: be(this, X) ? be(this, X).origin : be(this, Q).origin,
                lastEventId: e.id || ""
            });
            be(this, ae) && (!e.event || "message" === e.event) && be(this, ae).call(this, t), this.dispatchEvent(t);
        }), Se(this, fe, (e)=>{
            ke(this, te, e);
        }), Se(this, we, ()=>{
            ke(this, re, void 0), be(this, Y) === this.CONNECTING && xe(this, le, ue).call(this);
        });
        try {
            if (e instanceof URL) ke(this, Q, e);
            else {
                if ("string" != typeof e) throw new Error("Invalid URL");
                ke(this, Q, new URL(e, function() {
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
        ke(this, oe, G({
            onEvent: be(this, he),
            onRetry: be(this, fe)
        })), ke(this, Y, this.CONNECTING), ke(this, te, 3e3), ke(this, ee, null != (r = null == t ? void 0 : t.fetch) ? r : globalThis.fetch), ke(this, Z, null != (n = null == t ? void 0 : t.withCredentials) && n), xe(this, le, ue).call(this);
    }
    get readyState() {
        return be(this, Y);
    }
    get url() {
        return be(this, Q).href;
    }
    get withCredentials() {
        return be(this, Z);
    }
    get onerror() {
        return be(this, ie);
    }
    set onerror(e) {
        ke(this, ie, e);
    }
    get onmessage() {
        return be(this, ae);
    }
    set onmessage(e) {
        ke(this, ae, e);
    }
    get onopen() {
        return be(this, ce);
    }
    set onopen(e) {
        ke(this, ce, e);
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
        be(this, re) && clearTimeout(be(this, re)), be(this, Y) !== this.CLOSED && (be(this, se) && be(this, se).abort(), ke(this, Y, this.CLOSED), ke(this, se, void 0));
    }
}
Y = new WeakMap, Q = new WeakMap, X = new WeakMap, Z = new WeakMap, ee = new WeakMap, te = new WeakMap, re = new WeakMap, ne = new WeakMap, se = new WeakMap, oe = new WeakMap, ie = new WeakMap, ae = new WeakMap, ce = new WeakMap, le = new WeakSet, ue = function() {
    ke(this, Y, this.CONNECTING), ke(this, se, new AbortController), be(this, ee)(be(this, Q), xe(this, le, me).call(this)).then(be(this, de)).catch(be(this, pe));
}, de = new WeakMap, pe = new WeakMap, me = function() {
    var e;
    const t = {
        mode: "cors",
        redirect: "follow",
        headers: {
            Accept: "text/event-stream",
            ...be(this, ne) ? {
                "Last-Event-ID": be(this, ne)
            } : void 0
        },
        cache: "no-store",
        signal: null == (e = be(this, se)) ? void 0 : e.signal
    };
    return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, he = new WeakMap, fe = new WeakMap, ge = function(e, t) {
    var r;
    be(this, Y) !== this.CLOSED && ke(this, Y, this.CLOSED);
    const n = new H("error", {
        code: t,
        message: e
    });
    null == (r = be(this, ie)) || r.call(this, n), this.dispatchEvent(n);
}, ye = function(e, t) {
    var r;
    if (be(this, Y) === this.CLOSED) return;
    ke(this, Y, this.CONNECTING);
    const n = new H("error", {
        code: t,
        message: e
    });
    null == (r = be(this, ie)) || r.call(this, n), this.dispatchEvent(n), ke(this, re, setTimeout(be(this, we), be(this, te)));
}, we = new WeakMap, Ee.CONNECTING = 0, Ee.OPEN = 1, Ee.CLOSED = 2;
Error;
require("./module-31762.js");
var Ie = require("./module-1708.js");
require("./module-57075.js");
Ie.platform;
TransformStream;
Error;
new class {
    constructor({ maxSchemasPerCompiler: e = 2048, createCompiler: t = ()=>new U } = {}){
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
"function" == typeof SuppressedError && SuppressedError;
new Set;
class Te extends Error {
    constructor(e, t){
        super(`Tool ${e} not found, available tools: ${t.join(", ")}`), this.toolName = e, this.availableTools = t, this.name = "McpToolNotFoundError";
    }
}
function Ce(e) {
    if (e instanceof Te) return !0;
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
Error;
"function" == typeof SuppressedError && SuppressedError;
(0, q.h)("DefinitionMcpLoader");
Error;
require("./module-42233.js");
class Ae {
    constructor(e){
        this.mcpAuthPath = e;
        const t = Ae.mcpAuthPromises.get(e);
        if (t) this.mcpAuthPromise = t;
        else {
            const t = this.loadMcpAuth();
            this.mcpAuthPromise = t, Ae.mcpAuthPromises.set(e, t), t.catch(()=>{
                Ae.mcpAuthPromises.get(e) === t && Ae.mcpAuthPromises.delete(e);
            });
        }
        Ae.saveLocks.has(e) || Ae.saveLocks.set(e, Promise.resolve());
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
        const t = Ae.saveLocks.get(this.mcpAuthPath) ?? Promise.resolve();
        let r;
        Ae.saveLocks.set(this.mcpAuthPath, new Promise((e)=>{
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
Ae.mcpAuthPromises = new Map, Ae.saveLocks = new Map;
