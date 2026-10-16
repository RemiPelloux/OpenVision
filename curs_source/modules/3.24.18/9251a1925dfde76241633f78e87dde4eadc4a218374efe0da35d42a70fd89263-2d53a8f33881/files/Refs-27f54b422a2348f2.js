import { getDefaultOptions, init_Options } from "./Options.js";
var getRefs;
export { getRefs };
var __wakaru_init_Refs_initialized = false;
export function init_Refs() {
if (__wakaru_init_Refs_initialized) return;
__wakaru_init_Refs_initialized = true;
init_Options();
getRefs = (options2)=>{
    const _options = getDefaultOptions(options2);
    const currentPath = _options.name !== void 0 ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        currentPath,
        propertyPath: void 0,
        seen: new Map(Object.entries(_options.definitions).map(([name17, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name17
                    ],
                    jsonSchema: void 0
                }
            ]))
    };
};

}
