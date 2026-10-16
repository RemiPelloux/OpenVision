import { require_assert } from "./assert.js";
import { require_proto_int64 } from "../proto-int64.js";
import { require_scalar } from "../scalar.js";
var __wakaru_require_text_format_cache;
export function require_text_format() {
if (__wakaru_require_text_format_cache) return __wakaru_require_text_format_cache;
var exports2 = {};
__wakaru_require_text_format_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.parseTextFormatScalarValue = exports2.parseTextFormatEnumValue = void 0;
var assert_js_1 = require_assert();
var proto_int64_js_1 = require_proto_int64();
var scalar_js_1 = require_scalar();
function parseTextFormatEnumValue(descEnum, value) {
    const enumValue = descEnum.values.find((v2)=>v2.name === value);
    (0, assert_js_1.assert)(enumValue, `cannot parse ${descEnum.name} default value: ${value}`);
    return enumValue.number;
}
exports2.parseTextFormatEnumValue = parseTextFormatEnumValue;
function parseTextFormatScalarValue(type2, value) {
    switch(type2){
        case scalar_js_1.ScalarType.STRING:
            return value;
        case scalar_js_1.ScalarType.BYTES:
            {
                const u2 = unescapeBytesDefaultValue(value);
                if (u2 === false) {
                    throw new Error(`cannot parse ${scalar_js_1.ScalarType[type2]} default value: ${value}`);
                }
                return u2;
            }
        case scalar_js_1.ScalarType.INT64:
        case scalar_js_1.ScalarType.SFIXED64:
        case scalar_js_1.ScalarType.SINT64:
            return proto_int64_js_1.protoInt64.parse(value);
        case scalar_js_1.ScalarType.UINT64:
        case scalar_js_1.ScalarType.FIXED64:
            return proto_int64_js_1.protoInt64.uParse(value);
        case scalar_js_1.ScalarType.DOUBLE:
        case scalar_js_1.ScalarType.FLOAT:
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
        case scalar_js_1.ScalarType.BOOL:
            return value === "true";
        case scalar_js_1.ScalarType.INT32:
        case scalar_js_1.ScalarType.UINT32:
        case scalar_js_1.ScalarType.SINT32:
        case scalar_js_1.ScalarType.FIXED32:
        case scalar_js_1.ScalarType.SFIXED32:
            return parseInt(value, 10);
    }
}
exports2.parseTextFormatScalarValue = parseTextFormatScalarValue;
function unescapeBytesDefaultValue(str3) {
    const b2 = [];
    const input = {
        tail: str3,
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
                            b2.push(input.c.charCodeAt(0));
                            break;
                        case "b":
                            b2.push(8);
                            break;
                        case "f":
                            b2.push(12);
                            break;
                        case "n":
                            b2.push(10);
                            break;
                        case "r":
                            b2.push(13);
                            break;
                        case "t":
                            b2.push(9);
                            break;
                        case "v":
                            b2.push(11);
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
                                const s3 = input.c;
                                const t = input.take(2);
                                if (t === false) {
                                    return false;
                                }
                                const n = parseInt(s3 + t, 8);
                                if (isNaN(n)) {
                                    return false;
                                }
                                b2.push(n);
                                break;
                            }
                        case "x":
                            {
                                const s3 = input.c;
                                const t = input.take(2);
                                if (t === false) {
                                    return false;
                                }
                                const n = parseInt(s3 + t, 16);
                                if (isNaN(n)) {
                                    return false;
                                }
                                b2.push(n);
                                break;
                            }
                        case "u":
                            {
                                const s3 = input.c;
                                const t = input.take(4);
                                if (t === false) {
                                    return false;
                                }
                                const n = parseInt(s3 + t, 16);
                                if (isNaN(n)) {
                                    return false;
                                }
                                const chunk = new Uint8Array(4);
                                const view = new DataView(chunk.buffer);
                                view.setInt32(0, n, true);
                                b2.push(chunk[0], chunk[1], chunk[2], chunk[3]);
                                break;
                            }
                        case "U":
                            {
                                const s3 = input.c;
                                const t = input.take(8);
                                if (t === false) {
                                    return false;
                                }
                                const tc = proto_int64_js_1.protoInt64.uEnc(s3 + t);
                                const chunk = new Uint8Array(8);
                                const view = new DataView(chunk.buffer);
                                view.setInt32(0, tc.lo, true);
                                view.setInt32(4, tc.hi, true);
                                b2.push(chunk[0], chunk[1], chunk[2], chunk[3], chunk[4], chunk[5], chunk[6], chunk[7]);
                                break;
                            }
                    }
                }
                break;
            default:
                b2.push(input.c.charCodeAt(0));
        }
    }
    return new Uint8Array(b2);
}

return exports2;
}
