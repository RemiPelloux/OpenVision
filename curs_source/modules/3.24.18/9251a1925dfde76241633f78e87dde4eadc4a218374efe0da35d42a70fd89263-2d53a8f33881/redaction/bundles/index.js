import { init_classification } from "./classification.js";
import { init_core_message } from "./core-message.js";
import { init_factory } from "./factory.js";
import { init_nal_blob_type_info } from "./nal-blob-type-info.js";
import { init_privacy_context } from "./privacy-context.js";
import { init_privacy_mode } from "./privacy-mode.js";
import { init_redacted_errors } from "./redacted-errors.js";
import { init_schema } from "./schema.js";
import { init_schemaValidation } from "./schemaValidation.js";
import { init_shouldRedact } from "./shouldRedact.js";
import { init_types11 } from "./types.js";
var __wakaru_init_dist27_initialized = false;
export function init_dist27() {
if (__wakaru_init_dist27_initialized) return;
__wakaru_init_dist27_initialized = true;
"use strict";
init_classification();
init_core_message();
init_factory();
init_nal_blob_type_info();
init_privacy_context();
init_privacy_mode();
init_redacted_errors();
init_schema();
init_schemaValidation();
init_shouldRedact();
init_types11();

}
