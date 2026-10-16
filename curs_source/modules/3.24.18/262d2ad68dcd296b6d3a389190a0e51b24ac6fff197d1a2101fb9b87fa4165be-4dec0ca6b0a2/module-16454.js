"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.animationFrames = void 0;
const n = require("./module-51078.js"), o = require("./module-19034.js"), s = require("./module-98019.js");
function i(e) {
    return new n.Observable((t)=>{
        const r = e || o.performanceTimestampProvider, n = r.now();
        let i = 0;
        const a = ()=>{
            t.closed || (i = s.animationFrameProvider.requestAnimationFrame((o)=>{
                i = 0;
                const s = r.now();
                t.next({
                    timestamp: e ? s : o,
                    elapsed: s - n
                }), a();
            }));
        };
        return a(), ()=>{
            i && s.animationFrameProvider.cancelAnimationFrame(i);
        };
    });
}
exports.animationFrames = function(e) {
    return e ? i(e) : a;
};
const a = i();
