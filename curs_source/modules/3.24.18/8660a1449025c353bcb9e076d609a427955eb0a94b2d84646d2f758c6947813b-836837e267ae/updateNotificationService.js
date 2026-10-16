import { Qe, st } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
var exi, Jdl;
export { Jdl, exi };
var __wakaru_mls_initialized = false;
export function mls() {
if (__wakaru_mls_initialized) return;
__wakaru_mls_initialized = true;
"use strict";
E(), Qe(), It(), sk(), wu(), Zi(), exi = jn("updateNotificationService"), Jdl = class extends st {
    constructor(t){
        super(), this.storageService = t, this.showing = this._register(new vb(!1)), this.version = this._register(new vb(void 0)), this.shouldShowReleaseNotes = this._register(new vb(!1)), this.lastUpdateHiddenTimeInUnixSeconds = this._register(Xh(this.storageService, "lastUpdateHiddenTimeInUnixSeconds")), this.lastUpdateHiddenVersion = this._register(Xh(this.storageService, "lastUpdateHiddenVersion")), this.lastPromptTime = this._register(Xh(this.storageService, "updatePromptLastPromptTime")), this.promptsShownForVersion = this._register(Xh(this.storageService, "updatePromptPromptsShownForVersion")), this.promptsShownToday = this._register(Xh(this.storageService, "updatePromptPromptsShownToday")), this.promptsShownTodayDate = this._register(Xh(this.storageService, "updatePromptPromptsShownTodayDate")), this.snoozedUntilTime = this._register(Xh(this.storageService, "updatePromptSnoozedUntilTime")), this.forceUpdate = this._register(Xh(this.storageService, "updatePromptForceUpdate"));
    }
    setShowing(t) {
        this.showing.value !== t && this.showing.change(t);
    }
    setVersion(t) {
        this.version.value !== t && this.version.change(t);
    }
    setShouldShowReleaseNotes(t) {
        this.shouldShowReleaseNotes.value !== t && this.shouldShowReleaseNotes.change(t);
    }
    recordPromptShown(t) {
        const e = Date.now(), n = new Date().toISOString().slice(0, 10);
        this.promptsShownTodayDate.get() !== n && (this.promptsShownTodayDate.set(n, void 0), this.promptsShownToday.set(0, void 0)), this.lastPromptTime.set(e, void 0), this.promptsShownToday.set(this.promptsShownToday.get() + 1, void 0);
        const i = {
            ...this.promptsShownForVersion.get()
        };
        i[t] = (i[t] || 0) + 1, this.promptsShownForVersion.set(i, void 0);
    }
    setSnooze(t) {
        const e = Date.now() + t * 60 * 60 * 1e3;
        this.snoozedUntilTime.set(e, void 0);
    }
    clearSnooze() {
        this.snoozedUntilTime.set(0, void 0);
    }
    shouldShowPrompt(t, e) {
        const n = Date.now(), i = new Date().toISOString().slice(0, 10);
        this.promptsShownTodayDate.get() !== i && (this.promptsShownTodayDate.set(i, void 0), this.promptsShownToday.set(0, void 0));
        const r = this.snoozedUntilTime.get();
        if (r > 0 && n < r) return !1;
        const s = this.lastPromptTime.get();
        return !(s > 0 && (n - s) / 36e5 < t.min_hours_between_prompts || (this.promptsShownForVersion.get()[e] || 0) >= t.max_prompts_per_version || this.promptsShownToday.get() >= t.max_prompts_per_day);
    }
    setForceUpdate(t) {
        this.forceUpdate.set(t, void 0);
    }
    cleanupOldVersionEntries(t) {
        const e = this.promptsShownForVersion.get();
        if (!e || typeof e != "object") return;
        const n = (a)=>a.split(".").map((l)=>{
                const c = parseInt(l, 10);
                return Number.isNaN(c) ? 0 : c;
            }), i = n(t), r = (a, l)=>{
            for(let c = 0; c < Math.max(a.length, l.length); c++){
                const u = a[c] ?? 0, d = l[c] ?? 0;
                if (u < d) return !0;
                if (u > d) return !1;
            }
            return !1;
        }, s = {};
        let o = !1;
        for (const [a, l] of Object.entries(e)){
            const c = n(a);
            !r(c, i) && a !== t ? s[a] = l : o = !0;
        }
        o && this.promptsShownForVersion.set(s, void 0);
    }
}, Jdl = Re([
    F(0, ki)
], Jdl);

}
