"use strict";
const n = require("./module-16928.js"), s = require("./module-58796.js"), o = require("./module-84234.js");
function i(e, t) {
    const r = e.options.env || process.env, i = process.cwd(), a = null != e.options.cwd, c = a && void 0 !== process.chdir && !process.chdir.disabled;
    if (c) try {
        process.chdir(e.options.cwd);
    } catch (e) {}
    let l;
    try {
        l = s.sync(e.command, {
            path: r[o({
                env: r
            })],
            pathExt: t ? n.delimiter : void 0
        });
    } catch (e) {} finally{
        c && process.chdir(i);
    }
    return l && (l = n.resolve(a ? e.options.cwd : "", l)), l;
}
module.exports = function(e) {
    return i(e) || i(e, !0);
};
