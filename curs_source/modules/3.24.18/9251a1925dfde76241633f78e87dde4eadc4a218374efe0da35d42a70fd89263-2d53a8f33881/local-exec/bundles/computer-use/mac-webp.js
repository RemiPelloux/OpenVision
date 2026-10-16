import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { getCreateRequire, importJsquash, resolveJsquashFile } from "../../../esm_exports8.js";
var import_node_fs24, NodeModuleNs, import_node_path42, import_node_url3, MAC_WEBP_RUNTIME_HELPER, createCurrentModuleRequire, MAC_WEBP_IMPORT_HOOK, memoizedAsync, loadDecoder, loadEncoder, encodeJsquashWebp, encodeMacLosslessWebp;
export { MAC_WEBP_IMPORT_HOOK, MAC_WEBP_RUNTIME_HELPER, NodeModuleNs, createCurrentModuleRequire, encodeJsquashWebp, encodeMacLosslessWebp, import_node_fs24, import_node_path42, import_node_url3, loadDecoder, loadEncoder, memoizedAsync };
var __wakaru_init_mac_webp_initialized = false;
export function init_mac_webp() {
if (__wakaru_init_mac_webp_initialized) return;
__wakaru_init_mac_webp_initialized = true;
"use strict";
import_node_fs24 = require("node:fs");
NodeModuleNs = __toESM(require("node:module"), 1);
import_node_path42 = require("node:path");
import_node_url3 = require("node:url");
MAC_WEBP_RUNTIME_HELPER = "mac-webp-runtime.cjs";
createCurrentModuleRequire = ()=>{
    const originalPrepareStackTrace = Error.prepareStackTrace;
    try {
        Error.prepareStackTrace = (_2, callSites)=>callSites;
        const stack = new Error().stack;
        const currentModuleUrl = Array.isArray(stack) ? stack[0]?.getFileName() : void 0;
        return getCreateRequire()(typeof currentModuleUrl === "string" && currentModuleUrl.length > 0 ? currentModuleUrl : (0, import_node_path42.join)(process.cwd(), "package.json"));
    } finally{
        Error.prepareStackTrace = originalPrepareStackTrace;
    }
};
MAC_WEBP_IMPORT_HOOK = "__MAC_WEBP_IMPORT__";
memoizedAsync = (factory)=>{
    let pending;
    return ()=>{
        if (pending === void 0) {
            const next = factory();
            next.catch(()=>{
                if (pending === next) {
                    pending = void 0;
                }
            });
            pending = next;
        }
        return pending;
    };
};
loadDecoder = memoizedAsync(async ()=>{
    const mod2 = await importJsquash("decode.js");
    await mod2.init({
        wasmBinary: await import_node_fs24.promises.readFile(resolveJsquashFile("codec", "dec", "webp_dec.wasm"))
    });
    return mod2;
});
loadEncoder = memoizedAsync(async ()=>{
    const [utils2, meta, enc] = await Promise.all([
        importJsquash("utils.js"),
        importJsquash("meta.js"),
        importJsquash("codec", "enc", "webp_enc.js")
    ]);
    const module2 = await utils2.initEmscriptenModule(enc.default, void 0, {
        wasmBinary: await import_node_fs24.promises.readFile(resolveJsquashFile("codec", "enc", "webp_enc.wasm"))
    });
    return {
        module: module2,
        defaultOptions: meta.defaultOptions
    };
});
encodeJsquashWebp = async (bitmap, options2)=>{
    const { module: module2, defaultOptions: defaultOptions2 } = await loadEncoder();
    const rgba = new Uint8ClampedArray(bitmap.data.buffer, bitmap.data.byteOffset, bitmap.data.byteLength);
    return Buffer.from(module2.encode(rgba, bitmap.width, bitmap.height, {
        ...defaultOptions2,
        ...options2
    }));
};
encodeMacLosslessWebp = (bitmap)=>encodeJsquashWebp(bitmap, {
        lossless: 1,
        exact: 1
    });

}
