import { require_charsetprober } from "./charsetprober.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_constants } from "./constants.js";
import { require_utf8 } from "./mbcssm/utf8.js";
var __wakaru_require_utf8prober_cache;
export function require_utf8prober() {
if (__wakaru_require_utf8prober_cache) return __wakaru_require_utf8prober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_utf8prober_cache = module2;
var CodingStateMachine = require_codingstatemachine();
var CharSetProber = require_charsetprober();
var constants14 = require_constants();
var UTF8SMModel = require_utf8();
function UTF8Prober() {
    CharSetProber.apply(this);
    var ONE_CHAR_PROB = 0.5;
    var self2 = this;
    function init() {
        self2._mCodingSM = new CodingStateMachine(UTF8SMModel);
        self2.reset();
    }
    this.reset = function() {
        UTF8Prober.prototype.reset.apply(this);
        this._mCodingSM.reset();
        this._mNumOfMBChar = 0;
        this._mMBCharLen = 0;
        this._mFullLen = 0;
        this._mBasicAsciiLen = 0;
    };
    this.getCharsetName = function() {
        return "UTF-8";
    };
    this.feed = function(aBuf) {
        this._mFullLen += aBuf.length;
        for(var i = 0, c; i < aBuf.length; i++){
            c = aBuf[i];
            var codingState = this._mCodingSM.nextState(c);
            if (codingState == constants14.error) {
                this._mState = constants14.notMe;
                break;
            } else if (codingState == constants14.itsMe) {
                this._mState = constants14.foundIt;
                break;
            } else if (codingState == constants14.start) {
                if (this._mCodingSM.getCurrentCharLen() >= 2) {
                    this._mNumOfMBChar++;
                    this._mMBCharLen += this._mCodingSM.getCurrentCharLen();
                } else if (c.charCodeAt(0) < 128) {
                    this._mBasicAsciiLen++;
                }
            }
        }
        if (this.getState() == constants14.detecting) {
            if (this.getConfidence() > constants14.SHORTCUT_THRESHOLD) {
                this._mState = constants14.foundIt;
            }
        }
        return this.getState();
    };
    this.getConfidence = function() {
        var unlike = 0.99;
        var mbCharRatio = 0;
        var nonBasciAsciiLen = this._mFullLen - this._mBasicAsciiLen;
        if (nonBasciAsciiLen > 0) {
            mbCharRatio = this._mMBCharLen / nonBasciAsciiLen;
        }
        if (this._mNumOfMBChar < 6 && mbCharRatio <= 0.6) {
            unlike *= Math.pow(ONE_CHAR_PROB, this._mNumOfMBChar);
            return 1 - unlike;
        } else {
            return unlike;
        }
    };
    init();
}
UTF8Prober.prototype = new CharSetProber();
module2.exports = UTF8Prober;

return module2.exports;
}
