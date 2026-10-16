import { require_exception } from "./exception.js";
var __wakaru_require_type_cache;
export function require_type() {
if (__wakaru_require_type_cache) return __wakaru_require_type_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_type_cache = module2;
"use strict";
var YAMLException2 = require_exception();
var TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "defaultStyle",
    "styleAliases"
];
var YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
];
function compileStyleAliases(map4) {
    var result = {};
    if (map4 !== null) {
        Object.keys(map4).forEach(function(style) {
            map4[style].forEach(function(alias) {
                result[String(alias)] = style;
            });
        });
    }
    return result;
}
function Type3(tag, options2) {
    options2 = options2 || {};
    Object.keys(options2).forEach(function(name17) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name17) === -1) {
            throw new YAMLException2('Unknown option "' + name17 + '" is met in definition of "' + tag + '" YAML type.');
        }
    });
    this.tag = tag;
    this.kind = options2["kind"] || null;
    this.resolve = options2["resolve"] || function() {
        return true;
    };
    this.construct = options2["construct"] || function(data) {
        return data;
    };
    this.instanceOf = options2["instanceOf"] || null;
    this.predicate = options2["predicate"] || null;
    this.represent = options2["represent"] || null;
    this.defaultStyle = options2["defaultStyle"] || null;
    this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException2('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
}
module2.exports = Type3;

return module2.exports;
}
