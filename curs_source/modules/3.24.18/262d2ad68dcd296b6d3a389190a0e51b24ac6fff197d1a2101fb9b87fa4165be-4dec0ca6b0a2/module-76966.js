"use strict";
var n = require("./module-83269.js");
function o(e, t) {
    for(var r in t)s(t, r) && (e[r] = t[r]);
}
function s(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
module.exports = function(e) {
    n(e) || (e = {});
    for(var t = arguments.length, r = 1; r < t; r++){
        var s = arguments[r];
        n(s) && o(e, s);
    }
    return e;
};
