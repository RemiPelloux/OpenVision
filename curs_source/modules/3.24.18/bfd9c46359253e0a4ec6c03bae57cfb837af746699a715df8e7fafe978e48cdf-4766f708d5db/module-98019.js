"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.animationFrameProvider = void 0;
const n = require("./module-51078.js");
exports.animationFrameProvider = {
    schedule (e) {
        let r = requestAnimationFrame, s = cancelAnimationFrame;
        const { delegate: o } = exports.animationFrameProvider;
        o && (r = o.requestAnimationFrame, s = o.cancelAnimationFrame);
        const i = r((t)=>{
            s = void 0, e(t);
        });
        return new n.Subscription(()=>s?.(i));
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
