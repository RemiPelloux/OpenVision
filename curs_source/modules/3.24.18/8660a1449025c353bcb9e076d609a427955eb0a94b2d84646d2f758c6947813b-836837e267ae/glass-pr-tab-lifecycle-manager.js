import { Zp, wzt } from "./Aeg.js";
import { $6w, Bye, CAt, ELi, EZt, ILi, IZt, K6w, KUl, VUl, YUl, Z6w, dVf, lVf, pCs, rjl, uVf, xNn } from "./BA.js";
import { Ec, Nt, Qe, Vn, da, st } from "./Iwo.js";
import { pc } from "./LYd.js";
import { $cl, Gfs, UP, Wfs, _Yt, dBe, hMi, pMi, sgg, uIl } from "./Ycg.js";
import { Gze } from "./agentHeaderPrIdentity.js";
import { qn } from "./async.js";
import { rp } from "./bcIdFromAuthority.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { XS } from "./githubUtils.js";
import { Ds, NE } from "./glass-tab-persistence-constants.js";
import { WX } from "./glass-tab-scope.js";
import { jcT } from "./mE_.js";
import { XUl, tZ } from "./per-branch-pr-tabs.js";
import { INn } from "./pr-tab-identity.js";
import { Cb } from "./project-agents.js";
import { Mk } from "./pullRequestIdentity.js";
import { Kf, Qh, ca } from "./reactive.js";
import { PLi } from "./temporary-tabs.js";
import { Qpe } from "./trackedGitRepoHeader.js";
import { E } from "./tslib.es6.js";
import { eG } from "./yBp.js";
import { ks, pi } from "./ze.js";
var iwc, rwc, WE_, GE_, qE_, zE_;
export { GE_, WE_, iwc, qE_, rwc, zE_ };
var __wakaru_$cT_initialized = false;
export function $cT() {
if (__wakaru_$cT_initialized) return;
__wakaru_$cT_initialized = true;
"use strict";
E(), pi(), qn(), rp(), Qe(), Gze(), XS(), Qpe(), Mk(), Kf(), tZ(), k_(), WX(), INn(), Cb(), PLi(), NE(), iwc = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), rwc = (t)=>{
    throw TypeError(t);
}, WE_ = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && rwc("Object expected");
        var i, r;
        n && (i = e[iwc("asyncDispose")]), i === void 0 && (i = e[iwc("dispose")], n && (r = i)), typeof i != "function" && rwc("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, GE_ = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, qE_ = 2e3, zE_ = class extends st {
    constructor(t){
        super(), this._host = t, this._descriptors = new ca([]), this._agentSubs = this._register(new Nt), this._pullRequestSourceSubs = this._register(new Nt), this._managerPrSourceSubscription = this._register(new Vn), this._entrySubs = this._register(new Nt), this._projectSubagentPrSources = new Map, this._managerPrRows = [], this._lifecycleUrlSubs = this._register(new da), this._publishedEntryDescriptors = [], this._staleDropConfirmTimer = this._register(new Vn), this._forceAcceptFreshDescriptors = !1, this._reconcilerCloseDepth = 0, this._replacedTemporaryPrKeys = new Set, this._recomputeDepth = 0, this._recomputeDirty = !1, this._lifecycleRecomputeQueued = !1, this._getPrLifecycle = (n)=>this._host.prLifecycleStore.getLifecycle(n), this._register(this._host.branchMetadataService.onDidChangeBranchMetadata(()=>this._scheduleRecompute()));
        const e = this._host.manager.subscribe("tabClosed", (n)=>{
            if (n.kind !== jt.Pr || n.isTransfer || this._reconcilerCloseDepth > 0) return;
            const i = this._host.glassActiveAgentService.getActiveAgentId(), r = this._host.manager.getAllTabs().filter((o)=>o.kind === jt.Pr).filter((o)=>i === void 0 || Wfs(o, i)).map((o)=>({
                    tabId: o.id,
                    identityUrl: EZt(o)
                })), s = $6w({
                closedTabId: n.tabId,
                remainingPrTabs: r
            });
            s && this._host.dismissPullRequestTab(s);
        });
        this._register({
            dispose: e
        }), this._register(this._host.onDidChangeDismissedPullRequestTabs(()=>this._scheduleRecompute())), this._register(this._host.prLifecycleStore.onDidChangeLifecycle((n)=>{
            !this._lifecycleUrlSubs.has(n) || this._lifecycleRecomputeQueued || (this._lifecycleRecomputeQueued = !0, queueMicrotask(()=>{
                this._lifecycleRecomputeQueued = !1, !this._store.isDisposed && this._scheduleRecompute();
            }));
        })), this._register(this._host.glassActiveAgentService.onDidChangeActiveAgentId(()=>this._attachToActiveAgent())), this._register(this._host.agentRepositoryService.agents.onChange(()=>this._attachToActiveAgent())), this._register(this._host.agentRepositoryService.onDidLoadAgent(()=>{
            const n = this._resolveActiveFamilyRootAgentId();
            if (n !== this._activeFamilyRootAgentId || n !== void 0 && (!this._attachedAgentReference || this._attachedAgentReference.isDisposed)) {
                this._attachToActiveAgent();
                return;
            }
            this._reattachPullRequestSources();
        })), this._attachToActiveAgent();
    }
    get descriptors() {
        return this._descriptors;
    }
    reconcileNow() {
        this._scheduleRecompute();
    }
    dispose() {
        this._attachedAgentReference?.dispose(), this._attachedAgentReference = void 0, this._activeFamilyRootAgentId = void 0, this._projectSubagentPrSources.clear(), this._managerPrSourceAgentId = void 0, this._managerPrRows = [], this._descriptorsAgentId = void 0, this._publishedEntryDescriptors = [], super.dispose();
    }
    _resolveActiveFamilyRootAgentId() {
        const t = this._host.glassActiveAgentService.getActiveAgentId();
        if (t) return dBe(t, (e)=>this._host.agentRepositoryService.getAgentHeader(e));
    }
    _attachToActiveAgent() {
        const t = this._resolveActiveFamilyRootAgentId(), e = t ? this._host.agentRepositoryService.getAgent(t) : void 0;
        if (this._activeFamilyRootAgentId = t, this._attachedAgentReference !== void 0 && t === this._attachedAgentReference.header.id && !this._attachedAgentReference.isDisposed) {
            e && e !== this._attachedAgentReference && e.dispose(), this._reattachPullRequestSources();
            return;
        }
        if (this._agentSubs.clear(), this._pullRequestSourceSubs.clear(), this._entrySubs.clear(), this._projectSubagentPrSources.clear(), this._clearManagerPrSource(), this._attachedAgentReference?.dispose(), this._attachedAgentReference = e, !e) {
            this._syncLifecycleSubscriptions([]), this._staleDropConfirmTimer.clear(), this._descriptorsAgentId = void 0, this._publishedEntryDescriptors = [], this._descriptors.set([]);
            return;
        }
        this._staleDropConfirmTimer.clear(), this._descriptorsAgentId !== e.header.id && (this._descriptorsAgentId = void 0, this._publishedEntryDescriptors = []), this._agentSubs.add(e.header.conversationState.onChange(()=>this._reattachPullRequestSources()));
        const n = sgg(e.header, this._host.branchMetadataService, ()=>this._scheduleRecompute());
        this._agentSubs.add(n);
        const i = ()=>{
            n.rebind(), this._scheduleRecompute();
        };
        this._agentSubs.add(e.header.prUrl.onChange(i)), this._agentSubs.add(wzt(e.header.trackedGitRepos, i)), e.header.isProject !== void 0 && this._agentSubs.add(e.header.isProject.onChange(()=>this._reattachPullRequestSources())), this._reattachPullRequestSources();
    }
    _reattachPullRequestSources() {
        this._pullRequestSourceSubs.clear(), this._entrySubs.clear();
        const t = this._attachedAgentReference;
        if (!t || t.isDisposed) {
            this._projectSubagentPrSources.clear(), this._clearManagerPrSource();
            return;
        }
        t.header.isProject?.value === !0 ? this._projectSubagentPrSources = ks(()=>this._collectProjectSubagentPrSources(t)) : this._projectSubagentPrSources.clear(), this._syncManagerPrSource(t);
        for (const e of this._pullRequestStateSources())this._pullRequestSourceSubs.add(e.onChange(()=>this._reattachEntrySubs()));
        this._reattachEntrySubs();
    }
    _syncManagerPrSource(t) {
        const e = t.header.id;
        if (!pc(e) || t.header.isProject?.value !== !0) {
            this._clearManagerPrSource();
            return;
        }
        this._managerPrSourceAgentId !== e && (this._clearManagerPrSource(), this._managerPrSourceAgentId = e, this._managerPrSourceSubscription.value = this._host.agentRepositoryService.subscribeToManagerPrs(e, ()=>{
            this._updateManagerPrRows(e) && this._scheduleRecompute();
        })), this._updateManagerPrRows(e);
    }
    _updateManagerPrRows(t) {
        if (this._managerPrSourceAgentId !== t) return !1;
        const e = this._host.agentRepositoryService.getManagerPrs(t);
        return e.kind === "failed" ? !1 : (this._managerPrRows = e.rows, !0);
    }
    _clearManagerPrSource() {
        this._managerPrSourceSubscription.clear(), this._managerPrSourceAgentId = void 0, this._managerPrRows = [];
    }
    _collectProjectSubagentPrSources(t) {
        const e = t.header.id, n = this._projectSubagentPrSources, i = new Map, r = hMi(this._host.agentRepositoryService.agents.value, e).map((l)=>l.id), s = pMi({
            conversationState: t.header.conversationState.value,
            subagentComposerIds: t.composerDataHandle.data.subagentComposerIds
        }), o = [
            ...new Set([
                ...r,
                ...s
            ])
        ].map((l)=>({
                childId: l,
                parentId: e
            })), a = new Set;
        for(; o.length > 0;){
            const l = o.shift();
            if (!l) break;
            const { childId: c, parentId: u } = l;
            if (a.has(c)) continue;
            a.add(c);
            const d = this._readProjectSubagentPrSource({
                childId: c,
                expectedParentId: u,
                previousSource: n.get(c)
            });
            d && (i.set(c, d), o.push(...d.childIds.map((h)=>({
                    childId: h,
                    parentId: c
                }))));
        }
        return i;
    }
    _readProjectSubagentPrSource(t) {
        var e = [];
        try {
            const { childId: r, expectedParentId: s, previousSource: o } = t, a = WE_(e, this._host.agentRepositoryService.getAgent(r));
            if (!a || a.isDisposed) return this._isSubagentStampedUnderParent({
                childId: r,
                expectedParentId: s
            }) ? o : void 0;
            const l = a.header.subagentParentId?.trim();
            return l && l !== s ? void 0 : {
                pullRequestStates: a.pullRequestStates,
                childIds: [
                    ...a.composerDataHandle.data.subagentComposerIds ?? []
                ]
            };
        } catch (r) {
            var n = r, i = !0;
        } finally{
            GE_(e, n, i);
        }
    }
    _isSubagentStampedUnderParent(t) {
        const { childId: e, expectedParentId: n } = t, i = this._host.agentRepositoryService.getAgentHeader(e);
        if (!i) return !0;
        const r = i.subagentParentId?.trim();
        return !(r && r !== n);
    }
    _pullRequestStateSources() {
        const t = this._attachedAgentReference;
        if (!t || t.isDisposed) return [];
        const e = [
            t.pullRequestStates
        ];
        for (const n of this._projectSubagentPrSources.values())e.push(n.pullRequestStates);
        return e;
    }
    _pullRequestEntries() {
        return this._pullRequestStateSources().flatMap((t)=>t.value);
    }
    _reattachEntrySubs() {
        this._entrySubs.clear();
        for (const t of this._pullRequestEntries()){
            let e = t.pullRequestState.value;
            this._entrySubs.add(t.pullRequestState.onChange((n)=>{
                this._refreshKey(e) !== this._refreshKey(n) && this._scheduleRecompute(), e = n;
            }));
        }
        this._scheduleRecompute();
    }
    _refreshKey(t) {
        if (!Qh.isResolved(t)) return "";
        const e = t.value;
        if (!e) return "resolved:none";
        const n = pCs(e, this._getPrLifecycle), i = VUl({
            providerState: e,
            projectedState: n
        });
        return [
            e.prUrl ?? "",
            e.branchName ?? "",
            IZt(n),
            ...XUl.map((r)=>String(i[r] ?? "")),
            String(e.recencyAtMs ?? ""),
            e.createdAt ?? ""
        ].join("\0");
    }
    _scheduleRecompute() {
        if (this._recomputeDepth > 0) {
            this._recomputeDirty = !0;
            return;
        }
        this._recomputeDepth++;
        try {
            do this._recomputeDirty = !1, this._recompute();
            while (this._recomputeDirty)
        } finally{
            this._recomputeDepth--;
        }
    }
    _recompute() {
        const t = this._attachedAgentReference;
        if (!t || t.isDisposed) return;
        const e = t.header.id, n = this._pullRequestEntries(), i = $cl(t.header, this._host.branchMetadataService), r = this._managerPrRows.map((g)=>UP(g.prUrl)).filter((g)=>g !== void 0);
        this._syncLifecycleSubscriptions([
            ...dVf(n),
            ...r
        ]);
        const s = [
            ...YUl(t.pullRequestStates.value, 0, e, this._getPrLifecycle, {
                sourceAgentId: e
            })
        ];
        for (const [g, f] of this._projectSubagentPrSources)s.push(...YUl(f.pullRequestStates.value, 0, e, this._getPrLifecycle, {
            sourceAgentId: g
        }));
        const o = ILi(s), a = this._descriptorsAgentId === e ? this._publishedEntryDescriptors : [], { descriptors: l, pendingStaleDrop: c } = K6w({
            previous: a,
            fresh: o,
            pullRequestEntries: n,
            forceAcceptFresh: this._forceAcceptFreshDescriptors
        });
        this._publishedEntryDescriptors = l, this._descriptorsAgentId = e, c ? this._scheduleStaleDropConfirm(e) : this._staleDropConfirmTimer.clear();
        const u = uVf(this._managerPrRows, e, this._getPrLifecycle), d = ILi([
            ...l,
            ...u
        ]), h = l.length > 0 ? void 0 : Z6w({
            headerPrUrl: i,
            ownerAgentId: e,
            getLifecycle: this._getPrLifecycle
        }), p = d.length > 0 ? d : h ? [
            h
        ] : [];
        jcT(this._descriptors.value, p) || this._descriptors.set(p), h || this._reconcile(l, d, n, e, dVf(t.pullRequestStates.value));
    }
    _scheduleStaleDropConfirm(t) {
        this._staleDropConfirmTimer.value === void 0 && (this._staleDropConfirmTimer.value = Ec(()=>{
            if (this._staleDropConfirmTimer.clear(), this._descriptorsAgentId === t) {
                this._forceAcceptFreshDescriptors = !0;
                try {
                    this._scheduleRecompute();
                } finally{
                    this._forceAcceptFreshDescriptors = !1;
                }
            }
        }, qE_));
    }
    _closeTabAsReconciler(t) {
        this._whileReconcilerCloses(()=>this._host.closeTabAsReconciler(t));
    }
    _whileReconcilerCloses(t) {
        this._reconcilerCloseDepth++;
        try {
            t();
        } finally{
            this._reconcilerCloseDepth--;
        }
    }
    _syncLifecycleSubscriptions(t) {
        const e = new Map(t.map((n)=>[
                Zp(n),
                n
            ]));
        for (const n of this._lifecycleUrlSubs.keys())e.has(n) || this._lifecycleUrlSubs.deleteAndDispose(n);
        for (const [n, i] of e)this._lifecycleUrlSubs.has(n) || this._lifecycleUrlSubs.set(n, this._host.prLifecycleStore.subscribe(i));
    }
    showPullRequestTab(t, e) {
        const n = e?.preview === !0, i = UP(t);
        if (!i) return;
        const r = this._host.manager;
        r.runAsUserOpen(()=>this._host.restorePullRequestTab(i));
        const s = this._descriptors.value.find((c)=>CAt(c.prUrl, i)), o = this._activeFamilyRootAgentId ?? s?.ownerAgentId, a = s && o ? KUl(s, o) : {
            kind: "focused"
        }, l = ELi(r.getAllTabs(), {
            prUrl: i,
            ownerAgentId: o
        });
        if (l?.kind === jt.Pr) {
            const c = r.findGroupIdForTab(l.id) ?? Ds, u = "prUrl" in l.props && typeof l.props.prUrl == "string" ? l.props.prUrl : void 0, d = "mergeConflictTarget" in l.props ? l.props.mergeConflictTarget : void 0;
            (!CAt(u, i) || s !== void 0 && !lVf(d, a)) && r.replace({
                groupId: c,
                tabId: l.id,
                kind: jt.Pr,
                props: {
                    ...l.props,
                    ...s ? {
                        mergeConflictTarget: a
                    } : {},
                    prUrl: i
                }
            }), r.setActive({
                groupId: c,
                tabId: l.id,
                force: !0
            }), this._host.flush();
            return;
        }
        if (!o) {
            this._openDirectPullRequestTab(i, void 0, n);
            return;
        }
        if (!s) {
            this._openDirectPullRequestTab(i, o, n);
            return;
        }
        this.openPullRequestTab({
            tabId: _Yt(s.prUrl, o),
            props: {
                ...xNn(s, o),
                prUrl: i
            },
            label: s.label,
            preview: n
        }), this._host.flush();
    }
    openPullRequestTab({ tabId: t, props: e, label: n, preview: i }) {
        const r = i === !0 && this._host.isTemporaryPullRequestTabsEnabled();
        this._pushPullRequestTab({
            tabId: t,
            props: e,
            label: n,
            temporary: r,
            activate: !0
        });
    }
    _pushPullRequestTab({ tabId: t, props: e, label: n, temporary: i, activate: r, appendIndex: s }) {
        const o = this._host.manager, a = i ? rjl({
            tabs: o.getAllTabs().filter((d)=>d.kind === jt.Pr && d.props.ownerAgentId === e.ownerAgentId),
            isTarget: (d)=>d.id === t,
            isTemporary: (d)=>d.kind === jt.Pr && d.props.preview === !0
        }) : {
            kind: "append"
        };
        if (a.kind === "reveal-existing") {
            r && o.setActive({
                groupId: Ds,
                tabId: t,
                force: !0
            });
            return;
        }
        let l = Ds, c = s, u = !1;
        if (a.kind === "replace") {
            l = o.findGroupIdForTab(a.evictTabId) ?? Ds;
            const d = o.getGroup(l), h = d?.tabs.findIndex((f)=>f.id === a.evictTabId) ?? -1;
            c = h === -1 ? void 0 : h, u = d?.activeTabId === a.evictTabId;
            const p = o.getTab({
                groupId: l,
                tabId: a.evictTabId
            }), g = p?.kind === jt.Pr ? EZt(p) : void 0;
            g && this._replacedTemporaryPrKeys.add(Bye(g));
        }
        o.push({
            groupId: l,
            tabId: t,
            kind: jt.Pr,
            props: i ? {
                ...e,
                preview: !0
            } : e,
            label: n,
            activate: r || u,
            targetIndex: c
        }), a.kind === "replace" && this._whileReconcilerCloses(()=>this._host.evictTemporaryTab(a.evictTabId));
    }
    _openDirectPullRequestTab(t, e, n) {
        const i = this._host.manager, r = _Yt(t, e), s = eG(t), o = s ? `PR #${s}` : "Pull Request", a = i.getTab({
            groupId: Ds,
            tabId: r
        }), c = {
            branchName: "",
            mergeConflictTarget: {
                kind: "focused"
            },
            ownerAgentId: e,
            prUrl: t,
            repoPath: ""
        };
        if (a?.kind === jt.Pr) {
            i.replace({
                groupId: Ds,
                tabId: r,
                kind: jt.Pr,
                props: {
                    ...a.props,
                    ...c
                }
            }), i.setLabel({
                groupId: Ds,
                tabId: r,
                label: o
            }), i.setActive({
                groupId: Ds,
                tabId: r,
                force: !0
            }), this._host.flush();
            return;
        }
        this.openPullRequestTab({
            tabId: r,
            props: c,
            label: o,
            preview: n
        }), this._host.flush();
    }
    _reconcile(t, e, n, i, r) {
        const s = this._host.manager, o = new Set(this._host.getDismissedPullRequestTabUrls().map((y)=>Bye(y))), a = t.filter((y)=>!o.has(Bye(y.prUrl))), l = new Set(a.map((y)=>y.tabId)), c = new Map(a.map((y)=>[
                Bye(y.prUrl),
                y
            ])), u = a.length > 0 || n.length > 0 && n.every((y)=>Qh.isResolved(y.pullRequestState.value)), d = s.getGroup(Ds);
        if (!d) return;
        const h = new Set(s.getAllTabs().filter((y)=>y.kind === jt.Pr && Gfs(y.id)).map((y)=>y.id)), p = a.filter((y)=>h.has(y.tabId));
        let g = !1, f = !1;
        const _ = new Map(e.map((y)=>[
                Bye(y.prUrl),
                y
            ]));
        for (const y of s.getAllTabs()){
            if (y.kind !== jt.Pr || y.props.ownerAgentId !== i) continue;
            const S = EZt(y);
            if (!S) continue;
            const k = _.get(Bye(S));
            if (!k) continue;
            const C = KUl(k, i), T = "mergeConflictTarget" in y.props ? y.props.mergeConflictTarget : void 0;
            lVf(T, C) || (s.replace({
                groupId: s.findGroupIdForTab(y.id) ?? Ds,
                tabId: y.id,
                kind: jt.Pr,
                props: {
                    ...y.props,
                    mergeConflictTarget: C
                }
            }), g = !0);
        }
        const b = new Set(r.map((y)=>Bye(y)));
        for (const y of a){
            const S = i;
            !b.has(Bye(y.prUrl)) || h.has(y.tabId) || ELi(s.getAllTabs(), {
                prUrl: y.prUrl,
                ownerAgentId: S
            }) !== void 0 || this._replacedTemporaryPrKeys.has(Bye(y.prUrl)) || (this._host.isTemporaryPullRequestTabsEnabled() ? this._pushPullRequestTab({
                tabId: y.tabId,
                props: xNn(y, S),
                label: y.label,
                temporary: !0,
                activate: !1,
                appendIndex: uIl(d.tabs)
            }) : s.push({
                groupId: Ds,
                tabId: y.tabId,
                kind: jt.Pr,
                props: xNn(y, S),
                label: y.label,
                activate: !1,
                targetIndex: uIl(d.tabs)
            }), g = !0, f = !0);
        }
        for (const y of p){
            const S = i, k = s.getTab({
                groupId: Ds,
                tabId: y.tabId
            });
            if (k?.kind === jt.Pr) {
                const C = typeof k.props.prUrl == "string" ? UP(k.props.prUrl) : void 0;
                if (y.directPrUrl === void 0 && C === y.prUrl) {
                    if (k.props.branchName === y.branchName && k.props.ownerAgentId === S && k.props.prStatusIcon === y.prStatusIcon && k.props.prTitle === y.prTitle && k.props.repoPath === y.repoPath && k.props.repoUrl === y.repoUrl && k.label === y.label) continue;
                    s.replace({
                        groupId: Ds,
                        tabId: y.tabId,
                        kind: jt.Pr,
                        props: {
                            ...k.props,
                            branchName: y.branchName,
                            ownerAgentId: S,
                            prStatusIcon: y.prStatusIcon,
                            prTitle: y.prTitle,
                            repoPath: y.repoPath,
                            repoUrl: y.repoUrl
                        }
                    }), s.setLabel({
                        groupId: Ds,
                        tabId: y.tabId,
                        label: y.label
                    }), g = !0;
                    continue;
                }
                if (k.props.branchName === y.branchName && k.props.ownerAgentId === S && k.props.prStatusIcon === y.prStatusIcon && k.props.repoPath === y.repoPath && k.props.repoUrl === y.repoUrl && k.props.prTitle === y.prTitle && C === y.directPrUrl && k.label === y.label) continue;
                s.replace({
                    groupId: Ds,
                    tabId: y.tabId,
                    kind: jt.Pr,
                    props: {
                        ...xNn(y, S),
                        ...k.props.preview ? {
                            preview: !0
                        } : {}
                    }
                }), s.setLabel({
                    groupId: Ds,
                    tabId: y.tabId,
                    label: y.label
                }), g = !0;
            }
        }
        for (const y of s.getAllTabs()){
            if (y.kind !== jt.Pr || !Gfs(y.id)) continue;
            const S = typeof y.props.ownerAgentId == "string" ? y.props.ownerAgentId : void 0;
            if (S !== void 0 && S !== i) continue;
            const k = Bye(EZt(y)), C = k ? c.get(k) : void 0;
            if (C && C.tabId !== y.id) {
                const T = s.findGroupIdForTab(y.id) ?? Ds, I = s.getGroup(T)?.activeTabId === y.id, A = s.getTab({
                    groupId: Ds,
                    tabId: C.tabId
                });
                this._host.runAsReconciler(()=>{
                    if (A?.kind !== jt.Pr) {
                        const P = s.getGroup(T)?.tabs ?? d.tabs, M = P.findIndex((N)=>N.id === y.id), O = typeof y.props.prUrl == "string" ? UP(y.props.prUrl) : void 0;
                        s.push({
                            groupId: T,
                            tabId: C.tabId,
                            kind: jt.Pr,
                            props: {
                                ...xNn(C, i),
                                ...O ? {
                                    prUrl: O
                                } : {},
                                ...y.props.preview ? {
                                    preview: !0
                                } : {}
                            },
                            label: C.label,
                            activate: I,
                            targetIndex: M >= 0 ? M : P.length
                        }), g = !0, f = !0;
                    } else I && s.setActive({
                        groupId: Ds,
                        tabId: C.tabId,
                        force: !0
                    });
                }), this._closeTabAsReconciler(y.id), g = !0;
                continue;
            }
            u && S !== void 0 && S === i && !y.props.prUrl && !l.has(y.id) && (this._closeTabAsReconciler(y.id), g = !0);
        }
        g && this._host.flush(), f && this._host.onDidMaterializePullRequestTabs();
    }
};

}
