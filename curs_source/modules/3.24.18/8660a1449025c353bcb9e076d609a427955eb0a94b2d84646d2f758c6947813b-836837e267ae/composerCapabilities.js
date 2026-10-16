import { $m, Ei, Qe, st, xr } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { H5a, USi } from "./composerCapabilityMappings.js";
import { Kqr, uv } from "./composerData.js";
import { iI, w1 } from "./composerLogService.js";
import { mo, tf } from "./composer_pb.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { HL1, UL1, g9p, hzr, jSi, m9p, p9p } from "./ipa.js";
import { v1 } from "./store.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Wt, pi } from "./ze.js";
var pzr, W5a, $Si, sie, G5a, f9p, mzr, q5a;
export { $Si, G5a, W5a, f9p, mzr, pzr, q5a, sie };
var __wakaru_y6_initialized = false;
export function y6() {
if (__wakaru_y6_initialized) return;
__wakaru_y6_initialized = true;
"use strict";
E(), It(), Rn(), Ei(), fo(), pi(), v1(), tf(), Qe(), To(), USi(), uv(), iI(), pzr = Symbol("disposeCapabilityBase"), W5a = new WeakMap, $Si = Object.fromEntries(Object.entries(H5a).map(([t, e])=>[
        t,
        UL1(e)
    ])), sie = class extends st {
    constructor(t, e, n){
        super(), this.composerDataService = n, this.abortController = null, this.composerId = t, this.data = {
            ...e
        }, [this.isEnabled, this.setIsEnabled] = Wt(!0), [this.isEnabledForRequest, this.setIsEnabledForRequest] = Wt(!0);
    }
    setProvidedHandle(t) {
        this._providedHandleRef = new WeakRef(t);
    }
    getComposerHandle() {
        const t = this._providedHandleRef?.deref();
        if (t) return t;
        const e = this.composerDataService.getHandleIfLoaded(this.composerId);
        if (!e) throw new Error(`[ComposerCapability] Composer ${this.composerId} is not loaded. Are you obtaining a handle to the composer during its disposal?`);
        return e;
    }
    getComposerHandleIfLoaded() {
        const t = this._providedHandleRef?.deref();
        return t || this.composerDataService.getHandleIfLoaded(this.composerId);
    }
    requestComposerUnload() {
        return this.composerDataService.unloadComposer(this.composerId);
    }
    providedContextInformation(t) {}
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
    deserialize(t) {
        const e = JSON.parse(t), n = this.constructor;
        return g9p(()=>new n(this.composerId, e, this.composerDataService));
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
    [pzr](t = ()=>st.prototype.dispose.call(this)) {
        const e = jSi(this);
        if (e.baseDisposeAttempted) return;
        e.baseDisposeAttempted = !0;
        const n = e.ownerDetach;
        e.ownerDetach = void 0, n?.();
        const i = [];
        try {
            this.cancel();
        } catch (r) {
            i.push(r);
        }
        this.data = $Si[this.type];
        try {
            t();
        } catch (r) {
            i.push(r);
        }
        if (i.length === 1) throw i[0];
        if (i.length > 1) throw new AggregateError(i, "Composer capability base cleanup failed");
    }
    dispose() {
        try {
            this[pzr](()=>super.dispose());
        } finally{
            p9p(this);
        }
    }
}, G5a = jn("composerCapabilityLifecycleService"), f9p = class extends st {
    constructor(){
        super(...arguments), this._liveCapabilities = new Set;
    }
    trackCapability(t) {
        if (this._store.isDisposed) {
            this._disposeAndReport([
                t
            ]);
            return;
        }
        this._liveCapabilities.add(t), jSi(t).ownerDetach = ()=>this._liveCapabilities.delete(t);
    }
    dispose() {
        const t = [
            ...this._liveCapabilities
        ];
        this._liveCapabilities.clear(), this._disposeAndReport(t);
        const e = new Set;
        for (const n of t)e.has(n.composerId) || (e.add(n.composerId), n.requestComposerUnload().catch(xr));
        super.dispose();
    }
    _disposeAndReport(t) {
        for (const e of hzr(t))xr(e);
    }
}, bn(G5a, f9p, 1), mzr = class {
    constructor(){
        this.capabilitiesMap = {};
    }
    static registerCapability(e, n) {
        this.INSTANCE.capabilitiesMap[e] = n;
    }
    static getCapabilities(e, n, i) {
        let r = [];
        if (i?.forceCapabilities !== void 0) r = i.forceCapabilities.map((a)=>({
                type: a,
                data: $Si[a]
            }));
        else {
            const a = (i?.savedCapabilityData || []).filter((c)=>Kqr.some((u)=>u === c.type)), l = Kqr.filter((c)=>!a.some((u)=>u.type === c)).map((c)=>({
                    type: c,
                    data: $Si[c]
                }));
            r = [
                ...a,
                ...l
            ];
        }
        e.invokeFunction((a)=>a.get(ps).isGlass) && (r = r.filter((a)=>a.type !== mo.BACKGROUND_COMPOSER));
        const o = r.map((a)=>{
            try {
                const l = this.INSTANCE.capabilitiesMap[a.type];
                if (!l || !this.getSchema(a.type)) return;
                const d = {
                    ...this.INSTANCE.getDefaultDataForCapability(a.type),
                    ...a.data || {}
                }, h = m9p(e, l, n, d);
                return i?.providedHandle && h.setProvidedHandle(i.providedHandle), h;
            } catch (l) {
                e.invokeFunction((c)=>c.get(w1)).error(`[compsoerCapabilities] Error creating capability ${a.type}`, l);
                return;
            }
        }).filter($m);
        return HL1(o);
    }
    static getSchema(e) {
        return H5a[e];
    }
    static createInstance(e, n, i, r) {
        const s = this.INSTANCE.capabilitiesMap[i];
        if (!s) throw new Error(`No constructor found for capability type: ${i}`);
        return m9p(e, s, n, r);
    }
    getDefaultDataForCapability(e) {
        return $Si[e] || {};
    }
}, mzr.INSTANCE = new mzr, q5a = mzr;

}
