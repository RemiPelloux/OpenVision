"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.FieldMask = void 0;
const n = require("./module-24193.js"), s = require("./module-27599.js");
class o extends n.Message {
    constructor(e){
        super(), this.paths = [], s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.paths.map((e)=>{
            if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
            return function(e) {
                let t = !1;
                const r = [];
                for(let n = 0; n < e.length; n++){
                    let s = e.charAt(n);
                    switch(s){
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
                            r.push(s), t = !1;
                            break;
                        default:
                            t && (t = !1, s = s.toUpperCase()), r.push(s);
                    }
                }
                return r.join("");
            }(e);
        }).join(",");
    }
    fromJson(e, t) {
        if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s.proto3.json.debug(e));
        if ("" === e) return this;
        return this.paths = e.split(",").map(function(e) {
            if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const t = e.replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
            return "_" === t[0] ? t.substring(1) : t;
        }), this;
    }
    static fromBinary(e, t) {
        return (new o).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new o).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new o).fromJsonString(e, t);
    }
    static equals(e, t) {
        return s.proto3.util.equals(o, e, t);
    }
}
exports.FieldMask = o, o.runtime = s.proto3, o.typeName = "google.protobuf.FieldMask", o.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
