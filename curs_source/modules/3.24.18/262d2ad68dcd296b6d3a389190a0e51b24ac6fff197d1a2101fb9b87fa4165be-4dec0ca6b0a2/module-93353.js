const { getSmithyContext: n, HttpResponse: o, toEndpointV1: s } = require("./module-11255.js"), i = (e)=>"function" == typeof e ? e() : e, a = (e, t, r, n, o)=>({
        name: t,
        namespace: e,
        traits: r,
        input: n,
        output: o
    }), l = (e, t)=>(t.find(([t])=>t.match(e)) || [
        void 0,
        void 0
    ])[1], c = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: [
        "DESERIALIZER"
    ],
    override: !0
}, u = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: !0
};
class d {
    name;
    namespace;
    traits;
    static assign(e, t) {
        return Object.assign(e, t);
    }
    static [Symbol.hasInstance](e) {
        const t = this.prototype.isPrototypeOf(e);
        if (!t && "object" == typeof e && null !== e) {
            return e.symbol === this.symbol;
        }
        return t;
    }
    getName() {
        return this.namespace + "#" + this.name;
    }
}
class p extends d {
    static symbol = Symbol.for("@smithy/lis");
    valueSchema;
    symbol = p.symbol;
}
class h extends d {
    static symbol = Symbol.for("@smithy/map");
    keySchema;
    valueSchema;
    symbol = h.symbol;
}
class m extends d {
    static symbol = Symbol.for("@smithy/ope");
    input;
    output;
    symbol = m.symbol;
}
class f extends d {
    static symbol = Symbol.for("@smithy/str");
    memberNames;
    memberList;
    symbol = f.symbol;
}
class g extends f {
    static symbol = Symbol.for("@smithy/err");
    ctor;
    symbol = g.symbol;
}
const y = [];
function v(e) {
    if ("object" == typeof e) return e;
    if (y[e |= 0]) return y[e];
    const t = {};
    let r = 0;
    for (const n of [
        "httpLabel",
        "idempotent",
        "idempotencyToken",
        "sensitive",
        "httpPayload",
        "httpResponseCode",
        "httpQueryParams"
    ])1 == (e >> r++ & 1) && (t[n] = 1);
    return y[e] = t;
}
const w = Symbol.for("@smithy/nor-struct-it"), b = Symbol.for("@smithy/ns"), _ = [], S = {};
class x {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = x.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(e, t){
        this.ref = e, this.memberName = t;
        const r = [];
        let n = e, o = e;
        for(this._isMemberSchema = !1; E(n);)r.push(n[1]), n = n[0], o = i(n), this._isMemberSchema = !0;
        if (r.length > 0) {
            this.memberTraits = {};
            for(let e = r.length - 1; e >= 0; --e){
                const t = r[e];
                Object.assign(this.memberTraits, v(t));
            }
        } else this.memberTraits = 0;
        if (o instanceof x) {
            const e = this.memberTraits;
            return Object.assign(this, o), this.memberTraits = Object.assign({}, e, o.getMemberTraits(), this.getMemberTraits()), this.normalizedTraits = void 0, void (this.memberName = t ?? o.memberName);
        }
        if (this.schema = i(o), T(this.schema) ? (this.name = `${this.schema[1]}#${this.schema[2]}`, this.traits = this.schema[3]) : (this.name = this.memberName ?? String(o), this.traits = 0), this._isMemberSchema && !t) throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(!0)} missing member name.`);
    }
    static [Symbol.hasInstance](e) {
        const t = this.prototype.isPrototypeOf(e);
        if (!t && "object" == typeof e && null !== e) {
            return e.symbol === this.symbol;
        }
        return t;
    }
    static of(e) {
        const t = "function" == typeof e || "object" == typeof e && null !== e;
        if ("number" == typeof e) {
            if (_[e]) return _[e];
        } else if ("string" == typeof e) {
            if (S[e]) return S[e];
        } else if (t && e[b]) return e[b];
        const r = i(e);
        if (r instanceof x) return r;
        if (E(r)) {
            const [t, n] = r;
            if (t instanceof x) return Object.assign(t.getMergedTraits(), v(n)), t;
            throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(e, null, 2)}.`);
        }
        const n = new x(r);
        return t ? e[b] = n : "string" == typeof r ? S[r] = n : "number" == typeof r ? _[r] = n : n;
    }
    getSchema() {
        const e = this.schema;
        return Array.isArray(e) && 0 === e[0] ? e[4] : e;
    }
    getName(e = !1) {
        const { name: t } = this;
        return !e && t && t.includes("#") ? t.split("#")[1] : t || void 0;
    }
    getMemberName() {
        return this.memberName;
    }
    isMemberSchema() {
        return this._isMemberSchema;
    }
    isListSchema() {
        const e = this.getSchema();
        return "number" == typeof e ? e >= 64 && e < 128 : 1 === e[0];
    }
    isMapSchema() {
        const e = this.getSchema();
        return "number" == typeof e ? e >= 128 && e <= 255 : 2 === e[0];
    }
    isStructSchema() {
        const e = this.getSchema();
        if ("object" != typeof e) return !1;
        const t = e[0];
        return 3 === t || -3 === t || 4 === t;
    }
    isUnionSchema() {
        const e = this.getSchema();
        return "object" == typeof e && 4 === e[0];
    }
    isBlobSchema() {
        const e = this.getSchema();
        return 21 === e || 42 === e;
    }
    isTimestampSchema() {
        const e = this.getSchema();
        return "number" == typeof e && e >= 4 && e <= 7;
    }
    isUnitSchema() {
        return "unit" === this.getSchema();
    }
    isDocumentSchema() {
        return 15 === this.getSchema();
    }
    isStringSchema() {
        return 0 === this.getSchema();
    }
    isBooleanSchema() {
        return 2 === this.getSchema();
    }
    isNumericSchema() {
        return 1 === this.getSchema();
    }
    isBigIntegerSchema() {
        return 17 === this.getSchema();
    }
    isBigDecimalSchema() {
        return 19 === this.getSchema();
    }
    isStreaming() {
        const { streaming: e } = this.getMergedTraits();
        return !!e || 42 === this.getSchema();
    }
    isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
    }
    getMergedTraits() {
        return this.normalizedTraits ?? (this.normalizedTraits = {
            ...this.getOwnTraits(),
            ...this.getMemberTraits()
        });
    }
    getMemberTraits() {
        return v(this.memberTraits);
    }
    getOwnTraits() {
        return v(this.traits);
    }
    getKeySchema() {
        const [e, t] = [
            this.isDocumentSchema(),
            this.isMapSchema()
        ];
        if (!e && !t) throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(!0)}`);
        const r = this.getSchema();
        return k([
            e ? 15 : r[4] ?? 0,
            0
        ], "key");
    }
    getValueSchema() {
        const e = this.getSchema(), [t, r, n] = [
            this.isDocumentSchema(),
            this.isMapSchema(),
            this.isListSchema()
        ], o = "number" == typeof e ? 63 & e : e && "object" == typeof e && (r || n) ? e[3 + e[0]] : t ? 15 : void 0;
        if (null != o) return k([
            o,
            0
        ], r ? "value" : "member");
        throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no value member.`);
    }
    getMemberSchema(e) {
        const t = this.getSchema();
        if (this.isStructSchema() && t[4].includes(e)) {
            const r = t[4].indexOf(e), n = t[5][r];
            return k(E(n) ? n : [
                n,
                0
            ], e);
        }
        if (this.isDocumentSchema()) return k([
            15,
            0
        ], e);
        throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no member=${e}.`);
    }
    getMemberSchemas() {
        const e = {};
        try {
            for (const [t, r] of this.structIterator())e[t] = r;
        } catch (e) {}
        return e;
    }
    getEventStreamMember() {
        if (this.isStructSchema()) {
            for (const [e, t] of this.structIterator())if (t.isStreaming() && t.isStructSchema()) return e;
        }
        return "";
    }
    *structIterator() {
        if (this.isUnitSchema()) return;
        if (!this.isStructSchema()) throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        const e = this.getSchema(), t = e[4].length;
        let r = e[w];
        if (r && t === r.length) yield* r;
        else {
            r = Array(t);
            for(let n = 0; n < t; ++n){
                const t = e[4][n], o = k([
                    e[5][n],
                    0
                ], t);
                yield r[n] = [
                    t,
                    o
                ];
            }
            e[w] = r;
        }
    }
}
function k(e, t) {
    if (e instanceof x) return Object.assign(e, {
        memberName: t,
        _isMemberSchema: !0
    });
    return new x(e, t);
}
const E = (e)=>Array.isArray(e) && 2 === e.length, T = (e)=>Array.isArray(e) && e.length >= 5;
class C extends d {
    static symbol = Symbol.for("@smithy/sim");
    schemaRef;
    symbol = C.symbol;
}
class I {
    namespace;
    schemas;
    exceptions;
    static registries = new Map;
    constructor(e, t = new Map, r = new Map){
        this.namespace = e, this.schemas = t, this.exceptions = r;
    }
    static for(e) {
        return I.registries.has(e) || I.registries.set(e, new I(e)), I.registries.get(e);
    }
    copyFrom(e) {
        const { schemas: t, exceptions: r } = this;
        for (const [r, n] of e.schemas)t.has(r) || t.set(r, n);
        for (const [t, n] of e.exceptions)r.has(t) || r.set(t, n);
    }
    register(e, t) {
        const r = this.normalizeShapeId(e);
        for (const e of [
            this,
            I.for(r.split("#")[0])
        ])e.schemas.set(r, t);
    }
    getSchema(e) {
        const t = this.normalizeShapeId(e);
        if (!this.schemas.has(t)) {
            if (!e.includes("#")) {
                const t = "#" + e, r = [];
                for (const [e, n] of this.schemas.entries())e.endsWith(t) && r.push(n);
                if (1 === r.length) return r[0];
            }
            throw new Error(`@smithy/core/schema - schema not found for ${t}`);
        }
        return this.schemas.get(t);
    }
    registerError(e, t) {
        const r = e, n = r[1];
        for (const e of [
            this,
            I.for(n)
        ])e.schemas.set(n + "#" + r[2], r), e.exceptions.set(r, t);
    }
    getErrorCtor(e) {
        const t = e;
        if (this.exceptions.has(t)) return this.exceptions.get(t);
        return I.for(t[1]).exceptions.get(t);
    }
    getBaseException() {
        for (const e of this.exceptions.keys())if (Array.isArray(e)) {
            const [, t, r] = e, n = t + "#" + r;
            if (n.startsWith("smithy.ts.sdk.synthetic.") && n.endsWith("ServiceException")) return e;
        }
    }
    find(e) {
        for (const t of this.schemas.values())if (e(t)) return t;
    }
    clear() {
        this.schemas.clear(), this.exceptions.clear();
    }
    normalizeShapeId(e) {
        return e.includes("#") ? e : this.namespace + "#" + e;
    }
}
exports.ErrorSchema = g, exports.ListSchema = p, exports.MapSchema = h, exports.NormalizedSchema = x, exports.OperationSchema = m, exports.SCHEMA = {
    BLOB: 21,
    STREAMING_BLOB: 42,
    BOOLEAN: 2,
    STRING: 0,
    NUMERIC: 1,
    BIG_INTEGER: 17,
    BIG_DECIMAL: 19,
    DOCUMENT: 15,
    TIMESTAMP_DEFAULT: 4,
    TIMESTAMP_DATE_TIME: 5,
    TIMESTAMP_HTTP_DATE: 6,
    TIMESTAMP_EPOCH_SECONDS: 7,
    LIST_MODIFIER: 64,
    MAP_MODIFIER: 128
}, exports.Schema = d, exports.SimpleSchema = C, exports.StructureSchema = f, exports.TypeRegistry = I, exports.deref = i, exports.deserializerMiddlewareOption = c, exports.error = (e, t, r, n, o, s)=>d.assign(new g, {
        name: t,
        namespace: e,
        traits: r,
        memberNames: n,
        memberList: o,
        ctor: null
    }), exports.getSchemaSerdePlugin = function(e) {
    return {
        applyToStack: (t)=>{
            t.add(((e)=>(t, r)=>async (o)=>{
                        const { operationSchema: i } = n(r), [, l, c, u, d, p] = i ?? [], h = r.endpointV2 ? async ()=>s(r.endpointV2) : e.endpoint, m = await e.protocol.serializeRequest(a(l, c, u, d, p), o.input, {
                            ...e,
                            ...r,
                            endpoint: h
                        });
                        return t({
                            ...o,
                            request: m
                        });
                    })(e), u), t.add(((e)=>(t, r)=>async (s)=>{
                        const { response: i } = await t(s), { operationSchema: c } = n(r), [, u, d, p, h, m] = c ?? [];
                        try {
                            return {
                                response: i,
                                output: await e.protocol.deserializeResponse(a(u, d, p, h, m), {
                                    ...e,
                                    ...r
                                }, i)
                            };
                        } catch (e) {
                            if (Object.defineProperty(e, "$response", {
                                value: i,
                                enumerable: !1,
                                writable: !1,
                                configurable: !1
                            }), !("$metadata" in e)) {
                                const t = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
                                try {
                                    e.message += "\n  " + t;
                                } catch (e) {
                                    r.logger && "NoOpLogger" !== r.logger?.constructor?.name ? r.logger?.warn?.(t) : console.warn(t);
                                }
                                void 0 !== e.$responseBodyText && e.$response && (e.$response.body = e.$responseBodyText);
                                try {
                                    if (o.isInstance(i)) {
                                        const { headers: t = {}, statusCode: r } = i, n = Object.entries(t);
                                        e.$metadata = {
                                            httpStatusCode: r,
                                            requestId: l(/^x-[\w-]+-request-?id$/, n),
                                            extendedRequestId: l(/^x-[\w-]+-id-2$/, n),
                                            cfId: l(/^x-[\w-]+-cf-id$/, n)
                                        };
                                    }
                                } catch (e) {}
                            }
                            throw e;
                        }
                    })(e), c), e.protocol.setSerdeContext(e);
        }
    };
}, exports.isStaticSchema = T, exports.list = (e, t, r, n)=>d.assign(new p, {
        name: t,
        namespace: e,
        traits: r,
        valueSchema: n
    }), exports.map = (e, t, r, n, o)=>d.assign(new h, {
        name: t,
        namespace: e,
        traits: r,
        keySchema: n,
        valueSchema: o
    }), exports.op = (e, t, r, n, o)=>d.assign(new m, {
        name: t,
        namespace: e,
        traits: r,
        input: n,
        output: o
    }), exports.operation = a, exports.serializerMiddlewareOption = u, exports.sim = (e, t, r, n)=>d.assign(new C, {
        name: t,
        namespace: e,
        traits: n,
        schemaRef: r
    }), exports.simAdapter = (e, t, r, n)=>d.assign(new C, {
        name: t,
        namespace: e,
        traits: r,
        schemaRef: n
    }), exports.simpleSchemaCacheN = _, exports.simpleSchemaCacheS = S, exports.struct = (e, t, r, n, o)=>d.assign(new f, {
        name: t,
        namespace: e,
        traits: r,
        memberNames: n,
        memberList: o
    }), exports.traitsCache = y, exports.translateTraits = v;
