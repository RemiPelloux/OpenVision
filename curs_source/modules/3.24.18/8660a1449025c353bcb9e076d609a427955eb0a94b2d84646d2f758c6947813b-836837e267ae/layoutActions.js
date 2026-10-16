import { Q9e, jle } from "./IChatEditorGroupService.js";
import { At, D, Di, I0, Nt, Qe, _r, a_, xa } from "./Iwo.js";
import { WKg, fLk, rLk, u0 } from "./Ycg.js";
import { Gm, Vi } from "./actionCommonCategories.js";
import { Ft, es, ji, sn } from "./actions_2.js";
import { eme, y$ } from "./agentLayoutService.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Z9e, aPn } from "./appLayoutActionIds.js";
import { XRi, n1, wG } from "./appLayoutStorageKeys.js";
import { BKt, J1l } from "./auxiliaryBarActions.js";
import { gs, yt } from "./codicons.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { pa, vP } from "./constants_8.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { vQ, x_ } from "./contextkeys.js";
import { DA, Gat, Q4, Tls, axi, lMe, mEt, pEt, phl, qB, rTe, sRn, tVe, vf, xie, yR } from "./contextkeys_2.js";
import { bd, hd } from "./dialogs.js";
import { fCe, hPe } from "./diffDecorationVisibilityService.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { b_ } from "./iconRegistry.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze, bg, rf, ut } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { ja, xT } from "./keybindingsRegistry.js";
import { LVe, NVe, i2i, n2i, t2i } from "./layoutIcons.js";
import { Id, Pv } from "./layoutService_2.js";
import { XKg } from "./layoutSwitcherOverlay.js";
import { Bt } from "./nls.js";
import { GB, VO } from "./panecomposite.js";
import { FKt, oms } from "./panelActions.js";
import { My, tD } from "./preferences.js";
import { Cl, Gu } from "./quickInput.js";
import { KRi, Qps } from "./quickInput_2.js";
import { $T } from "./solid_2.js";
import { Zi, ki } from "./storage_2.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Z_, fS } from "./uiOverlayService.js";
import { OXr, f$a, pwi, q4 } from "./unifiedAppLayoutContextKeys.js";
import { ck, q1 } from "./views.js";
import { jT, wb } from "./viewsService.js";
import { at } from "./web.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { NGt, i4e } from "./yBp.js";
import { Ee, Ht, Wl, qa } from "./ze.js";
var ZKg, QKg, JKg, eYg, tYg, nYg, iYg, rYg, sYg, oYg, aYg, lYg, cYg, akl, lkl, ckl, ukl, dkl, hkl, ums, vIt, dms, l2i, pkl, uYg, mkl, gkl, c2i, fkl, _It, vkl, dYg, hms, jX, pms, _kl, UKt, bkl, ykl, Skl, kkl, wkl, Ckl, Tkl, Ekl, Ikl, xkl, Akl, Rkl, Pkl, Mkl, Dkl, Nkl, Lkl, Okl, Fkl, hYg, Bkl, Ukl, jkl, $kl, Hkl, $le, pYg, mYg, gYg, fYg, vYg, _Yg, cPn, DMe, bYg, u2i, Wkl, Gkl, qkl, zkl, Vkl;
export { $kl, $le, Akl, Bkl, Ckl, DMe, Dkl, Ekl, Fkl, Gkl, Hkl, Ikl, JKg, Lkl, Mkl, Nkl, Okl, Pkl, QKg, Rkl, Skl, Tkl, UKt, Ukl, Vkl, Wkl, ZKg, _It, _Yg, _kl, aYg, akl, bYg, bkl, c2i, cPn, cYg, ckl, dYg, dkl, dms, eYg, fYg, fkl, gYg, gkl, hYg, hkl, hms, iYg, jX, jkl, kkl, l2i, lYg, lkl, mYg, mkl, nYg, oYg, pYg, pkl, pms, qkl, rYg, sYg, tYg, u2i, uYg, ukl, ums, vIt, vYg, vkl, wkl, xkl, ykl, zkl };
var __wakaru_bIt_initialized = false;
export function bIt() {
if (__wakaru_bIt_initialized) return;
__wakaru_bIt_initialized = true;
"use strict";
if (E(), at(), Bs(), gs(), pa(), Ma(), Qe(), Di(), ta(), hPe(), Bt(), Gm(), es(), rs(), or(), Hi(), x_(), bd(), It(), ru(), xT(), KRi(), Gu(), Zi(), b_(), Sr(), vf(), ck(), eme(), aPn(), XRi(), q4(), Q9e(), $T(), Ss(), Ld(), Wo(), Pv(), GB(), tD(), fS(), jT(), J1l(), oms(), i2i(), XKg(), ZKg = qa("menuBar", yt.layoutMenubar, D(3022, null)), QKg = qa("panel-bottom", yt.layoutPanel, D(3023, null)), JKg = qa("statusBar", yt.layoutStatusbar, D(3024, null)), eYg = qa("panel-align-left", yt.layoutPanelLeft, D(3025, null)), tYg = qa("panel-align-right", yt.layoutPanelRight, D(3026, null)), nYg = qa("panel-align-center", yt.layoutPanelCenter, D(3027, null)), iYg = qa("panel-align-justify", yt.layoutPanelJustify, D(3028, null)), rYg = qa("quickInputAlignmentTop", yt.arrowUp, D(3029, null)), sYg = qa("quickInputAlignmentCenter", yt.circle, D(3030, null)), oYg = qa("fullscreen", yt.screenFull, D(3031, null)), aYg = qa("centerLayoutIcon", yt.layoutCentered, D(3032, null)), lYg = qa("zenMode", yt.target, D(3033, null)), cYg = "workbench.action.toggleActivityBarVisibility", Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.toggleCenteredLayout",
            title: {
                ...At(3108, "Toggle Centered Layout"),
                mnemonicTitle: D(3034, null)
            },
            precondition: yR.toNegated(),
            category: Vi.View,
            f1: !0,
            toggled: Tls,
            menu: [
                {
                    id: Ft.MenubarAppearanceMenu,
                    group: "1_toggle_view",
                    order: 3
                }
            ]
        });
    }
    run(t) {
        const e = t.get(Id), n = t.get(_a);
        e.centerMainEditorLayout(!e.isMainEditorLayoutCentered()), n.activeGroup.focus();
    }
}), akl = "workbench.sideBar.location", lkl = class extends sn {
    constructor(t, e, n){
        super({
            id: t,
            title: e,
            f1: !1
        }), this.position = n;
    }
    async run(t) {
        const e = t.get(Id), n = t.get(yi);
        if (e.getSideBarPosition() !== this.position) return n.updateValue(akl, i4e(this.position));
    }
}, ckl = class OPb extends lkl {
    constructor(){
        super(OPb.ID, At(3109, "Move Primary Side Bar Right"), 1);
    }
}, ckl.ID = "workbench.action.moveSideBarRight", ukl = ckl, dkl = class FPb extends lkl {
    constructor(){
        super(FPb.ID, At(3110, "Move Primary Side Bar Left"), 0);
    }
}, dkl.ID = "workbench.action.moveSideBarLeft", hkl = dkl, Ht(ukl), Ht(hkl), ums = class BPb extends sn {
    static getLabel(e) {
        return e.getSideBarPosition() === 0 ? D(3036, null) : D(3037, null);
    }
    constructor(){
        super({
            id: BPb.ID,
            title: At(3111, "Toggle Primary Side Bar Position"),
            category: Vi.View,
            f1: !0
        });
    }
    async run(e) {
        const n = e.get(Id), i = e.get(yi), r = e.get(ki), o = n.getSideBarPosition() === 0 ? "right" : "left", a = o === "left" ? "right" : "left";
        r.store(n1.SIDEBAR_LOCATION, a, 1, 1), r.store(n1.SIDEBAR_LOCATION_AGENT_OVERRIDE, a, -1, 0), await i.updateValue(akl, o, 8);
    }
}, ums.ID = "workbench.action.toggleSidebarPosition", ums.LABEL = D(3035, null), vIt = ums, Ht(vIt), dms = class ceu extends sn {
    constructor(){
        super({
            id: ceu.ID,
            title: ceu.LABEL,
            icon: yt.minimize,
            toggled: {
                condition: mt.equals(rTe.key, !0),
                title: D(3038, null),
                icon: yt.maximize
            },
            category: Vi.View,
            f1: !1,
            keybinding: {
                weight: 200,
                primary: ut.CtrlCmd | ut.Alt | Ze.KeyE
            },
            metadata: {
                description: D(3039, null)
            }
        });
    }
    async run(e, n) {
        const i = e.get(Id), r = e.get(yr), s = e.get(Rr), o = e.get(Qr);
        if (r.getWorkbenchState() === 1) return;
        const c = !(s.getContextKeyValue(rTe.key) === !0), u = n?.source ?? "keybinding";
        o.trackEvent("agent_layout.chat_size_toggle", {
            isMaximized: c,
            triggeredVia: u
        }), await i.toggleUnifiedMaximizeState();
    }
}, dms.ID = "workbench.action.maximizeChatSize", dms.LABEL = At(3112, "Maximize Chat Size"), l2i = dms, Ht(l2i), pkl = class UPb extends sn {
    constructor(){
        super({
            id: UPb.ID,
            title: At(3113, "Toggle Inline Diffs"),
            category: Vi.View,
            f1: !0,
            metadata: {
                description: D(3040, null)
            }
        });
    }
    async run(e) {
        const n = e.get(fCe), i = n.getNoInlineDiffsSetting();
        n.setNoInlineDiffsSetting(!i);
    }
}, pkl.ID = "workbench.action.toggleInlineDiffs", uYg = pkl, Ht(uYg), mkl = qa("configure-layout-icon", yt.layout, D(3041, null)), ji.appendMenuItem(Ft.LayoutControlMenu, {
    submenu: Ft.LayoutControlMenuSubmenu,
    title: D(3042, null),
    icon: mkl,
    group: "1_workbench_layout",
    when: mt.equals("config.workbench.layoutControl.type", "menu")
}), gkl = class jPb extends sn {
    constructor(){
        super({
            id: jPb.ID,
            title: At(3114, "Open Layout Settings Menu"),
            icon: yt.settings,
            f1: !1
        });
    }
    async run(e, n) {
        n && (n.preventDefault(), n.stopPropagation());
    }
}, gkl.ID = "workbench.action.openLayoutSettingsMenu", c2i = gkl, Ht(c2i), fkl = class $Pb extends sn {
    constructor(){
        super({
            id: $Pb.ID,
            title: At(3115, "Open Cursor Settings"),
            icon: yt.settingsGear,
            f1: !1
        });
    }
    async run(e) {
        await e.get(nr).executeCommand(vP);
    }
}, fkl.ID = "workbench.action.openAgentLayoutQuickMenu", _It = fkl, Ht(_It), vkl = class HPb extends sn {
    constructor(){
        super({
            id: HPb.ID,
            title: At(3116, "Switch Layout"),
            category: Vi.View,
            f1: !0,
            keybinding: {
                weight: 200,
                primary: ut.CtrlCmd | ut.Alt | Ze.Tab
            }
        });
    }
    async run(e) {
        const n = e.get(dn), i = e.get(Id), r = e.get(nr), s = e.get(ki), o = e.get(y$), a = e.get(Z_), l = e.get(gr);
        if (a.layoutSwitcherOpen.value) return;
        const c = $t.document.createElement("div");
        $t.document.body.appendChild(c);
        let u = !1;
        const d = async (p, g)=>{
            u || (u = !0, p && g && await WKg(g, i, r, s, o, l), a.setLayoutSwitcherOpen(!1), h.dispose(), c.remove());
        }, h = u0(()=>Ee(rLk, {
                onClose: d
            }), c, n);
        a.setLayoutSwitcherOpen(!0);
    }
}, vkl.ID = "workbench.action.openLayoutSwitcher", dYg = vkl, Ht(dYg), ji.appendMenuItem(Ft.MenubarAppearanceMenu, {
    group: "3_workbench_layout_move",
    command: {
        id: vIt.ID,
        title: D(3043, null)
    },
    when: mt.notEquals("config.workbench.sideBar.location", "right"),
    order: 2
}), ji.appendMenuItem(Ft.MenubarAppearanceMenu, {
    group: "3_workbench_layout_move",
    command: {
        id: vIt.ID,
        title: D(3044, null)
    },
    when: mt.equals("config.workbench.sideBar.location", "right"),
    order: 2
}), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.toggleEditorVisibility",
            title: {
                ...At(3117, "Toggle Editor Area Visibility"),
                mnemonicTitle: D(3045, null)
            },
            category: Vi.View,
            f1: !0,
            toggled: phl,
            precondition: mt.and(yR.toNegated(), mt.or(tVe.isEqualTo("center"), pEt.notEqualsTo("bottom")))
        });
    }
    async run(t) {
        const e = t.get(Id), n = t.get(jle), i = e.isVisible("workbench.parts.editor", $t), r = e.isVisible("workbench.parts.panel");
        if (i && await n.ensureChatVisibleOrCreate(), e.setPartHidden(i, "workbench.parts.editor", $t), !i) {
            const s = e.isVisible("workbench.parts.panel");
            !r && s && e.setPartHidden(!0, "workbench.parts.panel");
        }
    }
}), ji.appendMenuItem(Ft.MenubarViewMenu, {
    group: "2_appearance",
    title: D(3046, null),
    submenu: Ft.MenubarAppearanceMenu,
    when: mt.notEquals(DA.key, !0),
    order: 1
}), hms = class WPb extends sn {
    constructor(){
        super({
            id: WPb.ID,
            title: At(3118, "Toggle Primary Side Bar Visibility"),
            precondition: yR.toNegated(),
            toggled: {
                condition: lMe,
                title: D(3048, null),
                mnemonicTitle: D(3049, null)
            },
            metadata: {
                description: D(3050, null)
            },
            category: Vi.View,
            f1: !0,
            keybinding: {
                weight: 200,
                when: yR.toNegated(),
                primary: ut.CtrlCmd | Ze.KeyB
            },
            menu: [
                {
                    id: Ft.LayoutControlMenuSubmenu,
                    group: "0_workbench_layout",
                    order: 0
                },
                {
                    id: Ft.MenubarAppearanceMenu,
                    group: "2_workbench_layout",
                    order: 1
                }
            ]
        });
    }
    run(e) {
        const n = e.get(Id);
        n.setPartHidden(n.isVisible("workbench.parts.sidebar"), "workbench.parts.sidebar");
    }
}, hms.ID = "workbench.action.toggleSidebarVisibility", hms.LABEL = D(3047, null), jX = hms, Ht(jX), ji.appendMenuItems([
    {
        id: Ft.ViewContainerTitleContext,
        item: {
            group: "3_workbench_layout_move",
            command: {
                id: jX.ID,
                title: D(3051, null)
            },
            when: mt.and(lMe, mt.equals("viewContainerLocation", NGt(0))),
            order: 2
        }
    },
    {
        id: Ft.LayoutControlMenu,
        item: {
            group: "2_pane_toggles",
            command: {
                id: jX.ID,
                title: D(3052, null),
                icon: t2i,
                toggled: {
                    condition: lMe,
                    icon: NVe
                }
            },
            when: mt.and(mt.or(mt.equals("config.workbench.layoutControl.type", "toggles"), mt.equals("config.workbench.layoutControl.type", "both")), f$a),
            order: 0
        }
    },
    {
        id: Ft.LayoutControlMenu,
        item: {
            group: "2_pane_toggles",
            command: {
                id: jX.ID,
                title: D(3053, null),
                icon: n2i,
                toggled: {
                    condition: lMe,
                    icon: LVe
                }
            },
            when: mt.and(mt.or(mt.equals("config.workbench.layoutControl.type", "toggles"), mt.equals("config.workbench.layoutControl.type", "both")), OXr),
            order: 2
        }
    },
    {
        id: Ft.LayoutControlMenu,
        item: {
            group: "2_pane_toggles",
            command: {
                id: Z9e,
                title: D(3054, null),
                icon: t2i,
                toggled: {
                    condition: pwi,
                    icon: NVe
                }
            },
            when: mt.and(mt.or(mt.equals("config.workbench.layoutControl.type", "toggles"), mt.equals("config.workbench.layoutControl.type", "both")), OXr),
            order: 0
        }
    },
    {
        id: Ft.LayoutControlMenu,
        item: {
            group: "2_pane_toggles",
            command: {
                id: Z9e,
                title: D(3055, null),
                icon: n2i,
                toggled: {
                    condition: pwi,
                    icon: LVe
                }
            },
            when: mt.and(mt.or(mt.equals("config.workbench.layoutControl.type", "toggles"), mt.equals("config.workbench.layoutControl.type", "both")), f$a),
            order: 2
        }
    },
    {
        id: Ft.LayoutControlMenu,
        item: {
            group: "2_pane_toggles",
            command: {
                id: l2i.ID,
                title: D(3056, null),
                icon: yt.maximize,
                toggled: {
                    condition: mt.equals(rTe.key, !0),
                    icon: yt.minimize,
                    title: D(3057, null)
                }
            },
            when: mt.and(mt.or(mt.equals("config.workbench.layoutControl.type", "toggles"), mt.equals("config.workbench.layoutControl.type", "both")), OXr, Q4.notEqualsTo("empty")),
            order: 0
        }
    },
    {
        id: Ft.LayoutControlMenu,
        item: {
            group: "6_workbench_toggles",
            command: {
                id: c2i.ID,
                title: D(3058, null),
                icon: yt.settings
            },
            when: mt.and(mt.or(mt.equals("config.workbench.layoutControl.type", "toggles"), mt.equals("config.workbench.layoutControl.type", "both"))),
            order: 7
        }
    }
]), pms = class OXs extends sn {
    constructor(){
        super({
            id: OXs.ID,
            title: {
                ...At(3119, "Toggle Status Bar Visibility"),
                mnemonicTitle: D(3059, null)
            },
            category: Vi.View,
            f1: !0,
            toggled: mt.equals("config.workbench.statusBar.visible", !0),
            menu: [
                {
                    id: Ft.MenubarAppearanceMenu,
                    group: "2_workbench_layout",
                    order: 3
                }
            ]
        });
    }
    async run(e) {
        const n = e.get(Id), i = e.get(yi), r = e.get(ki), o = !n.isVisible("workbench.parts.statusbar", $t);
        return r.store(wG.STATUS_BAR_VISIBLE, o, 1, 0), await i.updateValue(OXs.statusbarVisibleKey, o, 8), i.updateValue(OXs.statusbarVisibleKey, o);
    }
}, pms.ID = "workbench.action.toggleStatusbarVisibility", pms.statusbarVisibleKey = "workbench.statusBar.visible", _kl = pms, Ht(_kl), UKt = class extends sn {
    constructor(t, e, n, i, r, s){
        super({
            id: i,
            title: n,
            category: Vi.View,
            precondition: r,
            metadata: s ? {
                description: s
            } : void 0,
            f1: !0
        }), this.settingName = t, this.value = e;
    }
    run(t) {
        return t.get(yi).updateValue(this.settingName, this.value);
    }
}, bkl = class GPb extends UKt {
    constructor(){
        const e = mt.and(mt.equals("config.workbench.editor.showTabs", "none").negate(), xie.negate()), n = At(3120, "Hide Editor Tabs");
        super("workbench.editor.showTabs", "none", n, GPb.ID, e, At(3121, "Hide Tab Bar"));
    }
}, bkl.ID = "workbench.action.hideEditorTabs", ykl = bkl, Skl = class qPb extends UKt {
    constructor(){
        const e = mt.and(mt.equals("config.zenMode.showTabs", "none").negate(), xie), n = At(3122, "Hide Editor Tabs in Zen Mode");
        super("zenMode.showTabs", "none", n, qPb.ID, e, At(3123, "Hide Tab Bar in Zen Mode"));
    }
}, Skl.ID = "workbench.action.zenHideEditorTabs", kkl = Skl, wkl = class zPb extends UKt {
    constructor(){
        const e = mt.and(mt.equals("config.workbench.editor.showTabs", "multiple").negate(), xie.negate()), n = At(3124, "Show Multiple Editor Tabs");
        super("workbench.editor.showTabs", "multiple", n, zPb.ID, e, At(3125, "Show Tab Bar with multiple tabs"));
    }
}, wkl.ID = "workbench.action.showMultipleEditorTabs", Ckl = wkl, Tkl = class VPb extends UKt {
    constructor(){
        const e = mt.and(mt.equals("config.zenMode.showTabs", "multiple").negate(), xie), n = At(3126, "Show Multiple Editor Tabs in Zen Mode");
        super("zenMode.showTabs", "multiple", n, VPb.ID, e, At(3127, "Show Tab Bar in Zen Mode"));
    }
}, Tkl.ID = "workbench.action.zenShowMultipleEditorTabs", Ekl = Tkl, Ikl = class KPb extends UKt {
    constructor(){
        const e = mt.and(mt.equals("config.workbench.editor.showTabs", "single").negate(), xie.negate()), n = At(3128, "Show Single Editor Tab");
        super("workbench.editor.showTabs", "single", n, KPb.ID, e, At(3129, "Show Tab Bar with one Tab"));
    }
}, Ikl.ID = "workbench.action.showEditorTab", xkl = Ikl, Akl = class YPb extends UKt {
    constructor(){
        const e = mt.and(mt.equals("config.zenMode.showTabs", "single").negate(), xie), n = At(3130, "Show Single Editor Tab in Zen Mode");
        super("zenMode.showTabs", "single", n, YPb.ID, e, At(3131, "Show Tab Bar in Zen Mode with one Tab"));
    }
}, Akl.ID = "workbench.action.zenShowEditorTab", Rkl = Akl, Ht(ykl), Ht(kkl), Ht(Ckl), Ht(Ekl), Ht(xkl), Ht(Rkl), ji.appendMenuItem(Ft.MenubarAppearanceMenu, {
    submenu: Ft.EditorTabsBarShowTabsSubmenu,
    title: D(3060, null),
    group: "3_workbench_layout_move",
    order: 10,
    when: xie.negate()
}), ji.appendMenuItem(Ft.MenubarAppearanceMenu, {
    submenu: Ft.EditorTabsBarShowTabsZenModeSubmenu,
    title: D(3061, null),
    group: "3_workbench_layout_move",
    order: 10,
    when: xie
}), Pkl = class XPb extends sn {
    constructor(){
        super({
            id: XPb.ID,
            title: At(3132, "Move Editor Actions to Title Bar"),
            category: Vi.View,
            precondition: mt.equals("config.workbench.editor.editorActionsLocation", "titleBar").negate(),
            metadata: {
                description: At(3133, "Move Editor Actions from the tab bar to the title bar")
            },
            f1: !0
        });
    }
    run(e) {
        return e.get(yi).updateValue("workbench.editor.editorActionsLocation", "titleBar");
    }
}, Pkl.ID = "workbench.action.editorActionsTitleBar", Mkl = Pkl, Ht(Mkl), Dkl = class ZPb extends sn {
    constructor(){
        super({
            id: ZPb.ID,
            title: At(3134, "Move Editor Actions to Tab Bar"),
            category: Vi.View,
            precondition: mt.and(mt.equals("config.workbench.editor.editorActionsLocation", "default").negate(), mt.equals("config.workbench.editor.showTabs", "none").negate()),
            metadata: {
                description: At(3135, "Move Editor Actions from the title bar to the tab bar")
            },
            f1: !0
        });
    }
    run(e) {
        return e.get(yi).updateValue("workbench.editor.editorActionsLocation", "default");
    }
}, Dkl.ID = "workbench.action.editorActionsDefault", Nkl = Dkl, Ht(Nkl), Lkl = class QPb extends sn {
    constructor(){
        super({
            id: QPb.ID,
            title: At(3136, "Hide Editor Actions"),
            category: Vi.View,
            precondition: mt.equals("config.workbench.editor.editorActionsLocation", "hidden").negate(),
            metadata: {
                description: At(3137, "Hide Editor Actions in the tab and title bar")
            },
            f1: !0
        });
    }
    run(e) {
        return e.get(yi).updateValue("workbench.editor.editorActionsLocation", "hidden");
    }
}, Lkl.ID = "workbench.action.hideEditorActions", Okl = Lkl, Ht(Okl), Fkl = class JPb extends sn {
    constructor(){
        super({
            id: JPb.ID,
            title: At(3138, "Show Editor Actions"),
            category: Vi.View,
            precondition: mt.equals("config.workbench.editor.editorActionsLocation", "hidden"),
            metadata: {
                description: At(3139, "Make Editor Actions visible.")
            },
            f1: !0
        });
    }
    run(e) {
        return e.get(yi).updateValue("workbench.editor.editorActionsLocation", "default");
    }
}, Fkl.ID = "workbench.action.showEditorActions", hYg = Fkl, Ht(hYg), ji.appendMenuItem(Ft.MenubarAppearanceMenu, {
    submenu: Ft.EditorActionsPositionSubmenu,
    title: D(3062, null),
    group: "3_workbench_layout_move",
    order: 11
}), Bkl = class eMb extends sn {
    constructor(){
        super({
            id: eMb.ID,
            title: At(3140, "Configure Tabs"),
            category: Vi.View
        });
    }
    run(e) {
        e.get(My).openSettings({
            jsonEditor: !1,
            query: "workbench.editor tab"
        });
    }
}, Bkl.ID = "workbench.action.configureEditorTabs", Ukl = Bkl, Ht(Ukl), jkl = class tMb extends sn {
    constructor(){
        super({
            id: tMb.ID,
            title: At(3141, "Configure Editors"),
            category: Vi.View
        });
    }
    run(e) {
        e.get(My).openSettings({
            jsonEditor: !1,
            query: "workbench.editor"
        });
    }
}, jkl.ID = "workbench.action.configureEditor", $kl = jkl, Ht($kl), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.toggleSeparatePinnedEditorTabs",
            title: At(3142, "Separate Pinned Editor Tabs"),
            category: Vi.View,
            precondition: mt.equals("config.workbench.editor.showTabs", "multiple"),
            metadata: {
                description: At(3143, "Toggle whether pinned editor tabs are shown on a separate row above unpinned tabs.")
            },
            f1: !0
        });
    }
    run(t) {
        const e = t.get(yi), i = !e.getValue("workbench.editor.pinnedTabsOnSeparateRow");
        return e.updateValue("workbench.editor.pinnedTabsOnSeparateRow", i);
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.toggleZenMode",
            title: {
                ...At(3144, "Toggle Zen Mode"),
                mnemonicTitle: D(3063, null)
            },
            precondition: yR.toNegated(),
            category: Vi.View,
            f1: !0,
            keybinding: {
                weight: 200,
                primary: Wl(bg, Ze.KeyZ),
                mac: {
                    primary: Wl(rf, Ze.KeyZ)
                }
            },
            toggled: xie,
            menu: [
                {
                    id: Ft.MenubarAppearanceMenu,
                    group: "1_toggle_view",
                    order: 2
                }
            ]
        });
    }
    run(t) {
        return t.get(Id).toggleZenMode();
    }
}), ja.registerCommandAndKeybindingRule({
    id: "workbench.action.exitZenMode",
    weight: -900,
    handler (t) {
        const e = t.get(Id), n = t.get(Rr);
        xie.getValue(n) && e.toggleZenMode();
    },
    when: xie,
    primary: Wl(Ze.Escape, Ze.Escape)
}), xa || a_) {
    Ht(class extends sn {
        constructor(){
            super({
                id: "workbench.action.toggleMenuBar",
                title: {
                    ...At(3145, "Toggle Menu Bar"),
                    mnemonicTitle: D(3064, null)
                },
                category: Vi.View,
                f1: !0,
                toggled: mt.and(vQ.toNegated(), mt.notEquals("config.window.menuBarVisibility", "hidden"), mt.notEquals("config.window.menuBarVisibility", "toggle"), mt.notEquals("config.window.menuBarVisibility", "compact")),
                menu: [
                    {
                        id: Ft.MenubarAppearanceMenu,
                        group: "2_workbench_layout",
                        order: 0
                    }
                ]
            });
        }
        run(e) {
            return e.get(Id).toggleMenuBar();
        }
    });
    for (const t of [
        Ft.TitleBarContext,
        Ft.TitleBarTitleContext
    ])ji.appendMenuItem(t, {
        command: {
            id: "workbench.action.toggleMenuBar",
            title: D(3065, null),
            toggled: mt.and(vQ.toNegated(), mt.notEquals("config.window.menuBarVisibility", "hidden"), mt.notEquals("config.window.menuBarVisibility", "toggle"), mt.notEquals("config.window.menuBarVisibility", "compact"))
        },
        when: mt.and(yR.toNegated(), mt.notEquals(sRn.key, "native"), axi.negate()),
        group: "2_config",
        order: 0
    });
}
Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.resetViewLocations",
            title: At(3146, "Reset View Locations"),
            category: Vi.View,
            f1: !0
        });
    }
    run(t) {
        return t.get(q1).reset();
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.moveView",
            title: At(3147, "Move View"),
            category: Vi.View,
            f1: !0
        });
    }
    async run(t) {
        const e = t.get(q1), n = t.get(dn), i = t.get(Cl), r = t.get(Rr), s = t.get(VO), o = qB.getValue(r);
        let a;
        if (o && e.getViewDescriptorById(o)?.canMoveView && (a = o), a = await this.getView(i, e, s, a), !a) return;
        const l = new Hkl;
        n.invokeFunction((c)=>l.run(c, a));
    }
    getViewItems(t, e) {
        const n = [];
        return e.getVisiblePaneCompositeIds(0).forEach((o)=>{
            const a = t.getViewContainerById(o), l = t.getViewContainerModel(a);
            let c = !1;
            l.visibleViewDescriptors.forEach((u)=>{
                u.canMoveView && (c || (n.push({
                    type: "separator",
                    label: D(3066, null, l.title)
                }), c = !0), n.push({
                    id: u.id,
                    label: u.name.value
                }));
            });
        }), e.getPinnedPaneCompositeIds(1).forEach((o)=>{
            const a = t.getViewContainerById(o), l = t.getViewContainerModel(a);
            let c = !1;
            l.visibleViewDescriptors.forEach((u)=>{
                u.canMoveView && (c || (n.push({
                    type: "separator",
                    label: D(3067, null, l.title)
                }), c = !0), n.push({
                    id: u.id,
                    label: u.name.value
                }));
            });
        }), e.getPinnedPaneCompositeIds(2).forEach((o)=>{
            const a = t.getViewContainerById(o), l = t.getViewContainerModel(a);
            let c = !1;
            l.visibleViewDescriptors.forEach((u)=>{
                u.canMoveView && (c || (n.push({
                    type: "separator",
                    label: D(3068, null, l.title)
                }), c = !0), n.push({
                    id: u.id,
                    label: u.name.value
                }));
            });
        }), n;
    }
    async getView(t, e, n, i) {
        const r = new Nt, s = r.add(t.createQuickPick({
            useSeparators: !0
        }));
        return s.placeholder = D(3069, null), s.items = this.getViewItems(e, n), s.selectedItems = s.items.filter((o)=>o.id === i), new Promise((o, a)=>{
            r.add(s.onDidAccept(()=>{
                const l = s.selectedItems[0];
                l.id ? o(l.id) : a(), s.hide();
            })), r.add(s.onDidHide(()=>{
                r.dispose(), a();
            })), s.show();
        });
    }
}), Hkl = class extends sn {
    constructor(){
        super({
            id: "workbench.action.moveFocusedView",
            title: At(3148, "Move Focused View"),
            category: Vi.View,
            precondition: qB.notEqualsTo(""),
            f1: !0
        });
    }
    run(t, e) {
        const n = t.get(q1), i = t.get(wb), r = t.get(Cl), s = t.get(Rr), o = t.get(hd), a = t.get(VO), l = e || qB.getValue(s);
        if (l === void 0 || l.trim() === "") {
            o.error(D(3070, null));
            return;
        }
        const c = n.getViewDescriptorById(l);
        if (!c || !c.canMoveView) {
            o.error(D(3071, null));
            return;
        }
        const u = new Nt, d = u.add(r.createQuickPick({
            useSeparators: !0
        }));
        d.placeholder = D(3072, null), d.title = D(3073, null, c.name.value);
        const h = [], p = n.getViewContainerByViewId(l), g = n.getViewLocationById(l), f = n.getViewContainerModel(p).allViewDescriptors.length === 1;
        f && g === 1 || h.push({
            id: "_.panel.newcontainer",
            label: D(3074, null)
        }), f && g === 0 || h.push({
            id: "_.sidebar.newcontainer",
            label: D(3075, null)
        }), f && g === 2 || h.push({
            id: "_.auxiliarybar.newcontainer",
            label: D(3076, null)
        }), h.push({
            type: "separator",
            label: D(3077, null)
        });
        const _ = a.getVisiblePaneCompositeIds(0);
        h.push(..._.filter((S)=>S === n.getViewContainerByViewId(l).id ? !1 : !n.getViewContainerById(S).rejectAddedViews).map((S)=>({
                id: S,
                label: n.getViewContainerModel(n.getViewContainerById(S)).title
            }))), h.push({
            type: "separator",
            label: D(3078, null)
        });
        const b = a.getPinnedPaneCompositeIds(1);
        h.push(...b.filter((S)=>S === n.getViewContainerByViewId(l).id ? !1 : !n.getViewContainerById(S).rejectAddedViews).map((S)=>({
                id: S,
                label: n.getViewContainerModel(n.getViewContainerById(S)).title
            }))), h.push({
            type: "separator",
            label: D(3079, null)
        });
        const y = a.getPinnedPaneCompositeIds(2);
        h.push(...y.filter((S)=>S === n.getViewContainerByViewId(l).id ? !1 : !n.getViewContainerById(S).rejectAddedViews).map((S)=>({
                id: S,
                label: n.getViewContainerModel(n.getViewContainerById(S)).title
            }))), d.items = h, u.add(d.onDidAccept(()=>{
            const S = d.selectedItems[0];
            S.id === "_.panel.newcontainer" ? (n.moveViewToLocation(c, 1, this.desc.id), i.openView(l, !0)) : S.id === "_.sidebar.newcontainer" ? (n.moveViewToLocation(c, 0, this.desc.id), i.openView(l, !0)) : S.id === "_.auxiliarybar.newcontainer" ? (n.moveViewToLocation(c, 2, this.desc.id), i.openView(l, !0)) : S.id && (n.moveViewsToContainer([
                c
            ], n.getViewContainerById(S.id), void 0, this.desc.id), i.openView(l, !0)), d.hide();
        })), u.add(d.onDidHide(()=>u.dispose())), d.show();
    }
}, Ht(Hkl), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.resetFocusedViewLocation",
            title: At(3149, "Reset Focused View Location"),
            category: Vi.View,
            f1: !0,
            precondition: qB.notEqualsTo("")
        });
    }
    run(t) {
        const e = t.get(q1), n = t.get(Rr), i = t.get(hd), r = t.get(wb), s = qB.getValue(n);
        let o = null;
        if (s !== void 0 && s.trim() !== "" && (o = e.getViewDescriptorById(s)), !o) {
            i.error(D(3080, null));
            return;
        }
        const a = e.getDefaultContainerById(o.id);
        !a || a === e.getViewContainerByViewId(o.id) || (e.moveViewsToContainer([
            o
        ], a, void 0, this.desc.id), r.openView(o.id, !0));
    }
}), $le = class extends sn {
    resizePart(t, e, n, i) {
        let r;
        if (i === void 0) {
            const s = n.hasFocus("workbench.parts.editor"), o = n.hasFocus("workbench.parts.sidebar"), a = n.hasFocus("workbench.parts.panel"), l = n.hasFocus("workbench.parts.auxiliarybar");
            o ? r = "workbench.parts.sidebar" : a ? r = "workbench.parts.panel" : s ? r = "workbench.parts.editor" : l && (r = "workbench.parts.auxiliarybar");
        } else r = i;
        r && n.resizePart(r, t, e);
    }
}, $le.RESIZE_INCREMENT = 60, pYg = class extends $le {
    constructor(){
        super({
            id: "workbench.action.increaseViewSize",
            title: At(3150, "Increase Current View Size"),
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    run(t) {
        this.resizePart($le.RESIZE_INCREMENT, $le.RESIZE_INCREMENT, t.get(Id));
    }
}, mYg = class extends $le {
    constructor(){
        super({
            id: "workbench.action.increaseViewWidth",
            title: At(3151, "Increase Editor Width"),
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    run(t) {
        this.resizePart($le.RESIZE_INCREMENT, 0, t.get(Id), "workbench.parts.editor");
    }
}, gYg = class extends $le {
    constructor(){
        super({
            id: "workbench.action.increaseViewHeight",
            title: At(3152, "Increase Editor Height"),
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    run(t) {
        this.resizePart(0, $le.RESIZE_INCREMENT, t.get(Id), "workbench.parts.editor");
    }
}, fYg = class extends $le {
    constructor(){
        super({
            id: "workbench.action.decreaseViewSize",
            title: At(3153, "Decrease Current View Size"),
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    run(t) {
        this.resizePart(-$le.RESIZE_INCREMENT, -$le.RESIZE_INCREMENT, t.get(Id));
    }
}, vYg = class extends $le {
    constructor(){
        super({
            id: "workbench.action.decreaseViewWidth",
            title: At(3154, "Decrease Editor Width"),
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    run(t) {
        this.resizePart(-$le.RESIZE_INCREMENT, 0, t.get(Id), "workbench.parts.editor");
    }
}, _Yg = class extends $le {
    constructor(){
        super({
            id: "workbench.action.decreaseViewHeight",
            title: At(3155, "Decrease Editor Height"),
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    run(t) {
        this.resizePart(0, -$le.RESIZE_INCREMENT, t.get(Id), "workbench.parts.editor");
    }
}, Ht(pYg), Ht(mYg), Ht(gYg), Ht(fYg), Ht(vYg), Ht(_Yg), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.alignQuickInputTop",
            title: At(3156, "Align Quick Input Top"),
            f1: !1
        });
    }
    run(e) {
        e.get(Cl).setAlignment("top");
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.alignQuickInputCenter",
            title: At(3157, "Align Quick Input Center"),
            f1: !1
        });
    }
    run(e) {
        e.get(Cl).setAlignment("center");
    }
}), cPn = (t, e, n, i)=>({
        id: t,
        active: e,
        label: n,
        visualIcon: i,
        activeIcon: yt.eye,
        inactiveIcon: yt.eyeClosed,
        activeAriaLabel: D(3081, null),
        inactiveAriaLabel: D(3082, null),
        useButtons: !0
    }), DMe = (t, e, n, i)=>({
        id: t,
        active: e,
        label: n,
        visualIcon: i,
        activeIcon: yt.check,
        activeAriaLabel: D(3083, null),
        useButtons: !1
    }), bYg = mt.and(vQ.toNegated(), mt.notEquals("config.window.menuBarVisibility", "hidden"), mt.notEquals("config.window.menuBarVisibility", "toggle"), mt.notEquals("config.window.menuBarVisibility", "compact")), u2i = [], (!_r || !I0) && u2i.push(cPn("workbench.action.toggleMenuBar", bYg, D(3084, null), ZKg)), u2i.push(cPn(jX.ID, lMe, D(3085, null), {
    whenA: mt.equals("config.workbench.sideBar.location", "left"),
    iconA: NVe,
    iconB: LVe
}), cPn(BKt.ID, Gat, D(3086, null), {
    whenA: mt.equals("config.workbench.sideBar.location", "left"),
    iconA: LVe,
    iconB: NVe
}), cPn(FKt.ID, mEt, D(3087, null), QKg), cPn(_kl.ID, mt.equals("config.workbench.statusBar.visible", !0), D(3088, null), JKg)), Wkl = [
    DMe(hkl.ID, mt.equals("config.workbench.sideBar.location", "left"), D(3089, null), NVe),
    DMe(ukl.ID, mt.equals("config.workbench.sideBar.location", "right"), D(3090, null), LVe)
], Gkl = [
    DMe("workbench.action.alignPanelLeft", tVe.isEqualTo("left"), D(3091, null), eYg),
    DMe("workbench.action.alignPanelRight", tVe.isEqualTo("right"), D(3092, null), tYg),
    DMe("workbench.action.alignPanelCenter", tVe.isEqualTo("center"), D(3093, null), nYg),
    DMe("workbench.action.alignPanelJustify", tVe.isEqualTo("justify"), D(3094, null), iYg)
], qkl = [
    DMe("workbench.action.alignQuickInputTop", Qps.isEqualTo("top"), D(3095, null), rYg),
    DMe("workbench.action.alignQuickInputCenter", Qps.isEqualTo("center"), D(3096, null), sYg)
], zkl = [
    DMe("workbench.action.toggleFullScreen", axi, D(3097, null), oYg),
    DMe("workbench.action.toggleZenMode", xie, D(3098, null), lYg),
    DMe("workbench.action.toggleCenteredLayout", Tls, D(3099, null), aYg)
], Vkl = new Set;
for (const { active: t } of [
    ...u2i,
    ...Wkl,
    ...Gkl,
    ...qkl,
    ...zkl
])for (const e of t.keys())Vkl.add(e);
Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.customizeLayout",
            title: At(3158, "Customize Layout..."),
            f1: !0,
            icon: mkl,
            menu: [
                {
                    id: Ft.LayoutControlMenuSubmenu,
                    group: "z_end"
                }
            ]
        });
    }
    getItems(e, n) {
        const i = (r)=>{
            const s = r.active.evaluate(e.getContext(null));
            let o = r.useButtons ? r.label : r.label + (s && r.activeIcon ? ` $(${r.activeIcon.id})` : !s && r.inactiveIcon ? ` $(${r.inactiveIcon.id})` : "");
            const a = r.label + (s && r.activeAriaLabel ? ` (${r.activeAriaLabel})` : !s && r.inactiveAriaLabel ? ` (${r.inactiveAriaLabel})` : "");
            if (r.visualIcon) {
                let c = r.visualIcon;
                fLk(c) && (c = c.whenA.evaluate(e.getContext(null)) ? c.iconA : c.iconB), o = `$(${c.id}) ${o}`;
            }
            const l = s ? r.activeIcon : r.inactiveIcon;
            return {
                type: "item",
                id: r.id,
                label: o,
                ariaLabel: a,
                keybinding: n.lookupKeybinding(r.id, e),
                buttons: r.useButtons ? [
                    {
                        alwaysVisible: !1,
                        tooltip: a,
                        iconClass: l ? Gn.asClassName(l) : void 0
                    }
                ] : void 0
            };
        };
        return [
            {
                type: "separator",
                label: D(3100, null)
            },
            ...u2i.map(i),
            {
                type: "separator",
                label: D(3101, null)
            },
            ...Wkl.map(i),
            {
                type: "separator",
                label: D(3102, null)
            },
            ...Gkl.map(i),
            {
                type: "separator",
                label: D(3103, null)
            },
            ...qkl.map(i),
            {
                type: "separator",
                label: D(3104, null)
            },
            ...zkl.map(i)
        ];
    }
    run(e) {
        if (this._currentQuickPick) {
            this._currentQuickPick.hide();
            return;
        }
        const n = e.get(yi), i = e.get(Rr), r = e.get(nr), s = e.get(Cl), o = e.get(Al), a = new Nt, l = a.add(s.createQuickPick({
            useSeparators: !0
        }));
        this._currentQuickPick = l, l.items = this.getItems(i, o), l.ignoreFocusOut = !0, l.hideInput = !0, l.title = D(3105, null);
        const c = {
            alwaysVisible: !0,
            iconClass: Gn.asClassName(yt.close),
            tooltip: D(3106, null)
        }, u = {
            alwaysVisible: !0,
            iconClass: Gn.asClassName(yt.discard),
            tooltip: D(3107, null)
        };
        l.buttons = [
            u,
            c
        ];
        let d;
        a.add(i.onDidChangeContext((h)=>{
            h.affectsSome(Vkl) && (l.items = this.getItems(i, o), d && (l.activeItems = l.items.filter((p)=>p.id === d?.id)), setTimeout(()=>s.focus(), 0));
        })), a.add(l.onDidAccept(()=>{
            l.selectedItems.length && (d = l.selectedItems[0], r.executeCommand(d.id));
        })), a.add(l.onDidTriggerItemButton((h)=>{
            h.item && (d = h.item, r.executeCommand(d.id));
        })), a.add(l.onDidTriggerButton((h)=>{
            if (h === c) l.hide();
            else if (h === u) {
                const p = (g)=>{
                    const f = n.inspect(g);
                    n.updateValue(g, f.defaultValue);
                };
                p("workbench.activityBar.location"), p("workbench.sideBar.location"), p("workbench.statusBar.visible"), p("workbench.panel.defaultLocation"), (!_r || !I0) && p("window.menuBarVisibility"), r.executeCommand("workbench.action.alignPanelCenter"), r.executeCommand("workbench.action.alignQuickInputTop");
            }
        })), a.add(l.onDidHide(()=>{
            l.dispose();
        })), a.add(l.onDispose(()=>{
            this._currentQuickPick = void 0, a.dispose();
        })), l.show();
    }
});

}
