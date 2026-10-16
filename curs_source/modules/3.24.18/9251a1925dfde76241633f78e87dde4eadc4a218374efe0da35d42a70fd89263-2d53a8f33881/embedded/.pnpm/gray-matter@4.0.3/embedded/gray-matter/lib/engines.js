import { require_js_yaml2 } from "../../../../js-yaml@3.14.1/node_modules/js-yaml/index.js";
var __wakaru_require_engines_cache;
export function require_engines() {
if (__wakaru_require_engines_cache) return __wakaru_require_engines_cache.exports;
var exports = {};
var module = { exports: exports };
__wakaru_require_engines_cache = module;
"use strict";
var yaml = require_js_yaml2();
var engines = exports = module.exports;
engines.yaml = {
    parse: yaml.safeLoad.bind(yaml),
    stringify: yaml.safeDump.bind(yaml)
};
engines.json = {
    parse: JSON.parse.bind(JSON),
    stringify: function(obj, options2) {
        const opts = Object.assign({
            replacer: null,
            space: 2
        }, options2);
        return JSON.stringify(obj, opts.replacer, opts.space);
    }
};
engines.javascript = {
    parse: function parse(str, options, wrap) {
        try {
            if (wrap !== false) {
                str = "(function() {\nreturn " + str.trim() + ";\n}());";
            }
            return eval(str) || {};
        } catch (err) {
            if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
                return parse(str, options, false);
            }
            throw new SyntaxError(err);
        }
    },
    stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
    }
};

return module.exports;
}
