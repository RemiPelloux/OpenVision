var n = require("./module-39306.js"), s = require("./module-80281.js"), o = require("./module-76180.js").dk, i = require("./module-62594.js");
function a() {
    s.apply(this);
    var e = this;
    this.getCharsetName = function() {
        return "EUC-KR";
    }, e._mCodingSM = new n(i), e._mDistributionAnalyzer = new o, e.reset();
}
a.prototype = new s, module.exports = a;
