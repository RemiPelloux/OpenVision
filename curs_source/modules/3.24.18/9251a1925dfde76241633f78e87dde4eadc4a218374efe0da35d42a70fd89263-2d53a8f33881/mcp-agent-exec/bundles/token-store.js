import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
var import_promises25, path23, FileBasedTokenStore;
export { FileBasedTokenStore, import_promises25, path23 };
var __wakaru_init_token_store_initialized = false;
export function init_token_store() {
if (__wakaru_init_token_store_initialized) return;
__wakaru_init_token_store_initialized = true;
"use strict";
import_promises25 = require("node:fs/promises");
path23 = __toESM(require("node:path"), 1);
FileBasedTokenStore = class _FileBasedTokenStore {
    constructor(mcpAuthPath){
        this.mcpAuthPath = mcpAuthPath;
        const cachedPromise = _FileBasedTokenStore.mcpAuthPromises.get(mcpAuthPath);
        if (cachedPromise) {
            this.mcpAuthPromise = cachedPromise;
        } else {
            const mcpAuthPromise = this.loadMcpAuth();
            this.mcpAuthPromise = mcpAuthPromise;
            _FileBasedTokenStore.mcpAuthPromises.set(mcpAuthPath, mcpAuthPromise);
            void mcpAuthPromise.catch(()=>{
                if (_FileBasedTokenStore.mcpAuthPromises.get(mcpAuthPath) === mcpAuthPromise) {
                    _FileBasedTokenStore.mcpAuthPromises.delete(mcpAuthPath);
                }
            });
        }
        if (!_FileBasedTokenStore.saveLocks.has(mcpAuthPath)) {
            _FileBasedTokenStore.saveLocks.set(mcpAuthPath, Promise.resolve());
        }
    }
    async loadMcpAuth() {
        try {
            const mcpAuth = await (0, import_promises25.readFile)(this.mcpAuthPath, "utf8");
            const data = JSON.parse(mcpAuth);
            if (data && typeof data === "object") {
                const hasDirectTokens = Object.values(data).some((value)=>value && typeof value === "object" && value !== null && ("access_token" in value || "refresh_token" in value) && !("tokens" in value) && !("clientInfo" in value));
                if (hasDirectTokens) {
                    const converted = {};
                    for (const [key, value] of Object.entries(data)){
                        converted[key] = {
                            tokens: value
                        };
                    }
                    return converted;
                }
                const result = {};
                for (const [key, value] of Object.entries(data)){
                    if (value && typeof value === "object" && value !== null) {
                        result[key] = {
                            tokens: "tokens" in value ? value.tokens : void 0,
                            clientInfo: "clientInfo" in value ? value.clientInfo : void 0
                        };
                    }
                }
                return result;
            }
            return {};
        } catch (e) {
            if (e instanceof Error && e.message.includes("ENOENT")) {
                return {};
            }
            throw e;
        }
    }
    async loadTokens(identifier2) {
        const mcpAuth = await this.mcpAuthPromise;
        return mcpAuth[identifier2]?.tokens;
    }
    async saveTokens(identifier2, tokens) {
        await this.withSaveLock(async ()=>{
            const mcpAuth = await this.mcpAuthPromise;
            if (!mcpAuth[identifier2]) {
                mcpAuth[identifier2] = {};
            }
            mcpAuth[identifier2].tokens = tokens;
            await this.saveMcpAuth(mcpAuth);
        });
    }
    async loadClientInformation(identifier2) {
        const mcpAuth = await this.mcpAuthPromise;
        return mcpAuth[identifier2]?.clientInfo;
    }
    async withSaveLock(fn) {
        const previousLock = _FileBasedTokenStore.saveLocks.get(this.mcpAuthPath) ?? Promise.resolve();
        let releaseLock;
        _FileBasedTokenStore.saveLocks.set(this.mcpAuthPath, new Promise((resolve36)=>{
            releaseLock = resolve36;
        }));
        try {
            await previousLock;
            return await fn();
        } finally{
            releaseLock();
        }
    }
    async saveClientInformation(identifier2, clientInfo) {
        await this.withSaveLock(async ()=>{
            const mcpAuth = await this.mcpAuthPromise;
            if (!mcpAuth[identifier2]) {
                mcpAuth[identifier2] = {};
            }
            mcpAuth[identifier2].clientInfo = clientInfo;
            await this.saveMcpAuth(mcpAuth);
        });
    }
    async deleteCredentials(identifier2) {
        await this.withSaveLock(async ()=>{
            const mcpAuth = await this.mcpAuthPromise;
            if (identifier2 in mcpAuth) {
                delete mcpAuth[identifier2];
                await this.saveMcpAuth(mcpAuth);
            }
        });
    }
    async saveMcpAuth(data) {
        await (0, import_promises25.mkdir)(path23.dirname(this.mcpAuthPath), {
            recursive: true
        });
        await (0, import_promises25.writeFile)(this.mcpAuthPath, JSON.stringify(data, null, 2));
    }
};
FileBasedTokenStore.mcpAuthPromises = new Map();
FileBasedTokenStore.saveLocks = new Map();

}
