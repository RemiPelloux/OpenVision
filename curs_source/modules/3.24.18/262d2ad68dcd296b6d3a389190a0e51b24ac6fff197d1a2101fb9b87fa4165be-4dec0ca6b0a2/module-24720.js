var n = require("./module-76017.js");
module.exports = function() {
    this.reset = function() {
        this._mState = n.detecting;
    }, this.getCharsetName = function() {
        return null;
    }, this.getSupportedCharsetNames = function() {
        throw new Error("Unimplemented method getSupportedCharsetNames()");
    }, this.feed = function(e) {}, this.getState = function() {
        return this._mState;
    }, this.getConfidence = function() {
        return 0;
    }, this.filterHighBitOnly = function(e) {
        return e = e.replace(/[\x00-\x7F]+/g, " ");
    }, this.filterWithoutEnglishLetters = function(e) {
        return e = e.replace(/[A-Za-z]+/g, " ");
    }, this.removeXmlTags = function(e) {
        for(var t = "", r = !1, n = 0, o = 0; o < e.length; o++){
            var s = e[o];
            ">" == s && "?" !== e[o - 1] ? (n = o + 1, r = !1) : "<" == s && "?" !== e[o + 1] && (o > n && !r && (t = t + e.substring(n, o) + " "), r = !0);
        }
        return r || (t += e.substring(n)), t;
    };
};
