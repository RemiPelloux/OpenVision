import { J0i } from "./FloatingRootStore.js";
import { H5e, ic } from "./createSelector.js";
import { LE } from "./empty.js";
import { XMg } from "./getEmptyRootContext.js";
import { ZMg, tsl } from "./qIc.js";
import { x } from "./tslib.es6.js";
var qBt, a1i, ahs, zBt;
export { a1i, ahs, qBt, zBt };
var __wakaru_xSn_initialized = false;
export function xSn() {
if (__wakaru_xSn_initialized) return;
__wakaru_xSn_initialized = true;
x(), LE(), J0i(), XMg(), H5e(), qBt = ic((e)=>e.triggerIdProp ?? e.activeTriggerId), a1i = ic((e)=>e.openProp ?? e.open), ahs = ic((e)=>(e.popupElement?.id ?? e.floatingId) || void 0), zBt = {
    open: a1i,
    mounted: ic((e)=>e.mounted),
    transitionStatus: ic((e)=>e.transitionStatus),
    floatingRootContext: ic((e)=>e.floatingRootContext),
    triggerCount: ic((e)=>e.triggerCount),
    preventUnmountingOnClose: ic((e)=>e.preventUnmountingOnClose),
    payload: ic((e)=>e.payload),
    activeTriggerId: qBt,
    activeTriggerElement: ic((e)=>e.mounted ? e.activeTriggerElement : null),
    popupId: ahs,
    isTriggerActive: ic((e, t)=>t !== void 0 && qBt(e) === t),
    isOpenedByTrigger: ic((e, t)=>tsl(e, t)),
    isMountedByTrigger: ic((e, t)=>t !== void 0 && qBt(e) === t && e.mounted),
    triggerProps: ic((e, t)=>t ? e.activeTriggerProps : e.inactiveTriggerProps),
    triggerPopupId: ic((e, t)=>ZMg(e, t) ? ahs(e) : void 0),
    popupProps: ic((e)=>e.popupProps),
    popupElement: ic((e)=>e.popupElement),
    positionerElement: ic((e)=>e.positionerElement)
};

}
