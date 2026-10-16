import { PTe } from "./entry.js";
import { O, se } from "./event.js";
import { MTe } from "./staticHtmlPngCapture.js";
import { Lst } from "./staticHtmlPngCapture_2.js";
import { h } from "./tslib.es6.js";
var OTe, LTe;
export { LTe, OTe };
var __wakaru_xst_initialized = false;
export function xst() {
if (__wakaru_xst_initialized) return;
__wakaru_xst_initialized = true;
"use strict";
h(), se(), MTe(), OTe = class {
    constructor(e){
        this.capture = e;
    }
    async call(e, t, n) {
        if (t !== "capture") throw new Error(`Unknown visualization PNG export command: ${t}`);
        const r = await this.capture.capture(n);
        return "kind" in r ? r : [
            r.pngBytes,
            r.width,
            r.height
        ];
    }
    listen() {
        return O.None;
    }
}, LTe = class {
    constructor(e){
        this.disposables = e;
    }
    call(e, t, n) {
        return this.implementation ??= Promise.resolve().then(()=>(Lst(), PTe)).then(({ StaticHtmlPngCapture: r })=>new OTe(this.disposables.add(new r))).catch((r)=>{
            throw this.implementation = void 0, r;
        }), this.implementation.then((r)=>r.call(e, t, n));
    }
    listen() {
        return O.None;
    }
};

}
