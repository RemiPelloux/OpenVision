import { Fvt, Gt, Nc, Nt, Qe, da, st, tt, zR } from "./Iwo.js";
import { Bj, fz, r_e } from "./actionViewItems.js";
import { qGd } from "./actionbar.css";
import { Kh, _Y, vu } from "./actions.js";
import { Dd, Hn, Pr } from "./dom_2.js";
import { nT, rv } from "./keyboardEvent.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { $u, JE, RC, fHe, j3, li, sR, uy } from "./ze.js";
var wM, oR;
export { oR, wM };
var __wakaru_PT_initialized = false;
export function PT() {
if (__wakaru_PT_initialized) return;
__wakaru_PT_initialized = true;
"use strict";
E(), Hn(), nT(), fz(), sR(), vu(), Gt(), Qe(), To(), qGd(), wM = ((t)=>(t[t.HORIZONTAL = 0] = "HORIZONTAL", t[t.VERTICAL = 1] = "VERTICAL", t))(wM || {}), oR = class extends st {
    constructor(t, e = {}){
        super(), this._actionRunnerDisposables = this._register(new Nt), this.viewItemDisposables = this._register(new da), this.triggerKeyDown = !1, this.focusable = !0, this._onDidBlur = this._register(new tt), this.onDidBlur = this._onDidBlur.event, this._onDidCancel = this._register(new tt({
            onWillAddFirstListener: ()=>this.cancelHasListener = !0
        })), this.onDidCancel = this._onDidCancel.event, this.cancelHasListener = !1, this._onDidRun = this._register(new tt), this.onDidRun = this._onDidRun.event, this._onWillRun = this._register(new tt), this.onWillRun = this._onWillRun.event, this.options = e, this._context = e.context ?? null, this._orientation = this.options.orientation ?? 0, this._triggerKeys = {
            keyDown: this.options.triggerKeys?.keyDown ?? !1,
            keys: this.options.triggerKeys?.keys ?? [
                3,
                10
            ]
        }, this._hoverDelegate = e.hoverDelegate ?? this._register(fHe()), this.options.actionRunner ? this._actionRunner = this.options.actionRunner : (this._actionRunner = new _Y, this._actionRunnerDisposables.add(this._actionRunner)), this._actionRunnerDisposables.add(this._actionRunner.onDidRun((r)=>this._onDidRun.fire(r))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun((r)=>this._onWillRun.fire(r))), this.viewItems = [], this.focusedItem = void 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-action-bar";
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
        this._register(li(this.domNode, Pr.KEY_DOWN, (r)=>{
            const s = new rv(r);
            let o = !0;
            const a = typeof this.focusedItem == "number" ? this.viewItems[this.focusedItem] : void 0;
            n && (s.equals(n[0]) || s.equals(n[1])) ? o = this.focusPrevious() : i && (s.equals(i[0]) || s.equals(i[1])) ? o = this.focusNext() : s.equals(9) && this.cancelHasListener ? this._onDidCancel.fire() : s.equals(14) ? o = this.focusFirst() : s.equals(13) ? o = this.focusLast() : s.equals(2) && a instanceof Bj && a.trapsArrowNavigation ? o = this.focusNext(void 0, !0) : this.isTriggerKeyEvent(s) ? this._triggerKeys.keyDown ? this.doTrigger(s) : this.triggerKeyDown = !0 : o = !1, o && (s.preventDefault(), s.stopPropagation());
        })), this._register(li(this.domNode, Pr.KEY_UP, (r)=>{
            const s = new rv(r);
            this.isTriggerKeyEvent(s) ? (!this._triggerKeys.keyDown && this.triggerKeyDown && (this.triggerKeyDown = !1, this.doTrigger(s)), s.preventDefault(), s.stopPropagation()) : (s.equals(2) || s.equals(1026) || s.equals(16) || s.equals(18) || s.equals(15) || s.equals(17)) && this.updateFocusedItem();
        })), this.focusTracker = this._register(j3(this.domNode)), this._register(this.focusTracker.onDidBlur(()=>{
            (RC() === this.domNode || !JE(RC(), this.domNode)) && (this._onDidBlur.fire(), this.previouslyFocusedItem = this.focusedItem, this.focusedItem = void 0, this.triggerKeyDown = !1);
        })), this._register(this.focusTracker.onDidFocus(()=>this.updateFocusedItem())), this.actionsList = document.createElement("ul"), this.actionsList.className = "actions-container", this.options.highlightToggledItems && this.actionsList.classList.add("highlight-toggled"), this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar"), this.options.ariaLabel && this.actionsList.setAttribute("aria-label", this.options.ariaLabel), this.domNode.appendChild(this.actionsList), t.appendChild(this.domNode);
    }
    refreshRole() {
        this.length() >= 1 ? this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar") : this.actionsList.setAttribute("role", "presentation");
    }
    setAriaLabel(t) {
        t ? this.actionsList.setAttribute("aria-label", t) : this.actionsList.removeAttribute("aria-label");
    }
    setFocusable(t) {
        if (this.focusable = t, this.focusable) {
            const e = this.viewItems.find((n)=>n instanceof Bj && n.isEnabled());
            e instanceof Bj && e.setFocusable(!0);
        } else this.viewItems.forEach((e)=>{
            e instanceof Bj && e.setFocusable(!1);
        });
    }
    isTriggerKeyEvent(t) {
        let e = !1;
        return this._triggerKeys.keys.forEach((n)=>{
            e = e || t.equals(n);
        }), e;
    }
    updateFocusedItem() {
        for(let t = 0; t < this.actionsList.children.length; t++){
            const e = this.actionsList.children[t];
            if (JE(RC(), e)) {
                this.focusedItem = t, this.viewItems[this.focusedItem]?.showHover?.();
                break;
            }
        }
    }
    get context() {
        return this._context;
    }
    set context(t) {
        this._context = t, this.viewItems.forEach((e)=>e.setActionContext(t));
    }
    get actionRunner() {
        return this._actionRunner;
    }
    set actionRunner(t) {
        this._actionRunner = t, this._actionRunnerDisposables.clear(), this._actionRunnerDisposables.add(this._actionRunner.onDidRun((e)=>this._onDidRun.fire(e))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun((e)=>this._onWillRun.fire(e))), this.viewItems.forEach((e)=>e.actionRunner = t);
    }
    getContainer() {
        return this.domNode;
    }
    hasAction(t) {
        return this.viewItems.findIndex((e)=>e.action.id === t.id) !== -1;
    }
    getAction(t) {
        if (typeof t == "number") return this.viewItems[t]?.action;
        if ($u(t)) {
            for(; t.parentElement !== this.actionsList;){
                if (!t.parentElement) return;
                t = t.parentElement;
            }
            for(let e = 0; e < this.actionsList.childNodes.length; e++)if (this.actionsList.childNodes[e] === t) return this.viewItems[e].action;
        }
    }
    push(t, e = {}) {
        const n = Array.isArray(t) ? t : [
            t
        ];
        let i = zR(e.index) ? e.index : null;
        n.forEach((r)=>{
            const s = document.createElement("li");
            s.className = "action-item", s.setAttribute("role", "presentation");
            let o;
            const a = {
                hoverDelegate: this._hoverDelegate,
                ...e,
                isTabList: this.options.ariaRole === "tablist"
            };
            this.options.actionViewItemProvider && (o = this.options.actionViewItemProvider(r, a)), o || (o = new r_e(this.context, r, a)), this.options.allowContextMenu || this.viewItemDisposables.set(o, li(s, Pr.CONTEXT_MENU, (l)=>{
                Dd.stop(l, !0);
            })), o.actionRunner = this._actionRunner, o.setActionContext(this.context), o.render(s), this.focusable && o instanceof Bj && this.viewItems.length === 0 && o.setFocusable(!0), i === null || i < 0 || i >= this.actionsList.children.length ? (this.actionsList.appendChild(s), this.viewItems.push(o)) : (this.actionsList.insertBefore(s, this.actionsList.children[i]), this.viewItems.splice(i, 0, o), i++);
        }), typeof this.focusedItem == "number" && this.focus(this.focusedItem), this.refreshRole();
    }
    getWidth(t) {
        if (t >= 0 && t < this.actionsList.children.length) {
            const e = this.actionsList.children.item(t);
            if (e) return e.clientWidth;
        }
        return 0;
    }
    getHeight(t) {
        if (t >= 0 && t < this.actionsList.children.length) {
            const e = this.actionsList.children.item(t);
            if (e) return e.clientHeight;
        }
        return 0;
    }
    pull(t) {
        t >= 0 && t < this.viewItems.length && (this.actionsList.childNodes[t].remove(), this.viewItemDisposables.deleteAndDispose(this.viewItems[t]), Nc(this.viewItems.splice(t, 1)), this.refreshRole());
    }
    clear() {
        this.isEmpty() || (this.viewItems = Nc(this.viewItems), this.viewItemDisposables.clearAndDisposeAll(), uy(this.actionsList), this.refreshRole());
    }
    length() {
        return this.viewItems.length;
    }
    isEmpty() {
        return this.viewItems.length === 0;
    }
    focus(t) {
        let e = !1, n;
        if (t === void 0 ? e = !0 : typeof t == "number" ? n = t : typeof t == "boolean" && (e = t), e && typeof this.focusedItem > "u") {
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
    focusNext(t, e) {
        if (typeof this.focusedItem > "u") this.focusedItem = this.viewItems.length - 1;
        else if (this.viewItems.length <= 1) return !1;
        const n = this.focusedItem;
        let i;
        do {
            if (!t && this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) return this.focusedItem = n, !1;
            this.focusedItem = (this.focusedItem + 1) % this.viewItems.length, i = this.viewItems[this.focusedItem];
        }while (this.focusedItem !== n && (this.options.focusOnlyEnabledItems && !i.isEnabled() || i.action.id === Kh.ID))
        return this.updateFocus(void 0, void 0, e), !0;
    }
    focusPrevious(t) {
        if (typeof this.focusedItem > "u") this.focusedItem = 0;
        else if (this.viewItems.length <= 1) return !1;
        const e = this.focusedItem;
        let n;
        do {
            if (this.focusedItem = this.focusedItem - 1, this.focusedItem < 0) {
                if (!t && this.options.preventLoopNavigation) return this.focusedItem = e, !1;
                this.focusedItem = this.viewItems.length - 1;
            }
            n = this.viewItems[this.focusedItem];
        }while (this.focusedItem !== e && (this.options.focusOnlyEnabledItems && !n.isEnabled() || n.action.id === Kh.ID))
        return this.updateFocus(!0), !0;
    }
    updateFocus(t, e, n = !1) {
        typeof this.focusedItem > "u" && this.actionsList.focus({
            preventScroll: e
        }), this.previouslyFocusedItem !== void 0 && this.previouslyFocusedItem !== this.focusedItem && this.viewItems[this.previouslyFocusedItem]?.blur();
        const i = this.focusedItem !== void 0 ? this.viewItems[this.focusedItem] : void 0;
        if (i) {
            let r = !0;
            Fvt(i.focus) || (r = !1), this.options.focusOnlyEnabledItems && Fvt(i.isEnabled) && !i.isEnabled() && (r = !1), i.action.id === Kh.ID && (r = !1), r ? (n || this.previouslyFocusedItem !== this.focusedItem) && (i.focus(t), this.previouslyFocusedItem = this.focusedItem) : (this.actionsList.focus({
                preventScroll: e
            }), this.previouslyFocusedItem = void 0), r && i.showHover?.();
        }
    }
    doTrigger(t) {
        if (typeof this.focusedItem > "u") return;
        const e = this.viewItems[this.focusedItem];
        if (e instanceof Bj) {
            const n = e._context === null || e._context === void 0 ? t : e._context;
            this.run(e._action, n);
        }
    }
    async run(t, e) {
        await this._actionRunner.run(t, e);
    }
    dispose() {
        this._context = void 0, this.viewItems = Nc(this.viewItems), this.getContainer().remove(), super.dispose();
    }
};

}
