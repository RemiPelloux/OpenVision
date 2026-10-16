import { Ga, Yw } from "./Iwo.js";
import { jn } from "./SZu.js";
import { mA, ms } from "./files.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var Vf, mXr;
export { Vf, mXr };
var __wakaru_u__initialized = false;
export function u_() {
if (__wakaru_u__initialized) return;
__wakaru_u__initialized = true;
"use strict";
E(), ms(), It(), Ga(), To(), Vf = jn("textFileService"), mXr = class extends mA {
    constructor(t, e, n){
        super(t, 10), this.textFileOperationResult = e, this.options = n;
    }
    static isTextFileOperationError(t) {
        return t instanceof Error && !Yw(t.textFileOperationResult);
    }
};

}
