import { dX } from "./full_self_driving_pb.js";
import { PEe } from "./glass-fsd-pr-url.js";
import { E } from "./tslib.es6.js";
var e7i, t7i, km_, wm_, Cm_, Tm_;
export { Cm_, Tm_, e7i, km_, t7i, wm_ };
var __wakaru_NFC_initialized = false;
export function NFC() {
if (__wakaru_NFC_initialized) return;
__wakaru_NFC_initialized = true;
"use strict";
E(), dX(), PEe(), e7i = "glass-command-fsd-cloud", t7i = "glass-command-fsd-local", km_ = "glass-command-fsd", wm_ = "glass-action-fsd", Cm_ = /^--runtime=(local|cloud)$/i, Tm_ = /^--mode=(suggest|apply)$/i;

}
