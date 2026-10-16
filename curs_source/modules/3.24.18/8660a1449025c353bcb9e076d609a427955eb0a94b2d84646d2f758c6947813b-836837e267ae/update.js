import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var $Cm, SL, n$a, wXr;
export { $Cm, SL, n$a, wXr };
var __wakaru_d$_initialized = false;
export function d$() {
if (__wakaru_d$_initialized) return;
__wakaru_d$_initialized = true;
"use strict";
E(), To(), It(), $Cm = {
    Uninitialized: {
        type: "uninitialized"
    },
    Disabled: (t)=>({
            type: "disabled",
            reason: t
        }),
    Idle: (t, e)=>({
            type: "idle",
            updateType: t,
            error: e
        }),
    CheckingForUpdates: (t)=>({
            type: "checking for updates",
            explicit: t
        }),
    AvailableForDownload: (t)=>({
            type: "available for download",
            update: t
        }),
    PackageUpdateAvailable: (t, e)=>({
            type: "available for download",
            update: t,
            packageManager: e
        }),
    Downloading: {
        type: "downloading"
    },
    Downloaded: (t)=>({
            type: "downloaded",
            update: t
        }),
    Updating: (t)=>({
            type: "updating",
            update: t
        }),
    Ready: (t)=>({
            type: "ready",
            update: t
        })
}, SL = jn("updateService"), n$a = "cursor.update.events", wXr = "cursor.update.lastInstallFailed";

}
