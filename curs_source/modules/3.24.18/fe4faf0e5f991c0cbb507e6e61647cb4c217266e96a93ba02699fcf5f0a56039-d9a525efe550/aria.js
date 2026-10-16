import { CB, aJ } from "./create.js";
import { Bi, Ip, tg, yNe } from "./types_2.js";
var aNt;
export { aNt };
var __wakaru_Jki_initialized = false;
export function Jki() {
if (__wakaru_Jki_initialized) return;
__wakaru_Jki_initialized = true;
aJ(), yNe(), aNt = CB({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: tg,
        ariaAutoComplete: null,
        ariaBusy: tg,
        ariaChecked: tg,
        ariaColCount: Bi,
        ariaColIndex: Bi,
        ariaColSpan: Bi,
        ariaControls: Ip,
        ariaCurrent: null,
        ariaDescribedBy: Ip,
        ariaDetails: null,
        ariaDisabled: tg,
        ariaDropEffect: Ip,
        ariaErrorMessage: null,
        ariaExpanded: tg,
        ariaFlowTo: Ip,
        ariaGrabbed: tg,
        ariaHasPopup: null,
        ariaHidden: tg,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: Ip,
        ariaLevel: Bi,
        ariaLive: null,
        ariaModal: tg,
        ariaMultiLine: tg,
        ariaMultiSelectable: tg,
        ariaOrientation: null,
        ariaOwns: Ip,
        ariaPlaceholder: null,
        ariaPosInSet: Bi,
        ariaPressed: tg,
        ariaReadOnly: tg,
        ariaRelevant: null,
        ariaRequired: tg,
        ariaRoleDescription: Ip,
        ariaRowCount: Bi,
        ariaRowIndex: Bi,
        ariaRowSpan: Bi,
        ariaSelected: tg,
        ariaSetSize: Bi,
        ariaSort: null,
        ariaValueMax: Bi,
        ariaValueMin: Bi,
        ariaValueNow: Bi,
        ariaValueText: null,
        role: null
    },
    transform (r, e) {
        return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
    }
});

}
