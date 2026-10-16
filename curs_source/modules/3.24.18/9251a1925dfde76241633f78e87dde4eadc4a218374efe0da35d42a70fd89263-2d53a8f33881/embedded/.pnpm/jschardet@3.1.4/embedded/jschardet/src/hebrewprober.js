import { require_charsetprober } from "./charsetprober.js";
import { require_constants } from "./constants.js";
var __wakaru_require_hebrewprober_cache;
export function require_hebrewprober() {
if (__wakaru_require_hebrewprober_cache) return __wakaru_require_hebrewprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_hebrewprober_cache = module2;
var CharSetProber = require_charsetprober();
var constants14 = require_constants();
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt) {
        var len = this.length >>> 0;
        var from2 = Number(arguments[1]) || 0;
        from2 = from2 < 0 ? Math.ceil(from2) : Math.floor(from2);
        if (from2 < 0) from2 += len;
        for(; from2 < len; from2++){
            if (from2 in this && this[from2] === elt) return from2;
        }
        return -1;
    };
}
function HebrewProber() {
    CharSetProber.apply(this);
    var FINAL_KAF = "\xEA";
    var NORMAL_KAF = "\xEB";
    var FINAL_MEM = "\xED";
    var NORMAL_MEM = "\xEE";
    var FINAL_NUN = "\xEF";
    var NORMAL_NUN = "\xF0";
    var FINAL_PE = "\xF3";
    var NORMAL_PE = "\xF4";
    var FINAL_TSADI = "\xF5";
    var NORMAL_TSADI = "\xF6";
    var MIN_FINAL_CHAR_DISTANCE = 5;
    var MIN_MODEL_DISTANCE = 0.01;
    var VISUAL_HEBREW_NAME = "ISO-8859-8";
    var LOGICAL_HEBREW_NAME = "windows-1255";
    var self2 = this;
    function init() {
        self2._mLogicalProber = null;
        self2._mVisualProber = null;
        self2.reset();
    }
    this.reset = function() {
        this._mFinalCharLogicalScore = 0;
        this._mFinalCharVisualScore = 0;
        this._mPrev = " ";
        this._mBeforePrev = " ";
    };
    this.setModelProbers = function(logicalProber, visualProber) {
        this._mLogicalProber = logicalProber;
        this._mVisualProber = visualProber;
    };
    this.isFinal = function(c) {
        return [
            FINAL_KAF,
            FINAL_MEM,
            FINAL_NUN,
            FINAL_PE,
            FINAL_TSADI
        ].indexOf(c) != -1;
    };
    this.isNonFinal = function(c) {
        return [
            NORMAL_KAF,
            NORMAL_MEM,
            NORMAL_NUN,
            NORMAL_PE
        ].indexOf(c) != -1;
    };
    this.feed = function(aBuf) {
        if (this.getState() == constants14.notMe) {
            return constants14.notMe;
        }
        aBuf = this.filterHighBitOnly(aBuf);
        for(var i = 0, cur; i < aBuf.length; i++){
            cur = aBuf[i];
            if (cur == " ") {
                if (this._mBeforePrev != " ") {
                    if (this.isFinal(this._mPrev)) {
                        this._mFinalCharLogicalScore++;
                    } else if (this.isNonFinal(this._mPrev)) {
                        this._mFinalCharVisualScore++;
                    }
                }
            } else {
                if (this._mBeforePrev == " " && this.isFinal(this._mPrev) && cur != " ") {
                    this._mFinalCharVisualScore++;
                }
            }
            this._mBeforePrev = this._mPrev;
            this._mPrev = cur;
        }
        return constants14.detecting;
    };
    this.getCharsetName = function() {
        var finalsub = this._mFinalCharLogicalScore - this._mFinalCharVisualScore;
        if (finalsub >= MIN_FINAL_CHAR_DISTANCE) {
            return LOGICAL_HEBREW_NAME;
        }
        if (finalsub <= -MIN_FINAL_CHAR_DISTANCE) {
            return VISUAL_HEBREW_NAME;
        }
        var modelsub = this._mLogicalProber.getConfidence() - this._mVisualProber.getConfidence();
        if (modelsub > MIN_MODEL_DISTANCE) {
            return LOGICAL_HEBREW_NAME;
        }
        if (modelsub < -MIN_MODEL_DISTANCE) {
            return VISUAL_HEBREW_NAME;
        }
        if (finalsub < 0) {
            return VISUAL_HEBREW_NAME;
        }
        return LOGICAL_HEBREW_NAME;
    };
    this.getState = function() {
        if (this._mLogicalProber.getState() == constants14.notMe && this._mVisualProber.getState() == constants14.notMe) {
            return constants14.notMe;
        }
        return constants14.detecting;
    };
    init();
}
HebrewProber.prototype = new CharSetProber();
module2.exports = HebrewProber;

return module2.exports;
}
