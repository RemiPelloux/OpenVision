import { Dm, Ude } from "./message.js";
import { bAe, x } from "./proto3.js";
import { E } from "./tslib.es6.js";
var Iei, kbr;
export { Iei, kbr };
var __wakaru_aDo_initialized = false;
export function aDo() {
if (__wakaru_aDo_initialized) return;
__wakaru_aDo_initialized = true;
"use strict";
E(), Ude(), bAe(), Iei = class aZi extends Dm {
    constructor(e){
        super(), this.fileName = "", x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new aZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new aZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new aZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(aZi, e, n);
    }
}, Iei.runtime = x, Iei.typeName = "google.protobuf.SourceContext", Iei.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]), kbr = Iei;

}
