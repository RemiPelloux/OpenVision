import { $constructor } from "../../../../../../../esm_exports8.js";
import { ZodStringFormat, init_schemas2 } from "./schemas.js";
import { init_core4 } from "../core/index.js";
import { $ZodISODate, $ZodISODateTime, $ZodISODuration, $ZodISOTime } from "../core/schemas.js";
var ZodISODateTime, ZodISODate, ZodISOTime, ZodISODuration;
export { ZodISODate, ZodISODateTime, ZodISODuration, ZodISOTime };
var __wakaru_init_iso_initialized = false;
export function init_iso() {
if (__wakaru_init_iso_initialized) return;
__wakaru_init_iso_initialized = true;
init_core4();
init_schemas2();
ZodISODateTime = $constructor("ZodISODateTime", (inst, def)=>{
    $ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodISODate = $constructor("ZodISODate", (inst, def)=>{
    $ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodISOTime = $constructor("ZodISOTime", (inst, def)=>{
    $ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodISODuration = $constructor("ZodISODuration", (inst, def)=>{
    $ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
});

}
