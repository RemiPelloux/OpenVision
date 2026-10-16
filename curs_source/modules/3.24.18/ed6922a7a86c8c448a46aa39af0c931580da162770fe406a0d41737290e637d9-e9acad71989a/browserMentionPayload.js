import { De } from "./De_3.js";
import { HM } from "./index_191.js";
import { x } from "./tslib.es6.js";
var Wdh, Gdh;
export { Gdh, Wdh };
var __wakaru_Vdh_initialized = false;
export function Vdh() {
if (__wakaru_Vdh_initialized) return;
__wakaru_Vdh_initialized = true;
"use strict";
x(), HM(), Wdh = De.object({
    case: De.literal("browserConnection"),
    mode: De.literal("editor")
}).passthrough(), Gdh = De.object({
    case: De.literal("browserSelection"),
    browserId: De.string(),
    url: De.string(),
    pageTitle: De.string().optional()
}).passthrough();

}
