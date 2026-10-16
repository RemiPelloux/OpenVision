import { Bcp } from "./ComboboxBackdrop.js";
import { iTa } from "./ComboboxCollection.js";
import { Jcp } from "./ComboboxEmpty.js";
import { aTa } from "./ComboboxGroup.js";
import { lTa } from "./ComboboxGroupLabel.js";
import { kcp } from "./ComboboxInput.js";
import { Icp } from "./ComboboxList.js";
import { sTa } from "./ComboboxPopup.js";
import { Ocp } from "./ComboboxPortal.js";
import { Ucp } from "./ComboboxPositioner.js";
import { IZS } from "./ComboboxStatus.js";
import { wcp } from "./ComboboxTrigger.js";
import { Wj } from "./DirectionContext.js";
import { Nhe } from "./InputGroup.js";
import { Ooe, U5 } from "./LYd.js";
import { pB } from "./PortalContext.js";
import { Qfi } from "./combobox-virtualization.js";
import { oWe } from "./floating-anchor-transition.stylex.js";
import { She } from "./floating-anchor.js";
import { E_e } from "./floating-surface.stylex.js";
import { fd } from "./icon.js";
import { DQS, KQS, Kup, Nup, SQS, VQS, _JS, aJS, bJS, fJS, gJS, hJS, jQS, mJS, nJS, oJS, qQS, tJS, vJS, xQS, yQS } from "./ipa.js";
import { kci } from "./list-popup-scroll-area.js";
import { bup } from "./menu-hover-block-scope.js";
import { O4h } from "./menu-input-header.js";
import { Y1t } from "./menu-row.js";
import { n4h } from "./popup-list-section.js";
import { eFe } from "./popup-list.stylex.js";
import { F$t } from "./search-menu-context.js";
import { p7r } from "./search-menu-editable-field.js";
import { CTa } from "./search-menu-item-tooltip.js";
import { Fup } from "./search-menu-items.js";
import { OQS } from "./search-menu-menu-submenu.js";
import { $QS } from "./search-menu-root.js";
import { f7r } from "./search-menu-submenu-root.js";
import { YQS } from "./search-menu-submenu.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { eup } from "./useFilteredItems.js";
import { m2 } from "./variant-enforcer.js";
var Yup, Xup, Jfi, Zup, Qup, Jup, yc;
export { Jfi, Jup, Qup, Xup, Yup, Zup, yc };
var __wakaru_NTa_initialized = false;
export function NTa() {
if (__wakaru_NTa_initialized) return;
__wakaru_NTa_initialized = true;
"use strict";
E(), U5(), Va(), oWe(), E_e(), eFe(), Qfi(), She(), Nhe(), kci(), bup(), O4h(), Y1t(), n4h(), F$t(), p7r(), Fup(), CTa(), OQS(), $QS(), YQS(), wcp(), pB(), Ocp(), Ooe(), Bcp(), m2(), sTa(), Ucp(), Wj(), kcp(), fd(), iTa(), Icp(), eup(), aTa(), lTa(), IZS(), Jcp(), f7r(), Yup = {
    "ui--default-marker": "ui--default-marker",
    $$css: !0
}, Xup = {
    "ui--default-marker": "ui--default-marker",
    $$css: !0
}, Jfi = {
    backdrop: {
        kVAEAm: "ui-ixxii4",
        kpwlN0: "ui-10a8y8t",
        kWkggS: "ui-jbqb8w",
        kY4cRS: "ui-lvsv26",
        $$css: !0
    },
    backdropZIndex: (t)=>[
            {
                kY2c9j: t != null ? "ui-r3buco" : t,
                $$css: !0
            },
            {
                "--x-zIndex": t ?? void 0
            }
        ],
    emptyStatus: {
        kkrTdU: "ui-t0e3qv",
        kMwMTN: "ui-4b2ntj",
        $$css: !0
    }
}, Zup = new Set([
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End",
    "PageUp",
    "PageDown",
    "Enter",
    "Tab",
    "Escape"
]), Qup = 28, Jup = 13, yc = {
    Root: jQS,
    Trigger: tJS,
    Content: nJS,
    Input: oJS,
    List: aJS,
    ScrollArea: hJS,
    Footer: mJS,
    Section: gJS,
    SectionDivider: fJS,
    SectionTitle: vJS,
    GroupEmptyState: _JS,
    Status: Kup,
    Item: yQS,
    ItemIndicator: Nup,
    ToggleItem: SQS,
    EmptyState: bJS,
    SubMenu: xQS,
    SubMenuTrigger: qQS,
    SubMenuContent: VQS,
    SubMenuSearchContent: KQS,
    MenuSubMenu: DQS
};

}
