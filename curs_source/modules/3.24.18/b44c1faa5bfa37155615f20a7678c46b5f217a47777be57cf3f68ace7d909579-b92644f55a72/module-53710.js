"use strict";
var t = void 0 === Object.hasOwn ? Function.call.bind(Object.prototype.hasOwnProperty) : Object.hasOwn;
module.exports = function(e, r) {
    for(var n in r)t(r, n) && (e[n] = r[n]);
};
