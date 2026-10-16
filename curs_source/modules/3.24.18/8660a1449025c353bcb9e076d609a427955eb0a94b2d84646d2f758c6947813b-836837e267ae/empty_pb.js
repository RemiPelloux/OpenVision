import { Dm, Ude } from "./message.js";
import { bAe, x } from "./proto3.js";
import { E } from "./tslib.es6.js";
var bei, A5;
export { A5, bei };
var __wakaru_jdd_initialized = false;
export function jdd() {
if (__wakaru_jdd_initialized) return;
__wakaru_jdd_initialized = true;
"use strict";
E(), Ude(), bAe(), bei = class WXi extends Dm {
    constructor(e){
        super(), x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new WXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new WXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new WXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(WXi, e, n);
    }
}, bei.runtime = x, bei.typeName = "google.protobuf.Empty", bei.fields = x.util.newFieldList(()=>[]), A5 = bei;

}
