import { require_compression2 } from "./compression.js";
import { require_node_universal_handler } from "./node-universal-handler.js";
import { require_cjs3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { require_protocol } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/protocol/index.js";
var __wakaru_require_connect_node_adapter_cache;
export function require_connect_node_adapter() {
if (__wakaru_require_connect_node_adapter_cache) return __wakaru_require_connect_node_adapter_cache;
var exports2 = {};
__wakaru_require_connect_node_adapter_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.connectNodeAdapter = connectNodeAdapter2;
var connect_1 = require_cjs3();
var protocol_1 = require_protocol();
var node_universal_handler_js_1 = require_node_universal_handler();
var compression_js_1 = require_compression2();
function connectNodeAdapter2(options2) {
    var _a18;
    if (options2.acceptCompression === void 0) {
        options2.acceptCompression = [
            compression_js_1.compressionGzip,
            compression_js_1.compressionBrotli
        ];
    }
    const router = (0, connect_1.createConnectRouter)(options2);
    options2.routes(router);
    const prefix = (_a18 = options2.requestPathPrefix) !== null && _a18 !== void 0 ? _a18 : "";
    const paths = new Map();
    for (const uHandler of router.handlers){
        paths.set(prefix + uHandler.requestPath, uHandler);
    }
    return function nodeRequestHandler(req, res) {
        var _a19, _b2, _c, _d;
        const uHandler = paths.get((_b2 = (_a19 = req.url) === null || _a19 === void 0 ? void 0 : _a19.split("?", 2)[0]) !== null && _b2 !== void 0 ? _b2 : "");
        if (!uHandler) {
            ((_c = options2.fallback) !== null && _c !== void 0 ? _c : fallback3)(req, res);
            return;
        }
        const uReq = (0, node_universal_handler_js_1.universalRequestFromNodeRequest)(req, res, void 0, (_d = options2.contextValues) === null || _d === void 0 ? void 0 : _d.call(options2, req));
        uHandler(uReq).then((uRes)=>(0, node_universal_handler_js_1.universalResponseToNodeResponse)(uRes, res)).catch((reason)=>{
            if (connect_1.ConnectError.from(reason).code == connect_1.Code.Aborted) {
                return;
            }
            console.error(`handler for rpc ${uHandler.method.name} of ${uHandler.service.typeName} failed`, reason);
        });
    };
}
var fallback3 = (request3, response)=>{
    response.writeHead(protocol_1.uResponseNotFound.status);
    response.end();
};

return exports2;
}
