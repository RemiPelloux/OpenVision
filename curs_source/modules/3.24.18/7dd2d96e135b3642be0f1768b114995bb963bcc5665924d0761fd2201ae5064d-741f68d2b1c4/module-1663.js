"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTextFormatScalarValue = exports.parseTextFormatEnumValue = void 0;
const a = require("./module-3098.js"), s = require("./module-1498.js"), o = require("./module-3408.js");
exports.parseTextFormatEnumValue = function(e, n) {
    const t = e.values.find((e)=>e.name === n);
    return (0, a.assert)(t, `cannot parse ${e.name} default value: ${n}`), t.number;
}, exports.parseTextFormatScalarValue = function(e, n) {
    switch(e){
        case o.ScalarType.STRING:
            return n;
        case o.ScalarType.BYTES:
            {
                const t = function(e) {
                    const n = [], t = {
                        tail: e,
                        c: "",
                        next () {
                            return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), !0);
                        },
                        take (e) {
                            if (this.tail.length >= e) {
                                const n = this.tail.substring(0, e);
                                return this.tail = this.tail.substring(e), n;
                            }
                            return !1;
                        }
                    };
                    for(; t.next();)if ("\\" === t.c) {
                        if (t.next()) switch(t.c){
                            case "\\":
                                n.push(t.c.charCodeAt(0));
                                break;
                            case "b":
                                n.push(8);
                                break;
                            case "f":
                                n.push(12);
                                break;
                            case "n":
                                n.push(10);
                                break;
                            case "r":
                                n.push(13);
                                break;
                            case "t":
                                n.push(9);
                                break;
                            case "v":
                                n.push(11);
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
                                    const e = t.c, a = t.take(2);
                                    if (!1 === a) return !1;
                                    const s = parseInt(e + a, 8);
                                    if (isNaN(s)) return !1;
                                    n.push(s);
                                    break;
                                }
                            case "x":
                                {
                                    const e = t.c, a = t.take(2);
                                    if (!1 === a) return !1;
                                    const s = parseInt(e + a, 16);
                                    if (isNaN(s)) return !1;
                                    n.push(s);
                                    break;
                                }
                            case "u":
                                {
                                    const e = t.c, a = t.take(4);
                                    if (!1 === a) return !1;
                                    const s = parseInt(e + a, 16);
                                    if (isNaN(s)) return !1;
                                    const o = new Uint8Array(4);
                                    new DataView(o.buffer).setInt32(0, s, !0), n.push(o[0], o[1], o[2], o[3]);
                                    break;
                                }
                            case "U":
                                {
                                    const e = t.c, a = t.take(8);
                                    if (!1 === a) return !1;
                                    const o = s.protoInt64.uEnc(e + a), r = new Uint8Array(8), i = new DataView(r.buffer);
                                    i.setInt32(0, o.lo, !0), i.setInt32(4, o.hi, !0), n.push(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
                                    break;
                                }
                        }
                    } else n.push(t.c.charCodeAt(0));
                    return new Uint8Array(n);
                }(n);
                if (!1 === t) throw new Error(`cannot parse ${o.ScalarType[e]} default value: ${n}`);
                return t;
            }
        case o.ScalarType.INT64:
        case o.ScalarType.SFIXED64:
        case o.ScalarType.SINT64:
            return s.protoInt64.parse(n);
        case o.ScalarType.UINT64:
        case o.ScalarType.FIXED64:
            return s.protoInt64.uParse(n);
        case o.ScalarType.DOUBLE:
        case o.ScalarType.FLOAT:
            switch(n){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(n);
            }
        case o.ScalarType.BOOL:
            return "true" === n;
        case o.ScalarType.INT32:
        case o.ScalarType.UINT32:
        case o.ScalarType.SINT32:
        case o.ScalarType.FIXED32:
        case o.ScalarType.SFIXED32:
            return parseInt(n, 10);
    }
};
