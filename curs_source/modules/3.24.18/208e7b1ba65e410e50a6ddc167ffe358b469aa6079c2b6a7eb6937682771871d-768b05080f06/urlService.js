import { le } from "./async.js";
import { ge } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Tt, et } from "./productService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
function Gxe(e, t = (r)=>!!r, n = null) {
    let r = 0;
    const s = e.length, i = ()=>{
        if (r >= s) return Promise.resolve(n);
        const a = e[r++];
        return Promise.resolve(a()).then((l)=>t(l) ? Promise.resolve(l) : i());
    };
    return i();
}
var Tge, _1;
export { Gxe, Tge, _1 };
var __wakaru_IXe_initialized = false;
export function IXe() {
if (__wakaru_IXe_initialized) return;
__wakaru_IXe_initialized = true;
"use strict";
h(), le(), j(), ye(), Tt(), Tge = class extends J {
    constructor(){
        super(...arguments), this.handlers = new Set;
    }
    open(e, t) {
        const n = [
            ...this.handlers.values()
        ];
        return Gxe(n.map((r)=>()=>r.handleURL(e, t)), void 0, !1).then((r)=>r || !1);
    }
    registerHandler(e) {
        return this.handlers.add(e), ge(()=>this.handlers.delete(e));
    }
}, _1 = class extends Tge {
    constructor(e){
        super(), this.productService = e;
    }
    create(e) {
        let { authority: t, path: n, query: r, fragment: s } = e || {
            authority: void 0,
            path: void 0,
            query: void 0,
            fragment: void 0
        };
        return t && n && n.indexOf("/") !== 0 && (n = `/${n}`), x.from({
            scheme: this.productService.urlProtocol,
            authority: t,
            path: n,
            query: r,
            fragment: s
        });
    }
}, _1 = B([
    w(0, et)
], _1);

}
