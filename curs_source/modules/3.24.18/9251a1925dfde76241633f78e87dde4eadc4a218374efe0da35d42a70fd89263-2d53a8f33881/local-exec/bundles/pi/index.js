import { init_bash2 } from "./bash.js";
import { init_edit2 } from "./edit.js";
import { init_find } from "./find.js";
import { init_grep3 } from "./grep.js";
import { init_ls3 } from "./ls.js";
import { init_read2 } from "./read.js";
import { init_write2 } from "./write.js";
var __wakaru_init_pi_initialized = false;
export function init_pi() {
if (__wakaru_init_pi_initialized) return;
__wakaru_init_pi_initialized = true;
"use strict";
init_bash2();
init_edit2();
init_find();
init_grep3();
init_ls3();
init_read2();
init_write2();

}
