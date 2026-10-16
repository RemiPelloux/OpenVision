import { D } from "./Iwo.js";
import { Vg, gp } from "./configurationRegistry.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
var DMo, kud;
export { DMo, kud };
var __wakaru_wud_initialized = false;
export function wud() {
if (__wakaru_wud_initialized) return;
__wakaru_wud_initialized = true;
"use strict";
E(), Bt(), Vg(), Eo(), DMo = "cursor.experimental.startupConnectTransport", kud = "cursor.startupConnectTransport.gate", Fi.as(gp.Configuration).registerConfiguration({
    id: "cursorStartupConnectTransport",
    properties: {
        [DMo]: {
            type: "boolean",
            default: !1,
            scope: 1,
            included: !1,
            tags: [
                "experimental"
            ],
            description: D(1845, null)
        }
    }
});

}
