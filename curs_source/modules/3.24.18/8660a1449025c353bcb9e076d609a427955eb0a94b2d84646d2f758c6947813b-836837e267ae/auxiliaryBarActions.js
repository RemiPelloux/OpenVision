import { Q9e, jle } from "./IChatEditorGroupService.js";
import { At, D } from "./Iwo.js";
import { BP } from "./Ycg.js";
import { Gm, Vi } from "./actionCommonCategories.js";
import { Ft, es, ji, sn } from "./actions_2.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { nr, rs } from "./commands.js";
import { Yh, vS } from "./composer.js";
import { Hi, mt } from "./contextkey.js";
import { Gat, vf, yR } from "./contextkeys_2.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Id, Pv } from "./layoutService_2.js";
import { Bt } from "./nls.js";
import { GB, VO } from "./panecomposite.js";
import { ZRi, oms } from "./panelActions.js";
import { Zi, ki } from "./storage_2.js";
import { OKt, tms } from "./switchCompositeViewAction.js";
import { E } from "./tslib.es6.js";
import { xL } from "./unificationGate.js";
import { ck } from "./views.js";
import { NGt } from "./yBp.js";
import { Ht } from "./ze.js";
var lPn, ams, BKt;
export { BKt, ams, lPn };
var __wakaru_J1l_initialized = false;
export function J1l() {
if (__wakaru_J1l_initialized) return;
__wakaru_J1l_initialized = true;
"use strict";
E(), Ma(), Bt(), Gm(), es(), rs(), Hi(), Zi(), vf(), ck(), xL(), vS(), Q9e(), Ss(), fo(), _s(), Pv(), GB(), tms(), oms(), ams = class leu extends sn {
    constructor(){
        super({
            id: leu.ID,
            title: leu.LABEL,
            precondition: yR.toNegated(),
            toggled: {
                condition: Gat,
                title: D(3255, null),
                icon: ZRi,
                mnemonicTitle: D(3256, null)
            },
            icon: ZRi,
            category: Vi.View,
            metadata: {
                description: D(3257, null)
            },
            f1: !0,
            keybinding: [
                {
                    weight: 200,
                    primary: ut.CtrlCmd | ut.Alt | Ze.KeyB,
                    when: yR.toNegated()
                }
            ],
            menu: [
                {
                    id: Ft.LayoutControlMenuSubmenu,
                    group: "0_workbench_layout",
                    order: 1
                },
                {
                    id: Ft.MenubarAppearanceMenu,
                    group: "2_workbench_layout",
                    order: 2
                }
            ]
        });
    }
    async run(e, n) {
        const i = e.get(Id), r = e.get(VO), s = e.get(Qr), o = e.get(Yh), a = e.get(ps), l = e.get(nr);
        if (a.isGlass) {
            await l.executeCommand("glass.togglePanel");
            return;
        }
        const c = e.get(ki), u = e.get(Cr), d = e.get(jle);
        let h = "other";
        n && n.source ? h = n.source : n === void 0 && (h = "keyboard_shortcut");
        const p = i.isVisible("workbench.parts.auxiliarybar"), g = BP(c, u);
        p ? (g ? await d.hideChatEditorGroup() : i.setPartHidden(!0, "workbench.parts.auxiliarybar"), s.trackEvent("ai_pane.closed", {
            source: h
        }), s.trackEvent("ai_pane.state_changed", {
            isOpen: !1,
            source: h
        })) : (s.trackEvent("ai_pane.opened", {
            source: h
        }), s.trackEvent("ai_pane.state_changed", {
            isOpen: !0,
            source: h
        }), g ? await d.ensureChatVisibleOrCreate() : (i.setPartHidden(!1, "workbench.parts.auxiliarybar"), r.getActivePaneComposite(2) || await o.createComposer({
            view: "pane",
            unifiedMode: "agent",
            openInNewTab: !0
        })));
    }
}, ams.ID = "workbench.action.toggleAuxiliaryBar", ams.LABEL = At(3258, "Toggle Secondary Side Bar Visibility"), BKt = ams, Ht(BKt), Ht(class extends sn {
    constructor(){
        super({
            id: "aichat.close-sidebar",
            title: {
                value: "Hide Chat",
                original: "Hide Chat"
            },
            category: Vi.View,
            precondition: mt.and(Gat, yR.toNegated()),
            f1: !0
        });
    }
    async run(t) {
        const e = t.get(Id), n = t.get(Qr), i = t.get(ki), r = t.get(Cr), s = t.get(jle);
        BP(i, r) ? await s.hideChatEditorGroup() : e.setAuxiliaryBarHiddenWithoutClosingComposite(!0), n.trackEvent("ai_pane.closed", {
            source: "menu"
        }), n.trackEvent("ai_pane.state_changed", {
            isOpen: !1,
            source: "menu"
        });
    }
}), Ht((lPn = class extends sn {
    constructor(){
        super({
            id: lPn.ID,
            title: lPn.LABEL,
            category: Vi.View,
            f1: !0,
            precondition: yR.toNegated()
        });
    }
    async run(t) {
        const e = t.get(VO), n = t.get(Id);
        if (t.get(ps).isGlass) return;
        n.isVisible("workbench.parts.auxiliarybar") || n.setPartHidden(!1, "workbench.parts.auxiliarybar"), e.getActivePaneComposite(2)?.focus();
    }
}, lPn.ID = "workbench.action.focusAuxiliaryBar", lPn.LABEL = At(3259, "Focus into Secondary Side Bar"), lPn)), ji.appendMenuItems([
    {
        id: Ft.ViewContainerTitleContext,
        item: {
            group: "3_workbench_layout_move",
            command: {
                id: BKt.ID,
                title: At(3260, "Hide Secondary Side Bar")
            },
            when: mt.and(Gat, mt.equals("viewContainerLocation", NGt(2))),
            order: 2
        }
    }
]), Ht(class extends OKt {
    constructor(){
        super({
            id: "workbench.action.previousAuxiliaryBarView",
            title: At(3261, "Previous Secondary Side Bar View"),
            category: Vi.View,
            f1: !0
        }, 2, -1);
    }
}), Ht(class extends OKt {
    constructor(){
        super({
            id: "workbench.action.nextAuxiliaryBarView",
            title: At(3262, "Next Secondary Side Bar View"),
            category: Vi.View,
            f1: !0
        }, 2, 1);
    }
});

}
