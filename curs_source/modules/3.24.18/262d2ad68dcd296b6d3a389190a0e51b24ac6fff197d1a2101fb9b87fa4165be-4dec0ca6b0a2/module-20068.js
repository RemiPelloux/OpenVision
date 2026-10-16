"use strict";
const t = /([()\][%!^"`<>&|;, *?])/g;
module.exports.command = function(e) {
    return e = e.replace(t, "^$1");
}, module.exports.argument = function(e, r) {
    return e = (e = `"${e = (e = (e = `${e}`).replace(/(?=(\\+?)?)\1"/g, '$1$1\\"')).replace(/(?=(\\+?)?)\1$/, "$1$1")}"`).replace(t, "^$1"), r && (e = e.replace(t, "^$1")), e;
};
