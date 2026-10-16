var s = require("./module-1291.js"), n = require("./module-8014.js"), r = RangeError;
module.exports = function(t) {
    if (void 0 === t) return 0;
    var e = s(t), i = n(e);
    if (e !== i) throw new r("Wrong length or index");
    return i;
};
