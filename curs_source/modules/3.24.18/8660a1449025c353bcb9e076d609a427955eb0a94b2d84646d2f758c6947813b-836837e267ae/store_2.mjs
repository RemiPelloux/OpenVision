import { Cmw, K2f } from "./BA.js";
import { WSs } from "./FloatingRootStore.mjs";
import { Gx } from "./createSelector.mjs";
import { uDe } from "./empty.mjs";
import { Smw } from "./getEmptyRootContext.mjs";
import { gOl } from "./index_3.mjs";
import { E } from "./tslib.es6.js";
var _3n, YSs, bOl, Y2f;
export { Y2f, YSs, _3n, bOl };
var __wakaru_Tmw_initialized = false;
export function Tmw() {
if (__wakaru_Tmw_initialized) return;
__wakaru_Tmw_initialized = true;
E(), gOl(), uDe(), WSs(), Smw(), _3n = Gx((t)=>t.triggerIdProp ?? t.activeTriggerId), YSs = Gx((t)=>t.openProp ?? t.open), bOl = Gx((t)=>(t.popupElement?.id ?? t.floatingId) || void 0), Y2f = {
    open: YSs,
    mounted: Gx((t)=>t.mounted),
    transitionStatus: Gx((t)=>t.transitionStatus),
    floatingRootContext: Gx((t)=>t.floatingRootContext),
    triggerCount: Gx((t)=>t.triggerCount),
    preventUnmountingOnClose: Gx((t)=>t.preventUnmountingOnClose),
    payload: Gx((t)=>t.payload),
    activeTriggerId: _3n,
    activeTriggerElement: Gx((t)=>t.mounted ? t.activeTriggerElement : null),
    popupId: bOl,
    isTriggerActive: Gx((t, e)=>e !== void 0 && _3n(t) === e),
    isOpenedByTrigger: Gx((t, e)=>K2f(t, e)),
    isMountedByTrigger: Gx((t, e)=>e !== void 0 && _3n(t) === e && t.mounted),
    triggerProps: Gx((t, e)=>e ? t.activeTriggerProps : t.inactiveTriggerProps),
    triggerPopupId: Gx((t, e)=>Cmw(t, e) ? bOl(t) : void 0),
    popupProps: Gx((t)=>t.popupProps),
    popupElement: Gx((t)=>t.popupElement),
    positionerElement: Gx((t)=>t.positionerElement)
};

}
