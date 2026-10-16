var s = require("./module-6518.js"), n = require("./module-6043.js");
s({
    target: "Promise",
    stat: !0
}, {
    withResolvers: function() {
        var t = n.f(this);
        return {
            promise: t.promise,
            resolve: t.resolve,
            reject: t.reject
        };
    }
});
