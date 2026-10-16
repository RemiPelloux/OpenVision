var s = require("./module-6955.js"), n = require("./module-5966.js"), r = require("./module-4117.js"), a = require("./module-6269.js"), o = require("./module-8227.js")("iterator");
module.exports = function(t) {
    if (!r(t)) return n(t, o) || n(t, "@@iterator") || a[s(t)];
};
