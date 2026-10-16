"use strict";
var n = require("./module-83269.js");
function s(e, t) {
    for(var r in t)o(t, r) && (e[r] = t[r]);
}
function o(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
module.exports = function(e) {
    n(e) || (e = {});
    for(var t = arguments.length, r = 1; r < t; r++){
        var o = arguments[r];
        n(o) && s(e, o);
    }
    return e;
};
