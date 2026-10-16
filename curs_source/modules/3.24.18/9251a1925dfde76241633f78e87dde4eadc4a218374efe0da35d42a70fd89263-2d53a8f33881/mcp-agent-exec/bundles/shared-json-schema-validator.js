import { AjvJsonSchemaValidator, init_ajv_provider } from "../../node_modules/.pnpm/_f57967f111cc31bce3ae8564d9ceaa93/node_modules/@modelcontextprotocol/sdk/dist/esm/validation/ajv-provider.js";
var import_node_crypto15, DEFAULT_MAX_SCHEMAS_PER_COMPILER, SharedJsonSchemaValidator, sharedJsonSchemaValidator;
export { DEFAULT_MAX_SCHEMAS_PER_COMPILER, SharedJsonSchemaValidator, import_node_crypto15, sharedJsonSchemaValidator };
var __wakaru_init_shared_json_schema_validator_initialized = false;
export function init_shared_json_schema_validator() {
if (__wakaru_init_shared_json_schema_validator_initialized) return;
__wakaru_init_shared_json_schema_validator_initialized = true;
"use strict";
import_node_crypto15 = require("node:crypto");
init_ajv_provider();
DEFAULT_MAX_SCHEMAS_PER_COMPILER = 2048;
SharedJsonSchemaValidator = class {
    constructor({ maxSchemasPerCompiler = DEFAULT_MAX_SCHEMAS_PER_COMPILER, createCompiler = ()=>new AjvJsonSchemaValidator() } = {}){
        this.compiled = new Map();
        this.maxSchemasPerCompiler = maxSchemasPerCompiler;
        this.createCompiler = createCompiler;
        this.compiler = createCompiler();
    }
    get compiledSchemaCount() {
        return this.compiled.size;
    }
    getValidator(schema2) {
        let validator2;
        return (input)=>{
            validator2 ??= this.compile(schema2);
            return validator2(input);
        };
    }
    compile(schema2) {
        const serialized = JSON.stringify(schema2);
        const key = (0, import_node_crypto15.createHash)("sha256").update(serialized).digest("base64url");
        const cached2 = this.compiled.get(key);
        if (cached2 !== void 0) {
            return cached2;
        }
        if (this.compiled.size >= this.maxSchemasPerCompiler) {
            this.compiler = this.createCompiler();
            this.compiled.clear();
        }
        const compiler = serialized.includes('"$id"') ? this.createCompiler() : this.compiler;
        const validator2 = compiler.getValidator(schema2);
        this.compiled.set(key, validator2);
        return validator2;
    }
};
sharedJsonSchemaValidator = new SharedJsonSchemaValidator();

}
