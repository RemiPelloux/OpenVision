import { x } from "./tslib.es6.js";
var cAl, lAl, uAl, dAl, hAl, pAl, mAl, gAl, fAl, vAl, _Al, bAl;
export { _Al, bAl, cAl, dAl, fAl, gAl, hAl, lAl, mAl, pAl, uAl, vAl };
var __wakaru_fYg_initialized = false;
export function fYg() {
if (__wakaru_fYg_initialized) return;
__wakaru_fYg_initialized = true;
"use strict";
x(), cAl = /^(?:\.{1,2}\/|~\/|\/|[A-Za-z]:\\)/, lAl = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._/-]+$/, uAl = /^(?:refs\/(?:heads|tags|remotes)\/|(?:origin|upstream)\/)[A-Za-z0-9._/-]+$/, dAl = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+(?:\.git)?$/, hAl = /^(?!\d+(?:\.\d+)+$)(?:\.[A-Za-z0-9_-]+|[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)+)$/, pAl = /[()[\]{}=;:+*%<>]/, mAl = /^[$_a-z][$_A-Za-z0-9]*$/, gAl = /^[a-zA-Z][a-zA-Z0-9+.-]*:/, fAl = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/i, vAl = /:(\d+)(?:\s*-\s*(\d+))?$/, _Al = new Set([
    "mailto:",
    "tel:",
    "sms:",
    "data:",
    "javascript:",
    "vbscript:",
    "command:"
]), bAl = new Set([
    "true",
    "false",
    "null",
    "undefined",
    "none",
    "void",
    "this",
    "super",
    "self",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while",
    "return",
    "try",
    "catch",
    "throw",
    "import",
    "export",
    "class",
    "function",
    "new",
    "await",
    "async"
]);

}
