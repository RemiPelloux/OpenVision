import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { Rs, ss } from "./authenticationService.js";
import { gWa, pd } from "./background_composer_pb.js";
import { kl } from "./browser.ts";
import { dp } from "./connect.js";
import { Ub, py } from "./cursorCredsService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { $Op, JGr } from "./ipa.js";
import { Woc } from "./lBv.js";
import { rb_ } from "./local-repo-remotes-cache.js";
import { _$C, b$C, ib_, ob_, sb_, v$C } from "./mm_.js";
import { j4i } from "./origin-dev-host.js";
import { URi, Y9e, _me, i1l } from "./repo_pb_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Ptn, T7i, x6s;
export { Ptn, T7i, x6s };
var __wakaru_U4n_initialized = false;
export function U4n() {
if (__wakaru_U4n_initialized) return;
__wakaru_U4n_initialized = true;
"use strict";
E(), kl(), dp(), pd(), _me(), Gt(), Qe(), Rn(), It(), wl(), Dc(), Ss(), py(), Rs(), j4i(), rb_(), Ptn = Il("glassCreateRepoService"), T7i = class extends Error {
    constructor(t){
        super(`A repository named "${t}" already exists.`);
    }
}, x6s = class extends st {
    constructor(t, e, n, i, r){
        super(), this._aiService = t, this._analyticsService = e, this._agentRepositoryService = n, this._authenticationService = i, this._cursorCredsService = r, this._onDidCreateRepoForAgent = this._register(new tt), this.onDidCreateRepoForAgent = this._onDidCreateRepoForAgent.event, this._createdAgentIds = new Set, this._createRepoTrayOpenedAgentIds = new Set, this._createRepoAttemptCountByAgentId = new Map, this._publishedDraftNames = new Map, this._pendingLocalCreates = new Map;
    }
    _buildCloneUrl(t) {
        const e = Woc(this._cursorCredsService.getOriginBackendUrl()), n = JGr({
            owner: t.org,
            name: t.name
        });
        return `https://${e}${n}.git`;
    }
    wasRepoCreatedForAgent(t) {
        return this._createdAgentIds.has(t);
    }
    getPublishedDraftName(t) {
        return this._publishedDraftNames.get(t);
    }
    trackCreateRepoTrayOpened(t) {
        this._createRepoTrayOpenedAgentIds.has(t.agentId) || (this._createRepoTrayOpenedAgentIds.add(t.agentId), this._analyticsService.trackEvent("new_repository.create_repo_tray_opened", {
            bcId: t.agentId,
            surface: "glass",
            suggestionsState: t.suggestionsState,
            accountKind: t.accountKind
        }));
    }
    trackCreateRepoSubmitted(t) {
        const e = (this._createRepoAttemptCountByAgentId.get(t.agentId) ?? 0) + 1;
        return this._createRepoAttemptCountByAgentId.set(t.agentId, e), this._analyticsService.trackEvent("new_repository.create_repo_submitted", {
            bcId: t.agentId,
            surface: "glass",
            nameChoice: t.nameChoice,
            visibility: t.visibility,
            attemptNumber: e
        }), {
            agentId: t.agentId,
            attemptNumber: e,
            startedAtMs: Date.now()
        };
    }
    trackCreateRepoOutcome(t, e) {
        this._analyticsService.trackEvent("new_repository.create_repo_outcome", {
            bcId: t.agentId,
            surface: "glass",
            outcome: e === void 0 ? "success" : "failure",
            durationMs: Math.max(0, Date.now() - t.startedAtMs),
            ...e === void 0 ? {} : {
                failureReason: _$C(e)
            }
        });
    }
    trackCreateRepoTrayClosed(t, e) {
        this._createdAgentIds.has(t) || this._analyticsService.trackEvent("new_repository.create_repo_tray_dismissed", {
            bcId: t,
            surface: "glass",
            furthestStep: e.furthestStep,
            lastInteraction: e.lastInteraction,
            submitAttempts: e.submitAttempts,
            openMs: Math.max(0, Date.now() - e.openedAtMs)
        });
    }
    async publishCloudDraft(t) {
        const n = await (await this._aiService.backgroundComposerClient()).publishBackgroundComposerTempRepo(new gWa({
            bcId: t.agentId,
            newName: t.newName,
            visibility: v$C(t.visibility)
        })).catch((s)=>{
            throw ob_(s) ? new T7i(t.newName) : s;
        }), i = n.owner.trim(), r = n.name.trim();
        if (i.length === 0 || r.length === 0) throw new Error("Origin published the repository but didn't return its identity.");
        return this._publishedDraftNames.set(t.agentId, t.currentName), n.canonicalRepoUrl.trim() !== "" && this._agentRepositoryService.applyPublishedCloudRepoUrl({
            agentId: t.agentId,
            canonicalRepoUrl: n.canonicalRepoUrl
        }), this._markCreated(t.agentId), {
            org: i,
            name: r
        };
    }
    async createRepoForLocalAgent(t) {
        const e = t.gitContextService, n = await this._resolveLocalBranchName(e, t.repoPath), i = `${t.agentId}\0${t.namespace}\0${t.name}`;
        let r = this._pendingLocalCreates.get(i);
        if (r === void 0) {
            const a = await this._aiService.originClient();
            r = {
                identity: await b$C({
                    rpc: a.createRepo(new URi({
                        identifier: {
                            org: t.namespace,
                            name: t.name
                        },
                        repoKind: Y9e.STANDARD,
                        visibility: sb_(t.visibility),
                        defaultBranch: n
                    })),
                    requestedName: t.name,
                    verb: "created"
                }),
                visibility: t.visibility
            }, this._pendingLocalCreates.set(i, r);
        } else r.visibility !== t.visibility && (await (await this._aiService.originClient()).updateRepoVisibility(new i1l({
            identifier: {
                org: r.identity.org,
                name: r.identity.name
            },
            visibility: sb_(t.visibility)
        })), r.visibility = t.visibility);
        const s = r.identity, o = this._buildCloneUrl(s);
        return await this._setOriginRemote({
            git: e,
            repoPath: t.repoPath,
            cloneUrl: o
        }), await this._ensureCommit(e, t.repoPath), await this._pushWithCursorToken({
            git: e,
            repoPath: t.repoPath,
            branchName: n,
            cloneUrl: o
        }), this._pendingLocalCreates.delete(i), ib_(t.repoPath), this._markCreated(t.agentId), s;
    }
    _markCreated(t) {
        this._createdAgentIds.add(t), this._onDidCreateRepoForAgent.fire(t);
    }
    async _resolveLocalBranchName(t, e) {
        const n = (await t.executeGitCommand(e, [
            "symbolic-ref",
            "--short",
            "HEAD"
        ], {
            caller: "GlassCreateRepoService.resolveLocalBranchName",
            retry: !1
        })).trim();
        if (n.length === 0) throw new Error("Couldn't resolve the project's git branch.");
        return n;
    }
    async _setOriginRemote(t) {
        const { git: e, repoPath: n, cloneUrl: i } = t, r = await e.getRemoteNames({
            cwd: n
        });
        if (r === void 0) throw new Error("Couldn't read the project's git remotes.");
        if (!r.includes("origin")) {
            await e.executeGitCommand(n, [
                "remote",
                "add",
                "origin",
                i
            ], {
                caller: "GlassCreateRepoService.setOriginRemote",
                retry: !1
            });
            return;
        }
        const s = (await e.executeGitCommand(n, [
            "remote",
            "get-url",
            "origin"
        ], {
            caller: "GlassCreateRepoService.setOriginRemote.getUrl",
            retry: !1
        })).trim(), o = `${new URL(i).origin}/git/`;
        if (!s.startsWith(o)) throw new Error("This project already has an origin remote. Remove it to create a new repository.");
        await e.executeGitCommand(n, [
            "remote",
            "set-url",
            "origin",
            i
        ], {
            caller: "GlassCreateRepoService.setOriginRemote",
            retry: !1
        });
    }
    async _ensureCommit(t, e) {
        const n = await t.executeGitCommand(e, [
            "rev-parse",
            "--verify",
            "HEAD"
        ], {
            caller: "GlassCreateRepoService.ensureCommit.head",
            retry: !1
        }).then(()=>!0, ()=>!1), r = (await t.executeGitCommand(e, [
            "status",
            "--porcelain"
        ], {
            caller: "GlassCreateRepoService.ensureCommit.status",
            retry: !1
        })).trim().length > 0;
        if (!(n && !r)) {
            if (r && await t.stageAllChanges(e), n) {
                await t.commitChanges(e, "Publish local changes");
                return;
            }
            await t.executeGitCommand(e, [
                "commit",
                "--allow-empty",
                "-m",
                "Initial commit"
            ], {
                caller: "GlassCreateRepoService.ensureCommit.initialCommit",
                retry: !1
            });
        }
    }
    async _pushWithCursorToken(t) {
        const { git: e, repoPath: n, branchName: i, cloneUrl: r } = t, s = await this._authenticationService.getAccessToken(), o = $Op([
            new URL(r).host
        ], s);
        if (o === void 0) throw new Error("Sign in to Cursor to push this project.");
        const a = [
            ...Object.entries(o),
            [
                "credential.helper",
                ""
            ],
            [
                "core.askPass",
                ""
            ],
            [
                "core.sshCommand",
                "false"
            ],
            [
                "core.fsmonitor",
                "false"
            ],
            [
                `http.${r}.proxy`,
                ""
            ],
            [
                `http.${r}.sslVerify`,
                "true"
            ]
        ], l = {
            GIT_CONFIG_COUNT: String(a.length),
            GIT_ASKPASS: "",
            GIT_TERMINAL_PROMPT: "0"
        };
        a.forEach(([c, u], d)=>{
            l[`GIT_CONFIG_KEY_${d}`] = c, l[`GIT_CONFIG_VALUE_${d}`] = u;
        }), await e.executeGitCommand(n, [
            "push",
            "--no-verify",
            "-u",
            "origin",
            i
        ], {
            caller: "GlassCreateRepoService.push",
            retry: !1,
            env: l
        });
    }
}, x6s = Re([
    F(0, jl),
    F(1, Qr),
    F(2, ma),
    F(3, ss),
    F(4, Ub)
], x6s), bn(Ptn, x6s, 2, 1);

}
