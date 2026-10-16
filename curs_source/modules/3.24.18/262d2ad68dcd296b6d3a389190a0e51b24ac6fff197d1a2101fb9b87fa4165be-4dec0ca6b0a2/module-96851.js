const { createHmac: n, createHash: o, getRandomValues: s } = require("./module-77598.js"), { hasOwn: i, HttpResponse: a } = require("./module-11255.js");
exports.hasOwn = i;
const { ReadStream: l, lstatSync: c, fstatSync: u } = require("./module-73024.js"), { toEndpointV1: d } = require("./module-29400.js"), { Readable: p, Writable: h, PassThrough: m } = require("./module-57075.js"), f = (e)=>"function" == typeof ArrayBuffer && e instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(e), g = (e, t = 0, r = e.byteLength - t)=>{
    if (!f(e)) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
    return Buffer.from(e, t, r);
}, y = (e, t)=>{
    if ("string" != typeof e) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
    return t ? Buffer.from(e, t) : Buffer.from(e);
}, v = /^[A-Za-z0-9+/]*={0,2}$/, w = (e)=>{
    if (3 * e.length % 4 != 0) throw new TypeError("Incorrect padding on base64 string.");
    if (!v.exec(e)) throw new TypeError("Invalid base64 string.");
    const t = y(e, "base64");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}, b = (e)=>{
    const t = y(e, "utf8");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}, _ = (e)=>{
    let t;
    if (t = "string" == typeof e ? b(e) : e, "object" != typeof t || "number" != typeof t.byteOffset || "number" != typeof t.byteLength) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return g(t.buffer, t.byteOffset, t.byteLength).toString("base64");
};
const S = (e)=>{
    if ("string" == typeof e) return e;
    if ("object" != typeof e || "number" != typeof e.byteOffset || "number" != typeof e.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    return g(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
}, x = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));
const k = (e)=>{
    if (null != e) {
        if ("string" == typeof e) {
            const t = parseFloat(e);
            if (!Number.isNaN(t)) return String(t) !== String(e) && V.warn(Y(`Expected number but observed string: ${e}`)), t;
        }
        if ("number" == typeof e) return e;
        throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
    }
}, E = Math.ceil(2 ** 127 * (2 - 2 ** -23)), T = (e)=>{
    const t = k(e);
    if (void 0 !== t && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > E) throw new TypeError(`Expected 32-bit float, got ${e}`);
    return t;
}, C = (e)=>{
    if (null != e) {
        if (Number.isInteger(e) && !Number.isNaN(e)) return e;
        throw new TypeError(`Expected integer, got ${typeof e}: ${e}`);
    }
}, I = C, A = (e)=>R(e, 32), P = (e)=>R(e, 16), M = (e)=>R(e, 8), R = (e, t)=>{
    const r = C(e);
    if (void 0 !== r && O(r, t) !== r) throw new TypeError(`Expected ${t}-bit integer, got ${e}`);
    return r;
}, O = (e, t)=>{
    switch(t){
        case 32:
            return Int32Array.of(e)[0];
        case 16:
            return Int16Array.of(e)[0];
        case 8:
            return Int8Array.of(e)[0];
    }
}, D = (e)=>{
    if (null == e) return;
    if ("object" == typeof e && !Array.isArray(e)) return e;
    const t = Array.isArray(e) ? "array" : typeof e;
    throw new TypeError(`Expected object, got ${t}: ${e}`);
}, N = (e)=>k("string" == typeof e ? B(e) : e), F = N, L = (e)=>T("string" == typeof e ? B(e) : e), U = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, B = (e)=>{
    const t = e.match(U);
    if (null === t || t[0].length !== e.length) throw new TypeError("Expected real number, got implicit NaN");
    return parseFloat(e);
}, $ = (e)=>"string" == typeof e ? J(e) : k(e), q = $, j = $, J = (e)=>{
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
}, z = (e)=>C("string" == typeof e ? B(e) : e), H = z, W = (e)=>P("string" == typeof e ? B(e) : e), G = (e)=>M("string" == typeof e ? B(e) : e), Y = (e)=>String(new TypeError(e).stack || e).split("\n").slice(0, 5).filter((e)=>!e.includes("stackTraceWarning")).join("\n"), V = {
    warn: console.warn
}, K = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
], Z = [
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
const X = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/), Q = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}:\d{2})|[zZ])$/), ee = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), te = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), re = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), ne = (e, t, r, n)=>{
    const o = t - 1;
    return le(e, o, r), new Date(Date.UTC(e, o, r, ue(n.hours, "hour", 0, 23), ue(n.minutes, "minute", 0, 59), ue(n.seconds, "seconds", 0, 60), de(n.fractionalMilliseconds)));
}, oe = (e)=>{
    const t = (new Date).getUTCFullYear(), r = 100 * Math.floor(t / 100) + W(he(e));
    return r < t ? r + 100 : r;
}, se = (e)=>e.getTime() - (new Date).getTime() > 15768e8 ? new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())) : e, ie = (e)=>{
    const t = Z.indexOf(e);
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
], le = (e, t, r)=>{
    let n = ae[t];
    if (1 === t && ce(e) && (n = 29), r > n) throw new TypeError(`Invalid day for ${Z[t]} in ${e}: ${r}`);
}, ce = (e)=>e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), ue = (e, t, r, n)=>{
    const o = G(he(e));
    if (o < r || o > n) throw new TypeError(`${t} must be between ${r} and ${n}, inclusive`);
    return o;
}, de = (e)=>null == e ? 0 : 1e3 * L("0." + e), pe = (e)=>{
    const t = e[0];
    let r = 1;
    if ("+" == t) r = 1;
    else {
        if ("-" != t) throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);
        r = -1;
    }
    return r * (60 * Number(e.substring(1, 3)) + Number(e.substring(4, 6))) * 60 * 1e3;
}, he = (e)=>{
    let t = 0;
    for(; t < e.length - 1 && "0" === e.charAt(t);)t++;
    return 0 === t ? e : e.slice(t);
}, me = function(e) {
    return Object.assign(new String(e), {
        deserializeJSON: ()=>JSON.parse(String(e)),
        toString: ()=>String(e),
        toJSON: ()=>String(e)
    });
};
me.from = (e)=>e && "object" == typeof e && (e instanceof me || "deserializeJSON" in e) ? e : "string" == typeof e || Object.getPrototypeOf(e) === String.prototype ? me(String(e)) : me(JSON.stringify(e)), me.fromObject = me.from;
const fe = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?", ge = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)", ye = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?", ve = "(\\d?\\d)", we = "(\\d{4})", be = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/), _e = new RegExp(`^${fe}, ${ve} ${ge} ${we} ${ye} GMT$`), Se = new RegExp(`^${fe}, ${ve}-${ge}-(\\d\\d) ${ye} GMT$`), xe = new RegExp(`^${fe} ${ge} ( [1-9]|\\d\\d) ${ye} ${we}$`), ke = [
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
const Te = /^-?((0|[1-9]\d*)(\.\d+)?|\.\d+)([eE][+-]?\d+)?$/;
class Ce {
    string;
    type;
    constructor(e, t){
        if (this.string = e, this.type = t, !Te.test(e)) throw new Error(`@smithy/core/serde - NumericValue string must conform to the Smithy bigDecimal format. Received: "${e}"`);
    }
    toString() {
        return this.string;
    }
    static [Symbol.hasInstance](e) {
        if (!e || "object" != typeof e) return !1;
        const t = e;
        return Ce.prototype.isPrototypeOf(e) || "bigDecimal" === t.type && Te.test(t.string);
    }
}
const Ie = {}, Ae = {};
for(let e = 0; e < 256; e++){
    let t = e.toString(16).toLowerCase();
    1 === t.length && (t = `0${t}`), Ie[e] = t, Ae[t] = e;
}
function Pe(e) {
    let t = "";
    for(let r = 0; r < e.byteLength; r++)t += Ie[e[r]];
    return t;
}
const Me = (e)=>e instanceof Uint8Array ? e : "string" == typeof e ? b(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
function Re(e, t) {
    if (void 0 === t) {
        t = 0;
        for (const r of e)t += r.byteLength;
    }
    const r = new Uint8Array(t);
    let n = 0;
    for (const t of e)r.set(t, n), n += t.byteLength;
    return r;
}
const Oe = (e, t)=>(r, n)=>async (o)=>{
            const { response: s } = await r(o);
            try {
                return {
                    response: s,
                    output: await t(s, e)
                };
            } catch (e) {
                if (Object.defineProperty(e, "$response", {
                    value: s,
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
                        if (a.isInstance(s)) {
                            const { headers: t = {} } = s, r = Object.entries(t);
                            e.$metadata = {
                                httpStatusCode: s.statusCode,
                                requestId: De(/^x-[\w-]+-request-?id$/, r),
                                extendedRequestId: De(/^x-[\w-]+-id-2$/, r),
                                cfId: De(/^x-[\w-]+-cf-id$/, r)
                            };
                        }
                    } catch (e) {}
                }
                throw e;
            }
        }, De = (e, t)=>(t.find(([t])=>t.match(e)) || [
        void 0,
        void 0
    ])[1], Ne = (e, t)=>(r, n)=>async (o)=>{
            const s = e, i = n.endpointV2 ? async ()=>d(n.endpointV2) : s.endpoint;
            if (!i) throw new Error("No valid endpoint provider available.");
            const a = await t(o.input, {
                ...e,
                endpoint: i
            });
            return r({
                ...o,
                request: a
            });
        }, Fe = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: [
        "DESERIALIZER"
    ],
    override: !0
}, Le = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: !0
};
function Ue(e, t) {
    return Buffer.isBuffer(e) ? e : "string" == typeof e ? y(e, t) : ArrayBuffer.isView(e) ? g(e.buffer, e.byteOffset, e.byteLength) : g(e);
}
let Be = class extends p {
    expectedChecksum;
    checksumSourceLocation;
    checksum;
    source;
    base64Encoder;
    constructor({ expectedChecksum: e, checksum: t, source: r, checksumSourceLocation: n, base64Encoder: o }){
        if (super(), "function" != typeof r.pipe) throw new Error(`@smithy/util-stream: unsupported source type ${r?.constructor?.name ?? r} in ChecksumStream.`);
        this.source = r, this.base64Encoder = o ?? _, this.expectedChecksum = e, this.checksum = t, this.checksumSourceLocation = n, this.source.on("data", this.onSourceData), this.source.on("end", this.onSourceEnd), this.source.on("error", this.onSourceError), this.source.on("close", this.onSourceClose), this.source.pause();
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
const $e = (e)=>"function" == typeof ReadableStream && (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream), qe = (e)=>"function" == typeof Blob && (e?.constructor?.name === Blob.name || e instanceof Blob), je = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
Object.entries(je).reduce((e, [t, r])=>(e[r] = Number(t), e), {});
const Je = je.split("");
function ze(e) {
    let t;
    t = "string" == typeof e ? ((e)=>(new TextEncoder).encode(e))(e) : e;
    const r = "object" == typeof t && "number" == typeof t.length, n = "object" == typeof t && "number" == typeof t.byteOffset && "number" == typeof t.byteLength;
    if (!r && !n) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    let o = "";
    for(let e = 0; e < t.length; e += 3){
        let r = 0, n = 0;
        for(let o = e, s = Math.min(e + 3, t.length); o < s; o++)r |= t[o] << 8 * (s - o - 1), n += 8;
        const s = Math.ceil(n / 6);
        r <<= 6 * s - n;
        for(let e = 1; e <= s; e++){
            const t = 6 * (s - e);
            o += Je[(r & 63 << t) >> t];
        }
        o += "==".slice(0, 4 - s);
    }
    return o;
}
const He = "function" == typeof ReadableStream ? ReadableStream : function() {};
class We extends He {
}
class Ge {
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
function Ye(e, t, r) {
    switch(t){
        case 0:
            return e[0] += r, Ke(e[0]);
        case 1:
        case 2:
            return e[t].push(r), Ke(e[t]);
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
function Ke(e) {
    return e?.byteLength ?? e?.length ?? 0;
}
function Ze(e, t = !0) {
    return t && "undefined" != typeof Buffer && e instanceof Buffer ? 2 : e instanceof Uint8Array ? 1 : "string" == typeof e ? 0 : -1;
}
let Xe = class extends h {
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
async function Qe(e) {
    return e.arrayBuffer().then((e)=>new Uint8Array(e));
}
async function et(e) {
    const t = [], r = e.getReader();
    let n = 0;
    for(;;){
        const { done: e, value: o } = await r.read();
        if (o && (t.push(o), n += o.length), e) break;
    }
    return Re(t, n);
}
const tt = "The stream has already been transformed.", rt = (e)=>{
    if (!nt(e) && !$e(e)) {
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${e?.__proto__?.constructor?.name || e}`);
    }
    let t = !1;
    const r = async ()=>{
        if (t) throw new Error(tt);
        return t = !0, await (async (e)=>qe(e) ? Qe(e) : et(e))(e);
    };
    return Object.assign(e, {
        transformToByteArray: r,
        transformToString: async (e)=>{
            const t = await r();
            if ("base64" === e) return ze(t);
            if ("hex" === e) return Pe(t);
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
            if ($e(e)) return e;
            throw new Error(`Cannot transform payload to web stream, got ${e}`);
        }
    });
}, nt = (e)=>"function" == typeof Blob && e instanceof Blob, ot = (e)=>qe(e) ? Qe(e) : $e(e) ? et(e) : new Promise((t, r)=>{
        const n = new st, o = e;
        o.pipe(n), o.on("error", (e)=>{
            n.end(), r(e);
        }), n.on("error", r), n.on("finish", function() {
            const e = Re(this.bufferedBytes);
            t(e);
        });
    });
class st extends h {
    bufferedBytes = [];
    _write(e, t, r) {
        this.bufferedBytes.push(e), r();
    }
}
const it = "The stream has already been transformed.";
class at extends (function(e, t, r, n) {
    return class o extends Uint8Array {
        static fromString(e, r = "utf-8") {
            if ("string" == typeof e) return "base64" === r ? o.mutate(n(e)) : o.mutate(t(e));
            throw new Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`);
        }
        static mutate(e) {
            return Object.setPrototypeOf(e, o.prototype), e;
        }
        transformToString(t = "utf-8") {
            return "base64" === t ? r(this) : e(this);
        }
    };
})(S, b, _, w) {
}
const lt = function(e) {
    return "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? ()=>crypto.randomUUID() : ()=>{
        const t = new Uint8Array(16);
        return e(t), t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, x[t[0]] + x[t[1]] + x[t[2]] + x[t[3]] + "-" + x[t[4]] + x[t[5]] + "-" + x[t[6]] + x[t[7]] + "-" + x[t[8]] + x[t[9]] + "-" + x[t[10]] + x[t[11]] + x[t[12]] + x[t[13]] + x[t[14]] + x[t[15]];
    };
}(s), ct = lt;
exports.ChecksumStream = Be, exports.Hash = class {
    algorithmIdentifier;
    secret;
    hash;
    constructor(e, t){
        this.algorithmIdentifier = e, this.secret = t, this.reset();
    }
    update(e, t) {
        this.hash.update(Me(Ue(e, t)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret ? n(this.algorithmIdentifier, Ue(this.secret)) : o(this.algorithmIdentifier);
    }
}, exports.LazyJsonString = me, exports.NumericValue = Ce, exports.Uint8ArrayBlobAdapter = at, exports._parseEpochTimestamp = (e)=>{
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
    const t = be.exec(e);
    if (!t) throw new TypeError(`Invalid RFC3339 timestamp format ${e}`);
    const [, r, n, o, s, i, a, , l, c] = t;
    Ee(n, 1, 12), Ee(o, 1, 31), Ee(s, 0, 23), Ee(i, 0, 59), Ee(a, 0, 60);
    const u = new Date(Date.UTC(Number(r), Number(n) - 1, Number(o), Number(s), Number(i), Number(a), Number(l) ? Math.round(1e3 * parseFloat(`0.${l}`)) : 0));
    if (u.setUTCFullYear(Number(r)), "Z" != c.toUpperCase()) {
        const [, e, t, r] = /([+-])(\d\d):(\d\d)/.exec(c) || [
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
    let t, r, n, o, s, i, a, l;
    if ((l = _e.exec(e)) ? [, t, r, n, o, s, i, a] = l : (l = Se.exec(e)) ? ([, t, r, n, o, s, i, a] = l, n = (Number(n) + 1900).toString()) : (l = xe.exec(e)) && ([, r, t, o, s, i, a, n] = l), n && i) {
        const e = Date.UTC(Number(n), ke.indexOf(r), Number(t), Number(o), Number(s), Number(i), a ? Math.round(1e3 * parseFloat(`0.${a}`)) : 0);
        Ee(t, 1, 31), Ee(o, 0, 23), Ee(s, 0, 59), Ee(i, 0, 60);
        const l = new Date(e);
        return l.setUTCFullYear(Number(n)), l;
    }
    throw new TypeError(`Invalid RFC7231 date-time value ${e}.`);
}, exports.calculateBodyLength = (e)=>{
    if (!e) return 0;
    if ("string" == typeof e) return Buffer.byteLength(e);
    if ("number" == typeof e.byteLength) return e.byteLength;
    if ("number" == typeof e.size) return e.size;
    if ("number" == typeof e.start && "number" == typeof e.end) return e.end + 1 - e.start;
    if (e instanceof l) {
        if (null != e.path) return c(e.path).size;
        if ("number" == typeof e.fd) return u(e.fd).size;
    }
    throw new Error(`Body Length computation failed for ${e}`);
}, exports.concatBytes = Re, exports.copyDocumentWithTransform = (e, t, r = (e)=>e)=>e, exports.createBufferedReadable = function(e, t, r) {
    if ($e(e)) return function(e, t, r) {
        const n = e.getReader();
        let o = !1, s = 0;
        const i = [
            "",
            new Ge((e)=>new Uint8Array(e))
        ];
        let a = -1;
        const l = async (e)=>{
            const { value: c, done: u } = await n.read(), d = c;
            if (u) {
                if (-1 !== a) {
                    const t = Ve(i, a);
                    Ke(t) > 0 && e.enqueue(t);
                }
                e.close();
            } else {
                const n = Ze(d, !1);
                if (a !== n && (a >= 0 && e.enqueue(Ve(i, a)), a = n), -1 === a) return void e.enqueue(d);
                const c = Ke(d);
                s += c;
                const u = Ke(i[a]);
                if (c >= t && 0 === u) e.enqueue(d);
                else {
                    const n = Ye(i, a, d);
                    !o && s > 2 * t && (o = !0, r?.warn(`@smithy/util-stream - stream chunk size ${c} is below threshold of ${t}, automatically buffering.`)), n >= t ? e.enqueue(Ve(i, a)) : await l(e);
                }
            }
        };
        return new ReadableStream({
            pull: l
        });
    }(e, t, r);
    const n = new p({
        read () {}
    });
    let o = !1, s = 0;
    const i = [
        "",
        new Ge((e)=>new Uint8Array(e)),
        new Ge((e)=>Buffer.from(new Uint8Array(e)))
    ];
    let a = -1;
    return e.on("data", (e)=>{
        const l = Ze(e, !0);
        if (a !== l && (a >= 0 && n.push(Ve(i, a)), a = l), -1 === a) return void n.push(e);
        const c = Ke(e);
        s += c;
        const u = Ke(i[a]);
        if (c >= t && 0 === u) n.push(e);
        else {
            const l = Ye(i, a, e);
            !o && s > 2 * t && (o = !0, r?.warn(`@smithy/util-stream - stream chunk size ${c} is below threshold of ${t}, automatically buffering.`)), l >= t && n.push(Ve(i, a));
        }
    }), e.on("end", ()=>{
        if (-1 !== a) {
            const e = Ve(i, a);
            Ke(e) > 0 && n.push(e);
        }
        n.push(null);
    }), n;
}, exports.createChecksumStream = function(e) {
    return "function" == typeof ReadableStream && $e(e.source) ? (({ expectedChecksum: e, checksum: t, source: r, checksumSourceLocation: n, base64Encoder: o })=>{
        if (!$e(r)) throw new Error(`@smithy/util-stream: unsupported source type ${r?.constructor?.name ?? r} in ChecksumStream.`);
        const s = o ?? ze;
        if ("function" != typeof TransformStream) throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
        const i = new TransformStream({
            start () {},
            async transform (e, r) {
                t.update(e), r.enqueue(e);
            },
            async flush (r) {
                const o = await t.digest(), i = s(o);
                if (e !== i) {
                    const t = new Error(`Checksum mismatch: expected "${e}" but received "${i}" in response header "${n}".`);
                    r.error(t);
                } else r.terminate();
            }
        });
        r.pipeThrough(i);
        const a = i.readable;
        return Object.setPrototypeOf(a, We.prototype), a;
    })(e) : new Be(e);
}, exports.dateToUtcString = function(e) {
    const t = e.getUTCFullYear(), r = e.getUTCMonth(), n = e.getUTCDay(), o = e.getUTCDate(), s = e.getUTCHours(), i = e.getUTCMinutes(), a = e.getUTCSeconds(), l = s < 10 ? `0${s}` : `${s}`, c = i < 10 ? `0${i}` : `${i}`, u = a < 10 ? `0${a}` : `${a}`;
    return `${K[n]}, ${o < 10 ? `0${o}` : `${o}`} ${Z[r]} ${t} ${l}:${c}:${u} GMT`;
}, exports.deserializerMiddleware = Oe, exports.deserializerMiddlewareOption = Fe, exports.expectBoolean = (e)=>{
    if (null != e) {
        if ("number" == typeof e) {
            if (0 !== e && 1 !== e || V.warn(Y(`Expected boolean, got ${typeof e}: ${e}`)), 0 === e) return !1;
            if (1 === e) return !0;
        }
        if ("string" == typeof e) {
            const t = e.toLowerCase();
            if ("false" !== t && "true" !== t || V.warn(Y(`Expected boolean, got ${typeof e}: ${e}`)), "false" === t) return !1;
            if ("true" === t) return !0;
        }
        if ("boolean" == typeof e) return e;
        throw new TypeError(`Expected boolean, got ${typeof e}: ${e}`);
    }
}, exports.expectByte = M, exports.expectFloat32 = T, exports.expectInt = I, exports.expectInt32 = A, exports.expectLong = C, exports.expectNonNull = (e, t)=>{
    if (null == e) {
        if (t) throw new TypeError(`Expected a non-null value for ${t}`);
        throw new TypeError("Expected a non-null value");
    }
    return e;
}, exports.expectNumber = k, exports.expectObject = D, exports.expectShort = P, exports.expectString = (e)=>{
    if (null != e) {
        if ("string" == typeof e) return e;
        if ([
            "boolean",
            "number",
            "bigint"
        ].includes(typeof e)) return V.warn(Y(`Expected string, got ${typeof e}: ${e}`)), String(e);
        throw new TypeError(`Expected string, got ${typeof e}: ${e}`);
    }
}, exports.expectUnion = (e)=>{
    if (null == e) return;
    const t = D(e), r = [];
    for(const e in t)i(t, e) && null != t[e] && r.push(e);
    if (0 === r.length) throw new TypeError("Unions must have exactly one non-null member. None were found.");
    if (r.length > 1) throw new TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`);
    return t;
}, exports.fromArrayBuffer = g, exports.fromBase64 = w, exports.fromHex = function(e) {
    if (e.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
    const t = new Uint8Array(e.length / 2);
    for(let r = 0; r < e.length; r += 2){
        const n = e.slice(r, r + 2).toLowerCase();
        if (!(n in Ae)) throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
        t[r / 2] = Ae[n];
    }
    return t;
}, exports.fromString = y, exports.fromUtf8 = b, exports.generateIdempotencyToken = ct, exports.getAwsChunkedEncodingStream = function(e, t) {
    const r = e, n = e;
    if ($e(n)) return ((e, t)=>{
        const { base64Encoder: r, bodyLengthChecker: n, checksumAlgorithmFn: o, checksumLocationName: s, streamHasher: i } = t, a = void 0 !== r && void 0 !== n && void 0 !== o && void 0 !== s && void 0 !== i, l = a ? i(o, e) : void 0, c = e.getReader();
        return new ReadableStream({
            async pull (e) {
                const { value: t, done: o } = await c.read();
                if (o) {
                    if (e.enqueue("0\r\n"), a) {
                        const t = r(await l);
                        e.enqueue(`${s}:${t}\r\n`), e.enqueue("\r\n");
                    }
                    e.close();
                } else e.enqueue(`${(n(t) || 0).toString(16)}\r\n${t}\r\n`);
            }
        });
    })(n, t);
    const { base64Encoder: o, bodyLengthChecker: s, checksumAlgorithmFn: i, checksumLocationName: a, streamHasher: l } = t, c = void 0 !== o && void 0 !== i && void 0 !== a && void 0 !== l, u = c ? l(i, r) : void 0, d = new p({
        read: ()=>{}
    });
    return r.on("data", (e)=>{
        const t = s(e) || 0;
        0 !== t && (d.push(`${t.toString(16)}\r\n`), d.push(e), d.push("\r\n"));
    }), r.on("end", async ()=>{
        if (d.push("0\r\n"), c) {
            const e = o(await u);
            d.push(`${a}:${e}\r\n`), d.push("\r\n");
        }
        d.push(null);
    }), d;
}, exports.getSerdePlugin = function(e, t, r) {
    return {
        applyToStack: (n)=>{
            n.add(Oe(e, r), Fe), n.add(Ne(e, t), Le);
        }
    };
}, exports.handleFloat = q, exports.headStream = (e, t)=>$e(e) ? async function(e, t) {
        let r = 0;
        const n = [], o = e.getReader();
        let s = !1;
        for(; !s;){
            const { done: e, value: i } = await o.read();
            if (i && (n.push(i), r += i?.byteLength ?? 0), r >= t) break;
            s = e;
        }
        o.releaseLock();
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
        const o = new Xe;
        o.limit = t, e.pipe(o), e.on("error", (e)=>{
            o.end(), n(e);
        }), o.on("error", n), o.on("finish", function() {
            const e = Re(this.buffers);
            r(e);
        });
    }), exports.isArrayBuffer = f, exports.isBlob = qe, exports.isReadableStream = $e, exports.limitedParseDouble = $, exports.limitedParseFloat = j, exports.limitedParseFloat32 = (e)=>"string" == typeof e ? J(e) : T(e), exports.logger = V, exports.nv = function(e) {
    return new Ce(String(e), "bigDecimal");
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
    else if ("string" == typeof e) t = N(e);
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
    const [r, n, o, s, i, a, l, c] = t, u = W(he(n)), d = ue(o, "month", 1, 12), p = ue(s, "day", 1, 31);
    return ne(u, d, p, {
        hours: i,
        minutes: a,
        seconds: l,
        fractionalMilliseconds: c
    });
}, exports.parseRfc3339DateTimeWithOffset = (e)=>{
    if (null == e) return;
    if ("string" != typeof e) throw new TypeError("RFC-3339 date-times must be expressed as strings");
    const t = Q.exec(e);
    if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
    const [r, n, o, s, i, a, l, c, u] = t, d = W(he(n)), p = ue(o, "month", 1, 12), h = ue(s, "day", 1, 31), m = ne(d, p, h, {
        hours: i,
        minutes: a,
        seconds: l,
        fractionalMilliseconds: c
    });
    return "Z" != u.toUpperCase() && m.setTime(m.getTime() - pe(u)), m;
}, exports.parseRfc7231DateTime = (e)=>{
    if (null == e) return;
    if ("string" != typeof e) throw new TypeError("RFC-7231 date-times must be expressed as strings");
    let t = ee.exec(e);
    if (t) {
        const [e, r, n, o, s, i, a, l] = t;
        return ne(W(he(o)), ie(n), ue(r, "day", 1, 31), {
            hours: s,
            minutes: i,
            seconds: a,
            fractionalMilliseconds: l
        });
    }
    if (t = te.exec(e), t) {
        const [e, r, n, o, s, i, a, l] = t;
        return se(ne(oe(o), ie(n), ue(r, "day", 1, 31), {
            hours: s,
            minutes: i,
            seconds: a,
            fractionalMilliseconds: l
        }));
    }
    if (t = re.exec(e), t) {
        const [e, r, n, o, s, i, a, l] = t;
        return ne(W(he(l)), ie(r), ue(n.trimLeft(), "day", 1, 31), {
            hours: o,
            minutes: s,
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
        return t = !0, await ot(e);
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
}, exports.serializerMiddleware = Ne, exports.serializerMiddlewareOption = Le, exports.splitEvery = function(e, t, r) {
    if (r <= 0 || !Number.isInteger(r)) throw new Error("Invalid number of delimiters (" + r + ") for splitEvery.");
    const n = e.split(t);
    if (1 === r) return n;
    const o = [];
    let s = "";
    for(let e = 0; e < n.length; e++)"" === s ? s = n[e] : s += t + n[e], (e + 1) % r === 0 && (o.push(s), s = "");
    return "" !== s && o.push(s), o;
}, exports.splitHeader = (e)=>{
    const t = e.length, r = [];
    let n, o = !1, s = 0;
    for(let i = 0; i < t; ++i){
        const t = e[i];
        switch(t){
            case '"':
                "\\" !== n && (o = !o);
                break;
            case ",":
                o || (r.push(e.slice(s, i)), s = i + 1);
        }
        n = t;
    }
    return r.push(e.slice(s)), r.map((e)=>{
        const t = (e = e.trim()).length;
        return t < 2 ? e : ('"' === e[0] && '"' === e[t - 1] && (e = e.slice(1, t - 1)), e.replace(/\\"/g, '"'));
    });
}, exports.splitStream = async function(e) {
    if ($e(e) || qe(e)) return async function(e) {
        return "function" == typeof e.stream && (e = e.stream()), e.tee();
    }(e);
    const t = new m, r = new m;
    return e.pipe(t), e.pipe(r), [
        t,
        r
    ];
}, exports.streamCollector = ot, exports.strictParseByte = G, exports.strictParseDouble = N, exports.strictParseFloat = F, exports.strictParseFloat32 = L, exports.strictParseInt = H, exports.strictParseInt32 = (e)=>A("string" == typeof e ? B(e) : e), exports.strictParseLong = z, exports.strictParseShort = W, exports.toBase64 = _, exports.toHex = Pe, exports.toUint8Array = Me, exports.toUtf8 = S, exports.v4 = lt;
