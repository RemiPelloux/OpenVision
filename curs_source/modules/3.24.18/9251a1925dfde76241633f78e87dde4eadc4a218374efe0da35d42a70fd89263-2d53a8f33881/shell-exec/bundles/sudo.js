var isWindows3, SUDO_ALIAS;
export { SUDO_ALIAS, isWindows3 };
var __wakaru_init_sudo_initialized = false;
export function init_sudo() {
if (__wakaru_init_sudo_initialized) return;
__wakaru_init_sudo_initialized = true;
"use strict";
isWindows3 = process.platform === "win32";
SUDO_ALIAS = "alias sudo='sudo -A'";

}
