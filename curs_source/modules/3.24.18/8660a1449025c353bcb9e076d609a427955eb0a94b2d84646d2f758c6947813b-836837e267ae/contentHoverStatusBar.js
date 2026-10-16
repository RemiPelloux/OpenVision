import { Qe, st } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { av, gS } from "./hover.js";
import { Iw, oqo } from "./hoverWidget.js";
import { Al, ru } from "./keybinding.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, c2, fr, sR } from "./ze.js";
var fzo, Foi;
export { Foi, fzo };
var __wakaru_NVd_initialized = false;
export function NVd() {
if (__wakaru_NVd_initialized) return;
__wakaru_NVd_initialized = true;
"use strict";
E(), Hn(), Iw(), Qe(), ru(), gS(), sR(), fzo = Ii, Foi = class extends st {
    constructor(t, e){
        super(), this._keybindingService = t, this._hoverService = e, this.actions = [], this._hasContent = !1, this.hoverElement = fzo("div.hover-row.status-bar"), this.hoverElement.tabIndex = 0, this.actionsElement = fr(this.hoverElement, fzo("div.actions"));
    }
    get hasContent() {
        return this._hasContent;
    }
    addAction(t) {
        const e = this._keybindingService.lookupKeybinding(t.commandId), n = e ? e.getLabel() : null;
        this._hasContent = !0;
        const i = this._register(oqo.render(this.actionsElement, t, n));
        return this._register(this._hoverService.setupManagedHover(c2("element"), i.actionContainer, i.actionRenderedLabel)), this.actions.push(i), i;
    }
    append(t) {
        const e = fr(this.actionsElement, t);
        return this._hasContent = !0, e;
    }
}, Foi = Re([
    F(0, Al),
    F(1, av)
], Foi);

}
