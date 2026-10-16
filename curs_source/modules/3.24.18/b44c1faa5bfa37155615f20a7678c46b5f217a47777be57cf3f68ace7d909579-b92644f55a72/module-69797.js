"use strict";
const n = require("./module-16928.js"), s = require("./module-15538.js"), o = require("./module-20068.js"), i = require("./module-32151.js"), a = "win32" === process.platform, c = /\.(?:com|exe)$/i, l = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function u(e) {
    if (!a) return e;
    const t = function(e) {
        e.file = s(e);
        const t = e.file && i(e.file);
        return t ? (e.args.unshift(e.file), e.command = t, s(e)) : e.file;
    }(e), r = !c.test(t);
    if (e.options.forceShell || r) {
        const r = l.test(t);
        e.command = n.normalize(e.command), e.command = o.command(e.command), e.args = e.args.map((e)=>o.argument(e, r));
        const s = [
            e.command
        ].concat(e.args).join(" ");
        e.args = [
            "/d",
            "/s",
            "/c",
            `"${s}"`
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
    return r.shell ? n : u(n);
};
