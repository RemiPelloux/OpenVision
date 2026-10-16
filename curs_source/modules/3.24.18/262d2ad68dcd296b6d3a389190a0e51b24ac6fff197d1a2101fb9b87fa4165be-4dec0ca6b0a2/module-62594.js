"use strict";
const n = require("./module-81129.js"), o = require("./module-49727.js");
module.exports = function(e) {
    const t = Object.assign({}, e);
    return t.delimiters = o.arrayify(t.delims || t.delimiters || "---"), 1 === t.delimiters.length && t.delimiters.push(t.delimiters[0]), t.language = (t.language || t.lang || "yaml").toLowerCase(), t.engines = Object.assign({}, n, t.parsers, t.engines), t;
};
