var s = require("./module-9297.js"), n = require("./module-5031.js"), r = require("./module-7347.js"), a = require("./module-4913.js");
module.exports = function(t, e, i) {
    for(var o = n(e), l = a.f, h = r.f, c = 0; c < o.length; c++){
        var d = o[c];
        s(t, d) || i && s(i, d) || l(t, d, h(e, d));
    }
};
