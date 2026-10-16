import { uN } from "./Aeg.js";
import { Gt, Nt, Pn, Qe, Vh, Vn, da, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { GP0, WP0, qP0 } from "./XRv.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { df, qn } from "./async.js";
import { ZS } from "./draftIds.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { AA, qO } from "./editorInput.js";
import { Rn } from "./extensions.js";
import { $d, vT } from "./glass-tab-persistence-service.contract.js";
import { aZt, iUf } from "./historyService.js";
import { It, dn } from "./instantiation.js";
import { Lr, gu } from "./resources.js";
import { Cy } from "./selection.js";
import { UEt, l2n } from "./textEditor.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var Itc, U2v, j2v, $2v, UPs, jPs;
export { $2v, Itc, U2v, UPs, j2v, jPs };
var __wakaru_xtc_initialized = false;
export function xtc() {
if (__wakaru_xtc_initialized) return;
__wakaru_xtc_initialized = true;
"use strict";
E(), qn(), Gt(), Qe(), Lr(), fn(), Cy(), Rn(), It(), l2n(), qO(), wl(), ZS(), iUf(), k_(), vT(), Itc = class yeu extends AA {
    constructor(e){
        super(), this._resource = e;
    }
    get typeId() {
        return yeu.TYPE_ID;
    }
    get resource() {
        return this._resource;
    }
    toUntyped() {
        return {
            resource: this._resource
        };
    }
    matches(e) {
        return e instanceof yeu ? gu(this._resource, e._resource) : e instanceof AA ? gu(this._resource, e.resource) : gu(this._resource, e.resource);
    }
    getName() {
        return this._resource.path.split("/").pop() ?? "";
    }
}, Itc.TYPE_ID = "glass.fileEditorInput", U2v = Itc, j2v = 99999, $2v = class {
    constructor(){
        this.tabs = new da, this.version = 0, this.pendingNavigation = void 0;
    }
    dispose() {
        this.tabs.dispose();
    }
}, UPs = jn("glassFilesNavigationService"), jPs = class extends st {
    constructor(t, e, n){
        super(), this._instantiationService = t, this._tabPersistenceService = e, this._agentRepositoryService = n, this._agents = this._register(new da), this._onDidChangeAgent = this._register(new tt), this._register(this._agentRepositoryService.agents.onChange((i)=>{
            this._releaseRemovedAgents(i);
        })), this._register(Pn(this._tabPersistenceService.manager.subscribe("tabClosed", ({ tabId: i, isTransfer: r })=>{
            if (!r) for (const s of this._agents.values())s.tabs.deleteAndDispose(i);
        }))), this._register(Pn(this._tabPersistenceService.manager.subscribe("tabPropsChanged", ({ groupId: i, tabId: r })=>{
            const s = this._tabPersistenceService.manager.getTab({
                groupId: i,
                tabId: r
            });
            if (s?.kind !== jt.File || s.props.preview || !s.props.filePath) return;
            const o = rt.parse(s.props.filePath);
            for (const a of this._agents.values()){
                const l = a.tabs.get(r)?.stacks;
                l && GP0(l, o);
            }
        })));
    }
    _releaseRemovedAgents(t) {
        if (this._agents.size === 0) return;
        const e = new Set(t.map((n)=>n.id));
        for (const n of [
            ...this._agents.keys()
        ])uN(n) || e.has(n) || this._releaseAgent(n);
    }
    _releaseAgent(t) {
        this._agents.has(t) && (this._agents.deleteAndDispose(t), this._onDidChangeAgent.fire(t));
    }
    _getOrCreate(t) {
        let e = this._agents.get(t);
        return e || (e = new $2v, this._agents.set(t, e)), e;
    }
    _getTab({ agentId: t, tabId: e }) {
        return this._agents.get(t)?.tabs.get(e);
    }
    _getOrCreateTab(t, { agentId: e, tabId: n }) {
        const i = t.tabs.get(n);
        if (i) return i;
        const r = new Nt, s = r.add(this._instantiationService.createInstance(aZt, 0)), o = {
            stacks: s,
            editor: r.add(new Vn),
            isNavigating: !1,
            dispose: ()=>r.dispose()
        };
        return s.setNavigateHandler(async (a)=>this._handleNavigate(t, n, o, a)), r.add(s.onDidChange(()=>{
            const a = this._agents.get(e);
            a && (a.version++, this._onDidChangeAgent.fire(e));
        })), t.tabs.set(n, o), o;
    }
    async _handleNavigate(t, e, n, i) {
        const r = i.editor.resource;
        if (!r) return;
        const s = n.editor.value;
        if (s && gu(s.uri, r)) {
            if (i.selection instanceof UEt) {
                const c = i.selection.getSelection();
                s.editor.setSelection(c), s.editor.revealRangeInCenterIfOutsideViewport(c);
            }
            return;
        }
        t.pendingNavigation?.settled.complete();
        const o = {
            uri: r,
            settled: new df
        };
        t.pendingNavigation = o;
        let a;
        if (i.selection instanceof UEt) {
            const c = i.selection.getSelection();
            a = {
                startLineNumber: c.startLineNumber,
                startColumn: c.startColumn,
                endLineNumber: c.endLineNumber,
                endColumn: c.endColumn
            };
        }
        const l = {
            uriString: r.toString(),
            selection: a
        };
        this._tabPersistenceService.showFileInPreviewTab({
            tabId: e,
            ...l
        }) || this._tabPersistenceService.activateFileTab(l), await Vh(o.settled.p, 2e3), t.pendingNavigation === o && (t.pendingNavigation = void 0);
    }
    canGoBack(t) {
        return this._getTab(t)?.stacks.canGoBack() ?? !1;
    }
    canGoForward(t) {
        return this._getTab(t)?.stacks.canGoForward() ?? !1;
    }
    getStateToken({ agentId: t, tabId: e }) {
        const n = this._agents.get(t);
        if (!n) return 0;
        const i = n.tabs.get(e)?.stacks;
        return n.version << 2 | (i?.canGoBack() ? 1 : 0) | (i?.canGoForward() ? 2 : 0);
    }
    async goBack(t) {
        const e = this._getTab(t);
        if (!(!e || e.isNavigating)) {
            e.isNavigating = !0;
            try {
                await e.stacks.goBack();
            } finally{
                e.isNavigating = !1;
            }
        }
    }
    async goForward(t) {
        const e = this._getTab(t);
        if (!(!e || e.isNavigating)) {
            e.isNavigating = !0;
            try {
                await e.stacks.goForward();
            } finally{
                e.isNavigating = !1;
            }
        }
    }
    setActiveEditor({ agentId: t, tabId: e, uriString: n, editor: i, initialSelection: r }) {
        const s = this._getOrCreate(t), o = this._getOrCreateTab(s, {
            agentId: t,
            tabId: e
        }), a = rt.parse(n), l = new Nt, c = qP0(a, i, r);
        l.add(c.input), o.editor.value = {
            editor: i,
            uri: a,
            dispose: ()=>l.dispose()
        }, o.stacks.handleActiveEditorChange(c), c.clearPendingInitialSelection();
        const u = (h)=>{
            o.stacks.handleActiveEditorSelectionChange(c, {
                reason: h
            });
        };
        l.add(i.onDidChangeCursorPosition((h)=>{
            u(WP0(h.source));
        })), l.add(i.onDidChangeModelContent(()=>{
            u(3);
        }));
        const d = s.pendingNavigation;
        d && gu(d.uri, a) && (s.pendingNavigation = void 0, d.settled.complete());
    }
    clearActiveEditor(t) {
        this._getTab(t)?.editor.clear();
    }
    getDebugSnapshot(t) {
        return this._getTab(t)?.stacks.getDebugState() ?? {
            entries: [],
            index: -1
        };
    }
    subscribeToAgent(t, e) {
        return this._getOrCreate(t), this._onDidChangeAgent.event((n)=>{
            n === t && e();
        });
    }
}, jPs = Re([
    F(0, dn),
    F(1, $d),
    F(2, ma)
], jPs), bn(UPs, jPs, 1);

}
