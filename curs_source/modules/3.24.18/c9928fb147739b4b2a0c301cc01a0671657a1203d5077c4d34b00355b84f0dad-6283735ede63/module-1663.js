Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTextFormatScalarValue = exports.parseTextFormatEnumValue = void 0;
const s = require("./module-3098.js"), o = require("./module-1498.js"), r = require("./module-3408.js");
exports.parseTextFormatEnumValue = function(e, a) {
    const n = e.values.find((e)=>e.name === a);
    return (0, s.assert)(n, `cannot parse ${e.name} default value: ${a}`), n.number;
}, exports.parseTextFormatScalarValue = function(e, a) {
    switch(e){
        case r.ScalarType.STRING:
            return a;
        case r.ScalarType.BYTES:
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
                                    const e = n.c, s = n.take(2);
                                    if (!1 === s) return !1;
                                    const o = parseInt(e + s, 8);
                                    if (isNaN(o)) return !1;
                                    a.push(o);
                                    break;
                                }
                            case "x":
                                {
                                    const e = n.c, s = n.take(2);
                                    if (!1 === s) return !1;
                                    const o = parseInt(e + s, 16);
                                    if (isNaN(o)) return !1;
                                    a.push(o);
                                    break;
                                }
                            case "u":
                                {
                                    const e = n.c, s = n.take(4);
                                    if (!1 === s) return !1;
                                    const o = parseInt(e + s, 16);
                                    if (isNaN(o)) return !1;
                                    const r = new Uint8Array(4);
                                    new DataView(r.buffer).setInt32(0, o, !0), a.push(r[0], r[1], r[2], r[3]);
                                    break;
                                }
                            case "U":
                                {
                                    const e = n.c, s = n.take(8);
                                    if (!1 === s) return !1;
                                    const r = o.protoInt64.uEnc(e + s), t = new Uint8Array(8), i = new DataView(t.buffer);
                                    i.setInt32(0, r.lo, !0), i.setInt32(4, r.hi, !0), a.push(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]);
                                    break;
                                }
                        }
                    } else a.push(n.c.charCodeAt(0));
                    return new Uint8Array(a);
                }(a);
                if (!1 === n) throw new Error(`cannot parse ${r.ScalarType[e]} default value: ${a}`);
                return n;
            }
        case r.ScalarType.INT64:
        case r.ScalarType.SFIXED64:
        case r.ScalarType.SINT64:
            return o.protoInt64.parse(a);
        case r.ScalarType.UINT64:
        case r.ScalarType.FIXED64:
            return o.protoInt64.uParse(a);
        case r.ScalarType.DOUBLE:
        case r.ScalarType.FLOAT:
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
        case r.ScalarType.BOOL:
            return "true" === a;
        case r.ScalarType.INT32:
        case r.ScalarType.UINT32:
        case r.ScalarType.SINT32:
        case r.ScalarType.FIXED32:
        case r.ScalarType.SFIXED32:
            return parseInt(a, 10);
    }
};
