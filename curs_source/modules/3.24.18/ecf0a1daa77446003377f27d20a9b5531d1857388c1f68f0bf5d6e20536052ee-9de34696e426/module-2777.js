var s = require("./module-9565.js"), n = require("./module-34.js"), r = require("./module-757.js"), a = require("./module-5966.js"), o = require("./module-4270.js"), l = require("./module-8227.js"), h = TypeError, c = l("toPrimitive");
module.exports = function(t, e) {
    if (!n(t) || r(t)) return t;
    var i, l = a(t, c);
    if (l) {
        if (void 0 === e && (e = "default"), i = s(l, t, e), !n(i) || r(i)) return i;
        throw new h("Can't convert object to primitive value");
    }
    return void 0 === e && (e = "number"), o(t, e);
};
