import { IJ, yg } from "./message.js";
import { hfe, k } from "./proto3.js";
import { x } from "./tslib.es6.js";
var lbn, qP;
export { lbn, qP };
var __wakaru_iVc_initialized = false;
export function iVc() {
if (__wakaru_iVc_initialized) return;
__wakaru_iVc_initialized = true;
"use strict";
x(), IJ(), hfe(), lbn = class RZn extends yg {
    constructor(t){
        super(), k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new RZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new RZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new RZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(RZn, t, n);
    }
}, lbn.runtime = k, lbn.typeName = "google.protobuf.Empty", lbn.fields = k.util.newFieldList(()=>[]), qP = lbn;

}
