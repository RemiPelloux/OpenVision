var n = require("./module-5234.js"), o = require("./module-4282.js"), i = require("./module-6893.js"), a = require("./module-1942.js"), u = o("iterator");
module.exports = !n(function() {
    var t = new URL("b?a=1&b=2&c=3", "https://a"), r = t.searchParams, e = new URLSearchParams("a=1&a=2&b=3"), n = "";
    return t.pathname = "c%20d", r.forEach(function(t, e) {
        r.delete("b"), n += e + t;
    }), e.delete("a", 2), e.delete("b", void 0), a && (!t.toJSON || !e.has("a", 1) || e.has("a", 2) || !e.has("a", void 0) || e.has("b")) || !r.size && (a || !i) || !r.sort || "https://a/c%20d?a=1&c=3" !== t.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[u] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== n || "x" !== new URL("https://x", void 0).host;
});
