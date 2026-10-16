import { init_mount_alias } from "./mount-alias.js";
import { init_paths3 } from "./paths.js";
var __wakaru_init_mount_spec_initialized = false;
export function init_mount_spec() {
if (__wakaru_init_mount_spec_initialized) return;
__wakaru_init_mount_spec_initialized = true;
"use strict";
init_mount_alias();
init_paths3();

}
