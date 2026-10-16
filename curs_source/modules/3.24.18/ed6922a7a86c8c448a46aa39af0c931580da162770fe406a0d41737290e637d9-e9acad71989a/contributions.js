import { He, I7, Se, eht, rn, we } from "./HVr.js";
import { Am, bn, kge } from "./async.js";
import { MIo, _Nh } from "./editorPaneService.js";
import { nf, sv } from "./environment.js";
import { Vr, Yi } from "./environmentService.js";
import { Ze, _t } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { Qn, Wn } from "./log.js";
import { oc } from "./map.js";
import { kn, rr } from "./platform_2.js";
import { Ol, wI } from "./qIc.js";
import { x } from "./tslib.es6.js";
function bNh(e) {
    const t = e;
    return !!t && typeof t.editorTypeId == "string";
}
function ta_(e) {
    switch(e){
        case 3:
            return 3;
        case 4:
            return 4;
    }
}
function yNh(e) {
    switch(e){
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
    }
}
var ku, cs, _qt, bqt, ts, s0t;
export { _qt, bNh, bqt, cs, ku, s0t, ta_, ts, yNh };
var __wakaru_ls_initialized = false;
export function ls() {
if (__wakaru_ls_initialized) return;
__wakaru_ls_initialized = true;
"use strict";
x(), Ze(), $d(), rr(), bn(), wI(), Qn(), nf(), oc(), Se(), _Nh(), Vr(), ((e)=>{
    e.Workbench = "workbench.contributions.kind";
})(ku || (ku = {})), cs = ((e)=>(e[e.BlockStartup = 1] = "BlockStartup", e[e.BlockRestore = 2] = "BlockRestore", e[e.AfterRestored = 3] = "AfterRestored", e[e.Eventually = 4] = "Eventually", e[e.WindowEventually = 4] = "WindowEventually", e))(cs || {}), _qt = class _Aa extends we {
    constructor(){
        super(...arguments), this.isGlass = !1, this.contributionsByPhase = new Map, this.contributionsByEditor = new Map, this.contributionsById = new Map, this.instancesById = new Map, this.instanceDisposables = this._register(new He), this.timingsByPhase = new Map, this.pendingRestoredContributions = new Am, this.whenRestored = this.pendingRestoredContributions.p;
    }
    get timings() {
        return this.timingsByPhase;
    }
    registerWorkbenchContribution2(t, n, i, r) {
        const s = {
            id: t,
            ctor: n,
            disableInGlass: r?.disableInGlass,
            skipIdleQueue: r?.skipIdleQueue
        };
        this.instantiationService && this.lifecycleService && this.logService && this.environmentService && this.editorPaneService && (typeof i == "number" && this.lifecycleService.phase >= i || typeof t == "string" && bNh(i) && this.editorPaneService.didInstantiateEditorPane(i.editorTypeId)) ? this.safeCreateContribution(this.instantiationService, this.logService, this.environmentService, s, typeof i == "number" ? yNh(i) : this.lifecycleService.phase, this.getDefaultInstantiationScope()) : (typeof i == "number" && eht(this.contributionsByPhase, yNh(i), []).push(s), typeof t == "string" && (this.contributionsById.has(t) ? console.error(`IWorkbenchContributionsRegistry#registerWorkbenchContribution(): Can't register multiple contributions with same id '${t}'`) : this.contributionsById.set(t, s), bNh(i) && eht(this.contributionsByEditor, i.editorTypeId, []).push(s)));
    }
    registerWorkbenchContribution(t, n, i) {
        this.registerWorkbenchContribution2(void 0, t, ta_(n), i);
    }
    getWorkbenchContribution(t) {
        if (this.instancesById.has(t)) return this.instancesById.get(t);
        const n = this.instantiationService, i = this.lifecycleService, r = this.logService, s = this.environmentService;
        if (!n || !i || !r || !s) throw new Error(`IWorkbenchContributionsRegistry#getContribution('${t}'): cannot be called before registry started`);
        const o = this.contributionsById.get(t);
        if (!o) throw new Error(`IWorkbenchContributionsRegistry#getContribution('${t}'): contribution with that identifier is unknown.`);
        i.phase < 3 && r.warn(`IWorkbenchContributionsRegistry#getContribution('${t}'): contribution instantiated before LifecyclePhase.Restored!`), this.safeCreateContribution(n, r, s, o, i.phase, this.getDefaultInstantiationScope());
        const a = this.instancesById.get(t);
        if (!a) throw new Error(`IWorkbenchContributionsRegistry#getContribution('${t}'): failed to create contribution.`);
        return a;
    }
    start(t) {
        const n = t.get(_t), i = t.get(Id), r = t.get(Wn), s = t.get(sv), o = t.get(MIo), a = t.get(Yi);
        this.isGlass = !!a.isGlass;
        const c = !a.isGlass || a.glassWorkspaceRole === "rootWorkspace";
        c && (this.instantiationService = n, this.lifecycleService = i, this.logService = r, this.environmentService = s, this.editorPaneService = o);
        const l = this.createInstantiationScope(i);
        for (const u of [
            1,
            2,
            3,
            4
        ])u === 4 && !c || this.instantiateByPhase(n, i, r, s, u, l);
        for (const u of this.contributionsByEditor.keys())o.didInstantiateEditorPane(u) && this.onEditor(u, n, i, r, s, l);
        l.trackPendingWork(o.onWillInstantiateEditorPane((u)=>this.onEditor(u.typeId, n, i, r, s, l)));
    }
    getDefaultInstantiationScope() {
        return {
            registerInstance: (t, n)=>{
                I7(t) && this.instanceDisposables.add(t);
            },
            trackPendingWork: (t)=>{
                this.instanceDisposables.add(t);
            },
            markRestoredComplete: ()=>this.signalRestoredComplete()
        };
    }
    createInstantiationScope(t) {
        if (this.isGlass) {
            const n = new He;
            this.instanceDisposables.add(n), n.add(t.onDidShutdown(()=>{
                n.dispose();
            }));
            const i = (r)=>{
                if (n.isDisposed) {
                    r.dispose();
                    return;
                }
                n.add(r);
            };
            return {
                registerInstance: (r, s)=>{
                    I7(r) && i(r), s !== void 0 && i(rn(()=>{
                        this.instancesById.get(s) === r && this.instancesById.delete(s);
                    }));
                },
                trackPendingWork: i,
                markRestoredComplete: ()=>this.signalRestoredComplete(),
                isDisposed: ()=>n.isDisposed || t.willShutdown
            };
        }
        return this._register(t.onDidShutdown(()=>{
            this.instanceDisposables.clear();
        })), this.getDefaultInstantiationScope();
    }
    signalRestoredComplete() {
        this.pendingRestoredContributions.isSettled || this.pendingRestoredContributions.complete(void 0);
    }
    onEditor(t, n, i, r, s, o) {
        const a = this.contributionsByEditor.get(t);
        if (a) {
            this.contributionsByEditor.delete(t);
            for (const c of a)this.safeCreateContribution(n, r, s, c, i.phase, o);
        }
    }
    instantiateByPhase(t, n, i, r, s, o) {
        n.phase >= s ? this.doInstantiateByPhase(t, i, r, s, o) : n.when(s).then(()=>{
            if (!o.isDisposed?.()) return this.doInstantiateByPhase(t, i, r, s, o);
        });
    }
    shouldRetainPhaseList(t) {
        return this.isGlass && t === 3;
    }
    async doInstantiateByPhase(t, n, i, r, s) {
        const o = this.contributionsByPhase.get(r);
        if (o) switch(this.shouldRetainPhaseList(r) || this.contributionsByPhase.delete(r), r){
            case 1:
            case 2:
                {
                    Ol(`code/willCreateWorkbenchContributions/${r}`);
                    for (const a of o)this.safeCreateContribution(t, n, i, a, r, s);
                    Ol(`code/didCreateWorkbenchContributions/${r}`);
                    break;
                }
            case 3:
            case 4:
                {
                    let a = o;
                    if (r === 4) {
                        a = [];
                        for (const c of o)c.skipIdleQueue ? this.safeCreateContribution(t, n, i, c, r, s) : a.push(c);
                        await this.pendingRestoredContributions.p;
                    }
                    this.doInstantiateWhenIdle(a, t, n, i, r, s);
                    break;
                }
        }
    }
    doInstantiateWhenIdle(t, n, i, r, s, o) {
        Ol(`code/willCreateWorkbenchContributions/${s}`);
        let a = 0;
        const c = s === 4 ? 3e3 : 500, l = (u)=>{
            for(; a < t.length;){
                const h = t[a++];
                if (this.safeCreateContribution(n, i, r, h, s, o), u.timeRemaining() < 1) {
                    o.trackPendingWork(kge(l, c));
                    break;
                }
            }
            a === t.length && (Ol(`code/didCreateWorkbenchContributions/${s}`), s === 3 && o.markRestoredComplete());
        };
        o.trackPendingWork(kge(l, c));
    }
    safeCreateContribution(t, n, i, r, s, o) {
        if (typeof r.id == "string" && this.instancesById.has(r.id) || r.disableInGlass && this.isGlass || o.isDisposed?.()) return;
        const a = Date.now();
        try {
            typeof r.id == "string" && Ol(`code/willCreateWorkbenchContribution/${s}/${r.id}`);
            const c = t.createInstance(r.ctor);
            typeof r.id == "string" && (this.instancesById.set(r.id, c), this.contributionsById.delete(r.id)), o.registerInstance(c, r.id);
        } catch (c) {
            n.error(`Unable to create workbench contribution '${r.id ?? r.ctor.name}'.`, c);
        } finally{
            typeof r.id == "string" && Ol(`code/didCreateWorkbenchContribution/${s}/${r.id}`);
        }
        if (typeof r.id == "string" || !i.isBuilt) {
            const c = Date.now() - a;
            if (c > (s < 3 ? _Aa.BLOCK_BEFORE_RESTORE_WARN_THRESHOLD : _Aa.BLOCK_AFTER_RESTORE_WARN_THRESHOLD) && n.warn(`Creation of workbench contribution '${r.id ?? r.ctor.name}' took ${c}ms.`), typeof r.id == "string") {
                let l = this.timingsByPhase.get(s);
                l || (l = [], this.timingsByPhase.set(s, l)), l.push([
                    r.id,
                    c
                ]);
            }
        }
    }
}, _qt.INSTANCE = new _qt, _qt.BLOCK_BEFORE_RESTORE_WARN_THRESHOLD = 20, _qt.BLOCK_AFTER_RESTORE_WARN_THRESHOLD = 100, bqt = _qt, ts = bqt.INSTANCE.registerWorkbenchContribution2.bind(bqt.INSTANCE), s0t = bqt.INSTANCE.getWorkbenchContribution.bind(bqt.INSTANCE), kn.add(ku.Workbench, bqt.INSTANCE);

}
