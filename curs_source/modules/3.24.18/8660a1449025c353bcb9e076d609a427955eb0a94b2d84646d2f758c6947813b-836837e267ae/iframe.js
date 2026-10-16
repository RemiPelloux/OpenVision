import { E } from "./tslib.es6.js";
import { ZIy } from "./ze.js";
var z8o, hOd;
export { hOd, z8o };
var __wakaru_V8o_initialized = false;
export function V8o() {
if (__wakaru_V8o_initialized) return;
__wakaru_V8o_initialized = true;
"use strict";
E(), z8o = new WeakMap, hOd = class {
    static getSameOriginWindowChain(t) {
        let e = z8o.get(t);
        if (!e) {
            e = [], z8o.set(t, e);
            let n = t, i;
            do i = ZIy(n), i ? e.push({
                window: new WeakRef(n),
                iframeElement: n.frameElement || null
            }) : e.push({
                window: new WeakRef(n),
                iframeElement: null
            }), n = i;
            while (n)
        }
        return e.slice(0);
    }
    static getPositionOfChildWindowRelativeToAncestorWindow(t, e) {
        if (!e || t === e) return {
            top: 0,
            left: 0
        };
        let n = 0, i = 0;
        const r = this.getSameOriginWindowChain(t);
        for (const s of r){
            const o = s.window.deref();
            if (n += o?.scrollY ?? 0, i += o?.scrollX ?? 0, o === e || !s.iframeElement) break;
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
