var __wakaru_require_escape_cache;
export function require_escape() {
if (__wakaru_require_escape_cache) return __wakaru_require_escape_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_escape_cache = module2;
"use strict";
var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
function escapeCommand(arg) {
    arg = arg.replace(metaCharsRegExp, "^$1");
    return arg;
}
function escapeArgument(arg, doubleEscapeMetaChars) {
    arg = `${arg}`;
    arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
    arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
    arg = `"${arg}"`;
    arg = arg.replace(metaCharsRegExp, "^$1");
    if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
    }
    return arg;
}
module2.exports.command = escapeCommand;
module2.exports.argument = escapeArgument;

return module2.exports;
}
