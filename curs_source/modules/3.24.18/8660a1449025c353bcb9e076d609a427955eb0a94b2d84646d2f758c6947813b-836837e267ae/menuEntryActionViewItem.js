import { D, Di, Hg, Kv, N1, Nt, Pn, Qe, Vn } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { PBt } from "./action.js";
import { RBt, lvn } from "./actionBadgeService.js";
import { Bj, TGo, fz, r_e } from "./actionViewItems.js";
import { Kh, _Y, vu } from "./actions.js";
import { Db, es, n6 } from "./actions_2.js";
import { Ap } from "./colorRegistry.js";
import { GPo, Zhn, pa, xD } from "./constants_8.js";
import { Mf, aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { NQ } from "./cssValue.js";
import { CM, Sqo } from "./defaultStyles.js";
import { Gve, Hn, Pr } from "./dom_2.js";
import { goi, lnt } from "./dropdownActionViewItem.js";
import { bri } from "./inputColors.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { ABt, xBt } from "./keybindingLabels.js";
import { nT, rv } from "./keyboardEvent.js";
import { TLy } from "./menuEntryActionViewItem.css";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { Zi, ki } from "./storage_2.js";
import { Gn, ta } from "./themables.js";
import { LI } from "./theme.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { AS, Ii, Jde, R0, Xa, Y$e, _qo, fr, li, mz, uy } from "./ze.js";
var SHe, kHe, fzd, Soi, VTr, KTr;
export { KTr, SHe, Soi, VTr, fzd, kHe };
var __wakaru_MC_initialized = false;
export function MC() {
if (__wakaru_MC_initialized) return;
__wakaru_MC_initialized = true;
"use strict";
E(), NQ(), Hn(), nT(), fz(), goi(), vu(), ABt(), Ma(), Qe(), Di(), ta(), To(), Bt(), Ty(), lvn(), PBt(), Hi(), pf(), It(), ru(), Ks(), Zi(), CM(), Ap(), LI(), Dl(), es(), pa(), TLy(), SHe = "data-command-id", kHe = class extends r_e {
    constructor(t, e, n, i, r, s, o, a, l){
        super(void 0, t, {
            icon: !!(t.class || t.item.icon),
            label: !t.class && !t.item.icon,
            draggable: e?.draggable,
            keybinding: e?.keybinding,
            hoverDelegate: e?.hoverDelegate,
            keybindingNotRenderedWithLabel: e?.keybindingNotRenderedWithLabel
        }), this._options = e, this._keybindingService = n, this._notificationService = i, this._contextKeyService = r, this._themeService = s, this._contextMenuService = o, this._accessibilityService = a, this._actionBadgeService = l, this._wantsAltCommand = !1, this._itemClassDispose = this._register(new Vn), this._renderListeners = this._register(new Nt), this._solidDisposable = this._register(new Vn), this._badgeDisposable = this._register(new Vn), this._altKey = Gve.getInstance(), this._register(this._actionBadgeService.onDidChangeBadge((c)=>{
            c.actionId === this._commandAction.id && this.updateBadge(c.badge);
        }));
    }
    get _menuItemAction() {
        return this._action;
    }
    get _commandAction() {
        return this._wantsAltCommand && this._menuItemAction.alt || this._menuItemAction;
    }
    async onClick(t) {
        t.preventDefault(), t.stopPropagation();
        try {
            await this.actionRunner.run(this._commandAction, this._context);
        } catch (e) {
            this._notificationService.error(e);
        }
    }
    render(t) {
        if (this._renderListeners.clear(), this._action.id === Zhn) {
            const i = document.createElement("span");
            i.classList.add("keybinding");
            const r = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService), s = r && r.getLabel();
            i.textContent = s || "", i.style.fontSize = "10px", i.style.opacity = "0.5", i.style.display = "none", this.specialKbDiv = i;
            const o = this._contextKeyService;
            this._solidDisposable.value = o.onDidChangeContext((a)=>{
                a.affectsSome(new Set([
                    "focusedView"
                ])) && (o.getContextKeyValue("focusedView") === xD ? (this.startupTimeout && clearTimeout(this.startupTimeout), Date.now() - GPo < 3e3 ? this.startupTimeout = setTimeout(()=>{
                    i.style.display = "inline";
                }, 3e3 - (Date.now() - GPo)) : i.style.display = "inline") : i.style.display = "none");
            });
        }
        super.render(t), t.classList.add("menu-entry");
        try {
            const i = this._menuItemAction.item.id;
            i && (t.setAttribute(SHe, i), this.element?.setAttribute(SHe, i));
        } catch  {}
        this.options.icon && this._updateItemClass(this._menuItemAction.item), this._badge = fr(t, Ii(".badge")), this._badgeContent = fr(this._badge, Ii(".badge-content")), AS(this._badge);
        const e = this._commandAction.item.badge, n = this._actionBadgeService.getBadge(this._commandAction.id);
        if ((e || n) && this.updateBadge(n || e), this._menuItemAction.alt) {
            let i = !1;
            const r = ()=>{
                const s = !!this._menuItemAction.alt?.enabled && (!this._accessibilityService.isMotionReduced() || i) && (this._altKey.keyStatus.altKey || this._altKey.keyStatus.shiftKey && i);
                s !== this._wantsAltCommand && (this._wantsAltCommand = s, this.updateLabel(), this.updateTooltip(), this.updateClass());
            };
            this._renderListeners.add(this._altKey.event(r)), this._renderListeners.add(li(t, "mouseleave", (s)=>{
                i = !1, r();
            })), this._renderListeners.add(li(t, "mouseenter", (s)=>{
                i = !0, r();
            })), r();
        }
    }
    updateLabel() {
        this.options.label && this.label && (this.label.textContent = this._commandAction.label);
    }
    getTooltip() {
        const t = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService), e = t && t.getLabel(), n = this._commandAction.tooltip || this._commandAction.label;
        let i = e ? D(1774, null, n, e) : n;
        if (!this._wantsAltCommand && this._menuItemAction.alt?.enabled) {
            const r = this._menuItemAction.alt.tooltip || this._menuItemAction.alt.label, s = this._keybindingService.lookupKeybinding(this._menuItemAction.alt.id, this._contextKeyService), o = s && s.getLabel(), a = o ? D(1775, null, r, o) : r;
            i = D(1776, null, i, xBt.modifierLabels[Hg].altKey, a);
        }
        return i;
    }
    updateClass() {
        this.options.icon && (this._commandAction !== this._menuItemAction ? this._menuItemAction.alt && this._updateItemClass(this._menuItemAction.alt.item) : this._updateItemClass(this._menuItemAction.item));
    }
    _updateItemClass(t) {
        this._itemClassDispose.value = void 0;
        const { element: e, label: n } = this;
        if (!e || !n) return;
        const i = this._commandAction.checked && _qo(t.toggled) && t.toggled.icon ? t.toggled.icon : t.icon;
        if (i) if (Gn.isThemeIcon(i)) {
            const r = Gn.asClassNameArray(i);
            n.classList.add(...r), this._itemClassDispose.value = Pn(()=>{
                n.classList.remove(...r);
            });
        } else n.style.backgroundImage = Jde(this._themeService.getColorTheme().type) ? mz(i.dark) : mz(i.light), n.classList.add("icon"), this._itemClassDispose.value = N1(Pn(()=>{
            n.style.backgroundImage = "", n.classList.remove("icon");
        }), this._themeService.onDidColorThemeChange(()=>{
            this.updateClass();
        }));
    }
    updateBadge(t) {
        if ((!this._badge || !this._badgeContent) && this.element && t) this._badge = fr(this.element, Ii(".badge")), this._badgeContent = fr(this._badge, Ii(".badge-content")), AS(this._badge);
        else if (!this._badge || !this._badgeContent) return;
        const e = new Nt;
        if (this._badgeDisposable.value?.dispose(), this._badgeDisposable.value = e, uy(this._badgeContent), AS(this._badge), !t) return;
        const n = [
            "badge-content"
        ];
        if (typeof t.value == "number") {
            let s = t.value.toString();
            if (t.value > 999) {
                const o = t.value / 1e3, a = Math.floor(o);
                o > a ? s = `${a}K+` : s = `${o}K`;
            }
            this._badgeContent.textContent = s, R0(this._badge);
        } else typeof t.value == "string" && (this._badgeContent.textContent = t.value, this._badgeContent.textContent ? this._badge.classList.remove("empty") : this._badge.classList.add("empty"), R0(this._badge));
        n.length && (this._badgeContent.classList.add(...n), e.add(Pn(()=>this._badgeContent?.classList.remove(...n))));
        const i = t.foregroundColor || "var(--vscode-badge-foreground)", r = t.backgroundColor || "var(--vscode-badge-background)";
        this._badgeContent && (this._badgeContent.style.color = i ? i.toString() : "", this._badgeContent.style.backgroundColor = r ? r.toString() : "");
    }
}, kHe = Re([
    F(2, Al),
    F(3, Wr),
    F(4, Rr),
    F(5, Ml),
    F(6, Mf),
    F(7, GS),
    F(8, RBt)
], kHe), fzd = class fRb extends kHe {
    render(e) {
        this.options.label = !0, this.options.icon = !1, super.render(e), e.classList.add("text-only"), e.classList.toggle("use-comma", this._options?.useComma ?? !1);
    }
    updateLabel() {
        const e = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!e) return super.updateLabel();
        if (this.label) {
            const n = fRb._symbolPrintEnter(e);
            this._options?.conversational ? this.label.textContent = D(1777, null, this._action.label, n) : this.label.textContent = D(1778, null, this._action.label, n);
        }
    }
    static _symbolPrintEnter(e) {
        return e.getLabel()?.replace(/\benter\b/gi, "\u23CE").replace(/\bEscape\b/gi, "Esc");
    }
}, Soi = class extends lnt {
    constructor(t, e, n, i, r){
        const s = {
            ...e,
            menuAsChild: e?.menuAsChild ?? !1,
            classNames: e?.classNames ?? (Gn.isThemeIcon(t.item.icon) ? Gn.asClassName(t.item.icon) : void 0),
            keybindingProvider: e?.keybindingProvider ?? ((o)=>n.lookupKeybinding(o.id))
        };
        super(t, {
            getActions: ()=>t.actions
        }, i, s), this._keybindingService = n, this._contextMenuService = i, this._themeService = r, this._themeListener = this._register(new Vn);
    }
    render(t) {
        this._themeListener.clear(), super.render(t), Kv(this.element), t.classList.add("menu-entry");
        const e = this._action, { icon: n } = e.item;
        if (n && !Gn.isThemeIcon(n)) {
            this.element.classList.add("icon");
            const i = ()=>{
                this.element && (this.element.style.backgroundImage = Jde(this._themeService.getColorTheme().type) ? mz(n.dark) : mz(n.light));
            };
            i(), this._themeListener.value = this._themeService.onDidColorThemeChange(()=>{
                i();
            });
        }
    }
}, Soi = Re([
    F(2, Al),
    F(3, Mf),
    F(4, Ml)
], Soi), VTr = class extends Bj {
    constructor(t, e, n, i, r, s, o, a){
        super(null, t), this._keybindingService = n, this._notificationService = i, this._contextMenuService = r, this._menuService = s, this._instaService = o, this._storageService = a, this._defaultActionDisposables = this._register(new Nt), this._renderListeners = this._register(new Nt), this._container = null, this._options = e, this._storageKey = `${t.item.submenu.id}_lastActionId`;
        let l;
        const c = e?.persistLastActionId ? a.get(this._storageKey, 1) : void 0;
        c && (l = t.actions.find((d)=>c === d.id)), l || (l = t.actions[0]), this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(kHe, l, {
            keybinding: this._getDefaultActionKeybindingLabel(l)
        }));
        const u = {
            keybindingProvider: (d)=>this._keybindingService.lookupKeybinding(d.id),
            ...e,
            menuAsChild: e?.menuAsChild ?? !0,
            classNames: e?.classNames ?? [
                "codicon",
                "codicon-chevron-down"
            ],
            actionRunner: e?.actionRunner ?? this._register(new _Y)
        };
        this._dropdown = this._register(new lnt(t, t.actions, this._contextMenuService, u)), this._register(this._dropdown.actionRunner.onDidRun((d)=>{
            d.action instanceof n6 && this.update(d.action);
        }));
    }
    get onDidChangeDropdownVisibility() {
        return this._dropdown.onDidChangeVisibility;
    }
    update(t) {
        this._options?.persistLastActionId && this._storageService.store(this._storageKey, t.id, 1, 1), this._defaultActionDisposables.clear(), this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(kHe, t, {
            keybinding: this._getDefaultActionKeybindingLabel(t)
        })), this._defaultAction.actionRunner = this._defaultActionDisposables.add(new class extends _Y {
            async runAction(e, n) {
                await e.run(void 0);
            }
        }), this._container && this._defaultAction.render(Y$e(this._container, Ii(".action-container")));
    }
    _getDefaultActionKeybindingLabel(t) {
        let e;
        if (this._options?.renderKeybindingWithDefaultActionLabel) {
            const n = this._keybindingService.lookupKeybinding(t.id);
            n && (e = `(${n.getLabel()})`);
        }
        return e;
    }
    setActionContext(t) {
        super.setActionContext(t), this._defaultAction.setActionContext(t), this._dropdown.setActionContext(t);
    }
    render(t) {
        this._renderListeners.clear(), this._container = t, super.render(this._container), this._container.classList.add("monaco-dropdown-with-default");
        const e = Ii(".action-container");
        this._defaultAction.render(fr(this._container, e)), this._renderListeners.add(li(e, Pr.KEY_DOWN, (i)=>{
            const r = new rv(i);
            r.equals(Ze.RightArrow) && (this._defaultAction.element.tabIndex = -1, this._dropdown.focus(), r.stopPropagation());
        }));
        const n = Ii(".dropdown-action-container");
        this._dropdown.render(fr(this._container, n)), this._renderListeners.add(li(n, Pr.KEY_DOWN, (i)=>{
            const r = new rv(i);
            r.equals(Ze.LeftArrow) && (this._defaultAction.element.tabIndex = 0, this._dropdown.setFocusable(!1), this._defaultAction.element?.focus(), r.stopPropagation());
        }));
    }
    focus(t) {
        t ? this._dropdown.focus() : (this._defaultAction.element.tabIndex = 0, this._defaultAction.element.focus());
    }
    blur() {
        this._defaultAction.element.tabIndex = -1, this._dropdown.blur(), this._container.blur();
    }
    setFocusable(t) {
        t ? this._defaultAction.element.tabIndex = 0 : (this._defaultAction.element.tabIndex = -1, this._dropdown.setFocusable(!1));
    }
}, VTr = Re([
    F(2, Al),
    F(3, Wr),
    F(4, Mf),
    F(5, Db),
    F(6, dn),
    F(7, ki)
], VTr), KTr = class extends TGo {
    constructor(t, e){
        super(null, t, t.actions.map((n)=>({
                text: n.id === Kh.ID ? "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500" : n.label,
                isDisabled: !n.enabled
            })), 0, e, Sqo, {
            ariaLabel: t.tooltip,
            optionsAsChildren: !0
        }), this.select(Math.max(0, t.actions.findIndex((n)=>n.checked)));
    }
    render(t) {
        super.render(t), t.style.borderColor = Xa(bri);
    }
    runAction(t, e) {
        const n = this.action.actions[e];
        n && this.actionRunner.run(n);
    }
}, KTr = Re([
    F(1, aL)
], KTr);

}
