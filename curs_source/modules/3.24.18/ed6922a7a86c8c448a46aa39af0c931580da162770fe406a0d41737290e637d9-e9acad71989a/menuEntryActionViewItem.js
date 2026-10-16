import { He, Im, S, Se, U_, cn, hp, jn, rn } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { lmt } from "./action.js";
import { Qge, f5e } from "./actionBadgeService.js";
import { ME, SD, Svn, WP } from "./actionViewItems.js";
import { Vc, Vo, lA } from "./actions.js";
import { C, Zl, ei, ie, rv } from "./actions_2.js";
import { tc } from "./colorRegistry.js";
import { So, cA, qNt, rKr } from "./constants_8.js";
import { Lv, Yo, ka } from "./contextView.js";
import { dn, xn } from "./contextkey.js";
import { MO } from "./cssValue.js";
import { Uwe, sf } from "./defaultStyles.js";
import { Fn, awe, en } from "./dom_2.js";
import { Owe, YV } from "./dropdownActionViewItem.js";
import { pze } from "./inputColors.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { amt, cmt } from "./keybindingLabels.js";
import { gu, jg } from "./keyboardEvent.js";
import { ASg } from "./menuEntryActionViewItem.css";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { AE, Ep, Fd, Is, Ve, Xt, Ye, mJ, mis, owe, tf } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { Ft, Sr } from "./themables.js";
import { x0 } from "./theme.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var lRe, T3, H7c, uRe, pyi, myi;
export { H7c, T3, lRe, myi, pyi, uRe };
var __wakaru_lm_initialized = false;
export function lm() {
if (__wakaru_lm_initialized) return;
__wakaru_lm_initialized = true;
"use strict";
x(), MO(), en(), jg(), ME(), Owe(), Vo(), cmt(), Pr(), Se(), jn(), Sr(), gr(), rt(), Op(), f5e(), lmt(), dn(), ka(), Ze(), no(), ji(), Vn(), sf(), tc(), x0(), as(), ei(), So(), ASg(), lRe = "data-command-id", T3 = class extends SD {
    constructor(e, t, n, i, r, s, o, a, c){
        super(void 0, e, {
            icon: !!(e.class || e.item.icon),
            label: !e.class && !e.item.icon,
            draggable: t?.draggable,
            keybinding: t?.keybinding,
            hoverDelegate: t?.hoverDelegate,
            keybindingNotRenderedWithLabel: t?.keybindingNotRenderedWithLabel
        }), this._options = t, this._keybindingService = n, this._notificationService = i, this._contextKeyService = r, this._themeService = s, this._contextMenuService = o, this._accessibilityService = a, this._actionBadgeService = c, this._wantsAltCommand = !1, this._itemClassDispose = this._register(new cn), this._renderListeners = this._register(new He), this._solidDisposable = this._register(new cn), this._badgeDisposable = this._register(new cn), this._altKey = awe.getInstance(), this._register(this._actionBadgeService.onDidChangeBadge((l)=>{
            l.actionId === this._commandAction.id && this.updateBadge(l.badge);
        }));
    }
    get _menuItemAction() {
        return this._action;
    }
    get _commandAction() {
        return this._wantsAltCommand && this._menuItemAction.alt || this._menuItemAction;
    }
    async onClick(e) {
        e.preventDefault(), e.stopPropagation();
        try {
            await this.actionRunner.run(this._commandAction, this._context);
        } catch (t) {
            this._notificationService.error(t);
        }
    }
    render(e) {
        if (this._renderListeners.clear(), this._action.id === qNt) {
            const i = document.createElement("span");
            i.classList.add("keybinding");
            const r = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService), s = r && r.getLabel();
            i.textContent = s || "", i.style.fontSize = "10px", i.style.opacity = "0.5", i.style.display = "none", this.specialKbDiv = i;
            const o = this._contextKeyService;
            this._solidDisposable.value = o.onDidChangeContext((a)=>{
                a.affectsSome(new Set([
                    "focusedView"
                ])) && (o.getContextKeyValue("focusedView") === cA ? (this.startupTimeout && clearTimeout(this.startupTimeout), Date.now() - rKr < 3e3 ? this.startupTimeout = setTimeout(()=>{
                    i.style.display = "inline";
                }, 3e3 - (Date.now() - rKr)) : i.style.display = "inline") : i.style.display = "none");
            });
        }
        super.render(e), e.classList.add("menu-entry");
        try {
            const i = this._menuItemAction.item.id;
            i && (e.setAttribute(lRe, i), this.element?.setAttribute(lRe, i));
        } catch  {}
        this.options.icon && this._updateItemClass(this._menuItemAction.item), this._badge = Ye(e, Ve(".badge")), this._badgeContent = Ye(this._badge, Ve(".badge-content")), Ep(this._badge);
        const t = this._commandAction.item.badge, n = this._actionBadgeService.getBadge(this._commandAction.id);
        if ((t || n) && this.updateBadge(n || t), this._menuItemAction.alt) {
            let i = !1;
            const r = ()=>{
                const s = !!this._menuItemAction.alt?.enabled && (!this._accessibilityService.isMotionReduced() || i) && (this._altKey.keyStatus.altKey || this._altKey.keyStatus.shiftKey && i);
                s !== this._wantsAltCommand && (this._wantsAltCommand = s, this.updateLabel(), this.updateTooltip(), this.updateClass());
            };
            this._renderListeners.add(this._altKey.event(r)), this._renderListeners.add(Xt(e, "mouseleave", (s)=>{
                i = !1, r();
            })), this._renderListeners.add(Xt(e, "mouseenter", (s)=>{
                i = !0, r();
            })), r();
        }
    }
    updateLabel() {
        this.options.label && this.label && (this.label.textContent = this._commandAction.label);
    }
    getTooltip() {
        const e = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService), t = e && e.getLabel(), n = this._commandAction.tooltip || this._commandAction.label;
        let i = t ? S(1774, null, n, t) : n;
        if (!this._wantsAltCommand && this._menuItemAction.alt?.enabled) {
            const r = this._menuItemAction.alt.tooltip || this._menuItemAction.alt.label, s = this._keybindingService.lookupKeybinding(this._menuItemAction.alt.id, this._contextKeyService), o = s && s.getLabel(), a = o ? S(1775, null, r, o) : r;
            i = S(1776, null, i, amt.modifierLabels[hp].altKey, a);
        }
        return i;
    }
    updateClass() {
        this.options.icon && (this._commandAction !== this._menuItemAction ? this._menuItemAction.alt && this._updateItemClass(this._menuItemAction.alt.item) : this._updateItemClass(this._menuItemAction.item));
    }
    _updateItemClass(e) {
        this._itemClassDispose.value = void 0;
        const { element: t, label: n } = this;
        if (!t || !n) return;
        const i = this._commandAction.checked && mis(e.toggled) && e.toggled.icon ? e.toggled.icon : e.icon;
        if (i) if (Ft.isThemeIcon(i)) {
            const r = Ft.asClassNameArray(i);
            n.classList.add(...r), this._itemClassDispose.value = rn(()=>{
                n.classList.remove(...r);
            });
        } else n.style.backgroundImage = mJ(this._themeService.getColorTheme().type) ? AE(i.dark) : AE(i.light), n.classList.add("icon"), this._itemClassDispose.value = U_(rn(()=>{
            n.style.backgroundImage = "", n.classList.remove("icon");
        }), this._themeService.onDidColorThemeChange(()=>{
            this.updateClass();
        }));
    }
    updateBadge(e) {
        if ((!this._badge || !this._badgeContent) && this.element && e) this._badge = Ye(this.element, Ve(".badge")), this._badgeContent = Ye(this._badge, Ve(".badge-content")), Ep(this._badge);
        else if (!this._badge || !this._badgeContent) return;
        const t = new He;
        if (this._badgeDisposable.value?.dispose(), this._badgeDisposable.value = t, Fd(this._badgeContent), Ep(this._badge), !e) return;
        const n = [
            "badge-content"
        ];
        if (typeof e.value == "number") {
            let s = e.value.toString();
            if (e.value > 999) {
                const o = e.value / 1e3, a = Math.floor(o);
                o > a ? s = `${a}K+` : s = `${o}K`;
            }
            this._badgeContent.textContent = s, tf(this._badge);
        } else typeof e.value == "string" && (this._badgeContent.textContent = e.value, this._badgeContent.textContent ? this._badge.classList.remove("empty") : this._badge.classList.add("empty"), tf(this._badge));
        n.length && (this._badgeContent.classList.add(...n), t.add(rn(()=>this._badgeContent?.classList.remove(...n))));
        const i = e.foregroundColor || "var(--vscode-badge-foreground)", r = e.backgroundColor || "var(--vscode-badge-background)";
        this._badgeContent && (this._badgeContent.style.color = i ? i.toString() : "", this._badgeContent.style.backgroundColor = r ? r.toString() : "");
    }
}, T3 = ie([
    C(2, qr),
    C(3, di),
    C(4, xn),
    C(5, $r),
    C(6, Yo),
    C(7, ym),
    C(8, Qge)
], T3), H7c = class jkm extends T3 {
    render(t) {
        this.options.label = !0, this.options.icon = !1, super.render(t), t.classList.add("text-only"), t.classList.toggle("use-comma", this._options?.useComma ?? !1);
    }
    updateLabel() {
        const t = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!t) return super.updateLabel();
        if (this.label) {
            const n = jkm._symbolPrintEnter(t);
            this._options?.conversational ? this.label.textContent = S(1777, null, this._action.label, n) : this.label.textContent = S(1778, null, this._action.label, n);
        }
    }
    static _symbolPrintEnter(t) {
        return t.getLabel()?.replace(/\benter\b/gi, "\u23CE").replace(/\bEscape\b/gi, "Esc");
    }
}, uRe = class extends YV {
    constructor(e, t, n, i, r){
        const s = {
            ...t,
            menuAsChild: t?.menuAsChild ?? !1,
            classNames: t?.classNames ?? (Ft.isThemeIcon(e.item.icon) ? Ft.asClassName(e.item.icon) : void 0),
            keybindingProvider: t?.keybindingProvider ?? ((o)=>n.lookupKeybinding(o.id))
        };
        super(e, {
            getActions: ()=>e.actions
        }, i, s), this._keybindingService = n, this._contextMenuService = i, this._themeService = r, this._themeListener = this._register(new cn);
    }
    render(e) {
        this._themeListener.clear(), super.render(e), Im(this.element), e.classList.add("menu-entry");
        const t = this._action, { icon: n } = t.item;
        if (n && !Ft.isThemeIcon(n)) {
            this.element.classList.add("icon");
            const i = ()=>{
                this.element && (this.element.style.backgroundImage = mJ(this._themeService.getColorTheme().type) ? AE(n.dark) : AE(n.light));
            };
            i(), this._themeListener.value = this._themeService.onDidColorThemeChange(()=>{
                i();
            });
        }
    }
}, uRe = ie([
    C(2, qr),
    C(3, Yo),
    C(4, $r)
], uRe), pyi = class extends WP {
    constructor(e, t, n, i, r, s, o, a){
        super(null, e), this._keybindingService = n, this._notificationService = i, this._contextMenuService = r, this._menuService = s, this._instaService = o, this._storageService = a, this._defaultActionDisposables = this._register(new He), this._renderListeners = this._register(new He), this._container = null, this._options = t, this._storageKey = `${e.item.submenu.id}_lastActionId`;
        let c;
        const l = t?.persistLastActionId ? a.get(this._storageKey, 1) : void 0;
        l && (c = e.actions.find((h)=>l === h.id)), c || (c = e.actions[0]), this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(T3, c, {
            keybinding: this._getDefaultActionKeybindingLabel(c)
        }));
        const u = {
            keybindingProvider: (h)=>this._keybindingService.lookupKeybinding(h.id),
            ...t,
            menuAsChild: t?.menuAsChild ?? !0,
            classNames: t?.classNames ?? [
                "codicon",
                "codicon-chevron-down"
            ],
            actionRunner: t?.actionRunner ?? this._register(new lA)
        };
        this._dropdown = this._register(new YV(e, e.actions, this._contextMenuService, u)), this._register(this._dropdown.actionRunner.onDidRun((h)=>{
            h.action instanceof rv && this.update(h.action);
        }));
    }
    get onDidChangeDropdownVisibility() {
        return this._dropdown.onDidChangeVisibility;
    }
    update(e) {
        this._options?.persistLastActionId && this._storageService.store(this._storageKey, e.id, 1, 1), this._defaultActionDisposables.clear(), this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(T3, e, {
            keybinding: this._getDefaultActionKeybindingLabel(e)
        })), this._defaultAction.actionRunner = this._defaultActionDisposables.add(new class extends lA {
            async runAction(t, n) {
                await t.run(void 0);
            }
        }), this._container && this._defaultAction.render(owe(this._container, Ve(".action-container")));
    }
    _getDefaultActionKeybindingLabel(e) {
        let t;
        if (this._options?.renderKeybindingWithDefaultActionLabel) {
            const n = this._keybindingService.lookupKeybinding(e.id);
            n && (t = `(${n.getLabel()})`);
        }
        return t;
    }
    setActionContext(e) {
        super.setActionContext(e), this._defaultAction.setActionContext(e), this._dropdown.setActionContext(e);
    }
    render(e) {
        this._renderListeners.clear(), this._container = e, super.render(this._container), this._container.classList.add("monaco-dropdown-with-default");
        const t = Ve(".action-container");
        this._defaultAction.render(Ye(this._container, t)), this._renderListeners.add(Xt(t, Fn.KEY_DOWN, (i)=>{
            const r = new gu(i);
            r.equals(fe.RightArrow) && (this._defaultAction.element.tabIndex = -1, this._dropdown.focus(), r.stopPropagation());
        }));
        const n = Ve(".dropdown-action-container");
        this._dropdown.render(Ye(this._container, n)), this._renderListeners.add(Xt(n, Fn.KEY_DOWN, (i)=>{
            const r = new gu(i);
            r.equals(fe.LeftArrow) && (this._defaultAction.element.tabIndex = 0, this._dropdown.setFocusable(!1), this._defaultAction.element?.focus(), r.stopPropagation());
        }));
    }
    focus(e) {
        e ? this._dropdown.focus() : (this._defaultAction.element.tabIndex = 0, this._defaultAction.element.focus());
    }
    blur() {
        this._defaultAction.element.tabIndex = -1, this._dropdown.blur(), this._container.blur();
    }
    setFocusable(e) {
        e ? this._defaultAction.element.tabIndex = 0 : (this._defaultAction.element.tabIndex = -1, this._dropdown.setFocusable(!1));
    }
}, pyi = ie([
    C(2, qr),
    C(3, di),
    C(4, Yo),
    C(5, Zl),
    C(6, _t),
    C(7, yn)
], pyi), myi = class extends Svn {
    constructor(e, t){
        super(null, e, e.actions.map((n)=>({
                text: n.id === Vc.ID ? "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500" : n.label,
                isDisabled: !n.enabled
            })), 0, t, Uwe, {
            ariaLabel: e.tooltip,
            optionsAsChildren: !0
        }), this.select(Math.max(0, e.actions.findIndex((n)=>n.checked)));
    }
    render(e) {
        super.render(e), e.style.borderColor = Is(pze);
    }
    runAction(e, t) {
        const n = this.action.actions[t];
        n && this.actionRunner.run(n);
    }
}, myi = ie([
    C(1, Lv)
], myi);

}
