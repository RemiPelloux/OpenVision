import { require_chardistribution } from "./chardistribution.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_constants } from "./constants.js";
import { require_jpcntx } from "./jpcntx.js";
import { require_logger } from "./logger.js";
import { require_mbcharsetprober } from "./mbcharsetprober.js";
import { require_eucjp2 } from "./mbcssm/eucjp.js";
var __wakaru_require_eucjpprober_cache;
export function require_eucjpprober() {
if (__wakaru_require_eucjpprober_cache) return __wakaru_require_eucjpprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_eucjpprober_cache = module2;
var CodingStateMachine = require_codingstatemachine();
var MultiByteCharSetProber = require_mbcharsetprober();
var EUCJPDistributionAnalysis = require_chardistribution().EUCJPDistributionAnalysis;
var EUCJPContextAnalysis = require_jpcntx().EUCJPContextAnalysis;
var EUCJPSMModel = require_eucjp2();
var constants14 = require_constants();
var logger146 = require_logger();
function EUCJPProber() {
    MultiByteCharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mCodingSM = new CodingStateMachine(EUCJPSMModel);
        self2._mDistributionAnalyzer = new EUCJPDistributionAnalysis();
        self2._mContextAnalyzer = new EUCJPContextAnalysis();
        self2.reset();
    }
    this.reset = function() {
        EUCJPProber.prototype.reset.apply(this);
        this._mContextAnalyzer.reset();
    };
    this.getCharsetName = function() {
        return "EUC-JP";
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
                    var lastCharStr = this._mLastChar.join("");
                    this._mContextAnalyzer.feed(lastCharStr, charLen);
                    this._mDistributionAnalyzer.feed(lastCharStr, charLen);
                } else {
                    this._mContextAnalyzer.feed(aBuf.slice(i - 1, i + 1), charLen);
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
EUCJPProber.prototype = new MultiByteCharSetProber();
module2.exports = EUCJPProber;

return module2.exports;
}
