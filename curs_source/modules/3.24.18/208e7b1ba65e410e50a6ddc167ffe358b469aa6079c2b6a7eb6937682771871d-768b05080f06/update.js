import { Q, ne } from "./instantiation.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
var xe, tl, nl, npe;
export { nl, npe, tl, xe };
var __wakaru_Eo_initialized = false;
export function Eo() {
if (__wakaru_Eo_initialized) return;
__wakaru_Eo_initialized = true;
"use strict";
h(), Ze(), ne(), xe = {
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
}, tl = Q("updateService"), nl = "cursor.update.events", npe = "cursor.update.lastInstallFailed";

}
