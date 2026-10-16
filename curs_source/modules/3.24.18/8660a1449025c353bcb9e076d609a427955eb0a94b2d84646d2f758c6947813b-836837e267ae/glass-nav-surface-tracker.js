import { $E_ } from "./glass-nav-session.js";
import { BcT } from "./glass-nav-surface.js";
import { BE_, DcT, FE_, FcT, LcT, McT, NcT, OcT, UE_, nwc } from "./mE_.js";
import { E } from "./tslib.es6.js";
var HE_;
export { HE_ };
var __wakaru_UcT_initialized = false;
export function UcT() {
if (__wakaru_UcT_initialized) return;
__wakaru_UcT_initialized = true;
"use strict";
E(), $E_(), BcT(), HE_ = class {
    constructor(t){
        this._host = t, this._pendingPanelShown = !1, this._suppressActivation = !1;
        const e = this._host.getActiveAgentId();
        e !== void 0 && nwc(e, this._host.nowMs()), this._host.activeAgentBelongsToThisWorkspace() && this.anchorActiveAgentSession();
    }
    anchorActiveAgentSession() {
        const t = this._host.getActiveAgentId();
        t !== void 0 && (nwc(t, this._host.nowMs()), FE_(t, this._host.nowMs()));
    }
    beginSuppressedActivation() {
        this._suppressActivation = !0;
    }
    endSuppressedActivation() {
        this._suppressActivation = !1, this.handleActiveTabMaybeChanged();
    }
    handleActiveTabMaybeChanged(t = "tab-change") {
        if (t === "panel-shown" && (this._pendingPanelShown = !0), this._suppressActivation) return;
        if (this._host.isRestoring()) {
            this._pendingPanelShown = !0;
            return;
        }
        if (!this._host.isEditorPanelVisible() || !this._host.activeAgentBelongsToThisWorkspace()) return;
        const e = this._host.getActiveAgentId();
        if (e === void 0) return;
        const n = OcT(), i = n !== void 0 && n !== e, r = this._host.getActiveTabId();
        if (r === null) {
            const p = LcT(e);
            p !== void 0 && BE_(e, McT(p)), i && UE_(e);
            return;
        }
        const s = this._host.getActiveTabKind(r);
        if (s === void 0) return;
        const o = FcT(s);
        if (o === void 0) return;
        const a = this._host.nowMs(), l = FE_(e, a), c = DcT(l, o, r, a), u = "skipped" in c && i ? NcT(l, o, r, a) : c;
        if (BE_(e, u.nextState), "skipped" in u) return;
        const d = u.eventPayloadFields, h = i ? "agent_switch" : this._pendingPanelShown ? "panel_shown" : "tab_change";
        this._pendingPanelShown = !1, UE_(e), this._host.trackEvent({
            ...d,
            trigger: h,
            tabKind: s
        });
    }
};

}
