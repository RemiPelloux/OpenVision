Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTextFormatScalarValue = exports.parseTextFormatEnumValue = void 0;
const r = require("./module-98.js"), o = require("./module-498.js"), a = require("./module-408.js");
exports.parseTextFormatEnumValue = function(e, t) {
    const n = e.values.find((e)=>e.name === t);
    return (0, r.assert)(n, `cannot parse ${e.name} default value: ${t}`), n.number;
}, exports.parseTextFormatScalarValue = function(e, t) {
    switch(e){
        case a.ScalarType.STRING:
            return t;
        case a.ScalarType.BYTES:
            {
                const n = function(e) {
                    const t = [], n = {
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
                    for(; n.next();)if ("\\" === n.c) {
                        if (n.next()) switch(n.c){
                            case "\\":
                                t.push(n.c.charCodeAt(0));
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
                                    const e = n.c, r = n.take(2);
                                    if (!1 === r) return !1;
                                    const o = parseInt(e + r, 8);
                                    if (isNaN(o)) return !1;
                                    t.push(o);
                                    break;
                                }
                            case "x":
                                {
                                    const e = n.c, r = n.take(2);
                                    if (!1 === r) return !1;
                                    const o = parseInt(e + r, 16);
                                    if (isNaN(o)) return !1;
                                    t.push(o);
                                    break;
                                }
                            case "u":
                                {
                                    const e = n.c, r = n.take(4);
                                    if (!1 === r) return !1;
                                    const o = parseInt(e + r, 16);
                                    if (isNaN(o)) return !1;
                                    const a = new Uint8Array(4);
                                    new DataView(a.buffer).setInt32(0, o, !0), t.push(a[0], a[1], a[2], a[3]);
                                    break;
                                }
                            case "U":
                                {
                                    const e = n.c, r = n.take(8);
                                    if (!1 === r) return !1;
                                    const a = o.protoInt64.uEnc(e + r), s = new Uint8Array(8), i = new DataView(s.buffer);
                                    i.setInt32(0, a.lo, !0), i.setInt32(4, a.hi, !0), t.push(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]);
                                    break;
                                }
                        }
                    } else t.push(n.c.charCodeAt(0));
                    return new Uint8Array(t);
                }(t);
                if (!1 === n) throw new Error(`cannot parse ${a.ScalarType[e]} default value: ${t}`);
                return n;
            }
        case a.ScalarType.INT64:
        case a.ScalarType.SFIXED64:
        case a.ScalarType.SINT64:
            return o.protoInt64.parse(t);
        case a.ScalarType.UINT64:
        case a.ScalarType.FIXED64:
            return o.protoInt64.uParse(t);
        case a.ScalarType.DOUBLE:
        case a.ScalarType.FLOAT:
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
        case a.ScalarType.BOOL:
            return "true" === t;
        case a.ScalarType.INT32:
        case a.ScalarType.UINT32:
        case a.ScalarType.SINT32:
        case a.ScalarType.FIXED32:
        case a.ScalarType.SFIXED32:
            return parseInt(t, 10);
    }
};
