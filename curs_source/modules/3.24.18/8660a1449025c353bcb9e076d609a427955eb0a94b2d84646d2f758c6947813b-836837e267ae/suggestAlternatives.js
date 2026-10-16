import { Qe, Vn, st } from "./Iwo.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var P6e;
export { P6e };
var __wakaru_bx1_initialized = false;
export function bx1() {
if (__wakaru_bx1_initialized) return;
__wakaru_bx1_initialized = true;
"use strict";
E(), Qe(), Hi(), P6e = class extends st {
    constructor(t, e){
        super(), this._editor = t, this._index = 0, this._listener = this._register(new Vn), this._ckOtherSuggestions = P6e.OtherSuggestions.bindTo(e);
    }
    dispose() {
        this.reset(), super.dispose();
    }
    reset() {
        this._ckOtherSuggestions.reset(), this._listener.clear(), this._model = void 0, this._acceptNext = void 0, this._ignore = !1;
    }
    set({ model: t, index: e }, n) {
        if (t.items.length === 0) {
            this.reset();
            return;
        }
        if (P6e._moveIndex(!0, t, e) === e) {
            this.reset();
            return;
        }
        this._acceptNext = n, this._model = t, this._index = e, this._listener.value = this._editor.onDidChangeCursorPosition(()=>{
            this._ignore || this.reset();
        }), this._ckOtherSuggestions.set(!0);
    }
    static _moveIndex(t, e, n) {
        let i = n;
        for(let r = e.items.length; r > 0 && (i = (i + e.items.length + (t ? 1 : -1)) % e.items.length, !(i === n || !e.items[i].completion.additionalTextEdits)); r--);
        return i;
    }
    next() {
        this._move(!0);
    }
    prev() {
        this._move(!1);
    }
    _move(t) {
        if (this._model) try {
            this._ignore = !0, this._index = P6e._moveIndex(t, this._model, this._index), this._acceptNext({
                index: this._index,
                item: this._model.items[this._index],
                model: this._model
            });
        } finally{
            this._ignore = !1;
        }
    }
}, P6e.OtherSuggestions = new cn("hasOtherSuggestions", !1), P6e = Re([
    F(1, Rr)
], P6e);

}
