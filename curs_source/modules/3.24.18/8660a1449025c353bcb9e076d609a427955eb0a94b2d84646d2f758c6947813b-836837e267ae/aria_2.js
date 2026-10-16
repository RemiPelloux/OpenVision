import { $5, AW, Wbn, _Mr, xm } from "./LYd.js";
import { Gbn } from "./create.js";
import { E } from "./tslib.es6.js";
var mia;
export { mia };
var __wakaru_Bqy_initialized = false;
export function Bqy() {
if (__wakaru_Bqy_initialized) return;
__wakaru_Bqy_initialized = true;
E(), Gbn(), _Mr(), mia = Wbn({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: AW,
        ariaAutoComplete: null,
        ariaBusy: AW,
        ariaChecked: AW,
        ariaColCount: xm,
        ariaColIndex: xm,
        ariaColSpan: xm,
        ariaControls: $5,
        ariaCurrent: null,
        ariaDescribedBy: $5,
        ariaDetails: null,
        ariaDisabled: AW,
        ariaDropEffect: $5,
        ariaErrorMessage: null,
        ariaExpanded: AW,
        ariaFlowTo: $5,
        ariaGrabbed: AW,
        ariaHasPopup: null,
        ariaHidden: AW,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: $5,
        ariaLevel: xm,
        ariaLive: null,
        ariaModal: AW,
        ariaMultiLine: AW,
        ariaMultiSelectable: AW,
        ariaOrientation: null,
        ariaOwns: $5,
        ariaPlaceholder: null,
        ariaPosInSet: xm,
        ariaPressed: AW,
        ariaReadOnly: AW,
        ariaRelevant: null,
        ariaRequired: AW,
        ariaRoleDescription: $5,
        ariaRowCount: xm,
        ariaRowIndex: xm,
        ariaRowSpan: xm,
        ariaSelected: AW,
        ariaSetSize: xm,
        ariaSort: null,
        ariaValueMax: xm,
        ariaValueMin: xm,
        ariaValueNow: xm,
        ariaValueText: null,
        role: null
    },
    transform (t, e) {
        return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
    }
});

}
