import { S } from "./HVr.js";
import { Ar, Eo } from "./cancellation.js";
import { At, dn, xn } from "./contextkey.js";
import { i2, yc } from "./editorExtensions.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { JN, oA } from "./linkedList.js";
import { rt } from "./nls.js";
import { Pc, mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var kyi, Ais, s$c;
export { Ais, kyi, s$c };
var __wakaru_OSg_initialized = false;
export function OSg() {
if (__wakaru_OSg_initialized) return;
__wakaru_OSg_initialized = true;
"use strict";
x(), Pr(), yc(), dn(), Ar(), JN(), Ze(), Pn(), rt(), kyi = vn("IEditorCancelService"), Ais = new At("cancellableOperation", !1, S(1075, null)), mn(kyi, class {
    constructor(){
        this._tokens = new WeakMap;
    }
    add(e, t) {
        let n = this._tokens.get(e);
        n || (n = e.invokeWithinContext((r)=>{
            const s = Ais.bindTo(r.get(xn)), o = new oA;
            return {
                key: s,
                tokens: o
            };
        }), this._tokens.set(e, n));
        let i;
        return n.key.set(!0), i = n.tokens.push(t), ()=>{
            i && (i(), n.key.set(!n.tokens.isEmpty()), i = void 0);
        };
    }
    cancel(e) {
        const t = this._tokens.get(e);
        if (!t) return;
        const n = t.tokens.pop();
        n && (n.cancel(), t.key.set(!t.tokens.isEmpty()));
    }
}, 1), s$c = class extends Eo {
    constructor(e, t){
        super(t), this.editor = e, this._unregister = e.invokeWithinContext((n)=>n.get(kyi).add(e, this));
    }
    dispose() {
        this._unregister(), super.dispose();
    }
}, Pc(new class extends i2 {
    constructor(){
        super({
            id: "editor.cancelOperation",
            kbOpts: {
                weight: 100,
                primary: fe.Escape
            },
            precondition: Ais
        });
    }
    runEditorCommand(e, t) {
        e.get(kyi).cancel(t);
    }
});

}
