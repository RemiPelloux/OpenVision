import { se } from "./event.js";
import { MF, W4e } from "./ipc.mp.js";
import { hr } from "./ipcMain.js";
import { h } from "./tslib.es6.js";
import { Wn } from "./uuid.js";
var yT;
export { yT };
var __wakaru_PF_initialized = false;
export function PF() {
if (__wakaru_PF_initialized) return;
__wakaru_PF_initialized = true;
"use strict";
h(), hr(), se(), Wn(), W4e(), yT = class extends MF {
    constructor(e, t){
        super({
            addEventListener: (n, r)=>e.addListener(n, r),
            removeEventListener: (n, r)=>e.removeListener(n, r),
            postMessage: (n)=>e.postMessage(n),
            start: ()=>e.start(),
            close: ()=>e.close()
        }, t);
    }
};

}
