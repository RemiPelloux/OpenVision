import { Di } from "./Iwo.js";
import { pWe } from "./LYd.js";
import { ovv } from "./browser-bookmark-favicon.react.js";
import { rOn } from "./browser-bookmark-utils.js";
import { YCe } from "./browserAutomationService.js";
import { HA } from "./glass-menu-dimensions.js";
import { iv } from "./index_16.js";
import { Mt } from "./index_197.js";
import { lvv } from "./rename-bookmark-dialog.react.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var DKl, mAs, pvv, mvv, gvv;
export { DKl, gvv, mAs, mvv, pvv };
var __wakaru_Wh0_initialized = false;
export function Wh0() {
if (__wakaru_Wh0_initialized) return;
__wakaru_Wh0_initialized = true;
"use strict";
E(), Mt(), iv(), Di(), YCe(), HA(), ovv(), rOn(), lvv(), DKl = {
    scrollHeight: {
        kZKoxP: "glass-5yr21d",
        $$css: !0
    }
}, mAs = pWe("bookmark-bar-item", ()=>ze.discriminatedUnion("itemType", [
        ze.object({
            itemType: ze.literal("bookmark"),
            url: ze.string()
        }),
        ze.object({
            folderId: ze.string(),
            itemType: ze.literal("folder")
        })
    ])), pvv = "var(--cursor-bg-elevated, var(--vscode-menu-background, var(--vscode-dropdown-background)))", mvv = "1px solid var(--cursor-stroke-secondary, var(--vscode-menu-border))", gvv = "0 8px 24px rgb(0 0 0 / 18%)";

}
