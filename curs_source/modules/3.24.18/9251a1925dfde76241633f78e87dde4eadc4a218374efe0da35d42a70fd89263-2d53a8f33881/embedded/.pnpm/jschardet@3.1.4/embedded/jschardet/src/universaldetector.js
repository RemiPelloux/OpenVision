import { require_constants } from "./constants.js";
import { require_escprober } from "./escprober.js";
import { require_latin1prober } from "./latin1prober.js";
import { require_logger } from "./logger.js";
import { require_mbcsgroupprober } from "./mbcsgroupprober.js";
import { require_sbcsgroupprober } from "./sbcsgroupprober.js";
var __wakaru_require_universaldetector_cache;
export function require_universaldetector() {
if (__wakaru_require_universaldetector_cache) return __wakaru_require_universaldetector_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_universaldetector_cache = module2;
var constants14 = require_constants();
var MBCSGroupProber = require_mbcsgroupprober();
var SBCSGroupProber = require_sbcsgroupprober();
var Latin1Prober = require_latin1prober();
var EscCharSetProber = require_escprober();
var logger146 = require_logger();
var supportedEncodings = (function() {
    const BOM_UTF = [
        "UTF-8",
        "UTF-32LE",
        "UTF-32BE",
        "UTF-32BE",
        "UTF-16LE",
        "UTF-16BE",
        "X-ISO-10646-UCS-4-3412",
        "X-ISO-10646-UCS-4-2143"
    ];
    const probers = [
        new EscCharSetProber(),
        new MBCSGroupProber(),
        new SBCSGroupProber(),
        new Latin1Prober()
    ];
    const encodings = BOM_UTF.slice(0);
    for (const prober of probers){
        [].push.apply(encodings, prober.getSupportedCharsetNames());
    }
    return encodings;
})();
var supportedEncodingsDenormalized = (function() {
    const denormalizedEncodings = [];
    for (const encoding of supportedEncodings){
        denormalizedEncodings.push(encoding.toLocaleLowerCase(), encoding.toLocaleLowerCase().replace(/-/g, ""));
    }
    return denormalizedEncodings;
})();
function UniversalDetector(options2) {
    if (!options2) options2 = {};
    if (typeof options2.minimumThreshold !== "number") {
        if (options2.detectEncodings) {
            options2.minimumThreshold = 0;
        } else {
            options2.minimumThreshold = 0.2;
        }
    }
    if (options2.detectEncodings) {
        for (const encoding of options2.detectEncodings){
            if (!supportedEncodingsDenormalized.includes(encoding.toLowerCase())) {
                throw new Error(`Encoding ${encoding} is not supported. Supported encodings: ${supportedEncodings}.`);
            }
        }
    }
    var _state = {
        pureAscii: 0,
        escAscii: 1,
        highbyte: 2
    };
    var self2 = this;
    function init() {
        self2._highBitDetector = /[\x80-\xFF]/;
        self2._escDetector = /(\x1B|~\{)/;
        self2._mEscCharsetProber = null;
        self2._mCharsetProbers = [];
        self2.reset();
    }
    function canDetectEncoding(encoding) {
        if (!options2.detectEncodings) {
            return true;
        }
        var lowerDetectedEncodings = options2.detectEncodings.map((encoding2)=>encoding2.toLowerCase());
        return lowerDetectedEncodings.includes(encoding.toLowerCase());
    }
    this.reset = function() {
        this.result = {
            "encoding": null,
            "confidence": 0
        };
        this.results = [];
        this.done = false;
        this._mStart = true;
        this._mGotData = false;
        this._mInputState = _state.pureAscii;
        this._mLastChar = [];
        this._mBOM = "";
        if (this._mEscCharsetProber) {
            this._mEscCharsetProber.reset();
        }
        for(var i = 0, prober; prober = this._mCharsetProbers[i]; i++){
            prober.reset();
        }
    };
    this.feed = function(aBuf) {
        if (this.done) return;
        var aLen = aBuf.length;
        if (!aLen) return;
        if (!this._mGotData) {
            this._mBOM += aBuf;
            if (this._mBOM.slice(0, 3) == "\xEF\xBB\xBF" && canDetectEncoding("UTF-8")) {
                this.result = {
                    "encoding": "UTF-8",
                    "confidence": 1
                };
            } else if (this._mBOM.slice(0, 4) == "\xFF\xFE\0\0" && canDetectEncoding("UTF-32LE")) {
                this.result = {
                    "encoding": "UTF-32LE",
                    "confidence": 1
                };
            } else if (this._mBOM.slice(0, 4) == "\0\0\xFE\xFF" && canDetectEncoding("UTF-32BE")) {
                this.result = {
                    "encoding": "UTF-32BE",
                    "confidence": 1
                };
            } else if (this._mBOM.slice(0, 4) == "\xFE\xFF\0\0" && canDetectEncoding("X-ISO-10646-UCS-4-3412")) {
                this.result = {
                    "encoding": "X-ISO-10646-UCS-4-3412",
                    "confidence": 1
                };
            } else if (this._mBOM.slice(0, 4) == "\0\0\xFF\xFE" && canDetectEncoding("X-ISO-10646-UCS-4-2143")) {
                this.result = {
                    "encoding": "X-ISO-10646-UCS-4-2143",
                    "confidence": 1
                };
            } else if (this._mBOM.slice(0, 2) == "\xFF\xFE" && canDetectEncoding("UTF-16LE")) {
                this.result = {
                    "encoding": "UTF-16LE",
                    "confidence": 1
                };
            } else if (this._mBOM.slice(0, 2) == "\xFE\xFF" && canDetectEncoding("UTF-16BE")) {
                this.result = {
                    "encoding": "UTF-16BE",
                    "confidence": 1
                };
            }
            if (this.result.confidence > 0) {
                this.results = [
                    this.result
                ];
            }
            if (this._mBOM.length > 3) {
                this._mGotData = true;
            }
        }
        if (this.result.encoding && this.result.confidence > 0) {
            this.done = true;
            return;
        }
        if (this._mInputState == _state.pureAscii) {
            if (this._highBitDetector.test(aBuf)) {
                this._mInputState = _state.highbyte;
            } else if (this._escDetector.test(this._mLastChar.join("") + aBuf)) {
                this._mInputState = _state.escAscii;
            }
        }
        this._mLastChar = aBuf.slice(-1).split("");
        if (this._mInputState == _state.escAscii) {
            if (!this._mEscCharsetProber) {
                this._mEscCharsetProber = new EscCharSetProber();
            }
            if (this._mEscCharsetProber.feed(aBuf) == constants14.foundIt && canDetectEncoding(this._mEscCharsetProber.getCharsetName())) {
                this.result = {
                    "encoding": this._mEscCharsetProber.getCharsetName(),
                    "confidence": this._mEscCharsetProber.getConfidence()
                };
                this.results = [
                    this.result
                ];
                this.done = true;
            }
        } else if (this._mInputState == _state.highbyte) {
            if (this._mCharsetProbers.length == 0) {
                this._mCharsetProbers = [
                    new MBCSGroupProber(),
                    new SBCSGroupProber(),
                    new Latin1Prober()
                ];
            }
            for(var i = 0, prober; prober = this._mCharsetProbers[i]; i++){
                if (prober.feed(aBuf) == constants14.foundIt && canDetectEncoding(prober.getCharsetName())) {
                    this.result = {
                        "encoding": prober.getCharsetName(),
                        "confidence": prober.getConfidence()
                    };
                    this.results = [
                        this.result
                    ];
                    this.done = true;
                    break;
                }
            }
        }
    };
    this.close = function() {
        if (this.done) return;
        if (this._mBOM.length === 0) {
            logger146.log("no data received!\n");
            return;
        }
        this.done = true;
        if (this._mInputState == _state.pureAscii && canDetectEncoding("ascii")) {
            logger146.log("pure ascii");
            this.result = {
                "encoding": "ascii",
                "confidence": 1
            };
            this.results.push(this.result);
            return this.result;
        }
        if (this._mInputState == _state.highbyte) {
            let windows_1252_confidence = 0;
            let windows_1250_detected = false;
            for(var i = 0, prober; prober = this._mCharsetProbers[i]; i++){
                if (!prober) continue;
                const charsetName = prober.getCharsetName();
                const confidence = prober.getConfidence();
                if (prober.getCharsetName() === "windows-1252") {
                    windows_1252_confidence = confidence;
                }
                if (!charsetName || !canDetectEncoding(charsetName)) continue;
                this.results.push({
                    "encoding": prober.getCharsetName(),
                    "confidence": confidence
                });
                if (prober.getCharsetName() === "windows-1250") {
                    windows_1250_detected = true;
                }
                logger146.log(prober.getCharsetName() + " confidence " + confidence);
            }
            if (windows_1252_confidence && !windows_1250_detected && canDetectEncoding("windows-1250")) {
                this.results.push({
                    "encoding": "windows-1250",
                    "confidence": windows_1252_confidence - Math.pow(5 / 10, String(windows_1252_confidence).length - 1)
                });
            }
            this.results.sort(function(a, b2) {
                return b2.confidence - a.confidence;
            });
            if (this.results.length > 0) {
                var topResult = this.results[0];
                if (topResult.confidence >= options2.minimumThreshold) {
                    this.result = topResult;
                    return topResult;
                }
            }
        }
        if (logger146.enabled) {
            logger146.log("no probers hit minimum threshhold\n");
            for(var i = 0, prober; prober = this._mCharsetProbers[i]; i++){
                if (!prober || !canDetectEncoding(prober.getCharsetName())) continue;
                logger146.log(prober.getCharsetName() + " confidence = " + prober.getConfidence() + "\n");
            }
        }
    };
    init();
}
module2.exports = UniversalDetector;

return module2.exports;
}
