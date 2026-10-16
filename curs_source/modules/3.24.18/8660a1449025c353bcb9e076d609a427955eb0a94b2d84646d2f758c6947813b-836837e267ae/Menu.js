import { fSS } from "./MenuHandle.js";
import { rma } from "./MenuRoot.js";
import { D9h, DkS, LkS, XSS, ZSS, _wS, d1S, dwS, gwS, h1S, nkS, nwS, rwS, swS, twS, uwS, vwS } from "./ipa.js";
import { QSS } from "./menu-action-items.js";
import { xma } from "./menu-content.js";
import { J6h } from "./menu-detached-trigger.js";
import { p1S } from "./menu-grouping.js";
import { O4h } from "./menu-input-header.js";
import { OkS } from "./menu-radio-items.js";
import { Jit } from "./menu-root-context.js";
import { iwS } from "./menu-status.js";
import { Aga } from "./menu-submenu.js";
import { hwS } from "./menu-toggle-items.js";
import { E } from "./tslib.es6.js";
var hn;
export { hn };
var __wakaru_BW_initialized = false;
export function BW() {
if (__wakaru_BW_initialized) return;
__wakaru_BW_initialized = true;
"use strict";
E(), QSS(), xma(), J6h(), p1S(), O4h(), OkS(), Jit(), iwS(), Aga(), hwS(), rma(), fSS(), hn = Object.assign(gwS, {
    Trigger: vwS,
    Content: _wS,
    Input: nkS,
    Item: XSS,
    LinkItem: ZSS,
    CheckboxItem: uwS,
    SwitchItem: dwS,
    RadioGroup: DkS,
    RadioItem: LkS,
    Separator: d1S,
    EmptyState: twS,
    LoadingState: nwS,
    Section: h1S,
    SubMenu: D9h,
    SubMenuTrigger: rwS,
    SubMenuContent: swS
});

}
