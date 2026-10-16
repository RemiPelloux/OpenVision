import { Ff_ } from "./carry-committed-heights.ts";
import { Uv_ } from "./committed-geometry-controller.ts";
import { s$h } from "./disclosure-gesture.ts";
import { c$h } from "./local-growth-bridge.ts";
import { x } from "./tslib.es6.js";
import { flushSync as Wv_ } from "./react-runtime/react-dom/esm-index-production.js";
var qrr;
export { qrr };
var __wakaru_G$h_initialized = false;
export function G$h() {
if (__wakaru_G$h_initialized) return;
__wakaru_G$h_initialized = true;
"use strict";
x(), Ff_(), Uv_(), s$h(), c$h(), qrr = {
    now: ()=>performance.now(),
    reducedMotion: ()=>typeof globalThis.matchMedia == "function" && globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches ? {
            kind: "reduce"
        } : {
            kind: "no-preference"
        },
    createResizeObserver: (e)=>new ResizeObserver((n)=>{
            const i = n.map((r)=>{
                const s = r.borderBoxSize[0];
                return {
                    target: r.target,
                    heightPx: s?.blockSize ?? r.target.getBoundingClientRect().height
                };
            });
            e(i);
        }),
    queueObserverMicrotask: (e)=>{
        queueMicrotask(e);
    },
    scheduleDeadline: (e, t)=>{
        const n = setTimeout(e, t);
        return ()=>{
            clearTimeout(n);
        };
    },
    requestFrame: (e)=>{
        const t = requestAnimationFrame(e);
        return ()=>{
            cancelAnimationFrame(t);
        };
    },
    isFrameClockPaused: ()=>document.visibilityState === "hidden",
    publishObserverUpdate: (e)=>{
        Wv_(e);
    },
    readElementHeightPx: (e)=>e.isConnected ? e.getBoundingClientRect().height : void 0
};

}
