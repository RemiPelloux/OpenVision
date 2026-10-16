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
        for(var t = "", r = !1, n = 0, s = 0; s < e.length; s++){
            var o = e[s];
            ">" == o && "?" !== e[s - 1] ? (n = s + 1, r = !1) : "<" == o && "?" !== e[s + 1] && (s > n && !r && (t = t + e.substring(n, s) + " "), r = !0);
        }
        return r || (t += e.substring(n)), t;
    };
};
