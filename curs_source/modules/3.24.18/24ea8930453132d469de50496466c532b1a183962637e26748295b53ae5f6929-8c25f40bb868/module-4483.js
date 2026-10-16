var globalThis2 = require("./module-4576.js");
var getBuiltInNodeModule = require("./module-9429.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = require("./module-1548.js");
var structuredClone2 = globalThis2.structuredClone;
var $ArrayBuffer = globalThis2.ArrayBuffer;
var $MessageChannel = globalThis2.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;
if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    detach = function(transferable) {
        structuredClone2(transferable, {
            transfer: [
                transferable
            ]
        });
    };
} else if ($ArrayBuffer) try {
    if (!$MessageChannel) {
        WorkerThreads = getBuiltInNodeModule("worker_threads");
        if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
    }
    if ($MessageChannel) {
        channel = new $MessageChannel();
        buffer = new $ArrayBuffer(2);
        $detach = function(transferable) {
            channel.port1.postMessage(null, [
                transferable
            ]);
        };
        if (buffer.byteLength === 2) {
            $detach(buffer);
            if (buffer.byteLength === 0) detach = $detach;
        }
    }
} catch (error) {}
module.exports = detach;
