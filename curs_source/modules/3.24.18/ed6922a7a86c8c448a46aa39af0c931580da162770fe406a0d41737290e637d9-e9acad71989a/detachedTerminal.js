import { I7, Se, ns, si, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn, xg } from "./async.js";
import { en } from "./dom_2.js";
import { Ze, _t } from "./instantiation.js";
import { sa } from "./qIc.js";
import { RNt, ght } from "./symbols.js";
import { Vqt, b0t } from "./terminalCapabilityStore.js";
import { Q6, xnr } from "./terminalExtensions.js";
import { x } from "./tslib.es6.js";
import { IRo, S3h } from "./widgetManager.js";
var Rnr, k3h;
export { Rnr, k3h };
var __wakaru_w3h_initialized = false;
export function w3h() {
if (__wakaru_w3h_initialized) return;
__wakaru_w3h_initialized = true;
"use strict";
x(), en(), bn(), si(), Se(), RNt(), Ze(), Vqt(), Q6(), S3h(), Rnr = class extends we {
    constructor(e, t, n){
        super(), this._xterm = e, this._widgets = this._register(new IRo), this._contributions = new Map, this.capabilities = this._register(new b0t), this._register(e), I7(t.processInfo) && this._register(t.processInfo);
        const i = xnr.getTerminalContributions();
        for (const r of i){
            if (this._contributions.has(r.id)) {
                ns(new Error(`Cannot have two terminal contributions with the same id ${r.id}`));
                continue;
            }
            if (r.canRunInDetachedTerminals === !1) continue;
            let s;
            try {
                s = n.createInstance(r.ctor, {
                    instance: this,
                    processManager: t.processInfo,
                    widgetManager: this._widgets
                }), this._contributions.set(r.id, s), this._register(s);
            } catch (o) {
                ns(o);
            }
        }
        this._register(new xg(ght)).trigger(()=>{
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
    focus(e) {
        (e || !sa().getSelection()?.toString()) && this.xterm.focus();
    }
    attachToElement(e, t) {
        this.domElement = e;
        const n = this._xterm.attachToElement(e, t);
        this._widgets.attachToElement(n);
    }
    forceScrollbarVisibility() {
        this.domElement?.classList.add("force-scrollbar");
    }
    resetScrollbarVisibility() {
        this.domElement?.classList.remove("force-scrollbar");
    }
    getContribution(e) {
        return this._contributions.get(e);
    }
}, Rnr = ie([
    C(2, _t)
], Rnr), k3h = class extends we {
    constructor(e){
        super(), this.processState = 3, this.ptyProcessReady = Promise.resolve(), this.initialCwd = "", this.shouldPersist = !1, this.hasWrittenData = !1, this.hasChildProcesses = !1, this.capabilities = this._register(new b0t), this.shellIntegrationNonce = "", Object.assign(this, e);
    }
};

}
