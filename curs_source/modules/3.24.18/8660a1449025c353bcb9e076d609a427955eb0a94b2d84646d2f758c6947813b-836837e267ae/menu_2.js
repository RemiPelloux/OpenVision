import { U5 } from "./LYd.js";
import { aKS } from "./MenuExpandableSection.js";
import { iaa } from "./composeEventHandlers.js";
import { $YS, CYS, Dkn, FYS, GYS, VKS, WKS, ZKS, Zap, alp, bYS, cYS, dlp, fYS, iYS, kap, llp, oKS, qYS, r6e, rKS, sKS, uKS, vYS, zYS } from "./ipa.js";
import { hKS } from "./menu-checkbox-item.js";
import { GKS } from "./menu-content_2.js";
import { vGe } from "./menu-context.js";
import { KKS } from "./menu-empty-state.js";
import { X0a } from "./menu-item.js";
import { awt } from "./menu-layer-context.js";
import { QKS } from "./menu-loading-state.js";
import { rYS } from "./menu-search-input.js";
import { uYS } from "./menu-section.js";
import { bCa } from "./menu-sub-menu.js";
import { Nkn } from "./menu-submenu-context.js";
import { SYS } from "./menu-switch-item.js";
import { TYS } from "./menu-text-item.js";
import { mlp } from "./menu-virtualized-section-header.js";
import { E } from "./tslib.es6.js";
import { Yvn } from "./useRender.js";
import { BYS } from "./virtualized-menu-content.js";
import { HYS } from "./virtualized-menu-item.js";
var klp, cl;
export { cl, klp };
var __wakaru_aJ_initialized = false;
export function aJ() {
if (__wakaru_aJ_initialized) return;
__wakaru_aJ_initialized = true;
"use strict";
E(), U5(), iaa(), aKS(), hKS(), GKS(), vGe(), KKS(), X0a(), awt(), QKS(), rYS(), uYS(), bCa(), SYS(), TYS(), mlp(), BYS(), HYS(), Yvn(), Nkn(), klp = Object.assign(alp, {
    useContext: Zap
}), cl = Object.assign(GYS, {
    useContext: Dkn,
    useLayerContext: r6e,
    Trigger: qYS,
    HoverTrigger: zYS,
    Content: WKS,
    Item: kap,
    CheckboxItem: uKS,
    TextItem: CYS,
    SwitchItem: bYS,
    Section: cYS,
    SearchInput: iYS,
    EmptyState: VKS,
    LoadingState: ZKS,
    ExpandableSection: rKS,
    ExpandableSectionTrigger: sKS,
    ExpandableSectionContent: oKS,
    SubMenu: klp,
    SubMenuItem: vYS,
    SubMenuTrigger: fYS,
    SubMenuContent: llp,
    VirtualizedContent: FYS,
    VirtualizedItem: $YS,
    VirtualizedSectionHeader: dlp
});

}
