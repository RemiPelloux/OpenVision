import { AtS, MtS, PtS, RtS } from "./LYd.js";
import { E } from "./tslib.es6.js";
var hFe;
export { hFe };
var __wakaru_LtS_initialized = false;
export function LtS() {
if (__wakaru_LtS_initialized) return;
__wakaru_LtS_initialized = true;
E(), hFe = {
    basename: AtS,
    dirname: RtS,
    extname: PtS,
    join: MtS,
    sep: "/"
};

}
