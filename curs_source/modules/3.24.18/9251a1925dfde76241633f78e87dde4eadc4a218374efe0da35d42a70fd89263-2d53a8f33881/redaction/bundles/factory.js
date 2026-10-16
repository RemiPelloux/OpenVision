import { DataClassification, init_classification } from "./classification.js";
import { PrivacyMode2, init_privacy_mode } from "./privacy-mode.js";
import { init_types11 } from "./types.js";
var CLASSIFICATION_STRICTNESS, PRIVACY_MODE_STRICTNESS;
export { CLASSIFICATION_STRICTNESS, PRIVACY_MODE_STRICTNESS };
var __wakaru_init_factory_initialized = false;
export function init_factory() {
if (__wakaru_init_factory_initialized) return;
__wakaru_init_factory_initialized = true;
"use strict";
init_classification();
init_privacy_mode();
init_types11();
CLASSIFICATION_STRICTNESS = {
    [DataClassification.CREDENTIALS]: 4,
    [DataClassification.UNSPECIFIED]: 4,
    [DataClassification.CODE]: 3,
    [DataClassification.PATH]: 2,
    [DataClassification.PROVIDER_INFO]: 2,
    [DataClassification.SAFE]: 1
};
PRIVACY_MODE_STRICTNESS = {
    [PrivacyMode2.UNSPECIFIED]: 5,
    [PrivacyMode2.NO_STORAGE]: 4,
    [PrivacyMode2.NO_TRAINING]: 3,
    [PrivacyMode2.USAGE_DATA_TRAINING_ALLOWED]: 2,
    [PrivacyMode2.USAGE_CODEBASE_TRAINING_ALLOWED]: 1
};

}
