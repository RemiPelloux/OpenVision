import { S, Se, bt, ve, we } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var er, lA, LYr, Vc, JL, NYr, ZDc;
export { JL, LYr, NYr, Vc, ZDc, er, lA };
var __wakaru_Vo_initialized = false;
export function Vo() {
if (__wakaru_Vo_initialized) return;
__wakaru_Vo_initialized = true;
"use strict";
x(), bt(), Se(), rt(), er = class extends we {
    constructor(e, t = "", n = "", i = !0, r){
        super(), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._enabled = !0, this._id = e, this._label = t, this._cssClass = n, this._enabled = i, this._actionCallback = r;
    }
    get id() {
        return this._id;
    }
    get label() {
        return this._label;
    }
    set label(e) {
        this._setLabel(e);
    }
    _setLabel(e) {
        this._label !== e && (this._label = e, this._onDidChange.fire({
            label: e
        }));
    }
    get tooltip() {
        return this._tooltip || "";
    }
    set tooltip(e) {
        this._setTooltip(e);
    }
    _setTooltip(e) {
        this._tooltip !== e && (this._tooltip = e, this._onDidChange.fire({
            tooltip: e
        }));
    }
    get class() {
        return this._cssClass;
    }
    set class(e) {
        this._setClass(e);
    }
    _setClass(e) {
        this._cssClass !== e && (this._cssClass = e, this._onDidChange.fire({
            class: e
        }));
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._setEnabled(e);
    }
    _setEnabled(e) {
        this._enabled !== e && (this._enabled = e, this._onDidChange.fire({
            enabled: e
        }));
    }
    get checked() {
        return this._checked;
    }
    set checked(e) {
        this._setChecked(e);
    }
    _setChecked(e) {
        this._checked !== e && (this._checked = e, this._onDidChange.fire({
            checked: e
        }));
    }
    async run(e, t) {
        this._actionCallback && await this._actionCallback(e);
    }
}, lA = class extends we {
    constructor(){
        super(...arguments), this._onWillRun = this._register(new ve), this.onWillRun = this._onWillRun.event, this._onDidRun = this._register(new ve), this.onDidRun = this._onDidRun.event;
    }
    async run(e, t) {
        if (!e.enabled) return;
        this._onWillRun.fire({
            action: e
        });
        let n;
        try {
            await this.runAction(e, t);
        } catch (i) {
            n = i;
        }
        this._onDidRun.fire({
            action: e,
            error: n
        });
    }
    async runAction(e, t) {
        await e.run(t);
    }
}, LYr = class dIa {
    constructor(){
        this.id = dIa.ID, this.label = "", this.tooltip = "", this.class = "separator", this.enabled = !1, this.checked = !1;
    }
    static join(...t) {
        let n = [];
        for (const i of t)i.length && (n.length ? n = [
            ...n,
            new dIa,
            ...i
        ] : n = i);
        return n;
    }
    async run() {}
}, LYr.ID = "vs.actions.separator", Vc = LYr, JL = class {
    constructor(e, t, n, i){
        this.tooltip = "", this.enabled = !0, this.checked = void 0, this.id = e, this.label = t, this.class = i, this._actions = n;
    }
    get actions() {
        return this._actions;
    }
    async run() {}
}, NYr = class xSm extends er {
    constructor(){
        super(xSm.ID, S(44, null), void 0, !1);
    }
}, NYr.ID = "vs.actions.empty", ZDc = NYr;

}
