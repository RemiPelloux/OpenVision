import { require_util } from "../core/util.js";
import { require_mock_errors } from "./mock-errors.js";
import { require_mock_symbols } from "./mock-symbols.js";
var __wakaru_require_mock_utils_cache;
export function require_mock_utils() {
if (__wakaru_require_mock_utils_cache) return __wakaru_require_mock_utils_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_utils_cache = module2;
"use strict";
var { MockNotMatchedError } = require_mock_errors();
var { kDispatches, kMockAgent, kOriginalDispatch, kOrigin, kGetNetConnect } = require_mock_symbols();
var { buildURL, nop } = require_util();
var { STATUS_CODES } = require("http");
var { types: { isPromise } } = require("util");
function matchValue(match2, value) {
    if (typeof match2 === "string") {
        return match2 === value;
    }
    if (match2 instanceof RegExp) {
        return match2.test(value);
    }
    if (typeof match2 === "function") {
        return match2(value) === true;
    }
    return false;
}
function lowerCaseEntries(headers) {
    return Object.fromEntries(Object.entries(headers).map(([headerName, headerValue2])=>{
        return [
            headerName.toLocaleLowerCase(),
            headerValue2
        ];
    }));
}
function getHeaderByName(headers, key) {
    if (Array.isArray(headers)) {
        for(let i = 0; i < headers.length; i += 2){
            if (headers[i].toLocaleLowerCase() === key.toLocaleLowerCase()) {
                return headers[i + 1];
            }
        }
        return void 0;
    } else if (typeof headers.get === "function") {
        return headers.get(key);
    } else {
        return lowerCaseEntries(headers)[key.toLocaleLowerCase()];
    }
}
function buildHeadersFromArray(headers) {
    const clone3 = headers.slice();
    const entries = [];
    for(let index = 0; index < clone3.length; index += 2){
        entries.push([
            clone3[index],
            clone3[index + 1]
        ]);
    }
    return Object.fromEntries(entries);
}
function matchHeaders(mockDispatch2, headers) {
    if (typeof mockDispatch2.headers === "function") {
        if (Array.isArray(headers)) {
            headers = buildHeadersFromArray(headers);
        }
        return mockDispatch2.headers(headers ? lowerCaseEntries(headers) : {});
    }
    if (typeof mockDispatch2.headers === "undefined") {
        return true;
    }
    if (typeof headers !== "object" || typeof mockDispatch2.headers !== "object") {
        return false;
    }
    for (const [matchHeaderName, matchHeaderValue] of Object.entries(mockDispatch2.headers)){
        const headerValue2 = getHeaderByName(headers, matchHeaderName);
        if (!matchValue(matchHeaderValue, headerValue2)) {
            return false;
        }
    }
    return true;
}
function safeUrl(path64) {
    if (typeof path64 !== "string") {
        return path64;
    }
    const pathSegments = path64.split("?");
    if (pathSegments.length !== 2) {
        return path64;
    }
    const qp = new URLSearchParams(pathSegments.pop());
    qp.sort();
    return [
        ...pathSegments,
        qp.toString()
    ].join("?");
}
function matchKey(mockDispatch2, { path: path64, method, body, headers }) {
    const pathMatch = matchValue(mockDispatch2.path, path64);
    const methodMatch = matchValue(mockDispatch2.method, method);
    const bodyMatch = typeof mockDispatch2.body !== "undefined" ? matchValue(mockDispatch2.body, body) : true;
    const headersMatch = matchHeaders(mockDispatch2, headers);
    return pathMatch && methodMatch && bodyMatch && headersMatch;
}
function getResponseData(data) {
    if (Buffer.isBuffer(data)) {
        return data;
    } else if (typeof data === "object") {
        return JSON.stringify(data);
    } else {
        return data.toString();
    }
}
function getMockDispatch(mockDispatches, key) {
    const basePath = key.query ? buildURL(key.path, key.query) : key.path;
    const resolvedPath = typeof basePath === "string" ? safeUrl(basePath) : basePath;
    let matchedMockDispatches = mockDispatches.filter(({ consumed })=>!consumed).filter(({ path: path64 })=>matchValue(safeUrl(path64), resolvedPath));
    if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for path '${resolvedPath}'`);
    }
    matchedMockDispatches = matchedMockDispatches.filter(({ method })=>matchValue(method, key.method));
    if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for method '${key.method}'`);
    }
    matchedMockDispatches = matchedMockDispatches.filter(({ body })=>typeof body !== "undefined" ? matchValue(body, key.body) : true);
    if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for body '${key.body}'`);
    }
    matchedMockDispatches = matchedMockDispatches.filter((mockDispatch2)=>matchHeaders(mockDispatch2, key.headers));
    if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for headers '${typeof key.headers === "object" ? JSON.stringify(key.headers) : key.headers}'`);
    }
    return matchedMockDispatches[0];
}
function addMockDispatch(mockDispatches, key, data) {
    const baseData = {
        timesInvoked: 0,
        times: 1,
        persist: false,
        consumed: false
    };
    const replyData = typeof data === "function" ? {
        callback: data
    } : {
        ...data
    };
    const newMockDispatch = {
        ...baseData,
        ...key,
        pending: true,
        data: {
            error: null,
            ...replyData
        }
    };
    mockDispatches.push(newMockDispatch);
    return newMockDispatch;
}
function deleteMockDispatch(mockDispatches, key) {
    const index = mockDispatches.findIndex((dispatch)=>{
        if (!dispatch.consumed) {
            return false;
        }
        return matchKey(dispatch, key);
    });
    if (index !== -1) {
        mockDispatches.splice(index, 1);
    }
}
function buildKey(opts) {
    const { path: path64, method, body, headers, query } = opts;
    return {
        path: path64,
        method,
        body,
        headers,
        query
    };
}
function generateKeyValues(data) {
    return Object.entries(data).reduce((keyValuePairs, [key, value])=>[
            ...keyValuePairs,
            Buffer.from(`${key}`),
            Array.isArray(value) ? value.map((x)=>Buffer.from(`${x}`)) : Buffer.from(`${value}`)
        ], []);
}
function getStatusText(statusCode) {
    return STATUS_CODES[statusCode] || "unknown";
}
async function getResponse(body) {
    const buffers = [];
    for await (const data of body){
        buffers.push(data);
    }
    return Buffer.concat(buffers).toString("utf8");
}
function mockDispatch(opts, handler) {
    const key = buildKey(opts);
    const mockDispatch2 = getMockDispatch(this[kDispatches], key);
    mockDispatch2.timesInvoked++;
    if (mockDispatch2.data.callback) {
        mockDispatch2.data = {
            ...mockDispatch2.data,
            ...mockDispatch2.data.callback(opts)
        };
    }
    const { data: { statusCode, data, headers, trailers, error: error3 }, delay: delay3, persist } = mockDispatch2;
    const { timesInvoked, times } = mockDispatch2;
    mockDispatch2.consumed = !persist && timesInvoked >= times;
    mockDispatch2.pending = timesInvoked < times;
    if (error3 !== null) {
        deleteMockDispatch(this[kDispatches], key);
        handler.onError(error3);
        return true;
    }
    if (typeof delay3 === "number" && delay3 > 0) {
        setTimeout(()=>{
            handleReply(this[kDispatches]);
        }, delay3);
    } else {
        handleReply(this[kDispatches]);
    }
    function handleReply(mockDispatches, _data = data) {
        const optsHeaders = Array.isArray(opts.headers) ? buildHeadersFromArray(opts.headers) : opts.headers;
        const body = typeof _data === "function" ? _data({
            ...opts,
            headers: optsHeaders
        }) : _data;
        if (isPromise(body)) {
            body.then((newData)=>handleReply(mockDispatches, newData));
            return;
        }
        const responseData = getResponseData(body);
        const responseHeaders = generateKeyValues(headers);
        const responseTrailers = generateKeyValues(trailers);
        handler.abort = nop;
        handler.onHeaders(statusCode, responseHeaders, resume, getStatusText(statusCode));
        handler.onData(Buffer.from(responseData));
        handler.onComplete(responseTrailers);
        deleteMockDispatch(mockDispatches, key);
    }
    function resume() {}
    return true;
}
function buildMockDispatch() {
    const agent = this[kMockAgent];
    const origin = this[kOrigin];
    const originalDispatch = this[kOriginalDispatch];
    return function dispatch(opts, handler) {
        if (agent.isMockActive) {
            try {
                mockDispatch.call(this, opts, handler);
            } catch (error3) {
                if (error3 instanceof MockNotMatchedError) {
                    const netConnect = agent[kGetNetConnect]();
                    if (netConnect === false) {
                        throw new MockNotMatchedError(`${error3.message}: subsequent request to origin ${origin} was not allowed (net.connect disabled)`);
                    }
                    if (checkNetConnect(netConnect, origin)) {
                        originalDispatch.call(this, opts, handler);
                    } else {
                        throw new MockNotMatchedError(`${error3.message}: subsequent request to origin ${origin} was not allowed (net.connect is not enabled for this origin)`);
                    }
                } else {
                    throw error3;
                }
            }
        } else {
            originalDispatch.call(this, opts, handler);
        }
    };
}
function checkNetConnect(netConnect, origin) {
    const url2 = new URL(origin);
    if (netConnect === true) {
        return true;
    } else if (Array.isArray(netConnect) && netConnect.some((matcher)=>matchValue(matcher, url2.host))) {
        return true;
    }
    return false;
}
function buildMockOptions(opts) {
    if (opts) {
        const { agent, ...mockOptions } = opts;
        return mockOptions;
    }
}
module2.exports = {
    getResponseData,
    getMockDispatch,
    addMockDispatch,
    deleteMockDispatch,
    buildKey,
    generateKeyValues,
    matchValue,
    getResponse,
    getStatusText,
    mockDispatch,
    buildMockDispatch,
    checkNetConnect,
    buildMockOptions,
    getHeaderByName
};

return module2.exports;
}
