import { GM } from "./automations_pb.js";
import { pd } from "./background_composer_pb.js";
import { Du } from "./dashboard_pb.js";
import { E } from "./tslib.es6.js";
import { Hu } from "./utils_pb.js";
var __wakaru_w2t_initialized = false;
export function w2t() {
if (__wakaru_w2t_initialized) return;
__wakaru_w2t_initialized = true;
"use strict";
E(), GM(), Du(), pd(), Hu();

}
