import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
import { init_label_middleware } from "./label-middleware.js";
var defaultMetricsBackend, metricsKey;
export { defaultMetricsBackend, metricsKey };
var __wakaru_init_dist4_initialized = false;
export function init_dist4() {
if (__wakaru_init_dist4_initialized) return;
__wakaru_init_dist4_initialized = true;
"use strict";
init_dist();
init_label_middleware();
defaultMetricsBackend = {
    record: ()=>{},
    increment: ()=>{},
    gauge: ()=>{},
    histogram: ()=>{}
};
metricsKey = createKey(Symbol("metricsBackend"), defaultMetricsBackend);

}
