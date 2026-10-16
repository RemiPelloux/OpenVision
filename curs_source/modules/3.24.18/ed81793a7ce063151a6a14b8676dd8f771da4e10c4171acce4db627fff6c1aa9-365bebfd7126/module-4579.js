var n = require("./module-6744.js"), o = require("./module-7611.js"), i = RangeError;
module.exports = function(t) {
    if (void 0 === t) return 0;
    var r = n(t), e = o(r);
    if (r !== e) throw new i("Wrong length or index");
    return e;
};
