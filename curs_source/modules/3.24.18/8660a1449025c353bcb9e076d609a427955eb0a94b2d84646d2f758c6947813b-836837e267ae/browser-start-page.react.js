import { ovv } from "./browser-bookmark-favicon.react.js";
import { rOn } from "./browser-bookmark-utils.js";
import { YCe } from "./browserAutomationService.js";
import { Dxi } from "./browserNavigation.js";
import { Mt } from "./index_197.js";
import { Dec } from "./time-buckets.js";
import { E } from "./tslib.es6.js";
import { JM } from "./use-now.react.js";
import { In } from "./use-service.react_2.js";
var UAv, jAv, $Av;
export { $Av, UAv, jAv };
var __wakaru_AR0_initialized = false;
export function AR0() {
if (__wakaru_AR0_initialized) return;
__wakaru_AR0_initialized = true;
"use strict";
E(), Mt(), YCe(), Dxi(), JM(), In(), Dec(), ovv(), rOn(), UAv = 5, jAv = /\bERR_[A-Z0-9_]+\b/, $Av = [
    {
        id: "default-cursor-changelog",
        title: "Cursor Changelog",
        host: "cursor.com/changelog",
        url: "https://cursor.com/changelog",
        leading: {
            type: "cursor"
        }
    },
    {
        id: "default-cursor-docs",
        title: "Cursor Docs",
        host: "cursor.com/docs",
        url: "https://cursor.com/docs",
        leading: {
            type: "cursor"
        }
    }
];

}
