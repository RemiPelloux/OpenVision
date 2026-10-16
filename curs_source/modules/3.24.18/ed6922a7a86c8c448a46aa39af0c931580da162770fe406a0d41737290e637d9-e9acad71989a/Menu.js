import { Paf } from "./MenuHandle.js";
import { h1s } from "./MenuRoot.js";
import { Auf, Icf, Iuf, JBl, Klf, Nuf, Ouf, Puf, Xlf, _lf, buf, hcf, kuf, pcf, wuf, xcf, yuf } from "./f0s.js";
import { mcf } from "./menu-action-items.js";
import { L1s } from "./menu-content.js";
import { C3l } from "./menu-detached-trigger.js";
import { Acf } from "./menu-grouping.js";
import { cBl } from "./menu-input-header.js";
import { Zlf } from "./menu-radio-items.js";
import { W9e } from "./menu-root-context.js";
import { Suf } from "./menu-status.js";
import { NTs } from "./menu-submenu.js";
import { Ruf } from "./menu-toggle-items.js";
import { x } from "./tslib.es6.js";
var zi;
export { zi };
var __wakaru_FW_initialized = false;
export function FW() {
if (__wakaru_FW_initialized) return;
__wakaru_FW_initialized = true;
"use strict";
x(), mcf(), L1s(), C3l(), Acf(), cBl(), Zlf(), W9e(), Suf(), NTs(), Ruf(), h1s(), Paf(), zi = Object.assign(Puf, {
    Trigger: Nuf,
    Content: Ouf,
    Input: _lf,
    Item: hcf,
    LinkItem: pcf,
    CheckboxItem: Iuf,
    SwitchItem: Auf,
    RadioGroup: Klf,
    RadioItem: Xlf,
    Separator: xcf,
    EmptyState: buf,
    LoadingState: yuf,
    Section: Icf,
    SubMenu: JBl,
    SubMenuTrigger: kuf,
    SubMenuContent: wuf
});

}
