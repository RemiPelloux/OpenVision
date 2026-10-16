import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_util8 } from "../core/util.js";
var __wakaru_require_redirect_handler_cache;
export function require_redirect_handler() {
if (__wakaru_require_redirect_handler_cache) return __wakaru_require_redirect_handler_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_redirect_handler_cache = module2;
"use strict";
var util2 = require_util8();
var { kBodyUsed } = require_symbols6();
var assert4 = require("node:assert");
var { InvalidArgumentError: InvalidArgumentError3 } = require_errors2();
var EE = require("node:events");
var redirectableStatusCodes = [
    300,
    301,
    302,
    303,
    307,
    308
];
var kBody = Symbol("body");
var BodyAsyncIterable = class {
    constructor(body){
        this[kBody] = body;
        this[kBodyUsed] = false;
    }
    async *[Symbol.asyncIterator]() {
        assert4(!this[kBodyUsed], "disturbed");
        this[kBodyUsed] = true;
        yield* this[kBody];
    }
};
var RedirectHandler = class {
    constructor(dispatch, maxRedirections, opts, handler){
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
            throw new InvalidArgumentError3("maxRedirections must be a positive number");
        }
        util2.validateHandler(handler, opts.method, opts.upgrade);
        this.dispatch = dispatch;
        this.location = null;
        this.abort = null;
        this.opts = {
            ...opts,
            maxRedirections: 0
        };
        this.maxRedirections = maxRedirections;
        this.handler = handler;
        this.history = [];
        this.redirectionLimitReached = false;
        if (util2.isStream(this.opts.body)) {
            if (util2.bodyLength(this.opts.body) === 0) {
                this.opts.body.on("data", function() {
                    assert4(false);
                });
            }
            if (typeof this.opts.body.readableDidRead !== "boolean") {
                this.opts.body[kBodyUsed] = false;
                EE.prototype.on.call(this.opts.body, "data", function() {
                    this[kBodyUsed] = true;
                });
            }
        } else if (this.opts.body && typeof this.opts.body.pipeTo === "function") {
            this.opts.body = new BodyAsyncIterable(this.opts.body);
        } else if (this.opts.body && typeof this.opts.body !== "string" && !ArrayBuffer.isView(this.opts.body) && util2.isIterable(this.opts.body)) {
            this.opts.body = new BodyAsyncIterable(this.opts.body);
        }
    }
    onConnect(abort) {
        this.abort = abort;
        this.handler.onConnect(abort, {
            history: this.history
        });
    }
    onUpgrade(statusCode, headers, socket) {
        this.handler.onUpgrade(statusCode, headers, socket);
    }
    onError(error3) {
        this.handler.onError(error3);
    }
    onHeaders(statusCode, headers, resume, statusText) {
        this.location = this.history.length >= this.maxRedirections || util2.isDisturbed(this.opts.body) ? null : parseLocation(statusCode, headers);
        if (this.opts.throwOnMaxRedirect && this.history.length >= this.maxRedirections) {
            if (this.request) {
                this.request.abort(new Error("max redirects"));
            }
            this.redirectionLimitReached = true;
            this.abort(new Error("max redirects"));
            return;
        }
        if (this.opts.origin) {
            this.history.push(new URL(this.opts.path, this.opts.origin));
        }
        if (!this.location) {
            return this.handler.onHeaders(statusCode, headers, resume, statusText);
        }
        const { origin, pathname, search } = util2.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin)));
        const path64 = search ? `${pathname}${search}` : pathname;
        this.opts.headers = cleanRequestHeaders(this.opts.headers, statusCode === 303, this.opts.origin !== origin);
        this.opts.path = path64;
        this.opts.origin = origin;
        this.opts.maxRedirections = 0;
        this.opts.query = null;
        if (statusCode === 303 && this.opts.method !== "HEAD") {
            this.opts.method = "GET";
            this.opts.body = null;
        }
    }
    onData(chunk) {
        if (this.location) {} else {
            return this.handler.onData(chunk);
        }
    }
    onComplete(trailers) {
        if (this.location) {
            this.location = null;
            this.abort = null;
            this.dispatch(this.opts, this);
        } else {
            this.handler.onComplete(trailers);
        }
    }
    onBodySent(chunk) {
        if (this.handler.onBodySent) {
            this.handler.onBodySent(chunk);
        }
    }
};
function parseLocation(statusCode, headers) {
    if (redirectableStatusCodes.indexOf(statusCode) === -1) {
        return null;
    }
    for(let i = 0; i < headers.length; i += 2){
        if (headers[i].length === 8 && util2.headerNameToString(headers[i]) === "location") {
            return headers[i + 1];
        }
    }
}
function shouldRemoveHeader(header, removeContent, unknownOrigin) {
    if (header.length === 4) {
        return util2.headerNameToString(header) === "host";
    }
    if (removeContent && util2.headerNameToString(header).startsWith("content-")) {
        return true;
    }
    if (unknownOrigin && (header.length === 13 || header.length === 6 || header.length === 19)) {
        const name17 = util2.headerNameToString(header);
        return name17 === "authorization" || name17 === "cookie" || name17 === "proxy-authorization";
    }
    return false;
}
function cleanRequestHeaders(headers, removeContent, unknownOrigin) {
    const ret = [];
    if (Array.isArray(headers)) {
        for(let i = 0; i < headers.length; i += 2){
            if (!shouldRemoveHeader(headers[i], removeContent, unknownOrigin)) {
                ret.push(headers[i], headers[i + 1]);
            }
        }
    } else if (headers && typeof headers === "object") {
        for (const key of Object.keys(headers)){
            if (!shouldRemoveHeader(key, removeContent, unknownOrigin)) {
                ret.push(key, headers[key]);
            }
        }
    } else {
        assert4(headers == null, "headers must be an object or an array");
    }
    return ret;
}
module2.exports = RedirectHandler;

return module2.exports;
}
