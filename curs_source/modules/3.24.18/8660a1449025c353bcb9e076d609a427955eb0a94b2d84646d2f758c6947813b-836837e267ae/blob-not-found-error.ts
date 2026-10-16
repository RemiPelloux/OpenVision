import { eL1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
var I4p, x4p, A4p, R4p, P4p;
export { A4p, I4p, P4p, R4p, x4p };
var __wakaru_M4p_initialized = false;
export function M4p() {
if (__wakaru_M4p_initialized) return;
__wakaru_M4p_initialized = true;
"use strict";
E(), I4p = "This conversation's data is missing and can't be restored. Start a new chat to continue.", x4p = 3, A4p = 12, R4p = class extends Error {
    constructor(t, e){
        super(`${I4p}${eL1(t)}`, e?.cause !== void 0 ? {
            cause: e.cause
        } : void 0), this.isUsageError = !0, this.isBlobNotFound = !0, this.name = "BlobNotFoundError", this.blobIdHexes = [
            ...t
        ];
    }
}, P4p = 10;

}
