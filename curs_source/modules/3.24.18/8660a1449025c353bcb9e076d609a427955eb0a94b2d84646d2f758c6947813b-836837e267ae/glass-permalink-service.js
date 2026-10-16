import { Gt, N1, Qe, da, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { txi } from "./Ycg.js";
import { Rn } from "./extensions.js";
import { Jv, hy } from "./gitContextService.js";
import { aw, vN } from "./glass-context-key-service.js";
import { IRt, VQt } from "./glass-scm-service.js";
import { Gv, dNl } from "./glassContextKeys.js";
import { $at } from "./index_18.ts";
import { It } from "./instantiation.js";
import { b6 } from "./ipa.js";
import { Jc } from "./observable.js";
import { Uqe } from "./repoUtils.js";
import { Iu, Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Zo, t6 } from "./ze.js";
var E6i, Jut;
export { E6i, Jut };
var __wakaru_$Ps_initialized = false;
export function $Ps() {
if (__wakaru_$Ps_initialized) return;
__wakaru_$Ps_initialized = true;
"use strict";
E(), VQt(), $at(), Gt(), Qe(), Jc(), Lr(), fn(), aw(), Rn(), It(), Uqe(), hy(), Gv(), E6i = jn("glassPermalinkService"), Jut = class extends st {
    constructor(t, e, n){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._cachedRepositoryLinkData = new Map, this._repositoryListeners = this._register(new da), this._refreshingRepositoryIds = new Set, this._gitContextService = t, this._scmService = e, this._remoteFileLinkAvailableKey = n.bindContextKey(dNl), this._registerRefreshListeners(), this._initialize();
    }
    resolveRemoteFileUrl(t, e) {
        if (!t) return;
        let n;
        try {
            n = rt.parse(t);
        } catch  {
            return;
        }
        const i = this._scmService.getRepository(n);
        if (!i || i.provider.contextValue !== "git" || !i.provider.rootUri) return;
        const r = Iu.relativePath(i.provider.rootUri, n);
        if (!r) return;
        const s = this._cachedRepositoryLinkData.get(i.id);
        if (!s) {
            this._queueRepositoryRefresh(i);
            return;
        }
        return Jut._buildRemoteFileUrl({
            remoteUrl: s.remoteUrl,
            revision: s.revision,
            relativeFilePath: r,
            lineRange: e
        });
    }
    _registerRefreshListeners() {
        this._register(this._scmService.onDidAddRepository((t)=>{
            t.provider.contextValue === "git" && (this._trackRepository(t), this._queueRepositoryRefreshAndNotify(t));
        })), this._register(this._scmService.onDidRemoveRepository((t)=>{
            t.provider.contextValue === "git" && (this._untrackRepository(t), this._deleteCachedRepositoryLinkData(t.id));
        }));
        for (const t of this._scmService.repositories)this._trackRepository(t);
    }
    async _initialize() {
        try {
            await this._gitContextService.waitForGitContextProvider();
        } catch  {
            return;
        }
        this._queueAllRepositoryRefreshes();
    }
    _trackRepository(t) {
        if (t.provider.contextValue !== "git" || this._repositoryListeners.has(t.id)) return;
        const e = Zo((a)=>{
            const c = t.provider.historyProvider.read(a)?.historyItemRemoteRef.read(a);
            return c ? `${c.id}:${c.revision ?? ""}` : void 0;
        }), n = ()=>this._queueRepositoryRefreshAndNotify(t), i = t.provider.onDidChangeRemotes?.(n), r = t.provider.onDidChangeHistoryProvider(n), s = t6(e, n), o = N1(...[
            i,
            r,
            s
        ].filter((a)=>a !== void 0));
        this._repositoryListeners.set(t.id, o);
    }
    _untrackRepository(t) {
        this._repositoryListeners.deleteAndDispose(t.id), this._refreshingRepositoryIds.delete(t.id);
    }
    _queueRepositoryRefreshAndNotify(t) {
        this._queueRepositoryRefresh(t), this._onDidChange.fire();
    }
    _deleteCachedRepositoryLinkData(t) {
        this._cachedRepositoryLinkData.delete(t) && (this._updateRemoteFileLinkAvailableKey(), this._onDidChange.fire());
    }
    _updateRemoteFileLinkAvailableKey() {
        this._remoteFileLinkAvailableKey.set(this._cachedRepositoryLinkData.size > 0);
    }
    _queueAllRepositoryRefreshes() {
        for (const t of this._scmService.repositories)this._queueRepositoryRefresh(t);
    }
    _queueRepositoryRefresh(t) {
        t.provider.contextValue !== "git" || this._refreshingRepositoryIds.has(t.id) || (this._refreshingRepositoryIds.add(t.id), this._refreshRepositoryLinkData(t).finally(()=>{
            this._refreshingRepositoryIds.delete(t.id);
        }));
    }
    async _refreshRepositoryLinkData(t) {
        if (t.provider.contextValue !== "git" || !t.provider.rootUri) return;
        const { id: e, provider: n } = t, i = n.historyProvider.get()?.historyItemRemoteRef.get(), r = i?.id.startsWith("refs/remotes/") ? i.id.slice(13).split("/")[0] : void 0, s = r ? n.remotes?.find((l)=>l.name === r)?.fetchUrl : void 0;
        if (!s) {
            this._deleteCachedRepositoryLinkData(e);
            return;
        }
        const o = i?.revision?.trim();
        if (!o) {
            this._deleteCachedRepositoryLinkData(e);
            return;
        }
        if (!Jut._isSupportedRemoteUrl(s)) {
            this._deleteCachedRepositoryLinkData(e);
            return;
        }
        const a = this._cachedRepositoryLinkData.get(e);
        a?.remoteUrl === s && a?.revision === o || (this._cachedRepositoryLinkData.set(e, {
            remoteUrl: s,
            revision: o
        }), this._updateRemoteFileLinkAvailableKey(), this._onDidChange.fire());
    }
    static _isSupportedRemoteUrl(t) {
        const e = b6(t);
        if (!e) return !1;
        let n;
        try {
            n = new URL(e);
        } catch  {
            return !1;
        }
        return Jut._isSupportedRemoteHostname(n.hostname);
    }
    static _isSupportedRemoteHostname(t) {
        const e = t.toLowerCase();
        return e.includes("github") || e.endsWith(".ghe.com");
    }
    static _buildRemoteFileUrl(t) {
        const e = t.revision?.trim(), n = t.relativeFilePath?.replace(/^\/+|\/+$/g, "");
        if (!t.remoteUrl || !e || !n) return;
        const i = txi(t.remoteUrl);
        if (!i) return;
        const r = b6(t.remoteUrl);
        if (!r) return;
        let s;
        try {
            s = new URL(r);
        } catch  {
            return;
        }
        if (Jut._isSupportedRemoteHostname(s.hostname)) {
            if (s.pathname = `/${i}/blob/${encodeURIComponent(e)}/${Jut._encodePathSegments(n)}`, s.search = "", s.hash = "", t.lineRange) {
                const { startLine: o, endLine: a } = t.lineRange;
                s.hash = o === a ? `L${o}` : `L${o}-L${a}`;
            }
            return s.toString();
        }
    }
    static _encodePathSegments(t) {
        return t.replace(/\\/g, "/").split("/").filter(Boolean).map((e)=>encodeURIComponent(e)).join("/");
    }
    dispose() {
        this._cachedRepositoryLinkData.clear(), this._refreshingRepositoryIds.clear(), this._remoteFileLinkAvailableKey.set(!1), super.dispose();
    }
}, Jut = Re([
    F(0, Jv),
    F(1, IRt),
    F(2, vN)
], Jut), bn(E6i, Jut, 1);

}
