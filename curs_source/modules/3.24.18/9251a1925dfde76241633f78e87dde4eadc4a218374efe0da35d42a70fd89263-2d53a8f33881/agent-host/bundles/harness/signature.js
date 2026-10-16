import { init_manifest } from "./manifest.js";
import { __toESM } from "../storage/sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var crypto7, fs34, path59, MANIFEST_SIGNATURE_FILE, MANIFEST_PAYLOAD_TYPE, SIGNATURE_SCHEMA, SIGNATURE_ALGORITHM, SIGNATURE_LIMITS, KEY_ID, BASE64, boundedText, envelopeSchema;
export { BASE64, KEY_ID, MANIFEST_PAYLOAD_TYPE, MANIFEST_SIGNATURE_FILE, SIGNATURE_ALGORITHM, SIGNATURE_LIMITS, SIGNATURE_SCHEMA, boundedText, crypto7, envelopeSchema, fs34, path59 };
var __wakaru_init_signature_initialized = false;
export function init_signature() {
if (__wakaru_init_signature_initialized) return;
__wakaru_init_signature_initialized = true;
"use strict";
crypto7 = __toESM(require("node:crypto"), 1);
fs34 = __toESM(require("node:fs"), 1);
path59 = __toESM(require("node:path"), 1);
init_zod();
init_manifest();
MANIFEST_SIGNATURE_FILE = "manifest.sig";
MANIFEST_PAYLOAD_TYPE = "application/vnd.cursor.agent-harness.manifest+json";
SIGNATURE_SCHEMA = 1;
SIGNATURE_ALGORITHM = "ecdsa-p256-sha256";
SIGNATURE_LIMITS = {
    bytes: 16384,
    signatures: 8,
    keyId: 64,
    algorithm: 64,
    signature: 256
};
KEY_ID = /^[A-Za-z0-9._-]+$/;
BASE64 = /^[A-Za-z0-9+/]+={0,2}$/;
boundedText = (max, shape)=>external_exports.string().min(1).max(max).regex(shape);
envelopeSchema = external_exports.object({
    schema: external_exports.literal(SIGNATURE_SCHEMA),
    payloadType: external_exports.literal(MANIFEST_PAYLOAD_TYPE),
    signatures: external_exports.array(external_exports.object({
        keyId: boundedText(SIGNATURE_LIMITS.keyId, KEY_ID),
        algorithm: boundedText(SIGNATURE_LIMITS.algorithm, KEY_ID),
        signature: boundedText(SIGNATURE_LIMITS.signature, BASE64)
    })).min(1).max(SIGNATURE_LIMITS.signatures)
});

}
