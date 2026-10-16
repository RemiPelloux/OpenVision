import { Iuf } from "./promoExpirationReminder.js";
import { E } from "./tslib.es6.js";
import { CTe } from "./use-persistent-state.react.js";
import { Bs } from "./window.js";
var qVe;
export { qVe };
var __wakaru_IHk_initialized = false;
export function IHk() {
if (__wakaru_IHk_initialized) return;
__wakaru_IHk_initialized = true;
"use strict";
E(), Bs(), CTe(), Iuf(), qVe = (t, e, n)=>{
    t?.warn(`[usePromoExpirationReminder] ${e}`, n);
};

}
