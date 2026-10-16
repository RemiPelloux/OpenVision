import { D, Pn, Qe, st } from "./Iwo.js";
import { Nb, l2, xx } from "./accessibilitySignalService.js";
import { LNy } from "./accessibleDiffViewer.css";
import { PT, oR } from "./actionbar.js";
import { vu } from "./actions.js";
import { bo } from "./arrays.js";
import { Jd } from "./autorun.js";
import { gs, yt } from "./codicons.js";
import { she } from "./domFontInfo.js";
import { Hn, n0 } from "./dom_2.js";
import { Ltt, s2 } from "./editorOptions.js";
import { b_ } from "./iconRegistry.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Kp, Ph } from "./language.js";
import { DD } from "./lineRange.js";
import { PD, SY } from "./lineTokens.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { Im, W3 } from "./offsetRange.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Swe } from "./rangeMapping.js";
import { E7, mwe } from "./scrollableElement.js";
import { Gn, ta } from "./themables.js";
import { Ztt } from "./trustedTypes.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { bwe } from "./utils_13.js";
import { dBt, yyt } from "./viewLineRenderer.js";
import { _fn, zAe } from "./viewModel.js";
import { DI, Fyt, Ig, Kde, ONy, Xtt, Zo, agn, bc, cMy, hE, li, mg, oB, qa } from "./ze.js";
var rqd, sqd, oqd, ant, STr, nvn, aqd, lqd, cqd, uqd, dqd, kTr, hqd;
export { STr, ant, aqd, cqd, dqd, hqd, kTr, lqd, nvn, oqd, rqd, sqd, uqd };
var __wakaru_FNy_initialized = false;
export function FNy() {
if (__wakaru_FNy_initialized) return;
__wakaru_FNy_initialized = true;
"use strict";
E(), Hn(), Ztt(), PT(), E7(), bo(), gs(), Ma(), Qe(), Jc(), ta(), she(), bwe(), s2(), DD(), W3(), jc(), Qs(), Swe(), Kp(), SY(), dBt(), zAe(), Bt(), l2(), It(), b_(), LNy(), vu(), rqd = qa("diff-review-insert", yt.add, D(216, null)), sqd = qa("diff-review-remove", yt.remove, D(217, null)), oqd = qa("diff-review-close", yt.close, D(218, null)), ant = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this._parentNode = t, this._visible = e, this._setVisible = n, this._canClose = i, this._width = r, this._height = s, this._diffs = o, this._models = a, this._instantiationService = l, this._state = Kde(this, (c, u)=>{
            const d = this._visible.read(c);
            if (this._parentNode.style.visibility = d ? "visible" : "hidden", !d) return null;
            const h = u.add(this._instantiationService.createInstance(STr, this._diffs, this._models, this._setVisible, this._canClose)), p = u.add(this._instantiationService.createInstance(kTr, this._parentNode, h, this._width, this._height, this._models));
            return {
                model: h,
                view: p
            };
        }).recomputeInitiallyAndOnChange(this._store);
    }
    next() {
        mg((t)=>{
            const e = this._visible.get();
            this._setVisible(!0, t), e && this._state.get().model.nextGroup(t);
        });
    }
    prev() {
        mg((t)=>{
            this._setVisible(!0, t), this._state.get().model.previousGroup(t);
        });
    }
    close() {
        mg((t)=>{
            this._setVisible(!1, t);
        });
    }
}, ant._ttPolicy = Xtt("diffReview", {
    createHTML: (t)=>t
}), ant = Re([
    F(8, dn)
], ant), STr = class extends st {
    constructor(t, e, n, i, r){
        super(), this._diffs = t, this._models = e, this._setVisible = n, this.canClose = i, this._accessibilitySignalService = r, this._groups = bc(this, []), this._currentGroupIdx = bc(this, 0), this._currentElementIdx = bc(this, 0), this.groups = this._groups, this.currentGroup = this._currentGroupIdx.map((s, o)=>this._groups.read(o)[s]), this.currentGroupIndex = this._currentGroupIdx, this.currentElement = this._currentElementIdx.map((s, o)=>this.currentGroup.read(o)?.lines[s]), this._register(Jd((s)=>{
            const o = this._diffs.read(s);
            if (!o) {
                this._groups.set([], void 0);
                return;
            }
            const a = ONy(o, this._models.getOriginalModel().getLineCount(), this._models.getModifiedModel().getLineCount());
            mg((l)=>{
                const c = this._models.getModifiedPosition();
                if (c) {
                    const u = a.findIndex((d)=>c?.lineNumber < d.range.modified.endLineNumberExclusive);
                    u !== -1 && this._currentGroupIdx.set(u, l);
                }
                this._groups.set(a, l);
            });
        })), this._register(Jd((s)=>{
            const o = this.currentElement.read(s);
            o?.type === 2 ? this._accessibilitySignalService.playSignal(Nb.diffLineDeleted, {
                source: "accessibleDiffViewer.currentElementChanged"
            }) : o?.type === 3 && this._accessibilitySignalService.playSignal(Nb.diffLineInserted, {
                source: "accessibleDiffViewer.currentElementChanged"
            });
        })), this._register(Jd((s)=>{
            const o = this.currentElement.read(s);
            if (o && o.type !== 0) {
                const a = o.modifiedLineNumber ?? o.diff.modified.startLineNumber;
                this._models.modifiedSetSelection(qt.fromPositions(new er(a, 1)));
            }
        }));
    }
    _goToGroupDelta(t, e) {
        const n = this.groups.get();
        !n || n.length <= 1 || agn(e, (i)=>{
            this._currentGroupIdx.set(Im.ofLength(n.length).clipCyclic(this._currentGroupIdx.get() + t), i), this._currentElementIdx.set(0, i);
        });
    }
    nextGroup(t) {
        this._goToGroupDelta(1, t);
    }
    previousGroup(t) {
        this._goToGroupDelta(-1, t);
    }
    _goToLineDelta(t) {
        const e = this.currentGroup.get();
        !e || e.lines.length <= 1 || mg((n)=>{
            this._currentElementIdx.set(Im.ofLength(e.lines.length).clip(this._currentElementIdx.get() + t), n);
        });
    }
    goToNextLine() {
        this._goToLineDelta(1);
    }
    goToPreviousLine() {
        this._goToLineDelta(-1);
    }
    goToLine(t) {
        const e = this.currentGroup.get();
        if (!e) return;
        const n = e.lines.indexOf(t);
        n !== -1 && mg((i)=>{
            this._currentElementIdx.set(n, i);
        });
    }
    revealCurrentElementInEditor() {
        if (!this.canClose.get()) return;
        this._setVisible(!1, void 0);
        const t = this.currentElement.get();
        t && (t.type === 2 ? this._models.originalReveal(qt.fromPositions(new er(t.originalLineNumber, 1))) : this._models.modifiedReveal(t.type !== 0 ? qt.fromPositions(new er(t.modifiedLineNumber, 1)) : void 0));
    }
    close() {
        this.canClose.get() && (this._setVisible(!1, void 0), this._models.modifiedFocus());
    }
}, STr = Re([
    F(4, xx)
], STr), nvn = 3, aqd = class {
    constructor(t, e){
        this.range = t, this.lines = e;
    }
}, lqd = class {
    constructor(){
        this.type = 0;
    }
}, cqd = class {
    constructor(t, e){
        this.diff = t, this.originalLineNumber = e, this.type = 2, this.modifiedLineNumber = void 0;
    }
}, uqd = class {
    constructor(t, e){
        this.diff = t, this.modifiedLineNumber = e, this.type = 3, this.originalLineNumber = void 0;
    }
}, dqd = class {
    constructor(t, e){
        this.originalLineNumber = t, this.modifiedLineNumber = e, this.type = 1;
    }
}, kTr = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._element = t, this._model = e, this._width = n, this._height = i, this._models = r, this._languageService = s, this.domNode = this._element, this.domNode.className = "monaco-component diff-review monaco-editor-background";
        const o = document.createElement("div");
        o.className = "diff-review-actions", this._actionBar = this._register(new oR(o)), this._register(Jd((a)=>{
            this._actionBar.clear(), this._model.canClose.read(a) && this._actionBar.push(Ig({
                id: "diffreview.close",
                label: D(219, null),
                class: "close-diff-review " + Gn.asClassName(oqd),
                enabled: !0,
                run: async ()=>e.close()
            }), {
                label: !1,
                icon: !0
            });
        })), this._content = document.createElement("div"), this._content.className = "diff-review-content", this._content.setAttribute("role", "code"), this._scrollbar = this._register(new mwe(this._content, {})), hE(this.domNode, this._scrollbar.getDomNode(), o), this._register(Jd((a)=>{
            this._height.read(a), this._width.read(a), this._scrollbar.scanDomNode();
        })), this._register(Pn(()=>{
            hE(this.domNode);
        })), this._register(Fyt(this.domNode, {
            width: this._width,
            height: this._height
        })), this._register(Fyt(this._content, {
            width: this._width,
            height: this._height
        })), this._register(DI((a, l)=>{
            this._model.currentGroup.read(a), this._render(l);
        })), this._register(n0(this.domNode, "keydown", (a)=>{
            (a.equals(Ze.DownArrow) || a.equals(ut.CtrlCmd | Ze.DownArrow) || a.equals(ut.Alt | Ze.DownArrow)) && (a.preventDefault(), this._model.goToNextLine()), (a.equals(Ze.UpArrow) || a.equals(ut.CtrlCmd | Ze.UpArrow) || a.equals(ut.Alt | Ze.UpArrow)) && (a.preventDefault(), this._model.goToPreviousLine()), (a.equals(Ze.Escape) || a.equals(ut.CtrlCmd | Ze.Escape) || a.equals(ut.Alt | Ze.Escape) || a.equals(ut.Shift | Ze.Escape)) && (a.preventDefault(), this._model.close()), (a.equals(Ze.Space) || a.equals(Ze.Enter)) && (a.preventDefault(), this._model.revealCurrentElementInEditor());
        }));
    }
    _render(t) {
        const e = this._models.getOriginalOptions(), n = this._models.getModifiedOptions(), i = document.createElement("div");
        i.className = "diff-review-table", i.setAttribute("role", "list"), i.setAttribute("aria-label", D(220, null)), oB(i, n.get(52)), hE(this._content, i);
        const r = this._models.getOriginalModel(), s = this._models.getModifiedModel();
        if (!r || !s) return;
        const o = r.getOptions(), a = s.getOptions(), l = n.get(68), c = this._model.currentGroup.get();
        for (const u of c?.lines || []){
            if (!c) break;
            let d;
            if (u.type === 0) {
                const p = document.createElement("div");
                p.className = "diff-review-row", p.setAttribute("role", "listitem");
                const g = c.range, f = this._model.currentGroupIndex.get(), _ = this._model.groups.get().length, b = (C)=>C === 0 ? D(221, null) : C === 1 ? D(222, null) : D(223, null, C), y = b(g.original.length), S = b(g.modified.length);
                p.setAttribute("aria-label", D(224, null, f + 1, _, g.original.startLineNumber, y, g.modified.startLineNumber, S));
                const k = document.createElement("div");
                k.className = "diff-review-cell diff-review-summary", k.appendChild(document.createTextNode(`${f + 1}/${_}: @@ -${g.original.startLineNumber},${g.original.length} +${g.modified.startLineNumber},${g.modified.length} @@`)), p.appendChild(k), d = p;
            } else d = this._createRow(u, l, this._width.get(), e, r, o, n, s, a);
            i.appendChild(d);
            const h = Zo((p)=>this._model.currentElement.read(p) === u);
            t.add(Jd((p)=>{
                const g = h.read(p);
                d.tabIndex = g ? 0 : -1, g && d.focus();
            })), t.add(li(d, "focus", ()=>{
                this._model.goToLine(u);
            }));
        }
        this._scrollbar.scanDomNode();
    }
    _createRow(t, e, n, i, r, s, o, a, l) {
        const c = i.get(151), u = c.glyphMarginWidth + c.lineNumbersWidth, d = o.get(151), h = 10 + d.glyphMarginWidth + d.lineNumbersWidth;
        let p = "diff-review-row", g = "";
        const f = "diff-review-spacer";
        let _ = null;
        switch(t.type){
            case 3:
                p = "diff-review-row line-insert", g = " char-insert", _ = rqd;
                break;
            case 2:
                p = "diff-review-row line-delete", g = " char-delete", _ = sqd;
                break;
        }
        const b = document.createElement("div");
        b.style.minWidth = n + "px", b.className = p, b.setAttribute("role", "listitem"), b.ariaLevel = "";
        const y = document.createElement("div");
        y.className = "diff-review-cell", y.style.height = `${e}px`, b.appendChild(y);
        const S = document.createElement("span");
        S.style.width = u + "px", S.style.minWidth = u + "px", S.className = "diff-review-line-number" + g, t.originalLineNumber !== void 0 ? S.appendChild(document.createTextNode(String(t.originalLineNumber))) : S.innerText = "\xA0", y.appendChild(S);
        const k = document.createElement("span");
        k.style.width = h + "px", k.style.minWidth = h + "px", k.style.paddingRight = "10px", k.className = "diff-review-line-number" + g, t.modifiedLineNumber !== void 0 ? k.appendChild(document.createTextNode(String(t.modifiedLineNumber))) : k.innerText = "\xA0", y.appendChild(k);
        const C = document.createElement("span");
        if (C.className = f, _) {
            const A = document.createElement("span");
            A.className = Gn.asClassName(_), A.innerText = "\xA0\xA0", C.appendChild(A);
        } else C.innerText = "\xA0\xA0";
        y.appendChild(C);
        let T;
        if (t.modifiedLineNumber !== void 0) {
            let A = this._getLineHtml(a, o, l.tabSize, t.modifiedLineNumber, this._languageService.languageIdCodec);
            ant._ttPolicy && (A = ant._ttPolicy.createHTML(A)), y.insertAdjacentHTML("beforeend", A), T = a.getLineContent(t.modifiedLineNumber);
        } else {
            let A = this._getLineHtml(r, i, s.tabSize, t.originalLineNumber, this._languageService.languageIdCodec);
            ant._ttPolicy && (A = ant._ttPolicy.createHTML(A)), y.insertAdjacentHTML("beforeend", A), T = r.getLineContent(t.originalLineNumber);
        }
        T.length === 0 && (T = D(225, null));
        let I = "";
        switch(t.type){
            case 1:
                t.originalLineNumber === t.modifiedLineNumber ? I = D(226, null, T, t.originalLineNumber) : I = D(227, null, T, t.originalLineNumber, t.modifiedLineNumber);
                break;
            case 3:
                I = D(228, null, T, t.modifiedLineNumber);
                break;
            case 2:
                I = D(229, null, T, t.originalLineNumber);
                break;
        }
        return b.setAttribute("aria-label", I), b;
    }
    _getLineHtml(t, e, n, i, r) {
        const s = t.getLineContent(i), o = e.get(52), a = PD.createEmpty(s, r), l = _fn.isBasicASCII(s, t.mightContainNonBasicASCII()), c = _fn.containsRTL(s, l, t.mightContainRTL());
        return cMy(new yyt(o.isMonospace && !e.get(33), o.canUseHalfwidthRightwardsArrow, s, !1, l, c, 0, a, [], n, 0, o.spaceWidth, o.middotWidth, o.wsmiddotWidth, e.get(122), e.get(104), e.get(99), e.get(53) !== Ltt.OFF, null)).html;
    }
}, kTr = Re([
    F(5, Ph)
], kTr), hqd = class {
    constructor(t){
        this.editors = t;
    }
    getOriginalModel() {
        return this.editors.original.getModel();
    }
    getOriginalOptions() {
        return this.editors.original.getOptions();
    }
    originalReveal(t) {
        this.editors.original.revealRange(t), this.editors.original.setSelection(t), this.editors.original.focus();
    }
    getModifiedModel() {
        return this.editors.modified.getModel();
    }
    getModifiedOptions() {
        return this.editors.modified.getOptions();
    }
    modifiedReveal(t) {
        t && (this.editors.modified.revealRange(t), this.editors.modified.setSelection(t)), this.editors.modified.focus();
    }
    modifiedSetSelection(t) {
        this.editors.modified.setSelection(t);
    }
    modifiedFocus() {
        this.editors.modified.focus();
    }
    getModifiedPosition() {
        return this.editors.modified.getPosition() ?? void 0;
    }
};

}
