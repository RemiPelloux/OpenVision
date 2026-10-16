var n = require("./module-39306.js"), o = require("./module-80281.js"), s = require("./module-76180.js").q7, i = require("./module-92905.js").v, a = require("./module-24381.js"), l = require("./module-76017.js"), c = require("./module-66722.js");
function u() {
    o.apply(this);
    var e = this;
    this.reset = function() {
        u.prototype.reset.apply(this), this._mContextAnalyzer.reset();
    }, this.getCharsetName = function() {
        return "EUC-JP";
    }, this.feed = function(e) {
        for(var t = e.length, r = 0; r < t; r++){
            var n = this._mCodingSM.nextState(e[r]);
            if (n == l.error) {
                c.log(this.getCharsetName() + " prober hit error at byte " + r + "\n"), this._mState = l.notMe;
                break;
            }
            if (n == l.itsMe) {
                this._mState = l.foundIt;
                break;
            }
            if (n == l.start) {
                var o = this._mCodingSM.getCurrentCharLen();
                if (0 == r) {
                    this._mLastChar[1] = e[0];
                    var s = this._mLastChar.join("");
                    this._mContextAnalyzer.feed(s, o), this._mDistributionAnalyzer.feed(s, o);
                } else this._mContextAnalyzer.feed(e.slice(r - 1, r + 1), o), this._mDistributionAnalyzer.feed(e.slice(r - 1, r + 1), o);
            }
        }
        return this._mLastChar[0] = e[t - 1], this.getState() == l.detecting && this._mContextAnalyzer.gotEnoughData() && this.getConfidence() > l.SHORTCUT_THRESHOLD && (this._mState = l.foundIt), this.getState();
    }, this.getConfidence = function() {
        var e = this._mContextAnalyzer.getConfidence(), t = this._mDistributionAnalyzer.getConfidence();
        return Math.max(e, t);
    }, e._mCodingSM = new n(a), e._mDistributionAnalyzer = new s, e._mContextAnalyzer = new i, e.reset();
}
u.prototype = new o, module.exports = u;
