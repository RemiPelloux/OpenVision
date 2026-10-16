import { $l, Y9 } from "./SZu.js";
import { ju, nf } from "./agent_pb.js";
import { iFa } from "./autoSmartModelMigration.js";
import { KD, zW } from "./composerBlobStore.js";
import { uv } from "./composerData.js";
import { O0t } from "./composerDataCreation.js";
import { mo, tf } from "./composer_pb.js";
import { Ng } from "./index_3.ts";
import { TWt } from "./index_6.ts";
import { C9p, OM, Xp, fO1 } from "./ipa.js";
import { azr } from "./serializeToolformerBubbleData.js";
import { Ct, Pu, yM } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr } from "./workspace.js";
import { Azr } from "./yBp.js";
var W9p, G9p, q9p, z9p, V9p, K9p, Y9p, X9p, Z9p, Q9p, J9p, eBp, tBp, nBp, iBp, rBp, sBp, oBp, aBp;
export { G9p, J9p, K9p, Q9p, V9p, W9p, X9p, Y9p, Z9p, aBp, eBp, iBp, nBp, oBp, q9p, rBp, sBp, tBp, z9p };
var __wakaru_lBp_initialized = false;
export function lBp() {
if (__wakaru_lBp_initialized) return;
__wakaru_lBp_initialized = true;
"use strict";
E(), TWt(), tf(), azr(), uv(), ju(), zW(), Ng(), O0t(), Pu(), Xo(), iFa(), Sr(), W9p = {
    version: 1,
    check: (t)=>t._v === 0,
    migrate: async (t, e)=>{
        let n = t, i;
        n.latestCheckpoint && (i = await e.composerCheckpointStorageService.storeCheckpoint(t.composerId, n.latestCheckpoint), i || e.composerLogService?.error("Failed to store latest checkpoint in migration"));
        const r = [];
        for (const o of n.conversation){
            const a = o;
            let l, c;
            a.checkpoint && (l = await e.composerCheckpointStorageService.storeCheckpoint(t.composerId, a.checkpoint), l || e.composerLogService?.error("Failed to store checkpoint in migration")), a.afterCheckpoint && (c = await e.composerCheckpointStorageService.storeCheckpoint(t.composerId, a.afterCheckpoint), c || e.composerLogService?.error("Failed to store afterCheckpoint in migration"));
            const u = {
                ...o,
                checkpointId: l,
                afterCheckpointId: c,
                _v: 1
            };
            "checkpoint" in u && delete u.checkpoint, "afterCheckpoint" in u && delete u.afterCheckpoint, r.push(u);
        }
        const s = {
            ...t,
            latestCheckpointId: i,
            conversation: r,
            _v: 1
        };
        return "latestCheckpoint" in s && delete s.latestCheckpoint, s;
    }
}, G9p = {
    version: 2,
    check: (t)=>t._v === 1,
    migrate: async (t, e)=>{
        let n = t;
        const i = e.composerLogService;
        n.conversation = n.conversation.map((p)=>Azr(p, i));
        const r = {}, o = n.capabilities.find((p)=>p.type === mo.TOOL_FORMER)?.data, a = fO1(o?.bubbleDataMap || "{}", i), l = {}, c = {};
        for (const p of n.conversation){
            const g = p.codeBlocks || [];
            for(let f = 0; f < g.length; f++){
                const _ = g[f];
                if (_.unregistered === !0) continue;
                const b = `${_.uri.toString()}!${_.version}`;
                c[b] = {
                    bubbleId: p.bubbleId,
                    codeBlockIdx: f
                };
            }
        }
        if (n.codeBlockData) for(const p in n.codeBlockData){
            const g = n.codeBlockData[p];
            for (const f of g){
                const _ = `${f.uri.toString()}!${f.version}`, b = c[_];
                if (b !== void 0) {
                    const y = `${f.uri.toString()}!${f.version}!${b.codeBlockIdx}`;
                    l[y] = {
                        content: f.content,
                        languageId: f.languageId
                    };
                }
            }
        }
        for (const p of n.conversation){
            const g = {
                ...p,
                _v: 2
            };
            if (p.bubbleId in a && (g.toolFormerData = a[p.bubbleId]), g.codeBlocks && g.codeBlocks.length > 0) for(let f = 0; f < g.codeBlocks.length; f++){
                const _ = g.codeBlocks[f];
                if (!_.unregistered) {
                    const b = _, y = `${_.uri.toString()}!${_.version}!${_.codeBlockIdx}`, S = {
                        ...b,
                        _v: 1
                    };
                    y in l ? (S.content = l[y].content, l[y].languageId !== void 0 && (S.languageId = l[y].languageId)) : (e.composerLogService?.error("[composerMigrations] Code block not found in codeBlockContentMap", y), S.content = ""), g.codeBlocks[f] = S;
                }
            }
            await e.composerMessageStorageService.storeMessage(n.composerId, g), r[p.bubbleId] = g;
        }
        const u = {};
        if (n.codeBlockData) {
            const p = {};
            for(const g in n.codeBlockData){
                const f = n.codeBlockData[g];
                p[g] = new Set;
                for (const _ of f){
                    const y = `${_.uri.toString()}!${_.version}`;
                    c[y] === void 0 && (p[g].add(_.version), e.composerLogService?.warn(`[composerMigrations] Code block not found in uriVersionToBlockInfo, removing: ${y}`));
                }
            }
            for(const g in n.codeBlockData){
                const f = n.codeBlockData[g], _ = p[g];
                u[g] = [];
                let b = 0;
                const y = new Map;
                for(let S = 0; S < f.length; S++)if (_.has(S)) b++;
                else {
                    const k = S - b;
                    y.set(S, k);
                }
                for (const S of f){
                    const k = S.version;
                    if (_.has(k)) continue;
                    const T = `${S.uri.toString()}!${k}`, I = c[T], A = y.get(k);
                    let P;
                    (S.originalModelDiffWrtV0 || S.newModelDiffWrtV0) && (P = await e.composerCodeBlockDiffStorageService.storeDiff(n.composerId, {
                        originalModelDiffWrtV0: S.originalModelDiffWrtV0 || [],
                        newModelDiffWrtV0: S.newModelDiffWrtV0 || []
                    })), delete S.originalModelDiffWrtV0, delete S.newModelDiffWrtV0, u[g].push({
                        ...S,
                        _v: 1,
                        version: A,
                        bubbleId: I.bubbleId,
                        codeBlockIdx: I.codeBlockIdx,
                        diffId: P
                    });
                }
            }
        }
        const d = n.conversation.map((p)=>OM(p)), h = {
            ...n,
            fullConversationHeadersOnly: d,
            conversationMap: r,
            codeBlockData: u,
            _v: 2
        };
        return delete h.conversation, h;
    }
}, q9p = {
    version: 3,
    check: (t)=>t._v === 2,
    migrate: async (t, e)=>{
        const n = t, i = {};
        for(const l in n.codeBlockData){
            const c = n.codeBlockData[l];
            i[l] = [];
            for (const u of c){
                const { isChained: d, _v: h, ...p } = u, g = {
                    ...p,
                    _v: 2,
                    chainedInfo: void 0
                };
                if (d) {
                    let f;
                    for(let _ = u.version - 1; _ >= 0; _--){
                        const b = c[_];
                        if (b?.diffId !== void 0) {
                            f = b.version;
                            break;
                        }
                    }
                    f !== void 0 && (g.chainedInfo = {
                        chainedFromVersion: f
                    });
                }
                i[l].push(g);
            }
        }
        const { codeBlockData: r, _v: s, ...o } = n;
        return {
            ...o,
            codeBlockData: i,
            subComposerIds: [],
            _v: 3
        };
    }
}, z9p = {
    version: 4,
    check: (t)=>t._v === 3,
    migrate: async (t, e)=>{
        const n = t;
        let i;
        const r = n.fullConversationHeadersOnly;
        for(let o = r.length - 1; o >= 0; o--){
            const a = r[o], l = n.conversationMap[a.bubbleId];
            if (!l) break;
            if (l.toolFormerData && l.toolFormerData.tool === Ct.TODO_WRITE && l.toolFormerData.params?.todos) {
                i = l.toolFormerData.params.todos.map((c)=>new yM(c));
                break;
            }
        }
        return {
            ...n,
            todos: i,
            _v: 4
        };
    }
}, V9p = {
    version: 5,
    check: (t)=>t._v === 4,
    migrate: async (t, e)=>({
            ...t,
            _v: 5
        })
}, K9p = {
    version: 6,
    check: (t)=>t._v === 5,
    migrate: async (t, e)=>{
        const n = t, i = {};
        for(const o in n.codeBlockData){
            const a = n.codeBlockData[o];
            i[o] = {};
            for (const l of a){
                const c = Ai();
                i[o][l.version] = c;
            }
        }
        const r = {};
        for(const o in n.codeBlockData){
            const a = n.codeBlockData[o];
            if (a.length !== 0) {
                r[o] = {};
                for (const l of a){
                    const c = i[o][l.version];
                    i[o][l.version] = c;
                    let u;
                    if (l.chainedInfo) {
                        const g = i[l.uri.toString()][l.chainedInfo.chainedFromVersion];
                        g && (u = {
                            chainedFromCodeblockId: g
                        });
                    }
                    const d = {
                        ...l,
                        _v: 3,
                        codeblockId: c,
                        chainedInfo: u,
                        fromSubagentCodeBlockInfo: void 0,
                        createdAt: l.version,
                        lastAppliedAt: l.isNotApplied ? -1 : l.version
                    };
                    r[o][c] = d;
                    const h = (g)=>{
                        g.codeBlocks = g.codeBlocks?.map((f)=>f.uri?.toString() === o && f.version === l.version ? {
                                ...f,
                                _v: 2,
                                codeblockId: c,
                                version: void 0
                            } : f), g.toolFormerData?.tool === Ct.EDIT_FILE && g.toolFormerData.additionalData !== void 0 && (g.toolFormerData.additionalData.codeblockId = c), g._v = 3;
                    }, p = l.bubbleId;
                    if (n.conversationMap[p]) {
                        const g = n.conversationMap[p];
                        h(g), await e.composerMessageStorageService.storeMessage(n.composerId, g);
                    } else await e.composerMessageStorageService.updateMessage(n.composerId, p, h);
                }
            }
        }
        return {
            ...n,
            codeBlockData: r,
            conversationMap: n.conversationMap,
            _v: 6
        };
    }
}, Y9p = {
    version: 7,
    check: (t)=>t._v === 6,
    migrate: async (t, e)=>{
        const n = t, i = {}, r = n.originalModelLines;
        if (r) for(const c in r){
            const d = r[c].join(`
`);
            let h, p = 1 / 0;
            const g = n.codeBlockData[c];
            if (g) for(const f in g){
                const _ = g[f];
                _.createdAt < p && (p = _.createdAt, h = _.bubbleId);
            }
            h && (i[c] = {
                content: d,
                firstEditBubbleId: h,
                isNewlyCreated: !1,
                newlyCreatedFolders: []
            });
        }
        const { _v: s, originalModelLines: o, ...a } = n;
        return {
            ...a,
            originalFileStates: i,
            _v: 7
        };
    }
}, X9p = {
    version: 8,
    check: (t)=>t._v === 7,
    migrate: async (t, e)=>{
        const n = t, i = n.unifiedMode === "edit" ? "agent" : n.unifiedMode;
        return {
            ...n,
            unifiedMode: i,
            _v: 8
        };
    }
}, Z9p = {
    version: 9,
    check: (t)=>t._v === 8,
    migrate: async (t, e)=>{
        const n = t, i = e.modelConfigService.getModelConfig("composer").modelName, r = e.modelConfigService.getModelConfig("composer").maxMode;
        return {
            ...n,
            modelConfig: {
                modelName: i,
                maxMode: r
            },
            _v: 9
        };
    }
}, Q9p = {
    version: 10,
    check: (t)=>t._v === 9,
    migrate: async (t, e)=>{
        const n = t, i = crypto.getRandomValues(new Uint8Array(32));
        return {
            ...n,
            speculativeSummarizationEncryptionKey: i,
            _v: 10
        };
    }
}, J9p = {
    version: 11,
    check: (t)=>t._v === 10,
    migrate: async (t, e)=>{
        const n = t;
        let i;
        try {
            const s = new KD(e.storageService, n.composerId), o = await s.getLatestCheckpointPointer();
            if (o) {
                const a = Xp(), l = await s.getBlob(a, o);
                l && (i = nf.fromBinary(l), e.composerLogService?.info("[composerMigrations] V11: Loaded conversationState from blob store checkpoint", {
                    composerId: n.composerId,
                    turns: i.turns?.length ?? 0,
                    fileStates: Object.keys(i.fileStatesV2 ?? {}).length
                }));
            }
        } catch (s) {
            e.composerLogService?.warn("[composerMigrations] V11: Failed to load checkpoint from blob store", {
                composerId: n.composerId,
                error: s
            });
        }
        return i || (i = new nf), {
            ...n,
            conversationState: i,
            _v: 11
        };
    }
}, eBp = {
    version: 12,
    check: (t)=>t._v === 11,
    migrate: async (t, e)=>({
            ...t,
            _v: 12
        })
}, tBp = {
    version: 13,
    check: (t)=>t._v === 12,
    migrate: async (t, e)=>({
            ...t,
            _v: 13,
            queueItems: []
        })
}, nBp = {
    version: 14,
    check: (t)=>t._v === 13,
    migrate: async (t, e)=>({
            ...t,
            _v: 14,
            activeBranch: void 0,
            branches: []
        })
}, iBp = {
    version: 15,
    check: (t)=>t._v === 14,
    migrate: async (t, e)=>{
        const n = [
            ...t.activeBranch ? [
                t.activeBranch
            ] : [],
            ...t.branches ?? []
        ].filter((s)=>typeof s?.branchName == "string" && s.branchName.length > 0).filter((s, o, a)=>a.findIndex((l)=>l.branchName === s.branchName) === o).map((s)=>({
                branchName: s.branchName,
                lastInteractionAt: Number.isFinite(s.lastInteractionAt) ? s.lastInteractionAt : 0
            })).sort((s, o)=>o.lastInteractionAt - s.lastInteractionAt);
        let i;
        if (n.length === 0) i = [];
        else {
            const s = t.workspaceIdentifier ? Y9(t.workspaceIdentifier) : void 0;
            if (e.gitContextService && s && $l(s)) {
                const o = await e.gitContextService.getGitRoot(s.uri.fsPath).catch(()=>{});
                o ? i = [
                    {
                        repoPath: o,
                        branches: n
                    }
                ] : i = void 0;
            } else i = void 0;
        }
        const r = {
            ...t,
            _v: 15,
            trackedGitRepos: i
        };
        return delete r.activeBranch, delete r.branches, r;
    }
}, rBp = {
    version: 16,
    check: (t)=>t._v === 15,
    migrate: async (t, e)=>({
            ...t,
            _v: 16
        })
}, sBp = {
    version: 17,
    check: (t)=>t._v === 16,
    migrate: async (t, e)=>({
            ...t,
            _v: 17
        })
}, oBp = {
    version: 18,
    check: (t)=>t._v === 17,
    migrate: async (t, e)=>({
            ...t,
            _v: 18,
            committedCustomMode: C9p({
                activeCustomMode: t.activeCustomMode,
                pendingExitedCustomMode: t.pendingExitedCustomMode
            }),
            pendingExitedCustomMode: null
        })
}, aBp = [
    W9p,
    G9p,
    q9p,
    z9p,
    V9p,
    K9p,
    Y9p,
    X9p,
    Z9p,
    Q9p,
    J9p,
    eBp,
    tBp,
    nBp,
    iBp,
    rBp,
    sBp,
    oBp
];

}
