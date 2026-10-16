import { at, ot } from "./configuration.js";
import { Ye, qe } from "./environmentMainService.js";
import { B } from "./ipc.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { fc } from "./menubar_2.js";
import { Fe, ee, oe } from "./platform.js";
import { br, fr } from "./state.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Di } from "./window.js";
import { Rfe, p2 } from "./windowImpl.js";
import { BrowserWindow as Yet } from "electron";
var j1;
export { j1 };
var __wakaru_Jet_initialized = false;
export function Jet() {
if (__wakaru_Jet_initialized) return;
__wakaru_Jet_initialized = true;
"use strict";
h(), oe(), at(), Ye(), Vt(), te(), br(), Di(), Rfe(), j1 = class extends p2 {
    constructor(e, t, n, r, s, i){
        super(r, s, t, n), this._webContents = e, this.lifecycleMainService = i, this.parentId = -1, this.stateApplied = !1, this.id = this.webContents.id, this.tryClaimWindow();
    }
    get win() {
        return super.win || this.tryClaimWindow(), super.win;
    }
    get webContents() {
        return this._webContents;
    }
    tryClaimWindow(e) {
        if (!(this._store.isDisposed || this.webContents.isDestroyed()) && (this.doTryClaimWindow(e), e && !this.stateApplied)) {
            this.stateApplied = !0;
            const t = e.glassDeferShow === !0;
            this.applyState({
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height,
                mode: e.show === !1 && !t ? 0 : 1
            }, {
                hideBecauseShadowWindow: !1
            });
        }
    }
    doTryClaimWindow(e) {
        if (this._win) return;
        const t = Yet.fromWebContents(this.webContents);
        if (t) {
            this.logService.trace("[aux window] Claimed browser window instance"), this.setWin(t, e), t.setMenu(null), (ee || Fe) && fc(this.configurationService, e?.titleBarStyle === "hidden" ? "custom" : void 0) && t.setAutoHideMenuBar(!0);
            const n = e?.supplemental === !0, r = e?.glassDeferShow === !0;
            n ? !t.isVisible() && !r && t.show() : this.lifecycleMainService.registerAuxWindow(this);
        }
    }
    matches(e) {
        return this.webContents.id === e.id;
    }
}, j1 = B([
    w(1, qe),
    w(2, Z),
    w(3, ot),
    w(4, fr),
    w(5, ht)
], j1);

}
