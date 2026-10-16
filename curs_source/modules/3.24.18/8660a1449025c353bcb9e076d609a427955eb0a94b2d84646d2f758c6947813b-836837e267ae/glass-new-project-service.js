import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { fN } from "./Ycg.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { Rs, ss } from "./authenticationService.js";
import { kl } from "./browser.ts";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { TBv } from "./create-local-workspace-project.js";
import { Ub, py } from "./cursorCredsService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Jv, hy } from "./gitContextService.js";
import { f1l, v1l } from "./git_operations_pb.js";
import { a5, yU } from "./glass-dialog-service.js";
import { hv, t_ } from "./glass-file-service.js";
import { Goc, PBv, RBv } from "./glass-new-project-analytics.js";
import { OG, pU } from "./glass-workspaces-management-service.js";
import { iD, pce } from "./glass-workspaces-service.contract.js";
import { It } from "./instantiation.js";
import { DK0, Hoc, IK0, MK0, PK0, RK0, o3s } from "./lBv.js";
import { xBv } from "./mint-project-name.js";
import { j4i } from "./origin-dev-host.js";
import { U$, r_s } from "./pending-new-project.js";
import { WT } from "./project-selector-utils.js";
import { RVe, URi, Y9e, _me } from "./repo_pb_2.js";
import { c1l, nPn, u1l } from "./rpc_pb.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var MBv, DBv, O2t, c3s, u3s;
export { DBv, MBv, O2t, c3s, u3s };
var __wakaru_jJt_initialized = false;
export function jJt() {
if (__wakaru_jJt_initialized) return;
__wakaru_jJt_initialized = true;
"use strict";
E(), a5(), OG(), kl(), dp(), nPn(), v1l(), _me(), Qe(), fn(), hv(), Rn(), It(), wl(), Dc(), Ss(), py(), hy(), Rs(), _s(), TBv(), WT(), xBv(), j4i(), U$(), pce(), PBv(), MBv = "cloud_agent_new_project_empty_root_commit", DBv = "0".repeat(40), O2t = Il("glassNewProjectService"), c3s = {
    name: "Cursor",
    email: "noreply@cursor.com"
}, u3s = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        super(), this._aiService = t, this._authService = n, this._cursorCredsService = i, this._experimentService = r, this._fileDialogService = s, this._fileService = o, this._gitContextService = a, this._glassWorkspacesService = l, this._workspacesService = c, this._draftResolutions = new Map, this._analytics = new RBv(e), this._register(u.onDidArchiveAgent(({ agentId: d })=>{
            this.clearDraft(d);
        }));
    }
    noteNewRepositorySelection(t, e) {
        this._analytics.noteSelection(t, e);
    }
    trackNewRepositoryEntrypointAvailable(t, e) {
        this._analytics.trackEntrypointAvailable(t, e);
    }
    trackNewRepositorySelected(t, e) {
        this._analytics.trackSelected(t, e);
    }
    trackOriginSetupTrayShown(t, e) {
        this._analytics.trackSetupTrayShown(t, e);
    }
    trackOriginSetupTrayAction(t, e) {
        this._analytics.trackSetupTrayAction(t, e);
    }
    trackOriginSetupReady(t) {
        this._analytics.trackSetupReady(t);
    }
    getNewRepositoryFlowId(t) {
        return this._analytics.getFlowId(t);
    }
    getOrCreateNewRepositoryFlowId(t) {
        return this._analytics.getOrCreateFlowId(t);
    }
    noteNewProjectRuntime(t) {
        this._lastNewProjectRuntime = t;
    }
    getLastNewProjectRuntime() {
        return this._lastNewProjectRuntime;
    }
    clearDraft(t) {
        this._draftResolutions.get(t)?.abortController.abort(), this._draftResolutions.delete(t), this._analytics.clear(t);
    }
    resolveNewProjectTarget(t) {
        let e = this._draftResolutions.get(t.draftId);
        if (e === void 0 && (e = PK0(t.runtime), this._draftResolutions.set(t.draftId, e)), e.runtime !== t.runtime) throw new Error("This draft already started creating a project in another runtime.");
        switch(e.runtime){
            case "cloud":
                return this._resolveCloudEntry(e, t);
            case "local":
                return this._resolveLocalEntry(e, t);
            default:
                return e;
        }
    }
    _resolveCloudEntry(t, e) {
        const n = t.state;
        switch(n.kind){
            case "resolved":
                return Promise.resolve(n.resolution);
            case "resolving":
                return n.promise;
            case "idle":
                {
                    const i = this._resolveCloud(t, e).then((r)=>(this._draftResolutions.get(e.draftId) === t && (t.state = {
                            kind: "resolved",
                            resolution: r
                        }), r), (r)=>{
                        throw this._draftResolutions.get(e.draftId) === t && (t.state = {
                            kind: "idle"
                        }), r;
                    });
                    return t.state = {
                        kind: "resolving",
                        promise: i
                    }, i;
                }
            default:
                return n;
        }
    }
    async _resolveCloud(t, e) {
        const n = e.namespace?.trim() ?? "", i = n === "" ? "jit" : "existing";
        let r, s = t.mint;
        if (s.kind === "unminted") {
            const o = Hoc(e.prompt), a = this._experimentService.checkFeatureGate(MBv, {
                disableExposureLog: !1
            }), l = await this._aiService.originClient();
            r = this._analytics.beginTmpRepoCreation(e.draftId, i);
            try {
                const u = (await l.createRepoAndEnsureUserNamespace(new URi({
                    identifier: {
                        org: n,
                        name: o
                    },
                    repoKind: Y9e.AGENT_TEMP,
                    visibility: RVe.PRIVATE,
                    defaultBranch: r_s
                }), {
                    signal: t.abortController.signal
                })).repository?.identifier, d = u?.org.trim() ?? "", h = u?.name.trim() ?? "";
                if (d.length === 0 || h.length === 0) throw new Goc;
                s = {
                    kind: "minted",
                    org: d,
                    name: h,
                    displayName: o,
                    seeded: !1,
                    seedEmptyRoot: a
                }, t.mint = s;
            } catch (c) {
                const u = i === "jit" && c instanceof Us && c.code === pr.FailedPrecondition ? "namespace_ensure" : "repo_create";
                throw this._analytics.trackTmpRepoCreationFailure(r, u, c), c;
            }
        }
        if (!s.seeded) {
            r ??= this._analytics.beginTmpRepoCreation(e.draftId, i);
            try {
                await this._seedRepository({
                    org: s.org,
                    name: s.name
                }, s.displayName, s.seedEmptyRoot, t.abortController.signal), s = {
                    ...s,
                    seeded: !0
                }, t.mint = s;
            } catch (o) {
                throw this._analytics.trackTmpRepoCreationFailure(r, "readme_seed", o), o;
            }
        }
        return r !== void 0 && this._analytics.trackTmpRepoCreationSuccess(r), {
            kind: "cloud",
            target: MK0({
                org: s.org,
                name: s.name,
                originBackendUrl: this._cursorCredsService.getOriginBackendUrl()
            }),
            projectName: s.name,
            originRepo: {
                org: s.org,
                name: s.name
            },
            seededEmptyRoot: s.seedEmptyRoot
        };
    }
    async _seedRepository(t, e, n, i) {
        const r = await this._aiService.originClient(), s = await this._resolveCommitAuthor(), o = `# ${e}

This project was created by a Cursor cloud agent.
`;
        try {
            await r.createCommitFromFiles(new f1l({
                identifier: t,
                branch: r_s,
                expectedHeadSha: DBv,
                message: "Initialize project",
                author: DK0(s),
                files: n ? [] : [
                    new u1l({
                        path: "README.md",
                        operation: {
                            case: "upsert",
                            value: new c1l({
                                content: new TextEncoder().encode(o)
                            })
                        }
                    })
                ]
            }), {
                signal: i
            });
        } catch (a) {
            if (RK0(a)) return;
            throw a;
        }
    }
    async _resolveCommitAuthor() {
        try {
            const { email: t } = await this._authService.getEmailAndSignUpType(), e = t?.trim();
            if (e) return {
                name: (this._authService.getCachedAccountProfile()?.displayName?.trim() ?? "") || e.split("@")[0] || c3s.name,
                email: e
            };
        } catch  {
            return c3s;
        }
        return c3s;
    }
    _resolveLocalEntry(t, e) {
        const n = t.state;
        switch(n.kind){
            case "resolved":
                return Promise.resolve(n.resolution);
            case "resolving":
                return n.promise;
            case "idle":
                {
                    const i = this._resolveLocal(t, e).then((r)=>(this._draftResolutions.get(e.draftId) === t && (t.state = {
                            kind: "resolved",
                            resolution: r
                        }), r), (r)=>{
                        throw this._draftResolutions.get(e.draftId) === t && (t.state = {
                            kind: "idle"
                        }), r;
                    });
                    return t.state = {
                        kind: "resolving",
                        promise: i
                    }, i;
                }
            default:
                return n;
        }
    }
    async _resolveLocal(t, e) {
        let n = t.mint;
        if (n.kind === "unminted") {
            const r = Hoc(e.prompt), s = await this._fileDialogService.defaultFolderPath();
            let o;
            for(let a = 1; a <= 50; a++){
                const l = IK0(r, a), c = rt.joinPath(s, l);
                if (!await this._fileService.exists(c)) {
                    o = {
                        projectName: l,
                        targetUri: c
                    };
                    break;
                }
            }
            if (o === void 0) throw new Error("Couldn't find an available project folder name.");
            n = {
                kind: "minted",
                ...o
            }, t.mint = n;
        }
        const i = await o3s({
            uri: n.targetUri,
            displayPath: n.targetUri.fsPath || n.targetUri.path,
            fileService: this._fileService,
            gitContextService: this._gitContextService,
            workspacesService: this._workspacesService
        });
        if (!i.ok) throw new Error(i.kind === "pathIsFile" ? "Couldn't create the project folder because that path is a file." : i.message);
        return this._glassWorkspacesService.addProject(i.project), {
            kind: "local",
            target: fN(i.project),
            projectName: n.projectName
        };
    }
    dispose() {
        for (const t of this._draftResolutions.values())t.abortController.abort();
        this._draftResolutions.clear(), this._analytics.clearAll(), super.dispose();
    }
}, u3s = Re([
    F(0, jl),
    F(1, Qr),
    F(2, ss),
    F(3, Ub),
    F(4, Cr),
    F(5, yU),
    F(6, t_),
    F(7, Jv),
    F(8, iD),
    F(9, pU),
    F(10, ma)
], u3s), bn(O2t, u3s, 1, 1);

}
