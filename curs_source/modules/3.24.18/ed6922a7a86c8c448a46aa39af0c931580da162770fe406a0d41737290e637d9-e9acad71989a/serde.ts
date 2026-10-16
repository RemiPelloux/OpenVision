import { x } from "./tslib.es6.js";
var YNu, XNu, ZNu, N4e, F5, QNu;
export { F5, N4e, QNu, XNu, YNu, ZNu };
var __wakaru_DMn_initialized = false;
export function DMn() {
if (__wakaru_DMn_initialized) return;
__wakaru_DMn_initialized = true;
"use strict";
x(), YNu = new TextDecoder, XNu = new TextEncoder, ZNu = class {
    serialize(e) {
        return XNu.encode(e);
    }
    deserialize(e) {
        return YNu.decode(e);
    }
    getBlobType() {
        return {
            kind: "string"
        };
    }
}, N4e = new ZNu, F5 = class {
    constructor(e){
        this.proto = e;
    }
    serialize(e) {
        return e.toBinary();
    }
    deserialize(e) {
        return this.proto.fromBinary(e);
    }
    getBlobType() {
        return {
            kind: "proto",
            typeName: this.proto.typeName
        };
    }
}, QNu = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));

}
