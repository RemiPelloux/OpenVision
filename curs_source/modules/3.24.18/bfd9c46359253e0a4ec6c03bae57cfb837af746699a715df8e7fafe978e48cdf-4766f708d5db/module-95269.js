"use strict";
const t = "win32" === process.platform;
function r(e, t) {
    return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${t} ${e.command}`,
        path: e.command,
        spawnargs: e.args
    });
}
function n(e, n) {
    return t && 1 === e && !n.file ? r(n.original, "spawn") : null;
}
module.exports = {
    hookChildProcess: function(e, r) {
        if (!t) return;
        const s = e.emit;
        e.emit = function(t, o) {
            if ("exit" === t) {
                const t = n(o, r);
                if (t) return s.call(e, "error", t);
            }
            return s.apply(e, arguments);
        };
    },
    verifyENOENT: n,
    verifyENOENTSync: function(e, n) {
        return t && 1 === e && !n.file ? r(n.original, "spawnSync") : null;
    },
    notFoundError: r
};
