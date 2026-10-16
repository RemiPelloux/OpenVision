const { createReadStream: n } = require("./module-73024.js"), { Writable: s } = require("./module-57075.js"), { toUint8Array: o, concatBytes: i } = require("./module-96851.js"), { createHash: a, createHmac: c } = require("./module-77598.js"), l = require("./module-38522.js");
async function u(e, t, r = 1048576) {
    const n = e.size;
    let s = 0;
    for(; s < n;){
        const o = e.slice(s, Math.min(n, s + r));
        t(new Uint8Array(await o.arrayBuffer())), s += o.size;
    }
}
class d extends s {
    hash;
    constructor(e, t){
        super(t), this.hash = e;
    }
    _write(e, t, r) {
        try {
            this.hash.update(o(e));
        } catch (e) {
            return r(e);
        }
        r();
    }
}
const p = (e)=>"string" == typeof e.path;
class m {
    digestLength = 16;
    state = Uint32Array.from(h);
    writeBuffer = new DataView(new ArrayBuffer(64));
    bufferLength = 0;
    bytesHashed = 0;
    update(e) {
        const t = o(e);
        let r = 0, n = t.byteLength;
        for(this.bytesHashed += n; n > 0;)this.writeBuffer.setUint8(this.bufferLength++, t[r++]), --n, 64 === this.bufferLength && (w(this.state, this.writeBuffer), this.bufferLength = 0);
    }
    async digest() {
        const e = Uint32Array.from(this.state), t = new DataView(this.writeBuffer.buffer.slice(0));
        let r = this.bufferLength;
        const n = 8 * this.bytesHashed;
        if (t.setUint8(r++, 128), this.bufferLength % 64 >= 56) {
            for(let e = r; e < 64; ++e)t.setUint8(e, 0);
            w(e, t), r = 0;
        }
        for(let e = r; e < 56; ++e)t.setUint8(e, 0);
        t.setUint32(56, n >>> 0, !0), t.setUint32(60, Math.floor(n / 2 ** 32), !0), w(e, t);
        const s = new Uint8Array(16), o = new DataView(s.buffer);
        for(let t = 0; t < 4; ++t)o.setUint32(4 * t, e[t], !0);
        return s;
    }
    reset() {
        this.state.set(h), this.writeBuffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0;
    }
}
const h = [
    1732584193,
    4023233417,
    2562383102,
    271733878
], f = 4294967295, g = Uint8Array.of(7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21), y = Array.from({
    length: 64
}, (e, t)=>Math.abs(Math.sin(t + 1)) * 2 ** 32 >>> 0);
function w(e, t) {
    let r = e[0], n = e[1], s = e[2], o = e[3];
    for(let e = 0; e < 64; ++e){
        let i, a;
        e < 16 ? (i = n & s | ~n & o, a = e) : e < 32 ? (i = o & n | s & ~o, a = (5 * e + 1) % 16) : e < 48 ? (i = n ^ s ^ o, a = (3 * e + 5) % 16) : (i = s ^ (n | ~o), a = 7 * e % 16);
        const c = t.getUint32(4 * a, !0), l = o;
        o = s, s = n;
        const u = g[4 * (e >> 4) + (3 & e)], d = (r + i & f) + (c + y[e] & f) & f;
        n = n + ((d << u | d >>> 32 - u) >>> 0) & f, r = l;
    }
    e[0] = e[0] + r & f, e[1] = e[1] + n & f, e[2] = e[2] + s & f, e[3] = e[3] + o & f;
}
const v = (()=>{
    try {
        return a("md5"), !0;
    } catch  {
        return !1;
    }
})() ? class {
    digestLength = 16;
    hash = a("md5");
    update(e) {
        this.hash.update(o(e));
    }
    async digest() {
        const e = this.hash.copy().digest();
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    reset() {
        this.hash = a("md5");
    }
} : m;
const _ = new Uint32Array(256);
for(let e = 0; e < 256; ++e){
    let t = e;
    for(let e = 0; e < 8; ++e)t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
    _[e] = t >>> 0;
}
const b = 4294967295;
class S {
    digestLength = 4;
    checksum = b;
    update(e) {
        for(let t = 0; t < e.length; ++t)this.checksum = this.checksum >>> 8 ^ _[255 & (this.checksum ^ e[t])];
    }
    digestSync() {
        return (this.checksum ^ b) >>> 0;
    }
    async digest() {
        const e = this.digestSync(), t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !1), t;
    }
    reset() {
        this.checksum = b;
    }
}
const k = "function" == typeof l.crc32 ? l.crc32 : void 0, x = k ? (E = k, class {
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
const I = 64, T = 2 ** 53 - 1;
class C {
    digestLength = 32;
    state = Int32Array.from(P);
    w;
    buffer = new Uint8Array(64);
    bufferLength = 0;
    bytesHashed = 0;
    finished = !1;
    inner;
    outer;
    constructor(e){
        if (e) {
            const t = C.normalizeKey(e);
            this.inner = new C, this.outer = new C;
            const { inner: r, outer: n } = this, s = new Uint8Array(128);
            for(let e = 0; e < I; ++e)s[e] = 54 ^ t[e], s[e + I] = 92 ^ t[e];
            r.update(s.subarray(0, I)), n.update(s.subarray(I));
        }
    }
    update(e) {
        if (this.finished) throw new Error("Attempted to update an already finished HMAC.");
        if (this.inner) return void this.inner.update(e);
        const t = o(e);
        let r = 0, { byteLength: n } = t;
        if (this.bytesHashed += n, 8 * this.bytesHashed > T) throw new Error("Cannot hash more than 2^53 - 1 bits");
        for(; n > 0;)this.buffer[this.bufferLength++] = t[r++], n--, this.bufferLength === I && (this.hashBuffer(), this.bufferLength = 0);
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
        this.state = Int32Array.from(P), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0;
    }
    digestSync() {
        const e = this.state.slice(), t = this.buffer.slice();
        let r = this.bufferLength;
        const n = 8 * this.bytesHashed, s = new DataView(t.buffer, t.byteOffset, t.byteLength);
        if (s.setUint8(r++, 128), (r - 1) % I >= 56) {
            for(let e = r; e < I; ++e)s.setUint8(e, 0);
            this.hashBufferWith(e, t), r = 0;
        }
        for(let e = r; e < 56; ++e)s.setUint8(e, 0);
        s.setUint32(56, Math.floor(n / 4294967296), !1), s.setUint32(60, n, !1), this.hashBufferWith(e, t);
        const o = new Uint8Array(32);
        for(let t = 0; t < 8; ++t)o[4 * t] = e[t] >>> 24 & 255, o[4 * t + 1] = e[t] >>> 16 & 255, o[4 * t + 2] = e[t] >>> 8 & 255, o[4 * t + 3] = e[t] >>> 0 & 255;
        return o;
    }
    static normalizeKey(e) {
        const t = o(e);
        if (t.byteLength > I) {
            const e = new C;
            e.update(t);
            const r = e.digestSync(), n = new Uint8Array(I);
            return n.set(r), n;
        }
        if (t.byteLength < I) {
            const e = new Uint8Array(I);
            return e.set(t), e;
        }
        return t;
    }
    hashBuffer() {
        this.hashBufferWith(this.state, this.buffer);
    }
    hashBufferWith(e, t) {
        const r = this.w ??= new Int32Array(64);
        let n = e[0], s = e[1], o = e[2], i = e[3], a = e[4], c = e[5], l = e[6], u = e[7];
        for(let e = 0; e < I; ++e){
            if (e < 16) r[e] = (255 & t[4 * e]) << 24 | (255 & t[4 * e + 1]) << 16 | (255 & t[4 * e + 2]) << 8 | 255 & t[4 * e + 3];
            else {
                let t = r[e - 2];
                const n = (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
                t = r[e - 15];
                const s = (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
                r[e] = (n + r[e - 7] | 0) + (s + r[e - 16] | 0);
            }
            const d = (((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & c ^ ~a & l) | 0) + (u + (A[e] + r[e] | 0) | 0) | 0, p = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & s ^ n & o ^ s & o) | 0;
            u = l, l = c, c = a, a = i + d | 0, i = o, o = s, s = n, n = d + p | 0;
        }
        e[0] += n, e[1] += s, e[2] += o, e[3] += i, e[4] += a, e[5] += c, e[6] += l, e[7] += u;
    }
}
const P = new Int32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
]), A = new Int32Array([
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
]), R = (()=>{
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
        return this.secret ? c("sha256", "string" == typeof (e = this.secret) ? e : ArrayBuffer.isView(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength) : Buffer.from(e)) : a("sha256");
        var e;
    }
} : C;
const { digest: M, sign: J, importKey: O } = globalThis?.crypto?.subtle ?? {}, B = "function" == typeof M && "function" == typeof J && "function" == typeof O ? globalThis.crypto.subtle : void 0;
exports.Crc32 = x, exports.Crc32Js = S, exports.Crc32Node = x, exports.Md5 = v, exports.Md5Js = m, exports.Md5Node = v, exports.Sha256 = R, exports.Sha256Js = C, exports.Sha256Node = R, exports.Sha256WebCrypto = class {
    digestLength = 32;
    secret;
    pending = [];
    pendingBytes = 0;
    fallback;
    finished = !1;
    constructor(e){
        e && (this.secret = o(e));
    }
    update(e) {
        if (this.finished) throw new Error("Attempted to update an already finished HMAC.");
        this.fallback ? this.fallback.update(e) : (this.pending.push(e.slice()), this.pendingBytes += e.byteLength, this.pendingBytes >= 8388608 && this.switchToFallback());
    }
    async digest() {
        if (this.fallback) return this.fallback.digest();
        if (this.secret && this.finished) throw new Error("Attempted to digest an already finished HMAC.");
        const e = i(this.pending);
        if (B) {
            if (this.secret) {
                this.finished = !0;
                const t = await B.importKey("raw", this.secret, {
                    name: "HMAC",
                    hash: "SHA-256"
                }, !1, [
                    "sign"
                ]), r = await B.sign("HMAC", t, e);
                return new Uint8Array(r);
            }
            const t = await B.digest("SHA-256", e);
            return new Uint8Array(t);
        }
        const t = new C(this.secret);
        return t.update(e), t.digest();
    }
    reset() {
        this.pending = [], this.pendingBytes = 0, this.fallback = void 0, this.finished = !1;
    }
    switchToFallback() {
        const e = new C(this.secret);
        for (const t of this.pending)e.update(t);
        this.fallback = e, this.pending = [], this.pendingBytes = 0;
    }
}, exports.blobHasher = async function(e, t) {
    const r = new e;
    return await u(t, (e)=>{
        r.update(e);
    }), r.digest();
}, exports.blobReader = u, exports.fileStreamHasher = (e, t)=>new Promise((r, s)=>{
        if (!p(t)) return void s(new Error("Unable to calculate hash for non-file streams."));
        const o = n(t.path, {
            start: t.start,
            end: t.end
        }), i = new e, a = new d(i);
        o.pipe(a), o.on("error", (e)=>{
            a.end(), s(e);
        }), a.on("error", s), a.on("finish", function() {
            i.digest().then(r).catch(s);
        });
    }), exports.readableStreamHasher = (e, t)=>{
    if (null !== t.readableFlowing) throw new Error("Unable to calculate hash for flowing readable stream");
    const r = new e, n = new d(r);
    return t.pipe(n), new Promise((e, s)=>{
        t.on("error", (e)=>{
            n.end(), s(e);
        }), n.on("error", s), n.on("finish", ()=>{
            r.digest().then(e).catch(s);
        });
    });
};
