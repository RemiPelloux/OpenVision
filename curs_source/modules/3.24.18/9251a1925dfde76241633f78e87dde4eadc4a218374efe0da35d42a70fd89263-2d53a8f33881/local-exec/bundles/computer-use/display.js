import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_child_process9, import_node_util8, execFileAsync3, execFileUtf8Async, DEFAULT_COMPUTER_USE_API_WIDTH, DEFAULT_COMPUTER_USE_DISPLAY_WIDTH, DEFAULT_COMPUTER_USE_DISPLAY_HEIGHT;
export { DEFAULT_COMPUTER_USE_API_WIDTH, DEFAULT_COMPUTER_USE_DISPLAY_HEIGHT, DEFAULT_COMPUTER_USE_DISPLAY_WIDTH, execFileAsync3, execFileUtf8Async, import_node_child_process9, import_node_util8 };
var __wakaru_init_display_initialized = false;
export function init_display() {
if (__wakaru_init_display_initialized) return;
__wakaru_init_display_initialized = true;
"use strict";
import_node_child_process9 = require("node:child_process");
import_node_util8 = require("node:util");
init_dist3();
execFileAsync3 = (0, import_node_util8.promisify)(import_node_child_process9.execFile);
execFileUtf8Async = execFileAsync3;
DEFAULT_COMPUTER_USE_API_WIDTH = 1280;
DEFAULT_COMPUTER_USE_DISPLAY_WIDTH = 1920;
DEFAULT_COMPUTER_USE_DISPLAY_HEIGHT = 1200;

}
