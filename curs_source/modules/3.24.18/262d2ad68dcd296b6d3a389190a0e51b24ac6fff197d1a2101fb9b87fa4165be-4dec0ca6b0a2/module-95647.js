var n = require("./module-24720.js"), o = require("./module-76017.js"), s = require("./module-66722.js");
function i(e, t, r) {
    n.apply(this);
    var a = this;
    this.reset = function() {
        i.prototype.reset.apply(this), this._mLastOrder = 255, this._mSeqCounters = [];
        for(var e = 0; e < 4; this._mSeqCounters[e++] = 0);
        this._mTotalSeqs = 0, this._mTotalChar = 0, this._mFreqChar = 0;
    }, this.getCharsetName = function() {
        return this._mNameProber ? this._mNameProber.getCharsetName() : this._mModel.charsetName;
    }, this.feed = function(e) {
        this._mModel.keepEnglishLetter || (e = this.filterWithoutEnglishLetters(e));
        var t = e.length;
        if (!t) return this.getState();
        for(var r, n = 0; n < t; n++){
            r = e.charCodeAt(n);
            var i = this._mModel.charToOrderMap[r];
            i < 250 && this._mTotalChar++, i < 64 && (this._mFreqChar++, this._mLastOrder < 64 && (this._mTotalSeqs++, this._mReversed ? this._mSeqCounters[this._mModel.precedenceMatrix[64 * i + this._mLastOrder]]++ : this._mSeqCounters[this._mModel.precedenceMatrix[64 * this._mLastOrder + i]]++)), this._mLastOrder = i;
        }
        if (this.getState() == o.detecting && a._mTotalSeqs > 1024) {
            var l = this.getConfidence();
            l > .95 ? s.log(this._mModel.charsetName + " confidence = " + l + ", we have a winner\n") : l < .05 && (s.log(this._mModel.charsetName + " confidence = " + l + ", below negative shortcut threshhold 0.05\n"), this._mState = o.notMe);
        }
        return this.getState();
    }, this.getConfidence = function() {
        var e = .01;
        return this._mTotalSeqs > 0 && (e = 1 * this._mSeqCounters[3] / this._mTotalSeqs / this._mModel.mTypicalPositiveRatio, (e *= this._mFreqChar / this._mTotalChar) >= 1 && (e = .99)), e;
    }, function(e, t, r) {
        a._mModel = e, a._mReversed = t, a._mNameProber = r, a.reset();
    }(e, t = void 0 !== t && t, r = void 0 !== r ? r : null);
}
i.prototype = new n, module.exports = i;
