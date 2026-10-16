"use strict";
var n = require("./module-77509.js"), o = require("./module-85971.js");
function s(e) {
    return function() {
        throw new Error("Function " + e + " is deprecated and cannot be used.");
    };
}
module.exports.Type = require("./module-77454.js"), module.exports.Schema = require("./module-66961.js"), module.exports.FAILSAFE_SCHEMA = require("./module-26597.js"), module.exports.JSON_SCHEMA = require("./module-98994.js"), module.exports.CORE_SCHEMA = require("./module-65932.js"), module.exports.DEFAULT_SAFE_SCHEMA = require("./module-52315.js"), module.exports.DEFAULT_FULL_SCHEMA = require("./module-80599.js"), module.exports.load = n.load, module.exports.loadAll = n.loadAll, module.exports.safeLoad = n.safeLoad, module.exports.safeLoadAll = n.safeLoadAll, module.exports.dump = o.dump, module.exports.safeDump = o.safeDump, module.exports.YAMLException = require("./module-39425.js"), module.exports.MINIMAL_SCHEMA = require("./module-26597.js"), module.exports.SAFE_SCHEMA = require("./module-52315.js"), module.exports.DEFAULT_SCHEMA = require("./module-80599.js"), module.exports.scan = s("scan"), module.exports.parse = s("parse"), module.exports.compose = s("compose"), module.exports.addConstructor = s("addConstructor");
