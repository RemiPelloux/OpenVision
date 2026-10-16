import { D, Ei, F0o, Gt, Mm, Nt, Qe, da, en, st, tt, xr } from "./Iwo.js";
import { Ik, PY, cXd, cai } from "./LYd.js";
import { bn } from "./SZu.js";
import { bo } from "./arrays.js";
import { Uk, lAt } from "./composerEditor.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Dd, Hn, Pr, Rbt } from "./dom_2.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { Nm, Wm, od, pne } from "./editor_2.js";
import { Rn } from "./extensions.js";
import { Eet, Tet, WEo, is, ms } from "./files.js";
import { hV, sI } from "./history_3.js";
import { It, dn } from "./instantiation.js";
import { Id, Pv } from "./layoutService_2.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Ji, Li, sg } from "./log.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Rd, ih } from "./pathService.js";
import { ole, tns } from "./resources_2.js";
import { GKa, wL } from "./search_2.js";
import { Zi, ki } from "./storage_2.js";
import { UEt, l2n } from "./textEditor.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { HM, lN } from "./workspaces.js";
import { HKa } from "./yBp.js";
import { li } from "./ze.js";
var Vie, wBl, aZt, nUf, xKe, RNi;
export { RNi, Vie, aZt, nUf, wBl, xKe };
var __wakaru_iUf_initialized = false;
export function iUf() {
if (__wakaru_iUf_initialized) return;
__wakaru_iUf_initialized = true;
"use strict";
E(), Bt(), fn(), od(), Wo(), hV(), ms(), Sr(), Qe(), Zi(), Gt(), or(), Ld(), wL(), It(), Pv(), Hi(), bo(), Rn(), Hn(), HM(), Ki(), Ei(), tns(), ih(), Vp(), zp(), Ji(), Bs(), l2n(), lAt(), Vie = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        super(), this.editorService = t, this.editorGroupService = e, this.contextService = n, this.storageService = i, this.configurationService = r, this.fileService = s, this.workspacesService = o, this.instantiationService = a, this.layoutService = l, this.contextKeyService = c, this.logService = u, this.activeEditorListeners = this._register(new Nt), this.lastActiveEditor = void 0, this._onDidChangeEditorNavigationStack = this._register(new tt), this.onDidChangeEditorNavigationStack = this._onDidChangeEditorNavigationStack.event, this.defaultScopedEditorNavigationStack = void 0, this.editorGroupScopedNavigationStacks = new Map, this.editorScopedNavigationStacks = new Map, this.editorNavigationScope = 0, this.recentlyUsedEditorsStack = void 0, this.recentlyUsedEditorsStackIndex = 0, this.recentlyUsedEditorsInGroupStack = void 0, this.recentlyUsedEditorsInGroupStackIndex = 0, this.navigatingInRecentlyUsedEditorsStack = !1, this.navigatingInRecentlyUsedEditorsInGroupStack = !1, this.recentlyClosedEditors = [], this.ignoreEditorCloseEvent = !1, this.history = void 0, this.editorHistoryListeners = this._register(new da), this.resourceExcludeMatcher = this._register(new Rbt($t, ()=>{
            const d = this._register(this.instantiationService.createInstance(ole, (h)=>HKa(h ? this.configurationService.getValue({
                    resource: h
                }) : this.configurationService.getValue()) || Object.create(null), (h)=>h.affectsConfiguration(WEo) || h.affectsConfiguration(GKa)));
            return this._register(d.onExpressionChange(()=>this.removeExcludedFromHistory())), d;
        })), this.editorHelper = this.instantiationService.createInstance(RNi), this.canNavigateBackContextKey = new cn("canNavigateBack", !1, D(12836, null)).bindTo(this.contextKeyService), this.canNavigateForwardContextKey = new cn("canNavigateForward", !1, D(12837, null)).bindTo(this.contextKeyService), this.canNavigateBackInNavigationsContextKey = new cn("canNavigateBackInNavigationLocations", !1, D(12838, null)).bindTo(this.contextKeyService), this.canNavigateForwardInNavigationsContextKey = new cn("canNavigateForwardInNavigationLocations", !1, D(12839, null)).bindTo(this.contextKeyService), this.canNavigateToLastNavigationLocationContextKey = new cn("canNavigateToLastNavigationLocation", !1, D(12840, null)).bindTo(this.contextKeyService), this.canNavigateBackInEditsContextKey = new cn("canNavigateBackInEditLocations", !1, D(12841, null)).bindTo(this.contextKeyService), this.canNavigateForwardInEditsContextKey = new cn("canNavigateForwardInEditLocations", !1, D(12842, null)).bindTo(this.contextKeyService), this.canNavigateToLastEditLocationContextKey = new cn("canNavigateToLastEditLocation", !1, D(12843, null)).bindTo(this.contextKeyService), this.canReopenClosedEditorContextKey = new cn("canReopenClosedEditor", !1, D(12844, null)).bindTo(this.contextKeyService), this.registerListeners(), this.editorService.activeEditorPane && this.onDidActiveEditorChange();
    }
    getRecentLocations(t = 100) {
        return this.getStack().getRecentLocations(t);
    }
    registerListeners() {
        this.registerMouseNavigationListener(), this._register(this.editorService.onDidActiveEditorChange(()=>this.onDidActiveEditorChange())), this._register(this.editorService.onDidOpenEditorFail((t)=>this.remove(t.editor))), this._register(this.editorService.onDidCloseEditor((t)=>this.onDidCloseEditor(t))), this._register(this.editorService.onDidMostRecentlyActiveEditorsChange(()=>this.handleEditorEventInRecentEditorsStack())), this._register(this.editorGroupService.onDidRemoveGroup((t)=>this.onDidRemoveGroup(t))), this._register(this.fileService.onDidFilesChange((t)=>this.onDidFilesChange(t))), this._register(this.fileService.onDidRunOperation((t)=>this.onDidFilesChange(t))), this._register(this.storageService.onWillSaveState(()=>this.saveState())), this.registerEditorNavigationScopeChangeListener(), this._register(this.onDidChangeEditorNavigationStack(()=>this.updateContextKeys())), this._register(this.editorGroupService.onDidChangeActiveGroup(()=>this.updateContextKeys()));
    }
    onDidCloseEditor(t) {
        this.handleEditorCloseEventInHistory(t), this.handleEditorCloseEventInReopen(t);
    }
    registerMouseNavigationListener() {
        const t = this._register(new Nt), e = ()=>{
            t.clear(), this.configurationService.getValue(Vie.MOUSE_NAVIGATION_SETTING) && this._register(en.runAndSubscribe(this.layoutService.onDidAddContainer, ({ container: n, disposables: i })=>{
                const r = i.add(new Nt);
                r.add(li(n, Pr.MOUSE_DOWN, (s)=>this.onMouseDownOrUp(s, !0))), r.add(li(n, Pr.MOUSE_UP, (s)=>this.onMouseDownOrUp(s, !1))), t.add(r);
            }, {
                container: this.layoutService.mainContainer,
                disposables: this._store
            }));
        };
        this._register(this.configurationService.onDidChangeConfiguration((n)=>{
            n.affectsConfiguration(Vie.MOUSE_NAVIGATION_SETTING) && e();
        })), e();
    }
    onMouseDownOrUp(t, e) {
        switch(t.button){
            case 3:
                Dd.stop(t), e && this.goBack();
                break;
            case 4:
                Dd.stop(t), e && this.goForward();
                break;
        }
    }
    onDidRemoveGroup(t) {
        this.handleEditorGroupRemoveInNavigationStacks(t);
    }
    onDidActiveEditorChange() {
        const t = this.editorGroupService.activeGroup, e = t.activeEditorPane;
        if (!(this.lastActiveEditor && this.editorHelper.matchesEditorIdentifier(this.lastActiveEditor, e))) {
            if (this.lastActiveEditor = e?.input ? {
                editor: e.input,
                groupId: e.group.id
            } : void 0, this.activeEditorListeners.clear(), !e?.group.isTransient(e.input)) this.handleActiveEditorChange(t, e);
            else {
                this.logService.trace(`[History]: ignoring transient editor change until becoming non-transient (editor: ${e.input?.resource?.toString()}})`);
                const n = t.onDidModelChange((i)=>{
                    i.kind === 12 && i.editor === e.input && !e.group.isTransient(e.input) && (n.dispose(), this.handleActiveEditorChange(t, e));
                });
                this.activeEditorListeners.add(n);
            }
            cai(e) && this.activeEditorListeners.add(e.onDidChangeSelection((n)=>{
                e.group.isTransient(e.input) ? this.logService.trace(`[History]: ignoring transient editor selection change (editor: ${e.input?.resource?.toString()}})`) : this.handleActiveEditorSelectionChangeEvent(t, e, n);
            })), this.updateContextKeys();
        }
    }
    onDidFilesChange(t) {
        t instanceof Eet ? t.gotDeleted() && this.remove(t) : t.isOperation(1) ? this.remove(t) : t.isOperation(2) && t.target.isFile && this.move(t);
    }
    handleActiveEditorChange(t, e) {
        this.handleActiveEditorChangeInHistory(e), this.handleActiveEditorChangeInNavigationStacks(t, e);
    }
    handleActiveEditorSelectionChangeEvent(t, e, n) {
        this.handleActiveEditorSelectionChangeInNavigationStacks(t, e, n);
    }
    move(t) {
        this.moveInHistory(t), this.moveInEditorNavigationStacks(t);
    }
    remove(t) {
        this.removeFromHistory(t), this.removeFromEditorNavigationStacks(t), this.removeFromRecentlyClosedEditors(t), this.removeFromRecentlyOpened(t);
    }
    removeFromRecentlyOpened(t) {
        let e;
        Ik(t) ? e = Wm.getOriginalUri(t) : t instanceof Eet || (e = t.resource), e && this.workspacesService.removeRecentlyOpened([
            e
        ]);
    }
    clear() {
        this.clearRecentlyOpened(), this.clearEditorNavigationStacks(), this.recentlyClosedEditors = [], this.updateContextKeys();
    }
    updateContextKeys() {
        this.contextKeyService.bufferChangeEvents(()=>{
            const t = this.getStack();
            this.canNavigateBackContextKey.set(t.canGoBack(0)), this.canNavigateForwardContextKey.set(t.canGoForward(0)), this.canNavigateBackInNavigationsContextKey.set(t.canGoBack(2)), this.canNavigateForwardInNavigationsContextKey.set(t.canGoForward(2)), this.canNavigateToLastNavigationLocationContextKey.set(t.canGoLast(2)), this.canNavigateBackInEditsContextKey.set(t.canGoBack(1)), this.canNavigateForwardInEditsContextKey.set(t.canGoForward(1)), this.canNavigateToLastEditLocationContextKey.set(t.canGoLast(1)), this.canReopenClosedEditorContextKey.set(this.recentlyClosedEditors.length > 0);
        });
    }
    registerEditorNavigationScopeChangeListener() {
        const t = ()=>{
            this.disposeEditorNavigationStacks();
            const e = this.configurationService.getValue(Vie.NAVIGATION_SCOPE_SETTING);
            e === "editorGroup" ? this.editorNavigationScope = 1 : e === "editor" ? this.editorNavigationScope = 2 : this.editorNavigationScope = 0;
        };
        this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            e.affectsConfiguration(Vie.NAVIGATION_SCOPE_SETTING) && t();
        })), t();
    }
    getStack(t = this.editorGroupService.activeGroup, e = t.activeEditor) {
        switch(this.editorNavigationScope){
            case 2:
                {
                    if (!e) return new nUf;
                    let n = this.editorScopedNavigationStacks.get(t.id);
                    n || (n = new Map, this.editorScopedNavigationStacks.set(t.id, n));
                    let i = n.get(e)?.stack;
                    if (!i) {
                        const r = new Nt;
                        i = r.add(this.instantiationService.createInstance(aZt, 2)), r.add(i.onDidChange(()=>this._onDidChangeEditorNavigationStack.fire())), n.set(e, {
                            stack: i,
                            disposable: r
                        });
                    }
                    return i;
                }
            case 1:
                {
                    let n = this.editorGroupScopedNavigationStacks.get(t.id)?.stack;
                    if (!n) {
                        const i = new Nt;
                        n = i.add(this.instantiationService.createInstance(aZt, 1)), i.add(n.onDidChange(()=>this._onDidChangeEditorNavigationStack.fire())), this.editorGroupScopedNavigationStacks.set(t.id, {
                            stack: n,
                            disposable: i
                        });
                    }
                    return n;
                }
            case 0:
                return this.defaultScopedEditorNavigationStack || (this.defaultScopedEditorNavigationStack = this._register(this.instantiationService.createInstance(aZt, 0)), this._register(this.defaultScopedEditorNavigationStack.onDidChange(()=>this._onDidChangeEditorNavigationStack.fire()))), this.defaultScopedEditorNavigationStack;
        }
    }
    goForward(t) {
        return this.getStack().goForward(t);
    }
    goBack(t) {
        return this.getStack().goBack(t);
    }
    goPrevious(t) {
        return this.getStack().goPrevious(t);
    }
    goLast(t) {
        return this.getStack().goLast(t);
    }
    handleActiveEditorChangeInNavigationStacks(t, e) {
        this.getStack(t, e?.input).handleActiveEditorChange(e);
    }
    handleActiveEditorSelectionChangeInNavigationStacks(t, e, n) {
        this.getStack(t, e.input).handleActiveEditorSelectionChange(e, n);
    }
    handleEditorCloseEventInHistory(t) {
        const e = this.editorScopedNavigationStacks.get(t.groupId);
        if (e) {
            const n = e.get(t.editor);
            n && (n.disposable.dispose(), e.delete(t.editor)), e.size === 0 && this.editorScopedNavigationStacks.delete(t.groupId);
        }
    }
    handleEditorGroupRemoveInNavigationStacks(t) {
        this.defaultScopedEditorNavigationStack?.remove(t.id);
        const e = this.editorGroupScopedNavigationStacks.get(t.id);
        e && (e.disposable.dispose(), this.editorGroupScopedNavigationStacks.delete(t.id));
    }
    clearEditorNavigationStacks() {
        this.withEachEditorNavigationStack((t)=>t.clear());
    }
    removeFromEditorNavigationStacks(t) {
        this.withEachEditorNavigationStack((e)=>e.remove(t));
    }
    moveInEditorNavigationStacks(t) {
        this.withEachEditorNavigationStack((e)=>e.move(t));
    }
    withEachEditorNavigationStack(t) {
        this.defaultScopedEditorNavigationStack && t(this.defaultScopedEditorNavigationStack);
        for (const [, e] of this.editorGroupScopedNavigationStacks)t(e.stack);
        for (const [, e] of this.editorScopedNavigationStacks)for (const [, n] of e)t(n.stack);
    }
    disposeEditorNavigationStacks() {
        this.defaultScopedEditorNavigationStack?.dispose(), this.defaultScopedEditorNavigationStack = void 0;
        for (const [, t] of this.editorGroupScopedNavigationStacks)t.disposable.dispose();
        this.editorGroupScopedNavigationStacks.clear();
        for (const [, t] of this.editorScopedNavigationStacks)for (const [, e] of t)e.disposable.dispose();
        this.editorScopedNavigationStacks.clear();
    }
    openNextRecentlyUsedEditor(t) {
        const [e, n] = this.ensureRecentlyUsedStack((i)=>i - 1, t);
        return this.doNavigateInRecentlyUsedEditorsStack(e[n], t);
    }
    openPreviouslyUsedEditor(t) {
        const [e, n] = this.ensureRecentlyUsedStack((i)=>i + 1, t);
        return this.doNavigateInRecentlyUsedEditorsStack(e[n], t);
    }
    async doNavigateInRecentlyUsedEditorsStack(t, e) {
        if (t) {
            const n = typeof e != "number" || !this.editorGroupService.getGroup(e);
            n ? this.navigatingInRecentlyUsedEditorsStack = !0 : this.navigatingInRecentlyUsedEditorsInGroupStack = !0;
            const i = this.editorGroupService.getGroup(t.groupId) ?? this.editorGroupService.activeGroup;
            try {
                await i.openEditor(t.editor);
            } finally{
                n ? this.navigatingInRecentlyUsedEditorsStack = !1 : this.navigatingInRecentlyUsedEditorsInGroupStack = !1;
            }
        }
    }
    ensureRecentlyUsedStack(t, e) {
        let n, i;
        const r = typeof e == "number" ? this.editorGroupService.getGroup(e) : void 0;
        r ? (n = this.recentlyUsedEditorsInGroupStack || r.getEditors(0).map((o)=>({
                groupId: r.id,
                editor: o
            })), i = this.recentlyUsedEditorsInGroupStackIndex) : (n = this.recentlyUsedEditorsStack || this.editorService.getEditors(0), i = this.recentlyUsedEditorsStackIndex);
        let s = t(i);
        return s < 0 ? s = 0 : s > n.length - 1 && (s = n.length - 1), r ? (this.recentlyUsedEditorsInGroupStack = n, this.recentlyUsedEditorsInGroupStackIndex = s) : (this.recentlyUsedEditorsStack = n, this.recentlyUsedEditorsStackIndex = s), [
            n,
            s
        ];
    }
    handleEditorEventInRecentEditorsStack() {
        this.navigatingInRecentlyUsedEditorsStack || (this.recentlyUsedEditorsStack = void 0, this.recentlyUsedEditorsStackIndex = 0), this.navigatingInRecentlyUsedEditorsInGroupStack || (this.recentlyUsedEditorsInGroupStack = void 0, this.recentlyUsedEditorsInGroupStackIndex = 0);
    }
    handleEditorCloseEventInReopen(t) {
        if (this.ignoreEditorCloseEvent) return;
        const { editor: e, context: n } = t;
        if (n === pne.REPLACE || n === pne.MOVE) return;
        const i = e.toUntyped();
        if (!i) return;
        const r = [], s = Wm.getOriginalUri(e, {
            supportSideBySide: Nm.BOTH
        });
        rt.isUri(s) ? r.push(s) : s && r.push(...Mm([
            s.primary,
            s.secondary
        ])), this.removeFromRecentlyClosedEditors(e), this.recentlyClosedEditors.push({
            editorId: e.editorId,
            editor: i,
            resource: Wm.getOriginalUri(e),
            associatedResources: r,
            index: t.index,
            sticky: t.sticky
        }), this.recentlyClosedEditors.length > Vie.MAX_RECENTLY_CLOSED_EDITORS && this.recentlyClosedEditors.shift(), this.canReopenClosedEditorContextKey.set(!0);
    }
    async reopenLastClosedEditor() {
        const t = this.recentlyClosedEditors.pop();
        let e;
        return t && (e = this.doReopenLastClosedEditor(t)), this.canReopenClosedEditorContextKey.set(this.recentlyClosedEditors.length > 0), e;
    }
    async doReopenLastClosedEditor(t) {
        const e = {
            pinned: !0,
            sticky: t.sticky,
            index: t.index,
            ignoreError: !0
        };
        (t.sticky && !this.editorGroupService.activeGroup.isSticky(t.index) || !t.sticky && this.editorGroupService.activeGroup.isSticky(t.index)) && (e.index = void 0);
        let n;
        if (!this.editorGroupService.activeGroup.contains(t.editor)) {
            this.ignoreEditorCloseEvent = !0;
            try {
                n = await this.editorService.openEditor({
                    ...t.editor,
                    options: {
                        ...t.editor.options,
                        ...e
                    }
                });
            } finally{
                this.ignoreEditorCloseEvent = !1;
            }
        }
        n || (F0o(this.recentlyClosedEditors, t), this.reopenLastClosedEditor());
    }
    removeFromRecentlyClosedEditors(t) {
        this.recentlyClosedEditors = this.recentlyClosedEditors.filter((e)=>Ik(t) && e.editorId !== t.editorId ? !0 : !(e.resource && this.editorHelper.matchesFile(e.resource, t) || e.associatedResources.some((n)=>this.editorHelper.matchesFile(n, t)))), this.canReopenClosedEditorContextKey.set(this.recentlyClosedEditors.length > 0);
    }
    handleActiveEditorChangeInHistory(t) {
        const e = t?.input;
        !e || e.isDisposed() || !this.includeInHistory(e) || this.addToHistory(e);
    }
    addToHistory(t) {
        this.removeFromHistory(t), this.doAddToHistory(t);
    }
    doAddToHistory(t, e = !0) {
        this.ensureHistoryLoaded(this.history);
        const n = this.editorHelper.preferResourceEditorInput(t);
        n && (e ? this.history.unshift(n) : this.history.push(n), this.history.length > Vie.MAX_HISTORY_ITEMS && this.editorHelper.clearOnEditorDispose(this.history.pop(), this.editorHistoryListeners), Ik(t) && this.editorHelper.onEditorDispose(t, ()=>this.updateHistoryOnEditorDispose(n), this.editorHistoryListeners));
    }
    updateHistoryOnEditorDispose(t) {
        if (Ik(t)) if (!cXd(t)) this.removeFromHistory(t);
        else {
            const e = [], n = t.primary.matches(t.secondary) ? [
                t.primary
            ] : [
                t.primary,
                t.secondary
            ];
            for (const i of n){
                const r = this.editorHelper.preferResourceEditorInput(i);
                PY(r) && this.includeInHistory(r) && e.push(r);
            }
            this.replaceInHistory(t, ...e);
        }
        else this.includeInHistory(t) || this.removeFromHistory(t);
    }
    includeInHistory(t) {
        return Ik(t) ? !(t instanceof Uk) : !this.resourceExcludeMatcher.value.matches(t.resource);
    }
    removeExcludedFromHistory() {
        this.ensureHistoryLoaded(this.history), this.history = this.history.filter((t)=>{
            const e = this.includeInHistory(t);
            return e || this.editorHelper.clearOnEditorDispose(t, this.editorHistoryListeners), e;
        });
    }
    moveInHistory(t) {
        t.isOperation(2) && this.removeFromHistory(t) && this.addToHistory({
            resource: t.target.resource
        });
    }
    removeFromHistory(t) {
        let e = !1;
        return this.ensureHistoryLoaded(this.history), this.history = this.history.filter((n)=>{
            const i = this.editorHelper.matchesEditor(t, n);
            return i && (this.editorHelper.clearOnEditorDispose(t, this.editorHistoryListeners), e = !0), !i;
        }), e;
    }
    replaceInHistory(t, ...e) {
        this.ensureHistoryLoaded(this.history);
        let n = !1;
        const i = [];
        for (const r of this.history)this.editorHelper.matchesEditor(t, r) ? (this.editorHelper.clearOnEditorDispose(t, this.editorHistoryListeners), n || (i.push(...e), n = !0)) : e.some((s)=>this.editorHelper.matchesEditor(s, r)) || i.push(r);
        n || i.push(...e), this.history = i;
    }
    clearRecentlyOpened() {
        this.history = [], this.editorHistoryListeners.clearAndDisposeAll();
    }
    getHistory() {
        return this.ensureHistoryLoaded(this.history), this.history;
    }
    ensureHistoryLoaded(t) {
        if (!this.history) {
            this.history = [];
            for (const e of this.loadHistoryFromStorage())this.includeInHistory(e) && this.doAddToHistory(e, !1);
            this.editorGroupService.isReady ? this.loadHistory() : (async ()=>(await this.editorGroupService.whenReady, this.loadHistory()))();
        }
    }
    loadHistory() {
        const t = [
            ...this.editorService.getEditors(0)
        ].reverse(), e = new Set;
        for (const { editor: n } of t)if (this.includeInHistory(n)) {
            if (n.resource) {
                const i = `${n.resource.toString()}/${n.editorId}`;
                if (e.has(i)) continue;
                e.add(i);
            }
            this.addToHistory(n);
        }
    }
    loadHistoryFromStorage() {
        const t = [], e = this.storageService.get(Vie.HISTORY_STORAGE_KEY, 1);
        if (e) try {
            const n = JSON.parse(e);
            for (const i of n)if (!(!i.editor || !i.editor.resource)) try {
                t.push({
                    ...i.editor,
                    resource: typeof i.editor.resource == "string" ? rt.parse(i.editor.resource) : rt.from(i.editor.resource)
                });
            } catch (r) {
                xr(r);
            }
        } catch (n) {
            xr(n);
        }
        return t;
    }
    saveState() {
        if (!this.history) return;
        const t = [];
        for (const e of this.history)Ik(e) || !PY(e) || t.push({
            editor: {
                ...e,
                resource: e.resource.toString()
            }
        });
        this.storageService.store(Vie.HISTORY_STORAGE_KEY, JSON.stringify(t), 1, 1);
    }
    getLastActiveWorkspaceRoot(t, e) {
        const n = this.contextService.getWorkspace().folders;
        if (n.length !== 0) {
            if (n.length === 1) {
                const i = n[0].uri;
                return (!t || i.scheme === t) && (!e || i.authority === e) ? i : void 0;
            }
            for (const i of this.getHistory()){
                if (Ik(i) || t && i.resource.scheme !== t || e && i.resource.authority !== e) continue;
                const r = this.contextService.getWorkspaceFolder(i.resource);
                if (r) return r.uri;
            }
            for (const i of n){
                const r = i.uri;
                if ((!t || r.scheme === t) && (!e || r.authority === e)) return r;
            }
        }
    }
    getLastActiveFile(t, e) {
        for (const n of this.getHistory()){
            let i;
            if (Ik(n) ? i = Wm.getOriginalUri(n, {
                filterByScheme: t
            }) : i = n.resource, i && i.scheme === t && (!e || i.authority === e)) return i;
        }
    }
    dispose() {
        super.dispose();
        for (const [, t] of this.editorGroupScopedNavigationStacks)t.disposable.dispose();
        for (const [, t] of this.editorScopedNavigationStacks)for (const [, e] of t)e.disposable.dispose();
    }
}, Vie.MOUSE_NAVIGATION_SETTING = "workbench.editor.mouseBackForwardToNavigate", Vie.NAVIGATION_SCOPE_SETTING = "workbench.editor.navigationScope", Vie.MAX_RECENTLY_CLOSED_EDITORS = 20, Vie.MAX_HISTORY_ITEMS = 200, Vie.HISTORY_STORAGE_KEY = "history.entries", Vie = Re([
    F(0, gr),
    F(1, _a),
    F(2, yr),
    F(3, ki),
    F(4, yi),
    F(5, is),
    F(6, lN),
    F(7, dn),
    F(8, Id),
    F(9, Rr),
    F(10, Li)
], Vie), bn(sI, Vie, 0), wBl = class {
    constructor(t, e, n){
        this.editorIdentifier = t, this.selection = e, this.reason = n;
    }
    justifiesNewNavigationEntry(t) {
        if (this.editorIdentifier.groupId !== t.editorIdentifier.groupId || !this.editorIdentifier.editor.matches(t.editorIdentifier.editor) || !this.selection || !t.selection) return !0;
        const e = this.selection.compare(t.selection);
        return e === 2 && (t.reason === 4 || t.reason === 5) ? !0 : e === 3;
    }
}, aZt = class extends st {
    constructor(t, e){
        super(), this.scope = t, this.instantiationService = e, this.selectionsStack = this._register(this.instantiationService.createInstance(xKe, 0, this.scope)), this.editsStack = this._register(this.instantiationService.createInstance(xKe, 1, this.scope)), this.navigationsStack = this._register(this.instantiationService.createInstance(xKe, 2, this.scope)), this.stacks = [
            this.selectionsStack,
            this.editsStack,
            this.navigationsStack
        ], this.onDidChange = en.any(this.selectionsStack.onDidChange, this.editsStack.onDidChange, this.navigationsStack.onDidChange);
    }
    canGoForward(t) {
        return this.getStack(t).canGoForward();
    }
    goForward(t) {
        return this.getStack(t).goForward();
    }
    canGoBack(t) {
        return this.getStack(t).canGoBack();
    }
    goBack(t) {
        return this.getStack(t).goBack();
    }
    goPrevious(t) {
        return this.getStack(t).goPrevious();
    }
    canGoLast(t) {
        return this.getStack(t).canGoLast();
    }
    goLast(t) {
        return this.getStack(t).goLast();
    }
    setNavigateHandler(t) {
        for (const e of this.stacks)e.setNavigateHandler(t);
    }
    getStack(t = 0) {
        switch(t){
            case 0:
                return this.selectionsStack;
            case 1:
                return this.editsStack;
            case 2:
                return this.navigationsStack;
        }
    }
    getRecentLocations(t, e) {
        return this.getStack(e).getRecentLocations(t);
    }
    getDebugState(t) {
        return this.getStack(t).getDebugState();
    }
    handleActiveEditorChange(t) {
        this.selectionsStack.notifyNavigation(t);
    }
    handleActiveEditorSelectionChange(t, e) {
        const n = this.selectionsStack.current;
        this.selectionsStack.notifyNavigation(t, e), e.reason === 3 ? this.editsStack.notifyNavigation(t, e) : (e.reason === 4 || e.reason === 5) && !this.selectionsStack.isNavigating() && (e.reason === 5 && !this.navigationsStack.isNavigating() && n && this.navigationsStack.addOrReplace(n.groupId, n.editor, n.selection), this.navigationsStack.notifyNavigation(t, e));
    }
    clear() {
        for (const t of this.stacks)t.clear();
    }
    remove(t) {
        for (const e of this.stacks)e.remove(t);
    }
    retain(t) {
        for (const e of this.stacks)e.retain(t);
    }
    move(t) {
        for (const e of this.stacks)e.move(t);
    }
}, aZt = Re([
    F(1, dn)
], aZt), nUf = class {
    constructor(){
        this.onDidChange = en.None;
    }
    canGoForward() {
        return !1;
    }
    async goForward() {}
    canGoBack() {
        return !1;
    }
    async goBack() {}
    async goPrevious() {}
    canGoLast() {
        return !1;
    }
    async goLast() {}
    handleActiveEditorChange() {}
    handleActiveEditorSelectionChange() {}
    getRecentLocations(t, e) {
        return [];
    }
    clear() {}
    remove() {}
    move() {}
    dispose() {}
}, xKe = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this.filter = t, this.scope = e, this.editorService = i, this.editorGroupService = r, this.logService = s, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.mapEditorToDisposable = this._register(new da), this.mapGroupToDisposable = this._register(new da), this.stack = [], this.index = -1, this.previousIndex = -1, this.navigating = !1, this.currentSelectionState = void 0, this.editorHelper = n.createInstance(RNi), this.registerListeners();
    }
    get current() {
        return this.stack[this.index];
    }
    getRecentLocations(t) {
        const e = [];
        if (this.index === -1) return e;
        const n = (s)=>{
            const o = this.stack[s].editor.resource, a = this.stack[s].selection;
            o !== void 0 && a !== void 0 && a instanceof UEt && e.push({
                uri: o,
                location: a.getSelection()
            });
        };
        let i = this.index + 1, r = this.index - 1;
        for(; i < this.stack.length || r >= 0;){
            if (i < this.stack.length) {
                if (e.length >= t) break;
                n(i), i++;
            }
            if (r >= 0) {
                if (e.length >= t) break;
                n(r), r--;
            }
        }
        return e;
    }
    set current(t) {
        t && (this.stack[this.index] = t);
    }
    setNavigateHandler(t) {
        this._navigateHandler = t;
    }
    registerListeners() {
        this._register(this.onDidChange(()=>this.traceStack())), this._register(this.logService.onDidChangeLogLevel(()=>this.traceStack())), this._register(this.editorGroupService.onDidRemoveGroup((t)=>{
            this.mapGroupToDisposable.deleteAndDispose(t.id);
        }));
    }
    traceStack() {
        if (this.logService.getLevel() !== sg.Trace) return;
        const t = [];
        for (const e of this.stack)typeof e.selection?.log == "function" ? t.push(`- group: ${e.groupId}, editor: ${e.editor.resource?.toString()}, selection: ${e.selection.log()}`) : t.push(`- group: ${e.groupId}, editor: ${e.editor.resource?.toString()}, selection: <none>`);
        t.length === 0 ? this.trace(`index: ${this.index}, navigating: ${this.isNavigating()}: <empty>`) : this.trace(`index: ${this.index}, navigating: ${this.isNavigating()}
${t.join(`
`)}
			`);
    }
    trace(t, e = null, n) {
        if (this.logService.getLevel() !== sg.Trace) return;
        let i;
        switch(this.filter){
            case 0:
                i = "global";
                break;
            case 1:
                i = "edits";
                break;
            case 2:
                i = "navigation";
                break;
        }
        let r;
        switch(this.scope){
            case 0:
                r = "default";
                break;
            case 1:
                r = "editorGroup";
                break;
            case 2:
                r = "editor";
                break;
        }
        e !== null ? this.logService.trace(`[History stack ${i}-${r}]: ${t} (editor: ${e?.resource?.toString()}, event: ${this.traceEvent(n)})`) : this.logService.trace(`[History stack ${i}-${r}]: ${t}`);
    }
    traceEvent(t) {
        if (!t) return "<none>";
        switch(t.reason){
            case 3:
                return "edit";
            case 4:
                return "navigation";
            case 5:
                return "jump";
            case 1:
                return "programmatic";
            case 2:
                return "user";
        }
    }
    registerGroupListeners(t) {
        if (!this.mapGroupToDisposable.has(t)) {
            const e = this.editorGroupService.getGroup(t);
            e && this.mapGroupToDisposable.set(t, e.onWillMoveEditor((n)=>this.onWillMoveEditor(n)));
        }
    }
    onWillMoveEditor(t) {
        if (this.trace("onWillMoveEditor()", t.editor), this.scope !== 1) for (const e of this.stack)e.groupId === t.groupId && this.editorHelper.matchesEditor(t.editor, e.editor) && (e.groupId = t.target);
    }
    notifyNavigation(t, e) {
        this.trace("notifyNavigation()", t?.input, e);
        const n = cai(t), i = t?.input && !t.input.isDisposed();
        this.navigating ? (this.trace("notifyNavigation() ignoring (navigating)", t?.input, e), n && i ? (this.trace("notifyNavigation() updating current selection state", t?.input, e), this.currentSelectionState = new wBl({
            groupId: t.group.id,
            editor: t.input
        }, t.getSelection(), e?.reason)) : (this.trace("notifyNavigation() dropping current selection state", t?.input, e), this.currentSelectionState = void 0)) : (this.trace("notifyNavigation() not ignoring", t?.input, e), n && i ? this.onSelectionAwareEditorNavigation(t.group.id, t.input, t.getSelection(), e) : (this.currentSelectionState = void 0, i && this.onNonSelectionAwareEditorNavigation(t.group.id, t.input)));
    }
    onSelectionAwareEditorNavigation(t, e, n, i) {
        if (this.current?.groupId === t && !n && this.editorHelper.matchesEditor(this.current.editor, e)) return;
        this.trace("onSelectionAwareEditorNavigation()", e, i);
        const r = new wBl({
            groupId: t,
            editor: e
        }, n, i?.reason);
        !this.currentSelectionState || this.currentSelectionState.justifiesNewNavigationEntry(r) ? this.doAdd(t, e, r.selection) : this.doReplace(t, e, r.selection), this.currentSelectionState = r;
    }
    onNonSelectionAwareEditorNavigation(t, e) {
        this.current?.groupId === t && this.editorHelper.matchesEditor(this.current.editor, e) || (this.trace("onNonSelectionAwareEditorNavigation()", e), this.doAdd(t, e));
    }
    doAdd(t, e, n) {
        this.navigating || this.addOrReplace(t, e, n);
    }
    doReplace(t, e, n) {
        this.navigating || this.addOrReplace(t, e, n, !0);
    }
    addOrReplace(t, e, n, i) {
        this.registerGroupListeners(t);
        let r = !1;
        this.current && (i || this.shouldReplaceStackEntry(this.current, {
            groupId: t,
            editor: e,
            selection: n
        })) && (r = !0);
        const s = this.editorHelper.preferResourceEditorInput(e);
        if (!s) return;
        r ? this.trace("replace()", s) : this.trace("add()", s);
        const o = {
            groupId: t,
            editor: s,
            selection: n
        }, a = [];
        if (r) this.current && a.push(this.current), this.current = o;
        else {
            if (this.stack.length > this.index + 1) {
                for(let u = this.index + 1; u < this.stack.length; u++)a.push(this.stack[u]);
                this.stack = this.stack.slice(0, this.index + 1);
            }
            this.stack.splice(this.index + 1, 0, o);
            const c = !0 ? xKe.MAX_LONG_HISTORY_STACK_SIZE : xKe.MAX_STACK_SIZE;
            this.stack.length > c ? (a.push(this.stack.shift()), this.previousIndex >= 0 && this.previousIndex--) : this.setIndex(this.index + 1, !0);
        }
        for (const l of a)this.editorHelper.clearOnEditorDispose(l.editor, this.mapEditorToDisposable);
        Ik(s) && this.editorHelper.onEditorDispose(s, ()=>this.remove(s), this.mapEditorToDisposable), this._onDidChange.fire();
    }
    shouldReplaceStackEntry(t, e) {
        return t.groupId !== e.groupId || !this.editorHelper.matchesEditor(t.editor, e.editor) ? !1 : t.selection ? e.selection ? t.selection.compare(e.selection) === 1 : !1 : !0;
    }
    move(t) {
        if (t.isOperation(2)) for (const e of this.stack)this.editorHelper.matchesEditor(t, e.editor) && (e.editor = {
            resource: t.target.resource
        });
    }
    remove(t) {
        const e = this.stack.length;
        this.stack = this.stack.filter((n)=>{
            const i = typeof t == "number" ? n.groupId === t : this.editorHelper.matchesEditor(t, n.editor);
            return i && this.editorHelper.clearOnEditorDispose(n.editor, this.mapEditorToDisposable), !i;
        }), e !== this.stack.length && (this.flatten(), this.index = this.stack.length - 1, this.previousIndex = -1, typeof t == "number" && this.mapGroupToDisposable.deleteAndDispose(t), this._onDidChange.fire());
    }
    retain(t) {
        const e = [];
        let n = -1;
        for(let i = 0; i < this.stack.length; i++){
            const r = this.stack[i];
            t(r) ? (e.length === 0 || !this.shouldReplaceStackEntry(r, e[e.length - 1])) && e.push(r) : this.editorHelper.clearOnEditorDispose(r.editor, this.mapEditorToDisposable), i <= this.index && (n = e.length - 1);
        }
        e.length !== this.stack.length && (this.stack = e, this.index = e.length === 0 ? -1 : Math.max(n, 0), this.previousIndex = -1, this._onDidChange.fire());
    }
    flatten() {
        const t = [];
        let e;
        for (const n of this.stack)e && this.shouldReplaceStackEntry(n, e) || (e = n, t.push(n));
        this.stack = t;
    }
    clear() {
        this.index = -1, this.previousIndex = -1, this.stack.splice(0), this.mapEditorToDisposable.clearAndDisposeAll(), this.mapGroupToDisposable.clearAndDisposeAll();
    }
    dispose() {
        this.clear(), super.dispose();
    }
    canGoForward() {
        return this.stack.length > this.index + 1;
    }
    async goForward() {
        if (!await this.maybeGoCurrent() && this.canGoForward()) return this.setIndex(this.index + 1), this.navigate();
    }
    canGoBack() {
        return this.index > 0;
    }
    async goBack() {
        if (!await this.maybeGoCurrent() && this.canGoBack()) return this.setIndex(this.index - 1), this.navigate();
    }
    async goPrevious() {
        if (!await this.maybeGoCurrent()) return this.previousIndex === -1 ? this.goBack() : (this.setIndex(this.previousIndex), this.navigate());
    }
    canGoLast() {
        return this.stack.length > 0;
    }
    async goLast() {
        if (this.canGoLast()) return this.setIndex(this.stack.length - 1), this.navigate();
    }
    async maybeGoCurrent() {
        return this.filter === 0 || this.isCurrentSelectionActive() ? !1 : (await this.navigate(), !0);
    }
    isCurrentSelectionActive() {
        if (!this.current?.selection) return !1;
        const t = this.editorService.activeEditorPane;
        if (!cai(t) || t.group.id !== this.current.groupId || !t.input || !this.editorHelper.matchesEditor(t.input, this.current.editor)) return !1;
        const e = t.getSelection();
        return e ? e.compare(this.current.selection) === 1 : !1;
    }
    setIndex(t, e) {
        this.previousIndex = this.index, this.index = t, e || this._onDidChange.fire();
    }
    async navigate() {
        this.navigating = !0;
        try {
            this.current && await this.doNavigate(this.current);
        } finally{
            this.navigating = !1;
        }
    }
    doNavigate(t) {
        if (this._navigateHandler) return this._navigateHandler(t);
        let e = Object.create(null);
        return t.selection && (e = t.selection.restore(e)), Ik(t.editor) ? this.editorService.openEditor(t.editor, e, t.groupId) : this.editorService.openEditor({
            ...t.editor,
            options: {
                ...t.editor.options,
                ...e
            }
        }, t.groupId);
    }
    isNavigating() {
        return this.navigating;
    }
    getDebugState() {
        return {
            entries: this.stack.map((t)=>({
                    uri: t.editor.resource?.toString(),
                    line: t.selection instanceof UEt ? t.selection.getSelection().startLineNumber : void 0
                })),
            index: this.index
        };
    }
}, xKe.MAX_STACK_SIZE = 50, xKe.MAX_LONG_HISTORY_STACK_SIZE = 100, xKe = Re([
    F(2, dn),
    F(3, gr),
    F(4, _a),
    F(5, Li)
], xKe), RNi = class {
    constructor(t, e, n, i){
        this.uriIdentityService = t, this.lifecycleService = e, this.fileService = n, this.pathService = i;
    }
    preferResourceEditorInput(t) {
        const e = Wm.getOriginalUri(t);
        if (e?.scheme === Ot.file || e?.scheme === Ot.vscodeRemote || e?.scheme === Ot.vscodeUserData || e?.scheme === Ot.composer || e?.scheme === this.pathService.defaultUriScheme) {
            if (Ik(t)) {
                const i = t.toUntyped();
                if (PY(i)) return i;
            }
            return t;
        } else return Ik(t) ? t : void 0;
    }
    matchesEditor(t, e) {
        return t instanceof Eet || t instanceof Tet ? Ik(e) ? !1 : t instanceof Eet ? t.contains(e.resource, 2) : this.matchesFile(e.resource, t) : Ik(t) ? Ik(e) ? t.matches(e) : this.matchesFile(e.resource, t) : Ik(e) ? this.matchesFile(t.resource, e) : t && e && this.uriIdentityService.extUri.isEqual(t.resource, e.resource);
    }
    matchesFile(t, e) {
        if (e instanceof Eet) return e.contains(t, 2);
        if (e instanceof Tet) return this.uriIdentityService.extUri.isEqualOrParent(t, e.resource);
        if (Ik(e)) {
            const n = e.resource;
            return !n || this.lifecycleService.phase >= 3 && n.scheme !== Ot.composer && !this.fileService.hasProvider(n) ? !1 : this.uriIdentityService.extUri.isEqual(n, t);
        }
        return this.uriIdentityService.extUri.isEqual(e?.resource, t);
    }
    matchesEditorIdentifier(t, e) {
        return !e?.group || t.groupId !== e.group.id ? !1 : e.input ? t.editor.matches(e.input) : !1;
    }
    onEditorDispose(t, e, n) {
        const i = en.once(t.onWillDispose)(()=>{
            try {
                e();
            } finally{
                n.deleteAndLeak(t)?.dispose();
            }
        });
        let r = n.get(t);
        r || (r = new Nt, n.set(t, r)), r.add(i);
    }
    clearOnEditorDispose(t, e) {
        Ik(t) && e.deleteAndDispose(t);
    }
}, RNi = Re([
    F(0, nh),
    F(1, Fp),
    F(2, is),
    F(3, Rd)
], RNi);

}
