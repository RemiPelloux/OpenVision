import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { require_gray_matter } from "../../node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
var import_gray_matter, parseJavascriptFrontmatterAsPlaintext;
export { import_gray_matter, parseJavascriptFrontmatterAsPlaintext };
var __wakaru_init_gray_matter_initialized = false;
export function init_gray_matter() {
if (__wakaru_init_gray_matter_initialized) return;
__wakaru_init_gray_matter_initialized = true;
"use strict";
import_gray_matter = __toESM(require_gray_matter(), 1);
parseJavascriptFrontmatterAsPlaintext = ()=>{
    return {};
};

}
