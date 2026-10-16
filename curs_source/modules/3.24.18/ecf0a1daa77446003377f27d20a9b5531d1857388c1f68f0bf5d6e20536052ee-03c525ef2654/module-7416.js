var s = require("./module-9039.js"), n = require("./module-8227.js"), r = require("./module-3724.js"), a = require("./module-6395.js"), o = n("iterator");
module.exports = !s(function() {
    var t = new URL("b?a=1&b=2&c=3", "https://a"), e = t.searchParams, i = new URLSearchParams("a=1&a=2&b=3"), s = "";
    return t.pathname = "c%20d", e.forEach(function(t, i) {
        e.delete("b"), s += i + t;
    }), i.delete("a", 2), i.delete("b", void 0), a && (!t.toJSON || !i.has("a", 1) || i.has("a", 2) || !i.has("a", void 0) || i.has("b")) || !e.size && (a || !r) || !e.sort || "https://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[o] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== s || "x" !== new URL("https://x", void 0).host;
});
