import { require_stringify } from "./stringify.js";
import { require_utils5 } from "./utils.js";
import { require_kind_of } from "../../../../kind-of@6.0.3/node_modules/kind-of/index.js";
var __wakaru_require_to_file_cache;
export function require_to_file() {
if (__wakaru_require_to_file_cache) return __wakaru_require_to_file_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_to_file_cache = module2;
"use strict";
var typeOf = require_kind_of();
var stringify2 = require_stringify();
var utils2 = require_utils5();
module2.exports = function(file) {
    if (typeOf(file) !== "object") {
        file = {
            content: file
        };
    }
    if (typeOf(file.data) !== "object") {
        file.data = {};
    }
    if (file.contents && file.content == null) {
        file.content = file.contents;
    }
    utils2.define(file, "orig", utils2.toBuffer(file.content));
    utils2.define(file, "language", file.language || "");
    utils2.define(file, "matter", file.matter || "");
    utils2.define(file, "stringify", function(data, options2) {
        if (options2 && options2.language) {
            file.language = options2.language;
        }
        return stringify2(file, data, options2);
    });
    file.content = utils2.toString(file.content);
    file.isEmpty = false;
    file.excerpt = "";
    return file;
};

return module2.exports;
}
