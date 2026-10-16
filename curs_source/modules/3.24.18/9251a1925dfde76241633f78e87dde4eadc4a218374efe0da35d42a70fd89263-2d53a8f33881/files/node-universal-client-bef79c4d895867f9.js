import { require_http2_session_manager } from "./http2-session-manager.js";
import { require_node_error } from "./node-error.js";
import { require_node_universal_header } from "./node-universal-header.js";
import { require_cjs3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { require_protocol } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/protocol/index.js";
var __wakaru_require_node_universal_client_cache;
export function require_node_universal_client() {
if (__wakaru_require_node_universal_client_cache) return __wakaru_require_node_universal_client_cache;
var exports2 = {};
__wakaru_require_node_universal_client_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createNodeHttpClient = createNodeHttpClient2;
var http4 = require("http");
var https3 = require("https");
var connect_1 = require_cjs3();
var node_universal_header_js_1 = require_node_universal_header();
var node_error_js_1 = require_node_error();
var protocol_1 = require_protocol();
var http2_session_manager_js_1 = require_http2_session_manager();
function createNodeHttpClient2(options2) {
    var _a18;
    if (options2.httpVersion == "1.1") {
        return createNodeHttp1Client2(options2.nodeOptions);
    }
    const sessionProvider = (_a18 = options2.sessionProvider) !== null && _a18 !== void 0 ? _a18 : ((url2)=>new http2_session_manager_js_1.Http2SessionManager(url2));
    return createNodeHttp2Client2(sessionProvider);
}
function createNodeHttp1Client2(httpOptions) {
    return async function request3(req) {
        const sentinel = createSentinel2(req.signal);
        return new Promise((resolve36, reject2)=>{
            sentinel.catch((e)=>{
                reject2(e);
            });
            h1Request2(sentinel, req.url, Object.assign(Object.assign({}, httpOptions), {
                headers: (0, node_universal_header_js_1.webHeaderToNodeHeaders)(req.header, httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.headers),
                method: req.method
            }), (request4)=>{
                void sinkRequest2(req, request4, sentinel);
                request4.on("response", (response)=>{
                    var _a18;
                    response.on("error", sentinel.reject);
                    sentinel.catch((reason)=>response.destroy((0, node_error_js_1.connectErrorFromNodeReason)(reason)));
                    const trailer = new Headers();
                    resolve36({
                        status: (_a18 = response.statusCode) !== null && _a18 !== void 0 ? _a18 : 0,
                        header: (0, node_universal_header_js_1.nodeHeaderToWebHeader)(response.headers),
                        body: h1ResponseIterable2(sentinel, response, trailer),
                        trailer
                    });
                });
            });
        });
    };
}
function createNodeHttp2Client2(sessionProvider) {
    return function request3(req) {
        const sentinel = createSentinel2(req.signal);
        const sessionManager = sessionProvider(req.url);
        return new Promise((resolve36, reject2)=>{
            sentinel.catch((e)=>{
                reject2(e);
            });
            h2Request2(sentinel, sessionManager, req.url, req.method, (0, node_universal_header_js_1.webHeaderToNodeHeaders)(req.header), {}, (stream3)=>{
                void sinkRequest2(req, stream3, sentinel);
                stream3.on("response", (headers)=>{
                    var _a18;
                    const response = {
                        status: (_a18 = headers[":status"]) !== null && _a18 !== void 0 ? _a18 : 0,
                        header: (0, node_universal_header_js_1.nodeHeaderToWebHeader)(headers),
                        body: h2ResponseIterable2(sentinel, stream3, sessionManager),
                        trailer: h2ResponseTrailer2(stream3)
                    };
                    resolve36(response);
                });
            });
        });
    };
}
function h1Request2(sentinel, url2, options2, onRequest) {
    let request3;
    if (new URL(url2).protocol.startsWith("https")) {
        request3 = https3.request(url2, options2);
    } else {
        request3 = http4.request(url2, options2);
    }
    sentinel.catch((reason)=>request3.destroy((0, node_error_js_1.connectErrorFromNodeReason)(reason)));
    request3.flushHeaders();
    request3.on("error", sentinel.reject);
    request3.on("socket", function onRequestSocket(socket) {
        function onSocketConnect() {
            socket.off("connect", onSocketConnect);
            onRequest(request3);
        }
        if (socket.readyState === "open") {
            onRequest(request3);
        } else {
            socket.on("connect", onSocketConnect);
        }
    });
}
function h1ResponseIterable2(sentinel, response, trailer) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        (0, node_universal_header_js_1.nodeHeaderToWebHeader)(response.trailers).forEach((value, key)=>{
                            trailer.set(key, value);
                        });
                        sentinel.resolve();
                        await sentinel;
                    }
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
function h2Request2(sentinel, sm, url2, method, headers, options2, onStream) {
    const requestUrl = new URL(url2);
    if (requestUrl.origin !== sm.authority) {
        const message = `cannot make a request to ${requestUrl.origin}: the http2 session is connected to ${sm.authority}`;
        sentinel.reject(new connect_1.ConnectError(message, connect_1.Code.Internal));
        return;
    }
    sm.request(method, requestUrl.pathname + requestUrl.search, headers, {}).then((stream3)=>{
        sentinel.catch((reason)=>{
            if (stream3.closed) {
                return;
            }
            const rstCode = reason instanceof connect_1.ConnectError && reason.code == connect_1.Code.Canceled ? node_error_js_1.H2Code.CANCEL : node_error_js_1.H2Code.INTERNAL_ERROR;
            return new Promise((resolve36)=>stream3.close(rstCode, resolve36));
        });
        stream3.on("error", function h2StreamError(e) {
            if (stream3.writableEnded && (0, node_error_js_1.unwrapNodeErrorChain)(e).map(node_error_js_1.getNodeErrorProps).some((p2)=>p2.code == "ERR_STREAM_WRITE_AFTER_END")) {
                return;
            }
            sentinel.reject(e);
        });
        stream3.on("close", function h2StreamClose() {
            const err = (0, node_error_js_1.connectErrorFromH2ResetCode)(stream3.rstCode);
            if (err) {
                sentinel.reject(err);
            }
        });
        onStream(stream3);
    }, (reason)=>{
        sentinel.reject(reason);
    });
}
function h2ResponseTrailer2(response) {
    const trailer = new Headers();
    response.on("trailers", (args)=>{
        (0, node_universal_header_js_1.nodeHeaderToWebHeader)(args).forEach((value, key)=>{
            trailer.set(key, value);
        });
    });
    return trailer;
}
function h2ResponseIterable2(sentinel, response, sm) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        sentinel.resolve();
                        await sentinel;
                    }
                    sm === null || sm === void 0 ? void 0 : sm.notifyResponseByteRead(response);
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
async function sinkRequest2(request3, nodeRequest, sentinel) {
    if (request3.body === void 0) {
        await new Promise((resolve36)=>nodeRequest.end(resolve36));
        return;
    }
    const it2 = request3.body[Symbol.asyncIterator]();
    return new Promise((resolve36)=>{
        writeNext();
        function writeNext() {
            if (sentinel.isRejected()) {
                return;
            }
            it2.next().then((r)=>{
                if (r.done === true) {
                    nodeRequest.end(resolve36);
                    return;
                }
                nodeRequest.write(r.value, "binary", function(e) {
                    if (e === null || e === void 0) {
                        writeNext();
                        return;
                    }
                    if (it2.throw !== void 0) {
                        it2.throw((0, node_error_js_1.connectErrorFromNodeReason)(e)).catch(()=>{});
                    }
                    if (nodeRequest.writableEnded && (0, node_error_js_1.unwrapNodeErrorChain)(e).map(node_error_js_1.getNodeErrorProps).some((p2)=>p2.code == "ERR_STREAM_WRITE_AFTER_END")) {
                        return;
                    }
                    sentinel.reject(e);
                });
            }, (e)=>{
                sentinel.reject(e);
            });
        }
    });
}
function createSentinel2(signal) {
    let res;
    let rej;
    let resolved = false;
    let rejected = false;
    const p2 = new Promise((resolve36, reject2)=>{
        res = resolve36;
        rej = reject2;
    });
    const c = {
        resolve () {
            if (!resolved && !rejected) {
                resolved = true;
                res === null || res === void 0 ? void 0 : res();
            }
        },
        isResolved () {
            return resolved;
        },
        reject (reason) {
            if (!resolved && !rejected) {
                rejected = true;
                rej === null || rej === void 0 ? void 0 : rej((0, node_error_js_1.connectErrorFromNodeReason)(reason));
            }
        },
        isRejected () {
            return rejected;
        },
        async race (promise) {
            const r = await Promise.race([
                promise,
                p2
            ]);
            if (r === void 0 && resolved) {
                throw new connect_1.ConnectError("sentinel completed early", connect_1.Code.Internal);
            }
            return r;
        }
    };
    const s3 = Object.assign(p2, c);
    function onSignalAbort() {
        c.reject((0, protocol_1.getAbortSignalReason)(this));
    }
    if (signal) {
        if (signal.aborted) {
            c.reject((0, protocol_1.getAbortSignalReason)(signal));
        } else {
            signal.addEventListener("abort", onSignalAbort);
        }
        p2.finally(()=>signal.removeEventListener("abort", onSignalAbort)).catch(()=>{});
    }
    return s3;
}

return exports2;
}
