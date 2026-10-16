var n = require("./module-6881.js"), o = require("./module-4418.js"), i = require("./module-380.js"), a = require("./module-1458.js").indexOf, u = require("./module-7588.js"), s = n([].push);
module.exports = function(t, r) {
    var e, n = i(t), c = 0, f = [];
    for(e in n)!o(u, e) && o(n, e) && s(f, e);
    for(; r.length > c;)o(n, e = r[c++]) && (~a(f, e) || s(f, e));
    return f;
};
