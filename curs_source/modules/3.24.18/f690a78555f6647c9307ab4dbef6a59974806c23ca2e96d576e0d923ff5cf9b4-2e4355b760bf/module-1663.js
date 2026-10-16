"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTextFormatScalarValue = exports.parseTextFormatEnumValue = void 0;
const n = require("./module-3098.js"), r = require("./module-1498.js"), o = require("./module-3408.js");
exports.parseTextFormatEnumValue = function(e, A) {
    const t = e.values.find((e)=>e.name === A);
    return (0, n.assert)(t, `cannot parse ${e.name} default value: ${A}`), t.number;
}, exports.parseTextFormatScalarValue = function(e, A) {
    switch(e){
        case o.ScalarType.STRING:
            return A;
        case o.ScalarType.BYTES:
            {
                const t = function(e) {
                    const A = [], t = {
                        tail: e,
                        c: "",
                        next () {
                            return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), !0);
                        },
                        take (e) {
                            if (this.tail.length >= e) {
                                const A = this.tail.substring(0, e);
                                return this.tail = this.tail.substring(e), A;
                            }
                            return !1;
                        }
                    };
                    for(; t.next();)if ("\\" === t.c) {
                        if (t.next()) switch(t.c){
                            case "\\":
                                A.push(t.c.charCodeAt(0));
                                break;
                            case "b":
                                A.push(8);
                                break;
                            case "f":
                                A.push(12);
                                break;
                            case "n":
                                A.push(10);
                                break;
                            case "r":
                                A.push(13);
                                break;
                            case "t":
                                A.push(9);
                                break;
                            case "v":
                                A.push(11);
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
                                    const e = t.c, n = t.take(2);
                                    if (!1 === n) return !1;
                                    const r = parseInt(e + n, 8);
                                    if (isNaN(r)) return !1;
                                    A.push(r);
                                    break;
                                }
                            case "x":
                                {
                                    const e = t.c, n = t.take(2);
                                    if (!1 === n) return !1;
                                    const r = parseInt(e + n, 16);
                                    if (isNaN(r)) return !1;
                                    A.push(r);
                                    break;
                                }
                            case "u":
                                {
                                    const e = t.c, n = t.take(4);
                                    if (!1 === n) return !1;
                                    const r = parseInt(e + n, 16);
                                    if (isNaN(r)) return !1;
                                    const o = new Uint8Array(4);
                                    new DataView(o.buffer).setInt32(0, r, !0), A.push(o[0], o[1], o[2], o[3]);
                                    break;
                                }
                            case "U":
                                {
                                    const e = t.c, n = t.take(8);
                                    if (!1 === n) return !1;
                                    const o = r.protoInt64.uEnc(e + n), s = new Uint8Array(8), a = new DataView(s.buffer);
                                    a.setInt32(0, o.lo, !0), a.setInt32(4, o.hi, !0), A.push(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]);
                                    break;
                                }
                        }
                    } else A.push(t.c.charCodeAt(0));
                    return new Uint8Array(A);
                }(A);
                if (!1 === t) throw new Error(`cannot parse ${o.ScalarType[e]} default value: ${A}`);
                return t;
            }
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
            return r.protoInt64.parse(A);
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
            return r.protoInt64.uParse(A);
        case o.ScalarType.DOUBLE:
        case o.ScalarType.FLOAT:
            switch(A){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(A);
            }
        case o.ScalarType.BOOL:
            return "true" === A;
        case o.ScalarType.INT32:
        case o.ScalarType.UINT32:
        case o.ScalarType.SINT32:
        case o.ScalarType.FIXED32:
        case o.ScalarType.SFIXED32:
            return parseInt(A, 10);
    }
};
