import { bt, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Ut, mn, vn } from "./qIc.js";
import { nXs } from "./solidExports.js";
import { x } from "./tslib.es6.js";
var lJe, Lw, GMe, w3u, r7i;
export { GMe, Lw, lJe, r7i, w3u };
var __wakaru_B4e_initialized = false;
export function B4e() {
if (__wakaru_B4e_initialized) return;
__wakaru_B4e_initialized = true;
"use strict";
x(), bt(), Pn(), Ze(), la(), nXs(), lJe = vn("composerNotificationService"), Lw = ((e)=>(e.MCP = "mcp", e.NetworkAccess = "network_access", e.GitHubAuth = "github_auth", e.ModeNudge = "mode_nudge", e.NoInlineDiffsSuggestion = "no_inline_diffs_suggestion", e.PluginSuggestion = "plugin_suggestion", e))(Lw || {}), GMe = {
    INFO: 300,
    ACTION: 600,
    WARN: 900
}, w3u = 1e3, r7i = class {
    constructor(e){
        this.analyticsService = e, this._onAcceptNotification = new ve, this.onAcceptNotification = this._onAcceptNotification.event, [this.notification_reactive, this.setNotification] = Ut();
    }
    hasHigherOrEqualPriority(e, t) {
        return e === void 0 ? !0 : t === void 0 ? !1 : e >= t;
    }
    showNotification(e) {
        this.pendingNotification !== void 0 && !this.hasHigherOrEqualPriority(e.priority, this.pendingNotification.priority) || (this.pendingNotification = e, this.debounceTimeout !== void 0 && clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(()=>{
            this.flushPendingNotification();
        }, w3u));
    }
    flushPendingNotification() {
        this.debounceTimeout = void 0;
        const e = this.pendingNotification;
        if (this.pendingNotification = void 0, e === void 0) return;
        const t = this.notification_reactive();
        t !== void 0 && !this.hasHigherOrEqualPriority(e.priority, t.priority) || this.setNotification(e);
    }
    dismissNotification() {
        const e = this.notification_reactive();
        e && e.type !== "plugin_suggestion" && this.analyticsService.trackEvent("composer_notification.dismissed", {
            type: e.type
        }), this.clearPendingState(), this.setNotification(void 0);
    }
    clearNotification(e) {
        this.clearPendingState(e);
        const t = this.notification_reactive();
        (e === void 0 || t?.type === e) && this.setNotification(void 0);
    }
    clearPendingState(e) {
        (e === void 0 || this.pendingNotification?.type === e) && (this.debounceTimeout !== void 0 && (clearTimeout(this.debounceTimeout), this.debounceTimeout = void 0), this.pendingNotification = void 0);
    }
    getCurrentNotification() {
        return this.notification_reactive();
    }
    acceptNotification() {
        this.notification_reactive() !== void 0 && this._onAcceptNotification.fire();
    }
}, r7i = ie([
    C(0, ca)
], r7i), mn(lJe, r7i, 1);

}
