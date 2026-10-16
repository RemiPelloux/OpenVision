import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var qae, fot;
export { fot, qae };
var __wakaru_Sqe_initialized = false;
export function Sqe() {
if (__wakaru_Sqe_initialized) return;
__wakaru_Sqe_initialized = true;
"use strict";
E(), It(), qae = jn("notebookService"), fot = class {
    constructor(t, e, n){
        this.viewType = t, this.serializer = e, this.extensionData = n;
    }
};

}
