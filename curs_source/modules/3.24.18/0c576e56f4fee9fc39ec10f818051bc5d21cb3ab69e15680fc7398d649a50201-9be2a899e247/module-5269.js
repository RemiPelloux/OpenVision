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
        const o = e.emit;
        e.emit = function(t, s) {
            if ("exit" === t) {
                const t = n(s, r);
                if (t) return o.call(e, "error", t);
            }
            return o.apply(e, arguments);
        };
    },
    verifyENOENT: n,
    verifyENOENTSync: function(e, n) {
        return t && 1 === e && !n.file ? r(n.original, "spawnSync") : null;
    },
    notFoundError: r
};
