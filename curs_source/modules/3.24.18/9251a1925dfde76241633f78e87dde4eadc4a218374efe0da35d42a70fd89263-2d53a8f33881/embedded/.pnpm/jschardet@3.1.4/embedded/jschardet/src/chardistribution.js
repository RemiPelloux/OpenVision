import { require_big5freq } from "./big5freq.js";
import { require_euckrfreq } from "./euckrfreq.js";
import { require_euctwfreq } from "./euctwfreq.js";
import { require_gb2312freq } from "./gb2312freq.js";
import { require_jisfreq } from "./jisfreq.js";
var __wakaru_require_chardistribution_cache;
export function require_chardistribution() {
if (__wakaru_require_chardistribution_cache) return __wakaru_require_chardistribution_cache;
var exports2 = {};
__wakaru_require_chardistribution_cache = exports2;
var jisfreq = require_jisfreq();
var euctwfreq = require_euctwfreq();
var euckrfreq = require_euckrfreq();
var gb2312freq = require_gb2312freq();
var big5freq = require_big5freq();
function CharDistributionAnalysis() {
    var ENOUGH_DATA_THRESHOLD = 1024;
    var SURE_YES = 0.99;
    var SURE_NO = 0.01;
    var MINIMUM_DATA_THRESHOLD = 3;
    var self2 = this;
    function init() {
        self2._mCharToFreqOrder = null;
        self2._mTableSize = null;
        self2._mTypicalDistributionRatio = null;
        self2.reset();
    }
    this.reset = function() {
        this._mDone = false;
        this._mTotalChars = 0;
        this._mFreqChars = 0;
    };
    this.feed = function(aStr, aCharLen) {
        if (aCharLen == 2) {
            var order = this.getOrder(aStr);
        } else {
            order = -1;
        }
        if (order >= 0) {
            this._mTotalChars++;
            if (order < this._mTableSize) {
                if (512 > this._mCharToFreqOrder[order]) {
                    this._mFreqChars++;
                }
            }
        }
    };
    this.getConfidence = function() {
        if (this._mTotalChars <= 0 || this._mFreqChars <= MINIMUM_DATA_THRESHOLD) {
            return SURE_NO;
        }
        if (this._mTotalChars != this._mFreqChars) {
            var r = this._mFreqChars / ((this._mTotalChars - this._mFreqChars) * this._mTypicalDistributionRatio);
            if (r < SURE_YES) {
                return r;
            }
        }
        return SURE_YES;
    };
    this.gotEnoughData = function() {
        return this._mTotalChars > ENOUGH_DATA_THRESHOLD;
    };
    this.getOrder = function(aStr) {
        return -1;
    };
    init();
}
exports2.CharDistributionAnalysis = CharDistributionAnalysis;
function EUCTWDistributionAnalysis() {
    CharDistributionAnalysis.apply(this);
    var self2 = this;
    function init() {
        self2._mCharToFreqOrder = euctwfreq.EUCTWCharToFreqOrder;
        self2._mTableSize = euctwfreq.EUCTW_TABLE_SIZE;
        self2._mTypicalDistributionRatio = euctwfreq.EUCTW_TYPICAL_DISTRIBUTION_RATIO;
    }
    this.getOrder = function(aStr) {
        if (aStr.charCodeAt(0) >= 196) {
            return 94 * (aStr.charCodeAt(0) - 196) + aStr.charCodeAt(1) - 161;
        } else {
            return -1;
        }
    };
    init();
}
EUCTWDistributionAnalysis.prototype = new CharDistributionAnalysis();
exports2.EUCTWDistributionAnalysis = EUCTWDistributionAnalysis;
function EUCKRDistributionAnalysis() {
    CharDistributionAnalysis.apply(this);
    var self2 = this;
    function init() {
        self2._mCharToFreqOrder = euckrfreq.EUCKRCharToFreqOrder;
        self2._mTableSize = euckrfreq.EUCKR_TABLE_SIZE;
        self2._mTypicalDistributionRatio = euckrfreq.EUCKR_TYPICAL_DISTRIBUTION_RATIO;
    }
    this.getOrder = function(aStr) {
        if (aStr.charCodeAt(0) >= 176) {
            return 94 * (aStr.charCodeAt(0) - 176) + aStr.charCodeAt(1) - 161;
        } else {
            return -1;
        }
    };
    init();
}
EUCKRDistributionAnalysis.prototype = new CharDistributionAnalysis();
exports2.EUCKRDistributionAnalysis = EUCKRDistributionAnalysis;
function GB2312DistributionAnalysis() {
    CharDistributionAnalysis.apply(this);
    var self2 = this;
    function init() {
        self2._mCharToFreqOrder = gb2312freq.GB2312CharToFreqOrder;
        self2._mTableSize = gb2312freq.GB2312_TABLE_SIZE;
        self2._mTypicalDistributionRatio = gb2312freq.GB2312_TYPICAL_DISTRIBUTION_RATIO;
    }
    this.getOrder = function(aStr) {
        if (aStr.charCodeAt(0) >= 176 && aStr.charCodeAt(1) >= 161) {
            return 94 * (aStr.charCodeAt(0) - 176) + aStr.charCodeAt(1) - 161;
        } else {
            return -1;
        }
    };
    init();
}
GB2312DistributionAnalysis.prototype = new CharDistributionAnalysis();
exports2.GB2312DistributionAnalysis = GB2312DistributionAnalysis;
function Big5DistributionAnalysis() {
    CharDistributionAnalysis.apply(this);
    var self2 = this;
    function init() {
        self2._mCharToFreqOrder = big5freq.Big5CharToFreqOrder;
        self2._mTableSize = big5freq.BIG5_TABLE_SIZE;
        self2._mTypicalDistributionRatio = big5freq.BIG5_TYPICAL_DISTRIBUTION_RATIO;
    }
    this.getOrder = function(aStr) {
        if (aStr.charCodeAt(0) >= 164) {
            if (aStr.charCodeAt(1) >= 161) {
                return 157 * (aStr.charCodeAt(0) - 164) + aStr.charCodeAt(1) - 161 + 63;
            } else {
                return 157 * (aStr.charCodeAt(0) - 164) + aStr.charCodeAt(1) - 64;
            }
        } else {
            return -1;
        }
    };
    init();
}
Big5DistributionAnalysis.prototype = new CharDistributionAnalysis();
exports2.Big5DistributionAnalysis = Big5DistributionAnalysis;
function SJISDistributionAnalysis() {
    CharDistributionAnalysis.apply(this);
    var self2 = this;
    function init() {
        self2._mCharToFreqOrder = jisfreq.JISCharToFreqOrder;
        self2._mTableSize = jisfreq.JIS_TABLE_SIZE;
        self2._mTypicalDistributionRatio = jisfreq.JIS_TYPICAL_DISTRIBUTION_RATIO;
    }
    this.getOrder = function(aStr) {
        if (aStr.charCodeAt(0) >= 129 && aStr.charCodeAt(0) <= 159) {
            var order = 188 * (aStr.charCodeAt(0) - 129);
        } else if (aStr.charCodeAt(0) >= 224 && aStr.charCodeAt(0) <= 239) {
            order = 188 * (aStr.charCodeAt(0) - 224 + 31);
        } else {
            return -1;
        }
        order += aStr.charCodeAt(1) - 64;
        if (aStr.charCodeAt(1) < 64 || aStr.charCodeAt(1) === 127 || aStr.charCodeAt(1) > 252) {
            order = -1;
        }
        return order;
    };
    init();
}
SJISDistributionAnalysis.prototype = new CharDistributionAnalysis();
exports2.SJISDistributionAnalysis = SJISDistributionAnalysis;
function EUCJPDistributionAnalysis() {
    CharDistributionAnalysis.apply(this);
    var self2 = this;
    function init() {
        self2._mCharToFreqOrder = jisfreq.JISCharToFreqOrder;
        self2._mTableSize = jisfreq.JIS_TABLE_SIZE;
        self2._mTypicalDistributionRatio = jisfreq.JIS_TYPICAL_DISTRIBUTION_RATIO;
    }
    this.getOrder = function(aStr) {
        if (aStr[0] >= "\xA0") {
            return 94 * (aStr.charCodeAt(0) - 161) + aStr.charCodeAt(1) - 161;
        } else {
            return -1;
        }
    };
    init();
}
EUCJPDistributionAnalysis.prototype = new CharDistributionAnalysis();
exports2.EUCJPDistributionAnalysis = EUCJPDistributionAnalysis;

return exports2;
}
