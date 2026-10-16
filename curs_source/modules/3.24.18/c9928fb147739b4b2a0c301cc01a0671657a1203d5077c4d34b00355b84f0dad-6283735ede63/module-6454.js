Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.animationFrames = void 0;
const s = require("./module-1078.js"), o = require("./module-9034.js"), r = require("./module-8019.js");
function t(e) {
    return new s.Observable((a)=>{
        const n = e || o.performanceTimestampProvider, s = n.now();
        let t = 0;
        const i = ()=>{
            a.closed || (t = r.animationFrameProvider.requestAnimationFrame((o)=>{
                t = 0;
                const r = n.now();
                a.next({
                    timestamp: e ? r : o,
                    elapsed: r - s
                }), i();
            }));
        };
        return i(), ()=>{
            t && r.animationFrameProvider.cancelAnimationFrame(t);
        };
    });
}
exports.animationFrames = function(e) {
    return e ? t(e) : i;
};
const i = t();
