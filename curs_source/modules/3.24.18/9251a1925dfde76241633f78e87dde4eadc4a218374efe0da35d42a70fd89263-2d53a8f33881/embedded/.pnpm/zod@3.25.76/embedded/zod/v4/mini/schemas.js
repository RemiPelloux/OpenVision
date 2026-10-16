import { $constructor } from "../../../../../../../esm_exports8.js";
import { init_core4 } from "../core/index.js";
import { parse7, parseAsync, safeParse, safeParseAsync } from "../core/parse.js";
import { $ZodArray, $ZodEnum, $ZodLiteral, $ZodNever, $ZodObject, $ZodOptional, $ZodRecord, $ZodString, $ZodType, $ZodUnion } from "../core/schemas.js";
import { init_parse4 } from "./parse.js";
import { clone2, util_exports } from "../../../../../../../util_exports.js";
var ZodMiniType, ZodMiniString, ZodMiniNever, ZodMiniArray, ZodMiniObject, ZodMiniUnion, ZodMiniRecord, ZodMiniEnum, ZodMiniLiteral, ZodMiniOptional;
export { ZodMiniArray, ZodMiniEnum, ZodMiniLiteral, ZodMiniNever, ZodMiniObject, ZodMiniOptional, ZodMiniRecord, ZodMiniString, ZodMiniType, ZodMiniUnion };
var __wakaru_init_schemas3_initialized = false;
export function init_schemas3() {
if (__wakaru_init_schemas3_initialized) return;
__wakaru_init_schemas3_initialized = true;
init_core4();
init_core4();
init_parse4();
ZodMiniType = $constructor("ZodMiniType", (inst, def)=>{
    if (!inst._zod) throw new Error("Uninitialized schema in ZodMiniType.");
    $ZodType.init(inst, def);
    inst.def = def;
    inst.parse = (data, params)=>parse7(inst, data, params, {
            callee: inst.parse
        });
    inst.safeParse = (data, params)=>safeParse(inst, data, params);
    inst.parseAsync = async (data, params)=>parseAsync(inst, data, params, {
            callee: inst.parseAsync
        });
    inst.safeParseAsync = async (data, params)=>safeParseAsync(inst, data, params);
    inst.check = (...checks)=>{
        return inst.clone({
            ...def,
            checks: [
                ...def.checks ?? [],
                ...checks.map((ch)=>typeof ch === "function" ? {
                        _zod: {
                            check: ch,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : ch)
            ]
        });
    };
    inst.clone = (_def, params)=>clone2(inst, _def, params);
    inst.brand = ()=>inst;
    inst.register = ((reg, meta)=>{
        reg.add(inst, meta);
        return inst;
    });
});
ZodMiniString = $constructor("ZodMiniString", (inst, def)=>{
    $ZodString.init(inst, def);
    ZodMiniType.init(inst, def);
});
ZodMiniNever = $constructor("ZodMiniNever", (inst, def)=>{
    $ZodNever.init(inst, def);
    ZodMiniType.init(inst, def);
});
ZodMiniArray = $constructor("ZodMiniArray", (inst, def)=>{
    $ZodArray.init(inst, def);
    ZodMiniType.init(inst, def);
});
ZodMiniObject = $constructor("ZodMiniObject", (inst, def)=>{
    $ZodObject.init(inst, def);
    ZodMiniType.init(inst, def);
    util_exports.defineLazy(inst, "shape", ()=>def.shape);
});
ZodMiniUnion = $constructor("ZodMiniUnion", (inst, def)=>{
    $ZodUnion.init(inst, def);
    ZodMiniType.init(inst, def);
});
ZodMiniRecord = $constructor("ZodMiniRecord", (inst, def)=>{
    $ZodRecord.init(inst, def);
    ZodMiniType.init(inst, def);
});
ZodMiniEnum = $constructor("ZodMiniEnum", (inst, def)=>{
    $ZodEnum.init(inst, def);
    ZodMiniType.init(inst, def);
});
ZodMiniLiteral = $constructor("ZodMiniLiteral", (inst, def)=>{
    $ZodLiteral.init(inst, def);
    ZodMiniType.init(inst, def);
});
ZodMiniOptional = $constructor("ZodMiniOptional", (inst, def)=>{
    $ZodOptional.init(inst, def);
    ZodMiniType.init(inst, def);
});

}
