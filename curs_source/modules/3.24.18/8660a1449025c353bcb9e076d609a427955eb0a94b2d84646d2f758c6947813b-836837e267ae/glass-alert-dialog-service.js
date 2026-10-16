import { Pn, Qe } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Hn } from "./dom_2.js";
import { Rn } from "./extensions.js";
import { Zu, eu } from "./glass-log-service.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { rl } from "./ze.js";
var gce, SCs;
export { SCs, gce };
var __wakaru_Wme_initialized = false;
export function Wme() {
if (__wakaru_Wme_initialized) return;
__wakaru_Wme_initialized = true;
"use strict";
E(), Hn(), Qe(), Rn(), It(), Zu(), gce = Il("glassAlertDialogService"), SCs = class {
    constructor(t){
        this._logService = t, this._delegates = new Map;
    }
    registerWindowDelegate(t, e) {
        return this._delegates.set(t, e), Pn(()=>{
            this._delegates.get(t) === e && this._delegates.delete(t);
        });
    }
    getDelegate() {
        return this._delegates.get(rl().vscodeWindowId);
    }
    canShowDialog() {
        return this.getDelegate() !== void 0;
    }
    alert(t) {
        const e = this.getDelegate();
        if (!e) {
            this._logService.error("[GlassAlertDialogService] alert() called but no AlertDialogProvider is bound for this window");
            return;
        }
        e.alert(t);
    }
    dismissAll() {
        this.getDelegate()?.dismissAll();
    }
    async confirm(t) {
        if (!this.canShowDialog()) {
            const n = "Unable to show Glass confirmation dialog because no AlertDialogProvider is bound for this window.";
            throw this._logService.error(`[GlassAlertDialogService] ${n}`), new Error(n);
        }
        const e = {
            label: t.primaryLabel ?? "OK",
            result: !0
        };
        return await this.prompt({
            title: t.title,
            description: t.description,
            ...t.destructive ? {
                destructiveAction: e
            } : {
                suggestedAction: e
            },
            regretAction: {
                label: t.regretLabel ?? "Cancel",
                result: !1
            },
            onDismissResult: !1
        });
    }
    prompt(t) {
        return new Promise((e)=>{
            let n = !1;
            const i = (o)=>{
                n || (n = !0, e(o));
            }, r = this.getDelegate();
            if (!r) {
                this._logService.error("[GlassAlertDialogService] prompt() called but no AlertDialogProvider is bound for this window; resolving dismiss result"), i(t.onDismissResult);
                return;
            }
            const s = (o)=>o && {
                    label: o.label,
                    action: ({ dismiss: a })=>{
                        i(o.result), a();
                    }
                };
            r.alert({
                title: t.title,
                description: t.description,
                suggestedAction: s(t.suggestedAction),
                normalAction: s(t.normalAction),
                destructiveAction: s(t.destructiveAction),
                regretAction: s(t.regretAction),
                onDismissed: ()=>i(t.onDismissResult)
            });
        });
    }
}, SCs = Re([
    F(0, eu)
], SCs), bn(gce, SCs, 1, 1);

}
