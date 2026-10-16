var i, r = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
    void 0 === i && (i = n);
    var r = Object.getOwnPropertyDescriptor(t, n);
    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
        enumerable: !0,
        get: function() {
            return t[n];
        }
    }), Object.defineProperty(e, i, r);
} : function(e, t, n, i) {
    void 0 === i && (i = n), e[i] = t[n];
}), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), o = this && this.__importStar || (i = function(e) {
    return i = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
    }, i(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var n = i(e), o = 0; o < n.length; o++)"default" !== n[o] && r(t, e, n[o]);
    return s(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StringSHA1 = exports.hashAsync = void 0, exports.hash = function(e) {
    return l(e, 0);
}, exports.doHash = l, exports.numberHash = h, exports.stringHash = c, exports.sha1Hex = async function(e) {
    if (globalThis?.crypto?.subtle) {
        const t = a.VSBuffer.fromString(e, {
            dontUseNodeBuffer: !0
        }).buffer;
        return d(await globalThis.crypto.subtle.digest({
            name: "sha-1"
        }, t));
    }
    {
        const t = new g;
        return t.update(e), t.digest();
    }
}, exports.getSha256Hash = async function(e) {
    const t = (new TextEncoder).encode(e), n = await crypto.subtle.digest("SHA-256", t);
    return d(n);
};
const a = require("./module-625.js"), u = o(require("./module-589.js"));
function l(e, t) {
    switch(typeof e){
        case "object":
            return null === e ? h(349, t) : Array.isArray(e) ? (n = e, i = h(104579, i = t), n.reduce((e, t)=>l(t, e), i)) : function(e, t) {
                return t = h(181387, t), Object.keys(e).sort().reduce((t, n)=>(t = c(n, t), l(e[n], t)), t);
            }(e, t);
        case "string":
            return c(e, t);
        case "boolean":
            return function(e, t) {
                return h(e ? 433 : 863, t);
            }(e, t);
        case "number":
            return h(e, t);
        case "undefined":
            return h(937, t);
        default:
            return h(617, t);
    }
    var n, i;
}
function h(e, t) {
    return (t << 5) - t + e | 0;
}
function c(e, t) {
    t = h(149417, t);
    for(let n = 0, i = e.length; n < i; n++)t = h(e.charCodeAt(n), t);
    return t;
}
function f(e, t, n = 32) {
    const i = n - t;
    return (e << t | (~((1 << i) - 1) & e) >>> i) >>> 0;
}
function d(e, t = 32) {
    return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((e)=>e.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
exports.hashAsync = (e)=>{
    if ("string" == typeof e && e.length < 250) {
        const t = new g;
        return t.update(e), Promise.resolve(t.digest());
    }
    let t;
    return t = "string" == typeof e ? (new TextEncoder).encode(e) : e instanceof a.VSBuffer ? e.buffer : e, crypto.subtle.digest("sha-1", t).then(d);
};
class g {
    static{
        this._bigBlock32 = new DataView(new ArrayBuffer(320));
    }
    constructor(){
        this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
    }
    update(e) {
        const t = e.length;
        if (0 === t) return;
        const n = this._buff;
        let i, r, s = this._buffLen, o = this._leftoverHighSurrogate;
        for(0 !== o ? (i = o, r = -1, o = 0) : (i = e.charCodeAt(0), r = 0);;){
            let a = i;
            if (u.isHighSurrogate(i)) {
                if (!(r + 1 < t)) {
                    o = i;
                    break;
                }
                {
                    const t = e.charCodeAt(r + 1);
                    u.isLowSurrogate(t) ? (r++, a = u.computeCodePoint(i, t)) : a = 65533;
                }
            } else u.isLowSurrogate(i) && (a = 65533);
            if (s = this._push(n, s, a), r++, !(r < t)) break;
            i = e.charCodeAt(r);
        }
        this._buffLen = s, this._leftoverHighSurrogate = o;
    }
    _push(e, t, n) {
        return n < 128 ? e[t++] = n : n < 2048 ? (e[t++] = 192 | (1984 & n) >>> 6, e[t++] = 128 | (63 & n) >>> 0) : n < 65536 ? (e[t++] = 224 | (61440 & n) >>> 12, e[t++] = 128 | (4032 & n) >>> 6, e[t++] = 128 | (63 & n) >>> 0) : (e[t++] = 240 | (1835008 & n) >>> 18, e[t++] = 128 | (258048 & n) >>> 12, e[t++] = 128 | (4032 & n) >>> 6, e[t++] = 128 | (63 & n) >>> 0), t >= 64 && (this._step(), t -= 64, this._totalLen += 64, e[0] = e[64], e[1] = e[65], e[2] = e[66]), t;
    }
    digest() {
        return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), d(this._h0) + d(this._h1) + d(this._h2) + d(this._h3) + d(this._h4);
    }
    _wrapUp() {
        this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
        const e = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1), this._buffDV.setUint32(60, e % 4294967296, !1), this._step();
    }
    _step() {
        const e = g._bigBlock32, t = this._buffDV;
        for(let n = 0; n < 64; n += 4)e.setUint32(n, t.getUint32(n, !1), !1);
        for(let t = 64; t < 320; t += 4)e.setUint32(t, f(e.getUint32(t - 12, !1) ^ e.getUint32(t - 32, !1) ^ e.getUint32(t - 56, !1) ^ e.getUint32(t - 64, !1), 1), !1);
        let n, i, r, s = this._h0, o = this._h1, a = this._h2, u = this._h3, l = this._h4;
        for(let t = 0; t < 80; t++)t < 20 ? (n = o & a | ~o & u, i = 1518500249) : t < 40 ? (n = o ^ a ^ u, i = 1859775393) : t < 60 ? (n = o & a | o & u | a & u, i = 2400959708) : (n = o ^ a ^ u, i = 3395469782), r = f(s, 5) + n + l + i + e.getUint32(4 * t, !1) & 4294967295, l = u, u = a, a = f(o, 30), o = s, s = r;
        this._h0 = this._h0 + s & 4294967295, this._h1 = this._h1 + o & 4294967295, this._h2 = this._h2 + a & 4294967295, this._h3 = this._h3 + u & 4294967295, this._h4 = this._h4 + l & 4294967295;
    }
}
exports.StringSHA1 = g;
