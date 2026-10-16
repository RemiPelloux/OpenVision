var n = require("./module-24720.js"), o = require("./module-76017.js"), s = require("./module-66722.js");
function i() {
    n.apply(this);
    this.reset = function() {
        i.prototype.reset.apply(this), this._mCodingSM && this._mCodingSM.reset(), this._mDistributionAnalyzer && this._mDistributionAnalyzer.reset(), this._mLastChar = [
            "\0",
            "\0"
        ];
    }, this.getCharsetName = function() {}, this.feed = function(e) {
        for(var t = e.length, r = 0; r < t; r++){
            var n = this._mCodingSM.nextState(e[r]);
            if (n == o.error) {
                s.log(this.getCharsetName() + " prober hit error at byte " + r + "\n"), this._mState = o.notMe;
                break;
            }
            if (n == o.itsMe) {
                this._mState = o.foundIt;
                break;
            }
            if (n == o.start) {
                var i = this._mCodingSM.getCurrentCharLen();
                0 == r ? (this._mLastChar[1] = e[0], this._mDistributionAnalyzer.feed(this._mLastChar.join(""), i)) : this._mDistributionAnalyzer.feed(e.slice(r - 1, r + 1), i);
            }
        }
        return this._mLastChar[0] = e[t - 1], this.getState() == o.detecting && this._mDistributionAnalyzer.gotEnoughData() && this.getConfidence() > o.SHORTCUT_THRESHOLD && (this._mState = o.foundIt), this.getState();
    }, this.getConfidence = function() {
        return this._mDistributionAnalyzer.getConfidence();
    };
}
i.prototype = new n, module.exports = i;
