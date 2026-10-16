import { protoCamelCase } from "../../../../../../../../../external_exports.js";
var fieldJsonName, reservedObjectProperties, reservedMessageProperties, fallback, safeMessageProperty, safeObjectProperty;
export { fallback, fieldJsonName, reservedMessageProperties, reservedObjectProperties, safeMessageProperty, safeObjectProperty };
var __wakaru_init_names_initialized = false;
export function init_names() {
if (__wakaru_init_names_initialized) return;
__wakaru_init_names_initialized = true;
fieldJsonName = protoCamelCase;
reservedObjectProperties = new Set([
    "constructor",
    "toString",
    "toJSON",
    "valueOf"
]);
reservedMessageProperties = new Set([
    "getType",
    "clone",
    "equals",
    "fromBinary",
    "fromJson",
    "fromJsonString",
    "toBinary",
    "toJson",
    "toJsonString",
    "toObject"
]);
fallback = (name17)=>`${name17}$`;
safeMessageProperty = (name17)=>{
    if (reservedMessageProperties.has(name17)) {
        return fallback(name17);
    }
    return name17;
};
safeObjectProperty = (name17)=>{
    if (reservedObjectProperties.has(name17)) {
        return fallback(name17);
    }
    return name17;
};

}
