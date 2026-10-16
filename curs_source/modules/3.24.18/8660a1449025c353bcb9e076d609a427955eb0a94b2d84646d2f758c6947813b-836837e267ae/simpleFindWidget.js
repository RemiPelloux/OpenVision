import { D, Fa, rY } from "./Iwo.js";
import { $3 } from "./aria.js";
import { II, qn } from "./async.js";
import { Ap } from "./colorRegistry.js";
import { CM, rRe, yHe } from "./defaultStyles.js";
import { Hn } from "./dom_2.js";
import { c3a, l3a } from "./findState.js";
import { _3a, _Mp, f3a, lyi, qGe, v3a } from "./findWidget.js";
import { yWr } from "./historyWidgetKeybindingHint.js";
import { b_, yTr } from "./iconRegistry.js";
import { ayi, oyi, syi } from "./ipa.js";
import { Ma, Ze } from "./keyCodes.js";
import { Bt } from "./nls.js";
import { nkw } from "./simpleFindWidget.css";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { I5e, P_, S9t, j3, kwe, li, mn, nne, qve } from "./ze.js";
var BLf, ULf, jLf, $Lf, HLf, nNi, WLf, eAt, GLf;
export { $Lf, BLf, GLf, HLf, ULf, WLf, eAt, jLf, nNi };
var __wakaru_YXt_initialized = false;
export function YXt() {
if (__wakaru_YXt_initialized) return;
__wakaru_YXt_initialized = true;
"use strict";
E(), nkw(), Bt(), Hn(), CY(), qn(), Ma(), c3a(), _Mp(), oyi(), b_(), Dl(), Fa(), yWr(), $3(), CM(), kwe(), Ap(), BLf = D(4959, null), ULf = D(4960, null), jLf = D(4961, null), $Lf = D(4962, null), HLf = D(4963, null), nNi = 310, WLf = 73, eAt = class extends k4 {
    constructor(t, e, n, i, r){
        super(), this._keybindingService = r, this._isVisible = !1, this._foundMatch = !1, this._width = 0, this.state = this._register(new l3a), this._matchesLimit = t.matchesLimit ?? Number.MAX_SAFE_INTEGER, this._findInput = this._register(new syi(null, e, {
            label: BLf,
            placeholder: ULf,
            validation: (a)=>{
                if (a.length === 0 || !this._findInput.getRegex()) return null;
                try {
                    return new RegExp(a), null;
                } catch (l) {
                    return this._foundMatch = !1, this.updateButtons(this._foundMatch), {
                        content: l.message
                    };
                }
            },
            showCommonFindToggles: t.showCommonFindToggles,
            appendCaseSensitiveLabel: t.appendCaseSensitiveActionId ? this._getKeybinding(t.appendCaseSensitiveActionId) : void 0,
            appendRegexLabel: t.appendRegexActionId ? this._getKeybinding(t.appendRegexActionId) : void 0,
            appendWholeWordsLabel: t.appendWholeWordsActionId ? this._getKeybinding(t.appendWholeWordsActionId) : void 0,
            showHistoryHint: ()=>ayi(r),
            inputBoxStyles: rRe,
            toggleStyles: yHe
        }, n)), this._updateHistoryDelayer = this._register(new II(500)), this._register(this._findInput.onInput(async (a)=>{
            (!t.checkImeCompletionState || !this._findInput.isImeSessionInProgress) && (this._foundMatch = this._onInputChanged(), t.showResultCount && await this.updateResultCount(), this.updateButtons(this._foundMatch), this.focusFindBox(), this._delayedUpdateHistory());
        })), this._findInput.setRegex(!!this.state.isRegex), this._findInput.setCaseSensitive(!!this.state.matchCase), this._findInput.setWholeWords(!!this.state.wholeWord), this._register(this._findInput.onDidOptionChange(()=>{
            this.state.change({
                isRegex: this._findInput.getRegex(),
                wholeWord: this._findInput.getWholeWords(),
                matchCase: this._findInput.getCaseSensitive()
            }, !0);
        })), this._register(this.state.onFindReplaceStateChange(()=>{
            this._findInput.setRegex(this.state.isRegex), this._findInput.setWholeWords(this.state.wholeWord), this._findInput.setCaseSensitive(this.state.matchCase), this.findFirst();
        })), this.prevBtn = this._register(new qGe({
            label: jLf + (t.previousMatchActionId ? this._getKeybinding(t.previousMatchActionId) : ""),
            icon: f3a,
            onTrigger: ()=>{
                this.find(!0);
            }
        }, i)), this.nextBtn = this._register(new qGe({
            label: $Lf + (t.nextMatchActionId ? this._getKeybinding(t.nextMatchActionId) : ""),
            icon: v3a,
            onTrigger: ()=>{
                this.find(!1);
            }
        }, i));
        const s = this._register(new qGe({
            label: HLf + (t.closeWidgetActionId ? this._getKeybinding(t.closeWidgetActionId) : ""),
            icon: yTr,
            onTrigger: ()=>{
                this.hide();
            }
        }, i));
        this._innerDomNode = document.createElement("div"), this._innerDomNode.classList.add("simple-find-part"), this._innerDomNode.appendChild(this._findInput.domNode), this._innerDomNode.appendChild(this.prevBtn.domNode), this._innerDomNode.appendChild(this.nextBtn.domNode), this._innerDomNode.appendChild(s.domNode), this._domNode = document.createElement("div"), this._domNode.classList.add("simple-find-part-wrapper"), this._domNode.appendChild(this._innerDomNode), this.onkeyup(this._innerDomNode, (a)=>{
            if (a.equals(Ze.Escape)) {
                this.hide(), a.preventDefault();
                return;
            }
        }), this._focusTracker = this._register(j3(this._innerDomNode)), this._register(this._focusTracker.onDidFocus(this._onFocusTrackerFocus.bind(this))), this._register(this._focusTracker.onDidBlur(this._onFocusTrackerBlur.bind(this))), this._findInputFocusTracker = this._register(j3(this._findInput.domNode)), this._register(this._findInputFocusTracker.onDidFocus(this._onFindInputFocusTrackerFocus.bind(this))), this._register(this._findInputFocusTracker.onDidBlur(this._onFindInputFocusTrackerBlur.bind(this))), this._register(li(this._innerDomNode, "click", (a)=>{
            a.stopPropagation();
        })), t?.showResultCount && (this._domNode.classList.add("result-count"), this._matchesCount = document.createElement("div"), this._matchesCount.className = "matchesCount", this._findInput.domNode.insertAdjacentElement("afterend", this._matchesCount), this._register(this._findInput.onDidChange(async ()=>{
            await this.updateResultCount();
        })), this._register(this._findInput.onDidOptionChange(async ()=>{
            this._foundMatch = this._onInputChanged(), await this.updateResultCount(), this.focusFindBox(), this._delayedUpdateHistory();
        })));
        let o = t?.initialWidth;
        if (o && (o = o < nNi ? nNi : o, this._domNode.style.width = `${o}px`), t?.enableSash) {
            const a = o ?? nNi;
            let l = a;
            const c = this._register(new I5e(this._innerDomNode, this, {
                orientation: P_.VERTICAL,
                size: 1
            }));
            this._register(c.onDidStart(()=>{
                l = parseFloat(S9t(this._domNode).width);
            })), this._register(c.onDidChange((u)=>{
                const d = l + u.startX - u.currentX;
                d < a || (this._domNode.style.width = `${d}px`);
            })), this._register(c.onDidReset((u)=>{
                parseFloat(S9t(this._domNode).width) === a ? this._domNode.style.width = "100%" : this._domNode.style.width = `${a}px`;
            }));
        }
    }
    getVerticalSashLeft(t) {
        return 0;
    }
    get inputValue() {
        return this._findInput.getValue();
    }
    get focusTracker() {
        return this._focusTracker;
    }
    _getKeybinding(t) {
        const e = this._keybindingService?.lookupKeybinding(t);
        return e ? ` (${e.getLabel()})` : "";
    }
    dispose() {
        super.dispose(), this._domNode?.remove();
    }
    isVisible() {
        return this._isVisible;
    }
    getDomNode() {
        return this._domNode;
    }
    getFindInputDomNode() {
        return this._findInput.domNode;
    }
    reveal(t, e = !0) {
        if (t && this._findInput.setValue(t), this._isVisible) {
            this._findInput.select();
            return;
        }
        this._isVisible = !0, this.updateResultCount(), this.layout(), setTimeout(()=>{
            this._innerDomNode.classList.toggle("suppress-transition", !e), this._innerDomNode.classList.add("visible", "visible-transition"), this._innerDomNode.setAttribute("aria-hidden", "false"), this._findInput.select(), e || setTimeout(()=>{
                this._innerDomNode.classList.remove("suppress-transition");
            }, 0);
        }, 0);
    }
    show(t) {
        t && !this._isVisible && this._findInput.setValue(t), this._isVisible = !0, this.layout(), setTimeout(()=>{
            this._innerDomNode.classList.add("visible", "visible-transition"), this._innerDomNode.setAttribute("aria-hidden", "false");
        }, 0);
    }
    hide(t = !0) {
        this._isVisible && (this._innerDomNode.classList.toggle("suppress-transition", !t), this._innerDomNode.classList.remove("visible-transition"), this._innerDomNode.setAttribute("aria-hidden", "true"), setTimeout(()=>{
            this._isVisible = !1, this.updateButtons(this._foundMatch), this._innerDomNode.classList.remove("visible", "suppress-transition");
        }, t ? 200 : 0));
    }
    layout(t = this._width) {
        if (this._width = t, !!this._isVisible && this._matchesCount) {
            let e = !1;
            nNi + WLf + 28 >= t && (e = !0), this._innerDomNode.classList.toggle("reduced-find-widget", e);
        }
    }
    _delayedUpdateHistory() {
        this._updateHistoryDelayer.trigger(this._updateHistory.bind(this));
    }
    _updateHistory() {
        this._findInput.inputBox.addToHistory();
    }
    _getRegexValue() {
        return this._findInput.getRegex();
    }
    _getWholeWordValue() {
        return this._findInput.getWholeWords();
    }
    _getCaseSensitiveValue() {
        return this._findInput.getCaseSensitive();
    }
    updateButtons(t) {
        const e = this.inputValue.length > 0;
        this.prevBtn.setEnabled(this._isVisible && e && t), this.nextBtn.setEnabled(this._isVisible && e && t);
    }
    focusFindBox() {
        this.nextBtn.focus(), this._findInput.inputBox.focus();
    }
    async updateResultCount() {
        if (!this._matchesCount) {
            this.updateButtons(this._foundMatch);
            return;
        }
        const t = await this._getResultCount(), e = this.inputValue.length > 0 && t?.resultCount === 0;
        this._matchesCount.classList.toggle("no-results", e);
        let n = "";
        if (t?.resultCount) {
            let i = String(t.resultCount);
            t.resultCount >= this._matchesLimit && (i += "+");
            let r = String(t.resultIndex + 1);
            r === "0" && (r = "?"), n = rY(_3a, r, i);
        } else n = lyi;
        qve(this._announceSearchResults(n, this.inputValue)), this._matchesCount.textContent !== n && (this._matchesCount.textContent = "", this._matchesCount.appendChild(document.createTextNode(n))), this._foundMatch = !!t && t.resultCount > 0, this.updateButtons(this._foundMatch);
    }
    changeState(t) {
        this.state.change(t, !1);
    }
    _announceSearchResults(t, e) {
        return e ? t === lyi ? e === "" ? D(4965, null, t) : D(4966, null, t, e) : D(4967, null, t, e) : D(4964, null);
    }
}, GLf = mn("simpleFindWidget.sashBorder", {
    dark: "#454545",
    light: "#C8C8C8",
    hcDark: "#6FC3DF",
    hcLight: "#0F4A85"
}, D(4968, null)), nne((t, e)=>{
    const n = t.getColor(GLf);
    e.addRule(`.monaco-workbench .simple-find-part .monaco-sash { background-color: ${n}; border-color: ${n} }`);
});

}
