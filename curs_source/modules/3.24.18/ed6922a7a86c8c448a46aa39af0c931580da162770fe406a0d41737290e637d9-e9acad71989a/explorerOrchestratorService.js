import { t0 } from "./De_3.js";
import { Se, rn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { nb } from "./bcIdFromAuthority.js";
import { Ar, Eo } from "./cancellation.js";
import { Vr, Yi } from "./environmentService.js";
import { XEo, zDh } from "./explorerOrchestratorCacheService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { B0 } from "./localAgentRepository.js";
import { Cw, ba } from "./path_2.js";
import { _R, gk, mn, pd, rp } from "./qIc.js";
import { N1, UGt, gh } from "./reactive.js";
import { Emi, Li, ml } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { ci } from "./workspace.js";
import { D2, a0 } from "./workspaceMetadataService.js";
import { IA, KM } from "./workspaces.js";
import { ete } from "./xmo.js";
function KDh(e) {
    if (!e) return;
    const t = t0(e);
    return t.length > 0 ? t : void 0;
}
function YDh(e) {
    return {
        ...e,
        fetchUrl: KDh(e.fetchUrl),
        pushUrl: KDh(e.pushUrl)
    };
}
var cBn, tTe;
export { KDh, YDh, cBn, tTe };
var __wakaru_JJi_initialized = false;
export function JJi() {
if (__wakaru_JJi_initialized) return;
__wakaru_JJi_initialized = true;
"use strict";
x(), ba(), Ar(), Se(), nb(), Li(), Qt(), N1(), Pn(), Ze(), B0(), ci(), a0(), IA(), Vr(), zDh(), cBn = pd("explorerOrchestratorService"), tTe = class extends we {
    constructor(e, t, n, i){
        super(), this._explorerOrchestratorCacheService = t, this._workspacesService = n, this._workspaceMetadataService = i, this._workspaceExplorerProviders = new Map, this._remoteExplorerItems = new gh([]), this._remoteExplorerItemsByWorkspace = new Map, this.remoteExplorerItems = this._remoteExplorerItems, this._loadedWorkspaceCacheKeys = new Set, this._workspaceCacheKeysInFlight = new Set, this._loadedRemoteAuthorityCacheKeys = new Set, this._remoteAuthorityCacheKeysInFlight = new Set, this._cacheHydrationPromises = new Map, this._enabled = e.isGlass === !0;
    }
    registerExplorerProvider(e, t) {
        if (!this._enabled) return rn(()=>{});
        const n = this._toRemoteAuthorityCacheKey(this._getRemoteAuthority(e));
        return this._workspaceExplorerProviders.set(e, t), this._fetchRemoteAuthorityIfNeeded(e, t), rn(()=>{
            if (this._workspaceExplorerProviders.get(e) === t) {
                this._workspaceExplorerProviders.delete(e);
                const r = this._toWorkspaceItemsKey(e);
                this._remoteExplorerItemsByWorkspace.delete(r), this._loadedWorkspaceCacheKeys.delete(r), this._workspaceCacheKeysInFlight.delete(r), this._cacheHydrationPromises.delete(r), this._hasExplorerProviderForRemoteAuthority(n) || (this._loadedRemoteAuthorityCacheKeys.delete(n), this._remoteAuthorityCacheKeysInFlight.delete(n)), this._updateRemoteExplorerItems();
            }
        });
    }
    getRemoteExplorerItemsForOrigin(e) {
        const t = t0(e);
        return new UGt([
            this._remoteExplorerItems
        ], (n)=>!this._enabled || t.length === 0 ? [] : n.flatMap((i)=>{
                const r = Array.from(i.remotes).filter((s)=>this._remoteMatchesNormalizedGitOrigin(s, t)).map((s)=>({
                        ...s
                    }));
                return r.length === 0 ? [] : [
                    {
                        workspaceId: i.workspaceId,
                        remoteAuthority: i.remoteAuthority,
                        path: i.path,
                        displayPath: i.displayPath,
                        remotes: new Set(r)
                    }
                ];
            }));
    }
    _remoteMatchesNormalizedGitOrigin(e, t) {
        return (e.fetchUrl ?? "") === t ? !0 : (e.pushUrl ?? "") === t;
    }
    _getRemoteAuthority(e) {
        return ete(this._workspaceMetadataService, e);
    }
    _getWorkspaceRoot(e) {
        if (rp(e)) return e.uri;
        if (gk(e)) return ml(e.configPath);
    }
    _toWorkspaceItemsKey(e) {
        return e.id;
    }
    _toRemoteAuthorityCacheKey(e) {
        return e && e.length > 0 ? e : "local";
    }
    _toRepositoryUri(e, t, n) {
        if (e) return Emi(e, n);
        if (t.length === 0) return Cw.isAbsolute(n) ? Ee.file(n) : void 0;
        if (n.startsWith("/")) return Ee.from({
            scheme: "vscode-remote",
            authority: t,
            path: n
        });
    }
    async _toRemoteExplorerItems(e, t, n) {
        const i = this._getWorkspaceRoot(e);
        return (await Promise.all(n.map(async (s)=>{
            const o = this._toRepositoryUri(i, t, s.path);
            if (!o) return;
            const a = await this._workspacesService.getSingleFolderWorkspaceIdentifier(o);
            if (a) return {
                workspaceId: a.id,
                remoteAuthority: t,
                path: s.path,
                displayPath: s.displayPath,
                remotes: new Set(s.remotes.map(YDh))
            };
        }))).filter((s)=>s !== void 0);
    }
    _setWorkspaceItems(e, t) {
        this._remoteExplorerItemsByWorkspace.set(e, t), this._updateRemoteExplorerItems();
    }
    _isProviderRegistrationActive(e, t) {
        return this._workspaceExplorerProviders.get(e) === t;
    }
    _hasExplorerProviderForRemoteAuthority(e) {
        for (const t of this._workspaceExplorerProviders.keys())if (this._toRemoteAuthorityCacheKey(this._getRemoteAuthority(t)) === e) return !0;
        return !1;
    }
    async _setWorkspaceItemsForRemoteAuthority(e, t, n) {
        for (const i of this._workspaceExplorerProviders.keys()){
            if (this._toRemoteAuthorityCacheKey(this._getRemoteAuthority(i)) !== e) continue;
            const r = this._toWorkspaceItemsKey(i), s = await this._toRemoteExplorerItems(i, t, n);
            this._workspaceExplorerProviders.has(i) && (this._setWorkspaceItems(r, s), this._loadedWorkspaceCacheKeys.add(r));
        }
    }
    _updateRemoteExplorerItems() {
        this._remoteExplorerItems.set(Array.from(this._remoteExplorerItemsByWorkspace.values()).flat());
    }
    _isCachePayloadStale(e) {
        return !Number.isFinite(e) || e <= 0 ? !0 : Date.now() - e > tTe._CACHE_STALE_AFTER_MS;
    }
    async _hydrateWorkspaceCacheIfNeeded(e, t, n) {
        let i = this._cacheHydrationPromises.get(t);
        i || (i = (async ()=>{
            const r = await this._explorerOrchestratorCacheService.loadWorkspaceRemoteExplorerItems(n);
            r && (this._setWorkspaceItems(t, await this._toRemoteExplorerItems(e, r.remoteAuthority, r.repositories)), this._isCachePayloadStale(r.savedAtMs) || (this._loadedWorkspaceCacheKeys.add(t), this._loadedRemoteAuthorityCacheKeys.add(n)));
        })().catch((r)=>{
            console.error("[ExplorerOrchestratorService] cache hydration failed", {
                workspaceItemsKey: t,
                cacheStorageKey: n,
                error: r
            });
        }), this._cacheHydrationPromises.set(t, i)), await i;
    }
    _fetchRemoteAuthorityIfNeeded(e, t) {
        if (!this._enabled) return;
        const n = this._getRemoteAuthority(e), i = _R(n), r = n ?? "", s = this._toWorkspaceItemsKey(e), o = this._toRemoteAuthorityCacheKey(n);
        i || this._fetchWorkspaceRepositoriesIfNeeded({
            workspaceIdentifier: e,
            providerCallback: t,
            workspaceItemsKey: s,
            cacheStorageKey: o,
            itemRemoteAuthority: r
        }).catch((a)=>{
            console.error("[ExplorerOrchestratorService] fetch failed", {
                remoteAuthority: n,
                workspaceItemsKey: s,
                cacheStorageKey: o,
                error: a
            });
        });
    }
    async _fetchWorkspaceRepositoriesIfNeeded({ workspaceIdentifier: e, providerCallback: t, workspaceItemsKey: n, cacheStorageKey: i, itemRemoteAuthority: r }) {
        if (await this._hydrateWorkspaceCacheIfNeeded(e, n, i), !this._isProviderRegistrationActive(e, t) || this._loadedWorkspaceCacheKeys.has(n) || this._workspaceCacheKeysInFlight.has(n) || this._loadedRemoteAuthorityCacheKeys.has(i) || this._remoteAuthorityCacheKeysInFlight.has(i)) return;
        this._workspaceCacheKeysInFlight.add(n), this._remoteAuthorityCacheKeysInFlight.add(i);
        const s = new Eo, o = t({
            maxDepth: tTe._SCAN_MAX_DEPTH
        }, s.token);
        let a;
        const c = new Promise((l, u)=>{
            a = setTimeout(()=>{
                s.cancel(), u(new Error(`Explorer provider warmup timed out after ${tTe._FETCH_TIMEOUT_MS}ms`));
            }, tTe._FETCH_TIMEOUT_MS);
        });
        try {
            const l = await Promise.race([
                o,
                c
            ]);
            if (!this._isProviderRegistrationActive(e, t) && !this._hasExplorerProviderForRemoteAuthority(i) || (await this._setWorkspaceItemsForRemoteAuthority(i, r, l), !this._hasExplorerProviderForRemoteAuthority(i))) return;
            this._loadedRemoteAuthorityCacheKeys.add(i), this._explorerOrchestratorCacheService.saveWorkspaceRemoteExplorerItems(i, {
                remoteAuthority: r,
                sourceWorkspaceId: e.id,
                repositories: l.map((u)=>({
                        path: u.path,
                        displayPath: u.displayPath,
                        remotes: u.remotes.map(YDh)
                    })),
                savedAtMs: Date.now()
            });
        } finally{
            a !== void 0 && clearTimeout(a), s.dispose(!0), this._workspaceCacheKeysInFlight.delete(n), this._remoteAuthorityCacheKeysInFlight.delete(i);
        }
    }
    dispose() {
        super.dispose(), this._workspaceExplorerProviders.clear(), this._remoteExplorerItemsByWorkspace.clear(), this._loadedWorkspaceCacheKeys.clear(), this._workspaceCacheKeysInFlight.clear(), this._loadedRemoteAuthorityCacheKeys.clear(), this._remoteAuthorityCacheKeysInFlight.clear(), this._cacheHydrationPromises.clear();
    }
}, tTe._FETCH_TIMEOUT_MS = 15e3, tTe._CACHE_STALE_AFTER_MS = 1440 * 60 * 1e3, tTe._SCAN_MAX_DEPTH = 4, tTe = ie([
    C(0, Yi),
    C(1, XEo),
    C(2, KM),
    C(3, D2)
], tTe), mn(cBn, tTe, 1, 1);

}
