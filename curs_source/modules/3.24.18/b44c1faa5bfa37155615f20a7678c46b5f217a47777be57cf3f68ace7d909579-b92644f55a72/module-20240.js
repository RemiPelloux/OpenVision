"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.raceInit = exports.race = void 0;
const n = require("./module-51078.js"), s = require("./module-79031.js");
function o(e) {
    return (t)=>{
        let r = [];
        for(let s = 0; r && !t.closed && s < e.length; s++)r.push((0, n.from)(e[s]).subscribe((0, n.operate)({
            destination: t,
            next: (e)=>{
                if (r) {
                    for(let e = 0; e < r.length; e++)e !== s && r[e].unsubscribe();
                    r = null;
                }
                t.next(e);
            }
        })));
    };
}
exports.race = function(...e) {
    return 1 === (e = (0, s.argsOrArgArray)(e)).length ? (0, n.from)(e[0]) : new n.Observable(o(e));
}, exports.raceInit = o;
