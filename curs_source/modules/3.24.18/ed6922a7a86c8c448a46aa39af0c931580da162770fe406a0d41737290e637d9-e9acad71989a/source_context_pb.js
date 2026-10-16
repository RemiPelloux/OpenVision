import { IJ, yg } from "./message.js";
import { hfe, k } from "./proto3.js";
import { x } from "./tslib.es6.js";
var vbn, HSi;
export { HSi, vbn };
var __wakaru_Css_initialized = false;
export function Css() {
if (__wakaru_Css_initialized) return;
__wakaru_Css_initialized = true;
"use strict";
x(), IJ(), hfe(), vbn = class KZn extends yg {
    constructor(t){
        super(), this.fileName = "", k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new KZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new KZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new KZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(KZn, t, n);
    }
}, vbn.runtime = k, vbn.typeName = "google.protobuf.SourceContext", vbn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]), HSi = vbn;

}
