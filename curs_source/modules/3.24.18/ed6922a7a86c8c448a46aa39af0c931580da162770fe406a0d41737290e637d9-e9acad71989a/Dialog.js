import { GQg, MJg, OQg, SPl, bJg, kPl, mJg, tJg, uJg, wJg, zQg } from "./DSs.js";
import { UCe } from "./Dialog.stylex.js";
import { AQg } from "./Dialog.types.js";
import { FQg } from "./DialogClose.js";
import { $Qg } from "./DialogContent.js";
import { F9t } from "./DialogContext.js";
import { VQg } from "./DialogDescription.js";
import { KQg } from "./DialogFooter.js";
import { QQg } from "./DialogHeader.js";
import { nJg } from "./DialogHeaderLead.js";
import { dJg } from "./DialogList.js";
import { gJg } from "./DialogListHeader.js";
import { yJg } from "./DialogListRow.js";
import { CJg } from "./DialogTitle.js";
import { d6 } from "./PortalContext.js";
import { hh } from "./attach.js";
import { qg } from "./cn.js";
import { E5, GJ } from "./qIc.js";
import { x } from "./tslib.es6.js";
var iCs, xPl, bd;
export { bd, iCs, xPl };
var __wakaru_TY_initialized = false;
export function TY() {
if (__wakaru_TY_initialized) return;
__wakaru_TY_initialized = true;
"use strict";
x(), E5(), qg(), UCe(), AQg(), FQg(), $Qg(), F9t(), VQg(), KQg(), QQg(), nJg(), dJg(), gJg(), yJg(), CJg(), d6(), GJ(), hh(), iCs = (e)=>e === "hidden" || e === "clip", xPl = [
    "[data-popup-open]",
    '[data-component="select-positioner"][data-open]',
    '[data-component="select-popup"][data-open]',
    '[data-component="menu-popup"][data-open]',
    '[role="listbox"][data-open]',
    '[role="menu"][data-open]'
].join(", "), bd = Object.assign(MJg, {
    Header: kPl,
    HeaderLead: tJg,
    Title: wJg,
    Description: GQg,
    List: uJg,
    ListHeader: mJg,
    ListRow: bJg,
    Content: SPl,
    Footer: zQg,
    Close: OQg
});

}
