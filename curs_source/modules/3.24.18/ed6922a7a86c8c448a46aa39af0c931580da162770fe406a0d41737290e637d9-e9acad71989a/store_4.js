import { H5e, ic } from "./createSelector.js";
import { Ygt } from "./itemEquality.js";
import { Nfe, Ofe, fsl } from "./qIc.js";
import { Xgt } from "./resolveValueLabel.js";
import { x } from "./tslib.es6.js";
var f_;
export { f_ };
var __wakaru_J5e_initialized = false;
export function J5e() {
if (__wakaru_J5e_initialized) return;
__wakaru_J5e_initialized = true;
x(), Ygt(), Xgt(), H5e(), f_ = {
    id: ic((e)=>e.id),
    labelId: ic((e)=>e.labelId),
    modal: ic((e)=>e.modal),
    multiple: ic((e)=>e.multiple),
    items: ic((e)=>e.items),
    itemToStringLabel: ic((e)=>e.itemToStringLabel),
    itemToStringValue: ic((e)=>e.itemToStringValue),
    isItemEqualToValue: ic((e)=>e.isItemEqualToValue),
    value: ic((e)=>e.value),
    hasSelectedValue: ic((e)=>{
        const { value: t, multiple: n, itemToStringValue: i } = e;
        return t == null ? !1 : n && Array.isArray(t) ? t.length > 0 : Ofe(t, i) !== "";
    }),
    hasNullItemLabel: ic((e, t)=>t ? fsl(e.items) : !1),
    open: ic((e)=>e.open),
    mounted: ic((e)=>e.mounted),
    forceMount: ic((e)=>e.forceMount),
    transitionStatus: ic((e)=>e.transitionStatus),
    openMethod: ic((e)=>e.openMethod),
    activeIndex: ic((e)=>e.activeIndex),
    selectedIndex: ic((e)=>e.selectedIndex),
    isActive: ic((e, t)=>e.activeIndex === t),
    isSelected: ic((e, t)=>{
        const n = e.isItemEqualToValue, i = e.value;
        return e.multiple ? Array.isArray(i) && i.some((r)=>Nfe(t, r, n)) : Nfe(t, i, n);
    }),
    isSelectedByFocus: ic((e, t)=>e.selectedIndex === t),
    popupProps: ic((e)=>e.popupProps),
    triggerProps: ic((e)=>e.triggerProps),
    triggerElement: ic((e)=>e.triggerElement),
    positionerElement: ic((e)=>e.positionerElement),
    listElement: ic((e)=>e.listElement),
    popupSide: ic((e)=>e.popupSide),
    scrollUpArrowVisible: ic((e)=>e.scrollUpArrowVisible),
    scrollDownArrowVisible: ic((e)=>e.scrollDownArrowVisible),
    hasScrollArrows: ic((e)=>e.hasScrollArrows)
};

}
