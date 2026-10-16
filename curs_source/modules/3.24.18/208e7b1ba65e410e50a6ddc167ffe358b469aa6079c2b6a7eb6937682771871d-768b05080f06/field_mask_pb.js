import { $r, fe } from "./message.js";
import { $s, c } from "./proto3.js";
import { h } from "./tslib.es6.js";
var Sy;
export { Sy };
var __wakaru_SH_initialized = false;
export function SH() {
if (__wakaru_SH_initialized) return;
__wakaru_SH_initialized = true;
"use strict";
h(), $r(), $s(), Sy = class H_ extends fe {
    constructor(t){
        super(), this.paths = [], c.util.initPartial(t, this);
    }
    toJson(t) {
        function n(r) {
            let s = !1;
            const i = [];
            for(let a = 0; a < r.length; a++){
                let o = r.charAt(a);
                switch(o){
                    case "_":
                        s = !0;
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
                        i.push(o), s = !1;
                        break;
                    default:
                        s && (s = !1, o = o.toUpperCase()), i.push(o);
                        break;
                }
            }
            return i.join("");
        }
        return this.paths.map((r)=>{
            if (r.match(/_[0-9]?_/g) || r.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + r + '" is irreversible');
            return n(r);
        }).join(",");
    }
    fromJson(t, n) {
        if (typeof t != "string") throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + c.json.debug(t));
        if (t === "") return this;
        function r(s) {
            if (s.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
            const i = s.replace(/[A-Z]/g, (a)=>"_" + a.toLowerCase());
            return i[0] === "_" ? i.substring(1) : i;
        }
        return this.paths = t.split(",").map(r), this;
    }
    static fromBinary(t, n) {
        return new H_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new H_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new H_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(H_, t, n);
    }
}, Sy.runtime = c, Sy.typeName = "google.protobuf.FieldMask", Sy.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]);

}
