import { Fa, Nt, Qe, rY } from "./Iwo.js";
import { El, yo } from "./cancellation.js";
import { LLy, jzd } from "./keybindingCancellation.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var cEr, EHe, Roi;
export { EHe, Roi, cEr };
var __wakaru_R5e_initialized = false;
export function R5e() {
if (__wakaru_R5e_initialized) return;
__wakaru_R5e_initialized = true;
"use strict";
E(), Fa(), Qs(), yo(), Qe(), LLy(), cEr = class RJc {
    constructor(e, n){
        if (this.flags = n, (this.flags & 1) !== 0) {
            const i = e.getModel();
            this.modelVersionId = i ? rY("{0}#{1}", i.uri.toString(), i.getVersionId()) : null;
        } else this.modelVersionId = null;
        (this.flags & 4) !== 0 ? this.position = e.getPosition() : this.position = null, (this.flags & 2) !== 0 ? this.selection = e.getSelection() : this.selection = null, (this.flags & 8) !== 0 ? (this.scrollLeft = e.getScrollLeft(), this.scrollTop = e.getScrollTop()) : (this.scrollLeft = -1, this.scrollTop = -1);
    }
    _equals(e) {
        if (!(e instanceof RJc)) return !1;
        const n = e;
        return !(this.modelVersionId !== n.modelVersionId || this.scrollLeft !== n.scrollLeft || this.scrollTop !== n.scrollTop || !this.position && n.position || this.position && !n.position || this.position && n.position && !this.position.equals(n.position) || !this.selection && n.selection || this.selection && !n.selection || this.selection && n.selection && !this.selection.equalsRange(n.selection));
    }
    validate(e) {
        return this._equals(new RJc(e, this.flags));
    }
}, EHe = class extends jzd {
    constructor(t, e, n, i){
        super(t, i), this._listener = new Nt, e & 4 && this._listener.add(t.onDidChangeCursorPosition((r)=>{
            (!n || !qt.containsPosition(n, r.position)) && this.cancel();
        })), e & 2 && this._listener.add(t.onDidChangeCursorSelection((r)=>{
            (!n || !qt.containsRange(n, r.selection)) && this.cancel();
        })), e & 8 && this._listener.add(t.onDidScrollChange((r)=>this.cancel())), e & 1 && (this._listener.add(t.onDidChangeModel((r)=>this.cancel())), this._listener.add(t.onDidChangeModelContent((r)=>this.cancel())));
    }
    dispose() {
        this._listener.dispose(), super.dispose();
    }
}, Roi = class extends El {
    constructor(t, e){
        super(e), this._listener = t.onDidChangeContent(()=>this.cancel());
    }
    dispose() {
        this._listener.dispose(), super.dispose();
    }
};

}
