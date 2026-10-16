import { Di, Gt, Qe, Zm, st, tt } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { bo } from "./arrays.js";
import { A_, _7, bbt } from "./browser_2.js";
import { Hn, Wve, ws } from "./dom_2.js";
import { Kbt, cjo, o9d, s2 } from "./editorOptions.js";
import { fyt, sHo } from "./editorZoom.js";
import { K0r, V0r } from "./elementSizeObserver.js";
import { X0r, fsi } from "./fontInfo.js";
import { lHo, vyt } from "./fontMeasurements.js";
import { Mbt, Ykr } from "./inputMode.js";
import { jUd } from "./migrateOptions.js";
import { cp } from "./objects.js";
import { Vtt, gsi } from "./pixelRatio.js";
import { KAe, aBt } from "./tabFocus.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { HUd, iMy, nMy } from "./ze.js";
var Z0r, WUd, GUd, yfn;
export { GUd, WUd, Z0r, yfn };
var __wakaru_rMy_initialized = false;
export function rMy() {
if (__wakaru_rMy_initialized) return;
__wakaru_rMy_initialized = true;
"use strict";
E(), A_(), bo(), Gt(), Qe(), cp(), Di(), K0r(), lHo(), jUd(), aBt(), s2(), sHo(), X0r(), Ty(), Hn(), gsi(), Ykr(), Z0r = class extends st {
    constructor(t, e, n, i, r, s = !1, o = void 0){
        super(), this._accessibilityService = r, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onDidChangeFast = this._register(new tt), this.onDidChangeFast = this._onDidChangeFast.event, this._isDominatedByLongLines = !1, this._viewLineCount = 1, this._lineNumbersDigitCount = 1, this._reservedHeight = 0, this._glyphMarginDecorationLaneCount = 1, this._computeOptionsMemory = new cjo, this.isSimpleWidget = t, this.isChatCodeblock = s, this.cursorCodeBlockType = o, this.contextMenuId = e, this._containerObserver = this._register(new V0r(i, n.dimension)), this._targetWindowId = ws(i).vscodeWindowId, this._rawOptions = HUd(n), this._validatedOptions = yfn.validateOptions(this._rawOptions), this.options = this._computeOptions(), (this.options.get(13) || this.options.get(156)) && this._containerObserver.startObserving(this.options.get(156)), this._register(fyt.onDidChangeZoomLevel(()=>this._recomputeOptions())), this._register(KAe.onDidChangeTabFocus(()=>this._recomputeOptions())), this._register(this._containerObserver.onDidChange(()=>this._recomputeOptions())), this._register(vyt.onDidChange(()=>this._recomputeOptions())), this._register(Vtt.getInstance(ws(i)).onDidChange(()=>this._recomputeOptions())), this._register(this._accessibilityService.onDidChangeScreenReaderOptimized(()=>this._recomputeOptions())), this._register(Mbt.onDidChangeInputMode(()=>this._recomputeOptions()));
    }
    _recomputeOptions() {
        const t = this._computeOptions(), e = yfn.checkEquals(this.options, t);
        e !== null && (this.options = t, this._onDidChangeFast.fire(e), this._onDidChange.fire(e));
    }
    _computeOptions() {
        const t = this._readEnvConfiguration(), e = fsi.createFromValidatedSettings(this._validatedOptions, t.pixelRatio, this.isSimpleWidget && this.cursorCodeBlockType !== "cppPreviewBox"), n = this._readFontInfo(e), i = {
            memory: this._computeOptionsMemory,
            outerWidth: t.outerWidth,
            outerHeight: t.outerHeight - this._reservedHeight,
            fontInfo: n,
            extraEditorClassName: t.extraEditorClassName,
            isDominatedByLongLines: this._isDominatedByLongLines,
            viewLineCount: this._viewLineCount,
            lineNumbersDigitCount: this._lineNumbersDigitCount,
            emptySelectionClipboard: t.emptySelectionClipboard,
            pixelRatio: t.pixelRatio,
            tabFocusMode: KAe.getTabFocusMode(),
            inputMode: Mbt.getInputMode(),
            accessibilitySupport: t.accessibilitySupport,
            glyphMarginDecorationLaneCount: this._glyphMarginDecorationLaneCount
        };
        return yfn.computeOptions(this._validatedOptions, i);
    }
    _readEnvConfiguration() {
        return {
            extraEditorClassName: iMy(),
            outerWidth: this._containerObserver.getWidth(),
            outerHeight: this._containerObserver.getHeight(),
            emptySelectionClipboard: bbt || _7,
            pixelRatio: Vtt.getInstance(Wve(this._targetWindowId, !0).window).value,
            accessibilitySupport: this._accessibilityService.isScreenReaderOptimized() ? 2 : this._accessibilityService.getAccessibilitySupport()
        };
    }
    _readFontInfo(t) {
        return vyt.readFontInfo(Wve(this._targetWindowId, !0).window, t);
    }
    getRawOptions() {
        return this._rawOptions;
    }
    updateOptions(t) {
        const e = HUd(t);
        yfn.applyUpdate(this._rawOptions, e) && (this._validatedOptions = yfn.validateOptions(this._rawOptions), this._recomputeOptions());
    }
    observeContainer(t) {
        this._containerObserver.observe(t);
    }
    setIsDominatedByLongLines(t) {
        this._isDominatedByLongLines !== t && (this._isDominatedByLongLines = t, this._recomputeOptions());
    }
    setModelLineCount(t) {
        const e = nMy(t);
        this._lineNumbersDigitCount !== e && (this._lineNumbersDigitCount = e, this._recomputeOptions());
    }
    setViewLineCount(t) {
        this._viewLineCount !== t && (this._viewLineCount = t, this._recomputeOptions());
    }
    setReservedHeight(t) {
        this._reservedHeight !== t && (this._reservedHeight = t, this._recomputeOptions());
    }
    setGlyphMarginDecorationLaneCount(t) {
        this._glyphMarginDecorationLaneCount !== t && (this._glyphMarginDecorationLaneCount = t, this._recomputeOptions());
    }
}, Z0r = Re([
    F(4, GS)
], Z0r), WUd = class {
    constructor(){
        this._values = [];
    }
    _read(t) {
        return this._values[t];
    }
    get(t) {
        return this._values[t];
    }
    _write(t, e) {
        this._values[t] = e;
    }
}, GUd = class {
    constructor(){
        this._values = [];
    }
    _read(t) {
        if (t >= this._values.length) throw new Error("Cannot read uninitialized value");
        return this._values[t];
    }
    get(t) {
        return this._read(t);
    }
    _write(t, e) {
        this._values[t] = e;
    }
}, yfn = class pJc {
    static validateOptions(e) {
        const n = new WUd;
        for (const i of Kbt){
            const r = i.name === "_never_" ? void 0 : e[i.name];
            n._write(i.id, i.validate(r));
        }
        return n;
    }
    static computeOptions(e, n) {
        const i = new GUd;
        for (const r of Kbt)i._write(r.id, r.compute(n, i, e._read(r.id)));
        return i;
    }
    static _deepEquals(e, n) {
        if (typeof e != "object" || typeof n != "object" || !e || !n) return e === n;
        if (Array.isArray(e) || Array.isArray(n)) return Array.isArray(e) && Array.isArray(n) ? Zm(e, n) : !1;
        if (Object.keys(e).length !== Object.keys(n).length) return !1;
        for(const i in e)if (!pJc._deepEquals(e[i], n[i])) return !1;
        return !0;
    }
    static checkEquals(e, n) {
        const i = [];
        let r = !1;
        for (const s of Kbt){
            const o = !pJc._deepEquals(e._read(s.id), n._read(s.id));
            i[s.id] = o, o && (r = !0);
        }
        return r ? new o9d(i) : null;
    }
    static applyUpdate(e, n) {
        let i = !1;
        for (const r of Kbt)if (n.hasOwnProperty(r.name)) {
            const s = r.applyUpdate(e[r.name], n[r.name]);
            e[r.name] = s.newValue, i = i || s.didChange;
        }
        return i;
    }
};

}
