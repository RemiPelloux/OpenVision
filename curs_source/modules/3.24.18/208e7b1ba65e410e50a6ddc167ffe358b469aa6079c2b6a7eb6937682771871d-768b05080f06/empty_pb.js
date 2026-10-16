import { $r, fe } from "./message.js";
import { $s, c } from "./proto3.js";
import { h } from "./tslib.es6.js";
var dg, Hr;
export { Hr, dg };
var __wakaru_kH_initialized = false;
export function kH() {
if (__wakaru_kH_initialized) return;
__wakaru_kH_initialized = true;
"use strict";
h(), $r(), $s(), dg = class j_ extends fe {
    constructor(t){
        super(), c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new j_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new j_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new j_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(j_, t, n);
    }
}, dg.runtime = c, dg.typeName = "google.protobuf.Empty", dg.fields = c.util.newFieldList(()=>[]), Hr = dg;

}
