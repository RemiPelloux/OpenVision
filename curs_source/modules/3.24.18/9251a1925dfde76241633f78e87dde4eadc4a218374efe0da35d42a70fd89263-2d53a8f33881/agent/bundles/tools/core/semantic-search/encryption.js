import { __toESM } from "../../../../../agent-host/dist/storage/sqlite-store.js";
import { deriveKeys, padString, unpadString } from "../../../../../tree_chunk_napi_exports.js";
var crypto5, ENCRYPTION_ALGORITHM, NONCE_LENGTH, PAD_CHAR, GLOB_SEPARATOR_REGEX, V1MasterKeyedEncryptionScheme, PlainTextEncryptionScheme;
export { ENCRYPTION_ALGORITHM, GLOB_SEPARATOR_REGEX, NONCE_LENGTH, PAD_CHAR, PlainTextEncryptionScheme, V1MasterKeyedEncryptionScheme, crypto5 };
var __wakaru_init_encryption_initialized = false;
export function init_encryption() {
if (__wakaru_init_encryption_initialized) return;
__wakaru_init_encryption_initialized = true;
"use strict";
crypto5 = __toESM(require("node:crypto"), 1);
ENCRYPTION_ALGORITHM = "aes-256-ctr";
NONCE_LENGTH = 6;
PAD_CHAR = "\0";
GLOB_SEPARATOR_REGEX = /([{}/\\.,])/;
V1MasterKeyedEncryptionScheme = class {
    constructor(masterKeyRaw){
        this.masterKeyRaw = masterKeyRaw;
        const masterKey = Buffer.from(masterKeyRaw, "base64url");
        const { macKey, encKey } = deriveKeys(masterKey);
        this.macKey = macKey;
        this.encKey = encKey;
    }
    exportKey() {
        return this.masterKeyRaw;
    }
    encrypt(value) {
        const hmac = crypto5.createHmac("sha256", this.macKey);
        hmac.update(value);
        const nonce = hmac.digest().subarray(0, NONCE_LENGTH);
        const expandedNonce = Buffer.concat([
            nonce,
            Buffer.alloc(10)
        ]);
        const cipher = crypto5.createCipheriv(ENCRYPTION_ALGORITHM, this.encKey, expandedNonce);
        let encrypted = cipher.update(padString(value), "utf8", "base64url");
        encrypted += cipher.final("base64url");
        return Buffer.concat([
            nonce,
            Buffer.from(encrypted, "base64url")
        ]).toString("base64url");
    }
    decrypt(value) {
        const encryptedBuffer = Buffer.from(value, "base64url");
        const nonce = encryptedBuffer.subarray(0, NONCE_LENGTH);
        const expandedNonce = Buffer.concat([
            nonce,
            Buffer.alloc(10)
        ]);
        const ciphertext = encryptedBuffer.subarray(NONCE_LENGTH).toString("base64url");
        const decipher = crypto5.createDecipheriv(ENCRYPTION_ALGORITHM, this.encKey, expandedNonce);
        let decrypted = decipher.update(ciphertext, "base64url", "utf8");
        decrypted += decipher.final("utf8");
        return unpadString(decrypted);
    }
};
PlainTextEncryptionScheme = class {
    exportKey() {
        return "";
    }
    encrypt(value) {
        return value;
    }
    decrypt(value) {
        return value;
    }
};

}
