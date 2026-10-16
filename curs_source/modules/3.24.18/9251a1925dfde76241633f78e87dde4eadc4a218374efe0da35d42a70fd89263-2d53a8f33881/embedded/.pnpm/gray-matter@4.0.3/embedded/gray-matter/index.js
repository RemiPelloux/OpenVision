import { require_defaults } from "./lib/defaults.js";
import { require_engines } from "./lib/engines.js";
import { require_excerpt } from "./lib/excerpt.js";
import { require_parse4 } from "./lib/parse.js";
import { require_stringify } from "./lib/stringify.js";
import { require_to_file } from "./lib/to-file.js";
import { require_utils5 } from "./lib/utils.js";
import { require_section_matter } from "../../../section-matter@1.0.0/node_modules/section-matter/index.js";
var __wakaru_require_gray_matter_cache;
export function require_gray_matter() {
if (__wakaru_require_gray_matter_cache) return __wakaru_require_gray_matter_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_gray_matter_cache = module2;
"use strict";
var fs39 = require("fs");
var sections = require_section_matter();
var defaults2 = require_defaults();
var stringify2 = require_stringify();
var excerpt = require_excerpt();
var engines2 = require_engines();
var toFile = require_to_file();
var parse11 = require_parse4();
var utils2 = require_utils5();
function matter2(input, options2) {
    if (input === "") {
        return {
            data: {},
            content: input,
            excerpt: "",
            orig: input
        };
    }
    let file = toFile(input);
    const cached2 = matter2.cache[file.content];
    if (!options2) {
        if (cached2) {
            file = Object.assign({}, cached2);
            file.orig = cached2.orig;
            return file;
        }
        matter2.cache[file.content] = file;
    }
    return parseMatter(file, options2);
}
function parseMatter(file, options2) {
    const opts = defaults2(options2);
    const open7 = opts.delimiters[0];
    const close = "\n" + opts.delimiters[1];
    let str3 = file.content;
    if (opts.language) {
        file.language = opts.language;
    }
    const openLen = open7.length;
    if (!utils2.startsWith(str3, open7, openLen)) {
        excerpt(file, opts);
        return file;
    }
    if (str3.charAt(openLen) === open7.slice(-1)) {
        return file;
    }
    str3 = str3.slice(openLen);
    const len = str3.length;
    const language = matter2.language(str3, opts);
    if (language.name) {
        file.language = language.name;
        str3 = str3.slice(language.raw.length);
    }
    let closeIndex = str3.indexOf(close);
    if (closeIndex === -1) {
        closeIndex = len;
    }
    file.matter = str3.slice(0, closeIndex);
    const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
    if (block === "") {
        file.isEmpty = true;
        file.empty = file.content;
        file.data = {};
    } else {
        file.data = parse11(file.language, file.matter, opts);
    }
    if (closeIndex === len) {
        file.content = "";
    } else {
        file.content = str3.slice(closeIndex + close.length);
        if (file.content[0] === "\r") {
            file.content = file.content.slice(1);
        }
        if (file.content[0] === "\n") {
            file.content = file.content.slice(1);
        }
    }
    excerpt(file, opts);
    if (opts.sections === true || typeof opts.section === "function") {
        sections(file, opts.section);
    }
    return file;
}
matter2.engines = engines2;
matter2.stringify = function(file, data, options2) {
    if (typeof file === "string") file = matter2(file, options2);
    return stringify2(file, data, options2);
};
matter2.read = function(filepath, options2) {
    const str3 = fs39.readFileSync(filepath, "utf8");
    const file = matter2(str3, options2);
    file.path = filepath;
    return file;
};
matter2.test = function(str3, options2) {
    return utils2.startsWith(str3, defaults2(options2).delimiters[0]);
};
matter2.language = function(str3, options2) {
    const opts = defaults2(options2);
    const open7 = opts.delimiters[0];
    if (matter2.test(str3)) {
        str3 = str3.slice(open7.length);
    }
    const language = str3.slice(0, str3.search(/\r?\n/));
    return {
        raw: language,
        name: language ? language.trim() : ""
    };
};
matter2.cache = {};
matter2.clearCache = function() {
    matter2.cache = {};
};
module2.exports = matter2;

return module2.exports;
}
