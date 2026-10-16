import { He, S, Se, bt, cn, ve, we } from "./HVr.js";
import { A0, KT, Uf } from "./accessibilitySignalService.js";
import { C, ie } from "./actions_2.js";
import { Yp, zu } from "./clipboardService.js";
import { tc } from "./colorRegistry.js";
import { Km } from "./composerMessageStorageService.js";
import { Cn, qt } from "./configuration.js";
import { dn, xn } from "./contextkey.js";
import { $ir, vh_ } from "./decorationAddon.js";
import { sw } from "./decorators.js";
import { Bgi, Fn, en, xi } from "./dom_2.js";
import { Ze, _t } from "./instantiation.js";
import { Rx, hC } from "./layoutService.js";
import { $d, Id } from "./lifecycle_2.js";
import { Dh, Qn } from "./log.js";
import { Wir, _h_ } from "./markNavigationAddon.js";
import { ipt, npt, tpt } from "./miscColors.js";
import { ew, rBe } from "./mouseEvent.js";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { bu } from "./objects.js";
import { Xt, cU, sa, vD, yh } from "./qIc.js";
import { KOt, mA } from "./scrollableElement.js";
import { Lk } from "./sentry.js";
import { P9h, gh_ } from "./shellIntegrationAddon.js";
import { ng, r8 } from "./terminal.js";
import { BDo, FDo, _5h, a7e, b5h, c5h, d5h, dzt, f5h, g5h, gir, l5h, t4, u5h, v5h, y5h } from "./terminalColorRegistry.js";
import { Er, Gx } from "./terminalContextKey.js";
import { RN, fw } from "./terminal_2.js";
import { $r, as } from "./themeService.js";
import { MLe, Ry } from "./theme_2.js";
import { PK, ure } from "./tooltipService.js";
import { x } from "./tslib.es6.js";
import { TM, XT } from "./uiOverlayService.js";
import { O9h, oMo } from "./xtermAddonImporter.js";
function aMo(e, t) {
    let n = t.getLine(e);
    if (!n) return {
        lineData: void 0,
        lineIndex: e
    };
    let i = n.translateToString(!0);
    for(; e > 0 && n.isWrapped && (n = t.getLine(--e), !!n);)i = n.translateToString(!1) + i;
    return {
        lineData: i,
        lineIndex: e
    };
}
function B9h(e) {
    switch(e){
        case Dh.Trace:
            return "trace";
        case Dh.Debug:
            return "debug";
        case Dh.Info:
            return "info";
        case Dh.Warning:
            return "warn";
        case Dh.Error:
            return "error";
        default:
            return "off";
    }
}
function Gir(e) {
    return e === "line" ? "bar" : e;
}
var cMo, lMo, CTe;
export { B9h, CTe, Gir, aMo, cMo, lMo };
var __wakaru_uMo_initialized = false;
export function uMo() {
if (__wakaru_uMo_initialized) return;
__wakaru_uMo_initialized = true;
"use strict";
x(), en(), ew(), mA(), sw(), bt(), Se(), bu(), rt(), KT(), Yp(), Cn(), dn(), Ze(), Rx(), Qn(), ji(), fw(), gh_(), tc(), as(), ure(), Ry(), $d(), TM(), Lk(), a7e(), Gx(), ng(), vh_(), _h_(), O9h(), cMo = 1e5, lMo = !1, CTe = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v){
        super(), this._onDidExecuteText = n, this._configurationService = i, this._instantiationService = r, this._logService = s, this._notificationService = o, this._themeService = a, this._terminalConfigurationService = c, this._clipboardService = l, this._accessibilitySignalService = h, this._tooltipService = p, this._uiOverlayService = g, this._attachHiddenDecorationValues = new Map, this._isPhysicalMouseWheel = KOt.INSTANCE.isPhysicalMouseWheel(), this._progressState = {
            state: 0,
            value: 0
        }, this._webglAddonCustomGlyphs = !1, this._ligaturesAddon = this._register(new cn), this._attachedDisposables = this._register(new He), this._onDidRequestRunCommand = this._register(new ve), this.onDidRequestRunCommand = this._onDidRequestRunCommand.event, this._onDidRequestCopyAsHtml = this._register(new ve), this.onDidRequestCopyAsHtml = this._onDidRequestCopyAsHtml.event, this._onDidRequestRefreshDimensions = this._register(new ve), this.onDidRequestRefreshDimensions = this._onDidRequestRefreshDimensions.event, this._onDidChangeFindResults = this._register(new ve), this.onDidChangeFindResults = this._onDidChangeFindResults.event, this._onDidChangeSelection = this._register(new ve), this.onDidChangeSelection = this._onDidChangeSelection.event, this._onDidChangeFocus = this._register(new ve), this.onDidChangeFocus = this._onDidChangeFocus.event, this._onDidDispose = this._register(new ve), this.onDidDispose = this._onDidDispose.event, this._onDidChangeProgress = this._register(new ve), this.onDidChangeProgress = this._onDidChangeProgress.event, this._xtermAddonLoader = t.xtermAddonImporter ?? new oMo, this._xtermColorProvider = t.xtermColorProvider, this._capabilities = t.capabilities, this._terminalUri = t.terminalUri;
        const b = this._terminalConfigurationService.getFont(sa(), void 0, !0), y = this._terminalConfigurationService.config, T = this._configurationService.getValue("editor");
        this._reportHighScrollbackIfNeeded(y.scrollback), this.raw = this._register(new e({
            allowProposedApi: !0,
            cols: t.cols,
            rows: t.rows,
            documentOverride: v.mainContainer.ownerDocument,
            altClickMovesCursor: y.altClickMovesCursor && T.multiCursorModifier === "alt",
            scrollback: y.scrollback,
            theme: this.getXtermTheme(),
            drawBoldTextInBrightColors: y.drawBoldTextInBrightColors,
            fontFamily: b.fontFamily,
            fontWeight: y.fontWeight,
            fontWeightBold: y.fontWeightBold,
            fontSize: b.fontSize,
            letterSpacing: b.letterSpacing,
            lineHeight: b.lineHeight,
            logLevel: B9h(this._logService.getLevel()),
            logger: this._logService,
            minimumContrastRatio: y.minimumContrastRatio,
            tabStopWidth: y.tabStopWidth,
            cursorBlink: y.cursorBlinking,
            blinkIntervalDuration: y.textBlinking ? 600 : 0,
            cursorStyle: Gir(y.cursorStyle),
            cursorInactiveStyle: Gir(y.cursorStyleInactive),
            cursorWidth: y.cursorWidth,
            macOptionIsMeta: y.macOptionIsMeta,
            macOptionClickForcesSelection: y.macOptionClickForcesSelection,
            mouseEventsRequireAlt: this._terminalConfigurationService.mouseEventsRequireAlt,
            rightClickSelectsWord: y.rightClickBehavior === "selectWord",
            fastScrollSensitivity: y.fastScrollSensitivity,
            scrollSensitivity: y.mouseWheelScrollSensitivity,
            scrollOnEraseInDisplay: !0,
            wordSeparator: y.wordSeparators,
            scrollbar: t.disableOverviewRuler ? void 0 : {
                width: 14,
                overviewRuler: {
                    showTopBorder: !0
                }
            },
            ignoreBracketedPasteMode: y.ignoreBracketedPasteMode,
            rescaleOverlappingGlyphs: y.rescaleOverlappingGlyphs,
            vtExtensions: {
                kittyKeyboard: y.enableKittyKeyboardProtocol,
                win32InputMode: y.enableWin32InputMode
            },
            allowTransparency: y.enableImages,
            windowOptions: {
                getWinSizePixels: !0,
                getCellSizePixels: !0,
                getWinSizeChars: !0
            },
            ...t.nativeOptions
        })), this._nativeOptions = t.nativeOptions, this._updateSmoothScrolling(), this._core = this.raw._core, this._register(this._configurationService.onDidChangeConfiguration(async (E)=>{
            E.affectsConfiguration("terminal.integrated.gpuAcceleration") && (CTe._suggestedRendererType = void 0), (E.affectsConfiguration("terminal.integrated") || E.affectsConfiguration("editor.fastScrollSensitivity") || E.affectsConfiguration("editor.mouseWheelScrollSensitivity") || E.affectsConfiguration("editor.multiCursorModifier")) && this.updateConfig(), E.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), E.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && this._updateTheme();
        })), this._register(this._themeService.onDidColorThemeChange((E)=>this._updateTheme(E))), this._register(this._logService.onDidChangeLogLevel((E)=>this.raw.options.logLevel = B9h(E))), this._register(this.raw.onSelectionChange(()=>{
            this._onDidChangeSelection.fire(), this.isFocused && this._anyFocusedTerminalHasSelection.set(this.raw.hasSelection());
        })), this._register(this.raw.onData((E)=>this._lastInputEvent = E)), this._updateUnicodeVersion(), this._markNavigationAddon = this._instantiationService.createInstance(Wir, t.capabilities), this.raw.loadAddon(this._markNavigationAddon), this._decorationAddon = this._instantiationService.createInstance($ir, this._capabilities, t.terminalInstanceGetter || (()=>{})), this._register(this._decorationAddon.onDidRequestRunCommand((E)=>this._onDidRequestRunCommand.fire(E))), this._register(this._decorationAddon.onDidRequestCopyAsHtml((E)=>this._onDidRequestCopyAsHtml.fire(E))), this.raw.loadAddon(this._decorationAddon), t.detached || this._register(f.onWillShutdown(()=>this._decorationAddon.clearDecorations())), this._shellIntegrationAddon = new P9h(t.shellIntegrationNonce ?? "", t.disableShellIntegrationReporting, this._onDidExecuteText, this._logService), this.raw.loadAddon(this._shellIntegrationAddon), this._xtermAddonLoader.importAddon("clipboard").then((E)=>{
            this._store.isDisposed || (this._clipboardAddon = this._instantiationService.createInstance(E, void 0, {
                async readText (A) {
                    return l.readText(A === "p" ? "selection" : "clipboard");
                },
                async writeText (A, R) {
                    return l.writeText(R, A === "p" ? "selection" : "clipboard");
                }
            }), this.raw.loadAddon(this._clipboardAddon));
        }), this._xtermAddonLoader.importAddon("progress").then((E)=>{
            if (this._store.isDisposed) return;
            const A = this._instantiationService.createInstance(E);
            this.raw.loadAddon(A);
            const R = ()=>{
                yh(this._progressState, A.progress) || (this._progressState = A.progress, this._onDidChangeProgress.fire(this._progressState));
            };
            this._register(A.onChange(()=>R())), R();
            const D = this._capabilities.get(2);
            if (D) this._register(D.onCommandFinished(()=>A.progress = {
                    state: 0,
                    value: 0
                }));
            else {
                const P = this._capabilities.onDidAddCapability((N)=>{
                    N.id === 2 && (this._register(N.capability.onCommandFinished(()=>A.progress = {
                            state: 0,
                            value: 0
                        })), this._store.delete(P));
                });
                this._store.add(P);
            }
        }), this._anyTerminalFocusContextKey = Er.focusInAny.bindTo(u), this._anyFocusedTerminalHasSelection = Er.textSelectedInFocused.bindTo(u);
    }
    *getBufferReverseIteratorFromCursor() {
        let { cursorX: e, cursorY: t } = this.raw.buffer.active;
        t += this.raw.buffer.active.baseY;
        let n = this.raw.buffer.active.getLine(t);
        if (n) {
            let i = n.translateToString(!0).substring(0, e);
            for(; t > 0 && n.isWrapped && (n = this.raw.buffer.active.getLine(--t), !!n);)i = n.translateToString(!1) + i;
            yield i;
        }
        for(let i = t - 1; i >= 0; i--){
            const { lineData: r, lineIndex: s } = aMo(i, this.raw.buffer.active);
            r && (i = s, yield r);
        }
    }
    getBufferLength() {
        return this.raw.buffer.active.length;
    }
    getFirstLine() {
        return this.raw.buffer.active.viewportY;
    }
    getBufferLines(e, t, n = !1) {
        const i = [];
        for(let r = e; r < t; r++){
            const { lineData: s } = aMo(r, this.raw.buffer.active);
            (s || !n) && i.push(s ?? "");
        }
        return i;
    }
    cursorTranslateBufferToString(e, t) {
        const n = this.raw.buffer.active, i = [], r = [];
        let s = 0;
        const o = Math.min(n.length, n.baseY + this.raw.rows), a = Math.max(0, o - e);
        for(let c = o - 1; c >= a && !(s >= t); c--){
            const l = n.getLine(c);
            if (!l) continue;
            const u = l.translateToString(!0);
            if (!l.isWrapped && r.length === 0) {
                s += u.length, i.unshift(u);
                continue;
            }
            if (r.unshift(u), !l.isWrapped) {
                const h = r.join("");
                r.length = 0, i.unshift(h), s += h.length;
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
        const e = this._webglAddon?.textureAtlas;
        if (e) return createImageBitmap(e);
    }
    get isFocused() {
        return this.raw.element ? vD(this.raw.element) : !1;
    }
    *getBufferReverseIterator() {
        for(let e = this.raw.buffer.active.length - 1; e >= 0; e--){
            const { lineData: t, lineIndex: n } = aMo(e, this.raw.buffer.active);
            t && (e = n, yield t);
        }
    }
    getContentsAsText(e, t) {
        const n = [], i = this.raw.buffer.active;
        if (e?.line === -1) throw new Error("Cannot get contents of a disposed startMarker");
        if (t?.line === -1) throw new Error("Cannot get contents of a disposed endMarker");
        const r = e?.line ?? 0, s = t?.line ?? i.length - 1;
        for(let o = r; o <= s; o++)n.push(i.getLine(o)?.translateToString(!0) ?? "");
        return n.join(`
`);
    }
    async getContentsAsHtml() {
        if (!this._serializeAddon) {
            const e = await this._xtermAddonLoader.importAddon("serialize");
            this._serializeAddon = new e, this.raw.loadAddon(this._serializeAddon);
        }
        return this._serializeAddon.serializeAsHTML();
    }
    onRender(e) {
        return this.raw.onRender(e);
    }
    async getSelectionAsHtml(e) {
        if (!this._serializeAddon) {
            const n = await this._xtermAddonLoader.importAddon("serialize");
            this._serializeAddon = new n, this.raw.loadAddon(this._serializeAddon);
        }
        if (e) {
            const n = e.getOutput()?.length, i = e.marker?.line;
            if (!n || !i) throw new Error(`No row ${i} or output length ${n} for command ${e}`);
            this.raw.select(0, i + 1, n - Math.floor(n / this.raw.cols));
        }
        const t = this._serializeAddon.serializeAsHTML({
            onlySelection: !0
        });
        return e && this.raw.clearSelection(), t;
    }
    attachToElement(e, t) {
        const n = {
            enableGpu: !0,
            ...t
        };
        if (this._attached || this.raw.open(e), n.enableGpu && this._shouldLoadWebgl() && this._enableWebglRenderer(), !this.raw.element || !this.raw.textarea) throw new Error("xterm elements not set after open");
        const i = this._attachedDisposables;
        return i.clear(), i.add(Xt(this.raw.textarea, "focus", ()=>{
            this._tooltipService.registerEvent("terminal.focus"), this._setFocused(!0);
        })), i.add(Xt(this.raw.textarea, "blur", ()=>this._setFocused(!1))), i.add(Xt(this.raw.textarea, "focusout", ()=>this._setFocused(!1))), i.add(Xt(this.raw.element, Fn.MOUSE_WHEEL, (r)=>{
            const s = KOt.INSTANCE;
            s.acceptStandardWheelEvent(new rBe(r));
            const o = s.isPhysicalMouseWheel();
            o !== this._isPhysicalMouseWheel && (this._isPhysicalMouseWheel = o, this._updateSmoothScrolling());
        }, {
            passive: !0
        })), this._refreshLigaturesAddon(), this._attached = {
            container: e,
            options: n
        }, this._attached?.container.querySelector(".xterm-screen");
    }
    setDecorationsVisible(e) {
        if (this._decorationAddon.setAttachDecorationsVisible(e), !e) {
            const t = this.raw.element?.querySelectorAll(".xterm-decoration-overview-ruler, .xterm-decoration-container");
            for (const n of t ?? [])this._attachHiddenDecorationValues.has(n) || this._attachHiddenDecorationValues.set(n, n.hidden === !0), n.hidden = !0;
            return;
        }
        for (const [t, n] of this._attachHiddenDecorationValues)t.hidden = n;
        this._attachHiddenDecorationValues.clear();
    }
    _setFocused(e) {
        this._onDidChangeFocus.fire(e), this._anyTerminalFocusContextKey.set(e), this._anyFocusedTerminalHasSelection.set(e && this.raw.hasSelection());
    }
    write(e, t) {
        this.raw.write(e, t);
    }
    resize(e, t) {
        this.raw.resize(e, t);
    }
    updateConfig() {
        const e = this._terminalConfigurationService.config;
        this.raw.options.altClickMovesCursor = e.altClickMovesCursor, this._setCursorBlink(e.cursorBlinking), this._setTextBlinking(e.textBlinking), this._setCursorStyle(e.cursorStyle), this._setCursorStyleInactive(e.cursorStyleInactive), this._setCursorWidth(e.cursorWidth), this.raw.options.scrollback = e.scrollback, this.raw.options.drawBoldTextInBrightColors = e.drawBoldTextInBrightColors, this.raw.options.minimumContrastRatio = e.minimumContrastRatio, this.raw.options.tabStopWidth = e.tabStopWidth, this.raw.options.fastScrollSensitivity = e.fastScrollSensitivity, this.raw.options.scrollSensitivity = e.mouseWheelScrollSensitivity, this.raw.options.macOptionIsMeta = e.macOptionIsMeta;
        const t = this._configurationService.getValue("editor");
        if (this.raw.options.altClickMovesCursor = e.altClickMovesCursor && t.multiCursorModifier === "alt", this.raw.options.macOptionClickForcesSelection = e.macOptionClickForcesSelection, this.raw.options.rightClickSelectsWord = e.rightClickBehavior === "selectWord", this.raw.options.wordSeparator = e.wordSeparators, this.raw.options.ignoreBracketedPasteMode = e.ignoreBracketedPasteMode, this.raw.options.rescaleOverlappingGlyphs = e.rescaleOverlappingGlyphs, this.raw.options.allowTransparency = e.enableImages, this.raw.options.vtExtensions = {
            kittyKeyboard: e.enableKittyKeyboardProtocol,
            win32InputMode: e.enableWin32InputMode
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
        return this._terminalConfigurationService.config.gpuAcceleration === "auto" && CTe._suggestedRendererType === void 0 || this._terminalConfigurationService.config.gpuAcceleration === "on";
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
    async findNext(e, t) {
        return this._updateFindColors(t), (await this._getSearchAddon()).findNext(e, t);
    }
    async findPrevious(e, t) {
        return this._updateFindColors(t), (await this._getSearchAddon()).findPrevious(e, t);
    }
    _updateFindColors(e) {
        const t = this._themeService.getColorTheme(), n = t.getColor(gir) || t.getColor(MLe), i = t.getColor(f5h), r = t.getColor(v5h), s = t.getColor(BDo), o = t.getColor(_5h), a = t.getColor(b5h), c = t.getColor(y5h);
        e.decorations = {
            activeMatchBackground: i?.toString(),
            activeMatchBorder: r?.toString() || "transparent",
            activeMatchColorOverviewRuler: s?.toString() || "transparent",
            matchBackground: n ? o?.blend(n).toString() : void 0,
            matchBorder: a?.toString() || "transparent",
            matchOverviewRuler: c?.toString() || "transparent"
        };
    }
    _getSearchAddon() {
        return this._searchAddonPromise || (this._searchAddonPromise = this._xtermAddonLoader.importAddon("search").then((e)=>this._store.isDisposed ? Promise.reject("Could not create search addon, terminal is disposed") : (this._searchAddon = new e({
                highlightLimit: 2e4
            }), this.raw.loadAddon(this._searchAddon), this._searchAddon.onDidChangeResults((t)=>{
                this._lastFindResult = t, this._onDidChangeFindResults.fire(t);
            }), this._searchAddon))), this._searchAddonPromise;
    }
    clearSearchDecorations() {
        this._searchAddon?.clearDecorations();
    }
    clearActiveSearchDecoration() {
        this._searchAddon?.clearActiveDecoration();
    }
    getFont() {
        return this._terminalConfigurationService.getFont(xi(this.raw.element), this._core);
    }
    getLongestViewportWrappedLineLength() {
        let e = 0;
        for(let t = this.raw.buffer.active.length - 1; t >= this.raw.buffer.active.viewportY; t--){
            const n = this._getWrappedLineCount(t, this.raw.buffer.active);
            e = Math.max(e, n.lineCount * this.raw.cols - n.endSpaces || 0), t = n.currentIndex;
        }
        return e;
    }
    _getWrappedLineCount(e, t) {
        let n = t.getLine(e);
        if (!n) throw new Error("Could not get line");
        let i = e, r = 0;
        for(let s = Math.min(n.length, this.raw.cols) - 1; s >= 0 && !n?.getCell(s)?.getChars(); s--)r++;
        for(; n?.isWrapped && i > 0;)i--, n = t.getLine(i);
        return {
            lineCount: e - i + 1,
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
    scrollToLine(e, t = 0) {
        this.markTracker.scrollToLine(e, t);
    }
    clearBuffer() {
        this._decorationAddon.clearDecorations(), this._capabilities.get(2)?.clearCommands(), this._capabilities.get(3)?.clearCommands(), this.raw.clear(), this._capabilities.get(2)?.handlePromptStart(), this._capabilities.get(2)?.handleCommandStart(), this._accessibilitySignalService.playSignal(Uf.clear);
    }
    hasSelection() {
        return this.raw.hasSelection();
    }
    clearSelection() {
        this.raw.clearSelection();
    }
    selectMarkedRange(e, t, n = !1) {
        const i = this.shellIntegration.capabilities.get(4);
        if (!i) return;
        const r = i.getMark(e), s = i.getMark(t);
        r === void 0 || s === void 0 || (this.raw.selectLines(r.line, s.line), n && this.raw.scrollToLine(r.line));
    }
    selectAll() {
        this.raw.focus(), this.raw.selectAll();
    }
    focus() {
        this.raw.focus();
    }
    async copySelection(e, t) {
        if (this._tooltipService.registerEvent("terminal.copy"), this.hasSelection() || e && t) {
            const i = this._terminalUri;
            if (e) {
                let r = function(a) {
                    a.clipboardData.types.includes("text/plain") || a.clipboardData.setData("text/plain", t?.getOutput() ?? ""), a.clipboardData.setData("text/html", s), a.preventDefault();
                };
                var n = r;
                const s = await this.getSelectionAsHtml(t), o = Bgi(this.raw.element);
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
        } else this._notificationService.warn(S(10408, null));
    }
    get selectionRange() {
        const e = this.hasSelection() ? this.raw.getSelectionPosition() : void 0;
        if (e) return {
            selectionStartColumn: e.start.x,
            selectionStartLineNumber: e.start.y + 1,
            positionColumn: e.end.x,
            positionLineNumber: e.end.y + 1
        };
    }
    _setTextBlinking(e) {
        const t = e ? 600 : 0, n = this.raw.options;
        n.blinkIntervalDuration !== t && (n.blinkIntervalDuration = t);
    }
    _reportHighScrollbackIfNeeded(e) {
        if (!(lMo || !(e > cMo))) {
            lMo = !0;
            try {
                const t = this._configurationService.inspect("terminal.integrated.scrollback"), n = t.userValue !== void 0 ? "user" : t.workspaceValue !== void 0 ? "workspace" : t.workspaceFolderValue !== void 0 ? "workspaceFolder" : "other";
                Km(new Error("High terminal.integrated.scrollback"), {
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
                            scrollback: e,
                            estimatedBytesPerTerminal: e * 4,
                            threshold: cMo
                        }
                    }
                });
            } catch  {}
        }
    }
    _setCursorBlink(e) {
        this.raw.options.cursorBlink !== e && (this.raw.options.cursorBlink = e, this.raw.refresh(0, this.raw.rows - 1));
    }
    _setCursorStyle(e) {
        const t = Gir(e);
        this.raw.options.cursorStyle !== t && (this.raw.options.cursorStyle = t);
    }
    _setCursorStyleInactive(e) {
        const t = Gir(e);
        this.raw.options.cursorInactiveStyle !== t && (this.raw.options.cursorInactiveStyle = t);
    }
    _setCursorWidth(e) {
        this.raw.options.cursorWidth !== e && (this.raw.options.cursorWidth = e);
    }
    async _enableWebglRenderer() {
        if (!this.raw.element || this._webglAddon && this._webglAddonCustomGlyphs === this._terminalConfigurationService.config.customGlyphs) return;
        this._webglAddonCustomGlyphs = this._terminalConfigurationService.config.customGlyphs, this._disposeOfWebglRenderer();
        const e = await this._xtermAddonLoader.importAddon("webgl");
        this._webglAddon = new e({
            customGlyphs: this._terminalConfigurationService.config.customGlyphs
        });
        try {
            this.raw.loadAddon(this._webglAddon), this._logService.trace("Webgl was loaded"), this._webglAddon.onContextLoss(()=>{
                this._logService.info("Webgl lost context, disposing of webgl renderer"), this._disposeOfWebglRenderer();
            }), this._refreshImageAddon(), this._onDidRequestRefreshDimensions.fire();
        } catch (t) {
            this._logService.warn("Webgl could not be loaded. Falling back to the DOM renderer", t), CTe._suggestedRendererType = "dom", this._disposeOfWebglRenderer();
        }
    }
    async _refreshLigaturesAddon() {
        if (!this.raw.element) return;
        const e = this._terminalConfigurationService.config.fontLigatures;
        let t = !1;
        if (e?.enabled) {
            const n = {
                fontFeatureSettings: e.featureSettings,
                fallbackLigatures: e.fallbackLigatures
            };
            if (this._ligaturesAddon.value && !yh(n, this._ligaturesAddonConfig) && (this._ligaturesAddon.clear(), this._ligaturesAddonConfig = void 0), !this._ligaturesAddon.value) {
                const i = await this._xtermAddonLoader.importAddon("ligatures");
                if (this._store.isDisposed) return;
                this._ligaturesAddon.value = this._instantiationService.createInstance(i, n), this._ligaturesAddonConfig = n, this.raw.loadAddon(this._ligaturesAddon.value), t = !0;
            }
        } else {
            if (!this._ligaturesAddon.value) return;
            this._ligaturesAddon.clear(), this._ligaturesAddonConfig = void 0, t = !0;
        }
        t && this._webglAddon && (this._disposeOfWebglRenderer(), await this._enableWebglRenderer());
    }
    async _refreshImageAddon() {
        if (this._terminalConfigurationService.config.enableImages && this._webglAddon) {
            if (!this._imageAddon) {
                const e = await this._xtermAddonLoader.importAddon("image");
                this._imageAddon = new e, this.raw.loadAddon(this._imageAddon);
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
    getXtermTheme(e) {
        e || (e = this._themeService.getColorTheme());
        const t = this._terminalConfigurationService.config, n = [
            "never",
            "gutter"
        ].includes(t.shellIntegration?.decorationsEnabled ?? ""), i = e.getColor(FDo), r = this._xtermColorProvider.getBackgroundColor(e), s = e.getColor(c5h) || i, o = e.getColor(l5h) || r, a = e.getColor(dzt), c = e.getColor(u5h), l = e.getColor(d5h) || void 0;
        return {
            background: r?.toString(),
            foreground: i?.toString(),
            cursor: s?.toString(),
            cursorAccent: o?.toString(),
            selectionBackground: a?.toString(),
            selectionInactiveBackground: c?.toString(),
            selectionForeground: l?.toString(),
            overviewRulerBorder: n ? "#0000" : e.getColor(g5h)?.toString(),
            scrollbarSliderActiveBackground: e.getColor(ipt)?.toString(),
            scrollbarSliderBackground: e.getColor(tpt)?.toString(),
            scrollbarSliderHoverBackground: e.getColor(npt)?.toString(),
            black: e.getColor(t4[0])?.toString(),
            red: e.getColor(t4[1])?.toString(),
            green: e.getColor(t4[2])?.toString(),
            yellow: e.getColor(t4[3])?.toString(),
            blue: e.getColor(t4[4])?.toString(),
            magenta: e.getColor(t4[5])?.toString(),
            cyan: e.getColor(t4[6])?.toString(),
            white: e.getColor(t4[7])?.toString(),
            brightBlack: e.getColor(t4[8])?.toString(),
            brightRed: e.getColor(t4[9])?.toString(),
            brightGreen: e.getColor(t4[10])?.toString(),
            brightYellow: e.getColor(t4[11])?.toString(),
            brightBlue: e.getColor(t4[12])?.toString(),
            brightMagenta: e.getColor(t4[13])?.toString(),
            brightCyan: e.getColor(t4[14])?.toString(),
            brightWhite: e.getColor(t4[15])?.toString()
        };
    }
    _updateTheme(e) {
        this.raw.options.theme = this.getXtermTheme(e);
    }
    refresh() {
        this._updateTheme(), this._decorationAddon.refreshLayouts();
    }
    async _updateUnicodeVersion() {
        if (!this._unicode11Addon && this._terminalConfigurationService.config.unicodeVersion === "11") {
            const e = await this._xtermAddonLoader.importAddon("unicode11");
            this._unicode11Addon = new e, this.raw.loadAddon(this._unicode11Addon);
        }
        this.raw.unicode.activeVersion !== this._terminalConfigurationService.config.unicodeVersion && (this.raw.unicode.activeVersion = this._terminalConfigurationService.config.unicodeVersion);
    }
    _writeText(e) {
        this.raw.write(e);
    }
    dispose() {
        this._anyTerminalFocusContextKey.reset(), this._anyFocusedTerminalHasSelection.reset(), this._onDidDispose.fire(), super.dispose();
    }
}, CTe._suggestedRendererType = void 0, ie([
    cU(100)
], CTe.prototype, "_refreshLigaturesAddon", null), ie([
    cU(100)
], CTe.prototype, "_refreshImageAddon", null), CTe = ie([
    C(3, qt),
    C(4, _t),
    C(5, RN),
    C(6, di),
    C(7, $r),
    C(8, r8),
    C(9, zu),
    C(10, xn),
    C(11, A0),
    C(12, PK),
    C(13, XT),
    C(14, Id),
    C(15, hC)
], CTe);

}
