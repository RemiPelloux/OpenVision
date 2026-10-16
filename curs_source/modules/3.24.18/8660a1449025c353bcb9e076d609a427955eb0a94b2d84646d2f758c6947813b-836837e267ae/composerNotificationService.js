import { Gt, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { lFa } from "./solidExports.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Wt } from "./ze.js";
var L0t, FT, cqe, pBp, Tzr;
export { FT, L0t, Tzr, cqe, pBp };
var __wakaru_Vst_initialized = false;
export function Vst() {
if (__wakaru_Vst_initialized) return;
__wakaru_Vst_initialized = true;
"use strict";
E(), Gt(), Rn(), It(), Ss(), lFa(), L0t = jn("composerNotificationService"), FT = ((t)=>(t.MCP = "mcp", t.NetworkAccess = "network_access", t.GitHubAuth = "github_auth", t.ModeNudge = "mode_nudge", t.NoInlineDiffsSuggestion = "no_inline_diffs_suggestion", t.PluginSuggestion = "plugin_suggestion", t))(FT || {}), cqe = {
    INFO: 300,
    ACTION: 600,
    WARN: 900
}, pBp = 1e3, Tzr = class {
    constructor(t){
        this.analyticsService = t, this._onAcceptNotification = new tt, this.onAcceptNotification = this._onAcceptNotification.event, [this.notification_reactive, this.setNotification] = Wt();
    }
    hasHigherOrEqualPriority(t, e) {
        return t === void 0 ? !0 : e === void 0 ? !1 : t >= e;
    }
    showNotification(t) {
        this.pendingNotification !== void 0 && !this.hasHigherOrEqualPriority(t.priority, this.pendingNotification.priority) || (this.pendingNotification = t, this.debounceTimeout !== void 0 && clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(()=>{
            this.flushPendingNotification();
        }, pBp));
    }
    flushPendingNotification() {
        this.debounceTimeout = void 0;
        const t = this.pendingNotification;
        if (this.pendingNotification = void 0, t === void 0) return;
        const e = this.notification_reactive();
        e !== void 0 && !this.hasHigherOrEqualPriority(t.priority, e.priority) || this.setNotification(t);
    }
    dismissNotification() {
        const t = this.notification_reactive();
        t && t.type !== "plugin_suggestion" && this.analyticsService.trackEvent("composer_notification.dismissed", {
            type: t.type
        }), this.clearPendingState(), this.setNotification(void 0);
    }
    clearNotification(t) {
        this.clearPendingState(t);
        const e = this.notification_reactive();
        (t === void 0 || e?.type === t) && this.setNotification(void 0);
    }
    clearPendingState(t) {
        (t === void 0 || this.pendingNotification?.type === t) && (this.debounceTimeout !== void 0 && (clearTimeout(this.debounceTimeout), this.debounceTimeout = void 0), this.pendingNotification = void 0);
    }
    getCurrentNotification() {
        return this.notification_reactive();
    }
    acceptNotification() {
        this.notification_reactive() !== void 0 && this._onAcceptNotification.fire();
    }
}, Tzr = Re([
    F(0, Qr)
], Tzr), bn(L0t, Tzr, 1);

}
