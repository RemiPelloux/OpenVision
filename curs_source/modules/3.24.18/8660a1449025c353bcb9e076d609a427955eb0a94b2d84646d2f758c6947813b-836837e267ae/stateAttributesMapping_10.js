import { BY, wne } from "./constants_11.js";
import { E } from "./tslib.es6.js";
var T_i;
export { T_i };
var __wakaru_Kjr_initialized = false;
export function Kjr() {
if (__wakaru_Kjr_initialized) return;
__wakaru_Kjr_initialized = true;
E(), BY(), T_i = {
    activeThumbIndex: ()=>null,
    max: ()=>null,
    min: ()=>null,
    minStepsBetweenValues: ()=>null,
    step: ()=>null,
    values: ()=>null,
    ...wne
};

}
