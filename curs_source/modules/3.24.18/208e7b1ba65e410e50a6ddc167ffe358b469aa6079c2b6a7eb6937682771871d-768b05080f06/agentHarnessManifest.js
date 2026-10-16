import { uh } from "./agentHarnessLayout.js";
import { h } from "./tslib.es6.js";
var wa, NS, qt, EV, bV, RV, CV, IV, AV;
export { AV, CV, EV, IV, NS, RV, bV, qt, wa };
var __wakaru_MV_initialized = false;
export function MV() {
if (__wakaru_MV_initialized) return;
__wakaru_MV_initialized = true;
"use strict";
h(), uh(), wa = "manifest.json", NS = 1, qt = {
    manifestBytes: 1024 * 1024,
    files: 1024,
    fileBytes: 512 * 1024 * 1024,
    name: 255,
    label: 200,
    commit: 128,
    builtAt: 64,
    mainVersion: 64,
    kind: 32,
    list: 256,
    capability: 64,
    packDepth: 8,
    packBytes: 64 * 1024,
    requiredRevision: 1e6
}, EV = /^(@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/, bV = /\.(?:node|dylib|dll)$|\.so(?:\.\d+)*$/i, RV = /^[a-z0-9][a-z0-9-]*$/, CV = /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i, IV = /[<>:"|?*]/, AV = /^(\d{1,9})\.(\d{1,9})\.(\d{1,9})(?:-pre\.(\d{1,9})(?:\.patch\.(\d{1,9}))?)?$/;

}
