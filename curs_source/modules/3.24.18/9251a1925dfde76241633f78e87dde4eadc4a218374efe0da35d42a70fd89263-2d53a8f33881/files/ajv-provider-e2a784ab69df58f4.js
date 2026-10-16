import { __toESM } from "../../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { createDefaultAjvInstance } from "../../../../../../../../../coerce_exports.js";
import { require_dist2 } from "../../../../../../../ajv-formats@3.0.1_ajv@8.18.0/node_modules/ajv-formats/dist/index.js";
import { require_ajv } from "../../../../../../../ajv@8.18.0/node_modules/ajv/dist/ajv.js";
var import_ajv2, import_ajv_formats, AjvJsonSchemaValidator;
export { AjvJsonSchemaValidator, import_ajv2, import_ajv_formats };
var __wakaru_init_ajv_provider_initialized = false;
export function init_ajv_provider() {
if (__wakaru_init_ajv_provider_initialized) return;
__wakaru_init_ajv_provider_initialized = true;
import_ajv2 = __toESM(require_ajv(), 1);
import_ajv_formats = __toESM(require_dist2(), 1);
AjvJsonSchemaValidator = class {
    constructor(ajv2){
        this._ajv = ajv2 ?? createDefaultAjvInstance();
    }
    getValidator(schema2) {
        const ajvValidator = "$id" in schema2 && typeof schema2.$id === "string" ? this._ajv.getSchema(schema2.$id) ?? this._ajv.compile(schema2) : this._ajv.compile(schema2);
        return (input)=>{
            const valid = ajvValidator(input);
            if (valid) {
                return {
                    valid: true,
                    data: input,
                    errorMessage: void 0
                };
            } else {
                return {
                    valid: false,
                    data: void 0,
                    errorMessage: this._ajv.errorsText(ajvValidator.errors)
                };
            }
        };
    }
};

}
