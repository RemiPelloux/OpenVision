const { hasOwn: n } = require("./module-11255.js"), { getSmithyContext: s, normalizeProvider: o } = require("./module-11255.js");
exports.getSmithyContext = s, exports.normalizeProvider = o;
const { SMITHY_CONTEXT_KEY: i, AlgorithmId: a } = require("./module-52391.js");
exports.AlgorithmId = a;
const { NormalizedSchema: c } = require("./module-93353.js"), l = (e, t)=>{
    const r = [];
    if (e && r.push(e), t) for (const e of t)r.push(e);
    return r;
}, u = (e, t)=>`${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, d = ()=>{
    let e = [], t = [], r = !1;
    const n = new Set, s = (r)=>(e.forEach((e)=>{
            r.add(e.middleware, {
                ...e
            });
        }), t.forEach((e)=>{
            r.addRelativeTo(e.middleware, {
                ...e
            });
        }), r.identifyOnResolve?.(a.identifyOnResolve()), r), o = (e)=>{
        const t = [];
        return e.before.forEach((e)=>{
            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...o(e));
        }), t.push(e), e.after.reverse().forEach((e)=>{
            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...o(e));
        }), t;
    }, i = (r = !1)=>{
        const n = [], s = [], i = {};
        e.forEach((e)=>{
            const t = {
                ...e,
                before: [],
                after: []
            };
            for (const e of l(t.name, t.aliases))i[e] = t;
            n.push(t);
        }), t.forEach((e)=>{
            const t = {
                ...e,
                before: [],
                after: []
            };
            for (const e of l(t.name, t.aliases))i[e] = t;
            s.push(t);
        }), s.forEach((e)=>{
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
        return (a = n, a.sort((e, t)=>p[t.step] - p[e.step] || m[t.priority || "normal"] - m[e.priority || "normal"])).map(o).reduce((e, t)=>(e.push(...t), e), []);
    }, a = {
        add: (t, r = {})=>{
            const { name: s, override: o, aliases: i } = r, a = {
                step: "initialize",
                priority: "normal",
                middleware: t,
                ...r
            }, c = l(s, i);
            if (c.length > 0) {
                if (c.some((e)=>n.has(e))) {
                    if (!o) throw new Error(`Duplicate middleware name '${u(s, i)}'`);
                    for (const t of c){
                        const r = e.findIndex((e)=>e.name === t || e.aliases?.some((e)=>e === t));
                        if (-1 === r) continue;
                        const n = e[r];
                        if (n.step !== a.step || a.priority !== n.priority) throw new Error(`"${u(n.name, n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${u(s, i)}" middleware with ${a.priority} priority in ${a.step} step.`);
                        e.splice(r, 1);
                    }
                }
                for (const e of c)n.add(e);
            }
            e.push(a);
        },
        addRelativeTo: (e, r)=>{
            const { name: s, override: o, aliases: i } = r, a = {
                middleware: e,
                ...r
            }, c = l(s, i);
            if (c.length > 0) {
                if (c.some((e)=>n.has(e))) {
                    if (!o) throw new Error(`Duplicate middleware name '${u(s, i)}'`);
                    for (const e of c){
                        const r = t.findIndex((t)=>t.name === e || t.aliases?.some((t)=>t === e));
                        if (-1 === r) continue;
                        const n = t[r];
                        if (n.toMiddleware !== a.toMiddleware || n.relation !== a.relation) throw new Error(`"${u(n.name, n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${u(s, i)}" middleware ${a.relation} "${a.toMiddleware}" middleware.`);
                        t.splice(r, 1);
                    }
                }
                for (const e of c)n.add(e);
            }
            t.push(a);
        },
        clone: ()=>s(d()),
        use: (e)=>{
            e.applyToStack(a);
        },
        remove: (r)=>"string" == typeof r ? ((r)=>{
                let s = !1;
                const o = (e)=>{
                    const t = l(e.name, e.aliases);
                    if (t.includes(r)) {
                        s = !0;
                        for (const e of t)n.delete(e);
                        return !1;
                    }
                    return !0;
                };
                return e = e.filter(o), t = t.filter(o), s;
            })(r) : ((r)=>{
                let s = !1;
                const o = (e)=>{
                    if (e.middleware === r) {
                        s = !0;
                        for (const t of l(e.name, e.aliases))n.delete(t);
                        return !1;
                    }
                    return !0;
                };
                return e = e.filter(o), t = t.filter(o), s;
            })(r),
        removeByTag: (r)=>{
            let s = !1;
            const o = (e)=>{
                const { tags: t, name: o, aliases: i } = e;
                if (t && t.includes(r)) {
                    const e = l(o, i);
                    for (const t of e)n.delete(t);
                    return s = !0, !1;
                }
                return !0;
            };
            return e = e.filter(o), t = t.filter(o), s;
        },
        concat: (e)=>{
            const t = s(d());
            return t.use(e), t.identifyOnResolve(r || t.identifyOnResolve() || (e.identifyOnResolve?.() ?? !1)), t;
        },
        applyToStack: s,
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
}, m = {
    high: 3,
    normal: 2,
    low: 1
}, h = ()=>{
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
const w = async ({ minDelay: e, maxDelay: t, maxWaitTime: r, abortController: n, client: s, abortSignal: o }, i, a)=>{
    const c = {}, [l, u] = [
        1e3 * e,
        1e3 * t
    ];
    let d = 0;
    const p = Date.now() + 1e3 * r, m = Date.now() + 6e4;
    let h = !1;
    for(;;){
        if (d > 0) {
            const e = b(l, u, d, p);
            if (n?.signal?.aborted || o?.aborted) {
                const e = "AbortController signal aborted.";
                return c[e] |= 0, c[e] += 1, {
                    state: y.ABORTED,
                    observedResponses: c
                };
            }
            if (Date.now() + e > p) return {
                state: y.TIMEOUT,
                observedResponses: c
            };
            await f(e / 1e3);
        }
        const { state: e, reason: t } = await a(s, i);
        if (t) {
            const e = _(t);
            c[e] |= 0, c[e] += 1;
        }
        if (e !== y.RETRY) return {
            state: e,
            reason: t,
            final: t,
            observedResponses: c
        };
        d += 1, !h && Date.now() >= m && (v(c, s), h = !0);
    }
}, v = (e = {}, t)=>{
    const r = Object.keys(e);
    let n = 0;
    for (const t of r){
        const r = 0 | e[t];
        t.startsWith("403:") && (n += r);
    }
    const s = t?.config?.logger, o = "function" != typeof s?.warn || s.constructor?.name?.includes?.("NoOpLogger") ? console : s;
    (n >= 3 || r[r.length - 1]?.startsWith("403:")) && o.warn("@smithy/util-waiter WARN - 403 status code encountered during waiter polling.");
}, _ = (e)=>{
    const t = e?.$response?.statusCode ?? e?.$metadata?.httpStatusCode;
    return e?.$responseBodyText ? `${t ? t + ": " : ""}Deserialization error for body: ${e.$responseBodyText}` : t ? e?.$response || e?.message ? `${t ?? "Unknown"}: ${e?.message}` : `${t}: OK` : String(e?.message ?? JSON.stringify(e, h()) ?? "Unknown");
}, b = (e, t, r, n)=>{
    if (r > Math.log(t / e) / Math.log(2) + 1) return t;
    const s = e * 2 ** (r - 1), o = Math.min(s, t), i = S(e, o);
    if (Date.now() + i > n) {
        const e = n - Date.now();
        return Math.max(0, e - 500);
    }
    return i;
}, S = (e, t)=>e + Math.random() * (t - e), k = (e)=>{
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
const x = "***SensitiveInformation***";
function E(e, t) {
    if (null == t) return t;
    const r = c.of(e);
    if (r.getMergedTraits().sensitive) return x;
    if (r.isListSchema()) {
        if (!!r.getValueSchema().getMergedTraits().sensitive) return x;
    } else if (r.isMapSchema()) {
        if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive) return x;
    } else if (r.isStructSchema() && "object" == typeof t) {
        const e = t, n = {};
        for (const [t, s] of r.structIterator())null != e[t] && (n[t] = E(s, e[t]));
        return n;
    }
    return t;
}
class I {
    middlewareStack = d();
    schema;
    static classBuilder() {
        return new T;
    }
    resolveMiddlewareWithContext(e, t, r, { middlewareFn: n, clientName: s, commandName: o, inputFilterSensitiveLog: a, outputFilterSensitiveLog: c, smithyContext: l, additionalContext: u, CommandCtor: d }) {
        for (const s of n.bind(this)(d, e, t, r))this.middlewareStack.use(s);
        const p = e.concat(this.middlewareStack), { logger: m } = t, h = {
            logger: m,
            clientName: s,
            commandName: o,
            inputFilterSensitiveLog: a,
            outputFilterSensitiveLog: c,
            [i]: {
                commandInstance: this,
                ...l
            },
            ...u
        }, { requestHandler: f } = t;
        let g = r ?? {};
        return l.eventStream && (g = {
            isEventStream: !0,
            ...g
        }), p.resolve((e)=>f.handle(e.request, g), h);
    }
}
class T {
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
        return t = class extends I {
            input;
            static getEndpointParameterInstructions() {
                return e._ep;
            }
            constructor(...[t]){
                super(), this.input = t ?? {}, e._init(this), this.schema = e._operationSchema;
            }
            resolveMiddleware(r, n, s) {
                const o = e._operationSchema, i = o?.[4] ?? o?.input, a = o?.[5] ?? o?.output;
                return this.resolveMiddlewareWithContext(r, n, s, {
                    CommandCtor: t,
                    middlewareFn: e._middlewareFn,
                    clientName: e._clientName,
                    commandName: e._commandName,
                    inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (o ? E.bind(null, i) : (e)=>e),
                    outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (o ? E.bind(null, a) : (e)=>e),
                    smithyContext: e._smithyContext,
                    additionalContext: e._additionalContext
                });
            }
            serialize = e._serializer;
            deserialize = e._deserializer;
        };
    }
}
class C extends Error {
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
        return C.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && ("client" === t.$fault || "server" === t.$fault);
    }
    static [Symbol.hasInstance](e) {
        if (!e) return !1;
        const t = e;
        return this === C ? C.isInstance(e) : !!C.isInstance(e) && (t.name && this.name ? this.prototype.isPrototypeOf(e) || t.name === this.name : this.prototype.isPrototypeOf(e));
    }
}
const P = (e, t = {})=>{
    Object.entries(t).filter(([, e])=>void 0 !== e).forEach(([t, r])=>{
        null != e[t] && "" !== e[t] || (e[t] = r);
    });
    const r = e.message || e.Message || "UnknownError";
    return e.message = r, delete e.Message, e;
}, A = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: n })=>{
    const s = R(e), o = s.httpStatusCode ? s.httpStatusCode + "" : void 0, i = new r({
        name: t?.code || t?.Code || n || o || "UnknownError",
        $fault: "client",
        $metadata: s
    });
    throw P(i, t);
}, R = (e)=>({
        httpStatusCode: e.statusCode,
        requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"]
    });
let M = !1;
const J = Object.values(a), O = (e)=>{
    const t = [];
    for(const r in a){
        if (!n(a, r)) continue;
        const s = a[r];
        void 0 !== e[s] && t.push({
            algorithmId: ()=>s,
            checksumConstructor: ()=>e[s]
        });
    }
    for (const [r, n] of Object.entries(e.checksumAlgorithms ?? {}))t.push({
        algorithmId: ()=>r,
        checksumConstructor: ()=>n
    });
    return {
        addChecksumAlgorithm (r) {
            e.checksumAlgorithms = e.checksumAlgorithms ?? {};
            const n = r.algorithmId(), s = r.checksumConstructor();
            J.includes(n) ? e.checksumAlgorithms[n.toUpperCase()] = s : e.checksumAlgorithms[n] = s, t.push(r);
        },
        checksumAlgorithms: ()=>t
    };
}, B = (e)=>{
    const t = {};
    return e.checksumAlgorithms().forEach((e)=>{
        const r = e.algorithmId();
        J.includes(r) && (t[r] = e.checksumConstructor());
    }), t;
}, D = (e)=>({
        setRetryStrategy (t) {
            e.retryStrategy = t;
        },
        retryStrategy: ()=>e.retryStrategy
    }), q = (e)=>{
    const t = {};
    return t.retryStrategy = e.retryStrategy(), t;
}, N = (e)=>Object.assign(O(e), D(e)), F = N, U = (e)=>{
    const t = "#text";
    for(const r in e)n(e, r) && (void 0 !== e[r][t] ? e[r] = e[r][t] : "object" == typeof e[r] && null !== e[r] && (e[r] = U(e[r])));
    return e;
};
function L(e, t, r) {
    let s, o, i;
    if (void 0 === t && void 0 === r) s = {}, i = e;
    else {
        if (s = e, "function" == typeof t) return o = t, i = r, $(s, o, i);
        i = t;
    }
    for(const e in i)n(i, e) && (Array.isArray(i[e]) ? j(s, null, i, e) : s[e] = i[e]);
    return s;
}
const $ = (e, t, r)=>L(e, Object.entries(r).reduce((e, [r, n])=>(Array.isArray(n) ? e[r] = n : e[r] = "function" == typeof n ? [
            t,
            n()
        ] : [
            t,
            n
        ], e), {})), j = (e, t, r, n)=>{
    if (null !== t) {
        let s = r[n];
        "function" == typeof s && (s = [
            ,
            s
        ]);
        const [o = G, i = z, a = n] = s;
        return void (("function" == typeof o && o(t[a]) || "function" != typeof o && o) && (e[n] = i(t[a])));
    }
    let [s, o] = r[n];
    if ("function" == typeof o) {
        let t;
        const r = void 0 === s && null != (t = o()), i = "function" == typeof s && !!s(void 0) || "function" != typeof s && !!s;
        r ? e[n] = t : i && (e[n] = o());
    } else {
        const t = void 0 === s && null != o, r = "function" == typeof s && !!s(o) || "function" != typeof s && !!s;
        (t || r) && (e[n] = o);
    }
}, G = (e)=>null != e, z = (e)=>e, W = (e)=>{
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
        const n = "function" != typeof t ? t : void 0, s = "function" == typeof t ? t : r;
        let o;
        if (void 0 === n && !0 === this.config.cacheMiddleware) {
            this.handlers || (this.handlers = new WeakMap);
            const t = this.handlers;
            t.has(e.constructor) ? o = t.get(e.constructor) : (o = e.resolveMiddleware(this.middlewareStack, this.config, n), t.set(e.constructor, o));
        } else delete this.handlers, o = e.resolveMiddleware(this.middlewareStack, this.config, n);
        if (!s) return o(e).then((e)=>e.output);
        o(e).then((e)=>s(null, e.output), (e)=>s(e)).catch(()=>{});
    }
    destroy() {
        this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
}, exports.Command = I, exports.NoOpLogger = class {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
}, exports.SENSITIVE_STRING = "***SensitiveInformation***", exports.ServiceException = C, exports.WaiterState = y, exports._json = W, exports.checkExceptions = (e)=>{
    if (e.state === y.ABORTED) {
        const t = new Error(`${JSON.stringify({
            ...e,
            reason: "Request was aborted"
        }, h())}`);
        throw t.name = "AbortError", t;
    }
    if (e.state === y.TIMEOUT) {
        const t = new Error(`${JSON.stringify({
            ...e,
            reason: "Waiter has timed out"
        }, h())}`);
        throw t.name = "TimeoutError", t;
    }
    if (e.state !== y.SUCCESS) throw new Error(`${JSON.stringify(e, h())}`);
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
            const s = new n(e);
            if ("function" == typeof t) this.send(s, t);
            else {
                if ("function" != typeof r) return this.send(s, t);
                if ("object" != typeof t) throw new Error("Expected http options but got " + typeof t);
                this.send(s, t || {}, r);
            }
        }, s = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
        t.prototype[s] = e;
    }
    const { paginators: n = {}, waiters: s = {} } = r ?? {};
    for (const [e, r] of Object.entries(n))void 0 === t.prototype[e] && (t.prototype[e] = function(e = {}, t, ...n) {
        return r({
            ...t,
            client: this
        }, e, ...n);
    });
    for (const [e, r] of Object.entries(s))void 0 === t.prototype[e] && (t.prototype[e] = async function(e = {}, t, ...n) {
        let s = t;
        return "number" == typeof t && (s = {
            maxWaitTime: t
        }), r({
            ...s,
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
    const s = [
        w(n, t, r)
    ], o = [];
    if (e.abortSignal) {
        const { aborted: t, clearListener: r } = k(e.abortSignal);
        o.push(r), s.push(t);
    }
    if (e.abortController?.signal) {
        const { aborted: t, clearListener: r } = k(e.abortController.signal);
        o.push(r), s.push(t);
    }
    return Promise.race(s).then((e)=>{
        for (const e of o)e();
        return e;
    });
}, exports.decorateServiceException = P, exports.emitWarningIfUnsupportedVersion = (e)=>{
    e && !M && parseInt(e.substring(1, e.indexOf("."))) < 16 && (M = !0);
}, exports.getArrayIfSingleItem = (e)=>Array.isArray(e) ? e : [
        e
    ], exports.getChecksumConfiguration = O, exports.getDefaultClientConfiguration = F, exports.getDefaultExtensionConfiguration = N, exports.getRetryConfiguration = D, exports.getValueFromTextNode = U, exports.invalidFunction = (e)=>()=>{
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
    return function(s, o, i, a, c = {}) {
        const l = Object.assign({}, e, s);
        return I.classBuilder().ep(l).m(function(e, t, r, s) {
            const i = o.call(this, e, t, r, s);
            return i.unshift(n(r, e.getEndpointParameterInstructions())), i;
        }).s(t, i, c).n(r, i.charAt(0).toUpperCase() + i.slice(1) + "Command").sc(a).build();
    };
}, exports.map = L, exports.resolveChecksumRuntimeConfig = B, exports.resolveDefaultRuntimeConfig = (e)=>Object.assign(B(e), q(e)), exports.resolveRetryRuntimeConfig = q, exports.schemaLogFilter = E, exports.serializeDateTime = (e)=>e.toISOString().replace(".000Z", "Z"), exports.serializeFloat = (e)=>{
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
    for(const s in t)n(t, s) && j(r, e, t, s);
    return r;
}, exports.throwDefaultError = A, exports.waiterServiceDefaults = g, exports.withBaseException = (e)=>({ output: t, parsedBody: r, errorCode: n })=>{
        A({
            output: t,
            parsedBody: r,
            exceptionCtor: e,
            errorCode: n
        });
    };
