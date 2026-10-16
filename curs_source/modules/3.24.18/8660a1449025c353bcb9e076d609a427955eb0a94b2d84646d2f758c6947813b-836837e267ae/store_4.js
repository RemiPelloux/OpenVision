import { BRe, FRe, nlh } from "./LYd.js";
import { $nt, vc } from "./createSelector.js";
import { s7t } from "./itemEquality.js";
import { o7t } from "./resolveValueLabel.js";
import { E } from "./tslib.es6.js";
var _S;
export { _S };
var __wakaru_iit_initialized = false;
export function iit() {
if (__wakaru_iit_initialized) return;
__wakaru_iit_initialized = true;
E(), s7t(), o7t(), $nt(), _S = {
    id: vc((t)=>t.id),
    labelId: vc((t)=>t.labelId),
    modal: vc((t)=>t.modal),
    multiple: vc((t)=>t.multiple),
    items: vc((t)=>t.items),
    itemToStringLabel: vc((t)=>t.itemToStringLabel),
    itemToStringValue: vc((t)=>t.itemToStringValue),
    isItemEqualToValue: vc((t)=>t.isItemEqualToValue),
    value: vc((t)=>t.value),
    hasSelectedValue: vc((t)=>{
        const { value: e, multiple: n, itemToStringValue: i } = t;
        return e == null ? !1 : n && Array.isArray(e) ? e.length > 0 : BRe(e, i) !== "";
    }),
    hasNullItemLabel: vc((t, e)=>e ? nlh(t.items) : !1),
    open: vc((t)=>t.open),
    mounted: vc((t)=>t.mounted),
    forceMount: vc((t)=>t.forceMount),
    transitionStatus: vc((t)=>t.transitionStatus),
    openMethod: vc((t)=>t.openMethod),
    activeIndex: vc((t)=>t.activeIndex),
    selectedIndex: vc((t)=>t.selectedIndex),
    isActive: vc((t, e)=>t.activeIndex === e),
    isSelected: vc((t, e)=>{
        const n = t.isItemEqualToValue, i = t.value;
        return t.multiple ? Array.isArray(i) && i.some((r)=>FRe(e, r, n)) : FRe(e, i, n);
    }),
    isSelectedByFocus: vc((t, e)=>t.selectedIndex === e),
    popupProps: vc((t)=>t.popupProps),
    triggerProps: vc((t)=>t.triggerProps),
    triggerElement: vc((t)=>t.triggerElement),
    positionerElement: vc((t)=>t.positionerElement),
    listElement: vc((t)=>t.listElement),
    popupSide: vc((t)=>t.popupSide),
    scrollUpArrowVisible: vc((t)=>t.scrollUpArrowVisible),
    scrollDownArrowVisible: vc((t)=>t.scrollDownArrowVisible),
    hasScrollArrows: vc((t)=>t.hasScrollArrows)
};

}
