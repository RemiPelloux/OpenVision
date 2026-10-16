import { init_common9 } from "../../common.js";
import { init_common15 } from "./common.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var parametersSchema12, parametersSchema0819;
export { parametersSchema0819, parametersSchema12 };
var __wakaru_init_multi_str_replace_initialized = false;
export function init_multi_str_replace() {
if (__wakaru_init_multi_str_replace_initialized) return;
__wakaru_init_multi_str_replace_initialized = true;
"use strict";
init_zod();
init_common9();
init_common15();
parametersSchema12 = external_exports.object({
    file_path: external_exports.string().describe("The absolute path to the file to modify"),
    edits: external_exports.array(external_exports.object({
        old_string: external_exports.string().describe("The text to replace"),
        new_string: external_exports.string().describe("The text to replace it with"),
        replace_all: external_exports.boolean().optional().describe("Replace all occurences of old_string (default false)")
    })).describe("Array of edit operations to perform sequentially on the file")
});
parametersSchema0819 = external_exports.object({
    file_path: external_exports.string().describe("The path to the file to modify. Always specify the target file as the first argument. You can use either a relative path in the workspace or an absolute path."),
    edits: external_exports.array(external_exports.object({
        old_string: external_exports.string().describe("The text to replace"),
        new_string: external_exports.string().describe("The text to replace it with"),
        replace_all: external_exports.boolean().optional().describe("Replace all occurences of old_string (default false)")
    })).describe("Array of edit operations to perform sequentially on the file")
});

}
