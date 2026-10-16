import { D, Gt, Nt, Qe, Vn, st, tt } from "./Iwo.js";
import { Bvl, lhs, mPg } from "./Ycg.js";
import { Nb, l2, xx } from "./accessibilitySignalService.js";
import { bb, hf } from "./clipboardService.js";
import { Ap } from "./colorRegistry.js";
import { Sv } from "./composerMessageStorageService.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { TDk, shs } from "./decorationAddon.js";
import { SM } from "./decorators.js";
import { Hn, Pr, Ukr, ws } from "./dom_2.js";
import { It, dn } from "./instantiation.js";
import { UD, UI } from "./layoutService.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Ji } from "./log.js";
import { EDk, ahs } from "./markNavigationAddon.js";
import { B9t, U9t, j9t } from "./miscColors.js";
import { _tt, i2 } from "./mouseEvent.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { cp } from "./objects.js";
import { E7, Ifn } from "./scrollableElement.js";
import { Q0 } from "./sentry.js";
import { uPg, wDk } from "./shellIntegrationAddon.js";
import { Mv, NJ } from "./terminal.js";
import { BRg, FRg, GRg, KRg, Lds, QJ, URg, VRg, XEt, YRg, _vl, bvl, jRg, qRg, v2n, zRg } from "./terminalColorRegistry.js";
import { QI, ns } from "./terminalContextKey.js";
import { UC, Z4 } from "./terminal_2.js";
import { Dl, Ml } from "./themeService.js";
import { I2, dlt } from "./theme_2.js";
import { ehe, uwe } from "./tooltipService.js";
import { E } from "./tslib.es6.js";
import { Z_, fS } from "./uiOverlayService.js";
import { F, Re } from "./userDataProfile.js";
import { Fvl, pPg } from "./xtermAddonImporter.js";
import { MQ, Rp, li, rl, soe } from "./ze.js";
var Uvl, jvl, L9e;
export { L9e, Uvl, jvl };
var __wakaru_gPg_initialized = false;
export function gPg() {
if (__wakaru_gPg_initialized) return;
__wakaru_gPg_initialized = true;
"use strict";
E(), Hn(), i2(), E7(), SM(), Gt(), Qe(), cp(), Bt(), l2(), bb(), or(), Hi(), It(), UD(), Ji(), Ks(), UC(), wDk(), Ap(), Dl(), uwe(), I2(), zp(), fS(), Q0(), XEt(), QI(), Mv(), TDk(), EDk(), pPg(), Uvl = 1e5, jvl = !1, L9e = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f){
        super(), this._onDidExecuteText = n, this._configurationService = i, this._instantiationService = r, this._logService = s, this._notificationService = o, this._themeService = a, this._terminalConfigurationService = l, this._clipboardService = c, this._accessibilitySignalService = d, this._tooltipService = h, this._uiOverlayService = p, this._attachHiddenDecorationValues = new Map, this._isPhysicalMouseWheel = Ifn.INSTANCE.isPhysicalMouseWheel(), this._progressState = {
            state: 0,
            value: 0
        }, this._webglAddonCustomGlyphs = !1, this._ligaturesAddon = this._register(new Vn), this._attachedDisposables = this._register(new Nt), this._onDidRequestRunCommand = this._register(new tt), this.onDidRequestRunCommand = this._onDidRequestRunCommand.event, this._onDidRequestCopyAsHtml = this._register(new tt), this.onDidRequestCopyAsHtml = this._onDidRequestCopyAsHtml.event, this._onDidRequestRefreshDimensions = this._register(new tt), this.onDidRequestRefreshDimensions = this._onDidRequestRefreshDimensions.event, this._onDidChangeFindResults = this._register(new tt), this.onDidChangeFindResults = this._onDidChangeFindResults.event, this._onDidChangeSelection = this._register(new tt), this.onDidChangeSelection = this._onDidChangeSelection.event, this._onDidChangeFocus = this._register(new tt), this.onDidChangeFocus = this._onDidChangeFocus.event, this._onDidDispose = this._register(new tt), this.onDidDispose = this._onDidDispose.event, this._onDidChangeProgress = this._register(new tt), this.onDidChangeProgress = this._onDidChangeProgress.event, this._xtermAddonLoader = e.xtermAddonImporter ?? new Fvl, this._xtermColorProvider = e.xtermColorProvider, this._capabilities = e.capabilities, this._terminalUri = e.terminalUri;
        const _ = this._terminalConfigurationService.getFont(rl(), void 0, !0), b = this._terminalConfigurationService.config, y = this._configurationService.getValue("editor");
        this._reportHighScrollbackIfNeeded(b.scrollback), this.raw = this._register(new t({
            allowProposedApi: !0,
            cols: e.cols,
            rows: e.rows,
            documentOverride: f.mainContainer.ownerDocument,
            altClickMovesCursor: b.altClickMovesCursor && y.multiCursorModifier === "alt",
            scrollback: b.scrollback,
            theme: this.getXtermTheme(),
            drawBoldTextInBrightColors: b.drawBoldTextInBrightColors,
            fontFamily: _.fontFamily,
            fontWeight: b.fontWeight,
            fontWeightBold: b.fontWeightBold,
            fontSize: _.fontSize,
            letterSpacing: _.letterSpacing,
            lineHeight: _.lineHeight,
            logLevel: mPg(this._logService.getLevel()),
            logger: this._logService,
            minimumContrastRatio: b.minimumContrastRatio,
            tabStopWidth: b.tabStopWidth,
            cursorBlink: b.cursorBlinking,
            blinkIntervalDuration: b.textBlinking ? 600 : 0,
            cursorStyle: lhs(b.cursorStyle),
            cursorInactiveStyle: lhs(b.cursorStyleInactive),
            cursorWidth: b.cursorWidth,
            macOptionIsMeta: b.macOptionIsMeta,
            macOptionClickForcesSelection: b.macOptionClickForcesSelection,
            mouseEventsRequireAlt: this._terminalConfigurationService.mouseEventsRequireAlt,
            rightClickSelectsWord: b.rightClickBehavior === "selectWord",
            fastScrollSensitivity: b.fastScrollSensitivity,
            scrollSensitivity: b.mouseWheelScrollSensitivity,
            scrollOnEraseInDisplay: !0,
            wordSeparator: b.wordSeparators,
            scrollbar: e.disableOverviewRuler ? void 0 : {
                width: 14,
                overviewRuler: {
                    showTopBorder: !0
                }
            },
            ignoreBracketedPasteMode: b.ignoreBracketedPasteMode,
            rescaleOverlappingGlyphs: b.rescaleOverlappingGlyphs,
            vtExtensions: {
                kittyKeyboard: b.enableKittyKeyboardProtocol,
                win32InputMode: b.enableWin32InputMode
            },
            allowTransparency: b.enableImages,
            windowOptions: {
                getWinSizePixels: !0,
                getCellSizePixels: !0,
                getWinSizeChars: !0
            },
            ...e.nativeOptions
        })), this._nativeOptions = e.nativeOptions, this._updateSmoothScrolling(), this._core = this.raw._core, this._register(this._configurationService.onDidChangeConfiguration(async (S)=>{
            S.affectsConfiguration("terminal.integrated.gpuAcceleration") && (L9e._suggestedRendererType = void 0), (S.affectsConfiguration("terminal.integrated") || S.affectsConfiguration("editor.fastScrollSensitivity") || S.affectsConfiguration("editor.mouseWheelScrollSensitivity") || S.affectsConfiguration("editor.multiCursorModifier")) && this.updateConfig(), S.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), S.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && this._updateTheme();
        })), this._register(this._themeService.onDidColorThemeChange((S)=>this._updateTheme(S))), this._register(this._logService.onDidChangeLogLevel((S)=>this.raw.options.logLevel = mPg(S))), this._register(this.raw.onSelectionChange(()=>{
            this._onDidChangeSelection.fire(), this.isFocused && this._anyFocusedTerminalHasSelection.set(this.raw.hasSelection());
        })), this._register(this.raw.onData((S)=>this._lastInputEvent = S)), this._updateUnicodeVersion(), this._markNavigationAddon = this._instantiationService.createInstance(ahs, e.capabilities), this.raw.loadAddon(this._markNavigationAddon), this._decorationAddon = this._instantiationService.createInstance(shs, this._capabilities, e.terminalInstanceGetter || (()=>{})), this._register(this._decorationAddon.onDidRequestRunCommand((S)=>this._onDidRequestRunCommand.fire(S))), this._register(this._decorationAddon.onDidRequestCopyAsHtml((S)=>this._onDidRequestCopyAsHtml.fire(S))), this.raw.loadAddon(this._decorationAddon), e.detached || this._register(g.onWillShutdown(()=>this._decorationAddon.clearDecorations())), this._shellIntegrationAddon = new uPg(e.shellIntegrationNonce ?? "", e.disableShellIntegrationReporting, this._onDidExecuteText, this._logService), this.raw.loadAddon(this._shellIntegrationAddon), this._xtermAddonLoader.importAddon("clipboard").then((S)=>{
            this._store.isDisposed || (this._clipboardAddon = this._instantiationService.createInstance(S, void 0, {
                async readText (k) {
                    return c.readText(k === "p" ? "selection" : "clipboard");
                },
                async writeText (k, C) {
                    return c.writeText(C, k === "p" ? "selection" : "clipboard");
                }
            }), this.raw.loadAddon(this._clipboardAddon));
        }), this._xtermAddonLoader.importAddon("progress").then((S)=>{
            if (this._store.isDisposed) return;
            const k = this._instantiationService.createInstance(S);
            this.raw.loadAddon(k);
            const C = ()=>{
                Rp(this._progressState, k.progress) || (this._progressState = k.progress, this._onDidChangeProgress.fire(this._progressState));
            };
            this._register(k.onChange(()=>C())), C();
            const T = this._capabilities.get(2);
            if (T) this._register(T.onCommandFinished(()=>k.progress = {
                    state: 0,
                    value: 0
                }));
            else {
                const I = this._capabilities.onDidAddCapability((A)=>{
                    A.id === 2 && (this._register(A.capability.onCommandFinished(()=>k.progress = {
                            state: 0,
                            value: 0
                        })), this._store.delete(I));
                });
                this._store.add(I);
            }
        }), this._anyTerminalFocusContextKey = ns.focusInAny.bindTo(u), this._anyFocusedTerminalHasSelection = ns.textSelectedInFocused.bindTo(u);
    }
    *getBufferReverseIteratorFromCursor() {
        let { cursorX: t, cursorY: e } = this.raw.buffer.active;
        e += this.raw.buffer.active.baseY;
        let n = this.raw.buffer.active.getLine(e);
        if (n) {
            let i = n.translateToString(!0).substring(0, t);
            for(; e > 0 && n.isWrapped && (n = this.raw.buffer.active.getLine(--e), !!n);)i = n.translateToString(!1) + i;
            yield i;
        }
        for(let i = e - 1; i >= 0; i--){
            const { lineData: r, lineIndex: s } = Bvl(i, this.raw.buffer.active);
            r && (i = s, yield r);
        }
    }
    getBufferLength() {
        return this.raw.buffer.active.length;
    }
    getFirstLine() {
        return this.raw.buffer.active.viewportY;
    }
    getBufferLines(t, e, n = !1) {
        const i = [];
        for(let r = t; r < e; r++){
            const { lineData: s } = Bvl(r, this.raw.buffer.active);
            (s || !n) && i.push(s ?? "");
        }
        return i;
    }
    cursorTranslateBufferToString(t, e) {
        const n = this.raw.buffer.active, i = [], r = [];
        let s = 0;
        const o = Math.min(n.length, n.baseY + this.raw.rows), a = Math.max(0, o - t);
        for(let l = o - 1; l >= a && !(s >= e); l--){
            const c = n.getLine(l);
            if (!c) continue;
            const u = c.translateToString(!0);
            if (!c.isWrapped && r.length === 0) {
                s += u.length, i.unshift(u);
                continue;
            }
            if (r.unshift(u), !c.isWrapped) {
                const d = r.join("");
                r.length = 0, i.unshift(d), s += d.length;
            }
        }
        for(r.length > 0 && i.unshift(r.join("")); i.length > 0 && i[i.length - 1].length === 0;)i.pop();
        return i.join(`
`);
    }
    get lastInputEvent() {
        return this._lastInputEvent;
    }
    get progressState() {
        return this._progressState;
    }
    get findResult() {
        return this._lastFindResult;
    }
    get isStdinDisabled() {
        return !!this.raw.options.disableStdin;
    }
    get isGpuAccelerated() {
        return !!this._webglAddon;
    }
    get markTracker() {
        return this._markNavigationAddon;
    }
    get shellIntegration() {
        return this._shellIntegrationAddon;
    }
    get decorationAddon() {
        return this._decorationAddon;
    }
    get textureAtlas() {
        const t = this._webglAddon?.textureAtlas;
        if (t) return createImageBitmap(t);
    }
    get isFocused() {
        return this.raw.element ? soe(this.raw.element) : !1;
    }
    *getBufferReverseIterator() {
        for(let t = this.raw.buffer.active.length - 1; t >= 0; t--){
            const { lineData: e, lineIndex: n } = Bvl(t, this.raw.buffer.active);
            e && (t = n, yield e);
        }
    }
    getContentsAsText(t, e) {
        const n = [], i = this.raw.buffer.active;
        if (t?.line === -1) throw new Error("Cannot get contents of a disposed startMarker");
        if (e?.line === -1) throw new Error("Cannot get contents of a disposed endMarker");
        const r = t?.line ?? 0, s = e?.line ?? i.length - 1;
        for(let o = r; o <= s; o++)n.push(i.getLine(o)?.translateToString(!0) ?? "");
        return n.join(`
`);
    }
    async getContentsAsHtml() {
        if (!this._serializeAddon) {
            const t = await this._xtermAddonLoader.importAddon("serialize");
            this._serializeAddon = new t, this.raw.loadAddon(this._serializeAddon);
        }
        return this._serializeAddon.serializeAsHTML();
    }
    onRender(t) {
        return this.raw.onRender(t);
    }
    async getSelectionAsHtml(t) {
        if (!this._serializeAddon) {
            const n = await this._xtermAddonLoader.importAddon("serialize");
            this._serializeAddon = new n, this.raw.loadAddon(this._serializeAddon);
        }
        if (t) {
            const n = t.getOutput()?.length, i = t.marker?.line;
            if (!n || !i) throw new Error(`No row ${i} or output length ${n} for command ${t}`);
            this.raw.select(0, i + 1, n - Math.floor(n / this.raw.cols));
        }
        const e = this._serializeAddon.serializeAsHTML({
            onlySelection: !0
        });
        return t && this.raw.clearSelection(), e;
    }
    attachToElement(t, e) {
        const n = {
            enableGpu: !0,
            ...e
        };
        if (this._attached || this.raw.open(t), n.enableGpu && this._shouldLoadWebgl() && this._enableWebglRenderer(), !this.raw.element || !this.raw.textarea) throw new Error("xterm elements not set after open");
        const i = this._attachedDisposables;
        return i.clear(), i.add(li(this.raw.textarea, "focus", ()=>{
            this._tooltipService.registerEvent("terminal.focus"), this._setFocused(!0);
        })), i.add(li(this.raw.textarea, "blur", ()=>this._setFocused(!1))), i.add(li(this.raw.textarea, "focusout", ()=>this._setFocused(!1))), i.add(li(this.raw.element, Pr.MOUSE_WHEEL, (r)=>{
            const s = Ifn.INSTANCE;
            s.acceptStandardWheelEvent(new _tt(r));
            const o = s.isPhysicalMouseWheel();
            o !== this._isPhysicalMouseWheel && (this._isPhysicalMouseWheel = o, this._updateSmoothScrolling());
        }, {
            passive: !0
        })), this._refreshLigaturesAddon(), this._attached = {
            container: t,
            options: n
        }, this._attached?.container.querySelector(".xterm-screen");
    }
    setDecorationsVisible(t) {
        if (this._decorationAddon.setAttachDecorationsVisible(t), !t) {
            const e = this.raw.element?.querySelectorAll(".xterm-decoration-overview-ruler, .xterm-decoration-container");
            for (const n of e ?? [])this._attachHiddenDecorationValues.has(n) || this._attachHiddenDecorationValues.set(n, n.hidden === !0), n.hidden = !0;
            return;
        }
        for (const [e, n] of this._attachHiddenDecorationValues)e.hidden = n;
        this._attachHiddenDecorationValues.clear();
    }
    _setFocused(t) {
        this._onDidChangeFocus.fire(t), this._anyTerminalFocusContextKey.set(t), this._anyFocusedTerminalHasSelection.set(t && this.raw.hasSelection());
    }
    write(t, e) {
        this.raw.write(t, e);
    }
    resize(t, e) {
        this.raw.resize(t, e);
    }
    updateConfig() {
        const t = this._terminalConfigurationService.config;
        this.raw.options.altClickMovesCursor = t.altClickMovesCursor, this._setCursorBlink(t.cursorBlinking), this._setTextBlinking(t.textBlinking), this._setCursorStyle(t.cursorStyle), this._setCursorStyleInactive(t.cursorStyleInactive), this._setCursorWidth(t.cursorWidth), this.raw.options.scrollback = t.scrollback, this.raw.options.drawBoldTextInBrightColors = t.drawBoldTextInBrightColors, this.raw.options.minimumContrastRatio = t.minimumContrastRatio, this.raw.options.tabStopWidth = t.tabStopWidth, this.raw.options.fastScrollSensitivity = t.fastScrollSensitivity, this.raw.options.scrollSensitivity = t.mouseWheelScrollSensitivity, this.raw.options.macOptionIsMeta = t.macOptionIsMeta;
        const e = this._configurationService.getValue("editor");
        if (this.raw.options.altClickMovesCursor = t.altClickMovesCursor && e.multiCursorModifier === "alt", this.raw.options.macOptionClickForcesSelection = t.macOptionClickForcesSelection, this.raw.options.rightClickSelectsWord = t.rightClickBehavior === "selectWord", this.raw.options.wordSeparator = t.wordSeparators, this.raw.options.ignoreBracketedPasteMode = t.ignoreBracketedPasteMode, this.raw.options.rescaleOverlappingGlyphs = t.rescaleOverlappingGlyphs, this.raw.options.allowTransparency = t.enableImages, this.raw.options.vtExtensions = {
            kittyKeyboard: t.enableKittyKeyboardProtocol,
            win32InputMode: t.enableWin32InputMode
        }, this._nativeOptions) for(const n in this._nativeOptions){
            const i = this._nativeOptions[n];
            i !== void 0 && (this.raw.options[n] = i);
        }
        this._updateSmoothScrolling(), this._attached && (this._attached.options.enableGpu && (this._shouldLoadWebgl() ? this._enableWebglRenderer() : this._disposeOfWebglRenderer()), this._refreshLigaturesAddon());
    }
    _updateSmoothScrolling() {
        this.raw.options.smoothScrollDuration = this._terminalConfigurationService.config.smoothScrolling && this._isPhysicalMouseWheel ? 125 : 0;
    }
    _shouldLoadWebgl() {
        return this._terminalConfigurationService.config.gpuAcceleration === "auto" && L9e._suggestedRendererType === void 0 || this._terminalConfigurationService.config.gpuAcceleration === "on";
    }
    forceRedraw() {
        this.raw.clearTextureAtlas();
    }
    clearDecorations() {
        this._decorationAddon?.clearDecorations();
    }
    forceRefresh() {
        this._core.viewport?._innerRefresh();
    }
    async findNext(t, e) {
        return this._updateFindColors(e), (await this._getSearchAddon()).findNext(t, e);
    }
    async findPrevious(t, e) {
        return this._updateFindColors(e), (await this._getSearchAddon()).findPrevious(t, e);
    }
    _updateFindColors(t) {
        const e = this._themeService.getColorTheme(), n = e.getColor(Lds) || e.getColor(dlt), i = e.getColor(qRg), r = e.getColor(zRg), s = e.getColor(bvl), o = e.getColor(VRg), a = e.getColor(KRg), l = e.getColor(YRg);
        t.decorations = {
            activeMatchBackground: i?.toString(),
            activeMatchBorder: r?.toString() || "transparent",
            activeMatchColorOverviewRuler: s?.toString() || "transparent",
            matchBackground: n ? o?.blend(n).toString() : void 0,
            matchBorder: a?.toString() || "transparent",
            matchOverviewRuler: l?.toString() || "transparent"
        };
    }
    _getSearchAddon() {
        return this._searchAddonPromise || (this._searchAddonPromise = this._xtermAddonLoader.importAddon("search").then((t)=>this._store.isDisposed ? Promise.reject("Could not create search addon, terminal is disposed") : (this._searchAddon = new t({
                highlightLimit: 2e4
            }), this.raw.loadAddon(this._searchAddon), this._searchAddon.onDidChangeResults((e)=>{
                this._lastFindResult = e, this._onDidChangeFindResults.fire(e);
            }), this._searchAddon))), this._searchAddonPromise;
    }
    clearSearchDecorations() {
        this._searchAddon?.clearDecorations();
    }
    clearActiveSearchDecoration() {
        this._searchAddon?.clearActiveDecoration();
    }
    getFont() {
        return this._terminalConfigurationService.getFont(ws(this.raw.element), this._core);
    }
    getLongestViewportWrappedLineLength() {
        let t = 0;
        for(let e = this.raw.buffer.active.length - 1; e >= this.raw.buffer.active.viewportY; e--){
            const n = this._getWrappedLineCount(e, this.raw.buffer.active);
            t = Math.max(t, n.lineCount * this.raw.cols - n.endSpaces || 0), e = n.currentIndex;
        }
        return t;
    }
    _getWrappedLineCount(t, e) {
        let n = e.getLine(t);
        if (!n) throw new Error("Could not get line");
        let i = t, r = 0;
        for(let s = Math.min(n.length, this.raw.cols) - 1; s >= 0 && !n?.getCell(s)?.getChars(); s--)r++;
        for(; n?.isWrapped && i > 0;)i--, n = e.getLine(i);
        return {
            lineCount: t - i + 1,
            currentIndex: i,
            endSpaces: r
        };
    }
    scrollDownLine() {
        this.raw.scrollLines(1);
    }
    scrollDownPage() {
        this.raw.scrollPages(1);
    }
    scrollToBottom() {
        this.raw.scrollToBottom();
    }
    scrollUpLine() {
        this.raw.scrollLines(-1);
    }
    scrollUpPage() {
        this.raw.scrollPages(-1);
    }
    scrollToTop() {
        this.raw.scrollToTop();
    }
    scrollToLine(t, e = 0) {
        this.markTracker.scrollToLine(t, e);
    }
    clearBuffer() {
        this._decorationAddon.clearDecorations(), this._capabilities.get(2)?.clearCommands(), this._capabilities.get(3)?.clearCommands(), this.raw.clear(), this._capabilities.get(2)?.handlePromptStart(), this._capabilities.get(2)?.handleCommandStart(), this._accessibilitySignalService.playSignal(Nb.clear);
    }
    hasSelection() {
        return this.raw.hasSelection();
    }
    clearSelection() {
        this.raw.clearSelection();
    }
    selectMarkedRange(t, e, n = !1) {
        const i = this.shellIntegration.capabilities.get(4);
        if (!i) return;
        const r = i.getMark(t), s = i.getMark(e);
        r === void 0 || s === void 0 || (this.raw.selectLines(r.line, s.line), n && this.raw.scrollToLine(r.line));
    }
    selectAll() {
        this.raw.focus(), this.raw.selectAll();
    }
    focus() {
        this.raw.focus();
    }
    async copySelection(t, e) {
        if (this._tooltipService.registerEvent("terminal.copy"), this.hasSelection() || t && e) {
            const i = this._terminalUri;
            if (t) {
                let r = function(a) {
                    a.clipboardData.types.includes("text/plain") || a.clipboardData.setData("text/plain", e?.getOutput() ?? ""), a.clipboardData.setData("text/html", s), a.preventDefault();
                };
                var n = r;
                const s = await this.getSelectionAsHtml(e), o = Ukr(this.raw.element);
                o.addEventListener("copy", r), o.execCommand("copy"), o.removeEventListener("copy", r), this._uiOverlayService.lastCopyData = {
                    text: s,
                    range: this.selectionRange,
                    languageId: "bash",
                    uri: i
                };
            } else await this._clipboardService.writeText(this.raw.getSelection()), this._uiOverlayService.lastCopyData = {
                text: this.raw.getSelection(),
                range: this.selectionRange,
                languageId: "bash",
                uri: i
            };
        } else this._notificationService.warn(D(10408, null));
    }
    get selectionRange() {
        const t = this.hasSelection() ? this.raw.getSelectionPosition() : void 0;
        if (t) return {
            selectionStartColumn: t.start.x,
            selectionStartLineNumber: t.start.y + 1,
            positionColumn: t.end.x,
            positionLineNumber: t.end.y + 1
        };
    }
    _setTextBlinking(t) {
        const e = t ? 600 : 0, n = this.raw.options;
        n.blinkIntervalDuration !== e && (n.blinkIntervalDuration = e);
    }
    _reportHighScrollbackIfNeeded(t) {
        if (!(jvl || !(t > Uvl))) {
            jvl = !0;
            try {
                const e = this._configurationService.inspect("terminal.integrated.scrollback"), n = e.userValue !== void 0 ? "user" : e.workspaceValue !== void 0 ? "workspace" : e.workspaceFolderValue !== void 0 ? "workspaceFolder" : "other";
                Sv(new Error("High terminal.integrated.scrollback"), {
                    captureContext: {
                        fingerprint: [
                            "high-terminal-scrollback"
                        ],
                        tags: {
                            client_error_type: "high_terminal_scrollback",
                            force_upload: "forced",
                            scrollback_source: n
                        },
                        extra: {
                            scrollback: t,
                            estimatedBytesPerTerminal: t * 4,
                            threshold: Uvl
                        }
                    }
                });
            } catch  {}
        }
    }
    _setCursorBlink(t) {
        this.raw.options.cursorBlink !== t && (this.raw.options.cursorBlink = t, this.raw.refresh(0, this.raw.rows - 1));
    }
    _setCursorStyle(t) {
        const e = lhs(t);
        this.raw.options.cursorStyle !== e && (this.raw.options.cursorStyle = e);
    }
    _setCursorStyleInactive(t) {
        const e = lhs(t);
        this.raw.options.cursorInactiveStyle !== e && (this.raw.options.cursorInactiveStyle = e);
    }
    _setCursorWidth(t) {
        this.raw.options.cursorWidth !== t && (this.raw.options.cursorWidth = t);
    }
    async _enableWebglRenderer() {
        if (!this.raw.element || this._webglAddon && this._webglAddonCustomGlyphs === this._terminalConfigurationService.config.customGlyphs) return;
        this._webglAddonCustomGlyphs = this._terminalConfigurationService.config.customGlyphs, this._disposeOfWebglRenderer();
        const t = await this._xtermAddonLoader.importAddon("webgl");
        this._webglAddon = new t({
            customGlyphs: this._terminalConfigurationService.config.customGlyphs
        });
        try {
            this.raw.loadAddon(this._webglAddon), this._logService.trace("Webgl was loaded"), this._webglAddon.onContextLoss(()=>{
                this._logService.info("Webgl lost context, disposing of webgl renderer"), this._disposeOfWebglRenderer();
            }), this._refreshImageAddon(), this._onDidRequestRefreshDimensions.fire();
        } catch (e) {
            this._logService.warn("Webgl could not be loaded. Falling back to the DOM renderer", e), L9e._suggestedRendererType = "dom", this._disposeOfWebglRenderer();
        }
    }
    async _refreshLigaturesAddon() {
        if (!this.raw.element) return;
        const t = this._terminalConfigurationService.config.fontLigatures;
        let e = !1;
        if (t?.enabled) {
            const n = {
                fontFeatureSettings: t.featureSettings,
                fallbackLigatures: t.fallbackLigatures
            };
            if (this._ligaturesAddon.value && !Rp(n, this._ligaturesAddonConfig) && (this._ligaturesAddon.clear(), this._ligaturesAddonConfig = void 0), !this._ligaturesAddon.value) {
                const i = await this._xtermAddonLoader.importAddon("ligatures");
                if (this._store.isDisposed) return;
                this._ligaturesAddon.value = this._instantiationService.createInstance(i, n), this._ligaturesAddonConfig = n, this.raw.loadAddon(this._ligaturesAddon.value), e = !0;
            }
        } else {
            if (!this._ligaturesAddon.value) return;
            this._ligaturesAddon.clear(), this._ligaturesAddonConfig = void 0, e = !0;
        }
        e && this._webglAddon && (this._disposeOfWebglRenderer(), await this._enableWebglRenderer());
    }
    async _refreshImageAddon() {
        if (this._terminalConfigurationService.config.enableImages && this._webglAddon) {
            if (!this._imageAddon) {
                const t = await this._xtermAddonLoader.importAddon("image");
                this._imageAddon = new t, this.raw.loadAddon(this._imageAddon);
            }
        } else {
            try {
                this._imageAddon?.dispose();
            } catch  {}
            this._imageAddon = void 0;
        }
    }
    _disposeOfWebglRenderer() {
        if (this._webglAddon) {
            try {
                this._webglAddon?.dispose();
            } catch  {}
            this._webglAddon = void 0, this._webglAddonCustomGlyphs = void 0, this._refreshImageAddon(), this._onDidRequestRefreshDimensions.fire();
        }
    }
    getXtermTheme(t) {
        t || (t = this._themeService.getColorTheme());
        const e = this._terminalConfigurationService.config, n = [
            "never",
            "gutter"
        ].includes(e.shellIntegration?.decorationsEnabled ?? ""), i = t.getColor(_vl), r = this._xtermColorProvider.getBackgroundColor(t), s = t.getColor(FRg) || i, o = t.getColor(BRg) || r, a = t.getColor(v2n), l = t.getColor(URg), c = t.getColor(jRg) || void 0;
        return {
            background: r?.toString(),
            foreground: i?.toString(),
            cursor: s?.toString(),
            cursorAccent: o?.toString(),
            selectionBackground: a?.toString(),
            selectionInactiveBackground: l?.toString(),
            selectionForeground: c?.toString(),
            overviewRulerBorder: n ? "#0000" : t.getColor(GRg)?.toString(),
            scrollbarSliderActiveBackground: t.getColor(j9t)?.toString(),
            scrollbarSliderBackground: t.getColor(B9t)?.toString(),
            scrollbarSliderHoverBackground: t.getColor(U9t)?.toString(),
            black: t.getColor(QJ[0])?.toString(),
            red: t.getColor(QJ[1])?.toString(),
            green: t.getColor(QJ[2])?.toString(),
            yellow: t.getColor(QJ[3])?.toString(),
            blue: t.getColor(QJ[4])?.toString(),
            magenta: t.getColor(QJ[5])?.toString(),
            cyan: t.getColor(QJ[6])?.toString(),
            white: t.getColor(QJ[7])?.toString(),
            brightBlack: t.getColor(QJ[8])?.toString(),
            brightRed: t.getColor(QJ[9])?.toString(),
            brightGreen: t.getColor(QJ[10])?.toString(),
            brightYellow: t.getColor(QJ[11])?.toString(),
            brightBlue: t.getColor(QJ[12])?.toString(),
            brightMagenta: t.getColor(QJ[13])?.toString(),
            brightCyan: t.getColor(QJ[14])?.toString(),
            brightWhite: t.getColor(QJ[15])?.toString()
        };
    }
    _updateTheme(t) {
        this.raw.options.theme = this.getXtermTheme(t);
    }
    refresh() {
        this._updateTheme(), this._decorationAddon.refreshLayouts();
    }
    async _updateUnicodeVersion() {
        if (!this._unicode11Addon && this._terminalConfigurationService.config.unicodeVersion === "11") {
            const t = await this._xtermAddonLoader.importAddon("unicode11");
            this._unicode11Addon = new t, this.raw.loadAddon(this._unicode11Addon);
        }
        this.raw.unicode.activeVersion !== this._terminalConfigurationService.config.unicodeVersion && (this.raw.unicode.activeVersion = this._terminalConfigurationService.config.unicodeVersion);
    }
    _writeText(t) {
        this.raw.write(t);
    }
    dispose() {
        this._anyTerminalFocusContextKey.reset(), this._anyFocusedTerminalHasSelection.reset(), this._onDidDispose.fire(), super.dispose();
    }
}, L9e._suggestedRendererType = void 0, Re([
    MQ(100)
], L9e.prototype, "_refreshLigaturesAddon", null), Re([
    MQ(100)
], L9e.prototype, "_refreshImageAddon", null), L9e = Re([
    F(3, yi),
    F(4, dn),
    F(5, Z4),
    F(6, Wr),
    F(7, Ml),
    F(8, NJ),
    F(9, hf),
    F(10, Rr),
    F(11, xx),
    F(12, ehe),
    F(13, Z_),
    F(14, Fp),
    F(15, UI)
], L9e);

}
