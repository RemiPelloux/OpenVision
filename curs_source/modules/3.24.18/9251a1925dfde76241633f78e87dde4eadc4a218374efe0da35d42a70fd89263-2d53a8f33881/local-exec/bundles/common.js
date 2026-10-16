import { resolvePath } from "../../dist_exports.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_promises9, resolveRealPath;
export { import_promises9, resolveRealPath };
var __wakaru_init_common3_initialized = false;
export function init_common3() {
if (__wakaru_init_common3_initialized) return;
__wakaru_init_common3_initialized = true;
"use strict";
import_promises9 = require("node:fs/promises");
init_dist3();
init_dist3();
resolveRealPath = async (path64)=>{
    const resolved = resolvePath(path64);
    try {
        return await (0, import_promises9.realpath)(resolved);
    } catch  {
        return resolved;
    }
};

}
