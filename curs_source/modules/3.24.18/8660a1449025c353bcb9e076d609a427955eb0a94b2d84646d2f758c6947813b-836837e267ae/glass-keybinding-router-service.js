import { kb } from "./Aeg.js";
import { Di, Ei, Gt, Hg, Nt, Pn, Qe, Vn, _r, _ve, en, st, tt, xr } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Acw, Dcw, Ecw, Icw, Lcw, Mcw, Ncw, Ocw, Qys, Rbs, SEf, XEf, YEf, c_s, iIf, kEf, tIf, xcw } from "./Ycg.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { g3l, jm } from "./command-ids.js";
import { H4, xki } from "./composerContextKeys.js";
import { rW, x_ } from "./contextkeys.js";
import { DA, vf } from "./contextkeys_2.js";
import { wS } from "./displayHelpers.js";
import { Hn, Pr, hW, ooe } from "./dom_2.js";
import { Oh, ZS } from "./draftIds.js";
import { cg, si } from "./editorContextKeys.js";
import { nri } from "./editorHistoryOwner.js";
import { Rn } from "./extensions.js";
import { Vc, yp } from "./glass-command-service.js";
import { aw, vN } from "./glass-context-key-service.js";
import { hC, ow } from "./glass-environment-service.js";
import { Tcw } from "./glass-keybinding-router-utils.js";
import { Mme, NTe } from "./glass-keybinding-service.js";
import { A2, ml, oDe } from "./glassAction.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { _Nl } from "./glassAgentWorkspaceRouting.js";
import { Gv, Mys, Nys, RDi, Rys, cNl, kct, lNl, qDn, zDn } from "./glassContextKeys.js";
import { vxt } from "./glassFocusedConversation.js";
import { yNl } from "./history-owner.js";
import { It } from "./instantiation.js";
import { Q3l } from "./keybinding-help-step-utils.js";
import { Qke } from "./keybindings.js";
import { X5d, xT } from "./keybindingsRegistry.js";
import { nT, rv } from "./keyboardEvent.js";
import { Z3l, yEf } from "./promptInputFocusSource.js";
import { QI, ns } from "./terminalContextKey.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { cm } from "./workspace-helpers.js";
import { $u, h6d, li, p6d, rl, tgn, yUo } from "./ze.js";
var rIf, Cct, GT, t3n, Jys;
export { Cct, GT, Jys, rIf, t3n };
var __wakaru_R2_initialized = false;
export function R2() {
if (__wakaru_R2_initialized) return;
__wakaru_R2_initialized = true;
"use strict";
E(), hC(), Hn(), nT(), Bs(), Ei(), Gt(), Qke(), Qe(), Di(), nri(), cg(), x_(), Rn(), It(), xT(), vf(), H4(), vxt(), yEf(), QI(), wl(), wS(), Hv(), Q3l(), A2(), Gv(), jm(), _Nl(), yNl(), ZS(), cm(), yp(), aw(), Tcw(), NTe(), rIf = '[role="dialog"], [role="alertdialog"], [role="menu"], [aria-modal="true"], dialog[open]', Cct = {
    NonEditorEditable: 1,
    EditorFindWidgetFocused: 2,
    TranscriptFocused: 4,
    PromptInputEmpty: 8
}, GT = Il("glassKeybindingRouterService"), t3n = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._environmentService = t, this._glassActiveAgentService = e, this._agentRepositoryService = n, this._keybindingService = i, this._commandService = r, this._contextKeyService = s, this._consumers = new Map, this._onDidExecuteKeybinding = this._register(new tt), this.onDidExecuteKeybinding = this._onDidExecuteKeybinding.event, this._onDidChangeContextKeys = this._register(new tt), this.onDidChangeContextKeys = this._onDidChangeContextKeys.event, this._onDidReceiveUnclaimedEscape = this._register(new tt), this.onDidReceiveUnclaimedEscape = this._onDidReceiveUnclaimedEscape.event, this._unclaimedEscapeHandlers = [], this._dispatchContextOverrides = new Map, this._effectiveDispatchOverrides = new Map, this._emptyWorkspaceDispatchContextServices = new WeakMap, this._activeAgentEnvironmentSubscription = this._register(new Vn), this._unclaimedEscapeListener = this._register(new Vn), this._focusedPromptInputs = [], this._promptInputsWithCursorInList = new Set, this._emptyWorkspaceContextKeyService = this._contextKeyService.createOverlay([
            [
                DA.key,
                !0
            ],
            [
                RDi.key,
                !1
            ],
            [
                zDn.key,
                !0
            ]
        ]), this._environmentService.isGlass && (this._register(this._keybindingService.onDidDispatchKeybinding(({ commandId: o })=>{
            this.reportEventDispatch(o, "empty");
        })), this._register(this._glassActiveAgentService.onDidChangeActiveAgentId(()=>{
            const o = this._glassActiveAgentService.getActiveAgentId();
            o === void 0 ? YEf(this._agentRepositoryService) : o !== Oh && XEf({
                agentRepositoryService: this._agentRepositoryService,
                glassActiveAgentService: this._glassActiveAgentService
            }), this._syncActiveAgentContextOverrides();
        })), this._register(this._agentRepositoryService.onDidLoadAgent((o)=>{
            this._glassActiveAgentService.getActiveAgentId() === o && XEf({
                agentRepositoryService: this._agentRepositoryService,
                glassActiveAgentService: this._glassActiveAgentService
            }, o);
        })), this._register(this._agentRepositoryService.agents.onChange(()=>{
            this._syncActiveAgentContextOverrides();
        })), this._register(en.runAndSubscribe(hW, ({ window: o, disposables: a })=>{
            a.add(this._registerWindowKeydownListener(o)), a.add(this._registerWindowKeyupListener(o)), a.add(this._registerXtermFocusSyncListeners(o)), a.add(this._registerHistoryOwnerFocusListener(o));
        }, {
            window: $t,
            disposables: this._store
        })), this._syncGlobalXtermFocusInAnyDispatchOverride(), this._syncActiveAgentContextOverrides());
    }
    registerConsumer(t, e) {
        return this._consumers.set(t, e), Pn(()=>{
            this._consumers.get(t) === e && this._consumers.delete(t);
        });
    }
    reportEventDispatch(t, e) {
        this._onDidExecuteKeybinding.fire({
            eventName: t,
            workspaceKind: e
        });
    }
    setContext(t, e) {
        const n = this._dispatchContextOverrides.get(t);
        Object.is(n, e) || (this._dispatchContextOverrides.set(t, e), this._effectiveDispatchOverrides.clear(), this.reportContextKeyChange());
    }
    deleteContext(t) {
        this._dispatchContextOverrides.has(t) && (this._dispatchContextOverrides.delete(t), this._effectiveDispatchOverrides.clear(), this.reportContextKeyChange());
    }
    getContextOverride(t) {
        return this._dispatchContextOverrides.get(t);
    }
    reportContextKeyChange() {
        this._onDidChangeContextKeys.fire();
    }
    _syncActiveAgentContextOverrides() {
        const t = this._glassActiveAgentService.getActiveAgentId(), n = (t ? this._agentRepositoryService.getAgentHeader(t) : void 0)?.environment;
        n !== this._activeAgentEnvironmentSource && (this._activeAgentEnvironmentSource = n, this._activeAgentEnvironmentSubscription.value = n?.onChange(()=>{
            this._syncActiveAgentContextOverrides();
        }));
        const i = n?.value;
        this.setContext(Rys.key, kb(i)), this.setContext(qDn.key, i !== void 0 && c_s(i));
    }
    registerPromptInputFocusSource(t) {
        const e = Symbol("glassPromptInputFocusSource"), n = {
            isEmpty: t?.isEmpty
        };
        let i = !1, r = !1, s = !1;
        const o = ()=>{
            if (!i) {
                this._forgetFocusedPromptInput(n);
                return;
            }
            this._focusedPromptInputs.includes(n) || this._focusedPromptInputs.push(n), t?.getRootElement && yUo(t.getRootElement());
        }, a = ()=>{
            i && r ? this._promptInputsWithCursorInList.add(e) : this._promptInputsWithCursorInList.delete(e), this._promptInputsWithCursorInList.size > 0 ? this.setContext(Mys.key, !0) : this.deleteContext(Mys.key);
        };
        return {
            setFocused: (l)=>{
                s || i === l || (i = l, o(), tIf({
                    isFocused: this._hasFocusedPromptInput(),
                    setContext: (c, u)=>this.setContext(c, u),
                    deleteContext: (c)=>this.deleteContext(c)
                }), a());
            },
            setCursorInList: (l)=>{
                s || r === l || (r = l, a());
            },
            dispose: ()=>{
                s || (s = !0, r = !1, a(), i && (i = !1, this._forgetFocusedPromptInput(n), tIf({
                    isFocused: this._hasFocusedPromptInput(),
                    setContext: (l, c)=>this.setContext(l, c),
                    deleteContext: (l)=>this.deleteContext(l)
                })));
            }
        };
    }
    runLastFocusedPromptHistory(t) {
        const e = h6d(rl().document);
        return e ? p6d(e, t) : !1;
    }
    contextMatchesRules(t, e) {
        switch(t){
            case ml.EMPTY_WORKSPACE:
                return this._getEmptyWorkspaceDispatchContextService().contextMatchesRules(e);
            case ml.AGENT_WORKSPACE:
                {
                    const n = this._resolveActiveAgentWorkspaceId();
                    return n ? this._consumers.get(n)?.contextMatchesRules(e, this._getRootDispatchContextOverrides()) ?? !1 : !1;
                }
            default:
                {
                    const n = t;
                    throw new Error(`Unknown GlassCommandScope: ${n}`);
                }
        }
    }
    lookupKeybindingLabel(t) {
        const e = oDe.getCommand(t);
        if (e) {
            const n = this._labelsForCommandRules(e);
            if (n.length === 0) return;
            const i = this._keybindingService.lookupKeybinding(t), r = this._keybindingService.lookupDefaultKeybindingItems(t);
            let s;
            for(let o = r.length - 1; o >= 0; o--)if (r[o].resolvedKeybinding === i) {
                s = r[o];
                break;
            }
            return s && !s.isDefault ? s.resolvedKeybinding?.getLabel() ?? n[0] : n[0];
        }
        return kEf(this._keybindingService, t)[0]?.getLabel() ?? void 0;
    }
    getAvailableKeybindingLabels(t) {
        const e = oDe.getCommand(t);
        return e ? this._labelsForCommandRules(e) : [];
    }
    _labelsForCommandRules(t) {
        const e = t.glassKeybindingRules;
        if (!e?.length) return [];
        const n = [];
        for (const i of e)i.availableWhen !== void 0 && !this.contextMatchesRules(t.scope, i.availableWhen) || n.push(...this._labelsForPlatformBoundKeybinding(i));
        return n;
    }
    _labelsForPlatformBoundKeybinding(t) {
        const e = X5d(t);
        if (!e) return [];
        const n = [];
        if (e.primary && n.push(e.primary), Array.isArray(e.secondary)) for (const r of e.secondary)n.push(r);
        const i = [];
        for (const r of n){
            const s = tgn(r, Hg);
            if (s !== null) for (const o of this._keybindingService.resolveKeybinding(s)){
                if (SEf(o)) continue;
                const a = o.getLabel();
                if (a) {
                    i.push(a);
                    break;
                }
            }
        }
        return i;
    }
    getCommandTitle(t) {
        const e = oDe.getCommand(t);
        if (e) switch(e.scope){
            case ml.EMPTY_WORKSPACE:
                return this._resolveCommandTitleInContext(e, this._getEmptyWorkspaceDispatchContextService());
            case ml.AGENT_WORKSPACE:
                {
                    const n = this._resolveActiveAgentWorkspaceId();
                    return n ? this._consumers.get(n)?.getCommandTitle(e, this._getRootDispatchContextOverrides()) ?? e.title : e.title;
                }
            default:
                {
                    const n = e.scope;
                    throw new Error(`Unknown GlassCommandScope: ${n}`);
                }
        }
    }
    dispose() {
        this._consumers.clear(), super.dispose();
    }
    _registerWindowKeydownListener(t) {
        return li(t, Pr.KEY_DOWN, (e)=>this._onKeyDown(e, t), {
            capture: !0
        });
    }
    _registerWindowKeyupListener(t) {
        return li(t, Pr.KEY_UP, ()=>this._keybindingService.resetKeybindingHoldMode());
    }
    _registerXtermFocusSyncListeners(t) {
        const e = new Nt;
        return e.add(li(t, Pr.FOCUS_IN, ()=>{
            this._syncGlobalXtermFocusInAnyDispatchOverride();
        }, !0)), e.add(li(t, Pr.FOCUS_OUT, ()=>{
            queueMicrotask(()=>this._syncGlobalXtermFocusInAnyDispatchOverride());
        }, !0)), e.add(li(t, Pr.BLUR, ()=>{
            this._syncGlobalXtermFocusInAnyDispatchOverride();
        })), e;
    }
    _registerHistoryOwnerFocusListener(t) {
        return li(t, Pr.FOCUS_IN, (e)=>yUo(e.target), !0);
    }
    _onKeyDown(t, e) {
        if (this._keybindingService.inKeybindingHoldMode) {
            t.preventDefault();
            return;
        }
        const n = Qys(t.target);
        if (Icw(t.target, t)) return;
        const i = n !== void 0 && n.closest(".monaco-editor") === null;
        if (xcw(e.document, t.key)) return;
        const r = Acw(t, "find-widget"), s = $u(t.target) && t.target.closest('[data-component="agent-conversation-composer"]') !== null, o = new rv(t), a = this._getContextTarget(t, e);
        let l = "unhandled";
        if (this._handlePromptInterruptShortcut(t, n, e)) {
            o.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.reportEventDispatch("glass.promptInput.interrupt", "agent");
            return;
        }
        const c = this._computeEffectiveDispatchOverrides({
            isNonEditorEditable: i,
            isEditorFindWidgetFocused: r,
            isTranscriptFocused: s,
            isPromptInputEmpty: this._isFocusedPromptInputEmpty()
        }), u = this._resolveActiveAgentWorkspaceId();
        if (u && !this._isModalOpen() && this._consumers.has(u) && (l = this._dispatchInActiveWorkspace(u, o, a, c)), l === "unhandled" && (l = this._dispatchInEmptyWorkspace(o, a, c)), l === "unhandled") {
            if (n) {
                if (this._handleNativeInputShortcut(t, n, e)) return;
            } else if (this._handleAuxiliaryWindowCopy(t, e)) return;
        }
        switch(l){
            case "glass":
                o.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                break;
            case "terminal":
                {
                    this._reportFallbackDispatch(o, "terminal");
                    break;
                }
            case "unhandled":
                {
                    this._reportFallbackDispatch(o, "passed"), this._reportEscapeIfUnclaimed(t, e);
                    break;
                }
            default:
                {
                    const d = l;
                    throw new Error(`Unknown GlassKeybindingDispatchResult: ${d}`);
                }
        }
    }
    _reportEscapeIfUnclaimed(t, e) {
        if (!Mcw(t) || _ve(e)) return;
        const n = Qys(t.target);
        n !== void 0 && n.closest('[data-editor-releases-escape="true"]') === null || this._isModalOpen() || Dcw(e.document) || (this._unclaimedEscapeListener.value = li(e, Pr.KEY_DOWN, (r)=>{
            this._unclaimedEscapeListener.clear(), r === t && !r.defaultPrevented && (iIf(t.target, n) ? e.getSelection()?.removeAllRanges() : this._unclaimedEscapeHandlers.findLast((o)=>o.handle()) === void 0 && this._onDidReceiveUnclaimedEscape.fire());
        }));
    }
    pushUnclaimedEscapeHandler(t) {
        const e = {
            handle: t
        };
        return this._unclaimedEscapeHandlers.push(e), Pn(()=>{
            const n = this._unclaimedEscapeHandlers.indexOf(e);
            n !== -1 && this._unclaimedEscapeHandlers.splice(n, 1);
        });
    }
    _isModalOpen() {
        return this._dispatchContextOverrides.get(kct.key) === !1;
    }
    _handleNativeInputShortcut(t, e, n) {
        if (!(_r ? t.metaKey : t.ctrlKey) || t.altKey) return !1;
        const r = t.key.toLowerCase();
        if (r === "a" && !t.shiftKey) {
            t.preventDefault();
            const o = e.tagName;
            return o === "INPUT" || o === "TEXTAREA" ? e.select() : e.ownerDocument.defaultView?.getSelection()?.selectAllChildren(e), !0;
        }
        const s = Ecw(t, r, {
            auxiliaryWindow: _ve(n)
        });
        return s !== void 0 && e.ownerDocument.execCommand(s) ? (t.preventDefault(), !0) : !1;
    }
    _handleAuxiliaryWindowCopy(t, e) {
        if (!_r || !_ve(e) || !t.metaKey || t.ctrlKey || t.altKey || t.shiftKey || t.key.toLowerCase() !== "c") return !1;
        const n = e.getSelection();
        return !n || n.isCollapsed ? !1 : e.document.execCommand("copy") ? (t.preventDefault(), !0) : !1;
    }
    _handlePromptInterruptShortcut(t, e, n) {
        return !Ncw(t) || Lcw(e) || iIf(t.target, e) || Rbs(n) === void 0 ? !1 : (this._commandService.executeCommand(g3l).catch(xr), !0);
    }
    _computeEffectiveDispatchOverrides({ isNonEditorEditable: t, isEditorFindWidgetFocused: e, isTranscriptFocused: n, isPromptInputEmpty: i }) {
        return this._effectiveDispatchOverridesFor((t ? Cct.NonEditorEditable : 0) | (e ? Cct.EditorFindWidgetFocused : 0) | (n ? Cct.TranscriptFocused : 0) | (i ? Cct.PromptInputEmpty : 0));
    }
    _effectiveDispatchOverridesFor(t) {
        const e = this._effectiveDispatchOverrides.get(t);
        if (e !== void 0) return e;
        const n = new Map(this._dispatchContextOverrides);
        return t & Cct.NonEditorEditable && (n.set(si.editorTextFocus.key, !1), n.set(si.focus.key, !1), n.set(si.textInputFocus.key, !1), n.set(rW.key, !0)), t & Cct.EditorFindWidgetFocused && n.set(Nys.key, !0), t & Cct.TranscriptFocused && n.set(cNl.key, !0), t & Cct.PromptInputEmpty && n.set(lNl.key, !0), this._effectiveDispatchOverrides.set(t, n), n;
    }
    _dispatchInActiveWorkspace(t, e, n, i) {
        return this._consumers.get(t)?.dispatchEvent({
            event: e,
            target: n,
            rootDispatchContextOverrides: i
        }) ?? "unhandled";
    }
    _dispatchInEmptyWorkspace(t, e, n) {
        if (!this._keybindingService.mightDispatch(t)) return "unhandled";
        const i = this._getEmptyWorkspaceDispatchContextService(n).getContext(e);
        return this._keybindingService.dispatchEventWithContext(t, i) ? "glass" : "unhandled";
    }
    _getEmptyWorkspaceDispatchContextService(t = this._getRootDispatchContextOverrides()) {
        if (t.size === 0) return this._emptyWorkspaceContextKeyService;
        let e = this._emptyWorkspaceDispatchContextServices.get(t);
        return e === void 0 && (e = this._emptyWorkspaceContextKeyService.createOverlay(t), this._emptyWorkspaceDispatchContextServices.set(t, e)), e;
    }
    _getRootDispatchContextOverrides() {
        return this._effectiveDispatchOverridesFor(0);
    }
    _forgetFocusedPromptInput(t) {
        const e = this._focusedPromptInputs.indexOf(t);
        e !== -1 && this._focusedPromptInputs.splice(e, 1);
    }
    _hasFocusedPromptInput() {
        return this._focusedPromptInputs.length > 0;
    }
    _isFocusedPromptInputEmpty() {
        for(let t = 0; t < this._focusedPromptInputs.length; t++)if (this._focusedPromptInputs[t].isEmpty?.()) return !0;
        return !1;
    }
    _resolveCommandTitleInContext(t, e) {
        for (const n of t.dynamicTitle)if (!n.when || e.contextMatchesRules(n.when)) return n.title;
        return t.title;
    }
    _getContextTarget(t, e) {
        return $u(t.target) ? t.target : e.document.body ?? e.document.documentElement;
    }
    _reportFallbackDispatch(t, e) {
        this._onDidExecuteKeybinding.hasListeners() && this.reportEventDispatch(this._resolveDiagnosticEventName(t), e);
    }
    _resolveDiagnosticEventName(t) {
        return this._keybindingService.resolveKeyboardEvent(t).getUserSettingsLabel() ?? t.code;
    }
    _resolveActiveAgentWorkspaceId() {
        const t = this._glassActiveAgentService.getActiveAgentId();
        if (t) {
            const e = this._agentRepositoryService.getMaterializedWorkspaceId(t) ?? this._agentRepositoryService.getAgentHeader(t)?.environment.value.id;
            if (e) return e;
        }
        return this._resolveDraftWorkspaceId();
    }
    _resolveDraftWorkspaceId() {
        try {
            const t = this._agentRepositoryService.getEmptyStateDraft();
            return t && (Ocw(t) ?? t.workspaceIdentifier?.id);
        } catch (t) {
            xr(t);
            return;
        }
    }
    _syncGlobalXtermFocusInAnyDispatchOverride() {
        let t = !1;
        const e = Array.from(ooe()), n = e.filter(({ window: a })=>a.document.hasFocus()), i = n.length > 0 ? n : e;
        for (const { window: a } of i){
            const l = a.document.activeElement;
            if ($u(l) && l.closest(t3n._xtermFocusWithinSelector) !== null) {
                t = !0;
                break;
            }
        }
        const r = ns.focusInAny.key, s = ns.focus.key, o = xki.key;
        t ? (this.setContext(r, !0), this.setContext(s, !0), this.setContext(o, !1)) : (this.deleteContext(r), this.deleteContext(s), this.deleteContext(o));
    }
}, t3n._xtermFocusWithinSelector = ".terminal-wrapper .xterm", t3n = Re([
    F(0, ow),
    F(1, vm),
    F(2, ma),
    F(3, Mme),
    F(4, Vc),
    F(5, vN)
], t3n), bn(GT, t3n, 0, 1), Jys = class {
    constructor(t){
        this.keybindingRouterService = t;
    }
    registerPromptInputFocusSource(t) {
        return this.keybindingRouterService.registerPromptInputFocusSource(t);
    }
}, Jys = Re([
    F(0, GT)
], Jys), bn(Z3l, Jys, 1, 1);

}
