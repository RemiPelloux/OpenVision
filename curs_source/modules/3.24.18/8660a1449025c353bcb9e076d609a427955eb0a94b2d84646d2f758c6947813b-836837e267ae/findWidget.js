import { D, Di, Ei, Fa, Gt, I0, Md, Pn, Qe, _r, a_, rY, tt, xa, xr } from "./Iwo.js";
import { $3, Hkr } from "./aria.js";
import { II, qn } from "./async.js";
import { Ad } from "./baseColors.js";
import { gs, yt } from "./codicons.js";
import { Ap } from "./colorRegistry.js";
import { CM, rRe, yHe } from "./defaultStyles.js";
import { Hn, ws } from "./dom_2.js";
import { D6d, N6d, O6d, Rtt } from "./editorColors.js";
import { $Ht, OC, Zwt, gWr, wst } from "./findModel.js";
import { WI1 } from "./findWidget.css";
import { yWr } from "./historyWidgetKeybindingHint.js";
import { b_, yTr } from "./iconRegistry.js";
import { $gn, Hgn, q9t } from "./inputColors.js";
import { XPp, ZPp, ayi, bWr, oyi, syi } from "./ipa.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Bt } from "./nls.js";
import { Qs, qt } from "./range.js";
import { Gn, ta } from "./themables.js";
import { LI } from "./theme.js";
import { Dl } from "./themeService.js";
import { M5e, che } from "./toggle.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { CY, k4 } from "./widget.js";
import { $Ae, Dj, Ex, I5e, Mj, P_, S9t, Xa, c2, fHe, j3, k9t, kwe, nne, qa, sR } from "./ze.js";
var m3a, g3a, QPp, JPp, eMp, f3a, v3a, tMp, nMp, iMp, rMp, sMp, oMp, aMp, lMp, cMp, uMp, dMp, hMp, pMp, _3a, lyi, x6e, mMp, gMp, X0n, fMp, b3a, y3a, SWr, S3a, vMp, qGe;
export { JPp, QPp, S3a, SWr, X0n, _3a, aMp, b3a, cMp, dMp, eMp, f3a, fMp, g3a, gMp, hMp, iMp, lMp, lyi, m3a, mMp, nMp, oMp, pMp, qGe, rMp, sMp, tMp, uMp, v3a, vMp, x6e, y3a };
var __wakaru__Mp_initialized = false;
export function _Mp() {
if (__wakaru__Mp_initialized) return;
__wakaru__Mp_initialized = true;
"use strict";
E(), Hn(), $3(), M5e(), kwe(), CY(), qn(), gs(), Ei(), Gt(), Ma(), Qe(), Di(), Fa(), WI1(), Qs(), Zwt(), Bt(), oyi(), yWr(), Ap(), b_(), Dl(), ta(), LI(), To(), CM(), sR(), m3a = qa("find-collapsed", yt.chevronRight, D(1092, null)), g3a = qa("find-expanded", yt.chevronDown, D(1093, null)), QPp = qa("find-selection", yt.selection, D(1094, null)), JPp = qa("find-replace", yt.replace, D(1095, null)), eMp = qa("find-replace-all", yt.replaceAll, D(1096, null)), f3a = qa("find-previous-match", yt.arrowUp, D(1097, null)), v3a = qa("find-next-match", yt.arrowDown, D(1098, null)), tMp = D(1099, null), nMp = D(1100, null), iMp = D(1101, null), rMp = D(1102, null), sMp = D(1103, null), oMp = D(1104, null), aMp = D(1105, null), lMp = D(1106, null), cMp = D(1107, null), uMp = D(1108, null), dMp = D(1109, null), hMp = D(1110, null), pMp = D(1111, null, wst), _3a = D(1112, null), lyi = D(1113, null), x6e = 419, mMp = 275, gMp = mMp - 54, X0n = 69, fMp = 33, b3a = "ctrlEnterReplaceAll.windows.donotask", y3a = _r ? ut.WinCtrl : ut.CtrlCmd, SWr = class {
    constructor(t){
        this.afterLineNumber = t, this.heightInPx = fMp, this.suppressMouseDown = !1, this.domNode = document.createElement("div"), this.domNode.className = "dock-find-viewzone";
    }
}, S3a = class D2b extends k4 {
    constructor(e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this._hoverService = u, this._findWidgetSearchHistory = d, this._replaceWidgetHistory = h, this._cachedHeight = null, this._onDidChangeHeight = this._register(new tt), this.onDidChangeHeight = this._onDidChangeHeight.event, this._revealTimeouts = [], this._codeEditor = e, this._controller = n, this._state = i, this._contextViewProvider = r, this._keybindingService = s, this._contextKeyService = o, this._storageService = l, this._notificationService = c, this._ctrlEnterReplaceAllWarningPrompted = !!l.getBoolean(b3a, 0), this._isVisible = !1, this._isReplaceVisible = !1, this._ignoreChangeEvent = !1, this._updateHistoryDelayer = new II(500), this._register(Pn(()=>this._updateHistoryDelayer.cancel())), this._register(this._state.onFindReplaceStateChange((p)=>this._onStateChanged(p))), this._buildDomNode(), this._updateButtons(), this._tryUpdateWidgetWidth(), this._findInput.inputBox.layout(), this._register(this._codeEditor.onDidChangeConfiguration((p)=>{
            if (p.hasChanged(96) && (this._codeEditor.getOption(96) && this._state.change({
                isReplaceRevealed: !1
            }, !1), this._updateButtons()), p.hasChanged(151) && this._tryUpdateWidgetWidth(), p.hasChanged(2) && this.updateAccessibilitySupport(), p.hasChanged(43)) {
                const g = this._codeEditor.getOption(43).loop;
                this._state.change({
                    loop: g
                }, !1);
                const f = this._codeEditor.getOption(43).addExtraSpaceOnTop;
                f && !this._viewZone && (this._viewZone = new SWr(0), this._showViewZone()), !f && this._viewZone && this._removeViewZone();
            }
        })), this.updateAccessibilitySupport(), this._register(this._codeEditor.onDidChangeCursorSelection(()=>{
            this._isVisible && this._updateToggleSelectionFindButton();
        })), this._register(this._codeEditor.onDidFocusEditorWidget(async ()=>{
            if (this._isVisible) {
                const p = await this._controller.getGlobalBufferTerm();
                p && p !== this._state.searchString && (this._state.change({
                    searchString: p
                }, !1), this._findInput.select());
            }
        })), this._findInputFocused = $Ht.bindTo(o), this._findFocusTracker = this._register(j3(this._findInput.inputBox.inputElement)), this._register(this._findFocusTracker.onDidFocus(()=>{
            this._findInputFocused.set(!0), this._updateSearchScope();
        })), this._register(this._findFocusTracker.onDidBlur(()=>{
            this._findInputFocused.set(!1);
        })), this._replaceInputFocused = gWr.bindTo(o), this._replaceFocusTracker = this._register(j3(this._replaceInput.inputBox.inputElement)), this._register(this._replaceFocusTracker.onDidFocus(()=>{
            this._replaceInputFocused.set(!0), this._updateSearchScope();
        })), this._register(this._replaceFocusTracker.onDidBlur(()=>{
            this._replaceInputFocused.set(!1);
        })), this._codeEditor.addOverlayWidget(this), this._codeEditor.getOption(43).addExtraSpaceOnTop && (this._viewZone = new SWr(0)), this._register(this._codeEditor.onDidChangeModel(()=>{
            this._isVisible && (this._viewZoneId = void 0);
        })), this._register(this._codeEditor.onDidScrollChange((p)=>{
            if (p.scrollTopChanged) {
                this._layoutViewZone();
                return;
            }
            setTimeout(()=>{
                this._layoutViewZone();
            }, 0);
        }));
    }
    getId() {
        return D2b.ID;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._isVisible ? {
            preference: 0
        } : null;
    }
    _onStateChanged(e) {
        if (e.searchString) {
            try {
                this._ignoreChangeEvent = !0, this._findInput.setValue(this._state.searchString);
            } finally{
                this._ignoreChangeEvent = !1;
            }
            this._updateButtons();
        }
        if (e.replaceString && (this._replaceInput.inputBox.value = this._state.replaceString), e.isRevealed && (this._state.isRevealed ? this._reveal() : this._hide(!0)), e.isReplaceRevealed && (this._state.isReplaceRevealed ? !this._codeEditor.getOption(96) && !this._isReplaceVisible && (this._isReplaceVisible = !0, this._replaceInput.width = Mj(this._findInput.domNode), this._updateButtons(), this._replaceInput.inputBox.layout()) : this._isReplaceVisible && (this._isReplaceVisible = !1, this._updateButtons())), (e.isRevealed || e.isReplaceRevealed) && (this._state.isRevealed || this._state.isReplaceRevealed) && this._tryUpdateHeight() && this._showViewZone(), e.isRegex && this._findInput.setRegex(this._state.isRegex), e.wholeWord && this._findInput.setWholeWords(this._state.wholeWord), e.matchCase && this._findInput.setCaseSensitive(this._state.matchCase), e.preserveCase && this._replaceInput.setPreserveCase(this._state.preserveCase), e.searchScope && (this._state.searchScope ? this._toggleSelectionFind.checked = !0 : this._toggleSelectionFind.checked = !1, this._updateToggleSelectionFindButton()), e.searchString || e.matchesCount || e.matchesPosition) {
            const n = this._state.searchString.length > 0 && this._state.matchesCount === 0;
            this._domNode.classList.toggle("no-results", n), this._updateMatchesCount(), this._updateButtons();
        }
        (e.searchString || e.currentMatch) && this._layoutViewZone(), e.updateHistory && this._delayedUpdateHistory(), e.loop && this._updateButtons();
    }
    _delayedUpdateHistory() {
        this._updateHistoryDelayer.trigger(this._updateHistory.bind(this)).then(void 0, xr);
    }
    _updateHistory() {
        this._state.searchString && this._findInput.inputBox.addToHistory(), this._state.replaceString && this._replaceInput.inputBox.addToHistory();
    }
    _updateMatchesCount() {
        this._matchesCount.style.minWidth = X0n + "px", this._state.matchesCount >= wst ? this._matchesCount.title = pMp : this._matchesCount.title = "";
        let e;
        if (this._state.matchesCount > 0) {
            let n = String(this._state.matchesCount);
            this._state.matchesCount >= wst && (n += "+");
            let i = String(this._state.matchesPosition);
            i === "0" && (i = "?"), e = rY(_3a, i, n);
        } else e = lyi;
        this._matchesCount.textContent !== e && (this._matchesCount.firstChild?.remove(), this._matchesCount.appendChild(document.createTextNode(e))), Dj(this._getAriaLabel(e, this._state.currentMatch, this._state.searchString)), X0n = Math.max(X0n, this._matchesCount.clientWidth);
    }
    _getAriaLabel(e, n, i) {
        if (e === lyi) return i === "" ? D(1114, null, e) : D(1115, null, e, i);
        if (n) {
            const r = D(1116, null, e, i, n.startLineNumber + ":" + n.startColumn), s = this._codeEditor.getModel();
            if (s && n.startLineNumber <= s.getLineCount() && n.startLineNumber >= 1) {
                const o = Math.min(s.getLineMaxColumn(n.startLineNumber), Hkr + 1);
                return `${s.getValueInRange(new qt(n.startLineNumber, 1, n.startLineNumber, o))}, ${r}`;
            }
            return r;
        }
        return D(1117, null, e, i);
    }
    _updateToggleSelectionFindButton() {
        const e = this._codeEditor.getSelection(), n = e ? e.startLineNumber !== e.endLineNumber || e.startColumn !== e.endColumn : !1, i = this._toggleSelectionFind.checked;
        this._isVisible && (i || n) ? this._toggleSelectionFind.enable() : this._toggleSelectionFind.disable();
    }
    _updateButtons() {
        this._findInput.setEnabled(this._isVisible), this._replaceInput.setEnabled(this._isVisible && this._isReplaceVisible), this._updateToggleSelectionFindButton(), this._closeBtn.setEnabled(this._isVisible);
        const e = this._state.searchString.length > 0, n = !!this._state.matchesCount;
        this._prevBtn.setEnabled(this._isVisible && e && n && this._state.canNavigateBack()), this._nextBtn.setEnabled(this._isVisible && e && n && this._state.canNavigateForward()), this._replaceBtn.setEnabled(this._isVisible && this._isReplaceVisible && e), this._replaceAllBtn.setEnabled(this._isVisible && this._isReplaceVisible && e), this._domNode.classList.toggle("replaceToggled", this._isReplaceVisible), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible);
        const i = !this._codeEditor.getOption(96);
        this._toggleReplaceBtn.setEnabled(this._isVisible && i);
    }
    _reveal() {
        if (this._revealTimeouts.forEach((e)=>{
            clearTimeout(e);
        }), this._revealTimeouts = [], !this._isVisible) {
            this._isVisible = !0;
            const e = this._codeEditor.getSelection();
            switch(this._codeEditor.getOption(43).autoFindInSelection){
                case "always":
                    this._toggleSelectionFind.checked = !0;
                    break;
                case "never":
                    this._toggleSelectionFind.checked = !1;
                    break;
                case "multiline":
                    {
                        const i = !!e && e.startLineNumber !== e.endLineNumber;
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
            if (this._codeEditor.getOption(43).seedSearchStringFromSelection && e) {
                const i = this._codeEditor.getDomNode();
                if (i) {
                    const r = Ex(i), s = this._codeEditor.getScrolledVisiblePosition(e.getStartPosition()), o = r.left + (s ? s.left : 0), a = s ? s.top : 0;
                    if (this._viewZone && a < this._viewZone.heightInPx) {
                        e.endLineNumber > e.startLineNumber && (n = !1);
                        const l = k9t(this._domNode).left;
                        o > l && (n = !1);
                        const c = this._codeEditor.getScrolledVisiblePosition(e.getEndPosition());
                        r.left + (c ? c.left : 0) > l && (n = !1);
                    }
                }
            }
            this._showViewZone(n);
        }
    }
    _hide(e) {
        this._revealTimeouts.forEach((n)=>{
            clearTimeout(n);
        }), this._revealTimeouts = [], this._isVisible && (this._isVisible = !1, this._updateButtons(), this._domNode.classList.remove("visible"), this._domNode.setAttribute("aria-hidden", "true"), this._findInput.clearMessage(), e && this._codeEditor.focus(), this._codeEditor.layoutOverlayWidget(this), this._removeViewZone());
    }
    _layoutViewZone(e) {
        if (!this._codeEditor.getOption(43).addExtraSpaceOnTop) {
            this._removeViewZone();
            return;
        }
        if (!this._isVisible) return;
        const i = this._viewZone;
        this._viewZoneId !== void 0 || !i || this._codeEditor.changeViewZones((r)=>{
            i.heightInPx = this._getHeight(), this._viewZoneId = r.addZone(i), this._codeEditor.setScrollTop(e || this._codeEditor.getScrollTop() + i.heightInPx);
        });
    }
    _showViewZone(e = !0) {
        if (!this._isVisible || !this._codeEditor.getOption(43).addExtraSpaceOnTop) return;
        this._viewZone === void 0 && (this._viewZone = new SWr(0));
        const i = this._viewZone;
        this._codeEditor.changeViewZones((r)=>{
            if (this._viewZoneId !== void 0) {
                const s = this._getHeight();
                if (s === i.heightInPx) return;
                const o = s - i.heightInPx;
                i.heightInPx = s, r.layoutZone(this._viewZoneId), e && this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + o);
                return;
            } else {
                let s = this._getHeight();
                if (s -= this._codeEditor.getOption(88).top, s <= 0) return;
                i.heightInPx = s, this._viewZoneId = r.addZone(i), e && this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + s);
            }
        });
    }
    _removeViewZone() {
        this._codeEditor.changeViewZones((e)=>{
            this._viewZoneId !== void 0 && (e.removeZone(this._viewZoneId), this._viewZoneId = void 0, this._viewZone && (this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() - this._viewZone.heightInPx), this._viewZone = void 0));
        });
    }
    _tryUpdateWidgetWidth() {
        if (!this._isVisible || !this._domNode.isConnected) return;
        const e = this._codeEditor.getLayoutInfo();
        if (e.contentWidth <= 0) {
            this._domNode.classList.add("hiddenEditor");
            return;
        } else this._domNode.classList.contains("hiddenEditor") && this._domNode.classList.remove("hiddenEditor");
        const i = e.width, r = e.minimap.minimapWidth;
        let s = !1, o = !1, a = !1;
        if (this._resized && Mj(this._domNode) > x6e) {
            this._domNode.style.maxWidth = `${i - 28 - r - 15}px`, this._replaceInput.width = Mj(this._findInput.domNode);
            return;
        }
        if (x6e + 28 + r >= i && (o = !0), x6e + 28 + r - X0n >= i && (a = !0), x6e + 28 + r - X0n >= i + 50 && (s = !0), this._domNode.classList.toggle("collapsed-find-widget", s), this._domNode.classList.toggle("narrow-find-widget", a), this._domNode.classList.toggle("reduced-find-widget", o), !a && !s && (this._domNode.style.maxWidth = `${i - 28 - r - 15}px`), this._findInput.layout({
            collapsedFindWidget: s,
            narrowFindWidget: a,
            reducedFindWidget: o
        }), this._resized) {
            const l = this._findInput.inputBox.element.clientWidth;
            l > 0 && (this._replaceInput.width = l);
        } else this._isReplaceVisible && (this._replaceInput.width = Mj(this._findInput.domNode));
    }
    _getHeight() {
        let e = 0;
        return e += 4, e += this._findInput.inputBox.height + 2, this._isReplaceVisible && (e += 4, e += this._replaceInput.inputBox.height + 2), e += 4, e;
    }
    _tryUpdateHeight() {
        const e = this._getHeight();
        return this._cachedHeight !== null && this._cachedHeight === e ? !1 : (this._cachedHeight = e, this._domNode.style.height = `${e}px`, this._onDidChangeHeight.fire(e), !0);
    }
    focusFindInput() {
        this._findInput.select(), this._findInput.focus();
    }
    focusFindInputWithoutSelecting() {
        this._findInput.focus();
    }
    isActive() {
        return this._domNode.contains(ws(this._domNode).document.activeElement);
    }
    focusReplaceInput() {
        this._replaceInput.select(), this._replaceInput.focus();
    }
    highlightFindOptions() {
        this._findInput.highlightFindOptions();
    }
    _updateSearchScope() {
        if (this._codeEditor.hasModel() && this._toggleSelectionFind.checked) {
            const e = this._codeEditor.getSelections();
            e.map((n)=>{
                n.endColumn === 1 && n.endLineNumber > n.startLineNumber && (n = n.setEndPosition(n.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(n.endLineNumber - 1)));
                const i = this._state.currentMatch;
                return n.startLineNumber !== n.endLineNumber && !qt.equalsRange(n, i) ? n : null;
            }).filter((n)=>!!n), e.length && this._state.change({
                searchScope: e
            }, !0);
        }
    }
    _onFindInputMouseDown(e) {
        e.middleButton && e.stopPropagation();
    }
    _onFindInputKeyDown(e) {
        const n = e.browserEvent.isComposing;
        if (e.equals(Ze.Escape) && !n) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", OC.CloseFindWidgetCommand, null), e.preventDefault();
            return;
        }
        if (e.equals(y3a | Ze.Enter)) if (this._keybindingService.dispatchEvent(e, e.target)) {
            e.preventDefault();
            return;
        } else {
            this._findInput.inputBox.insertAtCursor(`
`), e.preventDefault();
            return;
        }
        if (e.equals(Ze.Tab)) {
            this._isReplaceVisible ? this._replaceInput.focus() : this._findInput.focusOnCaseSensitive(), e.preventDefault();
            return;
        }
        if (e.equals(ut.CtrlCmd | Ze.DownArrow)) {
            this._codeEditor.focus(), e.preventDefault();
            return;
        }
        if (e.equals(Ze.UpArrow)) return XPp(e, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea"));
        if (e.equals(Ze.DownArrow)) return ZPp(e, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea"));
    }
    _onReplaceInputKeyDown(e) {
        const n = e.browserEvent.isComposing;
        if (e.equals(Ze.Escape) && !n) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", OC.CloseFindWidgetCommand, null), e.preventDefault();
            return;
        }
        if (!n && e.equals(Ze.Enter)) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", OC.ReplaceOneAction, null), e.preventDefault();
            return;
        }
        if (!n && _r && e.equals(ut.CtrlCmd | Ze.Enter)) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            this._codeEditor.trigger("findWidget", OC.ReplaceAllAction, null), e.preventDefault();
            return;
        }
        if (e.equals(y3a | Ze.Enter)) if (this._keybindingService.dispatchEvent(e, e.target)) {
            e.preventDefault();
            return;
        } else {
            xa && I0 && !this._ctrlEnterReplaceAllWarningPrompted && (this._notificationService.info(D(1118, null)), this._ctrlEnterReplaceAllWarningPrompted = !0, this._storageService.store(b3a, !0, 0, 0)), this._replaceInput.inputBox.insertAtCursor(`
`), e.preventDefault();
            return;
        }
        if (e.equals(Ze.Tab)) {
            this._findInput.focusOnCaseSensitive(), e.preventDefault();
            return;
        }
        if (e.equals(ut.Shift | Ze.Tab)) {
            this._findInput.focus(), e.preventDefault();
            return;
        }
        if (e.equals(ut.CtrlCmd | Ze.DownArrow)) {
            this._codeEditor.focus(), e.preventDefault();
            return;
        }
        if (e.equals(Ze.UpArrow)) return XPp(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea"));
        if (e.equals(Ze.DownArrow)) return ZPp(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea"));
    }
    getVerticalSashLeft(e) {
        return 0;
    }
    _keybindingLabelFor(e) {
        const n = this._keybindingService.lookupKeybinding(e);
        return n ? ` (${n.getLabel()})` : "";
    }
    _buildDomNode() {
        const i = this._codeEditor.getOption(43).history, r = this._codeEditor.getOption(43).replaceHistory;
        this._findInput = this._register(new syi(null, this._contextViewProvider, {
            width: gMp,
            label: nMp,
            placeholder: iMp,
            appendCaseSensitiveLabel: this._keybindingLabelFor(OC.ToggleCaseSensitiveCommand),
            appendWholeWordsLabel: this._keybindingLabelFor(OC.ToggleWholeWordCommand),
            appendRegexLabel: this._keybindingLabelFor(OC.ToggleRegexCommand),
            validation: (h)=>{
                if (h.length === 0 || !this._findInput.getRegex()) return null;
                try {
                    return new RegExp(h, "gu"), null;
                } catch (p) {
                    return {
                        content: p.message
                    };
                }
            },
            flexibleHeight: !0,
            flexibleWidth: !0,
            flexibleMaxHeight: 118,
            showCommonFindToggles: !0,
            showHistoryHint: ()=>ayi(this._keybindingService),
            inputBoxStyles: rRe,
            toggleStyles: yHe,
            history: i === "workspace" ? this._findWidgetSearchHistory : new Set([])
        }, this._contextKeyService)), this._findInput.setRegex(!!this._state.isRegex), this._findInput.setCaseSensitive(!!this._state.matchCase), this._findInput.setWholeWords(!!this._state.wholeWord), this._register(this._findInput.onKeyDown((h)=>this._onFindInputKeyDown(h))), this._register(this._findInput.inputBox.onDidChange(()=>{
            this._ignoreChangeEvent || this._state.change({
                searchString: this._findInput.getValue()
            }, !0);
        })), this._register(this._findInput.onDidOptionChange(()=>{
            this._state.change({
                isRegex: this._findInput.getRegex(),
                wholeWord: this._findInput.getWholeWords(),
                matchCase: this._findInput.getCaseSensitive()
            }, !0);
        })), this._register(this._findInput.onCaseSensitiveKeyDown((h)=>{
            h.equals(ut.Shift | Ze.Tab) && this._isReplaceVisible && (this._replaceInput.focus(), h.preventDefault());
        })), this._register(this._findInput.onRegexKeyDown((h)=>{
            h.equals(Ze.Tab) && this._isReplaceVisible && (this._replaceInput.focusOnPreserve(), h.preventDefault());
        })), this._register(this._findInput.inputBox.onDidHeightChange((h)=>{
            this._tryUpdateHeight() && this._showViewZone();
        })), a_ && this._register(this._findInput.onMouseDown((h)=>this._onFindInputMouseDown(h))), this._matchesCount = document.createElement("div"), this._matchesCount.className = "matchesCount", this._updateMatchesCount();
        const s = this._register(fHe());
        this._prevBtn = this._register(new qGe({
            label: rMp + this._keybindingLabelFor(OC.PreviousMatchFindAction),
            icon: f3a,
            hoverDelegate: s,
            onTrigger: ()=>{
                Md(this._codeEditor.getAction(OC.PreviousMatchFindAction)).run().then(void 0, xr);
            }
        }, this._hoverService)), this._nextBtn = this._register(new qGe({
            label: sMp + this._keybindingLabelFor(OC.NextMatchFindAction),
            icon: v3a,
            hoverDelegate: s,
            onTrigger: ()=>{
                Md(this._codeEditor.getAction(OC.NextMatchFindAction)).run().then(void 0, xr);
            }
        }, this._hoverService));
        const o = document.createElement("div");
        o.className = "find-part", o.appendChild(this._findInput.domNode);
        const a = document.createElement("div");
        a.className = "find-actions", o.appendChild(a), a.appendChild(this._matchesCount), a.appendChild(this._prevBtn.domNode), a.appendChild(this._nextBtn.domNode), this._toggleSelectionFind = this._register(new che({
            icon: QPp,
            title: oMp + this._keybindingLabelFor(OC.ToggleSearchScopeCommand),
            isChecked: !1,
            hoverDelegate: s,
            inputActiveOptionBackground: Xa(q9t),
            inputActiveOptionBorder: Xa($gn),
            inputActiveOptionForeground: Xa(Hgn)
        })), this._register(this._toggleSelectionFind.onChange(()=>{
            if (this._toggleSelectionFind.checked) {
                if (this._codeEditor.hasModel()) {
                    let h = this._codeEditor.getSelections();
                    h = h.map((p)=>(p.endColumn === 1 && p.endLineNumber > p.startLineNumber && (p = p.setEndPosition(p.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(p.endLineNumber - 1))), p.isEmpty() ? null : p)).filter((p)=>!!p), h.length && this._state.change({
                        searchScope: h
                    }, !0);
                }
            } else this._state.change({
                searchScope: null
            }, !0);
        })), a.appendChild(this._toggleSelectionFind.domNode), this._closeBtn = this._register(new qGe({
            label: aMp + this._keybindingLabelFor(OC.CloseFindWidgetCommand),
            icon: yTr,
            hoverDelegate: s,
            onTrigger: ()=>{
                this._state.change({
                    isRevealed: !1,
                    searchScope: null
                }, !1);
            },
            onKeyDown: (h)=>{
                h.equals(Ze.Tab) && this._isReplaceVisible && (this._replaceBtn.isEnabled() ? this._replaceBtn.focus() : this._codeEditor.focus(), h.preventDefault());
            }
        }, this._hoverService)), this._replaceInput = this._register(new bWr(null, void 0, {
            label: lMp,
            placeholder: cMp,
            appendPreserveCaseLabel: this._keybindingLabelFor(OC.TogglePreserveCaseCommand),
            history: r === "workspace" ? this._replaceWidgetHistory : new Set([]),
            flexibleHeight: !0,
            flexibleWidth: !0,
            flexibleMaxHeight: 118,
            showHistoryHint: ()=>ayi(this._keybindingService),
            inputBoxStyles: rRe,
            toggleStyles: yHe
        }, this._contextKeyService, !0)), this._replaceInput.setPreserveCase(!!this._state.preserveCase), this._register(this._replaceInput.onKeyDown((h)=>this._onReplaceInputKeyDown(h))), this._register(this._replaceInput.inputBox.onDidChange(()=>{
            this._state.change({
                replaceString: this._replaceInput.inputBox.value
            }, !1);
        })), this._register(this._replaceInput.inputBox.onDidHeightChange((h)=>{
            this._isReplaceVisible && this._tryUpdateHeight() && this._showViewZone();
        })), this._register(this._replaceInput.onDidOptionChange(()=>{
            this._state.change({
                preserveCase: this._replaceInput.getPreserveCase()
            }, !0);
        })), this._register(this._replaceInput.onPreserveCaseKeyDown((h)=>{
            h.equals(Ze.Tab) && (this._prevBtn.isEnabled() ? this._prevBtn.focus() : this._nextBtn.isEnabled() ? this._nextBtn.focus() : this._toggleSelectionFind.enabled ? this._toggleSelectionFind.focus() : this._closeBtn.isEnabled() && this._closeBtn.focus(), h.preventDefault());
        }));
        const l = this._register(fHe());
        this._replaceBtn = this._register(new qGe({
            label: uMp + this._keybindingLabelFor(OC.ReplaceOneAction),
            icon: JPp,
            hoverDelegate: l,
            onTrigger: ()=>{
                this._controller.replace();
            },
            onKeyDown: (h)=>{
                h.equals(ut.Shift | Ze.Tab) && (this._closeBtn.focus(), h.preventDefault());
            }
        }, this._hoverService)), this._replaceAllBtn = this._register(new qGe({
            label: dMp + this._keybindingLabelFor(OC.ReplaceAllAction),
            icon: eMp,
            hoverDelegate: l,
            onTrigger: ()=>{
                this._controller.replaceAll();
            }
        }, this._hoverService));
        const c = document.createElement("div");
        c.className = "replace-part", c.appendChild(this._replaceInput.domNode);
        const u = document.createElement("div");
        u.className = "replace-actions", c.appendChild(u), u.appendChild(this._replaceBtn.domNode), u.appendChild(this._replaceAllBtn.domNode), this._toggleReplaceBtn = this._register(new qGe({
            label: hMp,
            className: "codicon toggle left",
            onTrigger: ()=>{
                this._state.change({
                    isReplaceRevealed: !this._isReplaceVisible
                }, !1), this._isReplaceVisible && (this._replaceInput.width = Mj(this._findInput.domNode), this._replaceInput.inputBox.layout()), this._showViewZone();
            }
        }, this._hoverService)), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible), this._domNode = document.createElement("div"), this._domNode.className = "editor-widget find-widget", this._domNode.setAttribute("aria-hidden", "true"), this._domNode.ariaLabel = tMp, this._domNode.role = "dialog", this._domNode.style.width = `${x6e}px`, this._domNode.appendChild(this._toggleReplaceBtn.domNode), this._domNode.appendChild(o), this._domNode.appendChild(this._closeBtn.domNode), this._domNode.appendChild(c), this._resizeSash = this._register(new I5e(this._domNode, this, {
            orientation: P_.VERTICAL,
            size: 2
        })), this._resized = !1;
        let d = x6e;
        this._register(this._resizeSash.onDidStart(()=>{
            d = Mj(this._domNode);
        })), this._register(this._resizeSash.onDidChange((h)=>{
            this._resized = !0;
            const p = d + h.startX - h.currentX;
            if (p < x6e) return;
            const g = parseFloat(S9t(this._domNode).maxWidth) || 0;
            p > g || (this._domNode.style.width = `${p}px`, this._isReplaceVisible && (this._replaceInput.width = Mj(this._findInput.domNode)), this._findInput.inputBox.layout(), this._tryUpdateHeight());
        })), this._register(this._resizeSash.onDidReset(()=>{
            const h = Mj(this._domNode);
            if (h < x6e) return;
            let p = x6e;
            if (!this._resized || h === x6e) {
                const g = this._codeEditor.getLayoutInfo();
                p = g.width - 28 - g.minimap.minimapWidth - 15, this._resized = !0;
            }
            this._domNode.style.width = `${p}px`, this._isReplaceVisible && (this._replaceInput.width = Mj(this._findInput.domNode)), this._findInput.inputBox.layout();
        }));
    }
    updateAccessibilitySupport() {
        const e = this._codeEditor.getOption(2);
        this._findInput.setFocusInputOnOptionClick(e !== 2);
    }
    getViewState() {
        let e = !1;
        return this._viewZone && this._viewZoneId && (e = this._viewZone.heightInPx > this._codeEditor.getScrollTop()), {
            widgetViewZoneVisible: e,
            scrollTop: this._codeEditor.getScrollTop()
        };
    }
    setViewState(e) {
        e && e.widgetViewZoneVisible && this._layoutViewZone(e.scrollTop);
    }
}, S3a.ID = "editor.contrib.findWidget", vMp = S3a, qGe = class extends k4 {
    constructor(t, e){
        super(), this._opts = t;
        let n = "button";
        this._opts.className && (n = n + " " + this._opts.className), this._opts.icon && (n = n + " " + Gn.asClassName(this._opts.icon)), this._domNode = document.createElement("div"), this._domNode.tabIndex = 0, this._domNode.className = n, this._domNode.setAttribute("role", "button"), this._domNode.setAttribute("aria-label", this._opts.label), this._register(e.setupManagedHover(t.hoverDelegate ?? c2("element"), this._domNode, this._opts.label)), this.onclick(this._domNode, (i)=>{
            this._opts.onTrigger(), i.preventDefault();
        }), this.onkeydown(this._domNode, (i)=>{
            if (i.equals(Ze.Space) || i.equals(Ze.Enter)) {
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
    setEnabled(t) {
        this._domNode.classList.toggle("disabled", !t), this._domNode.setAttribute("aria-disabled", String(!t)), this._domNode.tabIndex = t ? 0 : -1;
    }
    setExpanded(t) {
        this._domNode.setAttribute("aria-expanded", String(!!t)), t ? (this._domNode.classList.remove(...Gn.asClassNameArray(m3a)), this._domNode.classList.add(...Gn.asClassNameArray(g3a))) : (this._domNode.classList.remove(...Gn.asClassNameArray(g3a)), this._domNode.classList.add(...Gn.asClassNameArray(m3a)));
    }
}, nne((t, e)=>{
    const n = t.getColor(Rtt);
    n && e.addRule(`.monaco-editor .findMatch { border: 1px ${$Ae(t.type) ? "dotted" : "solid"} ${n}; box-sizing: border-box; }`);
    const i = t.getColor(O6d);
    i && e.addRule(`.monaco-editor .findScope { border: 1px ${$Ae(t.type) ? "dashed" : "solid"} ${i}; }`);
    const r = t.getColor(Ad);
    r && e.addRule(`.monaco-editor .find-widget { border: 1px solid ${r}; }`);
    const s = t.getColor(D6d);
    s && e.addRule(`.monaco-editor .findMatchInline { color: ${s}; }`);
    const o = t.getColor(N6d);
    o && e.addRule(`.monaco-editor .currentFindMatchInline { color: ${o}; }`);
});

}
