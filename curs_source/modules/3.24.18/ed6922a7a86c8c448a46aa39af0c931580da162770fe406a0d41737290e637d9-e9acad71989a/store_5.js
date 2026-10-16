import { H5e, ic } from "./createSelector.js";
import { Ygt } from "./itemEquality.js";
import { Nfe, fsl } from "./qIc.js";
import { Xgt } from "./resolveValueLabel.js";
import { x } from "./tslib.es6.js";
var op;
export { op };
var __wakaru_b6e_initialized = false;
export function b6e() {
if (__wakaru_b6e_initialized) return;
__wakaru_b6e_initialized = true;
x(), Ygt(), Xgt(), H5e(), op = {
    id: ic((e)=>e.id),
    labelId: ic((e)=>e.labelId),
    items: ic((e)=>e.items),
    selectedValue: ic((e)=>e.selectedValue),
    hasSelectionChips: ic((e)=>{
        const t = e.selectedValue;
        return Array.isArray(t) && t.length > 0;
    }),
    hasSelectedValue: ic((e)=>{
        const { selectedValue: t, selectionMode: n } = e;
        return t == null ? !1 : n === "multiple" && Array.isArray(t) ? t.length > 0 : !0;
    }),
    hasNullItemLabel: ic((e, t)=>t ? fsl(e.items) : !1),
    open: ic((e)=>e.open),
    mounted: ic((e)=>e.mounted),
    forceMounted: ic((e)=>e.forceMounted),
    inline: ic((e)=>e.inline),
    activeIndex: ic((e)=>e.activeIndex),
    selectedIndex: ic((e)=>e.selectedIndex),
    isActive: ic((e, t)=>e.activeIndex === t),
    isSelected: ic((e, t)=>{
        const n = e.isItemEqualToValue, i = e.selectedValue;
        return Array.isArray(i) ? i.some((r)=>Nfe(t, r, n)) : Nfe(t, i, n);
    }),
    transitionStatus: ic((e)=>e.transitionStatus),
    popupProps: ic((e)=>e.popupProps),
    inputProps: ic((e)=>e.inputProps),
    triggerProps: ic((e)=>e.triggerProps),
    itemProps: ic((e)=>e.itemProps),
    positionerElement: ic((e)=>e.positionerElement),
    listElement: ic((e)=>e.listElement),
    popupId: ic((e)=>e.popupId),
    triggerElement: ic((e)=>e.triggerElement),
    inputElement: ic((e)=>e.inputElement),
    inputGroupElement: ic((e)=>e.inputGroupElement),
    popupSide: ic((e)=>e.popupSide),
    openMethod: ic((e)=>e.openMethod),
    inputInsidePopup: ic((e)=>e.inputInsidePopup),
    inputOwnsFormValue: ic((e)=>e.inputOwnsFormValue),
    selectionMode: ic((e)=>e.selectionMode),
    name: ic((e)=>e.name),
    form: ic((e)=>e.form),
    disabled: ic((e)=>e.disabled),
    readOnly: ic((e)=>e.readOnly),
    required: ic((e)=>e.required),
    grid: ic((e)=>e.grid),
    virtualized: ic((e)=>e.virtualized),
    itemToStringLabel: ic((e)=>e.itemToStringLabel),
    isItemEqualToValue: ic((e)=>e.isItemEqualToValue),
    modal: ic((e)=>e.modal),
    autoHighlight: ic((e)=>e.autoHighlight),
    submitOnItemClick: ic((e)=>e.submitOnItemClick)
};

}
