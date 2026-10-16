var n = require("./module-80281.js"), s = require("./module-39306.js"), o = require("./module-93535.js"), i = require("./module-76180.js").qc;
function a() {
    n.apply(this);
    var e = this;
    this.getCharsetName = function() {
        return "GB2312";
    }, e._mCodingSM = new s(o), e._mDistributionAnalyzer = new i, e.reset();
}
a.prototype = new n, module.exports = a;
