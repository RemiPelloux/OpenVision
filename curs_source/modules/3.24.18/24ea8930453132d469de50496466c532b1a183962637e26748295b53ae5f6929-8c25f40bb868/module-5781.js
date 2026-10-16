var $ = require("./module-6518.js");
var getBuiltIn = require("./module-7751.js");
var validateArgumentsLength = require("./module-2812.js");
var toString = require("./module-655.js");
var USE_NATIVE_URL = require("./module-7416.js");
var URL2 = getBuiltIn("URL");
$({
    target: "URL",
    stat: true,
    forced: !USE_NATIVE_URL
}, {
    parse: function parse(url) {
        var length = validateArgumentsLength(arguments.length, 1);
        var urlString = toString(url);
        var base = length < 2 || arguments[1] === void 0 ? void 0 : toString(arguments[1]);
        try {
            return new URL2(urlString, base);
        } catch (error) {
            return null;
        }
    }
});
