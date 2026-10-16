import { init_assert } from "./assert.js";
var enumTypeSymbol, pendingEnumType;
export { enumTypeSymbol, pendingEnumType };
var __wakaru_init_enum_initialized = false;
export function init_enum() {
if (__wakaru_init_enum_initialized) return;
__wakaru_init_enum_initialized = true;
init_assert();
enumTypeSymbol = Symbol("@bufbuild/protobuf/enum-type");
pendingEnumType = new WeakMap();

}
