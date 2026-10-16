import { Nt, Pn, QFt, Qe, kke, st } from "./Iwo.js";
import { PQu, RQu, mP, ud, yyy } from "./SZu.js";
import { BOe, df, qn } from "./async.js";
import { AQu, FTo } from "./editorPaneService.js";
import { cy, fb } from "./environment.js";
import { fo, ps } from "./environmentService.js";
import { It, dn } from "./instantiation.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Ji, Li } from "./log.js";
import { du } from "./map.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
var pg, $o, Gdn, w6t, Ho, C6t;
export { $o, C6t, Gdn, Ho, pg, w6t };
var __wakaru_ea_initialized = false;
export function ea() {
if (__wakaru_ea_initialized) return;
__wakaru_ea_initialized = true;
"use strict";
E(), It(), zp(), Eo(), qn(), mP(), Ji(), fb(), du(), Qe(), AQu(), fo(), ((t)=>{
    t.Workbench = "workbench.contributions.kind";
})(pg || (pg = {})), $o = ((t)=>(t[t.BlockStartup = 1] = "BlockStartup", t[t.BlockRestore = 2] = "BlockRestore", t[t.AfterRestored = 3] = "AfterRestored", t[t.Eventually = 4] = "Eventually", t[t.WindowEventually = 4] = "WindowEventually", t))($o || {}), Gdn = class zQc extends st {
    constructor(){
        super(...arguments), this.isGlass = !1, this.contributionsByPhase = new Map, this.contributionsByEditor = new Map, this.contributionsById = new Map, this.instancesById = new Map, this.instanceDisposables = this._register(new Nt), this.timingsByPhase = new Map, this.pendingRestoredContributions = new df, this.whenRestored = this.pendingRestoredContributions.p;
    }
    get timings() {
        return this.timingsByPhase;
    }
    registerWorkbenchContribution2(e, n, i, r) {
        const s = {
            id: e,
            ctor: n,
            disableInGlass: r?.disableInGlass,
            skipIdleQueue: r?.skipIdleQueue
        };
        this.instantiationService && this.lifecycleService && this.logService && this.environmentService && this.editorPaneService && (typeof i == "number" && this.lifecycleService.phase >= i || typeof e == "string" && RQu(i) && this.editorPaneService.didInstantiateEditorPane(i.editorTypeId)) ? this.safeCreateContribution(this.instantiationService, this.logService, this.environmentService, s, typeof i == "number" ? PQu(i) : this.lifecycleService.phase, this.getDefaultInstantiationScope()) : (typeof i == "number" && QFt(this.contributionsByPhase, PQu(i), []).push(s), typeof e == "string" && (this.contributionsById.has(e) ? console.error(`IWorkbenchContributionsRegistry#registerWorkbenchContribution(): Can't register multiple contributions with same id '${e}'`) : this.contributionsById.set(e, s), RQu(i) && QFt(this.contributionsByEditor, i.editorTypeId, []).push(s)));
    }
    registerWorkbenchContribution(e, n, i) {
        this.registerWorkbenchContribution2(void 0, e, yyy(n), i);
    }
    getWorkbenchContribution(e) {
        if (this.instancesById.has(e)) return this.instancesById.get(e);
        const n = this.instantiationService, i = this.lifecycleService, r = this.logService, s = this.environmentService;
        if (!n || !i || !r || !s) throw new Error(`IWorkbenchContributionsRegistry#getContribution('${e}'): cannot be called before registry started`);
        const o = this.contributionsById.get(e);
        if (!o) throw new Error(`IWorkbenchContributionsRegistry#getContribution('${e}'): contribution with that identifier is unknown.`);
        i.phase < 3 && r.warn(`IWorkbenchContributionsRegistry#getContribution('${e}'): contribution instantiated before LifecyclePhase.Restored!`), this.safeCreateContribution(n, r, s, o, i.phase, this.getDefaultInstantiationScope());
        const a = this.instancesById.get(e);
        if (!a) throw new Error(`IWorkbenchContributionsRegistry#getContribution('${e}'): failed to create contribution.`);
        return a;
    }
    start(e) {
        const n = e.get(dn), i = e.get(Fp), r = e.get(Li), s = e.get(cy), o = e.get(FTo), a = e.get(ps);
        this.isGlass = !!a.isGlass;
        const l = !a.isGlass || a.glassWorkspaceRole === "rootWorkspace";
        l && (this.instantiationService = n, this.lifecycleService = i, this.logService = r, this.environmentService = s, this.editorPaneService = o);
        const c = this.createInstantiationScope(i);
        for (const u of [
            1,
            2,
            3,
            4
        ])u === 4 && !l || this.instantiateByPhase(n, i, r, s, u, c);
        for (const u of this.contributionsByEditor.keys())o.didInstantiateEditorPane(u) && this.onEditor(u, n, i, r, s, c);
        c.trackPendingWork(o.onWillInstantiateEditorPane((u)=>this.onEditor(u.typeId, n, i, r, s, c)));
    }
    getDefaultInstantiationScope() {
        return {
            registerInstance: (e, n)=>{
                kke(e) && this.instanceDisposables.add(e);
            },
            trackPendingWork: (e)=>{
                this.instanceDisposables.add(e);
            },
            markRestoredComplete: ()=>this.signalRestoredComplete()
        };
    }
    createInstantiationScope(e) {
        if (this.isGlass) {
            const n = new Nt;
            this.instanceDisposables.add(n), n.add(e.onDidShutdown(()=>{
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
                    kke(r) && i(r), s !== void 0 && i(Pn(()=>{
                        this.instancesById.get(s) === r && this.instancesById.delete(s);
                    }));
                },
                trackPendingWork: i,
                markRestoredComplete: ()=>this.signalRestoredComplete(),
                isDisposed: ()=>n.isDisposed || e.willShutdown
            };
        }
        return this._register(e.onDidShutdown(()=>{
            this.instanceDisposables.clear();
        })), this.getDefaultInstantiationScope();
    }
    signalRestoredComplete() {
        this.pendingRestoredContributions.isSettled || this.pendingRestoredContributions.complete(void 0);
    }
    onEditor(e, n, i, r, s, o) {
        const a = this.contributionsByEditor.get(e);
        if (a) {
            this.contributionsByEditor.delete(e);
            for (const l of a)this.safeCreateContribution(n, r, s, l, i.phase, o);
        }
    }
    instantiateByPhase(e, n, i, r, s, o) {
        n.phase >= s ? this.doInstantiateByPhase(e, i, r, s, o) : n.when(s).then(()=>{
            if (!o.isDisposed?.()) return this.doInstantiateByPhase(e, i, r, s, o);
        });
    }
    shouldRetainPhaseList(e) {
        return this.isGlass && e === 3;
    }
    async doInstantiateByPhase(e, n, i, r, s) {
        const o = this.contributionsByPhase.get(r);
        if (o) switch(this.shouldRetainPhaseList(r) || this.contributionsByPhase.delete(r), r){
            case 1:
            case 2:
                {
                    ud(`code/willCreateWorkbenchContributions/${r}`);
                    for (const a of o)this.safeCreateContribution(e, n, i, a, r, s);
                    ud(`code/didCreateWorkbenchContributions/${r}`);
                    break;
                }
            case 3:
            case 4:
                {
                    let a = o;
                    if (r === 4) {
                        a = [];
                        for (const l of o)l.skipIdleQueue ? this.safeCreateContribution(e, n, i, l, r, s) : a.push(l);
                        await this.pendingRestoredContributions.p;
                    }
                    this.doInstantiateWhenIdle(a, e, n, i, r, s);
                    break;
                }
        }
    }
    doInstantiateWhenIdle(e, n, i, r, s, o) {
        ud(`code/willCreateWorkbenchContributions/${s}`);
        let a = 0;
        const l = s === 4 ? 3e3 : 500, c = (u)=>{
            for(; a < e.length;){
                const d = e[a++];
                if (this.safeCreateContribution(n, i, r, d, s, o), u.timeRemaining() < 1) {
                    o.trackPendingWork(BOe(c, l));
                    break;
                }
            }
            a === e.length && (ud(`code/didCreateWorkbenchContributions/${s}`), s === 3 && o.markRestoredComplete());
        };
        o.trackPendingWork(BOe(c, l));
    }
    safeCreateContribution(e, n, i, r, s, o) {
        if (typeof r.id == "string" && this.instancesById.has(r.id) || r.disableInGlass && this.isGlass || o.isDisposed?.()) return;
        const a = Date.now();
        try {
            typeof r.id == "string" && ud(`code/willCreateWorkbenchContribution/${s}/${r.id}`);
            const l = e.createInstance(r.ctor);
            typeof r.id == "string" && (this.instancesById.set(r.id, l), this.contributionsById.delete(r.id)), o.registerInstance(l, r.id);
        } catch (l) {
            n.error(`Unable to create workbench contribution '${r.id ?? r.ctor.name}'.`, l);
        } finally{
            typeof r.id == "string" && ud(`code/didCreateWorkbenchContribution/${s}/${r.id}`);
        }
        if (typeof r.id == "string" || !i.isBuilt) {
            const l = Date.now() - a;
            if (l > (s < 3 ? zQc.BLOCK_BEFORE_RESTORE_WARN_THRESHOLD : zQc.BLOCK_AFTER_RESTORE_WARN_THRESHOLD) && n.warn(`Creation of workbench contribution '${r.id ?? r.ctor.name}' took ${l}ms.`), typeof r.id == "string") {
                let c = this.timingsByPhase.get(s);
                c || (c = [], this.timingsByPhase.set(s, c)), c.push([
                    r.id,
                    l
                ]);
            }
        }
    }
}, Gdn.INSTANCE = new Gdn, Gdn.BLOCK_BEFORE_RESTORE_WARN_THRESHOLD = 20, Gdn.BLOCK_AFTER_RESTORE_WARN_THRESHOLD = 100, w6t = Gdn, Ho = w6t.INSTANCE.registerWorkbenchContribution2.bind(w6t.INSTANCE), C6t = w6t.INSTANCE.getWorkbenchContribution.bind(w6t.INSTANCE), Fi.add(pg.Workbench, w6t.INSTANCE);

}
