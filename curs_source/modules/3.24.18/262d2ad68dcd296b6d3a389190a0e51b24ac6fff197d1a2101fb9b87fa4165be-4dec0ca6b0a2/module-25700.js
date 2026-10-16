"use strict";
var t = module.exports = function(e, t, n) {
    "function" == typeof t && (n = t, t = {}), r(t, "function" == typeof (n = t.cb || n) ? n : n.pre || function() {}, n.post || function() {}, e, "", e);
};
function r(e, o, s, i, a, l, c, u, d, p) {
    if (i && "object" == typeof i && !Array.isArray(i)) {
        for(var h in o(i, a, l, c, u, d, p), i){
            var m = i[h];
            if (Array.isArray(m)) {
                if (h in t.arrayKeywords) for(var f = 0; f < m.length; f++)r(e, o, s, m[f], a + "/" + h + "/" + f, l, a, h, i, f);
            } else if (h in t.propsKeywords) {
                if (m && "object" == typeof m) for(var g in m)r(e, o, s, m[g], a + "/" + h + "/" + n(g), l, a, h, i, g);
            } else (h in t.keywords || e.allKeys && !(h in t.skipKeywords)) && r(e, o, s, m, a + "/" + h, l, a, h, i);
        }
        s(i, a, l, c, u, d, p);
    }
}
function n(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
t.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
}, t.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
}, t.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
}, t.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
};
