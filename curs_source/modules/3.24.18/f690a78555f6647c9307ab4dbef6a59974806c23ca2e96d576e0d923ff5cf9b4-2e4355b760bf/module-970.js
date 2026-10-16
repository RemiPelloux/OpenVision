"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.FieldMask = void 0;
const n = require("./module-4193.js"), r = require("./module-7599.js");
class o extends n.Message {
    constructor(e){
        super(), this.paths = [], r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.paths.map((e)=>{
            if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
            return function(e) {
                let A = !1;
                const t = [];
                for(let n = 0; n < e.length; n++){
                    let r = e.charAt(n);
                    switch(r){
                        case "_":
                            A = !0;
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
                            t.push(r), A = !1;
                            break;
                        default:
                            A && (A = !1, r = r.toUpperCase()), t.push(r);
                    }
                }
                return t.join("");
            }(e);
        }).join(",");
    }
    fromJson(e, A) {
        if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + r.proto3.json.debug(e));
        if ("" === e) return this;
        return this.paths = e.split(",").map(function(e) {
            if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const A = e.replace(/[A-Z]/g, (e)=>"_" + e.toLowerCase());
            return "_" === A[0] ? A.substring(1) : A;
        }), this;
    }
    static fromBinary(e, A) {
        return (new o).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new o).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new o).fromJsonString(e, A);
    }
    static equals(e, A) {
        return r.proto3.util.equals(o, e, A);
    }
}
exports.FieldMask = o, o.runtime = r.proto3, o.typeName = "google.protobuf.FieldMask", o.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);
