"use strict";
const n = require("./module-35317.js"), s = require("./module-69797.js"), o = require("./module-95269.js");
function i(e, t, r) {
    const i = s(e, t, r), a = n.spawn(i.command, i.args, i.options);
    return o.hookChildProcess(a, i), a;
}
module.exports = i, module.exports.spawn = i, module.exports.sync = function(e, t, r) {
    const i = s(e, t, r), a = n.spawnSync(i.command, i.args, i.options);
    return a.error = a.error || o.verifyENOENTSync(a.status, i), a;
}, module.exports._parse = s, module.exports._enoent = o;
