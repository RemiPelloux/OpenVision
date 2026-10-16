import { Adg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Mzr, yAc;
export { Mzr, yAc };
var __wakaru_Pzr_initialized = false;
export function Pzr() {
if (__wakaru_Pzr_initialized) return;
__wakaru_Pzr_initialized = true;
"use strict";
x(), Mzr = new WeakMap, yAc = class {
    static getSameOriginWindowChain(e) {
        let t = Mzr.get(e);
        if (!t) {
            t = [], Mzr.set(e, t);
            let n = e, i;
            do i = Adg(n), i ? t.push({
                window: new WeakRef(n),
                iframeElement: n.frameElement || null
            }) : t.push({
                window: new WeakRef(n),
                iframeElement: null
            }), n = i;
            while (n)
        }
        return t.slice(0);
    }
    static getPositionOfChildWindowRelativeToAncestorWindow(e, t) {
        if (!t || e === t) return {
            top: 0,
            left: 0
        };
        let n = 0, i = 0;
        const r = this.getSameOriginWindowChain(e);
        for (const s of r){
            const o = s.window.deref();
            if (n += o?.scrollY ?? 0, i += o?.scrollX ?? 0, o === t || !s.iframeElement) break;
            const a = s.iframeElement.getBoundingClientRect();
            n += a.top, i += a.left;
        }
        return {
            top: n,
            left: i
        };
    }
};

}
