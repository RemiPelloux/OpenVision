"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoInt64 = void 0;
const n = require("./module-43098.js"), o = require("./module-37084.js");
exports.protoInt64 = function() {
    const e = new DataView(new ArrayBuffer(8));
    if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const t = BigInt("-9223372036854775808"), r = BigInt("9223372036854775807"), n = BigInt("0"), o = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse (e) {
                const n = "bigint" == typeof e ? e : BigInt(e);
                if (n > r || n < t) throw new Error(`int64 invalid: ${e}`);
                return n;
            },
            uParse (e) {
                const t = "bigint" == typeof e ? e : BigInt(e);
                if (t > o || t < n) throw new Error(`uint64 invalid: ${e}`);
                return t;
            },
            enc (t) {
                return e.setBigInt64(0, this.parse(t), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            uEnc (t) {
                return e.setBigInt64(0, this.uParse(t), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            dec: (t, r)=>(e.setInt32(0, t, !0), e.setInt32(4, r, !0), e.getBigInt64(0, !0)),
            uDec: (t, r)=>(e.setInt32(0, t, !0), e.setInt32(4, r, !0), e.getBigUint64(0, !0))
        };
    }
    const t = (e)=>(0, n.assert)(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`), r = (e)=>(0, n.assert)(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
    return {
        zero: "0",
        supported: !1,
        parse: (e)=>("string" != typeof e && (e = e.toString()), t(e), e),
        uParse: (e)=>("string" != typeof e && (e = e.toString()), r(e), e),
        enc: (e)=>("string" != typeof e && (e = e.toString()), t(e), (0, o.int64FromString)(e)),
        uEnc: (e)=>("string" != typeof e && (e = e.toString()), r(e), (0, o.int64FromString)(e)),
        dec: (e, t)=>(0, o.int64ToString)(e, t),
        uDec: (e, t)=>(0, o.uInt64ToString)(e, t)
    };
}();
