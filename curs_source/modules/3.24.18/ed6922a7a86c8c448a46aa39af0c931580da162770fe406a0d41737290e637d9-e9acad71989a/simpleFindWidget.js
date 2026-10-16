import { A0e, a7t, lQe } from "./De_3.js";
import { Ps, S, wO } from "./HVr.js";
import { hS } from "./aria.js";
import { bn, xg } from "./async.js";
import { tc } from "./colorRegistry.js";
import { nN, sf, z7 } from "./defaultStyles.js";
import { en } from "./dom_2.js";
import { Y9i, dRn } from "./findState.js";
import { J9i, Q9i, ayt, e6i, n6i, oX } from "./findWidget.js";
import { l7t } from "./historyWidgetKeybindingHint.js";
import { dh, m5e } from "./iconRegistry.js";
import { Pr, fe } from "./keyCodes.js";
import { rt } from "./nls.js";
import { Bht, Lt, Xge, Xt, kI, qK, rw, xp, yI } from "./qIc.js";
import { lb_ } from "./simpleFindWidget.css";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var _Wh, bWh, yWh, SWh, kWh, k9n, wWh, Unt, CWh;
export { CWh, SWh, Unt, _Wh, bWh, k9n, kWh, wWh, yWh };
var __wakaru_X0t_initialized = false;
export function X0t() {
if (__wakaru_X0t_initialized) return;
__wakaru_X0t_initialized = true;
"use strict";
x(), lb_(), rt(), en(), RO(), bn(), Pr(), Y9i(), n6i(), A0e(), dh(), as(), Ps(), l7t(), hS(), sf(), qK(), tc(), _Wh = S(4959, null), bWh = S(4960, null), yWh = S(4961, null), SWh = S(4962, null), kWh = S(4963, null), k9n = 310, wWh = 73, Unt = class extends pR {
    constructor(e, t, n, i, r){
        super(), this._keybindingService = r, this._isVisible = !1, this._foundMatch = !1, this._width = 0, this.state = this._register(new dRn), this._matchesLimit = e.matchesLimit ?? Number.MAX_SAFE_INTEGER, this._findInput = this._register(new a7t(null, t, {
            label: _Wh,
            placeholder: bWh,
            validation: (a)=>{
                if (a.length === 0 || !this._findInput.getRegex()) return null;
                try {
                    return new RegExp(a), null;
                } catch (c) {
                    return this._foundMatch = !1, this.updateButtons(this._foundMatch), {
                        content: c.message
                    };
                }
            },
            showCommonFindToggles: e.showCommonFindToggles,
            appendCaseSensitiveLabel: e.appendCaseSensitiveActionId ? this._getKeybinding(e.appendCaseSensitiveActionId) : void 0,
            appendRegexLabel: e.appendRegexActionId ? this._getKeybinding(e.appendRegexActionId) : void 0,
            appendWholeWordsLabel: e.appendWholeWordsActionId ? this._getKeybinding(e.appendWholeWordsActionId) : void 0,
            showHistoryHint: ()=>lQe(r),
            inputBoxStyles: nN,
            toggleStyles: z7
        }, n)), this._updateHistoryDelayer = this._register(new xg(500)), this._register(this._findInput.onInput(async (a)=>{
            (!e.checkImeCompletionState || !this._findInput.isImeSessionInProgress) && (this._foundMatch = this._onInputChanged(), e.showResultCount && await this.updateResultCount(), this.updateButtons(this._foundMatch), this.focusFindBox(), this._delayedUpdateHistory());
        })), this._findInput.setRegex(!!this.state.isRegex), this._findInput.setCaseSensitive(!!this.state.matchCase), this._findInput.setWholeWords(!!this.state.wholeWord), this._register(this._findInput.onDidOptionChange(()=>{
            this.state.change({
                isRegex: this._findInput.getRegex(),
                wholeWord: this._findInput.getWholeWords(),
                matchCase: this._findInput.getCaseSensitive()
            }, !0);
        })), this._register(this.state.onFindReplaceStateChange(()=>{
            this._findInput.setRegex(this.state.isRegex), this._findInput.setWholeWords(this.state.wholeWord), this._findInput.setCaseSensitive(this.state.matchCase), this.findFirst();
        })), this.prevBtn = this._register(new oX({
            label: yWh + (e.previousMatchActionId ? this._getKeybinding(e.previousMatchActionId) : ""),
            icon: Q9i,
            onTrigger: ()=>{
                this.find(!0);
            }
        }, i)), this.nextBtn = this._register(new oX({
            label: SWh + (e.nextMatchActionId ? this._getKeybinding(e.nextMatchActionId) : ""),
            icon: J9i,
            onTrigger: ()=>{
                this.find(!1);
            }
        }, i));
        const s = this._register(new oX({
            label: kWh + (e.closeWidgetActionId ? this._getKeybinding(e.closeWidgetActionId) : ""),
            icon: m5e,
            onTrigger: ()=>{
                this.hide();
            }
        }, i));
        this._innerDomNode = document.createElement("div"), this._innerDomNode.classList.add("simple-find-part"), this._innerDomNode.appendChild(this._findInput.domNode), this._innerDomNode.appendChild(this.prevBtn.domNode), this._innerDomNode.appendChild(this.nextBtn.domNode), this._innerDomNode.appendChild(s.domNode), this._domNode = document.createElement("div"), this._domNode.classList.add("simple-find-part-wrapper"), this._domNode.appendChild(this._innerDomNode), this.onkeyup(this._innerDomNode, (a)=>{
            if (a.equals(fe.Escape)) {
                this.hide(), a.preventDefault();
                return;
            }
        }), this._focusTracker = this._register(rw(this._innerDomNode)), this._register(this._focusTracker.onDidFocus(this._onFocusTrackerFocus.bind(this))), this._register(this._focusTracker.onDidBlur(this._onFocusTrackerBlur.bind(this))), this._findInputFocusTracker = this._register(rw(this._findInput.domNode)), this._register(this._findInputFocusTracker.onDidFocus(this._onFindInputFocusTrackerFocus.bind(this))), this._register(this._findInputFocusTracker.onDidBlur(this._onFindInputFocusTrackerBlur.bind(this))), this._register(Xt(this._innerDomNode, "click", (a)=>{
            a.stopPropagation();
        })), e?.showResultCount && (this._domNode.classList.add("result-count"), this._matchesCount = document.createElement("div"), this._matchesCount.className = "matchesCount", this._findInput.domNode.insertAdjacentElement("afterend", this._matchesCount), this._register(this._findInput.onDidChange(async ()=>{
            await this.updateResultCount();
        })), this._register(this._findInput.onDidOptionChange(async ()=>{
            this._foundMatch = this._onInputChanged(), await this.updateResultCount(), this.focusFindBox(), this._delayedUpdateHistory();
        })));
        let o = e?.initialWidth;
        if (o && (o = o < k9n ? k9n : o, this._domNode.style.width = `${o}px`), e?.enableSash) {
            const a = o ?? k9n;
            let c = a;
            const l = this._register(new Xge(this._innerDomNode, this, {
                orientation: xp.VERTICAL,
                size: 1
            }));
            this._register(l.onDidStart(()=>{
                c = parseFloat(Bht(this._domNode).width);
            })), this._register(l.onDidChange((u)=>{
                const h = c + u.startX - u.currentX;
                h < a || (this._domNode.style.width = `${h}px`);
            })), this._register(l.onDidReset((u)=>{
                parseFloat(Bht(this._domNode).width) === a ? this._domNode.style.width = "100%" : this._domNode.style.width = `${a}px`;
            }));
        }
    }
    getVerticalSashLeft(e) {
        return 0;
    }
    get inputValue() {
        return this._findInput.getValue();
    }
    get focusTracker() {
        return this._focusTracker;
    }
    _getKeybinding(e) {
        const t = this._keybindingService?.lookupKeybinding(e);
        return t ? ` (${t.getLabel()})` : "";
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
    reveal(e, t = !0) {
        if (e && this._findInput.setValue(e), this._isVisible) {
            this._findInput.select();
            return;
        }
        this._isVisible = !0, this.updateResultCount(), this.layout(), setTimeout(()=>{
            this._innerDomNode.classList.toggle("suppress-transition", !t), this._innerDomNode.classList.add("visible", "visible-transition"), this._innerDomNode.setAttribute("aria-hidden", "false"), this._findInput.select(), t || setTimeout(()=>{
                this._innerDomNode.classList.remove("suppress-transition");
            }, 0);
        }, 0);
    }
    show(e) {
        e && !this._isVisible && this._findInput.setValue(e), this._isVisible = !0, this.layout(), setTimeout(()=>{
            this._innerDomNode.classList.add("visible", "visible-transition"), this._innerDomNode.setAttribute("aria-hidden", "false");
        }, 0);
    }
    hide(e = !0) {
        this._isVisible && (this._innerDomNode.classList.toggle("suppress-transition", !e), this._innerDomNode.classList.remove("visible-transition"), this._innerDomNode.setAttribute("aria-hidden", "true"), setTimeout(()=>{
            this._isVisible = !1, this.updateButtons(this._foundMatch), this._innerDomNode.classList.remove("visible", "suppress-transition");
        }, e ? 200 : 0));
    }
    layout(e = this._width) {
        if (this._width = e, !!this._isVisible && this._matchesCount) {
            let t = !1;
            k9n + wWh + 28 >= e && (t = !0), this._innerDomNode.classList.toggle("reduced-find-widget", t);
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
    updateButtons(e) {
        const t = this.inputValue.length > 0;
        this.prevBtn.setEnabled(this._isVisible && t && e), this.nextBtn.setEnabled(this._isVisible && t && e);
    }
    focusFindBox() {
        this.nextBtn.focus(), this._findInput.inputBox.focus();
    }
    async updateResultCount() {
        if (!this._matchesCount) {
            this.updateButtons(this._foundMatch);
            return;
        }
        const e = await this._getResultCount(), t = this.inputValue.length > 0 && e?.resultCount === 0;
        this._matchesCount.classList.toggle("no-results", t);
        let n = "";
        if (e?.resultCount) {
            let i = String(e.resultCount);
            e.resultCount >= this._matchesLimit && (i += "+");
            let r = String(e.resultIndex + 1);
            r === "0" && (r = "?"), n = wO(e6i, r, i);
        } else n = ayt;
        yI(this._announceSearchResults(n, this.inputValue)), this._matchesCount.textContent !== n && (this._matchesCount.textContent = "", this._matchesCount.appendChild(document.createTextNode(n))), this._foundMatch = !!e && e.resultCount > 0, this.updateButtons(this._foundMatch);
    }
    changeState(e) {
        this.state.change(e, !1);
    }
    _announceSearchResults(e, t) {
        return t ? e === ayt ? t === "" ? S(4965, null, e) : S(4966, null, e, t) : S(4967, null, e, t) : S(4964, null);
    }
}, CWh = Lt("simpleFindWidget.sashBorder", {
    dark: "#454545",
    light: "#C8C8C8",
    hcDark: "#6FC3DF",
    hcLight: "#0F4A85"
}, S(4968, null)), kI((e, t)=>{
    const n = e.getColor(CWh);
    t.addRule(`.monaco-workbench .simple-find-part .monaco-sash { background-color: ${n}; border-color: ${n} }`);
});

}
