import { p2e } from "./localSchedule.js";
import { IU, eb } from "./localScheduledTasks.js";
import { h } from "./tslib.es6.js";
import { bn } from "./workspace.js";
var h2e;
export { h2e };
var __wakaru__ct_initialized = false;
export function _ct() {
if (__wakaru__ct_initialized) return;
__wakaru__ct_initialized = true;
"use strict";
h(), IU(), p2e(), bn(), h2e = {
    schemaVersion: eb,
    tasks: []
};

}
