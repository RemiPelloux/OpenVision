import { Ec, Gt, Qe, Vn, st, tt } from "./Iwo.js";
import { qn } from "./async.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var gXf, fXf;
export { fXf, gXf };
var __wakaru_X8w_initialized = false;
export function X8w() {
if (__wakaru_X8w_initialized) return;
__wakaru_X8w_initialized = true;
"use strict";
E(), Mt(), qn(), Gt(), Qe(), gXf = 200, fXf = class extends st {
    constructor(t){
        super(), this.hideTimer = this._register(new Vn), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.over = {
            guest: t.isPointerOver(),
            chip: !1
        }, this.visible = this.over.guest, this._register(t.onDidChangePointerOver((e)=>this.setOver("guest", e)));
    }
    isVisible() {
        return this.visible;
    }
    setOver(t, e) {
        this.over[t] = e, this.over.guest || this.over.chip ? (this.hideTimer.clear(), this.setVisible(!0)) : this.hideTimer.value = Ec(()=>this.setVisible(!1), gXf);
    }
    setVisible(t) {
        this.visible !== t && (this.visible = t, this._onDidChange.fire());
    }
};

}
