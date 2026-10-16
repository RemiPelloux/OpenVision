import { Se, bt, tl, ve, we } from "./HVr.js";
import { Vo, lA } from "./actions.js";
import { Ctr, fqt } from "./component.js";
import { en } from "./dom_2.js";
import { rw } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var EIo, aNh, cNh;
export { EIo, aNh, cNh };
var __wakaru_lNh_initialized = false;
export function lNh() {
if (__wakaru_lNh_initialized) return;
__wakaru_lNh_initialized = true;
"use strict";
x(), Vo(), Ctr(), bt(), en(), Se(), gr(), EIo = class extends fqt {
    constructor(e, t, n){
        super(e, t, n), this._onTitleAreaUpdate = this._register(new ve), this.onTitleAreaUpdate = this._onTitleAreaUpdate.event, this._hasFocus = !1, this.visible = !1;
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
        const e = tl(this.getContainer()), t = this._register(rw(e)), n = this._onDidFocus = this._register(new ve);
        this._register(t.onDidFocus(()=>{
            this._hasFocus = !0, n.fire();
        }));
        const i = this._onDidBlur = this._register(new ve);
        return this._register(t.onDidBlur(()=>{
            this._hasFocus = !1, i.fire();
        })), {
            onDidFocus: n,
            onDidBlur: i
        };
    }
    getTitle() {}
    create(e) {
        this.parent = e;
    }
    getContainer() {
        return this.parent;
    }
    setVisible(e) {
        this.visible !== !!e && (this.visible = e);
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
    getActionViewItem(e, t) {}
    getActionsContext() {
        return null;
    }
    getActionRunner() {
        return this.actionRunner || (this.actionRunner = this._register(new lA)), this.actionRunner;
    }
    updateTitleArea() {
        this._onTitleAreaUpdate.fire();
    }
    isVisible() {
        return this.visible;
    }
    getControl() {}
}, aNh = class {
    constructor(e, t, n, i, r, s){
        this.ctor = e, this.id = t, this.name = n, this.cssClass = i, this.order = r, this.requestedIndex = s;
    }
    instantiate(e) {
        return e.createInstance(this.ctor);
    }
}, cNh = class extends we {
    constructor(){
        super(...arguments), this._onDidRegister = this._register(new ve), this.onDidRegister = this._onDidRegister.event, this._onDidDeregister = this._register(new ve), this.onDidDeregister = this._onDidDeregister.event, this.composites = [];
    }
    registerComposite(e) {
        this.compositeById(e.id) || (this.composites.push(e), this._onDidRegister.fire(e));
    }
    deregisterComposite(e) {
        const t = this.compositeById(e);
        t && (this.composites.splice(this.composites.indexOf(t), 1), this._onDidDeregister.fire(t));
    }
    getComposite(e) {
        return this.compositeById(e);
    }
    getComposites() {
        return this.composites.slice(0);
    }
    compositeById(e) {
        return this.composites.find((t)=>t.id === e);
    }
};

}
