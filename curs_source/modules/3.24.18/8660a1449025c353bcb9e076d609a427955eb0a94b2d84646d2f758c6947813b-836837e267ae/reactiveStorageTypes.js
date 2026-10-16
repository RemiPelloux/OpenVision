import { Hn, ws } from "./dom_2.js";
import { Ak, Au, V7, Wc, Xg, _2, nS } from "./ipa.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { $u, Qte, rl } from "./ze.js";
var Ox, Y0e, IB, b0t, fLp;
export { IB, Ox, Y0e, b0t, fLp };
var __wakaru_Lae_initialized = false;
export function Lae() {
if (__wakaru_Lae_initialized) return;
__wakaru_Lae_initialized = true;
"use strict";
E(), Ak(), Hn(), Pu(), Bs(), Ox = ((t)=>(t[t.None = 0] = "None", t[t.Code = 1] = "Code", t[t.File = 2] = "File", t[t.Failure = 3] = "Failure", t[t.Image = 4] = "Image", t[t.Folder = 5] = "Folder", t[t.Docs = 6] = "Docs", t[t.CursorRule = 7] = "CursorRule", t[t.GitDiff = 8] = "GitDiff", t))(Ox || {}), Y0e = class {
    constructor(){
        this._ref = void 0, this._editor = void 0, this._unregisterEditorUpdateListener = void 0, this._lastIsEmpty = void 0, this.promisedFocus = !1, this._promisedFocusActiveInForeignInput = !1, this._triggerScrollToBottom = void 0, this._pendingSuggestion = !1, this._pendingSuggestionReqId = void 0, this._suggestion = void 0, this._bufferedSuggestion = void 0, this._suggestionListeners = new Set;
    }
    registerTextAreaElement(t, e) {
        this._ref = t, this._unregisterEditorUpdateListener?.(), this._unregisterEditorUpdateListener = void 0, this._lastIsEmpty = void 0, this._editor = e, this._editor && (this._unregisterEditorUpdateListener = this._editor.registerUpdateListener(()=>{
            const n = this.isEmpty();
            this._lastIsEmpty === void 0 && (this._lastIsEmpty = n), this._lastIsEmpty !== n && this._suggestion !== void 0 && this._notifySuggestionListeners(), this._lastIsEmpty = n;
        })), this.promisedFocus && this.focus(void 0, !0);
    }
    detachTextAreaElement(t) {
        t !== void 0 && this._ref !== t || (this._ref = void 0, this._editor = void 0, this._unregisterEditorUpdateListener?.(), this._unregisterEditorUpdateListener = void 0, this._lastIsEmpty = void 0, this.promisedFocus = !1);
    }
    registerFocusElement(t) {
        this._ref = t, this.promisedFocus && this.focus(void 0, !0);
    }
    detachFocusElement(t) {
        t !== void 0 && this._ref !== t || (this._ref = void 0, this.promisedFocus = !1);
    }
    runEditorUpdate(t) {
        this._editor && this._editor.update(()=>{
            t();
        });
    }
    registerScrollToBottomTrigger(t) {
        this._triggerScrollToBottom = t;
    }
    clearScrollToBottomTrigger() {
        this._triggerScrollToBottom = void 0;
    }
    insertAtSymbol() {
        this._editor && this._editor.update(()=>{
            const t = nS(" @"), e = Xg();
            let n = e.getLastChild();
            n === null && (n = _2(), e.append(n)), n.append(t), e.selectEnd();
        });
    }
    isEmpty() {
        if (this._editor) {
            const t = this._editor.getEditorState();
            let e = !0;
            return t.read(()=>{
                const n = Xg(), i = (o)=>{
                    if (Au(o)) return o.getTextContent();
                    if (V7(o)) return `
`;
                    if (Wc(o)) {
                        let a = "";
                        for (const l of o.getChildren())a += i(l);
                        return a;
                    }
                    return o.getTextContent();
                };
                e = i(n).replace(/[\u200B\uFEFF]/g, "").trim().length === 0;
            }), e;
        }
        return !0;
    }
    setText(t) {
        this._editor && this._editor.update(()=>{
            const e = Xg();
            e.clear();
            const n = _2();
            n.append(nS(t)), e.append(n), e.selectEnd();
        });
    }
    setTextIfEmpty(t) {
        return this.isEmpty() ? (this.setText(t), !0) : !1;
    }
    enablePendingSuggestion() {
        if (this._pendingSuggestion = !0, this._bufferedSuggestion && this.isEmpty()) {
            if (!(this._pendingSuggestionReqId !== void 0 && this._bufferedSuggestion.reqId !== void 0 && this._bufferedSuggestion.reqId !== this._pendingSuggestionReqId)) {
                this._suggestion = {
                    text: this._bufferedSuggestion.text,
                    reqId: this._bufferedSuggestion.reqId ?? this._pendingSuggestionReqId
                }, this._bufferedSuggestion = void 0, this._pendingSuggestionReqId = void 0, this._pendingSuggestion = !1, this._notifySuggestionListeners();
                return;
            }
            this._bufferedSuggestion = void 0;
        }
        this._suggestion !== void 0 && (this._suggestion = void 0, this._notifySuggestionListeners());
    }
    setPendingSuggestionReqId(t) {
        this._pendingSuggestionReqId = t;
    }
    disablePendingSuggestion() {
        this._pendingSuggestion = !1, this._bufferedSuggestion = void 0, this._pendingSuggestionReqId = void 0, this.clearSuggestionText();
    }
    setSuggestionText(t, e) {
        this._pendingSuggestion && this.isEmpty() ? (this._suggestion = {
            text: t,
            reqId: e ?? this._pendingSuggestionReqId
        }, this._pendingSuggestionReqId = void 0, this._pendingSuggestion = !1, this._notifySuggestionListeners()) : !this._pendingSuggestion && this.isEmpty() && (this._bufferedSuggestion = {
            text: t,
            reqId: e
        });
    }
    getSuggestionText() {
        if (this.isEmpty()) return this._suggestion?.text;
    }
    getSuggestionReqId() {
        if (this.isEmpty()) return this._suggestion?.reqId;
    }
    clearSuggestionText() {
        this._suggestion !== void 0 && (this._suggestion = void 0, this._notifySuggestionListeners());
    }
    onSuggestionChange(t) {
        return this._suggestionListeners.add(t), ()=>this._suggestionListeners.delete(t);
    }
    _notifySuggestionListeners() {
        for (const t of this._suggestionListeners)t();
    }
    focus(t, e, n) {
        if (this._ref) {
            const i = this.promisedFocus;
            this.promisedFocus = !1;
            const r = ()=>{
                if (this._ref?.focus(), this._editor === void 0) {
                    t?.(), this._triggerScrollToBottom?.();
                    return;
                }
                this._editor.update(()=>{
                    const u = Xg();
                    n ? u.selectStart() : u.selectEnd(), t?.(), this._triggerScrollToBottom?.();
                });
            }, s = i ? this._promisedFocusActiveInForeignInput : this._isActiveElementForeignInput(), o = ()=>!s && this._isActiveElementForeignInput(), a = (u)=>{
                setTimeout(()=>{
                    if (u && this.isFocused()) return;
                    const d = this._ref?.ownerDocument.activeElement;
                    $u(d) && d.closest(".quick-input-widget") || o() || r();
                }, 25);
            }, c = rl() === $t;
            e || !c ? o() || (r(), e && c && a(!1)) : a();
        } else {
            this.promisedFocus = !0;
            const i = rl().document.activeElement;
            this._promisedFocusActiveInForeignInput = $u(i) && (Qte(i) || i.isContentEditable);
        }
    }
    isFocused() {
        if (!this._ref) return !1;
        const t = ws(this._ref).document.activeElement;
        return t === this._ref || this._ref.contains(t);
    }
    _isActiveElementForeignInput() {
        const t = this._ref?.ownerDocument.activeElement;
        return !$u(t) || t === this._ref || this._ref && this._ref.contains(t) ? !1 : Qte(t) || t.isContentEditable;
    }
    getRef() {
        return this._ref;
    }
}, IB = {
    alwaysKeepComposerInBound: !0,
    defaultCapabilities: [],
    autoApplyFilesOutsideContext: !0,
    yoloCommandAllowlist: [],
    yoloCommandDenylist: [],
    smartAllowlistDenylist: [],
    yoloMcpToolsDisabled: !1,
    doNotShowYoloModeWarningAgain: !1,
    doNotShowFullYoloModeWarningAgain: !1,
    selectedFakeStreamerId: null,
    yoloDeleteFileDisabled: !1,
    yoloOutsideWorkspaceDisabled: !0,
    yoloEnableRunEverything: !1,
    enableSmartAuto: !1,
    isWebSearchToolEnabled: !0,
    isWebSearchToolEnabled2: !1,
    isWebSearchToolEnabled3: null,
    autoAcceptWebSearchTool: !1,
    isWebFetchToolEnabled: null,
    webFetchDomainAllowlist: [],
    autoApproveModeTransitions: !1,
    mcpAuthBlocking: !0,
    autoApprovedModeTransitions: [],
    autoRejectedModeTransitions: [],
    backgroundComposerEnv: "dev",
    useLegacyTerminalTool: !1,
    modes4: [
        {
            id: "agent",
            name: "Agent",
            actionId: "composerMode.agent",
            icon: "infinity",
            description: "Plan, search, make edits, run commands",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !0,
            autoFix: !0,
            autoRun: !0,
            fullAutoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "triage",
            name: "Triage",
            actionId: "composerMode.triage",
            icon: "rocket",
            description: "Coordinate long-horizon tasks with delegated subagents",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !1,
            autoRun: !0,
            fullAutoRun: !1,
            enabledTools: [
                Ct.TASK_V2,
                Ct.APPLY_AGENT_DIFF
            ],
            enabledMcpServers: []
        },
        {
            id: "plan",
            name: "Plan",
            actionId: "composerMode.plan",
            icon: "todos",
            description: "Create detailed plans for accomplishing tasks",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !1,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "spec",
            name: "Spec",
            actionId: "composerMode.spec",
            icon: "checklist",
            description: "Create structured plans with implementation steps",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !1,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "debug",
            name: "Debug",
            actionId: "composerMode.debug",
            icon: "bug",
            description: "Systematically diagnose and fix bugs using runtime traces",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !0,
            autoFix: !1,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "multitask",
            name: "Multitask",
            actionId: "composerMode.multitask",
            icon: "circles",
            description: "Run and coordinate multiple tasks in parallel",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !0,
            autoFix: !1,
            autoRun: !0,
            fullAutoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        },
        {
            id: "chat",
            name: "Ask",
            actionId: "composerMode.chat",
            icon: "chat",
            description: "Ask Cursor questions about your codebase",
            thinkingLevel: "none",
            shouldAutoApplyIfNoEditTool: !1,
            autoFix: !0,
            autoRun: !1,
            enabledTools: [],
            enabledMcpServers: []
        }
    ],
    codeBlockDisplayPreference: "collapsed",
    thinkingLevel: "none",
    composerMigrationVersion: !1
}, b0t = [], fLp = {
    cppModels: []
};

}
