"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timestamp = void 0;
const n = require("./module-6256.js"), o = require("./module-8143.js");
exports.timestamp = function(e = n.dateTimestampProvider) {
    return (0, o.map)((t)=>({
            value: t,
            timestamp: e.now()
        }));
};
