import { Ct, Se, bt, we, x7 } from "./HVr.js";
import { dr } from "./arrays.js";
import { Ar, Eo } from "./cancellation.js";
import { en } from "./dom_2.js";
import { XUc } from "./list.css";
import { mR, qV } from "./listWidget.js";
import { fM, mkg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var kHc, wHc, fmt;
export { fmt, kHc, wHc };
var __wakaru_CHc_initialized = false;
export function CHc() {
if (__wakaru_CHc_initialized) return;
__wakaru_CHc_initialized = true;
"use strict";
x(), dr(), Ar(), bt(), Se(), XUc(), qV(), en(), kHc = class {
    constructor(e, t){
        this.renderer = e, this.modelProvider = t;
    }
    get templateId() {
        return this.renderer.templateId;
    }
    renderTemplate(e) {
        return {
            data: this.renderer.renderTemplate(e),
            disposable: we.None
        };
    }
    renderElement(e, t, n, i) {
        if (n.disposable?.dispose(), !n.data) return;
        const r = this.modelProvider();
        if (r.isResolved(e)) return this.renderer.renderElement(r.get(e), e, n.data, i);
        const s = new Eo, o = r.resolve(e, s.token);
        n.disposable = {
            dispose: ()=>s.cancel()
        }, this.renderer.renderPlaceholder(e, n.data), o.then((a)=>this.renderer.renderElement(a, e, n.data, i));
    }
    disposeTemplate(e) {
        e.disposable && (e.disposable.dispose(), e.disposable = void 0), e.data && (this.renderer.disposeTemplate(e.data), e.data = void 0);
    }
}, wHc = class {
    constructor(e, t){
        this.modelProvider = e, this.accessibilityProvider = t;
    }
    getWidgetAriaLabel() {
        return this.accessibilityProvider.getWidgetAriaLabel();
    }
    getAriaLabel(e) {
        const t = this.modelProvider();
        return t.isResolved(e) ? this.accessibilityProvider.getAriaLabel(t.get(e)) : null;
    }
}, fmt = class {
    constructor(e, t, n, i, r = {}){
        const s = ()=>this.model, o = i.map((a)=>new kHc(a, s));
        this.list = new mR(e, t, n, o, mkg(s, r));
    }
    updateOptions(e) {
        this.list.updateOptions(e);
    }
    getHTMLElement() {
        return this.list.getHTMLElement();
    }
    isDOMFocused() {
        return fM(this.getHTMLElement());
    }
    domFocus() {
        this.list.domFocus();
    }
    get onDidFocus() {
        return this.list.onDidFocus;
    }
    get onDidBlur() {
        return this.list.onDidBlur;
    }
    get widget() {
        return this.list;
    }
    get onDidDispose() {
        return this.list.onDidDispose;
    }
    get onMouseClick() {
        return Ct.map(this.list.onMouseClick, ({ element: e, index: t, browserEvent: n })=>({
                element: e === void 0 ? void 0 : this._model.get(e),
                index: t,
                browserEvent: n
            }));
    }
    get onMouseDblClick() {
        return Ct.map(this.list.onMouseDblClick, ({ element: e, index: t, browserEvent: n })=>({
                element: e === void 0 ? void 0 : this._model.get(e),
                index: t,
                browserEvent: n
            }));
    }
    get onTap() {
        return Ct.map(this.list.onTap, ({ element: e, index: t, browserEvent: n })=>({
                element: e === void 0 ? void 0 : this._model.get(e),
                index: t,
                browserEvent: n
            }));
    }
    get onPointer() {
        return Ct.map(this.list.onPointer, ({ element: e, index: t, browserEvent: n })=>({
                element: e === void 0 ? void 0 : this._model.get(e),
                index: t,
                browserEvent: n
            }));
    }
    get onDidChangeFocus() {
        return Ct.map(this.list.onDidChangeFocus, ({ elements: e, indexes: t, browserEvent: n })=>({
                elements: e.map((i)=>this._model.get(i)),
                indexes: t,
                browserEvent: n
            }));
    }
    get onDidChangeSelection() {
        return Ct.map(this.list.onDidChangeSelection, ({ elements: e, indexes: t, browserEvent: n })=>({
                elements: e.map((i)=>this._model.get(i)),
                indexes: t,
                browserEvent: n
            }));
    }
    get onContextMenu() {
        return Ct.map(this.list.onContextMenu, ({ element: e, index: t, anchor: n, browserEvent: i })=>typeof e > "u" ? {
                element: e,
                index: t,
                anchor: n,
                browserEvent: i
            } : {
                element: this._model.get(e),
                index: t,
                anchor: n,
                browserEvent: i
            });
    }
    get model() {
        return this._model;
    }
    set model(e) {
        this._model = e, this.list.splice(0, this.list.length, x7(e.length));
    }
    get length() {
        return this.list.length;
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
    setAnchor(e) {
        this.list.setAnchor(e);
    }
    getAnchor() {
        return this.list.getAnchor();
    }
    setFocus(e) {
        this.list.setFocus(e);
    }
    focusNext(e, t) {
        this.list.focusNext(e, t);
    }
    focusPrevious(e, t) {
        this.list.focusPrevious(e, t);
    }
    focusNextPage() {
        return this.list.focusNextPage();
    }
    focusPreviousPage() {
        return this.list.focusPreviousPage();
    }
    focusLast() {
        this.list.focusLast();
    }
    focusFirst() {
        this.list.focusFirst();
    }
    getFocus() {
        return this.list.getFocus();
    }
    setSelection(e, t) {
        this.list.setSelection(e, t);
    }
    getSelection() {
        return this.list.getSelection();
    }
    getSelectedElements() {
        return this.getSelection().map((e)=>this.model.get(e));
    }
    layout(e, t) {
        this.list.layout(e, t);
    }
    triggerTypeNavigation() {
        this.list.triggerTypeNavigation();
    }
    reveal(e, t) {
        this.list.reveal(e, t);
    }
    style(e) {
        this.list.style(e);
    }
    dispose() {
        this.list.dispose();
    }
};

}
