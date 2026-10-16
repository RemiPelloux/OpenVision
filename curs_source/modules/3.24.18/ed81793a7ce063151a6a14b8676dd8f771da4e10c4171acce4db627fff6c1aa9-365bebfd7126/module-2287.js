var n = require("./module-9944.js"), o = require("./module-4188.js"), i = require("./module-831.js"), a = TypeError;
module.exports = function(t, r) {
    var e, u;
    if ("string" === r && o(e = t.toString) && !i(u = n(e, t))) return u;
    if (o(e = t.valueOf) && !i(u = n(e, t))) return u;
    if ("string" !== r && o(e = t.toString) && !i(u = n(e, t))) return u;
    throw new a("Can't convert object to primitive value");
};
