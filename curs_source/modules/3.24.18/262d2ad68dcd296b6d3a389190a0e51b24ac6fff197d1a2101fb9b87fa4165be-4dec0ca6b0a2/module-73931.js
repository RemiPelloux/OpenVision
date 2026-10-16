const { Uint8ArrayBlobAdapter: n, sdkStreamMixin: o, splitEvery: s, splitHeader: i, fromBase64: a, _parseEpochTimestamp: l, _parseRfc7231DateTime: c, _parseRfc3339DateTimeWithOffset: u, LazyJsonString: d, NumericValue: p, toUtf8: h, fromUtf8: m, generateIdempotencyToken: f, toBase64: g, dateToUtcString: y, quoteHeader: v } = require("./module-96851.js"), { HttpRequest: w, HttpResponse: b, hasOwn: _, isValidHostname: S } = require("./module-11255.js"), { parseQueryString: x, parseUrl: k } = require("./module-11255.js");
exports.HttpRequest = w, exports.HttpResponse = b, exports.isValidHostname = S, exports.parseQueryString = x, exports.parseUrl = k;
const { TypeRegistry: E, NormalizedSchema: T, translateTraits: C } = require("./module-93353.js"), { FieldPosition: I } = require("./module-52391.js"), A = async (e = new Uint8Array, t)=>{
    if (e instanceof Uint8Array) return n.mutate(e);
    if (!e) return n.mutate(new Uint8Array);
    const r = t.streamCollector(e);
    return n.mutate(await r);
};
function P(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
class M {
    serdeContext;
    setSerdeContext(e) {
        this.serdeContext = e;
    }
}
class R extends M {
    options;
    compositeErrorRegistry;
    constructor(e){
        super(), this.options = e, this.compositeErrorRegistry = E.for(e.defaultNamespace);
        for (const t of e.errorTypeRegistries ?? [])this.compositeErrorRegistry.copyFrom(t);
    }
    getRequestType() {
        return w;
    }
    getResponseType() {
        return b;
    }
    setSerdeContext(e) {
        this.serdeContext = e, this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e), this.getPayloadCodec() && this.getPayloadCodec().setSerdeContext(e);
    }
    updateServiceEndpoint(e, t) {
        if ("url" in t) {
            e.protocol = t.url.protocol, e.hostname = t.url.hostname, e.port = t.url.port ? Number(t.url.port) : void 0, e.path = t.url.pathname, e.fragment = t.url.hash || void 0, e.username = t.url.username || void 0, e.password = t.url.password || void 0, e.query || (e.query = {});
            for (const [r, n] of t.url.searchParams.entries())e.query[r] = n;
            if (t.headers) for(const r in t.headers)_(t.headers, r) && (e.headers[r] = t.headers[r].join(", "));
            return e;
        }
        if (e.protocol = t.protocol, e.hostname = t.hostname, e.port = t.port ? Number(t.port) : void 0, e.path = t.path, e.query = {
            ...t.query
        }, t.headers) for(const r in t.headers)_(t.headers, r) && (e.headers[r] = t.headers[r]);
        return e;
    }
    setHostPrefix(e, t, r) {
        if (this.serdeContext?.disableHostPrefix) return;
        const n = T.of(t.input), o = C(t.traits ?? {});
        if (o.endpoint) {
            let t = o.endpoint?.[0];
            if ("string" == typeof t) {
                for (const [e, o] of n.structIterator()){
                    if (!o.getMergedTraits().hostLabel) continue;
                    const n = r[e];
                    if ("string" != typeof n) throw new Error(`@smithy/core/schema - ${e} in input must be a string as hostLabel.`);
                    t = t.replace(`{${e}}`, n);
                }
                if (e.hostname = t + e.hostname, !S(e.hostname)) throw new Error(`[${e.hostname}] is not a valid hostname.`);
            }
        }
    }
    deserializeMetadata(e) {
        return {
            httpStatusCode: e.statusCode,
            requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
            extendedRequestId: e.headers["x-amz-id-2"],
            cfId: e.headers["x-amz-cf-id"]
        };
    }
    async serializeEventStream({ eventStream: e, requestSchema: t, initialRequest: r }) {
        return (await this.loadEventStreamCapability()).serializeEventStream({
            eventStream: e,
            requestSchema: t,
            initialRequest: r
        });
    }
    async deserializeEventStream({ response: e, responseSchema: t, initialResponseContainer: r }) {
        return (await this.loadEventStreamCapability()).deserializeEventStream({
            response: e,
            responseSchema: t,
            initialResponseContainer: r
        });
    }
    async loadEventStreamCapability() {
        const { EventStreamSerde: e, eventStreamSerdeProvider: t } = require("./module-77878.js");
        return new e({
            marshaller: this.resolveEventStreamMarshaller(t),
            serializer: this.serializer,
            deserializer: this.deserializer,
            serdeContext: this.serdeContext,
            defaultContentType: this.getDefaultContentType(),
            compositeErrorRegistry: this.compositeErrorRegistry
        });
    }
    resolveEventStreamMarshaller(e) {
        const t = this.serdeContext;
        return t.eventStreamMarshaller ? t.eventStreamMarshaller : e(this.serdeContext);
    }
    getDefaultContentType() {
        throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    async deserializeHttpMessage(e, t, r, n, o) {
        return [];
    }
    getEventStreamMarshaller() {
        const e = this.serdeContext;
        if (!e.eventStreamMarshaller) throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        return e.eventStreamMarshaller;
    }
}
const O = (e, t, r, n, o, s)=>{
    if (null == t || void 0 === t[r]) throw new Error("No value provided for input HTTP label: " + r + ".");
    {
        const t = n();
        if (null == t || t.length <= 0) throw new Error("Empty value provided for input HTTP label: " + r + ".");
        e = e.replace(o, s ? t.split("/").map((e)=>P(e)).join("/") : P(t));
    }
    return e;
};
class D {
    input;
    context;
    query = {};
    method = "";
    headers = {};
    path = "";
    body = null;
    hostname = "";
    resolvePathStack = [];
    constructor(e, t){
        this.input = e, this.context = t;
    }
    async build() {
        const { hostname: e, protocol: t = "https", port: r, path: n } = await this.context.endpoint();
        this.path = n;
        for (const e of this.resolvePathStack)e(this.path);
        return new w({
            protocol: t,
            hostname: this.hostname || e,
            port: r,
            method: this.method,
            path: this.path,
            query: this.query,
            body: this.body,
            headers: this.headers
        });
    }
    hn(e) {
        return this.hostname = e, this;
    }
    bp(e) {
        return this.resolvePathStack.push((t)=>{
            this.path = `${t?.endsWith("/") ? t.slice(0, -1) : t || ""}` + e;
        }), this;
    }
    p(e, t, r, n) {
        return this.resolvePathStack.push((o)=>{
            this.path = O(o, this.input, e, t, r, n);
        }), this;
    }
    h(e) {
        return this.headers = e, this;
    }
    q(e) {
        return this.query = e, this;
    }
    b(e) {
        return this.body = e, this;
    }
    m(e) {
        return this.method = e, this;
    }
}
function N(e, t) {
    if (t.timestampFormat.useTrait && e.isTimestampSchema() && (5 === e.getSchema() || 6 === e.getSchema() || 7 === e.getSchema())) return e.getSchema();
    const { httpLabel: r, httpPrefixHeaders: n, httpHeader: o, httpQuery: s } = e.getMergedTraits();
    return (t.httpBindings ? "string" == typeof n || Boolean(o) ? 6 : Boolean(s) || Boolean(r) ? 5 : void 0 : void 0) ?? t.timestampFormat.default;
}
class F extends M {
    settings;
    constructor(e){
        super(), this.settings = e;
    }
    read(e, t) {
        const r = T.of(e);
        if (r.isListSchema()) return i(t).map((e)=>this.read(r.getValueSchema(), e));
        if (r.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? a)(t);
        if (r.isTimestampSchema()) {
            switch(N(r, this.settings)){
                case 5:
                    return u(t);
                case 6:
                    return c(t);
                case 7:
                    return l(t);
                default:
                    return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
            }
        }
        if (r.isStringSchema()) {
            const e = r.getMergedTraits().mediaType;
            let n = t;
            if (e) {
                r.getMergedTraits().httpHeader && (n = this.base64ToUtf8(n));
                return ("application/json" === e || e.endsWith("+json")) && (n = d.from(n)), n;
            }
        }
        return r.isNumericSchema() ? Number(t) : r.isBigIntegerSchema() ? BigInt(t) : r.isBigDecimalSchema() ? new p(t, "bigDecimal") : r.isBooleanSchema() ? "true" === String(t).toLowerCase() : t;
    }
    base64ToUtf8(e) {
        return (this.serdeContext?.utf8Encoder ?? h)((this.serdeContext?.base64Decoder ?? a)(e));
    }
}
class L extends M {
    settings;
    stringBuffer = "";
    constructor(e){
        super(), this.settings = e;
    }
    write(e, t) {
        const r = T.of(e);
        switch(typeof t){
            case "object":
                if (null === t) return void (this.stringBuffer = "null");
                if (r.isTimestampSchema()) {
                    if (!(t instanceof Date)) throw new Error(`@smithy/core/protocols - received non-Date value ${t} when schema expected Date in ${r.getName(!0)}`);
                    switch(N(r, this.settings)){
                        case 5:
                            this.stringBuffer = t.toISOString().replace(".000Z", "Z");
                            break;
                        case 6:
                            this.stringBuffer = y(t);
                            break;
                        case 7:
                            this.stringBuffer = String(t.getTime() / 1e3);
                            break;
                        default:
                            console.warn("Missing timestamp format, using epoch seconds", t), this.stringBuffer = String(t.getTime() / 1e3);
                    }
                    return;
                }
                if (r.isBlobSchema() && "byteLength" in t) return void (this.stringBuffer = (this.serdeContext?.base64Encoder ?? g)(t));
                if (r.isListSchema() && Array.isArray(t)) {
                    let e = "";
                    for (const n of t){
                        this.write([
                            r.getValueSchema(),
                            r.getMergedTraits()
                        ], n);
                        const t = this.flush();
                        "" !== e && (e += ", "), e += r.getValueSchema().isTimestampSchema() ? t : v(t);
                    }
                    return void (this.stringBuffer = e);
                }
                this.stringBuffer = JSON.stringify(t, null, 2);
                break;
            case "string":
                const e = r.getMergedTraits().mediaType;
                let n = t;
                if (e) {
                    if (("application/json" === e || e.endsWith("+json")) && (n = d.from(n)), r.getMergedTraits().httpHeader) return void (this.stringBuffer = (this.serdeContext?.base64Encoder ?? g)(n.toString()));
                }
                this.stringBuffer = t;
                break;
            default:
                r.isIdempotencyToken() ? this.stringBuffer = f() : this.stringBuffer = String(t);
        }
    }
    flush() {
        const e = this.stringBuffer;
        return this.stringBuffer = "", e;
    }
}
const U = "content-length";
function B(e) {
    return (t)=>async (r)=>{
            const n = r.request;
            if (w.isInstance(n)) {
                const { body: t, headers: r } = n;
                if (t && -1 === Object.keys(r).map((e)=>e.toLowerCase()).indexOf(U)) try {
                    const r = e(t);
                    null != r && (n.headers = {
                        ...n.headers,
                        [U]: String(r)
                    });
                } catch (e) {}
            }
            return t({
                ...r,
                request: n
            });
        };
}
const $ = {
    step: "build",
    tags: [
        "SET_CONTENT_LENGTH",
        "CONTENT_LENGTH"
    ],
    name: "contentLengthMiddleware",
    override: !0
}, q = (e)=>encodeURIComponent(e).replace(/[!'()*]/g, j), j = (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`;
exports.Field = class {
    name;
    kind;
    values;
    constructor({ name: e, kind: t = I.HEADER, values: r = [] }){
        this.name = e, this.kind = t, this.values = r;
    }
    add(e) {
        this.values.push(e);
    }
    set(e) {
        this.values = e;
    }
    remove(e) {
        this.values = this.values.filter((t)=>t !== e);
    }
    toString() {
        return this.values.map((e)=>e.includes(",") || e.includes(" ") ? `"${e}"` : e).join(", ");
    }
    get() {
        return this.values;
    }
}, exports.Fields = class {
    entries = {};
    encoding;
    constructor({ fields: e = [], encoding: t = "utf-8" }){
        e.forEach(this.setField.bind(this)), this.encoding = t;
    }
    setField(e) {
        this.entries[e.name.toLowerCase()] = e;
    }
    getField(e) {
        return this.entries[e.toLowerCase()];
    }
    removeField(e) {
        delete this.entries[e.toLowerCase()];
    }
    getByType(e) {
        return Object.values(this.entries).filter((t)=>t.kind === e);
    }
}, exports.FromStringShapeDeserializer = F, exports.HttpBindingProtocol = class extends R {
    async serializeRequest(e, t, r) {
        const n = t && "object" == typeof t ? t : {}, o = this.serializer, s = {}, i = {}, a = await r.endpoint(), l = T.of(e?.input), c = [], u = [];
        let d, p = !1;
        const h = new w({
            protocol: "",
            hostname: "",
            port: void 0,
            path: "",
            fragment: void 0,
            query: s,
            headers: i,
            body: void 0
        });
        if (a) {
            this.updateServiceEndpoint(h, a), this.setHostPrefix(h, e, n);
            const t = C(e.traits);
            if (t.http) {
                h.method = t.http[0];
                const [e, r] = t.http[1].split("?");
                "/" == h.path ? h.path = e : h.path += e;
                const n = new URLSearchParams(r ?? "");
                for (const [e, t] of n)s[e] = t;
            }
        }
        for (const [e, t] of l.structIterator()){
            const r = t.getMergedTraits() ?? {}, a = n[e];
            if (null != a || t.isIdempotencyToken()) if (r.httpPayload) {
                if (t.isStreaming()) {
                    t.isStructSchema() ? n[e] && (d = await this.serializeEventStream({
                        eventStream: n[e],
                        requestSchema: l
                    })) : d = a;
                } else o.write(t, a), d = o.flush();
            } else if (r.httpLabel) {
                o.write(t, a);
                const r = o.flush();
                h.path.includes(`{${e}+}`) ? h.path = h.path.replace(`{${e}+}`, r.split("/").map(P).join("/")) : h.path.includes(`{${e}}`) && (h.path = h.path.replace(`{${e}}`, P(r)));
            } else if (r.httpHeader) o.write(t, a), i[r.httpHeader.toLowerCase()] = String(o.flush());
            else if ("string" == typeof r.httpPrefixHeaders) for(const e in a){
                if (!_(a, e)) continue;
                const n = a[e], s = r.httpPrefixHeaders + e;
                o.write([
                    t.getValueSchema(),
                    {
                        httpHeader: s
                    }
                ], n), i[s.toLowerCase()] = o.flush();
            }
            else r.httpQuery || r.httpQueryParams ? this.serializeQuery(t, a, s) : (p = !0, c.push(e), u.push(t));
            else if (r.httpLabel && (h.path.includes(`{${e}+}`) || h.path.includes(`{${e}}`))) throw new Error(`No value provided for input HTTP label: ${e}.`);
        }
        if (p && n) {
            const [e, t] = (l.getName(!0) ?? "#Unknown").split("#"), r = l.getSchema()[6], s = [
                3,
                e,
                t,
                l.getMergedTraits(),
                c,
                u,
                void 0
            ];
            r ? s[6] = r : s.pop(), o.write(s, n), d = o.flush();
        }
        return h.headers = i, h.query = s, h.body = d, h;
    }
    serializeQuery(e, t, r) {
        const n = this.serializer, o = e.getMergedTraits();
        if (o.httpQueryParams) {
            for(const n in t)if (_(t, n) && !(n in r)) {
                const s = t[n], i = e.getValueSchema();
                Object.assign(i.getMergedTraits(), {
                    ...o,
                    httpQuery: n,
                    httpQueryParams: void 0
                }), this.serializeQuery(i, s, r);
            }
        } else if (e.isListSchema()) {
            const s = !!e.getMergedTraits().sparse, i = [];
            for (const r of t){
                n.write([
                    e.getValueSchema(),
                    o
                ], r);
                const t = n.flush();
                (s || void 0 !== t) && i.push(t);
            }
            r[o.httpQuery] = i;
        } else n.write([
            e,
            o
        ], t), r[o.httpQuery] = n.flush();
    }
    async deserializeResponse(e, t, r) {
        const n = this.deserializer, o = T.of(e.output), s = {};
        if (r.statusCode >= 300) {
            const o = await A(r.body, t);
            throw o.byteLength > 0 && Object.assign(s, await n.read(15, o)), await this.handleError(e, t, r, s, this.deserializeMetadata(r)), new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for(const e in r.headers){
            if (!_(r.headers, e)) continue;
            const t = r.headers[e];
            delete r.headers[e], r.headers[e.toLowerCase()] = t;
        }
        const i = await this.deserializeHttpMessage(o, t, r, s);
        if (i.length) {
            const e = await A(r.body, t);
            if (e.byteLength > 0) {
                const t = await n.read(o, e);
                for (const e of i)null != t[e] && (s[e] = t[e]);
            }
        } else i.discardResponseBody && await A(r.body, t);
        return s.$metadata = this.deserializeMetadata(r), s;
    }
    async deserializeHttpMessage(e, t, r, n, a) {
        let l;
        l = n instanceof Set ? a : n;
        let c = !0;
        const u = this.deserializer, d = T.of(e), p = [];
        for (const [e, n] of d.structIterator()){
            const a = n.getMemberTraits();
            if (a.httpPayload) {
                c = !1;
                if (n.isStreaming()) {
                    const t = n.isStructSchema();
                    l[e] = t ? await this.deserializeEventStream({
                        response: r,
                        responseSchema: d
                    }) : o(r.body);
                } else if (r.body) {
                    const o = await A(r.body, t);
                    o.byteLength > 0 && (l[e] = await u.read(n, o));
                }
            } else if (a.httpHeader) {
                const t = String(a.httpHeader).toLowerCase(), o = r.headers[t];
                if (null != o) if (n.isListSchema()) {
                    const r = n.getValueSchema();
                    let a;
                    r.getMergedTraits().httpHeader = t, a = r.isTimestampSchema() && 4 === r.getSchema() ? s(o, ",", 2) : i(o);
                    const c = [];
                    for (const e of a)c.push(await u.read(r, e.trim()));
                    l[e] = c;
                } else l[e] = await u.read(n, o);
            } else if (void 0 !== a.httpPrefixHeaders) {
                l[e] = {};
                for(const t in r.headers)if (_(r.headers, t) && t.startsWith(a.httpPrefixHeaders)) {
                    const o = r.headers[t], s = n.getValueSchema();
                    s.getMergedTraits().httpHeader = t, l[e][t.slice(a.httpPrefixHeaders.length)] = await u.read(s, o);
                }
            } else a.httpResponseCode ? l[e] = r.statusCode : p.push(e);
        }
        return p.discardResponseBody = c, p;
    }
}, exports.HttpInterceptingShapeDeserializer = class extends M {
    codecDeserializer;
    stringDeserializer;
    constructor(e, t){
        super(), this.codecDeserializer = e, this.stringDeserializer = new F(t);
    }
    setSerdeContext(e) {
        this.stringDeserializer.setSerdeContext(e), this.codecDeserializer.setSerdeContext(e), this.serdeContext = e;
    }
    read(e, t) {
        const r = T.of(e), n = r.getMergedTraits(), o = this.serdeContext?.utf8Encoder ?? h;
        if (n.httpHeader || n.httpResponseCode) return this.stringDeserializer.read(r, o(t));
        if (n.httpPayload) {
            if (r.isBlobSchema()) {
                const e = this.serdeContext?.utf8Decoder ?? m;
                return "string" == typeof t ? e(t) : t;
            }
            if (r.isStringSchema()) return "byteLength" in t ? o(t) : t;
        }
        return this.codecDeserializer.read(r, t);
    }
}, exports.HttpInterceptingShapeSerializer = class {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(e, t, r = new L(t)){
        this.codecSerializer = e, this.stringSerializer = r;
    }
    setSerdeContext(e) {
        this.codecSerializer.setSerdeContext(e), this.stringSerializer.setSerdeContext(e);
    }
    write(e, t) {
        const r = T.of(e), n = r.getMergedTraits();
        return n.httpHeader || n.httpLabel || n.httpQuery ? (this.stringSerializer.write(r, t), void (this.buffer = this.stringSerializer.flush())) : this.codecSerializer.write(r, t);
    }
    flush() {
        if (void 0 !== this.buffer) {
            const e = this.buffer;
            return this.buffer = void 0, e;
        }
        return this.codecSerializer.flush();
    }
}, exports.HttpProtocol = R, exports.RequestBuilder = D, exports.RpcProtocol = class extends R {
    async serializeRequest(e, t, r) {
        const n = this.serializer, o = {}, s = {}, i = await r.endpoint(), a = T.of(e?.input), l = a.getSchema();
        let c;
        const u = t && "object" == typeof t ? t : {}, d = new w({
            protocol: "",
            hostname: "",
            port: void 0,
            path: "/",
            fragment: void 0,
            query: o,
            headers: s,
            body: void 0
        });
        if (i && (this.updateServiceEndpoint(d, i), this.setHostPrefix(d, e, u)), u) {
            const e = a.getEventStreamMember();
            if (e) {
                if (u[e]) {
                    const t = {};
                    for (const [r] of a.structIterator())r !== e && null != u[r] && (t[r] = u[r]);
                    c = await this.serializeEventStream({
                        eventStream: u[e],
                        requestSchema: a,
                        initialRequest: t
                    });
                }
            } else n.write(l, u), c = n.flush();
        }
        return d.headers = Object.assign(d.headers, s), d.query = o, d.body = c, d.method = "POST", d;
    }
    async deserializeResponse(e, t, r) {
        const n = this.deserializer, o = T.of(e.output), s = {};
        if (r.statusCode >= 300) {
            const o = await A(r.body, t);
            throw o.byteLength > 0 && Object.assign(s, await n.read(15, o)), await this.handleError(e, t, r, s, this.deserializeMetadata(r)), new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for(const e in r.headers){
            if (!_(r.headers, e)) continue;
            const t = r.headers[e];
            delete r.headers[e], r.headers[e.toLowerCase()] = t;
        }
        const i = o.getEventStreamMember();
        if (i) s[i] = await this.deserializeEventStream({
            response: r,
            responseSchema: o,
            initialResponseContainer: s
        });
        else {
            const e = await A(r.body, t);
            e.byteLength > 0 && Object.assign(s, await n.read(o, e));
        }
        return s.$metadata = this.deserializeMetadata(r), s;
    }
}, exports.SerdeContext = M, exports.ToStringShapeSerializer = L, exports.buildQueryString = function(e) {
    const t = [];
    for (let r of Object.keys(e).sort()){
        const n = e[r];
        if (r = q(r), Array.isArray(n)) for(let e = 0, o = n.length; e < o; e++)t.push(`${r}=${q(n[e])}`);
        else {
            let e = r;
            (n || "string" == typeof n) && (e += `=${q(n)}`), t.push(e);
        }
    }
    return t.join("&");
}, exports.collectBody = A, exports.contentLengthMiddleware = B, exports.contentLengthMiddlewareOptions = $, exports.determineTimestampFormat = N, exports.escapeUri = q, exports.escapeUriPath = (e)=>e.split("/").map(q).join("/"), exports.extendedEncodeURIComponent = P, exports.getContentLengthPlugin = (e)=>({
        applyToStack: (t)=>{
            t.add(B(e.bodyLengthChecker), $);
        }
    }), exports.getHttpHandlerExtensionConfiguration = (e)=>(e.logger && "NoOpLogger" !== e.logger.constructor?.name && e.requestHandler?.updateHttpClientConfig?.(Symbol.for("logger"), e.logger), {
        setHttpHandler (t) {
            e.requestHandler = t;
        },
        httpHandler: ()=>e.requestHandler,
        updateHttpClientConfig (t, r) {
            e.requestHandler?.updateHttpClientConfig(t, r);
        },
        httpHandlerConfigs: ()=>e.requestHandler.httpHandlerConfigs()
    }), exports.requestBuilder = function(e, t) {
    return new D(e, t);
}, exports.resolveHttpHandlerRuntimeConfig = (e)=>({
        requestHandler: e.httpHandler()
    }), exports.resolvedPath = O;
