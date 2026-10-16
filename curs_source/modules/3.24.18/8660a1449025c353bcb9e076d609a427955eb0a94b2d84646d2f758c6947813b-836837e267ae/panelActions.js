import { At, D } from "./Iwo.js";
import { ims, nms } from "./Ycg.js";
import { Gm, Vi } from "./actionCommonCategories.js";
import { Ft, es, ji, sn } from "./actions_2.js";
import { gs, yt } from "./codicons.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { mEt, oRn, pEt, rTe, tVe, vf, yR } from "./contextkeys_2.js";
import { b_ } from "./iconRegistry.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Id, Pv } from "./layoutService_2.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { GB, VO } from "./panecomposite.js";
import { gKg } from "./panelpart.css";
import { OKt, tms } from "./switchCompositeViewAction.js";
import { E } from "./tslib.es6.js";
import { ck, q1 } from "./views.js";
import { jT, wb } from "./viewsService.js";
import { $t, Bs } from "./window.js";
import { z4 } from "./yBp.js";
import { Ht, qa } from "./ze.js";
var rms, vKg, _Kg, ZRi, bKg, yKg, sms, FKt, QRi, JRi, SKg, kKg, e2i, Y1l, wKg, X1l, CKg, Z1l, TKg, Q1l, EKg;
export { CKg, EKg, FKt, JRi, Q1l, QRi, SKg, TKg, X1l, Y1l, Z1l, ZRi, _Kg, bKg, e2i, kKg, rms, sms, vKg, wKg, yKg };
var __wakaru_oms_initialized = false;
export function oms() {
if (__wakaru_oms_initialized) return;
__wakaru_oms_initialized = true;
"use strict";
E(), Bs(), gs(), Ma(), Bt(), Gm(), es(), Hi(), Ks(), b_(), vf(), ck(), Pv(), GB(), jT(), tms(), gKg(), vKg = qa("panel-maximize", yt.chevronUp, D(3879, null)), _Kg = qa("panel-restore", yt.chevronDown, D(3880, null)), ZRi = qa("panel-close", yt.xTwo, D(3881, null)), bKg = qa("panel-layout-icon", yt.panelFrame, D(3882, null)), yKg = qa("panel-layout-icon-off", yt.panelFrame, D(3883, null)), sms = class aeu extends sn {
    constructor(){
        super({
            id: aeu.ID,
            title: aeu.LABEL,
            precondition: yR.toNegated(),
            toggled: {
                condition: mEt,
                title: D(3884, null),
                icon: ZRi,
                mnemonicTitle: D(3885, null)
            },
            icon: ZRi,
            f1: !0,
            category: Vi.View,
            metadata: {
                description: D(3886, null)
            },
            keybinding: {
                primary: ut.CtrlCmd | Ze.KeyJ,
                weight: 200,
                when: yR.toNegated()
            },
            menu: [
                {
                    id: Ft.MenubarAppearanceMenu,
                    group: "2_workbench_layout",
                    order: 5
                },
                {
                    id: Ft.LayoutControlMenuSubmenu,
                    group: "0_workbench_layout",
                    order: 4
                },
                {
                    id: Ft.PanelTitle,
                    group: "navigation",
                    order: 2
                }
            ]
        });
    }
    async run(e) {
        const n = e.get(Id), i = e.get(Rr), r = n.isVisible("workbench.parts.panel"), s = i.getContextKeyValue(rTe.key) === !0, o = n.isVisible("workbench.parts.editor", $t);
        if (r && s && !o) {
            await n.setUnifiedMaximizeState(!0, {
                skipHideSidebar: !0
            });
            return;
        }
        if (!r && s) {
            await n.setUnifiedMaximizeState(!1, {
                skipHideSidebar: !0
            }), n.setPartHidden(!1, "workbench.parts.panel");
            return;
        }
        const a = r;
        a && n.isPanelMaximized() && n.toggleMaximizedPanel(), n.setPartHidden(a, "workbench.parts.panel");
    }
}, sms.ID = "workbench.action.togglePanel", sms.LABEL = At(3902, "Toggle Panel Visibility"), FKt = sms, Ht(FKt), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.closePanel",
            title: At(3903, "Hide Panel"),
            category: Vi.View,
            precondition: mt.and(mEt, yR.toNegated()),
            f1: !0
        });
    }
    run(t) {
        t.get(Id).setPartHidden(!0, "workbench.parts.panel");
    }
}), Ht((rms = class extends sn {
    constructor(){
        super({
            id: "workbench.action.focusPanel",
            title: At(3904, "Focus into Panel"),
            category: Vi.View,
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    async run(t) {
        const e = t.get(Id), n = t.get(VO);
        e.isVisible("workbench.parts.panel") || e.setPartHidden(!1, "workbench.parts.panel"), n.getActivePaneComposite(1)?.focus();
    }
}, rms.ID = "workbench.action.focusPanel", rms.LABEL = D(3887, null), rms)), QRi = {
    LEFT: "workbench.action.positionPanelLeft",
    RIGHT: "workbench.action.positionPanelRight",
    BOTTOM: "workbench.action.positionPanelBottom",
    TOP: "workbench.action.positionPanelTop"
}, JRi = {
    LEFT: "workbench.action.alignPanelLeft",
    RIGHT: "workbench.action.alignPanelRight",
    CENTER: "workbench.action.alignPanelCenter",
    JUSTIFY: "workbench.action.alignPanelJustify"
}, SKg = [
    nms(QRi.TOP, At(3905, "Move Panel To Top"), D(3888, null), 3),
    nms(QRi.LEFT, At(3906, "Move Panel Left"), D(3889, null), 0),
    nms(QRi.RIGHT, At(3907, "Move Panel Right"), D(3890, null), 1),
    nms(QRi.BOTTOM, At(3908, "Move Panel To Bottom"), D(3891, null), 2)
], kKg = [
    ims(JRi.LEFT, At(3909, "Set Panel Alignment to Left"), D(3892, null), "left"),
    ims(JRi.RIGHT, At(3910, "Set Panel Alignment to Right"), D(3893, null), "right"),
    ims(JRi.CENTER, At(3911, "Set Panel Alignment to Center"), D(3894, null), "center"),
    ims(JRi.JUSTIFY, At(3912, "Set Panel Alignment to Justify"), D(3895, null), "justify")
], ji.appendMenuItem(Ft.MenubarAppearanceMenu, {
    submenu: Ft.PanelPositionMenu,
    title: D(3896, null),
    group: "3_workbench_layout_move",
    order: 4
}), SKg.forEach((t, e)=>{
    const { id: n, title: i, shortLabel: r, value: s, when: o } = t;
    Ht(class extends sn {
        constructor(){
            super({
                id: n,
                title: i,
                category: Vi.View,
                f1: !0
            });
        }
        run(a) {
            a.get(Id).setPanelPosition(s === void 0 ? 2 : s);
        }
    }), ji.appendMenuItem(Ft.PanelPositionMenu, {
        command: {
            id: n,
            title: r,
            toggled: o.negate()
        },
        order: 5 + e
    });
}), ji.appendMenuItem(Ft.MenubarAppearanceMenu, {
    submenu: Ft.PanelAlignmentMenu,
    title: D(3897, null),
    group: "3_workbench_layout_move",
    order: 5
}), kKg.forEach((t)=>{
    const { id: e, title: n, shortLabel: i, value: r, when: s } = t;
    Ht(class extends sn {
        constructor(){
            super({
                id: e,
                title: n,
                category: Vi.View,
                toggled: s.negate(),
                f1: !0
            });
        }
        run(o) {
            o.get(Id).setPanelAlignment(r === void 0 ? "center" : r);
        }
    }), ji.appendMenuItem(Ft.PanelAlignmentMenu, {
        command: {
            id: e,
            title: i,
            toggled: s.negate()
        },
        order: 5
    });
}), Ht(class extends OKt {
    constructor(){
        super({
            id: "workbench.action.previousPanelView",
            title: At(3913, "Previous Panel View"),
            category: Vi.View,
            f1: !0
        }, 1, -1);
    }
}), Ht(class extends OKt {
    constructor(){
        super({
            id: "workbench.action.nextPanelView",
            title: At(3914, "Next Panel View"),
            category: Vi.View,
            f1: !0
        }, 1, 1);
    }
}), ji.appendMenuItems([
    {
        id: Ft.LayoutControlMenu,
        item: {
            group: "2_pane_toggles",
            command: {
                id: FKt.ID,
                title: D(3898, null),
                icon: yKg,
                toggled: {
                    condition: mEt,
                    icon: bKg
                }
            },
            when: mt.and(mt.or(mt.equals("config.workbench.layoutControl.type", "toggles"), mt.equals("config.workbench.layoutControl.type", "both"))),
            order: 1
        }
    }
]), Ht(class extends sn {
    constructor(){
        super({
            id: "workbench.action.toggleMaximizedPanel",
            title: At(3915, "Toggle Maximized Panel"),
            tooltip: D(3899, null),
            category: Vi.View,
            f1: !0,
            icon: vKg,
            precondition: mt.or(tVe.isEqualTo("center"), mt.and(pEt.notEqualsTo("bottom"), pEt.notEqualsTo("top"))),
            toggled: {
                condition: oRn,
                icon: _Kg,
                tooltip: D(3900, null)
            },
            menu: [
                {
                    id: Ft.PanelTitle,
                    group: "navigation",
                    order: 1,
                    when: mt.or(tVe.isEqualTo("center"), mt.and(pEt.notEqualsTo("bottom"), pEt.notEqualsTo("top")))
                }
            ]
        });
    }
    run(t) {
        const e = t.get(Id), n = t.get(Wr);
        if (e.getPanelAlignment() !== "center" && z4(e.getPanelPosition())) {
            n.warn(D(3901, null));
            return;
        }
        e.isVisible("workbench.parts.panel") ? e.toggleMaximizedPanel() : (e.setPartHidden(!1, "workbench.parts.panel"), e.isPanelMaximized() || e.toggleMaximizedPanel());
    }
}), e2i = class extends sn {
    constructor(t, e, n){
        super(n), this.source = t, this.destination = e;
    }
    run(t, ...e) {
        const n = t.get(q1), i = t.get(Id), r = t.get(wb), s = n.getViewContainersByLocation(this.source), o = n.getViewContainersByLocation(this.destination);
        if (s.length) {
            const a = r.getVisibleViewContainer(this.source);
            s.forEach((l)=>n.moveViewContainerToLocation(l, this.destination, void 0, this.desc.id)), i.setPartHidden(!1, this.destination === 1 ? "workbench.parts.panel" : "workbench.parts.auxiliarybar"), a && o.length === 0 && r.openViewContainer(a.id, !0);
        }
    }
}, Y1l = class MPb extends e2i {
    constructor(){
        super(1, 2, {
            id: MPb.ID,
            title: At(3916, "Move Panel Views To Secondary Side Bar"),
            category: Vi.View,
            f1: !1
        });
    }
}, Y1l.ID = "workbench.action.movePanelToSidePanel", wKg = Y1l, X1l = class DPb extends e2i {
    constructor(){
        super(1, 2, {
            id: DPb.ID,
            title: At(3917, "Move Panel Views To Secondary Side Bar"),
            category: Vi.View,
            f1: !0
        });
    }
}, X1l.ID = "workbench.action.movePanelToSecondarySideBar", CKg = X1l, Ht(wKg), Ht(CKg), Z1l = class NPb extends e2i {
    constructor(){
        super(2, 1, {
            id: NPb.ID,
            title: At(3918, "Move Secondary Side Bar Views To Panel"),
            category: Vi.View,
            f1: !1
        });
    }
}, Z1l.ID = "workbench.action.moveSidePanelToPanel", TKg = Z1l, Q1l = class LPb extends e2i {
    constructor(){
        super(2, 1, {
            id: LPb.ID,
            title: At(3919, "Move Secondary Side Bar Views To Panel"),
            category: Vi.View,
            f1: !0
        });
    }
}, Q1l.ID = "workbench.action.moveSecondarySideBarToPanel", EKg = Q1l, Ht(TKg), Ht(EKg);

}
