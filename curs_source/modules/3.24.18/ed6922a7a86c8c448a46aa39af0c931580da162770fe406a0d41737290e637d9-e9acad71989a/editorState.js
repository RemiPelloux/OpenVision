import { He, Ps, Se, wO } from "./HVr.js";
import { Ar, Eo } from "./cancellation.js";
import { OSg, s$c } from "./keybindingCancellation.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var zvn, dRe, Kvn;
export { Kvn, dRe, zvn };
var __wakaru_efe_initialized = false;
export function efe() {
if (__wakaru_efe_initialized) return;
__wakaru_efe_initialized = true;
"use strict";
x(), Ps(), qi(), Ar(), Se(), OSg(), zvn = class qIa {
    constructor(t, n){
        if (this.flags = n, (this.flags & 1) !== 0) {
            const i = t.getModel();
            this.modelVersionId = i ? wO("{0}#{1}", i.uri.toString(), i.getVersionId()) : null;
        } else this.modelVersionId = null;
        (this.flags & 4) !== 0 ? this.position = t.getPosition() : this.position = null, (this.flags & 2) !== 0 ? this.selection = t.getSelection() : this.selection = null, (this.flags & 8) !== 0 ? (this.scrollLeft = t.getScrollLeft(), this.scrollTop = t.getScrollTop()) : (this.scrollLeft = -1, this.scrollTop = -1);
    }
    _equals(t) {
        if (!(t instanceof qIa)) return !1;
        const n = t;
        return !(this.modelVersionId !== n.modelVersionId || this.scrollLeft !== n.scrollLeft || this.scrollTop !== n.scrollTop || !this.position && n.position || this.position && !n.position || this.position && n.position && !this.position.equals(n.position) || !this.selection && n.selection || this.selection && !n.selection || this.selection && n.selection && !this.selection.equalsRange(n.selection));
    }
    validate(t) {
        return this._equals(new qIa(t, this.flags));
    }
}, dRe = class extends s$c {
    constructor(e, t, n, i){
        super(e, i), this._listener = new He, t & 4 && this._listener.add(e.onDidChangeCursorPosition((r)=>{
            (!n || !dt.containsPosition(n, r.position)) && this.cancel();
        })), t & 2 && this._listener.add(e.onDidChangeCursorSelection((r)=>{
            (!n || !dt.containsRange(n, r.selection)) && this.cancel();
        })), t & 8 && this._listener.add(e.onDidScrollChange((r)=>this.cancel())), t & 1 && (this._listener.add(e.onDidChangeModel((r)=>this.cancel())), this._listener.add(e.onDidChangeModelContent((r)=>this.cancel())));
    }
    dispose() {
        this._listener.dispose(), super.dispose();
    }
}, Kvn = class extends Eo {
    constructor(e, t){
        super(t), this._listener = e.onDidChangeContent(()=>this.cancel());
    }
    dispose() {
        this._listener.dispose(), super.dispose();
    }
};

}
