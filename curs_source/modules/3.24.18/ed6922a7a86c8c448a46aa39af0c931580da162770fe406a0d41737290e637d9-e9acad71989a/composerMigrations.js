import { l7i } from "./A3u.js";
import { PFu, TA, qh, r_v } from "./De_3.js";
import { Hm, zd } from "./agent_pb.js";
import { YYs } from "./autoSmartModelMigration.js";
import { BU, SN } from "./composerBlobStore.js";
import { Wf } from "./composerData.js";
import { dJe } from "./composerDataCreation.js";
import { Jm, ps } from "./composer_pb.js";
import { Gp } from "./index_3.ts";
import { $Mn } from "./index_6.ts";
import { dwe, rp } from "./qIc.js";
import { V8i } from "./serializeToolformerBubbleData.js";
import { DI, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
import { ci } from "./workspace.js";
var JFu, e3u, t3u, n3u, i3u, r3u, s3u, o3u, a3u, c3u, l3u, u3u, d3u, h3u, p3u, m3u, g3u, f3u, v3u;
export { JFu, a3u, c3u, d3u, e3u, f3u, g3u, h3u, i3u, l3u, m3u, n3u, o3u, p3u, r3u, s3u, t3u, u3u, v3u };
var __wakaru__3u_initialized = false;
export function _3u() {
if (__wakaru__3u_initialized) return;
__wakaru__3u_initialized = true;
"use strict";
x(), $Mn(), Jm(), V8i(), Wf(), zd(), BU(), Gp(), dJe(), ql(), Js(), YYs(), ci(), JFu = {
    version: 1,
    check: (e)=>e._v === 0,
    migrate: async (e, t)=>{
        let n = e, i;
        n.latestCheckpoint && (i = await t.composerCheckpointStorageService.storeCheckpoint(e.composerId, n.latestCheckpoint), i || t.composerLogService?.error("Failed to store latest checkpoint in migration"));
        const r = [];
        for (const o of n.conversation){
            const a = o;
            let c, l;
            a.checkpoint && (c = await t.composerCheckpointStorageService.storeCheckpoint(e.composerId, a.checkpoint), c || t.composerLogService?.error("Failed to store checkpoint in migration")), a.afterCheckpoint && (l = await t.composerCheckpointStorageService.storeCheckpoint(e.composerId, a.afterCheckpoint), l || t.composerLogService?.error("Failed to store afterCheckpoint in migration"));
            const u = {
                ...o,
                checkpointId: c,
                afterCheckpointId: l,
                _v: 1
            };
            "checkpoint" in u && delete u.checkpoint, "afterCheckpoint" in u && delete u.afterCheckpoint, r.push(u);
        }
        const s = {
            ...e,
            latestCheckpointId: i,
            conversation: r,
            _v: 1
        };
        return "latestCheckpoint" in s && delete s.latestCheckpoint, s;
    }
}, e3u = {
    version: 2,
    check: (e)=>e._v === 1,
    migrate: async (e, t)=>{
        let n = e;
        const i = t.composerLogService;
        n.conversation = n.conversation.map((g)=>l7i(g, i));
        const r = {}, o = n.capabilities.find((g)=>g.type === ps.TOOL_FORMER)?.data, a = r_v(o?.bubbleDataMap || "{}", i), c = {}, l = {};
        for (const g of n.conversation){
            const f = g.codeBlocks || [];
            for(let v = 0; v < f.length; v++){
                const b = f[v];
                if (b.unregistered === !0) continue;
                const y = `${b.uri.toString()}!${b.version}`;
                l[y] = {
                    bubbleId: g.bubbleId,
                    codeBlockIdx: v
                };
            }
        }
        if (n.codeBlockData) for(const g in n.codeBlockData){
            const f = n.codeBlockData[g];
            for (const v of f){
                const b = `${v.uri.toString()}!${v.version}`, y = l[b];
                if (y !== void 0) {
                    const T = `${v.uri.toString()}!${v.version}!${y.codeBlockIdx}`;
                    c[T] = {
                        content: v.content,
                        languageId: v.languageId
                    };
                }
            }
        }
        for (const g of n.conversation){
            const f = {
                ...g,
                _v: 2
            };
            if (g.bubbleId in a && (f.toolFormerData = a[g.bubbleId]), f.codeBlocks && f.codeBlocks.length > 0) for(let v = 0; v < f.codeBlocks.length; v++){
                const b = f.codeBlocks[v];
                if (!b.unregistered) {
                    const y = b, T = `${b.uri.toString()}!${b.version}!${b.codeBlockIdx}`, E = {
                        ...y,
                        _v: 1
                    };
                    T in c ? (E.content = c[T].content, c[T].languageId !== void 0 && (E.languageId = c[T].languageId)) : (t.composerLogService?.error("[composerMigrations] Code block not found in codeBlockContentMap", T), E.content = ""), f.codeBlocks[v] = E;
                }
            }
            await t.composerMessageStorageService.storeMessage(n.composerId, f), r[g.bubbleId] = f;
        }
        const u = {};
        if (n.codeBlockData) {
            const g = {};
            for(const f in n.codeBlockData){
                const v = n.codeBlockData[f];
                g[f] = new Set;
                for (const b of v){
                    const T = `${b.uri.toString()}!${b.version}`;
                    l[T] === void 0 && (g[f].add(b.version), t.composerLogService?.warn(`[composerMigrations] Code block not found in uriVersionToBlockInfo, removing: ${T}`));
                }
            }
            for(const f in n.codeBlockData){
                const v = n.codeBlockData[f], b = g[f];
                u[f] = [];
                let y = 0;
                const T = new Map;
                for(let E = 0; E < v.length; E++)if (b.has(E)) y++;
                else {
                    const A = E - y;
                    T.set(E, A);
                }
                for (const E of v){
                    const A = E.version;
                    if (b.has(A)) continue;
                    const D = `${E.uri.toString()}!${A}`, P = l[D], N = T.get(A);
                    let O;
                    (E.originalModelDiffWrtV0 || E.newModelDiffWrtV0) && (O = await t.composerCodeBlockDiffStorageService.storeDiff(n.composerId, {
                        originalModelDiffWrtV0: E.originalModelDiffWrtV0 || [],
                        newModelDiffWrtV0: E.newModelDiffWrtV0 || []
                    })), delete E.originalModelDiffWrtV0, delete E.newModelDiffWrtV0, u[f].push({
                        ...E,
                        _v: 1,
                        version: N,
                        bubbleId: P.bubbleId,
                        codeBlockIdx: P.codeBlockIdx,
                        diffId: O
                    });
                }
            }
        }
        const h = n.conversation.map((g)=>TA(g)), p = {
            ...n,
            fullConversationHeadersOnly: h,
            conversationMap: r,
            codeBlockData: u,
            _v: 2
        };
        return delete p.conversation, p;
    }
}, t3u = {
    version: 3,
    check: (e)=>e._v === 2,
    migrate: async (e, t)=>{
        const n = e, i = {};
        for(const c in n.codeBlockData){
            const l = n.codeBlockData[c];
            i[c] = [];
            for (const u of l){
                const { isChained: h, _v: p, ...g } = u, f = {
                    ...g,
                    _v: 2,
                    chainedInfo: void 0
                };
                if (h) {
                    let v;
                    for(let b = u.version - 1; b >= 0; b--){
                        const y = l[b];
                        if (y?.diffId !== void 0) {
                            v = y.version;
                            break;
                        }
                    }
                    v !== void 0 && (f.chainedInfo = {
                        chainedFromVersion: v
                    });
                }
                i[c].push(f);
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
}, n3u = {
    version: 4,
    check: (e)=>e._v === 3,
    migrate: async (e, t)=>{
        const n = e;
        let i;
        const r = n.fullConversationHeadersOnly;
        for(let o = r.length - 1; o >= 0; o--){
            const a = r[o], c = n.conversationMap[a.bubbleId];
            if (!c) break;
            if (c.toolFormerData && c.toolFormerData.tool === nt.TODO_WRITE && c.toolFormerData.params?.todos) {
                i = c.toolFormerData.params.todos.map((l)=>new DI(l));
                break;
            }
        }
        return {
            ...n,
            todos: i,
            _v: 4
        };
    }
}, i3u = {
    version: 5,
    check: (e)=>e._v === 4,
    migrate: async (e, t)=>({
            ...e,
            _v: 5
        })
}, r3u = {
    version: 6,
    check: (e)=>e._v === 5,
    migrate: async (e, t)=>{
        const n = e, i = {};
        for(const o in n.codeBlockData){
            const a = n.codeBlockData[o];
            i[o] = {};
            for (const c of a){
                const l = zn();
                i[o][c.version] = l;
            }
        }
        const r = {};
        for(const o in n.codeBlockData){
            const a = n.codeBlockData[o];
            if (a.length !== 0) {
                r[o] = {};
                for (const c of a){
                    const l = i[o][c.version];
                    i[o][c.version] = l;
                    let u;
                    if (c.chainedInfo) {
                        const f = i[c.uri.toString()][c.chainedInfo.chainedFromVersion];
                        f && (u = {
                            chainedFromCodeblockId: f
                        });
                    }
                    const h = {
                        ...c,
                        _v: 3,
                        codeblockId: l,
                        chainedInfo: u,
                        fromSubagentCodeBlockInfo: void 0,
                        createdAt: c.version,
                        lastAppliedAt: c.isNotApplied ? -1 : c.version
                    };
                    r[o][l] = h;
                    const p = (f)=>{
                        f.codeBlocks = f.codeBlocks?.map((v)=>v.uri?.toString() === o && v.version === c.version ? {
                                ...v,
                                _v: 2,
                                codeblockId: l,
                                version: void 0
                            } : v), f.toolFormerData?.tool === nt.EDIT_FILE && f.toolFormerData.additionalData !== void 0 && (f.toolFormerData.additionalData.codeblockId = l), f._v = 3;
                    }, g = c.bubbleId;
                    if (n.conversationMap[g]) {
                        const f = n.conversationMap[g];
                        p(f), await t.composerMessageStorageService.storeMessage(n.composerId, f);
                    } else await t.composerMessageStorageService.updateMessage(n.composerId, g, p);
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
}, s3u = {
    version: 7,
    check: (e)=>e._v === 6,
    migrate: async (e, t)=>{
        const n = e, i = {}, r = n.originalModelLines;
        if (r) for(const l in r){
            const h = r[l].join(`
`);
            let p, g = 1 / 0;
            const f = n.codeBlockData[l];
            if (f) for(const v in f){
                const b = f[v];
                b.createdAt < g && (g = b.createdAt, p = b.bubbleId);
            }
            p && (i[l] = {
                content: h,
                firstEditBubbleId: p,
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
}, o3u = {
    version: 8,
    check: (e)=>e._v === 7,
    migrate: async (e, t)=>{
        const n = e, i = n.unifiedMode === "edit" ? "agent" : n.unifiedMode;
        return {
            ...n,
            unifiedMode: i,
            _v: 8
        };
    }
}, a3u = {
    version: 9,
    check: (e)=>e._v === 8,
    migrate: async (e, t)=>{
        const n = e, i = t.modelConfigService.getModelConfig("composer").modelName, r = t.modelConfigService.getModelConfig("composer").maxMode;
        return {
            ...n,
            modelConfig: {
                modelName: i,
                maxMode: r
            },
            _v: 9
        };
    }
}, c3u = {
    version: 10,
    check: (e)=>e._v === 9,
    migrate: async (e, t)=>{
        const n = e, i = crypto.getRandomValues(new Uint8Array(32));
        return {
            ...n,
            speculativeSummarizationEncryptionKey: i,
            _v: 10
        };
    }
}, l3u = {
    version: 11,
    check: (e)=>e._v === 10,
    migrate: async (e, t)=>{
        const n = e;
        let i;
        try {
            const s = new SN(t.storageService, n.composerId), o = await s.getLatestCheckpointPointer();
            if (o) {
                const a = qh(), c = await s.getBlob(a, o);
                c && (i = Hm.fromBinary(c), t.composerLogService?.info("[composerMigrations] V11: Loaded conversationState from blob store checkpoint", {
                    composerId: n.composerId,
                    turns: i.turns?.length ?? 0,
                    fileStates: Object.keys(i.fileStatesV2 ?? {}).length
                }));
            }
        } catch (s) {
            t.composerLogService?.warn("[composerMigrations] V11: Failed to load checkpoint from blob store", {
                composerId: n.composerId,
                error: s
            });
        }
        return i || (i = new Hm), {
            ...n,
            conversationState: i,
            _v: 11
        };
    }
}, u3u = {
    version: 12,
    check: (e)=>e._v === 11,
    migrate: async (e, t)=>({
            ...e,
            _v: 12
        })
}, d3u = {
    version: 13,
    check: (e)=>e._v === 12,
    migrate: async (e, t)=>({
            ...e,
            _v: 13,
            queueItems: []
        })
}, h3u = {
    version: 14,
    check: (e)=>e._v === 13,
    migrate: async (e, t)=>({
            ...e,
            _v: 14,
            activeBranch: void 0,
            branches: []
        })
}, p3u = {
    version: 15,
    check: (e)=>e._v === 14,
    migrate: async (e, t)=>{
        const n = [
            ...e.activeBranch ? [
                e.activeBranch
            ] : [],
            ...e.branches ?? []
        ].filter((s)=>typeof s?.branchName == "string" && s.branchName.length > 0).filter((s, o, a)=>a.findIndex((c)=>c.branchName === s.branchName) === o).map((s)=>({
                branchName: s.branchName,
                lastInteractionAt: Number.isFinite(s.lastInteractionAt) ? s.lastInteractionAt : 0
            })).sort((s, o)=>o.lastInteractionAt - s.lastInteractionAt);
        let i;
        if (n.length === 0) i = [];
        else {
            const s = e.workspaceIdentifier ? dwe(e.workspaceIdentifier) : void 0;
            if (t.gitContextService && s && rp(s)) {
                const o = await t.gitContextService.getGitRoot(s.uri.fsPath).catch(()=>{});
                o ? i = [
                    {
                        repoPath: o,
                        branches: n
                    }
                ] : i = void 0;
            } else i = void 0;
        }
        const r = {
            ...e,
            _v: 15,
            trackedGitRepos: i
        };
        return delete r.activeBranch, delete r.branches, r;
    }
}, m3u = {
    version: 16,
    check: (e)=>e._v === 15,
    migrate: async (e, t)=>({
            ...e,
            _v: 16
        })
}, g3u = {
    version: 17,
    check: (e)=>e._v === 16,
    migrate: async (e, t)=>({
            ...e,
            _v: 17
        })
}, f3u = {
    version: 18,
    check: (e)=>e._v === 17,
    migrate: async (e, t)=>({
            ...e,
            _v: 18,
            committedCustomMode: PFu({
                activeCustomMode: e.activeCustomMode,
                pendingExitedCustomMode: e.pendingExitedCustomMode
            }),
            pendingExitedCustomMode: null
        })
}, v3u = [
    JFu,
    e3u,
    t3u,
    n3u,
    i3u,
    r3u,
    s3u,
    o3u,
    a3u,
    c3u,
    l3u,
    u3u,
    d3u,
    h3u,
    p3u,
    m3u,
    g3u,
    f3u
];

}
