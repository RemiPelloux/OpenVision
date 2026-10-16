import { WW } from "./ipa.js";
import { $i, Jh, O2l, bl, et } from "./Ycg.js";
import { CAt, H6w, IZt, mu, qUl, rVf, sVf } from "./BA.js";
import { B0, NVl, Sut, fg, q6 } from "./Asv.js";
import { eJt, xOn } from "./ofv.js";
import { B6n, Ci_, Co_, Cs_, EbC, Gpc, Hmc, Nr_, UBi, X_C, aD, as_, dgc, e5s, kr_, nmc, pgc, tmc, wr_, xi_ } from "./gpc.js";
import { DTC, HEC, IRC, L5C, LDC, ODC, P5C, QOC, TTC, XEC, a5C, aDC, cfc, fIC, fRC, g5C, m3C, mIC, n5C, nDC, oIC, oRC, vIC, y5C, yIC } from "./Zo_.js";
import { Kie } from "./PullRequestRepositoryService.js";
import { Qr } from "./aiMiscServices.js";
import { jl } from "./aiService.js";
import { h9e } from "./canvas-index.js";
import { P3l, x3l } from "./command-ids.js";
import { jt } from "./editor-panel-tab-kind.js";
import { bU } from "./glass-diff-service.js";
import { $d } from "./glass-tab-persistence-service.contract.js";
import { X1 } from "./pr-query-client.js";
import { Bk } from "./pr-query-keys.js";
import { fbc, gbc, vbc } from "./pr-tab-content.react.js";
import { c as F5C } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as mbc, useRef as B5C, useState as U5C, useSyncExternalStore as lm_ } from "./react-runtime/react/esm-index-production.js";
import { jsx as NU, jsxs as j5C } from "./react-runtime/react/esm-jsx-runtime-production.js";
function cm_(t) {
    return Number.isFinite(t) ? Math.min(vbc, Math.max(fbc, t)) : gbc;
}
export function $5C(t) {
    const e = F5C(426), n = Nr_(), { groupId: i, isActive: r, manager: s, tabId: o } = WW(), a = B0(), l = q6(a, G5C);
    let c;
    e[0] !== r || e[1] !== l ? (c = qUl({
        isActive: r,
        isEditorPanelVisible: l,
        shouldFetch: !0
    }), e[0] = r, e[1] = l, e[2] = c) : c = e[2];
    const u = c, { workspace: d, resolvedAgentReference: h } = fg(), p = e5s(), g = et(Qr), f = $i(d, bU), _ = eJt(f);
    let b;
    e[3] !== _ ? (b = xOn(_), e[3] = _, e[4] = b) : b = e[4];
    const y = b, S = et(Kie), k = $i(d, jl), C = $i(d, $d), T = t.preview === !0;
    let I;
    e[5] !== T || e[6] !== o || e[7] !== C ? (I = ()=>{
        T && C.pinTab(o);
    }, e[5] = T, e[6] = o, e[7] = C, e[8] = I) : I = e[8];
    const A = I;
    let P, M;
    e[9] !== k ? (P = ()=>{
        O2l(k);
    }, M = [
        k
    ], e[9] = k, e[10] = P, e[11] = M) : (P = e[10], M = e[11]), mbc(P, M);
    const O = Hmc(t.branchName ?? "", t.repoUrl);
    let N;
    if (e[12] !== O || e[13] !== t.prUrl || e[14] !== o) {
        const Bl = O?.type === "resolved" ? O.value?.prUrl?.trim() : void 0;
        N = H6w({
            tabId: o,
            propsPrUrl: t.prUrl,
            branchPrUrl: Bl
        }), e[12] = O, e[13] = t.prUrl, e[14] = o, e[15] = N;
    } else N = e[15];
    const U = N, j = n5C(U, u), { state: $, loadingLifecycle: H } = EbC(O, U, j, u), G = $ ? $.value : H;
    G?.baseSha, G?.headSha;
    const q = G?.baseSha, K = G?.headSha;
    let V;
    e[16] !== q || e[17] !== K ? (V = tmc({
        baseSha: q,
        headSha: K
    }), e[16] = q, e[17] = K, e[18] = V) : V = e[18];
    const Y = V, J = $ === void 0;
    let Q;
    e[19] !== U || e[20] !== G ? (Q = sVf({
        directPrUrl: U,
        prState: G
    }), e[19] = U, e[20] = G, e[21] = Q) : Q = e[21];
    const te = Q, ee = !!te;
    let re;
    e[22] !== G?.diffs ? (re = ()=>G?.diffs ?? [], e[22] = G?.diffs, e[23] = re) : re = e[23], G?.diffs;
    let ie;
    e[24] !== re ? (ie = re(), e[24] = re, e[25] = ie) : ie = e[25];
    const oe = ie, se = G?.prUrl;
    let le;
    e[26] !== oe || e[27] !== se || e[28] !== d ? (le = {
        prUrl: se,
        workspace: d,
        diffs: oe
    }, e[26] = oe, e[27] = se, e[28] = d, e[29] = le) : le = e[29];
    const { getStatus: ce, toggleViewed: ae, collapsedByDefaultDiffKeys: de } = a5C(le);
    let he;
    e[30] !== ce || e[31] !== te || e[32] !== oe || e[33] !== u ? (he = {
        diffs: oe,
        prUrl: te,
        getViewStatus: ce,
        enabled: u
    }, e[30] = ce, e[31] = te, e[32] = oe, e[33] = u, e[34] = he) : he = e[34];
    const ge = xi_(he), pe = nmc(ge.visibleDiffs, de, Y.key);
    let ve;
    e[35] !== ce || e[36] !== pe || e[37] !== ae ? (ve = (Bl)=>{
        const ai = ce(Bl) !== "viewed";
        ae(Bl), pe.setCardOpen({
            filePath: Bl,
            open: !ai,
            revealHeaderIfOutsideViewport: ai
        });
    }, e[35] = ce, e[36] = pe, e[37] = ae, e[38] = ve) : ve = e[38];
    const fe = ve;
    let Te;
    e[39] !== ce || e[40] !== fe ? (Te = {
        getStatus: ce,
        onToggleViewed: fe
    }, e[39] = ce, e[40] = fe, e[41] = Te) : Te = e[41];
    const _e = Te, Ce = t.branchName ?? G?.branchName ?? "";
    let Se;
    e: {
        let Bl;
        e[42] !== Ce ? (Bl = Ce.trim(), e[42] = Ce, e[43] = Bl) : Bl = e[43];
        const ai = Bl, Jr = h.header.trackedGitRepos.value;
        if (ai.length > 0) {
            let oa;
            if (e[44] !== Jr || e[45] !== ai) {
                let Tl;
                e[47] !== ai ? (Tl = (dc)=>dc.activeBranchName.value?.trim() === ai, e[47] = ai, e[48] = Tl) : Tl = e[48], oa = Jr.find(Tl)?.repoPath?.trim(), e[44] = Jr, e[45] = ai, e[46] = oa;
            } else oa = e[46];
            const pl = oa;
            if (pl) {
                Se = pl;
                break e;
            }
        }
        let Br;
        e[49] !== Jr[0]?.repoPath || e[50] !== Jr.length ? (Br = Jr.length === 1 && Jr[0]?.repoPath?.trim() || void 0, e[49] = Jr[0]?.repoPath, e[50] = Jr.length, e[51] = Br) : Br = e[51], Se = Br;
    }
    const Pe = Se;
    let we;
    e[52] !== t.repoPath || e[53] !== y || e[54] !== Pe ? (we = t.repoPath?.trim() || y?.trim() || Pe || "", e[52] = t.repoPath, e[53] = y, e[54] = Pe, e[55] = we) : we = e[55];
    const Ie = we, Me = !!U, De = DTC(G, U || G?.prUrl);
    let Ne;
    e[56] !== U || e[57] !== S ? (Ne = (Bl)=>{
        U && S.refreshPullRequestFiles(U, {
            skipCachedValue: Bl?.skipCachedValue === !0
        });
    }, e[56] = U, e[57] = S, e[58] = Ne) : Ne = e[58];
    const be = Ne, je = O?.type === "resolved" ? O.value : void 0;
    let $e;
    e[59] !== je?.prUrl || e[60] !== U ? ($e = !!U && CAt(je?.prUrl, U), e[59] = je?.prUrl, e[60] = U, e[61] = $e) : $e = e[61];
    const Je = $e, Ge = B5C(void 0);
    let xe;
    e[62] !== je || e[63] !== Je || e[64] !== U ? (xe = ()=>{
        if (!U || !Je) return;
        const Bl = fIC(U, je), ai = vIC(Ge.current, Bl);
        Ge.current = Bl, ai.metadata && X1.invalidateQueries({
            queryKey: Bk.metadata(U)
        }), ai.stack && X1.invalidateQueries({
            queryKey: Bk.stack(U)
        });
    }, e[62] = je, e[63] = Je, e[64] = U, e[65] = xe) : xe = e[65];
    const Oe = je?.isMerged, ct = je?.isClosed, Ye = je?.isDraft, Ve = je?.state, Xe = je?.title, lt = je?.baseBranch;
    let He;
    e[66] !== Je || e[67] !== U || e[68] !== Oe || e[69] !== ct || e[70] !== Ye || e[71] !== Ve || e[72] !== Xe || e[73] !== lt ? (He = [
        Je,
        Oe,
        ct,
        Ye,
        Ve,
        Xe,
        lt,
        U
    ], e[66] = Je, e[67] = U, e[68] = Oe, e[69] = ct, e[70] = Ye, e[71] = Ve, e[72] = Xe, e[73] = lt, e[74] = He) : He = e[74], mbc(xe, He);
    let gt;
    e[75] !== i || e[76] !== s || e[77] !== G || e[78] !== o ? (gt = ()=>{
        if (!G) return;
        const Bl = G.title?.trim() || void 0, ai = IZt(G), Jr = s.getTab({
            groupId: i,
            tabId: o
        });
        Jr?.kind !== jt.Pr || Jr.props.prTitle === Bl && Jr.props.prStatusIcon === ai || s.replace({
            groupId: i,
            tabId: o,
            kind: jt.Pr,
            props: {
                ...Jr.props,
                prTitle: Bl,
                prStatusIcon: ai
            }
        });
    }, e[75] = i, e[76] = s, e[77] = G, e[78] = o, e[79] = gt) : gt = e[79];
    let ht;
    e[80] !== i || e[81] !== s || e[82] !== G || e[83] !== t.prStatusIcon || e[84] !== t.prTitle || e[85] !== o ? (ht = [
        i,
        s,
        t.prStatusIcon,
        t.prTitle,
        G,
        o
    ], e[80] = i, e[81] = s, e[82] = G, e[83] = t.prStatusIcon, e[84] = t.prTitle, e[85] = o, e[86] = ht) : ht = e[86], mbc(gt, ht);
    const Ae = Jh(x3l), ot = Jh(P3l), [Be, Ue] = U5C(0), { editorPreferences: it, setEditorPreferences: qe, sidebarExpanded: pt, setSidebarExpanded: dt } = NVl(i, "pr");
    let ft;
    e[87] !== it.diffTreeSidebarWidth ? (ft = cm_(it.diffTreeSidebarWidth), e[87] = it.diffTreeSidebarWidth, e[88] = ft) : ft = e[88];
    const bt = ft;
    let St;
    e[89] !== pe ? (St = (Bl)=>{
        const ai = pe.onDidChange(Bl);
        return ()=>ai.dispose();
    }, e[89] = pe, e[90] = St) : St = e[90];
    const Et = St;
    let kt;
    e[91] !== pe.rows ? (kt = ()=>pe.rows, e[91] = pe.rows, e[92] = kt) : kt = e[92];
    const xt = lm_(Et, kt);
    let Pt;
    e[93] !== pe ? (Pt = ()=>pe.rows.map((Bl)=>pe.getCardOpenState(Bl.id) ? "1" : "0").join(""), e[93] = pe, e[94] = Pt) : Pt = e[94];
    const Dt = lm_(Et, Pt);
    let Vt;
    e[95] !== pe || e[96] !== xt ? (Vt = xt.length > 0 && xt.every((Bl)=>!pe.getCardOpenState(Bl.id)), e[95] = pe, e[96] = xt, e[97] = Vt) : Vt = e[97];
    const tn = xt.length > 0;
    let un;
    e[98] !== Vt || e[99] !== tn ? (un = {
        allCollapsed: Vt,
        hasDiffs: tn
    }, e[98] = Vt, e[99] = tn, e[100] = un) : un = e[100];
    const kn = un;
    let oi;
    e[101] !== qe ? (oi = (Bl)=>{
        const ai = cm_(Bl);
        qe((Jr)=>({
                ...Jr,
                diffTreeSidebarWidth: ai
            }));
    }, e[101] = qe, e[102] = oi) : oi = e[102];
    let Fn;
    e[103] !== bt || e[104] !== oi ? (Fn = {
        defaultWidth: gbc,
        minWidth: fbc,
        maxWidth: vbc,
        direction: "left",
        controlledWidth: bt,
        onResizeEnd: oi
    }, e[103] = bt, e[104] = oi, e[105] = Fn) : Fn = e[105];
    const { width: Qt, isResizing: Sn, panelRef: $n, handleProps: Mn } = Sut(Fn), { onMouseDown: Un } = Mn;
    let Xn;
    e[106] !== kn.allCollapsed || e[107] !== pe || e[108] !== xt ? (Xn = ()=>{
        const Bl = kn.allCollapsed;
        for (const ai of xt)pe.setCardOpen({
            filePath: ai.id,
            open: Bl
        });
    }, e[106] = kn.allCollapsed, e[107] = pe, e[108] = xt, e[109] = Xn) : Xn = e[109];
    const Ti = Xn, bi = kn.hasDiffs ? kn.allCollapsed ? "Expand All Files" : "Collapse All Files" : void 0, Qn = bl("glass_pr_realtime_updates"), ni = bl("full_self_driving_glass"), pn = bl("full_self_driving_glass_pr_tab");
    let yn, Ln, xi, Ci, En, Dn, Si, Ui, Nn;
    if (e[110] !== ni || e[111] !== pn || e[112] !== ee || e[113] !== r || e[114] !== l || e[115] !== te || e[116] !== G || e[117] !== t.branchName || e[118] !== h) {
        const Bl = Gpc(G) || ee;
        xi = Bl && ee, Ci = Bl && ee, En = Bl && ee, yn = h.header.source === "cloud";
        const ai = G?.branchName;
        let Jr;
        e[128] !== t.branchName || e[129] !== ai ? (Jr = LDC({
            tabBranchName: t.branchName,
            pullRequestBranchName: ai
        }), e[128] = t.branchName, e[129] = ai, e[130] = Jr) : Jr = e[130], Ln = Jr;
        let Br;
        e[131] !== ni || e[132] !== pn || e[133] !== ee || e[134] !== h || e[135] !== Ln ? (Br = ODC({
            agentReference: h,
            branchName: Ln,
            fullSelfDrivingGlassEnabled: ni,
            fullSelfDrivingGlassPrTabEnabled: pn,
            hasPullRequestToView: ee
        }), e[131] = ni, e[132] = pn, e[133] = ee, e[134] = h, e[135] = Ln, e[136] = Br) : Br = e[136], Dn = Br, Nn = Co_, Si = te, Ui = rVf({
            isActive: r,
            isEditorPanelVisible: l,
            shouldShowCiTab: xi
        }), e[110] = ni, e[111] = pn, e[112] = ee, e[113] = r, e[114] = l, e[115] = te, e[116] = G, e[117] = t.branchName, e[118] = h, e[119] = yn, e[120] = Ln, e[121] = xi, e[122] = Ci, e[123] = En, e[124] = Dn, e[125] = Si, e[126] = Ui, e[127] = Nn;
    } else yn = e[119], Ln = e[120], xi = e[121], Ci = e[122], En = e[123], Dn = e[124], Si = e[125], Ui = e[126], Nn = e[127];
    let ci;
    e[137] !== Si || e[138] !== Ui ? (ci = {
        prUrl: Si,
        enabled: Ui
    }, e[137] = Si, e[138] = Ui, e[139] = ci) : ci = e[139];
    const Pi = Nn(ci), vi = Pi.checkStatus, Yi = Ci || En;
    let Bn;
    e[140] !== te || e[141] !== u || e[142] !== Yi ? (Bn = {
        prUrl: te,
        enabled: Yi,
        active: u
    }, e[140] = te, e[141] = u, e[142] = Yi, e[143] = Bn) : Bn = e[143];
    const Tn = TTC(Bn);
    let Zn;
    e[144] !== te || e[145] !== u || e[146] !== En ? (Zn = {
        prUrl: te,
        enabled: En,
        active: u
    }, e[144] = te, e[145] = u, e[146] = En, e[147] = Zn) : Zn = e[147];
    const tr = cfc(Zn), hi = tr.reviewThreadActions;
    let ui;
    e[148] !== hi || e[149] !== A ? (ui = {
        replyToThread: (Bl)=>(A(), hi.replyToThread(Bl)),
        resolveThread: (Bl)=>(A(), hi.resolveThread(Bl)),
        unresolveThread: (Bl)=>(A(), hi.unresolveThread(Bl)),
        deleteComment: (Bl)=>(A(), hi.deleteComment(Bl))
    }, e[148] = hi, e[149] = A, e[150] = ui) : ui = e[150];
    const Ni = ui, cr = y5C(te);
    let fs;
    e[151] !== ee || e[152] !== r || e[153] !== l || e[154] !== te || e[155] !== tr.refresh || e[156] !== xi || e[157] !== Ci || e[158] !== En || e[159] !== Dn ? (fs = {
        isActive: r,
        isEditorPanelVisible: l,
        prUrl: te,
        refreshReviewsActivity: tr.refresh,
        shouldShowCiTab: xi,
        shouldShowCommitsTab: Ci,
        shouldShowDescriptionTab: ee,
        shouldShowReviewsTab: En,
        shouldShowSelfDrivingTab: Dn
    }, e[151] = ee, e[152] = r, e[153] = l, e[154] = te, e[155] = tr.refresh, e[156] = xi, e[157] = Ci, e[158] = En, e[159] = Dn, e[160] = fs) : fs = e[160];
    const mi = L5C(fs), di = Dn && u && ee, Mr = Ie || void 0;
    let jr;
    e[161] !== ni || e[162] !== te || e[163] !== h || e[164] !== Ln || e[165] !== mi.onSelectSelfDrivingView || e[166] !== di || e[167] !== Mr ? (jr = {
        agentReference: h,
        branchName: Ln,
        enabled: di,
        fullSelfDrivingGlassEnabled: ni,
        onLaunchStarted: mi.onSelectSelfDrivingView,
        prUrl: te,
        repoPath: Mr
    }, e[161] = ni, e[162] = te, e[163] = h, e[164] = Ln, e[165] = mi.onSelectSelfDrivingView, e[166] = di, e[167] = Mr, e[168] = jr) : jr = e[168];
    const Ur = QOC(jr);
    let Ws;
    e[169] !== pe || e[170] !== mi.setSubview ? (Ws = ()=>{
        mIC({
            model: pe,
            requestFocus: ()=>Ue(W5C),
            selectSubview: mi.setSubview
        });
    }, e[169] = pe, e[170] = mi.setSubview, e[171] = Ws) : Ws = e[171];
    const jo = Ws, Ia = oe.length > 0;
    let ga;
    e[172] !== dt ? (ga = ()=>{
        dt(H5C);
    }, e[172] = dt, e[173] = ga) : ga = e[173];
    const zs = ga, Vs = !Ia, Ra = Ia ? void 0 : J ? "Loading changed files" : "No changed files to show", ur = pt && Ia;
    let wr;
    e[174] !== zs || e[175] !== Vs || e[176] !== Ra || e[177] !== ur ? (wr = NU(dgc, {
        disabled: Vs,
        disabledReason: Ra,
        isSidebarExpanded: ur,
        onToggleSidebar: zs,
        side: "right"
    }), e[174] = zs, e[175] = Vs, e[176] = Ra, e[177] = ur, e[178] = wr) : wr = e[178];
    const Es = wr;
    let eo;
    e[179] !== Pi || e[180] !== Tn || e[181] !== U || e[182] !== r || e[183] !== G || e[184] !== t.branchName || e[185] !== t.repoPath || e[186] !== be || e[187] !== tr.refresh || e[188] !== Ur.refetch || e[189] !== u || e[190] !== mi.resetReviewsSoftRefresh ? (eo = {
        ciChecks: Pi,
        commitsState: Tn,
        directPrUrl: U,
        isActive: r,
        metadataFetchEnabled: u,
        prState: G,
        refreshDirectPrFiles: be,
        refreshReviewsActivity: tr.refresh,
        refetchSelfDriving: Ur.refetch,
        resetReviewsSoftRefresh: mi.resetReviewsSoftRefresh,
        tabBranchName: t.branchName,
        tabRepoPath: t.repoPath
    }, e[179] = Pi, e[180] = Tn, e[181] = U, e[182] = r, e[183] = G, e[184] = t.branchName, e[185] = t.repoPath, e[186] = be, e[187] = tr.refresh, e[188] = Ur.refetch, e[189] = u, e[190] = mi.resetReviewsSoftRefresh, e[191] = eo) : eo = e[191];
    const ts = P5C(eo), rr = U || G?.prUrl, Gs = u && Qn;
    let Vr;
    e[192] !== ts.handleRealtimeRefresh || e[193] !== rr || e[194] !== Gs ? (Vr = {
        prUrl: rr,
        enabled: Gs,
        onUpdate: ts.handleRealtimeRefresh
    }, e[192] = ts.handleRealtimeRefresh, e[193] = rr, e[194] = Gs, e[195] = Vr) : Vr = e[195], g5C(Vr);
    const So = mi.effectiveSubview, na = So === "ci" ? "checks" : So === "commits" ? "commits" : So === "reviews" ? "reviews" : "pr";
    let ll;
    e[196] !== vi || e[197] !== na || e[198] !== yn || e[199] !== G || e[200] !== De.reviewCount || e[201] !== De.reviewDecision ? (ll = ()=>({
            isCloudAgent: yn,
            isMultiPrEnabled: !0,
            diffView: na,
            prStatus: kr_(G),
            fileCount: G?.diffs?.length,
            commitCount: G?.commitCount,
            reviewCount: De.reviewCount,
            checkStatus: wr_(vi),
            reviewDecision: De.reviewDecision
        }), e[196] = vi, e[197] = na, e[198] = yn, e[199] = G, e[200] = De.reviewCount, e[201] = De.reviewDecision, e[202] = ll) : ll = e[202];
    let Ol;
    e[203] !== g || e[204] !== ll ? (Ol = {
        surface: "pr_tab",
        service: g,
        getContext: ll
    }, e[203] = g, e[204] = ll, e[205] = Ol) : Ol = e[205];
    const ia = Ol;
    let co;
    e[206] !== kn.allCollapsed || e[207] !== kn.hasDiffs || e[208] !== ia || e[209] !== Ti || e[210] !== r ? (co = ()=>{
        !r || !kn.hasDiffs || (aD(ia, {
            controlGroup: "secondary_action",
            actionSource: "keybinding",
            action: kn.allCollapsed ? "expand_all_files" : "collapse_all_files"
        }), Ti());
    }, e[206] = kn.allCollapsed, e[207] = kn.hasDiffs, e[208] = ia, e[209] = Ti, e[210] = r, e[211] = co) : co = e[211], mu("collapseOrExpandAllDiffsRequested", co);
    let vn;
    e[212] !== t.mergeConflictTarget ? (vn = t.mergeConflictTarget ?? {
        kind: "focused"
    }, e[212] = t.mergeConflictTarget, e[213] = vn) : vn = e[213];
    const zn = bi ? Ti : void 0;
    let _i;
    e[214] !== Ce || e[215] !== vi || e[216] !== Pi || e[217] !== Tn || e[218] !== kn.allCollapsed || e[219] !== U || e[220] !== ia || e[221] !== ni || e[222] !== jo || e[223] !== ee || e[224] !== J || e[225] !== A || e[226] !== G || e[227] !== t.prStatusIcon || e[228] !== t.prTitle || e[229] !== ts.handleRefreshDiffs || e[230] !== ts.isRefreshIndicatorVisible || e[231] !== Ae || e[232] !== Ie || e[233] !== tr || e[234] !== Ur || e[235] !== u || e[236] !== xi || e[237] !== Ci || e[238] !== En || e[239] !== Dn || e[240] !== De || e[241] !== mi.effectiveSubview || e[242] !== mi.onSelectCiView || e[243] !== mi.onSelectCommitsView || e[244] !== mi.onSelectDescriptionView || e[245] !== mi.onSelectDiffsView || e[246] !== mi.onSelectReviewsView || e[247] !== mi.onSelectSelfDrivingView || e[248] !== vn || e[249] !== zn || e[250] !== bi || e[251] !== ot ? (_i = {
        mergeConflictTarget: vn,
        branchName: Ce,
        repoPath: Ie,
        directPrUrl: U,
        prState: G,
        isPrStateLoading: J,
        tabPrTitle: t.prTitle,
        tabPrStatusIcon: t.prStatusIcon,
        keepTabOpen: A,
        fullSelfDrivingGlassEnabled: ni,
        metadataFetchEnabled: u,
        subview: mi.effectiveSubview,
        shouldShowCiTab: xi,
        shouldShowCommitsTab: Ci,
        shouldShowDescriptionTab: ee,
        shouldShowReviewsTab: En,
        shouldShowSelfDrivingTab: Dn,
        onSelectDiffsView: mi.onSelectDiffsView,
        onSelectDescriptionView: mi.onSelectDescriptionView,
        onSelectCiView: mi.onSelectCiView,
        onSelectCommitsView: mi.onSelectCommitsView,
        onSelectReviewsView: mi.onSelectReviewsView,
        onSelectSelfDrivingView: mi.onSelectSelfDrivingView,
        ciChecks: Pi,
        checksTabStatus: vi,
        commitsState: Tn,
        reviewsActivity: tr,
        reviewsChrome: De,
        selfDriving: Ur,
        editorPanelAnalytics: ia,
        isRefreshing: ts.isRefreshIndicatorVisible,
        onRefreshDiffs: ts.handleRefreshDiffs,
        refreshDiffShortcut: Ae,
        onOpenDiffFind: jo,
        onToggleAllDiffs: zn,
        areAllDiffsCollapsed: kn.allCollapsed,
        toggleAllDiffsLabel: bi,
        toggleAllDiffsShortcut: ot
    }, e[214] = Ce, e[215] = vi, e[216] = Pi, e[217] = Tn, e[218] = kn.allCollapsed, e[219] = U, e[220] = ia, e[221] = ni, e[222] = jo, e[223] = ee, e[224] = J, e[225] = A, e[226] = G, e[227] = t.prStatusIcon, e[228] = t.prTitle, e[229] = ts.handleRefreshDiffs, e[230] = ts.isRefreshIndicatorVisible, e[231] = Ae, e[232] = Ie, e[233] = tr, e[234] = Ur, e[235] = u, e[236] = xi, e[237] = Ci, e[238] = En, e[239] = Dn, e[240] = De, e[241] = mi.effectiveSubview, e[242] = mi.onSelectCiView, e[243] = mi.onSelectCommitsView, e[244] = mi.onSelectDescriptionView, e[245] = mi.onSelectDiffsView, e[246] = mi.onSelectReviewsView, e[247] = mi.onSelectSelfDrivingView, e[248] = vn, e[249] = zn, e[250] = bi, e[251] = ot, e[252] = _i) : _i = e[252];
    const sr = _i, Gi = G?.mergeStatusDegradedByRateLimit;
    let ko;
    e[253] !== Pi.error || e[254] !== j || e[255] !== cr || e[256] !== Ur.error || e[257] !== Gi ? (ko = X_C({
        mergeStatusDegradedByRateLimit: Gi,
        filesLoadState: j,
        errors: [
            cr,
            Pi.error,
            Ur.error
        ]
    }), e[253] = Pi.error, e[254] = j, e[255] = cr, e[256] = Ur.error, e[257] = Gi, e[258] = ko) : ko = e[258];
    const As = ko;
    let Fs;
    e[259] !== As || e[260] !== ts.handleRefreshDiffs || e[261] !== ts.isRefreshIndicatorVisible ? (Fs = As ? NU(XEC, {
        isRefreshing: ts.isRefreshIndicatorVisible,
        onRefresh: ts.handleRefreshDiffs
    }) : null, e[259] = As, e[260] = ts.handleRefreshDiffs, e[261] = ts.isRefreshIndicatorVisible, e[262] = Fs) : Fs = e[262];
    const Qo = Fs, hl = mi.showCiView && Pi.error && Pi.checkStatus === void 0 ? Pi.error : void 0, lr = mi.showCommitsView && Tn.error && Tn.commits.length === 0 ? Tn.error : void 0;
    let mr, Bi, Hr, Ns, Io, fa, Ls, po, ka, Ms, Go, Fl, Gc;
    if (e[263] !== Ce || e[264] !== hl || e[265] !== Pi || e[266] !== lr || e[267] !== Tn || e[268] !== Be || e[269] !== $n || e[270] !== j || e[271] !== _e || e[272] !== Un || e[273] !== jo || e[274] !== Ia || e[275] !== pt || e[276] !== Sn || e[277] !== Me || e[278] !== A || e[279] !== te || e[280] !== p || e[281] !== pe || e[282] !== Es || e[283] !== ge.chrome || e[284] !== ge.hiddenCount || e[285] !== ge.resetFilters || e[286] !== ge.visibleDiffs || e[287] !== G || e[288] !== sr || e[289] !== n || e[290] !== t.repoPath || e[291] !== t.repoUrl || e[292] !== $ || e[293] !== Qo || e[294] !== ts.handleRetryChecks || e[295] !== ts.handleRetryCommits || e[296] !== ts.handleRetryReviews || e[297] !== be || e[298] !== Qt || e[299] !== Ni || e[300] !== tr.currentUserLogins || e[301] !== tr.discussions || e[302] !== tr.timeline || e[303] !== y || e[304] !== u || e[305] !== De.requestedReviewers || e[306] !== mi.hasRenderedCiView || e[307] !== mi.hasRenderedCommitsView || e[308] !== mi.hasRenderedDescriptionView || e[309] !== mi.hasRenderedReviewsView || e[310] !== mi.showCiView || e[311] !== mi.showCommitsView || e[312] !== mi.showDescriptionView || e[313] !== mi.showDiffsView || e[314] !== mi.showReviewsView || e[315] !== Pe) {
        const Bl = yIC({
            showReviewsView: mi.showReviewsView,
            timelineError: tr.timeline.error,
            discussionsError: tr.discussions.error,
            hasCachedTimelineData: tr.timeline.events.length > 0,
            hasCachedDiscussionsData: tr.discussions.threads.length > 0 || tr.discussions.topLevelComments.length > 0
        });
        mr = fRC, Gc = sr, Bi = "pr-tab-content", Hr = A, Ns = "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr glass-9f619 glass-178xt8z glass-13fuv20 glass-1aeic0j glass-17gucax glass-lpdtw4 glass-blvoer glass-1l6xav5 glass-1tmed11 glass-16giph glass-1t34edd glass-1vx0vhi glass-gltrb2 glass-1txl225", Io = Qo, e[329] === Symbol.for("react.memo_cache_sentinel") ? (fa = NU(nDC, {}), e[329] = fa) : fa = e[329], e[330] !== Ce || e[331] !== Me || e[332] !== Es || e[333] !== t.repoUrl || e[334] !== $ || e[335] !== mi.showDiffsView ? (Ls = mi.showDiffsView && NU(aDC, {
            branchName: Ce,
            repoUrl: t.repoUrl,
            pullRequestState: $,
            disableBranchFallback: Me,
            actions: Es
        }), e[330] = Ce, e[331] = Me, e[332] = Es, e[333] = t.repoUrl, e[334] = $, e[335] = mi.showDiffsView, e[336] = Ls) : Ls = e[336];
        let ai;
        e[337] !== mi.showDiffsView ? (ai = {
            0: {
                className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr"
            },
            1: {
                className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr glass-1s85apg"
            }
        }[!mi.showDiffsView << 0].className ?? "", e[337] = mi.showDiffsView, e[338] = ai) : ai = e[338];
        const Jr = `pr-tab-view-panel diff-tab-view-panel ${ai}`, Br = !mi.showDiffsView;
        let oa;
        e[339] !== _e || e[340] !== Ia || e[341] !== pt || e[342] !== pe || e[343] !== ge.chrome || e[344] !== ge.visibleDiffs ? (oa = pt && Ia ? NU(as_, {
            diffs: ge.visibleDiffs,
            fileViewState: _e,
            filters: ge.chrome,
            model: pe
        }) : void 0, e[339] = _e, e[340] = Ia, e[341] = pt, e[342] = pe, e[343] = ge.chrome, e[344] = ge.visibleDiffs, e[345] = oa) : oa = e[345];
        let pl;
        e[346] !== t.repoPath ? (pl = t.repoPath?.trim() || void 0, e[346] = t.repoPath, e[347] = pl) : pl = e[347];
        let Tl;
        e[348] !== y || e[349] !== Pe ? (Tl = y?.trim() || Pe || void 0, e[348] = y, e[349] = Pe, e[350] = Tl) : Tl = e[350];
        let Gl;
        e[351] !== Ce || e[352] !== Be || e[353] !== j || e[354] !== _e || e[355] !== jo || e[356] !== Me || e[357] !== pe || e[358] !== ge.hiddenCount || e[359] !== ge.resetFilters || e[360] !== ge.visibleDiffs || e[361] !== n || e[362] !== t.repoUrl || e[363] !== $ || e[364] !== be || e[365] !== u || e[366] !== pl || e[367] !== Tl ? (Gl = NU(Ci_, {
            branchName: Ce,
            diffModel: pe,
            displayedDiffs: ge.visibleDiffs,
            fileViewState: _e,
            hiddenFileCount: ge.hiddenCount,
            onResetFileFilters: ge.resetFilters,
            diffFindRequestId: Be,
            directPrFilesLoadState: j,
            disableBranchFallback: Me,
            onFindRequested: jo,
            onRetryDirectPrFiles: be,
            primaryModifierHoverClassTarget: n,
            isActiveVisible: u,
            repoUrl: t.repoUrl,
            repoPath: pl,
            fallbackRepoPath: Tl,
            pullRequestState: $
        }), e[351] = Ce, e[352] = Be, e[353] = j, e[354] = _e, e[355] = jo, e[356] = Me, e[357] = pe, e[358] = ge.hiddenCount, e[359] = ge.resetFilters, e[360] = ge.visibleDiffs, e[361] = n, e[362] = t.repoUrl, e[363] = $, e[364] = be, e[365] = u, e[366] = pl, e[367] = Tl, e[368] = Gl) : Gl = e[368];
        let dc;
        e[369] !== $n || e[370] !== Un || e[371] !== Sn || e[372] !== Qt || e[373] !== oa || e[374] !== Gl ? (dc = NU(pgc, {
            isSidebarResizing: Sn,
            onSidebarResizeMouseDown: Un,
            side: "right",
            sidebar: oa,
            sidebarRef: $n,
            sidebarWidth: Qt,
            children: Gl
        }), e[369] = $n, e[370] = Un, e[371] = Sn, e[372] = Qt, e[373] = oa, e[374] = Gl, e[375] = dc) : dc = e[375], e[376] !== Jr || e[377] !== Br || e[378] !== dc ? (po = NU("div", {
            className: Jr,
            hidden: Br,
            children: dc
        }), e[376] = Jr, e[377] = Br, e[378] = dc, e[379] = po) : po = e[379], e[380] !== te || e[381] !== G?.body || e[382] !== u || e[383] !== mi.hasRenderedDescriptionView || e[384] !== mi.showDescriptionView ? (ka = mi.hasRenderedDescriptionView && NU("div", {
            className: `pr-tab-view-panel ${{
                0: {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr"
                },
                1: {
                    className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr glass-1s85apg"
                }
            }[!mi.showDescriptionView << 0].className ?? ""}`,
            hidden: !mi.showDescriptionView,
            children: te ? NU(IRC, {
                enabled: u,
                initialBody: G?.body,
                prUrl: te
            }, te) : null
        }), e[380] = te, e[381] = G?.body, e[382] = u, e[383] = mi.hasRenderedDescriptionView, e[384] = mi.showDescriptionView, e[385] = ka) : ka = e[385], e[386] !== hl || e[387] !== Pi || e[388] !== te || e[389] !== p || e[390] !== ts.handleRetryChecks || e[391] !== mi.hasRenderedCiView || e[392] !== mi.showCiView ? (Ms = mi.hasRenderedCiView && NU("div", {
            className: `pr-tab-view-panel ${{
                0: {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr"
                },
                1: {
                    className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr glass-1s85apg"
                }
            }[!mi.showCiView << 0].className ?? ""}`,
            hidden: !mi.showCiView,
            children: hl && te ? NU(UBi, {
                errorKind: B6n(hl),
                isRetrying: Pi.isLoading,
                onRetry: ts.handleRetryChecks,
                prUrl: te,
                tabKind: "checks"
            }) : NU(HEC, {
                agentReference: p,
                checksState: Pi,
                enabled: mi.hasRenderedCiView,
                prUrl: te,
                variant: "pr-tab"
            }, p.header.id)
        }), e[386] = hl, e[387] = Pi, e[388] = te, e[389] = p, e[390] = ts.handleRetryChecks, e[391] = mi.hasRenderedCiView, e[392] = mi.showCiView, e[393] = Ms) : Ms = e[393], e[394] !== lr || e[395] !== Tn || e[396] !== te || e[397] !== ts.handleRetryCommits || e[398] !== mi.hasRenderedCommitsView || e[399] !== mi.showCommitsView ? (Go = mi.hasRenderedCommitsView && NU("div", {
            className: `pr-tab-view-panel ${{
                0: {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr"
                },
                1: {
                    className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr glass-1s85apg"
                }
            }[!mi.showCommitsView << 0].className ?? ""}`,
            hidden: !mi.showCommitsView,
            children: lr && te ? NU(UBi, {
                errorKind: B6n(lr),
                isRetrying: Tn.isLoading || Tn.isRefreshing,
                onRetry: ts.handleRetryCommits,
                prUrl: te,
                tabKind: "commits"
            }) : NU(oIC, {
                commitsState: Tn,
                prUrl: te
            })
        }), e[394] = lr, e[395] = Tn, e[396] = te, e[397] = ts.handleRetryCommits, e[398] = mi.hasRenderedCommitsView, e[399] = mi.showCommitsView, e[400] = Go) : Go = e[400], Fl = mi.hasRenderedReviewsView && NU("div", {
            className: `pr-tab-view-panel ${{
                0: {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr"
                },
                1: {
                    className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr glass-1s85apg"
                }
            }[!mi.showReviewsView << 0].className ?? ""}`,
            hidden: !mi.showReviewsView,
            children: Bl && te ? NU(UBi, {
                errorKind: B6n(Bl),
                isRetrying: tr.timeline.isLoading || tr.timeline.isRefreshing || tr.discussions.isLoading || tr.discussions.isRefreshing,
                onRetry: ts.handleRetryReviews,
                prUrl: te,
                tabKind: "reviews"
            }) : NU(oRC, {
                commits: Tn.commits,
                commitsIsLoading: Tn.isLoading,
                currentUserLogins: tr.currentUserLogins,
                discussions: tr.discussions,
                pullRequestState: G,
                reviewThreadActions: Ni,
                requestedReviewers: De.requestedReviewers,
                timeline: tr.timeline
            })
        }), e[263] = Ce, e[264] = hl, e[265] = Pi, e[266] = lr, e[267] = Tn, e[268] = Be, e[269] = $n, e[270] = j, e[271] = _e, e[272] = Un, e[273] = jo, e[274] = Ia, e[275] = pt, e[276] = Sn, e[277] = Me, e[278] = A, e[279] = te, e[280] = p, e[281] = pe, e[282] = Es, e[283] = ge.chrome, e[284] = ge.hiddenCount, e[285] = ge.resetFilters, e[286] = ge.visibleDiffs, e[287] = G, e[288] = sr, e[289] = n, e[290] = t.repoPath, e[291] = t.repoUrl, e[292] = $, e[293] = Qo, e[294] = ts.handleRetryChecks, e[295] = ts.handleRetryCommits, e[296] = ts.handleRetryReviews, e[297] = be, e[298] = Qt, e[299] = Ni, e[300] = tr.currentUserLogins, e[301] = tr.discussions, e[302] = tr.timeline, e[303] = y, e[304] = u, e[305] = De.requestedReviewers, e[306] = mi.hasRenderedCiView, e[307] = mi.hasRenderedCommitsView, e[308] = mi.hasRenderedDescriptionView, e[309] = mi.hasRenderedReviewsView, e[310] = mi.showCiView, e[311] = mi.showCommitsView, e[312] = mi.showDescriptionView, e[313] = mi.showDiffsView, e[314] = mi.showReviewsView, e[315] = Pe, e[316] = mr, e[317] = Bi, e[318] = Hr, e[319] = Ns, e[320] = Io, e[321] = fa, e[322] = Ls, e[323] = po, e[324] = ka, e[325] = Ms, e[326] = Go, e[327] = Fl, e[328] = Gc;
    } else mr = e[316], Bi = e[317], Hr = e[318], Ns = e[319], Io = e[320], fa = e[321], Ls = e[322], po = e[323], ka = e[324], Ms = e[325], Go = e[326], Fl = e[327], Gc = e[328];
    let cu;
    e[401] !== ni || e[402] !== te || e[403] !== Ie || e[404] !== Ur || e[405] !== mi.hasRenderedSelfDrivingView || e[406] !== mi.showSelfDrivingView ? (cu = mi.hasRenderedSelfDrivingView && NU("div", {
        className: `pr-tab-view-panel ${{
            0: {
                className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr"
            },
            1: {
                className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr glass-1s85apg"
            }
        }[!mi.showSelfDrivingView << 0].className ?? ""}`,
        hidden: !mi.showSelfDrivingView,
        children: NU(m3C, {
            fullSelfDrivingGlassEnabled: ni,
            prUrl: te,
            repoPath: Ie || void 0,
            selfDriving: Ur
        })
    }), e[401] = ni, e[402] = te, e[403] = Ie, e[404] = Ur, e[405] = mi.hasRenderedSelfDrivingView, e[406] = mi.showSelfDrivingView, e[407] = cu) : cu = e[407];
    let La;
    e[408] === Symbol.for("react.memo_cache_sentinel") ? (La = NU(Cs_, {}), e[408] = La) : La = e[408];
    let yl;
    e[409] !== Bi || e[410] !== Hr || e[411] !== Ns || e[412] !== Io || e[413] !== fa || e[414] !== Ls || e[415] !== po || e[416] !== ka || e[417] !== Ms || e[418] !== Go || e[419] !== Fl || e[420] !== cu ? (yl = j5C("div", {
        "data-component": Bi,
        onBeforeInputCapture: Hr,
        className: Ns,
        children: [
            Io,
            fa,
            Ls,
            po,
            ka,
            Ms,
            Go,
            Fl,
            cu,
            La
        ]
    }), e[409] = Bi, e[410] = Hr, e[411] = Ns, e[412] = Io, e[413] = fa, e[414] = Ls, e[415] = po, e[416] = ka, e[417] = Ms, e[418] = Go, e[419] = Fl, e[420] = cu, e[421] = yl) : yl = e[421];
    let rh;
    return e[422] !== mr || e[423] !== Gc || e[424] !== yl ? (rh = NU(mr, {
        value: Gc,
        children: yl
    }), e[422] = mr, e[423] = Gc, e[424] = yl, e[425] = rh) : rh = e[425], rh;
}
function H5C(t) {
    return !t;
}
function W5C(t) {
    return t + 1;
}
function G5C(t) {
    return t.editorPanelVisible;
}
export function um_(t, e) {
    t.setPendingSlashCommand({
        command: {
            id: "canvas",
            name: "canvas",
            type: "skill",
            content: ""
        },
        ...e?.replaceExistingContent ? {
            replaceExistingContent: !0
        } : {},
        ...e?.trailingText ? {
            trailingText: e.trailingText
        } : {},
        ...e?.targetComposerId ? {
            targetComposerId: e.targetComposerId
        } : {}
    });
}
export function V5C(t, e) {
    const n = t.getTab(e);
    if (n?.kind !== jt.Canvas) return;
    const i = e.title?.trim() || void 0;
    n.props.cloudCanvasTitle !== i && t.replace({
        groupId: e.groupId,
        tabId: e.tabId,
        kind: jt.Canvas,
        props: {
            ...n.props,
            cloudCanvasTitle: i
        }
    });
    const r = i ?? "Canvas";
    n.label !== r && t.setLabel({
        ...e,
        label: r
    });
}
import { c as Y5C } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as X5C } from "./react-runtime/react/esm-index-production.js";
export function hm_(t) {
    const e = Y5C(8), { agentId: n, canvasService: i, enabled: r, sourceDirectory: s } = t;
    let o;
    e: {
        if (!r || s === void 0) {
            o = void 0;
            break e;
        }
        let h;
        e[0] !== n || e[1] !== i || e[2] !== s ? (h = i.getCloudCanvasIndex({
            ownerAgentId: n,
            sourceDirectory: s
        }), e[0] = n, e[1] = i, e[2] = s, e[3] = h) : h = e[3], o = h;
    }
    const a = o;
    let l;
    e[4] !== a ? (l = (h)=>{
        if (a === void 0) return Z5C;
        const p = a.onDidChange(h);
        return ()=>p.dispose();
    }, e[4] = a, e[5] = l) : l = e[5];
    const c = l;
    let u;
    e[6] !== a ? (u = ()=>a?.getSnapshot() ?? h9e, e[6] = a, e[7] = u) : u = e[7];
    const d = u;
    return X5C(c, d, d);
}
function Z5C() {}

export var am_ = {};
Object.defineProperty(am_, "PrTabContent", {
    enumerable: true,
    get: ()=>$5C
});
