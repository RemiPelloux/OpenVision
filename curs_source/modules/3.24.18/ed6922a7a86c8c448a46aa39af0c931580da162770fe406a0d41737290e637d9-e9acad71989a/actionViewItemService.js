import { Se, bt, rn, ve } from "./HVr.js";
import { Re, ei } from "./actions_2.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var his, P7c;
export { P7c, his };
var __wakaru_ESg_initialized = false;
export function ESg() {
if (__wakaru_ESg_initialized) return;
__wakaru_ESg_initialized = true;
"use strict";
x(), bt(), Se(), Pn(), Ze(), ei(), his = vn("IActionViewItemService"), P7c = class {
    constructor(){
        this._providers = new Map, this._onDidChange = new ve, this.onDidChange = this._onDidChange.event;
    }
    dispose() {
        this._onDidChange.dispose();
    }
    register(e, t, n, i) {
        const r = this._makeKey(e, t);
        if (this._providers.has(r)) throw new Error(`A provider for the command ${t} and menu ${e} is already registered.`);
        this._providers.set(r, n);
        const s = i?.(()=>{
            this._onDidChange.fire(e);
        });
        return rn(()=>{
            s?.dispose(), this._providers.delete(r);
        });
    }
    lookUp(e, t) {
        return this._providers.get(this._makeKey(e, t));
    }
    _makeKey(e, t) {
        return `${e.id}/${t instanceof Re ? t.id : t}`;
    }
}, mn(his, P7c, 1);

}
