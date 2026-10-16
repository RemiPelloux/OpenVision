import { init_private_inference_catalog } from "./private-inference-catalog.js";
import { init_private_inference_config } from "./private-inference-config.js";
import { init_model_catalog_probe } from "./provider-runtime/model-catalog-probe.js";
import { init_responses_session } from "./provider-runtime/responses-session.js";
import { init_tool_output_fallback } from "./provider-runtime/tool-output-fallback.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
var import_node_fs40, PrivateInferenceGatewayUnreachableError;
export { PrivateInferenceGatewayUnreachableError, import_node_fs40 };
var __wakaru_init_private_inference_session_provider_initialized = false;
export function init_private_inference_session_provider() {
if (__wakaru_init_private_inference_session_provider_initialized) return;
__wakaru_init_private_inference_session_provider_initialized = true;
"use strict";
import_node_fs40 = require("node:fs");
init_dist3();
init_private_inference_catalog();
init_private_inference_config();
init_model_catalog_probe();
init_responses_session();
init_tool_output_fallback();
PrivateInferenceGatewayUnreachableError = class extends Error {
    constructor(baseUrl){
        super(`Could not reach your private inference gateway at ${baseUrl}.`);
        this.baseUrl = baseUrl;
        this.name = "PrivateInferenceGatewayUnreachableError";
    }
};

}
