import { Se, bt, po, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pe, _i } from "./codicons.js";
import { tc } from "./colorRegistry.js";
import { Cn, qt } from "./configuration.js";
import { EFt, dh } from "./iconRegistry.js";
import { Kp } from "./severity_2.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var _ir;
export { _ir };
var __wakaru_VDo_initialized = false;
export function VDo() {
if (__wakaru_VDo_initialized) return;
__wakaru_VDo_initialized = true;
"use strict";
x(), _i(), bt(), Se(), Kp(), Cn(), tc(), dh(), Sr(), lo(), _ir = class extends we {
    constructor(e){
        super(), this._configurationService = e, this._statuses = new Map, this._statusTimeouts = this._register(new po), this._onDidAddStatus = this._register(new ve), this._onDidRemoveStatus = this._register(new ve), this._onDidChangePrimaryStatus = this._register(new ve);
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
        let e;
        for (const t of this._statuses.values())(!e || t.severity >= e.severity) && (t.icon || !e?.icon) && (e = t);
        return e;
    }
    get statuses() {
        return Array.from(this._statuses.values());
    }
    add(e, t) {
        if (e = this._applyAnimationSetting(e), this._statusTimeouts.deleteAndDispose(e.id), t && t > 0) {
            const i = on.setTimeout(()=>this.remove(e), t);
            this._statusTimeouts.set(e.id, rn(()=>on.clearTimeout(i)));
        }
        const n = this._statuses.get(e.id);
        if (n && n !== e && (this._onDidRemoveStatus.fire(n), this._statuses.delete(n.id)), !this._statuses.has(e.id)) {
            const i = this.primary;
            this._statuses.set(e.id, e), this._onDidAddStatus.fire(e);
            const r = this.primary;
            i !== r && this._onDidChangePrimaryStatus.fire(r);
        }
    }
    remove(e) {
        const t = typeof e == "string" ? this._statuses.get(e) : e;
        if (t && this._statuses.get(t.id)) {
            this._statusTimeouts.deleteAndDispose(t.id);
            const n = this.primary?.id === t.id;
            this._statuses.delete(t.id), this._onDidRemoveStatus.fire(t), n && this._onDidChangePrimaryStatus.fire(this.primary);
        }
    }
    toggle(e, t) {
        t ? this.add(e) : this.remove(e);
    }
    _applyAnimationSetting(e) {
        if (!e.icon || Ft.getModifier(e.icon) !== "spin" || this._configurationService.getValue("terminal.integrated.tabs.enableAnimation")) return e;
        let t;
        return e.icon.id === EFt.id ? t = Pe.play : t = Ft.modify(e.icon, void 0), {
            ...e,
            icon: t
        };
    }
}, _ir = ie([
    C(0, qt)
], _ir);

}
