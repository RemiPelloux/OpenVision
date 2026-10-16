"use strict";
const n = require("./module-16928.js"), o = require("./module-58796.js"), s = require("./module-84234.js");
function i(e, t) {
    const r = e.options.env || process.env, i = process.cwd(), a = null != e.options.cwd, l = a && void 0 !== process.chdir && !process.chdir.disabled;
    if (l) try {
        process.chdir(e.options.cwd);
    } catch (e) {}
    let c;
    try {
        c = o.sync(e.command, {
            path: r[s({
                env: r
            })],
            pathExt: t ? n.delimiter : void 0
        });
    } catch (e) {} finally{
        l && process.chdir(i);
    }
    return c && (c = n.resolve(a ? e.options.cwd : "", c)), c;
}
module.exports = function(e) {
    return i(e) || i(e, !0);
};
