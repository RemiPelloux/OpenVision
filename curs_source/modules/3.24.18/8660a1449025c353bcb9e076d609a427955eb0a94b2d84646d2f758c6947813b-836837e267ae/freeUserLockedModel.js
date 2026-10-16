import { E } from "./tslib.es6.js";
var uCl, fef, vef, _ef;
export { _ef, fef, uCl, vef };
var __wakaru_bef_initialized = false;
export function bef() {
if (__wakaru_bef_initialized) return;
__wakaru_bef_initialized = true;
"use strict";
E(), uCl = {
    modelId: "default",
    parameters: [],
    legacyModelName: "default",
    displayName: "Auto",
    maxMode: !1
}, fef = {
    modelId: "composer-2.5",
    parameters: [
        {
            id: "fast",
            value: "true"
        }
    ],
    legacyModelName: "composer-2.5-fast",
    displayName: "Composer 2.5 Fast",
    maxMode: !1
}, vef = {
    modelId: "composer-2.5",
    parameters: [
        {
            id: "fast",
            value: "false"
        }
    ],
    legacyModelName: "composer-2.5",
    displayName: "Composer 2.5",
    maxMode: !1
}, _ef = {
    modelId: "grok-4.6",
    parameters: [
        {
            id: "effort",
            value: "medium"
        },
        {
            id: "fast",
            value: "false"
        }
    ],
    legacyModelName: "cursor-grok-4.6-medium",
    displayName: "Cursor Grok 4.6 Medium",
    maxMode: !1
};

}
