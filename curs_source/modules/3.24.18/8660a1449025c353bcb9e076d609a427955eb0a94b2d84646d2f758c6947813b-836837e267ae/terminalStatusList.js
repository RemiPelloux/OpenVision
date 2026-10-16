import { Gt, Pn, Qe, da, st, tt } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Ap } from "./colorRegistry.js";
import { or, yi } from "./configuration.js";
import { MGo, b_ } from "./iconRegistry.js";
import { ob } from "./severity_2.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
var Bds;
export { Bds };
var __wakaru_c2g_initialized = false;
export function c2g() {
if (__wakaru_c2g_initialized) return;
__wakaru_c2g_initialized = true;
"use strict";
E(), gs(), Gt(), Qe(), ob(), or(), Ap(), b_(), ta(), Bs(), Bds = class extends st {
    constructor(t){
        super(), this._configurationService = t, this._statuses = new Map, this._statusTimeouts = this._register(new da), this._onDidAddStatus = this._register(new tt), this._onDidRemoveStatus = this._register(new tt), this._onDidChangePrimaryStatus = this._register(new tt);
    }
    get onDidAddStatus() {
        return this._onDidAddStatus.event;
    }
    get onDidRemoveStatus() {
        return this._onDidRemoveStatus.event;
    }
    get onDidChangePrimaryStatus() {
        return this._onDidChangePrimaryStatus.event;
    }
    get primary() {
        let t;
        for (const e of this._statuses.values())(!t || e.severity >= t.severity) && (e.icon || !t?.icon) && (t = e);
        return t;
    }
    get statuses() {
        return Array.from(this._statuses.values());
    }
    add(t, e) {
        if (t = this._applyAnimationSetting(t), this._statusTimeouts.deleteAndDispose(t.id), e && e > 0) {
            const i = $t.setTimeout(()=>this.remove(t), e);
            this._statusTimeouts.set(t.id, Pn(()=>$t.clearTimeout(i)));
        }
        const n = this._statuses.get(t.id);
        if (n && n !== t && (this._onDidRemoveStatus.fire(n), this._statuses.delete(n.id)), !this._statuses.has(t.id)) {
            const i = this.primary;
            this._statuses.set(t.id, t), this._onDidAddStatus.fire(t);
            const r = this.primary;
            i !== r && this._onDidChangePrimaryStatus.fire(r);
        }
    }
    remove(t) {
        const e = typeof t == "string" ? this._statuses.get(t) : t;
        if (e && this._statuses.get(e.id)) {
            this._statusTimeouts.deleteAndDispose(e.id);
            const n = this.primary?.id === e.id;
            this._statuses.delete(e.id), this._onDidRemoveStatus.fire(e), n && this._onDidChangePrimaryStatus.fire(this.primary);
        }
    }
    toggle(t, e) {
        e ? this.add(t) : this.remove(t);
    }
    _applyAnimationSetting(t) {
        if (!t.icon || Gn.getModifier(t.icon) !== "spin" || this._configurationService.getValue("terminal.integrated.tabs.enableAnimation")) return t;
        let e;
        return t.icon.id === MGo.id ? e = yt.play : e = Gn.modify(t.icon, void 0), {
            ...t,
            icon: e
        };
    }
}, Bds = Re([
    F(0, yi)
], Bds);

}
