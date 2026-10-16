import { require_charsetprober } from "./charsetprober.js";
import { require_codingstatemachine } from "./codingstatemachine.js";
import { require_constants } from "./constants.js";
import { require_escsm } from "./escsm.js";
var __wakaru_require_escprober_cache;
export function require_escprober() {
if (__wakaru_require_escprober_cache) return __wakaru_require_escprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_escprober_cache = module2;
var CharSetProber = require_charsetprober();
var CodingStateMachine = require_codingstatemachine();
var escsm = require_escsm();
var constants14 = require_constants();
function EscCharSetProber() {
    CharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mCodingSM = [
            new CodingStateMachine(escsm.HZSMModel),
            new CodingStateMachine(escsm.ISO2022CNSMModel),
            new CodingStateMachine(escsm.ISO2022JPSMModel),
            new CodingStateMachine(escsm.ISO2022KRSMModel)
        ];
        self2._supportedCharsetNames = [];
        for (const codingSM of self2._mCodingSM){
            self2._supportedCharsetNames.push(codingSM.getCodingStateMachine());
        }
        self2.reset();
    }
    this.reset = function() {
        EscCharSetProber.prototype.reset.apply(this);
        for(var i = 0, codingSM; codingSM = this._mCodingSM[i]; i++){
            if (!codingSM) continue;
            codingSM.active = true;
            codingSM.reset();
        }
        this._mActiveSM = self2._mCodingSM.length;
        this._mDetectedCharset = null;
    };
    this.getCharsetName = function() {
        return this._mDetectedCharset;
    };
    this.getSupportedCharsetNames = function() {
        return self2._supportedCharsetNames;
    };
    this.getConfidence = function() {
        if (this._mDetectedCharset) {
            return 0.99;
        } else {
            return 0;
        }
    };
    this.feed = function(aBuf) {
        for(var i = 0, c; i < aBuf.length; i++){
            c = aBuf[i];
            for(var j2 = 0, codingSM; codingSM = this._mCodingSM[j2]; j2++){
                if (!codingSM || !codingSM.active) continue;
                var codingState = codingSM.nextState(c);
                if (codingState == constants14.error) {
                    codingSM.active = false;
                    this._mActiveSM--;
                    if (this._mActiveSM <= 0) {
                        this._mState = constants14.notMe;
                        return this.getState();
                    }
                } else if (codingState == constants14.itsMe) {
                    this._mState = constants14.foundIt;
                    this._mDetectedCharset = codingSM.getCodingStateMachine();
                    return this.getState();
                }
            }
        }
        return this.getState();
    };
    init();
}
EscCharSetProber.prototype = new CharSetProber();
module2.exports = EscCharSetProber;

return module2.exports;
}
