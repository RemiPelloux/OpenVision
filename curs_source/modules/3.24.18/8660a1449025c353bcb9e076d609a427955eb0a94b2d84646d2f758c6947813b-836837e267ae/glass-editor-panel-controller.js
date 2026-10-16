import { Ei, xr } from "./Iwo.js";
import { zfs } from "./Ycg.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { bee, oQt } from "./glass-editor-panel-app-registry.js";
import { NE } from "./glass-tab-persistence-constants.js";
import { nl } from "./index.ts";
import { TcT } from "./mE_.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var ME_;
export { ME_ };
var __wakaru_IcT_initialized = false;
export function IcT() {
if (__wakaru_IcT_initialized) return;
__wakaru_IcT_initialized = true;
"use strict";
E(), nl(), Ei(), fn(), k_(), oQt(), NE(), ME_ = class {
    constructor(t){
        this._host = t;
    }
    activateApp(t, e) {
        const n = e?.agentId ?? this._host.getCurrentAgentId();
        switch(t){
            case "terminal":
                this._host.activateTerminalTab();
                return;
            case "browser":
                this.activateBrowserApp(n);
                return;
            case "file":
                this.activateFileApp(n ?? this._host.getFileOwnerAgentId(), {
                    skipAgentStoreFiles: !0
                });
                return;
            case "plan":
                n ? this.activatePlanApp(n) : this._host.activatePlanTab();
                return;
            case "context":
            case "project":
                {
                    this._host.activateStableAppTab("project", {
                        reviveDismissed: e?.activation !== "default"
                    }), e?.placement === "first" && this._host.manager.moveTab({
                        groupId: this._host.groupId,
                        tabId: bee.tabId,
                        newIndex: 0
                    });
                    const i = e?.projectSection;
                    if (i !== void 0) {
                        const r = this._host.manager.getTab({
                            groupId: this._host.groupId,
                            tabId: bee.tabId
                        });
                        r?.kind === jt.Context && r.props.section !== i && this._host.manager.replace({
                            groupId: this._host.groupId,
                            tabId: bee.tabId,
                            kind: jt.Context,
                            props: {
                                ...r.props,
                                section: i
                            }
                        });
                    }
                    return;
                }
            case "mainBotTasks":
                this._host.activateStableAppTab(t, {
                    reviveDismissed: e?.activation !== "default"
                });
                return;
            default:
                {
                    const i = t;
                }
        }
    }
    activateAgentScopedTabKind(t, e) {
        switch(t){
            case jt.Browser:
                this._activateBrowserForAgentSwitch(e);
                return;
            case jt.File:
                this.activateFileApp(e);
                return;
            case jt.Plan:
                this.activatePlanApp(e);
                return;
            case jt.Canvas:
                this._activateExistingCanvasTab(e);
                return;
            default:
                return t;
        }
    }
    _activateExistingCanvasTab(t) {
        const e = this._getPreferredExistingArtifactTabId(jt.Canvas, t);
        e !== void 0 && this._activateTab(e);
    }
    _activateBrowserForAgentSwitch(t) {
        const e = this._getVisibleBrowserTabIds(t), n = this._host.findLastActiveTabIdForKind({
            kind: jt.Browser,
            agentId: t
        });
        if (n && this._hasTab(n)) {
            this._activateTab(n);
            return;
        }
        e.length > 0 && this._activateTab(e[0]);
    }
    _hasTab(t) {
        return this._host.manager.hasTab({
            groupId: this._host.groupId,
            tabId: t
        });
    }
    _activateTab(t) {
        this._host.manager.setActive({
            groupId: this._host.groupId,
            tabId: t,
            force: !0
        });
    }
    _getTab(t) {
        return this._host.manager.getTab({
            groupId: this._host.groupId,
            tabId: t
        });
    }
    activateBrowserApp(t) {
        const e = this._getVisibleBrowserTabIds(t), { placeholderTabIds: n, realTabIds: i } = this._partitionBrowserTabIds(e), r = this._getPreferredBrowserTabId(t, n);
        if (r && this._hasTab(r)) {
            this._activateTab(r);
            return;
        }
        if (i.length > 0) {
            this._activateTab(i[0]);
            return;
        }
        if (n.length > 0) {
            this._activateTab(n[0]);
            return;
        }
        this._host.createBrowserTab({});
    }
    _getVisibleBrowserTabIds(t) {
        return this._host.getTabIdsForKind({
            kind: jt.Browser,
            agentId: t
        });
    }
    _isPlaceholderBrowserTab(t) {
        const e = this._getTab(t);
        return e !== void 0 && zfs(e);
    }
    _partitionBrowserTabIds(t) {
        const e = t.filter((n)=>this._isPlaceholderBrowserTab(n));
        return {
            placeholderTabIds: e,
            realTabIds: t.filter((n)=>!e.includes(n))
        };
    }
    _getPreferredBrowserTabId(t, e) {
        const n = this._host.findLastActiveTabIdForKind({
            kind: jt.Browser,
            agentId: t
        });
        if (!(n !== void 0 && e.includes(n))) return n;
    }
    activatePlanApp(t) {
        const e = this._getPreferredExistingArtifactTabId(jt.Plan, t);
        if (e && this._hasTab(e)) {
            this._activateTab(e);
            return;
        }
        this._host.activatePlanTabAsync().catch(xr);
    }
    _getPreferredExistingArtifactTabId(t, e) {
        return this._host.getRememberedAgentScopedTabId(t, e) ?? this._host.findLastActiveTabIdForKind({
            kind: t,
            agentId: e
        }) ?? this._host.getTabIdsForKind({
            kind: t,
            agentId: e
        })[0];
    }
    activateFileApp(t, e) {
        const n = this._getPreferredFileTabId(t, e);
        if (n) {
            this._activateTab(n);
            return;
        }
        const i = this._findEmptyFilesAppTabId(t);
        if (i) {
            this._activateTab(i);
            return;
        }
        this._host.createEmptyFilesAppTab({
            ownerAgentId: t
        });
    }
    _getPreferredFileTabId(t, e) {
        const n = this._host.getRememberedAgentScopedTabId(jt.File, t);
        return n && this._isOpenFileTab(n, e) ? n : this._findLastOpenFileTabId(t, e);
    }
    _findLastOpenFileTabId(t, e) {
        let n, i = -1;
        for (const r of this._host.getTabIdsForKind({
            kind: jt.File,
            agentId: t
        })){
            if (!this._isOpenFileTab(r, e)) continue;
            const o = this._getTab(r)?.lastActiveTime ?? 0;
            o > i && (i = o, n = r);
        }
        return n;
    }
    _findEmptyFilesAppTabId(t) {
        for (const e of this._host.getTabIdsForKind({
            kind: jt.File,
            agentId: t
        }))if (this._isEmptyFilesAppTab(e)) return e;
    }
    _isOpenFileTab(t, e) {
        const n = this._getTab(t);
        return !(n?.kind !== jt.File || !n.props.filePath || e?.skipAgentStoreFiles && TcT(n.props.filePath));
    }
    _isEmptyFilesAppTab(t) {
        const e = this._getTab(t);
        return e?.kind === jt.File && !e.props.filePath;
    }
};

}
