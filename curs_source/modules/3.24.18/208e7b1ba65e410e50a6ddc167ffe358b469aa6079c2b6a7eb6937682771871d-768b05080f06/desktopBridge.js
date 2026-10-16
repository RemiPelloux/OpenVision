import { h } from "./tslib.es6.js";
var OG, LG, UG, xG, FG, SA, WG;
export { FG, LG, OG, SA, UG, WG, xG };
var __wakaru_Z7e_initialized = false;
export function Z7e() {
if (__wakaru_Z7e_initialized) return;
__wakaru_Z7e_initialized = true;
"use strict";
h(), OG = "cursor.desktopBridge.enabled", LG = "cursor/desktopBridgeUserEnabled", UG = "cursor.desktopBridge.rendererInvocationToken", xG = "composer.desktopBridge.listThreads", FG = "composer.desktopBridge.sendMessage", SA = "Desktop bridge list invocation is not authorized", WG = class extends Error {
    constructor(){
        super(SA), this.name = "DesktopBridgeListUnauthorizedError";
    }
};

}
