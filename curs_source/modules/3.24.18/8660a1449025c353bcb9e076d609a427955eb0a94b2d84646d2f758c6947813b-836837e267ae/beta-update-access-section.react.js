import { Di } from "./Iwo.js";
import { Mt } from "./index_197.js";
import { qc } from "./opener.js";
import { hu } from "./productService.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { E } from "./tslib.es6.js";
import { IVe } from "./updateReleaseTrack.js";
import { EDe } from "./use-config-value-read-write.react.js";
import { S1s } from "./use-experiment.react.js";
import { TQf } from "./use-experiments-initialized.react.js";
import { D$ } from "./use-feature-gate.react.js";
import { Lg } from "./use-service.react.js";
var z$l, xQf, V$l;
export { V$l, xQf, z$l };
var __wakaru_cjw_initialized = false;
export function cjw() {
if (__wakaru_cjw_initialized) return;
__wakaru_cjw_initialized = true;
"use strict";
E(), Mt(), Di(), el(), Um(), IVe(), hu(), EDe(), S1s(), D$(), TQf(), Lg(), qc(), z$l = [
    {
        label: "Default",
        id: "stable",
        allow: [
            "enterprise",
            "self-serve"
        ]
    },
    {
        label: "Early Access",
        id: "prerelease",
        allow: [
            "self-serve"
        ]
    },
    {
        label: "Nightly",
        id: "dev",
        allow: [
            "self-serve"
        ]
    },
    {
        label: "Dogfood",
        id: "dogfood",
        allow: []
    },
    {
        label: "Candidate",
        id: "candidate",
        allow: []
    }
], xQf = new Set([
    "dev",
    "dogfood",
    "candidate"
]), V$l = "Update Access is managed by internal release-track policy.";

}
