import { Ec } from "./ripgrep.ts";
import { Xr } from "./sandbox.ts";
import { h } from "./tslib.es6.js";
import { Yt } from "./types.ts";
var Ui;
export { Ui };
var __wakaru_Jr_initialized = false;
export function Jr() {
if (__wakaru_Jr_initialized) return;
__wakaru_Jr_initialized = true;
"use strict";
h(), Ec(), Xr(), Yt(), Ui = `IFS= builtin read -r -d '' __cursor_command <&5; exec 5<&-; builtin set -- "$__cursor_command"; builtin unset __cursor_command; `;

}
