import { Uil, jTi, wzt } from "./Aeg.js";
import { AQw } from "./Asv.js";
import { UHl, i5 } from "./BA.js";
import { Ry } from "./agentRepositoryService.js";
import { Nk } from "./gYa.js";
import { Gvs } from "./react-compiler.js";
import { $ov } from "./sidebar-projection-invalidation.js";
import { Qpe } from "./trackedGitRepoHeader.js";
import { E } from "./tslib.es6.js";
var PGl, Wov, MGl, DGl, GEs, Gov, DQw, NQw, LQw, OQw, qov, zov, Vov;
export { DGl, DQw, GEs, Gov, LQw, MGl, NQw, OQw, PGl, Vov, Wov, qov, zov };
var __wakaru_DDe_initialized = false;
export function DDe() {
if (__wakaru_DDe_initialized) return;
__wakaru_DDe_initialized = true;
"use strict";
E(), Qpe(), Ry(), UHl(), $ov(), Gvs(), UHl(), PGl = "\0", Wov = "", MGl = {
    subscribe: (t, e)=>[
            t.trackedGitRepos.onChange(e),
            Uil(t.trackedGitRepos, e)
        ],
    read: (t)=>Nk(t.trackedGitRepos.value).join(PGl)
}, DGl = {
    subscribe: (t, e)=>[
            t.trackedGitRepos.onChange(e),
            wzt(t.trackedGitRepos, e)
        ],
    read: (t)=>{
        const e = t.trackedGitRepos.value;
        return Nk(e).join(PGl) + Wov + jTi(e);
    }
}, GEs = class {
    constructor(t){
        this.source = t.trackedGitRepos, this.value = t.trackedGitRepos.value, this.repositories = this.value.map((e)=>{
            const n = e.branches.value;
            return {
                source: e,
                repoPath: e.repoPath,
                repoUrlSource: e.repoUrl,
                repoUrl: e.repoUrl.value,
                activeBranchSource: e.activeBranchName,
                activeBranch: e.activeBranchName.value,
                branchesSource: e.branches,
                branchesValue: n,
                branches: n.map((i)=>({
                        source: i,
                        branchName: i.branchName,
                        lastInteractionAt: i.lastInteractionAt
                    }))
            };
        });
    }
}, Gov = {
    subscribe: (t, e)=>[
            t.trackedGitRepos.onChange(e),
            wzt(t.trackedGitRepos, e)
        ],
    read: (t)=>new GEs(t),
    isEqual: AQw
}, DQw = [
    i5((t)=>t.isArchived),
    i5((t)=>t.status),
    i5((t)=>t.environment),
    i5((t)=>t.hasUnreadMessages),
    i5((t)=>t.prUrl),
    DGl,
    i5((t)=>t.lastUpdatedAt)
], NQw = [
    i5((t)=>t.status),
    i5((t)=>t.hasUnreadMessages),
    i5((t)=>t.environment),
    MGl,
    i5((t)=>t.lastUpdatedAt),
    i5((t)=>t.location)
], LQw = [
    i5((t)=>t.environment),
    MGl,
    i5((t)=>t.lastUpdatedAt)
], OQw = [
    i5((t)=>t.name),
    i5((t)=>t.lastUpdatedAt)
], qov = [
    i5((t)=>t.isArchived),
    i5((t)=>t.isProject),
    i5((t)=>t.name),
    i5((t)=>t.status),
    i5((t)=>t.lastUpdatedAt),
    i5((t)=>t.hasUnreadMessages),
    i5((t)=>t.prUrl),
    i5((t)=>t.environment),
    DGl
], zov = [
    i5((t)=>t.name),
    i5((t)=>t.environment),
    Gov,
    i5((t)=>t.lastUpdatedAt)
], Vov = [
    i5((t)=>t.lastUpdatedAt)
];

}
