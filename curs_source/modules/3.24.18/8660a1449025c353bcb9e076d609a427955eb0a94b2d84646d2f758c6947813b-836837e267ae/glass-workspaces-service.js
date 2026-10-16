import { kb } from "./Aeg.js";
import { MKe, YFw, ezf, fLi, tzf } from "./BA.js";
import { Nt, Qe, st } from "./Iwo.js";
import { Ah, bn } from "./SZu.js";
import { JS, Pat, Rle, cC, kdl, qbg, see, vVk, w0k } from "./Ycg.js";
import { Ry } from "./agentRepositoryService.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { Ale } from "./canonicalWorkspaceIdentifier.js";
import { wS } from "./displayHelpers.js";
import { Rn } from "./extensions.js";
import { sle, sw } from "./gYa.js";
import { Kme, XTe } from "./glass-active-workspace-service.js";
import { Zu, eu } from "./glass-log-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { SOn, TFi } from "./glass-window-identity-service.js";
import { xd } from "./glass-workspace-context-service.js";
import { OG, pU } from "./glass-workspaces-management-service.js";
import { iD, pce } from "./glass-workspaces-service.contract.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { YX } from "./group-agents.js";
import { iv, zo } from "./index_16.js";
import { ub } from "./localAgentRepository.js";
import { Hkv, Ty0, Vkv, kOn, ky0, mZl, pZl, qkv, wy0 } from "./ofv.js";
import { FBe } from "./project-removal.js";
import { L_ } from "./projectService.js";
import { Kf, ca } from "./reactive.js";
import { HIi } from "./recentlyOpenedWorkspaceProjects.js";
import { ZVe } from "./repo-group-key.js";
import { VX } from "./resolved-project-source.js";
import { Vd, dv } from "./storage-keys.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { cm } from "./workspace-helpers.js";
import { Cu, ey } from "./workspaceCollectionService.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
var MRs, DRs, NRs, fZl, Kkv, Ykv, Xkv, Zkv, vZl, _Zl, LRs;
export { DRs, Kkv, LRs, MRs, NRs, Xkv, Ykv, Zkv, _Zl, fZl, vZl };
var __wakaru_Jme_initialized = false;
export function Jme() {
if (__wakaru_Jme_initialized) return;
__wakaru_Jme_initialized = true;
"use strict";
E(), OG(), iv(), Qe(), fn(), Rn(), ub(), xd(), wl(), L_(), HIi(), Ry(), wS(), Hv(), Kf(), Cu(), Ale(), Lh(), dv(), YX(), FBe(), ZVe(), VX(), cm(), XTe(), pce(), Zu(), xc(), TFi(), pce(), MRs = Vd.ADDITIONAL_PROJECTS, DRs = Vd.REMOVED_PROJECTS, NRs = Vd.REMOVED_RECENT_PROJECTS, fZl = zo.object({}).catchall(zo.unknown()), Kkv = zo.union([
    zo.object({
        id: zo.string(),
        uri: fZl
    }),
    zo.object({
        id: zo.string(),
        configPath: fZl
    }),
    zo.object({
        id: zo.string()
    })
]), Ykv = zo.object({
    type: zo.literal("workspace"),
    id: zo.string(),
    name: zo.string(),
    lastUsedAt: zo.number().finite().optional(),
    remoteAuthority: zo.string().optional(),
    repoUrls: zo.array(zo.string()).optional(),
    displayPath: zo.string().optional(),
    workspaceIdentifier: Kkv
}), Xkv = zo.object({
    type: zo.literal("repo"),
    id: zo.string(),
    name: zo.string(),
    lastUsedAt: zo.number().finite().optional(),
    repoUrls: zo.array(zo.string()).min(1),
    scope: zo.string().optional()
}), Zkv = zo.discriminatedUnion("type", [
    Ykv,
    Xkv
]), vZl = "repo", _Zl = "cloud", LRs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this._workspacesService = t, this._workspaceMetadataService = e, this._storageService = n, this._logService = i, this._agentRepositoryService = r, this._workspaceCollectionService = s, this._glassActiveWorkspaceService = o, this._glassActiveAgentService = a, this._windowIdentityService = l, this._recentlyOpenedWorkspaceProjects = new ca([]), this.recentlyOpenedWorkspaceProjects = this._recentlyOpenedWorkspaceProjects, this._refreshGeneration = 0, this._sidebarProjects = new ca(this._readStoredProjects()), this.sidebarProjects = this._sidebarProjects, this._removedProjects = new ca(this._readRemovedProjects()), this.removedProjects = this._removedProjects, this._removedRecentProjects = new ca(this._readRemovedRecentProjects()), this.removedRecentProjects = this._removedRecentProjects, this._register(this._workspacesService.onDidChangeRecentlyOpened(()=>this.refresh())), this._register(this._workspaceMetadataService.onDidChangeMetadata(()=>this.refresh()));
        const c = this._register(new Nt), u = this._storageService.onDidChangeValue(io.APPLICATION, MRs, c);
        c.add(u(()=>this.refresh()));
        const d = this._storageService.onDidChangeValue(io.APPLICATION, DRs, c);
        c.add(d(()=>this.refresh()));
        const h = this._storageService.onDidChangeValue(io.APPLICATION, NRs, c);
        c.add(h(()=>this.refresh())), this.refresh();
    }
    addProject(t) {
        this._addProject(t, !0);
    }
    replaceWorkspaceProject(t) {
        const { project: e, replaces: n } = t, i = this._readStoredProjects(), r = e.workspaceIdentifier.id, s = n !== void 0 && n.workspaceIdentifier.id !== r ? n.workspaceIdentifier.id : void 0;
        let o = !1;
        const a = [];
        for (const l of i)if (!(s !== void 0 && JS(l) && l.workspaceIdentifier.id === s)) {
            if (JS(l) && l.workspaceIdentifier.id === r) {
                o = !0, a.push(cC(e.workspaceIdentifier, {
                    lastUsedAt: l.lastUsedAt ?? Date.now(),
                    remoteAuthority: e.remoteAuthority ?? l.remoteAuthority,
                    repoUrls: e.repoUrls ?? l.repoUrls,
                    displayPath: e.displayPath ?? l.displayPath
                }));
                continue;
            }
            a.push(l);
        }
        o || a.unshift(cC(e.workspaceIdentifier, {
            lastUsedAt: Date.now(),
            remoteAuthority: e.remoteAuthority,
            repoUrls: e.repoUrls,
            displayPath: e.displayPath
        })), this._writeStoredProjects(a), this._sidebarProjects.set(a), this.refresh();
    }
    recordProjectActivity(t) {
        this._addProject(t, !1);
    }
    _addProject(t, e) {
        const n = fLi(t);
        if (JS(n) && !Pat(n)) {
            const y = this._workspaceMetadataService.getMetadata(n.workspaceIdentifier)?.worktreeInfo?.cursorManagedWorktreeRepoUrl;
            y && this._addProject(Rle([
                y
            ], Date.now()), e);
            return;
        }
        const i = Date.now(), r = JS(n) ? this._workspaceMetadataService.getMetadata(n.workspaceIdentifier) : void 0, s = r ? sle(r) : [], o = JS(n) ? cC(n.workspaceIdentifier, {
            lastUsedAt: i,
            remoteAuthority: n.remoteAuthority ?? this._getRemoteAuthorityForWorkspaceIdentifier(n.workspaceIdentifier),
            repoUrls: s.length > 0 ? [
                ...s
            ] : n.repoUrls,
            displayPath: r?.displayPath ?? n.displayPath
        }) : Rle(n.repoUrls, i), a = t.type === "logicalEnvironment" || t.type === "cloudBucket" ? t : o;
        e && this._clearRemovedRecentProjectsFor(o);
        const l = this._readRemovedProjects(), c = this._agentRepositoryService.agents.value.filter((b)=>qkv(b, o)), u = e ? YFw(a, l, c) : l, d = u.length < l.length, h = e ? u : [], p = c.filter((b)=>!h.some((y)=>ezf(y, b))), g = p.some((b)=>Ty0(b, o)), f = JS(o) && Ah(o.workspaceIdentifier);
        if (!f && !d && g) return;
        if (!f && d && p.length > 0) {
            this._writeRemovedProjects(u), this._removedProjects.set(u), this.refresh();
            return;
        }
        const _ = [
            o,
            ...this._readStoredProjects().filter((b)=>!w0k(b, o))
        ];
        this._writeStoredProjects(_), this._writeRemovedProjects(u), this._sidebarProjects.set(_), this._removedProjects.set(u), this.refresh();
    }
    removeProject(t) {
        const e = this._readStoredProjects(), n = this._readRemovedProjects(), { nextProjects: i, nextRemovedProjects: r } = tzf(e, n, t);
        i.length === e.length && Vkv(r, n) || (this._writeStoredProjects(i), this._writeRemovedProjects(r), this._sidebarProjects.set(i), this._removedProjects.set(r), this.refresh());
    }
    removeProjectFromRecents(t) {
        const e = this._readRemovedRecentProjects(), { nextRemovedProjects: n } = tzf([], e, t);
        this._writeRemovedRecentProjects(n), this._removedRecentProjects.set(n);
    }
    restoreProjectToRecents(t) {
        this._clearRemovedRecentProjectsFor(t);
    }
    _clearRemovedRecentProjectsFor(t) {
        const e = this._readRemovedRecentProjects(), n = e.filter((i)=>!MKe(t, i));
        n.length !== e.length && (this._writeRemovedRecentProjects(n), this._removedRecentProjects.set(n));
    }
    refresh() {
        this._refreshProjects();
    }
    _publishIfChanged(t, e) {
        Vkv(t.value, e) || t.set(e);
    }
    getWorkspaceRepoUrls(t) {
        for (const n of this._recentlyOpenedWorkspaceProjects.value)if (n.workspaceIdentifier.id === t.id) return n.repoUrls ?? [];
        for (const n of this._sidebarProjects.value)if (JS(n) && n.workspaceIdentifier.id === t.id) return n.repoUrls ?? [];
        const e = this._workspaceMetadataService.getMetadata(t);
        return [
            ...sle(e)
        ];
    }
    findMaterializedLocalWorkspace(t, e, n) {
        const i = [];
        for (const r of this._workspaceCollectionService.getMaterializedWorkspaceIdentifiers()){
            if (!Hkv(r, this._windowIdentityService) || n?.includeCursorManagedWorktrees !== !0 && see(r)) continue;
            const s = this.getWorkspaceRepoUrls(r);
            t(r, s) && i.push({
                workspace: r,
                isLocal: sw(this._workspaceMetadataService, r) === void 0
            });
        }
        return vVk(i, e);
    }
    getFallbackWorkspaceIdentifier() {
        const t = this._glassActiveAgentService.getActiveAgentId(), e = t ? this._agentRepositoryService.getAgentHeader(t)?.environment.value : void 0;
        for (const n of [
            e,
            this._glassActiveWorkspaceService.getActiveWorkspaceIdentifier(),
            this._glassActiveWorkspaceService.getPreferredWorkspaceIdentifier(),
            this._agentRepositoryService.getEmptyStateDraft().workspaceIdentifier
        ])if (Hkv(n, this._windowIdentityService) && !see(n)) return n;
    }
    async _refreshProjects() {
        const t = ++this._refreshGeneration;
        try {
            const e = await this._workspacesService.getRecentlyOpened(), n = kdl(this._workspaceMetadataService), i = await qbg(this._workspacesService, e, n);
            if (t !== this._refreshGeneration) return;
            const r = [];
            for (const s of this._readStoredProjects()){
                if (!JS(s)) {
                    r.push(s);
                    continue;
                }
                if (kb(s.workspaceIdentifier)) continue;
                const o = n.get(s.workspaceIdentifier.id), a = o ? sle(o) : [], l = cC(s.workspaceIdentifier, {
                    lastUsedAt: s.lastUsedAt,
                    remoteAuthority: s.remoteAuthority ?? this._getRemoteAuthorityForWorkspaceIdentifier(s.workspaceIdentifier),
                    repoUrls: a.length > 0 ? [
                        ...a
                    ] : s.repoUrls,
                    displayPath: o?.displayPath ?? s.displayPath,
                    worktreeRetentionPolicy: o?.worktreeInfo?.isWorktree === !0 ? "taskScoped" : void 0
                });
                l && Pat(l) && r.push(l);
            }
            this._publishIfChanged(this._recentlyOpenedWorkspaceProjects, [
                ...i.values()
            ]), this._publishIfChanged(this._sidebarProjects, r), this._publishIfChanged(this._removedProjects, this._readRemovedProjects()), this._publishIfChanged(this._removedRecentProjects, this._readRemovedRecentProjects());
        } catch (e) {
            if (t !== this._refreshGeneration) return;
            this._logService.warn("[GlassWorkspacesService] Failed to refresh recently opened workspaces.", e);
        }
    }
    _normalizeRemoteAuthority(t) {
        return t || void 0;
    }
    _getRemoteAuthorityForWorkspaceIdentifier(t) {
        return this._normalizeRemoteAuthority(sw(this._workspaceMetadataService, t));
    }
    _readStoredProjects() {
        return mZl(this._storageService.get(MRs, io.APPLICATION), pZl);
    }
    _writeStoredProjects(t) {
        this._storeJson(MRs, t.map(kOn));
    }
    _readRemovedProjects() {
        return mZl(this._storageService.get(DRs, io.APPLICATION), wy0);
    }
    _writeRemovedProjects(t) {
        this._storeJson(DRs, t.map(ky0));
    }
    _readRemovedRecentProjects() {
        return mZl(this._storageService.get(NRs, io.APPLICATION), pZl);
    }
    _writeRemovedRecentProjects(t) {
        this._storeJson(NRs, t.map(kOn));
    }
    _storeJson(t, e) {
        this._storageService.store(t, JSON.stringify(e), io.APPLICATION, Wg.USER);
    }
}, LRs = Re([
    F(0, pU),
    F(1, Qg),
    F(2, Nu),
    F(3, eu),
    F(4, ma),
    F(5, ey),
    F(6, Kme),
    F(7, vm),
    F(8, SOn)
], LRs), bn(iD, LRs, 1, 1);

}
