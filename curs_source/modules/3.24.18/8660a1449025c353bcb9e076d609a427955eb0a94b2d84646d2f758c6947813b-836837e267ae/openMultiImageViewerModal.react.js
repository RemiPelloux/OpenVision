import { IZg } from "./MultiImageViewer.react.js";
import { iS } from "./adminSettingsService.js";
import { Dc } from "./aiService.js";
import { xEn } from "./artifactCacheService.js";
import { Rs } from "./authenticationService.js";
import { bb } from "./clipboardService.js";
import { py } from "./cursorCredsService.js";
import { bd } from "./dialogs.js";
import { ms } from "./files.js";
import { Ki } from "./network.js";
import { Ks } from "./notification.js";
import { APn } from "./renderReactWithServices.react.js";
import { Zi } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var __wakaru_wNf_initialized = false;
export function wNf() {
if (__wakaru_wNf_initialized) return;
__wakaru_wNf_initialized = true;
"use strict";
E(), Ki(), fn(), bb(), bd(), ms(), Ks(), Zi(), xEn(), Dc(), py(), iS(), Rs(), APn(), IZg();

}
