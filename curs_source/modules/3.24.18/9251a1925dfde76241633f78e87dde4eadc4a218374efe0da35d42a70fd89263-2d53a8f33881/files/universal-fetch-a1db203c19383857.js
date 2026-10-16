var __wakaru_require_universal_fetch_cache;
export function require_universal_fetch() {
if (__wakaru_require_universal_fetch_cache) return __wakaru_require_universal_fetch_cache;
var exports2 = {};
__wakaru_require_universal_fetch_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createFetchClient = createFetchClient;
exports2.createFetchHandler = createFetchHandler;
exports2.universalClientRequestToFetch = universalClientRequestToFetch;
exports2.universalClientResponseFromFetch = universalClientResponseFromFetch;
exports2.universalServerRequestFromFetch = universalServerRequestFromFetch;
exports2.universalServerResponseToFetch = universalServerResponseToFetch;
function createFetchClient(fetchFn) {
    return async function fetchClient(request3) {
        const res = await fetchFn(universalClientRequestToFetch(request3));
        return universalClientResponseFromFetch(res);
    };
}
function createFetchHandler(uHandler, options2) {
    async function handleFetch(req) {
        const uReq = universalServerRequestFromFetch(req, options2 !== null && options2 !== void 0 ? options2 : {});
        const uRes = await uHandler(uReq);
        return universalServerResponseToFetch(uRes);
    }
    return Object.assign(handleFetch, uHandler);
}
function universalClientRequestToFetch(req) {
    const body = req.body === void 0 ? null : iterableToReadableStream(req.body);
    return new Request(req.url, {
        method: req.method,
        headers: req.header,
        signal: req.signal,
        body
    });
}
function universalClientResponseFromFetch(res) {
    return {
        status: res.status,
        header: res.headers,
        body: iterableFromReadableStream(res.body),
        trailer: new Headers()
    };
}
function universalServerRequestFromFetch(req, options2) {
    var _a18;
    return {
        httpVersion: (_a18 = options2.httpVersion) !== null && _a18 !== void 0 ? _a18 : "",
        method: req.method,
        url: req.url,
        header: req.headers,
        body: iterableFromReadableStream(req.body),
        signal: req.signal
    };
}
function universalServerResponseToFetch(res) {
    let body = null;
    if (res.body !== void 0) {
        body = iterableToReadableStream(res.body);
    }
    return new Response(body, {
        status: res.status,
        headers: res.header
    });
}
function iterableToReadableStream(iterable) {
    const it2 = iterable[Symbol.asyncIterator]();
    return new ReadableStream({
        async pull (controller) {
            const r = await it2.next();
            if (r.done === true) {
                controller.close();
                return;
            }
            controller.enqueue(r.value);
        },
        async cancel (reason) {
            if (it2.throw) {
                try {
                    await it2.throw(reason);
                } catch (_a18) {}
            }
        }
    });
}
function iterableFromReadableStream(body) {
    const reader = body === null || body === void 0 ? void 0 : body.getReader();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    if (reader !== void 0) {
                        const r = await reader.read();
                        if (r.done) {
                            return {
                                done: true,
                                value: void 0
                            };
                        }
                        return r;
                    }
                    return {
                        done: true,
                        value: void 0
                    };
                },
                async throw (e) {
                    if (reader !== void 0) {
                        await reader.cancel(e);
                    }
                    return {
                        done: true,
                        value: void 0
                    };
                }
            };
        }
    };
}

return exports2;
}
