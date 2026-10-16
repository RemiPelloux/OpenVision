import { EFe } from "./Dialog.stylex.js";
import { Lda } from "./Dialog.types.js";
import { F3h } from "./DialogClose.js";
import { B3h } from "./DialogContent.js";
import { EUt } from "./DialogContext.js";
import { j3h } from "./DialogDescription.js";
import { $3h } from "./DialogFooter.js";
import { H3h } from "./DialogHeader.js";
import { G3h } from "./DialogHeaderLead.js";
import { V3h } from "./DialogList.js";
import { Y3h } from "./DialogListHeader.js";
import { Z3h } from "./DialogListRow.js";
import { J3h } from "./DialogTitle.js";
import { Ooe, U5 } from "./LYd.js";
import { pB } from "./PortalContext.js";
import { qu } from "./attach.js";
import { mf } from "./cn.js";
import { K3h, Oda, Q3h, RpS, U3h, W3h, X3h, fLr, phi, vLr, z3h } from "./nca.js";
import { E } from "./tslib.es6.js";
var Wda, iNh, Xr;
export { Wda, Xr, iNh };
var __wakaru_QQ_initialized = false;
export function QQ() {
if (__wakaru_QQ_initialized) return;
__wakaru_QQ_initialized = true;
"use strict";
E(), U5(), mf(), EFe(), Lda(), F3h(), B3h(), EUt(), j3h(), $3h(), H3h(), G3h(), V3h(), Y3h(), Z3h(), J3h(), pB(), Ooe(), qu(), Wda = (t)=>t === "hidden" || t === "clip", iNh = [
    "[data-popup-open]",
    '[data-component="select-positioner"][data-open]',
    '[data-component="select-popup"][data-open]',
    '[data-component="menu-popup"][data-open]',
    '[role="listbox"][data-open]',
    '[role="menu"][data-open]'
].join(", "), Xr = Object.assign(RpS, {
    Header: phi,
    HeaderLead: W3h,
    Title: Q3h,
    Description: U3h,
    List: z3h,
    ListHeader: K3h,
    ListRow: X3h,
    Content: fLr,
    Footer: vLr,
    Close: Oda
});

}
