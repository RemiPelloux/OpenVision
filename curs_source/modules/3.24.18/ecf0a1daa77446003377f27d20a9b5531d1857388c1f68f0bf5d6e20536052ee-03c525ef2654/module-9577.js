var s = require("./module-9928.js"), n = require("./module-4644.js"), r = require("./module-1108.js"), a = require("./module-1291.js"), o = require("./module-5854.js"), l = n.aTypedArray, h = n.getTypedArrayConstructor, c = n.exportTypedArrayMethod, d = function() {
    try {
        new Int8Array(1).with(2, {
            valueOf: function() {
                throw 8;
            }
        });
    } catch (t) {
        return 8 === t;
    }
}(), u = d && function() {
    try {
        new Int8Array(1).with(-.5, 1);
    } catch (t) {
        return !0;
    }
}();
c("with", {
    with: function(t, e) {
        var i = l(this), n = a(t), c = r(i) ? o(e) : +e;
        return s(i, h(i), n, c);
    }
}.with, !d || u);
