import { Fo, Tf } from "./HVr.js";
import { Fi, WT } from "./files.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var Xp, iFd;
export { Xp, iFd };
var __wakaru_Ag_initialized = false;
export function Ag() {
if (__wakaru_Ag_initialized) return;
__wakaru_Ag_initialized = true;
"use strict";
x(), Fi(), Ze(), Fo(), gr(), Xp = vn("textFileService"), iFd = class extends WT {
    constructor(e, t, n){
        super(e, 10), this.textFileOperationResult = t, this.options = n;
    }
    static isTextFileOperationError(e) {
        return e instanceof Error && !Tf(e.textFileOperationResult);
    }
};

}
