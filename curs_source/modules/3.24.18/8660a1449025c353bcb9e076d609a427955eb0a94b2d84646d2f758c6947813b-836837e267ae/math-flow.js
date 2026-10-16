import { cR } from "./index_68.js";
import { RW } from "./index_90.js";
import { OPh, ndS } from "./nca.js";
import { E } from "./tslib.es6.js";
var FPh, BPh, Vca;
export { BPh, FPh, Vca };
var __wakaru_idS_initialized = false;
export function idS() {
if (__wakaru_idS_initialized) return;
__wakaru_idS_initialized = true;
E(), RW(), cR(), FPh = OPh("dollar"), BPh = OPh("backslash"), Vca = {
    tokenize: ndS,
    partial: !0
};

}
