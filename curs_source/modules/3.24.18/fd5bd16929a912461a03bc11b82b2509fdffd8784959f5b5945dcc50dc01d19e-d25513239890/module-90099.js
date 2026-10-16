"use strict";
require.r(exports), require.d(exports, {
    ChecksumStream: ()=>q.ChecksumStream,
    Client: ()=>c,
    Command: ()=>p,
    Hash: ()=>q.Hash,
    LazyJsonString: ()=>q.LazyJsonString,
    NoOpLogger: ()=>M.N,
    NumericValue: ()=>q.NumericValue,
    SENSITIVE_STRING: ()=>m,
    ServiceException: ()=>w,
    Uint8ArrayBlobAdapter: ()=>q.Uint8ArrayBlobAdapter,
    _json: ()=>H,
    _parseEpochTimestamp: ()=>q._parseEpochTimestamp,
    _parseRfc3339DateTimeWithOffset: ()=>q._parseRfc3339DateTimeWithOffset,
    _parseRfc7231DateTime: ()=>q._parseRfc7231DateTime,
    calculateBodyLength: ()=>q.calculateBodyLength,
    collectBody: ()=>l.collectBody,
    concatBytes: ()=>q.concatBytes,
    convertMap: ()=>$,
    copyDocumentWithTransform: ()=>q.copyDocumentWithTransform,
    createAggregatedClient: ()=>y,
    createBufferedReadable: ()=>q.createBufferedReadable,
    createChecksumStream: ()=>q.createChecksumStream,
    dateToUtcString: ()=>q.dateToUtcString,
    decorateServiceException: ()=>S,
    deserializerMiddleware: ()=>q.deserializerMiddleware,
    deserializerMiddlewareOption: ()=>q.deserializerMiddlewareOption,
    emitWarningIfUnsupportedVersion: ()=>A,
    expectBoolean: ()=>q.expectBoolean,
    expectByte: ()=>q.expectByte,
    expectFloat32: ()=>q.expectFloat32,
    expectInt: ()=>q.expectInt,
    expectInt32: ()=>q.expectInt32,
    expectLong: ()=>q.expectLong,
    expectNonNull: ()=>q.expectNonNull,
    expectNumber: ()=>q.expectNumber,
    expectObject: ()=>q.expectObject,
    expectShort: ()=>q.expectShort,
    expectString: ()=>q.expectString,
    expectUnion: ()=>q.expectUnion,
    extendedEncodeURIComponent: ()=>l.extendedEncodeURIComponent,
    fromArrayBuffer: ()=>q.fromArrayBuffer,
    fromBase64: ()=>q.fromBase64,
    fromHex: ()=>q.fromHex,
    fromString: ()=>q.fromString,
    fromUtf8: ()=>q.fromUtf8,
    generateIdempotencyToken: ()=>q.generateIdempotencyToken,
    getArrayIfSingleItem: ()=>D,
    getAwsChunkedEncodingStream: ()=>q.getAwsChunkedEncodingStream,
    getDefaultClientConfiguration: ()=>R,
    getDefaultExtensionConfiguration: ()=>_,
    getSerdePlugin: ()=>q.getSerdePlugin,
    getValueFromTextNode: ()=>k,
    handleFloat: ()=>q.handleFloat,
    hasOwn: ()=>q.hasOwn,
    headStream: ()=>q.headStream,
    isArrayBuffer: ()=>q.isArrayBuffer,
    isBlob: ()=>q.isBlob,
    isReadableStream: ()=>q.isReadableStream,
    isSerializableHeaderValue: ()=>O,
    limitedParseDouble: ()=>q.limitedParseDouble,
    limitedParseFloat: ()=>q.limitedParseFloat,
    limitedParseFloat32: ()=>q.limitedParseFloat32,
    loadConfigsForDefaultMode: ()=>x,
    logger: ()=>q.logger,
    map: ()=>P,
    nv: ()=>q.nv,
    parseBoolean: ()=>q.parseBoolean,
    parseEpochTimestamp: ()=>q.parseEpochTimestamp,
    parseRfc3339DateTime: ()=>q.parseRfc3339DateTime,
    parseRfc3339DateTimeWithOffset: ()=>q.parseRfc3339DateTimeWithOffset,
    parseRfc7231DateTime: ()=>q.parseRfc7231DateTime,
    quoteHeader: ()=>q.quoteHeader,
    resolveDefaultRuntimeConfig: ()=>I,
    resolvedPath: ()=>l.resolvedPath,
    sdkStreamMixin: ()=>q.sdkStreamMixin,
    serializeDateTime: ()=>V,
    serializeFloat: ()=>z,
    serializerMiddleware: ()=>q.serializerMiddleware,
    serializerMiddlewareOption: ()=>q.serializerMiddlewareOption,
    splitEvery: ()=>q.splitEvery,
    splitHeader: ()=>q.splitHeader,
    splitStream: ()=>q.splitStream,
    streamCollector: ()=>q.streamCollector,
    strictParseByte: ()=>q.strictParseByte,
    strictParseDouble: ()=>q.strictParseDouble,
    strictParseFloat: ()=>q.strictParseFloat,
    strictParseFloat32: ()=>q.strictParseFloat32,
    strictParseInt: ()=>q.strictParseInt,
    strictParseInt32: ()=>q.strictParseInt32,
    strictParseLong: ()=>q.strictParseLong,
    strictParseShort: ()=>q.strictParseShort,
    take: ()=>j,
    throwDefaultError: ()=>b,
    toBase64: ()=>q.toBase64,
    toHex: ()=>q.toHex,
    toUint8Array: ()=>q.toUint8Array,
    toUtf8: ()=>q.toUtf8,
    v4: ()=>q.v4,
    withBaseException: ()=>E
});
const n = (e, t)=>{
    const r = [];
    if (e && r.push(e), t) for (const e of t)r.push(e);
    return r;
}, s = (e, t)=>`${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, i = ()=>{
    let e = [], t = [], r = !1;
    const c = new Set, l = (r)=>(e.forEach((e)=>{
            r.add(e.middleware, {
                ...e
            });
        }), t.forEach((e)=>{
            r.addRelativeTo(e.middleware, {
                ...e
            });
        }), r.identifyOnResolve?.(h.identifyOnResolve()), r), u = (e)=>{
        const t = [];
        return e.before.forEach((e)=>{
            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...u(e));
        }), t.push(e), e.after.reverse().forEach((e)=>{
            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...u(e));
        }), t;
    }, d = (r = !1)=>{
        const i = [], c = [], l = {};
        e.forEach((e)=>{
            const t = {
                ...e,
                before: [],
                after: []
            };
            for (const e of n(t.name, t.aliases))l[e] = t;
            i.push(t);
        }), t.forEach((e)=>{
            const t = {
                ...e,
                before: [],
                after: []
            };
            for (const e of n(t.name, t.aliases))l[e] = t;
            c.push(t);
        }), c.forEach((e)=>{
            if (e.toMiddleware) {
                const t = l[e.toMiddleware];
                if (void 0 === t) {
                    if (r) return;
                    throw new Error(`${e.toMiddleware} is not found when adding ${s(e.name, e.aliases)} middleware ${e.relation} ${e.toMiddleware}`);
                }
                "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e);
            }
        });
        var d;
        return (d = i, d.sort((e, t)=>o[t.step] - o[e.step] || a[t.priority || "normal"] - a[e.priority || "normal"])).map(u).reduce((e, t)=>(e.push(...t), e), []);
    }, h = {
        add: (t, r = {})=>{
            const { name: i, override: o, aliases: a } = r, l = {
                step: "initialize",
                priority: "normal",
                middleware: t,
                ...r
            }, u = n(i, a);
            if (u.length > 0) {
                if (u.some((e)=>c.has(e))) {
                    if (!o) throw new Error(`Duplicate middleware name '${s(i, a)}'`);
                    for (const t of u){
                        const r = e.findIndex((e)=>e.name === t || e.aliases?.some((e)=>e === t));
                        if (-1 === r) continue;
                        const n = e[r];
                        if (n.step !== l.step || l.priority !== n.priority) throw new Error(`"${s(n.name, n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${s(i, a)}" middleware with ${l.priority} priority in ${l.step} step.`);
                        e.splice(r, 1);
                    }
                }
                for (const e of u)c.add(e);
            }
            e.push(l);
        },
        addRelativeTo: (e, r)=>{
            const { name: i, override: o, aliases: a } = r, l = {
                middleware: e,
                ...r
            }, u = n(i, a);
            if (u.length > 0) {
                if (u.some((e)=>c.has(e))) {
                    if (!o) throw new Error(`Duplicate middleware name '${s(i, a)}'`);
                    for (const e of u){
                        const r = t.findIndex((t)=>t.name === e || t.aliases?.some((t)=>t === e));
                        if (-1 === r) continue;
                        const n = t[r];
                        if (n.toMiddleware !== l.toMiddleware || n.relation !== l.relation) throw new Error(`"${s(n.name, n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${s(i, a)}" middleware ${l.relation} "${l.toMiddleware}" middleware.`);
                        t.splice(r, 1);
                    }
                }
                for (const e of u)c.add(e);
            }
            t.push(l);
        },
        clone: ()=>l(i()),
        use: (e)=>{
            e.applyToStack(h);
        },
        remove: (r)=>"string" == typeof r ? ((r)=>{
                let s = !1;
                const i = (e)=>{
                    const t = n(e.name, e.aliases);
                    if (t.includes(r)) {
                        s = !0;
                        for (const e of t)c.delete(e);
                        return !1;
                    }
                    return !0;
                };
                return e = e.filter(i), t = t.filter(i), s;
            })(r) : ((r)=>{
                let s = !1;
                const i = (e)=>{
                    if (e.middleware === r) {
                        s = !0;
                        for (const t of n(e.name, e.aliases))c.delete(t);
                        return !1;
                    }
                    return !0;
                };
                return e = e.filter(i), t = t.filter(i), s;
            })(r),
        removeByTag: (r)=>{
            let s = !1;
            const i = (e)=>{
                const { tags: t, name: i, aliases: o } = e;
                if (t && t.includes(r)) {
                    const e = n(i, o);
                    for (const t of e)c.delete(t);
                    return s = !0, !1;
                }
                return !0;
            };
            return e = e.filter(i), t = t.filter(i), s;
        },
        concat: (e)=>{
            const t = l(i());
            return t.use(e), t.identifyOnResolve(r || t.identifyOnResolve() || (e.identifyOnResolve?.() ?? !1)), t;
        },
        applyToStack: l,
        identify: ()=>d(!0).map((e)=>{
                const t = e.step ?? e.relation + " " + e.toMiddleware;
                return s(e.name, e.aliases) + " - " + t;
            }),
        identifyOnResolve: (e)=>("boolean" == typeof e && (r = e), r),
        resolve: (e, t)=>{
            for (const r of d().map((e)=>e.middleware).reverse())e = r(e, t);
            return r && console.log(h.identify()), e;
        }
    };
    return h;
}, o = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
}, a = {
    high: 3,
    normal: 2,
    low: 1
};
class c {
    config;
    middlewareStack = i();
    initConfig;
    handlers;
    constructor(e){
        this.config = e;
        const { protocol: t, protocolSettings: r } = e;
        r && "function" == typeof t && (e.protocol = new t(r));
    }
    send(e, t, r) {
        const n = "function" != typeof t ? t : void 0, s = "function" == typeof t ? t : r;
        let i;
        if (void 0 === n && !0 === this.config.cacheMiddleware) {
            this.handlers || (this.handlers = new WeakMap);
            const t = this.handlers;
            t.has(e.constructor) ? i = t.get(e.constructor) : (i = e.resolveMiddleware(this.middlewareStack, this.config, n), t.set(e.constructor, i));
        } else delete this.handlers, i = e.resolveMiddleware(this.middlewareStack, this.config, n);
        if (!s) return i(e).then((e)=>e.output);
        i(e).then((e)=>s(null, e.output), (e)=>s(e)).catch(()=>{});
    }
    destroy() {
        this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
}
var l = require(73931), u = require(85264), d = require(93353);
const h = "***SensitiveInformation***";
function f(e, t) {
    if (null == t) return t;
    const r = d.NormalizedSchema.of(e);
    if (r.getMergedTraits().sensitive) return h;
    if (r.isListSchema()) {
        if (!!r.getValueSchema().getMergedTraits().sensitive) return h;
    } else if (r.isMapSchema()) {
        if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive) return h;
    } else if (r.isStructSchema() && "object" == typeof t) {
        const e = t, n = {};
        for (const [t, s] of r.structIterator())null != e[t] && (n[t] = f(s, e[t]));
        return n;
    }
    return t;
}
class p {
    middlewareStack = i();
    schema;
    static classBuilder() {
        return new g;
    }
    resolveMiddlewareWithContext(e, t, r, { middlewareFn: n, clientName: s, commandName: i, inputFilterSensitiveLog: o, outputFilterSensitiveLog: a, smithyContext: c, additionalContext: l, CommandCtor: d }) {
        for (const s of n.bind(this)(d, e, t, r))this.middlewareStack.use(s);
        const h = e.concat(this.middlewareStack), { logger: f } = t, p = {
            logger: f,
            clientName: s,
            commandName: i,
            inputFilterSensitiveLog: o,
            outputFilterSensitiveLog: a,
            [u.V]: {
                commandInstance: this,
                ...c
            },
            ...l
        }, { requestHandler: g } = t;
        let m = r ?? {};
        return c.eventStream && (m = {
            isEventStream: !0,
            ...m
        }), h.resolve((e)=>g.handle(e.request, m), p);
    }
}
class g {
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
        return t = class extends p {
            input;
            static getEndpointParameterInstructions() {
                return e._ep;
            }
            constructor(...[t]){
                super(), this.input = t ?? {}, e._init(this), this.schema = e._operationSchema;
            }
            resolveMiddleware(r, n, s) {
                const i = e._operationSchema, o = i?.[4] ?? i?.input, a = i?.[5] ?? i?.output;
                return this.resolveMiddlewareWithContext(r, n, s, {
                    CommandCtor: t,
                    middlewareFn: e._middlewareFn,
                    clientName: e._clientName,
                    commandName: e._commandName,
                    inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (i ? f.bind(null, o) : (e)=>e),
                    outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (i ? f.bind(null, a) : (e)=>e),
                    smithyContext: e._smithyContext,
                    additionalContext: e._additionalContext
                });
            }
            serialize = e._serializer;
            deserialize = e._deserializer;
        };
    }
}
const m = "***SensitiveInformation***", y = (e, t, r)=>{
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
};
class w extends Error {
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
        return w.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && ("client" === t.$fault || "server" === t.$fault);
    }
    static [Symbol.hasInstance](e) {
        if (!e) return !1;
        const t = e;
        return this === w ? w.isInstance(e) : !!w.isInstance(e) && (t.name && this.name ? this.prototype.isPrototypeOf(e) || t.name === this.name : this.prototype.isPrototypeOf(e));
    }
}
const S = (e, t = {})=>{
    Object.entries(t).filter(([, e])=>void 0 !== e).forEach(([t, r])=>{
        null != e[t] && "" !== e[t] || (e[t] = r);
    });
    const r = e.message || e.Message || "UnknownError";
    return e.message = r, delete e.Message, e;
}, b = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: n })=>{
    const s = v(e), i = s.httpStatusCode ? s.httpStatusCode + "" : void 0, o = new r({
        name: t?.code || t?.Code || n || i || "UnknownError",
        $fault: "client",
        $metadata: s
    });
    throw S(o, t);
}, E = (e)=>({ output: t, parsedBody: r, errorCode: n })=>{
        b({
            output: t,
            parsedBody: r,
            exceptionCtor: e,
            errorCode: n
        });
    }, v = (e)=>({
        httpStatusCode: e.statusCode,
        requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"]
    }), x = (e)=>{
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
};
let T = !1;
const A = (e)=>{
    e && !T && parseInt(e.substring(1, e.indexOf("."))) < 16 && (T = !0);
};
var N = require(30338);
const C = Object.values(N.dB), _ = (e)=>Object.assign(((e)=>{
        const t = [];
        for(const r in N.dB){
            const n = N.dB[r];
            void 0 !== e[n] && t.push({
                algorithmId: ()=>n,
                checksumConstructor: ()=>e[n]
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
                C.includes(n) ? e.checksumAlgorithms[n.toUpperCase()] = s : e.checksumAlgorithms[n] = s, t.push(r);
            },
            checksumAlgorithms: ()=>t
        };
    })(e), ((e)=>({
            setRetryStrategy (t) {
                e.retryStrategy = t;
            },
            retryStrategy: ()=>e.retryStrategy
        }))(e)), R = _, I = (e)=>Object.assign(((e)=>{
        const t = {};
        return e.checksumAlgorithms().forEach((e)=>{
            const r = e.algorithmId();
            C.includes(r) && (t[r] = e.checksumConstructor());
        }), t;
    })(e), ((e)=>{
        const t = {};
        return t.retryStrategy = e.retryStrategy(), t;
    })(e)), D = (e)=>Array.isArray(e) ? e : [
        e
    ], k = (e)=>{
    const t = "#text";
    for(const r in e)e.hasOwnProperty(r) && void 0 !== e[r][t] ? e[r] = e[r][t] : "object" == typeof e[r] && null !== e[r] && (e[r] = k(e[r]));
    return e;
}, O = (e)=>null != e;
var M = require("./module-65844.js");
function P(e, t, r) {
    let n, s, i;
    if (void 0 === t && void 0 === r) n = {}, i = e;
    else {
        if (n = e, "function" == typeof t) return s = t, i = r, L(n, s, i);
        i = t;
    }
    for (const e of Object.keys(i))Array.isArray(i[e]) ? U(n, null, i, e) : n[e] = i[e];
    return n;
}
const $ = (e)=>{
    const t = {};
    for (const [r, n] of Object.entries(e || {}))t[r] = [
        ,
        n
    ];
    return t;
}, j = (e, t)=>{
    const r = {};
    for(const n in t)U(r, e, t, n);
    return r;
}, L = (e, t, r)=>P(e, Object.entries(r).reduce((e, [r, n])=>(Array.isArray(n) ? e[r] = n : e[r] = "function" == typeof n ? [
            t,
            n()
        ] : [
            t,
            n
        ], e), {})), U = (e, t, r, n)=>{
    if (null !== t) {
        let s = r[n];
        "function" == typeof s && (s = [
            ,
            s
        ]);
        const [i = B, o = F, a = n] = s;
        return void (("function" == typeof i && i(t[a]) || "function" != typeof i && i) && (e[n] = o(t[a])));
    }
    let [s, i] = r[n];
    if ("function" == typeof i) {
        let t;
        const r = void 0 === s && null != (t = i()), o = "function" == typeof s && !!s(void 0) || "function" != typeof s && !!s;
        r ? e[n] = t : o && (e[n] = i());
    } else {
        const t = void 0 === s && null != i, r = "function" == typeof s && !!s(i) || "function" != typeof s && !!s;
        (t || r) && (e[n] = i);
    }
}, B = (e)=>null != e, F = (e)=>e, z = (e)=>{
    if (e != e) return "NaN";
    switch(e){
        case 1 / 0:
            return "Infinity";
        case -1 / 0:
            return "-Infinity";
        default:
            return e;
    }
}, V = (e)=>e.toISOString().replace(".000Z", "Z"), H = (e)=>{
    if (null == e) return {};
    if (Array.isArray(e)) return e.filter((e)=>null != e).map(H);
    if ("object" == typeof e) {
        const t = {};
        for (const r of Object.keys(e))null != e[r] && (t[r] = H(e[r]));
        return t;
    }
    return e;
};
var q = require(96851);
