import { Nt, Qe } from "./Iwo.js";
import { PT, oR } from "./actionbar.js";
import { Db, es, n6 } from "./actions_2.js";
import { Hi, Rr } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { It, dn } from "./instantiation.js";
import { MC, fzd } from "./menuEntryActionViewItem.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, fr } from "./ze.js";
var sCn;
export { sCn };
var __wakaru_fDp_initialized = false;
export function fDp() {
if (__wakaru_fDp_initialized) return;
__wakaru_fDp_initialized = true;
"use strict";
E(), Hn(), PT(), Qe(), MC(), es(), Hi(), It(), sCn = class {
    constructor(t, e, n, i, r){
        this._menuId = e, this._menuService = i, this._contextKeyService = r, this._menuDisposables = new Nt, this.element = fr(t, Ii(".suggest-status-bar"));
        const s = ((o)=>o instanceof n6 ? n.createInstance(fzd, o, {
                useComma: !0
            }) : void 0);
        this._leftActions = new oR(this.element, {
            actionViewItemProvider: s
        }), this._rightActions = new oR(this.element, {
            actionViewItemProvider: s
        }), this._leftActions.domNode.classList.add("left"), this._rightActions.domNode.classList.add("right");
    }
    dispose() {
        this._menuDisposables.dispose(), this._leftActions.dispose(), this._rightActions.dispose(), this.element.remove();
    }
    show() {
        const t = this._menuService.createMenu(this._menuId, this._contextKeyService), e = ()=>{
            const n = [], i = [];
            for (const [r, s] of t.getActions())r === "left" ? n.push(...s) : i.push(...s);
            this._leftActions.clear(), this._leftActions.push(n), this._rightActions.clear(), this._rightActions.push(i);
        };
        this._menuDisposables.add(t.onDidChange(()=>e())), this._menuDisposables.add(t);
    }
    hide() {
        this._menuDisposables.clear();
    }
}, sCn = Re([
    F(2, dn),
    F(3, Db),
    F(4, Rr)
], sCn);

}
