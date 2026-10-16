import { i } from "./plugin-brand-icon.js";
var sDt, gm;
export { gm, sDt };
var __wakaru_SRe_initialized = false;
export function SRe() {
if (__wakaru_SRe_initialized) return;
__wakaru_SRe_initialized = true;
gm = (sDt = class extends Error {
    constructor(r){
        super(r), this.name = "ShikiError";
    }
}, i(sDt, "ShikiError"), sDt);

}
