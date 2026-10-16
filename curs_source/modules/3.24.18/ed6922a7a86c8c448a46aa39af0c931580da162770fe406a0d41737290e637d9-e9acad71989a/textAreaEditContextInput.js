import { CO, Ct, Ps, Se, Ul, bt, cn, jn, ve, we } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { ac, bn } from "./async.js";
import { i5, n_ } from "./browser_2.js";
import { XOt, Xfn, ZOt } from "./clipboardUtils.js";
import { en, xi } from "./dom_2.js";
import { B7, mp } from "./event_2.js";
import { Pr, fe } from "./keyCodes.js";
import { gu, jg } from "./keyboardEvent.js";
import { Qn, Wn } from "./log.js";
import { aes, xwe } from "./performance_2.js";
import { $hg, Hhg, WS, Xqe, Xt } from "./qIc.js";
import { _f, za } from "./selection.js";
import { fre, p9c, vW } from "./textAreaEditContextState.js";
import { x } from "./tslib.es6.js";
var B_i, m9c, U_i, g9c;
export { B_i, U_i, g9c, m9c };
var __wakaru_f9c_initialized = false;
export function f9c() {
if (__wakaru_f9c_initialized) return;
__wakaru_f9c_initialized = true;
"use strict";
x(), n_(), en(), B7(), jg(), aes(), bn(), bt(), Pr(), Se(), jn(), Ps(), _f(), Op(), Qn(), Xfn(), p9c(), ((e)=>{
    e.Tap = "-monaco-textarea-synthetic-tap";
})(B_i || (B_i = {})), m9c = class {
    constructor(){
        this._lastTypeTextLength = 0;
    }
    handleCompositionUpdate(e) {
        e = e || "";
        const t = {
            text: e,
            replacePrevCharCnt: this._lastTypeTextLength,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        return this._lastTypeTextLength = e.length, t;
    }
}, U_i = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._host = e, this._textArea = t, this._OS = n, this._browser = i, this._accessibilityService = r, this._logService = s, this._onFocus = this._register(new ve), this.onFocus = this._onFocus.event, this._onBlur = this._register(new ve), this.onBlur = this._onBlur.event, this._onKeyDown = this._register(new ve), this.onKeyDown = this._onKeyDown.event, this._onKeyUp = this._register(new ve), this.onKeyUp = this._onKeyUp.event, this._onCut = this._register(new ve), this.onCut = this._onCut.event, this._onPaste = this._register(new ve), this.onPaste = this._onPaste.event, this._onType = this._register(new ve), this.onType = this._onType.event, this._onCompositionStart = this._register(new ve), this.onCompositionStart = this._onCompositionStart.event, this._onCompositionUpdate = this._register(new ve), this.onCompositionUpdate = this._onCompositionUpdate.event, this._onCompositionEnd = this._register(new ve), this.onCompositionEnd = this._onCompositionEnd.event, this._onSelectionChangeRequest = this._register(new ve), this.onSelectionChangeRequest = this._onSelectionChangeRequest.event, this._asyncFocusGainWriteScreenReaderContent = this._register(new cn), this._selectionChangeListener = this._register(new cn), this._asyncTriggerCut = this._register(new ac(()=>this._onCut.fire(), 0)), this._textAreaState = vW.EMPTY, this._accessibilityService.isScreenReaderOptimized() && this.writeNativeTextAreaContent("ctor"), this._register(Ct.runAndSubscribe(this._accessibilityService.onDidChangeScreenReaderOptimized, ()=>{
            this._accessibilityService.isScreenReaderOptimized() && !this._asyncFocusGainWriteScreenReaderContent.value ? this._asyncFocusGainWriteScreenReaderContent.value = this._register(new ac(()=>this.writeNativeTextAreaContent("asyncFocusGain"), 0)) : this._asyncFocusGainWriteScreenReaderContent.clear();
        })), this._hasFocus = !1, this._currentComposition = null;
        let o = null;
        this._register(this._textArea.onKeyDown((a)=>{
            const c = new gu(a);
            (c.keyCode === fe.KEY_IN_COMPOSITION || this._currentComposition && c.keyCode === fe.Backspace) && c.stopPropagation(), c.equals(fe.Escape) && c.preventDefault(), o = c, this._onKeyDown.fire(c);
        })), this._register(this._textArea.onKeyUp((a)=>{
            const c = new gu(a);
            this._onKeyUp.fire(c);
        })), this._register(this._textArea.onCompositionStart((a)=>{
            fre && console.log("[compositionstart]", a);
            const c = new m9c;
            if (this._currentComposition) {
                this._currentComposition = c;
                return;
            }
            if (this._currentComposition = c, this._OS === Ul.Macintosh && o && o.equals(fe.KEY_IN_COMPOSITION) && this._textAreaState.selectionStart === this._textAreaState.selectionEnd && this._textAreaState.selectionStart > 0 && this._textAreaState.value.substr(this._textAreaState.selectionStart - 1, 1) === a.data && (o.code === "ArrowRight" || o.code === "ArrowLeft")) {
                fre && console.log("[compositionstart] Handling long press case on macOS + arrow key", a), c.handleCompositionUpdate("x"), this._onCompositionStart.fire({
                    data: a.data
                });
                return;
            }
            if (this._browser.isAndroid) {
                this._onCompositionStart.fire({
                    data: a.data
                });
                return;
            }
            this._onCompositionStart.fire({
                data: a.data
            });
        })), this._register(this._textArea.onCompositionUpdate((a)=>{
            fre && console.log("[compositionupdate]", a);
            const c = this._currentComposition;
            if (!c) return;
            if (this._browser.isAndroid) {
                const u = vW.readFromTextArea(this._textArea, this._textAreaState), h = vW.deduceAndroidCompositionInput(this._textAreaState, u);
                this._textAreaState = u, this._onType.fire(h), this._onCompositionUpdate.fire(a);
                return;
            }
            const l = c.handleCompositionUpdate(a.data);
            this._textAreaState = vW.readFromTextArea(this._textArea, this._textAreaState), this._onType.fire(l), this._onCompositionUpdate.fire(a);
        })), this._register(this._textArea.onCompositionEnd((a)=>{
            fre && console.log("[compositionend]", a);
            const c = this._currentComposition;
            if (!c) return;
            if (this._currentComposition = null, this._browser.isAndroid) {
                const u = vW.readFromTextArea(this._textArea, this._textAreaState), h = vW.deduceAndroidCompositionInput(this._textAreaState, u);
                this._textAreaState = u, this._onType.fire(h), this._onCompositionEnd.fire();
                return;
            }
            const l = c.handleCompositionUpdate(a.data);
            this._textAreaState = vW.readFromTextArea(this._textArea, this._textAreaState), this._onType.fire(l), this._onCompositionEnd.fire();
        })), this._register(this._textArea.onInput((a)=>{
            if (fre && console.log("[input]", a), this._textArea.setIgnoreSelectionChangeTime("received input event"), this._currentComposition) return;
            const c = vW.readFromTextArea(this._textArea, this._textAreaState), l = vW.deduceInput(this._textAreaState, c, this._OS === Ul.Macintosh);
            l.replacePrevCharCnt === 0 && l.text.length === 1 && (CO(l.text.charCodeAt(0)) || l.text.charCodeAt(0) === 127) || (this._textAreaState = c, (l.text !== "" || l.replacePrevCharCnt !== 0 || l.replaceNextCharCnt !== 0 || l.positionDelta !== 0) && this._onType.fire(l));
        })), this._register(this._textArea.onCut((a)=>{
            this._textArea.setIgnoreSelectionChangeTime("received cut event"), this._ensureClipboardGetsEditorSelection(a), this._asyncTriggerCut.schedule();
        })), this._register(this._textArea.onCopy((a)=>{
            this._ensureClipboardGetsEditorSelection(a);
        })), this._register(this._textArea.onPaste((a)=>{
            if (this._textArea.setIgnoreSelectionChangeTime("received paste event"), a.preventDefault(), !a.clipboardData) return;
            let [c, l] = ZOt.getTextData(a.clipboardData);
            c && (l = l || XOt.INSTANCE.get(c), this._onPaste.fire({
                text: c,
                metadata: l
            }));
        })), this._register(this._textArea.onFocus(()=>{
            const a = this._hasFocus;
            this._setHasFocus(!0), this._accessibilityService.isScreenReaderOptimized() && this._browser.isSafari && !a && this._hasFocus && (this._asyncFocusGainWriteScreenReaderContent.value || (this._asyncFocusGainWriteScreenReaderContent.value = new ac(()=>this.writeNativeTextAreaContent("asyncFocusGain"), 0)), this._asyncFocusGainWriteScreenReaderContent.value.schedule());
        })), this._register(this._textArea.onBlur(()=>{
            this._currentComposition && (this._currentComposition = null, this.writeNativeTextAreaContent("blurWithoutCompositionEnd"), this._onCompositionEnd.fire()), this._setHasFocus(!1);
        })), this._register(this._textArea.onSyntheticTap(()=>{
            this._browser.isAndroid && this._currentComposition && (this._currentComposition = null, this.writeNativeTextAreaContent("tapWithoutCompositionEnd"), this._onCompositionEnd.fire());
        }));
    }
    get textAreaState() {
        return this._textAreaState;
    }
    _initializeFromTest() {
        this._hasFocus = !0, this._textAreaState = vW.readFromTextArea(this._textArea, null);
    }
    _installSelectionChangeListener() {
        let e = 0;
        return Xt(this._textArea.ownerDocument, "selectionchange", (t)=>{
            if (xwe.onSelectionChange(), !this._hasFocus || this._currentComposition || !this._browser.isChrome) return;
            const n = Date.now(), i = n - e;
            if (e = n, i < 5) return;
            const r = n - this._textArea.getIgnoreSelectionChangeTime();
            if (this._textArea.resetSelectionChangeTime(), r < 100 || !this._textAreaState.selection) return;
            const s = this._textArea.getValue();
            if (this._textAreaState.value !== s) return;
            const o = this._textArea.getSelectionStart(), a = this._textArea.getSelectionEnd();
            if (this._textAreaState.selectionStart === o && this._textAreaState.selectionEnd === a) return;
            const c = this._textAreaState.deduceEditorPosition(o), l = this._host.deduceModelPosition(c[0], c[1], c[2]), u = this._textAreaState.deduceEditorPosition(a), h = this._host.deduceModelPosition(u[0], u[1], u[2]), p = new za(l.lineNumber, l.column, h.lineNumber, h.column);
            this._onSelectionChangeRequest.fire(p);
        });
    }
    focusTextArea() {
        this._setHasFocus(!0), this.refreshFocusState();
    }
    isFocused() {
        return this._hasFocus;
    }
    refreshFocusState() {
        this._setHasFocus(this._textArea.hasFocus());
    }
    _setHasFocus(e) {
        this._hasFocus !== e && (this._hasFocus = e, this._hasFocus ? this._selectionChangeListener.value = this._installSelectionChangeListener() : this._selectionChangeListener.clear(), this._hasFocus && this.writeNativeTextAreaContent("focusgain"), this._hasFocus ? this._onFocus.fire() : this._onBlur.fire());
    }
    _setAndWriteTextAreaState(e, t) {
        this._hasFocus || (t = t.collapseSelection()), t.isWrittenToTextArea(this._textArea, this._hasFocus) || this._logService.trace(`writeTextAreaState(reason: ${e})`), t.writeToTextArea(e, this._textArea, this._hasFocus), this._textAreaState = t;
    }
    writeNativeTextAreaContent(e) {
        !this._accessibilityService.isScreenReaderOptimized() && e === "render" || this._currentComposition || this._setAndWriteTextAreaState(e, this._host.getScreenReaderContent());
    }
    _ensureClipboardGetsEditorSelection(e) {
        const t = this._host.getDataToCopy(), n = {
            version: 1,
            isFromEmptySelection: t.isFromEmptySelection,
            multicursorText: t.multicursorText,
            mode: t.mode
        };
        XOt.INSTANCE.set(this._browser.isFirefox ? t.text.replace(/\r\n/g, `
`) : t.text, n), e.preventDefault(), e.clipboardData && ZOt.setTextData(e.clipboardData, t.text, t.html, n);
    }
}, U_i = ie([
    C(4, ym),
    C(5, Wn)
], U_i), g9c = class extends we {
    constructor(e){
        super(), this._actual = e, this._onSyntheticTap = this._register(new ve), this.onSyntheticTap = this._onSyntheticTap.event, this.onKeyDown = this._register(new mp(this._actual, "keydown")).event, this.onKeyPress = this._register(new mp(this._actual, "keypress")).event, this.onKeyUp = this._register(new mp(this._actual, "keyup")).event, this.onCompositionStart = this._register(new mp(this._actual, "compositionstart")).event, this.onCompositionUpdate = this._register(new mp(this._actual, "compositionupdate")).event, this.onCompositionEnd = this._register(new mp(this._actual, "compositionend")).event, this.onBeforeInput = this._register(new mp(this._actual, "beforeinput")).event, this.onInput = this._register(new mp(this._actual, "input")).event, this.onCut = this._register(new mp(this._actual, "cut")).event, this.onCopy = this._register(new mp(this._actual, "copy")).event, this.onPaste = this._register(new mp(this._actual, "paste")).event, this.onFocus = this._register(new mp(this._actual, "focus")).event, this.onBlur = this._register(new mp(this._actual, "blur")).event, this._ignoreSelectionChangeTime = 0, this._register(this.onKeyDown(()=>xwe.onKeyDown())), this._register(this.onBeforeInput(()=>xwe.onBeforeInput())), this._register(this.onInput(()=>xwe.onInput())), this._register(this.onKeyUp(()=>xwe.onKeyUp())), this._register(Xt(this._actual, B_i.Tap, ()=>this._onSyntheticTap.fire()));
    }
    get ownerDocument() {
        return this._actual.ownerDocument;
    }
    hasFocus() {
        const e = Xqe(this._actual);
        return e ? e.activeElement === this._actual : this._actual.isConnected ? WS() === this._actual : !1;
    }
    setIgnoreSelectionChangeTime(e) {
        this._ignoreSelectionChangeTime = Date.now();
    }
    getIgnoreSelectionChangeTime() {
        return this._ignoreSelectionChangeTime;
    }
    resetSelectionChangeTime() {
        this._ignoreSelectionChangeTime = 0;
    }
    getValue() {
        return this._actual.value;
    }
    setValue(e, t) {
        const n = this._actual;
        n.value !== t && (this.setIgnoreSelectionChangeTime("setValue"), n.value = t);
    }
    getSelectionStart() {
        return this._actual.selectionDirection === "backward" ? this._actual.selectionEnd : this._actual.selectionStart;
    }
    getSelectionEnd() {
        return this._actual.selectionDirection === "backward" ? this._actual.selectionStart : this._actual.selectionEnd;
    }
    setSelectionRange(e, t, n) {
        const i = this._actual;
        let r = null;
        const s = Xqe(i);
        s ? r = s.activeElement : r = WS();
        const o = xi(r), a = r === i, c = i.selectionStart, l = i.selectionEnd;
        if (a && c === t && l === n) {
            i5 && o.parent !== o && i.focus();
            return;
        }
        if (a) {
            this.setIgnoreSelectionChangeTime("setSelectionRange"), i.setSelectionRange(t, n), i5 && o.parent !== o && i.focus();
            return;
        }
        try {
            const u = $hg(i);
            this.setIgnoreSelectionChangeTime("setSelectionRange"), i.focus(), i.setSelectionRange(t, n), Hhg(i, u);
        } catch  {}
    }
};

}
