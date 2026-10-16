import { He, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { en, zp } from "./dom_2.js";
import { Ze } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { nu, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var va, Nle, FFt;
export { FFt, Nle, va };
var __wakaru_du_initialized = false;
export function du() {
if (__wakaru_du_initialized) return;
__wakaru_du_initialized = true;
"use strict";
x(), Ze(), Se(), Cn(), en(), Pr(), va = vn("hoverService"), Nle = class extends we {
    constructor(e, t, n = {}, i, r){
        super(), this.placement = e, this.hoverOptions = t, this.overrideOptions = n, this.configurationService = i, this.hoverService = r, this.lastHoverHideTime = 0, this.timeLimit = 200, this.hoverDisposables = this._register(new He), this._delay = this.configurationService.getValue("workbench.hover.delay"), this._register(this.configurationService.onDidChangeConfiguration((s)=>{
            s.affectsConfiguration("workbench.hover.delay") && (this._delay = this.configurationService.getValue("workbench.hover.delay"));
        }));
    }
    get delay() {
        return this.isInstantlyHovering() ? 0 : this.hoverOptions?.dynamicDelay ? (e)=>this.hoverOptions?.dynamicDelay?.(e) ?? this._delay : this._delay;
    }
    showHover(e, t) {
        const n = typeof this.overrideOptions == "function" ? this.overrideOptions(e, t) : this.overrideOptions;
        this.hoverDisposables.clear();
        const i = nu(e.target) ? [
            e.target
        ] : e.target.targetElements;
        for (const s of i)this.hoverDisposables.add(zp(s, "keydown", (o)=>{
            o.equals(fe.Escape) && this.hoverService.hideHover();
        }));
        const r = nu(e.content) ? void 0 : typeof e.content == "string" ? e.content.toString() : e.content.value;
        return this.hoverService.showInstantHover({
            ...e,
            ...n,
            persistence: {
                hideOnKeyDown: !0,
                ...n.persistence
            },
            id: r,
            appearance: {
                ...e.appearance,
                compact: !0,
                skipFadeInAnimation: this.isInstantlyHovering(),
                ...n.appearance
            }
        }, t);
    }
    isInstantlyHovering() {
        return !!this.hoverOptions?.instantHover && Date.now() - this.lastHoverHideTime < this.timeLimit;
    }
    setInstantHoverTimeLimit(e) {
        if (!this.hoverOptions?.instantHover) throw new Error("Instant hover is not enabled");
        this.timeLimit = e;
    }
    onDidHideHover() {
        this.hoverDisposables.clear(), this.hoverOptions?.instantHover && (this.lastHoverHideTime = Date.now());
    }
}, Nle = ie([
    C(3, qt),
    C(4, va)
], Nle), FFt = {
    showHover: function() {
        throw new Error("Native hover function not implemented.");
    },
    delay: 0,
    showNativeHover: !0
};

}
