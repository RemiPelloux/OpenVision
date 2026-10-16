import { require_common } from "./node_modules/.pnpm/piscina@4.9.3/node_modules/piscina/dist/common.js";
import { require_symbols } from "./node_modules/.pnpm/piscina@4.9.3/node_modules/piscina/dist/symbols.js";
"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var node_worker_threads_1 = require("node:worker_threads");
var node_url_1 = require("node:url");
var symbols_1 = require_symbols();
var common_1 = require_common();
common_1.commonState.isWorkerThread = true;
common_1.commonState.workerData = node_worker_threads_1.workerData;
var handlerCache = new Map();
var useAtomics = process.env.PISCINA_DISABLE_ATOMICS !== "1";
var importESMCached;
function getImportESM() {
    if (importESMCached === void 0) {
        importESMCached = new Function("specifier", "return import(specifier)");
    }
    return importESMCached;
}
async function getHandler(filename, name) {
    let handler = handlerCache.get(`${filename}/${name}`);
    if (handler !== void 0) {
        return handler;
    }
    try {
        handler = await Promise.resolve(`${filename}`).then((s)=>__importStar(require(s)));
        if (typeof handler !== "function") {
            handler = await handler[name];
        }
    } catch  {}
    if (typeof handler !== "function") {
        handler = await getImportESM()((0, node_url_1.pathToFileURL)(filename).href);
        if (typeof handler !== "function") {
            handler = await handler[name];
        }
    }
    if (typeof handler !== "function") {
        return null;
    }
    if (handlerCache.size > 1e3) {
        const [[key]] = handlerCache;
        handlerCache.delete(key);
    }
    handlerCache.set(`${filename}/${name}`, handler);
    return handler;
}
node_worker_threads_1.parentPort.on("message", (message)=>{
    useAtomics = process.env.PISCINA_DISABLE_ATOMICS === "1" ? false : message.useAtomics;
    const { port, sharedBuffer, filename, name, niceIncrement } = message;
    (async function() {
        try {
            if (niceIncrement !== 0) {
                (await Promise.resolve().then(()=>__importStar(require("@napi-rs/nice")))).nice(niceIncrement);
            }
        } catch  {}
        if (filename !== null) {
            await getHandler(filename, name);
        }
        const readyMessage = {
            [common_1.READY]: true
        };
        node_worker_threads_1.parentPort.postMessage(readyMessage);
        port.on("message", onMessage.bind(null, port, sharedBuffer));
        atomicsWaitLoop(port, sharedBuffer);
    })().catch(throwInNextTick);
});
var currentTasks = 0;
var lastSeenRequestCount = 0;
function atomicsWaitLoop(port, sharedBuffer) {
    if (!useAtomics) return;
    while(currentTasks === 0){
        Atomics.wait(sharedBuffer, symbols_1.kRequestCountField, lastSeenRequestCount);
        lastSeenRequestCount = Atomics.load(sharedBuffer, symbols_1.kRequestCountField);
        let entry;
        while((entry = (0, node_worker_threads_1.receiveMessageOnPort)(port)) !== void 0){
            onMessage(port, sharedBuffer, entry.message);
        }
    }
}
function onMessage(port, sharedBuffer, message) {
    currentTasks++;
    const { taskId, task, filename, name } = message;
    (async function() {
        let response;
        let transferList = [];
        try {
            const handler = await getHandler(filename, name);
            if (handler === null) {
                throw new Error(`No handler function exported from ${filename}`);
            }
            let result = await handler(task);
            if ((0, common_1.isMovable)(result)) {
                transferList = transferList.concat(result[symbols_1.kTransferable]);
                result = result[symbols_1.kValue];
            }
            response = {
                taskId,
                result,
                error: null
            };
            if (process.stdout.writableLength > 0) {
                await new Promise((resolve)=>process.stdout.write("", resolve));
            }
            if (process.stderr.writableLength > 0) {
                await new Promise((resolve)=>process.stderr.write("", resolve));
            }
        } catch (error) {
            response = {
                taskId,
                result: null,
                error
            };
        }
        currentTasks--;
        port.postMessage(response, transferList);
        Atomics.add(sharedBuffer, symbols_1.kResponseCountField, 1);
        atomicsWaitLoop(port, sharedBuffer);
    })().catch(throwInNextTick);
}
function throwInNextTick(error) {
    process.nextTick(()=>{
        throw error;
    });
}
