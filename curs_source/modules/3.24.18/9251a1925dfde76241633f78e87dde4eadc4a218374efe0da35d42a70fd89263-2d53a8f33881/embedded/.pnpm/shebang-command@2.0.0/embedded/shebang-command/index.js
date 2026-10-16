import { require_shebang_regex } from "../../../shebang-regex@3.0.0/node_modules/shebang-regex/index.js";
var __wakaru_require_shebang_command_cache;
export function require_shebang_command() {
if (__wakaru_require_shebang_command_cache) return __wakaru_require_shebang_command_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_shebang_command_cache = module2;
"use strict";
var shebangRegex = require_shebang_regex();
module2.exports = (string5 = "")=>{
    const match2 = string5.match(shebangRegex);
    if (!match2) {
        return null;
    }
    const [path64, argument] = match2[0].replace(/#! ?/, "").split(" ");
    const binary2 = path64.split("/").pop();
    if (binary2 === "env") {
        return argument;
    }
    return argument ? `${binary2} ${argument}` : binary2;
};

return module2.exports;
}
