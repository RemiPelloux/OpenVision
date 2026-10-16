import { FRe, nlh } from "./LYd.js";
import { $nt, vc } from "./createSelector.js";
import { s7t } from "./itemEquality.js";
import { o7t } from "./resolveValueLabel.js";
import { E } from "./tslib.es6.js";
var gm;
export { gm };
var __wakaru_yGe_initialized = false;
export function yGe() {
if (__wakaru_yGe_initialized) return;
__wakaru_yGe_initialized = true;
E(), s7t(), o7t(), $nt(), gm = {
    id: vc((t)=>t.id),
    labelId: vc((t)=>t.labelId),
    items: vc((t)=>t.items),
    selectedValue: vc((t)=>t.selectedValue),
    hasSelectionChips: vc((t)=>{
        const e = t.selectedValue;
        return Array.isArray(e) && e.length > 0;
    }),
    hasSelectedValue: vc((t)=>{
        const { selectedValue: e, selectionMode: n } = t;
        return e == null ? !1 : n === "multiple" && Array.isArray(e) ? e.length > 0 : !0;
    }),
    hasNullItemLabel: vc((t, e)=>e ? nlh(t.items) : !1),
    open: vc((t)=>t.open),
    mounted: vc((t)=>t.mounted),
    forceMounted: vc((t)=>t.forceMounted),
    inline: vc((t)=>t.inline),
    activeIndex: vc((t)=>t.activeIndex),
    selectedIndex: vc((t)=>t.selectedIndex),
    isActive: vc((t, e)=>t.activeIndex === e),
    isSelected: vc((t, e)=>{
        const n = t.isItemEqualToValue, i = t.selectedValue;
        return Array.isArray(i) ? i.some((r)=>FRe(e, r, n)) : FRe(e, i, n);
    }),
    transitionStatus: vc((t)=>t.transitionStatus),
    popupProps: vc((t)=>t.popupProps),
    inputProps: vc((t)=>t.inputProps),
    triggerProps: vc((t)=>t.triggerProps),
    itemProps: vc((t)=>t.itemProps),
    positionerElement: vc((t)=>t.positionerElement),
    listElement: vc((t)=>t.listElement),
    popupId: vc((t)=>t.popupId),
    triggerElement: vc((t)=>t.triggerElement),
    inputElement: vc((t)=>t.inputElement),
    inputGroupElement: vc((t)=>t.inputGroupElement),
    popupSide: vc((t)=>t.popupSide),
    openMethod: vc((t)=>t.openMethod),
    inputInsidePopup: vc((t)=>t.inputInsidePopup),
    inputOwnsFormValue: vc((t)=>t.inputOwnsFormValue),
    selectionMode: vc((t)=>t.selectionMode),
    name: vc((t)=>t.name),
    form: vc((t)=>t.form),
    disabled: vc((t)=>t.disabled),
    readOnly: vc((t)=>t.readOnly),
    required: vc((t)=>t.required),
    grid: vc((t)=>t.grid),
    virtualized: vc((t)=>t.virtualized),
    itemToStringLabel: vc((t)=>t.itemToStringLabel),
    isItemEqualToValue: vc((t)=>t.isItemEqualToValue),
    modal: vc((t)=>t.modal),
    autoHighlight: vc((t)=>t.autoHighlight),
    submitOnItemClick: vc((t)=>t.submitOnItemClick)
};

}
