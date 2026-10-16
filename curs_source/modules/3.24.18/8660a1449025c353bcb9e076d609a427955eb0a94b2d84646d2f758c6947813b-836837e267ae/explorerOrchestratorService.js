import { Pn, Qe, st } from "./Iwo.js";
import { h2 } from "./LYd.js";
import { $l, Ah, Il, bn } from "./SZu.js";
import { Obg } from "./Ycg.js";
import { rp } from "./bcIdFromAuthority.js";
import { El, yo } from "./cancellation.js";
import { fo, ps } from "./environmentService.js";
import { Bas, vdl } from "./explorerOrchestratorCacheService.js";
import { Rn } from "./extensions.js";
import { sw } from "./gYa.js";
import { It } from "./instantiation.js";
import { sf } from "./ipa.js";
import { ub } from "./localAgentRepository.js";
import { EC, Ul } from "./path_2.js";
import { Kf, T4e, ca } from "./reactive.js";
import { Lr, Mc, Tmr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr } from "./workspace.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { HM, lN } from "./workspaces.js";
var BAn, o9e;
export { BAn, o9e };
var __wakaru_FIi_initialized = false;
export function FIi() {
if (__wakaru_FIi_initialized) return;
__wakaru_FIi_initialized = true;
"use strict";
E(), Ul(), yo(), Qe(), rp(), Lr(), fn(), Kf(), Rn(), It(), ub(), Sr(), Lh(), HM(), fo(), vdl(), BAn = Il("explorerOrchestratorService"), o9e = class extends st {
    constructor(t, e, n, i){
        super(), this._explorerOrchestratorCacheService = e, this._workspacesService = n, this._workspaceMetadataService = i, this._workspaceExplorerProviders = new Map, this._remoteExplorerItems = new ca([]), this._remoteExplorerItemsByWorkspace = new Map, this.remoteExplorerItems = this._remoteExplorerItems, this._loadedWorkspaceCacheKeys = new Set, this._workspaceCacheKeysInFlight = new Set, this._loadedRemoteAuthorityCacheKeys = new Set, this._remoteAuthorityCacheKeysInFlight = new Set, this._cacheHydrationPromises = new Map, this._enabled = t.isGlass === !0;
    }
    registerExplorerProvider(t, e) {
        if (!this._enabled) return Pn(()=>{});
        const n = this._toRemoteAuthorityCacheKey(this._getRemoteAuthority(t));
        return this._workspaceExplorerProviders.set(t, e), this._fetchRemoteAuthorityIfNeeded(t, e), Pn(()=>{
            if (this._workspaceExplorerProviders.get(t) === e) {
                this._workspaceExplorerProviders.delete(t);
                const r = this._toWorkspaceItemsKey(t);
                this._remoteExplorerItemsByWorkspace.delete(r), this._loadedWorkspaceCacheKeys.delete(r), this._workspaceCacheKeysInFlight.delete(r), this._cacheHydrationPromises.delete(r), this._hasExplorerProviderForRemoteAuthority(n) || (this._loadedRemoteAuthorityCacheKeys.delete(n), this._remoteAuthorityCacheKeysInFlight.delete(n)), this._updateRemoteExplorerItems();
            }
        });
    }
    getRemoteExplorerItemsForOrigin(t) {
        const e = sf(t);
        return new T4e([
            this._remoteExplorerItems
        ], (n)=>!this._enabled || e.length === 0 ? [] : n.flatMap((i)=>{
                const r = Array.from(i.remotes).filter((s)=>this._remoteMatchesNormalizedGitOrigin(s, e)).map((s)=>({
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
    _remoteMatchesNormalizedGitOrigin(t, e) {
        return (t.fetchUrl ?? "") === e ? !0 : (t.pushUrl ?? "") === e;
    }
    _getRemoteAuthority(t) {
        return sw(this._workspaceMetadataService, t);
    }
    _getWorkspaceRoot(t) {
        if ($l(t)) return t.uri;
        if (Ah(t)) return Mc(t.configPath);
    }
    _toWorkspaceItemsKey(t) {
        return t.id;
    }
    _toRemoteAuthorityCacheKey(t) {
        return t && t.length > 0 ? t : "local";
    }
    _toRepositoryUri(t, e, n) {
        if (t) return Tmr(t, n);
        if (e.length === 0) return EC.isAbsolute(n) ? rt.file(n) : void 0;
        if (n.startsWith("/")) return rt.from({
            scheme: "vscode-remote",
            authority: e,
            path: n
        });
    }
    async _toRemoteExplorerItems(t, e, n) {
        const i = this._getWorkspaceRoot(t);
        return (await Promise.all(n.map(async (s)=>{
            const o = this._toRepositoryUri(i, e, s.path);
            if (!o) return;
            const a = await this._workspacesService.getSingleFolderWorkspaceIdentifier(o);
            if (a) return {
                workspaceId: a.id,
                remoteAuthority: e,
                path: s.path,
                displayPath: s.displayPath,
                remotes: new Set(s.remotes.map(Obg))
            };
        }))).filter((s)=>s !== void 0);
    }
    _setWorkspaceItems(t, e) {
        this._remoteExplorerItemsByWorkspace.set(t, e), this._updateRemoteExplorerItems();
    }
    _isProviderRegistrationActive(t, e) {
        return this._workspaceExplorerProviders.get(t) === e;
    }
    _hasExplorerProviderForRemoteAuthority(t) {
        for (const e of this._workspaceExplorerProviders.keys())if (this._toRemoteAuthorityCacheKey(this._getRemoteAuthority(e)) === t) return !0;
        return !1;
    }
    async _setWorkspaceItemsForRemoteAuthority(t, e, n) {
        for (const i of this._workspaceExplorerProviders.keys()){
            if (this._toRemoteAuthorityCacheKey(this._getRemoteAuthority(i)) !== t) continue;
            const r = this._toWorkspaceItemsKey(i), s = await this._toRemoteExplorerItems(i, e, n);
            this._workspaceExplorerProviders.has(i) && (this._setWorkspaceItems(r, s), this._loadedWorkspaceCacheKeys.add(r));
        }
    }
    _updateRemoteExplorerItems() {
        this._remoteExplorerItems.set(Array.from(this._remoteExplorerItemsByWorkspace.values()).flat());
    }
    _isCachePayloadStale(t) {
        return !Number.isFinite(t) || t <= 0 ? !0 : Date.now() - t > o9e._CACHE_STALE_AFTER_MS;
    }
    async _hydrateWorkspaceCacheIfNeeded(t, e, n) {
        let i = this._cacheHydrationPromises.get(e);
        i || (i = (async ()=>{
            const r = await this._explorerOrchestratorCacheService.loadWorkspaceRemoteExplorerItems(n);
            r && (this._setWorkspaceItems(e, await this._toRemoteExplorerItems(t, r.remoteAuthority, r.repositories)), this._isCachePayloadStale(r.savedAtMs) || (this._loadedWorkspaceCacheKeys.add(e), this._loadedRemoteAuthorityCacheKeys.add(n)));
        })().catch((r)=>{
            console.error("[ExplorerOrchestratorService] cache hydration failed", {
                workspaceItemsKey: e,
                cacheStorageKey: n,
                error: r
            });
        }), this._cacheHydrationPromises.set(e, i)), await i;
    }
    _fetchRemoteAuthorityIfNeeded(t, e) {
        if (!this._enabled) return;
        const n = this._getRemoteAuthority(t), i = h2(n), r = n ?? "", s = this._toWorkspaceItemsKey(t), o = this._toRemoteAuthorityCacheKey(n);
        i || this._fetchWorkspaceRepositoriesIfNeeded({
            workspaceIdentifier: t,
            providerCallback: e,
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
    async _fetchWorkspaceRepositoriesIfNeeded({ workspaceIdentifier: t, providerCallback: e, workspaceItemsKey: n, cacheStorageKey: i, itemRemoteAuthority: r }) {
        if (await this._hydrateWorkspaceCacheIfNeeded(t, n, i), !this._isProviderRegistrationActive(t, e) || this._loadedWorkspaceCacheKeys.has(n) || this._workspaceCacheKeysInFlight.has(n) || this._loadedRemoteAuthorityCacheKeys.has(i) || this._remoteAuthorityCacheKeysInFlight.has(i)) return;
        this._workspaceCacheKeysInFlight.add(n), this._remoteAuthorityCacheKeysInFlight.add(i);
        const s = new El, o = e({
            maxDepth: o9e._SCAN_MAX_DEPTH
        }, s.token);
        let a;
        const l = new Promise((c, u)=>{
            a = setTimeout(()=>{
                s.cancel(), u(new Error(`Explorer provider warmup timed out after ${o9e._FETCH_TIMEOUT_MS}ms`));
            }, o9e._FETCH_TIMEOUT_MS);
        });
        try {
            const c = await Promise.race([
                o,
                l
            ]);
            if (!this._isProviderRegistrationActive(t, e) && !this._hasExplorerProviderForRemoteAuthority(i) || (await this._setWorkspaceItemsForRemoteAuthority(i, r, c), !this._hasExplorerProviderForRemoteAuthority(i))) return;
            this._loadedRemoteAuthorityCacheKeys.add(i), this._explorerOrchestratorCacheService.saveWorkspaceRemoteExplorerItems(i, {
                remoteAuthority: r,
                sourceWorkspaceId: t.id,
                repositories: c.map((u)=>({
                        path: u.path,
                        displayPath: u.displayPath,
                        remotes: u.remotes.map(Obg)
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
}, o9e._FETCH_TIMEOUT_MS = 15e3, o9e._CACHE_STALE_AFTER_MS = 1440 * 60 * 1e3, o9e._SCAN_MAX_DEPTH = 4, o9e = Re([
    F(0, ps),
    F(1, Bas),
    F(2, lN),
    F(3, Qg)
], o9e), bn(BAn, o9e, 1, 1);

}
