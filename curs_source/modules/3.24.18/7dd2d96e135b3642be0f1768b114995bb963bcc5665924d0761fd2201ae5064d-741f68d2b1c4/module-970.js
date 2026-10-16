"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.FieldMask = void 0;
const a = require("./module-4193.js"), s = require("./module-7599.js");
class o extends a.Message {
    constructor(e){
        super(), this.paths = [], s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.paths.map((e)=>{
            if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
            return function(e) {
                let n = !1;
                const t = [];
                for(let a = 0; a < e.length; a++){
                    let s = e.charAt(a);
                    switch(s){
                        case "_":
                            n = !0;
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
                            t.push(s), n = !1;
                            break;
                        default:
                            n && (n = !1, s = s.toUpperCase()), t.push(s);
                    }
                }
                return t.join("");
            }(e);
        }).join(",");
    }
    fromJson(e, n) {
        if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s.proto3.json.debug(e));
        if ("" === e) return this;
        return this.paths = e.split(",").map(function(e) {
            if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const n = e.replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
            return "_" === n[0] ? n.substring(1) : n;
        }), this;
    }
    static fromBinary(e, n) {
        return (new o).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new o).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new o).fromJsonString(e, n);
    }
    static equals(e, n) {
        return s.proto3.util.equals(o, e, n);
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
