require.r(exports);
require.d(exports, {
    protoInt64: ()=>protoInt64
});
var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-10.js");
var _google_varint_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-16.js");
function makeInt64Support() {
    const dv = new DataView(new ArrayBuffer(8));
    const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (typeof process != "object" || typeof {} != "object" || ({}).BUF_BIGINT_DISABLE !== "1");
    if (ok) {
        const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: true,
            parse (value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > MAX || bi < MIN) {
                    throw new Error(`int64 invalid: ${value}`);
                }
                return bi;
            },
            uParse (value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > UMAX || bi < UMIN) {
                    throw new Error(`uint64 invalid: ${value}`);
                }
                return bi;
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
            dec (lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigInt64(0, true);
            },
            uDec (lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigUint64(0, true);
            }
        };
    }
    const assertInt64String = (value)=>(0, _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(/^-?[0-9]+$/.test(value), `int64 invalid: ${value}`);
    const assertUInt64String = (value)=>(0, _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(/^[0-9]+$/.test(value), `uint64 invalid: ${value}`);
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
            return (0, _google_varint_js__WEBPACK_IMPORTED_MODULE_1__.int64FromString)(value);
        },
        uEnc (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return (0, _google_varint_js__WEBPACK_IMPORTED_MODULE_1__.int64FromString)(value);
        },
        dec (lo, hi) {
            return (0, _google_varint_js__WEBPACK_IMPORTED_MODULE_1__.int64ToString)(lo, hi);
        },
        uDec (lo, hi) {
            return (0, _google_varint_js__WEBPACK_IMPORTED_MODULE_1__.uInt64ToString)(lo, hi);
        }
    };
}
const protoInt64 = makeInt64Support();
