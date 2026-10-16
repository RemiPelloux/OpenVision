import { require_enoent } from "./lib/enoent.js";
import { require_parse5 } from "./lib/parse.js";
var __wakaru_require_cross_spawn_cache;
export function require_cross_spawn() {
if (__wakaru_require_cross_spawn_cache) return __wakaru_require_cross_spawn_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_cross_spawn_cache = module2;
"use strict";
var cp2 = require("child_process");
var parse11 = require_parse5();
var enoent = require_enoent();
function spawn15(command, args, options2) {
    const parsed = parse11(command, args, options2);
    const spawned = cp2.spawn(parsed.command, parsed.args, parsed.options);
    enoent.hookChildProcess(spawned, parsed);
    return spawned;
}
function spawnSync(command, args, options2) {
    const parsed = parse11(command, args, options2);
    const result = cp2.spawnSync(parsed.command, parsed.args, parsed.options);
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
    return result;
}
module2.exports = spawn15;
module2.exports.spawn = spawn15;
module2.exports.sync = spawnSync;
module2.exports._parse = parse11;
module2.exports._enoent = enoent;

return module2.exports;
}
