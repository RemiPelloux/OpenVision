var n = require("./module-5613.js"), o = require("./module-5604.js"), i = require("./module-1942.js"), a = require("./module-6453.js"), u = require("./module-7301.js").CONSTRUCTOR, s = require("./module-8787.js"), c = o("Promise"), f = i && !u;
n({
    target: "Promise",
    stat: !0,
    forced: i || u
}, {
    resolve: function(t) {
        return s(f && this === c ? a : this, t);
    }
});
