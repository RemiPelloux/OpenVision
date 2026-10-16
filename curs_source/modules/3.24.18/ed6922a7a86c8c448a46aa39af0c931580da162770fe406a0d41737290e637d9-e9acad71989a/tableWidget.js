import { Ct, He, Se, bt, ve, we } from "./HVr.js";
import { en } from "./dom_2.js";
import { c8c, mR, qV } from "./listWidget.js";
import { $f, $ht, Fd, Omn, V7, Ve, Ye, dS, ih, nw, p5, vkg, xp } from "./qIc.js";
import { X7, ZV } from "./splitview.js";
import { fkg } from "./table.css";
import { x } from "./tslib.es6.js";
var lrs, urs, IHc, drs, kKe;
export { IHc, drs, kKe, lrs, urs };
var __wakaru_hrs_initialized = false;
export function hrs() {
if (__wakaru_hrs_initialized) return;
__wakaru_hrs_initialized = true;
"use strict";
x(), en(), nw(), V7(), $f(), qV(), X7(), bt(), Se(), fkg(), lrs = class Jkm {
    constructor(t, n, i){
        this.columns = t, this.getColumnSize = i, this.templateId = Jkm.TemplateId, this.renderedTemplates = new Set;
        const r = new Map(n.map((s)=>[
                s.templateId,
                s
            ]));
        this.renderers = [];
        for (const s of t){
            const o = r.get(s.templateId);
            if (!o) throw new Error(`Table cell renderer for template id ${s.templateId} not found.`);
            this.renderers.push(o);
        }
    }
    renderTemplate(t) {
        const n = Ye(t, Ve(".monaco-table-tr")), i = [], r = [];
        for(let o = 0; o < this.columns.length; o++){
            const a = this.renderers[o], c = Ye(n, Ve(".monaco-table-td", {
                "data-col-index": o
            }));
            c.style.width = `${this.getColumnSize(o)}px`, i.push(c), r.push(a.renderTemplate(c));
        }
        const s = {
            container: t,
            cellContainers: i,
            cellTemplateData: r
        };
        return this.renderedTemplates.add(s), s;
    }
    renderElement(t, n, i, r) {
        for(let s = 0; s < this.columns.length; s++){
            const a = this.columns[s].project(t);
            this.renderers[s].renderElement(a, n, i.cellTemplateData[s], r);
        }
    }
    disposeElement(t, n, i, r) {
        for(let s = 0; s < this.columns.length; s++){
            const o = this.renderers[s];
            if (o.disposeElement) {
                const c = this.columns[s].project(t);
                o.disposeElement(c, n, i.cellTemplateData[s], r);
            }
        }
    }
    disposeTemplate(t) {
        for(let n = 0; n < this.columns.length; n++)this.renderers[n].disposeTemplate(t.cellTemplateData[n]);
        Fd(t.container), this.renderedTemplates.delete(t);
    }
    layoutColumn(t, n) {
        for (const { cellContainers: i } of this.renderedTemplates)i[t].style.width = `${n}px`;
    }
}, lrs.TemplateId = "row", urs = lrs, IHc = class extends we {
    constructor(e, t){
        super(), this.column = e, this.index = t, this._onDidLayout = this._register(new ve), this.onDidLayout = this._onDidLayout.event, this.element = Ve(".monaco-table-th", {
            "data-col-index": t
        }, e.label), e.tooltip && this._register(p5().setupManagedHover(ih("mouse"), this.element, e.tooltip));
    }
    get minimumSize() {
        return this.column.minimumWidth ?? 120;
    }
    get maximumSize() {
        return this.column.maximumWidth ?? Number.POSITIVE_INFINITY;
    }
    get onDidChange() {
        return this.column.onDidChangeWidthConstraints ?? Ct.None;
    }
    layout(e) {
        this._onDidLayout.fire([
            this.index,
            e
        ]);
    }
}, drs = class ewm {
    constructor(t, n, i, r, s, o){
        this.virtualDelegate = i, this.columns = r, this.domId = `table_id_${++ewm.InstanceCount}`, this.disposables = new He, this.cachedWidth = 0, this.cachedHeight = 0, this.domNode = Ye(n, Ve(`.monaco-table.${this.domId}`));
        const a = r.map((u, h)=>this.disposables.add(new IHc(u, h))), c = {
            size: a.reduce((u, h)=>u + h.column.weight, 0),
            views: a.map((u)=>({
                    size: u.column.weight,
                    view: u
                }))
        };
        this.splitview = this.disposables.add(new ZV(this.domNode, {
            orientation: xp.HORIZONTAL,
            scrollbarVisibility: 2,
            getSashOrthogonalSize: ()=>this.cachedHeight,
            descriptor: c
        })), this.splitview.el.style.height = `${i.headerRowHeight}px`, this.splitview.el.style.lineHeight = `${i.headerRowHeight}px`;
        const l = new urs(r, s, (u)=>this.splitview.getViewSize(u));
        this.list = this.disposables.add(new mR(t, this.domNode, vkg(i), [
            l
        ], o)), Ct.any(...a.map((u)=>u.onDidLayout))(([u, h])=>l.layoutColumn(u, h), null, this.disposables), this.splitview.onDidSashReset((u)=>{
            const h = r.reduce((g, f)=>g + f.weight, 0), p = r[u].weight / h * this.cachedWidth;
            this.splitview.resizeView(u, p);
        }, null, this.disposables), this.styleElement = dS(this.domNode), this.style(c8c);
    }
    get onDidChangeFocus() {
        return this.list.onDidChangeFocus;
    }
    get onDidChangeSelection() {
        return this.list.onDidChangeSelection;
    }
    get onDidScroll() {
        return this.list.onDidScroll;
    }
    get onMouseClick() {
        return this.list.onMouseClick;
    }
    get onMouseDblClick() {
        return this.list.onMouseDblClick;
    }
    get onMouseMiddleClick() {
        return this.list.onMouseMiddleClick;
    }
    get onPointer() {
        return this.list.onPointer;
    }
    get onMouseUp() {
        return this.list.onMouseUp;
    }
    get onMouseDown() {
        return this.list.onMouseDown;
    }
    get onMouseOver() {
        return this.list.onMouseOver;
    }
    get onMouseMove() {
        return this.list.onMouseMove;
    }
    get onMouseOut() {
        return this.list.onMouseOut;
    }
    get onTouchStart() {
        return this.list.onTouchStart;
    }
    get onTap() {
        return this.list.onTap;
    }
    get onContextMenu() {
        return this.list.onContextMenu;
    }
    get onDidFocus() {
        return this.list.onDidFocus;
    }
    get onDidBlur() {
        return this.list.onDidBlur;
    }
    get onKeyDown() {
        return this.list.onKeyDown;
    }
    get scrollTop() {
        return this.list.scrollTop;
    }
    set scrollTop(t) {
        this.list.scrollTop = t;
    }
    get scrollLeft() {
        return this.list.scrollLeft;
    }
    set scrollLeft(t) {
        this.list.scrollLeft = t;
    }
    get scrollHeight() {
        return this.list.scrollHeight;
    }
    get renderHeight() {
        return this.list.renderHeight;
    }
    get onDidDispose() {
        return this.list.onDidDispose;
    }
    getColumnLabels() {
        return this.columns.map((t)=>t.label);
    }
    resizeColumn(t, n) {
        const i = Math.round(n / 100 * this.cachedWidth);
        this.splitview.resizeView(t, i);
    }
    updateOptions(t) {
        this.list.updateOptions(t);
    }
    splice(t, n, i = []) {
        this.list.splice(t, n, i);
    }
    rerender() {
        this.list.rerender();
    }
    row(t) {
        return this.list.element(t);
    }
    indexOf(t) {
        return this.list.indexOf(t);
    }
    get length() {
        return this.list.length;
    }
    getHTMLElement() {
        return this.domNode;
    }
    layout(t, n) {
        t = t ?? Omn(this.domNode), n = n ?? $ht(this.domNode), this.cachedWidth = n, this.cachedHeight = t, this.splitview.layout(n);
        const i = t - this.virtualDelegate.headerRowHeight;
        this.list.getHTMLElement().style.height = `${i}px`, this.list.layout(i, n);
    }
    triggerTypeNavigation() {
        this.list.triggerTypeNavigation();
    }
    style(t) {
        const n = [];
        n.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.virtualDelegate.headerRowHeight + 1}px;
			height: calc(100% - ${this.virtualDelegate.headerRowHeight}px);
		}`), this.styleElement.textContent = n.join(`
`), this.list.style(t);
    }
    domFocus() {
        this.list.domFocus();
    }
    setAnchor(t) {
        this.list.setAnchor(t);
    }
    getAnchor() {
        return this.list.getAnchor();
    }
    getSelectedElements() {
        return this.list.getSelectedElements();
    }
    setSelection(t, n) {
        this.list.setSelection(t, n);
    }
    getSelection() {
        return this.list.getSelection();
    }
    setFocus(t, n) {
        this.list.setFocus(t, n);
    }
    focusNext(t = 1, n = !1, i) {
        this.list.focusNext(t, n, i);
    }
    focusPrevious(t = 1, n = !1, i) {
        this.list.focusPrevious(t, n, i);
    }
    focusNextPage(t) {
        return this.list.focusNextPage(t);
    }
    focusPreviousPage(t) {
        return this.list.focusPreviousPage(t);
    }
    focusFirst(t) {
        this.list.focusFirst(t);
    }
    focusLast(t) {
        this.list.focusLast(t);
    }
    getFocus() {
        return this.list.getFocus();
    }
    getFocusedElements() {
        return this.list.getFocusedElements();
    }
    getRelativeTop(t) {
        return this.list.getRelativeTop(t);
    }
    reveal(t, n) {
        this.list.reveal(t, n);
    }
    dispose() {
        this.disposables.dispose();
    }
}, drs.InstanceCount = 0, kKe = drs;

}
