Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.protoInt64 = void 0;
const o = require("./module-98.js"), s = require("./module-84.js");
exports.protoInt64 = function() {
    const e = new DataView(new ArrayBuffer(8));
    if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const a = BigInt("-9223372036854775808"), n = BigInt("9223372036854775807"), o = BigInt("0"), s = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: !0,
            parse (e) {
                const o = "bigint" == typeof e ? e : BigInt(e);
                if (o > n || o < a) throw new Error(`int64 invalid: ${e}`);
                return o;
            },
            uParse (e) {
                const a = "bigint" == typeof e ? e : BigInt(e);
                if (a > s || a < o) throw new Error(`uint64 invalid: ${e}`);
                return a;
            },
            enc (a) {
                return e.setBigInt64(0, this.parse(a), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            uEnc (a) {
                return e.setBigInt64(0, this.uParse(a), !0), {
                    lo: e.getInt32(0, !0),
                    hi: e.getInt32(4, !0)
                };
            },
            dec: (a, n)=>(e.setInt32(0, a, !0), e.setInt32(4, n, !0), e.getBigInt64(0, !0)),
            uDec: (a, n)=>(e.setInt32(0, a, !0), e.setInt32(4, n, !0), e.getBigUint64(0, !0))
        };
    }
    const a = (e)=>(0, o.assert)(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`), n = (e)=>(0, o.assert)(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
    return {
        zero: "0",
        supported: !1,
        parse: (e)=>("string" != typeof e && (e = e.toString()), a(e), e),
        uParse: (e)=>("string" != typeof e && (e = e.toString()), n(e), e),
        enc: (e)=>("string" != typeof e && (e = e.toString()), a(e), (0, s.int64FromString)(e)),
        uEnc: (e)=>("string" != typeof e && (e = e.toString()), n(e), (0, s.int64FromString)(e)),
        dec: (e, a)=>(0, s.int64ToString)(e, a),
        uDec: (e, a)=>(0, s.uInt64ToString)(e, a)
    };
}();
