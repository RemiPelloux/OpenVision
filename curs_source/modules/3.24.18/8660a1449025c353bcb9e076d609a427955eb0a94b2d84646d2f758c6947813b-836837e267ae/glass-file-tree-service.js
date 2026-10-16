import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Yu, qn } from "./async.js";
import { Rn } from "./extensions.js";
import { iBr } from "./file-tree-controller.js";
import { AL, _N } from "./glass-configuration-service.js";
import { T6i, wtc } from "./glass-file-decoration-service.js";
import { Ttc, UP0 } from "./glass-file-tree-model-service.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Mt } from "./index_197.js";
import { It } from "./instantiation.js";
import { Ki, Ot } from "./network.js";
import { Aa, Lr, iL } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var Qut, i5n;
export { Qut, i5n };
var __wakaru_gJt_initialized = false;
export function gJt() {
if (__wakaru_gJt_initialized) return;
__wakaru_gJt_initialized = true;
"use strict";
E(), Mt(), qn(), Gt(), Qe(), Ki(), Lr(), fn(), Rn(), It(), xd(), AL(), wtc(), UP0(), Qut = jn("glassFileTreeService"), i5n = class extends st {
    constructor(t, e, n, i){
        super(), this._controllers = new Map, this._onDidRequestReveal = this._register(new tt), this._revealRequestId = 0, this.onDidRequestReveal = this._onDidRequestReveal.event, this._workspaceContextService = t, this._configurationService = e, this._modelService = n;
        const r = this._modelService.onDirectoryInvalidated((p)=>{
            for (const g of this._controllers.values())p === null ? g.refreshRoots() : g.invalidateLoadedDirectory(p);
        });
        this._register({
            dispose: r
        });
        const s = this._modelService.onDirectoryMutated((p)=>{
            for (const g of this._controllers.values())g.applyDirectoryMutationRefresh(p);
        });
        this._register({
            dispose: s
        });
        const o = new Set, a = this._register(new Yu(()=>{
            const p = [
                ...o
            ];
            o.clear();
            for (const g of p)for (const f of this._controllers.values())f.applyIgnoredRefresh(g);
        }, i5n._IGNORED_REFRESH_DEBOUNCE_MS)), l = this._modelService.onIgnoredChanged((p)=>{
            o.add(p), a.isScheduled() || a.schedule();
        });
        this._register({
            dispose: l
        }), this._register(this._configurationService.onDidChangeConfiguration((p)=>{
            p.affectsConfiguration("explorer.compactFolders") && this._updateControllerCompactFolders();
        }));
        let c, u = [];
        const d = ()=>{
            c = void 0;
            const p = u;
            u = [];
            const g = (f)=>p.some((_)=>_(f));
            if (this._modelService.refreshCachedDecorations(g)) for (const f of this._controllers.values())f.applyDecorationRefresh();
        }, h = i.onDidChange((p)=>{
            u.push((g)=>p.affectsResource(g)), c === void 0 && (c = setTimeout(d, 100));
        });
        this._register(h), this._register({
            dispose: ()=>{
                c !== void 0 && clearTimeout(c);
            }
        });
    }
    getController(t) {
        let e = this._controllers.get(t);
        return e || (e = new iBr({
            resolver: this._modelService,
            sortMode: "alphabetical",
            compactFolders: this._isCompactFoldersEnabled()
        }), this._controllers.set(t, e), e.loadRoots()), e;
    }
    releaseController(t) {
        this._controllers.delete(t);
    }
    async refreshAll() {
        this._modelService.invalidateAllDirectories();
        for (const t of this._controllers.values())await t.refreshAll();
    }
    requestReveal(t, e) {
        this._revealRequestId += 1;
        const n = {
            uri: t,
            requestId: this._revealRequestId,
            ownerAgentId: e
        };
        return this._revealRequest = n, this._onDidRequestReveal.fire(n), n;
    }
    getRevealRequest() {
        return this._revealRequest;
    }
    clearRevealRequest(t) {
        t !== void 0 && this._revealRequest?.requestId !== t || (this._revealRequest = void 0);
    }
    _isCompactFoldersEnabled() {
        return this._configurationService.getValue("explorer.compactFolders") ?? !1;
    }
    _updateControllerCompactFolders() {
        const t = this._isCompactFoldersEnabled();
        for (const e of this._controllers.values())e.setCompactFolders(t);
    }
    resolveUriFromPath(t) {
        return this._modelService.resolveUriFromPath(t);
    }
    computeDisplayPath(t) {
        if (t) try {
            const e = rt.parse(t);
            if (e.scheme === Ot.untitled) return Aa(e);
            const n = this._workspaceContextService.getWorkspace().folders;
            for (const i of n){
                const r = iL(i.uri, e);
                if (r && !r.startsWith("..")) return n.length > 1 ? `${i.name}/${r}` : r;
            }
            return e.fsPath || t;
        } catch  {
            return t;
        }
    }
    computeWorkspaceTreePath(t) {
        const e = this._workspaceContextService.getWorkspace().folders;
        for (const n of e){
            const i = iL(n.uri, t);
            if (!i || i.startsWith("..")) continue;
            const r = i.replaceAll("\\", "/").replace(/\/+$/u, "");
            if (r) return e.length > 1 ? `${n.name}/${r}` : r;
        }
    }
}, i5n._IGNORED_REFRESH_DEBOUNCE_MS = 300, i5n = Re([
    F(0, F_),
    F(1, _N),
    F(2, Ttc),
    F(3, T6i)
], i5n), bn(Qut, i5n, 2);

}
