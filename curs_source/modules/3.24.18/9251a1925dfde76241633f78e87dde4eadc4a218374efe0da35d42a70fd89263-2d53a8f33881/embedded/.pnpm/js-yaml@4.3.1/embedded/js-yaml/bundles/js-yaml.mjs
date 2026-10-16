import { getDefaultExportFromCjs, requireJsYaml } from "../../../../../../dist_exports2.js";
var jsYaml, loader, common, dumper, jsYamlExports, yaml2, Type2, Schema, FAILSAFE_SCHEMA, JSON_SCHEMA, CORE_SCHEMA, DEFAULT_SCHEMA, load, loadAll, dump, YAMLException, types2, safeLoad, safeLoadAll, safeDump;
export { CORE_SCHEMA, DEFAULT_SCHEMA, FAILSAFE_SCHEMA, JSON_SCHEMA, Schema, Type2, YAMLException, common, dump, dumper, jsYaml, jsYamlExports, load, loadAll, loader, safeDump, safeLoad, safeLoadAll, types2, yaml2 };
var __wakaru_init_js_yaml_initialized = false;
export function init_js_yaml() {
if (__wakaru_init_js_yaml_initialized) return;
__wakaru_init_js_yaml_initialized = true;
jsYaml = {};
loader = {};
common = {};
dumper = {};
jsYamlExports = requireJsYaml();
yaml2 = getDefaultExportFromCjs(jsYamlExports);
({ Type: Type2, Schema, FAILSAFE_SCHEMA, JSON_SCHEMA, CORE_SCHEMA, DEFAULT_SCHEMA, load, loadAll, dump, YAMLException, types: types2, safeLoad, safeLoadAll, safeDump } = yaml2);

}
