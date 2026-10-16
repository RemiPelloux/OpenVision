var fails = require("./module-9039.js");
var wellKnownSymbol = require("./module-8227.js");
var DESCRIPTORS = require("./module-3724.js");
var IS_PURE = require("./module-6395.js");
var ITERATOR = wellKnownSymbol("iterator");
module.exports = !fails(function() {
    var url = new URL("b?a=1&b=2&c=3", "https://a");
    var params = url.searchParams;
    var params2 = new URLSearchParams("a=1&a=2&b=3");
    var result = "";
    url.pathname = "c%20d";
    params.forEach(function(value, key) {
        params["delete"]("b");
        result += key + value;
    });
    params2["delete"]("a", 2);
    params2["delete"]("b", void 0);
    return IS_PURE && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== "https://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !params[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://\u0442\u0435\u0441\u0442").host !== "xn--e1aybc" || new URL("https://a#\u0431").hash !== "#%D0%B1" || result !== "a1c3" || new URL("https://x", void 0).host !== "x";
});
