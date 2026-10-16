Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.raceWith = void 0;
const s = require("./module-240.js"), o = require("./module-1078.js"), r = require("./module-4896.js");
exports.raceWith = function(...e) {
    return e.length ? (a)=>new o.Observable((n)=>{
            (0, s.raceInit)([
                a,
                ...e
            ])(n);
        }) : r.identity;
};
