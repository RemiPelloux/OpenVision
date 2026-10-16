import { require_varint } from "./google/varint.js";
import { require_assert } from "./private/assert.js";
var __wakaru_require_proto_int64_cache;
export function require_proto_int64() {
if (__wakaru_require_proto_int64_cache) return __wakaru_require_proto_int64_cache;
var exports2 = {};
__wakaru_require_proto_int64_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.protoInt64 = void 0;
var assert_js_1 = require_assert();
var varint_js_1 = require_varint();
function makeInt64Support2() {
    const dv = new DataView(new ArrayBuffer(8));
    const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1");
    if (ok) {
        const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: true,
            parse (value) {
                const bi2 = typeof value == "bigint" ? value : BigInt(value);
                if (bi2 > MAX || bi2 < MIN) {
                    throw new Error(`int64 invalid: ${value}`);
                }
                return bi2;
            },
            uParse (value) {
                const bi2 = typeof value == "bigint" ? value : BigInt(value);
                if (bi2 > UMAX || bi2 < UMIN) {
                    throw new Error(`uint64 invalid: ${value}`);
                }
                return bi2;
            },
            enc (value) {
                dv.setBigInt64(0, this.parse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            uEnc (value) {
                dv.setBigInt64(0, this.uParse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            dec (lo2, hi2) {
                dv.setInt32(0, lo2, true);
                dv.setInt32(4, hi2, true);
                return dv.getBigInt64(0, true);
            },
            uDec (lo2, hi2) {
                dv.setInt32(0, lo2, true);
                dv.setInt32(4, hi2, true);
                return dv.getBigUint64(0, true);
            }
        };
    }
    const assertInt64String = (value)=>(0, assert_js_1.assert)(/^-?[0-9]+$/.test(value), `int64 invalid: ${value}`);
    const assertUInt64String = (value)=>(0, assert_js_1.assert)(/^[0-9]+$/.test(value), `uint64 invalid: ${value}`);
    return {
        zero: "0",
        supported: false,
        parse (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return value;
        },
        uParse (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return value;
        },
        enc (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return (0, varint_js_1.int64FromString)(value);
        },
        uEnc (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return (0, varint_js_1.int64FromString)(value);
        },
        dec (lo2, hi2) {
            return (0, varint_js_1.int64ToString)(lo2, hi2);
        },
        uDec (lo2, hi2) {
            return (0, varint_js_1.uInt64ToString)(lo2, hi2);
        }
    };
}
exports2.protoInt64 = makeInt64Support2();

return exports2;
}
