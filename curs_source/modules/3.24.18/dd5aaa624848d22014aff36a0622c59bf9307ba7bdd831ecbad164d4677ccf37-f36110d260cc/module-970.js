Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.FieldMask = void 0;
const r = require("./module-193.js"), o = require("./module-599.js");
class a extends r.Message {
    constructor(e){
        super(), this.paths = [], o.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.paths.map((e)=>{
            if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
            return function(e) {
                let t = !1;
                const n = [];
                for(let r = 0; r < e.length; r++){
                    let o = e.charAt(r);
                    switch(o){
                        case "_":
                            t = !0;
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
                            n.push(o), t = !1;
                            break;
                        default:
                            t && (t = !1, o = o.toUpperCase()), n.push(o);
                    }
                }
                return n.join("");
            }(e);
        }).join(",");
    }
    fromJson(e, t) {
        if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + o.proto3.json.debug(e));
        if ("" === e) return this;
        return this.paths = e.split(",").map(function(e) {
            if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const t = e.replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
            return "_" === t[0] ? t.substring(1) : t;
        }), this;
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(a, e, t);
    }
}
exports.FieldMask = a, a.runtime = o.proto3, a.typeName = "google.protobuf.FieldMask", a.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
