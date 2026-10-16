import { Oaf } from "./ContextMenuTrigger.js";
import { FW, zi } from "./Menu.js";
import { Guf } from "./context-menu-context.js";
import { Quf, Wuf, Xuf, Zuf } from "./f0s.js";
import { L1s } from "./menu-content.js";
import { x } from "./tslib.es6.js";
var u$;
export { u$ };
var __wakaru_$Ts_initialized = false;
export function $Ts() {
if (__wakaru_$Ts_initialized) return;
__wakaru_$Ts_initialized = true;
"use strict";
x(), FW(), L1s(), Guf(), Oaf(), u$ = Object.assign(Zuf, {
    useClose: Wuf,
    Trigger: Xuf,
    Content: Quf,
    Item: zi.Item,
    LinkItem: zi.LinkItem,
    CheckboxItem: zi.CheckboxItem,
    SwitchItem: zi.SwitchItem,
    RadioGroup: zi.RadioGroup,
    RadioItem: zi.RadioItem,
    Separator: zi.Separator,
    EmptyState: zi.EmptyState,
    LoadingState: zi.LoadingState,
    Section: zi.Section,
    SubMenu: zi.SubMenu,
    SubMenuTrigger: zi.SubMenuTrigger,
    SubMenuContent: zi.SubMenuContent
});

}
