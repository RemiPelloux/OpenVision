var n = require("./module-4418.js"), o = require("./module-3168.js"), i = require("./module-9304.js"), a = require("./module-4466.js");
module.exports = function(t, r, e) {
    for(var u = o(r), s = a.f, c = i.f, f = 0; f < u.length; f++){
        var h = u[f];
        n(t, h) || e && n(e, h) || s(t, h, c(r, h));
    }
};
