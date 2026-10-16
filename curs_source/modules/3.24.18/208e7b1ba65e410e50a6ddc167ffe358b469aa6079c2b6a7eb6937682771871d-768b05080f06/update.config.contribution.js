import { E, Jr, ua } from "./configurationRegistry.js";
import { Ne } from "./nls.js";
import { Xs, ee, oe } from "./platform.js";
import { pr, ri } from "./platform_2.js";
import { h } from "./tslib.es6.js";
import { Ym, eT, tT } from "./updateReleaseTrack.js";
var n3;
export { n3 };
var __wakaru_Rxe_initialized = false;
export function Rxe() {
if (__wakaru_Rxe_initialized) return;
__wakaru_Rxe_initialized = true;
"use strict";
h(), oe(), Ne(), ua(), ri(), Ym(), n3 = pr.as(Jr.Configuration), n3.registerConfiguration({
    id: "update",
    order: 15,
    title: E(2610, null),
    type: "object",
    properties: {
        "update.mode": {
            type: "string",
            enum: [
                "none",
                "manual",
                "start",
                "default",
                "silentlyApplyOnQuit"
            ],
            default: "default",
            scope: 1,
            markdownDescription: E(2611, null),
            tags: [
                "usesOnlineServices"
            ],
            description: E(2612, null),
            enumDescriptions: [
                E(2613, null),
                E(2614, null),
                E(2615, null),
                E(2616, null),
                E(2617, null)
            ],
            policy: {
                name: "UpdateMode",
                minimumVersion: "1.67"
            }
        },
        "update.channel": {
            type: "string",
            default: "default",
            scope: 1,
            description: E(2618, null),
            deprecationMessage: E(2619, null, "update.mode")
        },
        "update.enableWindowsBackgroundUpdates": {
            type: "boolean",
            default: !0,
            scope: 1,
            title: E(2620, null),
            description: E(2621, null),
            included: ee && !Xs
        },
        [eT]: {
            type: "string",
            default: "stable",
            scope: 1,
            description: E(2622, null)
        },
        [tT]: {
            type: "string",
            default: "",
            scope: 1,
            description: E(2623, null)
        }
    }
});

}
