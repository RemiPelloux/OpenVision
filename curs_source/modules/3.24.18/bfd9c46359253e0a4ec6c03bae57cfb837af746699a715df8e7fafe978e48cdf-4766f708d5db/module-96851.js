const { createHmac: n, createHash: s, getRandomValues: o } = require("./module-77598.js"), { hasOwn: i, HttpResponse: a } = require("./module-11255.js");
exports.hasOwn = i;
const { ReadStream: c, lstatSync: l, fstatSync: u } = require("./module-73024.js"), { toEndpointV1: d } = require("./module-29400.js"), { Readable: p, Writable: m, PassThrough: h } = require("./module-57075.js"), f = (e)=>"function" == typeof ArrayBuffer && e instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(e), g = (e, t = 0, r = e.byteLength - t)=>{
    if (!f(e)) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
    return Buffer.from(e, t, r);
}, y = (e, t)=>{
    if ("string" != typeof e) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
    return t ? Buffer.from(e, t) : Buffer.from(e);
}, w = /^[A-Za-z0-9+/]*={0,2}$/, v = (e)=>{
    if (3 * e.length % 4 != 0) throw new TypeError("Incorrect padding on base64 string.");
    if (!w.exec(e)) throw new TypeError("Invalid base64 string.");
    const t = y(e, "base64");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}, _ = (e)=>{
    const t = y(e, "utf8");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}, b = (e)=>{
    let t;
    if (t = "string" == typeof e ? _(e) : e, "object" != typeof t || "number" != typeof t.byteOffset || "number" != typeof t.byteLength) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return g(t.buffer, t.byteOffset, t.byteLength).toString("base64");
};
const S = (e)=>{
    if ("string" == typeof e) return e;
    if ("object" != typeof e || "number" != typeof e.byteOffset || "number" != typeof e.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    return g(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
}, k = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));
const x = (e)=>{
    if (null != e) {
        if ("string" == typeof e) {
            const t = parseFloat(e);
            if (!Number.isNaN(t)) return String(t) !== String(e) && V.warn(K(`Expected number but observed string: ${e}`)), t;
        }
        if ("number" == typeof e) return e;
        throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
    }
}, E = Math.ceil(2 ** 127 * (2 - 2 ** -23)), I = (e)=>{
    const t = x(e);
    if (void 0 !== t && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > E) throw new TypeError(`Expected 32-bit float, got ${e}`);
    return t;
}, T = (e)=>{
    if (null != e) {
        if (Number.isInteger(e) && !Number.isNaN(e)) return e;
        throw new TypeError(`Expected integer, got ${typeof e}: ${e}`);
    }
}, C = T, P = (e)=>M(e, 32), A = (e)=>M(e, 16), R = (e)=>M(e, 8), M = (e, t)=>{
    const r = T(e);
    if (void 0 !== r && J(r, t) !== r) throw new TypeError(`Expected ${t}-bit integer, got ${e}`);
    return r;
}, J = (e, t)=>{
    switch(t){
        case 32:
            return Int32Array.of(e)[0];
        case 16:
            return Int16Array.of(e)[0];
        case 8:
            return Int8Array.of(e)[0];
    }
}, O = (e)=>{
    if (null == e) return;
    if ("object" == typeof e && !Array.isArray(e)) return e;
    const t = Array.isArray(e) ? "array" : typeof e;
    throw new TypeError(`Expected object, got ${t}: ${e}`);
}, B = (e)=>x("string" == typeof e ? F(e) : e), D = B, q = (e)=>I("string" == typeof e ? F(e) : e), N = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, F = (e)=>{
    const t = e.match(N);
    if (null === t || t[0].length !== e.length) throw new TypeError("Expected real number, got implicit NaN");
    return parseFloat(e);
}, U = (e)=>"string" == typeof e ? j(e) : x(e), L = U, $ = U, j = (e)=>{
    switch(e){
        case "NaN":
            return NaN;
        case "Infinity":
            return 1 / 0;
        case "-Infinity":
            return -1 / 0;
        default:
            throw new Error(`Unable to parse float value: ${e}`);
    }
}, G = (e)=>T("string" == typeof e ? F(e) : e), z = G, W = (e)=>A("string" == typeof e ? F(e) : e), H = (e)=>R("string" == typeof e ? F(e) : e), K = (e)=>String(new TypeError(e).stack || e).split("\n").slice(0, 5).filter((e)=>!e.includes("stackTraceWarning")).join("\n"), V = {
    warn: console.warn
}, Y = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
], Q = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const X = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/), Z = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}:\d{2})|[zZ])$/), ee = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), te = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), re = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), ne = (e, t, r, n)=>{
    const s = t - 1;
    return ce(e, s, r), new Date(Date.UTC(e, s, r, ue(n.hours, "hour", 0, 23), ue(n.minutes, "minute", 0, 59), ue(n.seconds, "seconds", 0, 60), de(n.fractionalMilliseconds)));
}, se = (e)=>{
    const t = (new Date).getUTCFullYear(), r = 100 * Math.floor(t / 100) + W(me(e));
    return r < t ? r + 100 : r;
}, oe = (e)=>e.getTime() - (new Date).getTime() > 15768e8 ? new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())) : e, ie = (e)=>{
    const t = Q.indexOf(e);
    if (t < 0) throw new TypeError(`Invalid month: ${e}`);
    return t + 1;
}, ae = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
], ce = (e, t, r)=>{
    let n = ae[t];
    if (1 === t && le(e) && (n = 29), r > n) throw new TypeError(`Invalid day for ${Q[t]} in ${e}: ${r}`);
}, le = (e)=>e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), ue = (e, t, r, n)=>{
    const s = H(me(e));
    if (s < r || s > n) throw new TypeError(`${t} must be between ${r} and ${n}, inclusive`);
    return s;
}, de = (e)=>null == e ? 0 : 1e3 * q("0." + e), pe = (e)=>{
    const t = e[0];
    let r = 1;
    if ("+" == t) r = 1;
    else {
        if ("-" != t) throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);
        r = -1;
    }
    return r * (60 * Number(e.substring(1, 3)) + Number(e.substring(4, 6))) * 60 * 1e3;
}, me = (e)=>{
    let t = 0;
    for(; t < e.length - 1 && "0" === e.charAt(t);)t++;
    return 0 === t ? e : e.slice(t);
}, he = function(e) {
    return Object.assign(new String(e), {
        deserializeJSON: ()=>JSON.parse(String(e)),
        toString: ()=>String(e),
        toJSON: ()=>String(e)
    });
};
he.from = (e)=>e && "object" == typeof e && (e instanceof he || "deserializeJSON" in e) ? e : "string" == typeof e || Object.getPrototypeOf(e) === String.prototype ? he(String(e)) : he(JSON.stringify(e)), he.fromObject = he.from;
const fe = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?", ge = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)", ye = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?", we = "(\\d?\\d)", ve = "(\\d{4})", _e = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/), be = new RegExp(`^${fe}, ${we} ${ge} ${ve} ${ye} GMT$`), Se = new RegExp(`^${fe}, ${we}-${ge}-(\\d\\d) ${ye} GMT$`), ke = new RegExp(`^${fe} ${ge} ( [1-9]|\\d\\d) ${ye} ${ve}$`), xe = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function Ee(e, t, r) {
    const n = Number(e);
    if (n < t || n > r) throw new Error(`Value ${n} out of range [${t}, ${r}]`);
}
const Ie = /^-?((0|[1-9]\d*)(\.\d+)?|\.\d+)([eE][+-]?\d+)?$/;
class Te {
    string;
    type;
    constructor(e, t){
        if (this.string = e, this.type = t, !Ie.test(e)) throw new Error(`@smithy/core/serde - NumericValue string must conform to the Smithy bigDecimal format. Received: "${e}"`);
    }
    toString() {
        return this.string;
    }
    static [Symbol.hasInstance](e) {
        if (!e || "object" != typeof e) return !1;
        const t = e;
        return Te.prototype.isPrototypeOf(e) || "bigDecimal" === t.type && Ie.test(t.string);
    }
}
const Ce = {}, Pe = {};
for(let e = 0; e < 256; e++){
    let t = e.toString(16).toLowerCase();
    1 === t.length && (t = `0${t}`), Ce[e] = t, Pe[t] = e;
}
function Ae(e) {
    let t = "";
    for(let r = 0; r < e.byteLength; r++)t += Ce[e[r]];
    return t;
}
const Re = (e)=>e instanceof Uint8Array ? e : "string" == typeof e ? _(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
function Me(e, t) {
    if (void 0 === t) {
        t = 0;
        for (const r of e)t += r.byteLength;
    }
    const r = new Uint8Array(t);
    let n = 0;
    for (const t of e)r.set(t, n), n += t.byteLength;
    return r;
}
const Je = (e, t)=>(r, n)=>async (s)=>{
            const { response: o } = await r(s);
            try {
                return {
                    response: o,
                    output: await t(o, e)
                };
            } catch (e) {
                if (Object.defineProperty(e, "$response", {
                    value: o,
                    enumerable: !1,
                    writable: !1,
                    configurable: !1
                }), !("$metadata" in e)) {
                    const t = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
                    try {
                        e.message += "\n  " + t;
                    } catch (e) {
                        n.logger && "NoOpLogger" !== n.logger?.constructor?.name ? n.logger?.warn?.(t) : console.warn(t);
                    }
                    void 0 !== e.$responseBodyText && e.$response && (e.$response.body = e.$responseBodyText);
                    try {
                        if (a.isInstance(o)) {
                            const { headers: t = {} } = o, r = Object.entries(t);
                            e.$metadata = {
                                httpStatusCode: o.statusCode,
                                requestId: Oe(/^x-[\w-]+-request-?id$/, r),
                                extendedRequestId: Oe(/^x-[\w-]+-id-2$/, r),
                                cfId: Oe(/^x-[\w-]+-cf-id$/, r)
                            };
                        }
                    } catch (e) {}
                }
                throw e;
            }
        }, Oe = (e, t)=>(t.find(([t])=>t.match(e)) || [
        void 0,
        void 0
    ])[1], Be = (e, t)=>(r, n)=>async (s)=>{
            const o = e, i = n.endpointV2 ? async ()=>d(n.endpointV2) : o.endpoint;
            if (!i) throw new Error("No valid endpoint provider available.");
            const a = await t(s.input, {
                ...e,
                endpoint: i
            });
            return r({
                ...s,
                request: a
            });
        }, De = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: [
        "DESERIALIZER"
    ],
    override: !0
}, qe = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: !0
};
function Ne(e, t) {
    return Buffer.isBuffer(e) ? e : "string" == typeof e ? y(e, t) : ArrayBuffer.isView(e) ? g(e.buffer, e.byteOffset, e.byteLength) : g(e);
}
let Fe = class extends p {
    expectedChecksum;
    checksumSourceLocation;
    checksum;
    source;
    base64Encoder;
    constructor({ expectedChecksum: e, checksum: t, source: r, checksumSourceLocation: n, base64Encoder: s }){
        if (super(), "function" != typeof r.pipe) throw new Error(`@smithy/util-stream: unsupported source type ${r?.constructor?.name ?? r} in ChecksumStream.`);
        this.source = r, this.base64Encoder = s ?? b, this.expectedChecksum = e, this.checksum = t, this.checksumSourceLocation = n, this.source.on("data", this.onSourceData), this.source.on("end", this.onSourceEnd), this.source.on("error", this.onSourceError), this.source.on("close", this.onSourceClose), this.source.pause();
    }
    onSourceData = (e)=>{
        if (!this.destroyed) {
            try {
                this.checksum.update(e);
            } catch (e) {
                return void this.destroy(e);
            }
            this.push(e) || this.source.pause();
        }
    };
    onSourceEnd = async ()=>{
        if (!this.destroyed) {
            try {
                const e = await this.checksum.digest(), t = this.base64Encoder(e);
                if (this.expectedChecksum !== t) return void this.destroy(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${t}" in response header "${this.checksumSourceLocation}".`));
            } catch (e) {
                return void this.destroy(e);
            }
            this.push(null);
        }
    };
    onSourceError = (e)=>{
        this.destroy(e);
    };
    onSourceClose = ()=>{
        this.destroyed || this.source.readableEnded || this.destroy(new Error("Connection lost or stream closed before all data was received."));
    };
    _read(e) {
        this.source.resume();
    }
    _destroy(e, t) {
        this.source?.removeListener("data", this.onSourceData), this.source?.removeListener("end", this.onSourceEnd), this.source?.removeListener("error", this.onSourceError), this.source?.removeListener("close", this.onSourceClose), this.source?.destroy(), t(e);
    }
};
const Ue = (e)=>"function" == typeof ReadableStream && (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream), Le = (e)=>"function" == typeof Blob && (e?.constructor?.name === Blob.name || e instanceof Blob), $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
Object.entries($e).reduce((e, [t, r])=>(e[r] = Number(t), e), {});
const je = $e.split("");
function Ge(e) {
    let t;
    t = "string" == typeof e ? ((e)=>(new TextEncoder).encode(e))(e) : e;
    const r = "object" == typeof t && "number" == typeof t.length, n = "object" == typeof t && "number" == typeof t.byteOffset && "number" == typeof t.byteLength;
    if (!r && !n) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    let s = "";
    for(let e = 0; e < t.length; e += 3){
        let r = 0, n = 0;
        for(let s = e, o = Math.min(e + 3, t.length); s < o; s++)r |= t[s] << 8 * (o - s - 1), n += 8;
        const o = Math.ceil(n / 6);
        r <<= 6 * o - n;
        for(let e = 1; e <= o; e++){
            const t = 6 * (o - e);
            s += je[(r & 63 << t) >> t];
        }
        s += "==".slice(0, 4 - o);
    }
    return s;
}
const ze = "function" == typeof ReadableStream ? ReadableStream : function() {};
class We extends ze {
}
class He {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(e){
        this.allocByteArray = e;
    }
    push(e) {
        this.byteArrays.push(e), this.byteLength += e.byteLength;
    }
    flush() {
        if (1 === this.byteArrays.length) {
            const e = this.byteArrays[0];
            return this.reset(), e;
        }
        const e = this.allocByteArray(this.byteLength);
        let t = 0;
        for(let r = 0; r < this.byteArrays.length; ++r){
            const n = this.byteArrays[r];
            e.set(n, t), t += n.byteLength;
        }
        return this.reset(), e;
    }
    reset() {
        this.byteArrays = [], this.byteLength = 0;
    }
}
function Ke(e, t, r) {
    switch(t){
        case 0:
            return e[0] += r, Ye(e[0]);
        case 1:
        case 2:
            return e[t].push(r), Ye(e[t]);
    }
}
function Ve(e, t) {
    switch(t){
        case 0:
            const r = e[0];
            return e[0] = "", r;
        case 1:
        case 2:
            return e[t].flush();
    }
    throw new Error(`@smithy/util-stream - invalid index ${t} given to flush()`);
}
function Ye(e) {
    return e?.byteLength ?? e?.length ?? 0;
}
function Qe(e, t = !0) {
    return t && "undefined" != typeof Buffer && e instanceof Buffer ? 2 : e instanceof Uint8Array ? 1 : "string" == typeof e ? 0 : -1;
}
let Xe = class extends m {
    buffers = [];
    limit = 1 / 0;
    bytesBuffered = 0;
    _write(e, t, r) {
        if (this.buffers.push(e), this.bytesBuffered += e.byteLength ?? 0, this.bytesBuffered >= this.limit) {
            const e = this.bytesBuffered - this.limit, t = this.buffers[this.buffers.length - 1];
            this.buffers[this.buffers.length - 1] = t.subarray(0, t.byteLength - e), this.emit("finish");
        }
        r();
    }
};
async function Ze(e) {
    return e.arrayBuffer().then((e)=>new Uint8Array(e));
}
async function et(e) {
    const t = [], r = e.getReader();
    let n = 0;
    for(;;){
        const { done: e, value: s } = await r.read();
        if (s && (t.push(s), n += s.length), e) break;
    }
    return Me(t, n);
}
const tt = "The stream has already been transformed.", rt = (e)=>{
    if (!nt(e) && !Ue(e)) {
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${e?.__proto__?.constructor?.name || e}`);
    }
    let t = !1;
    const r = async ()=>{
        if (t) throw new Error(tt);
        return t = !0, await (async (e)=>Le(e) ? Ze(e) : et(e))(e);
    };
    return Object.assign(e, {
        transformToByteArray: r,
        transformToString: async (e)=>{
            const t = await r();
            if ("base64" === e) return Ge(t);
            if ("hex" === e) return Ae(t);
            if (void 0 === e || "utf8" === e || "utf-8" === e) return ((e)=>{
                if ("string" == typeof e) return e;
                if ("object" != typeof e || "number" != typeof e.byteOffset || "number" != typeof e.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
                return new TextDecoder("utf-8").decode(e);
            })(t);
            if ("function" == typeof TextDecoder) return new TextDecoder(e).decode(t);
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
        },
        transformToWebStream: ()=>{
            if (t) throw new Error(tt);
            if (t = !0, nt(e)) return ((e)=>{
                if ("function" != typeof e.stream) throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
                return e.stream();
            })(e);
            if (Ue(e)) return e;
            throw new Error(`Cannot transform payload to web stream, got ${e}`);
        }
    });
}, nt = (e)=>"function" == typeof Blob && e instanceof Blob, st = (e)=>Le(e) ? Ze(e) : Ue(e) ? et(e) : new Promise((t, r)=>{
        const n = new ot, s = e;
        s.pipe(n), s.on("error", (e)=>{
            n.end(), r(e);
        }), n.on("error", r), n.on("finish", function() {
            const e = Me(this.bufferedBytes);
            t(e);
        });
    });
class ot extends m {
    bufferedBytes = [];
    _write(e, t, r) {
        this.bufferedBytes.push(e), r();
    }
}
const it = "The stream has already been transformed.";
class at extends (function(e, t, r, n) {
    return class s extends Uint8Array {
        static fromString(e, r = "utf-8") {
            if ("string" == typeof e) return "base64" === r ? s.mutate(n(e)) : s.mutate(t(e));
            throw new Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`);
        }
        static mutate(e) {
            return Object.setPrototypeOf(e, s.prototype), e;
        }
        transformToString(t = "utf-8") {
            return "base64" === t ? r(this) : e(this);
        }
    };
})(S, _, b, v) {
}
const ct = function(e) {
    return "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? ()=>crypto.randomUUID() : ()=>{
        const t = new Uint8Array(16);
        return e(t), t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, k[t[0]] + k[t[1]] + k[t[2]] + k[t[3]] + "-" + k[t[4]] + k[t[5]] + "-" + k[t[6]] + k[t[7]] + "-" + k[t[8]] + k[t[9]] + "-" + k[t[10]] + k[t[11]] + k[t[12]] + k[t[13]] + k[t[14]] + k[t[15]];
    };
}(o), lt = ct;
exports.ChecksumStream = Fe, exports.Hash = class {
    algorithmIdentifier;
    secret;
    hash;
    constructor(e, t){
        this.algorithmIdentifier = e, this.secret = t, this.reset();
    }
    update(e, t) {
        this.hash.update(Re(Ne(e, t)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret ? n(this.algorithmIdentifier, Ne(this.secret)) : s(this.algorithmIdentifier);
    }
}, exports.LazyJsonString = he, exports.NumericValue = Te, exports.Uint8ArrayBlobAdapter = at, exports._parseEpochTimestamp = (e)=>{
    if (null == e) return;
    let t = NaN;
    if ("number" == typeof e) t = e;
    else if ("string" == typeof e) {
        if (!/^-?\d*\.?\d+$/.test(e)) throw new TypeError("parseEpochTimestamp - numeric string invalid.");
        t = Number.parseFloat(e);
    } else "object" == typeof e && 1 === e.tag && (t = e.value);
    if (isNaN(t) || Math.abs(t) === 1 / 0) throw new TypeError("Epoch timestamps must be valid finite numbers.");
    return new Date(Math.round(1e3 * t));
}, exports._parseRfc3339DateTimeWithOffset = (e)=>{
    if (null == e) return;
    if ("string" != typeof e) throw new TypeError("RFC3339 timestamps must be strings");
    const t = _e.exec(e);
    if (!t) throw new TypeError(`Invalid RFC3339 timestamp format ${e}`);
    const [, r, n, s, o, i, a, , c, l] = t;
    Ee(n, 1, 12), Ee(s, 1, 31), Ee(o, 0, 23), Ee(i, 0, 59), Ee(a, 0, 60);
    const u = new Date(Date.UTC(Number(r), Number(n) - 1, Number(s), Number(o), Number(i), Number(a), Number(c) ? Math.round(1e3 * parseFloat(`0.${c}`)) : 0));
    if (u.setUTCFullYear(Number(r)), "Z" != l.toUpperCase()) {
        const [, e, t, r] = /([+-])(\d\d):(\d\d)/.exec(l) || [
            void 0,
            "+",
            0,
            0
        ], n = "-" === e ? 1 : -1;
        u.setTime(u.getTime() + n * (60 * Number(t) * 60 * 1e3 + 60 * Number(r) * 1e3));
    }
    return u;
}, exports._parseRfc7231DateTime = (e)=>{
    if (null == e) return;
    if ("string" != typeof e) throw new TypeError("RFC7231 timestamps must be strings.");
    let t, r, n, s, o, i, a, c;
    if ((c = be.exec(e)) ? [, t, r, n, s, o, i, a] = c : (c = Se.exec(e)) ? ([, t, r, n, s, o, i, a] = c, n = (Number(n) + 1900).toString()) : (c = ke.exec(e)) && ([, r, t, s, o, i, a, n] = c), n && i) {
        const e = Date.UTC(Number(n), xe.indexOf(r), Number(t), Number(s), Number(o), Number(i), a ? Math.round(1e3 * parseFloat(`0.${a}`)) : 0);
        Ee(t, 1, 31), Ee(s, 0, 23), Ee(o, 0, 59), Ee(i, 0, 60);
        const c = new Date(e);
        return c.setUTCFullYear(Number(n)), c;
    }
    throw new TypeError(`Invalid RFC7231 date-time value ${e}.`);
}, exports.calculateBodyLength = (e)=>{
    if (!e) return 0;
    if ("string" == typeof e) return Buffer.byteLength(e);
    if ("number" == typeof e.byteLength) return e.byteLength;
    if ("number" == typeof e.size) return e.size;
    if ("number" == typeof e.start && "number" == typeof e.end) return e.end + 1 - e.start;
    if (e instanceof c) {
        if (null != e.path) return l(e.path).size;
        if ("number" == typeof e.fd) return u(e.fd).size;
    }
    throw new Error(`Body Length computation failed for ${e}`);
}, exports.concatBytes = Me, exports.copyDocumentWithTransform = (e, t, r = (e)=>e)=>e, exports.createBufferedReadable = function(e, t, r) {
    if (Ue(e)) return function(e, t, r) {
        const n = e.getReader();
        let s = !1, o = 0;
        const i = [
            "",
            new He((e)=>new Uint8Array(e))
        ];
        let a = -1;
        const c = async (e)=>{
            const { value: l, done: u } = await n.read(), d = l;
            if (u) {
                if (-1 !== a) {
                    const t = Ve(i, a);
                    Ye(t) > 0 && e.enqueue(t);
                }
                e.close();
            } else {
                const n = Qe(d, !1);
                if (a !== n && (a >= 0 && e.enqueue(Ve(i, a)), a = n), -1 === a) return void e.enqueue(d);
                const l = Ye(d);
                o += l;
                const u = Ye(i[a]);
                if (l >= t && 0 === u) e.enqueue(d);
                else {
                    const n = Ke(i, a, d);
                    !s && o > 2 * t && (s = !0, r?.warn(`@smithy/util-stream - stream chunk size ${l} is below threshold of ${t}, automatically buffering.`)), n >= t ? e.enqueue(Ve(i, a)) : await c(e);
                }
            }
        };
        return new ReadableStream({
            pull: c
        });
    }(e, t, r);
    const n = new p({
        read () {}
    });
    let s = !1, o = 0;
    const i = [
        "",
        new He((e)=>new Uint8Array(e)),
        new He((e)=>Buffer.from(new Uint8Array(e)))
    ];
    let a = -1;
    return e.on("data", (e)=>{
        const c = Qe(e, !0);
        if (a !== c && (a >= 0 && n.push(Ve(i, a)), a = c), -1 === a) return void n.push(e);
        const l = Ye(e);
        o += l;
        const u = Ye(i[a]);
        if (l >= t && 0 === u) n.push(e);
        else {
            const c = Ke(i, a, e);
            !s && o > 2 * t && (s = !0, r?.warn(`@smithy/util-stream - stream chunk size ${l} is below threshold of ${t}, automatically buffering.`)), c >= t && n.push(Ve(i, a));
        }
    }), e.on("end", ()=>{
        if (-1 !== a) {
            const e = Ve(i, a);
            Ye(e) > 0 && n.push(e);
        }
        n.push(null);
    }), n;
}, exports.createChecksumStream = function(e) {
    return "function" == typeof ReadableStream && Ue(e.source) ? (({ expectedChecksum: e, checksum: t, source: r, checksumSourceLocation: n, base64Encoder: s })=>{
        if (!Ue(r)) throw new Error(`@smithy/util-stream: unsupported source type ${r?.constructor?.name ?? r} in ChecksumStream.`);
        const o = s ?? Ge;
        if ("function" != typeof TransformStream) throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
        const i = new TransformStream({
            start () {},
            async transform (e, r) {
                t.update(e), r.enqueue(e);
            },
            async flush (r) {
                const s = await t.digest(), i = o(s);
                if (e !== i) {
                    const t = new Error(`Checksum mismatch: expected "${e}" but received "${i}" in response header "${n}".`);
                    r.error(t);
                } else r.terminate();
            }
        });
        r.pipeThrough(i);
        const a = i.readable;
        return Object.setPrototypeOf(a, We.prototype), a;
    })(e) : new Fe(e);
}, exports.dateToUtcString = function(e) {
    const t = e.getUTCFullYear(), r = e.getUTCMonth(), n = e.getUTCDay(), s = e.getUTCDate(), o = e.getUTCHours(), i = e.getUTCMinutes(), a = e.getUTCSeconds(), c = o < 10 ? `0${o}` : `${o}`, l = i < 10 ? `0${i}` : `${i}`, u = a < 10 ? `0${a}` : `${a}`;
    return `${Y[n]}, ${s < 10 ? `0${s}` : `${s}`} ${Q[r]} ${t} ${c}:${l}:${u} GMT`;
}, exports.deserializerMiddleware = Je, exports.deserializerMiddlewareOption = De, exports.expectBoolean = (e)=>{
    if (null != e) {
        if ("number" == typeof e) {
            if (0 !== e && 1 !== e || V.warn(K(`Expected boolean, got ${typeof e}: ${e}`)), 0 === e) return !1;
            if (1 === e) return !0;
        }
        if ("string" == typeof e) {
            const t = e.toLowerCase();
            if ("false" !== t && "true" !== t || V.warn(K(`Expected boolean, got ${typeof e}: ${e}`)), "false" === t) return !1;
            if ("true" === t) return !0;
        }
        if ("boolean" == typeof e) return e;
        throw new TypeError(`Expected boolean, got ${typeof e}: ${e}`);
    }
}, exports.expectByte = R, exports.expectFloat32 = I, exports.expectInt = C, exports.expectInt32 = P, exports.expectLong = T, exports.expectNonNull = (e, t)=>{
    if (null == e) {
        if (t) throw new TypeError(`Expected a non-null value for ${t}`);
        throw new TypeError("Expected a non-null value");
    }
    return e;
}, exports.expectNumber = x, exports.expectObject = O, exports.expectShort = A, exports.expectString = (e)=>{
    if (null != e) {
        if ("string" == typeof e) return e;
        if ([
            "boolean",
            "number",
            "bigint"
        ].includes(typeof e)) return V.warn(K(`Expected string, got ${typeof e}: ${e}`)), String(e);
        throw new TypeError(`Expected string, got ${typeof e}: ${e}`);
    }
}, exports.expectUnion = (e)=>{
    if (null == e) return;
    const t = O(e), r = [];
    for(const e in t)i(t, e) && null != t[e] && r.push(e);
    if (0 === r.length) throw new TypeError("Unions must have exactly one non-null member. None were found.");
    if (r.length > 1) throw new TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`);
    return t;
}, exports.fromArrayBuffer = g, exports.fromBase64 = v, exports.fromHex = function(e) {
    if (e.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
    const t = new Uint8Array(e.length / 2);
    for(let r = 0; r < e.length; r += 2){
        const n = e.slice(r, r + 2).toLowerCase();
        if (!(n in Pe)) throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
        t[r / 2] = Pe[n];
    }
    return t;
}, exports.fromString = y, exports.fromUtf8 = _, exports.generateIdempotencyToken = lt, exports.getAwsChunkedEncodingStream = function(e, t) {
    const r = e, n = e;
    if (Ue(n)) return ((e, t)=>{
        const { base64Encoder: r, bodyLengthChecker: n, checksumAlgorithmFn: s, checksumLocationName: o, streamHasher: i } = t, a = void 0 !== r && void 0 !== n && void 0 !== s && void 0 !== o && void 0 !== i, c = a ? i(s, e) : void 0, l = e.getReader();
        return new ReadableStream({
            async pull (e) {
                const { value: t, done: s } = await l.read();
                if (s) {
                    if (e.enqueue("0\r\n"), a) {
                        const t = r(await c);
                        e.enqueue(`${o}:${t}\r\n`), e.enqueue("\r\n");
                    }
                    e.close();
                } else e.enqueue(`${(n(t) || 0).toString(16)}\r\n${t}\r\n`);
            }
        });
    })(n, t);
    const { base64Encoder: s, bodyLengthChecker: o, checksumAlgorithmFn: i, checksumLocationName: a, streamHasher: c } = t, l = void 0 !== s && void 0 !== i && void 0 !== a && void 0 !== c, u = l ? c(i, r) : void 0, d = new p({
        read: ()=>{}
    });
    return r.on("data", (e)=>{
        const t = o(e) || 0;
        0 !== t && (d.push(`${t.toString(16)}\r\n`), d.push(e), d.push("\r\n"));
    }), r.on("end", async ()=>{
        if (d.push("0\r\n"), l) {
            const e = s(await u);
            d.push(`${a}:${e}\r\n`), d.push("\r\n");
        }
        d.push(null);
    }), d;
}, exports.getSerdePlugin = function(e, t, r) {
    return {
        applyToStack: (n)=>{
            n.add(Je(e, r), De), n.add(Be(e, t), qe);
        }
    };
}, exports.handleFloat = L, exports.headStream = (e, t)=>Ue(e) ? async function(e, t) {
        let r = 0;
        const n = [], s = e.getReader();
        let o = !1;
        for(; !o;){
            const { done: e, value: i } = await s.read();
            if (i && (n.push(i), r += i?.byteLength ?? 0), r >= t) break;
            o = e;
        }
        s.releaseLock();
        const i = new Uint8Array(Math.min(t, r));
        let a = 0;
        for (const e of n){
            if (e.byteLength > i.byteLength - a) {
                i.set(e.subarray(0, i.byteLength - a), a);
                break;
            }
            i.set(e, a), a += e.length;
        }
        return i;
    }(e, t) : new Promise((r, n)=>{
        const s = new Xe;
        s.limit = t, e.pipe(s), e.on("error", (e)=>{
            s.end(), n(e);
        }), s.on("error", n), s.on("finish", function() {
            const e = Me(this.buffers);
            r(e);
        });
    }), exports.isArrayBuffer = f, exports.isBlob = Le, exports.isReadableStream = Ue, exports.limitedParseDouble = U, exports.limitedParseFloat = $, exports.limitedParseFloat32 = (e)=>"string" == typeof e ? j(e) : I(e), exports.logger = V, exports.nv = function(e) {
    return new Te(String(e), "bigDecimal");
}, exports.parseBoolean = (e)=>{
    switch(e){
        case "true":
            return !0;
        case "false":
            return !1;
        default:
            throw new Error(`Unable to parse boolean value "${e}"`);
    }
}, exports.parseEpochTimestamp = (e)=>{
    if (null == e) return;
    let t;
    if ("number" == typeof e) t = e;
    else if ("string" == typeof e) t = B(e);
    else {
        if ("object" != typeof e || 1 !== e.tag) throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
        t = e.value;
    }
    if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0) throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    return new Date(Math.round(1e3 * t));
}, exports.parseRfc3339DateTime = (e)=>{
    if (null == e) return;
    if ("string" != typeof e) throw new TypeError("RFC-3339 date-times must be expressed as strings");
    const t = X.exec(e);
    if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
    const [r, n, s, o, i, a, c, l] = t, u = W(me(n)), d = ue(s, "month", 1, 12), p = ue(o, "day", 1, 31);
    return ne(u, d, p, {
        hours: i,
        minutes: a,
        seconds: c,
        fractionalMilliseconds: l
    });
}, exports.parseRfc3339DateTimeWithOffset = (e)=>{
    if (null == e) return;
    if ("string" != typeof e) throw new TypeError("RFC-3339 date-times must be expressed as strings");
    const t = Z.exec(e);
    if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
    const [r, n, s, o, i, a, c, l, u] = t, d = W(me(n)), p = ue(s, "month", 1, 12), m = ue(o, "day", 1, 31), h = ne(d, p, m, {
        hours: i,
        minutes: a,
        seconds: c,
        fractionalMilliseconds: l
    });
    return "Z" != u.toUpperCase() && h.setTime(h.getTime() - pe(u)), h;
}, exports.parseRfc7231DateTime = (e)=>{
    if (null == e) return;
    if ("string" != typeof e) throw new TypeError("RFC-7231 date-times must be expressed as strings");
    let t = ee.exec(e);
    if (t) {
        const [e, r, n, s, o, i, a, c] = t;
        return ne(W(me(s)), ie(n), ue(r, "day", 1, 31), {
            hours: o,
            minutes: i,
            seconds: a,
            fractionalMilliseconds: c
        });
    }
    if (t = te.exec(e), t) {
        const [e, r, n, s, o, i, a, c] = t;
        return oe(ne(se(s), ie(n), ue(r, "day", 1, 31), {
            hours: o,
            minutes: i,
            seconds: a,
            fractionalMilliseconds: c
        }));
    }
    if (t = re.exec(e), t) {
        const [e, r, n, s, o, i, a, c] = t;
        return ne(W(me(c)), ie(r), ue(n.trimLeft(), "day", 1, 31), {
            hours: s,
            minutes: o,
            seconds: i,
            fractionalMilliseconds: a
        });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
}, exports.quoteHeader = function(e) {
    return (e.includes(",") || e.includes('"')) && (e = `"${e.replace(/"/g, '\\"')}"`), e;
}, exports.sdkStreamMixin = (e)=>{
    if (!(e instanceof p)) try {
        return rt(e);
    } catch (t) {
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${e?.__proto__?.constructor?.name || e}`);
    }
    let t = !1;
    const r = async ()=>{
        if (t) throw new Error(it);
        return t = !0, await st(e);
    };
    return Object.assign(e, {
        transformToByteArray: r,
        transformToString: async (e)=>{
            const t = await r();
            if (void 0 === e || Buffer.isEncoding(e)) return g(t.buffer, t.byteOffset, t.byteLength).toString(e);
            return new TextDecoder(e).decode(t);
        },
        transformToWebStream: ()=>{
            if (t) throw new Error(it);
            if (null !== e.readableFlowing) throw new Error("The stream has been consumed by other callbacks.");
            if ("function" != typeof p.toWeb) throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
            return t = !0, p.toWeb(e);
        }
    });
}, exports.serializerMiddleware = Be, exports.serializerMiddlewareOption = qe, exports.splitEvery = function(e, t, r) {
    if (r <= 0 || !Number.isInteger(r)) throw new Error("Invalid number of delimiters (" + r + ") for splitEvery.");
    const n = e.split(t);
    if (1 === r) return n;
    const s = [];
    let o = "";
    for(let e = 0; e < n.length; e++)"" === o ? o = n[e] : o += t + n[e], (e + 1) % r === 0 && (s.push(o), o = "");
    return "" !== o && s.push(o), s;
}, exports.splitHeader = (e)=>{
    const t = e.length, r = [];
    let n, s = !1, o = 0;
    for(let i = 0; i < t; ++i){
        const t = e[i];
        switch(t){
            case '"':
                "\\" !== n && (s = !s);
                break;
            case ",":
                s || (r.push(e.slice(o, i)), o = i + 1);
        }
        n = t;
    }
    return r.push(e.slice(o)), r.map((e)=>{
        const t = (e = e.trim()).length;
        return t < 2 ? e : ('"' === e[0] && '"' === e[t - 1] && (e = e.slice(1, t - 1)), e.replace(/\\"/g, '"'));
    });
}, exports.splitStream = async function(e) {
    if (Ue(e) || Le(e)) return async function(e) {
        return "function" == typeof e.stream && (e = e.stream()), e.tee();
    }(e);
    const t = new h, r = new h;
    return e.pipe(t), e.pipe(r), [
        t,
        r
    ];
}, exports.streamCollector = st, exports.strictParseByte = H, exports.strictParseDouble = B, exports.strictParseFloat = D, exports.strictParseFloat32 = q, exports.strictParseInt = z, exports.strictParseInt32 = (e)=>P("string" == typeof e ? F(e) : e), exports.strictParseLong = G, exports.strictParseShort = W, exports.toBase64 = b, exports.toHex = Ae, exports.toUint8Array = Re, exports.toUtf8 = S, exports.v4 = ct;
