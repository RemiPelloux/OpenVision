import { Cl, He, Se, bt, po, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn } from "./async.js";
import { lb, n0 } from "./composerLogService.js";
import { DBn, lIo } from "./evictingLRUCache.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var MBn, vLh, otr;
export { MBn, otr, vLh };
var __wakaru_atr_initialized = false;
export function atr() {
if (__wakaru_atr_initialized) return;
__wakaru_atr_initialized = true;
"use strict";
x(), bn(), bt(), lIo(), Se(), Pn(), Ze(), $d(), n0(), MBn = vn("composerTerminalService"), vLh = 5, otr = class extends we {
    constructor(e, t){
        super(), this._lifecycleService = e, this._composerLogService = t, this._backgroundAITerminals = new Map, this._terminalDisposeListeners = this._register(new po), this._commandDetectionDisposables = new Map, this._aiCommandRunning = new Map, this._activeToolExecutions = new Map, this._onDidChangeTerminals = new ve, this.onDidChangeTerminals = this._onDidChangeTerminals.event, this._onHumanTerminalCommand = new ve, this.onHumanTerminalCommand = this._onHumanTerminalCommand.event, this._persistentAITerminals = new DBn(vLh, (n, i)=>{
            this._composerLogService.info("[ComposerTerminalService] Auto-evicting persistent terminal for composer:", n, i.instanceId), i.isDisposed || i.dispose(), this._releaseTerminalDisposeListeners(i);
        }), this._register(this._lifecycleService.onWillShutdown((n)=>{
            this._composerLogService.info("[ComposerTerminalService] App shutting down, cleaning up all AI terminals");
            for (const i of this._trackedComposerIds())this.cleanupComposerTerminals(i);
        }));
    }
    dispose() {
        for (const e of this._trackedComposerIds())this.cleanupComposerTerminals(e);
        for (const e of this._commandDetectionDisposables.values())e.dispose();
        this._commandDetectionDisposables.clear(), this._onDidChangeTerminals.dispose(), this._onHumanTerminalCommand.dispose(), super.dispose();
    }
    getPersistentAITerminal(e) {
        const t = this._persistentAITerminals.get(e);
        if (t && !t.isDisposed) return t;
        t && this._persistentAITerminals.delete(e);
    }
    registerPersistentAITerminal(e, t) {
        this._composerLogService.info("[ComposerTerminalService] Registering persistent AI terminal for composer:", e, t.instanceId), this._persistentAITerminals.set(e, t), this._onDidChangeTerminals.fire(), this._addTerminalDisposeListener(t, ()=>{
            if (this._composerLogService.info("[ComposerTerminalService] Persistent AI terminal disposed for composer:", e, t.instanceId), this._persistentAITerminals.get(e) === t) {
                const n = this._commandDetectionDisposables.get(e);
                n && (n.dispose(), this._commandDetectionDisposables.delete(e)), this._persistentAITerminals.delete(e), this._aiCommandRunning.delete(e), this._onDidChangeTerminals.fire(), this._composerLogService.info("[ComposerTerminalService] Cleaned up state for manually disposed persistent terminal");
            }
        }), this._setupCommandDetectionMonitoring(e, t);
    }
    registerBackgroundAITerminal(e, t) {
        this._composerLogService.info("[ComposerTerminalService] Registering background AI terminal for composer:", e, t.instanceId);
        const n = this._backgroundAITerminals.get(e) || [];
        if (n.push(t), this._backgroundAITerminals.set(e, n), this._onDidChangeTerminals.fire(), this._addTerminalDisposeListener(t, ()=>{
            this._composerLogService.info("[ComposerTerminalService] Background AI terminal disposed for composer:", e, t.instanceId);
            const i = this._backgroundAITerminals.get(e);
            if (i) {
                const r = i.indexOf(t);
                r !== -1 && (i.splice(r, 1), this._composerLogService.info("[ComposerTerminalService] Removed disposed background terminal from tracking"), i.length === 0 && this._backgroundAITerminals.delete(e), this._onDidChangeTerminals.fire());
            }
        }), n.length > 10) {
            const i = n.shift();
            i && (i.isDisposed || (this._composerLogService.info("[ComposerTerminalService] Evicting oldest background terminal:", i.instanceId), i.dispose()), this._releaseTerminalDisposeListeners(i));
        }
    }
    isAITerminal(e) {
        for (const [t, n] of this._persistentAITerminals)if (n === e) return !0;
        for (const [t, n] of this._backgroundAITerminals)for (const i of n)if (i === e) return !0;
        return !1;
    }
    getComposerIdForTerminal(e) {
        for (const [t, n] of this._persistentAITerminals)if (n === e) return t;
        for (const [t, n] of this._backgroundAITerminals)for (const i of n)if (i === e) return t;
    }
    getAITerminalsForComposer(e) {
        const t = [], n = this.getPersistentAITerminal(e);
        n && t.push(n);
        for (const i of this._backgroundAITerminals.get(e) ?? [])i.isDisposed || t.push(i);
        return t;
    }
    setAICommandRunning(e, t) {
        this._aiCommandRunning.set(e, t), this._composerLogService.info(`[ComposerTerminalService] AI command running for composer ${e}: ${t}`);
    }
    registerToolExecution(e, t, n) {
        this._composerLogService.info(`[ComposerTerminalService] Registering tool execution for composer ${e}, tool ${t}`), this._activeToolExecutions.has(e) || this._activeToolExecutions.set(e, new Map), this._activeToolExecutions.get(e).set(t, n);
    }
    unregisterToolExecution(e, t) {
        this._composerLogService.info(`[ComposerTerminalService] Unregistering tool execution for composer ${e}, tool ${t}`);
        const n = this._activeToolExecutions.get(e);
        n && (n.delete(t), n.size === 0 && this._activeToolExecutions.delete(e));
    }
    _trackedComposerIds() {
        const e = new Set;
        for (const t of this._persistentAITerminals.keys())e.add(t);
        for (const t of this._backgroundAITerminals.keys())e.add(t);
        for (const t of this._commandDetectionDisposables.keys())e.add(t);
        for (const t of this._aiCommandRunning.keys())e.add(t);
        for (const t of this._activeToolExecutions.keys())e.add(t);
        return Array.from(e);
    }
    cleanupComposerTerminals(e) {
        this._composerLogService.info("[ComposerTerminalService] Cleaning up terminals for composer:", e);
        const t = this._commandDetectionDisposables.get(e);
        t && (t.dispose(), this._commandDetectionDisposables.delete(e)), this._aiCommandRunning.delete(e);
        const n = this._activeToolExecutions.get(e);
        if (n) {
            for (const [s, o] of n)this._composerLogService.info(`[ComposerTerminalService] Aborting remaining tool execution: ${s}`), o.abort();
            this._activeToolExecutions.delete(e);
        }
        const i = this._persistentAITerminals.get(e);
        i && (i.isDisposed || (this._composerLogService.info("[ComposerTerminalService] Disposing shared terminal:", i.instanceId), i.dispose()), this._releaseTerminalDisposeListeners(i)), this._persistentAITerminals.delete(e);
        const r = this._backgroundAITerminals.get(e);
        if (r) for (const s of Array.from(r))s.isDisposed || (this._composerLogService.info("[ComposerTerminalService] Disposing background terminal:", s.instanceId), s.dispose()), this._releaseTerminalDisposeListeners(s);
        this._backgroundAITerminals.delete(e), this._onDidChangeTerminals.fire();
    }
    _addTerminalDisposeListener(e, t) {
        let n = this._terminalDisposeListeners.get(e);
        (!n || n.isDisposed) && (n = new He, this._terminalDisposeListeners.set(e, n));
        const i = n, r = e.onDisposed(()=>{
            try {
                t();
            } finally{
                i.has(r) && i.delete(r), i.size === 0 && this._terminalDisposeListeners.get(e) === i && this._terminalDisposeListeners.deleteAndDispose(e);
            }
        });
        i.add(r);
    }
    _releaseTerminalDisposeListeners(e) {
        this._terminalDisposeListeners.deleteAndDispose(e);
    }
    _setupCommandDetectionMonitoring(e, t) {
        const n = this._commandDetectionDisposables.get(e);
        n && n.dispose();
        const i = new He;
        this._commandDetectionDisposables.set(e, i);
        const r = ()=>{
            if (i.isDisposed) return;
            const s = t.capabilities.get(2);
            if (s) {
                this._composerLogService.info("[ComposerTerminalService] Setting up command detection monitoring for composer:", e);
                const o = s.onCommandFinished((a)=>{
                    const c = (this._activeToolExecutions.get(e)?.size ?? 0) > 0;
                    !((this._aiCommandRunning.get(e) ?? !1) || c) && a.command && (this._composerLogService.info("[ComposerTerminalService] Detected human-run command:", a.command), this._onHumanTerminalCommand.fire({
                        composerId: e,
                        command: a.command,
                        terminalResource: t.resource
                    }));
                });
                i.add(o);
            } else Cl(r, 500, i);
        };
        r();
    }
}, otr = ie([
    C(0, Id),
    C(1, lb)
], otr), mn(MBn, otr, 2);

}
