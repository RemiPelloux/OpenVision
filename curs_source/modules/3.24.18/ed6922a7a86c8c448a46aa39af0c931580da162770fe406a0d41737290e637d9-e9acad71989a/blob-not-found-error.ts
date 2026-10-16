import { Lfv } from "./De_3.js";
import { x } from "./tslib.es6.js";
var r2u, s2u, o2u, a2u, c2u;
export { a2u, c2u, o2u, r2u, s2u };
var __wakaru_l2u_initialized = false;
export function l2u() {
if (__wakaru_l2u_initialized) return;
__wakaru_l2u_initialized = true;
"use strict";
x(), r2u = "This conversation's data is missing and can't be restored. Start a new chat to continue.", s2u = 3, o2u = 12, a2u = class extends Error {
    constructor(e, t){
        super(`${r2u}${Lfv(e)}`, t?.cause !== void 0 ? {
            cause: t.cause
        } : void 0), this.isUsageError = !0, this.isBlobNotFound = !0, this.name = "BlobNotFoundError", this.blobIdHexes = [
            ...e
        ];
    }
}, c2u = 10;

}
