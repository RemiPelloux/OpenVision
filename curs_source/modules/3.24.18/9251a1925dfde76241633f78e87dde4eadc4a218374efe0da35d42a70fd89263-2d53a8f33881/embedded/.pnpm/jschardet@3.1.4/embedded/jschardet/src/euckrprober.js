import { require_chardistribution } from "./chardistribution.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_mbcharsetprober } from "./mbcharsetprober.js";
import { require_euckr } from "./mbcssm/euckr.js";
var __wakaru_require_euckrprober_cache;
export function require_euckrprober() {
if (__wakaru_require_euckrprober_cache) return __wakaru_require_euckrprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_euckrprober_cache = module2;
var CodingStateMachine = require_codingstatemachine();
var MultiByteCharSetProber = require_mbcharsetprober();
var EUCKRDistributionAnalysis = require_chardistribution().EUCKRDistributionAnalysis;
var EUCKRSMModel = require_euckr();
function EUCKRProber() {
    MultiByteCharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mCodingSM = new CodingStateMachine(EUCKRSMModel);
        self2._mDistributionAnalyzer = new EUCKRDistributionAnalysis();
        self2.reset();
    }
    this.getCharsetName = function() {
        return "EUC-KR";
    };
    init();
}
EUCKRProber.prototype = new MultiByteCharSetProber();
module2.exports = EUCKRProber;

return module2.exports;
}
