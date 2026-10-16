"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mapOneOrManyArgs = void 0;
const n = require("./module-38143.js"), { isArray: o } = Array;
exports.mapOneOrManyArgs = function(e) {
    return (0, n.map)((t)=>(function(e, t) {
            return o(t) ? e(...t) : e(t);
        })(e, t));
};
