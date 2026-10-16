Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.combineLatestWith = void 0;
const s = require("./module-1503.js"), o = require("./module-1078.js");
exports.combineLatestWith = function(...e) {
    return (a)=>new o.Observable((n)=>(0, s.combineLatestInit)([
                a,
                ...e
            ])(n));
};
