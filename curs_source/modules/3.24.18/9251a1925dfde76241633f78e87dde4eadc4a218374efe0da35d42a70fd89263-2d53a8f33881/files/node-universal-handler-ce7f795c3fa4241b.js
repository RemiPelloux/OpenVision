import { require_node_error } from "./node-error.js";
import { require_node_universal_header } from "./node-universal-header.js";
import { require_cjs3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_node_universal_handler_cache;
export function require_node_universal_handler() {
if (__wakaru_require_node_universal_handler_cache) return __wakaru_require_node_universal_handler_cache;
var exports2 = {};
__wakaru_require_node_universal_handler_cache = exports2;
"use strict";
var __asyncValues6 = exports2 && exports2.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m2 = o[Symbol.asyncIterator], i;
    return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v2) {
            return new Promise(function(resolve36, reject2) {
                v2 = o[n](v2), settle(resolve36, reject2, v2.done, v2.value);
            });
        };
    }
    function settle(resolve36, reject2, d, v2) {
        Promise.resolve(v2).then(function(v3) {
            resolve36({
                value: v3,
                done: d
            });
        }, reject2);
    }
};
var __await6 = exports2 && exports2.__await || function(v2) {
    return this instanceof __await6 ? (this.v = v2, this) : new __await6(v2);
};
var __asyncGenerator6 = exports2 && exports2.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f2) {
        return function(v2) {
            return Promise.resolve(v2).then(f2, reject2);
        };
    }
    function verb(n, f2) {
        if (g2[n]) {
            i[n] = function(v2) {
                return new Promise(function(a, b2) {
                    q2.push([
                        n,
                        v2,
                        a,
                        b2
                    ]) > 1 || resume(n, v2);
                });
            };
            if (f2) i[n] = f2(i[n]);
        }
    }
    function resume(n, v2) {
        try {
            step(g2[n](v2));
        } catch (e) {
            settle(q2[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject2) : settle(q2[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject2(value) {
        resume("throw", value);
    }
    function settle(f2, v2) {
        if (f2(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
    }
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.universalRequestFromNodeRequest = universalRequestFromNodeRequest2;
exports2.universalResponseToNodeResponse = universalResponseToNodeResponse2;
var connect_1 = require_cjs3();
var node_universal_header_js_1 = require_node_universal_header();
var node_error_js_1 = require_node_error();
function universalRequestFromNodeRequest2(nodeRequest, ...rest) {
    var _a18, _b2;
    const nodeResponse = rest.length === 3 ? rest[0] : void 0;
    const parsedJsonBody = rest.length === 3 ? rest[1] : rest[0];
    const contextValues = rest.length === 3 ? rest[2] : rest[1];
    const encrypted = "encrypted" in nodeRequest.socket && nodeRequest.socket.encrypted;
    const protocol = encrypted ? "https" : "http";
    const authority = "authority" in nodeRequest ? nodeRequest.authority : nodeRequest.headers.host;
    const pathname = (_a18 = nodeRequest.url) !== null && _a18 !== void 0 ? _a18 : "";
    if (authority === void 0) {
        throw new connect_1.ConnectError("unable to determine request authority from Node.js server request", connect_1.Code.Internal);
    }
    const body = parsedJsonBody !== void 0 ? parsedJsonBody : asyncIterableFromNodeServerRequest2(nodeRequest);
    const abortController = new AbortController();
    if ("stream" in nodeRequest) {
        nodeRequest.once("close", ()=>{
            const err = (0, node_error_js_1.connectErrorFromH2ResetCode)(nodeRequest.stream.rstCode);
            if (err !== void 0) {
                abortController.abort(err);
            } else {
                abortController.abort();
            }
        });
    } else {
        const nodeResponsOrRequest = nodeResponse !== null && nodeResponse !== void 0 ? nodeResponse : nodeRequest;
        const onH1Error = (e)=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            abortController.abort((0, node_error_js_1.connectErrorFromNodeReason)(e));
        };
        const onH1Close = ()=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            abortController.abort(nodeRequest.errored ? (0, node_error_js_1.connectErrorFromNodeReason)(nodeRequest.errored) : void 0);
        };
        nodeRequest.once("error", onH1Error);
        nodeResponsOrRequest.once("close", onH1Close);
    }
    return {
        httpVersion: nodeRequest.httpVersion,
        method: (_b2 = nodeRequest.method) !== null && _b2 !== void 0 ? _b2 : "",
        url: new URL(pathname, `${protocol}://${authority}`).toString(),
        header: (0, node_universal_header_js_1.nodeHeaderToWebHeader)(nodeRequest.headers),
        body,
        signal: abortController.signal,
        contextValues
    };
}
async function universalResponseToNodeResponse2(universalResponse, nodeResponse) {
    var _a18, _b2, _c;
    const it2 = (_a18 = universalResponse.body) === null || _a18 === void 0 ? void 0 : _a18[Symbol.asyncIterator]();
    let isWriteError = false;
    try {
        if (it2 !== void 0) {
            let chunk = await it2.next();
            isWriteError = true;
            nodeResponse.writeHead(universalResponse.status, (0, node_universal_header_js_1.webHeaderToNodeHeaders)(universalResponse.header));
            isWriteError = false;
            for(; chunk.done !== true; chunk = await it2.next()){
                isWriteError = true;
                await write2(nodeResponse, chunk.value);
                if ("flush" in nodeResponse && typeof nodeResponse.flush == "function") {
                    nodeResponse.flush();
                }
                isWriteError = false;
            }
        }
        if (!nodeResponse.headersSent) {
            nodeResponse.writeHead(universalResponse.status, (0, node_universal_header_js_1.webHeaderToNodeHeaders)(universalResponse.header));
        }
        if (universalResponse.trailer) {
            nodeResponse.addTrailers((0, node_universal_header_js_1.webHeaderToNodeHeaders)(universalResponse.trailer));
        }
        await new Promise((resolve36)=>{
            nodeResponse.once("end", resolve36);
            nodeResponse.end();
        });
    } catch (e) {
        if (isWriteError) {
            (_b2 = it2 === null || it2 === void 0 ? void 0 : it2.throw) === null || _b2 === void 0 ? void 0 : _b2.call(it2, e).catch(()=>{});
        }
        throw (0, node_error_js_1.connectErrorFromNodeReason)(e);
    } finally{
        (_c = it2 === null || it2 === void 0 ? void 0 : it2.return) === null || _c === void 0 ? void 0 : _c.call(it2).catch(()=>{});
    }
}
function asyncIterableFromNodeServerRequest2(request3) {
    return __asyncGenerator6(this, arguments, function* asyncIterableFromNodeServerRequest_1() {
        var _a18, e_1, _b2, _c;
        const it2 = request3.iterator({
            destroyOnReturn: false
        });
        try {
            for(var _d = true, it_1 = __asyncValues6(it2), it_1_1; it_1_1 = yield __await6(it_1.next()), _a18 = it_1_1.done, !_a18; _d = true){
                _c = it_1_1.value;
                _d = false;
                const chunk = _c;
                yield yield __await6(chunk);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a18 && (_b2 = it_1.return)) yield __await6(_b2.call(it_1));
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    });
}
function write2(stream3, data) {
    return new Promise((resolve36, reject2)=>{
        if (stream3.errored) {
            return error3(stream3.errored);
        }
        stream3.once("error", error3);
        stream3.once("drain", drain);
        const flushed = stream3.write(data, "binary", function(err) {
            if (err && !flushed) {
                error3(err);
                stream3.once("error", ()=>{});
            }
        });
        if (flushed) {
            drain();
        }
        function error3(err) {
            stream3.off("error", error3);
            stream3.off("drain", drain);
            reject2(err);
        }
        function drain() {
            stream3.off("error", error3);
            stream3.off("drain", drain);
            resolve36();
        }
    });
}

return exports2;
}
