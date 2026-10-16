import { EL } from "./Aeg.js";
import { Am, cs } from "./Sol.js";
import { Nhl } from "./Ycg.js";
import { FJ } from "./aiErrorService.js";
import { cTe } from "./composerErrorActions.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { e_ } from "./jotaiSolidBridge.js";
import { b9e } from "./loadingSpinner.js";
import { Fr, Um } from "./reactiveStorageTypes_2.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { A3k } from "./usagePricingOptions.css";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var yMg, SMg, kMg, wMg, Ihs, xhs, Ahs, Rhs, Phs, tRi;
export { Ahs, Ihs, Phs, Rhs, SMg, kMg, tRi, wMg, xhs, yMg };
var __wakaru_R3k_initialized = false;
export function R3k() {
if (__wakaru_R3k_initialized) return;
__wakaru_R3k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), dp(), Um(), FJ(), cTe(), vo(), e_(), b9e(), A3k(), yMg = wt('<div class="px-2 py-0.5 rounded-md flex-1 flex items-center justify-center select-none h-[24px] box-border">'), SMg = wt('<div class="flex flex-col gap-2"><div class=mt-2><div class="flex flex-wrap gap-1.5">'), kMg = wt("<div tabindex=-1><span>"), wMg = wt("<input type=text>"), Ihs = {
    [Fr.PRO]: [
        20,
        50,
        100
    ],
    [Fr.PRO_PLUS]: [
        40,
        80,
        150
    ],
    [Fr.ULTRA]: [
        50,
        150,
        300
    ]
}, xhs = async (t, e, n, i)=>{
    const r = n.trim();
    if ((r.startsWith("$") ? r.substring(1).trim() : r) === "") {
        t.notificationService.error("The amount cannot be empty");
        return;
    }
    const o = Nhl(n);
    if (o === void 0) {
        t.notificationService.error("The amount needs to be a valid number");
        return;
    }
    if (o < 0) {
        t.notificationService.error("The amount needs to be a valid number");
        return;
    }
    const a = o === 0;
    try {
        const l = await t.cursorAuthenticationService.dashboardClient(), c = t.cursorAuthenticationService.membershipType() === Fr.ENTERPRISE ? t.reactiveStorageService.applicationUserPersistentStorage.aiSettings.teamIds : [];
        if (await l.setHardLimit({
            teamId: c?.at(0),
            hardLimit: a ? void 0 : o,
            noUsageBasedAllowed: a,
            preserveHardLimitPerUser: !0
        }), i && e) {
            const u = t.composerDataService.getComposerBubble(e, i);
            u && t.composerChatService.submitChatMaybeAbortCurrent(e.composerId, u.text, {
                bubbleId: i
            });
        }
        t.notificationService.info("Spend limit set successfully!");
    } catch (l) {
        let c = l instanceof Error ? l.message : String(l);
        if (l instanceof Us) {
            const u = EL(l);
            u?.details && (c = `${u.details.detail}`);
        }
        t.notificationService.error(`Something went wrong setting your spent limit: ${c}`);
    }
}, Ahs = async (t, e, n, i)=>{
    const r = Nhl(n);
    if (r === void 0 || r < 0) {
        t.notificationService.error(r === void 0 ? "The amount needs to be a valid number" : "The amount needs to be a valid non-negative number");
        return;
    }
    try {
        const s = await t.cursorAuthenticationService.dashboardClient();
        if (!s) {
            t.notificationService.error("Not authenticated");
            return;
        }
        const a = (t.cursorAuthenticationService.membershipType() === Fr.ENTERPRISE ? t.reactiveStorageService.applicationUserPersistentStorage.aiSettings.teamIds : [])?.at(0);
        if (!a) {
            t.notificationService.error("Team not found");
            return;
        }
        const l = await s.getHardLimit({
            teamId: a
        });
        if (await s.setHardLimit({
            teamId: a,
            hardLimit: l.hardLimit ?? void 0,
            noUsageBasedAllowed: !1,
            hardLimitPerUser: r,
            preserveHardLimitPerUser: !1
        }), i && e) {
            const c = t.composerDataService.getComposerBubble(e, i);
            c && t.composerChatService.submitChatMaybeAbortCurrent(e.composerId, c.text, {
                bubbleId: i
            });
        }
        t.notificationService.info("Per-user spend limit set successfully!");
    } catch (s) {
        let o = s instanceof Error ? s.message : String(s);
        if (s instanceof Us) {
            const a = EL(s);
            a?.details && (o = `${a.details.detail}`);
        }
        t.notificationService.error(`Something went wrong setting your per-user spend limit: ${o}`);
    }
}, Rhs = cs("loading"), Phs = cs(!1), tRi = cs(null);

}
