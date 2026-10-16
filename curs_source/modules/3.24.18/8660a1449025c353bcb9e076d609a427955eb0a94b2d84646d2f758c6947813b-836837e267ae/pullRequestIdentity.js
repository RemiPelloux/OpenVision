import { kl } from "./browser.ts";
import { nl } from "./index.ts";
import { GIo, qIo } from "./pull-request-review-links.ts";
import { E } from "./tslib.es6.js";
var M5m, Pqa, LEn, D5m;
export { D5m, LEn, M5m, Pqa };
var __wakaru_Mk_initialized = false;
export function Mk() {
if (__wakaru_Mk_initialized) return;
__wakaru_Mk_initialized = true;
"use strict";
E(), nl(), kl(), M5m = new Set([
    "github.com",
    "www.github.com"
]), Pqa = /^[A-Za-z0-9_.-]+$/, LEn = new Map([
    [
        GIo,
        "origin.cursor.com"
    ],
    [
        qIo,
        "origin-staging.cursor.com"
    ]
]), D5m = new Set([
    "app.graphite.com",
    "app.graphite.dev"
]);

}
