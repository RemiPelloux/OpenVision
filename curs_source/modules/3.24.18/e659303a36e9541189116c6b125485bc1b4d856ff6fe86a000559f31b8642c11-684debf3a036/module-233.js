Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.linesDiffComputers = void 0;
const i = require("./module-751.js"), r = require("./module-490.js");
exports.linesDiffComputers = {
    getLegacy: ()=>new i.LegacyLinesDiffComputer,
    getDefault: ()=>new r.DefaultLinesDiffComputer
};
