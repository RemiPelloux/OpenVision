import { SR } from "./async_3.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var N7i, Ny_, Ly_, z6s, FSc, L7i, BSc;
export { BSc, FSc, L7i, Ly_, N7i, Ny_, z6s };
var __wakaru_NGC_initialized = false;
export function NGC() {
if (__wakaru_NGC_initialized) return;
__wakaru_NGC_initialized = true;
"use strict";
E(), Mt(), SR(), N7i = {
    base: {
        k1ekBW: "glass-fekmg9",
        kIyJzY: "glass-neo3ci",
        kAMwcw: "glass-18dzw4d",
        $$css: !0
    },
    dontAskAgainButton: {
        kEafiO: "glass-972fbf",
        ke9TFa: "glass-10w94by",
        kt9PQ7: "glass-1qhh985",
        k2ei4v: "glass-14e42zd",
        kPef9Z: "glass-1ejq31n",
        k8ry5P: "glass-18oe1m7",
        kfdmCh: "glass-1sy0etr",
        kVhnKS: "glass-stzfhl",
        $$css: !0
    },
    flushLeadingTextButton: {
        keTefX: "glass-wtk18v",
        $$css: !0
    }
}, Ny_ = [
    {
        id: "commit",
        label: "Commit changes",
        description: "Create a checkpoint commit with your current changes"
    },
    {
        id: "stash",
        label: "Stash changes",
        description: "Save your changes to a stash and restore them later"
    },
    {
        id: "discard",
        label: "Discard changes",
        description: "Delete your current uncommitted changes before switching"
    }
], Ly_ = [
    {
        id: "cloud",
        label: "Continue in cloud and leave changes on this branch undisturbed"
    },
    {
        id: "commit",
        label: "Commit current changes to checkpoint"
    },
    {
        id: "stash",
        label: "Stash and save your changes so you can restore them later"
    },
    {
        id: "discard",
        label: "Discard your current uncommitted changes"
    }
], z6s = 25, FSc = 10, L7i = "/", BSc = "\u2026";

}
