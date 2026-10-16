import { A0e, a7t, c7t, lQe, owu, swu } from "./De_3.js";
import { Ai, Oo, Ps, Q_, S, Se, bt, jn, ns, rn, si, tl, ve, vf, wO } from "./HVr.js";
import { Hgi, hS } from "./aria.js";
import { bn, xg } from "./async.js";
import { uc } from "./baseColors.js";
import { Pe, _i } from "./codicons.js";
import { tc } from "./colorRegistry.js";
import { nN, sf, z7 } from "./defaultStyles.js";
import { en, xi } from "./dom_2.js";
import { ABe, DLc, LLc, MLc } from "./editorColors.js";
import { lRn, mMe, n4e, uw, z9i } from "./findModel.js";
import { bcv } from "./findWidget.css";
import { l7t } from "./historyWidgetKeybindingHint.js";
import { dh, m5e } from "./iconRegistry.js";
import { apt, cpt, hze } from "./inputColors.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { rt } from "./nls.js";
import { $f, Bht, Is, LP, Nk, Pi, Uht, VV, Xge, cre, ih, jy, kI, qK, rw, xp } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Ft, Sr } from "./themables.js";
import { x0 } from "./theme.js";
import { as } from "./themeService.js";
import { E3, uU } from "./toggle.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { RO, pR } from "./widget.js";
var eHs, tHs, nHs, iHs, rHs, Q9i, J9i, awu, cwu, lwu, uwu, dwu, hwu, pwu, mwu, gwu, fwu, vwu, _wu, bwu, e6i, ayt, R0e, ywu, Swu, u7t, kwu, sHs, oHs, t6i, aHs, wwu, oX;
export { J9i, Q9i, R0e, Swu, _wu, aHs, awu, ayt, bwu, cwu, dwu, e6i, eHs, fwu, gwu, hwu, iHs, kwu, lwu, mwu, nHs, oHs, oX, pwu, rHs, sHs, t6i, tHs, u7t, uwu, vwu, wwu, ywu };
var __wakaru_n6i_initialized = false;
export function n6i() {
if (__wakaru_n6i_initialized) return;
__wakaru_n6i_initialized = true;
"use strict";
x(), en(), hS(), uU(), qK(), RO(), bn(), _i(), si(), bt(), Pr(), Se(), jn(), Ps(), bcv(), qi(), n4e(), rt(), A0e(), l7t(), tc(), dh(), as(), Sr(), x0(), gr(), sf(), $f(), eHs = Pi("find-collapsed", Pe.chevronRight, S(1092, null)), tHs = Pi("find-expanded", Pe.chevronDown, S(1093, null)), nHs = Pi("find-selection", Pe.selection, S(1094, null)), iHs = Pi("find-replace", Pe.replace, S(1095, null)), rHs = Pi("find-replace-all", Pe.replaceAll, S(1096, null)), Q9i = Pi("find-previous-match", Pe.arrowUp, S(1097, null)), J9i = Pi("find-next-match", Pe.arrowDown, S(1098, null)), awu = S(1099, null), cwu = S(1100, null), lwu = S(1101, null), uwu = S(1102, null), dwu = S(1103, null), hwu = S(1104, null), pwu = S(1105, null), mwu = S(1106, null), gwu = S(1107, null), fwu = S(1108, null), vwu = S(1109, null), _wu = S(1110, null), bwu = S(1111, null, mMe), e6i = S(1112, null), ayt = S(1113, null), R0e = 419, ywu = 275, Swu = ywu - 54, u7t = 69, kwu = 33, sHs = "ctrlEnterReplaceAll.windows.donotask", oHs = Ai ? Ie.WinCtrl : Ie.CtrlCmd, t6i = class {
    constructor(e){
        this.afterLineNumber = e, this.heightInPx = kwu, this.suppressMouseDown = !1, this.domNode = document.createElement("div"), this.domNode.className = "dock-find-viewzone";
    }
}, aHs = class Zwm extends pR {
    constructor(t, n, i, r, s, o, a, c, l, u, h, p){
        super(), this._hoverService = u, this._findWidgetSearchHistory = h, this._replaceWidgetHistory = p, this._cachedHeight = null, this._onDidChangeHeight = this._register(new ve), this.onDidChangeHeight = this._onDidChangeHeight.event, this._revealTimeouts = [], this._codeEditor = t, this._controller = n, this._state = i, this._contextViewProvider = r, this._keybindingService = s, this._contextKeyService = o, this._storageService = c, this._notificationService = l, this._ctrlEnterReplaceAllWarningPrompted = !!c.getBoolean(sHs, 0), this._isVisible = !1, this._isReplaceVisible = !1, this._ignoreChangeEvent = !1, this._updateHistoryDelayer = new xg(500), this._register(rn(()=>this._updateHistoryDelayer.cancel())), this._register(this._state.onFindReplaceStateChange((g)=>this._onStateChanged(g))), this._buildDomNode(), this._updateButtons(), this._tryUpdateWidgetWidth(), this._findInput.inputBox.layout(), this._register(this._codeEditor.onDidChangeConfiguration((g)=>{
            if (g.hasChanged(96) && (this._codeEditor.getOption(96) && this._state.change({
                isReplaceRevealed: !1
            }, !1), this._updateButtons()), g.hasChanged(151) && this._tryUpdateWidgetWidth(), g.hasChanged(2) && this.updateAccessibilitySupport(), g.hasChanged(43)) {
                const f = this._codeEditor.getOption(43).loop;
                this._state.change({
                    loop: f
                }, !1);
                const v = this._codeEditor.getOption(43).addExtraSpaceOnTop;
                v && !this._viewZone && (this._viewZone = new t6i(0), this._showViewZone()), !v && this._viewZone && this._removeViewZone();
            }
        })), this.updateAccessibilitySupport(), this._register(this._codeEditor.onDidChangeCursorSelection(()=>{
            this._isVisible && this._updateToggleSelectionFindButton();
        })), this._register(this._codeEditor.onDidFocusEditorWidget(async ()=>{
            if (this._isVisible) {
                const g = await this._controller.getGlobalBufferTerm();
                g && g !== this._state.searchString && (this._state.change({
                    searchString: g
                }, !1), this._findInput.select());
            }
        })), this._findInputFocused = lRn.bindTo(o), this._findFocusTracker = this._register(rw(this._findInput.inputBox.inputElement)), this._register(this._findFocusTracker.onDidFocus(()=>{
            this._findInputFocused.set(!0), this._updateSearchScope();
        })), this._register(this._findFocusTracker.onDidBlur(()=>{
            this._findInputFocused.set(!1);
        })), this._replaceInputFocused = z9i.bindTo(o), this._replaceFocusTracker = this._register(rw(this._replaceInput.inputBox.inputElement)), this._register(this._replaceFocusTracker.onDidFocus(()=>{
            this._replaceInputFocused.set(!0), this._updateSearchScope();
        })), this._register(this._replaceFocusTracker.onDidBlur(()=>{
            this._replaceInputFocused.set(!1);
        })), this._codeEditor.addOverlayWidget(this), this._codeEditor.getOption(43).addExtraSpaceOnTop && (this._viewZone = new t6i(0)), this._register(this._codeEditor.onDidChangeModel(()=>{
            this._isVisible && (this._viewZoneId = void 0);
        })), this._register(this._codeEditor.onDidScrollChange((g)=>{
            if (g.scrollTopChanged) {
                this._layoutViewZone();
                return;
            }
            setTimeout(()=>{
                this._layoutViewZone();
            }, 0);
        }));
    }
    getId() {
        return Zwm.ID;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._isVisible ? {
            preference: 0
        } : null;
    }
    _onStateChanged(t) {
        if (t.searchString) {
            try {
                this._ignoreChangeEvent = !0, this._findInput.setValue(this._state.searchString);
            } finally{
                this._ignoreChangeEvent = !1;
            }
            this._updateButtons();
        }
        if (t.replaceString && (this._replaceInput.inputBox.value = this._state.replaceString), t.isRevealed && (this._state.isRevealed ? this._reveal() : this._hide(!0)), t.isReplaceRevealed && (this._state.isReplaceRevealed ? !this._codeEditor.getOption(96) && !this._isReplaceVisible && (this._isReplaceVisible = !0, this._replaceInput.width = LP(this._findInput.domNode), this._updateButtons(), this._replaceInput.inputBox.layout()) : this._isReplaceVisible && (this._isReplaceVisible = !1, this._updateButtons())), (t.isRevealed || t.isReplaceRevealed) && (this._state.isRevealed || this._state.isReplaceRevealed) && this._tryUpdateHeight() && this._showViewZone(), t.isRegex && this._findInput.setRegex(this._state.isRegex), t.wholeWord && this._findInput.setWholeWords(this._state.wholeWord), t.matchCase && this._findInput.setCaseSensitive(this._state.matchCase), t.preserveCase && this._replaceInput.setPreserveCase(this._state.preserveCase), t.searchScope && (this._state.searchScope ? this._toggleSelectionFind.checked = !0 : this._toggleSelectionFind.checked = !1, this._updateToggleSelectionFindButton()), t.searchString || t.matchesCount || t.matchesPosition) {
            const n = this._state.searchString.length > 0 && this._state.matchesCount === 0;
            this._domNode.classList.toggle("no-results", n), this._updateMatchesCount(), this._updateButtons();
        }
        (t.searchString || t.currentMatch) && this._layoutViewZone(), t.updateHistory && this._delayedUpdateHistory(), t.loop && this._updateButtons();
    }
    _delayedUpdateHistory() {
        this._updateHistoryDelayer.trigger(this._updateHistory.bind(this)).then(void 0, ns);
    }
    _updateHistory() {
        this._state.searchString && this._findInput.inputBox.addToHistory(), this._state.replaceString && this._replaceInput.inputBox.addToHistory();
    }
    _updateMatchesCount() {
        this._matchesCount.style.minWidth = u7t + "px", this._state.matchesCount >= mMe ? this._matchesCount.title = bwu : this._matchesCount.title = "";
        let t;
        if (this._state.matchesCount > 0) {
            let n = String(this._state.matchesCount);
            this._state.matchesCount >= mMe && (n += "+");
            let i = String(this._state.matchesPosition);
            i === "0" && (i = "?"), t = wO(e6i, i, n);
        } else t = ayt;
        this._matchesCount.textContent !== t && (this._matchesCount.firstChild?.remove(), this._matchesCount.appendChild(document.createTextNode(t))), jy(this._getAriaLabel(t, this._state.currentMatch, this._state.searchString)), u7t = Math.max(u7t, this._matchesCount.clientWidth);
    }
    _getAriaLabel(t, n, i) {
        if (t === ayt) return i === "" ? S(1114, null, t) : S(1115, null, t, i);
        if (n) {
            const r = S(1116, null, t, i, n.startLineNumber + ":" + n.startColumn), s = this._codeEditor.getModel();
            if (s && n.startLineNumber <= s.getLineCount() && n.startLineNumber >= 1) {
                const o = Math.min(s.getLineMaxColumn(n.startLineNumber), Hgi + 1);
                return `${s.getValueInRange(new dt(n.startLineNumber, 1, n.startLineNumber, o))}, ${r}`;
            }
            return r;
        }
        return S(1117, null, t, i);
    }
    _updateToggleSelectionFindButton() {
        const t = this._codeEditor.getSelection(), n = t ? t.startLineNumber !== t.endLineNumber || t.startColumn !== t.endColumn : !1, i = this._toggleSelectionFind.checked;
        this._isVisible && (i || n) ? this._toggleSelectionFind.enable() : this._toggleSelectionFind.disable();
    }
    _updateButtons() {
        this._findInput.setEnabled(this._isVisible), this._replaceInput.setEnabled(this._isVisible && this._isReplaceVisible), this._updateToggleSelectionFindButton(), this._closeBtn.setEnabled(this._isVisible);
        const t = this._state.searchString.length > 0, n = !!this._state.matchesCount;
        this._prevBtn.setEnabled(this._isVisible && t && n && this._state.canNavigateBack()), this._nextBtn.setEnabled(this._isVisible && t && n && this._state.canNavigateForward()), this._replaceBtn.setEnabled(this._isVisible && this._isReplaceVisible && t), this._replaceAllBtn.setEnabled(this._isVisible && this._isReplaceVisible && t), this._domNode.classList.toggle("replaceToggled", this._isReplaceVisible), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible);
        const i = !this._codeEditor.getOption(96);
        this._toggleReplaceBtn.setEnabled(this._isVisible && i);
    }
    _reveal() {
        if (this._revealTimeouts.forEach((t)=>{
            clearTimeout(t);
        }), this._revealTimeouts = [], !this._isVisible) {
            this._isVisible = !0;
            const t = this._codeEditor.getSelection();
            switch(this._codeEditor.getOption(43).autoFindInSelection){
                case "always":
                    this._toggleSelectionFind.checked = !0;
                    break;
                case "never":
                    this._toggleSelectionFind.checked = !1;
                    break;
                case "multiline":
                    {
                        const i = !!t && t.startLineNumber !== t.endLineNumber;
                        this._toggleSelectionFind.checked = i;
                        break;
                    }
                default:
                    break;
            }
            this._tryUpdateWidgetWidth(), this._updateButtons(), this._revealTimeouts.push(setTimeout(()=>{
                this._domNode.classList.add("visible"), this._domNode.setAttribute("aria-hidden", "false");
            }, 0)), this._revealTimeouts.push(setTimeout(()=>{
                this._findInput.validate();
            }, 200)), this._codeEditor.layoutOverlayWidget(this);
            let n = !0;
            if (this._codeEditor.getOption(43).seedSearchStringFromSelection && t) {
                const i = this._codeEditor.getDomNode();
                if (i) {
                    const r = Nk(i), s = this._codeEditor.getScrolledVisiblePosition(t.getStartPosition()), o = r.left + (s ? s.left : 0), a = s ? s.top : 0;
                    if (this._viewZone && a < this._viewZone.heightInPx) {
                        t.endLineNumber > t.startLineNumber && (n = !1);
                        const c = Uht(this._domNode).left;
                        o > c && (n = !1);
                        const l = this._codeEditor.getScrolledVisiblePosition(t.getEndPosition());
                        r.left + (l ? l.left : 0) > c && (n = !1);
                    }
                }
            }
            this._showViewZone(n);
        }
    }
    _hide(t) {
        this._revealTimeouts.forEach((n)=>{
            clearTimeout(n);
        }), this._revealTimeouts = [], this._isVisible && (this._isVisible = !1, this._updateButtons(), this._domNode.classList.remove("visible"), this._domNode.setAttribute("aria-hidden", "true"), this._findInput.clearMessage(), t && this._codeEditor.focus(), this._codeEditor.layoutOverlayWidget(this), this._removeViewZone());
    }
    _layoutViewZone(t) {
        if (!this._codeEditor.getOption(43).addExtraSpaceOnTop) {
            this._removeViewZone();
            return;
        }
        if (!this._isVisible) return;
        const i = this._viewZone;
        this._viewZoneId !== void 0 || !i || this._codeEditor.changeViewZones((r)=>{
            i.heightInPx = this._getHeight(), this._viewZoneId = r.addZone(i), this._codeEditor.setScrollTop(t || this._codeEditor.getScrollTop() + i.heightInPx);
        });
    }
    _showViewZone(t = !0) {
        if (!this._isVisible || !this._codeEditor.getOption(43).addExtraSpaceOnTop) return;
        this._viewZone === void 0 && (this._viewZone = new t6i(0));
        const i = this._viewZone;
        this._codeEditor.changeViewZones((r)=>{
            if (this._viewZoneId !== void 0) {
                const s = this._getHeight();
                if (s === i.heightInPx) return;
                const o = s - i.heightInPx;
                i.heightInPx = s, r.layoutZone(this._viewZoneId), t && this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + o);
                return;
            } else {
                let s = this._getHeight();
                if (s -= this._codeEditor.getOption(88).top, s <= 0) return;
                i.heightInPx = s, this._viewZoneId = r.addZone(i), t && this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + s);
            }
        });
    }
    _removeViewZone() {
        this._codeEditor.changeViewZones((t)=>{
            this._viewZoneId !== void 0 && (t.removeZone(this._viewZoneId), this._viewZoneId = void 0, this._viewZone && (this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() - this._viewZone.heightInPx), this._viewZone = void 0));
        });
    }
    _tryUpdateWidgetWidth() {
        if (!this._isVisible || !this._domNode.isConnected) return;
        const t = this._codeEditor.getLayoutInfo();
        if (t.contentWidth <= 0) {
            this._domNode.classList.add("hiddenEditor");
            return;
        } else this._domNode.classList.contains("hiddenEditor") && this._domNode.classList.remove("hiddenEditor");
        const i = t.width, r = t.minimap.minimapWidth;
        let s = !1, o = !1, a = !1;
        if (this._resized && LP(this._domNode) > R0e) {
            this._domNode.style.maxWidth = `${i - 28 - r - 15}px`, this._replaceInput.width = LP(this._findInput.domNode);
            return;
        }
        if (R0e + 28 + r >= i && (o = !0), R0e + 28 + r - u7t >= i && (a = !0), R0e + 28 + r - u7t >= i + 50 && (s = !0), this._domNode.classList.toggle("collapsed-find-widget", s), this._domNode.classList.toggle("narrow-find-widget", a), this._domNode.classList.toggle("reduced-find-widget", o), !a && !s && (this._domNode.style.maxWidth = `${i - 28 - r - 15}px`), this._findInput.layout({
            collapsedFindWidget: s,
            narrowFindWidget: a,
            reducedFindWidget: o
        }), this._resized) {
            const c = this._findInput.inputBox.element.clientWidth;
            c > 0 && (this._replaceInput.width = c);
        } else this._isReplaceVisible && (this._replaceInput.width = LP(this._findInput.domNode));
    }
    _getHeight() {
        let t = 0;
        return t += 4, t += this._findInput.inputBox.height + 2, this._isReplaceVisible && (t += 4, t += this._replaceInput.inputBox.height + 2), t += 4, t;
    }
    _tryUpdateHeight() {
        const t = this._getHeight();
        return this._cachedHeight !== null && this._cachedHeight === t ? !1 : (this._cachedHeight = t, this._domNode.style.height = `${t}px`, this._onDidChangeHeight.fire(t), !0);
    }
    focusFindInput() {
        this._findInput.select(), this._findInput.focus();
    }
    focusFindInputWithoutSelecting() {
        this._findInput.focus();
    }
    isActive() {
        return this._domNode.contains(xi(this._domNode).document.activeElement);
    }
    focusReplaceInput() {
        this._replaceInput.select(), this._replaceInput.focus();
    }
    highlightFindOptions() {
        this._findInput.highlightFindOptions();
    }
    _updateSearchScope() {
        if (this._codeEditor.hasModel() && this._toggleSelectionFind.checked) {
            const t = this._codeEditor.getSelections();
            t.map((n)=>{
                n.endColumn === 1 && n.endLineNumber > n.startLineNumber && (n = n.setEndPosition(n.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(n.endLineNumber - 1)));
                const i = this._state.currentMatch;
                return n.startLineNumber !== n.endLineNumber && !dt.equalsRange(n, i) ? n : null;
            }).filter((n)=>!!n), t.length && this._state.change({
                searchScope: t
            }, !0);
        }
    }
    _onFindInputMouseDown(t) {
        t.middleButton && t.stopPropagation();
    }
    _onFindInputKeyDown(t) {
        const n = t.browserEvent.isComposing;
        if (t.equals(fe.Escape) && !n) {
            if (this._keybindingService.dispatchEvent(t, t.target)) {
                t.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", uw.CloseFindWidgetCommand, null), t.preventDefault();
            return;
        }
        if (t.equals(oHs | fe.Enter)) if (this._keybindingService.dispatchEvent(t, t.target)) {
            t.preventDefault();
            return;
        } else {
            this._findInput.inputBox.insertAtCursor(`
`), t.preventDefault();
            return;
        }
        if (t.equals(fe.Tab)) {
            this._isReplaceVisible ? this._replaceInput.focus() : this._findInput.focusOnCaseSensitive(), t.preventDefault();
            return;
        }
        if (t.equals(Ie.CtrlCmd | fe.DownArrow)) {
            this._codeEditor.focus(), t.preventDefault();
            return;
        }
        if (t.equals(fe.UpArrow)) return swu(t, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea"));
        if (t.equals(fe.DownArrow)) return owu(t, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea"));
    }
    _onReplaceInputKeyDown(t) {
        const n = t.browserEvent.isComposing;
        if (t.equals(fe.Escape) && !n) {
            if (this._keybindingService.dispatchEvent(t, t.target)) {
                t.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", uw.CloseFindWidgetCommand, null), t.preventDefault();
            return;
        }
        if (!n && t.equals(fe.Enter)) {
            if (this._keybindingService.dispatchEvent(t, t.target)) {
                t.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", uw.ReplaceOneAction, null), t.preventDefault();
            return;
        }
        if (!n && Ai && t.equals(Ie.CtrlCmd | fe.Enter)) {
            if (this._keybindingService.dispatchEvent(t, t.target)) {
                t.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", uw.ReplaceAllAction, null), t.preventDefault();
            return;
        }
        if (t.equals(oHs | fe.Enter)) if (this._keybindingService.dispatchEvent(t, t.target)) {
            t.preventDefault();
            return;
        } else {
            Oo && Q_ && !this._ctrlEnterReplaceAllWarningPrompted && (this._notificationService.info(S(1118, null)), this._ctrlEnterReplaceAllWarningPrompted = !0, this._storageService.store(sHs, !0, 0, 0)), this._replaceInput.inputBox.insertAtCursor(`
`), t.preventDefault();
            return;
        }
        if (t.equals(fe.Tab)) {
            this._findInput.focusOnCaseSensitive(), t.preventDefault();
            return;
        }
        if (t.equals(Ie.Shift | fe.Tab)) {
            this._findInput.focus(), t.preventDefault();
            return;
        }
        if (t.equals(Ie.CtrlCmd | fe.DownArrow)) {
            this._codeEditor.focus(), t.preventDefault();
            return;
        }
        if (t.equals(fe.UpArrow)) return swu(t, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea"));
        if (t.equals(fe.DownArrow)) return owu(t, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea"));
    }
    getVerticalSashLeft(t) {
        return 0;
    }
    _keybindingLabelFor(t) {
        const n = this._keybindingService.lookupKeybinding(t);
        return n ? ` (${n.getLabel()})` : "";
    }
    _buildDomNode() {
        const i = this._codeEditor.getOption(43).history, r = this._codeEditor.getOption(43).replaceHistory;
        this._findInput = this._register(new a7t(null, this._contextViewProvider, {
            width: Swu,
            label: cwu,
            placeholder: lwu,
            appendCaseSensitiveLabel: this._keybindingLabelFor(uw.ToggleCaseSensitiveCommand),
            appendWholeWordsLabel: this._keybindingLabelFor(uw.ToggleWholeWordCommand),
            appendRegexLabel: this._keybindingLabelFor(uw.ToggleRegexCommand),
            validation: (p)=>{
                if (p.length === 0 || !this._findInput.getRegex()) return null;
                try {
                    return new RegExp(p, "gu"), null;
                } catch (g) {
                    return {
                        content: g.message
                    };
                }
            },
            flexibleHeight: !0,
            flexibleWidth: !0,
            flexibleMaxHeight: 118,
            showCommonFindToggles: !0,
            showHistoryHint: ()=>lQe(this._keybindingService),
            inputBoxStyles: nN,
            toggleStyles: z7,
            history: i === "workspace" ? this._findWidgetSearchHistory : new Set([])
        }, this._contextKeyService)), this._findInput.setRegex(!!this._state.isRegex), this._findInput.setCaseSensitive(!!this._state.matchCase), this._findInput.setWholeWords(!!this._state.wholeWord), this._register(this._findInput.onKeyDown((p)=>this._onFindInputKeyDown(p))), this._register(this._findInput.inputBox.onDidChange(()=>{
            this._ignoreChangeEvent || this._state.change({
                searchString: this._findInput.getValue()
            }, !0);
        })), this._register(this._findInput.onDidOptionChange(()=>{
            this._state.change({
                isRegex: this._findInput.getRegex(),
                wholeWord: this._findInput.getWholeWords(),
                matchCase: this._findInput.getCaseSensitive()
            }, !0);
        })), this._register(this._findInput.onCaseSensitiveKeyDown((p)=>{
            p.equals(Ie.Shift | fe.Tab) && this._isReplaceVisible && (this._replaceInput.focus(), p.preventDefault());
        })), this._register(this._findInput.onRegexKeyDown((p)=>{
            p.equals(fe.Tab) && this._isReplaceVisible && (this._replaceInput.focusOnPreserve(), p.preventDefault());
        })), this._register(this._findInput.inputBox.onDidHeightChange((p)=>{
            this._tryUpdateHeight() && this._showViewZone();
        })), vf && this._register(this._findInput.onMouseDown((p)=>this._onFindInputMouseDown(p))), this._matchesCount = document.createElement("div"), this._matchesCount.className = "matchesCount", this._updateMatchesCount();
        const s = this._register(VV());
        this._prevBtn = this._register(new oX({
            label: uwu + this._keybindingLabelFor(uw.PreviousMatchFindAction),
            icon: Q9i,
            hoverDelegate: s,
            onTrigger: ()=>{
                tl(this._codeEditor.getAction(uw.PreviousMatchFindAction)).run().then(void 0, ns);
            }
        }, this._hoverService)), this._nextBtn = this._register(new oX({
            label: dwu + this._keybindingLabelFor(uw.NextMatchFindAction),
            icon: J9i,
            hoverDelegate: s,
            onTrigger: ()=>{
                tl(this._codeEditor.getAction(uw.NextMatchFindAction)).run().then(void 0, ns);
            }
        }, this._hoverService));
        const o = document.createElement("div");
        o.className = "find-part", o.appendChild(this._findInput.domNode);
        const a = document.createElement("div");
        a.className = "find-actions", o.appendChild(a), a.appendChild(this._matchesCount), a.appendChild(this._prevBtn.domNode), a.appendChild(this._nextBtn.domNode), this._toggleSelectionFind = this._register(new E3({
            icon: nHs,
            title: hwu + this._keybindingLabelFor(uw.ToggleSearchScopeCommand),
            isChecked: !1,
            hoverDelegate: s,
            inputActiveOptionBackground: Is(hze),
            inputActiveOptionBorder: Is(apt),
            inputActiveOptionForeground: Is(cpt)
        })), this._register(this._toggleSelectionFind.onChange(()=>{
            if (this._toggleSelectionFind.checked) {
                if (this._codeEditor.hasModel()) {
                    let p = this._codeEditor.getSelections();
                    p = p.map((g)=>(g.endColumn === 1 && g.endLineNumber > g.startLineNumber && (g = g.setEndPosition(g.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(g.endLineNumber - 1))), g.isEmpty() ? null : g)).filter((g)=>!!g), p.length && this._state.change({
                        searchScope: p
                    }, !0);
                }
            } else this._state.change({
                searchScope: null
            }, !0);
        })), a.appendChild(this._toggleSelectionFind.domNode), this._closeBtn = this._register(new oX({
            label: pwu + this._keybindingLabelFor(uw.CloseFindWidgetCommand),
            icon: m5e,
            hoverDelegate: s,
            onTrigger: ()=>{
                this._state.change({
                    isRevealed: !1,
                    searchScope: null
                }, !1);
            },
            onKeyDown: (p)=>{
                p.equals(fe.Tab) && this._isReplaceVisible && (this._replaceBtn.isEnabled() ? this._replaceBtn.focus() : this._codeEditor.focus(), p.preventDefault());
            }
        }, this._hoverService)), this._replaceInput = this._register(new c7t(null, void 0, {
            label: mwu,
            placeholder: gwu,
            appendPreserveCaseLabel: this._keybindingLabelFor(uw.TogglePreserveCaseCommand),
            history: r === "workspace" ? this._replaceWidgetHistory : new Set([]),
            flexibleHeight: !0,
            flexibleWidth: !0,
            flexibleMaxHeight: 118,
            showHistoryHint: ()=>lQe(this._keybindingService),
            inputBoxStyles: nN,
            toggleStyles: z7
        }, this._contextKeyService, !0)), this._replaceInput.setPreserveCase(!!this._state.preserveCase), this._register(this._replaceInput.onKeyDown((p)=>this._onReplaceInputKeyDown(p))), this._register(this._replaceInput.inputBox.onDidChange(()=>{
            this._state.change({
                replaceString: this._replaceInput.inputBox.value
            }, !1);
        })), this._register(this._replaceInput.inputBox.onDidHeightChange((p)=>{
            this._isReplaceVisible && this._tryUpdateHeight() && this._showViewZone();
        })), this._register(this._replaceInput.onDidOptionChange(()=>{
            this._state.change({
                preserveCase: this._replaceInput.getPreserveCase()
            }, !0);
        })), this._register(this._replaceInput.onPreserveCaseKeyDown((p)=>{
            p.equals(fe.Tab) && (this._prevBtn.isEnabled() ? this._prevBtn.focus() : this._nextBtn.isEnabled() ? this._nextBtn.focus() : this._toggleSelectionFind.enabled ? this._toggleSelectionFind.focus() : this._closeBtn.isEnabled() && this._closeBtn.focus(), p.preventDefault());
        }));
        const c = this._register(VV());
        this._replaceBtn = this._register(new oX({
            label: fwu + this._keybindingLabelFor(uw.ReplaceOneAction),
            icon: iHs,
            hoverDelegate: c,
            onTrigger: ()=>{
                this._controller.replace();
            },
            onKeyDown: (p)=>{
                p.equals(Ie.Shift | fe.Tab) && (this._closeBtn.focus(), p.preventDefault());
            }
        }, this._hoverService)), this._replaceAllBtn = this._register(new oX({
            label: vwu + this._keybindingLabelFor(uw.ReplaceAllAction),
            icon: rHs,
            hoverDelegate: c,
            onTrigger: ()=>{
                this._controller.replaceAll();
            }
        }, this._hoverService));
        const l = document.createElement("div");
        l.className = "replace-part", l.appendChild(this._replaceInput.domNode);
        const u = document.createElement("div");
        u.className = "replace-actions", l.appendChild(u), u.appendChild(this._replaceBtn.domNode), u.appendChild(this._replaceAllBtn.domNode), this._toggleReplaceBtn = this._register(new oX({
            label: _wu,
            className: "codicon toggle left",
            onTrigger: ()=>{
                this._state.change({
                    isReplaceRevealed: !this._isReplaceVisible
                }, !1), this._isReplaceVisible && (this._replaceInput.width = LP(this._findInput.domNode), this._replaceInput.inputBox.layout()), this._showViewZone();
            }
        }, this._hoverService)), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible), this._domNode = document.createElement("div"), this._domNode.className = "editor-widget find-widget", this._domNode.setAttribute("aria-hidden", "true"), this._domNode.ariaLabel = awu, this._domNode.role = "dialog", this._domNode.style.width = `${R0e}px`, this._domNode.appendChild(this._toggleReplaceBtn.domNode), this._domNode.appendChild(o), this._domNode.appendChild(this._closeBtn.domNode), this._domNode.appendChild(l), this._resizeSash = this._register(new Xge(this._domNode, this, {
            orientation: xp.VERTICAL,
            size: 2
        })), this._resized = !1;
        let h = R0e;
        this._register(this._resizeSash.onDidStart(()=>{
            h = LP(this._domNode);
        })), this._register(this._resizeSash.onDidChange((p)=>{
            this._resized = !0;
            const g = h + p.startX - p.currentX;
            if (g < R0e) return;
            const f = parseFloat(Bht(this._domNode).maxWidth) || 0;
            g > f || (this._domNode.style.width = `${g}px`, this._isReplaceVisible && (this._replaceInput.width = LP(this._findInput.domNode)), this._findInput.inputBox.layout(), this._tryUpdateHeight());
        })), this._register(this._resizeSash.onDidReset(()=>{
            const p = LP(this._domNode);
            if (p < R0e) return;
            let g = R0e;
            if (!this._resized || p === R0e) {
                const f = this._codeEditor.getLayoutInfo();
                g = f.width - 28 - f.minimap.minimapWidth - 15, this._resized = !0;
            }
            this._domNode.style.width = `${g}px`, this._isReplaceVisible && (this._replaceInput.width = LP(this._findInput.domNode)), this._findInput.inputBox.layout();
        }));
    }
    updateAccessibilitySupport() {
        const t = this._codeEditor.getOption(2);
        this._findInput.setFocusInputOnOptionClick(t !== 2);
    }
    getViewState() {
        let t = !1;
        return this._viewZone && this._viewZoneId && (t = this._viewZone.heightInPx > this._codeEditor.getScrollTop()), {
            widgetViewZoneVisible: t,
            scrollTop: this._codeEditor.getScrollTop()
        };
    }
    setViewState(t) {
        t && t.widgetViewZoneVisible && this._layoutViewZone(t.scrollTop);
    }
}, aHs.ID = "editor.contrib.findWidget", wwu = aHs, oX = class extends pR {
    constructor(e, t){
        super(), this._opts = e;
        let n = "button";
        this._opts.className && (n = n + " " + this._opts.className), this._opts.icon && (n = n + " " + Ft.asClassName(this._opts.icon)), this._domNode = document.createElement("div"), this._domNode.tabIndex = 0, this._domNode.className = n, this._domNode.setAttribute("role", "button"), this._domNode.setAttribute("aria-label", this._opts.label), this._register(t.setupManagedHover(e.hoverDelegate ?? ih("element"), this._domNode, this._opts.label)), this.onclick(this._domNode, (i)=>{
            this._opts.onTrigger(), i.preventDefault();
        }), this.onkeydown(this._domNode, (i)=>{
            if (i.equals(fe.Space) || i.equals(fe.Enter)) {
                this._opts.onTrigger(), i.preventDefault();
                return;
            }
            this._opts.onKeyDown?.(i);
        });
    }
    get domNode() {
        return this._domNode;
    }
    isEnabled() {
        return this._domNode.tabIndex >= 0;
    }
    focus() {
        this._domNode.focus();
    }
    setEnabled(e) {
        this._domNode.classList.toggle("disabled", !e), this._domNode.setAttribute("aria-disabled", String(!e)), this._domNode.tabIndex = e ? 0 : -1;
    }
    setExpanded(e) {
        this._domNode.setAttribute("aria-expanded", String(!!e)), e ? (this._domNode.classList.remove(...Ft.asClassNameArray(eHs)), this._domNode.classList.add(...Ft.asClassNameArray(tHs))) : (this._domNode.classList.remove(...Ft.asClassNameArray(tHs)), this._domNode.classList.add(...Ft.asClassNameArray(eHs)));
    }
}, kI((e, t)=>{
    const n = e.getColor(ABe);
    n && t.addRule(`.monaco-editor .findMatch { border: 1px ${cre(e.type) ? "dotted" : "solid"} ${n}; box-sizing: border-box; }`);
    const i = e.getColor(LLc);
    i && t.addRule(`.monaco-editor .findScope { border: 1px ${cre(e.type) ? "dashed" : "solid"} ${i}; }`);
    const r = e.getColor(uc);
    r && t.addRule(`.monaco-editor .find-widget { border: 1px solid ${r}; }`);
    const s = e.getColor(DLc);
    s && t.addRule(`.monaco-editor .findMatchInline { color: ${s}; }`);
    const o = e.getColor(MLc);
    o && t.addRule(`.monaco-editor .currentFindMatchInline { color: ${o}; }`);
});

}
