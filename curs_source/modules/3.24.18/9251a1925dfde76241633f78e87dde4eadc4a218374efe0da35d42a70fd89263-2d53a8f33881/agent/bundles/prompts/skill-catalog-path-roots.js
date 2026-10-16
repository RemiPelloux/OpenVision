var SKILL_CATALOG_PATH_ALIAS_NOTE, SKILL_FILE_NAME, ALIAS_LENGTH, ROOT_LINE_OVERHEAD, ALIASING_OVERHEAD, UNLISTABLE_PATH;
export { ALIASING_OVERHEAD, ALIAS_LENGTH, ROOT_LINE_OVERHEAD, SKILL_CATALOG_PATH_ALIAS_NOTE, SKILL_FILE_NAME, UNLISTABLE_PATH };
var __wakaru_init_skill_catalog_path_roots_initialized = false;
export function init_skill_catalog_path_roots() {
if (__wakaru_init_skill_catalog_path_roots_initialized) return;
__wakaru_init_skill_catalog_path_roots_initialized = true;
"use strict";
SKILL_CATALOG_PATH_ALIAS_NOTE = "A path that starts with an alias ($0, $1, ...) continues from the directory listed for that alias.";
SKILL_FILE_NAME = "SKILL.md";
ALIAS_LENGTH = 2;
ROOT_LINE_OVERHEAD = ALIAS_LENGTH + 4;
ALIASING_OVERHEAD = SKILL_CATALOG_PATH_ALIAS_NOTE.length + 2;
UNLISTABLE_PATH = / {2}|[\r\n]|^\s|\s[\\/]/;

}
