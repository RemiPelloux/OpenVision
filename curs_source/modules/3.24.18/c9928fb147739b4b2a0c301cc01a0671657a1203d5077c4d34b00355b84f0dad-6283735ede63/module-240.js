Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.raceInit = exports.race = void 0;
const s = require("./module-1078.js"), o = require("./module-9031.js");
function r(e) {
    return (a)=>{
        let n = [];
        for(let o = 0; n && !a.closed && o < e.length; o++)n.push((0, s.from)(e[o]).subscribe((0, s.operate)({
            destination: a,
            next: (e)=>{
                if (n) {
                    for(let e = 0; e < n.length; e++)e !== o && n[e].unsubscribe();
                    n = null;
                }
                a.next(e);
            }
        })));
    };
}
exports.race = function(...e) {
    return 1 === (e = (0, o.argsOrArgArray)(e)).length ? (0, s.from)(e[0]) : new s.Observable(r(e));
}, exports.raceInit = r;
