"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.animationFrames = void 0;
const n = require("./module-51078.js"), s = require("./module-19034.js"), o = require("./module-98019.js");
function i(e) {
    return new n.Observable((t)=>{
        const r = e || s.performanceTimestampProvider, n = r.now();
        let i = 0;
        const a = ()=>{
            t.closed || (i = o.animationFrameProvider.requestAnimationFrame((s)=>{
                i = 0;
                const o = r.now();
                t.next({
                    timestamp: e ? o : s,
                    elapsed: o - n
                }), a();
            }));
        };
        return a(), ()=>{
            i && o.animationFrameProvider.cancelAnimationFrame(i);
        };
    });
}
exports.animationFrames = function(e) {
    return e ? i(e) : a;
};
const a = i();
