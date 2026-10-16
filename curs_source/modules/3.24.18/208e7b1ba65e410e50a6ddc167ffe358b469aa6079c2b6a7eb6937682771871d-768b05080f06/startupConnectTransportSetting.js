import { E, Jr, ua } from "./configurationRegistry.js";
import { Ne } from "./nls.js";
import { pr, ri } from "./platform_2.js";
import { h } from "./tslib.es6.js";
var mE, _ke;
export { _ke, mE };
var __wakaru_Rit_initialized = false;
export function Rit() {
if (__wakaru_Rit_initialized) return;
__wakaru_Rit_initialized = true;
"use strict";
h(), Ne(), ua(), ri(), mE = "cursor.experimental.startupConnectTransport", _ke = "cursor.startupConnectTransport.gate", pr.as(Jr.Configuration).registerConfiguration({
    id: "cursorStartupConnectTransport",
    properties: {
        [mE]: {
            type: "boolean",
            default: !1,
            scope: 1,
            included: !1,
            tags: [
                "experimental"
            ],
            description: E(1845, null)
        }
    }
});

}
