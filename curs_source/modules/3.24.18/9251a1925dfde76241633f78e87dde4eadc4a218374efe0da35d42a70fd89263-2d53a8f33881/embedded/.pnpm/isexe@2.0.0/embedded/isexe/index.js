import { require_mode } from "./mode.js";
import { require_windows } from "./windows.js";
var __wakaru_require_isexe_cache;
export function require_isexe() {
if (__wakaru_require_isexe_cache) return __wakaru_require_isexe_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_isexe_cache = module2;
var fs39 = require("fs");
var core2;
if (process.platform === "win32" || global.TESTING_WINDOWS) {
    core2 = require_windows();
} else {
    core2 = require_mode();
}
module2.exports = isexe;
isexe.sync = sync;
function isexe(path64, options2, cb) {
    if (typeof options2 === "function") {
        cb = options2;
        options2 = {};
    }
    if (!cb) {
        if (typeof Promise !== "function") {
            throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve36, reject2) {
            isexe(path64, options2 || {}, function(er2, is2) {
                if (er2) {
                    reject2(er2);
                } else {
                    resolve36(is2);
                }
            });
        });
    }
    core2(path64, options2 || {}, function(er2, is2) {
        if (er2) {
            if (er2.code === "EACCES" || options2 && options2.ignoreErrors) {
                er2 = null;
                is2 = false;
            }
        }
        cb(er2, is2);
    });
}
function sync(path64, options2) {
    try {
        return core2.sync(path64, options2 || {});
    } catch (er2) {
        if (options2 && options2.ignoreErrors || er2.code === "EACCES") {
            return false;
        } else {
            throw er2;
        }
    }
}

return module2.exports;
}
