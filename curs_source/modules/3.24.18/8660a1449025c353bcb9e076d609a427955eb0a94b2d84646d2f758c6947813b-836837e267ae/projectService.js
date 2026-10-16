import { Qe, da, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Mal, Nal, Ncg, tMe } from "./Sol.js";
import { BIi, Bbg, C0k, Cdl, D0k, E0k, Edl, Gbg, I0k, JS, Jbg, P0k, Tdl, UAn, Uas, Vbg, WAn, eyg, fVt, jAn, kdl, nyg, qbg, x0k, y0k } from "./Ycg.js";
import { Ry } from "./agentRepositoryService.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { kl } from "./browser.ts";
import { Ale } from "./canonicalWorkspaceIdentifier.js";
import { Lk, Nw } from "./cloudEnvironmentTemplateService.js";
import { rU } from "./cloudProjects.js";
import { wS } from "./displayHelpers.js";
import { BAn, FIi } from "./explorerOrchestratorService.js";
import { Ubg } from "./explorerSuggestedProjects.js";
import { Rn } from "./extensions.js";
import { brk } from "./gYa.js";
import { It } from "./instantiation.js";
import { YGr, iP1, upe } from "./ipa.js";
import { ub } from "./localAgentRepository.js";
import { Ji, Li } from "./log.js";
import { CIi, dVt } from "./microtaskBatcher.js";
import { Ki } from "./network.js";
import { MB } from "./pathUtils.js";
import { Ul } from "./path_2.js";
import { Kf, T4e, ca } from "./reactive.js";
import { HIi } from "./recentlyOpenedWorkspaceProjects.js";
import { rEt } from "./repoAssociation.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr } from "./workspace.js";
import { Kbg } from "./workspaceMetadataCandidates.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { HM, lN } from "./workspaces.js";
var Idl, xdl, ryg, Jbe, $as;
export { $as, Idl, Jbe, ryg, xdl };
var __wakaru_L__initialized = false;
export function L_() {
if (__wakaru_L__initialized) return;
__wakaru_L__initialized = true;
"use strict";
E(), kl(), Qe(), Ki(), Ul(), Lr(), fn(), Rn(), It(), Ji(), ub(), Sr(), HM(), Nw(), FIi(), Ry(), wS(), Kf(), wl(), Lh(), rU(), rEt(), Ubg(), CIi(), HIi(), MB(), Ale(), Kbg(), Idl = 1008 * 60 * 60 * 1e3, xdl = new WeakMap, ryg = 3, Jbe = Il("projectService"), $as = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this.agentRepositoryService = t, this.cloudEnvironmentTemplateService = e, this.explorerOrchestratorService = n, this.workspaceMetadataService = i, this.workspacesService = r, this.logService = s, this._recentlyOpenedWorkspaceProjects = new ca([]), this._recentlyOpenedRefreshGeneration = 0;
        let o = [];
        const a = new ca([]), l = this._register(new da), c = ()=>{
            const p = this.agentRepositoryService.agents.value, g = Date.now() - Idl, f = Jbg(p, g), _ = nyg(p, g), b = [
                ...f,
                ..._
            ];
            b.sort((y, S)=>(S.lastUsedAt ?? 0) - (y.lastUsedAt ?? 0)), o = D0k(o, b), a.set(o);
        }, u = this._register(new dVt(()=>"recompute", ()=>c())), d = ()=>{
            u.schedule(void 0);
        }, h = (p)=>{
            const g = new Set(p.map((f)=>f.id));
            for (const [f] of l)g.has(f) || l.deleteAndDispose(f);
            for (const f of p)l.has(f.id) || l.set(f.id, f.trackedGitRepos.onChange(()=>d()));
        };
        h(this.agentRepositoryService.agents.value), c(), this._register(this.agentRepositoryService.agents.onChange((p)=>{
            h(p), d();
        })), this.projects = a, this.settingsWorkspaceProjects = this._register(new T4e([
            this.projects,
            this._recentlyOpenedWorkspaceProjects
        ], (p, g)=>y0k(p, g))), this._register(this.workspacesService.onDidChangeRecentlyOpened(()=>void this._refreshRecentlyOpenedWorkspaceProjects())), this._register(this.workspaceMetadataService.onDidChangeMetadata(()=>void this._refreshRecentlyOpenedWorkspaceProjects())), this._refreshRecentlyOpenedWorkspaceProjects();
    }
    getProjectSiblingSections({ selectedTarget: t }) {
        const e = WAn(t, this.workspaceMetadataService), n = fVt(e);
        if (n === void 0) return {
            primarySiblings: [],
            suggestedSiblings: [],
            cloudAvailability: {
                status: "no_repo"
            }
        };
        const i = this.cloudEnvironmentTemplateService.data.value.githubRepos, r = t !== void 0 && YGr(t) ? brk(this.workspaceMetadataService.getMetadata(t.id)) : [], s = e.length !== 1 ? [] : this.workspaceMetadataService.getAllMetadata().flatMap((K)=>K.trackedGitRepos).map(UAn).filter((K)=>K.some((V)=>fVt([
                    V
                ]) === n)).flat(), o = {
            repoUrls: e,
            githubNodeId: t?.type === "gitRepo" ? t.mirrorGithubNodeId?.trim() || t.scmRepoNodeId?.trim() : void 0
        }, a = new Set([
            n,
            ...BIi(o, i)
        ]), l = e.length > 1 ? jAn(o, i) : [
            ...new Set([
                ...jAn(o, i),
                ...r,
                ...s
            ].flatMap((K)=>jAn({
                    repoUrls: [
                        K
                    ]
                }, i)))
        ];
        if (e.length === 1) for (const K of l){
            const V = fVt([
                K
            ]);
            V !== void 0 && a.add(V);
        }
        const c = (K)=>{
            const V = C0k(K);
            if (!(V === void 0 || !a.has(V))) return {
                type: "workspace",
                project: K
            };
        }, u = this.workspaceMetadataService.getAllMetadata().map((K)=>Uas(K)).filter((K)=>K !== void 0), d = u.filter((K)=>K.worktreePath !== void 0), h = new Map(u.map((K)=>[
                K.workspaceIdentifier.id,
                K
            ])), p = (K)=>h.get(K.workspaceIdentifier.id) ?? K, g = [], f = [], _ = new Set, b = new Set, y = (K, V)=>{
            const Y = P0k(K, V, t, this.workspaceMetadataService);
            if (Y === "skip") return;
            const J = c(K);
            if (!J) return;
            const Q = Tdl(K);
            if (Y === "primary") {
                if (_.has(Q)) return;
                _.add(Q), g.push(J);
                return;
            }
            _.has(Q) || b.has(Q) || (b.add(Q), f.push(J));
        }, S = (K, V)=>y(p(K), V);
        for (const K of this.projects.value)JS(K) && S(K, "primary");
        for (const K of this._recentlyOpenedWorkspaceProjects.value)S(K, "primary");
        const k = Bbg(this.explorerOrchestratorService.remoteExplorerItems.value);
        for (const K of d)y(K, "suggested");
        for (const K of k)S(K, "suggested");
        for (const K of u)Cdl(K) && y(K, "suggested");
        if (g.length === 0 && f.length === 0) {
            const V = (e.length > 1 ? [
                e
            ] : l.map((te)=>[
                    te
                ])).flatMap((te)=>Vbg(this.workspaceMetadataService, te)), Y = [], J = [];
            for (const te of V){
                let ee, re;
                for (const ie of te.candidates){
                    const oe = Gbg(ie.metadata, ie.workspaceIdentifier);
                    if (!oe) continue;
                    const se = Edl(oe, t, this.workspaceMetadataService);
                    se === "primary" && !ee ? ee = oe : se === "suggested" && !re && (re = oe);
                }
                ee ? Y.push(ee) : re && J.push(re);
            }
            const Q = [
                ...Y.map((te)=>({
                        project: te,
                        placement: "primary"
                    })),
                ...J.map((te)=>({
                        project: te,
                        placement: "suggested"
                    }))
            ].slice(0, ryg);
            for (const { project: te, placement: ee } of Q)y(te, ee);
        }
        const C = [
            ...g
        ], T = new Set(l), I = this.cloudEnvironmentTemplateService.data.value, A = tMe(I), P = e.length > 1 ? I0k(A, e) : Ncg(A, a);
        for (const K of P)C.push({
            type: "cloud",
            template: K
        });
        const M = E0k(e), O = iP1({
            allowOriginRepos: M,
            selectedTargetRepoUrls: T,
            cloudProjectRepoKeys: Nal(A)
        }), N = eyg(e), U = I.gitRepoFetchedAuthEpoch !== null && I.gitRepoFetchedAuthEpoch === I.gitRepoAuthEpoch, j = I.gitRepoFetchFailedAuthEpoch !== null && I.gitRepoFetchFailedAuthEpoch === I.gitRepoAuthEpoch, $ = (()=>{
            if (I.githubConnected === !1 && N !== void 0 && O.status !== "available") return {
                status: "needs_github_connect",
                repoUrl: N
            };
            if (!U && N !== void 0 && O.status !== "available") return j ? {
                status: "github_access_check_failed",
                repoUrl: N
            } : {
                status: "checking_github_access",
                repoUrl: N
            };
            if (O.status !== "available" && this.cloudEnvironmentTemplateService.lookUpGitReposMissingFromCatalog(e)) {
                const K = e.find((V)=>this.cloudEnvironmentTemplateService.isGitRepoLookupPending(V));
                if (K !== void 0) return {
                    status: "checking_github_access",
                    repoUrl: K
                };
                if (O.status === "needs_github_connect") return {
                    status: "repo_not_accessible",
                    repoUrl: O.repoUrl
                };
            }
            return O;
        })(), H = $.status === "available", G = $.status === "needs_github_connect" || $.status === "repo_not_accessible" ? $.repoUrl : void 0;
        if (!C.some((K)=>K.type === "cloud")) {
            const K = I.githubConnected === !1 ? x0k(A) : A, V = M ? Mal(l, K, {
                mirrorGithubNodeId: o.githubNodeId
            }) : void 0;
            if (V !== void 0) C.push({
                type: "cloud",
                template: V
            });
            else {
                const Y = H ? l.find(upe) : G;
                Y && C.push({
                    type: "cloud",
                    template: {
                        type: "gitRepo",
                        name: Y,
                        url: Y
                    }
                });
            }
        }
        return {
            primarySiblings: C,
            suggestedSiblings: f,
            cloudAvailability: $
        };
    }
    async _refreshRecentlyOpenedWorkspaceProjects() {
        const t = ++this._recentlyOpenedRefreshGeneration;
        try {
            const e = await this.workspacesService.getRecentlyOpened(), n = kdl(this.workspaceMetadataService), i = await qbg(this.workspacesService, e, n);
            if (t !== this._recentlyOpenedRefreshGeneration) return;
            this._recentlyOpenedWorkspaceProjects.set([
                ...i.values()
            ]);
        } catch (e) {
            if (t !== this._recentlyOpenedRefreshGeneration) return;
            this.logService.warn("[ProjectService] Failed to refresh recently opened workspaces.", e), this._recentlyOpenedWorkspaceProjects.set([]);
        }
    }
}, $as = Re([
    F(0, ma),
    F(1, Lk),
    F(2, BAn),
    F(3, Qg),
    F(4, lN),
    F(5, Li)
], $as), bn(Jbe, $as, 1, 1);

}
