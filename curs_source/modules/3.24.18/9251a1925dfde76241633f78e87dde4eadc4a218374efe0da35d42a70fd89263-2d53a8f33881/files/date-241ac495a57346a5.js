import { setResponseValueAndErrors } from "../../../../../../../../coerce_exports.js";
import { init_errorMessages } from "../errorMessages.js";
var integerDateParser;
export { integerDateParser };
var __wakaru_init_date2_initialized = false;
export function init_date2() {
if (__wakaru_init_date2_initialized) return;
__wakaru_init_date2_initialized = true;
init_errorMessages();
integerDateParser = (def, refs)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    if (refs.target === "openApi3") {
        return res;
    }
    for (const check2 of def.checks){
        switch(check2.kind){
            case "min":
                setResponseValueAndErrors(res, "minimum", check2.value, check2.message, refs);
                break;
            case "max":
                setResponseValueAndErrors(res, "maximum", check2.value, check2.message, refs);
                break;
        }
    }
    return res;
};

}
