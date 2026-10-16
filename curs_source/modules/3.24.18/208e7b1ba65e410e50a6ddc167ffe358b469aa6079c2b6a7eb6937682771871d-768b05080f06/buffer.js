import { Ci, Xo } from "./lazy.js";
import { Dl } from "./stream.js";
import { h } from "./tslib.es6.js";
function M5(e, t) {
    if (x5 && e.byteLength >= U5) try {
        x5({
            buffer: e,
            byteLength: e.byteLength,
            source: t
        });
    } catch  {}
}
function HUe(e, t, n = 0) {
    const r = t.byteLength, s = e.byteLength;
    if (r === 0) return 0;
    if (r === 1) return e.indexOf(t[0]);
    if (r > s - n) return -1;
    const i = N5.value;
    i.fill(t.length);
    for(let d = 0; d < t.length; d++)i[t[d]] = t.length - d - 1;
    let a = n + t.length - 1, o = a, l = -1;
    for(; a < s;)if (e[a] === t[o]) {
        if (o === 0) {
            l = a;
            break;
        }
        a--, o--;
    } else a += Math.max(t.length - o, i[e[a]]), o = t.length - 1;
    return l;
}
function qUe(e, t) {
    return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function KUe(e, t, n) {
    e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
function zUe(e, t) {
    return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function YUe(e, t, n) {
    e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255, t = t >>> 8, e[n + 2] = t & 255, t = t >>> 8, e[n + 3] = t & 255;
}
function JUe(e, t) {
    return e[t];
}
function XUe(e, t, n) {
    e[n] = t;
}
var Ol, N5, Ll, RR, D5, $a, zv, CR, O5, L5, U5, x5, ae, F5, W5;
export { $a, CR, D5, F5, HUe, JUe, KUe, L5, Ll, M5, N5, O5, Ol, RR, U5, W5, XUe, YUe, ae, qUe, x5, zUe, zv };
var __wakaru_it_initialized = false;
export function it() {
if (__wakaru_it_initialized) return;
__wakaru_it_initialized = true;
"use strict";
h(), Xo(), Dl(), Ol = typeof Buffer < "u", N5 = new Ci(()=>new Uint8Array(256)), D5 = 512 * 1024, $a = null, zv = !1, CR = !1, O5 = 1 / 0, U5 = 1 / 0, ae = class Pr {
    static alloc(t) {
        let n;
        return Ol ? n = new Pr(Buffer.allocUnsafe(t)) : n = new Pr(new Uint8Array(t)), M5(n, "alloc"), n;
    }
    static wrap(t) {
        Ol && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
        const n = new Pr(t);
        return M5(n, "wrap"), n;
    }
    static fromString(t, n) {
        return !(n?.dontUseNodeBuffer || !1) && Ol ? new Pr(Buffer.from(t)) : (Ll || (Ll = new TextEncoder), new Pr(Ll.encode(t)));
    }
    static withPooledString(t, n) {
        if (Ol) return n(Pr.fromString(t));
        if (zv) return CR || (CR = !0, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), n(Pr.fromString(t));
        const r = t.length * 3;
        if (r > D5) return n(Pr.fromString(t));
        if (Ll || (Ll = new TextEncoder), !$a || $a.byteLength < r) {
            let i = $a ? $a.byteLength * 2 : 16384;
            for(; i < r;)i *= 2;
            $a = new Uint8Array(i);
        }
        const s = Ll.encodeInto(t, $a).written;
        zv = !0;
        try {
            return n(new Pr($a.subarray(0, s)));
        } finally{
            zv = !1;
        }
    }
    static fromByteArray(t) {
        const n = Pr.alloc(t.length);
        for(let r = 0, s = t.length; r < s; r++)n.buffer[r] = t[r];
        return n;
    }
    static concat(t, n) {
        if (typeof n > "u") {
            n = 0;
            for(let i = 0, a = t.length; i < a; i++)n += t[i].byteLength;
        }
        const r = Pr.alloc(n);
        let s = 0;
        for(let i = 0, a = t.length; i < a; i++){
            const o = t[i];
            r.set(o, s), s += o.byteLength;
        }
        return r;
    }
    constructor(t){
        this.buffer = t, this.byteLength = this.buffer.byteLength;
    }
    clone() {
        const t = Pr.alloc(this.byteLength);
        return t.set(this), t;
    }
    toString() {
        if (Ol) return this.buffer.toString();
        if (L5 && this.buffer.byteLength > O5) try {
            L5(this.buffer.byteLength);
        } catch  {}
        return RR || (RR = new TextDecoder), RR.decode(this.buffer);
    }
    slice(t, n) {
        return new Pr(this.buffer.subarray(t, n));
    }
    set(t, n) {
        if (t instanceof Pr) this.buffer.set(t.buffer, n);
        else if (t instanceof Uint8Array) this.buffer.set(t, n);
        else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), n);
        else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n);
        else throw new Error("Unknown argument 'array'");
    }
    readUInt32BE(t) {
        return qUe(this.buffer, t);
    }
    writeUInt32BE(t, n) {
        KUe(this.buffer, t, n);
    }
    readUInt32LE(t) {
        return zUe(this.buffer, t);
    }
    writeUInt32LE(t, n) {
        YUe(this.buffer, t, n);
    }
    readUInt8(t) {
        return JUe(this.buffer, t);
    }
    writeUInt8(t, n) {
        XUe(this.buffer, t, n);
    }
    indexOf(t, n = 0) {
        return HUe(this.buffer, t instanceof Pr ? t.buffer : t, n);
    }
    equals(t) {
        return this === t ? !0 : this.byteLength !== t.byteLength ? !1 : this.buffer.every((n, r)=>n === t.buffer[r]);
    }
}, F5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", W5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

}
