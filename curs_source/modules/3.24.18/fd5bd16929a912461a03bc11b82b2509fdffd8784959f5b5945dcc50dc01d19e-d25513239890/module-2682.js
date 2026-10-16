const { nv: n, NumericValue: s, calculateBodyLength: i, generateIdempotencyToken: o, fromBase64: a, _parseEpochTimestamp: c } = require(96851), { hasOwn: l, getSmithyContext: u } = require(11255), { HttpRequest: d, collectBody: h, SerdeContext: f, RpcProtocol: p } = require(73931), { NormalizedSchema: g, deref: m, TypeRegistry: y } = require(93353), w = 20, S = 21, b = 22, E = 25, v = 26, x = 27, T = 31;
function A(e) {
    return "undefined" != typeof Buffer ? Buffer.alloc(e) : new Uint8Array(e);
}
const N = Symbol("@smithy/core/cbor::tagSymbol");
function C(e) {
    return e[N] = !0, e;
}
const _ = "undefined" != typeof Buffer, R = new TextDecoder;
let I = A(0), D = !1, k = new DataView(I.buffer, I.byteOffset, I.byteLength), O = 0;
function M(e, t) {
    if (e >= t) throw new Error("unexpected end of (decode) payload.");
    const r = (224 & I[e]) >> 5, s = 31 & I[e];
    if (31 === s && 2 <= r && r <= 5) return function(e, t) {
        const r = (224 & I[e]) >> 5, n = 31 & I[e];
        if (n === T) switch(r){
            case 3:
                return function(e, t) {
                    const r = [];
                    for(const n = e += 1; e < t;){
                        if (255 === I[e]) {
                            const t = A(r.length);
                            return t.set(r, 0), O = e - n + 2, _ ? t.toString("utf-8", 0, t.length) : R.decode(t);
                        }
                        const s = (224 & I[e]) >> 5, i = 31 & I[e];
                        if (3 !== s && H(s), i === T) throw new Error("nested indefinite string.");
                        const o = U(e, t);
                        e += O;
                        for(let e = 0; e < o.length; ++e)r.push(o[e]);
                    }
                    throw new Error("expected break marker.");
                }(e, t);
            case 5:
                return function(e, t) {
                    e += 1;
                    const r = e, n = {};
                    for(; e < t;){
                        if (255 === I[e]) return O = e - r + 2, n;
                        const s = P(e, t);
                        e += O, n[s] = M(e, t), e += O;
                    }
                    throw new Error("expected break marker.");
                }(e, t);
            case 4:
                return function(e, t) {
                    const r = [];
                    for(const n = e += 1; e < t;){
                        if (255 === I[e]) return O = e - n + 2, r;
                        r.push(M(e, t)), e += O;
                    }
                    throw new Error("expected break marker.");
                }(e, t);
            case 2:
                return function(e, t) {
                    const r = [];
                    for(const n = e += 1; e < t;){
                        if (255 === I[e]) {
                            const t = A(r.length);
                            return t.set(r, 0), O = e - n + 2, t;
                        }
                        const s = (224 & I[e]) >> 5, i = 31 & I[e];
                        if (2 !== s && H(s), i === T) throw new Error("nested indefinite string.");
                        const o = U(e, t);
                        e += O;
                        for(let e = 0; e < o.length; ++e)r.push(o[e]);
                    }
                    throw new Error("expected break marker.");
                }(e, t);
        }
    }(e, t);
    switch(r){
        case 0:
        case 1:
        case 6:
            {
                let i, o;
                if (s < 24) i = s, o = 1;
                else switch(s){
                    case 24:
                        t - e < 2 && z(1), i = I[e + 1], o = 2;
                        break;
                    case E:
                        t - e < 3 && z(2), i = k.getUint16(e + 1), o = 3;
                        break;
                    case v:
                        t - e < 5 && z(4), i = k.getUint32(e + 1), o = 5;
                        break;
                    case x:
                        t - e < 9 && z(8);
                        {
                            const t = k.getUint32(e + 1);
                            i = t < 2097152 ? 4294967296 * t + k.getUint32(e + 5) : k.getBigUint64(e + 1);
                        }
                        o = 9;
                        break;
                    default:
                        V(s);
                }
                if (0 === r) return O = o, F(i);
                if (1 === r) {
                    let e;
                    return e = "bigint" == typeof i ? BigInt(-1) - i : -1 - i, O = o, F(e);
                }
                return function(e, t, r, s, i) {
                    if (2 === r || 3 === r) {
                        const n = B(e + i, t);
                        let s = BigInt(0);
                        const o = e + i + O;
                        for(let e = o; e < o + n; ++e)s = s << BigInt(8) | BigInt(I[e]);
                        return O = i + O + n, 3 === r ? -s - BigInt(1) : s;
                    }
                    if (4 === r) {
                        const r = M(e + i, t), [s, o] = r, a = BigInt(o < 0 ? -1 : 1) * BigInt(o), c = String(a), l = o < 0 ? "-" : "";
                        let u;
                        if ("number" == typeof s && Math.abs(s) <= 2 ** 28) {
                            const e = s, t = "0".repeat(Math.abs(e) + 1) + c;
                            u = 0 === e ? t : t.slice(0, t.length + e) + "." + t.slice(e), u = u.replace(/^0+/g, ""), "" === u && (u = "0"), "." === u[0] && (u = "0" + u), u = l + u;
                        } else {
                            const e = BigInt(s);
                            if (1 === c.length) u = l + c + "e" + String(e);
                            else {
                                const t = e + BigInt(c.length - 1);
                                u = l + c[0] + "." + c.slice(1) + "e" + String(t);
                            }
                        }
                        return O = i + O, n(u);
                    }
                    {
                        const r = M(e + i, t);
                        return O = i + O, C({
                            tag: F(s),
                            value: r
                        });
                    }
                }(e, t, s, i, o);
            }
        case 3:
            return P(e, t);
        case 5:
            return function(e, t) {
                const r = B(e, t);
                if (r < 25) return function(e, t, r) {
                    const n = O;
                    e += n;
                    const s = e, i = {};
                    for(let n = 0; n < r; ++n){
                        const r = P(e, t);
                        e += O, i[r] = M(e, t), e += O;
                    }
                    return O = n + (e - s), i;
                }(e, t, r);
                return function(e, t, r) {
                    const n = O;
                    e += n;
                    const s = e, i = Object.create(null);
                    for(let n = 0; n < r; ++n){
                        const r = P(e, t), n = (224 & I[e += O]) >> 5;
                        i[r] = 3 === n ? P(e, t) : M(e, t), e += O;
                    }
                    return O = n + (e - s), Object.setPrototypeOf(i, Object.prototype), i;
                }(e, t, r);
            }(e, t);
        case 4:
            return function(e, t) {
                const r = B(e, t), n = O;
                e += n;
                const s = e, i = Array(r);
                for(let n = 0; n < r; ++n)i[n] = M(e, t), e += O;
                return O = n + (e - s), i;
            }(e, t);
        case 2:
            return U(e, t);
        default:
            return function(e, t) {
                const r = 31 & I[e];
                switch(r){
                    case S:
                    case w:
                        return O = 1, r === S;
                    case b:
                    case 23:
                        return O = 1, null;
                    case E:
                        if (t - e < 3) throw new Error("incomplete float16 at end of buf.");
                        return O = 3, function(e, t) {
                            const r = (124 & e) >> 2, n = (3 & e) << 8 | t, s = e >> 7 ? -1 : 1;
                            if (0 === r) return 0 === n ? 0 : s * (Math.pow(2, -14) * (n / 1024));
                            if (31 === r) return 0 === n ? s * (1 / 0) : NaN;
                            return s * (Math.pow(2, r - 15) * (1 + n / 1024));
                        }(I[e + 1], I[e + 2]);
                    case v:
                        if (t - e < 5) throw new Error("incomplete float32 at end of buf.");
                        return O = 5, k.getFloat32(e + 1);
                    case x:
                        if (t - e < 9) throw new Error("incomplete float64 at end of buf.");
                        return O = 9, k.getFloat64(e + 1);
                    default:
                        V(r);
                }
            }(e, t);
    }
}
function P(e, t) {
    const r = B(e, t), n = O;
    return t - (e += n) < r && z(r), O = n + r, r < 24 ? function(e, t) {
        let r = t;
        for(let n = 0; n < t; ++n)r = 31 * r + I[e + n] | 0;
        const n = r >>> 0 & 2047, s = $[n];
        if (void 0 !== s && s.length === t) {
            let r = !0;
            for(let n = 0; n < t; ++n)if (s.charCodeAt(n) !== I[e + n]) {
                r = !1;
                break;
            }
            if (r) return j[n] = L, s;
        }
        const i = D ? I.toString("utf-8", e, e + t) : R.decode(I.subarray(e, e + t));
        j[n] !== L && ($[n] = i, j[n] = L);
        return i;
    }(e, r) : D ? I.toString("utf-8", e, e + r) : R.decode(I.subarray(e, e + r));
}
const $ = new Array(2048), j = new Uint16Array(2048);
let L = 0;
function U(e, t) {
    const r = B(e, t), n = O;
    t - (e += n) < r && z(r);
    const s = I.subarray(e, e + r);
    return O = n + r, s;
}
function B(e, t) {
    const r = 31 & I[e];
    if (r < 24) return O = 1, r;
    switch(r){
        case 24:
            return t - e < 2 && z(1), O = 2, I[e + 1];
        case E:
            return t - e < 3 && z(2), O = 3, k.getUint16(e + 1);
        case v:
            return t - e < 5 && z(4), O = 5, k.getUint32(e + 1);
        case x:
            return t - e < 9 && z(8), O = 9, function(e) {
                const t = Number(e);
                (t < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < t) && console.warn(new Error(`@smithy/core/cbor - truncating BigInt(${e}) to ${t} with loss of precision.`));
                return t;
            }(k.getBigUint64(e + 1));
        default:
            V(r);
    }
}
function F(e) {
    if ("number" == typeof e) return e;
    const t = Number(e);
    return Number.MIN_SAFE_INTEGER <= t && t <= Number.MAX_SAFE_INTEGER ? t : e;
}
function z(e) {
    throw new Error(`length ${e} greater than remaining buf len.`);
}
function V(e) {
    throw new Error(`unexpected minor value ${e}.`);
}
function H(e) {
    throw new Error(`unexpected major type ${e} in indefinite string.`);
}
const q = "undefined" != typeof Buffer, W = new Map;
let G = 0, Q = !1;
let X = A(2048), K = new DataView(X.buffer, X.byteOffset, X.byteLength), J = 0;
function Y() {
    const e = A(J);
    return e.set(X.subarray(0, J), 0), J = 0, e;
}
function Z(e) {
    const t = X;
    X = A(e), t && (t.copy ? t.copy(X, 0, 0, t.byteLength) : X.set(t, 0)), K = new DataView(X.buffer, X.byteOffset, X.byteLength);
}
function ee(e) {
    const t = W.get(e);
    if (void 0 !== t) return X.set(t.bytes, J), J += t.bytes.length, void (t.epoch = G);
    const r = J;
    ne(3, Buffer.byteLength(e)), J += X.write(e, J);
    const n = Uint8Array.prototype.slice.call(X, r, J);
    if (W.size >= 2048) {
        if (Q) return;
        let e = 0;
        for (const [t, r] of W){
            if (e >= 1024) break;
            r.epoch !== G && (W.delete(t), e++);
        }
        if (0 === e) return void (Q = !0);
    }
    W.size < 2048 && W.set(e, {
        epoch: G,
        bytes: n
    });
}
function te(e) {
    X.byteLength - J < e && Z(J < 16e6 ? Math.max(4 * X.byteLength, X.byteLength + e) : X.byteLength + e + 16e6);
}
function re(e, t) {
    t < 24 ? X[J++] = e << 5 | t : t < 256 ? (X[J++] = e << 5 | 24, X[J++] = t) : t < 65536 ? (X[J++] = e << 5 | E, K.setUint16(J, t), J += 2) : t < 4294967296 ? (X[J++] = e << 5 | v, K.setUint32(J, t), J += 4) : (X[J++] = e << 5 | x, K.setBigUint64(J, "bigint" == typeof t ? t : BigInt(t)), J += 8);
}
function ne(e, t) {
    if (t < 24) X[J++] = e << 5 | t;
    else if (t < 256) X[J++] = e << 5 | 24, X[J++] = t;
    else if (t < 65536) X[J++] = e << 5 | E, X[J++] = t >> 8, X[J++] = 255 & t;
    else if (t < 4294967296) X[J++] = e << 5 | v, K.setUint32(J, t), J += 4;
    else {
        X[J++] = e << 5 | x;
        const r = t / 4294967296 | 0, n = t - 4294967296 * r | 0;
        K.setUint32(J, r), K.setUint32(J + 4, n), J += 8;
    }
}
const se = {
    deserialize: (e)=>(L = L + 1 & 65535, I = e, D = _ && I instanceof Buffer, k = new DataView(I.buffer, I.byteOffset, I.byteLength), M(0, e.length)),
    serialize (e) {
        G = G + 1 & 65535, Q = !1;
        try {
            return function(e) {
                const t = [
                    e
                ];
                for(; t.length;){
                    const e = t.pop();
                    if ("string" == typeof e) {
                        const t = e.length;
                        if (q) te(3 * t + 9), t > 23 ? (re(3, Buffer.byteLength(e)), J += X.write(e, J)) : ee(e);
                        else {
                            te(3 * t + 9);
                            const r = J, n = (new TextEncoder).encodeInto(e, X.subarray(J + 9)).written;
                            let s;
                            s = n < 24 ? 1 : n < 256 ? 2 : n < 65536 ? 3 : n < 4294967296 ? 5 : 9, s < 9 && X.copyWithin(r + s, r + 9, r + 9 + n), J = r, ne(3, n), J += n;
                        }
                        continue;
                    }
                    if (X.byteLength - J < 9 && te(64), "number" != typeof e) {
                        if ("bigint" == typeof e) {
                            const t = e >= 0, r = t ? 0 : 1, n = t ? e : -e - BigInt(1);
                            if (n < BigInt("18446744073709551616")) {
                                const e = Number(n);
                                e < 4294967296 ? ne(r, e) : (X[J++] = r << 5 | x, K.setBigUint64(J, n), J += 8);
                            } else {
                                const e = n.toString(2), r = new Uint8Array(Math.ceil(e.length / 8));
                                let s = n, i = 0;
                                for(; r.byteLength - ++i >= 0;)r[r.byteLength - i] = Number(s & BigInt(255)), s >>= BigInt(8);
                                te(2 * r.byteLength + 16), X[J++] = t ? 194 : 195, re(2, r.byteLength), X.set(r, J), J += r.byteLength;
                            }
                            continue;
                        }
                        if (null !== e) if ("boolean" != typeof e) {
                            if (void 0 === e) throw new Error("@smithy/core/cbor: client may not serialize undefined value.");
                            if (Array.isArray(e)) {
                                ne(4, e.length), te(9 * e.length + 64);
                                for(let r = e.length - 1; r >= 0; --r)t.push(e[r]);
                            } else {
                                if ("number" != typeof e.byteLength) {
                                    if ("object" == typeof e) {
                                        if (e instanceof s) {
                                            let r = e.string, n = BigInt(0);
                                            const s = r.search(/[eE]/);
                                            -1 !== s && (n = BigInt(r.slice(s + 1)), r = r.slice(0, s));
                                            const i = r.indexOf("."), o = -1 === i ? 0 : r.length - i - 1, a = n - BigInt(o), c = BigInt(r.replace(".", ""));
                                            X[J++] = 196, ne(4, 2), t.push(c), t.push(a >= -0x20000000000000n && a <= 0x1fffffffffffffn ? Number(a) : a);
                                            continue;
                                        }
                                        if (e[N]) {
                                            if ("tag" in e && "value" in e) {
                                                t.push(e.value), re(6, e.tag);
                                                continue;
                                            }
                                            throw new Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(e));
                                        }
                                        const r = Object.keys(e), n = r.length;
                                        ne(5, n);
                                        for(let s = n - 1; s >= 0; --s)t.push(e[r[s]]), t.push(r[s]);
                                        continue;
                                    }
                                    throw new Error(`data type ${e?.constructor?.name ?? typeof e} not compatible for encoding.`);
                                }
                                te(2 * e.length + 9), ne(2, e.length), X.set(e, J), J += e.byteLength;
                            }
                        } else X[J++] = 224 | (e ? S : w);
                        else X[J++] = 246;
                    } else {
                        if (Number.isInteger(e) && e >= -9007199254740992 && e <= 9007199254740991) {
                            const t = e >= 0, r = t ? 0 : 1, n = t ? e : -e - 1;
                            if (n < 24) X[J++] = r << 5 | n;
                            else if (n < 256) X[J++] = r << 5 | 24, X[J++] = n;
                            else if (n < 65536) X[J++] = r << 5 | E, X[J++] = n >> 8, X[J++] = 255 & n;
                            else if (n < 4294967296) X[J++] = r << 5 | v, K.setUint32(J, n), J += 4;
                            else {
                                X[J++] = r << 5 | x;
                                const e = n / 4294967296 | 0, t = n - 4294967296 * e | 0;
                                K.setUint32(J, e), K.setUint32(J + 4, t), J += 8;
                            }
                            continue;
                        }
                        X[J++] = 251, K.setFloat64(J, e), J += 8;
                    }
                }
            }(e), Y();
        } catch (e) {
            throw Y(), e;
        }
    },
    resizeEncodingBuffer (e) {
        Z(e);
    }
}, ie = (e, t)=>h(e, t).then(async (e)=>{
        if (e.length) try {
            return se.deserialize(e);
        } catch (r) {
            throw Object.defineProperty(r, "$responseBodyText", {
                value: t.utf8Encoder(e)
            }), r;
        }
        return {};
    }), oe = (e)=>C({
        tag: 1,
        value: e.getTime() / 1e3
    }), ae = (e, t)=>{
    const r = (e)=>{
        let t = e;
        return "number" == typeof t && (t = t.toString()), t.indexOf(",") >= 0 && (t = t.split(",")[0]), t.indexOf(":") >= 0 && (t = t.split(":")[0]), t.indexOf("#") >= 0 && (t = t.split("#")[1]), t;
    };
    if (void 0 !== t.__type) return r(t.__type);
    let n;
    for(const e in t)if (l(t, e) && "code" === e.toLowerCase()) {
        n = e;
        break;
    }
    return n && void 0 !== t[n] ? r(t[n]) : void 0;
};
class ce extends f {
    write(e, t) {
        ye = 0;
        xe(g.of(e), t, void 0, this.serdeContext);
    }
    flush() {
        const e = ge.subarray(0, ye);
        return ye = 0, ge = ve(pe), me = new DataView(ge.buffer, ge.byteOffset, ge.byteLength), e;
    }
}
const le = Symbol.for("@smithy/cbor-struct-cache");
function ue(e) {
    const t = e.getSchema(), r = t[le];
    if (r) return r;
    const n = [], s = [];
    for (const [t, r] of e.structIterator())n.push(t), s.push(r);
    const i = new Array(n.length);
    for(let e = 0; e < n.length; ++e)i[e] = de(n[e]);
    const o = {
        memberNames: n,
        memberSchemas: s,
        encodedKeys: i
    };
    return t[le] = o, o;
}
function de(e) {
    let t;
    t = he ? Buffer.from(e, "utf-8") : (new TextEncoder).encode(e);
    const r = t.length;
    let n;
    n = r < 24 ? 1 : r < 256 ? 2 : 3;
    const s = new Uint8Array(n + r);
    return 1 === n ? s[0] = 96 | r : 2 === n ? (s[0] = 120, s[1] = r) : (s[0] = 121, s[1] = r >> 8, s[2] = 255 & r), s.set(t, n), s;
}
const he = "undefined" != typeof Buffer, fe = new TextEncoder, pe = 2048;
let ge = he ? Buffer.allocUnsafe(pe) : new Uint8Array(pe), me = new DataView(ge.buffer, ge.byteOffset, ge.byteLength), ye = 0;
const we = 2048, Se = new Map;
let be = 0, Ee = !1;
function ve(e) {
    return he ? Buffer.allocUnsafe(e) : new Uint8Array(e);
}
function xe(e, t, r, n) {
    if (null == t) return void 0 === t && e.isIdempotencyToken() ? void Ie(o()) : (Ce(1), void (ge[ye++] = 246));
    if (e.isUnitSchema()) return Ce(1), void _e(5, 0);
    if ("object" == typeof t) {
        if (e.isBlobSchema() && t instanceof Uint8Array) return void Pe(t);
        if (e.isTimestampSchema() && t instanceof Date) return void Le(t);
        if (e.isStructSchema()) return void function(e, t, r) {
            if (e.isUnionSchema()) {
                let n = !1;
                for (const [s, i] of e.structIterator()){
                    const o = t[s];
                    if (null != o) {
                        Ce(9), _e(5, 1), Ie(s), xe(i, o, e, r), n = !0;
                        break;
                    }
                }
                if (!n) {
                    const { $unknown: e } = t;
                    Array.isArray(e) ? (Ce(9), _e(5, 1), Ie(e[0]), Ne(e[1])) : (Ce(9), _e(5, 0));
                }
                return;
            }
            const n = ue(e), { memberNames: s, memberSchemas: i, encodedKeys: o } = n, a = s.length;
            let c;
            c = a < 24 ? 1 : a < 256 ? 2 : 3;
            Ce(c);
            const u = ye;
            ye += c;
            let d = 0;
            for(let n = 0; n < a; ++n){
                const a = t[s[n]];
                if (null == a && !i[n].isIdempotencyToken()) continue;
                const c = o[n];
                Ce(c.length), ge.set(c, ye), ye += c.length, xe(i[n], a, e, r), ++d;
            }
            if ("string" == typeof t.__type) for(const e in t)l(t, e) && (s.includes(e) || (Ie(e), Ne(t[e]), ++d));
            1 === c ? ge[u] = 160 | d : 2 === c ? (ge[u] = 184, ge[u + 1] = d) : (ge[u] = 185, ge[u + 1] = d >> 8, ge[u + 2] = 255 & d);
        }(e, t, n);
        if (Array.isArray(t) && (e.isListSchema() || e.isDocumentSchema())) return void Te(e, t, e.isDocumentSchema(), n);
        if (e.isMapSchema()) return void Ae(e, t, !1, n);
        if (t instanceof Date) return void Le(t);
        if (t instanceof Uint8Array) return void Pe(t);
        if (t instanceof s) return void je(t);
        if (t[N]) {
            const e = t;
            return void $e(e.tag, e.value);
        }
        return e.isDocumentSchema() ? void (Array.isArray(t) ? Te(e, t, !0, n) : Ae(e, t, !0, n)) : e.isBigDecimalSchema() ? void Ne(t) : void Ae(e, t, !0, n);
    }
    if ("string" != typeof t) return "number" == typeof t ? (Ce(9), void (Number.isInteger(t) && t >= -9007199254740992 && t <= 9007199254740991 ? Oe(t) : ke(t))) : "boolean" == typeof t ? (Ce(1), void (ge[ye++] = 224 | (t ? S : w))) : void ("bigint" != typeof t ? Ie(String(t)) : Me(t));
    if (e.isBlobSchema()) {
        return void Pe((n?.base64Decoder ?? a)(t));
    }
    Ie(t);
}
function Te(e, t, r, n) {
    const s = !!e.getMergedTraits().sparse, i = e.getValueSchema();
    if (r || s) {
        const e = [];
        for(let n = 0; n < t.length; ++n){
            const i = t[n];
            r ? void 0 !== i && e.push(i) : (null != i || s) && e.push(i);
        }
        Ce(9), _e(4, e.length);
        for(let t = 0; t < e.length; ++t)xe(i, e[t], 0, n);
    } else {
        let e = 0;
        for(let r = 0; r < t.length; ++r)null != t[r] && ++e;
        Ce(9), _e(4, e);
        for(let e = 0; e < t.length; ++e)null != t[e] && xe(i, t[e], 0, n);
    }
}
function Ae(e, t, r, n) {
    const s = !!e.getMergedTraits().sparse, i = e.getValueSchema(), o = [];
    for(const e in t){
        if (!l(t, e)) continue;
        const n = t[e];
        (r ? void 0 !== n : null != n || s) && o.push(e);
    }
    Ce(9), _e(5, o.length);
    for(let e = 0; e < o.length; ++e){
        const r = o[e];
        Ie(r), xe(i, t[r], 0, n);
    }
}
function Ne(e) {
    if (null == e) return Ce(1), void (ge[ye++] = 246);
    if ("string" != typeof e) {
        if ("number" == typeof e) return Ce(9), void (Number.isInteger(e) && e >= -9007199254740992 && e <= 9007199254740991 ? Oe(e) : ke(e));
        if ("boolean" == typeof e) return Ce(1), void (ge[ye++] = 224 | (e ? S : w));
        if ("bigint" != typeof e) if (e instanceof Uint8Array) Pe(e);
        else if (e instanceof Date) Le(e);
        else if (e instanceof s) je(e);
        else {
            if (e[N]) {
                const t = e;
                return void $e(t.tag, t.value);
            }
            if (Array.isArray(e)) {
                Ce(9), _e(4, e.length);
                for(let t = 0; t < e.length; ++t)Ne(e[t]);
            } else {
                if ("object" == typeof e) {
                    const t = Object.keys(e);
                    Ce(9), _e(5, t.length);
                    for(let r = 0; r < t.length; ++r)Ie(t[r]), Ne(e[t[r]]);
                    return;
                }
                Ie(String(e));
            }
        }
        else Me(e);
    } else Ie(e);
}
function Ce(e) {
    if (ye + e > ge.length) {
        let t = 2 * ge.length;
        for(; t < ye + e;)t *= 2;
        const r = ve(t);
        r.set(ge.subarray(0, ye)), ge = r, me = new DataView(r.buffer, r.byteOffset, r.byteLength);
    }
}
function _e(e, t) {
    if (t < 24) ge[ye++] = e << 5 | t;
    else if (t < 256) ge[ye++] = e << 5 | 24, ge[ye++] = t;
    else if (t < 65536) ge[ye++] = e << 5 | E, ge[ye++] = t >> 8, ge[ye++] = 255 & t;
    else if (t < 4294967296) ge[ye++] = e << 5 | v, me.setUint32(ye, t), ye += 4;
    else {
        ge[ye++] = e << 5 | x;
        const r = t / 4294967296 | 0, n = t - 4294967296 * r | 0;
        me.setUint32(ye, r), me.setUint32(ye + 4, n), ye += 8;
    }
}
function Re(e, t) {
    const r = Number(t);
    r < 4294967296 ? _e(e, r) : (ge[ye++] = e << 5 | x, me.setBigUint64(ye, t), ye += 8);
}
function Ie(e) {
    const t = e.length;
    if (t <= 23) {
        const r = Se.get(e);
        if (r) return Ce(r.bytes.length), ge.set(r.bytes, ye), ye += r.bytes.length, void (r.epoch = be);
        const n = ye;
        De(e, t);
        const s = ye, i = Uint8Array.prototype.slice.call(ge, n, s);
        if (Se.size >= we) {
            if (Ee) return;
            let e = 0;
            for (const [t, r] of Se){
                if (e >= 1024) break;
                r.epoch !== be && (Se.delete(t), ++e);
            }
            if (0 === e) return void (Ee = !0);
        }
        return void (Se.size < we && Se.set(e, {
            epoch: be,
            bytes: i
        }));
    }
    De(e, t);
}
function De(e, t) {
    if (he) {
        Ce(3 * t + 9);
        _e(3, Buffer.byteLength(e)), ye += ge.write(e, ye);
    } else {
        Ce(3 * t + 9);
        const r = ye, n = fe.encodeInto(e, ge.subarray(r + 9)).written;
        let s;
        s = n < 24 ? 1 : n < 256 ? 2 : n < 65536 ? 3 : n < 4294967296 ? 5 : 9, s < 9 && ge.copyWithin(r + s, r + 9, r + 9 + n), ye = r, _e(3, n), ye += n;
    }
}
function ke(e) {
    Ce(9), ge[ye++] = 251, me.setFloat64(ye, e), ye += 8;
}
function Oe(e) {
    Ce(9);
    const t = e >= 0;
    _e(t ? 0 : 1, t ? e : -e - 1);
}
function Me(e) {
    const t = e >= 0, r = t ? 0 : 1, n = t ? e : -e - BigInt(1);
    if (n < BigInt("18446744073709551616")) Ce(9), Re(r, n);
    else {
        const e = n.toString(2), r = Math.ceil(e.length / 8), s = new Uint8Array(r);
        let i = n;
        for(let e = r - 1; e >= 0; --e)s[e] = Number(i & BigInt(255)), i >>= BigInt(8);
        Ce(r + 16), ge[ye++] = t ? 194 : 195, _e(2, r), ge.set(s, ye), ye += r;
    }
}
function Pe(e) {
    Ce(e.length + 9), _e(2, e.length), ge.set(e, ye), ye += e.length;
}
function $e(e, t) {
    Ce(9), "bigint" == typeof e ? Re(6, e) : _e(6, e), Ne(t);
}
function je(e) {
    let t = e.string, r = BigInt(0);
    const n = t.search(/[eE]/);
    -1 !== n && (r = BigInt(t.slice(n + 1)), t = t.slice(0, n));
    const s = t.indexOf("."), i = -1 === s ? 0 : t.length - s - 1, o = r - BigInt(i), a = BigInt(t.replace(".", ""));
    Ce(9), ge[ye++] = 196, _e(4, 2), Ce(9), o >= -0x20000000000000n && o <= 0x1fffffffffffffn ? Oe(Number(o)) : Me(o), Me(a);
}
function Le(e) {
    Ce(18), _e(6, 1);
    const t = e.getTime() / 1e3;
    Number.isInteger(t) ? Oe(t) : ke(t);
}
class Ue extends f {
    read(e, t) {
        return ze = t, Ve = Be && t instanceof Buffer, He = new DataView(t.buffer, t.byteOffset, t.byteLength), qe = 0, We = t.length, Ke = Ke + 1 & 65535, Je(g.of(e));
    }
    readValue(e, t) {
        return ot(g.of(e), t);
    }
}
const Be = "undefined" != typeof Buffer, Fe = new TextDecoder;
let ze = new Uint8Array(0), Ve = !1, He = new DataView(new ArrayBuffer(0)), qe = 0, We = 0;
const Ge = 2048, Qe = new Array(Ge), Xe = new Uint16Array(Ge);
let Ke = 0;
function Je(e) {
    if (qe >= We) throw new Error("unexpected end of CBOR payload.");
    const t = (224 & ze[qe]) >> 5;
    if ((31 & ze[qe]) === T && t >= 2 && t <= 5) return function(e, t) {
        switch(t){
            case 3:
                return function() {
                    qe += 1;
                    const e = [];
                    let t = 0;
                    for(; qe < We;){
                        if (255 === ze[qe]) {
                            qe += 1;
                            const r = new Uint8Array(t);
                            let n = 0;
                            for(let t = 0; t < e.length; ++t)r.set(e[t], n), n += e[t].length;
                            return Be ? Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("utf-8") : Fe.decode(r);
                        }
                        const r = rt();
                        e.push(r), t += r.length;
                    }
                    throw new Error("expected break marker.");
                }();
            case 2:
                return function() {
                    qe += 1;
                    const e = [];
                    let t = 0;
                    for(; qe < We;){
                        if (255 === ze[qe]) {
                            qe += 1;
                            const r = new Uint8Array(t);
                            let n = 0;
                            for(let t = 0; t < e.length; ++t)r.set(e[t], n), n += e[t].length;
                            return r;
                        }
                        const r = rt();
                        e.push(r), t += r.length;
                    }
                    throw new Error("expected break marker.");
                }();
            case 4:
                return function(e) {
                    qe += 1;
                    const t = e.isListSchema() ? e.getValueSchema() : e, r = [];
                    for(; qe < We;){
                        if (255 === ze[qe]) return qe += 1, r;
                        r.push(Je(t));
                    }
                    throw new Error("expected break marker.");
                }(e);
            case 5:
                return function(e) {
                    if (qe += 1, e.isStructSchema()) {
                        const t = ue(e), { memberSchemas: r, encodedKeys: n, memberNames: s } = t, i = n.length, o = e.isUnionSchema(), a = {};
                        let c, u, d = 0, h = 0;
                        for(; qe < We;){
                            if (255 === ze[qe]) {
                                if (qe += 1, o) {
                                    let e = !0;
                                    for(const t in a)if (l(a, t)) {
                                        e = !1;
                                        break;
                                    }
                                    e && 1 === d && (a.$unknown = [
                                        c,
                                        u
                                    ]);
                                }
                                return a;
                            }
                            const e = Ye(n, i, h);
                            if (e >= 0) {
                                h = e + 1, h >= i && (h = 0);
                                const t = Je(r[e]);
                                null != t && (a[s[e]] = t);
                            } else {
                                const e = nt(), t = Je(g.of(15));
                                "__type" !== e && (c = e, u = t, ++d);
                            }
                        }
                        throw new Error("expected break marker.");
                    }
                    const t = e.isMapSchema() ? e.getValueSchema() : e, r = {};
                    for(; qe < We;){
                        if (255 === ze[qe]) return qe += 1, r;
                        r[nt()] = Je(t);
                    }
                    throw new Error("expected break marker.");
                }(e);
            default:
                throw new Error(`unexpected indefinite length for major ${t}.`);
        }
    }(e, t);
    switch(t){
        case 0:
            return st(et());
        case 1:
            return function() {
                const e = et();
                if ("bigint" == typeof e) return BigInt(-1) - e;
                return -1 - e;
            }();
        case 2:
            return rt();
        case 3:
            return nt();
        case 4:
            return function(e) {
                const t = tt(), r = e.isListSchema() ? e.getValueSchema() : e, n = Array(t);
                for(let e = 0; e < t; ++e)n[e] = Je(r);
                return n;
            }(e);
        case 5:
            return function(e) {
                const t = tt();
                if (e.isStructSchema()) {
                    return function(e, t, r) {
                        const n = e.isUnionSchema(), s = ue(e), { memberSchemas: i, encodedKeys: o, memberNames: a } = s, c = o.length, u = {};
                        let d, h, f = 0, p = !1, m = 0;
                        for(let e = 0; e < t; ++e){
                            const e = Ye(o, c, m);
                            if (e >= 0) {
                                m = e + 1, m >= c && (m = 0);
                                const t = Je(i[e]);
                                null != t && (u[a[e]] = t);
                            } else {
                                const e = nt(), t = Je(g.of(15));
                                "__type" === e && "string" == typeof t ? p = !0 : (d = e, h = t, ++f);
                            }
                        }
                        if (n) {
                            let e = !0;
                            for(const t in u)if (l(u, t)) {
                                e = !1;
                                break;
                            }
                            e && 1 === f && (u.$unknown = [
                                d,
                                h
                            ]);
                        } else if (p) {
                            qe = r;
                            const e = g.of(15);
                            for(let r = 0; r < t; ++r){
                                const t = nt(), r = Je(e);
                                t in u || (u[t] = r);
                            }
                        }
                        return u;
                    }(e, t, qe);
                }
                const r = e.isMapSchema() ? e.getValueSchema() : e, n = {};
                for(let e = 0; e < t; ++e){
                    n[nt()] = Je(r);
                }
                return n;
            }(e);
        case 6:
            return function() {
                const e = et(), t = "bigint" == typeof e ? Number(e) : e;
                if (1 === t) {
                    const e = Je(g.of(15));
                    return c(e);
                }
                if (2 === t || 3 === t) {
                    const e = rt();
                    let r = BigInt(0);
                    for(let t = 0; t < e.length; ++t)r = r << BigInt(8) | BigInt(e[t]);
                    return 3 === t ? -r - BigInt(1) : r;
                }
                if (4 === t) {
                    const e = Je(g.of(15)), [t, r] = e, s = BigInt(r < 0 ? -1 : 1) * BigInt(r), i = String(s), o = r < 0 ? "-" : "";
                    let a;
                    if ("number" == typeof t && Math.abs(t) <= 2 ** 28) {
                        const e = t, r = "0".repeat(Math.abs(e) + 1) + i;
                        a = 0 === e ? r : r.slice(0, r.length + e) + "." + r.slice(e), a = a.replace(/^0+/g, ""), "" === a && (a = "0"), "." === a[0] && (a = "0" + a), a = o + a;
                    } else {
                        const e = BigInt(t);
                        if (1 === i.length) a = o + i + "e" + String(e);
                        else {
                            const t = e + BigInt(i.length - 1);
                            a = o + i[0] + "." + i.slice(1) + "e" + String(t);
                        }
                    }
                    return n(a);
                }
                const r = Je(g.of(15));
                return {
                    tag: st(e),
                    value: r
                };
            }();
        case 7:
            return function() {
                const e = qe, t = 31 & ze[e];
                switch(t){
                    case S:
                        return qe = e + 1, !0;
                    case w:
                        return qe = e + 1, !1;
                    case b:
                    case 23:
                        return qe = e + 1, null;
                    case E:
                        return We - e < 3 && it(2), qe = e + 3, function(e, t) {
                            const r = (124 & e) >> 2, n = (3 & e) << 8 | t, s = e >> 7 ? -1 : 1;
                            if (0 === r) return 0 === n ? 0 : s * (Math.pow(2, -14) * (n / 1024));
                            if (31 === r) return 0 === n ? s * (1 / 0) : NaN;
                            return s * (Math.pow(2, r - 15) * (1 + n / 1024));
                        }(ze[e + 1], ze[e + 2]);
                    case v:
                        return We - e < 5 && it(4), qe = e + 5, He.getFloat32(e + 1);
                    case x:
                        return We - e < 9 && it(8), qe = e + 9, He.getFloat64(e + 1);
                    default:
                        throw new Error(`unexpected minor value ${t} for major 7.`);
                }
            }();
        default:
            throw new Error(`unexpected CBOR major type ${t}.`);
    }
}
function Ye(e, t, r) {
    const n = e[r];
    if (qe + n.length <= We && Ze(qe, n)) return qe += n.length, r;
    for(let n = 0; n < t; ++n){
        if (n === r) continue;
        const t = e[n];
        if (qe + t.length <= We && Ze(qe, t)) return qe += t.length, n;
    }
    return -1;
}
function Ze(e, t) {
    const r = t.length;
    if (ze[e] !== t[0]) return !1;
    for(let n = 1; n < r; ++n)if (ze[e + n] !== t[n]) return !1;
    return !0;
}
function et() {
    const e = 31 & ze[qe];
    if (e < 24) return qe += 1, e;
    switch(e){
        case 24:
            return We - qe < 2 && it(1), qe += 2, ze[qe - 1];
        case E:
            return We - qe < 3 && it(2), qe += 3, He.getUint16(qe - 2);
        case v:
            return We - qe < 5 && it(4), qe += 5, He.getUint32(qe - 4);
        case x:
            {
                We - qe < 9 && it(8), qe += 9;
                const e = He.getUint32(qe - 8);
                return e < 2097152 ? 4294967296 * e + He.getUint32(qe - 4) : He.getBigUint64(qe - 8);
            }
        default:
            throw new Error(`unexpected minor value ${e}.`);
    }
}
function tt() {
    const e = et();
    return "bigint" == typeof e ? Number(e) : e;
}
function rt() {
    const e = tt();
    We - qe < e && it(e);
    const t = qe;
    return qe += e, ze.subarray(t, t + e);
}
function nt() {
    const e = tt();
    We - qe < e && it(e);
    const t = qe;
    return qe += e, e < 24 ? function(e, t) {
        let r = t;
        for(let n = 0; n < t; ++n)r = 31 * r + ze[e + n] | 0;
        const n = r >>> 0 & Ge - 1, s = Qe[n];
        if (void 0 !== s && s.length === t) {
            let r = !0;
            for(let n = 0; n < t; ++n)if (s.charCodeAt(n) !== ze[e + n]) {
                r = !1;
                break;
            }
            if (r) return Xe[n] = Ke, s;
        }
        const i = Ve ? ze.toString("utf-8", e, e + t) : Fe.decode(ze.subarray(e, e + t));
        Xe[n] !== Ke && (Qe[n] = i, Xe[n] = Ke);
        return i;
    }(t, e) : Ve ? ze.toString("utf-8", t, t + e) : Fe.decode(ze.subarray(t, t + e));
}
function st(e) {
    if ("number" == typeof e) return e;
    const t = Number(e);
    return Number.MIN_SAFE_INTEGER <= t && t <= Number.MAX_SAFE_INTEGER ? t : e;
}
function it(e) {
    throw new Error(`CBOR: length ${e} greater than remaining buffer length.`);
}
function ot(e, t) {
    if (e.isTimestampSchema()) {
        if ("number" == typeof t) return c(t);
        if ("object" == typeof t && null !== t && 1 === t.tag && "value" in t) return c(t.value);
    }
    if (e.isBlobSchema()) return t;
    if (void 0 === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "bigint" == typeof t || "symbol" == typeof t) return t;
    if ("object" != typeof t || null === t) return t;
    if ("byteLength" in t) return t;
    if (t instanceof Date) return t;
    if (t instanceof s) return t;
    if (e.isDocumentSchema()) return t;
    if (e.isListSchema()) {
        const r = e.getValueSchema(), n = [];
        for (const e of t)n.push(ot(r, e));
        return n;
    }
    const r = {};
    if (e.isMapSchema()) {
        const n = e.getValueSchema();
        for(const e in t)l(t, e) && (r[e] = ot(n, t[e]));
    } else if (e.isStructSchema()) {
        const n = e.isUnionSchema();
        let s;
        if (n) {
            s = new Set;
            for(const e in t)l(t, e) && "__type" !== e && s.add(e);
        }
        for (const [i, o] of e.structIterator())n && s.delete(i), null != t[i] && (r[i] = ot(o, t[i]));
        if (n && 1 === s?.size) {
            let e = !0;
            for(const t in r)if (l(r, t)) {
                e = !1;
                break;
            }
            if (e) {
                const e = s.values().next().value;
                r.$unknown = [
                    e,
                    t[e]
                ];
            }
        } else if ("string" == typeof t.__type) for(const e in t)l(t, e) && (e in r || (r[e] = t[e]));
    }
    return r;
}
class at extends f {
    createSerializer() {
        const e = new ce;
        return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
        const e = new Ue;
        return e.setSerdeContext(this.serdeContext), e;
    }
}
exports.CborCodec = at, exports.CborShapeDeserializer = class extends f {
    read(e, t) {
        const r = se.deserialize(t);
        return this.readValue(e, r);
    }
    readValue(e, t) {
        const r = g.of(e);
        if (r.isTimestampSchema()) {
            if ("number" == typeof t) return c(t);
            if ("object" == typeof t && 1 === t.tag && "value" in t) return c(t.value);
        }
        if (r.isBlobSchema()) return "string" == typeof t ? (this.serdeContext?.base64Decoder ?? a)(t) : t;
        if (void 0 === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "bigint" == typeof t || "symbol" == typeof t) return t;
        if ("object" == typeof t) {
            if (null === t) return null;
            if ("byteLength" in t) return t;
            if (t instanceof Date) return t;
            if (r.isDocumentSchema()) return t;
            if (r.isListSchema()) {
                const e = [], n = r.getValueSchema();
                for (const r of t){
                    const t = this.readValue(n, r);
                    e.push(t);
                }
                return e;
            }
            const e = {};
            if (r.isMapSchema()) {
                const n = r.getValueSchema();
                for(const r in t){
                    if (!l(t, r)) continue;
                    const s = this.readValue(n, t[r]);
                    e[r] = s;
                }
            } else if (r.isStructSchema()) {
                const n = r.isUnionSchema();
                let s;
                if (n) {
                    s = new Set;
                    for(const e in t)l(t, e) && "__type" !== e && s.add(e);
                }
                for (const [i, o] of r.structIterator())n && s.delete(i), null != t[i] && (e[i] = this.readValue(o, t[i]));
                if (n && 1 === s?.size) {
                    let r = !0;
                    for(const t in e)if (l(e, t)) {
                        r = !1;
                        break;
                    }
                    if (r) {
                        const r = s.values().next().value;
                        e.$unknown = [
                            r,
                            t[r]
                        ];
                    }
                } else if ("string" == typeof t.__type) for(const r in t)l(t, r) && (r in e || (e[r] = t[r]));
            } else if (t instanceof s) return t;
            return e;
        }
        return t;
    }
}, exports.CborShapeDeserializer2 = Ue, exports.CborShapeSerializer = class extends f {
    value;
    write(e, t) {
        this.value = this.serialize(e, t);
    }
    serialize(e, t) {
        const r = g.of(e);
        if (null == t) return r.isIdempotencyToken() ? o() : t;
        if (r.isBlobSchema()) return "string" == typeof t ? (this.serdeContext?.base64Decoder ?? a)(t) : t;
        if (r.isTimestampSchema()) return oe("number" == typeof t || "bigint" == typeof t ? new Date(Number(t) / 1e3 | 0) : t);
        if ("function" == typeof t || "object" == typeof t) {
            const e = t;
            if (r.isListSchema() && Array.isArray(e)) {
                const t = !!r.getMergedTraits().sparse, n = [];
                let s = 0;
                for (const i of e){
                    const e = this.serialize(r.getValueSchema(), i);
                    (null != e || t) && (n[s++] = e);
                }
                return n;
            }
            if (e instanceof Date) return oe(e);
            const n = {};
            if (r.isMapSchema()) {
                const t = !!r.getMergedTraits().sparse;
                for(const s in e){
                    if (!l(e, s)) continue;
                    const i = this.serialize(r.getValueSchema(), e[s]);
                    (null != i || t) && (n[s] = i);
                }
            } else if (r.isStructSchema()) {
                for (const [t, s] of r.structIterator()){
                    const r = this.serialize(s, e[t]);
                    null != r && (n[t] = r);
                }
                if (r.isUnionSchema() && Array.isArray(e.$unknown)) {
                    const [t, r] = e.$unknown;
                    n[t] = r;
                } else if ("string" == typeof e.__type) for(const t in e)l(e, t) && (t in n || (n[t] = this.serialize(15, e[t])));
            } else if (r.isDocumentSchema()) {
                if (Array.isArray(e)) {
                    const t = [];
                    let n = 0;
                    for (const s of e)t[n++] = this.serialize(r.getValueSchema(), s);
                    return t;
                }
                for(const t in e)l(e, t) && (n[t] = this.serialize(r.getValueSchema(), e[t]));
            } else if (r.isBigDecimalSchema()) return e;
            return n;
        }
        return t;
    }
    flush() {
        const e = se.serialize(this.value);
        return this.value = void 0, e;
    }
}, exports.CborShapeSerializer2 = ce, exports.SmithyRpcV2CborProtocol = class extends p {
    codec = new at;
    serializer = this.codec.createSerializer();
    deserializer = this.codec.createDeserializer();
    constructor({ defaultNamespace: e, errorTypeRegistries: t }){
        super({
            defaultNamespace: e,
            errorTypeRegistries: t
        });
    }
    getShapeId() {
        return "smithy.protocols#rpcv2Cbor";
    }
    getPayloadCodec() {
        return this.codec;
    }
    async serializeRequest(e, t, r) {
        const n = await super.serializeRequest(e, t, r);
        Object.assign(n.headers, {
            "content-type": this.getDefaultContentType(),
            "smithy-protocol": "rpc-v2-cbor",
            accept: this.getDefaultContentType()
        }), "unit" === m(e.input) ? (delete n.body, delete n.headers["content-type"]) : (n.body || (this.serializer.write(15, {}), n.body = this.serializer.flush()), n.body instanceof Uint8Array && (n.headers["content-length"] = String(n.body.byteLength)));
        const { service: s, operation: i } = u(r), o = `/service/${s}/operation/${i}`;
        return n.path.endsWith("/") ? n.path += o.slice(1) : n.path += o, n;
    }
    async deserializeResponse(e, t, r) {
        return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, n, s) {
        const i = ae(0, n) ?? "Unknown", o = {
            $metadata: s,
            $fault: r.statusCode <= 500 ? "client" : "server"
        };
        let a = this.options.defaultNamespace;
        i.includes("#") && ([a] = i.split("#"));
        const c = this.compositeErrorRegistry, l = y.for(a);
        let u;
        c.copyFrom(l);
        try {
            u = c.getSchema(i);
        } catch (e) {
            n.Message && (n.message = n.Message);
            const t = y.for("smithy.ts.sdk.synthetic." + a);
            c.copyFrom(t);
            const r = c.getBaseException();
            if (r) {
                const e = c.getErrorCtor(r);
                throw Object.assign(new e({
                    name: i
                }), o, n);
            }
            throw Object.assign(new Error(i), o, n);
        }
        const d = g.of(u), h = c.getErrorCtor(u), f = n.message ?? n.Message ?? "Unknown", p = new h({}), m = {};
        for (const [e, t] of d.structIterator())m[e] = this.deserializer.readValue(t, n[e]);
        throw Object.assign(p, o, {
            $fault: d.getMergedTraits().error,
            message: f
        }, m);
    }
    getDefaultContentType() {
        return "application/cbor";
    }
}, exports.buildHttpRpcRequest = async (e, t, r, n, s)=>{
    const o = await e.endpoint(), { hostname: a, protocol: c = "https", port: u, path: h } = o, f = {
        protocol: c,
        hostname: a,
        port: u,
        method: "POST",
        path: h.endsWith("/") ? h.slice(0, -1) + r : h + r,
        headers: {
            ...t
        }
    };
    if (void 0 !== n && (f.hostname = n), o.headers) for(const e in o.headers)l(o.headers, e) && (f.headers[e] = o.headers[e]);
    if (void 0 !== s) {
        f.body = s;
        try {
            f.headers["content-length"] = String(i(s));
        } catch (e) {}
    }
    return new d(f);
}, exports.cbor = se, exports.checkCborResponse = (e)=>{
    if ("rpc-v2-cbor" !== String(e.headers["smithy-protocol"]).toLowerCase()) throw new Error("Malformed RPCv2 CBOR response, status: " + e.statusCode);
}, exports.dateToTag = oe, exports.loadSmithyRpcV2CborErrorCode = ae, exports.parseCborBody = ie, exports.parseCborErrorBody = async (e, t)=>{
    const r = await ie(e, t);
    return r.message = r.message ?? r.Message, r;
}, exports.tag = C, exports.tagSymbol = N;
