import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var turnUnitIdKey, turnUnitTypeKey;
export { turnUnitIdKey, turnUnitTypeKey };
var __wakaru_init_turn_unit_keys_initialized = false;
export function init_turn_unit_keys() {
if (__wakaru_init_turn_unit_keys_initialized) return;
__wakaru_init_turn_unit_keys_initialized = true;
"use strict";
init_dist();
turnUnitIdKey = createKey(Symbol("turnUnitId"), void 0);
turnUnitTypeKey = createKey(Symbol("turnUnitType"), void 0);

}
