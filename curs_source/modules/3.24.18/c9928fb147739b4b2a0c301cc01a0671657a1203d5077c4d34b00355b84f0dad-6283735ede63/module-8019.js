Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.animationFrameProvider = void 0;
const s = require("./module-1078.js");
exports.animationFrameProvider = {
    schedule (e) {
        let n = requestAnimationFrame, o = cancelAnimationFrame;
        const { delegate: r } = exports.animationFrameProvider;
        r && (n = r.requestAnimationFrame, o = r.cancelAnimationFrame);
        const t = n((a)=>{
            o = void 0, e(a);
        });
        return new s.Subscription(()=>o?.(t));
    },
    requestAnimationFrame (...e) {
        const { delegate: n } = exports.animationFrameProvider;
        return (n?.requestAnimationFrame || requestAnimationFrame)(...e);
    },
    cancelAnimationFrame (...e) {
        const { delegate: n } = exports.animationFrameProvider;
        return (n?.cancelAnimationFrame || cancelAnimationFrame)(...e);
    },
    delegate: void 0
};
