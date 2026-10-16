var n = require("./module-39306.js"), s = require("./module-80281.js"), o = require("./module-65507.js"), i = require("./module-76180.js").EZ, a = require("./module-92905.js").JI, c = require("./module-76017.js"), l = require("./module-66722.js");
function u() {
    s.apply(this);
    var e = this;
    this.reset = function() {
        u.prototype.reset.apply(this), this._mContextAnalyzer.reset();
    }, this.getCharsetName = function() {
        return "SHIFT_JIS";
    }, this.feed = function(e) {
        for(var t = e.length, r = 0; r < t; r++){
            var n = this._mCodingSM.nextState(e[r]);
            if (n == c.error) {
                l.log(this.getCharsetName() + " prober hit error at byte " + r + "\n"), this._mState = c.notMe;
                break;
            }
            if (n == c.itsMe) {
                this._mState = c.foundIt;
                break;
            }
            if (n == c.start) {
                var s = this._mCodingSM.getCurrentCharLen();
                0 == r ? (this._mLastChar[1] = e[0], this._mContextAnalyzer.feed(this._mLastChar.slice(2 - s).join(""), s), this._mDistributionAnalyzer.feed(this._mLastChar.join(""), s)) : (this._mContextAnalyzer.feed(e.slice(r + 1 - s, r + 3 - s), s), this._mDistributionAnalyzer.feed(e.slice(r - 1, r + 1), s));
            }
        }
        return this._mLastChar[0] = e[t - 1], this.getState() == c.detecting && this._mContextAnalyzer.gotEnoughData() && this.getConfidence() > c.SHORTCUT_THRESHOLD && (this._mState = c.foundIt), this.getState();
    }, this.getConfidence = function() {
        var e = this._mContextAnalyzer.getConfidence(), t = this._mDistributionAnalyzer.getConfidence();
        return Math.max(e, t);
    }, e._mCodingSM = new n(o), e._mDistributionAnalyzer = new i, e._mContextAnalyzer = new a, e.reset();
}
u.prototype = new s, module.exports = u;
