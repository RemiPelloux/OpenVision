"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoInt64 = void 0;
const t = require("./module-3098.js"), s = require("./module-7084.js");
exports.protoInt64 = function() {
    const e = new DataView(new ArrayBuffer(8));
    if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const n = BigInt("-9223372036854775808"), a = BigInt("9223372036854775807"), t = BigInt("0"), s = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse (e) {
                const t = "bigint" == typeof e ? e : BigInt(e);
                if (t > a || t < n) throw new Error(`int64 invalid: ${e}`);
                return t;
            },
            uParse (e) {
                const n = "bigint" == typeof e ? e : BigInt(e);
                if (n > s || n < t) throw new Error(`uint64 invalid: ${e}`);
                return n;
            },
            enc (n) {
                return e.setBigInt64(0, this.parse(n), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            uEnc (n) {
                return e.setBigInt64(0, this.uParse(n), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            dec: (n, a)=>(e.setInt32(0, n, !0), e.setInt32(4, a, !0), e.getBigInt64(0, !0)),
            uDec: (n, a)=>(e.setInt32(0, n, !0), e.setInt32(4, a, !0), e.getBigUint64(0, !0))
        };
    }
    const n = (e)=>(0, t.assert)(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`), a = (e)=>(0, t.assert)(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
    return {
        zero: "0",
        supported: !1,
        parse: (e)=>("string" != typeof e && (e = e.toString()), n(e), e),
        uParse: (e)=>("string" != typeof e && (e = e.toString()), a(e), e),
        enc: (e)=>("string" != typeof e && (e = e.toString()), n(e), (0, s.int64FromString)(e)),
        uEnc: (e)=>("string" != typeof e && (e = e.toString()), a(e), (0, s.int64FromString)(e)),
        dec: (e, n)=>(0, s.int64ToString)(e, n),
        uDec: (e, n)=>(0, s.uInt64ToString)(e, n)
    };
}();
