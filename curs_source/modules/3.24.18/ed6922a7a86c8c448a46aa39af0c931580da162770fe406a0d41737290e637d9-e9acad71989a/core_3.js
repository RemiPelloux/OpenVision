import { x } from "./tslib.es6.js";
var LHf, NHf, WEn, mOi;
export { LHf, NHf, WEn, mOi };
var __wakaru_GEn_initialized = false;
export function GEn() {
if (__wakaru_GEn_initialized) return;
__wakaru_GEn_initialized = true;
x(), LHf = Object.freeze({
    status: "aborted"
}), NHf = Symbol("zod_brand"), WEn = class extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}, mOi = {};

}
