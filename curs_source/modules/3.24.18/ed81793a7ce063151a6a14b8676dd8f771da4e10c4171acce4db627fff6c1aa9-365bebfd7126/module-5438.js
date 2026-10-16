var n = require("./module-9345.js"), o = require("./module-4188.js"), i = require("./module-8689.js"), a = require("./module-4282.js")("toStringTag"), u = Object, s = "Arguments" === i(function() {
    return arguments;
}());
module.exports = n ? i : function(t) {
    var r, e, n;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function(t, r) {
        try {
            return t[r];
        } catch (t) {}
    }(r = u(t), a)) ? e : s ? i(r) : "Object" === (n = i(r)) && o(r.callee) ? "Arguments" : n;
};
