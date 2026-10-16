import { Ec, Gt, Qe, Vn, da, m1, st, tt } from "./Iwo.js";
import { Vle, dkg } from "./Ycg.js";
import { qn } from "./async.js";
import { rOn } from "./browser-bookmark-utils.js";
import { m6i } from "./browser-responsive-design-mode.js";
import { vEt } from "./browserIds.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { Ds, NE } from "./glass-tab-persistence-constants.js";
import { WX } from "./glass-tab-scope.js";
import { SE_, dcT, gcT, hcT, mcT, pcT } from "./mE_.js";
import { Jc } from "./observable.js";
import { EQt } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { $x0 } from "./wTv.js";
import { t6 } from "./ze.js";
var kE_, wE_, CE_, TE_, EE_, IE_;
export { CE_, EE_, IE_, TE_, kE_, wE_ };
var __wakaru_fcT_initialized = false;
export function fcT() {
if (__wakaru_fcT_initialized) return;
__wakaru_fcT_initialized = true;
"use strict";
E(), qn(), Gt(), Qe(), Jc(), rOn(), m6i(), k_(), WX(), vEt(), NE(), kE_ = 12, wE_ = 15, CE_ = 10, TE_ = 300 * 1e3, EE_ = 2e3, IE_ = class extends st {
    constructor(t){
        super(), this._options = t, this._browserTabDisposables = this._register(new da), this._onDidChangeWarmState = this._register(new tt), this._warmBrowserIds = new Set, this._seededViews = new WeakSet, this._warmSweepTimer = this._register(new Vn), this.onDidChangeWarmState = this._onDidChangeWarmState.event, this._stableBrowserId = t.stableBrowserId;
    }
    initialize() {
        this._register(this._options.browserViewStore.onDidCreateView((t)=>this._subscribeToTabsForBrowserId(t))), this._register(this._options.browserViewStore.onDidDestroyView((t)=>this._disposeBrowserSubscriptionsForBrowserId(t))), this._register({
            dispose: this._options.manager.subscribe("tabClosed", (t)=>{
                if (t.kind !== jt.Browser || t.isTransfer) return;
                this._shouldDestroyBrowserResourceOnTabClose(t.tabId, t.props) ? (this.destroyBrowserView(t.props.browserId), this._options.onDidCloseBrowserTab(t.props.browserId)) : this._disposeBrowserTabSubscription(t.tabId), this._refreshWarmPool();
            })
        }), this._register({
            dispose: this._options.manager.subscribe("tabPushed", (t)=>{
                const e = this._options.manager.getTab({
                    groupId: t.groupId,
                    tabId: t.tabId
                });
                e?.kind === jt.Browser && (this._subscribeToBrowserView(e.id, e.props.browserId), this._refreshWarmPool());
            })
        }), this._register({
            dispose: this._options.manager.subscribe("tabPropsChanged", (t)=>{
                const e = this._options.manager.getTab({
                    groupId: t.groupId,
                    tabId: t.tabId
                });
                e?.kind === jt.Browser && (this._subscribeToBrowserView(e.id, e.props.browserId), this._refreshWarmPool());
            })
        }), this._register({
            dispose: this._options.manager.subscribe("activeTabIdChanged", (t)=>{
                if (t.tabId) {
                    const e = this._options.manager.getTab({
                        groupId: t.groupId,
                        tabId: t.tabId
                    });
                    e?.kind === jt.Browser && this._subscribeToBrowserView(e.id, e.props.browserId);
                }
                this._refreshWarmPool();
            })
        }), this._register(this._options.browserViewStore.onDidChangeHeadlessViews(()=>{
            this._refreshWarmPool();
        })), this._register(this._options.browserViewStore.onDidChangeLockState(()=>{
            this._refreshWarmPool();
        })), this._register(this._options.onDidChangeCurrentAgent(()=>{
            this._refreshWarmPool();
        })), this._register(this._options.onDidArchiveAgent((t)=>{
            this._releaseHeadlessBrowserViewsForDeadOwners((e)=>e === t.agentId);
        }));
    }
    fullReconcile() {
        if (!this._store.isDisposed && this._options.manager.getGroup(Ds)) {
            for (const t of this._options.manager.getAllTabs())t.kind === jt.Browser && this._subscribeToBrowserView(t.id, t.props.browserId);
            this._refreshWarmPool();
        }
    }
    destroyBrowserView(t) {
        this._disposeBrowserSubscriptionsForBrowserId(t), this._options.browserViewStore.destroyView(t);
    }
    ensureBrowserViewRegistered(t, e) {
        this._options.browserViewStore.getView(t) || this._options.browserViewStore.createView(t);
        const n = t === this._options.stableBrowserId ? this._options.getCurrentAgentId() : e;
        n && this._options.resourceOwnershipService.setBrowserOwner(t, n), this._subscribeToTabsForBrowserId(t);
    }
    isBrowserWarm(t) {
        return this._warmBrowserIds.has(t);
    }
    _seedResponsiveDesignMode(t) {
        const e = this._options.browserViewStore.getView(t);
        if (!e || this._seededViews.has(e)) return;
        const n = this._findPersistedBrowserTab(t)?.responsiveDesignMode;
        this._seededViews.add(e), e.setResponsiveDesignMode(n ? $x0(n) : void 0);
    }
    resolveRestoreUrl(t, e) {
        const n = this._findPersistedSessionUrl(t), i = this._options.browserViewStore.getView(t)?.getURL(), r = this._options.getSavedUrl(t);
        return pcT({
            currentUrl: i,
            savedUrl: r,
            persistedUrl: n,
            initialUrl: e
        });
    }
    _buildWarmPoolCandidates() {
        const t = this._options.getCurrentAgentId(), e = new Map, n = new Map;
        for (const s of this._options.getPersistedBrowserSessions())for (const o of s.tabs)n.set(o.browserId, Math.max(n.get(o.browserId) ?? 0, o.lastActiveTime));
        if (this._options.manager.getGroup(Ds)) for (const s of this._options.manager.getAllTabs()){
            if (s.kind !== jt.Browser) continue;
            const o = s.props.browserId, a = e.get(o) ?? [];
            a.push({
                browserId: o,
                claimOwnerAgentId: Vle(s.props),
                tabId: s.id,
                lastActiveTime: s.lastActiveTime ?? 0
            }), e.set(o, a);
        }
        const i = new Set([
            ...e.keys(),
            ...this._options.browserViewStore.getAllViewIds().map(dkg)
        ]), r = new Set;
        for (const s of this._options.manager.groups.values())s.activeTabId && r.add(s.activeTabId);
        return Array.from(i).map((s)=>{
            const o = e.get(s) ?? [], a = o.reduce((c, u)=>Math.max(c, u.lastActiveTime), n.get(s) ?? 0), l = this._options.browserViewStore.getView(s);
            return {
                browserId: s,
                hasLiveView: l !== void 0,
                isActive: o.some((c)=>r.has(c.tabId)),
                isCurrentAgentOwned: t !== void 0 && o.some((c)=>c.claimOwnerAgentId === t),
                isWorkspaceOwned: o.some((c)=>c.claimOwnerAgentId === void 0),
                isHeadless: this._options.browserViewStore.isHeadless(s),
                isLocked: this._options.browserViewStore.isLocked(s),
                isVisible: this._options.browserViewStore.isViewVisible(s),
                isAttached: l?.isAttachedToContainer() === !0,
                isLoading: l?.getTabState()?.isLoading === !0,
                lastActiveTime: a,
                wrapperCount: o.length
            };
        });
    }
    _refreshWarmPool() {
        if (this._store.isDisposed) return;
        const t = new Set(SE_(this._buildWarmPoolCandidates()));
        this._areBrowserIdSetsEqual(this._warmBrowserIds, t) || (this._warmBrowserIds = t, this._onDidChangeWarmState.fire()), this._scheduleSweep();
    }
    _scheduleSweep() {
        this._store.isDisposed || (this._warmSweepTimer.value = Ec(()=>{
            this._store.isDisposed || this._sweepColdBrowserViews();
        }, EE_));
    }
    _releaseHeadlessBrowserViewsForDeadOwners(t) {
        const e = mcT({
            headlessBrowserIds: this._options.browserViewStore.getHeadlessViewIds().map(dkg),
            stableBrowserId: this._stableBrowserId,
            getBrowserOwner: (n)=>this._options.resourceOwnershipService.getBrowserOwner(n),
            getComposerParentId: this._options.getComposerParentId,
            isDeadOwner: t
        });
        for (const n of e)this.destroyBrowserView(n);
    }
    _sweepColdBrowserViews() {
        this._releaseHeadlessBrowserViewsForDeadOwners((i)=>this._options.isAgentArchived(i) === !0);
        const t = this._buildWarmPoolCandidates(), e = new Set(SE_(t)), n = gcT(t, e);
        for (const i of n)this.destroyBrowserView(i);
    }
    _subscribeToTabsForBrowserId(t) {
        if (this._options.manager.getGroup(Ds)) for (const e of this._options.manager.getAllTabs())e.kind === jt.Browser && e.props.browserId === t && this._subscribeToBrowserView(e.id, t);
    }
    _subscribeToBrowserView(t, e) {
        const n = this._browserTabDisposables.get(t), i = this._options.browserViewStore.getView(e);
        if (!i) {
            this._browserTabDisposables.deleteAndDispose(t);
            return;
        }
        if (this._seedResponsiveDesignMode(e), n) {
            if (n.browserId === e) return;
            this._browserTabDisposables.deleteAndDispose(t);
        }
        this._syncBrowserTabLabel(t, e);
        const r = i.onDidFinishLoad(()=>{
            this._syncBrowserTabLabel(t, e);
        }), s = i.onIpcMessage(({ channel: a })=>{
            a === "did-navigate" && this._syncBrowserTabLabel(t, e);
        }), o = t6(i.responsiveDesignMode, ()=>this._options.schedulePersist());
        this._browserTabDisposables.set(t, {
            browserId: e,
            dispose: ()=>m1(r, s, o)
        });
    }
    _syncBrowserTabLabel(t, e) {
        const n = this._options.browserViewStore.getView(e);
        if (!n) return;
        const i = n.getTabState(), r = i?.pageTitle?.trim(), s = n.getURL()?.trim(), o = i?.isLoading === !0, a = this._options.manager.definitions[jt.Browser].defaultLabel, l = hcT({
            currentUrl: s,
            fallbackLabel: a,
            isLoading: o,
            pageTitle: r
        }), c = dcT(s);
        this._options.manager.setLabel({
            groupId: Ds,
            tabId: t,
            label: l,
            labelSecondary: c
        });
        const u = s ? EQt(s) : "";
        u && this._options.manager.setIconUrl({
            groupId: Ds,
            tabId: t,
            iconUrl: u
        });
    }
    _findPersistedSessionUrl(t) {
        return this._findPersistedBrowserTab(t)?.url;
    }
    _findPersistedBrowserTab(t) {
        let e;
        for (const n of this._options.getPersistedBrowserSessions())for (const i of n.tabs)i.browserId === t && i.lastActiveTime > (e?.lastActiveTime ?? -1) && (e = i);
        return e;
    }
    _shouldDestroyBrowserResourceOnTabClose(t, e) {
        return e.browserId === this._options.stableBrowserId ? !1 : !this._hasOtherBrowserWrappers(e.browserId, t);
    }
    _hasOtherBrowserWrappers(t, e) {
        return this._options.manager.getGroup(Ds) ? this._options.manager.getAllTabs().some((n)=>n.kind === jt.Browser && n.id !== e && n.props.browserId === t) : !1;
    }
    _disposeBrowserTabSubscription(t) {
        this._browserTabDisposables.deleteAndDispose(t);
    }
    _disposeBrowserSubscriptionsForBrowserId(t) {
        for (const [e, n] of this._browserTabDisposables)n.browserId === t && this._browserTabDisposables.deleteAndDispose(e);
    }
    _areBrowserIdSetsEqual(t, e) {
        if (t.size !== e.size) return !1;
        for (const n of t)if (!e.has(n)) return !1;
        return !0;
    }
};

}
