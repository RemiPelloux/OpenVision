import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { Gi, _s } from "./nativeHostMainService.js";
import { ee, oe, q } from "./platform.js";
import { Tt, et } from "./productService.js";
import { A9, Tke } from "./systemNotification.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Wn, vt } from "./uuid.js";
import { app as Lit } from "electron";
import { Notification as M9 } from "electron";
function Dit(e, t, n, r) {
    if (t === void 0 || t === "") return !1;
    for (const [i, a] of e)n - a >= r && e.delete(i);
    const s = e.get(t);
    return s !== void 0 && n - s < r;
}
function Oit(e, t, n) {
    t === void 0 || t === "" || e.set(t, n);
}
var P9, N9, D9, O9, Af, hE, kke, Mf, Ske, gE;
export { Af, D9, Dit, Mf, N9, O9, Oit, P9, Ske, gE, hE, kke };
var __wakaru_Uit_initialized = false;
export function Uit() {
if (__wakaru_Uit_initialized) return;
__wakaru_Uit_initialized = true;
"use strict";
h(), j(), te(), oe(), A9(), Gi(), Tt(), Wn(), P9 = "system-notification", N9 = "token", D9 = "actionIndex", O9 = 3600 * 1e3, Af = new Map, hE = (e)=>{
    const t = Af.get(e);
    t && (clearTimeout(t.timeoutId), Af.delete(e));
}, kke = (e)=>{
    const t = vt(), n = Date.now() + O9, r = setTimeout(()=>{
        hE(t);
    }, O9), s = {
        options: e,
        expiresAt: n,
        timeoutId: r
    };
    return Af.set(t, s), t;
}, Mf = async (e, t, n, r, s)=>{
    const i = n.windowId;
    let a;
    if (r === "action" && s !== void 0 ? n.actionCommands && n.actionCommands[s] && (a = n.actionCommands[s]) : r === "click" && n.clickAction && (a = n.clickAction), a) try {
        await e.runActionInWindow(void 0, {
            windowId: i,
            actionId: a.commandId,
            args: a.args ?? {}
        });
    } catch (o) {
        t.error(`Failed to execute notification action '${a.commandId}' for window ${i}:`, o);
    }
    try {
        await e.focusWindow(i, {
            force: !0,
            webContents: !0
        });
    } catch (o) {
        t.warn(`Failed to focus window ${i} from notification ${r}:`, o);
    }
}, Ske = async (e, t, n, r)=>{
    if (e.scheme !== t.urlProtocol || e.authority !== P9) return !1;
    const s = new URLSearchParams(e.query), i = s.get(N9), a = s.get(D9);
    if (!i || a === null) return r.trace("System notification action url ignored (missing token or action index)."), !0;
    const o = Number.parseInt(a, 10);
    if (!Number.isInteger(o) || o < 0) return r.trace("System notification action url ignored (invalid action index)."), !0;
    const l = Af.get(i);
    if (!l) return r.trace("System notification action url ignored (unknown token)."), !0;
    const d = Date.now();
    return l.expiresAt <= d ? (hE(i), r.trace("System notification action url ignored (token expired)."), !0) : (hE(i), await Mf(n, r, l.options, "action", o), !0);
}, gE = class extends J {
    constructor(e, t, n){
        super(), this.logService = e, this.nativeHostMainService = t, this.productService = n, this.activeNotifications = new Set, this.activeNotificationsByDedupeKey = new Map, this.recentDedupeKeys = new Map;
    }
    convertActions(e) {
        if (!(!e || !q)) return e.map((t)=>({
                type: t.type,
                text: t.text
            }));
    }
    isSupported() {
        return M9.isSupported();
    }
    hasPermission() {
        return !!this.isSupported();
    }
    async requestPermission() {
        if (!this.isSupported()) return this.logService.warn("System notifications are not supported on this platform"), !1;
        if (q && !this.hasPermission()) try {
            return new M9({
                title: "Cursor Notifications",
                body: "Cursor would like to send you notifications.",
                silent: !0
            }).close(), this.hasPermission();
        } catch (e) {
            return this.logService.error("Failed to request notification permission:", e), !1;
        }
        return this.hasPermission();
    }
    async showNotification(e) {
        if (!this.isSupported()) return this.logService.warn("System notifications are not supported on this platform"), !1;
        if (!this.hasPermission()) return this.logService.warn("No permission to show system notifications"), !1;
        const t = e.dedupeKey, n = Date.now();
        if (Dit(this.recentDedupeKeys, t, n, e.dedupeWindowMs ?? Tke)) return this.logService.trace("System notification suppressed by dedupe key:", t), !1;
        try {
            const r = {
                title: e.title,
                body: e.body,
                silent: e.silent,
                icon: e.icon,
                urgency: e.urgency,
                timeoutType: e.timeoutType,
                subtitle: e.subtitle,
                hasReply: e.hasReply
            };
            q && e.replyPlaceholder && (r.replyPlaceholder = e.replyPlaceholder);
            const s = this.convertActions(e.actions);
            if (s && s.length > 0 && (r.actions = s, e.closeButtonText && (r.closeButtonText = e.closeButtonText)), ee && !e.toastXml && e.actions && e.actions.length > 0) {
                const a = kke(e), o = this.buildWindowsToastXml(e, a);
                r.toastXml = o;
            }
            ee && e.toastXml && (r.toastXml = e.toastXml);
            const i = new M9(r);
            if (this.activeNotifications.add(i), t !== void 0 && t !== "") {
                let a = this.activeNotificationsByDedupeKey.get(t);
                a === void 0 && (a = new Set, this.activeNotificationsByDedupeKey.set(t, a)), a.add(i);
            }
            return i.once("close", ()=>{
                if (this.activeNotifications.delete(i), t !== void 0 && t !== "") {
                    const a = this.activeNotificationsByDedupeKey.get(t);
                    a?.delete(i), a !== void 0 && a.size === 0 && this.activeNotificationsByDedupeKey.delete(t);
                }
            }), i.on("click", ()=>Mf(this.nativeHostMainService, this.logService, e, "click")), i.on("action", (a, o)=>Mf(this.nativeHostMainService, this.logService, e, "action", o)), i.on("reply", ()=>Mf(this.nativeHostMainService, this.logService, e, "reply")), i.show(), Oit(this.recentDedupeKeys, t, n), this.logService.trace("System notification shown:", e.title), !0;
        } catch (r) {
            return this.logService.error("Failed to show system notification:", r), !1;
        }
    }
    buildWindowsActionUrl(e, t) {
        const n = new URLSearchParams({
            [N9]: e,
            [D9]: String(t)
        });
        return `${this.productService.urlProtocol}://${P9}?${n.toString()}`;
    }
    buildWindowsToastXml(e, t) {
        const n = [];
        n.push(this.escapeXml(e.title)), e.subtitle && n.push(this.escapeXml(e.subtitle)), e.body && n.push(this.escapeXml(e.body));
        const r = n.map((u)=>`<text>${u}</text>`).join(""), s = e.icon ? `<image placement="appLogoOverride" src="${this.escapeXml(e.icon)}" />` : "", a = (e.actions ?? []).map((u, m)=>{
            const f = this.buildWindowsActionUrl(t, m);
            return `<action content="${this.escapeXml(u.text)}" activationType="protocol" arguments="${this.escapeXml(f)}" />`;
        }).join(""), o = a.length > 0 ? `<actions>${a}</actions>` : "", l = this.buildWindowsAudioXml(e);
        return `<toast${e.timeoutType === "never" ? ' duration="long"' : ""}><visual><binding template="ToastGeneric">${r}${s}</binding></visual>${o}${l}</toast>`;
    }
    buildWindowsAudioXml(e) {
        return e.silent ? '<audio silent="true" />' : "";
    }
    escapeXml(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    }
    async setBadgeCount(e) {
        try {
            Lit.setBadgeCount(Math.max(0, Math.floor(e)));
        } catch (t) {
            this.logService.error("Failed to set badge count:", t);
        }
    }
    async closeNotification(e) {
        const t = this.activeNotificationsByDedupeKey.get(e);
        if (t !== void 0) {
            this.recentDedupeKeys.delete(e);
            for (const n of Array.from(t))try {
                n.close();
            } catch (r) {
                this.logService.error("Failed to close system notification:", r);
            }
        }
    }
}, gE = B([
    w(0, Z),
    w(1, _s),
    w(2, et)
], gE);

}
