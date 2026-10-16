var n = require("./module-9944.js"), o = require("./module-3770.js"), i = require("./module-5604.js"), a = require("./module-2913.js");
module.exports = function(t, r, e, u) {
    try {
        var s = a(t, "return");
        if (s) return i("Promise").resolve(n(s, t)).then(function(t) {
            try {
                r !== u && o(t);
            } catch (t) {
                return void u(t);
            }
            r(e);
        }, function(t) {
            r === u ? r(e) : u(t);
        });
    } catch (t) {
        return u(r === u ? e : t);
    }
    r(e);
};
