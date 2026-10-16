import { require_chardistribution } from "./chardistribution.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_mbcharsetprober } from "./mbcharsetprober.js";
import { require_euctw } from "./mbcssm/euctw.js";
var __wakaru_require_euctwprober_cache;
export function require_euctwprober() {
if (__wakaru_require_euctwprober_cache) return __wakaru_require_euctwprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_euctwprober_cache = module2;
var CodingStateMachine = require_codingstatemachine();
var MultiByteCharSetProber = require_mbcharsetprober();
var EUCTWDistributionAnalysis = require_chardistribution().EUCTWDistributionAnalysis;
var EUCTWSMModel = require_euctw();
function EUCTWProber() {
    MultiByteCharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mCodingSM = new CodingStateMachine(EUCTWSMModel);
        self2._mDistributionAnalyzer = new EUCTWDistributionAnalysis();
        self2.reset();
    }
    this.getCharsetName = function() {
        return "EUC-TW";
    };
    init();
}
EUCTWProber.prototype = new MultiByteCharSetProber();
module2.exports = EUCTWProber;

return module2.exports;
}
