import { Gt, Pn, Qe, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Ft, es } from "./actions_2.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var fqo, lzd;
export { fqo, lzd };
var __wakaru_SLy_initialized = false;
export function SLy() {
if (__wakaru_SLy_initialized) return;
__wakaru_SLy_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), es(), fqo = jn("IActionViewItemService"), lzd = class {
    constructor(){
        this._providers = new Map, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event;
    }
    dispose() {
        this._onDidChange.dispose();
    }
    register(t, e, n, i) {
        const r = this._makeKey(t, e);
        if (this._providers.has(r)) throw new Error(`A provider for the command ${e} and menu ${t} is already registered.`);
        this._providers.set(r, n);
        const s = i?.(()=>{
            this._onDidChange.fire(t);
        });
        return Pn(()=>{
            s?.dispose(), this._providers.delete(r);
        });
    }
    lookUp(t, e) {
        return this._providers.get(this._makeKey(t, e));
    }
    _makeKey(t, e) {
        return `${t.id}/${e instanceof Ft ? e.id : e}`;
    }
}, bn(fqo, lzd, 1);

}
