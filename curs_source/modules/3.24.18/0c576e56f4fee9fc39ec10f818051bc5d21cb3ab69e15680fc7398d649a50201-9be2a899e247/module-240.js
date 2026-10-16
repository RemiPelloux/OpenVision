"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.raceInit = exports.race = void 0;
const n = require("./module-1078.js"), o = require("./module-9031.js");
function s(e) {
    return (t)=>{
        let r = [];
        for(let o = 0; r && !t.closed && o < e.length; o++)r.push((0, n.from)(e[o]).subscribe((0, n.operate)({
            destination: t,
            next: (e)=>{
                if (r) {
                    for(let e = 0; e < r.length; e++)e !== o && r[e].unsubscribe();
                    r = null;
                }
                t.next(e);
            }
        })));
    };
}
exports.race = function(...e) {
    return 1 === (e = (0, o.argsOrArgArray)(e)).length ? (0, n.from)(e[0]) : new n.Observable(s(e));
}, exports.raceInit = s;
