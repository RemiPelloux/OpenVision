import { zdk } from "./Aeg.js";
import { mut } from "./Asv.js";
import { Ry } from "./agentRepositoryService.js";
import { Nk } from "./gYa.js";
import { Qpe } from "./trackedGitRepoHeader.js";
import { E } from "./tslib.es6.js";
var Bov, Uov, jov, RGl;
export { Bov, RGl, Uov, jov };
var __wakaru_$ov_initialized = false;
export function $ov() {
if (__wakaru_$ov_initialized) return;
__wakaru_$ov_initialized = true;
"use strict";
E(), Ry(), Qpe(), Bov = {
    subscribe: (t, e)=>[
            zdk(t.trackedGitRepos, e)
        ],
    read: (t)=>[
            Nk(t.trackedGitRepos.value).join("\0"),
            t.trackedGitRepos.value.map((e)=>e.activeBranchName.value ?? "").join("\0")
        ].join("")
}, Uov = 6e4, jov = {
    subscribe: (t, e)=>[
            t.lastUpdatedAt.onChange(e)
        ],
    read: (t)=>Math.floor(t.lastUpdatedAt.value / Uov)
}, RGl = [
    mut((t)=>t.isArchived),
    mut((t)=>t.status),
    mut((t)=>t.environment),
    mut((t)=>t.hasUnreadMessages),
    mut((t)=>t.prUrl),
    mut((t)=>t.isProject),
    Bov,
    jov,
    mut((t)=>t.location),
    mut((t)=>t.privateWorkerId),
    mut((t)=>t.privateWorkerDisplayName)
];

}
