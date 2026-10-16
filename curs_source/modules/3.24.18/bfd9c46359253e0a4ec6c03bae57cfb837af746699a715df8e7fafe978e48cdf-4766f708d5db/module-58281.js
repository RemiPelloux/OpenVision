var n = require("./module-76017.js"), s = require("./module-24720.js"), o = require("./module-66722.js");
function i() {
    s.apply(this);
    var e = this;
    this.reset = function() {
        i.prototype.reset.apply(this), this._mActiveNum = 0;
        for(var e, t = 0; e = this._mProbers[t]; t++)e && (e.reset(), e.active = !0, this._mActiveNum++);
        this._mBestGuessProber = null;
    }, this.getCharsetName = function() {
        return this._mBestGuessProber || (this.getConfidence(), this._mBestGuessProber) ? this._mBestGuessProber.getCharsetName() : null;
    }, this.getSupportedCharsetNames = function() {
        throw new Error("Unimplemented method getSupportedCharsetNames()");
    }, this.feed = function(e) {
        for(var t, r = 0; t = this._mProbers[r]; r++)if (t && t.active) {
            var s = t.feed(e);
            if (s) {
                if (s == n.foundIt) return this._mBestGuessProber = t, this.getState();
                if (s == n.notMe && (t.active = !1, this._mActiveNum--, this._mActiveNum <= 0)) return this._mState = n.notMe, this.getState();
            }
        }
        return this.getState();
    }, this.getConfidence = function() {
        var e = this.getState();
        if (e == n.foundIt) return .99;
        if (e == n.notMe) return .01;
        var t = 0;
        this._mBestGuessProber = null;
        for(var r, s = 0; r = this._mProbers[s]; s++)if (r) if (r.active) {
            var i = r.getConfidence();
            o.log(r.getCharsetName() + " confidence = " + i + "\n"), t < i && (t = i, this._mBestGuessProber = r);
        } else o.log(r.getCharsetName() + " not active\n");
        return this._mBestGuessProber ? t : 0;
    }, e._mActiveNum = 0, e._mProbers = [], e._mBestGuessProber = null;
}
i.prototype = new s, module.exports = i;
