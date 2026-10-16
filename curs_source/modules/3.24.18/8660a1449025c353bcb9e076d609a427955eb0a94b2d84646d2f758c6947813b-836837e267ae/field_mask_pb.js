import { Dm, Ude } from "./message.js";
import { bAe, x } from "./proto3.js";
import { E } from "./tslib.es6.js";
var _br;
export { _br };
var __wakaru_$dd_initialized = false;
export function $dd() {
if (__wakaru_$dd_initialized) return;
__wakaru_$dd_initialized = true;
"use strict";
E(), Ude(), bAe(), _br = class GXi extends Dm {
    constructor(e){
        super(), this.paths = [], x.util.initPartial(e, this);
    }
    toJson(e) {
        function n(i) {
            let r = !1;
            const s = [];
            for(let o = 0; o < i.length; o++){
                let a = i.charAt(o);
                switch(a){
                    case "_":
                        r = !0;
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
                        s.push(a), r = !1;
                        break;
                    default:
                        r && (r = !1, a = a.toUpperCase()), s.push(a);
                        break;
                }
            }
            return s.join("");
        }
        return this.paths.map((i)=>{
            if (i.match(/_[0-9]?_/g) || i.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + i + '" is irreversible');
            return n(i);
        }).join(",");
    }
    fromJson(e, n) {
        if (typeof e != "string") throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + x.json.debug(e));
        if (e === "") return this;
        function i(r) {
            if (r.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const s = r.replace(/[A-Z]/g, (o)=>"_" + o.toLowerCase());
            return s[0] === "_" ? s.substring(1) : s;
        }
        return this.paths = e.split(",").map(i), this;
    }
    static fromBinary(e, n) {
        return new GXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new GXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new GXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(GXi, e, n);
    }
}, _br.runtime = x, _br.typeName = "google.protobuf.FieldMask", _br.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);

}
