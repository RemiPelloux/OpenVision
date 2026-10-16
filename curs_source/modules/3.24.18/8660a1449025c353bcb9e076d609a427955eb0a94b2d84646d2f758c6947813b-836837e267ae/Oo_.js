import { emi } from "./ipa.js";
import { Nk, jts } from "./gYa.js";
import { PE } from "./Aeg.js";
import { Gp, HT, O$, et, h_ } from "./Ycg.js";
import { ML } from "./BA.js";
import { BG, PQw, SF, Tut, fg } from "./Asv.js";
import { Bgc, Fgc, Ngc, c3e, nmc, zwC } from "./gpc.js";
import { Po_, jCC } from "./Ao_.js";
import { en } from "./Iwo.js";
import { $o_, Bo_, Ho_, Uo_, jo_ } from "./agent-changes-tab-content.react.js";
import { SX } from "./agentRepositoryService.js";
import { U1s, j1s } from "./cloudAgentDiffContentsOmitted.js";
import { ILn } from "./editor-panel-context.react.js";
import { _p } from "./empty-state.js";
import { db } from "./glass-clipboard-service.js";
import { fOs } from "./glass-diff-virtualization-constants.js";
import { ul } from "./glass-notification-service.js";
import { tg } from "./glass-toast.js";
import { Yn } from "./notification.js";
import { zo_ } from "./output-tab-labels.js";
import { Xo_ } from "./output-tab-state.js";
import { bmc } from "./pr-diff-card.react.js";
import { Dmc } from "./pr-diff-list-view.react.js";
import { RI } from "./workspace.js";
import { Lc } from "./workspaceCollectionService.js";
import { c as Fo_ } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as eH, jsxs as HCC } from "./react-runtime/react/esm-jsx-runtime-production.js";
function WCC(t) {
    const e = Fo_(30), { cachedDiff: n, ownerAgentId: i } = t, { workspace: r } = HT(), s = et(db), o = et(ul), a = nmc(n.diffs);
    let l;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
        rootMargin: fOs
    }, e[0] = l) : l = e[0];
    const { intersectionObserver: c, setRootRef: u } = emi(l);
    let d;
    e[1] !== u ? (d = (A)=>{
        u(A?.viewportElement ?? null);
    }, e[1] = u, e[2] = d) : d = e[2];
    const h = d;
    let p;
    e[3] !== s || e[4] !== o ? (p = async (A)=>(await s.writeText(A.path), o.notify({
            severity: Yn.Info,
            message: "Copied path to clipboard",
            id: tg.copyDiffPath
        }), !0), e[3] = s, e[4] = o, e[5] = p) : p = e[5];
    const g = p;
    let f;
    e[6] !== g || e[7] !== c || e[8] !== i || e[9] !== r ? (f = (A, P, M)=>{
        const O = c3e(A);
        return eH(bmc, {
            diff: A,
            diffKey: O,
            diffListModel: P,
            diffSearch: M,
            interactionMode: "readOnly",
            intersectionObserver: c,
            onAddSelectionToChat: Uo_,
            onCollectSelectionMentions: jo_,
            onCopyPath: g,
            onSelectionActivated: $o_,
            onSelectionCleared: Ho_,
            ownerAgentId: i,
            prUrl: void 0,
            serviceWorkspace: r
        }, O);
    }, e[6] = g, e[7] = c, e[8] = i, e[9] = r, e[10] = f) : f = e[10];
    const _ = f;
    let b = 0, y = 0;
    for (const A of n.diffs)b = b + A.additions, y = y + A.deletions;
    let S;
    e[11] !== b || e[12] !== y ? (S = {
        additions: b,
        deletions: y
    }, e[11] = b, e[12] = y, e[13] = S) : S = e[13];
    const k = S;
    if (n.status === "loading") {
        let A;
        return e[14] === Symbol.for("react.memo_cache_sentinel") ? (A = eH("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr glass-9f619 glass-178xt8z glass-13fuv20 glass-1aeic0j",
            "data-component": "cached-agent-changes",
            "data-loading": !0,
            children: eH(ML, {
                label: "Loading changes"
            })
        }), e[14] = A) : A = e[14], A;
    }
    if (n.status === "error") {
        let A;
        return e[15] === Symbol.for("react.memo_cache_sentinel") ? (A = eH("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr",
            "data-component": "cached-agent-changes",
            children: eH(_p, {
                body: "Couldn't load this agent's changes."
            })
        }), e[15] = A) : A = e[15], A;
    }
    if (n.diffs.length === 0) {
        let A;
        return e[16] === Symbol.for("react.memo_cache_sentinel") ? (A = eH("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr",
            "data-component": "cached-agent-changes",
            children: eH(_p, {
                body: "No changes"
            })
        }), e[16] = A) : A = e[16], A;
    }
    let C;
    e[17] !== n.diffs.length || e[18] !== k.additions || e[19] !== k.deletions ? (C = eH("div", {
        className: "glass-78zum5 glass-dt5ytf glass-2lah0s glass-9f619 glass-178xt8z glass-13fuv20 glass-1aeic0j",
        children: eH(zwC, {
            additions: k.additions,
            deletions: k.deletions,
            fileCount: n.diffs.length,
            filterScope: "branch",
            scopeSwitchingDisabled: !0
        })
    }), e[17] = n.diffs.length, e[18] = k.additions, e[19] = k.deletions, e[20] = C) : C = e[20];
    let T;
    e[21] !== n.diffs || e[22] !== n.fileContentsOmitted || e[23] !== a || e[24] !== h || e[25] !== _ ? (T = eH("div", {
        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-b3r6kr",
        children: eH("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr",
            children: n.fileContentsOmitted ? eH(_p, {
                body: j1s,
                title: U1s
            }) : eH(Dmc, {
                diffs: n.diffs,
                model: a,
                onScrollAreaRef: h,
                renderDiffCard: _,
                totalDiffCount: n.diffs.length
            })
        })
    }), e[21] = n.diffs, e[22] = n.fileContentsOmitted, e[23] = a, e[24] = h, e[25] = _, e[26] = T) : T = e[26];
    let I;
    return e[27] !== C || e[28] !== T ? (I = HCC("div", {
        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr",
        "data-component": "cached-agent-changes",
        children: [
            C,
            T
        ]
    }), e[27] = C, e[28] = T, e[29] = I) : I = e[29], I;
}
export function GCC(t) {
    const e = Fo_(31), n = fg(), { workspace: i } = HT(), r = BG(t.bcId), s = r.kind === "ready" ? r.agentReference : void 0, o = SF(s, Lc.Git), a = !!(s && !o);
    let l;
    e[0] !== a ? (l = {
        enabled: a
    }, e[0] = a, e[1] = l) : l = e[1];
    const c = Tut(i, s?.header.id, l), u = !!s, d = !!o;
    let h;
    e[2] !== c.status || e[3] !== u || e[4] !== d ? (h = jCC({
        hasAgentReference: u,
        hasAgentWorkspace: d,
        machineReachabilityStatus: c.status
    }), e[2] = c.status, e[3] = u, e[4] = d, e[5] = h) : h = e[5];
    const p = h, { repoUrls: g, primaryActiveBranchName: f } = O$(s?.header), { pinnedBaseCommit: _, isResolving: b } = Ngc(i, p.kind === "cached" ? s?.header : void 0);
    let y;
    e[6] !== _ || e[7] !== f || e[8] !== g[0] ? (y = Fgc({
        pinnedBaseCommit: _,
        branchName: f,
        repoUrl: g[0]
    }), e[6] = _, e[7] = f, e[8] = g[0], e[9] = y) : y = e[9];
    const S = p.kind === "cached" && !b;
    let k;
    e[10] !== y || e[11] !== S ? (k = {
        target: y,
        enabled: S
    }, e[10] = y, e[11] = S, e[12] = k) : k = e[12];
    const C = Bgc(i, p.kind === "cached" ? t.bcId : null, k);
    let T;
    e: {
        if (!s || !o) {
            T = void 0;
            break e;
        }
        let A;
        e[13] !== n || e[14] !== s || e[15] !== o ? (A = {
            ...n,
            workspace: o,
            resolvedAgentReference: s,
            showPrTabForPrUrl: n.showPrTabForPrUrl,
            activateDiffTab: Bo_,
            selectionMenuSideChatAvailable: !1
        }, e[13] = n, e[14] = s, e[15] = o, e[16] = A) : A = e[16], T = A;
    }
    const I = T;
    if (r.kind === "error") {
        let A;
        return e[17] === Symbol.for("react.memo_cache_sentinel") ? (A = eH("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr",
            children: eH(_p, {
                body: "Unable to load cloud agent changes"
            })
        }), e[17] = A) : A = e[17], A;
    }
    switch(p.kind){
        case "cached":
            {
                if (!s) throw new Error("Cached agent changes require an agent reference");
                let A;
                return e[18] !== C || e[19] !== s.header.id ? (A = eH(WCC, {
                    cachedDiff: C,
                    ownerAgentId: s.header.id
                }), e[18] = C, e[19] = s.header.id, e[20] = A) : A = e[20], A;
            }
        case "unavailable":
            {
                const A = p.reason === "forbidden" ? "You are not authorized to access this agent's changes." : "Changes are not available for self-hosted workers from this workspace.";
                let P;
                return e[21] !== A ? (P = eH("div", {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr",
                    children: eH(_p, {
                        body: A
                    })
                }), e[21] = A, e[22] = P) : P = e[22], P;
            }
        case "loading":
            {
                let A;
                return e[23] === Symbol.for("react.memo_cache_sentinel") ? (A = eH("div", {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr glass-9f619 glass-178xt8z glass-13fuv20 glass-1aeic0j",
                    "data-loading": !0,
                    children: eH(ML, {
                        ariaLabel: "Loading cloud agent changes",
                        label: "Loading changes"
                    })
                }), e[23] = A) : A = e[23], A;
            }
        case "live":
            {
                if (!s || !o || !I) throw new Error("Live agent changes require a materialized workspace");
                let A;
                e[24] !== t.initialFilterScope || e[25] !== t.initialFilterScopeRequestId || e[26] !== t.presentationRequest ? (A = eH(Po_, {
                    initialFilterScope: t.initialFilterScope,
                    initialFilterScopeRequestId: t.initialFilterScopeRequestId,
                    presentationRequest: t.presentationRequest
                }), e[24] = t.initialFilterScope, e[25] = t.initialFilterScopeRequestId, e[26] = t.presentationRequest, e[27] = A) : A = e[27];
                let P;
                return e[28] !== I || e[29] !== A ? (P = eH(ILn.Provider, {
                    value: I,
                    children: A
                }), e[28] = I, e[29] = A, e[30] = P) : P = e[30], P;
            }
        default:
            return p;
    }
}
function zCC(t, e = []) {
    const n = new Map, i = YCC(e);
    for (const r of t.getDiagnostics().workspaces){
        const s = VCC(r.remoteAuthority), o = i.get(r.workspaceId);
        n.set(r.workspaceId, {
            displayName: r.displayName || "This workspace",
            environmentLabel: s.label,
            environmentKind: s.kind,
            agentSessionLabel: o?.agentSessionLabel,
            repoLabel: o?.repoLabel,
            branchLabel: o?.branchLabel
        });
    }
    return n;
}
function VCC(t) {
    const e = h_(t);
    switch(e.type){
        case "local":
            return {
                label: void 0,
                kind: e.type
            };
        case "remote-ssh":
            return {
                label: `SSH: ${e.host}`,
                kind: e.type
            };
        case "remote-wsl":
            return {
                label: `WSL: ${e.host}`,
                kind: e.type
            };
        case "dev-container":
            return {
                label: `Dev container: ${e.name}`,
                kind: e.type
            };
        case "background-agent":
            return {
                label: "Background agent",
                kind: e.type
            };
        default:
            return e;
    }
}
export function Wo_(t, e, n, i) {
    const r = ZCC(t, e, n);
    return i?.isCurrent ? `Current: ${r}` : r;
}
export function KCC(t, e) {
    if (!t) return;
    const n = e.get(t);
    if (n) return qo_(Go_(t, n.displayName), n);
}
function YCC(t) {
    const e = new Map;
    for (const n of t){
        const i = n.environment.value.id, r = n.trackedGitRepos.value, o = Nk(r)[0], a = {
            agentSessionLabel: XCC(n.name.value),
            repoLabel: o ? PE(o) : void 0,
            branchLabel: jts(r),
            lastUpdatedAt: n.lastUpdatedAt.value
        }, l = e.get(i);
        (!l || l.lastUpdatedAt < a.lastUpdatedAt) && e.set(i, a);
    }
    return e;
}
function XCC(t) {
    const e = t.trim();
    if (!(!e || e === SX)) return e;
}
function ZCC(t, e, n) {
    if (!t) return n;
    const i = e.get(t);
    return i ? qo_(Go_(t, i.displayName), i) : n;
}
function Go_(t, e) {
    return t === RI.id ? zo_ : e;
}
function qo_(t, e) {
    const n = e.environmentKind ?? "local", i = [
        n === "background-agent" && e.repoLabel ? e.repoLabel : t
    ];
    return n === "background-agent" && (rfc(i, e.agentSessionLabel), rfc(i, e.branchLabel)), rfc(i, e.environmentLabel ?? e.remoteHostLabel), i.join(" \xB7 ");
}
function rfc(t, e) {
    const n = e?.trim();
    if (!n) return;
    const i = n.toLocaleLowerCase();
    t.some((r)=>r.toLocaleLowerCase() === i) || t.push(n);
}
function QCC(t, e) {
    const n = [], i = [], r = [], s = [];
    for (const o of t)o.workspaceId === RI.id ? n.push(o) : o.workspaceId === e ? i.push(o) : o.workspaceId ? s.push(o) : r.push(o);
    return {
        rootWorkbenchDescriptors: n,
        matchingWorkspaceDescriptors: i,
        noWorkspaceIdDescriptors: r,
        otherWorkspaceDescriptors: s,
        otherWorkspaceGroups: Array.from(s.reduce((o, a)=>{
            const l = a.workspaceId;
            if (!l) return o;
            let c = o.get(l);
            return c || (c = [], o.set(l, c)), c.push(a), o;
        }, new Map), ([o, a])=>({
                workspaceId: o,
                descriptors: a
            })),
        orderedDescriptors: [
            ...n,
            ...i,
            ...r,
            ...s
        ]
    };
}
function eTC(t, e) {
    if (t === e) return !0;
    if (t.length !== e.length) return !1;
    for(let n = 0; n < t.length; n += 1)if (t[n] !== e[n]) return !1;
    return !0;
}
export function tTC(t, e) {
    if (t) return {
        channelId: t,
        requestId: e
    };
}
function sfc(t, e) {
    return t === void 0 || e === void 0 ? t === e : t.channelId === e.channelId && t.requestId === e.requestId;
}
function ofc(t) {
    return t.kind === "none" ? void 0 : t.identity;
}
function nTC(t, e, n) {
    if (sfc(ofc(t), n)) return {
        request: t,
        lastRequestGeneration: e
    };
    if (n === void 0) return {
        request: {
            kind: "none"
        },
        lastRequestGeneration: e
    };
    const i = e + 1;
    return {
        request: {
            kind: "pending",
            identity: n,
            generation: i
        },
        lastRequestGeneration: i
    };
}
function n8i(t, e) {
    return t.orderedDescriptors.some((n)=>n.id === e);
}
function iTC(t, e) {
    const n = t.matchingWorkspaceDescriptors.find((i)=>i.label === Xo_);
    return n !== void 0 ? n.id : e !== void 0 && n8i(t, e) ? e : t.orderedDescriptors[0]?.id ?? "";
}
function afc(t) {
    return t.kind !== "pending" ? t : {
        kind: "acknowledged",
        identity: t.identity,
        generation: t.generation
    };
}
function Ko_(t, e) {
    const n = QCC(e.descriptors, e.workspaceId), i = t?.request ?? {
        kind: "none"
    }, r = t !== void 0 && t.workspaceId !== e.workspaceId, s = r && sfc(ofc(i), e.explicitRequest), o = nTC(i, t?.lastRequestGeneration ?? 0, e.explicitRequest);
    let a = s ? afc(o.request) : o.request;
    const l = a.kind === "none" ? void 0 : a.identity.channelId;
    let c = t?.selectedId ?? "";
    return a.kind === "pending" && e.isActive && n8i(n, a.identity.channelId) ? (c = a.identity.channelId, a = afc(a)) : (r || !n8i(n, c)) && (c = (t === void 0 && l !== void 0 && n8i(n, l) ? l : void 0) ?? iTC(n, e.activeOutputChannelId)), {
        sourceDescriptors: e.descriptors,
        descriptorGroups: n,
        selectedId: c,
        request: a,
        lastRequestGeneration: o.lastRequestGeneration,
        workspaceId: e.workspaceId,
        activeOutputChannelId: e.activeOutputChannelId,
        isActive: e.isActive
    };
}
function Yo_(t, e) {
    return t.sourceDescriptors === e.descriptors && t.workspaceId === e.workspaceId && t.activeOutputChannelId === e.activeOutputChannelId && t.isActive === e.isActive && sfc(ofc(t.request), e.explicitRequest);
}
function rTC(t) {
    return Ko_(void 0, t);
}
function sTC(t, e) {
    switch(e.type){
        case "reconcile":
            return Yo_(t, e.input) ? t : Ko_(t, e.input);
        case "manual-select":
            {
                if (!n8i(t.descriptorGroups, e.channelId)) return t;
                const n = afc(t.request);
                return t.selectedId === e.channelId && n === t.request ? t : {
                    ...t,
                    selectedId: e.channelId,
                    request: n
                };
            }
        default:
            return e;
    }
}
import { c as oTC } from "./react-runtime/react/esm-compiler-runtime-production.js";
export function aTC(t, e) {
    const n = oTC(6);
    let i;
    n[0] !== e.onDidRegisterChannel || n[1] !== e.onDidRemoveChannel ? (i = en.any(e.onDidRegisterChannel, e.onDidRemoveChannel), n[0] = e.onDidRegisterChannel, n[1] = e.onDidRemoveChannel, n[2] = i) : i = n[2];
    const r = i;
    let s;
    n[3] !== t ? (s = ()=>t.getChannelDescriptors(), n[3] = t, n[4] = s) : s = n[4];
    const o = s;
    let a;
    return n[5] === Symbol.for("react.memo_cache_sentinel") ? (a = {
        isEqual: eTC
    }, n[5] = a) : a = n[5], Gp(r, o, a);
}
import { c as cTC } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useReducer as uTC } from "./react-runtime/react/esm-index-production.js";
export function dTC(t) {
    const e = cTC(3), [n, i] = uTC(sTC, t, rTC);
    Yo_(n, t) || i({
        type: "reconcile",
        input: t
    });
    let r;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = (a)=>{
        i({
            type: "manual-select",
            channelId: a
        });
    }, e[0] = r) : r = e[0];
    const s = r;
    let o;
    return e[1] !== n ? (o = {
        snapshot: n,
        selectChannel: s
    }, e[1] = n, e[2] = o) : o = e[2], o;
}
import { c as pTC } from "./react-runtime/react/esm-compiler-runtime-production.js";
function mTC(t, e) {
    return t.displayName === e.displayName && t.remoteHostLabel === e.remoteHostLabel && t.environmentLabel === e.environmentLabel && t.environmentKind === e.environmentKind && t.agentSessionLabel === e.agentSessionLabel && t.repoLabel === e.repoLabel && t.branchLabel === e.branchLabel;
}
function gTC(t, e) {
    if (t === e) return !0;
    if (t.size !== e.size) return !1;
    for (const [n, i] of t){
        const r = e.get(n);
        if (r === void 0 || !mTC(i, r)) return !1;
    }
    return !0;
}
function fTC(t, e) {
    return gTC(t.workspaceInfoById, e.workspaceInfoById);
}
export function vTC(t, e) {
    const n = pTC(5), i = PQw(e);
    let r;
    n[0] !== e || n[1] !== i || n[2] !== t ? (r = ()=>({
            headerFieldsToken: i,
            workspaceInfoById: zCC(t, e)
        }), n[0] = e, n[1] = i, n[2] = t, n[3] = r) : r = n[3];
    const s = r;
    let o;
    return n[4] === Symbol.for("react.memo_cache_sentinel") ? (o = {
        isEqual: fTC
    }, n[4] = o) : o = n[4], Gp(t.onDidChangeDiagnostics, s, o).workspaceInfoById;
}

export var Oo_ = {};
Object.defineProperty(Oo_, "AgentChangesTabContent", {
    enumerable: true,
    get: ()=>GCC
});
