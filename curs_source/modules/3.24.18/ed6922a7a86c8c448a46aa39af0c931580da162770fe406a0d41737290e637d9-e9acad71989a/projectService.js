import { Ekt, sPe, u1e } from "./A3u.js";
import { Bzs, Fzs, VUi, Zyt, iMn, k$t, khv, nL, t0, y$t } from "./De_3.js";
import { T3n, aYv, fCh, gCh, pYv, tQi } from "./ECo.js";
import { Se, po, vf, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { V6 } from "./agentRepositoryService.js";
import { Kv, Rb } from "./agentRepositoryServiceTypes.js";
import { aR } from "./async.js";
import { Yu } from "./browser.ts";
import { Gjt, JDh, eMh } from "./canonicalWorkspaceIdentifier.js";
import { Jwt, jSo, o8 } from "./cgh.js";
import { lLe, z1e } from "./cloudEnvironmentTemplateService.js";
import { TCt } from "./cloudProjects.js";
import { Q3 } from "./displayHelpers.js";
import { JJi, cBn } from "./explorerOrchestratorService.js";
import { Vi_ } from "./explorerSuggestedProjects.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { B0 } from "./localAgentRepository.js";
import { Qn, Wn } from "./log.js";
import { K3n, OCt } from "./microtaskBatcher.js";
import { gt, li } from "./network.js";
import { K3 } from "./pathUtils.js";
import { Xl, ba, kO } from "./path_2.js";
import { gk, mn, pd, rp } from "./qIc.js";
import { N1, UGt, gh } from "./reactive.js";
import { iMh, rMh } from "./recentlyOpenedWorkspaceProjects.js";
import { JEo, QEo } from "./repoAssociation.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { ci } from "./workspace.js";
import { sMh } from "./workspaceMetadataCandidates.js";
import { D2, a0 } from "./workspaceMetadataService.js";
import { IA, KM } from "./workspaces.js";
import { DOn, R_o, UPe, bch, o4v, r4v } from "./xmo.js";
function Ni_(e) {
    return e.type === "gitRepo" ? e.url : e.repoUrl;
}
function Oi_(e) {
    return iMn(Fi_(e));
}
function Fi_(e) {
    switch(e.type){
        case "gitRepo":
            return Zyt(e.url) === void 0 ? e.scmRepoNodeId : e.mirrorGithubNodeId ?? e.scmRepoNodeId;
        case "team":
            return e.scmRepoNodeId;
        case "personal":
            return;
        default:
            return e;
    }
}
function lBn(e) {
    return Fzs(e) ?? t0(e);
}
function Bi_(e) {
    return [
        e.repoUrl,
        e.originRepoUrl
    ].filter((t)=>!!t);
}
function ZEo(e) {
    const t = new Map;
    for (const n of e){
        const i = lBn(n);
        i.length > 0 && !t.has(i) && t.set(i, n);
    }
    return [
        ...t.values()
    ];
}
function XDh(e) {
    const t = QEo.get(e);
    if (t !== void 0) return t;
    const n = new Map, i = new Map;
    for (const s of e){
        const o = Oi_(s);
        if (!o) continue;
        const a = Ni_(s), c = lBn(a);
        n.has(c) || n.set(c, o);
        const l = i.get(o);
        l === void 0 ? i.set(o, [
            a
        ]) : l.push(a);
    }
    const r = {
        firstGithubNodeIdByIdentity: n,
        templateRepoUrlsByGithubNodeId: i
    };
    return QEo.set(e, r), r;
}
function eer(e, t) {
    const n = ZEo(e.repoUrls), i = n.length === 1 ? lBn(n[0]) : void 0, r = iMn(e.githubNodeId) || (i === void 0 ? void 0 : XDh(t).firstGithubNodeIdByIdentity.get(i));
    return n.length !== 1 || !r ? n : ZEo([
        ...n,
        ...XDh(t).templateRepoUrlsByGithubNodeId.get(r) ?? []
    ]);
}
function Ui_(e, t) {
    const n = ZEo(e.repoUrls);
    return n.length === 0 ? [] : n.length > 1 ? [
        [
            ...n
        ].map(lBn).sort().join("|")
    ] : [
        ...new Set(eer(e, t).map(lBn).filter(Boolean))
    ];
}
function $i_(e) {
    if (e.remoteAuthority.length === 0) return Ee.file(e.path);
    const t = e.path.startsWith("/") ? e.path : `/${e.path}`;
    return Ee.from({
        scheme: "vscode-remote",
        authority: e.remoteAuthority,
        path: t
    });
}
function Hi_(e) {
    const t = new Set;
    for (const n of e.remotes)n.fetchUrl && t.add(t0(n.fetchUrl)), n.pushUrl && t.add(t0(n.pushUrl));
    return t.size > 0 ? [
        ...t
    ] : void 0;
}
function Wi_(e) {
    return `${e.remoteAuthority}
${e.path}`;
}
function Gi_(e) {
    if (e.length === 0) return [];
    const t = [
        ...new Map(e.map((i)=>[
                Wi_(i),
                i
            ])).values()
    ], n = new Map;
    for (const i of t){
        const r = {
            id: i.workspaceId,
            uri: $i_(i)
        }, s = Hi_(i), o = {
            type: "workspace",
            id: `workspace:${r.id}`,
            name: jSo(r),
            workspaceIdentifier: r,
            remoteAuthority: i.remoteAuthority || void 0,
            repoUrls: s,
            displayPath: i.displayPath || void 0
        };
        n.set(o.workspaceIdentifier.id, o);
    }
    return [
        ...n.values()
    ];
}
function exo(e) {
    return JDh.test(e);
}
function Wjt(e) {
    return e.replace(/\\/g, "/").replace(eMh, "");
}
function ji_(e) {
    const t = rp(e) ? e.uri : gk(e) ? e.configPath : void 0;
    return t?.scheme === gt.file && Wjt(t.fsPath || t.path).startsWith("/tmp/");
}
function qi_(e, { localPathsIgnoreCase: t = !vf } = {}) {
    const n = Wjt(e.fsPath || e.path);
    return t && !e.authority ? n.toLowerCase() : n;
}
function ZDh(e, t = {}) {
    const n = rp(e) ? e.uri : gk(e) ? e.configPath : void 0;
    return n ? n.scheme === gt.file ? `uri:${qi_(n, t)}` : `uri:${n.toString()}` : `id:${e.id}`;
}
function zi_(e, t) {
    if (!rp(e)) return e;
    const n = t.findCanonicalIdByFolderUri(e.uri);
    return n === void 0 ? e : {
        id: n,
        uri: e.uri
    };
}
function QDh(e) {
    try {
        if (e.folderUri) return {
            id: e.workspaceId,
            uri: Ee.parse(e.folderUri, !0)
        };
        if (e.configPath) return {
            id: e.workspaceId,
            configPath: Ee.parse(e.configPath, !0)
        };
        const t = e.paths.length === 1 ? e.paths[0]?.uri : void 0;
        return t ? {
            id: e.workspaceId,
            uri: t
        } : void 0;
    } catch  {
        return;
    }
}
function Ki_(e) {
    const t = new Map;
    for (const n of e.getAllMetadata())t.set(n.workspaceId, n);
    return t;
}
function Yi_(e) {
    if (!e) return;
    const t = R_o(e);
    return t.length > 0 ? t : void 0;
}
function Xi_(e, t) {
    if (!(t?.worktreeInfo?.isWorktree !== !0 || !rp(e))) return e.uri.fsPath || e.uri.path;
}
function txo(e, t, n) {
    if (o8(e)) return;
    const i = n?.worktreeInfo?.isWorktree === !0 ? "taskScoped" : void 0;
    return uBn(e, {
        remoteAuthority: t,
        repoUrls: Yi_(n),
        displayPath: n?.displayPath,
        worktreePath: Xi_(e, n),
        worktreeRetentionPolicy: i
    });
}
function tMh(e) {
    const t = QDh(e);
    if (t) return nMh(e, t);
}
function nMh(e, t) {
    const n = rp(t) && t.uri.authority || void 0;
    return txo(t, n, e);
}
async function Zi_(e, t, n) {
    if (Ekt(t)) {
        const { workspace: r } = t;
        return txo(r, t.remoteAuthority, n.get(r.id));
    }
    if (!u1e(t)) return;
    const i = await e.getSingleFolderWorkspaceIdentifier(t.folderUri);
    if (i) return txo(i, t.remoteAuthority ?? t.folderUri.authority, n.get(i.id));
}
async function Qi_(e, t, n, i) {
    const r = Math.max(1, i?.concurrency ?? iMh), s = new aR(r), o = await Promise.all(t.workspaces.map((c)=>s.queue(async ()=>{
            try {
                return await Zi_(e, c, n);
            } catch  {
                return;
            }
        }))), a = new Map;
    for (const c of o)!c || !Vjt(c) || a.has(c.workspaceIdentifier.id) || a.set(c.workspaceIdentifier.id, c);
    return a;
}
function Ji_(e, t) {
    const n = DOn(t);
    if (n.length === 0) return [];
    const i = new Map;
    for (const r of e.getAllMetadata()){
        if (!r4v(n, R_o(r))) continue;
        const s = QDh(r);
        if (!s) continue;
        const o = zi_(s, e), a = ZDh(o), c = {
            metadata: r,
            workspaceIdentifier: o
        }, l = i.get(a);
        l ? l.push(c) : i.set(a, [
            c
        ]);
    }
    return [
        ...i
    ].map(([r, s])=>({
            canonicalKey: r,
            candidates: s.sort((o, a)=>Number(exo(a.metadata.workspaceId)) - Number(exo(o.metadata.workspaceId)))
        }));
}
function oMh(e) {
    return e.type === "workspace";
}
function er_(e) {
    return e.type === "repo";
}
function tr_(e) {
    return `workspace:${e.id}`;
}
function uBn(e, t = {}) {
    return {
        type: "workspace",
        id: tr_(e),
        workspaceIdentifier: e,
        name: jSo(e),
        remoteAuthority: t.remoteAuthority ?? bch(e),
        repoUrls: t.repoUrls && t.repoUrls.length > 0 ? t.repoUrls : void 0,
        displayPath: t.displayPath,
        worktreePath: t.worktreePath,
        worktreeBranchName: t.worktreeBranchName,
        worktreeRetentionPolicy: t.worktreeRetentionPolicy,
        sourceRepoRootPath: t.sourceRepoRootPath,
        lastUsedAt: t.lastUsedAt
    };
}
function aMh(e) {
    if (e.worktreePath) return Ee.file(e.worktreePath);
    const { workspaceIdentifier: t } = e;
    if (rp(t)) return t.uri;
    if (gk(t)) return t.configPath;
}
function cMh(e) {
    return sPe(aMh(e));
}
function nr_(e) {
    return e.worktreeRetentionPolicy === "permanent" ? !1 : e.worktreeRetentionPolicy === "taskScoped" ? !0 : cMh(e);
}
function Vjt(e) {
    return !nr_(e);
}
function rr_(e, t) {
    const n = [], i = new Set, r = (s)=>{
        i.has(s.workspaceIdentifier.id) || !Vjt(s) || (i.add(s.workspaceIdentifier.id), n.push(s));
    };
    for (const s of e)oMh(s) && r(s);
    for (const s of t)r(s);
    return n;
}
function sr_(e, t) {
    return e.worktreePath ? !0 : t.getMetadata(e.workspaceIdentifier)?.worktreeInfo?.isWorktree === !0;
}
function or_(e) {
    return `repo:${[
        ...e
    ].sort().join(",")}`;
}
function ar_(e, t, n) {
    const i = ter(e), r = i[0] ?? e[0] ?? "", s = n?.trim();
    return {
        type: "repo",
        id: or_(i),
        repoUrls: i,
        name: s && s.length > 0 ? s : Jwt(r),
        lastUsedAt: t
    };
}
function cr_(e) {
    const t = e.targetEnvironment.type === "existing" ? e.targetEnvironment.environment : e.environment.value, n = UPe(e.trackedGitRepos.value);
    if (gk(t)) return uBn(t, {
        lastUsedAt: e.createdAt,
        repoUrls: n.length > 0 ? n : void 0
    });
    if (n.length > 0) {
        const i = n.length > 1 && e.targetEnvironment.type === "new" ? e.targetEnvironment.environment.name.trim() || "Untitled" : void 0, r = e.targetEnvironment.type === "new" ? e.targetEnvironment.environment.logicalEnvironmentId?.trim() : void 0, s = ar_(n, e.createdAt, i);
        return r ? {
            ...s,
            logicalEnvironmentId: r
        } : s;
    }
    return uBn(t, {
        lastUsedAt: e.createdAt
    });
}
function lr_(e, t) {
    const n = new Set, i = [];
    for (const r of e){
        if (r.createdAt < t || o8(r.environment.value)) continue;
        const s = r.targetEnvironment, o = s?.type === "existing" ? s.environment : r.environment.value;
        if (o8(o) || !rp(o) && !gk(o)) continue;
        const a = uBn(o, {
            lastUsedAt: r.createdAt,
            repoUrls: UPe(r.trackedGitRepos.value)
        });
        Vjt(a) && (n.has(a.id) || (n.add(a.id), i.push(a)));
    }
    return i;
}
function ter(e) {
    return [
        ...DOn(e)
    ].sort();
}
function HCt(e) {
    const t = [
        ...new Set((e ?? []).map((n)=>nL(n)).filter(Boolean))
    ].sort();
    if (t.length !== 0) return t.join("|");
}
function ur_(e, t) {
    if (!e) return [];
    const n = ter(e.repoUrls);
    if (n.length > 0) return n;
    if (!VUi(e)) return ter([
        T3n(e)
    ]);
    const i = t.getMetadata(e.id);
    return i ? ter(R_o(i)) : [];
}
function dr_(e) {
    return e.map((t)=>t0(t)).find((t)=>t.startsWith("github.com/"));
}
function hr_(e) {
    return HCt(e.repoUrls);
}
function pr_(e) {
    const t = Zyt(e);
    if (t !== void 0) return `${t.owner}/${t.name}`.toLowerCase();
    const n = t0(e), i = n.indexOf("/");
    return i === -1 ? "" : n.slice(i + 1);
}
function mr_(e) {
    const t = new Set;
    for (const n of e){
        const i = pr_(n);
        i.length > 0 && t.add(i);
    }
    return t.size <= 1;
}
function gr_(e, t) {
    let n;
    for (const i of t){
        const r = y$t(i);
        if (r.length === 0 || n !== void 0 && r !== n) return [];
        n = r;
    }
    return n === void 0 ? [] : fCh(e, n);
}
function fr_(e) {
    const t = nxo.get(e);
    if (t !== void 0) return t;
    const n = e.filter((i)=>Bzs(T3n(i)) !== "github");
    return nxo.set(e, n), n;
}
function vr_(e) {
    return ji_(e.workspaceIdentifier);
}
function _r_(e) {
    const n = Wjt(e).split("/").filter((i)=>i.length > 0);
    for(let i = 0; i < n.length - 1; i++)if (n[i].endsWith("-worktrees")) return !0;
    return !1;
}
function br_(e, t, n) {
    const i = aMh(e);
    if (!i || i.scheme !== gt.file) return !1;
    const r = i.fsPath || i.path, s = Wjt(r);
    if (sr_(e, n) && !cMh(e) || _r_(s)) return !0;
    if (s.startsWith("/tmp/")) {
        if (!t || !VUi(t)) return !0;
        const l = t.id;
        if (!rp(l) || l.uri.scheme !== gt.file) return !0;
        const u = l.uri.fsPath || l.uri.path;
        if (!u) return !0;
        const h = Wjt(u);
        return s !== h;
    }
    if (!t || !VUi(t)) return !1;
    const o = t.id;
    if (!rp(o) || o.uri.scheme !== gt.file) return !1;
    const a = o.uri.fsPath || o.uri.path;
    if (!a) return !1;
    const c = Wjt(a);
    return s === c || kO(s) !== kO(c) ? !1 : Xl(s) !== Xl(c);
}
function yr_(e) {
    return ZDh(e.workspaceIdentifier);
}
function lMh(e, t, n) {
    return Vjt(e) ? br_(e, t, n) ? "suggested" : "primary" : "skip";
}
function Sr_(e, t, n, i) {
    return t === "primary" ? lMh(e, n, i) : Vjt(e) ? "suggested" : "skip";
}
function kr_(e, t) {
    const n = new Set, i = [];
    for (const r of e){
        if (r.createdAt < t || !o8(r.environment.value) || UPe(r.trackedGitRepos.value).length === 0) continue;
        const s = cr_(r);
        !er_(s) || n.has(s.id) || (n.add(s.id), i.push(s));
    }
    return i;
}
function wr_(e, t) {
    return e === t ? !0 : !e || !t || e.length !== t.length ? !1 : e.every((n, i)=>n === t[i]);
}
function uMh(e) {
    return e.type === "repo" ? e.logicalEnvironmentId : void 0;
}
function Cr_(e, t) {
    const n = new Map(e.map((s)=>[
            s.id,
            s
        ]));
    let i = e.length !== t.length;
    const r = t.map((s, o)=>{
        const a = n.get(s.id);
        return a && a.lastUsedAt === s.lastUsedAt && a.name === s.name && wr_(a.repoUrls, s.repoUrls) && uMh(a) === uMh(s) ? (e[o] !== a && (i = !0), a) : (i = !0, s);
    });
    return i ? r : e;
}
var dMh, nxo, hMh, dBn, ner;
export { $i_, Bi_, Cr_, Fi_, Gi_, HCt, Hi_, Ji_, Ki_, Ni_, Oi_, QDh, Qi_, Sr_, Ui_, Vjt, Wi_, Wjt, XDh, Xi_, Yi_, ZDh, ZEo, Zi_, _r_, aMh, ar_, br_, cMh, cr_, dBn, dMh, dr_, eer, er_, exo, fr_, gr_, hMh, hr_, ji_, kr_, lBn, lMh, lr_, mr_, nMh, ner, nr_, nxo, oMh, or_, pr_, qi_, rr_, sr_, tMh, ter, tr_, txo, uBn, uMh, ur_, vr_, wr_, yr_, zi_ };
var __wakaru_S8e_initialized = false;
export function S8e() {
if (__wakaru_S8e_initialized) return;
__wakaru_S8e_initialized = true;
"use strict";
x(), Yu(), Se(), li(), ba(), Li(), Qt(), Pn(), Ze(), Qn(), B0(), ci(), IA(), lLe(), JJi(), V6(), Q3(), N1(), Rb(), a0(), TCt(), JEo(), Vi_(), K3n(), rMh(), K3(), Gjt(), sMh(), dMh = 1008 * 60 * 60 * 1e3, nxo = new WeakMap, hMh = 3, dBn = pd("projectService"), ner = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this.agentRepositoryService = e, this.cloudEnvironmentTemplateService = t, this.explorerOrchestratorService = n, this.workspaceMetadataService = i, this.workspacesService = r, this.logService = s, this._recentlyOpenedWorkspaceProjects = new gh([]), this._recentlyOpenedRefreshGeneration = 0;
        let o = [];
        const a = new gh([]), c = this._register(new po), l = ()=>{
            const g = this.agentRepositoryService.agents.value, f = Date.now() - dMh, v = lr_(g, f), b = kr_(g, f), y = [
                ...v,
                ...b
            ];
            y.sort((T, E)=>(E.lastUsedAt ?? 0) - (T.lastUsedAt ?? 0)), o = Cr_(o, y), a.set(o);
        }, u = this._register(new OCt(()=>"recompute", ()=>l())), h = ()=>{
            u.schedule(void 0);
        }, p = (g)=>{
            const f = new Set(g.map((v)=>v.id));
            for (const [v] of c)f.has(v) || c.deleteAndDispose(v);
            for (const v of g)c.has(v.id) || c.set(v.id, v.trackedGitRepos.onChange(()=>h()));
        };
        p(this.agentRepositoryService.agents.value), l(), this._register(this.agentRepositoryService.agents.onChange((g)=>{
            p(g), h();
        })), this.projects = a, this.settingsWorkspaceProjects = this._register(new UGt([
            this.projects,
            this._recentlyOpenedWorkspaceProjects
        ], (g, f)=>rr_(g, f))), this._register(this.workspacesService.onDidChangeRecentlyOpened(()=>void this._refreshRecentlyOpenedWorkspaceProjects())), this._register(this.workspaceMetadataService.onDidChangeMetadata(()=>void this._refreshRecentlyOpenedWorkspaceProjects())), this._refreshRecentlyOpenedWorkspaceProjects();
    }
    getProjectSiblingSections({ selectedTarget: e }) {
        const t = ur_(e, this.workspaceMetadataService), n = HCt(t);
        if (n === void 0) return {
            primarySiblings: [],
            suggestedSiblings: [],
            cloudAvailability: {
                status: "no_repo"
            }
        };
        const i = this.cloudEnvironmentTemplateService.data.value.githubRepos, r = e !== void 0 && VUi(e) ? o4v(this.workspaceMetadataService.getMetadata(e.id)) : [], s = t.length !== 1 ? [] : this.workspaceMetadataService.getAllMetadata().flatMap((Z)=>Z.trackedGitRepos).map(Bi_).filter((Z)=>Z.some((K)=>HCt([
                    K
                ]) === n)).flat(), o = {
            repoUrls: t,
            githubNodeId: e?.type === "gitRepo" ? e.mirrorGithubNodeId?.trim() || e.scmRepoNodeId?.trim() : void 0
        }, a = new Set([
            n,
            ...Ui_(o, i)
        ]), c = t.length > 1 ? eer(o, i) : [
            ...new Set([
                ...eer(o, i),
                ...r,
                ...s
            ].flatMap((Z)=>eer({
                    repoUrls: [
                        Z
                    ]
                }, i)))
        ];
        if (t.length === 1) for (const Z of c){
            const K = HCt([
                Z
            ]);
            K !== void 0 && a.add(K);
        }
        const l = (Z)=>{
            const K = hr_(Z);
            if (!(K === void 0 || !a.has(K))) return {
                type: "workspace",
                project: Z
            };
        }, u = this.workspaceMetadataService.getAllMetadata().map((Z)=>tMh(Z)).filter((Z)=>Z !== void 0), h = u.filter((Z)=>Z.worktreePath !== void 0), p = new Map(u.map((Z)=>[
                Z.workspaceIdentifier.id,
                Z
            ])), g = (Z)=>p.get(Z.workspaceIdentifier.id) ?? Z, f = [], v = [], b = new Set, y = new Set, T = (Z, K)=>{
            const J = Sr_(Z, K, e, this.workspaceMetadataService);
            if (J === "skip") return;
            const ne = l(Z);
            if (!ne) return;
            const ee = yr_(Z);
            if (J === "primary") {
                if (b.has(ee)) return;
                b.add(ee), f.push(ne);
                return;
            }
            b.has(ee) || y.has(ee) || (y.add(ee), v.push(ne));
        }, E = (Z, K)=>T(g(Z), K);
        for (const Z of this.projects.value)oMh(Z) && E(Z, "primary");
        for (const Z of this._recentlyOpenedWorkspaceProjects.value)E(Z, "primary");
        const A = Gi_(this.explorerOrchestratorService.remoteExplorerItems.value);
        for (const Z of h)T(Z, "suggested");
        for (const Z of A)E(Z, "suggested");
        for (const Z of u)vr_(Z) && T(Z, "suggested");
        if (f.length === 0 && v.length === 0) {
            const K = (t.length > 1 ? [
                t
            ] : c.map((se)=>[
                    se
                ])).flatMap((se)=>Ji_(this.workspaceMetadataService, se)), J = [], ne = [];
            for (const se of K){
                let re, ue;
                for (const ce of se.candidates){
                    const de = nMh(ce.metadata, ce.workspaceIdentifier);
                    if (!de) continue;
                    const le = lMh(de, e, this.workspaceMetadataService);
                    le === "primary" && !re ? re = de : le === "suggested" && !ue && (ue = de);
                }
                re ? J.push(re) : ue && ne.push(ue);
            }
            const ee = [
                ...J.map((se)=>({
                        project: se,
                        placement: "primary"
                    })),
                ...ne.map((se)=>({
                        project: se,
                        placement: "suggested"
                    }))
            ].slice(0, hMh);
            for (const { project: se, placement: re } of ee)T(se, re);
        }
        const R = [
            ...f
        ], D = new Set(c), P = this.cloudEnvironmentTemplateService.data.value, N = tQi(P), O = t.length > 1 ? gr_(N, t) : pYv(N, a);
        for (const Z of O)R.push({
            type: "cloud",
            template: Z
        });
        const F = mr_(t), H = khv({
            allowOriginRepos: F,
            selectedTargetRepoUrls: D,
            cloudProjectRepoKeys: gCh(N)
        }), $ = dr_(t), W = P.gitRepoFetchedAuthEpoch !== null && P.gitRepoFetchedAuthEpoch === P.gitRepoAuthEpoch, G = P.gitRepoFetchFailedAuthEpoch !== null && P.gitRepoFetchFailedAuthEpoch === P.gitRepoAuthEpoch, q = (()=>{
            if (P.githubConnected === !1 && $ !== void 0 && H.status !== "available") return {
                status: "needs_github_connect",
                repoUrl: $
            };
            if (!W && $ !== void 0 && H.status !== "available") return G ? {
                status: "github_access_check_failed",
                repoUrl: $
            } : {
                status: "checking_github_access",
                repoUrl: $
            };
            if (H.status !== "available" && this.cloudEnvironmentTemplateService.lookUpGitReposMissingFromCatalog(t)) {
                const Z = t.find((K)=>this.cloudEnvironmentTemplateService.isGitRepoLookupPending(K));
                if (Z !== void 0) return {
                    status: "checking_github_access",
                    repoUrl: Z
                };
                if (H.status === "needs_github_connect") return {
                    status: "repo_not_accessible",
                    repoUrl: H.repoUrl
                };
            }
            return H;
        })(), z = q.status === "available", X = q.status === "needs_github_connect" || q.status === "repo_not_accessible" ? q.repoUrl : void 0;
        if (!R.some((Z)=>Z.type === "cloud")) {
            const Z = P.githubConnected === !1 ? fr_(N) : N, K = F ? aYv(c, Z, {
                mirrorGithubNodeId: o.githubNodeId
            }) : void 0;
            if (K !== void 0) R.push({
                type: "cloud",
                template: K
            });
            else {
                const J = z ? c.find(k$t) : X;
                J && R.push({
                    type: "cloud",
                    template: {
                        type: "gitRepo",
                        name: J,
                        url: J
                    }
                });
            }
        }
        return {
            primarySiblings: R,
            suggestedSiblings: v,
            cloudAvailability: q
        };
    }
    async _refreshRecentlyOpenedWorkspaceProjects() {
        const e = ++this._recentlyOpenedRefreshGeneration;
        try {
            const t = await this.workspacesService.getRecentlyOpened(), n = Ki_(this.workspaceMetadataService), i = await Qi_(this.workspacesService, t, n);
            if (e !== this._recentlyOpenedRefreshGeneration) return;
            this._recentlyOpenedWorkspaceProjects.set([
                ...i.values()
            ]);
        } catch (t) {
            if (e !== this._recentlyOpenedRefreshGeneration) return;
            this.logService.warn("[ProjectService] Failed to refresh recently opened workspaces.", t), this._recentlyOpenedWorkspaceProjects.set([]);
        }
    }
}, ner = ie([
    C(0, Kv),
    C(1, z1e),
    C(2, cBn),
    C(3, D2),
    C(4, KM),
    C(5, Wn)
], ner), mn(dBn, ner, 1, 1);

}
