"use strict";
var t = module.exports = function(e, t, n) {
    "function" == typeof t && (n = t, t = {}), r(t, "function" == typeof (n = t.cb || n) ? n : n.pre || function() {}, n.post || function() {}, e, "", e);
};
function r(e, o, s, i, a, c, u, l, d, p) {
    if (i && "object" == typeof i && !Array.isArray(i)) {
        for(var f in o(i, a, c, u, l, d, p), i){
            var h = i[f];
            if (Array.isArray(h)) {
                if (f in t.arrayKeywords) for(var m = 0; m < h.length; m++)r(e, o, s, h[m], a + "/" + f + "/" + m, c, a, f, i, m);
            } else if (f in t.propsKeywords) {
                if (h && "object" == typeof h) for(var g in h)r(e, o, s, h[g], a + "/" + f + "/" + n(g), c, a, f, i, g);
            } else (f in t.keywords || e.allKeys && !(f in t.skipKeywords)) && r(e, o, s, h, a + "/" + f, c, a, f, i);
        }
        s(i, a, c, u, l, d, p);
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
