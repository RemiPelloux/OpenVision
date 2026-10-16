const { hasOwn: n } = require("./module-11255.js"), { getSmithyContext: o, normalizeProvider: s } = require("./module-11255.js");
exports.getSmithyContext = o, exports.normalizeProvider = s;
const { SMITHY_CONTEXT_KEY: i, AlgorithmId: a } = require("./module-52391.js");
exports.AlgorithmId = a;
const { NormalizedSchema: l } = require("./module-93353.js"), c = (e, t)=>{
    const r = [];
    if (e && r.push(e), t) for (const e of t)r.push(e);
    return r;
}, u = (e, t)=>`${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, d = ()=>{
    let e = [], t = [], r = !1;
    const n = new Set, o = (r)=>(e.forEach((e)=>{
            r.add(e.middleware, {
                ...e
            });
        }), t.forEach((e)=>{
            r.addRelativeTo(e.middleware, {
                ...e
            });
        }), r.identifyOnResolve?.(a.identifyOnResolve()), r), s = (e)=>{
        const t = [];
        return e.before.forEach((e)=>{
            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...s(e));
        }), t.push(e), e.after.reverse().forEach((e)=>{
            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...s(e));
        }), t;
    }, i = (r = !1)=>{
        const n = [], o = [], i = {};
        e.forEach((e)=>{
            const t = {
                ...e,
                before: [],
                after: []
            };
            for (const e of c(t.name, t.aliases))i[e] = t;
            n.push(t);
        }), t.forEach((e)=>{
            const t = {
                ...e,
                before: [],
                after: []
            };
            for (const e of c(t.name, t.aliases))i[e] = t;
            o.push(t);
        }), o.forEach((e)=>{
            if (e.toMiddleware) {
                const t = i[e.toMiddleware];
                if (void 0 === t) {
                    if (r) return;
                    throw new Error(`${e.toMiddleware} is not found when adding ${u(e.name, e.aliases)} middleware ${e.relation} ${e.toMiddleware}`);
                }
                "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e);
            }
        });
        var a;
        return (a = n, a.sort((e, t)=>p[t.step] - p[e.step] || h[t.priority || "normal"] - h[e.priority || "normal"])).map(s).reduce((e, t)=>(e.push(...t), e), []);
    }, a = {
        add: (t, r = {})=>{
            const { name: o, override: s, aliases: i } = r, a = {
                step: "initialize",
                priority: "normal",
                middleware: t,
                ...r
            }, l = c(o, i);
            if (l.length > 0) {
                if (l.some((e)=>n.has(e))) {
                    if (!s) throw new Error(`Duplicate middleware name '${u(o, i)}'`);
                    for (const t of l){
                        const r = e.findIndex((e)=>e.name === t || e.aliases?.some((e)=>e === t));
                        if (-1 === r) continue;
                        const n = e[r];
                        if (n.step !== a.step || a.priority !== n.priority) throw new Error(`"${u(n.name, n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${u(o, i)}" middleware with ${a.priority} priority in ${a.step} step.`);
                        e.splice(r, 1);
                    }
                }
                for (const e of l)n.add(e);
            }
            e.push(a);
        },
        addRelativeTo: (e, r)=>{
            const { name: o, override: s, aliases: i } = r, a = {
                middleware: e,
                ...r
            }, l = c(o, i);
            if (l.length > 0) {
                if (l.some((e)=>n.has(e))) {
                    if (!s) throw new Error(`Duplicate middleware name '${u(o, i)}'`);
                    for (const e of l){
                        const r = t.findIndex((t)=>t.name === e || t.aliases?.some((t)=>t === e));
                        if (-1 === r) continue;
                        const n = t[r];
                        if (n.toMiddleware !== a.toMiddleware || n.relation !== a.relation) throw new Error(`"${u(n.name, n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${u(o, i)}" middleware ${a.relation} "${a.toMiddleware}" middleware.`);
                        t.splice(r, 1);
                    }
                }
                for (const e of l)n.add(e);
            }
            t.push(a);
        },
        clone: ()=>o(d()),
        use: (e)=>{
            e.applyToStack(a);
        },
        remove: (r)=>"string" == typeof r ? ((r)=>{
                let o = !1;
                const s = (e)=>{
                    const t = c(e.name, e.aliases);
                    if (t.includes(r)) {
                        o = !0;
                        for (const e of t)n.delete(e);
                        return !1;
                    }
                    return !0;
                };
                return e = e.filter(s), t = t.filter(s), o;
            })(r) : ((r)=>{
                let o = !1;
                const s = (e)=>{
                    if (e.middleware === r) {
                        o = !0;
                        for (const t of c(e.name, e.aliases))n.delete(t);
                        return !1;
                    }
                    return !0;
                };
                return e = e.filter(s), t = t.filter(s), o;
            })(r),
        removeByTag: (r)=>{
            let o = !1;
            const s = (e)=>{
                const { tags: t, name: s, aliases: i } = e;
                if (t && t.includes(r)) {
                    const e = c(s, i);
                    for (const t of e)n.delete(t);
                    return o = !0, !1;
                }
                return !0;
            };
            return e = e.filter(s), t = t.filter(s), o;
        },
        concat: (e)=>{
            const t = o(d());
            return t.use(e), t.identifyOnResolve(r || t.identifyOnResolve() || (e.identifyOnResolve?.() ?? !1)), t;
        },
        applyToStack: o,
        identify: ()=>i(!0).map((e)=>{
                const t = e.step ?? e.relation + " " + e.toMiddleware;
                return u(e.name, e.aliases) + " - " + t;
            }),
        identifyOnResolve: (e)=>("boolean" == typeof e && (r = e), r),
        resolve: (e, t)=>{
            for (const r of i().map((e)=>e.middleware).reverse())e = r(e, t);
            return r && console.log(a.identify()), e;
        }
    };
    return a;
}, p = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
}, h = {
    high: 3,
    normal: 2,
    low: 1
}, m = ()=>{
    const e = new WeakSet;
    return (t, r)=>{
        if ("object" == typeof r && null !== r) {
            if (e.has(r)) return "[Circular]";
            e.add(r);
        }
        return r;
    };
}, f = (e)=>new Promise((t)=>setTimeout(t, 1e3 * e)), g = {
    minDelay: 2,
    maxDelay: 120
};
var y;
!function(e) {
    e.ABORTED = "ABORTED", e.FAILURE = "FAILURE", e.SUCCESS = "SUCCESS", e.RETRY = "RETRY", e.TIMEOUT = "TIMEOUT";
}(y || (y = {}));
const v = async ({ minDelay: e, maxDelay: t, maxWaitTime: r, abortController: n, client: o, abortSignal: s }, i, a)=>{
    const l = {}, [c, u] = [
        1e3 * e,
        1e3 * t
    ];
    let d = 0;
    const p = Date.now() + 1e3 * r, h = Date.now() + 6e4;
    let m = !1;
    for(;;){
        if (d > 0) {
            const e = _(c, u, d, p);
            if (n?.signal?.aborted || s?.aborted) {
                const e = "AbortController signal aborted.";
                return l[e] |= 0, l[e] += 1, {
                    state: y.ABORTED,
                    observedResponses: l
                };
            }
            if (Date.now() + e > p) return {
                state: y.TIMEOUT,
                observedResponses: l
            };
            await f(e / 1e3);
        }
        const { state: e, reason: t } = await a(o, i);
        if (t) {
            const e = b(t);
            l[e] |= 0, l[e] += 1;
        }
        if (e !== y.RETRY) return {
            state: e,
            reason: t,
            final: t,
            observedResponses: l
        };
        d += 1, !m && Date.now() >= h && (w(l, o), m = !0);
    }
}, w = (e = {}, t)=>{
    const r = Object.keys(e);
    let n = 0;
    for (const t of r){
        const r = 0 | e[t];
        t.startsWith("403:") && (n += r);
    }
    const o = t?.config?.logger, s = "function" != typeof o?.warn || o.constructor?.name?.includes?.("NoOpLogger") ? console : o;
    (n >= 3 || r[r.length - 1]?.startsWith("403:")) && s.warn("@smithy/util-waiter WARN - 403 status code encountered during waiter polling.");
}, b = (e)=>{
    const t = e?.$response?.statusCode ?? e?.$metadata?.httpStatusCode;
    return e?.$responseBodyText ? `${t ? t + ": " : ""}Deserialization error for body: ${e.$responseBodyText}` : t ? e?.$response || e?.message ? `${t ?? "Unknown"}: ${e?.message}` : `${t}: OK` : String(e?.message ?? JSON.stringify(e, m()) ?? "Unknown");
}, _ = (e, t, r, n)=>{
    if (r > Math.log(t / e) / Math.log(2) + 1) return t;
    const o = e * 2 ** (r - 1), s = Math.min(o, t), i = S(e, s);
    if (Date.now() + i > n) {
        const e = n - Date.now();
        return Math.max(0, e - 500);
    }
    return i;
}, S = (e, t)=>e + Math.random() * (t - e), x = (e)=>{
    let t;
    const r = new Promise((r)=>{
        t = ()=>r({
                state: y.ABORTED
            }), "function" == typeof e.addEventListener ? e.addEventListener("abort", t) : e.onabort = t;
    });
    return {
        clearListener () {
            "function" == typeof e.removeEventListener && e.removeEventListener("abort", t);
        },
        aborted: r
    };
};
const k = "***SensitiveInformation***";
function E(e, t) {
    if (null == t) return t;
    const r = l.of(e);
    if (r.getMergedTraits().sensitive) return k;
    if (r.isListSchema()) {
        if (!!r.getValueSchema().getMergedTraits().sensitive) return k;
    } else if (r.isMapSchema()) {
        if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive) return k;
    } else if (r.isStructSchema() && "object" == typeof t) {
        const e = t, n = {};
        for (const [t, o] of r.structIterator())null != e[t] && (n[t] = E(o, e[t]));
        return n;
    }
    return t;
}
class T {
    middlewareStack = d();
    schema;
    static classBuilder() {
        return new C;
    }
    resolveMiddlewareWithContext(e, t, r, { middlewareFn: n, clientName: o, commandName: s, inputFilterSensitiveLog: a, outputFilterSensitiveLog: l, smithyContext: c, additionalContext: u, CommandCtor: d }) {
        for (const o of n.bind(this)(d, e, t, r))this.middlewareStack.use(o);
        const p = e.concat(this.middlewareStack), { logger: h } = t, m = {
            logger: h,
            clientName: o,
            commandName: s,
            inputFilterSensitiveLog: a,
            outputFilterSensitiveLog: l,
            [i]: {
                commandInstance: this,
                ...c
            },
            ...u
        }, { requestHandler: f } = t;
        let g = r ?? {};
        return c.eventStream && (g = {
            isEventStream: !0,
            ...g
        }), p.resolve((e)=>f.handle(e.request, g), m);
    }
}
class C {
    _init = ()=>{};
    _ep = {};
    _middlewareFn = ()=>[];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(e) {
        this._init = e;
    }
    ep(e) {
        return this._ep = e, this;
    }
    m(e) {
        return this._middlewareFn = e, this;
    }
    s(e, t, r = {}) {
        return this._smithyContext = {
            service: e,
            operation: t,
            ...r
        }, this;
    }
    c(e = {}) {
        return this._additionalContext = e, this;
    }
    n(e, t) {
        return this._clientName = e, this._commandName = t, this;
    }
    f(e = (e)=>e, t = (e)=>e) {
        return this._inputFilterSensitiveLog = e, this._outputFilterSensitiveLog = t, this;
    }
    ser(e) {
        return this._serializer = e, this;
    }
    de(e) {
        return this._deserializer = e, this;
    }
    sc(e) {
        return this._operationSchema = e, this._smithyContext.operationSchema = e, this;
    }
    build() {
        const e = this;
        let t;
        return t = class extends T {
            input;
            static getEndpointParameterInstructions() {
                return e._ep;
            }
            constructor(...[t]){
                super(), this.input = t ?? {}, e._init(this), this.schema = e._operationSchema;
            }
            resolveMiddleware(r, n, o) {
                const s = e._operationSchema, i = s?.[4] ?? s?.input, a = s?.[5] ?? s?.output;
                return this.resolveMiddlewareWithContext(r, n, o, {
                    CommandCtor: t,
                    middlewareFn: e._middlewareFn,
                    clientName: e._clientName,
                    commandName: e._commandName,
                    inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (s ? E.bind(null, i) : (e)=>e),
                    outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (s ? E.bind(null, a) : (e)=>e),
                    smithyContext: e._smithyContext,
                    additionalContext: e._additionalContext
                });
            }
            serialize = e._serializer;
            deserialize = e._deserializer;
        };
    }
}
class I extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(e){
        super(e.message), Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata;
    }
    static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return I.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && ("client" === t.$fault || "server" === t.$fault);
    }
    static [Symbol.hasInstance](e) {
        if (!e) return !1;
        const t = e;
        return this === I ? I.isInstance(e) : !!I.isInstance(e) && (t.name && this.name ? this.prototype.isPrototypeOf(e) || t.name === this.name : this.prototype.isPrototypeOf(e));
    }
}
const A = (e, t = {})=>{
    Object.entries(t).filter(([, e])=>void 0 !== e).forEach(([t, r])=>{
        null != e[t] && "" !== e[t] || (e[t] = r);
    });
    const r = e.message || e.Message || "UnknownError";
    return e.message = r, delete e.Message, e;
}, P = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: n })=>{
    const o = M(e), s = o.httpStatusCode ? o.httpStatusCode + "" : void 0, i = new r({
        name: t?.code || t?.Code || n || s || "UnknownError",
        $fault: "client",
        $metadata: o
    });
    throw A(i, t);
}, M = (e)=>({
        httpStatusCode: e.statusCode,
        requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"]
    });
let R = !1;
const O = Object.values(a), D = (e)=>{
    const t = [];
    for(const r in a){
        if (!n(a, r)) continue;
        const o = a[r];
        void 0 !== e[o] && t.push({
            algorithmId: ()=>o,
            checksumConstructor: ()=>e[o]
        });
    }
    for (const [r, n] of Object.entries(e.checksumAlgorithms ?? {}))t.push({
        algorithmId: ()=>r,
        checksumConstructor: ()=>n
    });
    return {
        addChecksumAlgorithm (r) {
            e.checksumAlgorithms = e.checksumAlgorithms ?? {};
            const n = r.algorithmId(), o = r.checksumConstructor();
            O.includes(n) ? e.checksumAlgorithms[n.toUpperCase()] = o : e.checksumAlgorithms[n] = o, t.push(r);
        },
        checksumAlgorithms: ()=>t
    };
}, N = (e)=>{
    const t = {};
    return e.checksumAlgorithms().forEach((e)=>{
        const r = e.algorithmId();
        O.includes(r) && (t[r] = e.checksumConstructor());
    }), t;
}, F = (e)=>({
        setRetryStrategy (t) {
            e.retryStrategy = t;
        },
        retryStrategy: ()=>e.retryStrategy
    }), L = (e)=>{
    const t = {};
    return t.retryStrategy = e.retryStrategy(), t;
}, U = (e)=>Object.assign(D(e), F(e)), B = U, $ = (e)=>{
    const t = "#text";
    for(const r in e)n(e, r) && (void 0 !== e[r][t] ? e[r] = e[r][t] : "object" == typeof e[r] && null !== e[r] && (e[r] = $(e[r])));
    return e;
};
function q(e, t, r) {
    let o, s, i;
    if (void 0 === t && void 0 === r) o = {}, i = e;
    else {
        if (o = e, "function" == typeof t) return s = t, i = r, j(o, s, i);
        i = t;
    }
    for(const e in i)n(i, e) && (Array.isArray(i[e]) ? J(o, null, i, e) : o[e] = i[e]);
    return o;
}
const j = (e, t, r)=>q(e, Object.entries(r).reduce((e, [r, n])=>(Array.isArray(n) ? e[r] = n : e[r] = "function" == typeof n ? [
            t,
            n()
        ] : [
            t,
            n
        ], e), {})), J = (e, t, r, n)=>{
    if (null !== t) {
        let o = r[n];
        "function" == typeof o && (o = [
            ,
            o
        ]);
        const [s = z, i = H, a = n] = o;
        return void (("function" == typeof s && s(t[a]) || "function" != typeof s && s) && (e[n] = i(t[a])));
    }
    let [o, s] = r[n];
    if ("function" == typeof s) {
        let t;
        const r = void 0 === o && null != (t = s()), i = "function" == typeof o && !!o(void 0) || "function" != typeof o && !!o;
        r ? e[n] = t : i && (e[n] = s());
    } else {
        const t = void 0 === o && null != s, r = "function" == typeof o && !!o(s) || "function" != typeof o && !!o;
        (t || r) && (e[n] = s);
    }
}, z = (e)=>null != e, H = (e)=>e, W = (e)=>{
    if (null == e) return {};
    if (Array.isArray(e)) return e.filter((e)=>null != e).map(W);
    if ("object" == typeof e) {
        const t = {};
        for(const r in e)n(e, r) && null != e[r] && (t[r] = W(e[r]));
        return t;
    }
    return e;
};
exports.Client = class {
    config;
    middlewareStack = d();
    initConfig;
    handlers;
    constructor(e){
        this.config = e;
        const { protocol: t, protocolSettings: r } = e;
        r && "function" == typeof t && (e.protocol = new t(r));
    }
    send(e, t, r) {
        const n = "function" != typeof t ? t : void 0, o = "function" == typeof t ? t : r;
        let s;
        if (void 0 === n && !0 === this.config.cacheMiddleware) {
            this.handlers || (this.handlers = new WeakMap);
            const t = this.handlers;
            t.has(e.constructor) ? s = t.get(e.constructor) : (s = e.resolveMiddleware(this.middlewareStack, this.config, n), t.set(e.constructor, s));
        } else delete this.handlers, s = e.resolveMiddleware(this.middlewareStack, this.config, n);
        if (!o) return s(e).then((e)=>e.output);
        s(e).then((e)=>o(null, e.output), (e)=>o(e)).catch(()=>{});
    }
    destroy() {
        this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
}, exports.Command = T, exports.NoOpLogger = class {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
}, exports.SENSITIVE_STRING = "***SensitiveInformation***", exports.ServiceException = I, exports.WaiterState = y, exports._json = W, exports.checkExceptions = (e)=>{
    if (e.state === y.ABORTED) {
        const t = new Error(`${JSON.stringify({
            ...e,
            reason: "Request was aborted"
        }, m())}`);
        throw t.name = "AbortError", t;
    }
    if (e.state === y.TIMEOUT) {
        const t = new Error(`${JSON.stringify({
            ...e,
            reason: "Waiter has timed out"
        }, m())}`);
        throw t.name = "TimeoutError", t;
    }
    if (e.state !== y.SUCCESS) throw new Error(`${JSON.stringify(e, m())}`);
    return e;
}, exports.constructStack = d, exports.convertMap = (e)=>{
    const t = {};
    for (const [r, n] of Object.entries(e || {}))t[r] = [
        ,
        n
    ];
    return t;
}, exports.createAggregatedClient = (e, t, r)=>{
    for (const [r, n] of Object.entries(e)){
        const e = async function(e, t, r) {
            const o = new n(e);
            if ("function" == typeof t) this.send(o, t);
            else {
                if ("function" != typeof r) return this.send(o, t);
                if ("object" != typeof t) throw new Error("Expected http options but got " + typeof t);
                this.send(o, t || {}, r);
            }
        }, o = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
        t.prototype[o] = e;
    }
    const { paginators: n = {}, waiters: o = {} } = r ?? {};
    for (const [e, r] of Object.entries(n))void 0 === t.prototype[e] && (t.prototype[e] = function(e = {}, t, ...n) {
        return r({
            ...t,
            client: this
        }, e, ...n);
    });
    for (const [e, r] of Object.entries(o))void 0 === t.prototype[e] && (t.prototype[e] = async function(e = {}, t, ...n) {
        let o = t;
        return "number" == typeof t && (o = {
            maxWaitTime: t
        }), r({
            ...o,
            client: this
        }, e, ...n);
    });
}, exports.createWaiter = async (e, t, r)=>{
    const n = {
        ...g,
        ...e
    };
    ((e)=>{
        if (e.maxWaitTime <= 0) throw new Error("WaiterConfiguration.maxWaitTime must be greater than 0");
        if (e.minDelay <= 0) throw new Error("WaiterConfiguration.minDelay must be greater than 0");
        if (e.maxDelay <= 0) throw new Error("WaiterConfiguration.maxDelay must be greater than 0");
        if (e.maxWaitTime <= e.minDelay) throw new Error(`WaiterConfiguration.maxWaitTime [${e.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${e.minDelay}] for this waiter`);
        if (e.maxDelay < e.minDelay) throw new Error(`WaiterConfiguration.maxDelay [${e.maxDelay}] must be greater than WaiterConfiguration.minDelay [${e.minDelay}] for this waiter`);
    })(n);
    const o = [
        v(n, t, r)
    ], s = [];
    if (e.abortSignal) {
        const { aborted: t, clearListener: r } = x(e.abortSignal);
        s.push(r), o.push(t);
    }
    if (e.abortController?.signal) {
        const { aborted: t, clearListener: r } = x(e.abortController.signal);
        s.push(r), o.push(t);
    }
    return Promise.race(o).then((e)=>{
        for (const e of s)e();
        return e;
    });
}, exports.decorateServiceException = A, exports.emitWarningIfUnsupportedVersion = (e)=>{
    e && !R && parseInt(e.substring(1, e.indexOf("."))) < 16 && (R = !0);
}, exports.getArrayIfSingleItem = (e)=>Array.isArray(e) ? e : [
        e
    ], exports.getChecksumConfiguration = D, exports.getDefaultClientConfiguration = B, exports.getDefaultExtensionConfiguration = U, exports.getRetryConfiguration = F, exports.getValueFromTextNode = $, exports.invalidFunction = (e)=>()=>{
        throw new Error(e);
    }, exports.invalidProvider = (e)=>()=>Promise.reject(e), exports.isSerializableHeaderValue = (e)=>null != e, exports.loadConfigsForDefaultMode = (e)=>{
    switch(e){
        case "standard":
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 3e4
            };
        default:
            return {};
    }
}, exports.makeBuilder = function(e, t, r, n) {
    return function(o, s, i, a, l = {}) {
        const c = Object.assign({}, e, o);
        return T.classBuilder().ep(c).m(function(e, t, r, o) {
            const i = s.call(this, e, t, r, o);
            return i.unshift(n(r, e.getEndpointParameterInstructions())), i;
        }).s(t, i, l).n(r, i.charAt(0).toUpperCase() + i.slice(1) + "Command").sc(a).build();
    };
}, exports.map = q, exports.resolveChecksumRuntimeConfig = N, exports.resolveDefaultRuntimeConfig = (e)=>Object.assign(N(e), L(e)), exports.resolveRetryRuntimeConfig = L, exports.schemaLogFilter = E, exports.serializeDateTime = (e)=>e.toISOString().replace(".000Z", "Z"), exports.serializeFloat = (e)=>{
    if (e != e) return "NaN";
    switch(e){
        case 1 / 0:
            return "Infinity";
        case -1 / 0:
            return "-Infinity";
        default:
            return e;
    }
}, exports.take = (e, t)=>{
    const r = {};
    for(const o in t)n(t, o) && J(r, e, t, o);
    return r;
}, exports.throwDefaultError = P, exports.waiterServiceDefaults = g, exports.withBaseException = (e)=>({ output: t, parsedBody: r, errorCode: n })=>{
        P({
            output: t,
            parsedBody: r,
            exceptionCtor: e,
            errorCode: n
        });
    };
