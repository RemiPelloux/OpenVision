var n = require("./module-39306.js"), o = require("./module-24720.js"), s = require("./module-76017.js"), i = require("./module-27465.js");
function a() {
    o.apply(this);
    var e = this;
    this.reset = function() {
        a.prototype.reset.apply(this), this._mCodingSM.reset(), this._mNumOfMBChar = 0, this._mMBCharLen = 0, this._mFullLen = 0, this._mBasicAsciiLen = 0;
    }, this.getCharsetName = function() {
        return "UTF-8";
    }, this.feed = function(e) {
        this._mFullLen += e.length;
        for(var t, r = 0; r < e.length; r++){
            t = e[r];
            var n = this._mCodingSM.nextState(t);
            if (n == s.error) {
                this._mState = s.notMe;
                break;
            }
            if (n == s.itsMe) {
                this._mState = s.foundIt;
                break;
            }
            n == s.start && (this._mCodingSM.getCurrentCharLen() >= 2 ? (this._mNumOfMBChar++, this._mMBCharLen += this._mCodingSM.getCurrentCharLen()) : t.charCodeAt(0) < 128 && this._mBasicAsciiLen++);
        }
        return this.getState() == s.detecting && this.getConfidence() > s.SHORTCUT_THRESHOLD && (this._mState = s.foundIt), this.getState();
    }, this.getConfidence = function() {
        var e = .99, t = 0, r = this._mFullLen - this._mBasicAsciiLen;
        return r > 0 && (t = this._mMBCharLen / r), this._mNumOfMBChar < 6 && t <= .6 ? 1 - (e *= Math.pow(.5, this._mNumOfMBChar)) : e;
    }, e._mCodingSM = new n(i), e.reset();
}
a.prototype = new o, module.exports = a;
