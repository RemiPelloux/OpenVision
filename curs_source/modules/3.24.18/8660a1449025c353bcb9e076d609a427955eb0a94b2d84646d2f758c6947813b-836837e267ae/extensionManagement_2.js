import { jn } from "./SZu.js";
import { jy, yL } from "./extensionManagement.js";
import { It } from "./instantiation.js";
import { Ki, em } from "./network.js";
import { E } from "./tslib.es6.js";
var Qyg, c9e, QIi, gG, aU, J0k;
export { J0k, QIi, Qyg, aU, c9e, gG };
var __wakaru_MA_initialized = false;
export function MA() {
if (__wakaru_MA_initialized) return;
__wakaru_MA_initialized = true;
"use strict";
E(), It(), jy(), Ki(), Qyg = yL, c9e = jn("extensionManagementServerService"), QIi = em.asBrowserUri("vs/workbench/services/extensionManagement/common/media/defaultIcon.png").toString(!0), gG = Qyg, aU = jn("extensionEnablementService"), J0k = jn("IWebExtensionsScannerService");

}
