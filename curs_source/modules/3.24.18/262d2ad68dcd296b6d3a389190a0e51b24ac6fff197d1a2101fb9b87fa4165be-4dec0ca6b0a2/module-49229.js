var n = require("./module-24720.js"), o = require("./module-39306.js"), s = require("./module-65605.js"), i = require("./module-76017.js");
function a() {
    n.apply(this);
    var e = this;
    this.reset = function() {
        a.prototype.reset.apply(this);
        for(var t, r = 0; t = this._mCodingSM[r]; r++)t && (t.active = !0, t.reset());
        this._mActiveSM = e._mCodingSM.length, this._mDetectedCharset = null;
    }, this.getCharsetName = function() {
        return this._mDetectedCharset;
    }, this.getSupportedCharsetNames = function() {
        return e._supportedCharsetNames;
    }, this.getConfidence = function() {
        return this._mDetectedCharset ? .99 : 0;
    }, this.feed = function(e) {
        for(var t, r = 0; r < e.length; r++){
            t = e[r];
            for(var n, o = 0; n = this._mCodingSM[o]; o++)if (n && n.active) {
                var s = n.nextState(t);
                if (s == i.error) {
                    if (n.active = !1, this._mActiveSM--, this._mActiveSM <= 0) return this._mState = i.notMe, this.getState();
                } else if (s == i.itsMe) return this._mState = i.foundIt, this._mDetectedCharset = n.getCodingStateMachine(), this.getState();
            }
        }
        return this.getState();
    }, function() {
        e._mCodingSM = [
            new o(s.HZSMModel),
            new o(s.ISO2022CNSMModel),
            new o(s.ISO2022JPSMModel),
            new o(s.ISO2022KRSMModel)
        ], e._supportedCharsetNames = [];
        for (const t of e._mCodingSM)e._supportedCharsetNames.push(t.getCodingStateMachine());
        e.reset();
    }();
}
a.prototype = new n, module.exports = a;
