import { require_dumper } from "./js-yaml/dumper.js";
import { require_exception } from "./js-yaml/exception.js";
import { require_loader } from "./js-yaml/loader.js";
import { require_schema } from "./js-yaml/schema.js";
import { require_core } from "./js-yaml/schema/core.js";
import { require_default_full } from "./js-yaml/schema/default_full.js";
import { require_default_safe } from "./js-yaml/schema/default_safe.js";
import { require_failsafe } from "./js-yaml/schema/failsafe.js";
import { require_json } from "./js-yaml/schema/json.js";
import { require_type } from "./js-yaml/type.js";
var __wakaru_require_js_yaml_cache;
export function require_js_yaml() {
if (__wakaru_require_js_yaml_cache) return __wakaru_require_js_yaml_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_js_yaml_cache = module2;
"use strict";
var loader2 = require_loader();
var dumper2 = require_dumper();
function deprecated2(name17) {
    return function() {
        throw new Error("Function " + name17 + " is deprecated and cannot be used.");
    };
}
module2.exports.Type = require_type();
module2.exports.Schema = require_schema();
module2.exports.FAILSAFE_SCHEMA = require_failsafe();
module2.exports.JSON_SCHEMA = require_json();
module2.exports.CORE_SCHEMA = require_core();
module2.exports.DEFAULT_SAFE_SCHEMA = require_default_safe();
module2.exports.DEFAULT_FULL_SCHEMA = require_default_full();
module2.exports.load = loader2.load;
module2.exports.loadAll = loader2.loadAll;
module2.exports.safeLoad = loader2.safeLoad;
module2.exports.safeLoadAll = loader2.safeLoadAll;
module2.exports.dump = dumper2.dump;
module2.exports.safeDump = dumper2.safeDump;
module2.exports.YAMLException = require_exception();
module2.exports.MINIMAL_SCHEMA = require_failsafe();
module2.exports.SAFE_SCHEMA = require_default_safe();
module2.exports.DEFAULT_SCHEMA = require_default_full();
module2.exports.scan = deprecated2("scan");
module2.exports.parse = deprecated2("parse");
module2.exports.compose = deprecated2("compose");
module2.exports.addConstructor = deprecated2("addConstructor");

return module2.exports;
}
