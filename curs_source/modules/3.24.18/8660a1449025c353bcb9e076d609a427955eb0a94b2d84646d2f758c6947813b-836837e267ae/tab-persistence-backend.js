import { Bye, GUl, VTe } from "./BA.js";
import { UP, Vle, dIl } from "./Ycg.js";
import { JcT } from "./agent-persisted-model.js";
import { nuT } from "./agent-persisted-storage.js";
import { rOn } from "./browser-bookmark-utils.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { Ds, NE, qMe } from "./glass-tab-persistence-constants.js";
import { WX } from "./glass-tab-scope.js";
import { QE_, QcT, ZE_, ZcT, cuT, euT, g9s, iuT, luT, ouT, suT, tuT } from "./mE_.js";
import { EQt } from "./ofv.js";
import { INn } from "./pr-tab-identity.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
import { ruT } from "./workspace-persisted-model.js";
import { auT } from "./workspace-persisted-storage.js";
import { eG } from "./yBp.js";
var owc, JE_;
export { JE_, owc };
var __wakaru_uuT_initialized = false;
export function uuT() {
if (__wakaru_uuT_initialized) return;
__wakaru_uuT_initialized = true;
"use strict";
E(), Mk(), rOn(), k_(), INn(), WX(), JcT(), nuT(), NE(), ruT(), auT(), owc = 20, JE_ = class {
    constructor(t, e, n){
        this._storageService = t, this._workspaceId = e, this._runtime = n, this._persistedBrowserSessions = [], this._agentPersistedStateById = new Map, this._loadedAgentTabStateIds = new Set, this._dirtyAgentTabStateIds = new Set;
    }
    getPersistedBrowserSessions() {
        return this._persistedBrowserSessions;
    }
    getPersistedPanels() {
        return this._persistedPanels;
    }
    restore() {
        this._runtime.runWhileRestoring(()=>{
            const t = new Map, e = this._readWorkspaceState();
            if (this._persistedPanels = e?.panels, !e) {
                this._pendingAgentScopedActiveTarget = void 0, this._persistedBrowserSessions = [], this._runtime.setDismissedPullRequestTabUrls([]), this._runtime.setDismissedSideChatAgentIds([]), this._runtime.setRememberedAgentTerminalSelections(void 0), this._runtime.setDismissedSeededTabIds([]), this._runtime.ensureActiveTab();
                return;
            }
            this._runtime.setDismissedPullRequestTabUrls(e.dismissedPullRequestTabUrls ?? []), this._runtime.setDismissedSideChatAgentIds(e.dismissedSideChatAgentIds ?? []), this._runtime.setRememberedAgentTerminalSelections(e.rememberedAgentTerminalSelections), this._runtime.setDismissedSeededTabIds(e.dismissedSeededTabIds ?? []), this._persistedBrowserSessions = (e.browserSessions ?? []).map(luT);
            for (const n of e.stableTabs ?? [])this._runtime.shouldSkipStableTabRestore(n.id) || this._runtime.manager.restoreStableTab(g9s(n));
            for (const n of e.workspaceTabs ?? []){
                const i = g9s(n);
                if (!this._runtime.shouldSkipWorkspaceTabRestore(i)) {
                    if (i.kind === jt.Browser) {
                        if (this._runtime.manager.hasTab({
                            groupId: Ds,
                            tabId: i.id
                        })) continue;
                        const { iconUrl: r, ...s } = i;
                        this._runtime.manager.restore(s);
                        continue;
                    }
                    this._restoreWorkspaceTab(i, t);
                }
            }
            if (e.activeTarget?.scope === "workspace") {
                if (e.activeTarget.tabId && this._runtime.manager.hasTab({
                    groupId: Ds,
                    tabId: e.activeTarget.tabId
                })) {
                    this._runtime.manager.setActive({
                        groupId: Ds,
                        tabId: e.activeTarget.tabId
                    });
                    return;
                }
                if (this._restoreMissingActivePullRequestTab(e.activeTarget.tabId, t) || e.activeTarget.tabId && this._isDismissedPullRequestTabUrl(UP(VTe(e.activeTarget.tabId)))) return;
                this._runtime.ensureActiveTab();
                return;
            }
            if (e.activeTarget?.scope === "agentApp") {
                this._pendingAgentScopedActiveTarget = e.activeTarget;
                return;
            }
            this._runtime.ensureActiveTab();
        });
    }
    flush(t) {
        const e = Array.from(t.stableTabs.values()).filter((o)=>o.registered).map((o)=>g9s({
                ...o,
                groupId: Ds
            })), n = t.tabs.filter((o)=>this._runtime.isPersistableWorkspaceTab(o)).filter((o)=>!this._isDismissedPersistablePullRequestTab(o)).map(cuT), i = this._buildPersistedBrowserSessions(t);
        this._persistedBrowserSessions = i, this._persistedPanels = t.panels, ouT(this._storageService, this._workspaceId, iuT({
            stableTabs: e,
            workspaceTabs: n,
            activeTarget: this._buildPersistedActiveTarget(t),
            browserSessions: i,
            dismissedPullRequestTabUrls: this._runtime.getDismissedPullRequestTabUrls(),
            dismissedSideChatAgentIds: this._runtime.getDismissedSideChatAgentIds(),
            rememberedAgentTerminalSelections: this._runtime.getRememberedAgentTerminalSelections(),
            dismissedSeededTabIds: this._runtime.getDismissedSeededTabIds(),
            panels: t.panels
        }));
        const r = new Set([
            ...this._loadedAgentTabStateIds,
            ...this._dirtyAgentTabStateIds
        ]);
        for (const o of t.tabs)if (o.kind === jt.Browser) {
            const a = Vle(o.props);
            a && r.add(a);
        } else (o.kind === jt.File || o.kind === jt.Plan || o.kind === jt.Canvas) && o.props.ownerAgentId && r.add(o.props.ownerAgentId);
        const s = t.activeTabId;
        if (s) {
            const o = this._runtime.manager.getTab({
                groupId: Ds,
                tabId: s
            });
            if (o?.kind === jt.Plan) {
                const a = o.props.ownerAgentId ?? this._runtime.getCurrentAgentId();
                a && r.add(a);
            }
        }
        for (const o of r)this._writeAgentState(o, this._buildAgentPersistedState(o, t));
        this._dirtyAgentTabStateIds.clear();
    }
    ensureAgentTabStateLoaded(t) {
        if (this._loadedAgentTabStateIds.has(t)) return;
        const e = this._readAgentState(t);
        this._loadedAgentTabStateIds.add(t), this._dirtyAgentTabStateIds.add(t), this._syncPersistedBrowserSessionsFromLoadedAgentState(), e && this._hydrateAgentPersistedState(t, e), this._activatePendingAgentScopedTargetIfReady(t);
    }
    ensureAgentTabStatesLoaded(t) {
        for (const e of new Set(t))this.ensureAgentTabStateLoaded(e);
    }
    cancelPendingAgentScopedActiveTarget() {
        this._pendingAgentScopedActiveTarget = void 0;
    }
    _readWorkspaceState() {
        return suT(this._storageService, this._workspaceId);
    }
    _readAgentState(t) {
        const e = this._agentPersistedStateById.get(t);
        if (e !== void 0) return e;
        const n = euT(this._storageService, this._workspaceId, t);
        return n !== void 0 && this._agentPersistedStateById.set(t, n), n;
    }
    _writeAgentState(t, e) {
        e === void 0 ? this._agentPersistedStateById.delete(t) : this._agentPersistedStateById.set(t, e), tuT(this._storageService, this._workspaceId, t, e);
    }
    _restoreWorkspaceTab(t, e) {
        if (t.kind === jt.Pr) {
            const n = this._normalizeRestoredPullRequestTab(t), i = this._pullRequestIdentityUrlFromWorkspaceTab(n);
            if (this._isDismissedPullRequestTabUrl(i)) return;
            const r = this._restoredPullRequestTabIdentity(i, n.id, n.props.ownerAgentId);
            if (r !== void 0) {
                if (e.has(r)) return;
                e.set(r, n.id);
            }
            this._runtime.manager.restore(n);
            return;
        }
        if (t.id === qMe && t.kind === jt.Context && t.label === "Context") {
            this._runtime.manager.restore({
                ...t,
                label: "Project"
            });
            return;
        }
        this._runtime.manager.restore(t);
    }
    _pullRequestIdentityUrlFromWorkspaceTab(t) {
        const e = typeof t.props.prUrl == "string" ? t.props.prUrl : void 0;
        return UP(e ?? VTe(t.id));
    }
    _isDismissedPullRequestTabUrl(t) {
        return this._runtime.isDismissedPullRequestTabUrl(t);
    }
    _restoredPullRequestTabIdentity(t, e, n) {
        const i = Bye(t);
        return i === void 0 ? void 0 : `${n ?? GUl(e) ?? this._runtime.getCurrentAgentId() ?? ""}\0${i}`;
    }
    _isDismissedPersistablePullRequestTab(t) {
        if (t.kind !== jt.Pr) return !1;
        const e = typeof t.props.prUrl == "string" ? t.props.prUrl : void 0;
        return this._isDismissedPullRequestTabUrl(e ?? VTe(t.id));
    }
    _normalizeRestoredPullRequestTab(t) {
        const e = UP(typeof t.props.prUrl == "string" ? t.props.prUrl : VTe(t.id)), n = t.props.ownerAgentId ?? GUl(t.id) ?? this._runtime.getCurrentAgentId(), i = eG(e);
        return {
            ...t,
            ...t.label || !i ? {} : {
                label: `PR #${i}`
            },
            props: {
                ...t.props,
                ...e ? {
                    prUrl: e
                } : {},
                ...n ? {
                    ownerAgentId: n
                } : {}
            }
        };
    }
    _restoreMissingActivePullRequestTab(t, e) {
        if (!t) return !1;
        const n = UP(VTe(t));
        if (!n || this._isDismissedPullRequestTabUrl(n)) return !1;
        const i = eG(n), r = GUl(t) ?? this._runtime.getCurrentAgentId(), s = this._restoredPullRequestTabIdentity(n, t, void 0), o = s === void 0 ? void 0 : e.get(s);
        return o !== void 0 && o !== t ? (this._runtime.manager.setActive({
            groupId: Ds,
            tabId: o
        }), !0) : (s !== void 0 && e.set(s, t), this._runtime.manager.restore({
            groupId: Ds,
            id: t,
            kind: jt.Pr,
            label: i ? `PR #${i}` : "Pull Request",
            props: {
                prUrl: n,
                ...r ? {
                    ownerAgentId: r
                } : {}
            }
        }), this._runtime.manager.setActive({
            groupId: Ds,
            tabId: t
        }), !0);
    }
    _hydrateAgentPersistedState(t, e) {
        this._runtime.runWhileRestoring(()=>{
            const n = new Map((e.browserSession?.tabs ?? []).map((u)=>[
                    u.browserId,
                    u.url
                ])), i = new Map((e.browserTabs ?? []).map((u)=>[
                    u.id,
                    u
                ])), r = new Map((e.fileTabs ?? []).map((u)=>[
                    u.id,
                    u
                ])), s = new Map((e.planTabs ?? []).map((u)=>[
                    u.id,
                    u
                ])), o = new Map((e.canvasTabs ?? []).map((u)=>[
                    u.id,
                    u
                ])), a = e.tabOrder && e.tabOrder.length > 0 ? e.tabOrder : [
                ...(e.fileTabs ?? []).map((u)=>u.id),
                ...(e.planTabs ?? []).map((u)=>u.id),
                ...(e.canvasTabs ?? []).map((u)=>u.id),
                ...(e.browserTabs ?? []).map((u)=>u.id)
            ], l = new Set, c = (u)=>{
                if (l.has(u)) return;
                if (this._runtime.manager.hasTab({
                    groupId: Ds,
                    tabId: u
                })) {
                    l.add(u);
                    return;
                }
                const d = i.get(u);
                if (d) {
                    const { iconUrl: f, ..._ } = d, b = n.get(_.props.browserId), y = typeof b == "string" && b.trim().length > 0 && b !== "about:blank" ? b.trim() : void 0, S = typeof _.props.initialUrl == "string" ? _.props.initialUrl.trim() : "", k = S.length > 0 && S !== "about:blank" ? S : void 0, C = y ?? k;
                    this._runtime.manager.restore({
                        ..._,
                        props: {
                            ..._.props,
                            ownerAgentId: _.props.ownerAgentId ?? t,
                            ...C ? {
                                initialUrl: C
                            } : {}
                        }
                    }), l.add(u);
                    return;
                }
                const h = r.get(u);
                if (h) {
                    const f = {
                        ...h,
                        props: h.props.ownerAgentId === void 0 ? {
                            ...h.props,
                            ownerAgentId: t
                        } : h.props
                    };
                    this._runtime.manager.restore(f), this._runtime.validateRestoredFileTab(f), l.add(u);
                    return;
                }
                const p = s.get(u);
                if (p) {
                    this._runtime.manager.restore({
                        ...p,
                        props: p.props.ownerAgentId === void 0 ? {
                            ...p.props,
                            ownerAgentId: t
                        } : p.props
                    }), l.add(u);
                    return;
                }
                const g = o.get(u);
                g && (this._runtime.manager.restore({
                    ...g,
                    props: g.props.ownerAgentId === void 0 ? {
                        ...g.props,
                        ownerAgentId: t
                    } : g.props
                }), l.add(u));
            };
            for (const u of a)c(u);
            for (const u of i.keys())c(u);
            for (const u of r.keys())c(u);
            for (const u of s.keys())c(u);
            for (const u of o.keys())c(u);
        }), this._runtime.setAgentScopedAppTabIds(t, e.rememberedAppTabIds ? {
            ...e.rememberedAppTabIds
        } : void 0);
    }
    _activatePendingAgentScopedTargetIfReady(t) {
        if (this._pendingAgentScopedActiveTarget?.scope !== "agentApp" || this._pendingAgentScopedActiveTarget.agentId !== t) return;
        const e = this._pendingAgentScopedActiveTarget.kind;
        this._runtime.runWhileRestoring(()=>this._runtime.activateAgentScopedTabKind(e, t)), this._pendingAgentScopedActiveTarget = void 0;
    }
    _syncPersistedBrowserSessionsFromLoadedAgentState() {
        this._persistedBrowserSessions = QcT({
            existingSessions: this._persistedBrowserSessions,
            loadedAgentIds: this._loadedAgentTabStateIds,
            getAgentState: (t)=>this._agentPersistedStateById.get(t)
        }).slice(0, owc);
    }
    _buildPersistedActiveTarget(t) {
        const e = this._pendingAgentScopedActiveTarget?.scope === "agentApp" ? this._pendingAgentScopedActiveTarget : void 0, n = t.activeTabId ?? null;
        if (!n) return e ?? {
            scope: "workspace",
            tabId: null
        };
        const i = this._runtime.manager.getTab({
            groupId: Ds,
            tabId: n
        });
        if (!i) return e ?? {
            scope: "workspace",
            tabId: null
        };
        if (this._pendingAgentScopedActiveTarget = void 0, i.kind === jt.Browser || i.kind === jt.File || i.kind === jt.Canvas) {
            const r = i.kind === jt.Browser ? Vle(i.props) : i.props.ownerAgentId;
            if (r) return {
                scope: "agentApp",
                agentId: r,
                kind: i.kind
            };
        }
        if (i.kind === jt.Plan) {
            const r = i.props.ownerAgentId ?? this._runtime.getCurrentAgentId();
            if (r) return {
                scope: "agentApp",
                agentId: r,
                kind: jt.Plan
            };
        }
        return i.kind === jt.Pr && i.props.preview === !0 ? {
            scope: "workspace",
            tabId: null
        } : {
            scope: "workspace",
            tabId: n
        };
    }
    _buildPersistedBrowserSessions(t) {
        const e = new Map;
        for (const i of this._persistedBrowserSessions)for (const r of i.tabs)e.set(dIl(i.agentId, r.browserId), r);
        const n = new Map;
        for (const i of t.tabs){
            if (i.kind !== jt.Browser || i.props.persistencePolicy === "afterActivation" || i.props.transient === !0 || this._runtime.isPreviewTab(i)) continue;
            const r = Vle(i.props);
            let s;
            if (r !== void 0) s = r;
            else if (this._runtime.isWorkspaceBrowserTab(i)) s = void 0;
            else continue;
            const o = s === void 0 ? i.props.ownerAgentId : void 0, a = e.get(dIl(s, i.props.browserId)) ?? (o === void 0 ? void 0 : e.get(dIl(o, i.props.browserId))), l = this._runtime.browserViewStore.getView(i.props.browserId), c = l?.getTabState(), u = ZE_(c, a?.url);
            if (!u || u === "about:blank") continue;
            const d = c?.pageTitle?.trim() || i.label || a?.title || u, h = c?.favicon?.trim() || i.iconUrl || a?.faviconUrl || EQt(u), p = Math.max(i.lastActiveTime ?? 0, a?.lastActiveTime ?? 0), g = {
                browserId: i.props.browserId,
                faviconUrl: h || void 0,
                lastActiveTime: p,
                title: d,
                url: u,
                ...QE_(l, a)
            }, f = n.get(s);
            if (f) {
                f.tabs.push(g), f.lastActiveTime = Math.max(f.lastActiveTime, p);
                continue;
            }
            n.set(s, {
                lastActiveTime: p,
                tabs: [
                    g
                ]
            });
        }
        return Array.from(n.entries()).map(([i, r])=>({
                agentId: i,
                lastActiveTime: r.lastActiveTime,
                tabs: r.tabs
            })).sort((i, r)=>r.lastActiveTime - i.lastActiveTime).slice(0, owc);
    }
    _buildAgentPersistedBrowserSession(t, e) {
        const n = this._agentPersistedStateById.get(t)?.browserSession, i = new Map;
        for (const o of n?.tabs ?? [])i.set(o.browserId, o);
        const r = [];
        let s = 0;
        for (const o of e.tabs){
            if (o.kind !== jt.Browser || Vle(o.props) !== t || o.props.persistencePolicy === "afterActivation" || o.props.transient === !0 || this._runtime.isPreviewTab(o)) continue;
            const a = i.get(o.props.browserId), l = this._runtime.browserViewStore.getView(o.props.browserId), c = l?.getTabState(), u = ZE_(c, a?.url);
            if (!u || u === "about:blank") continue;
            const d = Math.max(o.lastActiveTime ?? 0, a?.lastActiveTime ?? 0);
            s = Math.max(s, d), r.push({
                browserId: o.props.browserId,
                faviconUrl: c?.favicon?.trim() || o.iconUrl || a?.faviconUrl || EQt(u) || void 0,
                lastActiveTime: d,
                title: c?.pageTitle?.trim() || o.label || a?.title || u,
                url: u,
                ...QE_(l, a)
            });
        }
        if (r.length !== 0) return {
            lastActiveTime: s,
            tabs: r
        };
    }
    _buildAgentPersistedState(t, e) {
        const n = [], i = [], r = [], s = [], o = [];
        for (const l of e.tabs)switch(l.kind){
            case jt.Browser:
                {
                    if (!this._runtime.isPersistableOwnedBrowserTabForAgent(l, t)) break;
                    const { iconUrl: c, ...u } = l;
                    n.push({
                        ...u,
                        groupId: Ds
                    }), o.push(l.id);
                    break;
                }
            case jt.File:
                {
                    if (!this._runtime.isPersistableOwnedFileTabForAgent(l, t)) break;
                    i.push({
                        ...l,
                        groupId: Ds
                    }), o.push(l.id);
                    break;
                }
            case jt.Plan:
                {
                    if (!this._runtime.isPersistableOwnedPlanTabForAgent(l, t)) break;
                    r.push({
                        ...l,
                        groupId: Ds
                    }), o.push(l.id);
                    break;
                }
            case jt.Canvas:
                {
                    if (!this._runtime.isPersistableOwnedCanvasTabForAgent(l, t)) break;
                    s.push({
                        ...l,
                        groupId: Ds
                    }), o.push(l.id);
                    break;
                }
            default:
                break;
        }
        const a = this._rememberedAppTabIdsForFlush(t);
        return ZcT({
            agentId: t,
            browserTabs: n,
            fileTabs: i,
            planTabs: r,
            canvasTabs: s,
            tabOrder: o,
            browserSession: this._buildAgentPersistedBrowserSession(t, e),
            rememberedAppTabIds: a
        });
    }
    _rememberedAppTabIdsForFlush(t) {
        const e = this._runtime.getAgentScopedAppTabIds(t), n = e?.[jt.File], i = e?.[jt.Plan], r = e?.[jt.Canvas];
        if (!(n === void 0 && i === void 0 && r === void 0)) return {
            ...n !== void 0 ? {
                [jt.File]: n
            } : {},
            ...i !== void 0 ? {
                [jt.Plan]: i
            } : {},
            ...r !== void 0 ? {
                [jt.Canvas]: r
            } : {}
        };
    }
};

}
