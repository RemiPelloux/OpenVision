var IS_PURE = require("./module-6395.js");
var globalThis2 = require("./module-4576.js");
var defineGlobalProperty = require("./module-9433.js");
var SHARED = "__core-js_shared__";
var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: "3.45.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
