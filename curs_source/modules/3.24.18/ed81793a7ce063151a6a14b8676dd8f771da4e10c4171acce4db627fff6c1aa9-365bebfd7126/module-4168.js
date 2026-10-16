var n = require("./module-5613.js"), o = require("./module-9444.js");
n({
    target: "Promise",
    stat: !0,
    forced: require("./module-7301.js").CONSTRUCTOR
}, {
    reject: function(t) {
        var r = o.f(this);
        return (0, r.reject)(t), r.promise;
    }
});
