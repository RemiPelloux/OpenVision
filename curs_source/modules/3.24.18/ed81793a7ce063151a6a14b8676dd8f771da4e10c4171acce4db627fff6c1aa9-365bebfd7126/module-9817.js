var n = require("./module-5613.js"), o = require("./module-9444.js");
n({
    target: "Promise",
    stat: !0
}, {
    withResolvers: function() {
        var t = o.f(this);
        return {
            promise: t.promise,
            resolve: t.resolve,
            reject: t.reject
        };
    }
});
