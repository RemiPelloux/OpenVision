"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTextFormatScalarValue = exports.parseTextFormatEnumValue = void 0;
const n = require("./module-3098.js"), s = require("./module-1498.js"), i = require("./module-3408.js");
exports.parseTextFormatEnumValue = function(t, e) {
    const r = t.values.find((t)=>t.name === e);
    return (0, n.assert)(r, `cannot parse ${t.name} default value: ${e}`), r.number;
}, exports.parseTextFormatScalarValue = function(t, e) {
    switch(t){
        case i.ScalarType.STRING:
            return e;
        case i.ScalarType.BYTES:
            {
                const r = function(t) {
                    const e = [], r = {
                        tail: t,
                        c: "",
                        next () {
                            return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), !0);
                        },
                        take (t) {
                            if (this.tail.length >= t) {
                                const e = this.tail.substring(0, t);
                                return this.tail = this.tail.substring(t), e;
                            }
                            return !1;
                        }
                    };
                    for(; r.next();)if ("\\" === r.c) {
                        if (r.next()) switch(r.c){
                            case "\\":
                                e.push(r.c.charCodeAt(0));
                                break;
                            case "b":
                                e.push(8);
                                break;
                            case "f":
                                e.push(12);
                                break;
                            case "n":
                                e.push(10);
                                break;
                            case "r":
                                e.push(13);
                                break;
                            case "t":
                                e.push(9);
                                break;
                            case "v":
                                e.push(11);
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
                                    const t = r.c, n = r.take(2);
                                    if (!1 === n) return !1;
                                    const s = parseInt(t + n, 8);
                                    if (isNaN(s)) return !1;
                                    e.push(s);
                                    break;
                                }
                            case "x":
                                {
                                    const t = r.c, n = r.take(2);
                                    if (!1 === n) return !1;
                                    const s = parseInt(t + n, 16);
                                    if (isNaN(s)) return !1;
                                    e.push(s);
                                    break;
                                }
                            case "u":
                                {
                                    const t = r.c, n = r.take(4);
                                    if (!1 === n) return !1;
                                    const s = parseInt(t + n, 16);
                                    if (isNaN(s)) return !1;
                                    const i = new Uint8Array(4);
                                    new DataView(i.buffer).setInt32(0, s, !0), e.push(i[0], i[1], i[2], i[3]);
                                    break;
                                }
                            case "U":
                                {
                                    const t = r.c, n = r.take(8);
                                    if (!1 === n) return !1;
                                    const i = s.protoInt64.uEnc(t + n), o = new Uint8Array(8), a = new DataView(o.buffer);
                                    a.setInt32(0, i.lo, !0), a.setInt32(4, i.hi, !0), e.push(o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7]);
                                    break;
                                }
                        }
                    } else e.push(r.c.charCodeAt(0));
                    return new Uint8Array(e);
                }(e);
                if (!1 === r) throw new Error(`cannot parse ${i.ScalarType[t]} default value: ${e}`);
                return r;
            }
        case i.ScalarType.INT64:
        case i.ScalarType.SFIXED64:
        case i.ScalarType.SINT64:
            return s.protoInt64.parse(e);
        case i.ScalarType.UINT64:
        case i.ScalarType.FIXED64:
            return s.protoInt64.uParse(e);
        case i.ScalarType.DOUBLE:
        case i.ScalarType.FLOAT:
            switch(e){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(e);
            }
        case i.ScalarType.BOOL:
            return "true" === e;
        case i.ScalarType.INT32:
        case i.ScalarType.UINT32:
        case i.ScalarType.SINT32:
        case i.ScalarType.FIXED32:
        case i.ScalarType.SFIXED32:
            return parseInt(e, 10);
    }
};
