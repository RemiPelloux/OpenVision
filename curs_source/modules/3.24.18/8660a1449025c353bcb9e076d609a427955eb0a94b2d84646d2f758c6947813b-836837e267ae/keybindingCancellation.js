import { D } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { El, yo } from "./cancellation.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Nj, Ud } from "./editorExtensions.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { a7, tL } from "./linkedList.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { Zc } from "./ze.js";
var lEr, Gqo, jzd;
export { Gqo, jzd, lEr };
var __wakaru_LLy_initialized = false;
export function LLy() {
if (__wakaru_LLy_initialized) return;
__wakaru_LLy_initialized = true;
"use strict";
E(), Ma(), Ud(), Hi(), yo(), a7(), It(), Rn(), Bt(), lEr = jn("IEditorCancelService"), Gqo = new cn("cancellableOperation", !1, D(1075, null)), bn(lEr, class {
    constructor(){
        this._tokens = new WeakMap;
    }
    add(t, e) {
        let n = this._tokens.get(t);
        n || (n = t.invokeWithinContext((r)=>{
            const s = Gqo.bindTo(r.get(Rr)), o = new tL;
            return {
                key: s,
                tokens: o
            };
        }), this._tokens.set(t, n));
        let i;
        return n.key.set(!0), i = n.tokens.push(e), ()=>{
            i && (i(), n.key.set(!n.tokens.isEmpty()), i = void 0);
        };
    }
    cancel(t) {
        const e = this._tokens.get(t);
        if (!e) return;
        const n = e.tokens.pop();
        n && (n.cancel(), e.key.set(!e.tokens.isEmpty()));
    }
}, 1), jzd = class extends El {
    constructor(t, e){
        super(e), this.editor = t, this._unregister = t.invokeWithinContext((n)=>n.get(lEr).add(t, this));
    }
    dispose() {
        this._unregister(), super.dispose();
    }
}, Zc(new class extends Nj {
    constructor(){
        super({
            id: "editor.cancelOperation",
            kbOpts: {
                weight: 100,
                primary: Ze.Escape
            },
            precondition: Gqo
        });
    }
    runEditorCommand(t, e) {
        t.get(lEr).cancel(e);
    }
});

}
