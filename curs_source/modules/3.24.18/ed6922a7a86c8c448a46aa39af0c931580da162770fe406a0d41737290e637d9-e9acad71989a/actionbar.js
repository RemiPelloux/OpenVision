import { He, Lo, Se, T0, bt, po, ve, we, wqe } from "./HVr.js";
import { ME, SD, WP } from "./actionViewItems.js";
import { v8c } from "./actionbar.css";
import { Vc, Vo, lA } from "./actions.js";
import { Fn, Gc, en } from "./dom_2.js";
import { gu, jg } from "./keyboardEvent.js";
import { $f, Fd, VV, WS, Xt, iw, nu, rw } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var f1, cm;
export { cm, f1 };
var __wakaru_Zm_initialized = false;
export function Zm() {
if (__wakaru_Zm_initialized) return;
__wakaru_Zm_initialized = true;
"use strict";
x(), en(), jg(), ME(), $f(), Vo(), bt(), Se(), gr(), v8c(), f1 = ((e)=>(e[e.HORIZONTAL = 0] = "HORIZONTAL", e[e.VERTICAL = 1] = "VERTICAL", e))(f1 || {}), cm = class extends we {
    constructor(e, t = {}){
        super(), this._actionRunnerDisposables = this._register(new He), this.viewItemDisposables = this._register(new po), this.triggerKeyDown = !1, this.focusable = !0, this._onDidBlur = this._register(new ve), this.onDidBlur = this._onDidBlur.event, this._onDidCancel = this._register(new ve({
            onWillAddFirstListener: ()=>this.cancelHasListener = !0
        })), this.onDidCancel = this._onDidCancel.event, this.cancelHasListener = !1, this._onDidRun = this._register(new ve), this.onDidRun = this._onDidRun.event, this._onWillRun = this._register(new ve), this.onWillRun = this._onWillRun.event, this.options = t, this._context = t.context ?? null, this._orientation = this.options.orientation ?? 0, this._triggerKeys = {
            keyDown: this.options.triggerKeys?.keyDown ?? !1,
            keys: this.options.triggerKeys?.keys ?? [
                3,
                10
            ]
        }, this._hoverDelegate = t.hoverDelegate ?? this._register(VV()), this.options.actionRunner ? this._actionRunner = this.options.actionRunner : (this._actionRunner = new lA, this._actionRunnerDisposables.add(this._actionRunner)), this._actionRunnerDisposables.add(this._actionRunner.onDidRun((r)=>this._onDidRun.fire(r))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun((r)=>this._onWillRun.fire(r))), this.viewItems = [], this.focusedItem = void 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-action-bar";
        let n, i;
        switch(this._orientation){
            case 0:
                n = [
                    15
                ], i = [
                    17
                ];
                break;
            case 1:
                n = [
                    16
                ], i = [
                    18
                ], this.domNode.className += " vertical";
                break;
        }
        this._register(Xt(this.domNode, Fn.KEY_DOWN, (r)=>{
            const s = new gu(r);
            let o = !0;
            const a = typeof this.focusedItem == "number" ? this.viewItems[this.focusedItem] : void 0;
            n && (s.equals(n[0]) || s.equals(n[1])) ? o = this.focusPrevious() : i && (s.equals(i[0]) || s.equals(i[1])) ? o = this.focusNext() : s.equals(9) && this.cancelHasListener ? this._onDidCancel.fire() : s.equals(14) ? o = this.focusFirst() : s.equals(13) ? o = this.focusLast() : s.equals(2) && a instanceof WP && a.trapsArrowNavigation ? o = this.focusNext(void 0, !0) : this.isTriggerKeyEvent(s) ? this._triggerKeys.keyDown ? this.doTrigger(s) : this.triggerKeyDown = !0 : o = !1, o && (s.preventDefault(), s.stopPropagation());
        })), this._register(Xt(this.domNode, Fn.KEY_UP, (r)=>{
            const s = new gu(r);
            this.isTriggerKeyEvent(s) ? (!this._triggerKeys.keyDown && this.triggerKeyDown && (this.triggerKeyDown = !1, this.doTrigger(s)), s.preventDefault(), s.stopPropagation()) : (s.equals(2) || s.equals(1026) || s.equals(16) || s.equals(18) || s.equals(15) || s.equals(17)) && this.updateFocusedItem();
        })), this.focusTracker = this._register(rw(this.domNode)), this._register(this.focusTracker.onDidBlur(()=>{
            (WS() === this.domNode || !iw(WS(), this.domNode)) && (this._onDidBlur.fire(), this.previouslyFocusedItem = this.focusedItem, this.focusedItem = void 0, this.triggerKeyDown = !1);
        })), this._register(this.focusTracker.onDidFocus(()=>this.updateFocusedItem())), this.actionsList = document.createElement("ul"), this.actionsList.className = "actions-container", this.options.highlightToggledItems && this.actionsList.classList.add("highlight-toggled"), this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar"), this.options.ariaLabel && this.actionsList.setAttribute("aria-label", this.options.ariaLabel), this.domNode.appendChild(this.actionsList), e.appendChild(this.domNode);
    }
    refreshRole() {
        this.length() >= 1 ? this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar") : this.actionsList.setAttribute("role", "presentation");
    }
    setAriaLabel(e) {
        e ? this.actionsList.setAttribute("aria-label", e) : this.actionsList.removeAttribute("aria-label");
    }
    setFocusable(e) {
        if (this.focusable = e, this.focusable) {
            const t = this.viewItems.find((n)=>n instanceof WP && n.isEnabled());
            t instanceof WP && t.setFocusable(!0);
        } else this.viewItems.forEach((t)=>{
            t instanceof WP && t.setFocusable(!1);
        });
    }
    isTriggerKeyEvent(e) {
        let t = !1;
        return this._triggerKeys.keys.forEach((n)=>{
            t = t || e.equals(n);
        }), t;
    }
    updateFocusedItem() {
        for(let e = 0; e < this.actionsList.children.length; e++){
            const t = this.actionsList.children[e];
            if (iw(WS(), t)) {
                this.focusedItem = e, this.viewItems[this.focusedItem]?.showHover?.();
                break;
            }
        }
    }
    get context() {
        return this._context;
    }
    set context(e) {
        this._context = e, this.viewItems.forEach((t)=>t.setActionContext(e));
    }
    get actionRunner() {
        return this._actionRunner;
    }
    set actionRunner(e) {
        this._actionRunner = e, this._actionRunnerDisposables.clear(), this._actionRunnerDisposables.add(this._actionRunner.onDidRun((t)=>this._onDidRun.fire(t))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun((t)=>this._onWillRun.fire(t))), this.viewItems.forEach((t)=>t.actionRunner = e);
    }
    getContainer() {
        return this.domNode;
    }
    hasAction(e) {
        return this.viewItems.findIndex((t)=>t.action.id === e.id) !== -1;
    }
    getAction(e) {
        if (typeof e == "number") return this.viewItems[e]?.action;
        if (nu(e)) {
            for(; e.parentElement !== this.actionsList;){
                if (!e.parentElement) return;
                e = e.parentElement;
            }
            for(let t = 0; t < this.actionsList.childNodes.length; t++)if (this.actionsList.childNodes[t] === e) return this.viewItems[t].action;
        }
    }
    push(e, t = {}) {
        const n = Array.isArray(e) ? e : [
            e
        ];
        let i = T0(t.index) ? t.index : null;
        n.forEach((r)=>{
            const s = document.createElement("li");
            s.className = "action-item", s.setAttribute("role", "presentation");
            let o;
            const a = {
                hoverDelegate: this._hoverDelegate,
                ...t,
                isTabList: this.options.ariaRole === "tablist"
            };
            this.options.actionViewItemProvider && (o = this.options.actionViewItemProvider(r, a)), o || (o = new SD(this.context, r, a)), this.options.allowContextMenu || this.viewItemDisposables.set(o, Xt(s, Fn.CONTEXT_MENU, (c)=>{
                Gc.stop(c, !0);
            })), o.actionRunner = this._actionRunner, o.setActionContext(this.context), o.render(s), this.focusable && o instanceof WP && this.viewItems.length === 0 && o.setFocusable(!0), i === null || i < 0 || i >= this.actionsList.children.length ? (this.actionsList.appendChild(s), this.viewItems.push(o)) : (this.actionsList.insertBefore(s, this.actionsList.children[i]), this.viewItems.splice(i, 0, o), i++);
        }), typeof this.focusedItem == "number" && this.focus(this.focusedItem), this.refreshRole();
    }
    getWidth(e) {
        if (e >= 0 && e < this.actionsList.children.length) {
            const t = this.actionsList.children.item(e);
            if (t) return t.clientWidth;
        }
        return 0;
    }
    getHeight(e) {
        if (e >= 0 && e < this.actionsList.children.length) {
            const t = this.actionsList.children.item(e);
            if (t) return t.clientHeight;
        }
        return 0;
    }
    pull(e) {
        e >= 0 && e < this.viewItems.length && (this.actionsList.childNodes[e].remove(), this.viewItemDisposables.deleteAndDispose(this.viewItems[e]), Lo(this.viewItems.splice(e, 1)), this.refreshRole());
    }
    clear() {
        this.isEmpty() || (this.viewItems = Lo(this.viewItems), this.viewItemDisposables.clearAndDisposeAll(), Fd(this.actionsList), this.refreshRole());
    }
    length() {
        return this.viewItems.length;
    }
    isEmpty() {
        return this.viewItems.length === 0;
    }
    focus(e) {
        let t = !1, n;
        if (e === void 0 ? t = !0 : typeof e == "number" ? n = e : typeof e == "boolean" && (t = e), t && typeof this.focusedItem > "u") {
            const i = this.viewItems.findIndex((r)=>r.isEnabled());
            this.focusedItem = i === -1 ? void 0 : i, this.updateFocus(void 0, void 0, !0);
        } else n !== void 0 && (this.focusedItem = n), this.updateFocus(void 0, void 0, !0);
    }
    focusFirst() {
        return this.focusedItem = this.length() - 1, this.focusNext(!0);
    }
    focusLast() {
        return this.focusedItem = 0, this.focusPrevious(!0);
    }
    focusNext(e, t) {
        if (typeof this.focusedItem > "u") this.focusedItem = this.viewItems.length - 1;
        else if (this.viewItems.length <= 1) return !1;
        const n = this.focusedItem;
        let i;
        do {
            if (!e && this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) return this.focusedItem = n, !1;
            this.focusedItem = (this.focusedItem + 1) % this.viewItems.length, i = this.viewItems[this.focusedItem];
        }while (this.focusedItem !== n && (this.options.focusOnlyEnabledItems && !i.isEnabled() || i.action.id === Vc.ID))
        return this.updateFocus(void 0, void 0, t), !0;
    }
    focusPrevious(e) {
        if (typeof this.focusedItem > "u") this.focusedItem = 0;
        else if (this.viewItems.length <= 1) return !1;
        const t = this.focusedItem;
        let n;
        do {
            if (this.focusedItem = this.focusedItem - 1, this.focusedItem < 0) {
                if (!e && this.options.preventLoopNavigation) return this.focusedItem = t, !1;
                this.focusedItem = this.viewItems.length - 1;
            }
            n = this.viewItems[this.focusedItem];
        }while (this.focusedItem !== t && (this.options.focusOnlyEnabledItems && !n.isEnabled() || n.action.id === Vc.ID))
        return this.updateFocus(!0), !0;
    }
    updateFocus(e, t, n = !1) {
        typeof this.focusedItem > "u" && this.actionsList.focus({
            preventScroll: t
        }), this.previouslyFocusedItem !== void 0 && this.previouslyFocusedItem !== this.focusedItem && this.viewItems[this.previouslyFocusedItem]?.blur();
        const i = this.focusedItem !== void 0 ? this.viewItems[this.focusedItem] : void 0;
        if (i) {
            let r = !0;
            wqe(i.focus) || (r = !1), this.options.focusOnlyEnabledItems && wqe(i.isEnabled) && !i.isEnabled() && (r = !1), i.action.id === Vc.ID && (r = !1), r ? (n || this.previouslyFocusedItem !== this.focusedItem) && (i.focus(e), this.previouslyFocusedItem = this.focusedItem) : (this.actionsList.focus({
                preventScroll: t
            }), this.previouslyFocusedItem = void 0), r && i.showHover?.();
        }
    }
    doTrigger(e) {
        if (typeof this.focusedItem > "u") return;
        const t = this.viewItems[this.focusedItem];
        if (t instanceof WP) {
            const n = t._context === null || t._context === void 0 ? e : t._context;
            this.run(t._action, n);
        }
    }
    async run(e, t) {
        await this._actionRunner.run(e, t);
    }
    dispose() {
        this._context = void 0, this.viewItems = Lo(this.viewItems), this.getContainer().remove(), super.dispose();
    }
};

}
