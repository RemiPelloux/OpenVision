var n = require("./module-76017.js"), s = require("./module-44556.js"), o = require("./module-28066.js"), i = require("./module-72179.js"), a = require("./module-49229.js"), c = require("./module-66722.js");
const l = function() {
    const e = [
        new a,
        new s,
        new o,
        new i
    ], t = [
        "UTF-8",
        "UTF-32LE",
        "UTF-32BE",
        "UTF-32BE",
        "UTF-16LE",
        "UTF-16BE",
        "X-ISO-10646-UCS-4-3412",
        "X-ISO-10646-UCS-4-2143"
    ].slice(0);
    for (const r of e)[].push.apply(t, r.getSupportedCharsetNames());
    return t;
}(), u = function() {
    const e = [];
    for (const t of l)e.push(t.toLocaleLowerCase(), t.toLocaleLowerCase().replace(/-/g, ""));
    return e;
}();
module.exports = function(e) {
    if (e || (e = {}), "number" != typeof e.minimumThreshold && (e.detectEncodings ? e.minimumThreshold = 0 : e.minimumThreshold = .2), e.detectEncodings) {
        for (const t of e.detectEncodings)if (!u.includes(t.toLowerCase())) throw new Error(`Encoding ${t} is not supported. Supported encodings: ${l}.`);
    }
    var t = 0, r = 1, d = 2, p = this;
    function m(t) {
        if (!e.detectEncodings) return !0;
        var r = e.detectEncodings.map((e)=>e.toLowerCase());
        return r.includes(t.toLowerCase());
    }
    this.reset = function() {
        this.result = {
            encoding: null,
            confidence: 0
        }, this.results = [], this.done = !1, this._mStart = !0, this._mGotData = !1, this._mInputState = t, this._mLastChar = [], this._mBOM = "", this._mEscCharsetProber && this._mEscCharsetProber.reset();
        for(var e, r = 0; e = this._mCharsetProbers[r]; r++)e.reset();
    }, this.feed = function(e) {
        if (!this.done && e.length) {
            if (this._mGotData || (this._mBOM += e, "ï»¿" == this._mBOM.slice(0, 3) && m("UTF-8") ? this.result = {
                encoding: "UTF-8",
                confidence: 1
            } : "ÿþ\0\0" == this._mBOM.slice(0, 4) && m("UTF-32LE") ? this.result = {
                encoding: "UTF-32LE",
                confidence: 1
            } : "\0\0þÿ" == this._mBOM.slice(0, 4) && m("UTF-32BE") ? this.result = {
                encoding: "UTF-32BE",
                confidence: 1
            } : "þÿ\0\0" == this._mBOM.slice(0, 4) && m("X-ISO-10646-UCS-4-3412") ? this.result = {
                encoding: "X-ISO-10646-UCS-4-3412",
                confidence: 1
            } : "\0\0ÿþ" == this._mBOM.slice(0, 4) && m("X-ISO-10646-UCS-4-2143") ? this.result = {
                encoding: "X-ISO-10646-UCS-4-2143",
                confidence: 1
            } : "ÿþ" == this._mBOM.slice(0, 2) && m("UTF-16LE") ? this.result = {
                encoding: "UTF-16LE",
                confidence: 1
            } : "þÿ" == this._mBOM.slice(0, 2) && m("UTF-16BE") && (this.result = {
                encoding: "UTF-16BE",
                confidence: 1
            }), this.result.confidence > 0 && (this.results = [
                this.result
            ]), this._mBOM.length > 3 && (this._mGotData = !0)), this.result.encoding && this.result.confidence > 0) this.done = !0;
            else if (this._mInputState == t && (this._highBitDetector.test(e) ? this._mInputState = d : this._escDetector.test(this._mLastChar.join("") + e) && (this._mInputState = r)), this._mLastChar = e.slice(-1).split(""), this._mInputState == r) this._mEscCharsetProber || (this._mEscCharsetProber = new a), this._mEscCharsetProber.feed(e) == n.foundIt && m(this._mEscCharsetProber.getCharsetName()) && (this.result = {
                encoding: this._mEscCharsetProber.getCharsetName(),
                confidence: this._mEscCharsetProber.getConfidence()
            }, this.results = [
                this.result
            ], this.done = !0);
            else if (this._mInputState == d) {
                0 == this._mCharsetProbers.length && (this._mCharsetProbers = [
                    new s,
                    new o,
                    new i
                ]);
                for(var c, l = 0; c = this._mCharsetProbers[l]; l++)if (c.feed(e) == n.foundIt && m(c.getCharsetName())) {
                    this.result = {
                        encoding: c.getCharsetName(),
                        confidence: c.getConfidence()
                    }, this.results = [
                        this.result
                    ], this.done = !0;
                    break;
                }
            }
        }
    }, this.close = function() {
        if (!this.done) if (0 !== this._mBOM.length) {
            if (this.done = !0, this._mInputState == t && m("ascii")) return c.log("pure ascii"), this.result = {
                encoding: "ascii",
                confidence: 1
            }, this.results.push(this.result), this.result;
            if (this._mInputState == d) {
                let t = 0, o = !1;
                for(var r = 0; s = this._mCharsetProbers[r]; r++){
                    if (!s) continue;
                    const e = s.getCharsetName(), r = s.getConfidence();
                    "windows-1252" === s.getCharsetName() && (t = r), e && m(e) && (this.results.push({
                        encoding: s.getCharsetName(),
                        confidence: r
                    }), "windows-1250" === s.getCharsetName() && (o = !0), c.log(s.getCharsetName() + " confidence " + r));
                }
                if (t && !o && m("windows-1250") && this.results.push({
                    encoding: "windows-1250",
                    confidence: t - Math.pow(.5, String(t).length - 1)
                }), this.results.sort(function(e, t) {
                    return t.confidence - e.confidence;
                }), this.results.length > 0) {
                    var n = this.results[0];
                    if (n.confidence >= e.minimumThreshold) return this.result = n, n;
                }
            }
            if (c.enabled) {
                c.log("no probers hit minimum threshhold\n");
                var s;
                for(r = 0; s = this._mCharsetProbers[r]; r++)s && m(s.getCharsetName()) && c.log(s.getCharsetName() + " confidence = " + s.getConfidence() + "\n");
            }
        } else c.log("no data received!\n");
    }, p._highBitDetector = /[\x80-\xFF]/, p._escDetector = /(\x1B|~\{)/, p._mEscCharsetProber = null, p._mCharsetProbers = [], p.reset();
};
