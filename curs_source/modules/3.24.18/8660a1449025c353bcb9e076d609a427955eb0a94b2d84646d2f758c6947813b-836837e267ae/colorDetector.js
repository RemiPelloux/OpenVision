import { Ei, Fa, Gt, Nt, Qe, XE, mmr, st, tt, xr } from "./Iwo.js";
import { ZE, qn } from "./async.js";
import { _b, la } from "./color.js";
import { kEr } from "./color_2.js";
import { or, yi } from "./configuration.js";
import { Cfn, gHo } from "./editorDom.js";
import { Twe, xHe } from "./languageFeatureDebounce.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Qs, qt } from "./range.js";
import { D3, Xw } from "./stopwatch.js";
import { Kg, PC } from "./textModel.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { tVd } from "./ze.js";
var azo, P5e, aVd;
export { P5e, aVd, azo };
var __wakaru_Loi_initialized = false;
export function Loi() {
if (__wakaru_Loi_initialized) return;
__wakaru_Loi_initialized = true;
"use strict";
E(), qn(), _b(), Ei(), Gt(), Qe(), D3(), Fa(), Cfn(), Qs(), PC(), xHe(), Dg(), kEr(), or(), azo = Object.create({}), P5e = class extends st {
    constructor(t, e, n, i){
        super(), this._editor = t, this._configurationService = e, this._languageFeaturesService = n, this._localToDispose = this._register(new Nt), this._decorationsIds = [], this._colorDatas = new Map, this._decoratorLimitReporter = this._register(new aVd), this._colorDecorationClassRefs = this._register(new Nt), this._colorDecoratorIds = this._editor.createDecorationsCollection(), this._ruleFactory = new gHo(this._editor), this._debounceInformation = i.for(n.colorProvider, "Document Colors", {
            min: P5e.RECOMPUTE_TIME
        }), this._register(t.onDidChangeModel(()=>{
            this._isColorDecoratorsEnabled = this.isEnabled(), this.updateColors();
        })), this._register(t.onDidChangeModelLanguage(()=>this.updateColors())), this._register(n.colorProvider.onDidChange(()=>this.updateColors())), this._register(t.onDidChangeConfiguration((r)=>{
            const s = this._isColorDecoratorsEnabled;
            this._isColorDecoratorsEnabled = this.isEnabled(), this._defaultColorDecoratorsEnablement = this._editor.getOption(153);
            const o = s !== this._isColorDecoratorsEnabled || r.hasChanged(21), a = r.hasChanged(153);
            (o || a) && (this._isColorDecoratorsEnabled ? this.updateColors() : this.removeAllDecorations());
        })), this._timeoutTimer = null, this._computePromise = null, this._isColorDecoratorsEnabled = this.isEnabled(), this._defaultColorDecoratorsEnablement = this._editor.getOption(153), this.updateColors();
    }
    isEnabled() {
        const t = this._editor.getModel();
        if (!t) return !1;
        const e = t.getLanguageId(), n = this._configurationService.getValue(e);
        if (n && typeof n == "object") {
            const i = n.colorDecorators;
            if (i && i.enable !== void 0 && !i.enable) return i.enable;
        }
        return this._editor.getOption(20);
    }
    get limitReporter() {
        return this._decoratorLimitReporter;
    }
    static get(t) {
        return t.getContribution(this.ID);
    }
    dispose() {
        this.stop(), this.removeAllDecorations(), super.dispose();
    }
    updateColors() {
        if (this.stop(), !this._isColorDecoratorsEnabled) return;
        const t = this._editor.getModel();
        !t || !this._languageFeaturesService.colorProvider.has(t) || (this._localToDispose.add(this._editor.onDidChangeModelContent(()=>{
            this._timeoutTimer || (this._timeoutTimer = new ZE, this._timeoutTimer.cancelAndSet(()=>{
                this._timeoutTimer = null, this.beginCompute();
            }, this._debounceInformation.get(t)));
        })), this.beginCompute());
    }
    async beginCompute() {
        this._computePromise = XE(async (t)=>{
            const e = this._editor.getModel();
            if (!e) return [];
            const n = new Xw(!1), i = await tVd(this._languageFeaturesService.colorProvider, e, t, this._defaultColorDecoratorsEnablement);
            return this._debounceInformation.update(e, n.elapsed()), i;
        });
        try {
            const t = await this._computePromise;
            this.updateDecorations(t), this.updateColorDecorators(t), this._computePromise = null;
        } catch (t) {
            xr(t);
        }
    }
    stop() {
        this._timeoutTimer && (this._timeoutTimer.cancel(), this._timeoutTimer = null), this._computePromise && (this._computePromise.cancel(), this._computePromise = null), this._localToDispose.clear();
    }
    updateDecorations(t) {
        const e = t.map((n)=>({
                range: {
                    startLineNumber: n.colorInfo.range.startLineNumber,
                    startColumn: n.colorInfo.range.startColumn,
                    endLineNumber: n.colorInfo.range.endLineNumber,
                    endColumn: n.colorInfo.range.endColumn
                },
                options: Kg.EMPTY
            }));
        this._editor.changeDecorations((n)=>{
            this._decorationsIds = n.deltaDecorations(this._decorationsIds, e), this._colorDatas = new Map, this._decorationsIds.forEach((i, r)=>this._colorDatas.set(i, t[r]));
        });
    }
    updateColorDecorators(t) {
        this._colorDecorationClassRefs.clear();
        const e = [], n = this._editor.getOption(21);
        for(let r = 0; r < t.length && e.length < n; r++){
            const { red: s, green: o, blue: a, alpha: l } = t[r].colorInfo.color, c = new la(Math.round(s * 255), Math.round(o * 255), Math.round(a * 255), l), u = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`, d = this._colorDecorationClassRefs.add(this._ruleFactory.createClassNameRef({
                backgroundColor: u
            }));
            e.push({
                range: {
                    startLineNumber: t[r].colorInfo.range.startLineNumber,
                    startColumn: t[r].colorInfo.range.startColumn,
                    endLineNumber: t[r].colorInfo.range.endLineNumber,
                    endColumn: t[r].colorInfo.range.endColumn
                },
                options: {
                    description: "colorDetector",
                    before: {
                        content: mmr,
                        inlineClassName: `${d.className} colorpicker-color-decoration`,
                        inlineClassNameAffectsLetterSpacing: !0,
                        attachedData: azo
                    }
                }
            });
        }
        const i = n < t.length ? n : !1;
        this._decoratorLimitReporter.update(t.length, i), this._colorDecoratorIds.set(e);
    }
    removeAllDecorations() {
        this._editor.removeDecorations(this._decorationsIds), this._decorationsIds = [], this._colorDecoratorIds.clear(), this._colorDecorationClassRefs.clear();
    }
    getColorData(t) {
        const e = this._editor.getModel();
        if (!e) return null;
        const n = e.getDecorationsInRange(qt.fromPositions(t, t)).filter((i)=>this._colorDatas.has(i.id));
        return n.length === 0 ? null : this._colorDatas.get(n[0].id);
    }
    isColorDecoration(t) {
        return this._colorDecoratorIds.has(t);
    }
}, P5e.ID = "editor.contrib.colorDetector", P5e.RECOMPUTE_TIME = 1e3, P5e = Re([
    F(1, yi),
    F(2, Nd),
    F(3, Twe)
], P5e), aVd = class extends st {
    constructor(){
        super(...arguments), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._computed = 0, this._limited = !1;
    }
    get computed() {
        return this._computed;
    }
    get limited() {
        return this._limited;
    }
    update(t, e) {
        (t !== this._computed || e !== this._limited) && (this._computed = t, this._limited = e, this._onDidChange.fire());
    }
};

}
