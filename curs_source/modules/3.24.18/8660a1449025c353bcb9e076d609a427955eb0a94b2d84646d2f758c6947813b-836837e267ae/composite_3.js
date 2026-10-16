import { Gt, Md, Qe, st, tt } from "./Iwo.js";
import { _Y, vu } from "./actions.js";
import { Xhl, wxi } from "./component.js";
import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { j3 } from "./ze.js";
var Zhl, ekg, tkg;
export { Zhl, ekg, tkg };
var __wakaru_nkg_initialized = false;
export function nkg() {
if (__wakaru_nkg_initialized) return;
__wakaru_nkg_initialized = true;
"use strict";
E(), vu(), Xhl(), Gt(), Hn(), Qe(), To(), Zhl = class extends wxi {
    constructor(t, e, n){
        super(t, e, n), this._onTitleAreaUpdate = this._register(new tt), this.onTitleAreaUpdate = this._onTitleAreaUpdate.event, this._hasFocus = !1, this.visible = !1;
    }
    get onDidFocus() {
        return this._onDidFocus || (this._onDidFocus = this.registerFocusTrackEvents().onDidFocus), this._onDidFocus.event;
    }
    get onDidBlur() {
        return this._onDidBlur || (this._onDidBlur = this.registerFocusTrackEvents().onDidBlur), this._onDidBlur.event;
    }
    hasFocus() {
        return this._hasFocus;
    }
    registerFocusTrackEvents() {
        const t = Md(this.getContainer()), e = this._register(j3(t)), n = this._onDidFocus = this._register(new tt);
        this._register(e.onDidFocus(()=>{
            this._hasFocus = !0, n.fire();
        }));
        const i = this._onDidBlur = this._register(new tt);
        return this._register(e.onDidBlur(()=>{
            this._hasFocus = !1, i.fire();
        })), {
            onDidFocus: n,
            onDidBlur: i
        };
    }
    getTitle() {}
    create(t) {
        this.parent = t;
    }
    getContainer() {
        return this.parent;
    }
    setVisible(t) {
        this.visible !== !!t && (this.visible = t);
    }
    focus() {}
    getMenuIds() {
        return [];
    }
    getActions() {
        return [];
    }
    getSecondaryActions() {
        return [];
    }
    getContextMenuActions() {
        return [];
    }
    getActionViewItem(t, e) {}
    getActionsContext() {
        return null;
    }
    getActionRunner() {
        return this.actionRunner || (this.actionRunner = this._register(new _Y)), this.actionRunner;
    }
    updateTitleArea() {
        this._onTitleAreaUpdate.fire();
    }
    isVisible() {
        return this.visible;
    }
    getControl() {}
}, ekg = class {
    constructor(t, e, n, i, r, s){
        this.ctor = t, this.id = e, this.name = n, this.cssClass = i, this.order = r, this.requestedIndex = s;
    }
    instantiate(t) {
        return t.createInstance(this.ctor);
    }
}, tkg = class extends st {
    constructor(){
        super(...arguments), this._onDidRegister = this._register(new tt), this.onDidRegister = this._onDidRegister.event, this._onDidDeregister = this._register(new tt), this.onDidDeregister = this._onDidDeregister.event, this.composites = [];
    }
    registerComposite(t) {
        this.compositeById(t.id) || (this.composites.push(t), this._onDidRegister.fire(t));
    }
    deregisterComposite(t) {
        const e = this.compositeById(t);
        e && (this.composites.splice(this.composites.indexOf(e), 1), this._onDidDeregister.fire(e));
    }
    getComposite(t) {
        return this.compositeById(t);
    }
    getComposites() {
        return this.composites.slice(0);
    }
    compositeById(t) {
        return this.composites.find((e)=>e.id === t);
    }
};

}
