import { Ug, WE } from "./extensionManagement.js";
import { Ze } from "./instantiation.js";
import { Gd, li } from "./network.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var uPh, HD, yBn, nP, $k, Vr_;
export { $k, HD, Vr_, nP, uPh, yBn };
var __wakaru_TS_initialized = false;
export function TS() {
if (__wakaru_TS_initialized) return;
__wakaru_TS_initialized = true;
"use strict";
x(), Ze(), Ug(), li(), uPh = WE, HD = vn("extensionManagementServerService"), yBn = Gd.asBrowserUri("vs/workbench/services/extensionManagement/common/media/defaultIcon.png").toString(!0), nP = uPh, $k = vn("extensionEnablementService"), Vr_ = vn("IWebExtensionsScannerService");

}
