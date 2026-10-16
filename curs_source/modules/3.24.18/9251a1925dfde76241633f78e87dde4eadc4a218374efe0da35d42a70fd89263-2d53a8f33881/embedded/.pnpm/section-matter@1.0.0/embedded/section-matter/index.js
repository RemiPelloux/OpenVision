import { require_extend_shallow } from "../../../extend-shallow@2.0.1/node_modules/extend-shallow/index.js";
import { require_kind_of } from "../../../kind-of@6.0.3/node_modules/kind-of/index.js";
var __wakaru_require_section_matter_cache;
export function require_section_matter() {
if (__wakaru_require_section_matter_cache) return __wakaru_require_section_matter_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_section_matter_cache = module2;
"use strict";
var typeOf = require_kind_of();
var extend2 = require_extend_shallow();
module2.exports = function(input, options2) {
    if (typeof options2 === "function") {
        options2 = {
            parse: options2
        };
    }
    var file = toObject(input);
    var defaults2 = {
        section_delimiter: "---",
        parse: identity
    };
    var opts = extend2({}, defaults2, options2);
    var delim = opts.section_delimiter;
    var lines2 = file.content.split(/\r?\n/);
    var sections = null;
    var section = createSection();
    var content = [];
    var stack = [];
    function initSections(val) {
        file.content = val;
        sections = [];
        content = [];
    }
    function closeSection(val) {
        if (stack.length) {
            section.key = getKey(stack[0], delim);
            section.content = val;
            opts.parse(section, sections);
            sections.push(section);
            section = createSection();
            content = [];
            stack = [];
        }
    }
    for(var i = 0; i < lines2.length; i++){
        var line = lines2[i];
        var len = stack.length;
        var ln2 = line.trim();
        if (isDelimiter(ln2, delim)) {
            if (ln2.length === 3 && i !== 0) {
                if (len === 0 || len === 2) {
                    content.push(line);
                    continue;
                }
                stack.push(ln2);
                section.data = content.join("\n");
                content = [];
                continue;
            }
            if (sections === null) {
                initSections(content.join("\n"));
            }
            if (len === 2) {
                closeSection(content.join("\n"));
            }
            stack.push(ln2);
            continue;
        }
        content.push(line);
    }
    if (sections === null) {
        initSections(content.join("\n"));
    } else {
        closeSection(content.join("\n"));
    }
    file.sections = sections;
    return file;
};
function isDelimiter(line, delim) {
    if (line.slice(0, delim.length) !== delim) {
        return false;
    }
    if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false;
    }
    return true;
}
function toObject(input) {
    if (typeOf(input) !== "object") {
        input = {
            content: input
        };
    }
    if (typeof input.content !== "string" && !isBuffer(input.content)) {
        throw new TypeError("expected a buffer or string");
    }
    input.content = input.content.toString();
    input.sections = [];
    return input;
}
function getKey(val, delim) {
    return val ? val.slice(delim.length).trim() : "";
}
function createSection() {
    return {
        key: "",
        data: "",
        content: ""
    };
}
function identity(val) {
    return val;
}
function isBuffer(val) {
    if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
    }
    return false;
}

return module2.exports;
}
