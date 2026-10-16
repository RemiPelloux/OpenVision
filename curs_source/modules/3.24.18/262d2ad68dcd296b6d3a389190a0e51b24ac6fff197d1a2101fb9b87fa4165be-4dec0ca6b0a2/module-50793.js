"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timestamp = void 0;
const n = require("./module-86256.js"), o = require("./module-38143.js");
exports.timestamp = function(e = n.dateTimestampProvider) {
    return (0, o.map)((t)=>({
            value: t,
            timestamp: e.now()
        }));
};
