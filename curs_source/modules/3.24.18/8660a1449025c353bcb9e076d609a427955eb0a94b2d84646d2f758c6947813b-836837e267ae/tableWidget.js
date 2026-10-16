import { Gt, Nt, Qe, en, st, tt } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { F5, LGd, nRe } from "./listWidget.js";
import { dRe, uRe } from "./splitview.js";
import { ZOy } from "./table.css";
import { E } from "./tslib.es6.js";
import { Fj, Ii, Lkr, P_, QOy, U3, bP, c2, fr, ggn, gz, sR, uy } from "./ze.js";
var Fzo, Bzo, SKd, Uzo, Jyt;
export { Bzo, Fzo, Jyt, SKd, Uzo };
var __wakaru_jzo_initialized = false;
export function jzo() {
if (__wakaru_jzo_initialized) return;
__wakaru_jzo_initialized = true;
"use strict";
E(), Hn(), U3(), gz(), sR(), nRe(), dRe(), Gt(), Qe(), ZOy(), Fzo = class NRb {
    constructor(e, n, i){
        this.columns = e, this.getColumnSize = i, this.templateId = NRb.TemplateId, this.renderedTemplates = new Set;
        const r = new Map(n.map((s)=>[
                s.templateId,
                s
            ]));
        this.renderers = [];
        for (const s of e){
            const o = r.get(s.templateId);
            if (!o) throw new Error(`Table cell renderer for template id ${s.templateId} not found.`);
            this.renderers.push(o);
        }
    }
    renderTemplate(e) {
        const n = fr(e, Ii(".monaco-table-tr")), i = [], r = [];
        for(let o = 0; o < this.columns.length; o++){
            const a = this.renderers[o], l = fr(n, Ii(".monaco-table-td", {
                "data-col-index": o
            }));
            l.style.width = `${this.getColumnSize(o)}px`, i.push(l), r.push(a.renderTemplate(l));
        }
        const s = {
            container: e,
            cellContainers: i,
            cellTemplateData: r
        };
        return this.renderedTemplates.add(s), s;
    }
    renderElement(e, n, i, r) {
        for(let s = 0; s < this.columns.length; s++){
            const a = this.columns[s].project(e);
            this.renderers[s].renderElement(a, n, i.cellTemplateData[s], r);
        }
    }
    disposeElement(e, n, i, r) {
        for(let s = 0; s < this.columns.length; s++){
            const o = this.renderers[s];
            if (o.disposeElement) {
                const l = this.columns[s].project(e);
                o.disposeElement(l, n, i.cellTemplateData[s], r);
            }
        }
    }
    disposeTemplate(e) {
        for(let n = 0; n < this.columns.length; n++)this.renderers[n].disposeTemplate(e.cellTemplateData[n]);
        uy(e.container), this.renderedTemplates.delete(e);
    }
    layoutColumn(e, n) {
        for (const { cellContainers: i } of this.renderedTemplates)i[e].style.width = `${n}px`;
    }
}, Fzo.TemplateId = "row", Bzo = Fzo, SKd = class extends st {
    constructor(t, e){
        super(), this.column = t, this.index = e, this._onDidLayout = this._register(new tt), this.onDidLayout = this._onDidLayout.event, this.element = Ii(".monaco-table-th", {
            "data-col-index": e
        }, t.label), t.tooltip && this._register(Fj().setupManagedHover(c2("mouse"), this.element, t.tooltip));
    }
    get minimumSize() {
        return this.column.minimumWidth ?? 120;
    }
    get maximumSize() {
        return this.column.maximumWidth ?? Number.POSITIVE_INFINITY;
    }
    get onDidChange() {
        return this.column.onDidChangeWidthConstraints ?? en.None;
    }
    layout(t) {
        this._onDidLayout.fire([
            this.index,
            t
        ]);
    }
}, Uzo = class LRb {
    constructor(e, n, i, r, s, o){
        this.virtualDelegate = i, this.columns = r, this.domId = `table_id_${++LRb.InstanceCount}`, this.disposables = new Nt, this.cachedWidth = 0, this.cachedHeight = 0, this.domNode = fr(n, Ii(`.monaco-table.${this.domId}`));
        const a = r.map((u, d)=>this.disposables.add(new SKd(u, d))), l = {
            size: a.reduce((u, d)=>u + d.column.weight, 0),
            views: a.map((u)=>({
                    size: u.column.weight,
                    view: u
                }))
        };
        this.splitview = this.disposables.add(new uRe(this.domNode, {
            orientation: P_.HORIZONTAL,
            scrollbarVisibility: 2,
            getSashOrthogonalSize: ()=>this.cachedHeight,
            descriptor: l
        })), this.splitview.el.style.height = `${i.headerRowHeight}px`, this.splitview.el.style.lineHeight = `${i.headerRowHeight}px`;
        const c = new Bzo(r, s, (u)=>this.splitview.getViewSize(u));
        this.list = this.disposables.add(new F5(e, this.domNode, QOy(i), [
            c
        ], o)), en.any(...a.map((u)=>u.onDidLayout))(([u, d])=>c.layoutColumn(u, d), null, this.disposables), this.splitview.onDidSashReset((u)=>{
            const d = r.reduce((p, g)=>p + g.weight, 0), h = r[u].weight / d * this.cachedWidth;
            this.splitview.resizeView(u, h);
        }, null, this.disposables), this.styleElement = bP(this.domNode), this.style(LGd);
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
    set scrollTop(e) {
        this.list.scrollTop = e;
    }
    get scrollLeft() {
        return this.list.scrollLeft;
    }
    set scrollLeft(e) {
        this.list.scrollLeft = e;
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
        return this.columns.map((e)=>e.label);
    }
    resizeColumn(e, n) {
        const i = Math.round(n / 100 * this.cachedWidth);
        this.splitview.resizeView(e, i);
    }
    updateOptions(e) {
        this.list.updateOptions(e);
    }
    splice(e, n, i = []) {
        this.list.splice(e, n, i);
    }
    rerender() {
        this.list.rerender();
    }
    row(e) {
        return this.list.element(e);
    }
    indexOf(e) {
        return this.list.indexOf(e);
    }
    get length() {
        return this.list.length;
    }
    getHTMLElement() {
        return this.domNode;
    }
    layout(e, n) {
        e = e ?? Lkr(this.domNode), n = n ?? ggn(this.domNode), this.cachedWidth = n, this.cachedHeight = e, this.splitview.layout(n);
        const i = e - this.virtualDelegate.headerRowHeight;
        this.list.getHTMLElement().style.height = `${i}px`, this.list.layout(i, n);
    }
    triggerTypeNavigation() {
        this.list.triggerTypeNavigation();
    }
    style(e) {
        const n = [];
        n.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.virtualDelegate.headerRowHeight + 1}px;
			height: calc(100% - ${this.virtualDelegate.headerRowHeight}px);
		}`), this.styleElement.textContent = n.join(`
`), this.list.style(e);
    }
    domFocus() {
        this.list.domFocus();
    }
    setAnchor(e) {
        this.list.setAnchor(e);
    }
    getAnchor() {
        return this.list.getAnchor();
    }
    getSelectedElements() {
        return this.list.getSelectedElements();
    }
    setSelection(e, n) {
        this.list.setSelection(e, n);
    }
    getSelection() {
        return this.list.getSelection();
    }
    setFocus(e, n) {
        this.list.setFocus(e, n);
    }
    focusNext(e = 1, n = !1, i) {
        this.list.focusNext(e, n, i);
    }
    focusPrevious(e = 1, n = !1, i) {
        this.list.focusPrevious(e, n, i);
    }
    focusNextPage(e) {
        return this.list.focusNextPage(e);
    }
    focusPreviousPage(e) {
        return this.list.focusPreviousPage(e);
    }
    focusFirst(e) {
        this.list.focusFirst(e);
    }
    focusLast(e) {
        this.list.focusLast(e);
    }
    getFocus() {
        return this.list.getFocus();
    }
    getFocusedElements() {
        return this.list.getFocusedElements();
    }
    getRelativeTop(e) {
        return this.list.getRelativeTop(e);
    }
    reveal(e, n) {
        this.list.reveal(e, n);
    }
    dispose() {
        this.disposables.dispose();
    }
}, Uzo.InstanceCount = 0, Jyt = Uzo;

}
