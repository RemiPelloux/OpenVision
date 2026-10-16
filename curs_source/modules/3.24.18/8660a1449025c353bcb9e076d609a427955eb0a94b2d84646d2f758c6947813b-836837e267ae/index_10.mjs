import { rbv } from "./anticipate.mjs";
import { wYl } from "./back.mjs";
import { obv } from "./circ.mjs";
import { Om0 } from "./clamp.mjs";
import { cbv } from "./ease.mjs";
import { X_v } from "./errors.mjs";
import { Fm0 } from "./global-config.mjs";
import { dbv } from "./is-bezier-definition.mjs";
import { Xm0 } from "./is-easing-array.mjs";
import { Bm0 } from "./is-numerical-string.mjs";
import { jm0 } from "./is-object.mjs";
import { $m0 } from "./is-zero-value-string.mjs";
import { Zm0 } from "./map.mjs";
import { Hm0 } from "./memo.mjs";
import { pYl } from "./noop.mjs";
import { Wm0 } from "./pipe.mjs";
import { Gm0 } from "./progress.mjs";
import { qm0 } from "./subscription-manager.mjs";
import { zm0 } from "./time-conversion.mjs";
import { E } from "./tslib.es6.js";
import { Vm0 } from "./velocity-per-second.mjs";
import { Km0 } from "./warn-once.mjs";
var __wakaru_xR_initialized = false;
export function xR() {
if (__wakaru_xR_initialized) return;
__wakaru_xR_initialized = true;
E(), Om0(), X_v(), Fm0(), Bm0(), jm0(), $m0(), Hm0(), pYl(), Wm0(), Gm0(), qm0(), zm0(), Vm0(), Km0(), rbv(), wYl(), obv(), cbv(), dbv(), Xm0(), Zm0();

}
