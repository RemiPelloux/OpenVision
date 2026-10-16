var MACOS_PROTECTED_HOME_FOLDERS, MACOS_VOLUMES_FOLDER;
export { MACOS_PROTECTED_HOME_FOLDERS, MACOS_VOLUMES_FOLDER };
var __wakaru_init_scan_roots_initialized = false;
export function init_scan_roots() {
if (__wakaru_init_scan_roots_initialized) return;
__wakaru_init_scan_roots_initialized = true;
"use strict";
MACOS_PROTECTED_HOME_FOLDERS = [
    "Desktop",
    "Documents",
    "Downloads",
    "Music",
    "Movies",
    "Pictures",
    "Library",
    ".Trash"
];
MACOS_VOLUMES_FOLDER = "/Volumes";

}
