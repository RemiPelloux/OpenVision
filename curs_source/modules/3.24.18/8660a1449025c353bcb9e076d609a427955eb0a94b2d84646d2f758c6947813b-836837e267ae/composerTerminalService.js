import { Ec, Gt, Nt, Qe, da, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { qn } from "./async.js";
import { iI, w1 } from "./composerLogService.js";
import { jls, uRn } from "./evictingLRUCache.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Fp, zp } from "./lifecycle_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var nVe, n1g, $ls;
export { $ls, n1g, nVe };
var __wakaru_zat_initialized = false;
export function zat() {
if (__wakaru_zat_initialized) return;
__wakaru_zat_initialized = true;
"use strict";
E(), qn(), Gt(), jls(), Qe(), Rn(), It(), zp(), iI(), nVe = jn("composerTerminalService"), n1g = 5, $ls = class extends st {
    constructor(t, e){
        super(), this._lifecycleService = t, this._composerLogService = e, this._backgroundAITerminals = new Map, this._terminalDisposeListeners = this._register(new da), this._commandDetectionDisposables = new Map, this._aiCommandRunning = new Map, this._activeToolExecutions = new Map, this._onDidChangeTerminals = new tt, this.onDidChangeTerminals = this._onDidChangeTerminals.event, this._onHumanTerminalCommand = new tt, this.onHumanTerminalCommand = this._onHumanTerminalCommand.event, this._persistentAITerminals = new uRn(n1g, (n, i)=>{
            this._composerLogService.info("[ComposerTerminalService] Auto-evicting persistent terminal for composer:", n, i.instanceId), i.isDisposed || i.dispose(), this._releaseTerminalDisposeListeners(i);
        }), this._register(this._lifecycleService.onWillShutdown((n)=>{
            this._composerLogService.info("[ComposerTerminalService] App shutting down, cleaning up all AI terminals");
            for (const i of this._trackedComposerIds())this.cleanupComposerTerminals(i);
        }));
    }
    dispose() {
        for (const t of this._trackedComposerIds())this.cleanupComposerTerminals(t);
        for (const t of this._commandDetectionDisposables.values())t.dispose();
        this._commandDetectionDisposables.clear(), this._onDidChangeTerminals.dispose(), this._onHumanTerminalCommand.dispose(), super.dispose();
    }
    getPersistentAITerminal(t) {
        const e = this._persistentAITerminals.get(t);
        if (e && !e.isDisposed) return e;
        e && this._persistentAITerminals.delete(t);
    }
    registerPersistentAITerminal(t, e) {
        this._composerLogService.info("[ComposerTerminalService] Registering persistent AI terminal for composer:", t, e.instanceId), this._persistentAITerminals.set(t, e), this._onDidChangeTerminals.fire(), this._addTerminalDisposeListener(e, ()=>{
            if (this._composerLogService.info("[ComposerTerminalService] Persistent AI terminal disposed for composer:", t, e.instanceId), this._persistentAITerminals.get(t) === e) {
                const n = this._commandDetectionDisposables.get(t);
                n && (n.dispose(), this._commandDetectionDisposables.delete(t)), this._persistentAITerminals.delete(t), this._aiCommandRunning.delete(t), this._onDidChangeTerminals.fire(), this._composerLogService.info("[ComposerTerminalService] Cleaned up state for manually disposed persistent terminal");
            }
        }), this._setupCommandDetectionMonitoring(t, e);
    }
    registerBackgroundAITerminal(t, e) {
        this._composerLogService.info("[ComposerTerminalService] Registering background AI terminal for composer:", t, e.instanceId);
        const n = this._backgroundAITerminals.get(t) || [];
        if (n.push(e), this._backgroundAITerminals.set(t, n), this._onDidChangeTerminals.fire(), this._addTerminalDisposeListener(e, ()=>{
            this._composerLogService.info("[ComposerTerminalService] Background AI terminal disposed for composer:", t, e.instanceId);
            const i = this._backgroundAITerminals.get(t);
            if (i) {
                const r = i.indexOf(e);
                r !== -1 && (i.splice(r, 1), this._composerLogService.info("[ComposerTerminalService] Removed disposed background terminal from tracking"), i.length === 0 && this._backgroundAITerminals.delete(t), this._onDidChangeTerminals.fire());
            }
        }), n.length > 10) {
            const i = n.shift();
            i && (i.isDisposed || (this._composerLogService.info("[ComposerTerminalService] Evicting oldest background terminal:", i.instanceId), i.dispose()), this._releaseTerminalDisposeListeners(i));
        }
    }
    isAITerminal(t) {
        for (const [e, n] of this._persistentAITerminals)if (n === t) return !0;
        for (const [e, n] of this._backgroundAITerminals)for (const i of n)if (i === t) return !0;
        return !1;
    }
    getComposerIdForTerminal(t) {
        for (const [e, n] of this._persistentAITerminals)if (n === t) return e;
        for (const [e, n] of this._backgroundAITerminals)for (const i of n)if (i === t) return e;
    }
    getAITerminalsForComposer(t) {
        const e = [], n = this.getPersistentAITerminal(t);
        n && e.push(n);
        for (const i of this._backgroundAITerminals.get(t) ?? [])i.isDisposed || e.push(i);
        return e;
    }
    setAICommandRunning(t, e) {
        this._aiCommandRunning.set(t, e), this._composerLogService.info(`[ComposerTerminalService] AI command running for composer ${t}: ${e}`);
    }
    registerToolExecution(t, e, n) {
        this._composerLogService.info(`[ComposerTerminalService] Registering tool execution for composer ${t}, tool ${e}`), this._activeToolExecutions.has(t) || this._activeToolExecutions.set(t, new Map), this._activeToolExecutions.get(t).set(e, n);
    }
    unregisterToolExecution(t, e) {
        this._composerLogService.info(`[ComposerTerminalService] Unregistering tool execution for composer ${t}, tool ${e}`);
        const n = this._activeToolExecutions.get(t);
        n && (n.delete(e), n.size === 0 && this._activeToolExecutions.delete(t));
    }
    _trackedComposerIds() {
        const t = new Set;
        for (const e of this._persistentAITerminals.keys())t.add(e);
        for (const e of this._backgroundAITerminals.keys())t.add(e);
        for (const e of this._commandDetectionDisposables.keys())t.add(e);
        for (const e of this._aiCommandRunning.keys())t.add(e);
        for (const e of this._activeToolExecutions.keys())t.add(e);
        return Array.from(t);
    }
    cleanupComposerTerminals(t) {
        this._composerLogService.info("[ComposerTerminalService] Cleaning up terminals for composer:", t);
        const e = this._commandDetectionDisposables.get(t);
        e && (e.dispose(), this._commandDetectionDisposables.delete(t)), this._aiCommandRunning.delete(t);
        const n = this._activeToolExecutions.get(t);
        if (n) {
            for (const [s, o] of n)this._composerLogService.info(`[ComposerTerminalService] Aborting remaining tool execution: ${s}`), o.abort();
            this._activeToolExecutions.delete(t);
        }
        const i = this._persistentAITerminals.get(t);
        i && (i.isDisposed || (this._composerLogService.info("[ComposerTerminalService] Disposing shared terminal:", i.instanceId), i.dispose()), this._releaseTerminalDisposeListeners(i)), this._persistentAITerminals.delete(t);
        const r = this._backgroundAITerminals.get(t);
        if (r) for (const s of Array.from(r))s.isDisposed || (this._composerLogService.info("[ComposerTerminalService] Disposing background terminal:", s.instanceId), s.dispose()), this._releaseTerminalDisposeListeners(s);
        this._backgroundAITerminals.delete(t), this._onDidChangeTerminals.fire();
    }
    _addTerminalDisposeListener(t, e) {
        let n = this._terminalDisposeListeners.get(t);
        (!n || n.isDisposed) && (n = new Nt, this._terminalDisposeListeners.set(t, n));
        const i = n, r = t.onDisposed(()=>{
            try {
                e();
            } finally{
                i.has(r) && i.delete(r), i.size === 0 && this._terminalDisposeListeners.get(t) === i && this._terminalDisposeListeners.deleteAndDispose(t);
            }
        });
        i.add(r);
    }
    _releaseTerminalDisposeListeners(t) {
        this._terminalDisposeListeners.deleteAndDispose(t);
    }
    _setupCommandDetectionMonitoring(t, e) {
        const n = this._commandDetectionDisposables.get(t);
        n && n.dispose();
        const i = new Nt;
        this._commandDetectionDisposables.set(t, i);
        const r = ()=>{
            if (i.isDisposed) return;
            const s = e.capabilities.get(2);
            if (s) {
                this._composerLogService.info("[ComposerTerminalService] Setting up command detection monitoring for composer:", t);
                const o = s.onCommandFinished((a)=>{
                    const l = (this._activeToolExecutions.get(t)?.size ?? 0) > 0;
                    !((this._aiCommandRunning.get(t) ?? !1) || l) && a.command && (this._composerLogService.info("[ComposerTerminalService] Detected human-run command:", a.command), this._onHumanTerminalCommand.fire({
                        composerId: t,
                        command: a.command,
                        terminalResource: e.resource
                    }));
                });
                i.add(o);
            } else Ec(r, 500, i);
        };
        r();
    }
}, $ls = Re([
    F(0, Fp),
    F(1, w1)
], $ls), bn(nVe, $ls, 2);

}
