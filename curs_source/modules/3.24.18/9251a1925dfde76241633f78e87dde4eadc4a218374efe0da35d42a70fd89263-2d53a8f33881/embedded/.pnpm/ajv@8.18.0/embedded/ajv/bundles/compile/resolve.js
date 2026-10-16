import { require_util16 } from "./util.js";
import { require_fast_deep_equal } from "../../../../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js";
import { require_json_schema_traverse } from "../../../../../json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js";
var __wakaru_require_resolve_cache;
export function require_resolve() {
if (__wakaru_require_resolve_cache) return __wakaru_require_resolve_cache;
var exports2 = {};
__wakaru_require_resolve_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.getSchemaRefs = exports2.resolveUrl = exports2.normalizeId = exports2._getFullPath = exports2.getFullPath = exports2.inlineRef = void 0;
var util_1 = require_util16();
var equal = require_fast_deep_equal();
var traverse = require_json_schema_traverse();
var SIMPLE_INLINED = new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
]);
function inlineRef(schema2, limit = true) {
    if (typeof schema2 == "boolean") return true;
    if (limit === true) return !hasRef(schema2);
    if (!limit) return false;
    return countKeys(schema2) <= limit;
}
exports2.inlineRef = inlineRef;
var REF_KEYWORDS = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
]);
function hasRef(schema2) {
    for(const key in schema2){
        if (REF_KEYWORDS.has(key)) return true;
        const sch = schema2[key];
        if (Array.isArray(sch) && sch.some(hasRef)) return true;
        if (typeof sch == "object" && hasRef(sch)) return true;
    }
    return false;
}
function countKeys(schema2) {
    let count2 = 0;
    for(const key in schema2){
        if (key === "$ref") return Infinity;
        count2++;
        if (SIMPLE_INLINED.has(key)) continue;
        if (typeof schema2[key] == "object") {
            (0, util_1.eachItem)(schema2[key], (sch)=>count2 += countKeys(sch));
        }
        if (count2 === Infinity) return Infinity;
    }
    return count2;
}
function getFullPath(resolver, id = "", normalize6) {
    if (normalize6 !== false) id = normalizeId(id);
    const p2 = resolver.parse(id);
    return _getFullPath(resolver, p2);
}
exports2.getFullPath = getFullPath;
function _getFullPath(resolver, p2) {
    const serialized = resolver.serialize(p2);
    return serialized.split("#")[0] + "#";
}
exports2._getFullPath = _getFullPath;
var TRAILING_SLASH_HASH = /#\/?$/;
function normalizeId(id) {
    return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
}
exports2.normalizeId = normalizeId;
function resolveUrl(resolver, baseId, id) {
    id = normalizeId(id);
    return resolver.resolve(baseId, id);
}
exports2.resolveUrl = resolveUrl;
var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
function getSchemaRefs(schema2, baseId) {
    if (typeof schema2 == "boolean") return {};
    const { schemaId, uriResolver } = this.opts;
    const schId = normalizeId(schema2[schemaId] || baseId);
    const baseIds = {
        "": schId
    };
    const pathPrefix = getFullPath(uriResolver, schId, false);
    const localRefs = {};
    const schemaRefs = new Set();
    traverse(schema2, {
        allKeys: true
    }, (sch, jsonPtr, _2, parentJsonPtr)=>{
        if (parentJsonPtr === void 0) return;
        const fullPath = pathPrefix + jsonPtr;
        let innerBaseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string") innerBaseId = addRef.call(this, sch[schemaId]);
        addAnchor.call(this, sch.$anchor);
        addAnchor.call(this, sch.$dynamicAnchor);
        baseIds[jsonPtr] = innerBaseId;
        function addRef(ref) {
            const _resolve = this.opts.uriResolver.resolve;
            ref = normalizeId(innerBaseId ? _resolve(innerBaseId, ref) : ref);
            if (schemaRefs.has(ref)) throw ambiguos(ref);
            schemaRefs.add(ref);
            let schOrRef = this.refs[ref];
            if (typeof schOrRef == "string") schOrRef = this.refs[schOrRef];
            if (typeof schOrRef == "object") {
                checkAmbiguosRef(sch, schOrRef.schema, ref);
            } else if (ref !== normalizeId(fullPath)) {
                if (ref[0] === "#") {
                    checkAmbiguosRef(sch, localRefs[ref], ref);
                    localRefs[ref] = sch;
                } else {
                    this.refs[ref] = fullPath;
                }
            }
            return ref;
        }
        function addAnchor(anchor) {
            if (typeof anchor == "string") {
                if (!ANCHOR.test(anchor)) throw new Error(`invalid anchor "${anchor}"`);
                addRef.call(this, `#${anchor}`);
            }
        }
    });
    return localRefs;
    function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== void 0 && !equal(sch1, sch2)) throw ambiguos(ref);
    }
    function ambiguos(ref) {
        return new Error(`reference "${ref}" resolves to more than one schema`);
    }
}
exports2.getSchemaRefs = getSchemaRefs;

return exports2;
}
