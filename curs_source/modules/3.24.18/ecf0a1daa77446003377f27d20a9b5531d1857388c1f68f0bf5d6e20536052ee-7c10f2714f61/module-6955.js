var s = require("./module-2140.js"), n = require("./module-4901.js"), r = require("./module-2195.js"), a = require("./module-8227.js")("toStringTag"), o = Object, l = "Arguments" === r(function() {
    return arguments;
}());
module.exports = s ? r : function(t) {
    var e, i, s;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function(t, e) {
        try {
            return t[e];
        } catch (t) {}
    }(e = o(t), a)) ? i : l ? r(e) : "Object" === (s = r(e)) && n(e.callee) ? "Arguments" : s;
};
