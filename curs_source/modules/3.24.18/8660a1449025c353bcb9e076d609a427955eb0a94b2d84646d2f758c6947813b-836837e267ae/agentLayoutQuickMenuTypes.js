import { D } from "./Iwo.js";
import { xKg } from "./Ycg.js";
import { IKg, lms } from "./defaultLayoutPresets.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { wu } from "./utilities_3.js";
var ekl, r2i, cms;
export { cms, ekl, r2i };
var __wakaru_s2i_initialized = false;
export function s2i() {
if (__wakaru_s2i_initialized) return;
__wakaru_s2i_initialized = true;
"use strict";
E(), Bt(), wu(), IKg(), ekl = "cursor/agentLayout.quickMenu.customLayouts", r2i = "cursor/agentLayout.quickMenu.lastSelectedLayoutId", cms = [
    {
        id: "default-agent",
        name: D(2948, null),
        state: xKg(lms["default-agent"]),
        type: "default"
    },
    {
        id: "default-editor",
        name: D(2949, null),
        state: xKg(lms["default-editor"]),
        type: "default"
    },
    {
        id: "default-zen",
        name: D(2950, null),
        state: {
            agentsVisible: !1,
            chatVisible: !1,
            editorsVisible: !0,
            panelVisible: !1,
            sidebarVisible: !1,
            sidebarLocation: "left",
            partWidths: {},
            panelMaximized: !1
        },
        type: "default"
    },
    {
        id: "default-browser",
        name: D(2951, null),
        state: {
            agentsVisible: !1,
            chatVisible: !0,
            editorsVisible: !0,
            panelVisible: !1,
            sidebarVisible: !1,
            sidebarLocation: "left",
            partWidths: {},
            panelMaximized: !1
        },
        type: "default"
    }
];

}
