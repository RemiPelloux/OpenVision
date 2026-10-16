Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timestamp = void 0;
const s = require("./module-6256.js"), o = require("./module-8143.js");
exports.timestamp = function(e = s.dateTimestampProvider) {
    return (0, o.map)((a)=>({
            value: a,
            timestamp: e.now()
        }));
};
