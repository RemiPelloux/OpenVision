import { E } from "./tslib.es6.js";
var T2h, E2h, I2h, x2h, A2h, R2h, P2h, M2h, D2h, N2h, L2h, O2h;
export { A2h, D2h, E2h, I2h, L2h, M2h, N2h, O2h, P2h, R2h, T2h, x2h };
var __wakaru_UcS_initialized = false;
export function UcS() {
if (__wakaru_UcS_initialized) return;
__wakaru_UcS_initialized = true;
"use strict";
E(), T2h = /^(?:\.{1,2}\/|~\/|\/|[A-Za-z]:\\)/, E2h = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._/-]+$/, I2h = /^(?:refs\/(?:heads|tags|remotes)\/|(?:origin|upstream)\/)[A-Za-z0-9._/-]+$/, x2h = /^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+(?:\.git)?$/, A2h = /^(?!\d+(?:\.\d+)+$)(?:\.[A-Za-z0-9_-]+|[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)+)$/, R2h = /[()[\]{}=;:+*%<>]/, P2h = /^[$_a-z][$_A-Za-z0-9]*$/, M2h = /^[a-zA-Z][a-zA-Z0-9+.-]*:/, D2h = /#L?(\d+)(?:\s*-\s*L?(\d+))?$/i, N2h = /:(\d+)(?:\s*-\s*(\d+))?$/, L2h = new Set([
    "mailto:",
    "tel:",
    "sms:",
    "data:",
    "javascript:",
    "vbscript:",
    "command:"
]), O2h = new Set([
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
