import { E } from "./tslib.es6.js";
var lms;
export { lms };
var __wakaru_IKg_initialized = false;
export function IKg() {
if (__wakaru_IKg_initialized) return;
__wakaru_IKg_initialized = true;
"use strict";
E(), lms = {
    "default-agent": {
        agentsVisible: !0,
        chatVisible: !0,
        editorsVisible: !0,
        panelVisible: !1,
        sidebarVisible: !1,
        sidebarLocation: "left",
        panelMaximized: !1
    },
    "default-editor": {
        agentsVisible: !1,
        chatVisible: !0,
        editorsVisible: !0,
        panelVisible: !1,
        sidebarVisible: !0,
        sidebarLocation: "right",
        panelMaximized: !1
    }
};

}
