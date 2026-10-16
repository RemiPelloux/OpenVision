import { S, Se, rn, we } from "./HVr.js";
import { A0, KT, Uf } from "./accessibilitySignalService.js";
import { Hyg } from "./accessibleDiffViewer.css";
import { Zm, cm } from "./actionbar.js";
import { Vo } from "./actions.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { Hc } from "./autorun.js";
import { Pe, _i } from "./codicons.js";
import { WK } from "./domFontInfo.js";
import { en, zp } from "./dom_2.js";
import { UBe, m1 } from "./editorOptions.js";
import { dh } from "./iconRegistry.js";
import { Ze, _t } from "./instantiation.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { kl, pc } from "./language.js";
import { hA } from "./lineRange.js";
import { P7, uA } from "./lineTokens.js";
import { rt } from "./nls.js";
import { qa } from "./observable.js";
import { Mh, uR } from "./offsetRange.js";
import { Yn, ya } from "./position.js";
import { Ds, Iwe, Pi, QNt, Sp, Uh, Wyg, Xo, Xt, c2, fvg, lh, sKe, tw, uJ } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Ple } from "./rangeMapping.js";
import { DO, mA } from "./scrollableElement.js";
import { Ft, Sr } from "./themables.js";
import { Awe } from "./trustedTypes.js";
import { x } from "./tslib.es6.js";
import { Dle } from "./utils_13.js";
import { Gze, Wpt } from "./viewLineRenderer.js";
import { BOt, Cle } from "./viewModel.js";
var D8c, M8c, P8c, g5e, Kbi, xFt, L8c, N8c, O8c, F8c, B8c, Ybi, U8c;
export { B8c, D8c, F8c, Kbi, L8c, M8c, N8c, O8c, P8c, U8c, Ybi, g5e, xFt };
var __wakaru_Gyg_initialized = false;
export function Gyg() {
if (__wakaru_Gyg_initialized) return;
__wakaru_Gyg_initialized = true;
"use strict";
x(), en(), Awe(), Zm(), mA(), dr(), _i(), Pr(), Se(), qa(), Sr(), WK(), Dle(), m1(), hA(), uR(), ya(), qi(), Ple(), kl(), P7(), Wpt(), Cle(), rt(), KT(), Ze(), dh(), Hyg(), Vo(), D8c = Pi("diff-review-insert", Pe.add, S(216, null)), M8c = Pi("diff-review-remove", Pe.remove, S(217, null)), P8c = Pi("diff-review-close", Pe.close, S(218, null)), g5e = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this._parentNode = e, this._visible = t, this._setVisible = n, this._canClose = i, this._width = r, this._height = s, this._diffs = o, this._models = a, this._instantiationService = c, this._state = uJ(this, (l, u)=>{
            const h = this._visible.read(l);
            if (this._parentNode.style.visibility = h ? "visible" : "hidden", !h) return null;
            const p = u.add(this._instantiationService.createInstance(Kbi, this._diffs, this._models, this._setVisible, this._canClose)), g = u.add(this._instantiationService.createInstance(Ybi, this._parentNode, p, this._width, this._height, this._models));
            return {
                model: p,
                view: g
            };
        }).recomputeInitiallyAndOnChange(this._store);
    }
    next() {
        Uh((e)=>{
            const t = this._visible.get();
            this._setVisible(!0, e), t && this._state.get().model.nextGroup(e);
        });
    }
    prev() {
        Uh((e)=>{
            this._setVisible(!0, e), this._state.get().model.previousGroup(e);
        });
    }
    close() {
        Uh((e)=>{
            this._setVisible(!1, e);
        });
    }
}, g5e._ttPolicy = Iwe("diffReview", {
    createHTML: (e)=>e
}), g5e = ie([
    C(8, _t)
], g5e), Kbi = class extends we {
    constructor(e, t, n, i, r){
        super(), this._diffs = e, this._models = t, this._setVisible = n, this.canClose = i, this._accessibilitySignalService = r, this._groups = Xo(this, []), this._currentGroupIdx = Xo(this, 0), this._currentElementIdx = Xo(this, 0), this.groups = this._groups, this.currentGroup = this._currentGroupIdx.map((s, o)=>this._groups.read(o)[s]), this.currentGroupIndex = this._currentGroupIdx, this.currentElement = this._currentElementIdx.map((s, o)=>this.currentGroup.read(o)?.lines[s]), this._register(Hc((s)=>{
            const o = this._diffs.read(s);
            if (!o) {
                this._groups.set([], void 0);
                return;
            }
            const a = Wyg(o, this._models.getOriginalModel().getLineCount(), this._models.getModifiedModel().getLineCount());
            Uh((c)=>{
                const l = this._models.getModifiedPosition();
                if (l) {
                    const u = a.findIndex((h)=>l?.lineNumber < h.range.modified.endLineNumberExclusive);
                    u !== -1 && this._currentGroupIdx.set(u, c);
                }
                this._groups.set(a, c);
            });
        })), this._register(Hc((s)=>{
            const o = this.currentElement.read(s);
            o?.type === 2 ? this._accessibilitySignalService.playSignal(Uf.diffLineDeleted, {
                source: "accessibleDiffViewer.currentElementChanged"
            }) : o?.type === 3 && this._accessibilitySignalService.playSignal(Uf.diffLineInserted, {
                source: "accessibleDiffViewer.currentElementChanged"
            });
        })), this._register(Hc((s)=>{
            const o = this.currentElement.read(s);
            if (o && o.type !== 0) {
                const a = o.modifiedLineNumber ?? o.diff.modified.startLineNumber;
                this._models.modifiedSetSelection(dt.fromPositions(new Yn(a, 1)));
            }
        }));
    }
    _goToGroupDelta(e, t) {
        const n = this.groups.get();
        !n || n.length <= 1 || QNt(t, (i)=>{
            this._currentGroupIdx.set(Mh.ofLength(n.length).clipCyclic(this._currentGroupIdx.get() + e), i), this._currentElementIdx.set(0, i);
        });
    }
    nextGroup(e) {
        this._goToGroupDelta(1, e);
    }
    previousGroup(e) {
        this._goToGroupDelta(-1, e);
    }
    _goToLineDelta(e) {
        const t = this.currentGroup.get();
        !t || t.lines.length <= 1 || Uh((n)=>{
            this._currentElementIdx.set(Mh.ofLength(t.lines.length).clip(this._currentElementIdx.get() + e), n);
        });
    }
    goToNextLine() {
        this._goToLineDelta(1);
    }
    goToPreviousLine() {
        this._goToLineDelta(-1);
    }
    goToLine(e) {
        const t = this.currentGroup.get();
        if (!t) return;
        const n = t.lines.indexOf(e);
        n !== -1 && Uh((i)=>{
            this._currentElementIdx.set(n, i);
        });
    }
    revealCurrentElementInEditor() {
        if (!this.canClose.get()) return;
        this._setVisible(!1, void 0);
        const e = this.currentElement.get();
        e && (e.type === 2 ? this._models.originalReveal(dt.fromPositions(new Yn(e.originalLineNumber, 1))) : this._models.modifiedReveal(e.type !== 0 ? dt.fromPositions(new Yn(e.modifiedLineNumber, 1)) : void 0));
    }
    close() {
        this.canClose.get() && (this._setVisible(!1, void 0), this._models.modifiedFocus());
    }
}, Kbi = ie([
    C(4, A0)
], Kbi), xFt = 3, L8c = class {
    constructor(e, t){
        this.range = e, this.lines = t;
    }
}, N8c = class {
    constructor(){
        this.type = 0;
    }
}, O8c = class {
    constructor(e, t){
        this.diff = e, this.originalLineNumber = t, this.type = 2, this.modifiedLineNumber = void 0;
    }
}, F8c = class {
    constructor(e, t){
        this.diff = e, this.modifiedLineNumber = t, this.type = 3, this.originalLineNumber = void 0;
    }
}, B8c = class {
    constructor(e, t){
        this.originalLineNumber = e, this.modifiedLineNumber = t, this.type = 1;
    }
}, Ybi = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._element = e, this._model = t, this._width = n, this._height = i, this._models = r, this._languageService = s, this.domNode = this._element, this.domNode.className = "monaco-component diff-review monaco-editor-background";
        const o = document.createElement("div");
        o.className = "diff-review-actions", this._actionBar = this._register(new cm(o)), this._register(Hc((a)=>{
            this._actionBar.clear(), this._model.canClose.read(a) && this._actionBar.push(lh({
                id: "diffreview.close",
                label: S(219, null),
                class: "close-diff-review " + Ft.asClassName(P8c),
                enabled: !0,
                run: async ()=>t.close()
            }), {
                label: !1,
                icon: !0
            });
        })), this._content = document.createElement("div"), this._content.className = "diff-review-content", this._content.setAttribute("role", "code"), this._scrollbar = this._register(new DO(this._content, {})), Sp(this.domNode, this._scrollbar.getDomNode(), o), this._register(Hc((a)=>{
            this._height.read(a), this._width.read(a), this._scrollbar.scanDomNode();
        })), this._register(rn(()=>{
            Sp(this.domNode);
        })), this._register(sKe(this.domNode, {
            width: this._width,
            height: this._height
        })), this._register(sKe(this._content, {
            width: this._width,
            height: this._height
        })), this._register(tw((a, c)=>{
            this._model.currentGroup.read(a), this._render(c);
        })), this._register(zp(this.domNode, "keydown", (a)=>{
            (a.equals(fe.DownArrow) || a.equals(Ie.CtrlCmd | fe.DownArrow) || a.equals(Ie.Alt | fe.DownArrow)) && (a.preventDefault(), this._model.goToNextLine()), (a.equals(fe.UpArrow) || a.equals(Ie.CtrlCmd | fe.UpArrow) || a.equals(Ie.Alt | fe.UpArrow)) && (a.preventDefault(), this._model.goToPreviousLine()), (a.equals(fe.Escape) || a.equals(Ie.CtrlCmd | fe.Escape) || a.equals(Ie.Alt | fe.Escape) || a.equals(Ie.Shift | fe.Escape)) && (a.preventDefault(), this._model.close()), (a.equals(fe.Space) || a.equals(fe.Enter)) && (a.preventDefault(), this._model.revealCurrentElementInEditor());
        }));
    }
    _render(e) {
        const t = this._models.getOriginalOptions(), n = this._models.getModifiedOptions(), i = document.createElement("div");
        i.className = "diff-review-table", i.setAttribute("role", "list"), i.setAttribute("aria-label", S(220, null)), c2(i, n.get(52)), Sp(this._content, i);
        const r = this._models.getOriginalModel(), s = this._models.getModifiedModel();
        if (!r || !s) return;
        const o = r.getOptions(), a = s.getOptions(), c = n.get(68), l = this._model.currentGroup.get();
        for (const u of l?.lines || []){
            if (!l) break;
            let h;
            if (u.type === 0) {
                const g = document.createElement("div");
                g.className = "diff-review-row", g.setAttribute("role", "listitem");
                const f = l.range, v = this._model.currentGroupIndex.get(), b = this._model.groups.get().length, y = (R)=>R === 0 ? S(221, null) : R === 1 ? S(222, null) : S(223, null, R), T = y(f.original.length), E = y(f.modified.length);
                g.setAttribute("aria-label", S(224, null, v + 1, b, f.original.startLineNumber, T, f.modified.startLineNumber, E));
                const A = document.createElement("div");
                A.className = "diff-review-cell diff-review-summary", A.appendChild(document.createTextNode(`${v + 1}/${b}: @@ -${f.original.startLineNumber},${f.original.length} +${f.modified.startLineNumber},${f.modified.length} @@`)), g.appendChild(A), h = g;
            } else h = this._createRow(u, c, this._width.get(), t, r, o, n, s, a);
            i.appendChild(h);
            const p = Ds((g)=>this._model.currentElement.read(g) === u);
            e.add(Hc((g)=>{
                const f = p.read(g);
                h.tabIndex = f ? 0 : -1, f && h.focus();
            })), e.add(Xt(h, "focus", ()=>{
                this._model.goToLine(u);
            }));
        }
        this._scrollbar.scanDomNode();
    }
    _createRow(e, t, n, i, r, s, o, a, c) {
        const l = i.get(151), u = l.glyphMarginWidth + l.lineNumbersWidth, h = o.get(151), p = 10 + h.glyphMarginWidth + h.lineNumbersWidth;
        let g = "diff-review-row", f = "";
        const v = "diff-review-spacer";
        let b = null;
        switch(e.type){
            case 3:
                g = "diff-review-row line-insert", f = " char-insert", b = D8c;
                break;
            case 2:
                g = "diff-review-row line-delete", f = " char-delete", b = M8c;
                break;
        }
        const y = document.createElement("div");
        y.style.minWidth = n + "px", y.className = g, y.setAttribute("role", "listitem"), y.ariaLevel = "";
        const T = document.createElement("div");
        T.className = "diff-review-cell", T.style.height = `${t}px`, y.appendChild(T);
        const E = document.createElement("span");
        E.style.width = u + "px", E.style.minWidth = u + "px", E.className = "diff-review-line-number" + f, e.originalLineNumber !== void 0 ? E.appendChild(document.createTextNode(String(e.originalLineNumber))) : E.innerText = "\xA0", T.appendChild(E);
        const A = document.createElement("span");
        A.style.width = p + "px", A.style.minWidth = p + "px", A.style.paddingRight = "10px", A.className = "diff-review-line-number" + f, e.modifiedLineNumber !== void 0 ? A.appendChild(document.createTextNode(String(e.modifiedLineNumber))) : A.innerText = "\xA0", T.appendChild(A);
        const R = document.createElement("span");
        if (R.className = v, b) {
            const N = document.createElement("span");
            N.className = Ft.asClassName(b), N.innerText = "\xA0\xA0", R.appendChild(N);
        } else R.innerText = "\xA0\xA0";
        T.appendChild(R);
        let D;
        if (e.modifiedLineNumber !== void 0) {
            let N = this._getLineHtml(a, o, c.tabSize, e.modifiedLineNumber, this._languageService.languageIdCodec);
            g5e._ttPolicy && (N = g5e._ttPolicy.createHTML(N)), T.insertAdjacentHTML("beforeend", N), D = a.getLineContent(e.modifiedLineNumber);
        } else {
            let N = this._getLineHtml(r, i, s.tabSize, e.originalLineNumber, this._languageService.languageIdCodec);
            g5e._ttPolicy && (N = g5e._ttPolicy.createHTML(N)), T.insertAdjacentHTML("beforeend", N), D = r.getLineContent(e.originalLineNumber);
        }
        D.length === 0 && (D = S(225, null));
        let P = "";
        switch(e.type){
            case 1:
                e.originalLineNumber === e.modifiedLineNumber ? P = S(226, null, D, e.originalLineNumber) : P = S(227, null, D, e.originalLineNumber, e.modifiedLineNumber);
                break;
            case 3:
                P = S(228, null, D, e.modifiedLineNumber);
                break;
            case 2:
                P = S(229, null, D, e.originalLineNumber);
                break;
        }
        return y.setAttribute("aria-label", P), y;
    }
    _getLineHtml(e, t, n, i, r) {
        const s = e.getLineContent(i), o = t.get(52), a = uA.createEmpty(s, r), c = BOt.isBasicASCII(s, e.mightContainNonBasicASCII()), l = BOt.containsRTL(s, c, e.mightContainRTL());
        return fvg(new Gze(o.isMonospace && !t.get(33), o.canUseHalfwidthRightwardsArrow, s, !1, c, l, 0, a, [], n, 0, o.spaceWidth, o.middotWidth, o.wsmiddotWidth, t.get(122), t.get(104), t.get(99), t.get(53) !== UBe.OFF, null)).html;
    }
}, Ybi = ie([
    C(5, pc)
], Ybi), U8c = class {
    constructor(e){
        this.editors = e;
    }
    getOriginalModel() {
        return this.editors.original.getModel();
    }
    getOriginalOptions() {
        return this.editors.original.getOptions();
    }
    originalReveal(e) {
        this.editors.original.revealRange(e), this.editors.original.setSelection(e), this.editors.original.focus();
    }
    getModifiedModel() {
        return this.editors.modified.getModel();
    }
    getModifiedOptions() {
        return this.editors.modified.getOptions();
    }
    modifiedReveal(e) {
        e && (this.editors.modified.revealRange(e), this.editors.modified.setSelection(e)), this.editors.modified.focus();
    }
    modifiedSetSelection(e) {
        this.editors.modified.setSelection(e);
    }
    modifiedFocus() {
        this.editors.modified.focus();
    }
    getModifiedPosition() {
        return this.editors.modified.getPosition() ?? void 0;
    }
};

}
