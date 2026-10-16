var ignoreOverride, defaultOptions, getDefaultOptions;
export { defaultOptions, getDefaultOptions, ignoreOverride };
var __wakaru_init_Options_initialized = false;
export function init_Options() {
if (__wakaru_init_Options_initialized) return;
__wakaru_init_Options_initialized = true;
ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
};
getDefaultOptions = (options2)=>typeof options2 === "string" ? {
        ...defaultOptions,
        name: options2
    } : {
        ...defaultOptions,
        ...options2
    };

}
