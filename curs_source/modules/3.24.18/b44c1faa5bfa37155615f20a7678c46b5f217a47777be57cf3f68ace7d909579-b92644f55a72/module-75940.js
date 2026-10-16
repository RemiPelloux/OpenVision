"use strict";
module.exports = function(e) {
    return "string" == typeof e && "\ufeff" === e.charAt(0) ? e.slice(1) : e;
};
