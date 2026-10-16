var __wakaru_require_enoent_cache;
export function require_enoent() {
if (__wakaru_require_enoent_cache) return __wakaru_require_enoent_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_enoent_cache = module2;
"use strict";
var isWin = process.platform === "win32";
function notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
    });
}
function hookChildProcess(cp2, parsed) {
    if (!isWin) {
        return;
    }
    const originalEmit = cp2.emit;
    cp2.emit = function(name17, arg1) {
        if (name17 === "exit") {
            const err = verifyENOENT(arg1, parsed);
            if (err) {
                return originalEmit.call(cp2, "error", err);
            }
        }
        return originalEmit.apply(cp2, arguments);
    };
}
function verifyENOENT(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
    }
    return null;
}
function verifyENOENTSync(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
    }
    return null;
}
module2.exports = {
    hookChildProcess,
    verifyENOENT,
    verifyENOENTSync,
    notFoundError
};

return module2.exports;
}
