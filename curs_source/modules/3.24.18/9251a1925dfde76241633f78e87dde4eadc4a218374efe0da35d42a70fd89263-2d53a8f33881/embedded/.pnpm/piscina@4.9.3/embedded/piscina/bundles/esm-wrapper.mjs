import { __toESM } from "../../../../../../agent-host/dist/storage/sqlite-store.js";
import { require_main2 } from "./main.js";
var import_main, ArrayTaskQueue, FixedQueue, Piscina, isWorkerThread, move, queueOptionsSymbol, transferableSymbol, valueSymbol, version2, workerData;
export { ArrayTaskQueue, FixedQueue, Piscina, import_main, isWorkerThread, move, queueOptionsSymbol, transferableSymbol, valueSymbol, version2, workerData };
var __wakaru_init_esm_wrapper_initialized = false;
export function init_esm_wrapper() {
if (__wakaru_init_esm_wrapper_initialized) return;
__wakaru_init_esm_wrapper_initialized = true;
import_main = __toESM(require_main2(), 1);
ArrayTaskQueue = import_main.default.ArrayTaskQueue;
FixedQueue = import_main.default.FixedQueue;
Piscina = import_main.default.Piscina;
isWorkerThread = import_main.default.isWorkerThread;
move = import_main.default.move;
queueOptionsSymbol = import_main.default.queueOptionsSymbol;
transferableSymbol = import_main.default.transferableSymbol;
valueSymbol = import_main.default.valueSymbol;
version2 = import_main.default.version;
workerData = import_main.default.workerData;

}
