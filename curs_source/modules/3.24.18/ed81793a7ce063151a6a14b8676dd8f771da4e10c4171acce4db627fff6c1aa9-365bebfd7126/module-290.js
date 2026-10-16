var n = require("./module-9944.js"), o = require("./module-831.js"), i = require("./module-6032.js"), a = require("./module-2913.js"), u = require("./module-2287.js"), s = require("./module-4282.js"), c = TypeError, f = s("toPrimitive");
module.exports = function(t, r) {
    if (!o(t) || i(t)) return t;
    var e, s = a(t, f);
    if (s) {
        if (void 0 === r && (r = "default"), e = n(s, t, r), !o(e) || i(e)) return e;
        throw new c("Can't convert object to primitive value");
    }
    return void 0 === r && (r = "number"), u(t, r);
};
