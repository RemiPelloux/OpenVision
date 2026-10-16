import { require_chardistribution } from "./chardistribution.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_mbcharsetprober } from "./mbcharsetprober.js";
import { require_gb2312 } from "./mbcssm/gb2312.js";
var __wakaru_require_gb2312prober_cache;
export function require_gb2312prober() {
if (__wakaru_require_gb2312prober_cache) return __wakaru_require_gb2312prober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_gb2312prober_cache = module2;
var MultiByteCharSetProber = require_mbcharsetprober();
var CodingStateMachine = require_codingstatemachine();
var GB2312SMModel = require_gb2312();
var GB2312DistributionAnalysis = require_chardistribution().GB2312DistributionAnalysis;
function GB2312Prober() {
    MultiByteCharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mCodingSM = new CodingStateMachine(GB2312SMModel);
        self2._mDistributionAnalyzer = new GB2312DistributionAnalysis();
        self2.reset();
    }
    this.getCharsetName = function() {
        return "GB2312";
    };
    init();
}
GB2312Prober.prototype = new MultiByteCharSetProber();
module2.exports = GB2312Prober;

return module2.exports;
}
