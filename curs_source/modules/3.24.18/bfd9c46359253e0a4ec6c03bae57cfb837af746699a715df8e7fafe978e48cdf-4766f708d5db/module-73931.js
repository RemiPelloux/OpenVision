const { Uint8ArrayBlobAdapter: n, sdkStreamMixin: s, splitEvery: o, splitHeader: i, fromBase64: a, _parseEpochTimestamp: c, _parseRfc7231DateTime: l, _parseRfc3339DateTimeWithOffset: u, LazyJsonString: d, NumericValue: p, toUtf8: m, fromUtf8: h, generateIdempotencyToken: f, toBase64: g, dateToUtcString: y, quoteHeader: w } = require("./module-96851.js"), { HttpRequest: v, HttpResponse: _, hasOwn: b, isValidHostname: S } = require("./module-11255.js"), { parseQueryString: k, parseUrl: x } = require("./module-11255.js");
exports.HttpRequest = v, exports.HttpResponse = _, exports.isValidHostname = S, exports.parseQueryString = k, exports.parseUrl = x;
const { TypeRegistry: E, NormalizedSchema: I, translateTraits: T } = require("./module-93353.js"), { FieldPosition: C } = require("./module-52391.js"), P = async (e = new Uint8Array, t)=>{
    if (e instanceof Uint8Array) return n.mutate(e);
    if (!e) return n.mutate(new Uint8Array);
    const r = t.streamCollector(e);
    return n.mutate(await r);
};
function A(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
class R {
    serdeContext;
    setSerdeContext(e) {
        this.serdeContext = e;
    }
}
class M extends R {
    options;
    compositeErrorRegistry;
    constructor(e){
        super(), this.options = e, this.compositeErrorRegistry = E.for(e.defaultNamespace);
        for (const t of e.errorTypeRegistries ?? [])this.compositeErrorRegistry.copyFrom(t);
    }
    getRequestType() {
        return v;
    }
    getResponseType() {
        return _;
    }
    setSerdeContext(e) {
        this.serdeContext = e, this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e), this.getPayloadCodec() && this.getPayloadCodec().setSerdeContext(e);
    }
    updateServiceEndpoint(e, t) {
        if ("url" in t) {
            e.protocol = t.url.protocol, e.hostname = t.url.hostname, e.port = t.url.port ? Number(t.url.port) : void 0, e.path = t.url.pathname, e.fragment = t.url.hash || void 0, e.username = t.url.username || void 0, e.password = t.url.password || void 0, e.query || (e.query = {});
            for (const [r, n] of t.url.searchParams.entries())e.query[r] = n;
            if (t.headers) for(const r in t.headers)b(t.headers, r) && (e.headers[r] = t.headers[r].join(", "));
            return e;
        }
        if (e.protocol = t.protocol, e.hostname = t.hostname, e.port = t.port ? Number(t.port) : void 0, e.path = t.path, e.query = {
            ...t.query
        }, t.headers) for(const r in t.headers)b(t.headers, r) && (e.headers[r] = t.headers[r]);
        return e;
    }
    setHostPrefix(e, t, r) {
        if (this.serdeContext?.disableHostPrefix) return;
        const n = I.of(t.input), s = T(t.traits ?? {});
        if (s.endpoint) {
            let t = s.endpoint?.[0];
            if ("string" == typeof t) {
                for (const [e, s] of n.structIterator()){
                    if (!s.getMergedTraits().hostLabel) continue;
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
    async deserializeHttpMessage(e, t, r, n, s) {
        return [];
    }
    getEventStreamMarshaller() {
        const e = this.serdeContext;
        if (!e.eventStreamMarshaller) throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        return e.eventStreamMarshaller;
    }
}
const J = (e, t, r, n, s, o)=>{
    if (null == t || void 0 === t[r]) throw new Error("No value provided for input HTTP label: " + r + ".");
    {
        const t = n();
        if (null == t || t.length <= 0) throw new Error("Empty value provided for input HTTP label: " + r + ".");
        e = e.replace(s, o ? t.split("/").map((e)=>A(e)).join("/") : A(t));
    }
    return e;
};
class O {
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
        return new v({
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
        return this.resolvePathStack.push((s)=>{
            this.path = J(s, this.input, e, t, r, n);
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
function B(e, t) {
    if (t.timestampFormat.useTrait && e.isTimestampSchema() && (5 === e.getSchema() || 6 === e.getSchema() || 7 === e.getSchema())) return e.getSchema();
    const { httpLabel: r, httpPrefixHeaders: n, httpHeader: s, httpQuery: o } = e.getMergedTraits();
    return (t.httpBindings ? "string" == typeof n || Boolean(s) ? 6 : Boolean(o) || Boolean(r) ? 5 : void 0 : void 0) ?? t.timestampFormat.default;
}
class D extends R {
    settings;
    constructor(e){
        super(), this.settings = e;
    }
    read(e, t) {
        const r = I.of(e);
        if (r.isListSchema()) return i(t).map((e)=>this.read(r.getValueSchema(), e));
        if (r.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? a)(t);
        if (r.isTimestampSchema()) {
            switch(B(r, this.settings)){
                case 5:
                    return u(t);
                case 6:
                    return l(t);
                case 7:
                    return c(t);
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
        return (this.serdeContext?.utf8Encoder ?? m)((this.serdeContext?.base64Decoder ?? a)(e));
    }
}
class q extends R {
    settings;
    stringBuffer = "";
    constructor(e){
        super(), this.settings = e;
    }
    write(e, t) {
        const r = I.of(e);
        switch(typeof t){
            case "object":
                if (null === t) return void (this.stringBuffer = "null");
                if (r.isTimestampSchema()) {
                    if (!(t instanceof Date)) throw new Error(`@smithy/core/protocols - received non-Date value ${t} when schema expected Date in ${r.getName(!0)}`);
                    switch(B(r, this.settings)){
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
                        "" !== e && (e += ", "), e += r.getValueSchema().isTimestampSchema() ? t : w(t);
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
const N = "content-length";
function F(e) {
    return (t)=>async (r)=>{
            const n = r.request;
            if (v.isInstance(n)) {
                const { body: t, headers: r } = n;
                if (t && -1 === Object.keys(r).map((e)=>e.toLowerCase()).indexOf(N)) try {
                    const r = e(t);
                    null != r && (n.headers = {
                        ...n.headers,
                        [N]: String(r)
                    });
                } catch (e) {}
            }
            return t({
                ...r,
                request: n
            });
        };
}
const U = {
    step: "build",
    tags: [
        "SET_CONTENT_LENGTH",
        "CONTENT_LENGTH"
    ],
    name: "contentLengthMiddleware",
    override: !0
}, L = (e)=>encodeURIComponent(e).replace(/[!'()*]/g, $), $ = (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`;
exports.Field = class {
    name;
    kind;
    values;
    constructor({ name: e, kind: t = C.HEADER, values: r = [] }){
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
}, exports.FromStringShapeDeserializer = D, exports.HttpBindingProtocol = class extends M {
    async serializeRequest(e, t, r) {
        const n = t && "object" == typeof t ? t : {}, s = this.serializer, o = {}, i = {}, a = await r.endpoint(), c = I.of(e?.input), l = [], u = [];
        let d, p = !1;
        const m = new v({
            protocol: "",
            hostname: "",
            port: void 0,
            path: "",
            fragment: void 0,
            query: o,
            headers: i,
            body: void 0
        });
        if (a) {
            this.updateServiceEndpoint(m, a), this.setHostPrefix(m, e, n);
            const t = T(e.traits);
            if (t.http) {
                m.method = t.http[0];
                const [e, r] = t.http[1].split("?");
                "/" == m.path ? m.path = e : m.path += e;
                const n = new URLSearchParams(r ?? "");
                for (const [e, t] of n)o[e] = t;
            }
        }
        for (const [e, t] of c.structIterator()){
            const r = t.getMergedTraits() ?? {}, a = n[e];
            if (null != a || t.isIdempotencyToken()) if (r.httpPayload) {
                if (t.isStreaming()) {
                    t.isStructSchema() ? n[e] && (d = await this.serializeEventStream({
                        eventStream: n[e],
                        requestSchema: c
                    })) : d = a;
                } else s.write(t, a), d = s.flush();
            } else if (r.httpLabel) {
                s.write(t, a);
                const r = s.flush();
                m.path.includes(`{${e}+}`) ? m.path = m.path.replace(`{${e}+}`, r.split("/").map(A).join("/")) : m.path.includes(`{${e}}`) && (m.path = m.path.replace(`{${e}}`, A(r)));
            } else if (r.httpHeader) s.write(t, a), i[r.httpHeader.toLowerCase()] = String(s.flush());
            else if ("string" == typeof r.httpPrefixHeaders) for(const e in a){
                if (!b(a, e)) continue;
                const n = a[e], o = r.httpPrefixHeaders + e;
                s.write([
                    t.getValueSchema(),
                    {
                        httpHeader: o
                    }
                ], n), i[o.toLowerCase()] = s.flush();
            }
            else r.httpQuery || r.httpQueryParams ? this.serializeQuery(t, a, o) : (p = !0, l.push(e), u.push(t));
            else if (r.httpLabel && (m.path.includes(`{${e}+}`) || m.path.includes(`{${e}}`))) throw new Error(`No value provided for input HTTP label: ${e}.`);
        }
        if (p && n) {
            const [e, t] = (c.getName(!0) ?? "#Unknown").split("#"), r = c.getSchema()[6], o = [
                3,
                e,
                t,
                c.getMergedTraits(),
                l,
                u,
                void 0
            ];
            r ? o[6] = r : o.pop(), s.write(o, n), d = s.flush();
        }
        return m.headers = i, m.query = o, m.body = d, m;
    }
    serializeQuery(e, t, r) {
        const n = this.serializer, s = e.getMergedTraits();
        if (s.httpQueryParams) {
            for(const n in t)if (b(t, n) && !(n in r)) {
                const o = t[n], i = e.getValueSchema();
                Object.assign(i.getMergedTraits(), {
                    ...s,
                    httpQuery: n,
                    httpQueryParams: void 0
                }), this.serializeQuery(i, o, r);
            }
        } else if (e.isListSchema()) {
            const o = !!e.getMergedTraits().sparse, i = [];
            for (const r of t){
                n.write([
                    e.getValueSchema(),
                    s
                ], r);
                const t = n.flush();
                (o || void 0 !== t) && i.push(t);
            }
            r[s.httpQuery] = i;
        } else n.write([
            e,
            s
        ], t), r[s.httpQuery] = n.flush();
    }
    async deserializeResponse(e, t, r) {
        const n = this.deserializer, s = I.of(e.output), o = {};
        if (r.statusCode >= 300) {
            const s = await P(r.body, t);
            throw s.byteLength > 0 && Object.assign(o, await n.read(15, s)), await this.handleError(e, t, r, o, this.deserializeMetadata(r)), new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for(const e in r.headers){
            if (!b(r.headers, e)) continue;
            const t = r.headers[e];
            delete r.headers[e], r.headers[e.toLowerCase()] = t;
        }
        const i = await this.deserializeHttpMessage(s, t, r, o);
        if (i.length) {
            const e = await P(r.body, t);
            if (e.byteLength > 0) {
                const t = await n.read(s, e);
                for (const e of i)null != t[e] && (o[e] = t[e]);
            }
        } else i.discardResponseBody && await P(r.body, t);
        return o.$metadata = this.deserializeMetadata(r), o;
    }
    async deserializeHttpMessage(e, t, r, n, a) {
        let c;
        c = n instanceof Set ? a : n;
        let l = !0;
        const u = this.deserializer, d = I.of(e), p = [];
        for (const [e, n] of d.structIterator()){
            const a = n.getMemberTraits();
            if (a.httpPayload) {
                l = !1;
                if (n.isStreaming()) {
                    const t = n.isStructSchema();
                    c[e] = t ? await this.deserializeEventStream({
                        response: r,
                        responseSchema: d
                    }) : s(r.body);
                } else if (r.body) {
                    const s = await P(r.body, t);
                    s.byteLength > 0 && (c[e] = await u.read(n, s));
                }
            } else if (a.httpHeader) {
                const t = String(a.httpHeader).toLowerCase(), s = r.headers[t];
                if (null != s) if (n.isListSchema()) {
                    const r = n.getValueSchema();
                    let a;
                    r.getMergedTraits().httpHeader = t, a = r.isTimestampSchema() && 4 === r.getSchema() ? o(s, ",", 2) : i(s);
                    const l = [];
                    for (const e of a)l.push(await u.read(r, e.trim()));
                    c[e] = l;
                } else c[e] = await u.read(n, s);
            } else if (void 0 !== a.httpPrefixHeaders) {
                c[e] = {};
                for(const t in r.headers)if (b(r.headers, t) && t.startsWith(a.httpPrefixHeaders)) {
                    const s = r.headers[t], o = n.getValueSchema();
                    o.getMergedTraits().httpHeader = t, c[e][t.slice(a.httpPrefixHeaders.length)] = await u.read(o, s);
                }
            } else a.httpResponseCode ? c[e] = r.statusCode : p.push(e);
        }
        return p.discardResponseBody = l, p;
    }
}, exports.HttpInterceptingShapeDeserializer = class extends R {
    codecDeserializer;
    stringDeserializer;
    constructor(e, t){
        super(), this.codecDeserializer = e, this.stringDeserializer = new D(t);
    }
    setSerdeContext(e) {
        this.stringDeserializer.setSerdeContext(e), this.codecDeserializer.setSerdeContext(e), this.serdeContext = e;
    }
    read(e, t) {
        const r = I.of(e), n = r.getMergedTraits(), s = this.serdeContext?.utf8Encoder ?? m;
        if (n.httpHeader || n.httpResponseCode) return this.stringDeserializer.read(r, s(t));
        if (n.httpPayload) {
            if (r.isBlobSchema()) {
                const e = this.serdeContext?.utf8Decoder ?? h;
                return "string" == typeof t ? e(t) : t;
            }
            if (r.isStringSchema()) return "byteLength" in t ? s(t) : t;
        }
        return this.codecDeserializer.read(r, t);
    }
}, exports.HttpInterceptingShapeSerializer = class {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(e, t, r = new q(t)){
        this.codecSerializer = e, this.stringSerializer = r;
    }
    setSerdeContext(e) {
        this.codecSerializer.setSerdeContext(e), this.stringSerializer.setSerdeContext(e);
    }
    write(e, t) {
        const r = I.of(e), n = r.getMergedTraits();
        return n.httpHeader || n.httpLabel || n.httpQuery ? (this.stringSerializer.write(r, t), void (this.buffer = this.stringSerializer.flush())) : this.codecSerializer.write(r, t);
    }
    flush() {
        if (void 0 !== this.buffer) {
            const e = this.buffer;
            return this.buffer = void 0, e;
        }
        return this.codecSerializer.flush();
    }
}, exports.HttpProtocol = M, exports.RequestBuilder = O, exports.RpcProtocol = class extends M {
    async serializeRequest(e, t, r) {
        const n = this.serializer, s = {}, o = {}, i = await r.endpoint(), a = I.of(e?.input), c = a.getSchema();
        let l;
        const u = t && "object" == typeof t ? t : {}, d = new v({
            protocol: "",
            hostname: "",
            port: void 0,
            path: "/",
            fragment: void 0,
            query: s,
            headers: o,
            body: void 0
        });
        if (i && (this.updateServiceEndpoint(d, i), this.setHostPrefix(d, e, u)), u) {
            const e = a.getEventStreamMember();
            if (e) {
                if (u[e]) {
                    const t = {};
                    for (const [r] of a.structIterator())r !== e && null != u[r] && (t[r] = u[r]);
                    l = await this.serializeEventStream({
                        eventStream: u[e],
                        requestSchema: a,
                        initialRequest: t
                    });
                }
            } else n.write(c, u), l = n.flush();
        }
        return d.headers = Object.assign(d.headers, o), d.query = s, d.body = l, d.method = "POST", d;
    }
    async deserializeResponse(e, t, r) {
        const n = this.deserializer, s = I.of(e.output), o = {};
        if (r.statusCode >= 300) {
            const s = await P(r.body, t);
            throw s.byteLength > 0 && Object.assign(o, await n.read(15, s)), await this.handleError(e, t, r, o, this.deserializeMetadata(r)), new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for(const e in r.headers){
            if (!b(r.headers, e)) continue;
            const t = r.headers[e];
            delete r.headers[e], r.headers[e.toLowerCase()] = t;
        }
        const i = s.getEventStreamMember();
        if (i) o[i] = await this.deserializeEventStream({
            response: r,
            responseSchema: s,
            initialResponseContainer: o
        });
        else {
            const e = await P(r.body, t);
            e.byteLength > 0 && Object.assign(o, await n.read(s, e));
        }
        return o.$metadata = this.deserializeMetadata(r), o;
    }
}, exports.SerdeContext = R, exports.ToStringShapeSerializer = q, exports.buildQueryString = function(e) {
    const t = [];
    for (let r of Object.keys(e).sort()){
        const n = e[r];
        if (r = L(r), Array.isArray(n)) for(let e = 0, s = n.length; e < s; e++)t.push(`${r}=${L(n[e])}`);
        else {
            let e = r;
            (n || "string" == typeof n) && (e += `=${L(n)}`), t.push(e);
        }
    }
    return t.join("&");
}, exports.collectBody = P, exports.contentLengthMiddleware = F, exports.contentLengthMiddlewareOptions = U, exports.determineTimestampFormat = B, exports.escapeUri = L, exports.escapeUriPath = (e)=>e.split("/").map(L).join("/"), exports.extendedEncodeURIComponent = A, exports.getContentLengthPlugin = (e)=>({
        applyToStack: (t)=>{
            t.add(F(e.bodyLengthChecker), U);
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
    return new O(e, t);
}, exports.resolveHttpHandlerRuntimeConfig = (e)=>({
        requestHandler: e.httpHandler()
    }), exports.resolvedPath = J;
