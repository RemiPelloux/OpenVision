import { IJ, yg } from "./message.js";
import { hfe, k } from "./proto3.js";
import { x } from "./tslib.es6.js";
var FSi;
export { FSi };
var __wakaru_rVc_initialized = false;
export function rVc() {
if (__wakaru_rVc_initialized) return;
__wakaru_rVc_initialized = true;
"use strict";
x(), IJ(), hfe(), FSi = class DZn extends yg {
    constructor(t){
        super(), this.paths = [], k.util.initPartial(t, this);
    }
    toJson(t) {
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
    fromJson(t, n) {
        if (typeof t != "string") throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + k.json.debug(t));
        if (t === "") return this;
        function i(r) {
            if (r.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const s = r.replace(/[A-Z]/g, (o)=>"_" + o.toLowerCase());
            return s[0] === "_" ? s.substring(1) : s;
        }
        return this.paths = t.split(",").map(i), this;
    }
    static fromBinary(t, n) {
        return new DZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new DZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new DZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(DZn, t, n);
    }
}, FSi.runtime = k, FSi.typeName = "google.protobuf.FieldMask", FSi.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);

}
