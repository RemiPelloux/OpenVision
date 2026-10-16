import { Ml } from "./index.ts";
import { x } from "./tslib.es6.js";
var Ohv, vPu, jzs, _Pu, Fhv, Bhv, bPu;
export { Bhv, Fhv, Ohv, _Pu, bPu, jzs, vPu };
var __wakaru_yPu_initialized = false;
export function yPu() {
if (__wakaru_yPu_initialized) return;
__wakaru_yPu_initialized = true;
"use strict";
x(), Ml(), Ohv = 256 * 1024, vPu = [
    {
        id: "for-review",
        label: "For Review",
        icon: "circle",
        complete: !1
    },
    {
        id: "in-progress",
        label: "In Progress",
        icon: "spinner",
        complete: !1
    },
    {
        id: "queued",
        label: "Queued",
        icon: "circle-dashed",
        complete: !1
    },
    {
        id: "done",
        label: "Done",
        icon: "check-circle",
        complete: !0
    },
    {
        id: "canceled",
        label: "Canceled",
        icon: "x-circle",
        complete: !0
    }
], jzs = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "magenta"
], _Pu = "gray", Fhv = jzs.filter((e)=>e !== _Pu), Bhv = jzs.map((e)=>`\`${e}\``).join(", "), bPu = /^[A-Z][A-Z0-9]{0,5}-\d{1,6}$/;

}
