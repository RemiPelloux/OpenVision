var n = require("./module-24720.js"), o = require("./module-76017.js");
function s() {
    n.apply(this);
    var e = "ê", t = "ë", r = "í", s = "î", i = "ï", a = "ð", l = "ó", c = "ô", u = "õ", d = "ISO-8859-8", p = "windows-1255", h = this;
    this.reset = function() {
        this._mFinalCharLogicalScore = 0, this._mFinalCharVisualScore = 0, this._mPrev = " ", this._mBeforePrev = " ";
    }, this.setModelProbers = function(e, t) {
        this._mLogicalProber = e, this._mVisualProber = t;
    }, this.isFinal = function(t) {
        return -1 != [
            e,
            r,
            i,
            l,
            u
        ].indexOf(t);
    }, this.isNonFinal = function(e) {
        return -1 != [
            t,
            s,
            a,
            c
        ].indexOf(e);
    }, this.feed = function(e) {
        if (this.getState() == o.notMe) return o.notMe;
        e = this.filterHighBitOnly(e);
        for(var t, r = 0; r < e.length; r++)" " == (t = e[r]) ? " " != this._mBeforePrev && (this.isFinal(this._mPrev) ? this._mFinalCharLogicalScore++ : this.isNonFinal(this._mPrev) && this._mFinalCharVisualScore++) : " " == this._mBeforePrev && this.isFinal(this._mPrev) && " " != t && this._mFinalCharVisualScore++, this._mBeforePrev = this._mPrev, this._mPrev = t;
        return o.detecting;
    }, this.getCharsetName = function() {
        var e = this._mFinalCharLogicalScore - this._mFinalCharVisualScore;
        if (e >= 5) return p;
        if (e <= -5) return d;
        var t = this._mLogicalProber.getConfidence() - this._mVisualProber.getConfidence();
        return t > .01 ? p : t < -.01 || e < 0 ? d : p;
    }, this.getState = function() {
        return this._mLogicalProber.getState() == o.notMe && this._mVisualProber.getState() == o.notMe ? o.notMe : o.detecting;
    }, h._mLogicalProber = null, h._mVisualProber = null, h.reset();
}
Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    var t = this.length >>> 0, r = Number(arguments[1]) || 0;
    for((r = r < 0 ? Math.ceil(r) : Math.floor(r)) < 0 && (r += t); r < t; r++)if (r in this && this[r] === e) return r;
    return -1;
}), s.prototype = new n, module.exports = s;
