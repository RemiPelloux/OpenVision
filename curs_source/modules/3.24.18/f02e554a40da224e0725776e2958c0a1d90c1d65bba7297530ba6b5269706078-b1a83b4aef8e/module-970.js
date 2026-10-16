"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.FieldMask = void 0;
const n = require("./module-4193.js"), s = require("./module-7599.js");
class i extends n.Message {
    constructor(t){
        super(), this.paths = [], s.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return this.paths.map((t)=>{
            if (t.match(/_[0-9]?_/g) || t.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + t + '" is irreversible');
            return function(t) {
                let e = !1;
                const r = [];
                for(let n = 0; n < t.length; n++){
                    let s = t.charAt(n);
                    switch(s){
                        case "_":
                            e = !0;
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
                            r.push(s), e = !1;
                            break;
                        default:
                            e && (e = !1, s = s.toUpperCase()), r.push(s);
                    }
                }
                return r.join("");
            }(t);
        }).join(",");
    }
    fromJson(t, e) {
        if ("string" != typeof t) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + s.proto3.json.debug(t));
        if ("" === t) return this;
        return this.paths = t.split(",").map(function(t) {
            if (t.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const e = t.replace(/[A-Z]/g, (t)=>"_" + t.toLowerCase());
            return "_" === e[0] ? e.substring(1) : e;
        }), this;
    }
    static fromBinary(t, e) {
        return (new i).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new i).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new i).fromJsonString(t, e);
    }
    static equals(t, e) {
        return s.proto3.util.equals(i, t, e);
    }
}
exports.FieldMask = i, i.runtime = s.proto3, i.typeName = "google.protobuf.FieldMask", i.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
