import { init_api_key_helper } from "./api-key-helper.js";
import { init_helper_authorized_fetch } from "./helper-authorized-fetch.js";
import { init_model_catalog } from "./model-catalog.js";
import { init_model_match } from "./model-match.js";
import { init_user_agent } from "./user-agent.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var MODEL_ENTRY_PROBE_TIMEOUT_MS, modelCatalogCache, modelCatalogInflight;
export { MODEL_ENTRY_PROBE_TIMEOUT_MS, modelCatalogCache, modelCatalogInflight };
var __wakaru_init_model_catalog_probe_initialized = false;
export function init_model_catalog_probe() {
if (__wakaru_init_model_catalog_probe_initialized) return;
__wakaru_init_model_catalog_probe_initialized = true;
"use strict";
init_dist3();
init_api_key_helper();
init_helper_authorized_fetch();
init_model_catalog();
init_model_match();
init_user_agent();
MODEL_ENTRY_PROBE_TIMEOUT_MS = 2e3;
modelCatalogCache = new Map();
modelCatalogInflight = new Map();

}
