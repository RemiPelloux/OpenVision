import { init_api_constants } from "./api-constants.js";
import { init_host_natives2 } from "./host-natives.js";
import { __toESM } from "../storage/sqlite-store.js";
import { external_exports } from "../../../external_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { hasControlChars, isNativeBinaryName, isPlainFileName, jsonDepth, parseClientRange, parseClientVersion } from "../../../tree_chunk_napi_exports.js";
var crypto6, fs33, path57, MANIFEST_FILE, MANIFEST_SCHEMA, MANIFEST_LIMITS, NPM_PACKAGE_NAME, CAPABILITY_NAME, WINDOWS_RESERVED_DEVICE, WINDOWS_FORBIDDEN_CHARS, NATIVE_BINARY_NAME, ManifestError, CLIENT_VERSION, sha256HexSchema, nonEmptyString, text3, plainFileName, payloadFileName, packageName, capabilityName, list, bounded, packSchema, signatureSchema, manifestSchema;
export { CAPABILITY_NAME, CLIENT_VERSION, MANIFEST_FILE, MANIFEST_LIMITS, MANIFEST_SCHEMA, ManifestError, NATIVE_BINARY_NAME, NPM_PACKAGE_NAME, WINDOWS_FORBIDDEN_CHARS, WINDOWS_RESERVED_DEVICE, bounded, capabilityName, crypto6, fs33, list, manifestSchema, nonEmptyString, packSchema, packageName, path57, payloadFileName, plainFileName, sha256HexSchema, signatureSchema, text3 };
var __wakaru_init_manifest_initialized = false;
export function init_manifest() {
if (__wakaru_init_manifest_initialized) return;
__wakaru_init_manifest_initialized = true;
"use strict";
crypto6 = __toESM(require("node:crypto"), 1);
fs33 = __toESM(require("node:fs"), 1);
path57 = __toESM(require("node:path"), 1);
init_zod();
init_api_constants();
init_host_natives2();
MANIFEST_FILE = "manifest.json";
MANIFEST_SCHEMA = 1;
MANIFEST_LIMITS = {
    manifestBytes: 1048576,
    files: 1024,
    fileBytes: 536870912,
    name: 255,
    label: 200,
    commit: 128,
    builtAt: 64,
    mainVersion: 64,
    kind: 32,
    list: 256,
    capability: 64,
    packDepth: 8,
    packBytes: 65536,
    requiredRevision: 1e6
};
NPM_PACKAGE_NAME = /^(@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/;
CAPABILITY_NAME = /^[a-z0-9][a-z0-9-]*$/;
WINDOWS_RESERVED_DEVICE = /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i;
WINDOWS_FORBIDDEN_CHARS = /[<>:"|?*]/;
NATIVE_BINARY_NAME = /\.(?:node|dylib|dll)$|\.so(?:\.\d+)*$/i;
ManifestError = class extends Error {
    constructor(message, check2){
        super(message);
        this.check = check2;
        this.name = "ManifestError";
    }
};
CLIENT_VERSION = /^(\d{1,9})\.(\d{1,9})\.(\d{1,9})(?:-pre\.(\d{1,9})(?:\.patch\.(\d{1,9}))?)?$/;
sha256HexSchema = external_exports.string().regex(/^[0-9a-f]{64}$/, "expected a sha256 hex digest");
nonEmptyString = external_exports.string().min(1);
text3 = (max)=>nonEmptyString.max(max).refine((value)=>!hasControlChars(value), {
        message: "contains a control character"
    });
plainFileName = external_exports.string().refine(isPlainFileName, {
    message: "is not a plain name"
});
payloadFileName = plainFileName.refine((name17)=>!isNativeBinaryName(name17), {
    message: "is a native binary; a generation carries code only"
});
packageName = external_exports.string().max(MANIFEST_LIMITS.name).regex(NPM_PACKAGE_NAME, "is not a package name");
capabilityName = external_exports.string().max(MANIFEST_LIMITS.capability).regex(CAPABILITY_NAME, "is not a capability name");
list = (item)=>external_exports.array(item).max(MANIFEST_LIMITS.list);
bounded = (value, ctx)=>{
    if (value === void 0) {
        return;
    }
    if (jsonDepth(value, MANIFEST_LIMITS.packDepth) > MANIFEST_LIMITS.packDepth) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: `nests deeper than ${MANIFEST_LIMITS.packDepth} levels`
        });
        return;
    }
    const serialized = JSON.stringify(value);
    if (serialized === void 0 || serialized.length > MANIFEST_LIMITS.packBytes) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: `serializes to more than ${MANIFEST_LIMITS.packBytes} bytes`
        });
    }
};
packSchema = external_exports.unknown().superRefine(bounded);
signatureSchema = external_exports.object({
    algorithm: external_exports.string()
}).passthrough().superRefine(bounded);
manifestSchema = external_exports.object({
    schema: external_exports.literal(MANIFEST_SCHEMA),
    generation: sha256HexSchema,
    label: text3(MANIFEST_LIMITS.label),
    commit: text3(MANIFEST_LIMITS.commit),
    builtAt: text3(MANIFEST_LIMITS.builtAt),
    entry: plainFileName,
    workers: list(payloadFileName),
    natives: list(packageName),
    requiredRevision: external_exports.number().int().min(0).max(MANIFEST_LIMITS.requiredRevision),
    capabilities: list(capabilityName),
    engines: external_exports.object({
        cursor: external_exports.string().refine((range2)=>parseClientRange(range2) !== void 0, {
            message: "is not >=X.Y.Z, >=X.Y.Z-pre.N or >=X.Y.Z-pre.N.patch.M"
        })
    }).optional(),
    files: external_exports.record(payloadFileName, external_exports.object({
        bytes: external_exports.number().int().min(0).max(MANIFEST_LIMITS.fileBytes),
        sha256: sha256HexSchema
    })).refine((files)=>Object.keys(files).length <= MANIFEST_LIMITS.files, {
        message: `lists more than ${MANIFEST_LIMITS.files} files`
    }),
    mainVersion: external_exports.string().max(MANIFEST_LIMITS.mainVersion).refine((version4)=>parseClientVersion(version4) !== void 0, {
        message: "is not X.Y.Z, X.Y.Z-pre.N or X.Y.Z-pre.N.patch.M"
    }).optional(),
    kind: text3(MANIFEST_LIMITS.kind).optional(),
    pack: packSchema.optional(),
    signature: signatureSchema.optional()
}).superRefine((manifest, ctx)=>{
    if (!Object.hasOwn(manifest.files, manifest.entry)) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            path: [
                "entry"
            ],
            message: `entry ${manifest.entry} is not in files`
        });
    }
    manifest.workers.forEach((worker, index)=>{
        if (!Object.hasOwn(manifest.files, worker)) {
            ctx.addIssue({
                code: external_exports.ZodIssueCode.custom,
                path: [
                    "workers",
                    index
                ],
                message: `worker ${worker} is not in files`
            });
        }
    });
});

}
