import { D, Sa, Vh, Wd } from "./Iwo.js";
import { tIo } from "./SZu.js";
import { An, ao, nn, ri } from "./LYd.js";
import { O1t, ho } from "./nca.js";
import { Ajt, BUt, WW, cFp, gkt, hae, xCn } from "./ipa.js";
import { Zg, eG } from "./yBp.js";
import { $i, bl, dxt, et, vMi } from "./Ycg.js";
import { $Te, ML, Sjf, fDe } from "./BA.js";
import { BG, Sut, Yzl, _xs, bzl, cdv, fg, hxs, ire, vxs, wut, yVl } from "./Asv.js";
import { Kw0 } from "./ofv.js";
import { y2t } from "./BPv.js";
import { LBi, P6n, POs } from "./gpc.js";
import { DEe, Id_, Od_, Rd_, Wfc, aFs, cfc, gd_, ih_, nu_, nx, oFs, pd_, pp_, u_c, wd_ } from "./Zo_.js";
import { $7C, B7C, D7C, F7C, Iv_, L7C, N7C, Q7C, U7C, fyc, gyc, j7C, jv_, xv_ } from "./mm_.js";
import { GaT } from "./FT_.js";
import { sJ } from "./DiffCard.js";
import { lIo } from "./agent-store-commands.ts";
import { XZn } from "./agent-store-ids.ts";
import { Wen } from "./diff-card.react.js";
import { _p } from "./empty-state.js";
import { tG } from "./fsdOutputKinds.js";
import { db } from "./glass-clipboard-service.js";
import { ege } from "./glass-language-service.js";
import { xf } from "./glass-opener-service.js";
import { $d } from "./glass-tab-persistence-service.contract.js";
import { XT_, YT_, c9s } from "./machine-memory-chart.react.js";
import { QT_ } from "./machine-tab-content.react.js";
import { c6s, l6s, v7i } from "./machineResources.js";
import { s9n } from "./main-bot-tasks-service.js";
import { dE_, hE_ } from "./merge-project-board.js";
import { p5p } from "./project-document.ts";
import { Kkc, aE_, lE_, oE_, rE_, sE_ } from "./project-notes-mirrors.js";
import { Aa, Mc, Os } from "./resources.js";
import { xg } from "./scroll-area.js";
import { GT_, Gkc, WT_, Wkc, qT_, snn, zT_ } from "./suggestion-tab-content.react.js";
import { E5i } from "./task-board.react.js";
import { xs } from "./tooltip.js";
import { c as l9s } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as $kc } from "./react-runtime/react/esm-index-production.js";
import { jsx as MR, jsxs as kSe, Fragment as Hkc } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function VaT(t) {
    const e = l9s(173), { tabId: n } = WW(), { workspace: i } = fg(), r = et(xf), s = et(db), o = $i(i, $d), { code: a } = y2t();
    let l;
    e[0] !== s ? (l = (Un)=>(s.writeText(Un.path), !0), e[0] = s, e[1] = l) : l = e[1];
    const c = l, u = bl(WT_), d = BG(t.ownerAgentId), h = d.kind === "ready" ? d.agentReference : void 0;
    let p;
    e[2] !== h || e[3] !== t.branchName ? (p = Od_({
        branchName: t.branchName,
        agentReference: h
    }), e[2] = h, e[3] = t.branchName, e[4] = p) : p = e[4];
    const g = p, f = u && !g, _ = f && t.prUrl.length > 0;
    let b;
    e[5] !== _ ? (b = {
        enabled: _
    }, e[5] = _, e[6] = b) : b = e[6];
    const y = gd_(t.prUrl, b);
    let S;
    e[7] !== y.data ? (S = y.data ?? [], e[7] = y.data, e[8] = S) : S = e[8];
    let k;
    if (e[9] !== t.bcId || e[10] !== t.stableKey || e[11] !== S) {
        let Un;
        e[13] !== t.bcId || e[14] !== t.stableKey ? (Un = (Xn)=>Xn.bcId === t.bcId && Xn.stableKey === t.stableKey, e[13] = t.bcId, e[14] = t.stableKey, e[15] = Un) : Un = e[15], k = S.find(Un), e[9] = t.bcId, e[10] = t.stableKey, e[11] = S, e[12] = k;
    } else k = e[12];
    const C = k;
    let T;
    e[16] !== y.data ? (T = y.data ?? [], e[16] = y.data, e[17] = T) : T = e[17];
    let I;
    e[18] !== T ? (I = T.filter(YaT), e[18] = T, e[19] = I) : I = e[19];
    const A = I, P = t.isCloudFsdEnabled ?? !1, M = t.branchName ?? "";
    let O;
    e[20] !== M || e[21] !== f || e[22] !== P || e[23] !== h || e[24] !== t.prUrl ? (O = {
        agentReference: h,
        branchName: M,
        prUrl: t.prUrl,
        isCloudFsdEnabled: P,
        enabled: f
    }, e[20] = M, e[21] = f, e[22] = P, e[23] = h, e[24] = t.prUrl, e[25] = O) : O = e[25];
    const N = pp_(O), U = pd_(), j = f && C !== void 0;
    let $;
    e[26] !== C || e[27] !== t.repoPath || e[28] !== j ? ($ = {
        finding: C,
        repoPath: t.repoPath,
        enabled: j
    }, e[26] = C, e[27] = t.repoPath, e[28] = j, e[29] = $) : $ = e[29];
    const H = ih_($);
    let G;
    e[30] !== C ? (G = C ? aFs(C) : void 0, e[30] = C, e[31] = G) : G = e[31];
    const q = G, K = f && q !== void 0 && t.prUrl.length > 0;
    let V;
    e[32] !== t.prUrl || e[33] !== K ? (V = {
        prUrl: t.prUrl,
        enabled: K,
        includeTimeline: !1
    }, e[32] = t.prUrl, e[33] = K, e[34] = V) : V = e[34];
    const Y = cfc(V);
    let J;
    if (e[35] !== q || e[36] !== Y.discussions.threads) {
        e: {
            if (q === void 0) {
                J = void 0;
                break e;
            }
            if (q.commentId !== void 0) {
                for (const Un of Y.discussions.threads)if (Un.comments.some((Xn)=>Xn.id === q.commentId)) {
                    J = Un;
                    break e;
                }
            }
            if (q.threadId !== void 0) {
                for (const Un of Y.discussions.threads)if (Un.id === q.threadId) {
                    J = Un;
                    break e;
                }
            }
            J = void 0;
        }
        e[35] = q, e[36] = Y.discussions.threads, e[37] = J;
    } else J = e[37];
    const Q = J;
    let te = 0, ee = 0;
    if (e[38] !== te || e[39] !== ee || e[40] !== H.diffs) {
        for (const Un of H.diffs)te = te + Un.additions, ee = ee + Un.deletions;
        e[38] = te, e[39] = ee, e[40] = H.diffs, e[41] = te, e[42] = ee;
    } else te = e[41], ee = e[42];
    let re;
    e[43] !== te || e[44] !== ee ? (re = {
        additions: te,
        deletions: ee
    }, e[43] = te, e[44] = ee, e[45] = re) : re = e[45];
    const ie = re;
    let oe;
    e[46] !== C ? (oe = C ? DEe(C) : void 0, e[46] = C, e[47] = oe) : oe = e[47];
    const se = oe;
    let le;
    e[48] !== N || e[49] !== C ? (le = C ? Id_(C, N.optimisticallyAcceptedKeys, N.optimisticallyUndoneKeys) : !1, e[48] = N, e[49] = C, e[50] = le) : le = e[50];
    const ce = le, ae = ce ? void 0 : q?.suggestedReplyBody;
    let de;
    e[51] !== N || e[52] !== C ? (de = C ? N.isApplyingFinding(C) : !1, e[51] = N, e[52] = C, e[53] = de) : de = e[53];
    const he = de;
    let ge;
    e[54] !== N || e[55] !== C || e[56] !== P ? (ge = C ? N.optimisticallyUndoneKeys.has(nx(C)) ? Rd_(C, {
        isCloudFsdEnabled: P
    }) : oFs(C, {
        isCloudFsdEnabled: P
    }) : !1, e[54] = N, e[55] = C, e[56] = P, e[57] = ge) : ge = e[57];
    const pe = ge;
    let ve;
    e[58] !== N || e[59] !== C ? (ve = ()=>{
        C && N.applyFinding(C);
    }, e[58] = N, e[59] = C, e[60] = ve) : ve = e[60];
    const fe = ve;
    let Te;
    e[61] !== N || e[62] !== C ? (Te = ()=>{
        C && N.undoFinding(C);
    }, e[61] = N, e[62] = C, e[63] = Te) : Te = e[63];
    const _e = Te;
    let Ce;
    e[64] !== U || e[65] !== C || e[66] !== t.prUrl || e[67] !== n || e[68] !== o ? (Ce = ()=>{
        if (!C) return;
        const Un = C.prUrl.trim() || t.prUrl;
        U.mutate({
            prUrl: Un,
            bcId: C.bcId,
            stableKey: C.stableKey
        }), o.closeTab(n);
    }, e[64] = U, e[65] = C, e[66] = t.prUrl, e[67] = n, e[68] = o, e[69] = Ce) : Ce = e[69];
    const Se = Ce;
    let Pe;
    e[70] !== se || e[71] !== t.prUrl ? (Pe = se ? u_c({
        prUrl: t.prUrl,
        baseSha: wd_(se),
        headSha: se.headCommitSha
    }) : void 0, e[70] = se, e[71] = t.prUrl, e[72] = Pe) : Pe = e[72];
    const we = Pe;
    let Ie;
    e[73] !== we || e[74] !== r ? (Ie = ()=>{
        we && r.open(we, {
            openExternal: !0
        });
    }, e[73] = we, e[74] = r, e[75] = Ie) : Ie = e[75];
    const Me = Ie, [De, Ne] = $kc(!1);
    let be;
    e[76] === Symbol.for("react.memo_cache_sentinel") ? (be = {
        defaultWidth: GT_,
        minWidth: qT_,
        maxWidth: zT_,
        direction: "left"
    }, e[76] = be) : be = e[76];
    const { width: je, isResizing: $e, panelRef: Je, handleProps: Ge } = Sut(be), { onMouseDown: xe } = Ge;
    let Oe;
    e[77] === Symbol.for("react.memo_cache_sentinel") ? (Oe = ()=>{
        Ne(KaT);
    }, e[77] = Oe) : Oe = e[77];
    const ct = Oe;
    let Ye;
    e[78] !== C ? (Ye = C ? nx(C) : void 0, e[78] = C, e[79] = Ye) : Ye = e[79];
    const Ve = Ye;
    let Xe;
    e[80] !== t.bcId || e[81] !== t.branchName || e[82] !== t.isCloudFsdEnabled || e[83] !== t.ownerAgentId || e[84] !== t.prUrl || e[85] !== t.repoPath || e[86] !== o ? (Xe = (Un)=>{
        const Xn = Un.bcId.trim() || t.bcId;
        o.openSuggestionTab({
            prUrl: t.prUrl,
            bcId: Xn,
            stableKey: Un.stableKey,
            ownerAgentId: t.ownerAgentId,
            branchName: t.branchName,
            isCloudFsdEnabled: t.isCloudFsdEnabled,
            repoPath: t.repoPath,
            title: Un.title
        });
    }, e[80] = t.bcId, e[81] = t.branchName, e[82] = t.isCloudFsdEnabled, e[83] = t.ownerAgentId, e[84] = t.prUrl, e[85] = t.repoPath, e[86] = o, e[87] = Xe) : Xe = e[87];
    const lt = Xe;
    let He;
    e[88] !== De || e[89] !== A.length ? (He = A.length > 0 ? MR(xs, {
        content: MR(ao, {
            title: De ? "Hide Suggestion List" : "Show Suggestion List"
        }),
        placement: "bottom",
        children: MR(ho, {
            "aria-expanded": De,
            "aria-label": De ? "Hide suggestion list" : "Show suggestion list",
            icon: "list-bullets",
            onClick: ct,
            size: "md",
            iconSize: "base"
        })
    }) : null, e[88] = De, e[89] = A.length, e[90] = He) : He = e[90];
    const gt = He;
    let ht;
    e[91] !== Ve || e[92] !== lt || e[93] !== xe || e[94] !== De || e[95] !== $e || e[96] !== A || e[97] !== Je || e[98] !== je ? (ht = De && A.length > 0 ? kSe("div", {
        className: "glass-78zum5 glass-dt5ytf glass-euugli glass-2lah0s glass-1n2onr6 glass-jbqb8w glass-e0pwq glass-19ypqd9 glass-1arpupx glass-6ikm8r glass-10wlt62",
        "data-side": "right",
        ref: Je,
        style: {
            width: je
        },
        children: [
            MR(GaT, {
                activeFindingKey: Ve,
                findings: A,
                onOpenSuggestion: lt
            }),
            MR(wut, {
                isResizing: $e,
                label: "Resize suggestion list",
                onMouseDown: xe,
                position: "left",
                width: je
            })
        ]
    }) : null, e[91] = Ve, e[92] = lt, e[93] = xe, e[94] = De, e[95] = $e, e[96] = A, e[97] = Je, e[98] = je, e[99] = ht) : ht = e[99];
    const Ae = ht;
    if (g) return null;
    if (t.ownerAgentId !== void 0 && d.kind === "loading") {
        let Un;
        return e[100] === Symbol.for("react.memo_cache_sentinel") ? (Un = MR(ML, {
            ariaLabel: "Loading suggestion",
            label: "Loading suggestion"
        }), e[100] = Un) : Un = e[100], Un;
    }
    if (y.isLoading && C === void 0) {
        let Un;
        return e[101] === Symbol.for("react.memo_cache_sentinel") ? (Un = MR(ML, {
            ariaLabel: "Loading suggestion",
            label: "Loading suggestion"
        }), e[101] = Un) : Un = e[101], Un;
    }
    if (!C) {
        let Un;
        return e[102] === Symbol.for("react.memo_cache_sentinel") ? (Un = MR(_p, {
            body: "This suggestion is no longer available."
        }), e[102] = Un) : Un = e[102], Un;
    }
    let ot;
    e[103] !== C.title || e[104] !== t.title ? (ot = C.title.trim() || t.title?.trim() || "Suggestion", e[103] = C.title, e[104] = t.title, e[105] = ot) : ot = e[105];
    const Be = ot;
    let Ue;
    e[106] !== C.body ? (Ue = C.body.trim(), e[106] = C.body, e[107] = Ue) : Ue = e[107];
    const it = Ue;
    let qe;
    e[108] !== t.prUrl ? (qe = eG(t.prUrl), e[108] = t.prUrl, e[109] = qe) : qe = e[109];
    const pt = qe, dt = pt ? `Suggestions PR #${pt}` : "Suggestions";
    let ft;
    e[110] === Symbol.for("react.memo_cache_sentinel") ? (ft = ri("suggestion-tab", "glass-78zum5 glass-dt5ytf glass-5yr21d glass-2lwn1j glass-6ikm8r glass-10wlt62 glass-178xt8z glass-13fuv20 glass-1aeic0j"), e[110] = ft) : ft = e[110];
    let bt;
    e[111] === Symbol.for("react.memo_cache_sentinel") ? (bt = MR(nn, {
        color: "secondary",
        size: "md",
        children: "Suggestions"
    }), e[111] = bt) : bt = e[111];
    let St;
    e[112] !== pt ? (St = pt ? kSe(nn, {
        color: "tertiary",
        numeric: !0,
        size: "md",
        children: [
            "PR #",
            pt
        ]
    }) : null, e[112] = pt, e[113] = St) : St = e[113];
    let Et;
    e[114] !== dt || e[115] !== St ? (Et = MR("div", {
        className: "glass-78zum5 glass-6s0dn4 glass-11twubx glass-1iyjqo2 glass-s83m0k glass-1r8uery glass-euugli glass-6ikm8r glass-10wlt62",
        children: kSe("span", {
            className: "glass-3nfvp2 glass-6s0dn4 glass-11twubx glass-euugli glass-6ikm8r glass-10wlt62",
            title: dt,
            children: [
                bt,
                St
            ]
        })
    }), e[114] = dt, e[115] = St, e[116] = Et) : Et = e[116];
    let kt;
    e[117] !== gt ? (kt = MR("div", {
        className: "glass-78zum5 glass-6s0dn4 glass-11twubx glass-2lah0s",
        children: gt
    }), e[117] = gt, e[118] = kt) : kt = e[118];
    let xt;
    e[119] !== Et || e[120] !== kt ? (xt = kSe("div", {
        className: "glass-78zum5 glass-6s0dn4 glass-1qughib glass-11twubx glass-euugli glass-1lfmsv0 glass-exx8yu glass-16b7oty glass-18d9i69 glass-1o7kk3e glass-so031l glass-1q0q8m5 glass-17fyfba",
        children: [
            Et,
            kt
        ]
    }), e[119] = Et, e[120] = kt, e[121] = xt) : xt = e[121];
    let Pt;
    e[122] !== Be ? (Pt = MR(nn, {
        color: "primary",
        rootStyle: snn.title,
        size: "lg",
        title: Be,
        truncate: !0,
        weight: "regular",
        children: Be
    }), e[122] = Be, e[123] = Pt) : Pt = e[123];
    let Dt;
    e[124] !== ie.additions || e[125] !== ie.deletions ? (Dt = ie.additions > 0 || ie.deletions > 0 ? MR(sJ.Stats, {
        additions: ie.additions,
        deletions: ie.deletions
    }) : null, e[124] = ie.additions, e[125] = ie.deletions, e[126] = Dt) : Dt = e[126];
    let Vt;
    e[127] !== Pt || e[128] !== Dt ? (Vt = kSe("div", {
        className: "glass-78zum5 glass-6s0dn4 glass-ehausa glass-euugli glass-1iyjqo2 glass-s83m0k glass-1t1x2f9",
        children: [
            Pt,
            Dt
        ]
    }), e[127] = Pt, e[128] = Dt, e[129] = Vt) : Vt = e[129];
    let tn;
    e[130] !== N || e[131] !== pe || e[132] !== U || e[133] !== C || e[134] !== fe || e[135] !== Se || e[136] !== _e || e[137] !== ce || e[138] !== he ? (tn = MR("div", {
        className: "glass-3nfvp2 glass-6s0dn4 glass-pkkfsy glass-2lah0s",
        children: ce ? kSe(Hkc, {
            children: [
                MR(nn, {
                    color: "secondary",
                    rootStyle: snn.accepted,
                    size: "md",
                    children: "Accepted"
                }),
                N.isFindingUndoable(C) ? MR(An, {
                    disabled: N.isUndoingFinding(C),
                    onClick: _e,
                    variant: "ghost",
                    children: "Undo"
                }) : null
            ]
        }) : kSe(Hkc, {
            children: [
                MR(An, {
                    disabled: U.isPending,
                    onClick: Se,
                    variant: "ghost",
                    children: "Reject"
                }),
                MR(An, {
                    disabled: !pe || he,
                    onClick: fe,
                    variant: "primary",
                    children: "Accept"
                })
            ]
        })
    }), e[130] = N, e[131] = pe, e[132] = U, e[133] = C, e[134] = fe, e[135] = Se, e[136] = _e, e[137] = ce, e[138] = he, e[139] = tn) : tn = e[139];
    let un;
    e[140] !== Vt || e[141] !== tn ? (un = kSe("div", {
        className: "glass-78zum5 glass-6s0dn4 glass-1qughib glass-1oot3zn glass-euugli glass-at24cr",
        children: [
            Vt,
            tn
        ]
    }), e[140] = Vt, e[141] = tn, e[142] = un) : un = e[142];
    let kn;
    e[143] !== it ? (kn = it.length > 0 ? MR(nn, {
        as: "p",
        color: "tertiary",
        rootStyle: snn.rationale,
        size: "md",
        children: it
    }) : null, e[143] = it, e[144] = kn) : kn = e[144];
    let oi;
    e[145] !== un || e[146] !== kn ? (oi = kSe("header", {
        className: "glass-78zum5 glass-dt5ytf glass-11twubx glass-1t8xvyj glass-1yxiud8 glass-usxwy5 glass-1o7kk3e",
        children: [
            un,
            kn
        ]
    }), e[145] = un, e[146] = kn, e[147] = oi) : oi = e[147];
    let Fn;
    e[148] !== xt || e[149] !== oi ? (Fn = kSe("div", {
        className: "glass-78zum5 glass-dt5ytf glass-2lah0s glass-9f619 glass-so031l glass-1q0q8m5 glass-17fyfba",
        children: [
            xt,
            oi
        ]
    }), e[148] = xt, e[149] = oi, e[150] = Fn) : Fn = e[150];
    let Qt;
    e[151] !== a || e[152] !== Q || e[153] !== q || e[154] !== we || e[155] !== H.diffs || e[156] !== H.error || e[157] !== H.isLoading || e[158] !== c || e[159] !== Me || e[160] !== Y || e[161] !== ae ? (Qt = MR(xg, {
        rootStyle: snn.scroll,
        children: H.isLoading || q !== void 0 && Y.discussions.isLoading && Q === void 0 ? MR(nn, {
            as: "div",
            color: "tertiary",
            rootStyle: snn.diffStatus,
            size: "md",
            children: "Loading diff\u2026"
        }) : H.diffs.length > 0 ? MR("div", {
            className: "glass-78zum5 glass-dt5ytf glass-euugli glass-exx8yu glass-1xpa7k glass-nmno4p glass-1uhho1l glass-xhr3t",
            children: H.diffs.map((Un)=>MR(ZaT, {
                    commentThread: Q && XaT(Q.path, Un.path) ? Q : void 0,
                    diff: Un,
                    fontSizePx: a.fontSizePx,
                    gutterFontSizePx: a.gutterFontSizePx,
                    lineHeightPx: a.lineHeightPx,
                    onCopyPath: c,
                    suggestedReplyBody: ae
                }, Un.fullPath || Un.path))
        }) : Q ? MR("div", {
            className: "glass-78zum5 glass-dt5ytf glass-euugli glass-exx8yu glass-1xpa7k glass-nmno4p glass-1uhho1l glass-xhr3t",
            children: MR(QaT, {
                suggestedReplyBody: ae,
                thread: Q
            })
        }) : kSe("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1cy8zhl glass-ehausa glass-1t8xvyj glass-1jkygx glass-usxwy5 glass-1o7kk3e",
            children: [
                MR(nn, {
                    as: "p",
                    color: "secondary",
                    rootStyle: snn.emptyDiffText,
                    size: "md",
                    children: q !== void 0 ? "Couldn't load the GitHub comment thread for this suggestion." : H.error ? "Couldn't load the diff for this suggestion." : "The diff for this suggestion can't be shown inline."
                }),
                we ? MR(An, {
                    onClick: Me,
                    size: "sm",
                    variant: "primary",
                    children: "View diff on GitHub"
                }) : null
            ]
        })
    }), e[151] = a, e[152] = Q, e[153] = q, e[154] = we, e[155] = H.diffs, e[156] = H.error, e[157] = H.isLoading, e[158] = c, e[159] = Me, e[160] = Y, e[161] = ae, e[162] = Qt) : Qt = e[162];
    let Sn;
    e[163] !== t.prUrl || e[164] !== Qt ? (Sn = MR(Wfc, {
        prUrl: t.prUrl,
        children: Qt
    }), e[163] = t.prUrl, e[164] = Qt, e[165] = Sn) : Sn = e[165];
    let $n;
    e[166] !== Ae || e[167] !== Sn ? ($n = kSe("div", {
        className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j",
        children: [
            Sn,
            Ae
        ]
    }), e[166] = Ae, e[167] = Sn, e[168] = $n) : $n = e[168];
    let Mn;
    return e[169] !== ft || e[170] !== Fn || e[171] !== $n ? (Mn = kSe("div", {
        className: ft,
        children: [
            Fn,
            $n
        ]
    }), e[169] = ft, e[170] = Fn, e[171] = $n, e[172] = Mn) : Mn = e[172], Mn;
}
function KaT(t) {
    return !t;
}
function YaT(t) {
    return t.kind === tG || aFs(t) !== void 0;
}
function XaT(t, e) {
    return t.trim() === e.trim();
}
function ZaT(t) {
    const e = l9s(35), { commentThread: n, diff: i, fontSizePx: r, gutterFontSizePx: s, lineHeightPx: o, onCopyPath: a, suggestedReplyBody: l } = t, c = et(ege), u = LBi(c), [d, h] = $kc(!0);
    let p;
    e[0] !== i.path ? (p = gkt(i.path), e[0] = i.path, e[1] = p) : p = e[1];
    const g = p;
    let f;
    e[2] !== i.precomputedDiff ? (f = i.precomputedDiff ? O1t(i.precomputedDiff) : !0, e[2] = i.precomputedDiff, e[3] = f) : f = e[3];
    const _ = f, b = i.status === "renamed" ? i.renamedFromPath : void 0, y = P6n(b ?? i.path), S = i.path;
    let k;
    e[4] !== i.path || e[5] !== b ? (k = b ? {
        kind: "renamed",
        oldPath: b,
        newPath: i.path
    } : {
        kind: "simple",
        path: i.path
    }, e[4] = i.path, e[5] = b, e[6] = k) : k = e[6];
    const C = i.additions, T = i.deletions;
    let I;
    e[7] !== i.status ? (I = POs(i.status), e[7] = i.status, e[8] = I) : I = e[8];
    let A;
    e[9] !== n || e[10] !== i.modifiedContent || e[11] !== i.originalContent || e[12] !== i.precomputedDiff || e[13] !== i.status || e[14] !== _ || e[15] !== r || e[16] !== s || e[17] !== g || e[18] !== o || e[19] !== u || e[20] !== d || e[21] !== l ? (A = d ? [
        {
            key: "diff",
            kind: "content",
            children: kSe(Hkc, {
                children: [
                    MR(BUt, {
                        coloredLineNumbers: !0,
                        contextLines: i.status === "added" ? 999 : 3,
                        expandableUnchanged: _,
                        fontSizePx: r,
                        gutterFontSizePx: s,
                        language: g,
                        lineHeightPx: o,
                        lineTokenizer: u,
                        modified: i.modifiedContent,
                        original: i.originalContent,
                        precomputedDiff: i.precomputedDiff,
                        showLineNumbers: "partial",
                        showPlusMinus: !1,
                        sync: !1
                    }),
                    n ? MR(HT_, {
                        hideDiffHunk: !0,
                        suggestedReplyBody: l,
                        thread: n
                    }) : null
                ]
            })
        }
    ] : [], e[9] = n, e[10] = i.modifiedContent, e[11] = i.originalContent, e[12] = i.precomputedDiff, e[13] = i.status, e[14] = _, e[15] = r, e[16] = s, e[17] = g, e[18] = o, e[19] = u, e[20] = d, e[21] = l, e[22] = A) : A = e[22];
    let P;
    e[23] !== i.additions || e[24] !== i.deletions || e[25] !== i.path || e[26] !== y || e[27] !== d || e[28] !== k || e[29] !== I || e[30] !== A ? (P = {
        filePath: S,
        className: "pr-diff-card",
        open: d,
        collapsible: !0,
        stickyHeader: !0,
        icon: y,
        path: k,
        additions: C,
        deletions: T,
        status: I,
        body: A
    }, e[23] = i.additions, e[24] = i.deletions, e[25] = i.path, e[26] = y, e[27] = d, e[28] = k, e[29] = I, e[30] = A, e[31] = P) : P = e[31];
    const M = P;
    let O;
    return e[32] !== M || e[33] !== a ? (O = MR(Wen, {
        model: M,
        onCopyPath: a,
        onNativeSelectionChange: Gkc,
        onOpenChange: h,
        onOpenPath: Wkc
    }), e[32] = M, e[33] = a, e[34] = O) : O = e[34], O;
}
function QaT(t) {
    const e = l9s(12), { suggestedReplyBody: n, thread: i } = t, [r, s] = $kc(!0), o = P6n(i.path);
    let a;
    e[0] !== i.path ? (a = {
        kind: "simple",
        path: i.path
    }, e[0] = i.path, e[1] = a) : a = e[1];
    let l;
    e[2] !== r || e[3] !== n || e[4] !== i ? (l = r ? [
        {
            key: "comment-thread",
            kind: "content",
            children: MR(HT_, {
                suggestedReplyBody: n,
                thread: i
            })
        }
    ] : [], e[2] = r, e[3] = n, e[4] = i, e[5] = l) : l = e[5];
    let c;
    if (e[6] !== o || e[7] !== r || e[8] !== a || e[9] !== l || e[10] !== i.path) {
        const u = {
            filePath: i.path,
            className: "pr-diff-card",
            open: r,
            collapsible: !0,
            stickyHeader: !0,
            icon: o,
            path: a,
            additions: 0,
            deletions: 0,
            status: void 0,
            body: l
        };
        c = MR(Wen, {
            model: u,
            onCopyPath: JaT,
            onNativeSelectionChange: Gkc,
            onOpenChange: s,
            onOpenPath: Wkc
        }), e[6] = o, e[7] = r, e[8] = a, e[9] = l, e[10] = i.path, e[11] = c;
    } else c = e[11];
    return c;
}
function JaT() {
    return !0;
}
function HT_(t) {
    const e = l9s(4), { hideDiffHunk: n, suggestedReplyBody: i, thread: r } = t;
    let s;
    return e[0] !== n || e[1] !== i || e[2] !== r ? (s = MR("div", {
        className: "glass-exx8yu glass-1xpa7k glass-18d9i69 glass-1uhho1l glass-178xt8z glass-13fuv20 glass-1aeic0j glass-1ua6jya",
        children: MR(nu_, {
            hideDiffHunk: n,
            suggestedReplyBody: i,
            thread: r
        })
    }), e[0] = n, e[1] = i, e[2] = r, e[3] = s) : s = e[3], s;
}
export var VT_ = {};
Sa(VT_, {
    AgentContextTabContent: ()=>nlT
});
import { c as tlT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as KT_ } from "./react-runtime/react/esm-jsx-runtime-production.js";
function nlT(t) {
    const e = tlT(10), { isActive: n } = WW(), { resolvedAgentReference: i } = fg(), r = i.header.id === t.agentId && i.header.source === "draft";
    let s;
    e[0] !== n || e[1] !== r || e[2] !== t.agentId ? (s = {
        agentId: t.agentId,
        isDraftAgent: r,
        enabled: n
    }, e[0] = n, e[1] = r, e[2] = t.agentId, e[3] = s) : s = e[3];
    const { agentStore: o, expansion: a, teamStore: l, userStore: c } = yVl(s);
    let u;
    return e[4] !== o || e[5] !== a || e[6] !== t.agentId || e[7] !== l || e[8] !== c ? (u = KT_("div", {
        className: "glass-78zum5 glass-dt5ytf glass-5yr21d glass-euugli glass-9f619 glass-178xt8z glass-13fuv20 glass-1aeic0j",
        "data-component": "agent-context-tab",
        children: KT_(cdv, {
            agentId: t.agentId,
            agentStore: o,
            expansion: a,
            teamStore: l,
            userStore: c
        })
    }), e[4] = o, e[5] = a, e[6] = t.agentId, e[7] = l, e[8] = c, e[9] = u) : u = e[9], u;
}
import { c as rlT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useId as slT } from "./react-runtime/react/esm-index-production.js";
import { jsx as rMt, jsxs as qkc } from "./react-runtime/react/esm-jsx-runtime-production.js";
function olT(t) {
    const e = rlT(67), { history: n, limitBytes: i, pressure: r, width: s, height: o } = t, a = slT(), c = (n.at(-1)?.sampledAtMs ?? 0) - c6s;
    let u, d, h, p, g, f, _, b, y, S, k, C, T;
    if (e[0] !== a || e[1] !== o || e[2] !== n || e[3] !== i || e[4] !== r || e[5] !== c || e[6] !== s) {
        let P;
        e[20] !== c ? (P = (ce)=>ce.sampledAtMs >= c, e[20] = c, e[21] = P) : P = e[21];
        const M = n.filter(P);
        u = r ? "var(--cursor-icon-yellow-primary)" : "var(--cursor-icon-accent-primary)";
        const O = o - c9s - YT_, N = c9s + O;
        let U;
        e[22] !== c || e[23] !== s ? (U = (ce)=>(ce - c) / c6s * s, e[22] = c, e[23] = s, e[24] = U) : U = e[24];
        const j = U;
        let $;
        e[25] !== i ? ($ = (ce)=>i > 0 ? Math.min(1, Math.max(0, ce / i)) : 0, e[25] = i, e[26] = $) : $ = e[26];
        const H = $;
        let G;
        e[27] !== H || e[28] !== O ? (G = (ce)=>c9s + O - H(ce) * O, e[27] = H, e[28] = O, e[29] = G) : G = e[29];
        const q = G;
        let K;
        e[30] !== j || e[31] !== q ? (K = (ce, ae)=>`${ae === 0 ? "M" : "L"}${j(ce.sampledAtMs).toFixed(1)},${q(ce.memoryUsedBytes).toFixed(1)}`, e[30] = j, e[31] = q, e[32] = K) : K = e[32];
        const V = M.map(K).join(" "), Y = M[0], J = M[M.length - 1], Q = j(J.sampledAtMs).toFixed(1);
        let te;
        e[33] !== N ? (te = N.toFixed(1), e[33] = N, e[34] = te) : te = e[34];
        const ee = j(Y.sampledAtMs).toFixed(1);
        let re;
        e[35] !== N ? (re = N.toFixed(1), e[35] = N, e[36] = re) : re = e[36];
        const ie = `${V} L${Q},${te} L${ee},${re} Z`;
        _ = "true", b = "glass-1lliihq glass-2lah0s glass-1rea2x4", y = o, S = "none", k = `0 0 ${s} ${o}`, C = s;
        let oe, se;
        e[37] !== u ? (oe = rMt("stop", {
            offset: "0%",
            stopColor: u,
            stopOpacity: .35
        }), se = rMt("stop", {
            offset: "100%",
            stopColor: u,
            stopOpacity: .02
        }), e[37] = u, e[38] = oe, e[39] = se) : (oe = e[38], se = e[39]), e[40] !== a || e[41] !== oe || e[42] !== se ? (T = rMt("defs", {
            children: qkc("linearGradient", {
                id: a,
                x1: "0",
                x2: "0",
                y1: "0",
                y2: "1",
                children: [
                    oe,
                    se
                ]
            })
        }), e[40] = a, e[41] = oe, e[42] = se, e[43] = T) : T = e[43], e[44] !== i || e[45] !== s || e[46] !== q ? (h = XT_.map((ce)=>{
            const ae = q(i * ce.fraction);
            return qkc("g", {
                children: [
                    rMt("line", {
                        stroke: "var(--cursor-text-tertiary)",
                        strokeDasharray: ce.dash,
                        strokeOpacity: ce.opacity,
                        strokeWidth: 1,
                        x1: 0,
                        x2: s,
                        y1: ae,
                        y2: ae
                    }),
                    rMt("text", {
                        fill: "var(--cursor-text-tertiary)",
                        fillOpacity: .9,
                        fontFamily: "var(--cursor-font-family-sans)",
                        fontSize: 10,
                        textAnchor: "end",
                        x: s - 4,
                        y: ae - 3,
                        children: ce.label
                    })
                ]
            }, ce.label);
        }), e[44] = i, e[45] = s, e[46] = q, e[47] = h) : h = e[47];
        const le = `url(#${a})`;
        e[48] !== ie || e[49] !== le ? (p = rMt("path", {
            d: ie,
            fill: le
        }), e[48] = ie, e[49] = le, e[50] = p) : p = e[50], g = rMt("path", {
            d: V,
            fill: "none",
            stroke: u,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            vectorEffect: "non-scaling-stroke"
        }), d = j(J.sampledAtMs), f = q(J.memoryUsedBytes), e[0] = a, e[1] = o, e[2] = n, e[3] = i, e[4] = r, e[5] = c, e[6] = s, e[7] = u, e[8] = d, e[9] = h, e[10] = p, e[11] = g, e[12] = f, e[13] = _, e[14] = b, e[15] = y, e[16] = S, e[17] = k, e[18] = C, e[19] = T;
    } else u = e[7], d = e[8], h = e[9], p = e[10], g = e[11], f = e[12], _ = e[13], b = e[14], y = e[15], S = e[16], k = e[17], C = e[18], T = e[19];
    let I;
    e[51] !== u || e[52] !== d || e[53] !== f ? (I = rMt("circle", {
        cx: d,
        cy: f,
        fill: u,
        r: 2.5
    }), e[51] = u, e[52] = d, e[53] = f, e[54] = I) : I = e[54];
    let A;
    return e[55] !== h || e[56] !== p || e[57] !== g || e[58] !== I || e[59] !== _ || e[60] !== b || e[61] !== y || e[62] !== S || e[63] !== k || e[64] !== C || e[65] !== T ? (A = qkc("svg", {
        "aria-hidden": _,
        className: b,
        height: y,
        preserveAspectRatio: S,
        viewBox: k,
        width: C,
        children: [
            T,
            h,
            p,
            g,
            I
        ]
    }), e[55] = h, e[56] = p, e[57] = g, e[58] = I, e[59] = _, e[60] = b, e[61] = y, e[62] = S, e[63] = k, e[64] = C, e[65] = T, e[66] = A) : A = e[66], A;
}
export var ZT_ = {};
Sa(ZT_, {
    MachineTabContent: ()=>plT
});
import { c as zkc } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as llT } from "./react-runtime/react/esm-index-production.js";
import { jsx as Vce, jsxs as onn } from "./react-runtime/react/esm-jsx-runtime-production.js";
function clT() {
    const t = zkc(1), [e, n] = llT(ulT);
    let i;
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ()=>n(Date.now()), t[0] = i) : i = t[0], fDe(i, l6s), e;
}
function ulT() {
    return Date.now();
}
function Vkc(t) {
    const e = zkc(16), { title: n, value: i, percent: r, pressure: s, children: o } = t, a = s ?? r >= v7i * 100;
    let l;
    e[0] !== n ? (l = Vce(nn, {
        as: "span",
        color: "secondary",
        size: "sm",
        weight: "medium",
        children: n
    }), e[0] = n, e[1] = l) : l = e[1];
    let c;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (c = {
        className: "glass-ss6m8b glass-uxw1ft"
    }, e[2] = c) : c = e[2];
    const u = a ? "yellow" : "primary";
    let d;
    e[3] !== u || e[4] !== i ? (d = Vce(nn, {
        as: "span",
        className: c.className,
        color: u,
        size: "md",
        weight: "medium",
        children: i
    }), e[3] = u, e[4] = i, e[5] = d) : d = e[5];
    let h;
    e[6] !== l || e[7] !== d ? (h = onn("div", {
        className: "glass-78zum5 glass-1pha0wt glass-1qughib glass-1oot3zn",
        children: [
            l,
            d
        ]
    }), e[6] = l, e[7] = d, e[8] = h) : h = e[8];
    let p;
    e[9] !== o || e[10] !== r || e[11] !== a ? (p = o ?? Vce("span", {
        "aria-hidden": "true",
        className: "glass-1n2onr6 glass-ols6we glass-1i4c3av glass-i07v4r glass-b3r6kr",
        children: Vce("span", {
            ...{
                0: {
                    className: "glass-10l6tqk glass-10no89f glass-1o0tod glass-1i4c3av glass-1nawb4t"
                },
                1: {
                    className: "glass-10l6tqk glass-10no89f glass-1o0tod glass-1i4c3av glass-1lrqy4w"
                }
            }[!!a << 0],
            style: {
                width: `${r}%`
            }
        })
    }), e[9] = o, e[10] = r, e[11] = a, e[12] = p) : p = e[12];
    let g;
    return e[13] !== h || e[14] !== p ? (g = onn("div", {
        className: "glass-78zum5 glass-dt5ytf glass-1oot3zn glass-1n6jgo6 glass-1m7fhj7 glass-mkeg23 glass-1y0btm7 glass-qz0629 glass-59yu97",
        children: [
            h,
            p
        ]
    }), e[13] = h, e[14] = p, e[15] = g) : g = e[15], g;
}
function dlT(t) {
    switch(t){
        case "loading":
            return "Loading machine metrics\u2026";
        case "not-enabled":
            return "Machine metrics need a newer environment. Restart the agent's machine to turn them on.";
        case "gate-off":
            return "Machine metrics are not available for this agent.";
        case "asleep":
            return "The machine is asleep. Metrics resume when it wakes.";
        case "worker-offline":
            return "The self-hosted worker is offline.";
        case "no-machine":
            return "Machine metrics are only available while the agent's computer is running.";
        case "live":
        case "error":
            return "Can't reach the machine right now. Retrying\u2026";
    }
}
function hlT(t) {
    switch(t){
        case "asleep":
            return "Machine asleep \xB7 showing the last samples";
        case "worker-offline":
            return "Worker offline \xB7 showing the last samples";
        case "error":
            return "Can't reach the machine \xB7 showing the last samples";
        case "not-enabled":
            return "Machine metrics need a newer environment \xB7 showing the last samples";
        case "gate-off":
            return "Machine metrics not available for this agent \xB7 showing the last samples";
        case "no-machine":
            return "Computer not running \xB7 showing the last samples";
        case "loading":
        case "live":
            return;
    }
}
function plT(t) {
    const e = zkc(74), { usage: n, availability: i } = Q7C(t.bcId), r = jv_(t.bcId), { ref: s, width: o } = Ajt(), a = clT();
    if (n === void 0) {
        let J;
        e[0] !== i ? (J = dlT(i), e[0] = i, e[1] = J) : J = e[1];
        let Q;
        return e[2] !== J ? (Q = Vce("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1jlwbde glass-9f619 glass-5yr21d glass-2lwn1j glass-euugli glass-1odjw0f glass-1fcjpnv glass-1qg3m7i glass-ab0n8b glass-v0g687",
            "data-component": "machine-tab",
            children: Vce("div", {
                className: "glass-78zum5 glass-6s0dn4 glass-l56j7k glass-5yr21d glass-v0g687 glass-1qg3m7i glass-2b8uid glass-1w2vvpw",
                children: Vce(nn, {
                    as: "p",
                    color: "tertiary",
                    size: "sm",
                    children: J
                })
            })
        }), e[2] = J, e[3] = Q) : Q = e[3], Q;
    }
    const { limits: l, current: c } = n, u = (r ?? c.pressure) === "high";
    let d;
    e[4] !== i ? (d = hlT(i), e[4] = i, e[5] = d) : d = e[5];
    const h = d;
    let p;
    e[6] !== n ? (p = U7C(n), e[6] = n, e[7] = p) : p = e[7];
    let g;
    e[8] !== p ? (g = Vce(nn, {
        as: "h2",
        color: "primary",
        size: "lg",
        weight: "semibold",
        children: p
    }), e[8] = p, e[9] = g) : g = e[9];
    let f;
    e[10] !== l ? (f = B7C(l), e[10] = l, e[11] = f) : f = e[11];
    let _;
    e[12] !== f ? (_ = Vce(nn, {
        as: "span",
        color: "secondary",
        size: "sm",
        children: f
    }), e[12] = f, e[13] = _) : _ = e[13];
    let b;
    e[14] !== g || e[15] !== _ ? (b = onn("div", {
        className: "glass-78zum5 glass-dt5ytf glass-11twubx glass-euugli glass-1qaq26d",
        children: [
            g,
            _
        ]
    }), e[14] = g, e[15] = _, e[16] = b) : b = e[16];
    let y;
    e[17] !== n ? (y = gyc(n), e[17] = n, e[18] = y) : y = e[18];
    let S;
    e[19] !== l.scope ? (S = j7C(l.scope), e[19] = l.scope, e[20] = S) : S = e[20];
    let k;
    e[21] !== n ? (k = D7C(n), e[21] = n, e[22] = k) : k = e[22];
    let C;
    e[23] !== o || e[24] !== u || e[25] !== l.memoryLimitBytes || e[26] !== n.history ? (C = o > 0 ? Vce(olT, {
        height: QT_,
        history: n.history,
        limitBytes: l.memoryLimitBytes,
        pressure: u,
        width: o
    }) : null, e[23] = o, e[24] = u, e[25] = l.memoryLimitBytes, e[26] = n.history, e[27] = C) : C = e[27];
    let T;
    e[28] !== s || e[29] !== C ? (T = Vce("div", {
        ref: s,
        className: "glass-h8yej3 glass-euugli",
        children: C
    }), e[28] = s, e[29] = C, e[30] = T) : T = e[30];
    let I;
    e[31] !== c.sampledAtMs || e[32] !== a ? (I = F7C({
        sampledAtMs: c.sampledAtMs,
        nowMs: a
    }), e[31] = c.sampledAtMs, e[32] = a, e[33] = I) : I = e[33];
    const A = h ? ` \xB7 ${h}` : null;
    let P;
    e[34] !== I || e[35] !== A ? (P = onn(nn, {
        as: "span",
        color: "tertiary",
        size: "xs",
        children: [
            I,
            A
        ]
    }), e[34] = I, e[35] = A, e[36] = P) : P = e[36];
    let M;
    e[37] !== u || e[38] !== T || e[39] !== P || e[40] !== y || e[41] !== S || e[42] !== k ? (M = onn(Vkc, {
        percent: y,
        pressure: u,
        title: S,
        value: k,
        children: [
            T,
            P
        ]
    }), e[37] = u, e[38] = T, e[39] = P, e[40] = y, e[41] = S, e[42] = k, e[43] = M) : M = e[43];
    let O;
    e[44] !== n ? (O = Iv_(n), e[44] = n, e[45] = O) : O = e[45];
    let N;
    e[46] !== n ? (N = N7C(n), e[46] = n, e[47] = N) : N = e[47];
    let U;
    e[48] !== O || e[49] !== N ? (U = Vce(Vkc, {
        percent: O,
        title: "CPU",
        value: N
    }), e[48] = O, e[49] = N, e[50] = U) : U = e[50];
    let j;
    e[51] !== n ? (j = xv_(n), e[51] = n, e[52] = j) : j = e[52];
    let $;
    e[53] !== n ? ($ = L7C(n), e[53] = n, e[54] = $) : $ = e[54];
    let H;
    e[55] !== j || e[56] !== $ ? (H = Vce(Vkc, {
        percent: j,
        title: "Disk",
        value: $
    }), e[55] = j, e[56] = $, e[57] = H) : H = e[57];
    let G;
    e[58] !== U || e[59] !== H ? (G = onn("div", {
        className: "glass-rvj5dj glass-1ayh3g3 glass-1oot3zn",
        children: [
            U,
            H
        ]
    }), e[58] = U, e[59] = H, e[60] = G) : G = e[60];
    let q;
    e[61] !== u || e[62] !== l.scope ? (q = u ? Vce("div", {
        className: "glass-78zum5 glass-6s0dn4 glass-oyc9vk glass-1jkygx glass-2lprc glass-193t4r6 glass-1m7fhj7 glass-mkeg23 glass-1y0btm7 glass-1cucnr7 glass-1xvwvse",
        "data-component": "machine-tab-hint",
        children: Vce(nn, {
            as: "span",
            color: "primary",
            size: "sm",
            children: fyc(l.scope)
        })
    }) : null, e[61] = u, e[62] = l.scope, e[63] = q) : q = e[63];
    let K;
    e[64] !== l.scope ? (K = $7C(l.scope), e[64] = l.scope, e[65] = K) : K = e[65];
    let V;
    e[66] !== K ? (V = Vce(nn, {
        as: "span",
        color: "tertiary",
        size: "xs",
        children: K
    }), e[66] = K, e[67] = V) : V = e[67];
    let Y;
    return e[68] !== M || e[69] !== G || e[70] !== q || e[71] !== V || e[72] !== b ? (Y = onn("div", {
        className: "glass-78zum5 glass-dt5ytf glass-1jlwbde glass-9f619 glass-5yr21d glass-2lwn1j glass-euugli glass-1odjw0f glass-1fcjpnv glass-1qg3m7i glass-ab0n8b glass-v0g687",
        "data-component": "machine-tab",
        children: [
            b,
            M,
            G,
            q,
            V
        ]
    }), e[68] = M, e[69] = G, e[70] = q, e[71] = V, e[72] = b, e[73] = Y) : Y = e[73], Y;
}
export var JT_ = {};
Sa(JT_, {
    VoiceCallTranscriptTabContent: ()=>vlT
});
import { c as glT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as flT } from "./react-runtime/react/esm-jsx-runtime-production.js";
function vlT(t) {
    const e = glT(10), { agentId: n, callId: i } = t, r = ire(), s = vMi(), o = dxt(), a = Kw0(n);
    let l;
    e[0] !== i || e[1] !== o || e[2] !== s ? (l = s ? ()=>o(i) : void 0, e[0] = i, e[1] = o, e[2] = s, e[3] = l) : l = e[3];
    let c;
    return e[4] !== n || e[5] !== r || e[6] !== i || e[7] !== a || e[8] !== l ? (c = flT(Sjf, {
        agentId: n,
        appearance: r,
        callId: i,
        onCopyTranscriptId: l,
        onLinkClick: a
    }), e[4] = n, e[5] = r, e[6] = i, e[7] = a, e[8] = l, e[9] = c) : c = e[9], c;
}
import { c as blT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as ylT } from "./react-runtime/react/esm-index-production.js";
function SlT(t) {
    return t.complete;
}
function eE_(t) {
    return !1;
}
export function tE_() {
    const t = blT(5), [e, n] = ylT(klT);
    let i;
    t[0] !== e ? (i = (o)=>e.get(o.id) ?? eE_(o), t[0] = e, t[1] = i) : i = t[1];
    let r;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (o)=>n((a)=>new Map(a).set(o.id, !(a.get(o.id) ?? eE_(o)))), t[2] = r) : r = t[2];
    let s;
    return t[3] !== i ? (s = {
        isFolded: i,
        toggle: r
    }, t[3] = i, t[4] = s) : s = t[4], s;
}
function klT() {
    return new Map;
}
function wlT(t) {
    const e = xCn(t.markdown);
    if (!(e.format !== "document" || e.tasks.length === 0)) return {
        projectId: t.projectId,
        notesUri: t.notesUri,
        updatedAtMs: t.updatedAtMs,
        document: {
            statuses: e.statuses,
            tasks: e.tasks
        },
        openTaskCount: e.tasks.filter((n)=>!n.status.complete).length
    };
}
function ClT(t) {
    const e = t.flatMap((n)=>wlT(n) ?? []).sort((n, i)=>i.updatedAtMs - n.updatedAtMs);
    return {
        projects: e,
        openTaskCount: e.reduce((n, i)=>n + i.openTaskCount, 0)
    };
}
function ElT(t) {
    const e = Mc(t), n = Mc(Mc(e));
    return Aa(e) === XZn && rE_.has(Aa(n)) ? n : void 0;
}
async function iE_(t, e = Kkc) {
    try {
        return await Vh(t.commandService.executeCommand(lIo), e);
    } catch  {
        return;
    }
}
async function IlT(t) {
    const e = (await iE_(t))?.[0];
    return e === void 0 ? void 0 : ElT(t.workspaceContextService.resolveRelativePath(e));
}
export async function xlT(t, e) {
    const n = Date.now() + e;
    for(let i = 0;; i++){
        const r = Math.max(0, n - Date.now()), s = await iE_(t, Math.min(Kkc, r));
        if (s !== void 0 && s.length > 0) return !0;
        const o = Math.min(sE_ * 2 ** i, oE_);
        if (Date.now() + o > n) return !1;
        await Wd(o);
    }
}
export async function AlT(t, e) {
    const n = await IlT(t);
    if (n === void 0) return;
    let i;
    try {
        i = (await t.fileService.resolve(n)).children ?? [];
    } catch  {
        return;
    }
    const r = i.filter((o)=>o.isDirectory && !o.isSymbolicLink && tIo(o.name) && e(o.name));
    return (await cFp(r, async (o)=>{
        const a = Os(o.resource, XZn, p5p), l = await t.fileService.readFile(a, {
            limits: aE_
        });
        return {
            projectId: o.name,
            markdown: l.value.toString(),
            notesUri: a,
            updatedAtMs: l.mtime
        };
    }, {
        max: lE_
    })).flatMap((o)=>o.status === "fulfilled" ? [
            o.value
        ] : []);
}
export async function PlT(t) {
    const e = new Map(t.agentRepositoryService.agents.value.flatMap((r)=>Zg(r) && !r.isArchived.value ? [
            [
                r.id,
                r
            ]
        ] : [])), n = await t.readProjectNotes((r)=>e.has(r));
    if (n === void 0) return {
        kind: "no-mirrors"
    };
    const i = ClT(n);
    return {
        kind: "read",
        mirroredCount: n.length,
        openTaskCount: i.openTaskCount,
        projects: i.projects.map((r)=>{
            const s = e.get(r.projectId);
            return {
                ...r,
                appearance: $Te({
                    appearance: s?.projectAppearance?.value,
                    generatedIcon: s?.projectIcon?.value
                }),
                name: s?.name.value.trim() || D("glass.project.header.fallbackName", "New Project")
            };
        })
    };
}
function uE_(t, { complete: e, defaults: n }) {
    const i = [
        ...n
    ];
    for (const r of t){
        let s;
        for (const o of r.document.statuses)o.complete === e && (i.includes(o.id) || i.splice(s === void 0 ? i.length : i.indexOf(s) + 1, 0, o.id), s = o.id);
    }
    return i;
}
function MlT(t) {
    const e = uE_(t, {
        complete: !1,
        defaults: dE_
    }), n = uE_(t, {
        complete: !0,
        defaults: hE_
    });
    return [
        ...e.map((i)=>({
                statusId: i,
                complete: !1
            })),
        ...n.filter((i)=>!e.includes(i)).map((i)=>({
                statusId: i,
                complete: !0
            }))
    ];
}
function DlT(t) {
    return MlT(t).flatMap(({ statusId: e, complete: n })=>{
        const i = t.flatMap((s)=>s.document.tasks.filter((o)=>o.status.id === e).map((o)=>({
                    project: s,
                    task: o
                }))), r = i.find((s)=>s.task.status.complete === n) ?? i[0];
        return r === void 0 ? [] : [
            {
                status: r.task.status,
                cards: i
            }
        ];
    });
}
import { c as pE_ } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as aUi, jsxs as LlT } from "./react-runtime/react/esm-jsx-runtime-production.js";
function OlT(t) {
    const e = pE_(14), { appearance: n, name: i, onOpen: r } = t;
    let s;
    e[0] !== i ? (s = D("glass.mainBot.tasks.openProject", 'Open "{0}"', i), e[0] = i, e[1] = s) : s = e[1];
    let o;
    e[2] !== r ? (o = (u)=>{
        u.stopPropagation(), r();
    }, e[2] = r, e[3] = o) : o = e[3];
    let a;
    e[4] !== n ? (a = aUi(hae, {
        size: "sm",
        value: n
    }), e[4] = n, e[5] = a) : a = e[5];
    let l;
    e[6] !== i ? (l = aUi("span", {
        className: "glass-euugli glass-b3r6kr glass-lyipyv glass-uxw1ft",
        children: i
    }), e[6] = i, e[7] = l) : l = e[7];
    let c;
    return e[8] !== i || e[9] !== s || e[10] !== o || e[11] !== a || e[12] !== l ? (c = LlT("button", {
        className: "glass-3nfvp2 glass-193iq5w glass-euugli glass-qcrz7y glass-6s0dn4 glass-11twubx glass-dj266r glass-1yf7rl7 glass-at24cr glass-j3b58b glass-exx8yu glass-1xpa7k glass-18d9i69 glass-1uhho1l glass-ng3xce glass-jbqb8w glass-4b2ntj glass-xs50az glass-jb2p0i glass-1wm8ruf glass-1ja60sm glass-1yc453h glass-1ypdohk",
        "aria-label": s,
        "data-component": "main-bot-tasks-card-project",
        onClick: o,
        title: i,
        type: "button",
        children: [
            a,
            l
        ]
    }), e[8] = i, e[9] = s, e[10] = o, e[11] = a, e[12] = l, e[13] = c) : c = e[13], c;
}
export function FlT(t) {
    const e = pE_(22), { projects: n } = t, i = et(s9n), r = tE_();
    let s, o, a;
    if (e[0] !== n || e[1] !== i) {
        let _;
        e[5] !== i ? (_ = (b)=>({
                badge: aUi(OlT, {
                    appearance: b.appearance,
                    name: b.name,
                    onOpen: ()=>i.openProject(b.projectId)
                }),
                links: i.projectMarkdown(bzl, b.projectId, b.notesUri),
                openUnlinkedTask: (y)=>i.revealTask({
                        projectId: b.projectId,
                        taskId: y.id
                    }),
                views: vxs(b.document, `${b.projectId}:`)
            }), e[5] = i, e[6] = _) : _ = e[6], s = n.map(_), a = s.flatMap(BlT), o = DlT(n).map((b)=>{
            const y = Yzl(b.status);
            return {
                status: y,
                tasks: hxs(a, y)
            };
        }), e[0] = n, e[1] = i, e[2] = s, e[3] = o, e[4] = a;
    } else s = e[2], o = e[3], a = e[4];
    const l = o;
    let c;
    e[7] !== l || e[8] !== s || e[9] !== a ? (c = {
        columns: l,
        sources: s,
        tasks: a
    }, e[7] = l, e[8] = s, e[9] = a, e[10] = c) : c = e[10];
    const u = c;
    let d;
    e[11] !== u.sources ? (d = {
        chat: void 0,
        sources: u.sources
    }, e[11] = u.sources, e[12] = d) : d = e[12];
    const h = _xs(d), p = u.tasks;
    let g;
    if (e[13] !== u.columns || e[14] !== r) {
        let _;
        e[16] !== r ? (_ = (b)=>{
            const { status: y, tasks: S } = b;
            return aUi(E5i.Column, {
                collapsed: r.isFolded(y),
                onToggleCollapsed: SlT(y) ? ()=>r.toggle(y) : void 0,
                status: y,
                tasks: S
            }, y.id);
        }, e[16] = r, e[17] = _) : _ = e[17], g = u.columns.map(_), e[13] = u.columns, e[14] = r, e[15] = g;
    } else g = e[15];
    let f;
    return e[18] !== u.tasks || e[19] !== h || e[20] !== g ? (f = aUi(E5i, {
        slots: h,
        tasks: p,
        children: g
    }), e[18] = u.tasks, e[19] = h, e[20] = g, e[21] = f) : f = e[21], f;
}
function BlT(t) {
    const { views: e } = t;
    return e.tasks;
}

export var $T_ = {};
Object.defineProperty($T_, "SuggestionTabContent", {
    enumerable: true,
    get: ()=>VaT
});
