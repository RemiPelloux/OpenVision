import { parseAnyDef, parseArrayDef, parseBigintDef, parseBooleanDef, parseBrandedDef, parseDateDef, parseDefaultDef, parseEffectsDef, parseEnumDef, parseIntersectionDef, parseLiteralDef, parseMapDef, parseNativeEnumDef, parseNeverDef, parseNullDef, parseNullableDef, parseNumberDef, parseObjectDef, parsePromiseDef, parseRecordDef, parseSetDef, parseStringDef, parseTupleDef, parseUndefinedDef, parseUnionDef, parseUnknownDef } from "../../../../../../../coerce_exports.js";
import { init_any } from "./parsers/any.js";
import { init_array } from "./parsers/array.js";
import { init_bigint } from "./parsers/bigint.js";
import { init_boolean } from "./parsers/boolean.js";
import { init_branded } from "./parsers/branded.js";
import { init_catch, parseCatchDef } from "./parsers/catch.js";
import { init_date2 } from "./parsers/date.js";
import { init_default } from "./parsers/default.js";
import { init_effects } from "./parsers/effects.js";
import { init_enum2 } from "./parsers/enum.js";
import { init_intersection } from "./parsers/intersection.js";
import { init_literal } from "./parsers/literal.js";
import { init_map } from "./parsers/map.js";
import { init_nativeEnum } from "./parsers/nativeEnum.js";
import { init_never } from "./parsers/never.js";
import { init_null } from "./parsers/null.js";
import { init_nullable } from "./parsers/nullable.js";
import { init_number } from "./parsers/number.js";
import { init_object } from "./parsers/object.js";
import { init_optional, parseOptionalDef } from "./parsers/optional.js";
import { init_pipeline, parsePipelineDef } from "./parsers/pipeline.js";
import { init_promise } from "./parsers/promise.js";
import { init_readonly, parseReadonlyDef } from "./parsers/readonly.js";
import { init_record } from "./parsers/record.js";
import { init_set } from "./parsers/set.js";
import { init_string } from "./parsers/string.js";
import { init_tuple } from "./parsers/tuple.js";
import { init_undefined } from "./parsers/undefined.js";
import { init_union } from "./parsers/union.js";
import { init_unknown } from "./parsers/unknown.js";
import { init_zod } from "../../../../../zod@3.25.76/node_modules/zod/index.js";
import { ZodFirstPartyTypeKind } from "../../../../../zod@3.25.76/node_modules/zod/v3/types.js";
var selectParser;
export { selectParser };
var __wakaru_init_selectParser_initialized = false;
export function init_selectParser() {
if (__wakaru_init_selectParser_initialized) return;
__wakaru_init_selectParser_initialized = true;
init_zod();
init_any();
init_array();
init_bigint();
init_boolean();
init_branded();
init_catch();
init_date2();
init_default();
init_effects();
init_enum2();
init_intersection();
init_literal();
init_map();
init_nativeEnum();
init_never();
init_null();
init_nullable();
init_number();
init_object();
init_optional();
init_pipeline();
init_promise();
init_record();
init_set();
init_string();
init_tuple();
init_undefined();
init_union();
init_unknown();
init_readonly();
selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case ZodFirstPartyTypeKind.ZodString:
            return parseStringDef(def, refs);
        case ZodFirstPartyTypeKind.ZodNumber:
            return parseNumberDef(def, refs);
        case ZodFirstPartyTypeKind.ZodObject:
            return parseObjectDef(def, refs);
        case ZodFirstPartyTypeKind.ZodBigInt:
            return parseBigintDef(def, refs);
        case ZodFirstPartyTypeKind.ZodBoolean:
            return parseBooleanDef();
        case ZodFirstPartyTypeKind.ZodDate:
            return parseDateDef(def, refs);
        case ZodFirstPartyTypeKind.ZodUndefined:
            return parseUndefinedDef();
        case ZodFirstPartyTypeKind.ZodNull:
            return parseNullDef(refs);
        case ZodFirstPartyTypeKind.ZodArray:
            return parseArrayDef(def, refs);
        case ZodFirstPartyTypeKind.ZodUnion:
        case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
            return parseUnionDef(def, refs);
        case ZodFirstPartyTypeKind.ZodIntersection:
            return parseIntersectionDef(def, refs);
        case ZodFirstPartyTypeKind.ZodTuple:
            return parseTupleDef(def, refs);
        case ZodFirstPartyTypeKind.ZodRecord:
            return parseRecordDef(def, refs);
        case ZodFirstPartyTypeKind.ZodLiteral:
            return parseLiteralDef(def, refs);
        case ZodFirstPartyTypeKind.ZodEnum:
            return parseEnumDef(def);
        case ZodFirstPartyTypeKind.ZodNativeEnum:
            return parseNativeEnumDef(def);
        case ZodFirstPartyTypeKind.ZodNullable:
            return parseNullableDef(def, refs);
        case ZodFirstPartyTypeKind.ZodOptional:
            return parseOptionalDef(def, refs);
        case ZodFirstPartyTypeKind.ZodMap:
            return parseMapDef(def, refs);
        case ZodFirstPartyTypeKind.ZodSet:
            return parseSetDef(def, refs);
        case ZodFirstPartyTypeKind.ZodLazy:
            return ()=>def.getter()._def;
        case ZodFirstPartyTypeKind.ZodPromise:
            return parsePromiseDef(def, refs);
        case ZodFirstPartyTypeKind.ZodNaN:
        case ZodFirstPartyTypeKind.ZodNever:
            return parseNeverDef();
        case ZodFirstPartyTypeKind.ZodEffects:
            return parseEffectsDef(def, refs);
        case ZodFirstPartyTypeKind.ZodAny:
            return parseAnyDef();
        case ZodFirstPartyTypeKind.ZodUnknown:
            return parseUnknownDef();
        case ZodFirstPartyTypeKind.ZodDefault:
            return parseDefaultDef(def, refs);
        case ZodFirstPartyTypeKind.ZodBranded:
            return parseBrandedDef(def, refs);
        case ZodFirstPartyTypeKind.ZodReadonly:
            return parseReadonlyDef(def, refs);
        case ZodFirstPartyTypeKind.ZodCatch:
            return parseCatchDef(def, refs);
        case ZodFirstPartyTypeKind.ZodPipeline:
            return parsePipelineDef(def, refs);
        case ZodFirstPartyTypeKind.ZodFunction:
        case ZodFirstPartyTypeKind.ZodVoid:
        case ZodFirstPartyTypeKind.ZodSymbol:
            return void 0;
        default:
            return ((_2)=>void 0)(typeName);
    }
};

}
