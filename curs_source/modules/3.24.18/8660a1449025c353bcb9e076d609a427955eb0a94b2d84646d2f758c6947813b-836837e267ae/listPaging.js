import { Dte, Gt, Qe, en, st } from "./Iwo.js";
import { bo } from "./arrays.js";
import { El, yo } from "./cancellation.js";
import { Hn } from "./dom_2.js";
import { _Gd } from "./list.css";
import { F5, nRe } from "./listWidget.js";
import { E } from "./tslib.es6.js";
import { Xte, YOy } from "./ze.js";
var gKd, fKd, WBt;
export { WBt, fKd, gKd };
var __wakaru_vKd_initialized = false;
export function vKd() {
if (__wakaru_vKd_initialized) return;
__wakaru_vKd_initialized = true;
"use strict";
E(), bo(), yo(), Gt(), Qe(), _Gd(), nRe(), Hn(), gKd = class {
    constructor(t, e){
        this.renderer = t, this.modelProvider = e;
    }
    get templateId() {
        return this.renderer.templateId;
    }
    renderTemplate(t) {
        return {
            data: this.renderer.renderTemplate(t),
            disposable: st.None
        };
    }
    renderElement(t, e, n, i) {
        if (n.disposable?.dispose(), !n.data) return;
        const r = this.modelProvider();
        if (r.isResolved(t)) return this.renderer.renderElement(r.get(t), t, n.data, i);
        const s = new El, o = r.resolve(t, s.token);
        n.disposable = {
            dispose: ()=>s.cancel()
        }, this.renderer.renderPlaceholder(t, n.data), o.then((a)=>this.renderer.renderElement(a, t, n.data, i));
    }
    disposeTemplate(t) {
        t.disposable && (t.disposable.dispose(), t.disposable = void 0), t.data && (this.renderer.disposeTemplate(t.data), t.data = void 0);
    }
}, fKd = class {
    constructor(t, e){
        this.modelProvider = t, this.accessibilityProvider = e;
    }
    getWidgetAriaLabel() {
        return this.accessibilityProvider.getWidgetAriaLabel();
    }
    getAriaLabel(t) {
        const e = this.modelProvider();
        return e.isResolved(t) ? this.accessibilityProvider.getAriaLabel(e.get(t)) : null;
    }
}, WBt = class {
    constructor(t, e, n, i, r = {}){
        const s = ()=>this.model, o = i.map((a)=>new gKd(a, s));
        this.list = new F5(t, e, n, o, YOy(s, r));
    }
    updateOptions(t) {
        this.list.updateOptions(t);
    }
    getHTMLElement() {
        return this.list.getHTMLElement();
    }
    isDOMFocused() {
        return Xte(this.getHTMLElement());
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
        return en.map(this.list.onMouseClick, ({ element: t, index: e, browserEvent: n })=>({
                element: t === void 0 ? void 0 : this._model.get(t),
                index: e,
                browserEvent: n
            }));
    }
    get onMouseDblClick() {
        return en.map(this.list.onMouseDblClick, ({ element: t, index: e, browserEvent: n })=>({
                element: t === void 0 ? void 0 : this._model.get(t),
                index: e,
                browserEvent: n
            }));
    }
    get onTap() {
        return en.map(this.list.onTap, ({ element: t, index: e, browserEvent: n })=>({
                element: t === void 0 ? void 0 : this._model.get(t),
                index: e,
                browserEvent: n
            }));
    }
    get onPointer() {
        return en.map(this.list.onPointer, ({ element: t, index: e, browserEvent: n })=>({
                element: t === void 0 ? void 0 : this._model.get(t),
                index: e,
                browserEvent: n
            }));
    }
    get onDidChangeFocus() {
        return en.map(this.list.onDidChangeFocus, ({ elements: t, indexes: e, browserEvent: n })=>({
                elements: t.map((i)=>this._model.get(i)),
                indexes: e,
                browserEvent: n
            }));
    }
    get onDidChangeSelection() {
        return en.map(this.list.onDidChangeSelection, ({ elements: t, indexes: e, browserEvent: n })=>({
                elements: t.map((i)=>this._model.get(i)),
                indexes: e,
                browserEvent: n
            }));
    }
    get onContextMenu() {
        return en.map(this.list.onContextMenu, ({ element: t, index: e, anchor: n, browserEvent: i })=>typeof t > "u" ? {
                element: t,
                index: e,
                anchor: n,
                browserEvent: i
            } : {
                element: this._model.get(t),
                index: e,
                anchor: n,
                browserEvent: i
            });
    }
    get model() {
        return this._model;
    }
    set model(t) {
        this._model = t, this.list.splice(0, this.list.length, Dte(t.length));
    }
    get length() {
        return this.list.length;
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
    setAnchor(t) {
        this.list.setAnchor(t);
    }
    getAnchor() {
        return this.list.getAnchor();
    }
    setFocus(t) {
        this.list.setFocus(t);
    }
    focusNext(t, e) {
        this.list.focusNext(t, e);
    }
    focusPrevious(t, e) {
        this.list.focusPrevious(t, e);
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
    setSelection(t, e) {
        this.list.setSelection(t, e);
    }
    getSelection() {
        return this.list.getSelection();
    }
    getSelectedElements() {
        return this.getSelection().map((t)=>this.model.get(t));
    }
    layout(t, e) {
        this.list.layout(t, e);
    }
    triggerTypeNavigation() {
        this.list.triggerTypeNavigation();
    }
    reveal(t, e) {
        this.list.reveal(t, e);
    }
    style(t) {
        this.list.style(t);
    }
    dispose() {
        this.list.dispose();
    }
};

}
