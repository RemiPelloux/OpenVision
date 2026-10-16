const { SmithyRpcV2CborProtocol: n, loadSmithyRpcV2CborErrorCode: s } = require("./module-2682.js"), { TypeRegistry: i, NormalizedSchema: o, deref: a } = require(93353), { decorateServiceException: c, getValueFromTextNode: l } = require(42997), { collectBody: u, determineTimestampFormat: d, RpcProtocol: h, HttpBindingProtocol: f, HttpInterceptingShapeSerializer: p, HttpInterceptingShapeDeserializer: g, FromStringShapeDeserializer: m, extendedEncodeURIComponent: y } = require(73931), { NumericValue: w, toUtf8: S, fromBase64: b, LazyJsonString: E, parseEpochTimestamp: v, parseRfc7231DateTime: x, parseRfc3339DateTimeWithOffset: T, generateIdempotencyToken: A, toBase64: N, dateToUtcString: C, expectUnion: _ } = require(96851), { parseXML: R, XmlNode: I, XmlText: D } = require("./module-43409.js");
class k {
    queryCompat;
    errorRegistry;
    constructor(e = !1){
        this.queryCompat = e;
    }
    resolveRestContentType(e, t) {
        const r = t.getMemberSchemas(), n = Object.values(r).find((e)=>!!e.getMergedTraits().httpPayload);
        if (n) {
            const t = n.getMergedTraits().mediaType;
            return t || (n.isStringSchema() ? "text/plain" : n.isBlobSchema() ? "application/octet-stream" : e);
        }
        if (!t.isUnitSchema()) {
            if (Object.values(r).find((e)=>{
                const { httpQuery: t, httpQueryParams: r, httpHeader: n, httpLabel: s, httpPrefixHeaders: i } = e.getMergedTraits();
                return !t && !r && !n && !s && void 0 === i;
            })) return e;
        }
    }
    async getErrorSchemaOrThrowBaseException(e, t, r, n, s, i) {
        let o = e;
        e.includes("#") && ([, o] = e.split("#"));
        const a = {
            $metadata: s,
            $fault: r.statusCode < 500 ? "client" : "server"
        };
        if (!this.errorRegistry) throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
        try {
            return {
                errorSchema: i?.(this.errorRegistry, o) ?? this.errorRegistry.getSchema(e),
                errorMetadata: a
            };
        } catch (e) {
            n.message = n.message ?? n.Message ?? "UnknownError";
            const t = this.errorRegistry, r = t.getBaseException();
            if (r) {
                const e = t.getErrorCtor(r) ?? Error;
                throw this.decorateServiceException(Object.assign(new e({
                    name: o
                }), a), n);
            }
            const s = n, i = s?.message ?? s?.Message ?? s?.Error?.Message ?? s?.Error?.message;
            throw this.decorateServiceException(Object.assign(new Error(i), {
                name: o
            }, a), n);
        }
    }
    compose(e, t, r) {
        let n = r;
        t.includes("#") && ([n] = t.split("#"));
        const s = i.for(n), o = i.for("smithy.ts.sdk.synthetic." + r);
        e.copyFrom(s), e.copyFrom(o), this.errorRegistry = e;
    }
    decorateServiceException(e, t = {}) {
        if (this.queryCompat) {
            const r = e.Message ?? t.Message, n = c(e, t);
            r && (n.message = r);
            const s = n.Error ?? {};
            s.Type = n.Error?.Type, s.Code = n.Error?.Code, s.Message = n.Error?.message ?? n.Error?.Message ?? r, n.Error = s;
            const i = n.$metadata.requestId;
            return i && (n.RequestId = i), n;
        }
        return c(e, t);
    }
    setQueryCompatError(e, t) {
        const r = t.headers?.["x-amzn-query-error"];
        if (void 0 !== e && null != r) {
            const [t, n] = r.split(";"), s = Object.keys(e), i = {
                Code: t,
                Type: n
            };
            e.Code = t, e.Type = n;
            for(let t = 0; t < s.length; t++){
                const r = s[t];
                i["message" === r ? "Message" : r] = e[r];
            }
            delete i.__type, e.Error = i;
        }
    }
    queryCompatOutput(e, t) {
        e.Error && (t.Error = e.Error), e.Type && (t.Type = e.Type), e.Code && (t.Code = e.Code);
    }
    findQueryCompatibleError(e, t) {
        try {
            return e.getSchema(t);
        } catch (r) {
            return e.find((e)=>o.of(e).getMergedTraits().awsQueryError?.[0] === t);
        }
    }
}
class O {
    serdeContext;
    setSerdeContext(e) {
        this.serdeContext = e;
    }
}
class M {
    from;
    to;
    keys;
    constructor(e, t){
        this.from = e, this.to = t;
        const r = Object.keys(this.from), n = new Set(r);
        n.delete("__type"), this.keys = n;
    }
    mark(e) {
        this.keys.delete(e);
    }
    hasUnknown() {
        return 1 === this.keys.size && 0 === Object.keys(this.to).length;
    }
    writeUnknown() {
        if (this.hasUnknown()) {
            const e = this.keys.values().next().value, t = this.from[e];
            this.to.$unknown = [
                e,
                t
            ];
        }
    }
}
let P;
function $() {
    if (void 0 === P) try {
        if ("function" != typeof Buffer) P = !1;
        else {
            const e = JSON.parse(Buffer.from([
                123,
                125
            ]));
            P = null !== e && "object" == typeof e;
        }
    } catch  {
        P = !1;
    }
    return P;
}
function j(e, t, r) {
    if (r?.source) {
        const e = r.source;
        if ("number" == typeof t) {
            return t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER ? function(e, t) {
                if (e === String(t)) return !0;
                if (Object.is(t, -0)) return !0;
                if (/[eE]/.test(e)) return L(e) === L(String(t));
                const r = e.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, ""), n = String(t);
                if (r === n) return !0;
                if (/[eE]/.test(n)) return r === L(n);
                return !1;
            }(e, t) ? t : new w(e, "bigDecimal") : function(e) {
                const t = e.indexOf(".");
                if (-1 === t) return !1;
                const r = e.search(/[eE]/);
                if (-1 === r) return !0;
                const n = r - t - 1;
                return parseInt(e.slice(r + 1), 10) < n;
            }(e) ? new w(e, "bigDecimal") : /[eE]/.test(e) ? function(e) {
                const t = e.search(/[eE]/), r = parseInt(e.slice(t + 1), 10), n = e.startsWith("-"), s = e.slice(n ? 1 : 0, t), i = s.indexOf(".");
                let o, a;
                if (-1 === i) o = s, a = r;
                else {
                    o = s.slice(0, i) + s.slice(i + 1);
                    a = r - (s.length - i - 1);
                }
                o = o.replace(/0+$/, "") || "0";
                const c = BigInt(o) * 10n ** BigInt(a + (s.replace(".", "").length - o.length));
                return n ? -c : c;
            }(e) : BigInt(e);
        }
    }
    return t;
}
function L(e) {
    const t = e.startsWith("-"), r = t ? e.slice(1) : e, n = r.search(/[eE]/);
    let s;
    if (-1 === n) s = r;
    else {
        const e = parseInt(r.slice(n + 1), 10), t = r.slice(0, n), i = t.indexOf(".");
        let o, a;
        -1 === i ? (o = t, a = t.length) : (o = t.slice(0, i) + t.slice(i + 1), a = i), o = o.replace(/0+$/, "") || "0";
        const c = a + e;
        s = "0" === o ? "0" : c <= 0 ? "0." + "0".repeat(-c) + o : c >= o.length ? o + "0".repeat(c - o.length) : o.slice(0, c) + "." + o.slice(c);
    }
    return s.includes(".") && (s = s.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "")), (t ? "-" : "") + s;
}
const U = Symbol.for("@aws-sdk/reviver");
function B(e) {
    const t = o.of(e), r = t.getSchema();
    if (Array.isArray(r) && t.isStructSchema()) {
        if (U in r) return r[U];
        const e = F(t, new Set);
        return r[U] = e, e;
    }
    return F(t, new Set);
}
function F(e, t) {
    const r = e.getSchema();
    if (t.has(r)) return !1;
    if (t.add(r), e.isBigIntegerSchema() || e.isBigDecimalSchema()) return !0;
    if (e.isStructSchema()) {
        for (const [, r] of e.structIterator())if (F(r, t)) return !0;
    } else if (e.isListSchema() || e.isMapSchema()) {
        if (F(e.getValueSchema(), t)) return !0;
    } else if (e.isDocumentSchema()) return !0;
    return !1;
}
const z = (e, t)=>u(e, t).then((e)=>(t?.utf8Encoder ?? S)(e));
async function V(e, t, r) {
    let n;
    if ($() && "function" == typeof e?.[Symbol.asyncIterator]) {
        const r = await u(e, t);
        "function" == typeof Buffer && (n = Buffer.isBuffer(r) ? r : Buffer.from(r.buffer, r.byteOffset, r.byteLength));
    }
    if (n || (n = await z(e, t)), 0 === n.length) return {};
    const s = r && B(r) ? j : void 0;
    try {
        return JSON.parse(n, s);
    } catch (e) {
        throw "SyntaxError" === e?.name && Object.defineProperty(e, "$responseBodyText", {
            value: "string" == typeof n ? n : n.toString("utf8")
        }), e;
    }
}
const H = (e, t)=>Object.keys(e).find((e)=>e.toLowerCase() === t.toLowerCase()), q = (e)=>{
    let t = e;
    return "number" == typeof t && (t = t.toString()), t.indexOf(",") >= 0 && (t = t.split(",")[0]), t.indexOf(":") >= 0 && (t = t.split(":")[0]), t.indexOf("#") >= 0 && (t = t.split("#")[1]), t;
}, W = (e, t)=>Q(e, t, [
        "header",
        "code",
        "type"
    ]), G = (e, t, r = !1)=>Q(e, t, r ? [
        "code",
        "header",
        "type"
    ] : [
        "type",
        "code",
        "header"
    ]), Q = ({ headers: e }, t, r)=>{
    for(; r.length > 0;){
        switch(r.shift()){
            case "header":
                const r = H(e ?? {}, "x-amzn-errortype");
                if (void 0 !== r) return q(e[r]);
                break;
            case "code":
                const n = H(t ?? {}, "code");
                if (n && void 0 !== t[n]) return q(t[n]);
                break;
            case "type":
                if (void 0 !== t?.__type) return q(t.__type);
        }
    }
};
function X(e) {
    Object.defineProperty(e, "__proto__", {
        value: void 0,
        writable: !0,
        enumerable: !0,
        configurable: !0
    });
}
class K extends O {
    settings;
    constructor(e){
        super(), this.settings = e;
    }
    async read(e, t) {
        const r = B(e) ? j : void 0;
        let n;
        if ("string" == typeof t) {
            if (0 === t.length) return {};
            n = JSON.parse(t, r);
        } else if (t instanceof Uint8Array && $()) {
            if (0 === t.byteLength) return {};
            const e = Buffer.isBuffer(t) ? t : Buffer.from(t.buffer, t.byteOffset, t.byteLength);
            n = JSON.parse(e, r);
        } else n = await V(t, this.serdeContext, e);
        return this._read(e, n);
    }
    readObject(e, t) {
        return this._read(e, t);
    }
    _read(e, t) {
        const r = null !== t && "object" == typeof t, n = o.of(e);
        if (r) {
            if (n.isStructSchema()) return this._readStruct(n, t);
            if (Array.isArray(t) && n.isListSchema()) {
                const e = n.getValueSchema();
                if (this.needsTransform(e)) for(let r = 0; r < t.length; ++r)t[r] = this._read(e, t[r]);
                return t;
            }
            if (n.isMapSchema()) {
                const e = n.getValueSchema(), r = t;
                if (this.needsTransform(e)) for(const t in r)"__proto__" === t && X(r), r[t] = this._read(e, r[t]);
                return r;
            }
        }
        if (n.isBlobSchema() && "string" == typeof t) return b(t);
        const s = n.getMergedTraits().mediaType;
        if (n.isStringSchema() && "string" == typeof t && s) {
            return "application/json" === s || s.endsWith("+json") ? E.from(t) : t;
        }
        if (n.isTimestampSchema() && null != t) {
            switch(d(n, this.settings)){
                case 5:
                    return T(t);
                case 6:
                    return x(t);
                case 7:
                    return v(t);
                default:
                    return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
            }
        }
        if (n.isBigIntegerSchema() && ("number" == typeof t || "string" == typeof t)) return BigInt(t);
        if (n.isBigDecimalSchema() && null != t) {
            if (t instanceof w) return t;
            const e = t;
            return "bigDecimal" === e.type && "string" in e ? new w(e.string, e.type) : new w(String(t), "bigDecimal");
        }
        if (n.isNumericSchema() && "string" == typeof t) {
            switch(t){
                case "Infinity":
                    return 1 / 0;
                case "-Infinity":
                    return -1 / 0;
                case "NaN":
                    return NaN;
            }
            return t;
        }
        if (n.isDocumentSchema() && r) if (Array.isArray(t)) for(let e = 0; e < t.length; ++e){
            const r = t[e];
            r instanceof w || (t[e] = this._read(n, r));
        }
        else {
            const e = t;
            for(const t in e){
                "__proto__" === t && X(e);
                const r = e[t];
                r instanceof w || (e[t] = this._read(n, r));
            }
        }
        return t;
    }
    _readStruct(e, t) {
        const r = e.isUnionSchema(), n = {};
        let s;
        const i = "string" == typeof t.__type, { jsonName: o } = this.settings;
        let a;
        o && i && (s = {}), r && (a = new M(t, n));
        for (const [c, l] of e.structIterator()){
            let e = c;
            o && (e = l.getMergedTraits().jsonName ?? e, i && (s[e] = c)), r && a.mark(e), null != t[e] && (n[c] = this._read(l, t[e]));
        }
        if (r) a.writeUnknown();
        else if (i) for(const e in t){
            const r = t[e], i = o ? s[e] ?? e : e;
            i in n || (n[i] = r);
        }
        return n;
    }
    needsTransform(e) {
        return !!(e.isBlobSchema() || e.isTimestampSchema() || e.isBigIntegerSchema() || e.isBigDecimalSchema()) || !!(e.isDocumentSchema() || e.isStructSchema() || e.isListSchema() || e.isMapSchema()) || !(!e.isStringSchema() || !e.getMergedTraits().mediaType);
    }
}
class J extends Uint8Array {
    string = null;
    static allocUnsafe(e) {
        if ("function" == typeof Buffer) {
            const t = Buffer.allocUnsafe(e);
            return new J(t.buffer, t.byteOffset, t.byteLength);
        }
        return new J(e);
    }
    toString() {
        return this.s();
    }
    valueOf() {
        return this.s();
    }
    includes(e, t) {
        return "string" == typeof e ? this.s().includes(e, t) : Uint8Array.prototype.includes.call(this, e, t);
    }
    indexOf(e, t) {
        return "string" == typeof e ? this.s().indexOf(e, t) : Uint8Array.prototype.indexOf.call(this, e, t);
    }
    lastIndexOf(e, t) {
        if ("string" == typeof e) return this.s().lastIndexOf(e, t);
        const r = Uint8Array.prototype.lastIndexOf;
        return void 0 !== t ? r.call(this, e, t) : r.call(this, e);
    }
    startsWith(e, t) {
        return this.s().startsWith(e, t);
    }
    endsWith(e, t) {
        return this.s().endsWith(e, t);
    }
    match(e) {
        return this.s().match(e);
    }
    replace(e, t) {
        return this.s().replace(e, t);
    }
    search(e) {
        return this.s().search(e);
    }
    split(e, t) {
        return this.s().split(e, t);
    }
    substring(e, t) {
        return this.s().substring(e, t);
    }
    trim() {
        return this.s().trim();
    }
    trimStart() {
        return this.s().trimStart();
    }
    trimEnd() {
        return this.s().trimEnd();
    }
    charAt(e) {
        return this.s().charAt(e);
    }
    charCodeAt(e) {
        return this.s().charCodeAt(e);
    }
    padStart(e, t) {
        return this.s().padStart(e, t);
    }
    padEnd(e, t) {
        return this.s().padEnd(e, t);
    }
    repeat(e) {
        return this.s().repeat(e);
    }
    toUpperCase() {
        return this.s().toUpperCase();
    }
    toLowerCase() {
        return this.s().toLowerCase();
    }
    s() {
        if (null == this.string) {
            const e = Date.now();
            e > Y + 6e4 && (console.warn("@aws-sdk/core/protocols - WARN - JsonCodec2: you have called a string method on a Uint8Array request body. It has been automatically converted to string. In a future version this will throw an error."), Y = e), this.string = S(this);
        }
        return this.string;
    }
}
var Y = 0;
const Z = new TextEncoder, ee = 34, te = new Uint8Array([
    116,
    114,
    117,
    101
]), re = new Uint8Array([
    102,
    97,
    108,
    115,
    101
]), ne = new Uint8Array([
    110,
    117,
    108,
    108
]), se = new Array(128).fill(null);
se[8] = "b", se[9] = "t", se[10] = "n", se[12] = "f", se[13] = "r", se[34] = '"', se[92] = "\\";
for(let e = 0; e < 32; e++)null === se[e] && (se[e] = "u00" + e.toString(16).padStart(2, "0"));
function ie(e) {
    return J.allocUnsafe(e);
}
class oe extends O {
    settings;
    json;
    i = 0;
    rootSchema;
    rawValue;
    passthrough = !1;
    constructor(e){
        super(), this.settings = e, this.json = ie(2048);
    }
    write(e, t) {
        this.i = 0, this.rawValue = t, this.rootSchema = o.of(e), this.passthrough = this.rootSchema.isBlobSchema() || this.rootSchema.isStringSchema(), this.passthrough || this.writeValue(this.rootSchema, t, void 0);
    }
    writeDiscriminatedDocument(e, t) {
        this.i = 0, this.rootSchema = o.of(e);
        const r = this.rootSchema;
        if (r.isStructSchema() && null != t && "object" == typeof t) {
            this.writeValue(r, t, void 0);
            const e = `"__type":"${r.getName(!0) ?? "Unknown"}",`, n = e.length;
            this.ensure(n), this.json.copyWithin(1 + n, 1, this.i), Z.encodeInto(e, this.json.subarray(1)), this.i += n;
        } else this.writeValue(r, t, void 0);
    }
    flush() {
        this.rootSchema = void 0;
        const e = this.i;
        this.i = 0;
        const t = this.rawValue;
        if (this.rawValue = void 0, 0 === e) return t;
        const r = this.json.subarray(0, e);
        return this.json = ie(2048), r;
    }
    ensure(e) {
        const { i: t, json: r } = this;
        if (t + e > r.length) {
            let n = 2 * r.length;
            for(; n < t + e;)n *= 2;
            const s = ie(n);
            s.set(this.json), this.json = s;
        }
    }
    writeAscii(e) {
        const t = e.length;
        this.ensure(t);
        let { i: r, json: n } = this;
        for(let s = 0; s < t; ++s)n[r] = e.charCodeAt(s), r += 1;
        this.i = r;
    }
    writeAsciiQuoted(e) {
        const t = e.length;
        this.ensure(t + 4);
        let { json: r, i: n } = this;
        r[n++] = ee;
        for(let s = 0; s < t; ++s)r[n++] = e.charCodeAt(s);
        r[n++] = ee, this.i = n;
    }
    writeJsonString(e) {
        this.ensure(3 * e.length + 2), this.json[this.i++] = ee;
        const t = e.length;
        for(let r = 0; r < t; ++r){
            const n = e.charCodeAt(r);
            if (n > 34 && n < 92) this.json[this.i++] = n;
            else if (n < 128) {
                const e = se[n];
                if (null !== e) {
                    this.ensure(e.length + 1), this.json[this.i++] = 92;
                    for(let t = 0; t < e.length; t++)this.json[this.i++] = e.charCodeAt(t);
                } else this.json[this.i++] = n;
            } else if (n >= 55296 && n <= 56319) {
                const s = r + 1 < t ? e.charCodeAt(r + 1) : 0;
                if (s >= 56320 && s <= 57343) {
                    this.ensure(4);
                    const { written: t } = Z.encodeInto(e.substring(r, r + 2), this.json.subarray(this.i));
                    this.i += t, ++r;
                } else this.ensure(6), this.writeUnicodeEscape(n);
            } else if (n >= 56320 && n <= 57343) this.ensure(6), this.writeUnicodeEscape(n);
            else {
                let { i: e, json: t } = this;
                n < 2048 ? (t[e++] = 192 | n >> 6, t[e++] = 128 | 63 & n) : (t[e++] = 224 | n >> 12, t[e++] = 128 | n >> 6 & 63, t[e++] = 128 | 63 & n), this.i = e;
            }
        }
        this.json[this.i++] = ee;
    }
    writeUnicodeEscape(e) {
        let { json: t, i: r } = this;
        t[r++] = 92, t[r++] = 117;
        const n = e.toString(16).padStart(4, "0");
        for(let e = 0; e < 4; ++e)t[r++] = n.charCodeAt(e);
        this.i = r;
    }
    static B64 = (()=>{
        const e = new Uint8Array(64);
        for(let t = 0; t < 64; ++t)e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(t);
        return e;
    })();
    writeBase64(e) {
        const t = 4 * Math.ceil(e.length / 3);
        this.ensure(t + 2);
        const r = this.json, n = oe.B64;
        let s = this.i;
        r[s++] = ee;
        const i = e.length, o = i % 3, a = i - o;
        for(let t = 0; t < a; t += 3){
            const i = e[t], o = e[t + 1], a = e[t + 2];
            r[s++] = n[i >> 2], r[s++] = n[(3 & i) << 4 | o >> 4], r[s++] = n[(15 & o) << 2 | a >> 6], r[s++] = n[63 & a];
        }
        if (2 === o) {
            const t = e[a], i = e[a + 1];
            r[s++] = n[t >> 2], r[s++] = n[(3 & t) << 4 | i >> 4], r[s++] = n[(15 & i) << 2], r[s++] = 61;
        } else if (1 === o) {
            const t = e[a];
            r[s++] = n[t >> 2], r[s++] = n[(3 & t) << 4], r[s++] = 61, r[s++] = 61;
        }
        r[s++] = ee, this.i = s;
    }
    writeValue(e, t, r) {
        if (null == t) {
            if (r?.isStructSchema()) {
                if (void 0 === t) {
                    if (o.of(e).isIdempotencyToken()) return void this.writeAsciiQuoted(A());
                }
                return;
            }
            return this.ensure(4), this.json.set(ne, this.i), void (this.i += 4);
        }
        const n = o.of(e), s = "object" == typeof t;
        if (n.isStringSchema()) {
            const e = n.getMergedTraits().mediaType;
            if (e) {
                if ("application/json" === e || e.endsWith("+json")) return void this.writeJsonString(E.from(t).toString());
            }
        }
        if (s) {
            if (n.isStructSchema()) return void this.writeStruct(n, t);
            if (Array.isArray(t) && (n.isListSchema() || n.isDocumentSchema())) return void this.writeList(n, t, n.isDocumentSchema());
            if (n.isMapSchema()) return void this.writeMap(n, t, !1);
            if (t instanceof Uint8Array && (n.isBlobSchema() || n.isDocumentSchema())) return void this.writeBase64(t);
            if (t instanceof Date && (n.isTimestampSchema() || n.isDocumentSchema())) return void this.writeTimestamp(n, t);
            if (t instanceof w) return void this.writeAscii(t.string);
            if (n.isDocumentSchema()) return void (Array.isArray(t) ? this.writeList(n, t, !0) : this.writeMap(n, t, !0));
            const e = JSON.stringify(t);
            return void this.writeAscii(e);
        }
        if ("string" != typeof t) {
            if ("number" == typeof t) {
                if (Math.abs(t) === 1 / 0 || Number.isNaN(t)) return void this.writeAsciiQuoted(String(t));
                const e = String(t);
                return void this.writeAscii(e);
            }
            if ("boolean" == typeof t) {
                this.ensure(5);
                let { i: e, json: r } = this;
                return t ? (r.set(te, e), e += 4) : (r.set(re, e), e += 5), void (this.i = e);
            }
            "bigint" != typeof t ? this.writeAscii(String(t)) : this.writeAscii(t.toString());
        } else {
            if (n.isBlobSchema()) {
                const e = (this.serdeContext?.base64Encoder ?? N)(t);
                return void this.writeAsciiQuoted(e);
            }
            this.writeJsonString(t);
        }
    }
    writeStruct(e, t) {
        this.ensure(2), this.json[this.i++] = 123;
        let r = !1;
        const n = "string" == typeof t.__type;
        let s;
        n && (s = new Set);
        for (const [n, i] of e.structIterator()){
            const o = t[n];
            if (null == o && !i.isIdempotencyToken()) continue;
            r && (this.ensure(1), this.json[this.i++] = 44), r = !0;
            const a = this.settings.jsonName ? i.getMergedTraits().jsonName ?? n : n;
            s && (s.add(n), s.add(a)), this.writeAsciiQuoted(a), this.json[this.i++] = 58, this.writeValue(i, o, e);
        }
        if (!r && e.isUnionSchema()) {
            const { $unknown: r } = t;
            if (Array.isArray(r)) {
                const [t, n] = r;
                this.writeAsciiQuoted(t), this.ensure(1), this.json[this.i++] = 58, this.writeValue(15, n, e);
            }
        } else if (n) for(const e in t){
            if (s.has(e)) continue;
            s.add(e);
            const n = t[e];
            r && (this.ensure(1), this.json[this.i++] = 44), r = !0, this.writeAsciiQuoted(e), this.ensure(1), this.json[this.i++] = 58, this.writeValue(15, n, void 0);
        }
        this.ensure(1), this.json[this.i++] = 125;
    }
    writeList(e, t, r) {
        const n = !!e.getMergedTraits().sparse, s = e.getValueSchema();
        if (!r && (s.isStringSchema() || s.isNumericSchema() || s.isBooleanSchema())) {
            let e, r = !1;
            for(let e = 0; e < t.length; ++e){
                const s = t[e];
                if (Number.isNaN(s) || s === 1 / 0 || s === -1 / 0 || null == s && !n) {
                    r = !0;
                    break;
                }
            }
            if (r) {
                const r = [];
                for(let e = 0; e < t.length; ++e){
                    const s = t[e];
                    (null != s || n) && (Number.isNaN(s) || s === 1 / 0 || s === -1 / 0 ? r.push(String(s)) : r.push(s));
                }
                e = JSON.stringify(r);
            } else e = JSON.stringify(t);
            return this.ensure(3 * e.length), void (this.i += Z.encodeInto(e, this.json.subarray(this.i)).written);
        }
        this.ensure(2), this.json[this.i++] = 91;
        let i = !1;
        for(let e = 0; e < t.length; ++e){
            const o = t[e];
            (r ? void 0 !== o : null != o || n) && (i && (this.ensure(1), this.json[this.i++] = 44), this.writeValue(s, o, void 0), i = !0);
        }
        this.ensure(1), this.json[this.i++] = 93;
    }
    writeMap(e, t, r) {
        const n = !!e.getMergedTraits().sparse, s = e.getValueSchema();
        if (!r && (s.isStringSchema() || s.isNumericSchema() || s.isBooleanSchema())) {
            let e;
            for(const r in t){
                const s = t[r];
                Number.isNaN(s) || s === 1 / 0 || s === -1 / 0 ? ((e ??= {})[r] = s, t[r] = String(s)) : null !== s || n || ((e ??= {})[r] = null, t[r] = void 0);
            }
            const r = JSON.stringify(t);
            return e && Object.assign(t, e), this.ensure(3 * r.length), void (this.i += Z.encodeInto(r, this.json.subarray(this.i)).written);
        }
        this.ensure(2), this.json[this.i++] = 123;
        let i = !0;
        for(const e in t){
            const o = t[e];
            (r ? void 0 !== o : null != o || n) && (i || (this.ensure(1), this.json[this.i++] = 44), i = !1, this.writeJsonString(e), this.ensure(1), this.json[this.i++] = 58, this.writeValue(s, o, void 0));
        }
        this.ensure(1), this.json[this.i++] = 125;
    }
    writeTimestamp(e, t) {
        switch(d(e, this.settings)){
            case 5:
                {
                    const e = t.toISOString().replace(".000Z", "Z");
                    return void this.writeAsciiQuoted(e);
                }
            case 6:
                return void this.writeAsciiQuoted(C(t));
            case 7:
                {
                    const e = String(t.getTime() / 1e3);
                    return void this.writeAscii(e);
                }
            default:
                {
                    const e = String(t.getTime() / 1e3);
                    return void this.writeAscii(e);
                }
        }
    }
}
class ae extends O {
    settings;
    constructor(e){
        super(), this.settings = e;
    }
    createSerializer() {
        const e = new oe(this.settings);
        return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
        const e = new K(this.settings);
        return e.setSerdeContext(this.serdeContext), e;
    }
}
class ce extends h {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace: e, errorTypeRegistries: t, serviceTarget: r, awsQueryCompatible: n, jsonCodec: s }){
        super({
            defaultNamespace: e,
            errorTypeRegistries: t
        }), this.serviceTarget = r, this.codec = s ?? new ae({
            timestampFormat: {
                useTrait: !0,
                default: 7
            },
            jsonName: !1
        }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!n, this.mixin = new k(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
        const n = await super.serializeRequest(e, t, r);
        return n.path.endsWith("/") || (n.path += "/"), n.headers["content-type"] = `application/x-amz-json-${this.getJsonRpcVersion()}`, n.headers["x-amz-target"] = `${this.serviceTarget}.${e.name}`, this.awsQueryCompatible && (n.headers["x-amzn-query-mode"] = "true"), "unit" !== a(e.input) && n.body || (n.body = "{}"), n;
    }
    getPayloadCodec() {
        return this.codec;
    }
    async handleError(e, t, r, n, s) {
        const { awsQueryCompatible: i } = this;
        i && this.mixin.setQueryCompatError(n, r);
        const a = G(r, n, i) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, a, this.options.defaultNamespace);
        const { errorSchema: c, errorMetadata: l } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, n, s, i ? this.mixin.findQueryCompatibleError : void 0), u = o.of(c), d = n.message ?? n.Message ?? "UnknownError", h = new (this.compositeErrorRegistry.getErrorCtor(c) ?? Error)({}), f = {}, p = this.codec.createDeserializer();
        for (const [e, t] of u.structIterator())null != n[e] && (f[e] = p.readObject(t, n[e]));
        throw i && this.mixin.queryCompatOutput(n, f), this.mixin.decorateServiceException(Object.assign(h, l, {
            $fault: u.getMergedTraits().error,
            message: d
        }, f), n);
    }
}
class le extends O {
    settings;
    constructor(e){
        super(), this.settings = e;
    }
    async read(e, t) {
        const r = B(e) ? j : void 0;
        return this._read(e, "string" == typeof t ? JSON.parse(t, r) : await V(t, this.serdeContext, e));
    }
    readObject(e, t) {
        return this._read(e, t);
    }
    _read(e, t) {
        const r = null !== t && "object" == typeof t, n = o.of(e);
        if (r) {
            if (n.isStructSchema()) {
                const e = t, r = n.isUnionSchema(), s = {};
                let i;
                const { jsonName: o } = this.settings;
                let a;
                o && (i = {}), r && (a = new M(e, s));
                for (const [t, c] of n.structIterator()){
                    let n = t;
                    o && (n = c.getMergedTraits().jsonName ?? n, i[n] = t), r && a.mark(n), null != e[n] && (s[t] = this._read(c, e[n]));
                }
                if (r) a.writeUnknown();
                else if ("string" == typeof e.__type) for(const t in e){
                    const r = e[t], n = o ? i[t] ?? t : t;
                    n in s || (s[n] = r);
                }
                return s;
            }
            if (Array.isArray(t) && n.isListSchema()) {
                const e = n.getValueSchema(), r = [];
                for (const n of t)r.push(this._read(e, n));
                return r;
            }
            if (n.isMapSchema()) {
                const e = n.getValueSchema(), r = {};
                for(const n in t)"__proto__" === n && X(r), r[n] = this._read(e, t[n]);
                return r;
            }
        }
        if (n.isBlobSchema() && "string" == typeof t) return b(t);
        const s = n.getMergedTraits().mediaType;
        if (n.isStringSchema() && "string" == typeof t && s) {
            return "application/json" === s || s.endsWith("+json") ? E.from(t) : t;
        }
        if (n.isTimestampSchema() && null != t) {
            switch(d(n, this.settings)){
                case 5:
                    return T(t);
                case 6:
                    return x(t);
                case 7:
                    return v(t);
                default:
                    return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
            }
        }
        if (n.isBigIntegerSchema() && ("number" == typeof t || "string" == typeof t)) return BigInt(t);
        if (n.isBigDecimalSchema() && null != t) {
            if (t instanceof w) return t;
            const e = t;
            return "bigDecimal" === e.type && "string" in e ? new w(e.string, e.type) : new w(String(t), "bigDecimal");
        }
        if (n.isNumericSchema() && "string" == typeof t) {
            switch(t){
                case "Infinity":
                    return 1 / 0;
                case "-Infinity":
                    return -1 / 0;
                case "NaN":
                    return NaN;
            }
            return t;
        }
        if (n.isDocumentSchema()) {
            if (r) {
                const e = Array.isArray(t) ? [] : {};
                for(const r in t){
                    "__proto__" === r && X(e);
                    const s = t[r];
                    e[r] = s instanceof w ? s : this._read(n, s);
                }
                return e;
            }
            return structuredClone(t);
        }
        return t;
    }
}
const ue = String.fromCharCode(925);
class de {
    values = new Map;
    counter = 0;
    stage = 0;
    createReplacer() {
        if (1 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
        if (2 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        return this.stage = 1, (e, t)=>{
            if (t instanceof w) {
                const e = ue + "nv" + this.counter++ + "_" + t.string;
                return this.values.set(`"${e}"`, t.string), e;
            }
            if ("bigint" == typeof t) {
                const e = t.toString(), r = ue + "b" + this.counter++ + "_" + e;
                return this.values.set(`"${r}"`, e), r;
            }
            return t;
        };
    }
    replaceInJson(e) {
        if (0 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
        if (2 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        if (this.stage = 2, 0 === this.counter) return e;
        for (const [t, r] of this.values)e = e.replace(t, r);
        return e;
    }
}
class he extends O {
    settings;
    buffer;
    useReplacer = !1;
    rootSchema;
    constructor(e){
        super(), this.settings = e;
    }
    write(e, t) {
        this.rootSchema = o.of(e), this.buffer = this._write(this.rootSchema, t);
    }
    flush() {
        const { rootSchema: e, useReplacer: t } = this;
        if (this.rootSchema = void 0, this.useReplacer = !1, e?.isStructSchema() || e?.isDocumentSchema()) {
            if (!t) return JSON.stringify(this.buffer);
            const e = new de;
            return e.replaceInJson(JSON.stringify(this.buffer, e.createReplacer(), 0));
        }
        return this.buffer;
    }
    writeDiscriminatedDocument(e, t) {
        this.write(e, t), "object" == typeof this.buffer && (this.buffer.__type = o.of(e).getName(!0));
    }
    _write(e, t, r) {
        const n = null !== t && "object" == typeof t, s = o.of(e);
        if (n) {
            if (s.isStructSchema()) {
                const e = t, r = {}, { jsonName: n } = this.settings;
                let i;
                n && (i = {});
                let o = 0;
                for (const [t, a] of s.structIterator()){
                    const c = this._write(a, e[t], s);
                    if (void 0 !== c) {
                        let e = t;
                        n && (e = a.getMergedTraits().jsonName ?? t, i[t] = e), r[e] = c, o++;
                    }
                }
                if (s.isUnionSchema() && 0 === o) {
                    const { $unknown: t } = e;
                    if (Array.isArray(t)) {
                        const [e, n] = t;
                        "__proto__" === e && X(r), r[e] = this._write(15, n);
                    }
                } else if ("string" == typeof e.__type) for(const t in e){
                    const s = e[t], o = n ? i[t] ?? t : t;
                    o in r || (r[o] = this._write(15, s));
                }
                return r;
            }
            if (Array.isArray(t) && s.isListSchema()) {
                const e = s.getValueSchema(), r = [], n = !!s.getMergedTraits().sparse;
                for (const s of t)(n || null != s) && r.push(this._write(e, s));
                return r;
            }
            if (s.isMapSchema()) {
                const e = s.getValueSchema(), r = {}, n = !!s.getMergedTraits().sparse;
                for(const s in t){
                    const i = t[s];
                    (n || null != i) && ("__proto__" === s && X(r), r[s] = this._write(e, i));
                }
                return r;
            }
            if (t instanceof Uint8Array && s.isBlobSchema()) return s === this.rootSchema ? t : (this.serdeContext?.base64Encoder ?? N)(t);
            if (t instanceof Date && (s.isTimestampSchema() || s.isDocumentSchema())) {
                switch(d(s, this.settings)){
                    case 5:
                        return t.toISOString().replace(".000Z", "Z");
                    case 6:
                        return C(t);
                    case 7:
                        return t.getTime() / 1e3;
                    default:
                        return console.warn("Missing timestamp format, using epoch seconds", t), t.getTime() / 1e3;
                }
            }
            t instanceof w && (this.useReplacer = !0);
        }
        if (null !== t || !r?.isStructSchema()) {
            if (s.isStringSchema()) {
                if (void 0 === t && s.isIdempotencyToken()) return A();
                const e = s.getMergedTraits().mediaType;
                if (null != t && e) {
                    if ("application/json" === e || e.endsWith("+json")) return E.from(t);
                }
                return t;
            }
            if ("number" == typeof t) return Math.abs(t) === 1 / 0 || isNaN(t) ? String(t) : t;
            if ("string" == typeof t && s.isBlobSchema()) return s === this.rootSchema ? t : (this.serdeContext?.base64Encoder ?? N)(t);
            if ("bigint" == typeof t && (this.useReplacer = !0), s.isDocumentSchema()) {
                if (n) {
                    if (t instanceof Uint8Array) return (this.serdeContext?.base64Encoder ?? N)(t);
                    const e = Array.isArray(t) ? [] : {};
                    for(const r in t){
                        const n = t[r];
                        "__proto__" === r && X(e), n instanceof w ? (this.useReplacer = !0, e[r] = n) : e[r] = this._write(s, n);
                    }
                    return e;
                }
                return structuredClone(t);
            }
            return t;
        }
    }
}
class fe extends O {
    settings;
    stringDeserializer;
    constructor(e){
        super(), this.settings = e, this.stringDeserializer = new m(e);
    }
    setSerdeContext(e) {
        this.serdeContext = e, this.stringDeserializer.setSerdeContext(e);
    }
    read(e, t, r) {
        const n = o.of(e), s = n.getMemberSchemas();
        if (n.isStructSchema() && n.isMemberSchema() && !!Object.values(s).find((e)=>!!e.getMemberTraits().eventPayload)) {
            const e = {}, r = Object.keys(s)[0];
            return s[r].isBlobSchema() ? e[r] = t : e[r] = this.read(s[r], t), e;
        }
        const i = (this.serdeContext?.utf8Encoder ?? S)(t), a = this.parseXml(i);
        return this.readSchema(e, r ? a[r] : a);
    }
    readSchema(e, t) {
        const r = o.of(e);
        if (r.isUnitSchema()) return;
        const n = r.getMergedTraits();
        if (r.isListSchema() && !Array.isArray(t)) return this.readSchema(r, [
            t
        ]);
        if (null == t) return t;
        if ("object" == typeof t) {
            const e = !!n.xmlFlattened;
            if (r.isListSchema()) {
                const n = r.getValueSchema(), s = [], i = n.getMergedTraits().xmlName ?? "member", o = e ? t : (t[0] ?? t)[i];
                if (null == o) return s;
                const a = Array.isArray(o) ? o : [
                    o
                ];
                for (const e of a)s.push(this.readSchema(n, e));
                return s;
            }
            const s = {};
            if (r.isMapSchema()) {
                const n = r.getKeySchema(), i = r.getValueSchema();
                let o;
                o = e ? Array.isArray(t) ? t : [
                    t
                ] : Array.isArray(t.entry) ? t.entry : [
                    t.entry
                ];
                const a = n.getMergedTraits().xmlName ?? "key", c = i.getMergedTraits().xmlName ?? "value";
                for (const e of o){
                    const t = e[a], r = e[c];
                    "__proto__" === t && X(s), s[t] = this.readSchema(i, r);
                }
                return s;
            }
            if (r.isStructSchema()) {
                const e = r.isUnionSchema();
                let n;
                e && (n = new M(t, s));
                for (const [i, o] of r.structIterator()){
                    const r = o.getMergedTraits(), a = r.httpPayload ? r.xmlName ?? o.getName() : o.getMemberTraits().xmlName ?? i;
                    e && n.mark(a), null != t[a] && (s[i] = this.readSchema(o, t[a]));
                }
                return e && n.writeUnknown(), s;
            }
            if (r.isDocumentSchema()) return t;
            throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(!0)}`);
        }
        return r.isListSchema() ? [] : r.isMapSchema() || r.isStructSchema() ? {} : this.stringDeserializer.read(r, t);
    }
    parseXml(e) {
        if (e.length) {
            let t;
            try {
                t = R(e);
            } catch (t) {
                throw t && "object" == typeof t && Object.defineProperty(t, "$responseBodyText", {
                    value: e
                }), t;
            }
            const r = "#text", n = Object.keys(t)[0], s = t[n];
            return s[r] && (s[n] = s[r], delete s[r]), l(s);
        }
        return {};
    }
}
class pe extends O {
    settings;
    buffer;
    constructor(e){
        super(), this.settings = e;
    }
    write(e, t, r = "") {
        void 0 === this.buffer && (this.buffer = "");
        const n = o.of(e);
        if (r && !r.endsWith(".") && (r += "."), n.isBlobSchema()) ("string" == typeof t || t instanceof Uint8Array) && (this.writeKey(r), this.writeValue((this.serdeContext?.base64Encoder ?? N)(t)));
        else if (n.isBooleanSchema() || n.isNumericSchema() || n.isStringSchema()) null != t ? (this.writeKey(r), this.writeValue(String(t))) : n.isIdempotencyToken() && (this.writeKey(r), this.writeValue(A()));
        else if (n.isBigIntegerSchema()) null != t && (this.writeKey(r), this.writeValue(String(t)));
        else if (n.isBigDecimalSchema()) null != t && (this.writeKey(r), this.writeValue(t instanceof w ? t.string : String(t)));
        else if (n.isTimestampSchema()) {
            if (t instanceof Date) {
                this.writeKey(r);
                switch(d(n, this.settings)){
                    case 5:
                        this.writeValue(t.toISOString().replace(".000Z", "Z"));
                        break;
                    case 6:
                        this.writeValue(C(t));
                        break;
                    case 7:
                        this.writeValue(String(t.getTime() / 1e3));
                }
            }
        } else if (n.isDocumentSchema()) Array.isArray(t) ? this.write(79, t, r) : t instanceof Date ? this.write(4, t, r) : t instanceof Uint8Array ? this.write(21, t, r) : t && "object" == typeof t ? this.write(143, t, r) : (this.writeKey(r), this.writeValue(String(t)));
        else if (n.isListSchema()) {
            if (Array.isArray(t)) if (0 === t.length) this.settings.serializeEmptyLists && (this.writeKey(r), this.writeValue(""));
            else {
                const e = n.getValueSchema(), s = this.settings.flattenLists || n.getMergedTraits().xmlFlattened;
                let i = 1;
                for (const n of t){
                    if (null == n) continue;
                    const t = e.getMergedTraits(), o = this.getKey("member", t.xmlName, t.ec2QueryName), a = s ? `${r}${i}` : `${r}${o}.${i}`;
                    this.write(e, n, a), ++i;
                }
            }
        } else if (n.isMapSchema()) {
            if (t && "object" == typeof t) {
                const e = n.getKeySchema(), s = n.getValueSchema(), i = n.getMergedTraits().xmlFlattened;
                let o = 1;
                for(const n in t){
                    const a = t[n];
                    if (null == a) continue;
                    const c = e.getMergedTraits(), l = this.getKey("key", c.xmlName, c.ec2QueryName), u = i ? `${r}${o}.${l}` : `${r}entry.${o}.${l}`, d = s.getMergedTraits(), h = this.getKey("value", d.xmlName, d.ec2QueryName), f = i ? `${r}${o}.${h}` : `${r}entry.${o}.${h}`;
                    this.write(e, n, u), this.write(s, a, f), ++o;
                }
            }
        } else if (n.isStructSchema()) {
            if (t && "object" == typeof t) {
                let e = !1;
                for (const [s, i] of n.structIterator()){
                    if (null == t[s] && !i.isIdempotencyToken()) continue;
                    const n = i.getMergedTraits(), o = `${r}${this.getKey(s, n.xmlName, n.ec2QueryName, "struct")}`;
                    this.write(i, t[s], o), e = !0;
                }
                if (!e && n.isUnionSchema()) {
                    const { $unknown: e } = t;
                    if (Array.isArray(e)) {
                        const [t, n] = e, s = `${r}${t}`;
                        this.write(15, n, s);
                    }
                }
            }
        } else if (!n.isUnitSchema()) throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${n.getName(!0)}`);
    }
    flush() {
        if (void 0 === this.buffer) throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        const e = this.buffer;
        return delete this.buffer, e;
    }
    getKey(e, t, r, n) {
        const { ec2: s, capitalizeKeys: i } = this.settings;
        if (s && r) return r;
        const o = t ?? e;
        return i && "struct" === n ? o[0].toUpperCase() + o.slice(1) : o;
    }
    writeKey(e) {
        e.endsWith(".") && (e = e.slice(0, e.length - 1)), this.buffer += `&${y(e)}=`;
    }
    writeValue(e) {
        this.buffer += y(e);
    }
}
class ge extends h {
    options;
    serializer;
    deserializer;
    mixin = new k;
    constructor(e){
        super({
            defaultNamespace: e.defaultNamespace,
            errorTypeRegistries: e.errorTypeRegistries
        }), this.options = e;
        const t = {
            timestampFormat: {
                useTrait: !0,
                default: 5
            },
            httpBindings: !1,
            xmlNamespace: e.xmlNamespace,
            serviceNamespace: e.defaultNamespace,
            serializeEmptyLists: !0
        };
        this.serializer = new pe(t), this.deserializer = new fe(t);
    }
    getShapeId() {
        return "aws.protocols#awsQuery";
    }
    setSerdeContext(e) {
        this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e);
    }
    getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(e, t, r) {
        const n = await super.serializeRequest(e, t, r);
        n.path.endsWith("/") || (n.path += "/"), n.headers["content-type"] = "application/x-www-form-urlencoded", "unit" !== a(e.input) && n.body || (n.body = "");
        const s = e.name.split("#")[1] ?? e.name;
        return n.body = `Action=${s}&Version=${this.options.version}` + n.body, n.body.endsWith("&") && (n.body = n.body.slice(-1)), n;
    }
    async deserializeResponse(e, t, r) {
        const n = this.deserializer, s = o.of(e.output), i = {};
        if (r.statusCode >= 300) {
            const s = await u(r.body, t);
            s.byteLength > 0 && Object.assign(i, await n.read(15, s)), await this.handleError(e, t, r, i, this.deserializeMetadata(r));
        }
        for(const e in r.headers){
            const t = r.headers[e];
            delete r.headers[e], r.headers[e.toLowerCase()] = t;
        }
        const a = e.name.split("#")[1] ?? e.name, c = s.isStructSchema() && this.useNestedResult() ? a + "Result" : void 0, l = await u(r.body, t);
        return l.byteLength > 0 && Object.assign(i, await n.read(s, l, c)), i.$metadata = this.deserializeMetadata(r), i;
    }
    useNestedResult() {
        return !0;
    }
    async handleError(e, t, r, n, s) {
        const i = this.loadQueryErrorCode(r, n) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, i, this.options.defaultNamespace);
        const a = this.loadQueryError(n) ?? {}, c = this.loadQueryErrorMessage(n);
        a.message = c, a.Error = {
            Type: a.Type,
            Code: a.Code,
            Message: c
        };
        const { errorSchema: l, errorMetadata: u } = await this.mixin.getErrorSchemaOrThrowBaseException(i, this.options.defaultNamespace, r, a, s, this.mixin.findQueryCompatibleError), d = o.of(l), h = new (this.compositeErrorRegistry.getErrorCtor(l) ?? Error)({}), f = {
            Type: a.Error.Type,
            Code: a.Error.Code,
            Error: a.Error
        };
        for (const [e, t] of d.structIterator()){
            const r = t.getMergedTraits().xmlName ?? e, s = a[r] ?? n[r];
            f[e] = this.deserializer.readSchema(t, s);
        }
        throw this.mixin.decorateServiceException(Object.assign(h, u, {
            $fault: d.getMergedTraits().error,
            message: c
        }, f), n);
    }
    loadQueryErrorCode(e, t) {
        const r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
        return void 0 !== r ? r : 404 == e.statusCode ? "NotFound" : void 0;
    }
    loadQueryError(e) {
        return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
    }
    loadQueryErrorMessage(e) {
        const t = this.loadQueryError(e);
        return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
    }
    getDefaultContentType() {
        return "application/x-www-form-urlencoded";
    }
}
const me = (e, t)=>z(e, t).then((e)=>{
        if (e.length) {
            let t;
            try {
                t = R(e);
            } catch (t) {
                throw t && "object" == typeof t && Object.defineProperty(t, "$responseBodyText", {
                    value: e
                }), t;
            }
            const r = "#text", n = Object.keys(t)[0], s = t[n];
            return s[r] && (s[n] = s[r], delete s[r]), l(s);
        }
        return {};
    }), ye = (e, t)=>void 0 !== t?.Error?.Code ? t.Error.Code : void 0 !== t?.Code ? t.Code : 404 == e.statusCode ? "NotFound" : void 0;
class we extends O {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(e){
        super(), this.settings = e;
    }
    write(e, t) {
        const r = o.of(e);
        if (r.isStringSchema() && "string" == typeof t) this.stringBuffer = t;
        else if (r.isBlobSchema()) this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? b)(t);
        else {
            this.buffer = this.writeStruct(r, t, void 0);
            const e = r.getMergedTraits();
            e.httpPayload && !e.xmlName && this.buffer.withName(r.getName());
        }
    }
    flush() {
        if (void 0 !== this.byteBuffer) {
            const e = this.byteBuffer;
            return delete this.byteBuffer, e;
        }
        if (void 0 !== this.stringBuffer) {
            const e = this.stringBuffer;
            return delete this.stringBuffer, e;
        }
        const e = this.buffer;
        return this.settings.xmlNamespace && (e?.attributes?.xmlns || e.addAttribute("xmlns", this.settings.xmlNamespace)), delete this.buffer, e.toString();
    }
    writeStruct(e, t, r) {
        const n = e.getMergedTraits(), s = e.isMemberSchema() && !n.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : n.xmlName ?? e.getName();
        if (!s || !e.isStructSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(!0)}.`);
        const i = I.of(s), [o, a] = this.getXmlnsAttribute(e, r);
        for (const [r, n] of e.structIterator()){
            const e = t[r];
            if (null != e || n.isIdempotencyToken()) {
                if (n.getMergedTraits().xmlAttribute) {
                    i.addAttribute(n.getMergedTraits().xmlName ?? r, this.writeSimple(n, e));
                    continue;
                }
                if (n.isListSchema()) this.writeList(n, e, i, a);
                else if (n.isMapSchema()) this.writeMap(n, e, i, a);
                else if (n.isStructSchema()) i.addChildNode(this.writeStruct(n, e, a));
                else {
                    const t = I.of(n.getMergedTraits().xmlName ?? n.getMemberName());
                    this.writeSimpleInto(n, e, t, a), i.addChildNode(t);
                }
            }
        }
        const { $unknown: c } = t;
        if (c && e.isUnionSchema() && Array.isArray(c) && 1 === Object.keys(t).length) {
            const [e, r] = c, n = I.of(e);
            if ("string" != typeof r) {
                if (!(t instanceof I || t instanceof D)) throw new Error("@aws-sdk - $unknown union member in XML requires value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.");
                i.addChildNode(t);
            }
            this.writeSimpleInto(0, r, n, a), i.addChildNode(n);
        }
        return a && i.addAttribute(o, a), i;
    }
    writeList(e, t, r, n) {
        if (!e.isMemberSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(!0)}`);
        const s = e.getMergedTraits(), i = e.getValueSchema(), o = i.getMergedTraits(), a = !!o.sparse, c = !!s.xmlFlattened, [l, u] = this.getXmlnsAttribute(e, n), d = (t, r)=>{
            if (i.isListSchema()) this.writeList(i, Array.isArray(r) ? r : [
                r
            ], t, u);
            else if (i.isMapSchema()) this.writeMap(i, r, t, u);
            else if (i.isStructSchema()) {
                const n = this.writeStruct(i, r, u);
                t.addChildNode(n.withName(c ? s.xmlName ?? e.getMemberName() : o.xmlName ?? "member"));
            } else {
                const n = I.of(c ? s.xmlName ?? e.getMemberName() : o.xmlName ?? "member");
                this.writeSimpleInto(i, r, n, u), t.addChildNode(n);
            }
        };
        if (c) for (const e of t)(a || null != e) && d(r, e);
        else {
            const n = I.of(s.xmlName ?? e.getMemberName());
            u && n.addAttribute(l, u);
            for (const e of t)(a || null != e) && d(n, e);
            r.addChildNode(n);
        }
    }
    writeMap(e, t, r, n, s = !1) {
        if (!e.isMemberSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(!0)}`);
        const i = e.getMergedTraits(), o = e.getKeySchema(), a = o.getMergedTraits().xmlName ?? "key", c = e.getValueSchema(), l = c.getMergedTraits(), u = l.xmlName ?? "value", d = !!l.sparse, h = !!i.xmlFlattened, [f, p] = this.getXmlnsAttribute(e, n), g = (e, t, r)=>{
            const n = I.of(a, t), [s, i] = this.getXmlnsAttribute(o, p);
            i && n.addAttribute(s, i), e.addChildNode(n);
            let l = I.of(u);
            c.isListSchema() ? this.writeList(c, r, l, p) : c.isMapSchema() ? this.writeMap(c, r, l, p, !0) : c.isStructSchema() ? l = this.writeStruct(c, r, p) : this.writeSimpleInto(c, r, l, p), e.addChildNode(l);
        };
        if (h) for(const n in t){
            const s = t[n];
            if (d || null != s) {
                const t = I.of(i.xmlName ?? e.getMemberName());
                g(t, n, s), r.addChildNode(t);
            }
        }
        else {
            let n;
            s || (n = I.of(i.xmlName ?? e.getMemberName()), p && n.addAttribute(f, p), r.addChildNode(n));
            for(const e in t){
                const i = t[e];
                if (d || null != i) {
                    const t = I.of("entry");
                    g(t, e, i), (s ? r : n).addChildNode(t);
                }
            }
        }
    }
    writeSimple(e, t) {
        if (null === t) throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
        const r = o.of(e);
        let n = null;
        if (t && "object" == typeof t) if (r.isBlobSchema()) n = (this.serdeContext?.base64Encoder ?? N)(t);
        else {
            if (!(r.isTimestampSchema() && t instanceof Date)) {
                if (r.isBigDecimalSchema() && t) return t instanceof w ? t.string : String(t);
                throw r.isMapSchema() || r.isListSchema() ? new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.") : new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(!0)}`);
            }
            switch(d(r, this.settings)){
                case 5:
                    n = t.toISOString().replace(".000Z", "Z");
                    break;
                case 6:
                    n = C(t);
                    break;
                case 7:
                    n = String(t.getTime() / 1e3);
                    break;
                default:
                    console.warn("Missing timestamp format, using http date", t), n = C(t);
            }
        }
        if ((r.isBooleanSchema() || r.isNumericSchema() || r.isBigIntegerSchema() || r.isBigDecimalSchema()) && (n = String(t)), r.isStringSchema() && (n = void 0 === t && r.isIdempotencyToken() ? A() : String(t)), null === n) throw new Error(`Unhandled schema-value pair ${r.getName(!0)}=${t}`);
        return n;
    }
    writeSimpleInto(e, t, r, n) {
        const s = this.writeSimple(e, t), i = o.of(e), a = new D(s), [c, l] = this.getXmlnsAttribute(i, n);
        l && r.addAttribute(c, l), r.addChildNode(a);
    }
    getXmlnsAttribute(e, t) {
        const r = e.getMergedTraits(), [n, s] = r.xmlNamespace ?? [];
        return s && s !== t ? [
            n ? `xmlns:${n}` : "xmlns",
            s
        ] : [
            void 0,
            void 0
        ];
    }
}
class Se extends O {
    settings;
    constructor(e){
        super(), this.settings = e;
    }
    createSerializer() {
        const e = new we(this.settings);
        return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
        const e = new fe(this.settings);
        return e.setSerdeContext(this.serdeContext), e;
    }
}
exports.AwsEc2QueryProtocol = class extends ge {
    options;
    constructor(e){
        super(e), this.options = e;
        Object.assign(this.serializer.settings, {
            capitalizeKeys: !0,
            flattenLists: !0,
            serializeEmptyLists: !1,
            ec2: !0
        });
    }
    getShapeId() {
        return "aws.protocols#ec2Query";
    }
    useNestedResult() {
        return !1;
    }
}, exports.AwsJson1_0Protocol = class extends ce {
    constructor({ defaultNamespace: e, errorTypeRegistries: t, serviceTarget: r, awsQueryCompatible: n, jsonCodec: s }){
        super({
            defaultNamespace: e,
            errorTypeRegistries: t,
            serviceTarget: r,
            awsQueryCompatible: n,
            jsonCodec: s
        });
    }
    getShapeId() {
        return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
        return "1.0";
    }
    getDefaultContentType() {
        return "application/x-amz-json-1.0";
    }
}, exports.AwsJson1_1Protocol = class extends ce {
    constructor({ defaultNamespace: e, errorTypeRegistries: t, serviceTarget: r, awsQueryCompatible: n, jsonCodec: s }){
        super({
            defaultNamespace: e,
            errorTypeRegistries: t,
            serviceTarget: r,
            awsQueryCompatible: n,
            jsonCodec: s
        });
    }
    getShapeId() {
        return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
        return "1.1";
    }
    getDefaultContentType() {
        return "application/x-amz-json-1.1";
    }
}, exports.AwsJsonRpcProtocol = ce, exports.AwsQueryProtocol = ge, exports.AwsRestJsonProtocol = class extends f {
    serializer;
    deserializer;
    codec;
    mixin = new k;
    constructor({ defaultNamespace: e, errorTypeRegistries: t, jsonCodec: r }){
        super({
            defaultNamespace: e,
            errorTypeRegistries: t
        });
        const n = {
            timestampFormat: {
                useTrait: !0,
                default: 7
            },
            httpBindings: !0,
            jsonName: !0
        };
        this.codec = r ?? new ae(n), this.serializer = new p(this.codec.createSerializer(), n), this.deserializer = new g(this.codec.createDeserializer(), n);
    }
    getShapeId() {
        return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
        return this.codec;
    }
    setSerdeContext(e) {
        this.codec.setSerdeContext(e), super.setSerdeContext(e);
    }
    async serializeRequest(e, t, r) {
        const n = await super.serializeRequest(e, t, r), s = o.of(e.input);
        if (!n.headers["content-type"]) {
            const e = this.mixin.resolveRestContentType(this.getDefaultContentType(), s);
            e && (n.headers["content-type"] = e);
        }
        return null == n.body && n.headers["content-type"] === this.getDefaultContentType() && (n.body = "{}"), n;
    }
    async deserializeResponse(e, t, r) {
        const n = await super.deserializeResponse(e, t, r), s = o.of(e.output);
        for (const [e, t] of s.structIterator())t.getMemberTraits().httpPayload && !(e in n) && (n[e] = null);
        return n;
    }
    async handleError(e, t, r, n, s) {
        const i = W(r, n) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, i, this.options.defaultNamespace);
        const { errorSchema: a, errorMetadata: c } = await this.mixin.getErrorSchemaOrThrowBaseException(i, this.options.defaultNamespace, r, n, s), l = o.of(a), u = n.message ?? n.Message ?? "UnknownError", d = new (this.compositeErrorRegistry.getErrorCtor(a) ?? Error)({});
        await this.deserializeHttpMessage(a, t, r, n);
        const h = {}, f = this.codec.createDeserializer();
        for (const [e, t] of l.structIterator()){
            const r = t.getMergedTraits().jsonName ?? e;
            h[e] = f.readObject(t, n[r]);
        }
        throw this.mixin.decorateServiceException(Object.assign(d, c, {
            $fault: l.getMergedTraits().error,
            message: u
        }, h), n);
    }
    getDefaultContentType() {
        return "application/json";
    }
}, exports.AwsRestXmlProtocol = class extends f {
    codec;
    serializer;
    deserializer;
    mixin = new k;
    constructor(e){
        super(e);
        const t = {
            timestampFormat: {
                useTrait: !0,
                default: 5
            },
            httpBindings: !0,
            xmlNamespace: e.xmlNamespace,
            serviceNamespace: e.defaultNamespace
        };
        this.codec = new Se(t), this.serializer = new p(this.codec.createSerializer(), t), this.deserializer = new g(this.codec.createDeserializer(), t);
    }
    getPayloadCodec() {
        return this.codec;
    }
    getShapeId() {
        return "aws.protocols#restXml";
    }
    async serializeRequest(e, t, r) {
        const n = await super.serializeRequest(e, t, r), s = o.of(e.input);
        if (!n.headers["content-type"]) {
            const e = this.mixin.resolveRestContentType(this.getDefaultContentType(), s);
            e && (n.headers["content-type"] = e);
        }
        return "string" != typeof n.body || n.headers["content-type"] !== this.getDefaultContentType() || n.body.startsWith("<?xml ") || this.hasUnstructuredPayloadBinding(s) || (n.body = '<?xml version="1.0" encoding="UTF-8"?>' + n.body), n;
    }
    async deserializeResponse(e, t, r) {
        return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, n, s) {
        const i = ye(r, n) ?? "Unknown";
        if (this.mixin.compose(this.compositeErrorRegistry, i, this.options.defaultNamespace), n.Error && "object" == typeof n.Error) for (const e of Object.keys(n.Error))n[e] = n.Error[e], "message" === e.toLowerCase() && (n.message = n.Error[e]);
        n.RequestId && !s.requestId && (s.requestId = n.RequestId);
        const { errorSchema: a, errorMetadata: c } = await this.mixin.getErrorSchemaOrThrowBaseException(i, this.options.defaultNamespace, r, n, s), l = o.of(a), u = n.Error?.message ?? n.Error?.Message ?? n.message ?? n.Message ?? "UnknownError", d = new (this.compositeErrorRegistry.getErrorCtor(a) ?? Error)({});
        await this.deserializeHttpMessage(a, t, r, n);
        const h = {}, f = this.codec.createDeserializer();
        for (const [e, t] of l.structIterator()){
            const r = t.getMergedTraits().xmlName ?? e, s = n.Error?.[r] ?? n[r];
            h[e] = f.readSchema(t, s);
        }
        throw this.mixin.decorateServiceException(Object.assign(d, c, {
            $fault: l.getMergedTraits().error,
            message: u
        }, h), n);
    }
    getDefaultContentType() {
        return "application/xml";
    }
    hasUnstructuredPayloadBinding(e) {
        for (const [, t] of e.structIterator())if (t.getMergedTraits().httpPayload) return !(t.isStructSchema() || t.isMapSchema() || t.isListSchema());
        return !1;
    }
}, exports.AwsSmithyRpcV2CborProtocol = class extends n {
    awsQueryCompatible;
    mixin;
    constructor({ defaultNamespace: e, errorTypeRegistries: t, awsQueryCompatible: r }){
        super({
            defaultNamespace: e,
            errorTypeRegistries: t
        }), this.awsQueryCompatible = !!r, this.mixin = new k(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
        const n = await super.serializeRequest(e, t, r);
        return this.awsQueryCompatible && (n.headers["x-amzn-query-mode"] = "true"), n;
    }
    async handleError(e, t, r, n, i) {
        this.awsQueryCompatible && this.mixin.setQueryCompatError(n, r);
        const a = (()=>{
            const e = r.headers["x-amzn-query-error"];
            return e && this.awsQueryCompatible ? e.split(";")[0] : s(r, n) ?? "Unknown";
        })();
        this.mixin.compose(this.compositeErrorRegistry, a, this.options.defaultNamespace);
        const { errorSchema: c, errorMetadata: l } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, n, i, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0), u = o.of(c), d = n.message ?? n.Message ?? "UnknownError", h = new (this.compositeErrorRegistry.getErrorCtor(c) ?? Error)({}), f = {};
        for (const [e, t] of u.structIterator())null != n[e] && (f[e] = this.deserializer.readValue(t, n[e]));
        throw this.awsQueryCompatible && this.mixin.queryCompatOutput(n, f), this.mixin.decorateServiceException(Object.assign(h, l, {
            $fault: u.getMergedTraits().error,
            message: d
        }, f), n);
    }
}, exports.JsonCodec = class extends O {
    settings;
    constructor(e){
        super(), this.settings = e;
    }
    createSerializer() {
        const e = new he(this.settings);
        return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
        const e = new le(this.settings);
        return e.setSerdeContext(this.serdeContext), e;
    }
}, exports.JsonCodec2 = ae, exports.JsonShapeDeserializer = le, exports.JsonShapeDeserializer2 = K, exports.JsonShapeSerializer = he, exports.JsonShapeSerializer2 = oe, exports.QueryShapeSerializer = pe, exports.XmlCodec = Se, exports.XmlShapeDeserializer = fe, exports.XmlShapeSerializer = we, exports._toBool = (e)=>{
    if (null == e) return e;
    if ("string" == typeof e) {
        const t = e.toLowerCase();
        if ("" !== e && "false" !== t && "true" !== t) {
            const t = new Error(`Received string "${e}" where a boolean was expected.`);
            t.name = "Warning", console.warn(t);
        }
        return "" !== e && "false" !== t;
    }
    return e;
}, exports._toNum = (e)=>{
    if (null == e) return e;
    if ("string" == typeof e) {
        const t = Number(e);
        if (t.toString() !== e) {
            const t = new Error(`Received string "${e}" where a number was expected.`);
            return t.name = "Warning", console.warn(t), e;
        }
        return t;
    }
    return e;
}, exports._toStr = (e)=>{
    if (null == e) return e;
    if ("number" == typeof e || "bigint" == typeof e) {
        const t = new Error(`Received number ${e} where a string was expected.`);
        return t.name = "Warning", console.warn(t), String(e);
    }
    if ("boolean" == typeof e) {
        const t = new Error(`Received boolean ${e} where a string was expected.`);
        return t.name = "Warning", console.warn(t), String(e);
    }
    return e;
}, exports.awsExpectUnion = (e)=>{
    if (null != e) return "object" == typeof e && "__type" in e && delete e.__type, _(e);
}, exports.loadJsonRpcErrorCode = G, exports.loadRestJsonErrorCode = W, exports.loadRestXmlErrorCode = ye, exports.parseJsonBody = V, exports.parseJsonErrorBody = async (e, t)=>{
    const r = await V(e, t);
    return r.message = r.message ?? r.Message, r;
}, exports.parseXmlBody = me, exports.parseXmlErrorBody = async (e, t)=>{
    const r = await me(e, t);
    return r.Error && (r.Error.message = r.Error.message ?? r.Error.Message), r;
};
