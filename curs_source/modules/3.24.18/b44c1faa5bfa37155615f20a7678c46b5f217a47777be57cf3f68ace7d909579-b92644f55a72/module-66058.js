"use strict";
require.d(exports, {
    mv: ()=>u,
    s7: ()=>a,
    uM: ()=>l
});
var n = require("./module-31421.js"), s = require("./module-57975.js"), o = require("./module-30913.js");
const i = (0, s.promisify)(n.execFile);
function a(e) {
    const t = new Set([
        "-c",
        "-C",
        "--git-dir",
        "--work-tree"
    ]);
    for(let r = 0; r < e.length; r++){
        const n = e[r];
        if (t.has(n)) r++;
        else if (!n.startsWith("-")) return n;
    }
}
function c(e, t) {
    return (0, o.J)({
        command: a(e),
        optionsEnv: t
    });
}
async function l(e, t, r) {
    const { env: n, encoding: s = "utf8", ...o } = r ?? {}, a = await i(e, t, {
        ...o,
        encoding: s,
        env: c(t, n)
    });
    return {
        stdout: String(a.stdout),
        stderr: String(a.stderr)
    };
}
function u(e, t, r) {
    const { env: s, ...o } = r ?? {};
    return (0, n.spawn)(e, t, {
        ...o,
        env: c(t, s)
    });
}
