import { R5t } from "./create.js";
import { A5t, Nh, XP, p6, sEi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var efs;
export { efs };
var __wakaru_i3g_initialized = false;
export function i3g() {
if (__wakaru_i3g_initialized) return;
__wakaru_i3g_initialized = true;
x(), R5t(), sEi(), efs = A5t({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: p6,
        ariaAutoComplete: null,
        ariaBusy: p6,
        ariaChecked: p6,
        ariaColCount: Nh,
        ariaColIndex: Nh,
        ariaColSpan: Nh,
        ariaControls: XP,
        ariaCurrent: null,
        ariaDescribedBy: XP,
        ariaDetails: null,
        ariaDisabled: p6,
        ariaDropEffect: XP,
        ariaErrorMessage: null,
        ariaExpanded: p6,
        ariaFlowTo: XP,
        ariaGrabbed: p6,
        ariaHasPopup: null,
        ariaHidden: p6,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: XP,
        ariaLevel: Nh,
        ariaLive: null,
        ariaModal: p6,
        ariaMultiLine: p6,
        ariaMultiSelectable: p6,
        ariaOrientation: null,
        ariaOwns: XP,
        ariaPlaceholder: null,
        ariaPosInSet: Nh,
        ariaPressed: p6,
        ariaReadOnly: p6,
        ariaRelevant: null,
        ariaRequired: p6,
        ariaRoleDescription: XP,
        ariaRowCount: Nh,
        ariaRowIndex: Nh,
        ariaRowSpan: Nh,
        ariaSelected: p6,
        ariaSetSize: Nh,
        ariaSort: null,
        ariaValueMax: Nh,
        ariaValueMin: Nh,
        ariaValueNow: Nh,
        ariaValueText: null,
        role: null
    },
    transform (e, t) {
        return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    }
});

}
