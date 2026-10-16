const { Crc32: n } = require("./module-60153.js"), { hasOwn: o } = require("./module-11255.js"), { toHex: s, fromHex: i, toUtf8: a, fromUtf8: l } = require("./module-96851.js"), { Readable: c } = require("./module-57075.js"), { TypeRegistry: u } = require("./module-93353.js");
class d {
    bytes;
    constructor(e){
        if (this.bytes = e, 8 !== e.byteLength) throw new Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(e) {
        if (e > 0x8000000000000000 || e < -0x8000000000000000) throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
        const t = new Uint8Array(8);
        for(let r = 7, n = Math.abs(Math.round(e)); r > -1 && n > 0; r--, n /= 256)t[r] = n;
        return e < 0 && p(t), new d(t);
    }
    valueOf() {
        const e = this.bytes.slice(0), t = 128 & e[0];
        return t && p(e), parseInt(s(e), 16) * (t ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function p(e) {
    for(let t = 0; t < 8; t++)e[t] ^= 255;
    for(let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
}
class h {
    toUtf8;
    fromUtf8;
    constructor(e, t){
        this.toUtf8 = e, this.fromUtf8 = t;
    }
    format(e) {
        const t = [];
        for(const r in e){
            if (!o(e, r)) continue;
            const n = this.fromUtf8(r);
            t.push(Uint8Array.from([
                n.byteLength
            ]), n, this.formatHeaderValue(e[r]));
        }
        const r = new Uint8Array(t.reduce((e, t)=>e + t.byteLength, 0));
        let n = 0;
        for (const e of t)r.set(e, n), n += e.byteLength;
        return r;
    }
    formatHeaderValue(e) {
        switch(e.type){
            case "boolean":
                return Uint8Array.from([
                    e.value ? 0 : 1
                ]);
            case "byte":
                return Uint8Array.from([
                    2,
                    e.value
                ]);
            case "short":
                const t = new DataView(new ArrayBuffer(3));
                return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
            case "integer":
                const r = new DataView(new ArrayBuffer(5));
                return r.setUint8(0, 4), r.setInt32(1, e.value, !1), new Uint8Array(r.buffer);
            case "long":
                const n = new Uint8Array(9);
                return n[0] = 5, n.set(e.value.bytes, 1), n;
            case "binary":
                const o = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                o.setUint8(0, 6), o.setUint16(1, e.value.byteLength, !1);
                const s = new Uint8Array(o.buffer);
                return s.set(e.value, 3), s;
            case "string":
                const a = this.fromUtf8(e.value), l = new DataView(new ArrayBuffer(3 + a.byteLength));
                l.setUint8(0, 7), l.setUint16(1, a.byteLength, !1);
                const c = new Uint8Array(l.buffer);
                return c.set(a, 3), c;
            case "timestamp":
                const u = new Uint8Array(9);
                return u[0] = 8, u.set(d.fromNumber(e.value.valueOf()).bytes, 1), u;
            case "uuid":
                if (!k.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
                const p = new Uint8Array(17);
                return p[0] = 9, p.set(i(e.value.replace(/-/g, "")), 1), p;
        }
    }
    parse(e) {
        const t = {};
        let r = 0;
        for(; r < e.byteLength;){
            const n = e.getUint8(r++), o = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + r, n));
            switch(r += n, e.getUint8(r++)){
                case 0:
                    t[o] = {
                        type: f,
                        value: !0
                    };
                    break;
                case 1:
                    t[o] = {
                        type: f,
                        value: !1
                    };
                    break;
                case 2:
                    t[o] = {
                        type: g,
                        value: e.getInt8(r++)
                    };
                    break;
                case 3:
                    t[o] = {
                        type: y,
                        value: e.getInt16(r, !1)
                    }, r += 2;
                    break;
                case 4:
                    t[o] = {
                        type: v,
                        value: e.getInt32(r, !1)
                    }, r += 4;
                    break;
                case 5:
                    t[o] = {
                        type: w,
                        value: new d(new Uint8Array(e.buffer, e.byteOffset + r, 8))
                    }, r += 8;
                    break;
                case 6:
                    const n = e.getUint16(r, !1);
                    r += 2, t[o] = {
                        type: b,
                        value: new Uint8Array(e.buffer, e.byteOffset + r, n)
                    }, r += n;
                    break;
                case 7:
                    const i = e.getUint16(r, !1);
                    r += 2, t[o] = {
                        type: _,
                        value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + r, i))
                    }, r += i;
                    break;
                case 8:
                    t[o] = {
                        type: S,
                        value: new Date(new d(new Uint8Array(e.buffer, e.byteOffset + r, 8)).valueOf())
                    }, r += 8;
                    break;
                case 9:
                    const a = new Uint8Array(e.buffer, e.byteOffset + r, 16);
                    r += 16, t[o] = {
                        type: x,
                        value: `${s(a.subarray(0, 4))}-${s(a.subarray(4, 6))}-${s(a.subarray(6, 8))}-${s(a.subarray(8, 10))}-${s(a.subarray(10))}`
                    };
                    break;
                default:
                    throw new Error("Unrecognized header type tag");
            }
        }
        return t;
    }
}
var m;
!function(e) {
    e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid";
}(m || (m = {}));
const f = "boolean", g = "byte", y = "short", v = "integer", w = "long", b = "binary", _ = "string", S = "timestamp", x = "uuid", k = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class E {
    headerMarshaller;
    messageBuffer;
    isEndOfStream;
    constructor(e, t){
        this.headerMarshaller = new h(e, t), this.messageBuffer = [], this.isEndOfStream = !1;
    }
    feed(e) {
        this.messageBuffer.push(this.decode(e));
    }
    endOfStream() {
        this.isEndOfStream = !0;
    }
    getMessage() {
        const e = this.messageBuffer.pop(), t = this.isEndOfStream;
        return {
            getMessage: ()=>e,
            isEndOfStream: ()=>t
        };
    }
    getAvailableMessages() {
        const e = this.messageBuffer;
        this.messageBuffer = [];
        const t = this.isEndOfStream;
        return {
            getMessages: ()=>e,
            isEndOfStream: ()=>t
        };
    }
    encode({ headers: e, body: t }) {
        const r = this.headerMarshaller.format(e), o = r.byteLength + t.byteLength + 16, s = new Uint8Array(o), i = new DataView(s.buffer, s.byteOffset, s.byteLength), a = new n;
        return i.setUint32(0, o, !1), i.setUint32(4, r.byteLength, !1), a.update(s.subarray(0, 8)), i.setUint32(8, a.digestSync(), !1), s.set(r, 12), s.set(t, r.byteLength + 12), a.update(s.subarray(8, o - 4)), i.setUint32(o - 4, a.digestSync(), !1), s;
    }
    decode(e) {
        const { headers: t, body: r } = function({ byteLength: e, byteOffset: t, buffer: r }) {
            if (e < 16) throw new Error("Provided message too short to accommodate event stream message overhead");
            const o = new DataView(r, t, e), s = o.getUint32(0, !1);
            if (e !== s) throw new Error("Reported message length does not match received message length");
            const i = o.getUint32(4, !1), a = o.getUint32(8, !1), l = o.getUint32(e - 4, !1), c = new n;
            if (c.update(new Uint8Array(r, t, 8)), a !== c.digestSync()) throw new Error(`The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${c.digestSync()})`);
            if (c.update(new Uint8Array(r, t + 8, e - 12)), l !== c.digestSync()) throw new Error(`The message checksum (${c.digestSync()}) did not match the expected value of ${l}`);
            return {
                headers: new DataView(r, t + 8 + 4, i),
                body: new Uint8Array(r, t + 8 + 4 + i, s - i - 16)
            };
        }(e);
        return {
            headers: this.headerMarshaller.parse(t),
            body: r
        };
    }
    formatHeaders(e) {
        return this.headerMarshaller.format(e);
    }
}
class T {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const e of this.options.inputStream){
            const t = this.options.decoder.decode(e);
            yield t;
        }
    }
}
class C {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const e of this.options.messageStream){
            const t = this.options.encoder.encode(e);
            yield t;
        }
        this.options.includeEndFrame && (yield new Uint8Array(0));
    }
}
class I {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const e of this.options.messageStream){
            const t = await this.options.deserializer(e);
            void 0 !== t && (yield t);
        }
    }
}
class A {
    options;
    constructor(e){
        this.options = e;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const e of this.options.inputStream){
            const t = this.options.serializer(e);
            yield t;
        }
    }
}
function P(e) {
    let t = 0, r = 0, n = null, o = null;
    const s = (e)=>{
        if ("number" != typeof e) throw new Error("Attempted to allocate an event message where size was not a number: " + e);
        t = e, r = 4, n = new Uint8Array(e);
        new DataView(n.buffer).setUint32(0, e, !1);
    };
    return {
        [Symbol.asyncIterator]: async function*() {
            const i = e[Symbol.asyncIterator]();
            for(;;){
                const { value: e, done: a } = await i.next();
                if (a) {
                    if (!t) return;
                    if (t !== r) throw new Error("Truncated event message received.");
                    return void (yield n);
                }
                const l = e.length;
                let c = 0;
                for(; c < l;){
                    if (!n) {
                        const t = l - c;
                        o || (o = new Uint8Array(4));
                        const n = Math.min(4 - r, t);
                        if (o.set(e.slice(c, c + n), r), r += n, c += n, r < 4) break;
                        s(new DataView(o.buffer).getUint32(0, !1)), o = null;
                    }
                    const i = Math.min(t - r, l - c);
                    n.set(e.slice(c, c + i), r), r += i, c += i, t && t === r && (yield n, n = null, t = 0, r = 0);
                }
            }
        }
    };
}
function M(e, t) {
    return async function(r) {
        const { value: n } = r.headers[":message-type"];
        if ("error" === n) {
            const e = new Error(r.headers[":error-message"].value || "UnknownError");
            throw e.name = r.headers[":error-code"].value, e;
        }
        if ("exception" === n) {
            const n = r.headers[":exception-type"].value, o = {
                [n]: r
            }, s = await e(o);
            if (s.$unknown) {
                const e = new Error(t(r.body));
                throw e.name = n, e;
            }
            throw s[n];
        }
        if ("event" === n) {
            const t = {
                [r.headers[":event-type"].value]: r
            }, n = await e(t);
            if (n.$unknown) return;
            return n;
        }
        throw Error(`Unrecognizable event type: ${r.headers[":event-type"].value}`);
    };
}
let R = class {
    eventStreamCodec;
    utfEncoder;
    constructor({ utf8Encoder: e, utf8Decoder: t }){
        this.eventStreamCodec = new E(e, t), this.utfEncoder = e;
    }
    deserialize(e, t) {
        const r = P(e);
        return new I({
            messageStream: new T({
                inputStream: r,
                decoder: this.eventStreamCodec
            }),
            deserializer: M(t, this.utfEncoder)
        });
    }
    serialize(e, t) {
        return new C({
            messageStream: new A({
                inputStream: e,
                serializer: t
            }),
            encoder: this.eventStreamCodec,
            includeEndFrame: !0
        });
    }
};
class O {
    universalMarshaller;
    constructor({ utf8Encoder: e, utf8Decoder: t }){
        this.universalMarshaller = new R({
            utf8Decoder: t,
            utf8Encoder: e
        });
    }
    deserialize(e, t) {
        const r = "function" == typeof e[Symbol.asyncIterator] ? e : async function*(e) {
            let t = !1, r = !1;
            const n = new Array;
            e.on("error", (e)=>{
                if (t || (t = !0), e) throw e;
            }), e.on("data", (e)=>{
                n.push(e);
            }), e.on("end", ()=>{
                t = !0;
            });
            for(; !r;){
                const e = await new Promise((e)=>setTimeout(()=>e(n.shift()), 0));
                e && (yield e), r = t && 0 === n.length;
            }
        }(e);
        return this.universalMarshaller.deserialize(r, t);
    }
    serialize(e, t) {
        return c.from(this.universalMarshaller.serialize(e, t));
    }
}
exports.EventStreamCodec = E, exports.EventStreamMarshaller = O, exports.EventStreamSerde = class {
    marshaller;
    serializer;
    deserializer;
    serdeContext;
    defaultContentType;
    compositeErrorRegistry;
    constructor({ marshaller: e, serializer: t, deserializer: r, serdeContext: n, defaultContentType: o, compositeErrorRegistry: s }){
        this.marshaller = e, this.serializer = t, this.deserializer = r, this.serdeContext = n, this.defaultContentType = o, this.compositeErrorRegistry = s;
    }
    async serializeEventStream({ eventStream: e, requestSchema: t, initialRequest: r, initialMessageType: n }) {
        const s = this.marshaller, i = t.getEventStreamMember(), a = t.getMemberSchema(i), l = this.serializer, c = this.defaultContentType, u = Symbol("initialRequestMarker"), d = {
            async *[Symbol.asyncIterator] () {
                if (r) {
                    const e = {
                        ":event-type": {
                            type: "string",
                            value: n ?? "initial-request"
                        },
                        ":message-type": {
                            type: "string",
                            value: "event"
                        },
                        ":content-type": {
                            type: "string",
                            value: c
                        }
                    };
                    l.write(t, r);
                    const o = l.flush();
                    yield {
                        [u]: !0,
                        headers: e,
                        body: o
                    };
                }
                for await (const t of e)yield t;
            }
        };
        return s.serialize(d, (e)=>{
            if (e[u]) return {
                headers: e.headers,
                body: e.body
            };
            let t = "";
            for(const r in e)if (o(e, r) && "__type" !== r) {
                t = r;
                break;
            }
            const { additionalHeaders: r, body: n, eventType: s, explicitPayloadContentType: i } = this.writeEventBody(t, a, e);
            return {
                headers: {
                    ":event-type": {
                        type: "string",
                        value: s
                    },
                    ":message-type": {
                        type: "string",
                        value: "event"
                    },
                    ":content-type": {
                        type: "string",
                        value: i ?? c
                    },
                    ...r
                },
                body: n
            };
        });
    }
    async deserializeEventStream({ response: e, responseSchema: t, initialResponseContainer: r, initialMessageType: n }) {
        const s = this.marshaller, i = t.getEventStreamMember(), l = t.getMemberSchema(i).getMemberSchemas(), c = Symbol("initialResponseMarker"), u = s.deserialize(e.body, async (e)=>{
            let r = "";
            for(const t in e)if (o(e, t) && "__type" !== t) {
                r = t;
                break;
            }
            const s = e[r].body;
            if (r === (n ?? "initial-response")) {
                const e = await this.deserializer.read(t, s);
                return delete e[i], {
                    [c]: !0,
                    ...e
                };
            }
            if (r in l) {
                const t = l[r];
                if (t.isStructSchema()) {
                    const n = {};
                    let o = !1;
                    for (const [i, l] of t.structIterator()){
                        const { eventHeader: t, eventPayload: c } = l.getMergedTraits();
                        if (o = o || Boolean(t || c), c) l.isBlobSchema() ? n[i] = s : l.isStringSchema() ? n[i] = (this.serdeContext?.utf8Encoder ?? a)(s) : l.isStructSchema() && (n[i] = await this.deserializer.read(l, s));
                        else if (t) {
                            const t = e[r].headers[i]?.value;
                            null != t && (l.isNumericSchema() ? n[i] = t && "object" == typeof t && "bytes" in t ? BigInt(t.toString()) : Number(t) : n[i] = t);
                        }
                    }
                    return {
                        [r]: await this.readEventMember(t, s, o, n)
                    };
                }
                return {
                    [r]: await this.deserializer.read(t, s)
                };
            }
            return {
                $unknown: e
            };
        }), d = u[Symbol.asyncIterator](), p = await d.next();
        if (p.done) return u;
        if (p.value?.[c]) {
            if (!t) throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
            for(const e in p.value)o(p.value, e) && (r[e] = p.value[e]);
        }
        return {
            async *[Symbol.asyncIterator] () {
                for(p?.value?.[c] || (yield p.value);;){
                    const { done: e, value: t } = await d.next();
                    if (e) break;
                    yield t;
                }
            }
        };
    }
    async readEventMember(e, t, r, n) {
        let o;
        const s = e.getSchema();
        if (Array.isArray(s) && -3 === s[0]) {
            const e = s[1], t = u.for(e);
            this.compositeErrorRegistry?.copyFrom(t), o = (this.compositeErrorRegistry ?? t)?.getErrorCtor(s);
        }
        const i = r ? n : 0 === t.byteLength ? {} : await this.deserializer.read(e, t);
        if (o) {
            const t = i.message ?? i.Message ?? "Unknown", r = {}, n = e.getMergedTraits().error;
            return n && (r.$fault = n), Object.assign(new o({}), r, {
                message: t
            }, i);
        }
        return i;
    }
    writeEventBody(e, t, r) {
        const n = this.serializer;
        let o, s = e, i = null;
        const a = {};
        if (t.getSchema()[4].includes(e)) {
            const s = t.getMemberSchema(e);
            if (s.isStructSchema()) {
                for (const [t, n] of s.structIterator()){
                    const { eventHeader: o, eventPayload: s } = n.getMergedTraits();
                    if (s) i = t;
                    else if (o) {
                        const o = r[e][t];
                        let s = "binary";
                        n.isNumericSchema() ? s = (-2) ** 31 <= o && o <= 2 ** 31 - 1 ? "integer" : "long" : n.isTimestampSchema() ? s = "timestamp" : n.isStringSchema() ? s = "string" : n.isBooleanSchema() && (s = "boolean"), null != o && (a[t] = {
                            type: s,
                            value: o
                        }, delete r[e][t]);
                    }
                }
                if (null !== i) {
                    const t = s.getMemberSchema(i);
                    t.isBlobSchema() ? o = "application/octet-stream" : t.isStringSchema() && (o = "text/plain"), n.write(t, r[e][i]);
                } else n.write(s, r[e]);
            } else {
                if (!s.isUnitSchema()) throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
                n.write(s, {});
            }
        } else {
            const [t, o] = r[e];
            s = t, n.write(15, o);
        }
        const c = n.flush() ?? new Uint8Array;
        return {
            body: "string" == typeof c ? (this.serdeContext?.utf8Decoder ?? l)(c) : c,
            eventType: s,
            explicitPayloadContentType: o,
            additionalHeaders: a
        };
    }
}, exports.HeaderMarshaller = h, exports.Int64 = d, exports.MessageDecoderStream = T, exports.MessageEncoderStream = C, exports.SmithyMessageDecoderStream = I, exports.SmithyMessageEncoderStream = A, exports.UniversalEventStreamMarshaller = R, exports.eventStreamSerdeProvider = (e)=>new O(e), exports.getChunkedStream = P, exports.getMessageUnmarshaller = M, exports.getUnmarshalledStream = function(e, t) {
    const r = M(t.deserializer, t.toUtf8);
    return {
        [Symbol.asyncIterator]: async function*() {
            for await (const n of e){
                const e = t.eventStreamCodec.decode(n), o = await r(e);
                void 0 !== o && (yield o);
            }
        }
    };
}, exports.iterableToReadableStream = (e)=>{
    const t = e[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (e) {
            const { done: r, value: n } = await t.next();
            if (r) return e.close();
            e.enqueue(n);
        }
    });
}, exports.readableStreamToIterable = (e)=>({
        [Symbol.asyncIterator]: async function*() {
            const t = e.getReader();
            try {
                for(;;){
                    const { done: e, value: r } = await t.read();
                    if (e) return;
                    yield r;
                }
            } finally{
                t.releaseLock();
            }
        }
    }), exports.resolveEventStreamSerdeConfig = (e)=>Object.assign(e, {
        eventStreamMarshaller: e.eventStreamSerdeProvider(e)
    }), exports.universalEventStreamSerdeProvider = (e)=>new R(e);
