var n = require("./module-5613.js"), o = require("./module-6881.js"), i = require("./module-675.js"), a = RangeError, u = String.fromCharCode, s = String.fromCodePoint, c = o([].join);
n({
    target: "String",
    stat: !0,
    arity: 1,
    forced: !!s && 1 !== s.length
}, {
    fromCodePoint: function(t) {
        for(var r, e = [], n = arguments.length, o = 0; n > o;){
            if (i(r = +arguments[o], 1114111) !== r) throw new a(r + " is not a valid code point");
            e[o++] = r < 65536 ? u(r) : u(55296 + ((r -= 65536) >> 10), r % 1024 + 56320);
        }
        return c(e, "");
    }
});
