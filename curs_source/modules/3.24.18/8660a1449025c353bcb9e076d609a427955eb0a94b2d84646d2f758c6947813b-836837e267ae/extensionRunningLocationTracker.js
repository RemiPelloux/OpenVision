import { AZf, bUw, tOi } from "./BA.js";
import { h2 } from "./LYd.js";
import { rp } from "./bcIdFromAuthority.js";
import { wm } from "./buildFlags.js";
import { or, yi } from "./configuration.js";
import { pa } from "./constants_8.js";
import { fo, ps } from "./environmentService.js";
import { Xz } from "./extensionHostKind.js";
import { _Te, pye } from "./extensionManifestPropertiesService.js";
import { DAt, MAt, eOi, vTs } from "./extensionRunningLocation.js";
import { O4, Pw, lm, pbe } from "./extensions_3.js";
import { Ji, Li } from "./log.js";
import { Ki, Ot } from "./network.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { TF1 } from "./yBp.js";
var E$l, PZf, I$l, MZf, DZf, NZf, LZf, OZf, FZf, x$l, BZf, UZf, jZf, bTs;
export { BZf, DZf, E$l, FZf, I$l, LZf, MZf, NZf, OZf, PZf, UZf, bTs, jZf, x$l };
var __wakaru_yTs_initialized = false;
export function yTs() {
if (__wakaru_yTs_initialized) return;
__wakaru_yTs_initialized = true;
"use strict";
E(), rp(), pa(), Ki(), or(), wm(), Pw(), Ji(), Zi(), fo(), Xz(), _Te(), vTs(), E$l = [
    {
        role: 1,
        extensionIds: [
            "anysphere.cursor-retrieval"
        ]
    },
    {
        role: 4,
        extensionIds: [
            "anysphere.cursor-always-local",
            "anysphere.cursor-resolver",
            "anysphere.cursor-socket"
        ]
    },
    {
        role: 2,
        extensionIds: [
            "anysphere.cursor-agent-exec",
            "anysphere.cursor-checkout",
            "anysphere.cursor-agent-worker"
        ]
    },
    {
        role: 5,
        extensionIds: [
            "anysphere.cursor-local-agent-runtime"
        ]
    }
], PZf = [
    "anysphere.cursor-agent-exec",
    "anysphere.cursor-agent-host",
    "anysphere.cursor-checkout",
    "anysphere.cursor-agent-worker"
], I$l = [
    {
        role: 1,
        extensionIds: [
            "anysphere.cursor-retrieval"
        ]
    },
    {
        role: 4,
        extensionIds: [
            "anysphere.cursor-always-local",
            "anysphere.cursor-resolver",
            "anysphere.cursor-socket"
        ]
    },
    {
        role: 2,
        extensionIds: PZf
    },
    {
        role: 5,
        extensionIds: [
            "anysphere.cursor-local-agent-runtime"
        ]
    }
], MZf = [
    ...E$l.map((t)=>t.extensionIds),
    ...I$l.map((t)=>t.extensionIds)
], DZf = "anysphere.cursor-resolver-helper", NZf = "anysphere.cursor-agent-worker", LZf = "anysphere.cursor-agent-host", OZf = "anysphere.cursor-local-agent-runtime", FZf = "cursor/useDedicatedLocalAgentRuntimeHost", x$l = "anysphere.cursor-always-local", BZf = "glass_always_local_agent_workspace", UZf = "mechatroner.rainbow-csv", jZf = "glass_rainbow_csv_extension", bTs = class {
    constructor(t, e, n, i, r, s, o, a, l, c){
        this._registry = t, this._extensionHostKindPicker = e, this.cursorIsolationEnabled = n, this.cursorAgentHostEnabled = i, this._preferWebWorkerExtHost = r, this._environmentService = s, this._configurationService = o, this._logService = a, this._storageService = l, this._extensionManifestPropertiesService = c, this._runningLocation = new O4, this._maxLocalProcessAffinity = 0, this._maxLocalWebWorkerAffinity = 0, this._cursorIsolationAffinities = new Set, this._fanoutGroups = bUw(i).filter((u)=>u.role !== 5 || AZf(this._storageService)), this._fanoutExtensionGroups = this._fanoutGroups.map((u)=>u.extensionIds);
    }
    get maxLocalProcessAffinity() {
        return this._maxLocalProcessAffinity;
    }
    get maxLocalWebWorkerAffinity() {
        return this._maxLocalWebWorkerAffinity;
    }
    get cursorIsolationAffinities() {
        return this._cursorIsolationAffinities;
    }
    _getExtensionFilterOptions() {
        return {
            environmentService: this._environmentService,
            storageService: this._storageService,
            checkGate: this._checkGate,
            cursorAgentHostEnabled: this.cursorAgentHostEnabled
        };
    }
    set(t, e) {
        this._runningLocation.set(t, e);
    }
    setCheckGate(t) {
        this._checkGate = t;
    }
    getCheckGate() {
        return this._checkGate;
    }
    readExtensionKinds(t) {
        if (t.isUnderDevelopment && this._environmentService.extensionDevelopmentKind) return this._environmentService.extensionDevelopmentKind;
        const e = this._extensionManifestPropertiesService.getExtensionKind(t), n = e.length > 0 && e[0] === "ui";
        return this._preferWebWorkerExtHost && n && t.browser && !e.includes("web") ? [
            ...e,
            "web"
        ] : e;
    }
    getRunningLocation(t) {
        return this._runningLocation.get(t) || null;
    }
    getExtensionHostRoleForLocalAffinity(t) {
        if (this.cursorIsolationEnabled) {
            if (!this._cursorIsolationAffinities.has(t)) return 3;
            for (const e of this._fanoutGroups)for (const n of e.extensionIds){
                const i = this.getRunningLocation(new lm(n));
                if (i?.kind === 1 && i.affinity === t) return e.role;
            }
        }
    }
    filterByRunningLocation(t, e) {
        return tOi(t, this._runningLocation, (n)=>e.equals(n), this._getExtensionFilterOptions());
    }
    filterByExtensionHostKind(t, e) {
        return tOi(t, this._runningLocation, (n)=>n.kind === e, this._getExtensionFilterOptions());
    }
    filterByExtensionHostManager(t, e) {
        return tOi(t, this._runningLocation, (n)=>e.representsRunningLocation(n), this._getExtensionFilterOptions());
    }
    primeCursorFanoutRunningLocations(t, e) {
        if (!this.cursorIsolationEnabled || this._environmentService.isExtensionDevelopment) return 0;
        let n = this._maxLocalProcessAffinity;
        for (const i of this._fanoutGroups){
            const r = i.extensionIds.filter((a)=>t.has(a));
            if (!r.some((a)=>e.has(a))) continue;
            let s;
            for (const a of r){
                const l = this._runningLocation.get(new lm(a));
                if (l?.kind === 1) {
                    s = l.affinity;
                    break;
                }
            }
            const o = s ?? ++n;
            for (const a of r){
                const l = new lm(a);
                this._runningLocation.has(l) || this._runningLocation.set(l, new MAt(o));
            }
            this._cursorIsolationAffinities.add(o), this._logService.info(`[ExtensionRunningLocationTracker] Primed fanout group (role: ${i.role}) with affinity ${o}, extensions: ${r.join(", ")}`);
        }
        return this._maxLocalProcessAffinity = n, n;
    }
    _computeAffinity(t, e, n) {
        const i = new O4;
        for (const p of t)(p.main || p.browser) && i.set(p.identifier, p);
        for (const p of this._registry.getAllExtensionDescriptions())if (p.main || p.browser) {
            const g = this._runningLocation.get(p.identifier);
            g && g.kind === e && i.set(p.identifier, p);
        }
        const r = new O4;
        let s = 0;
        for (const [p, g] of i)r.set(g.identifier, ++s);
        const o = (p, g)=>{
            for (const [f, _] of r)_ === p && r.set(f, g);
        }, a = this._environmentService.glassWorkspaceRole === "agentWorkspace" && !!h2(this._environmentService.remoteAuthority), l = this.cursorIsolationEnabled && !this._environmentService.isExtensionDevelopment && !a, c = new pbe(this._fanoutExtensionGroups.flatMap((p)=>p));
        e === 1 && this._cursorIsolationAffinities.clear();
        for (const [p, g] of i){
            if (l && c.has(g.identifier) || !g.extensionDependencies) continue;
            const f = r.get(g.identifier);
            for (const _ of g.extensionDependencies){
                if (l && c.has(_)) continue;
                const b = r.get(_);
                b && b !== f && o(b, f);
            }
        }
        if (l) for (const p of this._fanoutExtensionGroups){
            const g = p.find((_)=>r.has(_));
            if (g === void 0) continue;
            const f = r.get(g);
            for (const _ of p){
                const b = r.get(_);
                b === void 0 || b === f || o(b, f);
            }
        }
        const u = new Map;
        let d = 0;
        for (const [p, g] of i){
            const f = this._runningLocation.get(g.identifier);
            if (f) {
                const _ = r.get(g.identifier);
                u.set(_, f.affinity), d = Math.max(d, f.affinity);
            }
        }
        if (l && e === 1 && (d = Math.max(d, this._maxLocalProcessAffinity)), !this._environmentService.isExtensionDevelopment) {
            const p = this._configurationService.getValue("extensions.experimental.affinity") || {};
            let g = Object.keys(p);
            l && (g = g.filter((_)=>!c.has(_)));
            const f = new Map;
            for (const _ of g){
                const b = p[_];
                if (typeof b != "number" || b <= 0 || Math.floor(b) !== b) {
                    this._logService.info(`Ignoring configured affinity for '${_}' because the value is not a positive integer.`);
                    continue;
                }
                const y = r.get(_);
                if (!y) continue;
                const S = u.get(y);
                if (S) {
                    f.set(b, S);
                    continue;
                }
                const k = f.get(b);
                if (k) {
                    u.set(y, k);
                    continue;
                }
                if (!n) {
                    this._logService.info(`Ignoring configured affinity for '${_}' because extension host(s) are already running. Reload window.`);
                    continue;
                }
                const C = ++d;
                f.set(b, C), u.set(y, C);
            }
        }
        if (l) for (const p of this._fanoutExtensionGroups){
            const g = p.find((b)=>r.has(b));
            if (g === void 0) continue;
            const f = r.get(g);
            let _ = u.get(f);
            _ === void 0 || _ <= 0 ? (_ = ++d, u.set(f, _)) : d = Math.max(d, _), e === 1 && _ > 0 && this._cursorIsolationAffinities.add(_);
        }
        const h = new O4;
        for (const p of t){
            const g = r.get(p.identifier) || 0, f = u.get(g) || 0;
            h.set(p.identifier, f);
        }
        if (d > 0 && n) for(let p = 1; p <= d; p++){
            const g = [];
            for (const f of t)h.get(f.identifier) === p && g.push(f.identifier);
            this._logService.info(`Placing extension(s) ${g.map((f)=>f.value).join(", ")} on a separate extension host.`);
        }
        return {
            affinities: h,
            maxAffinity: d
        };
    }
    computeRunningLocation(t, e, n) {
        return this._doComputeRunningLocation(this._runningLocation, t, e, n).runningLocation;
    }
    _doComputeRunningLocation(t, e, n, i) {
        e = e.filter((p)=>!t.has(p.identifier)), n = n.filter((p)=>!t.has(p.identifier));
        const r = TF1(e, n, (p)=>this.readExtensionKinds(p), (p, g, f, _, b)=>this._extensionHostKindPicker.pickExtensionHostKind(p, g, f, _, b)), s = new O4;
        for (const p of e)s.set(p.identifier, p);
        for (const p of n)s.set(p.identifier, p);
        const o = new O4, a = [], l = [];
        for (const [p, g] of r){
            let f = null;
            if (g === 1) {
                const _ = s.get(p);
                _ && a.push(_);
            } else if (g === 2) {
                const _ = s.get(p);
                _ && l.push(_);
            } else g === 3 && (f = new eOi);
            o.set(p, f);
        }
        const { affinities: c, maxAffinity: u } = this._computeAffinity(a, 1, i);
        for (const p of a){
            const g = c.get(p.identifier) || 0;
            o.set(p.identifier, new MAt(g));
        }
        const { affinities: d, maxAffinity: h } = this._computeAffinity(l, 2, i);
        for (const p of l){
            const g = d.get(p.identifier) || 0;
            o.set(p.identifier, new DAt(g));
        }
        for (const [p, g] of t)g && o.set(p, g);
        return {
            runningLocation: o,
            maxLocalProcessAffinity: u,
            maxLocalWebWorkerAffinity: h
        };
    }
    initializeRunningLocation(t, e) {
        const { runningLocation: n, maxLocalProcessAffinity: i, maxLocalWebWorkerAffinity: r } = this._doComputeRunningLocation(this._runningLocation, t, e, !0);
        this._runningLocation = n, this._maxLocalProcessAffinity = i, this._maxLocalWebWorkerAffinity = r;
    }
    deltaExtensions(t, e) {
        const n = new O4;
        for (const s of e){
            const o = s;
            n.set(o, this._runningLocation.get(o) || null), this._runningLocation.delete(o);
        }
        if (this._updateRunningLocationForAddedExtensions(t), this.cursorIsolationEnabled && !this._environmentService.isExtensionDevelopment && !(this._environmentService.glassWorkspaceRole === "agentWorkspace" && h2(this._environmentService.remoteAuthority))) {
            const s = new pbe(this._fanoutExtensionGroups.flat());
            (t.some((a)=>s.has(a.identifier)) || e.some((a)=>s.has(a))) && this._recomputeLocalProcessRunningLocations();
        }
        let r = 0;
        for (const [s, o] of this._runningLocation)o && o.kind === 1 && (r = Math.max(r, o.affinity));
        return this._maxLocalProcessAffinity = r, n;
    }
    _updateRunningLocationForAddedExtensions(t) {
        const e = [], n = [];
        for (const s of t){
            const o = this.readExtensionKinds(s), a = s.extensionLocation.scheme === Ot.vscodeRemote, l = this._extensionHostKindPicker.pickExtensionHostKind(s.identifier, o, !a, a, 0);
            let c = null;
            l === 1 ? e.push(s) : l === 2 ? n.push(s) : l === 3 && (c = new eOi), this._runningLocation.set(s.identifier, c);
        }
        const { affinities: i } = this._computeAffinity(e, 1, !1);
        for (const s of e){
            const o = i.get(s.identifier) || 0;
            this._runningLocation.set(s.identifier, new MAt(o));
        }
        const { affinities: r } = this._computeAffinity(n, 2, !1);
        for (const s of n){
            const o = r.get(s.identifier) || 0;
            this._runningLocation.set(s.identifier, new DAt(o));
        }
    }
    _recomputeLocalProcessRunningLocations() {
        const t = [];
        for (const n of this._registry.getAllExtensionDescriptions()){
            const i = this.readExtensionKinds(n), r = n.extensionLocation.scheme === Ot.vscodeRemote;
            this._extensionHostKindPicker.pickExtensionHostKind(n.identifier, i, !r, r, 0) === 1 && t.push(n);
        }
        if (t.length === 0) return;
        const { affinities: e } = this._computeAffinity(t, 1, !1);
        for (const n of t){
            const i = e.get(n.identifier) || 0;
            this._runningLocation.set(n.identifier, new MAt(i));
        }
    }
}, bTs = Re([
    F(5, ps),
    F(6, yi),
    F(7, Li),
    F(8, ki),
    F(9, pye)
], bTs);

}
