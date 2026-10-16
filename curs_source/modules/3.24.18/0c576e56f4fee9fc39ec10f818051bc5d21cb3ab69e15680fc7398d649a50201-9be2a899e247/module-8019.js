"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.animationFrameProvider = void 0;
const n = require("./module-1078.js");
exports.animationFrameProvider = {
    schedule (e) {
        let r = requestAnimationFrame, o = cancelAnimationFrame;
        const { delegate: s } = exports.animationFrameProvider;
        s && (r = s.requestAnimationFrame, o = s.cancelAnimationFrame);
        const i = r((t)=>{
            o = void 0, e(t);
        });
        return new n.Subscription(()=>o?.(i));
    },
    requestAnimationFrame (...e) {
        const { delegate: r } = exports.animationFrameProvider;
        return (r?.requestAnimationFrame || requestAnimationFrame)(...e);
    },
    cancelAnimationFrame (...e) {
        const { delegate: r } = exports.animationFrameProvider;
        return (r?.cancelAnimationFrame || cancelAnimationFrame)(...e);
    },
    delegate: void 0
};
