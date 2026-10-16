"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTextFormatScalarValue = exports.parseTextFormatEnumValue = void 0;
const n = require("./module-3098.js"), o = require("./module-1498.js"), s = require("./module-3408.js");
exports.parseTextFormatEnumValue = function(e, t) {
    const r = e.values.find((e)=>e.name === t);
    return (0, n.assert)(r, `cannot parse ${e.name} default value: ${t}`), r.number;
}, exports.parseTextFormatScalarValue = function(e, t) {
    switch(e){
        case s.ScalarType.STRING:
            return t;
        case s.ScalarType.BYTES:
            {
                const r = function(e) {
                    const t = [], r = {
                        tail: e,
                        c: "",
                        next () {
                            return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), !0);
                        },
                        take (e) {
                            if (this.tail.length >= e) {
                                const t = this.tail.substring(0, e);
                                return this.tail = this.tail.substring(e), t;
                            }
                            return !1;
                        }
                    };
                    for(; r.next();)if ("\\" === r.c) {
                        if (r.next()) switch(r.c){
                            case "\\":
                                t.push(r.c.charCodeAt(0));
                                break;
                            case "b":
                                t.push(8);
                                break;
                            case "f":
                                t.push(12);
                                break;
                            case "n":
                                t.push(10);
                                break;
                            case "r":
                                t.push(13);
                                break;
                            case "t":
                                t.push(9);
                                break;
                            case "v":
                                t.push(11);
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
                                    const e = r.c, n = r.take(2);
                                    if (!1 === n) return !1;
                                    const o = parseInt(e + n, 8);
                                    if (isNaN(o)) return !1;
                                    t.push(o);
                                    break;
                                }
                            case "x":
                                {
                                    const e = r.c, n = r.take(2);
                                    if (!1 === n) return !1;
                                    const o = parseInt(e + n, 16);
                                    if (isNaN(o)) return !1;
                                    t.push(o);
                                    break;
                                }
                            case "u":
                                {
                                    const e = r.c, n = r.take(4);
                                    if (!1 === n) return !1;
                                    const o = parseInt(e + n, 16);
                                    if (isNaN(o)) return !1;
                                    const s = new Uint8Array(4);
                                    new DataView(s.buffer).setInt32(0, o, !0), t.push(s[0], s[1], s[2], s[3]);
                                    break;
                                }
                            case "U":
                                {
                                    const e = r.c, n = r.take(8);
                                    if (!1 === n) return !1;
                                    const s = o.protoInt64.uEnc(e + n), i = new Uint8Array(8), a = new DataView(i.buffer);
                                    a.setInt32(0, s.lo, !0), a.setInt32(4, s.hi, !0), t.push(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7]);
                                    break;
                                }
                        }
                    } else t.push(r.c.charCodeAt(0));
                    return new Uint8Array(t);
                }(t);
                if (!1 === r) throw new Error(`cannot parse ${s.ScalarType[e]} default value: ${t}`);
                return r;
            }
        case s.ScalarType.INT64:
        case s.ScalarType.SFIXED64:
        case s.ScalarType.SINT64:
            return o.protoInt64.parse(t);
        case s.ScalarType.UINT64:
        case s.ScalarType.FIXED64:
            return o.protoInt64.uParse(t);
        case s.ScalarType.DOUBLE:
        case s.ScalarType.FLOAT:
            switch(t){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(t);
            }
        case s.ScalarType.BOOL:
            return "true" === t;
        case s.ScalarType.INT32:
        case s.ScalarType.UINT32:
        case s.ScalarType.SINT32:
        case s.ScalarType.FIXED32:
        case s.ScalarType.SFIXED32:
            return parseInt(t, 10);
    }
};
