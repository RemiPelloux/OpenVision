import { jn } from "./SZu.js";
import { bo } from "./arrays.js";
import { Hi, cn } from "./contextkey.js";
import { It } from "./instantiation.js";
import { p9e, ume } from "./memento.js";
import { Lr } from "./resources.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
var b_l, Bhs, y_l, AMe, Uhs, N2n;
export { AMe, Bhs, N2n, Uhs, b_l, y_l };
var __wakaru_hye_initialized = false;
export function hye() {
if (__wakaru_hye_initialized) return;
__wakaru_hye_initialized = true;
"use strict";
E(), bo(), Lr(), Xo(), Hi(), It(), Zi(), p9e(), b_l = new cn("webviewFindWidgetVisible", !1), Bhs = new cn("webviewFindWidgetFocused", !1), y_l = new cn("webviewFindWidgetEnabled", !1), AMe = jn("webviewService"), Uhs = class {
    constructor(t, e){
        this._memento = new ume(t, e), this._state = this._memento.getMemento(-1, 1);
    }
    getOrigin(t, e) {
        const n = this._getKey(t, e), i = this._state[n];
        if (i && typeof i == "string") return i;
        const r = Ai();
        return this._state[n] = r, this._memento.saveMemento(), r;
    }
    _getKey(t, e) {
        return JSON.stringify({
            viewType: t,
            key: e
        });
    }
}, Uhs = Re([
    F(1, ki)
], Uhs), N2n = class {
    constructor(t, e){
        this._store = new Uhs(t, e);
    }
    getOrigin(t, e) {
        return this._store.getOrigin(t, e.value);
    }
}, N2n = Re([
    F(1, ki)
], N2n);

}
