import { Fa, Gt, Nt, Pn, Qe, Vn, Zm, en, st, tt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Jd } from "./autorun.js";
import { boe, w4 } from "./codeEditorWidget.js";
import { gs, yt } from "./codicons.js";
import { she } from "./domFontInfo.js";
import { Hn, ws } from "./dom_2.js";
import { s2 } from "./editorOptions.js";
import { AWr, xWr } from "./ghostText.js";
import { xx1 } from "./ghostTextView.css";
import { ent } from "./hotReloadHelpers.js";
import { bW } from "./iconLabels_2.js";
import { ADp, Ax1, Rx1 } from "./ipa.js";
import { Kp, Ph } from "./language.js";
import { RQ, byt } from "./lineDecorations.js";
import { PD, SY } from "./lineTokens.js";
import { J0, Yve } from "./model_2.js";
import { i2, iT } from "./mouseEvent.js";
import { R_ } from "./n.js";
import { Jc } from "./observable.js";
import { FQ } from "./observableCodeEditor.js";
import { Ist, qHt, v6 } from "./offsetEdit.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Q$e } from "./stringBuilder.js";
import { Ztt } from "./trustedTypes.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { byi } from "./utils_20.js";
import { dBt } from "./viewLineRenderer.js";
import { DI, Nsi, Pj, Xtt, Zo, b7, bc, dW, li, n_e, uE, wbt, xkr, z3 } from "./ze.js";
var cNa, uNa, e0t, UWr, RDp, PDp, MDp, wyi;
export { MDp, PDp, RDp, UWr, cNa, e0t, uNa, wyi };
var __wakaru_jWr_initialized = false;
export function jWr() {
if (__wakaru_jWr_initialized) return;
__wakaru_jWr_initialized = true;
"use strict";
E(), Ztt(), bW(), bo(), gs(), Gt(), Pj(), ent(), Qe(), Jc(), Fa(), she(), FQ(), s2(), qHt(), jc(), Qs(), Q$e(), Kp(), J0(), SY(), byt(), dBt(), AWr(), byi(), Hn(), xx1(), i2(), boe(), cNa = !0, uNa = "ghost-text", e0t = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._editor = t, this._model = e, this._options = n, this._shouldKeepCursorStable = i, this._isClickable = r, this._languageService = s, this._isDisposed = bc(this, !1), this._warningState = Zo((o)=>{
            const a = this._model.ghostText.read(o);
            if (!a) return;
            const l = this._model.warning.read(o);
            if (l) return {
                lineNumber: a.lineNumber,
                position: new er(a.lineNumber, a.parts[0].column),
                icon: l.icon
            };
        }), this._onDidClick = this._register(new tt), this.onDidClick = this._onDidClick.event, this._editorObs = z3(this._editor), this._useSyntaxHighlighting = this._options.map((o)=>o.syntaxHighlightingEnabled), this._extraClassNames = Zo(this, (o)=>{
            const a = [
                ...this._options.read(o).extraClasses ?? []
            ];
            return this._useSyntaxHighlighting.read(o) && a.push("syntax-highlighted"), cNa && this._warningState.read(o) && a.push("warning"), a.map((c)=>` ${c}`).join("");
        }), this.uiState = Zo(this, (o)=>{
            if (this._isDisposed.read(o)) return;
            const a = this._editorObs.model.read(o);
            if (a !== this._model.targetTextModel.read(o)) return;
            const l = this._model.ghostText.read(o);
            if (!l) return;
            const c = l instanceof xWr ? l.columnRange : void 0, u = this._useSyntaxHighlighting.read(o), d = this._extraClassNames.read(o), { inlineTexts: h, additionalLines: p, hiddenRange: g } = Ax1(l, a, uNa + d), f = a.getLineContent(l.lineNumber), _ = new Ist(h.map((C)=>v6.insert(C.column - 1, C.text))), b = u ? a.tokenization.tokenizeLinesAt(l.lineNumber, [
                _.apply(f),
                ...p.map((C)=>C.content)
            ]) : void 0, y = _.getNewTextRanges(), S = h.map((C, T)=>({
                    ...C,
                    tokens: b?.[0]?.getTokensInRange(y[T])
                })), k = p.map((C, T)=>new MDp(b?.[T + 1] ?? PD.createEmpty(C.content, this._languageService.languageIdCodec), C.decorations));
            return {
                replacedRange: c,
                inlineTexts: S,
                additionalLines: k,
                hiddenRange: g,
                lineNumber: l.lineNumber,
                additionalReservedLineCount: this._model.minReservedLineCount.read(o),
                targetTextModel: a,
                syntaxHighlightingEnabled: u
            };
        }), this.decorations = Zo(this, (o)=>{
            const a = this.uiState.read(o);
            if (!a) return [];
            const l = [], c = this._extraClassNames.read(o);
            a.replacedRange && l.push({
                range: a.replacedRange.toRange(a.lineNumber),
                options: {
                    inlineClassName: "inline-completion-text-to-replace" + c,
                    description: "GhostTextReplacement"
                }
            }), a.hiddenRange && l.push({
                range: a.hiddenRange.toRange(a.lineNumber),
                options: {
                    inlineClassName: "ghost-text-hidden",
                    description: "ghost-text-hidden"
                }
            });
            for (const u of a.inlineTexts)l.push({
                range: qt.fromPositions(new er(a.lineNumber, u.column)),
                options: {
                    description: "ghost-text-decoration",
                    after: {
                        content: u.text,
                        tokens: u.tokens,
                        inlineClassName: (u.preview ? "ghost-text-decoration-preview" : "ghost-text-decoration") + (this._isClickable ? " clickable" : "") + c + u.lineDecorations.map((d)=>" " + d.className).join(" "),
                        cursorStops: Yve.Left,
                        attachedData: new UWr(this)
                    },
                    showIfCollapsed: !0
                }
            });
            return l;
        }), this._isInlineTextHovered = this._editorObs.isTargetHovered((o)=>o.target.type === 6 && o.target.detail.injectedText?.options.attachedData instanceof UWr && o.target.detail.injectedText.options.attachedData.owner === this, this._store), this._additionalLinesWidget = this._register(new PDp(this._editor, b7({
            owner: this,
            equalsFn: wbt(xkr())
        }, (o)=>{
            const a = this.uiState.read(o);
            return a ? new RDp(a.targetTextModel, a.lineNumber, a.additionalLines, a.additionalReservedLineCount) : void 0;
        }), this._shouldKeepCursorStable, this._isClickable)), this.isHovered = Zo(this, (o)=>this._isDisposed.read(o) ? !1 : this._isInlineTextHovered.read(o) || this._additionalLinesWidget.isHovered.read(o)), this.height = Zo(this, (o)=>this._editorObs.getOption(68).read(o) + (this._additionalLinesWidget.viewZoneHeight.read(o) ?? 0)), this._register(Pn(()=>{
            this._isDisposed.set(!0, void 0);
        })), this._register(this._editorObs.setDecorations(this.decorations)), this._isClickable && (this._register(this._additionalLinesWidget.onDidClick((o)=>this._onDidClick.fire(o))), this._register(this._editor.onMouseUp((o)=>{
            if (o.target.type !== 6) return;
            const a = o.target.detail.injectedText?.options.attachedData;
            a instanceof UWr && a.owner === this && this._onDidClick.fire(o.event);
        }))), this._register(DI((o, a)=>{
            if (cNa) return;
            const l = this._warningState.read(o);
            if (!l) return;
            const c = this._editorObs.getOption(68);
            a.add(this._editorObs.createContentWidget({
                position: uE({
                    position: new er(l.lineNumber, Number.MAX_SAFE_INTEGER),
                    preference: [
                        0
                    ],
                    positionAffinity: 1
                }),
                allowEditorOverflow: !1,
                domNode: R_.div({
                    class: "ghost-text-view-warning-widget",
                    style: {
                        width: c,
                        height: c,
                        marginLeft: 4,
                        color: "orange"
                    },
                    ref: (u)=>{
                        u.ghostTextViewWarningWidgetData = {
                            range: qt.fromPositions(l.position)
                        };
                    }
                }, [
                    R_.div({
                        class: "ghost-text-view-warning-widget-icon",
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center"
                        }
                    }, [
                        n_e(l.icon && "id" in l.icon ? l.icon : yt.warning)
                    ])
                ]).keepUpdated(a).element
            }));
        }));
    }
    static getWarningWidgetContext(t) {
        const e = t.ghostTextViewWarningWidgetData;
        if (e) return e;
        if (t.parentElement) return this.getWarningWidgetContext(t.parentElement);
    }
    ownsViewZone(t) {
        return this._additionalLinesWidget.viewZoneId === t;
    }
}, e0t.hot = Nsi(e0t), e0t = Re([
    F(5, Ph)
], e0t), UWr = class {
    constructor(t){
        this.owner = t;
    }
}, RDp = class {
    constructor(t, e, n, i){
        this.targetTextModel = t, this.lineNumber = e, this.additionalLines = n, this.minReservedLineCount = i;
    }
    equals(t) {
        return this.targetTextModel === t.targetTextModel && this.lineNumber === t.lineNumber && this.minReservedLineCount === t.minReservedLineCount && Zm(this.additionalLines, t.additionalLines, xkr());
    }
}, PDp = class extends st {
    constructor(t, e, n, i){
        super(), this._editor = t, this._lines = e, this._shouldKeepCursorStable = n, this._isClickable = i, this._viewZoneHeight = bc("viewZoneHeight", void 0), this._onDidClick = this._register(new tt), this.onDidClick = this._onDidClick.event, this._viewZoneListener = this._register(new Vn), this.hasBeenAccepted = !1, this.editorOptionsChanged = dW("editorOptionChanged", en.filter(this._editor.onDidChangeConfiguration, (r)=>r.hasChanged(33) || r.hasChanged(122) || r.hasChanged(104) || r.hasChanged(99) || r.hasChanged(53) || r.hasChanged(52) || r.hasChanged(68))), this.isHovered = z3(this._editor).isTargetHovered((r)=>ADp(r.target.element), this._store), this._editor instanceof w4 && this._shouldKeepCursorStable && this._register(this._editor.onBeforeExecuteEdit((r)=>this.hasBeenAccepted = r.source === "inlineSuggestion.accept")), this._register(Jd((r)=>{
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
        this._viewZoneListener.clear(), this._editor.changeViewZones((t)=>{
            this.removeActiveViewZone(t);
        });
    }
    updateLines(t, e, n) {
        const i = this._editor.getModel();
        if (!i) return;
        const { tabSize: r } = i.getOptions();
        z3(this._editor).transaction(()=>{
            this._editor.changeViewZones((s)=>{
                const o = new Nt;
                this.removeActiveViewZone(s);
                const a = Math.max(e.length, n);
                if (a > 0) {
                    const l = document.createElement("div");
                    Rx1(l, r, e, this._editor.getOptions(), this._isClickable), this._isClickable && (o.add(li(l, "mousedown", (c)=>{
                        c.preventDefault();
                    })), o.add(li(l, "click", (c)=>{
                        ADp(c.target) && this._onDidClick.fire(new iT(ws(c), c));
                    }))), this.addViewZone(s, t, a, l);
                }
                this._viewZoneListener.value = o;
            });
        });
    }
    addViewZone(t, e, n, i) {
        const r = t.addZone({
            afterLineNumber: e,
            heightInLines: n,
            domNode: i,
            afterColumnAffinity: 1,
            onComputedHeight: (s)=>{
                this._viewZoneHeight.set(s, void 0);
            }
        });
        this.keepCursorStable(e, n), this._viewZoneInfo = {
            viewZoneId: r,
            heightInLines: n,
            lineNumber: e
        };
    }
    removeActiveViewZone(t) {
        this._viewZoneInfo && (t.removeZone(this._viewZoneInfo.viewZoneId), this.hasBeenAccepted || this.keepCursorStable(this._viewZoneInfo.lineNumber, -this._viewZoneInfo.heightInLines), this._viewZoneInfo = void 0, this._viewZoneHeight.set(void 0, void 0));
    }
    keepCursorStable(t, e) {
        if (!this._shouldKeepCursorStable) return;
        const n = this._editor.getSelection()?.getStartPosition()?.lineNumber;
        n !== void 0 && t < n && this._editor.setScrollTop(this._editor.getScrollTop() + e * this._editor.getOption(68));
    }
}, MDp = class {
    constructor(t, e){
        this.content = t, this.decorations = e;
    }
    equals(t) {
        return this.content.equals(t.content) && RQ.equalsArr(this.decorations, t.decorations);
    }
}, wyi = Xtt("editorGhostText", {
    createHTML: (t)=>t
});

}
