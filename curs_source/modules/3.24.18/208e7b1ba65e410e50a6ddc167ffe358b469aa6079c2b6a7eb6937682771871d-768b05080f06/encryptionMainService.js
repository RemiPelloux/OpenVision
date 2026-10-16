import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { ee, oe, q } from "./platform.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { app as cGe } from "electron";
import { safeStorage as oGe } from "electron";
var ya, TS;
export { TS, ya };
var __wakaru_lGe_initialized = false;
export function lGe() {
if (__wakaru_lGe_initialized) return;
__wakaru_lGe_initialized = true;
"use strict";
h(), oe(), te(), ya = oGe, TS = class {
    constructor(e){
        this.logService = e, cGe.commandLine.getSwitchValue("password-store") === "basic" && (this.logService.trace("[EncryptionMainService] setting usePlainTextEncryption to true..."), ya.setUsePlainTextEncryption?.(!0), this.logService.trace("[EncryptionMainService] set usePlainTextEncryption to true"));
    }
    async encrypt(e) {
        this.logService.trace("[EncryptionMainService] Encrypting value...");
        try {
            const t = JSON.stringify(ya.encryptString(e));
            return this.logService.trace("[EncryptionMainService] Encrypted value."), t;
        } catch (t) {
            throw this.logService.error(t), t;
        }
    }
    async decrypt(e) {
        let t;
        try {
            if (t = JSON.parse(e), !t.data) throw new Error(`[EncryptionMainService] Invalid encrypted value: ${e}`);
            const n = Buffer.from(t.data);
            this.logService.trace("[EncryptionMainService] Decrypting value...");
            const r = ya.decryptString(n);
            return this.logService.trace("[EncryptionMainService] Decrypted value."), r;
        } catch (n) {
            throw this.logService.error(n), n;
        }
    }
    isEncryptionAvailable() {
        this.logService.trace("[EncryptionMainService] Checking if encryption is available...");
        const e = ya.isEncryptionAvailable();
        return this.logService.trace("[EncryptionMainService] Encryption is available: ", e), Promise.resolve(e);
    }
    getKeyStorageProvider() {
        if (ee) return Promise.resolve("dpapi");
        if (q) return Promise.resolve("keychain_access");
        if (ya.getSelectedStorageBackend) try {
            this.logService.trace("[EncryptionMainService] Getting selected storage backend...");
            const e = ya.getSelectedStorageBackend();
            return this.logService.trace("[EncryptionMainService] Selected storage backend: ", e), Promise.resolve(e);
        } catch (e) {
            this.logService.error(e);
        }
        return Promise.resolve("unknown");
    }
    async setUsePlainTextEncryption() {
        if (ee) throw new Error("Setting plain text encryption is not supported on Windows.");
        if (q) throw new Error("Setting plain text encryption is not supported on macOS.");
        if (!ya.setUsePlainTextEncryption) throw new Error("Setting plain text encryption is not supported.");
        this.logService.trace("[EncryptionMainService] Setting usePlainTextEncryption to true..."), ya.setUsePlainTextEncryption(!0), this.logService.trace("[EncryptionMainService] Set usePlainTextEncryption to true");
    }
}, TS = B([
    w(0, Z)
], TS);

}
