import { h } from "./tslib.es6.js";
var mV, pV, PA, NA, hV, DA, RS, gV, OA, fV, LA, _V, vs, CS, Ud, un, IS, AS;
export { AS, CS, DA, IS, LA, NA, OA, PA, RS, Ud, _V, fV, gV, hV, mV, pV, un, vs };
var __wakaru_uh_initialized = false;
export function uh() {
if (__wakaru_uh_initialized) return;
__wakaru_uh_initialized = true;
"use strict";
h(), mV = "agent-harness", pV = "versions", PA = "sequence", NA = "current", hV = "channel", DA = "hosts", RS = 1, gV = "last-served.json", OA = 1, fV = "serving", LA = 1, _V = "local", vs = "floor", CS = 1, Ud = /^[0-9a-f]{64}$/, un = class extends Error {
    constructor(e, t){
        super(e), this.check = t, this.name = "ManifestError";
    }
}, IS = [
    "dogfood",
    "candidate",
    "stable"
], AS = {
    bytes: 64 * 1024,
    label: 200,
    publishedAt: 64,
    reason: 1e3
};

}
