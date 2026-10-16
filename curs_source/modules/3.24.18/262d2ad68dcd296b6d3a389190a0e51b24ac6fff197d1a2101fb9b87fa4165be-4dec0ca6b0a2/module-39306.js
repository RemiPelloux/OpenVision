var n = require("./module-76017.js");
module.exports = function(e) {
    var t = this;
    this.reset = function() {
        this._mCurrentState = n.start;
    }, this.nextState = function(e) {
        var t = this._mModel.classTable[e.charCodeAt(0)];
        return this._mCurrentState == n.start && (this._mCurrentBytePos = 0, this._mCurrentCharLen = this._mModel.charLenTable[t]), this._mCurrentState = this._mModel.stateTable[this._mCurrentState * this._mModel.classFactor + t], this._mCurrentBytePos++, this._mCurrentState;
    }, this.getCurrentCharLen = function() {
        return this._mCurrentCharLen;
    }, this.getCodingStateMachine = function() {
        return this._mModel.name;
    }, function(e) {
        t._mModel = e, t._mCurrentBytePos = 0, t._mCurrentCharLen = 0, t.reset();
    }(e);
};
