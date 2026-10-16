import { parseClassification } from "../../mcp_sandbox_policy_exports.js";
import { REDACTION_SCHEMA, init_redactionSchema } from "../../proto/dist/redactionSchema.js";
import { init_classification } from "./classification.js";
var rawSchema, REDACTION_SCHEMA2;
export { REDACTION_SCHEMA2, rawSchema };
var __wakaru_init_schema_initialized = false;
export function init_schema() {
if (__wakaru_init_schema_initialized) return;
__wakaru_init_schema_initialized = true;
"use strict";
init_redactionSchema();
init_classification();
rawSchema = REDACTION_SCHEMA;
REDACTION_SCHEMA2 = Object.fromEntries(Object.entries(rawSchema).map(([msgName, fields])=>[
        msgName,
        Object.fromEntries(Object.entries(fields).map(([fieldName, classificationRaw])=>[
                fieldName,
                parseClassification(classificationRaw)
            ]))
    ]));

}
