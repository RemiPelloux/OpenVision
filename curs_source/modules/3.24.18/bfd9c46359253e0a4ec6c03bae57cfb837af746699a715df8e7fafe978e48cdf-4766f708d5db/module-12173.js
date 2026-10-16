"use strict";
function r(e, t) {
    return t.rules.some((t)=>n(e, t));
}
function n(e, t) {
    var r;
    return void 0 !== e[t.keyword] || (null === (r = t.definition.implements) || void 0 === r ? void 0 : r.some((t)=>void 0 !== e[t]));
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = void 0, exports.schemaHasRulesForType = function({ schema: e, self: t }, n) {
    const s = t.RULES.types[n];
    return s && !0 !== s && r(e, s);
}, exports.shouldUseGroup = r, exports.shouldUseRule = n;
