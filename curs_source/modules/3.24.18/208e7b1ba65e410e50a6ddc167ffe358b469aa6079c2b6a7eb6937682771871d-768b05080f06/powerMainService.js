import { N, O, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
import { powerSaveBlocker as Aw } from "electron";
import { powerMonitor as zg } from "electron";
var Mw;
export { Mw };
var __wakaru_oze_initialized = false;
export function oze() {
if (__wakaru_oze_initialized) return;
__wakaru_oze_initialized = true;
"use strict";
h(), se(), j(), te(), pt(), Mw = class extends J {
    constructor(e, t){
        super(), this.windowsMainService = e, this.logService = t, this.activeWakelocks = new Map, this.wakelocksByOwner = new Map, this.activeBackgroundThrottlingDisables = new Map, this.backgroundThrottlingDisablesByOwner = new Map, this.nextBackgroundThrottlingDisableId = 1, this._onDidChangeOnBatteryPower = this._register(new N), this.onDidChangeOnBatteryPower = this._onDidChangeOnBatteryPower.event, this._onDidSuspend = this._register(new N), this.onDidSuspend = this._onDidSuspend.event, this._onDidResume = this._register(new N), this.onDidResume = this._onDidResume.event, this._lastSuspendAtMs = 0, this._register(O.fromNodeEventEmitter(zg, "on-ac")(()=>this._onDidChangeOnBatteryPower.fire(!1))), this._register(O.fromNodeEventEmitter(zg, "on-battery")(()=>this._onDidChangeOnBatteryPower.fire(!0))), this._register(O.fromNodeEventEmitter(zg, "suspend")(()=>{
            this._lastSuspendAtMs = Date.now(), this._onDidSuspend.fire();
        })), this._register(O.fromNodeEventEmitter(zg, "resume")(()=>this._onDidResume.fire()));
    }
    async getLastSuspendAtMs() {
        return this._lastSuspendAtMs;
    }
    async isOnBatteryPower() {
        try {
            return zg.isOnBatteryPower();
        } catch (e) {
            return this.logService.warn(`[PowerMainService] isOnBatteryPower failed: ${e}`), !1;
        }
    }
    async startWakelock(e) {
        throw new Error(`PowerMainService.startWakelock(reason=${JSON.stringify(e)}) must be called through the power IPC channel so owner context is available`);
    }
    async startWakelockForOwner(e, t) {
        const n = Aw.start("prevent-app-suspension");
        this.activeWakelocks.set(n, {
            owner: e,
            reason: t,
            startTime: Date.now()
        });
        let r = this.wakelocksByOwner.get(e);
        return r || (r = new Set, this.wakelocksByOwner.set(e, r)), r.add(n), this.logService.info(`[PowerMainService] Started wakelock id=${n} owner=${e} reason="${t}" activeCount=${this.activeWakelocks.size}`), n;
    }
    async stopWakelock(e) {
        const t = this.activeWakelocks.get(e);
        if (t) {
            const n = Date.now() - t.startTime;
            this.logService.info(`[PowerMainService] Stopping wakelock id=${e} owner=${t.owner} reason="${t.reason}" heldForMs=${n}`), this.unregisterWakelock(e, t.owner);
        } else this.logService.warn(`[PowerMainService] Attempted to stop unknown wakelock id=${e}`);
        Aw.isStarted(e) && Aw.stop(e);
    }
    async isWakelockActive(e) {
        return Aw.isStarted(e);
    }
    async startBackgroundThrottlingDisable(e) {
        throw new Error(`PowerMainService.startBackgroundThrottlingDisable(reason=${JSON.stringify(e)}) must be called through the power IPC channel so owner context is available`);
    }
    async startBackgroundThrottlingDisableForOwner(e, t) {
        const n = this.nextBackgroundThrottlingDisableId++;
        this.activeBackgroundThrottlingDisables.set(n, {
            owner: e,
            reason: t,
            startTime: Date.now()
        });
        let r = this.backgroundThrottlingDisablesByOwner.get(e);
        return r || (r = new Set, this.backgroundThrottlingDisablesByOwner.set(e, r)), r.add(n), this.setBackgroundThrottlingForOwner(e, !1, t), this.logService.info(`[PowerMainService] Disabled background throttling id=${n} owner=${e} reason="${t}" activeCount=${this.activeBackgroundThrottlingDisables.size}`), n;
    }
    async stopBackgroundThrottlingDisable(e) {
        const t = this.activeBackgroundThrottlingDisables.get(e);
        if (!t) {
            this.logService.warn(`[PowerMainService] Attempted to stop unknown background throttling disable id=${e}`);
            return;
        }
        const n = Date.now() - t.startTime;
        this.unregisterBackgroundThrottlingDisable(e, t.owner), this.hasBackgroundThrottlingDisableForOwner(t.owner) || this.setBackgroundThrottlingForOwner(t.owner, !0, t.reason), this.logService.info(`[PowerMainService] Stopped background throttling disable id=${e} owner=${t.owner} reason="${t.reason}" heldForMs=${n}`);
    }
    async releaseBackgroundThrottlingDisablesForOwner(e, t) {
        const n = this.backgroundThrottlingDisablesByOwner.get(e);
        if (!n || n.size === 0) return;
        const r = [
            ...n
        ];
        this.logService.info(`[PowerMainService] Releasing ${r.length} background throttling disable(s) for owner=${e} releaseReason=${t}`);
        for (const s of r)await this.stopBackgroundThrottlingDisable(s);
    }
    async releaseWakelocksForOwner(e, t) {
        const n = this.wakelocksByOwner.get(e);
        if (!n || n.size === 0) return;
        const r = [
            ...n
        ];
        this.logService.info(`[PowerMainService] Releasing ${r.length} orphaned wakelock(s) for owner=${e} releaseReason=${t}`);
        for (const s of r)await this.stopWakelock(s);
    }
    unregisterWakelock(e, t) {
        this.activeWakelocks.delete(e);
        const n = this.wakelocksByOwner.get(t);
        n && (n.delete(e), n.size === 0 && this.wakelocksByOwner.delete(t));
    }
    hasBackgroundThrottlingDisableForOwner(e) {
        return (this.backgroundThrottlingDisablesByOwner.get(e)?.size ?? 0) > 0;
    }
    unregisterBackgroundThrottlingDisable(e, t) {
        this.activeBackgroundThrottlingDisables.delete(e);
        const n = this.backgroundThrottlingDisablesByOwner.get(t);
        n && (n.delete(e), n.size === 0 && this.backgroundThrottlingDisablesByOwner.delete(t));
    }
    setBackgroundThrottlingForOwner(e, t, n) {
        const r = /^window:(\d+)$/.exec(e);
        if (!r) {
            this.logService.warn(`[PowerMainService] Cannot set background throttling for non-window owner=${e} reason="${n}"`);
            return;
        }
        const s = Number(r[1]), i = this.windowsMainService.getWindowById(s);
        if (!i?.allowsBackgroundThrottlingControl) {
            this.logService.info(`[PowerMainService] Ignoring background throttling request for ineligible window owner=${e} reason="${n}"`);
            return;
        }
        const a = i.win;
        if (!a || a.isDestroyed()) return;
        const o = a.webContents;
        if (!(o.isDestroyed() || o.isOffscreen())) {
            if (typeof o.setBackgroundThrottling != "function") {
                this.logService.warn(`[PowerMainService] webContents.setBackgroundThrottling is unavailable owner=${e} reason="${n}"`);
                return;
            }
            o.setBackgroundThrottling(t);
        }
    }
}, Mw = B([
    w(0, ct),
    w(1, Z)
], Mw);

}
