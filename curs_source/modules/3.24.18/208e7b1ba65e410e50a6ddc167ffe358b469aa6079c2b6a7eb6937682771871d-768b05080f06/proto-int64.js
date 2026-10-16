import { $i } from "./assert_2.js";
import { vn } from "./field.js";
import { h } from "./tslib.es6.js";
import { RM, hj, wh } from "./varint.js";
function dj(e) {
    const t = e[0] === "-";
    t && (e = e.slice(1));
    const n = 1e6;
    let r = 0, s = 0;
    function i(a, o) {
        const l = Number(e.slice(a, o));
        s *= n, r = r * n + l, r >= wh && (s = s + (r / wh | 0), r = r % wh);
    }
    return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), t ? mj(r, s) : bM(r, s);
}
function Cje(e, t) {
    let n = bM(e, t);
    const r = n.hi & 2147483648;
    r && (n = mj(n.lo, n.hi));
    const s = uj(n.lo, n.hi);
    return r ? "-" + s : s;
}
function uj(e, t) {
    if ({ lo: e, hi: t } = Ije(e, t), t <= 2097151) return String(wh * t + e);
    const n = e & 16777215, r = (e >>> 24 | t << 8) & 16777215, s = t >> 16 & 65535;
    let i = n + r * 6777216 + s * 6710656, a = r + s * 8147497, o = s * 2;
    const l = 1e7;
    return i >= l && (a += Math.floor(i / l), i %= l), a >= l && (o += Math.floor(a / l), a %= l), o.toString() + RM(a) + RM(i);
}
function Ije(e, t) {
    return {
        lo: e >>> 0,
        hi: t >>> 0
    };
}
function bM(e, t) {
    return {
        lo: e | 0,
        hi: t | 0
    };
}
function mj(e, t) {
    return t = ~t, e ? e = ~e + 1 : t += 1, bM(e, t);
}
function Mje() {
    const e = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == "function" && typeof e.getBigInt64 == "function" && typeof e.getBigUint64 == "function" && typeof e.setBigInt64 == "function" && typeof e.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
        const s = BigInt("-9223372036854775808"), i = BigInt("9223372036854775807"), a = BigInt("0"), o = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse (l) {
                const d = typeof l == "bigint" ? l : BigInt(l);
                if (d > i || d < s) throw new Error(`int64 invalid: ${l}`);
                return d;
            },
            uParse (l) {
                const d = typeof l == "bigint" ? l : BigInt(l);
                if (d > o || d < a) throw new Error(`uint64 invalid: ${l}`);
                return d;
            },
            enc (l) {
                return e.setBigInt64(0, this.parse(l), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            uEnc (l) {
                return e.setBigInt64(0, this.uParse(l), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            dec (l, d) {
                return e.setInt32(0, l, !0), e.setInt32(4, d, !0), e.getBigInt64(0, !0);
            },
            uDec (l, d) {
                return e.setInt32(0, l, !0), e.setInt32(4, d, !0), e.getBigUint64(0, !0);
            }
        };
    }
    const n = (s)=>vn(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`), r = (s)=>vn(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
    return {
        zero: "0",
        supported: !1,
        parse (s) {
            return typeof s != "string" && (s = s.toString()), n(s), s;
        },
        uParse (s) {
            return typeof s != "string" && (s = s.toString()), r(s), s;
        },
        enc (s) {
            return typeof s != "string" && (s = s.toString()), n(s), dj(s);
        },
        uEnc (s) {
            return typeof s != "string" && (s = s.toString()), r(s), dj(s);
        },
        dec (s, i) {
            return Cje(s, i);
        },
        uDec (s, i) {
            return uj(s, i);
        }
    };
}
var In;
export { Cje, Ije, In, Mje, bM, dj, mj, uj };
var __wakaru_ho_initialized = false;
export function ho() {
if (__wakaru_ho_initialized) return;
__wakaru_ho_initialized = true;
"use strict";
h(), $i(), hj(), In = Mje();

}
