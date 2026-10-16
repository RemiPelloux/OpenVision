import { Se, bt, jn, nh, ve, we } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { Gqe, i5, n_ } from "./browser_2.js";
import { en, ere, xi } from "./dom_2.js";
import { D2c, JZr, _ze, m1 } from "./editorOptions.js";
import { Tle, w_i } from "./editorZoom.js";
import { f5c, ies } from "./elementSizeObserver.js";
import { Ele, Twe } from "./fontInfo.js";
import { Bpt, Gge } from "./fontMeasurements.js";
import { Qqe, afi } from "./inputMode.js";
import { T5c } from "./migrateOptions.js";
import { bu } from "./objects.js";
import { SJ, d5 } from "./pixelRatio.js";
import { dvg, uvg, x5c } from "./qIc.js";
import { Ewe, Wfn } from "./tabFocus.js";
import { x } from "./tslib.es6.js";
var Gfn, I5c, A5c, HOt;
export { A5c, Gfn, HOt, I5c };
var __wakaru_R5c_initialized = false;
export function R5c() {
if (__wakaru_R5c_initialized) return;
__wakaru_R5c_initialized = true;
"use strict";
x(), n_(), dr(), bt(), Se(), bu(), jn(), f5c(), Bpt(), T5c(), Wfn(), m1(), w_i(), Twe(), Op(), en(), SJ(), afi(), Gfn = class extends we {
    constructor(e, t, n, i, r, s = !1, o = void 0){
        super(), this._accessibilityService = r, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._onDidChangeFast = this._register(new ve), this.onDidChangeFast = this._onDidChangeFast.event, this._isDominatedByLongLines = !1, this._viewLineCount = 1, this._lineNumbersDigitCount = 1, this._reservedHeight = 0, this._glyphMarginDecorationLaneCount = 1, this._computeOptionsMemory = new JZr, this.isSimpleWidget = e, this.isChatCodeblock = s, this.cursorCodeBlockType = o, this.contextMenuId = t, this._containerObserver = this._register(new ies(i, n.dimension)), this._targetWindowId = xi(i).vscodeWindowId, this._rawOptions = x5c(n), this._validatedOptions = HOt.validateOptions(this._rawOptions), this.options = this._computeOptions(), (this.options.get(13) || this.options.get(156)) && this._containerObserver.startObserving(this.options.get(156)), this._register(Tle.onDidChangeZoomLevel(()=>this._recomputeOptions())), this._register(Ewe.onDidChangeTabFocus(()=>this._recomputeOptions())), this._register(this._containerObserver.onDidChange(()=>this._recomputeOptions())), this._register(Gge.onDidChange(()=>this._recomputeOptions())), this._register(d5.getInstance(xi(i)).onDidChange(()=>this._recomputeOptions())), this._register(this._accessibilityService.onDidChangeScreenReaderOptimized(()=>this._recomputeOptions())), this._register(Qqe.onDidChangeInputMode(()=>this._recomputeOptions()));
    }
    _recomputeOptions() {
        const e = this._computeOptions(), t = HOt.checkEquals(this.options, e);
        t !== null && (this.options = e, this._onDidChangeFast.fire(t), this._onDidChange.fire(t));
    }
    _computeOptions() {
        const e = this._readEnvConfiguration(), t = Ele.createFromValidatedSettings(this._validatedOptions, e.pixelRatio, this.isSimpleWidget && this.cursorCodeBlockType !== "cppPreviewBox"), n = this._readFontInfo(t), i = {
            memory: this._computeOptionsMemory,
            outerWidth: e.outerWidth,
            outerHeight: e.outerHeight - this._reservedHeight,
            fontInfo: n,
            extraEditorClassName: e.extraEditorClassName,
            isDominatedByLongLines: this._isDominatedByLongLines,
            viewLineCount: this._viewLineCount,
            lineNumbersDigitCount: this._lineNumbersDigitCount,
            emptySelectionClipboard: e.emptySelectionClipboard,
            pixelRatio: e.pixelRatio,
            tabFocusMode: Ewe.getTabFocusMode(),
            inputMode: Qqe.getInputMode(),
            accessibilitySupport: e.accessibilitySupport,
            glyphMarginDecorationLaneCount: this._glyphMarginDecorationLaneCount
        };
        return HOt.computeOptions(this._validatedOptions, i);
    }
    _readEnvConfiguration() {
        return {
            extraEditorClassName: dvg(),
            outerWidth: this._containerObserver.getWidth(),
            outerHeight: this._containerObserver.getHeight(),
            emptySelectionClipboard: Gqe || i5,
            pixelRatio: d5.getInstance(ere(this._targetWindowId, !0).window).value,
            accessibilitySupport: this._accessibilityService.isScreenReaderOptimized() ? 2 : this._accessibilityService.getAccessibilitySupport()
        };
    }
    _readFontInfo(e) {
        return Gge.readFontInfo(ere(this._targetWindowId, !0).window, e);
    }
    getRawOptions() {
        return this._rawOptions;
    }
    updateOptions(e) {
        const t = x5c(e);
        HOt.applyUpdate(this._rawOptions, t) && (this._validatedOptions = HOt.validateOptions(this._rawOptions), this._recomputeOptions());
    }
    observeContainer(e) {
        this._containerObserver.observe(e);
    }
    setIsDominatedByLongLines(e) {
        this._isDominatedByLongLines !== e && (this._isDominatedByLongLines = e, this._recomputeOptions());
    }
    setModelLineCount(e) {
        const t = uvg(e);
        this._lineNumbersDigitCount !== t && (this._lineNumbersDigitCount = t, this._recomputeOptions());
    }
    setViewLineCount(e) {
        this._viewLineCount !== e && (this._viewLineCount = e, this._recomputeOptions());
    }
    setReservedHeight(e) {
        this._reservedHeight !== e && (this._reservedHeight = e, this._recomputeOptions());
    }
    setGlyphMarginDecorationLaneCount(e) {
        this._glyphMarginDecorationLaneCount !== e && (this._glyphMarginDecorationLaneCount = e, this._recomputeOptions());
    }
}, Gfn = ie([
    C(4, ym)
], Gfn), I5c = class {
    constructor(){
        this._values = [];
    }
    _read(e) {
        return this._values[e];
    }
    get(e) {
        return this._values[e];
    }
    _write(e, t) {
        this._values[e] = t;
    }
}, A5c = class {
    constructor(){
        this._values = [];
    }
    _read(e) {
        if (e >= this._values.length) throw new Error("Cannot read uninitialized value");
        return this._values[e];
    }
    get(e) {
        return this._read(e);
    }
    _write(e, t) {
        this._values[e] = t;
    }
}, HOt = class RIa {
    static validateOptions(t) {
        const n = new I5c;
        for (const i of _ze){
            const r = i.name === "_never_" ? void 0 : t[i.name];
            n._write(i.id, i.validate(r));
        }
        return n;
    }
    static computeOptions(t, n) {
        const i = new A5c;
        for (const r of _ze)i._write(r.id, r.compute(n, i, t._read(r.id)));
        return i;
    }
    static _deepEquals(t, n) {
        if (typeof t != "object" || typeof n != "object" || !t || !n) return t === n;
        if (Array.isArray(t) || Array.isArray(n)) return Array.isArray(t) && Array.isArray(n) ? nh(t, n) : !1;
        if (Object.keys(t).length !== Object.keys(n).length) return !1;
        for(const i in t)if (!RIa._deepEquals(t[i], n[i])) return !1;
        return !0;
    }
    static checkEquals(t, n) {
        const i = [];
        let r = !1;
        for (const s of _ze){
            const o = !RIa._deepEquals(t._read(s.id), n._read(s.id));
            i[s.id] = o, o && (r = !0);
        }
        return r ? new D2c(i) : null;
    }
    static applyUpdate(t, n) {
        let i = !1;
        for (const r of _ze)if (n.hasOwnProperty(r.name)) {
            const s = r.applyUpdate(t[r.name], n[r.name]);
            t[r.name] = s.newValue, i = i || s.didChange;
        }
        return i;
    }
};

}
