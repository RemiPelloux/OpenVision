"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoInt64 = void 0;
const n = require("./module-3098.js"), r = require("./module-7084.js");
exports.protoInt64 = function() {
    const e = new DataView(new ArrayBuffer(8));
    if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const A = BigInt("-9223372036854775808"), t = BigInt("9223372036854775807"), n = BigInt("0"), r = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse (e) {
                const n = "bigint" == typeof e ? e : BigInt(e);
                if (n > t || n < A) throw new Error(`int64 invalid: ${e}`);
                return n;
            },
            uParse (e) {
                const A = "bigint" == typeof e ? e : BigInt(e);
                if (A > r || A < n) throw new Error(`uint64 invalid: ${e}`);
                return A;
            },
            enc (A) {
                return e.setBigInt64(0, this.parse(A), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            uEnc (A) {
                return e.setBigInt64(0, this.uParse(A), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            dec: (A, t)=>(e.setInt32(0, A, !0), e.setInt32(4, t, !0), e.getBigInt64(0, !0)),
            uDec: (A, t)=>(e.setInt32(0, A, !0), e.setInt32(4, t, !0), e.getBigUint64(0, !0))
        };
    }
    const A = (e)=>(0, n.assert)(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`), t = (e)=>(0, n.assert)(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
    return {
        zero: "0",
        supported: !1,
        parse: (e)=>("string" != typeof e && (e = e.toString()), A(e), e),
        uParse: (e)=>("string" != typeof e && (e = e.toString()), t(e), e),
        enc: (e)=>("string" != typeof e && (e = e.toString()), A(e), (0, r.int64FromString)(e)),
        uEnc: (e)=>("string" != typeof e && (e = e.toString()), t(e), (0, r.int64FromString)(e)),
        dec: (e, A)=>(0, r.int64ToString)(e, A),
        uDec: (e, A)=>(0, r.uInt64ToString)(e, A)
    };
}();
