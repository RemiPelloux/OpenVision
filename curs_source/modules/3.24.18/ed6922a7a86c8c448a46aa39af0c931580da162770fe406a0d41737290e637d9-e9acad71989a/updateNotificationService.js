import { Th } from "./De_3.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { av, sy } from "./solidEventsWrapper.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
var kBn, Ler;
export { Ler, kBn };
var __wakaru_Ner_initialized = false;
export function Ner() {
if (__wakaru_Ner_initialized) return;
__wakaru_Ner_initialized = true;
"use strict";
x(), Se(), Ze(), sy(), Ku(), Vn(), kBn = vn("updateNotificationService"), Ler = class extends we {
    constructor(e){
        super(), this.storageService = e, this.showing = this._register(new av(!1)), this.version = this._register(new av(void 0)), this.shouldShowReleaseNotes = this._register(new av(!1)), this.lastUpdateHiddenTimeInUnixSeconds = this._register(Th(this.storageService, "lastUpdateHiddenTimeInUnixSeconds")), this.lastUpdateHiddenVersion = this._register(Th(this.storageService, "lastUpdateHiddenVersion")), this.lastPromptTime = this._register(Th(this.storageService, "updatePromptLastPromptTime")), this.promptsShownForVersion = this._register(Th(this.storageService, "updatePromptPromptsShownForVersion")), this.promptsShownToday = this._register(Th(this.storageService, "updatePromptPromptsShownToday")), this.promptsShownTodayDate = this._register(Th(this.storageService, "updatePromptPromptsShownTodayDate")), this.snoozedUntilTime = this._register(Th(this.storageService, "updatePromptSnoozedUntilTime")), this.forceUpdate = this._register(Th(this.storageService, "updatePromptForceUpdate"));
    }
    setShowing(e) {
        this.showing.value !== e && this.showing.change(e);
    }
    setVersion(e) {
        this.version.value !== e && this.version.change(e);
    }
    setShouldShowReleaseNotes(e) {
        this.shouldShowReleaseNotes.value !== e && this.shouldShowReleaseNotes.change(e);
    }
    recordPromptShown(e) {
        const t = Date.now(), n = new Date().toISOString().slice(0, 10);
        this.promptsShownTodayDate.get() !== n && (this.promptsShownTodayDate.set(n, void 0), this.promptsShownToday.set(0, void 0)), this.lastPromptTime.set(t, void 0), this.promptsShownToday.set(this.promptsShownToday.get() + 1, void 0);
        const i = {
            ...this.promptsShownForVersion.get()
        };
        i[e] = (i[e] || 0) + 1, this.promptsShownForVersion.set(i, void 0);
    }
    setSnooze(e) {
        const t = Date.now() + e * 60 * 60 * 1e3;
        this.snoozedUntilTime.set(t, void 0);
    }
    clearSnooze() {
        this.snoozedUntilTime.set(0, void 0);
    }
    shouldShowPrompt(e, t) {
        const n = Date.now(), i = new Date().toISOString().slice(0, 10);
        this.promptsShownTodayDate.get() !== i && (this.promptsShownTodayDate.set(i, void 0), this.promptsShownToday.set(0, void 0));
        const r = this.snoozedUntilTime.get();
        if (r > 0 && n < r) return !1;
        const s = this.lastPromptTime.get();
        return !(s > 0 && (n - s) / 36e5 < e.min_hours_between_prompts || (this.promptsShownForVersion.get()[t] || 0) >= e.max_prompts_per_version || this.promptsShownToday.get() >= e.max_prompts_per_day);
    }
    setForceUpdate(e) {
        this.forceUpdate.set(e, void 0);
    }
    cleanupOldVersionEntries(e) {
        const t = this.promptsShownForVersion.get();
        if (!t || typeof t != "object") return;
        const n = (a)=>a.split(".").map((c)=>{
                const l = parseInt(c, 10);
                return Number.isNaN(l) ? 0 : l;
            }), i = n(e), r = (a, c)=>{
            for(let l = 0; l < Math.max(a.length, c.length); l++){
                const u = a[l] ?? 0, h = c[l] ?? 0;
                if (u < h) return !0;
                if (u > h) return !1;
            }
            return !1;
        }, s = {};
        let o = !1;
        for (const [a, c] of Object.entries(t)){
            const l = n(a);
            !r(l, i) && a !== e ? s[a] = c : o = !0;
        }
        o && this.promptsShownForVersion.set(s, void 0);
    }
}, Ler = ie([
    C(0, yn)
], Ler);

}
