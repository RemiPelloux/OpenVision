import { D, Gt, Qe, st, tt } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var za, _Y, j7o, Kh, az, $7o, z5d;
export { $7o, Kh, _Y, az, j7o, z5d, za };
var __wakaru_vu_initialized = false;
export function vu() {
if (__wakaru_vu_initialized) return;
__wakaru_vu_initialized = true;
"use strict";
E(), Gt(), Qe(), Bt(), za = class extends st {
    constructor(t, e = "", n = "", i = !0, r){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._enabled = !0, this._id = t, this._label = e, this._cssClass = n, this._enabled = i, this._actionCallback = r;
    }
    get id() {
        return this._id;
    }
    get label() {
        return this._label;
    }
    set label(t) {
        this._setLabel(t);
    }
    _setLabel(t) {
        this._label !== t && (this._label = t, this._onDidChange.fire({
            label: t
        }));
    }
    get tooltip() {
        return this._tooltip || "";
    }
    set tooltip(t) {
        this._setTooltip(t);
    }
    _setTooltip(t) {
        this._tooltip !== t && (this._tooltip = t, this._onDidChange.fire({
            tooltip: t
        }));
    }
    get class() {
        return this._cssClass;
    }
    set class(t) {
        this._setClass(t);
    }
    _setClass(t) {
        this._cssClass !== t && (this._cssClass = t, this._onDidChange.fire({
            class: t
        }));
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(t) {
        this._setEnabled(t);
    }
    _setEnabled(t) {
        this._enabled !== t && (this._enabled = t, this._onDidChange.fire({
            enabled: t
        }));
    }
    get checked() {
        return this._checked;
    }
    set checked(t) {
        this._setChecked(t);
    }
    _setChecked(t) {
        this._checked !== t && (this._checked = t, this._onDidChange.fire({
            checked: t
        }));
    }
    async run(t, e) {
        this._actionCallback && await this._actionCallback(t);
    }
}, _Y = class extends st {
    constructor(){
        super(...arguments), this._onWillRun = this._register(new tt), this.onWillRun = this._onWillRun.event, this._onDidRun = this._register(new tt), this.onDidRun = this._onDidRun.event;
    }
    async run(t, e) {
        if (!t.enabled) return;
        this._onWillRun.fire({
            action: t
        });
        let n;
        try {
            await this.runAction(t, e);
        } catch (i) {
            n = i;
        }
        this._onDidRun.fire({
            action: t,
            error: n
        });
    }
    async runAction(t, e) {
        await t.run(e);
    }
}, j7o = class ZQc {
    constructor(){
        this.id = ZQc.ID, this.label = "", this.tooltip = "", this.class = "separator", this.enabled = !1, this.checked = !1;
    }
    static join(...e) {
        let n = [];
        for (const i of e)i.length && (n.length ? n = [
            ...n,
            new ZQc,
            ...i
        ] : n = i);
        return n;
    }
    async run() {}
}, j7o.ID = "vs.actions.separator", Kh = j7o, az = class {
    constructor(t, e, n, i){
        this.tooltip = "", this.enabled = !0, this.checked = void 0, this.id = t, this.label = e, this.class = i, this._actions = n;
    }
    get actions() {
        return this._actions;
    }
    async run() {}
}, $7o = class hAb extends za {
    constructor(){
        super(hAb.ID, D(44, null), void 0, !1);
    }
}, $7o.ID = "vs.actions.empty", z5d = $7o;

}
