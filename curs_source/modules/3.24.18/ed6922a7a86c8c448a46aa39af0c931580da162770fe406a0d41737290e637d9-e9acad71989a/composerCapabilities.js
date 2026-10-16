import { BMn, CFu, EFu, Rvv, TFu, xvv, z8i } from "./De_3.js";
import { Se, Tl, ns, si, we } from "./HVr.js";
import { FMn, LYs } from "./composerCapabilityMappings.js";
import { C8i, Wf } from "./composerData.js";
import { lb, n0 } from "./composerLogService.js";
import { Jm, ps } from "./composer_pb.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Ut, mn, qn, vn } from "./qIc.js";
import { jS } from "./store.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var K8i, NYs, UMn, jj, OYs, xFu, Y8i, FYs;
export { FYs, K8i, NYs, OYs, UMn, Y8i, jj, xFu };
var __wakaru_T2_initialized = false;
export function T2() {
if (__wakaru_T2_initialized) return;
__wakaru_T2_initialized = true;
"use strict";
x(), Ze(), Pn(), si(), Vr(), qn(), jS(), Jm(), Se(), gr(), FMn(), Wf(), n0(), K8i = Symbol("disposeCapabilityBase"), NYs = new WeakMap, UMn = Object.fromEntries(Object.entries(LYs).map(([e, t])=>[
        e,
        xvv(t)
    ])), jj = class extends we {
    constructor(e, t, n){
        super(), this.composerDataService = n, this.abortController = null, this.composerId = e, this.data = {
            ...t
        }, [this.isEnabled, this.setIsEnabled] = Ut(!0), [this.isEnabledForRequest, this.setIsEnabledForRequest] = Ut(!0);
    }
    setProvidedHandle(e) {
        this._providedHandleRef = new WeakRef(e);
    }
    getComposerHandle() {
        const e = this._providedHandleRef?.deref();
        if (e) return e;
        const t = this.composerDataService.getHandleIfLoaded(this.composerId);
        if (!t) throw new Error(`[ComposerCapability] Composer ${this.composerId} is not loaded. Are you obtaining a handle to the composer during its disposal?`);
        return t;
    }
    getComposerHandleIfLoaded() {
        const e = this._providedHandleRef?.deref();
        return e || this.composerDataService.getHandleIfLoaded(this.composerId);
    }
    requestComposerUnload() {
        return this.composerDataService.unloadComposer(this.composerId);
    }
    providedContextInformation(e) {}
    isBackgroundOnly() {
        return !1;
    }
    shouldRunOnStartSubmitChat() {
        return !!this.onStartSubmitChatReturnShouldStop;
    }
    shouldRunOnBeforeSubmitChat() {
        return !!this.onBeforeSubmitChat;
    }
    shouldRunOnChatStreamFinished() {
        return !!this.onChatStreamFinished;
    }
    shouldRunOnComposerDone() {
        return !!this.onComposerDone;
    }
    shouldRunOnAddPendingAction() {
        return !!this.onAddPendingAction;
    }
    shouldRunOnAcceptAllEdits() {
        return !!this.onAcceptAllEdits;
    }
    shouldRunOnBeforeApply() {
        return !!this.onBeforeApply;
    }
    toString() {
        return this.serialize();
    }
    serialize() {
        return JSON.stringify(this.toJSON());
    }
    deserialize(e) {
        const t = JSON.parse(e), n = this.constructor;
        return EFu(()=>new n(this.composerId, t, this.composerDataService));
    }
    toJSON() {
        return this.onWillSaveState(), {
            type: this.type,
            data: this.data
        };
    }
    cancel() {
        this.abortController && (this.abortController.abort(), this.abortController = null);
    }
    onWillSaveState() {}
    onAborted() {}
    isAborted() {
        return this.abortController ? this.abortController.signal.aborted : !0;
    }
    isRunning() {
        return this.abortController !== null && !this.isAborted();
    }
    getAbortSignal() {
        return this.abortController || (this.abortController = new AbortController), this.abortController.signal;
    }
    [K8i](e = ()=>we.prototype.dispose.call(this)) {
        const t = BMn(this);
        if (t.baseDisposeAttempted) return;
        t.baseDisposeAttempted = !0;
        const n = t.ownerDetach;
        t.ownerDetach = void 0, n?.();
        const i = [];
        try {
            this.cancel();
        } catch (r) {
            i.push(r);
        }
        this.data = UMn[this.type];
        try {
            e();
        } catch (r) {
            i.push(r);
        }
        if (i.length === 1) throw i[0];
        if (i.length > 1) throw new AggregateError(i, "Composer capability base cleanup failed");
    }
    dispose() {
        try {
            this[K8i](()=>super.dispose());
        } finally{
            CFu(this);
        }
    }
}, OYs = vn("composerCapabilityLifecycleService"), xFu = class extends we {
    constructor(){
        super(...arguments), this._liveCapabilities = new Set;
    }
    trackCapability(e) {
        if (this._store.isDisposed) {
            this._disposeAndReport([
                e
            ]);
            return;
        }
        this._liveCapabilities.add(e), BMn(e).ownerDetach = ()=>this._liveCapabilities.delete(e);
    }
    dispose() {
        const e = [
            ...this._liveCapabilities
        ];
        this._liveCapabilities.clear(), this._disposeAndReport(e);
        const t = new Set;
        for (const n of e)t.has(n.composerId) || (t.add(n.composerId), n.requestComposerUnload().catch(ns));
        super.dispose();
    }
    _disposeAndReport(e) {
        for (const t of z8i(e))ns(t);
    }
}, mn(OYs, xFu, 1), Y8i = class {
    constructor(){
        this.capabilitiesMap = {};
    }
    static registerCapability(t, n) {
        this.INSTANCE.capabilitiesMap[t] = n;
    }
    static getCapabilities(t, n, i) {
        let r = [];
        if (i?.forceCapabilities !== void 0) r = i.forceCapabilities.map((a)=>({
                type: a,
                data: UMn[a]
            }));
        else {
            const a = (i?.savedCapabilityData || []).filter((l)=>C8i.some((u)=>u === l.type)), c = C8i.filter((l)=>!a.some((u)=>u.type === l)).map((l)=>({
                    type: l,
                    data: UMn[l]
                }));
            r = [
                ...a,
                ...c
            ];
        }
        t.invokeFunction((a)=>a.get(Yi).isGlass) && (r = r.filter((a)=>a.type !== ps.BACKGROUND_COMPOSER));
        const o = r.map((a)=>{
            try {
                const c = this.INSTANCE.capabilitiesMap[a.type];
                if (!c || !this.getSchema(a.type)) return;
                const h = {
                    ...this.INSTANCE.getDefaultDataForCapability(a.type),
                    ...a.data || {}
                }, p = TFu(t, c, n, h);
                return i?.providedHandle && p.setProvidedHandle(i.providedHandle), p;
            } catch (c) {
                t.invokeFunction((l)=>l.get(lb)).error(`[compsoerCapabilities] Error creating capability ${a.type}`, c);
                return;
            }
        }).filter(Tl);
        return Rvv(o);
    }
    static getSchema(t) {
        return LYs[t];
    }
    static createInstance(t, n, i, r) {
        const s = this.INSTANCE.capabilitiesMap[i];
        if (!s) throw new Error(`No constructor found for capability type: ${i}`);
        return TFu(t, s, n, r);
    }
    getDefaultDataForCapability(t) {
        return UMn[t] || {};
    }
}, Y8i.INSTANCE = new Y8i, FYs = Y8i;

}
