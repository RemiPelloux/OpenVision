import { Pn, Qe, da, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Rn } from "./extensions.js";
import { GT, R2 } from "./glass-keybinding-router-service.js";
import { Gv, KDn } from "./glassContextKeys.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var _Qt, yut, wxs;
export { _Qt, wxs, yut };
var __wakaru_Cxs_initialized = false;
export function Cxs() {
if (__wakaru_Cxs_initialized) return;
__wakaru_Cxs_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), Ss(), Gv(), R2(), _Qt = {
    BackgroundWindow: 1,
    BackgroundWindowOverlay: 2,
    FocusedWindow: 3,
    FocusedWindowFocusedSurface: 4,
    FocusedWindowOverlay: 5,
    FocusedWindowFocusedOverlay: 6
}, yut = Il("glassChatFindService"), wxs = class extends st {
    constructor(t, e){
        super(), this.keybindingRouterService = t, this.analyticsService = e, this.targets = this._register(new da);
    }
    registerTarget(t) {
        const e = Symbol("glass-chat-find-target"), n = t.onDidChange(()=>this.syncVisibleContext());
        return this.targets.set(e, {
            target: t,
            dispose: ()=>n.dispose()
        }), this.syncVisibleContext(), Pn(()=>{
            this.targets.get(e)?.target === t && (t.isVisible() && t.hide(), this.targets.deleteAndDispose(e), this.syncVisibleContext());
        });
    }
    run(t) {
        if (t === "hide") {
            let n = !1;
            for (const { target: i } of this.availableTargets())i.isVisible() && (i.hide(), n = !0);
            return n;
        }
        const e = this.resolveTarget(t !== "show");
        if (e === void 0) return !1;
        switch(t){
            case "show":
                {
                    const n = e.isVisible();
                    for (const { target: i } of this.availableTargets())i !== e && i.isVisible() && i.hide();
                    return e.show(), n || this.analyticsService.trackEvent("glass.chat_find.opened"), !0;
                }
            case "next":
                return e.next(), !0;
            case "previous":
                return e.previous(), !0;
            default:
                return t;
        }
    }
    resolveTarget(t) {
        let e, n = Number.NEGATIVE_INFINITY;
        for (const { target: i } of this.availableTargets()){
            if (t && !i.isVisible()) continue;
            const r = i.priority();
            r >= n && (e = i, n = r);
        }
        return e !== void 0 || !t ? e : this.resolveTarget(!1);
    }
    availableTargets() {
        return Array.from(this.targets.values()).filter(({ target: t })=>t.isAvailable?.() !== !1);
    }
    syncVisibleContext() {
        const t = this.availableTargets().some(({ target: e })=>e.isVisible());
        this.keybindingRouterService.setContext(KDn.key, t);
    }
    dispose() {
        this.keybindingRouterService.deleteContext(KDn.key), super.dispose();
    }
}, wxs = Re([
    F(0, GT),
    F(1, Qr)
], wxs), bn(yut, wxs, 2, 1);

}
