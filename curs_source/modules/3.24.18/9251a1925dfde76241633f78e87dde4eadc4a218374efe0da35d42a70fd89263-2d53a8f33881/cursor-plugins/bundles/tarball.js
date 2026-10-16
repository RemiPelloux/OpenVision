import { init_manifest_parser } from "./manifest-parser.js";
import { init_index_min } from "../../node_modules/.pnpm/tar@7.5.21/node_modules/tar/dist/esm/index.min.js";
var __wakaru_init_tarball_initialized = false;
export function init_tarball() {
if (__wakaru_init_tarball_initialized) return;
__wakaru_init_tarball_initialized = true;
"use strict";
init_index_min();
init_manifest_parser();

}
