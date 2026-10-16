"use strict";
const n = require("./module-6928.js"), o = require("./module-5538.js"), s = require("./module-68.js"), i = require("./module-2151.js"), a = "win32" === process.platform, c = /\.(?:com|exe)$/i, u = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function l(e) {
    if (!a) return e;
    const t = function(e) {
        e.file = o(e);
        const t = e.file && i(e.file);
        return t ? (e.args.unshift(e.file), e.command = t, o(e)) : e.file;
    }(e), r = !c.test(t);
    if (e.options.forceShell || r) {
        const r = u.test(t);
        e.command = n.normalize(e.command), e.command = s.command(e.command), e.args = e.args.map((e)=>s.argument(e, r));
        const o = [
            e.command
        ].concat(e.args).join(" ");
        e.args = [
            "/d",
            "/s",
            "/c",
            `"${o}"`
        ], e.command = process.env.comspec || "cmd.exe", e.options.windowsVerbatimArguments = !0;
    }
    return e;
}
module.exports = function(e, t, r) {
    t && !Array.isArray(t) && (r = t, t = null);
    const n = {
        command: e,
        args: t = t ? t.slice(0) : [],
        options: r = Object.assign({}, r),
        file: void 0,
        original: {
            command: e,
            args: t
        }
    };
    return r.shell ? n : l(n);
};
