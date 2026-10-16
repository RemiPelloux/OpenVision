var __wakaru_require_applicability_cache;
export function require_applicability() {
if (__wakaru_require_applicability_cache) return __wakaru_require_applicability_cache;
var exports2 = {};
__wakaru_require_applicability_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.shouldUseRule = exports2.shouldUseGroup = exports2.schemaHasRulesForType = void 0;
function schemaHasRulesForType({ schema: schema2, self: self2 }, type2) {
    const group = self2.RULES.types[type2];
    return group && group !== true && shouldUseGroup(schema2, group);
}
exports2.schemaHasRulesForType = schemaHasRulesForType;
function shouldUseGroup(schema2, group) {
    return group.rules.some((rule)=>shouldUseRule(schema2, rule));
}
exports2.shouldUseGroup = shouldUseGroup;
function shouldUseRule(schema2, rule) {
    var _a18;
    return schema2[rule.keyword] !== void 0 || ((_a18 = rule.definition.implements) === null || _a18 === void 0 ? void 0 : _a18.some((kwd)=>schema2[kwd] !== void 0));
}
exports2.shouldUseRule = shouldUseRule;

return exports2;
}
