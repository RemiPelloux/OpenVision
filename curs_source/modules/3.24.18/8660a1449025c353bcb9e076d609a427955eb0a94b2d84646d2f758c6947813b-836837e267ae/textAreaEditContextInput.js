import { Di, Fa, Gt, K9, Qe, Vn, en, rd, st, tt } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { Yu, qn } from "./async.js";
import { A_, _7 } from "./browser_2.js";
import { Afn, Esi, xfn } from "./clipboardUtils.js";
import { Hn, ws } from "./dom_2.js";
import { Gg, voe } from "./event_2.js";
import { Ma, Ze } from "./keyCodes.js";
import { nT, rv } from "./keyboardEvent.js";
import { Ji, Li } from "./log.js";
import { uHo, w5e } from "./performance_2.js";
import { Cy, bu } from "./selection.js";
import { DQ, Ijd, e_e } from "./textAreaEditContextState.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { RC, eAy, li, tAy, xbt } from "./ze.js";
var dCr, xjd, hCr, Ajd;
export { Ajd, dCr, hCr, xjd };
var __wakaru_Rjd_initialized = false;
export function Rjd() {
if (__wakaru_Rjd_initialized) return;
__wakaru_Rjd_initialized = true;
"use strict";
E(), A_(), Hn(), voe(), nT(), uHo(), qn(), Gt(), Ma(), Qe(), Di(), Fa(), Cy(), Ty(), Ji(), Esi(), Ijd(), ((t)=>{
    t.Tap = "-monaco-textarea-synthetic-tap";
})(dCr || (dCr = {})), xjd = class {
    constructor(){
        this._lastTypeTextLength = 0;
    }
    handleCompositionUpdate(t) {
        t = t || "";
        const e = {
            text: t,
            replacePrevCharCnt: this._lastTypeTextLength,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        return this._lastTypeTextLength = t.length, e;
    }
}, hCr = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._host = t, this._textArea = e, this._OS = n, this._browser = i, this._accessibilityService = r, this._logService = s, this._onFocus = this._register(new tt), this.onFocus = this._onFocus.event, this._onBlur = this._register(new tt), this.onBlur = this._onBlur.event, this._onKeyDown = this._register(new tt), this.onKeyDown = this._onKeyDown.event, this._onKeyUp = this._register(new tt), this.onKeyUp = this._onKeyUp.event, this._onCut = this._register(new tt), this.onCut = this._onCut.event, this._onPaste = this._register(new tt), this.onPaste = this._onPaste.event, this._onType = this._register(new tt), this.onType = this._onType.event, this._onCompositionStart = this._register(new tt), this.onCompositionStart = this._onCompositionStart.event, this._onCompositionUpdate = this._register(new tt), this.onCompositionUpdate = this._onCompositionUpdate.event, this._onCompositionEnd = this._register(new tt), this.onCompositionEnd = this._onCompositionEnd.event, this._onSelectionChangeRequest = this._register(new tt), this.onSelectionChangeRequest = this._onSelectionChangeRequest.event, this._asyncFocusGainWriteScreenReaderContent = this._register(new Vn), this._selectionChangeListener = this._register(new Vn), this._asyncTriggerCut = this._register(new Yu(()=>this._onCut.fire(), 0)), this._textAreaState = DQ.EMPTY, this._accessibilityService.isScreenReaderOptimized() && this.writeNativeTextAreaContent("ctor"), this._register(en.runAndSubscribe(this._accessibilityService.onDidChangeScreenReaderOptimized, ()=>{
            this._accessibilityService.isScreenReaderOptimized() && !this._asyncFocusGainWriteScreenReaderContent.value ? this._asyncFocusGainWriteScreenReaderContent.value = this._register(new Yu(()=>this.writeNativeTextAreaContent("asyncFocusGain"), 0)) : this._asyncFocusGainWriteScreenReaderContent.clear();
        })), this._hasFocus = !1, this._currentComposition = null;
        let o = null;
        this._register(this._textArea.onKeyDown((a)=>{
            const l = new rv(a);
            (l.keyCode === Ze.KEY_IN_COMPOSITION || this._currentComposition && l.keyCode === Ze.Backspace) && l.stopPropagation(), l.equals(Ze.Escape) && l.preventDefault(), o = l, this._onKeyDown.fire(l);
        })), this._register(this._textArea.onKeyUp((a)=>{
            const l = new rv(a);
            this._onKeyUp.fire(l);
        })), this._register(this._textArea.onCompositionStart((a)=>{
            e_e && console.log("[compositionstart]", a);
            const l = new xjd;
            if (this._currentComposition) {
                this._currentComposition = l;
                return;
            }
            if (this._currentComposition = l, this._OS === rd.Macintosh && o && o.equals(Ze.KEY_IN_COMPOSITION) && this._textAreaState.selectionStart === this._textAreaState.selectionEnd && this._textAreaState.selectionStart > 0 && this._textAreaState.value.substr(this._textAreaState.selectionStart - 1, 1) === a.data && (o.code === "ArrowRight" || o.code === "ArrowLeft")) {
                e_e && console.log("[compositionstart] Handling long press case on macOS + arrow key", a), l.handleCompositionUpdate("x"), this._onCompositionStart.fire({
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
            e_e && console.log("[compositionupdate]", a);
            const l = this._currentComposition;
            if (!l) return;
            if (this._browser.isAndroid) {
                const u = DQ.readFromTextArea(this._textArea, this._textAreaState), d = DQ.deduceAndroidCompositionInput(this._textAreaState, u);
                this._textAreaState = u, this._onType.fire(d), this._onCompositionUpdate.fire(a);
                return;
            }
            const c = l.handleCompositionUpdate(a.data);
            this._textAreaState = DQ.readFromTextArea(this._textArea, this._textAreaState), this._onType.fire(c), this._onCompositionUpdate.fire(a);
        })), this._register(this._textArea.onCompositionEnd((a)=>{
            e_e && console.log("[compositionend]", a);
            const l = this._currentComposition;
            if (!l) return;
            if (this._currentComposition = null, this._browser.isAndroid) {
                const u = DQ.readFromTextArea(this._textArea, this._textAreaState), d = DQ.deduceAndroidCompositionInput(this._textAreaState, u);
                this._textAreaState = u, this._onType.fire(d), this._onCompositionEnd.fire();
                return;
            }
            const c = l.handleCompositionUpdate(a.data);
            this._textAreaState = DQ.readFromTextArea(this._textArea, this._textAreaState), this._onType.fire(c), this._onCompositionEnd.fire();
        })), this._register(this._textArea.onInput((a)=>{
            if (e_e && console.log("[input]", a), this._textArea.setIgnoreSelectionChangeTime("received input event"), this._currentComposition) return;
            const l = DQ.readFromTextArea(this._textArea, this._textAreaState), c = DQ.deduceInput(this._textAreaState, l, this._OS === rd.Macintosh);
            c.replacePrevCharCnt === 0 && c.text.length === 1 && (K9(c.text.charCodeAt(0)) || c.text.charCodeAt(0) === 127) || (this._textAreaState = l, (c.text !== "" || c.replacePrevCharCnt !== 0 || c.replaceNextCharCnt !== 0 || c.positionDelta !== 0) && this._onType.fire(c));
        })), this._register(this._textArea.onCut((a)=>{
            this._textArea.setIgnoreSelectionChangeTime("received cut event"), this._ensureClipboardGetsEditorSelection(a), this._asyncTriggerCut.schedule();
        })), this._register(this._textArea.onCopy((a)=>{
            this._ensureClipboardGetsEditorSelection(a);
        })), this._register(this._textArea.onPaste((a)=>{
            if (this._textArea.setIgnoreSelectionChangeTime("received paste event"), a.preventDefault(), !a.clipboardData) return;
            let [l, c] = Afn.getTextData(a.clipboardData);
            l && (c = c || xfn.INSTANCE.get(l), this._onPaste.fire({
                text: l,
                metadata: c
            }));
        })), this._register(this._textArea.onFocus(()=>{
            const a = this._hasFocus;
            this._setHasFocus(!0), this._accessibilityService.isScreenReaderOptimized() && this._browser.isSafari && !a && this._hasFocus && (this._asyncFocusGainWriteScreenReaderContent.value || (this._asyncFocusGainWriteScreenReaderContent.value = new Yu(()=>this.writeNativeTextAreaContent("asyncFocusGain"), 0)), this._asyncFocusGainWriteScreenReaderContent.value.schedule());
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
        this._hasFocus = !0, this._textAreaState = DQ.readFromTextArea(this._textArea, null);
    }
    _installSelectionChangeListener() {
        let t = 0;
        return li(this._textArea.ownerDocument, "selectionchange", (e)=>{
            if (w5e.onSelectionChange(), !this._hasFocus || this._currentComposition || !this._browser.isChrome) return;
            const n = Date.now(), i = n - t;
            if (t = n, i < 5) return;
            const r = n - this._textArea.getIgnoreSelectionChangeTime();
            if (this._textArea.resetSelectionChangeTime(), r < 100 || !this._textAreaState.selection) return;
            const s = this._textArea.getValue();
            if (this._textAreaState.value !== s) return;
            const o = this._textArea.getSelectionStart(), a = this._textArea.getSelectionEnd();
            if (this._textAreaState.selectionStart === o && this._textAreaState.selectionEnd === a) return;
            const l = this._textAreaState.deduceEditorPosition(o), c = this._host.deduceModelPosition(l[0], l[1], l[2]), u = this._textAreaState.deduceEditorPosition(a), d = this._host.deduceModelPosition(u[0], u[1], u[2]), h = new bu(c.lineNumber, c.column, d.lineNumber, d.column);
            this._onSelectionChangeRequest.fire(h);
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
    _setHasFocus(t) {
        this._hasFocus !== t && (this._hasFocus = t, this._hasFocus ? this._selectionChangeListener.value = this._installSelectionChangeListener() : this._selectionChangeListener.clear(), this._hasFocus && this.writeNativeTextAreaContent("focusgain"), this._hasFocus ? this._onFocus.fire() : this._onBlur.fire());
    }
    _setAndWriteTextAreaState(t, e) {
        this._hasFocus || (e = e.collapseSelection()), e.isWrittenToTextArea(this._textArea, this._hasFocus) || this._logService.trace(`writeTextAreaState(reason: ${t})`), e.writeToTextArea(t, this._textArea, this._hasFocus), this._textAreaState = e;
    }
    writeNativeTextAreaContent(t) {
        !this._accessibilityService.isScreenReaderOptimized() && t === "render" || this._currentComposition || this._setAndWriteTextAreaState(t, this._host.getScreenReaderContent());
    }
    _ensureClipboardGetsEditorSelection(t) {
        const e = this._host.getDataToCopy(), n = {
            version: 1,
            isFromEmptySelection: e.isFromEmptySelection,
            multicursorText: e.multicursorText,
            mode: e.mode
        };
        xfn.INSTANCE.set(this._browser.isFirefox ? e.text.replace(/\r\n/g, `
`) : e.text, n), t.preventDefault(), t.clipboardData && Afn.setTextData(t.clipboardData, e.text, e.html, n);
    }
}, hCr = Re([
    F(4, GS),
    F(5, Li)
], hCr), Ajd = class extends st {
    constructor(t){
        super(), this._actual = t, this._onSyntheticTap = this._register(new tt), this.onSyntheticTap = this._onSyntheticTap.event, this.onKeyDown = this._register(new Gg(this._actual, "keydown")).event, this.onKeyPress = this._register(new Gg(this._actual, "keypress")).event, this.onKeyUp = this._register(new Gg(this._actual, "keyup")).event, this.onCompositionStart = this._register(new Gg(this._actual, "compositionstart")).event, this.onCompositionUpdate = this._register(new Gg(this._actual, "compositionupdate")).event, this.onCompositionEnd = this._register(new Gg(this._actual, "compositionend")).event, this.onBeforeInput = this._register(new Gg(this._actual, "beforeinput")).event, this.onInput = this._register(new Gg(this._actual, "input")).event, this.onCut = this._register(new Gg(this._actual, "cut")).event, this.onCopy = this._register(new Gg(this._actual, "copy")).event, this.onPaste = this._register(new Gg(this._actual, "paste")).event, this.onFocus = this._register(new Gg(this._actual, "focus")).event, this.onBlur = this._register(new Gg(this._actual, "blur")).event, this._ignoreSelectionChangeTime = 0, this._register(this.onKeyDown(()=>w5e.onKeyDown())), this._register(this.onBeforeInput(()=>w5e.onBeforeInput())), this._register(this.onInput(()=>w5e.onInput())), this._register(this.onKeyUp(()=>w5e.onKeyUp())), this._register(li(this._actual, dCr.Tap, ()=>this._onSyntheticTap.fire()));
    }
    get ownerDocument() {
        return this._actual.ownerDocument;
    }
    hasFocus() {
        const t = xbt(this._actual);
        return t ? t.activeElement === this._actual : this._actual.isConnected ? RC() === this._actual : !1;
    }
    setIgnoreSelectionChangeTime(t) {
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
    setValue(t, e) {
        const n = this._actual;
        n.value !== e && (this.setIgnoreSelectionChangeTime("setValue"), n.value = e);
    }
    getSelectionStart() {
        return this._actual.selectionDirection === "backward" ? this._actual.selectionEnd : this._actual.selectionStart;
    }
    getSelectionEnd() {
        return this._actual.selectionDirection === "backward" ? this._actual.selectionStart : this._actual.selectionEnd;
    }
    setSelectionRange(t, e, n) {
        const i = this._actual;
        let r = null;
        const s = xbt(i);
        s ? r = s.activeElement : r = RC();
        const o = ws(r), a = r === i, l = i.selectionStart, c = i.selectionEnd;
        if (a && l === e && c === n) {
            _7 && o.parent !== o && i.focus();
            return;
        }
        if (a) {
            this.setIgnoreSelectionChangeTime("setSelectionRange"), i.setSelectionRange(e, n), _7 && o.parent !== o && i.focus();
            return;
        }
        try {
            const u = eAy(i);
            this.setIgnoreSelectionChangeTime("setSelectionRange"), i.focus(), i.setSelectionRange(e, n), tAy(i, u);
        } catch  {}
    }
};

}
