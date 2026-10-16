import { require_charsetprober } from "./charsetprober.js";
import { require_constants } from "./constants.js";
var __wakaru_require_latin1prober_cache;
export function require_latin1prober() {
if (__wakaru_require_latin1prober_cache) return __wakaru_require_latin1prober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_latin1prober_cache = module2;
var CharSetProber = require_charsetprober();
var Constants = require_constants();
var UDF = 0;
var OTH = 1;
var ASC = 2;
var ASS = 3;
var ACV = 4;
var ACO = 5;
var ASV = 6;
var ASO = 7;
var Latin1_CharToClass = [
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    ASC,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    ASS,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    UDF,
    OTH,
    ASO,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    ACO,
    OTH,
    ACO,
    UDF,
    ACO,
    UDF,
    UDF,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    ASO,
    OTH,
    ASO,
    UDF,
    ASO,
    ACO,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    OTH,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    ACO,
    ACO,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    ACO,
    ACO,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    OTH,
    ACV,
    ACV,
    ACV,
    ACV,
    ACV,
    ACO,
    ACO,
    ACO,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    ASO,
    ASO,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    ASO,
    ASO,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    OTH,
    ASV,
    ASV,
    ASV,
    ASV,
    ASV,
    ASO,
    ASO,
    ASO
];
var Latin1ClassModel = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    3,
    3,
    3,
    1,
    1,
    3,
    3,
    0,
    3,
    3,
    3,
    1,
    2,
    1,
    2,
    0,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    3,
    1,
    3,
    1,
    1,
    1,
    3,
    0,
    3,
    1,
    3,
    1,
    1,
    3,
    3
];
function Latin1Prober() {
    CharSetProber.apply(this);
    var FREQ_CAT_NUM = 4;
    var CLASS_NUM = 8;
    var self2 = this;
    function init() {
        self2.reset();
    }
    this.reset = function() {
        this._mLastCharClass = OTH;
        this._mFreqCounter = [];
        for(var i = 0; i < FREQ_CAT_NUM; this._mFreqCounter[i++] = 0);
        Latin1Prober.prototype.reset.apply(this);
    };
    this.getCharsetName = function() {
        return "windows-1252";
    };
    this.getSupportedCharsetNames = function() {
        return [
            this.getCharsetName()
        ];
    };
    this.feed = function(aBuf) {
        aBuf = this.removeXmlTags(aBuf);
        for(var i = 0; i < aBuf.length; i++){
            var c = aBuf.charCodeAt(i);
            var charClass = Latin1_CharToClass[c];
            var freq = Latin1ClassModel[this._mLastCharClass * CLASS_NUM + charClass];
            if (freq == 0) {
                this._mState = Constants.notMe;
                break;
            }
            this._mFreqCounter[freq]++;
            this._mLastCharClass = charClass;
        }
        return this.getState();
    };
    this.getConfidence = function() {
        var confidence;
        if (this.getState() == Constants.notMe) {
            return 0.01;
        }
        var total = 0;
        for(var i = 0; i < this._mFreqCounter.length; i++){
            total += this._mFreqCounter[i];
        }
        if (total < 0.01) {
            confidence = 0;
        } else {
            confidence = this._mFreqCounter[3] / total - this._mFreqCounter[1] * 20 / total;
        }
        if (confidence < 0) {
            confidence = 0;
        }
        confidence = confidence * 0.95;
        return confidence;
    };
    init();
}
Latin1Prober.prototype = new CharSetProber();
module2.exports = Latin1Prober;

return module2.exports;
}
