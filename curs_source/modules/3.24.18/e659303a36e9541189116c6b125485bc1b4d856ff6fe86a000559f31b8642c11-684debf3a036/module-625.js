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
}), exports.VSBuffer = void 0, exports.withVSBufferDecodeContext = function(e, t) {
    const n = m;
    m = e;
    try {
        return t();
    } finally{
        m = n;
    }
}, exports.getCurrentVSBufferDecodeContext = function() {
    return m;
}, exports.setOversizeVSBufferDecodeThreshold = function(e) {
    _ = e;
}, exports.setOversizeVSBufferDecodeHandler = function(e) {
    d = e;
}, exports.setLargeVSBufferAllocationThreshold = function(e) {
    v = e;
}, exports.setLargeVSBufferAllocationHandler = function(e) {
    g = e;
}, exports.binaryIndexOf = y, exports.readUInt16LE = function(e, t) {
    return (e[t + 0] | 0) >>> 0 | e[t + 1] << 8 >>> 0;
}, exports.writeUInt16LE = function(e, t, n) {
    e[n + 0] = 255 & t, t >>>= 8, e[n + 1] = 255 & t;
}, exports.readUInt32BE = N, exports.writeUInt32BE = R, exports.readUInt32LE = C, exports.writeUInt32LE = x, exports.readUInt8 = S, exports.writeUInt8 = D, exports.readableToBuffer = function(e) {
    return u.consumeReadable(e, (e)=>w.concat(e));
}, exports.bufferToReadable = function(e) {
    return u.toReadable(e);
}, exports.streamToBuffer = A, exports.bufferedStreamToBuffer = async function(e) {
    if (e.ended) return w.concat(e.buffer);
    return w.concat([
        ...e.buffer,
        await A(e.stream)
    ]);
}, exports.bufferToStream = function(e) {
    return u.toStream(e, (e)=>w.concat(e));
}, exports.streamToBufferReadableStream = function(e) {
    return u.transform(e, {
        data: (e)=>"string" == typeof e ? w.fromString(e) : w.wrap(e)
    }, (e)=>w.concat(e));
}, exports.newWriteableBufferStream = function(e) {
    return u.newWriteableStream((e)=>w.concat(e), e);
}, exports.prefixedBufferReadable = function(e, t) {
    return u.prefixedReadable(e, t, (e)=>w.concat(e));
}, exports.prefixedBufferStream = function(e, t) {
    return u.prefixedStream(e, t, (e)=>w.concat(e));
}, exports.decodeBase64 = M, exports.decodeJwt = function(e) {
    const t = M(e.split(".")[1]);
    return JSON.parse(t.toString());
}, exports.encodeBase64 = function({ buffer: e }, t = !0, n = !1) {
    const i = e.toBase64;
    if ("function" == typeof i) return i.call(e, {
        alphabet: n ? "base64url" : "base64",
        omitPadding: !t
    });
    const r = n ? P : O;
    let s = "";
    const o = e.byteLength % 3;
    let a = 0;
    for(; a < e.byteLength - o; a += 3){
        const t = e[a + 0], n = e[a + 1], i = e[a + 2];
        s += r[t >>> 2], s += r[63 & (t << 4 | n >>> 4)], s += r[63 & (n << 2 | i >>> 6)], s += r[63 & i];
    }
    if (1 === o) {
        const n = e[a + 0];
        s += r[n >>> 2], s += r[n << 4 & 63], t && (s += "==");
    } else if (2 === o) {
        const n = e[a + 0], i = e[a + 1];
        s += r[n >>> 2], s += r[63 & (n << 4 | i >>> 4)], s += r[i << 2 & 63], t && (s += "=");
    }
    return s;
};
const a = require("./module-349.js"), u = o(require("./module-247.js")), l = "undefined" != typeof Buffer, h = new a.Lazy(()=>new Uint8Array(256));
let c, f;
let d, g, m, p = null, b = !1, L = !1, _ = 1 / 0, v = 1 / 0;
function E(e, t) {
    if (g && e.byteLength >= v) try {
        g({
            buffer: e,
            byteLength: e.byteLength,
            source: t
        });
    } catch  {}
}
class w {
    static alloc(e) {
        let t;
        return t = new w(l ? Buffer.allocUnsafe(e) : new Uint8Array(e)), E(t, "alloc"), t;
    }
    static wrap(e) {
        l && !Buffer.isBuffer(e) && (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength));
        const t = new w(e);
        return E(t, "wrap"), t;
    }
    static fromString(e, t) {
        return !(t?.dontUseNodeBuffer || !1) && l ? new w(Buffer.from(e)) : (c || (c = new TextEncoder), new w(c.encode(e)));
    }
    static withPooledString(e, t) {
        if (l) return t(w.fromString(e));
        if (b) return L || (L = !0, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), t(w.fromString(e));
        const n = 3 * e.length;
        if (n > 524288) return t(w.fromString(e));
        if (c || (c = new TextEncoder), !p || p.byteLength < n) {
            let e = p ? 2 * p.byteLength : 16384;
            for(; e < n;)e *= 2;
            p = new Uint8Array(e);
        }
        const i = c.encodeInto(e, p).written;
        b = !0;
        try {
            return t(new w(p.subarray(0, i)));
        } finally{
            b = !1;
        }
    }
    static fromByteArray(e) {
        const t = w.alloc(e.length);
        for(let n = 0, i = e.length; n < i; n++)t.buffer[n] = e[n];
        return t;
    }
    static concat(e, t) {
        if (void 0 === t) {
            t = 0;
            for(let n = 0, i = e.length; n < i; n++)t += e[n].byteLength;
        }
        const n = w.alloc(t);
        let i = 0;
        for(let t = 0, r = e.length; t < r; t++){
            const r = e[t];
            n.set(r, i), i += r.byteLength;
        }
        return n;
    }
    constructor(e){
        this.buffer = e, this.byteLength = this.buffer.byteLength;
    }
    clone() {
        const e = w.alloc(this.byteLength);
        return e.set(this), e;
    }
    toString() {
        if (l) return this.buffer.toString();
        if (d && this.buffer.byteLength > _) try {
            d(this.buffer.byteLength);
        } catch  {}
        return f || (f = new TextDecoder), f.decode(this.buffer);
    }
    slice(e, t) {
        return new w(this.buffer.subarray(e, t));
    }
    set(e, t) {
        if (e instanceof w) this.buffer.set(e.buffer, t);
        else if (e instanceof Uint8Array) this.buffer.set(e, t);
        else if (e instanceof ArrayBuffer) this.buffer.set(new Uint8Array(e), t);
        else {
            if (!ArrayBuffer.isView(e)) throw new Error("Unknown argument 'array'");
            this.buffer.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t);
        }
    }
    readUInt32BE(e) {
        return N(this.buffer, e);
    }
    writeUInt32BE(e, t) {
        R(this.buffer, e, t);
    }
    readUInt32LE(e) {
        return C(this.buffer, e);
    }
    writeUInt32LE(e, t) {
        x(this.buffer, e, t);
    }
    readUInt8(e) {
        return S(this.buffer, e);
    }
    writeUInt8(e, t) {
        D(this.buffer, e, t);
    }
    indexOf(e, t = 0) {
        return y(this.buffer, e instanceof w ? e.buffer : e, t);
    }
    equals(e) {
        return this === e || this.byteLength === e.byteLength && this.buffer.every((t, n)=>t === e.buffer[n]);
    }
}
function y(e, t, n = 0) {
    const i = t.byteLength, r = e.byteLength;
    if (0 === i) return 0;
    if (1 === i) return e.indexOf(t[0]);
    if (i > r - n) return -1;
    const s = h.value;
    s.fill(t.length);
    for(let e = 0; e < t.length; e++)s[t[e]] = t.length - e - 1;
    let o = n + t.length - 1, a = o, u = -1;
    for(; o < r;)if (e[o] === t[a]) {
        if (0 === a) {
            u = o;
            break;
        }
        o--, a--;
    } else o += Math.max(t.length - a, s[e[o]]), a = t.length - 1;
    return u;
}
function N(e, t) {
    return e[t] * 2 ** 24 + 65536 * e[t + 1] + 256 * e[t + 2] + e[t + 3];
}
function R(e, t, n) {
    e[n + 3] = t, t >>>= 8, e[n + 2] = t, t >>>= 8, e[n + 1] = t, t >>>= 8, e[n] = t;
}
function C(e, t) {
    return (e[t + 0] | 0) >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function x(e, t, n) {
    e[n + 0] = 255 & t, t >>>= 8, e[n + 1] = 255 & t, t >>>= 8, e[n + 2] = 255 & t, t >>>= 8, e[n + 3] = 255 & t;
}
function S(e, t) {
    return e[t];
}
function D(e, t, n) {
    e[n] = t;
}
function A(e) {
    return u.consumeStream(e, (e)=>1 === e.length ? e[0] : w.concat(e));
}
function M(e) {
    let t = 0, n = 0, i = 0;
    const r = new Uint8Array(Math.floor(e.length / 4 * 3)), s = (e)=>{
        switch(n){
            case 3:
                r[i++] = t | e, n = 0;
                break;
            case 2:
                r[i++] = t | e >>> 2, t = e << 6, n = 3;
                break;
            case 1:
                r[i++] = t | e >>> 4, t = e << 4, n = 2;
                break;
            default:
                t = e << 2, n = 1;
        }
    };
    for(let t = 0; t < e.length; t++){
        const n = e.charCodeAt(t);
        if (n >= 65 && n <= 90) s(n - 65);
        else if (n >= 97 && n <= 122) s(n - 97 + 26);
        else if (n >= 48 && n <= 57) s(n - 48 + 52);
        else if (43 === n || 45 === n) s(62);
        else {
            if (47 !== n && 95 !== n) {
                if (61 === n) break;
                throw new SyntaxError(`Unexpected base64 character ${e[t]}`);
            }
            s(63);
        }
    }
    const o = i;
    for(; n > 0;)s(0);
    return w.wrap(r).slice(0, o);
}
exports.VSBuffer = w;
const O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
