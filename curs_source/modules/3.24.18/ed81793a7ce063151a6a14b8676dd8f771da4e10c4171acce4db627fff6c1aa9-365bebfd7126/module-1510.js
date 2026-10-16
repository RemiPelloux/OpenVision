var n = require("./module-5613.js"), o = require("./module-9646.js"), i = require("./module-5234.js"), a = Array.fromAsync;
n({
    target: "Array",
    stat: !0,
    forced: !a || i(function() {
        var t = 0;
        return a.call(function() {
            return t++, [];
        }, {
            length: 0
        }), 1 !== t;
    })
}, {
    fromAsync: o
});
