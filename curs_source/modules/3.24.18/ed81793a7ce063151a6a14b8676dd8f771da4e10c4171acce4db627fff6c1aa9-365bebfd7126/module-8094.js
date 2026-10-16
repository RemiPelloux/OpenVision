var n = require("./module-5613.js"), o = require("./module-5234.js"), i = require("./module-3628.js"), a = require("./module-290.js");
n({
    target: "Date",
    proto: !0,
    forced: o(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1;
            }
        });
    })
}, {
    toJSON: function(t) {
        var r = i(this), e = a(r, "number");
        return "number" != typeof e || isFinite(e) ? r.toISOString() : null;
    }
});
