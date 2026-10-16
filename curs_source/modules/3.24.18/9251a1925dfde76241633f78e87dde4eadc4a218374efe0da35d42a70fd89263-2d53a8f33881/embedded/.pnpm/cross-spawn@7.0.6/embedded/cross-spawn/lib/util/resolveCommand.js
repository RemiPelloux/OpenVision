import { require_path_key } from "../../../../../path-key@3.1.1/node_modules/path-key/index.js";
import { require_which } from "../../../../../which@2.0.2/node_modules/which/which.js";
var __wakaru_require_resolveCommand_cache;
export function require_resolveCommand() {
if (__wakaru_require_resolveCommand_cache) return __wakaru_require_resolveCommand_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_resolveCommand_cache = module2;
"use strict";
var path64 = require("path");
var which = require_which();
var getPathKey = require_path_key();
function resolveCommandAttempt(parsed, withoutPathExt) {
    const env = parsed.options.env || process.env;
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
    if (shouldSwitchCwd) {
        try {
            process.chdir(parsed.options.cwd);
        } catch (err) {}
    }
    let resolved;
    try {
        resolved = which.sync(parsed.command, {
            path: env[getPathKey({
                env
            })],
            pathExt: withoutPathExt ? path64.delimiter : void 0
        });
    } catch (e) {} finally{
        if (shouldSwitchCwd) {
            process.chdir(cwd);
        }
    }
    if (resolved) {
        resolved = path64.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
    }
    return resolved;
}
function resolveCommand(parsed) {
    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}
module2.exports = resolveCommand;

return module2.exports;
}
