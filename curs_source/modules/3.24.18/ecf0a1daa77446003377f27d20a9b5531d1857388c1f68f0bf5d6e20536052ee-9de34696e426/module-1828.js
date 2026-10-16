var s = require("./module-9504.js"), n = require("./module-9297.js"), r = require("./module-5397.js"), a = require("./module-9617.js").indexOf, o = require("./module-421.js"), l = s([].push);
module.exports = function(t, e) {
    var i, s = r(t), h = 0, c = [];
    for(i in s)!n(o, i) && n(s, i) && l(c, i);
    for(; e.length > h;)n(s, i = e[h++]) && (~a(c, i) || l(c, i));
    return c;
};
