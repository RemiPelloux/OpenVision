var n = require("./module-39306.js"), o = require("./module-80281.js"), s = require("./module-76180.js").dk, i = require("./module-40213.js");
function a() {
    o.apply(this);
    var e = this;
    this.getCharsetName = function() {
        return "EUC-KR";
    }, e._mCodingSM = new n(i), e._mDistributionAnalyzer = new s, e.reset();
}
a.prototype = new o, module.exports = a;
