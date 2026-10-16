import { require_charsetprober } from "./charsetprober.js";
import { require_constants } from "./constants.js";
import { require_logger } from "./logger.js";
var __wakaru_require_sbcharsetprober_cache;
export function require_sbcharsetprober() {
if (__wakaru_require_sbcharsetprober_cache) return __wakaru_require_sbcharsetprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sbcharsetprober_cache = module2;
var CharSetProber = require_charsetprober();
var constants14 = require_constants();
var logger146 = require_logger();
function SingleByteCharSetProber(model, reversed, nameProber) {
    CharSetProber.apply(this);
    var SAMPLE_SIZE = 64;
    var SB_ENOUGH_REL_THRESHOLD = 1024;
    var POSITIVE_SHORTCUT_THRESHOLD = 0.95;
    var NEGATIVE_SHORTCUT_THRESHOLD = 0.05;
    var SYMBOL_CAT_ORDER = 250;
    var NUMBER_OF_SEQ_CAT = 4;
    var POSITIVE_CAT = NUMBER_OF_SEQ_CAT - 1;
    var self2 = this;
    function init(model2, reversed2, nameProber2) {
        self2._mModel = model2;
        self2._mReversed = reversed2;
        self2._mNameProber = nameProber2;
        self2.reset();
    }
    this.reset = function() {
        SingleByteCharSetProber.prototype.reset.apply(this);
        this._mLastOrder = 255;
        this._mSeqCounters = [];
        for(var i = 0; i < NUMBER_OF_SEQ_CAT; this._mSeqCounters[i++] = 0);
        this._mTotalSeqs = 0;
        this._mTotalChar = 0;
        this._mFreqChar = 0;
    };
    this.getCharsetName = function() {
        if (this._mNameProber) {
            return this._mNameProber.getCharsetName();
        } else {
            return this._mModel.charsetName;
        }
    };
    this.feed = function(aBuf) {
        if (!this._mModel.keepEnglishLetter) {
            aBuf = this.filterWithoutEnglishLetters(aBuf);
        }
        var aLen = aBuf.length;
        if (!aLen) {
            return this.getState();
        }
        for(var i = 0, c; i < aLen; i++){
            c = aBuf.charCodeAt(i);
            var order = this._mModel.charToOrderMap[c];
            if (order < SYMBOL_CAT_ORDER) {
                this._mTotalChar++;
            }
            if (order < SAMPLE_SIZE) {
                this._mFreqChar++;
                if (this._mLastOrder < SAMPLE_SIZE) {
                    this._mTotalSeqs++;
                    if (!this._mReversed) {
                        this._mSeqCounters[this._mModel.precedenceMatrix[this._mLastOrder * SAMPLE_SIZE + order]]++;
                    } else {
                        this._mSeqCounters[this._mModel.precedenceMatrix[order * SAMPLE_SIZE + this._mLastOrder]]++;
                    }
                }
            }
            this._mLastOrder = order;
        }
        if (this.getState() == constants14.detecting) {
            if (self2._mTotalSeqs > SB_ENOUGH_REL_THRESHOLD) {
                var cf = this.getConfidence();
                if (cf > POSITIVE_SHORTCUT_THRESHOLD) {
                    logger146.log(this._mModel.charsetName + " confidence = " + cf + ", we have a winner\n");
                } else if (cf < NEGATIVE_SHORTCUT_THRESHOLD) {
                    logger146.log(this._mModel.charsetName + " confidence = " + cf + ", below negative shortcut threshhold " + NEGATIVE_SHORTCUT_THRESHOLD + "\n");
                    this._mState = constants14.notMe;
                }
            }
        }
        return this.getState();
    };
    this.getConfidence = function() {
        var r = 0.01;
        if (this._mTotalSeqs > 0) {
            r = 1 * this._mSeqCounters[POSITIVE_CAT] / this._mTotalSeqs / this._mModel.mTypicalPositiveRatio;
            r *= this._mFreqChar / this._mTotalChar;
            if (r >= 1) {
                r = 0.99;
            }
        }
        return r;
    };
    reversed = reversed !== void 0 ? reversed : false;
    nameProber = nameProber !== void 0 ? nameProber : null;
    init(model, reversed, nameProber);
}
SingleByteCharSetProber.prototype = new CharSetProber();
module2.exports = SingleByteCharSetProber;

return module2.exports;
}
