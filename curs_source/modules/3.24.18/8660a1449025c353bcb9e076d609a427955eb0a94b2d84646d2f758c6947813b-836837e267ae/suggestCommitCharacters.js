import { CC, Nt, Qe } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Tgn, jii } from "./characterClassifier.js";
import { E } from "./tslib.es6.js";
var uDp;
export { uDp };
var __wakaru_yx1_initialized = false;
export function yx1() {
if (__wakaru_yx1_initialized) return;
__wakaru_yx1_initialized = true;
"use strict";
E(), bo(), Qe(), Tgn(), uDp = class {
    constructor(t, e, n, i, r){
        this._disposables = new Nt, this._disposables.add(i.onDidSuggest((s)=>{
            s.completionModel.items.length === 0 && this.reset();
        })), this._disposables.add(i.onDidCancel((s)=>{
            this.reset();
        })), this._disposables.add(n.onDidShow(()=>this._onItem(n.getFocusedItem()))), this._disposables.add(n.onDidFocus(this._onItem, this)), this._disposables.add(n.onDidHide(this.reset, this)), this._disposables.add(t.onWillType((s)=>{
            if (this._active && !n.isFrozen() && i.state !== 0) {
                const o = s.charCodeAt(s.length - 1);
                this._active.acceptCharacters.has(o) && t.getOption(0) && r(this._active.item);
            }
        }));
    }
    _onItem(t) {
        if (!t || !CC(t.item.completion.commitCharacters)) {
            this.reset();
            return;
        }
        if (this._active && this._active.item.item === t.item) return;
        const e = new jii;
        for (const n of t.item.completion.commitCharacters)n.length > 0 && e.add(n.charCodeAt(0));
        this._active = {
            acceptCharacters: e,
            item: t
        };
    }
    reset() {
        this._active = void 0;
    }
    dispose() {
        this._disposables.dispose();
    }
};

}
