require.r(exports);
require.d(exports, {
    parseTextFormatEnumValue: ()=>parseTextFormatEnumValue,
    parseTextFormatScalarValue: ()=>parseTextFormatScalarValue
});
var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-10.js");
var _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-15.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-17.js");
function parseTextFormatEnumValue(descEnum, value) {
    const enumValue = descEnum.values.find((v)=>v.name === value);
    (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(enumValue, `cannot parse ${descEnum.name} default value: ${value}`);
    return enumValue.number;
}
function parseTextFormatScalarValue(type, value) {
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.STRING:
            return value;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES:
            {
                const u = unescapeBytesDefaultValue(value);
                if (u === false) {
                    throw new Error(`cannot parse ${_scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType[type]} default value: ${value}`);
                }
                return u;
            }
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SINT64:
            return _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.parse(value);
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FIXED64:
            return _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.uParse(value);
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.DOUBLE:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FLOAT:
            switch(value){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(value);
            }
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BOOL:
            return value === "true";
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.INT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.UINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.SFIXED32:
            return parseInt(value, 10);
    }
}
function unescapeBytesDefaultValue(str) {
    const b = [];
    const input = {
        tail: str,
        c: "",
        next () {
            if (this.tail.length == 0) {
                return false;
            }
            this.c = this.tail[0];
            this.tail = this.tail.substring(1);
            return true;
        },
        take (n) {
            if (this.tail.length >= n) {
                const r = this.tail.substring(0, n);
                this.tail = this.tail.substring(n);
                return r;
            }
            return false;
        }
    };
    while(input.next()){
        switch(input.c){
            case "\\":
                if (input.next()) {
                    switch(input.c){
                        case "\\":
                            b.push(input.c.charCodeAt(0));
                            break;
                        case "b":
                            b.push(8);
                            break;
                        case "f":
                            b.push(12);
                            break;
                        case "n":
                            b.push(10);
                            break;
                        case "r":
                            b.push(13);
                            break;
                        case "t":
                            b.push(9);
                            break;
                        case "v":
                            b.push(11);
                            break;
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                            {
                                const s = input.c;
                                const t = input.take(2);
                                if (t === false) {
                                    return false;
                                }
                                const n = parseInt(s + t, 8);
                                if (isNaN(n)) {
                                    return false;
                                }
                                b.push(n);
                                break;
                            }
                        case "x":
                            {
                                const s = input.c;
                                const t = input.take(2);
                                if (t === false) {
                                    return false;
                                }
                                const n = parseInt(s + t, 16);
                                if (isNaN(n)) {
                                    return false;
                                }
                                b.push(n);
                                break;
                            }
                        case "u":
                            {
                                const s = input.c;
                                const t = input.take(4);
                                if (t === false) {
                                    return false;
                                }
                                const n = parseInt(s + t, 16);
                                if (isNaN(n)) {
                                    return false;
                                }
                                const chunk = new Uint8Array(4);
                                const view = new DataView(chunk.buffer);
                                view.setInt32(0, n, true);
                                b.push(chunk[0], chunk[1], chunk[2], chunk[3]);
                                break;
                            }
                        case "U":
                            {
                                const s = input.c;
                                const t = input.take(8);
                                if (t === false) {
                                    return false;
                                }
                                const tc = _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.uEnc(s + t);
                                const chunk = new Uint8Array(8);
                                const view = new DataView(chunk.buffer);
                                view.setInt32(0, tc.lo, true);
                                view.setInt32(4, tc.hi, true);
                                b.push(chunk[0], chunk[1], chunk[2], chunk[3], chunk[4], chunk[5], chunk[6], chunk[7]);
                                break;
                            }
                    }
                }
                break;
            default:
                b.push(input.c.charCodeAt(0));
        }
    }
    return new Uint8Array(b);
}
