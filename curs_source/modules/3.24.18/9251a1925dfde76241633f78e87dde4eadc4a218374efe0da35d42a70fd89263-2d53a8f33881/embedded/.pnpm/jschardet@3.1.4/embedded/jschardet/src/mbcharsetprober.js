import { require_charsetprober } from "./charsetprober.js";
import { require_constants } from "./constants.js";
import { require_logger } from "./logger.js";
var __wakaru_require_mbcharsetprober_cache;
export function require_mbcharsetprober() {
if (__wakaru_require_mbcharsetprober_cache) return __wakaru_require_mbcharsetprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mbcharsetprober_cache = module2;
var CharSetProber = require_charsetprober();
var constants14 = require_constants();
var logger146 = require_logger();
function MultiByteCharSetProber() {
    CharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mDistributionAnalyzer = null;
        self2._mCodingSM = null;
        self2._mLastChar = [
            "\0",
            "\0"
        ];
    }
    this.reset = function() {
        MultiByteCharSetProber.prototype.reset.apply(this);
        if (this._mCodingSM) {
            this._mCodingSM.reset();
        }
        if (this._mDistributionAnalyzer) {
            this._mDistributionAnalyzer.reset();
        }
        this._mLastChar = [
            "\0",
            "\0"
        ];
    };
    this.getCharsetName = function() {};
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
                    this._mDistributionAnalyzer.feed(this._mLastChar.join(""), charLen);
                } else {
                    this._mDistributionAnalyzer.feed(aBuf.slice(i - 1, i + 1), charLen);
                }
            }
        }
        this._mLastChar[0] = aBuf[aLen - 1];
        if (this.getState() == constants14.detecting) {
            if (this._mDistributionAnalyzer.gotEnoughData() && this.getConfidence() > constants14.SHORTCUT_THRESHOLD) {
                this._mState = constants14.foundIt;
            }
        }
        return this.getState();
    };
    this.getConfidence = function() {
        return this._mDistributionAnalyzer.getConfidence();
    };
}
MultiByteCharSetProber.prototype = new CharSetProber();
module2.exports = MultiByteCharSetProber;

return module2.exports;
}
