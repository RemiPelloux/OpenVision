import { Hcv, Wcv, eCu } from "./De_3.js";
import { Ct, He, Ps, Se, bt, cn, nh, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { Hc } from "./autorun.js";
import { HP, Iw } from "./codeEditorWidget.js";
import { Pe, _i } from "./codicons.js";
import { WK } from "./domFontInfo.js";
import { en, xi } from "./dom_2.js";
import { m1 } from "./editorOptions.js";
import { o6i, s6i } from "./ghostText.js";
import { $cv } from "./ghostTextView.css";
import { s5e } from "./hotReloadHelpers.js";
import { DE } from "./iconLabels_2.js";
import { kl, pc } from "./language.js";
import { Wze, gW } from "./lineDecorations.js";
import { P7, uA } from "./lineTokens.js";
import { Cb, lW } from "./model_2.js";
import { J_, ew } from "./mouseEvent.js";
import { ef } from "./n.js";
import { qa } from "./observable.js";
import { kW } from "./observableCodeEditor.js";
import { _N, cyt, i4e } from "./offsetEdit.js";
import { Yn, ya } from "./position.js";
import { Ds, Egi, Iwe, Jie, Xo, Xt, g3, gR, h5, ivn, tw, xw, z9, zqe } from "./qIc.js";
import { dt, qi } from "./range.js";
import { lwe } from "./stringBuilder.js";
import { Awe } from "./trustedTypes.js";
import { x } from "./tslib.es6.js";
import { gRn } from "./utils_20.js";
import { Wpt } from "./viewLineRenderer.js";
var THs, EHs, hQe, l6i, tCu, nCu, iCu, _Rn;
export { EHs, THs, _Rn, hQe, iCu, l6i, nCu, tCu };
var __wakaru_u6i_initialized = false;
export function u6i() {
if (__wakaru_u6i_initialized) return;
__wakaru_u6i_initialized = true;
"use strict";
x(), Awe(), DE(), dr(), _i(), bt(), Jie(), s5e(), Se(), qa(), Ps(), WK(), kW(), m1(), cyt(), ya(), qi(), lwe(), kl(), Cb(), P7(), Wze(), Wpt(), o6i(), gRn(), en(), $cv(), ew(), HP(), THs = !0, EHs = "ghost-text", hQe = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._editor = e, this._model = t, this._options = n, this._shouldKeepCursorStable = i, this._isClickable = r, this._languageService = s, this._isDisposed = Xo(this, !1), this._warningState = Ds((o)=>{
            const a = this._model.ghostText.read(o);
            if (!a) return;
            const c = this._model.warning.read(o);
            if (c) return {
                lineNumber: a.lineNumber,
                position: new Yn(a.lineNumber, a.parts[0].column),
                icon: c.icon
            };
        }), this._onDidClick = this._register(new ve), this.onDidClick = this._onDidClick.event, this._editorObs = gR(this._editor), this._useSyntaxHighlighting = this._options.map((o)=>o.syntaxHighlightingEnabled), this._extraClassNames = Ds(this, (o)=>{
            const a = [
                ...this._options.read(o).extraClasses ?? []
            ];
            return this._useSyntaxHighlighting.read(o) && a.push("syntax-highlighted"), THs && this._warningState.read(o) && a.push("warning"), a.map((l)=>` ${l}`).join("");
        }), this.uiState = Ds(this, (o)=>{
            if (this._isDisposed.read(o)) return;
            const a = this._editorObs.model.read(o);
            if (a !== this._model.targetTextModel.read(o)) return;
            const c = this._model.ghostText.read(o);
            if (!c) return;
            const l = c instanceof s6i ? c.columnRange : void 0, u = this._useSyntaxHighlighting.read(o), h = this._extraClassNames.read(o), { inlineTexts: p, additionalLines: g, hiddenRange: f } = Hcv(c, a, EHs + h), v = a.getLineContent(c.lineNumber), b = new i4e(p.map((R)=>_N.insert(R.column - 1, R.text))), y = u ? a.tokenization.tokenizeLinesAt(c.lineNumber, [
                b.apply(v),
                ...g.map((R)=>R.content)
            ]) : void 0, T = b.getNewTextRanges(), E = p.map((R, D)=>({
                    ...R,
                    tokens: y?.[0]?.getTokensInRange(T[D])
                })), A = g.map((R, D)=>new iCu(y?.[D + 1] ?? uA.createEmpty(R.content, this._languageService.languageIdCodec), R.decorations));
            return {
                replacedRange: l,
                inlineTexts: E,
                additionalLines: A,
                hiddenRange: f,
                lineNumber: c.lineNumber,
                additionalReservedLineCount: this._model.minReservedLineCount.read(o),
                targetTextModel: a,
                syntaxHighlightingEnabled: u
            };
        }), this.decorations = Ds(this, (o)=>{
            const a = this.uiState.read(o);
            if (!a) return [];
            const c = [], l = this._extraClassNames.read(o);
            a.replacedRange && c.push({
                range: a.replacedRange.toRange(a.lineNumber),
                options: {
                    inlineClassName: "inline-completion-text-to-replace" + l,
                    description: "GhostTextReplacement"
                }
            }), a.hiddenRange && c.push({
                range: a.hiddenRange.toRange(a.lineNumber),
                options: {
                    inlineClassName: "ghost-text-hidden",
                    description: "ghost-text-hidden"
                }
            });
            for (const u of a.inlineTexts)c.push({
                range: dt.fromPositions(new Yn(a.lineNumber, u.column)),
                options: {
                    description: "ghost-text-decoration",
                    after: {
                        content: u.text,
                        tokens: u.tokens,
                        inlineClassName: (u.preview ? "ghost-text-decoration-preview" : "ghost-text-decoration") + (this._isClickable ? " clickable" : "") + l + u.lineDecorations.map((h)=>" " + h.className).join(" "),
                        cursorStops: lW.Left,
                        attachedData: new l6i(this)
                    },
                    showIfCollapsed: !0
                }
            });
            return c;
        }), this._isInlineTextHovered = this._editorObs.isTargetHovered((o)=>o.target.type === 6 && o.target.detail.injectedText?.options.attachedData instanceof l6i && o.target.detail.injectedText.options.attachedData.owner === this, this._store), this._additionalLinesWidget = this._register(new nCu(this._editor, g3({
            owner: this,
            equalsFn: zqe(Egi())
        }, (o)=>{
            const a = this.uiState.read(o);
            return a ? new tCu(a.targetTextModel, a.lineNumber, a.additionalLines, a.additionalReservedLineCount) : void 0;
        }), this._shouldKeepCursorStable, this._isClickable)), this.isHovered = Ds(this, (o)=>this._isDisposed.read(o) ? !1 : this._isInlineTextHovered.read(o) || this._additionalLinesWidget.isHovered.read(o)), this.height = Ds(this, (o)=>this._editorObs.getOption(68).read(o) + (this._additionalLinesWidget.viewZoneHeight.read(o) ?? 0)), this._register(rn(()=>{
            this._isDisposed.set(!0, void 0);
        })), this._register(this._editorObs.setDecorations(this.decorations)), this._isClickable && (this._register(this._additionalLinesWidget.onDidClick((o)=>this._onDidClick.fire(o))), this._register(this._editor.onMouseUp((o)=>{
            if (o.target.type !== 6) return;
            const a = o.target.detail.injectedText?.options.attachedData;
            a instanceof l6i && a.owner === this && this._onDidClick.fire(o.event);
        }))), this._register(tw((o, a)=>{
            if (THs) return;
            const c = this._warningState.read(o);
            if (!c) return;
            const l = this._editorObs.getOption(68);
            a.add(this._editorObs.createContentWidget({
                position: xw({
                    position: new Yn(c.lineNumber, Number.MAX_SAFE_INTEGER),
                    preference: [
                        0
                    ],
                    positionAffinity: 1
                }),
                allowEditorOverflow: !1,
                domNode: ef.div({
                    class: "ghost-text-view-warning-widget",
                    style: {
                        width: l,
                        height: l,
                        marginLeft: 4,
                        color: "orange"
                    },
                    ref: (u)=>{
                        u.ghostTextViewWarningWidgetData = {
                            range: dt.fromPositions(c.position)
                        };
                    }
                }, [
                    ef.div({
                        class: "ghost-text-view-warning-widget-icon",
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center"
                        }
                    }, [
                        h5(c.icon && "id" in c.icon ? c.icon : Pe.warning)
                    ])
                ]).keepUpdated(a).element
            }));
        }));
    }
    static getWarningWidgetContext(e) {
        const t = e.ghostTextViewWarningWidgetData;
        if (t) return t;
        if (e.parentElement) return this.getWarningWidgetContext(e.parentElement);
    }
    ownsViewZone(e) {
        return this._additionalLinesWidget.viewZoneId === e;
    }
}, hQe.hot = ivn(hQe), hQe = ie([
    C(5, pc)
], hQe), l6i = class {
    constructor(e){
        this.owner = e;
    }
}, tCu = class {
    constructor(e, t, n, i){
        this.targetTextModel = e, this.lineNumber = t, this.additionalLines = n, this.minReservedLineCount = i;
    }
    equals(e) {
        return this.targetTextModel === e.targetTextModel && this.lineNumber === e.lineNumber && this.minReservedLineCount === e.minReservedLineCount && nh(this.additionalLines, e.additionalLines, Egi());
    }
}, nCu = class extends we {
    constructor(e, t, n, i){
        super(), this._editor = e, this._lines = t, this._shouldKeepCursorStable = n, this._isClickable = i, this._viewZoneHeight = Xo("viewZoneHeight", void 0), this._onDidClick = this._register(new ve), this.onDidClick = this._onDidClick.event, this._viewZoneListener = this._register(new cn), this.hasBeenAccepted = !1, this.editorOptionsChanged = z9("editorOptionChanged", Ct.filter(this._editor.onDidChangeConfiguration, (r)=>r.hasChanged(33) || r.hasChanged(122) || r.hasChanged(104) || r.hasChanged(99) || r.hasChanged(53) || r.hasChanged(52) || r.hasChanged(68))), this.isHovered = gR(this._editor).isTargetHovered((r)=>eCu(r.target.element), this._store), this._editor instanceof Iw && this._shouldKeepCursorStable && this._register(this._editor.onBeforeExecuteEdit((r)=>this.hasBeenAccepted = r.source === "inlineSuggestion.accept")), this._register(Hc((r)=>{
            const s = this._lines.read(r);
            this.editorOptionsChanged.read(r), s ? (this.hasBeenAccepted = !1, this.updateLines(s.lineNumber, s.additionalLines, s.minReservedLineCount)) : this.clear();
        }));
    }
    get viewZoneId() {
        return this._viewZoneInfo?.viewZoneId;
    }
    get viewZoneHeight() {
        return this._viewZoneHeight;
    }
    dispose() {
        super.dispose(), this.clear();
    }
    clear() {
        this._viewZoneListener.clear(), this._editor.changeViewZones((e)=>{
            this.removeActiveViewZone(e);
        });
    }
    updateLines(e, t, n) {
        const i = this._editor.getModel();
        if (!i) return;
        const { tabSize: r } = i.getOptions();
        gR(this._editor).transaction(()=>{
            this._editor.changeViewZones((s)=>{
                const o = new He;
                this.removeActiveViewZone(s);
                const a = Math.max(t.length, n);
                if (a > 0) {
                    const c = document.createElement("div");
                    Wcv(c, r, t, this._editor.getOptions(), this._isClickable), this._isClickable && (o.add(Xt(c, "mousedown", (l)=>{
                        l.preventDefault();
                    })), o.add(Xt(c, "click", (l)=>{
                        eCu(l.target) && this._onDidClick.fire(new J_(xi(l), l));
                    }))), this.addViewZone(s, e, a, c);
                }
                this._viewZoneListener.value = o;
            });
        });
    }
    addViewZone(e, t, n, i) {
        const r = e.addZone({
            afterLineNumber: t,
            heightInLines: n,
            domNode: i,
            afterColumnAffinity: 1,
            onComputedHeight: (s)=>{
                this._viewZoneHeight.set(s, void 0);
            }
        });
        this.keepCursorStable(t, n), this._viewZoneInfo = {
            viewZoneId: r,
            heightInLines: n,
            lineNumber: t
        };
    }
    removeActiveViewZone(e) {
        this._viewZoneInfo && (e.removeZone(this._viewZoneInfo.viewZoneId), this.hasBeenAccepted || this.keepCursorStable(this._viewZoneInfo.lineNumber, -this._viewZoneInfo.heightInLines), this._viewZoneInfo = void 0, this._viewZoneHeight.set(void 0, void 0));
    }
    keepCursorStable(e, t) {
        if (!this._shouldKeepCursorStable) return;
        const n = this._editor.getSelection()?.getStartPosition()?.lineNumber;
        n !== void 0 && e < n && this._editor.setScrollTop(this._editor.getScrollTop() + t * this._editor.getOption(68));
    }
}, iCu = class {
    constructor(e, t){
        this.content = e, this.decorations = t;
    }
    equals(e) {
        return this.content.equals(e.content) && gW.equalsArr(this.decorations, e.decorations);
    }
}, _Rn = Iwe("editorGhostText", {
    createHTML: (e)=>e
});

}
