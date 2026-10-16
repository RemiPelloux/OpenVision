import { iS } from "./adminSettingsService.js";
import { Rs } from "./authenticationService.js";
import { wm } from "./buildFlags.js";
import { _s } from "./experimentService.js";
import { bE } from "./privacy_mode_pb.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { E } from "./tslib.es6.js";
var __wakaru_Dls_initialized = false;
export function Dls() {
if (__wakaru_Dls_initialized) return;
__wakaru_Dls_initialized = true;
"use strict";
E(), wm(), Rs(), iS(), _s(), Um(), bE();

}
