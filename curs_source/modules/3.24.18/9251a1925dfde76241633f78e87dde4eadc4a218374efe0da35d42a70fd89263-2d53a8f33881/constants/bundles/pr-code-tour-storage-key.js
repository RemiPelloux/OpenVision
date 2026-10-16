var CODE_TOUR_VARIANTS, DEFAULT_CODE_TOUR_VARIANT_NAME, CODE_TOUR_DEFAULT_MODEL_VERSION, CODE_TOUR_DEFAULT_PROMPT_VERSION, CODE_TOUR_PROMPT_CACHE_KEY_PATTERN, CODE_TOUR_VARIANT_NAMES, CODE_TOUR_FORMAT_VERSION, CODE_TOUR_PROMPT_REVISION, CODE_TOUR_CUSTOM_STORAGE_KEY_FRAGMENTS;
export { CODE_TOUR_CUSTOM_STORAGE_KEY_FRAGMENTS, CODE_TOUR_DEFAULT_MODEL_VERSION, CODE_TOUR_DEFAULT_PROMPT_VERSION, CODE_TOUR_FORMAT_VERSION, CODE_TOUR_PROMPT_CACHE_KEY_PATTERN, CODE_TOUR_PROMPT_REVISION, CODE_TOUR_VARIANTS, CODE_TOUR_VARIANT_NAMES, DEFAULT_CODE_TOUR_VARIANT_NAME };
var __wakaru_init_pr_code_tour_storage_key_initialized = false;
export function init_pr_code_tour_storage_key() {
if (__wakaru_init_pr_code_tour_storage_key_initialized) return;
__wakaru_init_pr_code_tour_storage_key_initialized = true;
"use strict";
CODE_TOUR_VARIANTS = {
    "sonnet-4.0-v1": {
        modelVersion: "ANTHROPIC_SONNET_4_6",
        promptVersion: "v1"
    },
    "sonnet-4.0-v2": {
        modelVersion: "ANTHROPIC_SONNET_4_6",
        promptVersion: "v2"
    },
    "sonnet-4.6-v1": {
        modelVersion: "ANTHROPIC_SONNET_4_6",
        promptVersion: "v1"
    },
    "sonnet-4.6-v2": {
        modelVersion: "ANTHROPIC_SONNET_4_6",
        promptVersion: "v2"
    },
    "gemini-flash-3.0-v1": {
        modelVersion: "GEMINI_3_0_FLASH",
        promptVersion: "v1"
    }
};
DEFAULT_CODE_TOUR_VARIANT_NAME = "sonnet-4.0-v1";
CODE_TOUR_DEFAULT_MODEL_VERSION = "ANTHROPIC_SONNET_4_6";
CODE_TOUR_DEFAULT_PROMPT_VERSION = "v1";
CODE_TOUR_PROMPT_CACHE_KEY_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,63}$/;
CODE_TOUR_VARIANT_NAMES = new Set(Object.keys(CODE_TOUR_VARIANTS));
CODE_TOUR_FORMAT_VERSION = 1;
CODE_TOUR_PROMPT_REVISION = 20;
CODE_TOUR_CUSTOM_STORAGE_KEY_FRAGMENTS = [
    "::ff-",
    "::tour-custom",
    "::tour-highlights"
];

}
