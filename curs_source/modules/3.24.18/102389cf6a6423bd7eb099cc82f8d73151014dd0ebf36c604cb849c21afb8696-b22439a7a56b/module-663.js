Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTextFormatScalarValue = exports.parseTextFormatEnumValue = void 0;
const o = require("./module-98.js"), s = require("./module-498.js"), t = require("./module-408.js");
exports.parseTextFormatEnumValue = function(e, a) {
    const n = e.values.find((e)=>e.name === a);
    return (0, o.assert)(n, `cannot parse ${e.name} default value: ${a}`), n.number;
}, exports.parseTextFormatScalarValue = function(e, a) {
    switch(e){
        case t.ScalarType.STRING:
            return a;
        case t.ScalarType.BYTES:
            {
                const n = function(e) {
                    const a = [], n = {
                        tail: e,
                        c: "",
                        next () {
                            return 0 != this.tail.length && (this.c = this.tail[0], this.tail = this.tail.substring(1), !0);
                        },
                        take (e) {
                            if (this.tail.length >= e) {
                                const a = this.tail.substring(0, e);
                                return this.tail = this.tail.substring(e), a;
                            }
                            return !1;
                        }
                    };
                    for(; n.next();)if ("\\" === n.c) {
                        if (n.next()) switch(n.c){
                            case "\\":
                                a.push(n.c.charCodeAt(0));
                                break;
                            case "b":
                                a.push(8);
                                break;
                            case "f":
                                a.push(12);
                                break;
                            case "n":
                                a.push(10);
                                break;
                            case "r":
                                a.push(13);
                                break;
                            case "t":
                                a.push(9);
                                break;
                            case "v":
                                a.push(11);
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
                                    const e = n.c, o = n.take(2);
                                    if (!1 === o) return !1;
                                    const s = parseInt(e + o, 8);
                                    if (isNaN(s)) return !1;
                                    a.push(s);
                                    break;
                                }
                            case "x":
                                {
                                    const e = n.c, o = n.take(2);
                                    if (!1 === o) return !1;
                                    const s = parseInt(e + o, 16);
                                    if (isNaN(s)) return !1;
                                    a.push(s);
                                    break;
                                }
                            case "u":
                                {
                                    const e = n.c, o = n.take(4);
                                    if (!1 === o) return !1;
                                    const s = parseInt(e + o, 16);
                                    if (isNaN(s)) return !1;
                                    const t = new Uint8Array(4);
                                    new DataView(t.buffer).setInt32(0, s, !0), a.push(t[0], t[1], t[2], t[3]);
                                    break;
                                }
                            case "U":
                                {
                                    const e = n.c, o = n.take(8);
                                    if (!1 === o) return !1;
                                    const t = s.protoInt64.uEnc(e + o), r = new Uint8Array(8), i = new DataView(r.buffer);
                                    i.setInt32(0, t.lo, !0), i.setInt32(4, t.hi, !0), a.push(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
                                    break;
                                }
                        }
                    } else a.push(n.c.charCodeAt(0));
                    return new Uint8Array(a);
                }(a);
                if (!1 === n) throw new Error(`cannot parse ${t.ScalarType[e]} default value: ${a}`);
                return n;
            }
        case t.ScalarType.INT64:
        case t.ScalarType.SFIXED64:
        case t.ScalarType.SINT64:
            return s.protoInt64.parse(a);
        case t.ScalarType.UINT64:
        case t.ScalarType.FIXED64:
            return s.protoInt64.uParse(a);
        case t.ScalarType.DOUBLE:
        case t.ScalarType.FLOAT:
            switch(a){
                case "inf":
                    return Number.POSITIVE_INFINITY;
                case "-inf":
                    return Number.NEGATIVE_INFINITY;
                case "nan":
                    return Number.NaN;
                default:
                    return parseFloat(a);
            }
        case t.ScalarType.BOOL:
            return "true" === a;
        case t.ScalarType.INT32:
        case t.ScalarType.UINT32:
        case t.ScalarType.SINT32:
        case t.ScalarType.FIXED32:
        case t.ScalarType.SFIXED32:
            return parseInt(a, 10);
    }
};
