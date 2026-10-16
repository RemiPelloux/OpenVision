import { HnS } from "./LYd.js";
import { E } from "./tslib.es6.js";
var hwh, pwh, mwh, gwh, fwh, vwh;
export { fwh, gwh, hwh, mwh, pwh, vwh };
var __wakaru__wh_initialized = false;
export function _wh() {
if (__wakaru__wh_initialized) return;
__wakaru__wh_initialized = true;
"use strict";
E(), hwh = "user|automation", pwh = "/cursor/stores", mwh = "canvases", gwh = /(?:^|\/)\.cursor\/projects\/[^/]+\/canvases\/[^/]+\.canvas\.tsx$/i, fwh = new RegExp(`^${HnS(pwh)}/(?:${hwh})/${mwh}/(?:[^/]+/)?[^/]+\\.canvas\\.tsx$`), vwh = /(?:^|\/)[^/]+\/files\/canvases\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/source\.canvas\.tsx$/i;

}
