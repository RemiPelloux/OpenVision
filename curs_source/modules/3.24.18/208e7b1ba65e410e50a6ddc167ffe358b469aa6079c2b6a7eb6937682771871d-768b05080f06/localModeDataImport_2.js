import { Rl } from "./buildFlags.js";
import { Ja } from "./constants.js";
import { COe } from "./localModeDataImport.js";
import { Ce } from "./path.js";
import { gn } from "./pfs.js";
import { tk } from "./storage_2.js";
import { h } from "./tslib.es6.js";
import { Wn } from "./uuid.js";
var VOe, qf, Uo, Qu, XE, fU, $Oe, jOe, _U, vU, TU, kU, HOe, qOe, KOe, zOe, YOe, JOe, XOe, QOe, Zu, ZOe, e2e;
export { $Oe, HOe, JOe, KOe, QOe, Qu, TU, Uo, VOe, XE, XOe, YOe, ZOe, Zu, _U, e2e, fU, jOe, kU, qOe, qf, vU, zOe };
var __wakaru_t2e_initialized = false;
export function t2e() {
if (__wakaru_t2e_initialized) return;
__wakaru_t2e_initialized = true;
"use strict";
h(), Ce(), Ja(), Wn(), gn(), Rl(), tk(), COe(), VOe = "pending-local-mode-data-import.json", qf = "local-mode-data-import-result.json", Uo = "User.local-mode-import-staging", Qu = "User.local-mode-import-rollback", XE = "User.local-mode-import-backup-", fU = "User.local-mode-import-cleanup-", $Oe = "local-mode-data-import.lock", jOe = "code.lock", _U = "state.vscdb", vU = "secret://cursorAuth/openAIKey", TU = "cursorAuth/openAIKey", kU = "composerData:", HOe = "composerData;", qOe = "task-", KOe = 15e3, zOe = 5 * 6e4, YOe = 5e3, JOe = 5e3, XOe = 720 * 60 * 6e4, QOe = 1, Zu = class extends Error {
}, ZOe = 1, e2e = 2;

}
