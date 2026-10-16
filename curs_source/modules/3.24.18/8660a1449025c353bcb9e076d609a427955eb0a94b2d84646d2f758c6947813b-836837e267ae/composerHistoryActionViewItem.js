import { Qe, Vn } from "./Iwo.js";
import { fz, r_e } from "./actionViewItems.js";
import { Yh, vS } from "./composer.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Dd, Hn, Pr } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { li } from "./ze.js";
var d2i;
export { d2i };
var __wakaru_EYg_initialized = false;
export function EYg() {
if (__wakaru_EYg_initialized) return;
__wakaru_EYg_initialized = true;
"use strict";
E(), Hn(), fz(), Qe(), vS(), Pl(), d2i = class extends r_e {
    constructor(t, e, n, i, r, s){
        super(t, e, n), this.getComposerId = i, this.composerService = r, this.composerDataService = s, this.mouseDownListener = this._register(new Vn), this.historyWasOpenOnMouseDown = !1;
    }
    render(t) {
        super.render(t), this.mouseDownListener.value = li(t, Pr.MOUSE_DOWN, ()=>{
            this.historyWasOpenOnMouseDown = this.isHistoryOpen();
        });
    }
    onClick(t, e = !1) {
        const n = this.historyWasOpenOnMouseDown;
        if (this.historyWasOpenOnMouseDown = !1, !n) {
            super.onClick(t, e);
            return;
        }
        Dd.stop(t, !0);
        const i = this.getComposerId(), r = i ? this.composerDataService.getHandleIfLoaded(i) : void 0;
        r && this.composerService.hideComposerHistory(r);
    }
    isHistoryOpen() {
        const t = this.getComposerId(), e = t ? this.composerDataService.getComposerDataIfLoaded(t) : void 0;
        return !!(e?.shouldShowHistory || e?.shouldShowHistoryEditor);
    }
}, d2i = Re([
    F(4, Yh),
    F(5, no)
], d2i);

}
