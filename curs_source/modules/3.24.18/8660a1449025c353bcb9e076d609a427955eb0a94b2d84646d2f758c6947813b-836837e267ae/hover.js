import { Nt, Qe, st } from "./Iwo.js";
import { jn } from "./SZu.js";
import { or, yi } from "./configuration.js";
import { Hn, n0 } from "./dom_2.js";
import { It } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $u } from "./ze.js";
var av, dnt, YTr;
export { YTr, av, dnt };
var __wakaru_gS_initialized = false;
export function gS() {
if (__wakaru_gS_initialized) return;
__wakaru_gS_initialized = true;
"use strict";
E(), It(), Qe(), or(), Hn(), Ma(), av = jn("hoverService"), dnt = class extends st {
    constructor(t, e, n = {}, i, r){
        super(), this.placement = t, this.hoverOptions = e, this.overrideOptions = n, this.configurationService = i, this.hoverService = r, this.lastHoverHideTime = 0, this.timeLimit = 200, this.hoverDisposables = this._register(new Nt), this._delay = this.configurationService.getValue("workbench.hover.delay"), this._register(this.configurationService.onDidChangeConfiguration((s)=>{
            s.affectsConfiguration("workbench.hover.delay") && (this._delay = this.configurationService.getValue("workbench.hover.delay"));
        }));
    }
    get delay() {
        return this.isInstantlyHovering() ? 0 : this.hoverOptions?.dynamicDelay ? (t)=>this.hoverOptions?.dynamicDelay?.(t) ?? this._delay : this._delay;
    }
    showHover(t, e) {
        const n = typeof this.overrideOptions == "function" ? this.overrideOptions(t, e) : this.overrideOptions;
        this.hoverDisposables.clear();
        const i = $u(t.target) ? [
            t.target
        ] : t.target.targetElements;
        for (const s of i)this.hoverDisposables.add(n0(s, "keydown", (o)=>{
            o.equals(Ze.Escape) && this.hoverService.hideHover();
        }));
        const r = $u(t.content) ? void 0 : typeof t.content == "string" ? t.content.toString() : t.content.value;
        return this.hoverService.showInstantHover({
            ...t,
            ...n,
            persistence: {
                hideOnKeyDown: !0,
                ...n.persistence
            },
            id: r,
            appearance: {
                ...t.appearance,
                compact: !0,
                skipFadeInAnimation: this.isInstantlyHovering(),
                ...n.appearance
            }
        }, e);
    }
    isInstantlyHovering() {
        return !!this.hoverOptions?.instantHover && Date.now() - this.lastHoverHideTime < this.timeLimit;
    }
    setInstantHoverTimeLimit(t) {
        if (!this.hoverOptions?.instantHover) throw new Error("Instant hover is not enabled");
        this.timeLimit = t;
    }
    onDidHideHover() {
        this.hoverDisposables.clear(), this.hoverOptions?.instantHover && (this.lastHoverHideTime = Date.now());
    }
}, dnt = Re([
    F(3, yi),
    F(4, av)
], dnt), YTr = {
    showHover: function() {
        throw new Error("Native hover function not implemented.");
    },
    delay: 0,
    showNativeHover: !0
};

}
