import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { en } from "./dom_2.js";
import { du, va } from "./hover.js";
import { Tb, tis } from "./hoverWidget.js";
import { no, qr } from "./keybinding.js";
import { $f, Ve, Ye, ih } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Gis, Zvn;
export { Gis, Zvn };
var __wakaru_W$c_initialized = false;
export function W$c() {
if (__wakaru_W$c_initialized) return;
__wakaru_W$c_initialized = true;
"use strict";
x(), en(), Tb(), Se(), no(), du(), $f(), Gis = Ve, Zvn = class extends we {
    constructor(e, t){
        super(), this._keybindingService = e, this._hoverService = t, this.actions = [], this._hasContent = !1, this.hoverElement = Gis("div.hover-row.status-bar"), this.hoverElement.tabIndex = 0, this.actionsElement = Ye(this.hoverElement, Gis("div.actions"));
    }
    get hasContent() {
        return this._hasContent;
    }
    addAction(e) {
        const t = this._keybindingService.lookupKeybinding(e.commandId), n = t ? t.getLabel() : null;
        this._hasContent = !0;
        const i = this._register(tis.render(this.actionsElement, e, n));
        return this._register(this._hoverService.setupManagedHover(ih("element"), i.actionContainer, i.actionRenderedLabel)), this.actions.push(i), i;
    }
    append(e) {
        const t = Ye(this.actionsElement, e);
        return this._hasContent = !0, t;
    }
}, Zvn = ie([
    C(0, qr),
    C(1, va)
], Zvn);

}
