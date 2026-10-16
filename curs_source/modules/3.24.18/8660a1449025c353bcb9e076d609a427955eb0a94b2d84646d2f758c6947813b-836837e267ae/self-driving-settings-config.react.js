import { Rs } from "./authenticationService.js";
import { dX } from "./full_self_driving_pb.js";
import { ODs } from "./glass-automations-runtime.react.js";
import { rsc } from "./glass-settings-search-index-mode.react.js";
import { Mt } from "./index_197.js";
import { eh } from "./index_221.js";
import { iG0 } from "./self-driving-settings-query-client.js";
import { dN } from "./settingsScrollIds.js";
import { E } from "./tslib.es6.js";
import { DLn } from "./use-delayed-flag.react.js";
import { uG0 } from "./use-self-driving-settings.react.js";
import { In } from "./use-service.react_2.js";
import { HP } from "./use-workspace.react_2.js";
var R4v;
export { R4v };
var __wakaru_SG0_initialized = false;
export function SG0() {
if (__wakaru_SG0_initialized) return;
__wakaru_SG0_initialized = true;
"use strict";
E(), Mt(), eh(), dX(), dN(), Rs(), DLn(), In(), HP(), ODs(), rsc(), iG0(), uG0(), R4v = [
    {
        value: "suggest",
        label: "Suggest Changes"
    },
    {
        value: "apply",
        label: "Apply Changes"
    }
];

}
