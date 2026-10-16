import { XRr } from "./FloatingRootStore.js";
import { jah, tjy } from "./LYd.js";
import { $nt, vc } from "./createSelector.js";
import { vA } from "./empty.js";
import { ejy } from "./getEmptyRootContext.js";
import { E } from "./tslib.es6.js";
var sbn, r2r, aJo, obn;
export { aJo, obn, r2r, sbn };
var __wakaru_qli_initialized = false;
export function qli() {
if (__wakaru_qli_initialized) return;
__wakaru_qli_initialized = true;
E(), vA(), XRr(), ejy(), $nt(), sbn = vc((t)=>t.triggerIdProp ?? t.activeTriggerId), r2r = vc((t)=>t.openProp ?? t.open), aJo = vc((t)=>(t.popupElement?.id ?? t.floatingId) || void 0), obn = {
    open: r2r,
    mounted: vc((t)=>t.mounted),
    transitionStatus: vc((t)=>t.transitionStatus),
    floatingRootContext: vc((t)=>t.floatingRootContext),
    triggerCount: vc((t)=>t.triggerCount),
    preventUnmountingOnClose: vc((t)=>t.preventUnmountingOnClose),
    payload: vc((t)=>t.payload),
    activeTriggerId: sbn,
    activeTriggerElement: vc((t)=>t.mounted ? t.activeTriggerElement : null),
    popupId: aJo,
    isTriggerActive: vc((t, e)=>e !== void 0 && sbn(t) === e),
    isOpenedByTrigger: vc((t, e)=>jah(t, e)),
    isMountedByTrigger: vc((t, e)=>e !== void 0 && sbn(t) === e && t.mounted),
    triggerProps: vc((t, e)=>e ? t.activeTriggerProps : t.inactiveTriggerProps),
    triggerPopupId: vc((t, e)=>tjy(t, e) ? aJo(t) : void 0),
    popupProps: vc((t)=>t.popupProps),
    popupElement: vc((t)=>t.popupElement),
    positionerElement: vc((t)=>t.positionerElement)
};

}
