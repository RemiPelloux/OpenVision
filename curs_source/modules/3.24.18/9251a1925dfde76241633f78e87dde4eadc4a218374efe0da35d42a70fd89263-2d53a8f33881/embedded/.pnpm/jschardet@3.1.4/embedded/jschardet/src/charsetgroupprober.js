import { require_charsetprober } from "./charsetprober.js";
import { require_constants } from "./constants.js";
import { require_logger } from "./logger.js";
var __wakaru_require_charsetgroupprober_cache;
export function require_charsetgroupprober() {
if (__wakaru_require_charsetgroupprober_cache) return __wakaru_require_charsetgroupprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_charsetgroupprober_cache = module2;
var constants14 = require_constants();
var CharSetProber = require_charsetprober();
var logger146 = require_logger();
function CharSetGroupProber() {
    CharSetProber.apply(this);
    var self2 = this;
    function init() {
        self2._mActiveNum = 0;
        self2._mProbers = [];
        self2._mBestGuessProber = null;
    }
    this.reset = function() {
        CharSetGroupProber.prototype.reset.apply(this);
        this._mActiveNum = 0;
        for(var i = 0, prober; prober = this._mProbers[i]; i++){
            if (prober) {
                prober.reset();
                prober.active = true;
                this._mActiveNum++;
            }
        }
        this._mBestGuessProber = null;
    };
    this.getCharsetName = function() {
        if (!this._mBestGuessProber) {
            this.getConfidence();
            if (!this._mBestGuessProber) return null;
        }
        return this._mBestGuessProber.getCharsetName();
    };
    this.getSupportedCharsetNames = function() {
        throw new Error("Unimplemented method getSupportedCharsetNames()");
    };
    this.feed = function(aBuf) {
        for(var i = 0, prober; prober = this._mProbers[i]; i++){
            if (!prober || !prober.active) continue;
            var st2 = prober.feed(aBuf);
            if (!st2) continue;
            if (st2 == constants14.foundIt) {
                this._mBestGuessProber = prober;
                return this.getState();
            } else if (st2 == constants14.notMe) {
                prober.active = false;
                this._mActiveNum--;
                if (this._mActiveNum <= 0) {
                    this._mState = constants14.notMe;
                    return this.getState();
                }
            }
        }
        return this.getState();
    };
    this.getConfidence = function() {
        var st2 = this.getState();
        if (st2 == constants14.foundIt) {
            return 0.99;
        } else if (st2 == constants14.notMe) {
            return 0.01;
        }
        var bestConf = 0;
        this._mBestGuessProber = null;
        for(var i = 0, prober; prober = this._mProbers[i]; i++){
            if (!prober) continue;
            if (!prober.active) {
                logger146.log(prober.getCharsetName() + " not active\n");
                continue;
            }
            var cf = prober.getConfidence();
            logger146.log(prober.getCharsetName() + " confidence = " + cf + "\n");
            if (bestConf < cf) {
                bestConf = cf;
                this._mBestGuessProber = prober;
            }
        }
        if (!this._mBestGuessProber) return 0;
        return bestConf;
    };
    init();
}
CharSetGroupProber.prototype = new CharSetProber();
module2.exports = CharSetGroupProber;

return module2.exports;
}
