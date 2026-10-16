import { Ei, Qe, kke, st, xr } from "./Iwo.js";
import { II, qn } from "./async.js";
import { Hn } from "./dom_2.js";
import { It, dn } from "./instantiation.js";
import { cZn, xdn } from "./symbols.js";
import { dAi, uAi } from "./terminalCapabilityStore.js";
import { FX, Zus } from "./terminalExtensions.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { eAg, mfl } from "./widgetManager.js";
import { rl } from "./ze.js";
var eds;
export { eds };
var __wakaru_D2k_initialized = false;
export function D2k() {
if (__wakaru_D2k_initialized) return;
__wakaru_D2k_initialized = true;
"use strict";
E(), Hn(), qn(), Ei(), Qe(), cZn(), It(), dAi(), FX(), eAg(), eds = class extends st {
    constructor(t, e, n){
        super(), this._xterm = t, this._widgets = this._register(new mfl), this._contributions = new Map, this.capabilities = this._register(new uAi), this._register(t), kke(e.processInfo) && this._register(e.processInfo);
        const i = Zus.getTerminalContributions();
        for (const r of i){
            if (this._contributions.has(r.id)) {
                xr(new Error(`Cannot have two terminal contributions with the same id ${r.id}`));
                continue;
            }
            if (r.canRunInDetachedTerminals === !1) continue;
            let s;
            try {
                s = n.createInstance(r.ctor, {
                    instance: this,
                    processManager: e.processInfo,
                    widgetManager: this._widgets
                }), this._contributions.set(r.id, s), this._register(s);
            } catch (o) {
                xr(o);
            }
        }
        this._register(new II(xdn)).trigger(()=>{
            for (const r of this._contributions.values())r.xtermReady?.(this._xterm);
        });
    }
    get xterm() {
        return this._xterm;
    }
    get selection() {
        return this._xterm && this.hasSelection() ? this._xterm.raw.getSelection() : void 0;
    }
    hasSelection() {
        return this._xterm.hasSelection();
    }
    clearSelection() {
        this._xterm.clearSelection();
    }
    focus(t) {
        (t || !rl().getSelection()?.toString()) && this.xterm.focus();
    }
    attachToElement(t, e) {
        this.domElement = t;
        const n = this._xterm.attachToElement(t, e);
        this._widgets.attachToElement(n);
    }
    forceScrollbarVisibility() {
        this.domElement?.classList.add("force-scrollbar");
    }
    resetScrollbarVisibility() {
        this.domElement?.classList.remove("force-scrollbar");
    }
    getContribution(t) {
        return this._contributions.get(t);
    }
}, eds = Re([
    F(2, dn)
], eds);

}
