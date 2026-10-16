import { PWk } from "./carry-committed-heights.ts";
import { DGk } from "./committed-geometry-controller.ts";
import { Pdf } from "./disclosure-gesture.ts";
import { Ndf } from "./local-growth-bridge.ts";
import { E } from "./tslib.es6.js";
import { flushSync as OGk } from "./react-runtime/react-dom/esm-index-production.js";
var Avs;
export { Avs };
var __wakaru_vhf_initialized = false;
export function vhf() {
if (__wakaru_vhf_initialized) return;
__wakaru_vhf_initialized = true;
"use strict";
E(), PWk(), DGk(), Pdf(), Ndf(), Avs = {
    now: ()=>performance.now(),
    reducedMotion: ()=>typeof globalThis.matchMedia == "function" && globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches ? {
            kind: "reduce"
        } : {
            kind: "no-preference"
        },
    createResizeObserver: (t)=>new ResizeObserver((n)=>{
            const i = n.map((r)=>{
                const s = r.borderBoxSize[0];
                return {
                    target: r.target,
                    heightPx: s?.blockSize ?? r.target.getBoundingClientRect().height
                };
            });
            t(i);
        }),
    queueObserverMicrotask: (t)=>{
        queueMicrotask(t);
    },
    scheduleDeadline: (t, e)=>{
        const n = setTimeout(t, e);
        return ()=>{
            clearTimeout(n);
        };
    },
    requestFrame: (t)=>{
        const e = requestAnimationFrame(t);
        return ()=>{
            cancelAnimationFrame(e);
        };
    },
    isFrameClockPaused: ()=>document.visibilityState === "hidden",
    publishObserverUpdate: (t)=>{
        OGk(t);
    },
    readElementHeightPx: (t)=>t.isConnected ? t.getBoundingClientRect().height : void 0
};

}
