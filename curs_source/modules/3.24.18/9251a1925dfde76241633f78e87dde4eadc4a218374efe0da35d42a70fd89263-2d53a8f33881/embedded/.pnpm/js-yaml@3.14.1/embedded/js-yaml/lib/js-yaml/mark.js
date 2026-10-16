import { require_common } from "./common.js";
var __wakaru_require_mark_cache;
export function require_mark() {
if (__wakaru_require_mark_cache) return __wakaru_require_mark_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mark_cache = module2;
"use strict";
var common2 = require_common();
function Mark(name17, buffer, position, line, column) {
    this.name = name17;
    this.buffer = buffer;
    this.position = position;
    this.line = line;
    this.column = column;
}
Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
    var head, start, tail, end, snippet2;
    if (!this.buffer) return null;
    indent = indent || 4;
    maxLength = maxLength || 75;
    head = "";
    start = this.position;
    while(start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1){
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
            head = " ... ";
            start += 5;
            break;
        }
    }
    tail = "";
    end = this.position;
    while(end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1){
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
            tail = " ... ";
            end -= 5;
            break;
        }
    }
    snippet2 = this.buffer.slice(start, end);
    return common2.repeat(" ", indent) + head + snippet2 + tail + "\n" + common2.repeat(" ", indent + this.position - start + head.length) + "^";
};
Mark.prototype.toString = function toString2(compact) {
    var snippet2, where = "";
    if (this.name) {
        where += 'in "' + this.name + '" ';
    }
    where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
    if (!compact) {
        snippet2 = this.getSnippet();
        if (snippet2) {
            where += ":\n" + snippet2;
        }
    }
    return where;
};
module2.exports = Mark;

return module2.exports;
}
