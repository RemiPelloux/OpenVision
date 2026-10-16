import { fki } from "./PortalContext.tsx";
import { hki } from "./PortalLayeringContext.tsx";
var __wakaru_i3_initialized = false;
export function i3() {
if (__wakaru_i3_initialized) return;
__wakaru_i3_initialized = true;
"use strict";
fki(), hki();

}
