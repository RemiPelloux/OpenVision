import { require_constants } from "./constants.js";
var __wakaru_require_charsetprober_cache;
export function require_charsetprober() {
if (__wakaru_require_charsetprober_cache) return __wakaru_require_charsetprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_charsetprober_cache = module2;
var constants14 = require_constants();
function CharSetProber() {
    this.reset = function() {
        this._mState = constants14.detecting;
    };
    this.getCharsetName = function() {
        return null;
    };
    this.getSupportedCharsetNames = function() {
        throw new Error("Unimplemented method getSupportedCharsetNames()");
    };
    this.feed = function(aBuf) {};
    this.getState = function() {
        return this._mState;
    };
    this.getConfidence = function() {
        return 0;
    };
    this.filterHighBitOnly = function(aBuf) {
        aBuf = aBuf.replace(/[\x00-\x7F]+/g, " ");
        return aBuf;
    };
    this.filterWithoutEnglishLetters = function(aBuf) {
        aBuf = aBuf.replace(/[A-Za-z]+/g, " ");
        return aBuf;
    };
    this.removeXmlTags = function(aBuf) {
        var result = "";
        var inTag = false;
        var prev = 0;
        for(var curr = 0; curr < aBuf.length; curr++){
            var c = aBuf[curr];
            if (c == ">" && aBuf[curr - 1] !== "?") {
                prev = curr + 1;
                inTag = false;
            } else if (c == "<" && aBuf[curr + 1] !== "?") {
                if (curr > prev && !inTag) {
                    result = result + aBuf.substring(prev, curr) + " ";
                }
                inTag = true;
            }
        }
        if (!inTag) {
            result = result + aBuf.substring(prev);
        }
        return result;
    };
}
module2.exports = CharSetProber;

return module2.exports;
}
