"use strict";
const n = require("./module-6928.js"), o = require("./module-8796.js"), s = require("./module-4234.js");
function i(e, t) {
    const r = e.options.env || process.env, i = process.cwd(), a = null != e.options.cwd, c = a && void 0 !== process.chdir && !process.chdir.disabled;
    if (c) try {
        process.chdir(e.options.cwd);
    } catch (e) {}
    let u;
    try {
        u = o.sync(e.command, {
            path: r[s({
                env: r
            })],
            pathExt: t ? n.delimiter : void 0
        });
    } catch (e) {} finally{
        c && process.chdir(i);
    }
    return u && (u = n.resolve(a ? e.options.cwd : "", u)), u;
}
module.exports = function(e) {
    return i(e) || i(e, !0);
};
