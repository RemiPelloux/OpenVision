import { BAt, JXf, MJf, SHw, THw, XXf, bHw, bce, kHw, yHw } from "./BA.js";
import { Ec, Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { dtd, htd, lIo } from "./agent-store-commands.ts";
import { Qr, Ss } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { c_, ype } from "./async.cursor.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { hs, nr, rs } from "./commands.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { Ji, Li } from "./log.js";
import { Ks, Wr, Yn } from "./notification.js";
import { Jc } from "./observable.js";
import { Rd, ih } from "./pathService.js";
import { AKe, lZt } from "./primitiveSourceService.js";
import { ZXf } from "./retargetSkillEditors.js";
import { jNn } from "./skillIdentity.js";
import { fHl, jTs, qye } from "./skillMigration.js";
import { $Jf, BJf, FJf, HJf, OJf, UJf, jJf, xHw } from "./skillMigrationCommands.js";
import { eZf } from "./skillStoreMove.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { HTs, dOi } from "./userAgentStoreSkillsSyncSettingsService.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Hve } from "./ze.js";
var IDe, WTs, WJf, GJf, GTs;
export { GJf, GTs, IDe, WJf, WTs };
var __wakaru_qTs_initialized = false;
export function qTs() {
if (__wakaru_qTs_initialized) return;
__wakaru_qTs_initialized = true;
"use strict";
E(), nl(), c_(), qn(), Gt(), Qe(), Jc(), rs(), Rn(), It(), Ji(), Ks(), wu(), Zi(), Ss(), Dc(), HTs(), Rs(), lZt(), Wo(), fo(), ih(), ZXf(), jNn(), jTs(), xHw(), eZf(), IDe = Il("skillMigrationService"), WTs = [], WJf = 3e4, GJf = 3e4, GTs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this.aiService = t, this.analyticsService = e, this.commandService = n, this.cursorAuthenticationService = i, this.editorService = r, this.logService = s, this.notificationService = o, this.pathService = a, this.primitiveSourceService = l, this.userAgentStoreSkillsSyncSettingsService = c, this.storageService = u, this.workbenchEnvironmentService = d, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.devForcedOffer = !1, this.run = this._register(new ype), this.syncSetting = {
            status: "loading"
        }, this.storeSkillsDirs = WTs, this.cancelRequested = !1, this.bannerShownReported = !1, this.storeServingDeadlineMs = WJf, this.storeMountedDeadlineMs = GJf, this.marker = this._register(Xh(this.storageService, "userAgentStoreSkillsMigration")), this.devOverride = this._register(Xh(this.storageService, "userAgentStoreSkillsMigrationDevOverride")), this.devForcedOffer = this.devOverride.get() === !0, this._register(Hve(this.marker, ()=>this._onDidChange.fire())), this._register(this.userAgentStoreSkillsSyncSettingsService.onDidChangeState((h)=>{
            this.syncSetting = h, this._onDidChange.fire();
        }));
    }
    bannerState() {
        return bHw({
            account: this.accountState(),
            storeAvailable: JXf({
                privacyMode: this.cursorAuthenticationService.granularPrivacyModeRawEnum(),
                agentStoreSkillsDirs: this.storeSkillsDirs
            }) === "available",
            storeSourceId: this.storeSkillsDirs[0],
            marker: this.readMarker(),
            pendingRun: this.pendingRun,
            bannerRunStartedAtMs: this.bannerRunStartedAtMs,
            devForcedOffer: this.devForcedOffer
        });
    }
    storeMounted() {
        return this.storeSkillsDirs[0] !== void 0;
    }
    accountState() {
        if (this.syncSetting.status === "resolved") return {
            syncEnabled: this.syncSetting.setting.enabled,
            disabledByTeamAdmin: this.syncSetting.setting.disabledByTeamAdmin
        };
    }
    async refresh() {
        const [t, e] = await Promise.all([
            this.readStoreSkillsDirs(),
            this.userAgentStoreSkillsSyncSettingsService.ensureLoaded()
        ]);
        this.storeSkillsDirs = t, this.syncSetting = e, this._onDidChange.fire();
    }
    reportBannerShown() {
        this.bannerShownReported || (this.bannerShownReported = !0, this.analyticsService.trackEvent("skill_migration.banner_shown"));
    }
    async start(t, e) {
        e === "banner" && this.analyticsService.trackEvent("skill_migration.banner_action", {
            action: "sync"
        }), await this.run.run(async ()=>{
            this.cancelRequested = !1, this.pendingRun = {
                direction: t,
                fromBanner: e === "banner"
            }, this._onDidChange.fire();
            let n;
            try {
                n = await this.awaitStoreMounted();
            } finally{
                this.pendingRun = void 0;
            }
            if (n === void 0) {
                this._onDidChange.fire(), this.cancelRequested || this.notificationService.notify({
                    severity: Yn.Info,
                    message: qye.notReady
                });
                return;
            }
            await this.migrate(t, n, "start", e);
        });
    }
    async awaitStoreMounted() {
        const t = Date.now() + this.storeMountedDeadlineMs, e = async ()=>(await this.refresh(), this.storeSkillsDirs[0]);
        let n = await e();
        for(; n === void 0;){
            if (this.cancelRequested) return;
            const i = t - Date.now();
            if (i <= 0) return;
            await this.awaitStoreChange(i), n = await e();
        }
        return n;
    }
    awaitStoreChange(t) {
        return new Promise((e)=>{
            const n = new Nt, i = ()=>{
                n.dispose(), e();
            };
            n.add(this.onDidChange(i)), n.add(Ec(i, t));
        });
    }
    async dismissBanner() {
        this.analyticsService.trackEvent("skill_migration.banner_action", {
            action: "not_now"
        }), await this.writeMarker(kHw({
            nowMs: Date.now(),
            storeSourceId: this.storeSkillsDirs[0],
            previous: this.readMarker()
        })), this._onDidChange.fire();
    }
    async enableDevForcedOffer() {
        return await this.clearMarker(), await this.writeDevOverride(!0), await this.refresh(), {
            storeMounted: this.storeMounted()
        };
    }
    async clearDevForcedOffer() {
        await this.writeDevOverride(!1);
    }
    async cancel() {
        if (this.cancelRequested = !0, this.run.isInFlight) {
            this.pendingRun !== void 0 && this._onDidChange.fire();
            return;
        }
        const t = this.readMarker();
        t === void 0 || t.status !== "MIGRATION_RUNNING" || await this.clearMarker();
    }
    async resumeFromStoredStatus() {
        await this.refresh();
        const t = this.readMarker();
        if (t?.status === "MIGRATION_DONE") {
            await this.reassertSyncAfterMigration(t.direction);
            return;
        }
        const e = this.storeSkillsDirs[0];
        if (!yHw({
            marker: t,
            storeSourceId: e
        })) {
            t?.status === "MIGRATION_RUNNING" && t.attempts >= fHl && this.logService.info(`Skills migration: not resuming, attempt cap reached (lastCode=${t.lastCode ?? "none"})`);
            return;
        }
        const n = e ?? "", i = t?.direction ?? "TO_STORE";
        await this.run.run(async ()=>{
            this.cancelRequested = !1, await this.migrate(i, n, "resume", void 0);
        });
    }
    async reassertSyncAfterMigration(t) {
        if (this.syncSetting.status !== "resolved") return;
        const e = t === "TO_STORE";
        if (this.syncSetting.setting.enabled === e || e && this.syncSetting.setting.disabledByTeamAdmin) return;
        let n;
        try {
            n = await this.userAgentStoreSkillsSyncSettingsService.setEnabled(e);
        } catch (i) {
            this.logService.warn(`Skills migration: could not restore skill sync to ${e} after a finished migration: ${BAt(i)}`);
            return;
        }
        if (n.status === "resolved" && n.setting.enabled === e) {
            await this.refreshResolvedSetting();
            return;
        }
        this.logService.warn(`Skills migration: the server declined to set skill sync to ${e}, so this machine will try again next launch`);
    }
    reportCopyProgress(t) {
        const e = this.readMarker();
        e?.status === "MIGRATION_RUNNING" && this.marker.set({
            ...e,
            copiedCount: t.done,
            totalCount: t.total
        }, void 0);
    }
    isCancelled() {
        return this.cancelRequested;
    }
    async migrate(t, e, n, i) {
        const r = this.readMarker();
        let s = SHw({
            direction: t,
            storeSourceId: e,
            nowMs: Date.now(),
            totalCount: r?.totalCount ?? 0,
            resuming: n === "resume" ? r : void 0
        });
        i === "banner" && (this.bannerRunStartedAtMs = s.startedAtMs), await this.writeMarker(s);
        const o = await this.copySkills(t);
        if (o === void 0) {
            await this.writeMarker({
                ...s,
                lastCode: "copy-unavailable"
            });
            return;
        }
        if (s = {
            ...s,
            copiedCount: o.doneCount,
            totalCount: o.total
        }, this.cancelRequested) {
            await this.clearMarker();
            return;
        }
        if (!o.complete) {
            await this.writeMarker({
                ...s,
                lastCode: o.failed[0]?.reason ?? "copy-incomplete"
            });
            return;
        }
        if (o.migratedRelativePaths.length !== o.total) {
            this.logService.warn(`Skills migration: the copy loop reported complete with ${o.migratedRelativePaths.length} of ${o.total} skills; leaving every source copy in place`), await this.writeMarker({
                ...s,
                lastCode: "copy-count-mismatch"
            });
            return;
        }
        await this.writeMarker(s), await this.cutover(s, o.migratedRelativePaths, n);
    }
    async cutover(t, e, n) {
        const i = t.direction === "TO_STORE";
        if (this.cancelRequested) {
            await this.clearMarker();
            return;
        }
        if (i) {
            const s = await this.confirmStoreSkillsSynced();
            if (!s.confirmed) {
                await this.writeMarker({
                    ...t,
                    lastCode: s.reason ?? "not-synced"
                });
                return;
            }
        }
        if (!await this.writeSkillSyncFlag(i)) {
            await this.writeMarker({
                ...t,
                lastCode: "flag-write-failed"
            });
            return;
        }
        await this.refreshResolvedSetting();
        const r = await this.awaitDestinationServingMigratedSkills(t.direction, e);
        if (!r.ok) {
            this.logService.warn(`Skills migration: the destination is not serving the migrated skills yet (direction=${t.direction} reason=${r.reason} count=${r.count}); leaving every source copy in place`), await this.writeMarker({
                ...t,
                lastCode: r.reason
            });
            return;
        }
        if (this.cancelRequested) {
            await this.clearMarker();
            return;
        }
        await this.trashMigratedSourceSkills(t.direction, e), await this.writeMarker({
            ...t,
            status: "MIGRATION_DONE"
        }), await this.writeDevOverride(!1), i && n === "start" && this.notificationService.notify({
            severity: Yn.Success,
            message: qye.syncedToastMessage,
            toastDurationMs: 8e3,
            closeNotificationOnToastDismiss: !0
        });
    }
    async awaitDestinationServingMigratedSkills(t, e) {
        const n = [
            await this.homeSkillsRoot()
        ], i = t === "TO_STORE", r = i ? this.storeSkillsDirs : n, s = i ? n : this.storeSkillsDirs, o = Date.now() + this.storeServingDeadlineMs, a = async ()=>THw({
                migratedRelativePaths: e,
                servedSkills: await this.primitiveSourceService.getSkillDescriptors(),
                destinationRoots: r,
                sourceRoots: s
            });
        let l = await a();
        for(; !l.ok;){
            const c = o - Date.now();
            if (c <= 0) return l;
            await this.awaitSkillDescriptorChange(c), l = await a();
        }
        return l;
    }
    awaitSkillDescriptorChange(t) {
        return new Promise((e)=>{
            const n = new Nt, i = ()=>{
                n.dispose(), e();
            };
            n.add(this.primitiveSourceService.onDidChangeSkillDescriptors(i)), n.add(Ec(i, t));
        });
    }
    readMarker() {
        return MJf(this.marker.get());
    }
    async writeMarker(t) {
        this.marker.set(t, void 0), await this.storageService.flushStorage(-1);
    }
    async writeDevOverride(t) {
        this.devOverride.set(t, void 0), t || (this.devForcedOffer = !1), await this.storageService.flushStorage(-1), this._onDidChange.fire();
    }
    async clearMarker() {
        await this.writeMarker(null);
    }
    async readStoreSkillsDirs() {
        try {
            return await this.commandService.executeCommand(lIo) ?? WTs;
        } catch (t) {
            return this.logService.trace(`Skills migration: could not read the store skills dir: ${BAt(t)}`), WTs;
        }
    }
    async writeSkillSyncFlag(t) {
        try {
            const e = await this.userAgentStoreSkillsSyncSettingsService.setEnabled(t);
            return e.status === "resolved" && e.setting.enabled === t;
        } catch (e) {
            return this.logService.warn(`Skills migration: could not set skill sync to ${t}: ${BAt(e)}`), !1;
        }
    }
    async copySkills(t) {
        const e = t === "TO_STORE" ? OJf : FJf;
        try {
            return await this.commandService.executeCommand(e);
        } catch (n) {
            this.logService.warn(`Skills migration: the copy loop did not run (direction=${t}): ${BAt(n)}`);
            return;
        }
    }
    async confirmStoreSkillsSynced() {
        try {
            return await this.commandService.executeCommand(BJf) ?? {
                confirmed: !1,
                reason: "unavailable"
            };
        } catch (t) {
            return this.logService.trace(`Skills migration: the confirming round did not run: ${BAt(t)}`), {
                confirmed: !1,
                reason: "unavailable"
            };
        }
    }
    async refreshResolvedSetting() {
        try {
            await this.commandService.executeCommand(dtd);
        } catch (t) {
            this.logService.trace(`Skills migration: could not refresh the resolved setting: ${BAt(t)}`);
        }
    }
    async trashMigratedSourceSkills(t, e) {
        if (e.length === 0) return;
        const n = t === "TO_STORE" ? UJf : jJf;
        let i;
        try {
            i = await this.commandService.executeCommand(n, {
                relativePaths: e
            });
        } catch (r) {
            this.logService.warn(`Skills migration: the source copies were not trashed (direction=${t}): ${BAt(r)}`);
            return;
        }
        if (i !== void 0) {
            i.failedCount > 0 && this.logService.info(`Skills migration: ${i.failedCount} source skill folders were left in place (direction=${t}); they duplicate skills the destination is serving`);
            for (const r of i.moves)try {
                await XXf({
                    commandService: this.commandService,
                    editorService: this.editorService,
                    isGlass: this.workbenchEnvironmentService.isGlass === !0,
                    pathService: this.pathService,
                    workbenchEnvironmentService: this.workbenchEnvironmentService
                }, r);
            } catch (s) {
                this.logService.warn(`Skills migration: could not move an open skill editor to its new path: ${BAt(s)}`);
            }
        }
    }
    async homeSkillsRoot() {
        const t = await this.pathService.userHome();
        return `${bce(t.fsPath)}/.cursor/skills`;
    }
}, GTs = Re([
    F(0, jl),
    F(1, Qr),
    F(2, nr),
    F(3, ss),
    F(4, gr),
    F(5, Li),
    F(6, Wr),
    F(7, Rd),
    F(8, AKe),
    F(9, dOi),
    F(10, ki),
    F(11, ps)
], GTs), hs.registerCommand($Jf, (t, e)=>{
    t.get(IDe).reportCopyProgress(e);
}), hs.registerCommand(HJf, (t)=>t.get(IDe).isCancelled()), hs.registerCommand(htd, async (t)=>{
    await t.get(IDe).refresh();
}), bn(IDe, GTs, 1, 1);

}
