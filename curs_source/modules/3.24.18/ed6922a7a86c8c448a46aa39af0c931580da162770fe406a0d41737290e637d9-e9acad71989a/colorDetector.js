import { He, Mqe, Ps, Se, Wb, bt, ns, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn, wE } from "./async.js";
import { $s, Sm } from "./color.js";
import { xyi } from "./color_2.js";
import { Cn, qt } from "./configuration.js";
import { hes, jOt } from "./editorDom.js";
import { TJ, nfe } from "./languageFeatureDebounce.js";
import { Jc, kh } from "./languageFeatures.js";
import { l$c } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Vy, aA } from "./stopwatch.js";
import { Mv, Vd } from "./textModel.js";
import { x } from "./tslib.es6.js";
var Lis, rfe, g$c;
export { Lis, g$c, rfe };
var __wakaru_GFt_initialized = false;
export function GFt() {
if (__wakaru_GFt_initialized) return;
__wakaru_GFt_initialized = true;
"use strict";
x(), bn(), Sm(), si(), bt(), Se(), aA(), Ps(), jOt(), qi(), Mv(), nfe(), kh(), xyi(), Cn(), Lis = Object.create({}), rfe = class extends we {
    constructor(e, t, n, i){
        super(), this._editor = e, this._configurationService = t, this._languageFeaturesService = n, this._localToDispose = this._register(new He), this._decorationsIds = [], this._colorDatas = new Map, this._decoratorLimitReporter = this._register(new g$c), this._colorDecorationClassRefs = this._register(new He), this._colorDecoratorIds = this._editor.createDecorationsCollection(), this._ruleFactory = new hes(this._editor), this._debounceInformation = i.for(n.colorProvider, "Document Colors", {
            min: rfe.RECOMPUTE_TIME
        }), this._register(e.onDidChangeModel(()=>{
            this._isColorDecoratorsEnabled = this.isEnabled(), this.updateColors();
        })), this._register(e.onDidChangeModelLanguage(()=>this.updateColors())), this._register(n.colorProvider.onDidChange(()=>this.updateColors())), this._register(e.onDidChangeConfiguration((r)=>{
            const s = this._isColorDecoratorsEnabled;
            this._isColorDecoratorsEnabled = this.isEnabled(), this._defaultColorDecoratorsEnablement = this._editor.getOption(153);
            const o = s !== this._isColorDecoratorsEnabled || r.hasChanged(21), a = r.hasChanged(153);
            (o || a) && (this._isColorDecoratorsEnabled ? this.updateColors() : this.removeAllDecorations());
        })), this._timeoutTimer = null, this._computePromise = null, this._isColorDecoratorsEnabled = this.isEnabled(), this._defaultColorDecoratorsEnablement = this._editor.getOption(153), this.updateColors();
    }
    isEnabled() {
        const e = this._editor.getModel();
        if (!e) return !1;
        const t = e.getLanguageId(), n = this._configurationService.getValue(t);
        if (n && typeof n == "object") {
            const i = n.colorDecorators;
            if (i && i.enable !== void 0 && !i.enable) return i.enable;
        }
        return this._editor.getOption(20);
    }
    get limitReporter() {
        return this._decoratorLimitReporter;
    }
    static get(e) {
        return e.getContribution(this.ID);
    }
    dispose() {
        this.stop(), this.removeAllDecorations(), super.dispose();
    }
    updateColors() {
        if (this.stop(), !this._isColorDecoratorsEnabled) return;
        const e = this._editor.getModel();
        !e || !this._languageFeaturesService.colorProvider.has(e) || (this._localToDispose.add(this._editor.onDidChangeModelContent(()=>{
            this._timeoutTimer || (this._timeoutTimer = new wE, this._timeoutTimer.cancelAndSet(()=>{
                this._timeoutTimer = null, this.beginCompute();
            }, this._debounceInformation.get(e)));
        })), this.beginCompute());
    }
    async beginCompute() {
        this._computePromise = Wb(async (e)=>{
            const t = this._editor.getModel();
            if (!t) return [];
            const n = new Vy(!1), i = await l$c(this._languageFeaturesService.colorProvider, t, e, this._defaultColorDecoratorsEnablement);
            return this._debounceInformation.update(t, n.elapsed()), i;
        });
        try {
            const e = await this._computePromise;
            this.updateDecorations(e), this.updateColorDecorators(e), this._computePromise = null;
        } catch (e) {
            ns(e);
        }
    }
    stop() {
        this._timeoutTimer && (this._timeoutTimer.cancel(), this._timeoutTimer = null), this._computePromise && (this._computePromise.cancel(), this._computePromise = null), this._localToDispose.clear();
    }
    updateDecorations(e) {
        const t = e.map((n)=>({
                range: {
                    startLineNumber: n.colorInfo.range.startLineNumber,
                    startColumn: n.colorInfo.range.startColumn,
                    endLineNumber: n.colorInfo.range.endLineNumber,
                    endColumn: n.colorInfo.range.endColumn
                },
                options: Vd.EMPTY
            }));
        this._editor.changeDecorations((n)=>{
            this._decorationsIds = n.deltaDecorations(this._decorationsIds, t), this._colorDatas = new Map, this._decorationsIds.forEach((i, r)=>this._colorDatas.set(i, e[r]));
        });
    }
    updateColorDecorators(e) {
        this._colorDecorationClassRefs.clear();
        const t = [], n = this._editor.getOption(21);
        for(let r = 0; r < e.length && t.length < n; r++){
            const { red: s, green: o, blue: a, alpha: c } = e[r].colorInfo.color, l = new $s(Math.round(s * 255), Math.round(o * 255), Math.round(a * 255), c), u = `rgba(${l.r}, ${l.g}, ${l.b}, ${l.a})`, h = this._colorDecorationClassRefs.add(this._ruleFactory.createClassNameRef({
                backgroundColor: u
            }));
            t.push({
                range: {
                    startLineNumber: e[r].colorInfo.range.startLineNumber,
                    startColumn: e[r].colorInfo.range.startColumn,
                    endLineNumber: e[r].colorInfo.range.endLineNumber,
                    endColumn: e[r].colorInfo.range.endColumn
                },
                options: {
                    description: "colorDetector",
                    before: {
                        content: Mqe,
                        inlineClassName: `${h.className} colorpicker-color-decoration`,
                        inlineClassNameAffectsLetterSpacing: !0,
                        attachedData: Lis
                    }
                }
            });
        }
        const i = n < e.length ? n : !1;
        this._decoratorLimitReporter.update(e.length, i), this._colorDecoratorIds.set(t);
    }
    removeAllDecorations() {
        this._editor.removeDecorations(this._decorationsIds), this._decorationsIds = [], this._colorDecoratorIds.clear(), this._colorDecorationClassRefs.clear();
    }
    getColorData(e) {
        const t = this._editor.getModel();
        if (!t) return null;
        const n = t.getDecorationsInRange(dt.fromPositions(e, e)).filter((i)=>this._colorDatas.has(i.id));
        return n.length === 0 ? null : this._colorDatas.get(n[0].id);
    }
    isColorDecoration(e) {
        return this._colorDecoratorIds.has(e);
    }
}, rfe.ID = "editor.contrib.colorDetector", rfe.RECOMPUTE_TIME = 1e3, rfe = ie([
    C(1, qt),
    C(2, Jc),
    C(3, TJ)
], rfe), g$c = class extends we {
    constructor(){
        super(...arguments), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._computed = 0, this._limited = !1;
    }
    get computed() {
        return this._computed;
    }
    get limited() {
        return this._limited;
    }
    update(e, t) {
        (e !== this._computed || t !== this._limited) && (this._computed = e, this._limited = t, this._onDidChange.fire());
    }
};

}
