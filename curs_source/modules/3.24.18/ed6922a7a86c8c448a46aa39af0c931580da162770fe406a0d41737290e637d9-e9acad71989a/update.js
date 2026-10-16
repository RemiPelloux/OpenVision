import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var bFd, FD, Pao, zGi;
export { FD, Pao, bFd, zGi };
var __wakaru_L6_initialized = false;
export function L6() {
if (__wakaru_L6_initialized) return;
__wakaru_L6_initialized = true;
"use strict";
x(), gr(), Ze(), bFd = {
    Uninitialized: {
        type: "uninitialized"
    },
    Disabled: (e)=>({
            type: "disabled",
            reason: e
        }),
    Idle: (e, t)=>({
            type: "idle",
            updateType: e,
            error: t
        }),
    CheckingForUpdates: (e)=>({
            type: "checking for updates",
            explicit: e
        }),
    AvailableForDownload: (e)=>({
            type: "available for download",
            update: e
        }),
    PackageUpdateAvailable: (e, t)=>({
            type: "available for download",
            update: e,
            packageManager: t
        }),
    Downloading: {
        type: "downloading"
    },
    Downloaded: (e)=>({
            type: "downloaded",
            update: e
        }),
    Updating: (e)=>({
            type: "updating",
            update: e
        }),
    Ready: (e)=>({
            type: "ready",
            update: e
        })
}, FD = vn("updateService"), Pao = "cursor.update.events", zGi = "cursor.update.lastInstallFailed";

}
