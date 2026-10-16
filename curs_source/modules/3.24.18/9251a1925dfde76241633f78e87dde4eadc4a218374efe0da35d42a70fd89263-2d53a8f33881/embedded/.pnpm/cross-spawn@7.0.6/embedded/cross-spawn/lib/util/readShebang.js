import { require_shebang_command } from "../../../../../shebang-command@2.0.0/node_modules/shebang-command/index.js";
var __wakaru_require_readShebang_cache;
export function require_readShebang() {
if (__wakaru_require_readShebang_cache) return __wakaru_require_readShebang_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_readShebang_cache = module2;
"use strict";
var fs39 = require("fs");
var shebangCommand = require_shebang_command();
function readShebang(command) {
    const size = 150;
    const buffer = Buffer.alloc(size);
    let fd;
    try {
        fd = fs39.openSync(command, "r");
        fs39.readSync(fd, buffer, 0, size, 0);
        fs39.closeSync(fd);
    } catch (e) {}
    return shebangCommand(buffer.toString());
}
module2.exports = readShebang;

return module2.exports;
}
