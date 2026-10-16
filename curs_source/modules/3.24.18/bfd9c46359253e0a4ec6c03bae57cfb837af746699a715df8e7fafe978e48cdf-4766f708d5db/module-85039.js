var n = require("./module-39306.js"), s = require("./module-80281.js"), o = require("./module-14655.js"), i = require("./module-76180.js").SG;
function a() {
    s.apply(this);
    var e = this;
    this.getCharsetName = function() {
        return "Big5";
    }, e._mCodingSM = new n(o), e._mDistributionAnalyzer = new i, e.reset();
}
a.prototype = new s, module.exports = a;
