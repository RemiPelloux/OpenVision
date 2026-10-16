const { createReadStream: n } = require("./module-73024.js"), { Writable: o } = require("./module-57075.js"), { toUint8Array: s, concatBytes: i } = require("./module-96851.js"), { createHash: a, createHmac: l } = require("./module-77598.js"), c = require("./module-38522.js");
async function u(e, t, r = 1048576) {
    const n = e.size;
    let o = 0;
    for(; o < n;){
        const s = e.slice(o, Math.min(n, o + r));
        t(new Uint8Array(await s.arrayBuffer())), o += s.size;
    }
}
class d extends o {
    hash;
    constructor(e, t){
        super(t), this.hash = e;
    }
    _write(e, t, r) {
        try {
            this.hash.update(s(e));
        } catch (e) {
            return r(e);
        }
        r();
    }
}
const p = (e)=>"string" == typeof e.path;
class h {
    digestLength = 16;
    state = Uint32Array.from(m);
    writeBuffer = new DataView(new ArrayBuffer(64));
    bufferLength = 0;
    bytesHashed = 0;
    update(e) {
        const t = s(e);
        let r = 0, n = t.byteLength;
        for(this.bytesHashed += n; n > 0;)this.writeBuffer.setUint8(this.bufferLength++, t[r++]), --n, 64 === this.bufferLength && (v(this.state, this.writeBuffer), this.bufferLength = 0);
    }
    async digest() {
        const e = Uint32Array.from(this.state), t = new DataView(this.writeBuffer.buffer.slice(0));
        let r = this.bufferLength;
        const n = 8 * this.bytesHashed;
        if (t.setUint8(r++, 128), this.bufferLength % 64 >= 56) {
            for(let e = r; e < 64; ++e)t.setUint8(e, 0);
            v(e, t), r = 0;
        }
        for(let e = r; e < 56; ++e)t.setUint8(e, 0);
        t.setUint32(56, n >>> 0, !0), t.setUint32(60, Math.floor(n / 2 ** 32), !0), v(e, t);
        const o = new Uint8Array(16), s = new DataView(o.buffer);
        for(let t = 0; t < 4; ++t)s.setUint32(4 * t, e[t], !0);
        return o;
    }
    reset() {
        this.state.set(m), this.writeBuffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0;
    }
}
const m = [
    1732584193,
    4023233417,
    2562383102,
    271733878
], f = 4294967295, g = Uint8Array.of(7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21), y = Array.from({
    length: 64
}, (e, t)=>Math.abs(Math.sin(t + 1)) * 2 ** 32 >>> 0);
function v(e, t) {
    let r = e[0], n = e[1], o = e[2], s = e[3];
    for(let e = 0; e < 64; ++e){
        let i, a;
        e < 16 ? (i = n & o | ~n & s, a = e) : e < 32 ? (i = s & n | o & ~s, a = (5 * e + 1) % 16) : e < 48 ? (i = n ^ o ^ s, a = (3 * e + 5) % 16) : (i = o ^ (n | ~s), a = 7 * e % 16);
        const l = t.getUint32(4 * a, !0), c = s;
        s = o, o = n;
        const u = g[4 * (e >> 4) + (3 & e)], d = (r + i & f) + (l + y[e] & f) & f;
        n = n + ((d << u | d >>> 32 - u) >>> 0) & f, r = c;
    }
    e[0] = e[0] + r & f, e[1] = e[1] + n & f, e[2] = e[2] + o & f, e[3] = e[3] + s & f;
}
const w = (()=>{
    try {
        return a("md5"), !0;
    } catch  {
        return !1;
    }
})() ? class {
    digestLength = 16;
    hash = a("md5");
    update(e) {
        this.hash.update(s(e));
    }
    async digest() {
        const e = this.hash.copy().digest();
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    reset() {
        this.hash = a("md5");
    }
} : h;
const b = new Uint32Array(256);
for(let e = 0; e < 256; ++e){
    let t = e;
    for(let e = 0; e < 8; ++e)t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
    b[e] = t >>> 0;
}
const _ = 4294967295;
class S {
    digestLength = 4;
    checksum = _;
    update(e) {
        for(let t = 0; t < e.length; ++t)this.checksum = this.checksum >>> 8 ^ b[255 & (this.checksum ^ e[t])];
    }
    digestSync() {
        return (this.checksum ^ _) >>> 0;
    }
    async digest() {
        const e = this.digestSync(), t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !1), t;
    }
    reset() {
        this.checksum = _;
    }
}
const x = "function" == typeof c.crc32 ? c.crc32 : void 0, k = x ? (E = x, class {
    digestLength = 4;
    value = 0;
    update(e) {
        this.value = E(e, this.value);
    }
    digestSync() {
        return this.value >>> 0;
    }
    async digest() {
        const e = new Uint8Array(4);
        return new DataView(e.buffer).setUint32(0, this.digestSync(), !1), e;
    }
    reset() {
        this.value = 0;
    }
}) : S;
var E;
const T = 64, C = 2 ** 53 - 1;
class I {
    digestLength = 32;
    state = Int32Array.from(A);
    w;
    buffer = new Uint8Array(64);
    bufferLength = 0;
    bytesHashed = 0;
    finished = !1;
    inner;
    outer;
    constructor(e){
        if (e) {
            const t = I.normalizeKey(e);
            this.inner = new I, this.outer = new I;
            const { inner: r, outer: n } = this, o = new Uint8Array(128);
            for(let e = 0; e < T; ++e)o[e] = 54 ^ t[e], o[e + T] = 92 ^ t[e];
            r.update(o.subarray(0, T)), n.update(o.subarray(T));
        }
    }
    update(e) {
        if (this.finished) throw new Error("Attempted to update an already finished HMAC.");
        if (this.inner) return void this.inner.update(e);
        const t = s(e);
        let r = 0, { byteLength: n } = t;
        if (this.bytesHashed += n, 8 * this.bytesHashed > C) throw new Error("Cannot hash more than 2^53 - 1 bits");
        for(; n > 0;)this.buffer[this.bufferLength++] = t[r++], n--, this.bufferLength === T && (this.hashBuffer(), this.bufferLength = 0);
    }
    async digest() {
        const { inner: e, outer: t } = this;
        if (e && t) {
            if (this.finished) throw new Error("Attempted to digest an already finished HMAC.");
            this.finished = !0;
            const r = e.digestSync();
            return t.update(r), t.digestSync();
        }
        return this.digestSync();
    }
    reset() {
        this.state = Int32Array.from(A), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0;
    }
    digestSync() {
        const e = this.state.slice(), t = this.buffer.slice();
        let r = this.bufferLength;
        const n = 8 * this.bytesHashed, o = new DataView(t.buffer, t.byteOffset, t.byteLength);
        if (o.setUint8(r++, 128), (r - 1) % T >= 56) {
            for(let e = r; e < T; ++e)o.setUint8(e, 0);
            this.hashBufferWith(e, t), r = 0;
        }
        for(let e = r; e < 56; ++e)o.setUint8(e, 0);
        o.setUint32(56, Math.floor(n / 4294967296), !1), o.setUint32(60, n, !1), this.hashBufferWith(e, t);
        const s = new Uint8Array(32);
        for(let t = 0; t < 8; ++t)s[4 * t] = e[t] >>> 24 & 255, s[4 * t + 1] = e[t] >>> 16 & 255, s[4 * t + 2] = e[t] >>> 8 & 255, s[4 * t + 3] = e[t] >>> 0 & 255;
        return s;
    }
    static normalizeKey(e) {
        const t = s(e);
        if (t.byteLength > T) {
            const e = new I;
            e.update(t);
            const r = e.digestSync(), n = new Uint8Array(T);
            return n.set(r), n;
        }
        if (t.byteLength < T) {
            const e = new Uint8Array(T);
            return e.set(t), e;
        }
        return t;
    }
    hashBuffer() {
        this.hashBufferWith(this.state, this.buffer);
    }
    hashBufferWith(e, t) {
        const r = this.w ??= new Int32Array(64);
        let n = e[0], o = e[1], s = e[2], i = e[3], a = e[4], l = e[5], c = e[6], u = e[7];
        for(let e = 0; e < T; ++e){
            if (e < 16) r[e] = (255 & t[4 * e]) << 24 | (255 & t[4 * e + 1]) << 16 | (255 & t[4 * e + 2]) << 8 | 255 & t[4 * e + 3];
            else {
                let t = r[e - 2];
                const n = (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
                t = r[e - 15];
                const o = (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
                r[e] = (n + r[e - 7] | 0) + (o + r[e - 16] | 0);
            }
            const d = (((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & l ^ ~a & c) | 0) + (u + (P[e] + r[e] | 0) | 0) | 0, p = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & o ^ n & s ^ o & s) | 0;
            u = c, c = l, l = a, a = i + d | 0, i = s, s = o, o = n, n = d + p | 0;
        }
        e[0] += n, e[1] += o, e[2] += s, e[3] += i, e[4] += a, e[5] += l, e[6] += c, e[7] += u;
    }
}
const A = new Int32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
]), P = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
]), M = (()=>{
    try {
        return a("sha256"), !0;
    } catch  {
        return !1;
    }
})() ? class {
    digestLength = 32;
    secret;
    hash;
    isHmac;
    finished = !1;
    constructor(e){
        this.secret = e, this.isHmac = !!e, this.hash = this.createHash();
    }
    update(e) {
        if (this.finished) throw new Error("Attempted to update an already finished hash.");
        this.hash.update(e);
    }
    async digest() {
        let e;
        return this.isHmac ? (this.finished = !0, e = this.hash.digest()) : e = this.hash.copy().digest(), new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    reset() {
        this.hash = this.createHash(), this.finished = !1;
    }
    createHash() {
        return this.secret ? l("sha256", "string" == typeof (e = this.secret) ? e : ArrayBuffer.isView(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength) : Buffer.from(e)) : a("sha256");
        var e;
    }
} : I;
const { digest: R, sign: O, importKey: D } = globalThis?.crypto?.subtle ?? {}, N = "function" == typeof R && "function" == typeof O && "function" == typeof D ? globalThis.crypto.subtle : void 0;
exports.Crc32 = k, exports.Crc32Js = S, exports.Crc32Node = k, exports.Md5 = w, exports.Md5Js = h, exports.Md5Node = w, exports.Sha256 = M, exports.Sha256Js = I, exports.Sha256Node = M, exports.Sha256WebCrypto = class {
    digestLength = 32;
    secret;
    pending = [];
    pendingBytes = 0;
    fallback;
    finished = !1;
    constructor(e){
        e && (this.secret = s(e));
    }
    update(e) {
        if (this.finished) throw new Error("Attempted to update an already finished HMAC.");
        this.fallback ? this.fallback.update(e) : (this.pending.push(e.slice()), this.pendingBytes += e.byteLength, this.pendingBytes >= 8388608 && this.switchToFallback());
    }
    async digest() {
        if (this.fallback) return this.fallback.digest();
        if (this.secret && this.finished) throw new Error("Attempted to digest an already finished HMAC.");
        const e = i(this.pending);
        if (N) {
            if (this.secret) {
                this.finished = !0;
                const t = await N.importKey("raw", this.secret, {
                    name: "HMAC",
                    hash: "SHA-256"
                }, !1, [
                    "sign"
                ]), r = await N.sign("HMAC", t, e);
                return new Uint8Array(r);
            }
            const t = await N.digest("SHA-256", e);
            return new Uint8Array(t);
        }
        const t = new I(this.secret);
        return t.update(e), t.digest();
    }
    reset() {
        this.pending = [], this.pendingBytes = 0, this.fallback = void 0, this.finished = !1;
    }
    switchToFallback() {
        const e = new I(this.secret);
        for (const t of this.pending)e.update(t);
        this.fallback = e, this.pending = [], this.pendingBytes = 0;
    }
}, exports.blobHasher = async function(e, t) {
    const r = new e;
    return await u(t, (e)=>{
        r.update(e);
    }), r.digest();
}, exports.blobReader = u, exports.fileStreamHasher = (e, t)=>new Promise((r, o)=>{
        if (!p(t)) return void o(new Error("Unable to calculate hash for non-file streams."));
        const s = n(t.path, {
            start: t.start,
            end: t.end
        }), i = new e, a = new d(i);
        s.pipe(a), s.on("error", (e)=>{
            a.end(), o(e);
        }), a.on("error", o), a.on("finish", function() {
            i.digest().then(r).catch(o);
        });
    }), exports.readableStreamHasher = (e, t)=>{
    if (null !== t.readableFlowing) throw new Error("Unable to calculate hash for flowing readable stream");
    const r = new e, n = new d(r);
    return t.pipe(n), new Promise((e, o)=>{
        t.on("error", (e)=>{
            n.end(), o(e);
        }), n.on("error", o), n.on("finish", ()=>{
            r.digest().then(e).catch(o);
        });
    });
};
