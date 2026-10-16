import { require_chardistribution } from "./chardistribution.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_constants } from "./constants.js";
import { require_jpcntx } from "./jpcntx.js";
import { require_logger } from "./logger.js";
import { require_mbcharsetprober } from "./mbcharsetprober.js";
import { require_sjis } from "./mbcssm/sjis.js";
var __wakaru_require_sjisprober_cache;
export function require_sjisprober() {
if (__wakaru_require_sjisprober_cache) return __wakaru_require_sjisprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sjisprober_cache = module2;
var CodingStateMachine = require_codingstatemachine();
var MultiByteCharSetProber = require_mbcharsetprober();
var SJISSMModel = require_sjis();
var SJISDistributionAnalysis = require_chardistribution().SJISDistributionAnalysis;
var SJISContextAnalysis = require_jpcntx().SJISContextAnalysis;
var constants14 = require_constants();
var logger146 = require_logger();
function SJISProber() {
    MultiByteCharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mCodingSM = new CodingStateMachine(SJISSMModel);
        self2._mDistributionAnalyzer = new SJISDistributionAnalysis();
        self2._mContextAnalyzer = new SJISContextAnalysis();
        self2.reset();
    }
    this.reset = function() {
        SJISProber.prototype.reset.apply(this);
        this._mContextAnalyzer.reset();
    };
    this.getCharsetName = function() {
        return "SHIFT_JIS";
    };
    this.feed = function(aBuf) {
        var aLen = aBuf.length;
        for(var i = 0; i < aLen; i++){
            var codingState = this._mCodingSM.nextState(aBuf[i]);
            if (codingState == constants14.error) {
                logger146.log(this.getCharsetName() + " prober hit error at byte " + i + "\n");
                this._mState = constants14.notMe;
                break;
            } else if (codingState == constants14.itsMe) {
                this._mState = constants14.foundIt;
                break;
            } else if (codingState == constants14.start) {
                var charLen = this._mCodingSM.getCurrentCharLen();
                if (i == 0) {
                    this._mLastChar[1] = aBuf[0];
                    this._mContextAnalyzer.feed(this._mLastChar.slice(2 - charLen).join(""), charLen);
                    this._mDistributionAnalyzer.feed(this._mLastChar.join(""), charLen);
                } else {
                    this._mContextAnalyzer.feed(aBuf.slice(i + 1 - charLen, i + 3 - charLen), charLen);
                    this._mDistributionAnalyzer.feed(aBuf.slice(i - 1, i + 1), charLen);
                }
            }
        }
        this._mLastChar[0] = aBuf[aLen - 1];
        if (this.getState() == constants14.detecting) {
            if (this._mContextAnalyzer.gotEnoughData() && this.getConfidence() > constants14.SHORTCUT_THRESHOLD) {
                this._mState = constants14.foundIt;
            }
        }
        return this.getState();
    };
    this.getConfidence = function() {
        var contxtCf = this._mContextAnalyzer.getConfidence();
        var distribCf = this._mDistributionAnalyzer.getConfidence();
        return Math.max(contxtCf, distribCf);
    };
    init();
}
SJISProber.prototype = new MultiByteCharSetProber();
module2.exports = SJISProber;

return module2.exports;
}
