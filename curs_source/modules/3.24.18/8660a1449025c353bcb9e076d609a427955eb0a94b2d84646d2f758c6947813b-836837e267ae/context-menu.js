import { bSS } from "./ContextMenuTrigger.js";
import { BW, hn } from "./Menu.js";
import { TwS } from "./context-menu-context.js";
import { CwS, DwS, MwS, NwS } from "./ipa.js";
import { xma } from "./menu-content.js";
import { E } from "./tslib.es6.js";
var Ka;
export { Ka };
var __wakaru_wpi_initialized = false;
export function wpi() {
if (__wakaru_wpi_initialized) return;
__wakaru_wpi_initialized = true;
"use strict";
E(), BW(), xma(), TwS(), bSS(), Ka = Object.assign(DwS, {
    useClose: CwS,
    Trigger: MwS,
    Content: NwS,
    Item: hn.Item,
    LinkItem: hn.LinkItem,
    CheckboxItem: hn.CheckboxItem,
    SwitchItem: hn.SwitchItem,
    RadioGroup: hn.RadioGroup,
    RadioItem: hn.RadioItem,
    Separator: hn.Separator,
    EmptyState: hn.EmptyState,
    LoadingState: hn.LoadingState,
    Section: hn.Section,
    SubMenu: hn.SubMenu,
    SubMenuTrigger: hn.SubMenuTrigger,
    SubMenuContent: hn.SubMenuContent
});

}
