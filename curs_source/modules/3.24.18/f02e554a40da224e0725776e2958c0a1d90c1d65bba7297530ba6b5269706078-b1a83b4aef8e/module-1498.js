"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoInt64 = void 0;
const n = require("./module-3098.js"), s = require("./module-7084.js");
exports.protoInt64 = function() {
    const t = new DataView(new ArrayBuffer(8));
    if ("function" == typeof BigInt && "function" == typeof t.getBigInt64 && "function" == typeof t.getBigUint64 && "function" == typeof t.setBigInt64 && "function" == typeof t.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const e = BigInt("-9223372036854775808"), r = BigInt("9223372036854775807"), n = BigInt("0"), s = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse (t) {
                const n = "bigint" == typeof t ? t : BigInt(t);
                if (n > r || n < e) throw new Error(`int64 invalid: ${t}`);
                return n;
            },
            uParse (t) {
                const e = "bigint" == typeof t ? t : BigInt(t);
                if (e > s || e < n) throw new Error(`uint64 invalid: ${t}`);
                return e;
            },
            enc (e) {
                return t.setBigInt64(0, this.parse(e), !0), {
                    lo: t.getInt32(0, !0),
                    hi: t.getInt32(4, !0)
                };
            },
            uEnc (e) {
                return t.setBigInt64(0, this.uParse(e), !0), {
                    lo: t.getInt32(0, !0),
                    hi: t.getInt32(4, !0)
                };
            },
            dec: (e, r)=>(t.setInt32(0, e, !0), t.setInt32(4, r, !0), t.getBigInt64(0, !0)),
            uDec: (e, r)=>(t.setInt32(0, e, !0), t.setInt32(4, r, !0), t.getBigUint64(0, !0))
        };
    }
    const e = (t)=>(0, n.assert)(/^-?[0-9]+$/.test(t), `int64 invalid: ${t}`), r = (t)=>(0, n.assert)(/^[0-9]+$/.test(t), `uint64 invalid: ${t}`);
    return {
        zero: "0",
        supported: !1,
        parse: (t)=>("string" != typeof t && (t = t.toString()), e(t), t),
        uParse: (t)=>("string" != typeof t && (t = t.toString()), r(t), t),
        enc: (t)=>("string" != typeof t && (t = t.toString()), e(t), (0, s.int64FromString)(t)),
        uEnc: (t)=>("string" != typeof t && (t = t.toString()), r(t), (0, s.int64FromString)(t)),
        dec: (t, e)=>(0, s.int64ToString)(t, e),
        uDec: (t, e)=>(0, s.uInt64ToString)(t, e)
    };
}();
