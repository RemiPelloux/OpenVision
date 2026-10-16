Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.FieldMask = void 0;
const o = require("./module-193.js"), s = require("./module-599.js");
class t extends o.Message {
    constructor(e){
        super(), this.paths = [], s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.paths.map((e)=>{
            if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
            return function(e) {
                let a = !1;
                const n = [];
                for(let o = 0; o < e.length; o++){
                    let s = e.charAt(o);
                    switch(s){
                        case "_":
                            a = !0;
                            break;
                        case "0":
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            n.push(s), a = !1;
                            break;
                        default:
                            a && (a = !1, s = s.toUpperCase()), n.push(s);
                    }
                }
                return n.join("");
            }(e);
        }).join(",");
    }
    fromJson(e, a) {
        if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s.proto3.json.debug(e));
        if ("" === e) return this;
        return this.paths = e.split(",").map(function(e) {
            if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const a = e.replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
            return "_" === a[0] ? a.substring(1) : a;
        }), this;
    }
    static fromBinary(e, a) {
        return (new t).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new t).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new t).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(t, e, a);
    }
}
exports.FieldMask = t, t.runtime = s.proto3, t.typeName = "google.protobuf.FieldMask", t.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
