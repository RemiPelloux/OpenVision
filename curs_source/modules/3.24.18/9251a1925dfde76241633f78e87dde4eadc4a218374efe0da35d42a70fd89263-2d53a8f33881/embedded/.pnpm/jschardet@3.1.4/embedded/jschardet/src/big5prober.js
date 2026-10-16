import { require_chardistribution } from "./chardistribution.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_mbcharsetprober } from "./mbcharsetprober.js";
import { require_big5 } from "./mbcssm/big5.js";
var __wakaru_require_big5prober_cache;
export function require_big5prober() {
if (__wakaru_require_big5prober_cache) return __wakaru_require_big5prober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_big5prober_cache = module2;
var CodingStateMachine = require_codingstatemachine();
var MultiByteCharSetProber = require_mbcharsetprober();
var Big5SMModel = require_big5();
var Big5DistributionAnalysis = require_chardistribution().Big5DistributionAnalysis;
function Big5Prober() {
    MultiByteCharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mCodingSM = new CodingStateMachine(Big5SMModel);
        self2._mDistributionAnalyzer = new Big5DistributionAnalysis();
        self2.reset();
    }
    this.getCharsetName = function() {
        return "Big5";
    };
    init();
}
Big5Prober.prototype = new MultiByteCharSetProber();
module2.exports = Big5Prober;

return module2.exports;
}
