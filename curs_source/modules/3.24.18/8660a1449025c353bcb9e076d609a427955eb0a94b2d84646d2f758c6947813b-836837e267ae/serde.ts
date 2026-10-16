import { E } from "./tslib.es6.js";
var b4p, y4p, S4p, zst, LO, k4p;
export { LO, S4p, b4p, k4p, y4p, zst };
var __wakaru_FSi_initialized = false;
export function FSi() {
if (__wakaru_FSi_initialized) return;
__wakaru_FSi_initialized = true;
"use strict";
E(), b4p = new TextDecoder, y4p = new TextEncoder, S4p = class {
    serialize(t) {
        return y4p.encode(t);
    }
    deserialize(t) {
        return b4p.decode(t);
    }
    getBlobType() {
        return {
            kind: "string"
        };
    }
}, zst = new S4p, LO = class {
    constructor(t){
        this.proto = t;
    }
    serialize(t) {
        return t.toBinary();
    }
    deserialize(t) {
        return this.proto.fromBinary(t);
    }
    getBlobType() {
        return {
            kind: "proto",
            typeName: this.proto.typeName
        };
    }
}, k4p = Array.from({
    length: 256
}, (t, e)=>e.toString(16).padStart(2, "0"));

}
