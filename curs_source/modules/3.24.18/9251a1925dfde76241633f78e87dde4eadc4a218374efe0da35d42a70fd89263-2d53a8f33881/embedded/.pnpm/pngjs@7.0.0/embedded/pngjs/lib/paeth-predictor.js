var __wakaru_require_paeth_predictor_cache;
export function require_paeth_predictor() {
if (__wakaru_require_paeth_predictor_cache) return __wakaru_require_paeth_predictor_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_paeth_predictor_cache = module2;
"use strict";
module2.exports = function paethPredictor(left, above, upLeft) {
    let paeth = left + above - upLeft;
    let pLeft = Math.abs(paeth - left);
    let pAbove = Math.abs(paeth - above);
    let pUpLeft = Math.abs(paeth - upLeft);
    if (pLeft <= pAbove && pLeft <= pUpLeft) {
        return left;
    }
    if (pAbove <= pUpLeft) {
        return above;
    }
    return upLeft;
};

return module2.exports;
}
