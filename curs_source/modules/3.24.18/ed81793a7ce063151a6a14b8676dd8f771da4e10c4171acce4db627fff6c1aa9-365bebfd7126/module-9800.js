var n = require("./module-6881.js"), o = require("./module-7032.js"), i = require("./module-3243.js"), a = i.Set, u = i.proto, s = n(u.forEach), c = n(u.keys), f = c(new a).next;
module.exports = function(t, r, e) {
    return e ? o({
        iterator: c(t),
        next: f
    }, r) : s(t, r);
};
