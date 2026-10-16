import { init_privacy_mode } from "./privacy-mode.js";
var DataClassification, SENSITIVE_CLASSIFICATIONS, PrivacyCapability;
export { DataClassification, PrivacyCapability, SENSITIVE_CLASSIFICATIONS };
var __wakaru_init_classification_initialized = false;
export function init_classification() {
if (__wakaru_init_classification_initialized) return;
__wakaru_init_classification_initialized = true;
"use strict";
init_privacy_mode();
(function(DataClassification2) {
    DataClassification2["SAFE"] = "safe";
    DataClassification2["CODE"] = "code";
    DataClassification2["CREDENTIALS"] = "credentials";
    DataClassification2["PATH"] = "path";
    DataClassification2["PROVIDER_INFO"] = "provider_info";
    DataClassification2["UNSPECIFIED"] = "unspecified";
})(DataClassification || (DataClassification = {}));
SENSITIVE_CLASSIFICATIONS = [
    DataClassification.CODE,
    DataClassification.CREDENTIALS,
    DataClassification.PATH,
    DataClassification.PROVIDER_INFO,
    DataClassification.UNSPECIFIED
];
(function(PrivacyCapability2) {
    PrivacyCapability2["STORAGE_FOR_TRAINING"] = "storage_for_training";
    PrivacyCapability2["STORAGE_FOR_LOGGING"] = "storage_for_logging";
    PrivacyCapability2["STORAGE_FOR_USAGE"] = "storage_for_usage";
    PrivacyCapability2["UNSAFE_ALWAYS_ALLOWED"] = "unsafe_always_allowed";
})(PrivacyCapability || (PrivacyCapability = {}));

}
