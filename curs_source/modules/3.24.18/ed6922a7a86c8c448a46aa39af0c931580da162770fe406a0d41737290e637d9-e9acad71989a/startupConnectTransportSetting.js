import { S } from "./HVr.js";
import { iu, uh } from "./configurationRegistry.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { x } from "./tslib.es6.js";
var ono, Dvd;
export { Dvd, ono };
var __wakaru_Mvd_initialized = false;
export function Mvd() {
if (__wakaru_Mvd_initialized) return;
__wakaru_Mvd_initialized = true;
"use strict";
x(), rt(), uh(), rr(), ono = "cursor.experimental.startupConnectTransport", Dvd = "cursor.startupConnectTransport.gate", kn.as(iu.Configuration).registerConfiguration({
    id: "cursorStartupConnectTransport",
    properties: {
        [ono]: {
            type: "boolean",
            default: !1,
            scope: 1,
            included: !1,
            tags: [
                "experimental"
            ],
            description: S(1845, null)
        }
    }
});

}
