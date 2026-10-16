import { require_errors2 } from "../core/errors.js";
import { require_decorator_handler } from "../handler/decorator-handler.js";
var __wakaru_require_dns_cache;
export function require_dns() {
if (__wakaru_require_dns_cache) return __wakaru_require_dns_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dns_cache = module2;
"use strict";
var { isIP: isIP2 } = require("node:net");
var { lookup: lookup3 } = require("node:dns");
var DecoratorHandler = require_decorator_handler();
var { InvalidArgumentError: InvalidArgumentError3, InformationalError } = require_errors2();
var maxInt = Math.pow(2, 31) - 1;
var DNSInstance = class {
    #maxTTL = 0;
    #maxItems = 0;
    #records = new Map();
    dualStack = true;
    affinity = null;
    lookup = null;
    pick = null;
    constructor(opts){
        this.#maxTTL = opts.maxTTL;
        this.#maxItems = opts.maxItems;
        this.dualStack = opts.dualStack;
        this.affinity = opts.affinity;
        this.lookup = opts.lookup ?? this.#defaultLookup;
        this.pick = opts.pick ?? this.#defaultPick;
    }
    get full() {
        return this.#records.size === this.#maxItems;
    }
    runLookup(origin, opts, cb) {
        const ips = this.#records.get(origin.hostname);
        if (ips == null && this.full) {
            cb(null, origin.origin);
            return;
        }
        const newOpts = {
            affinity: this.affinity,
            dualStack: this.dualStack,
            lookup: this.lookup,
            pick: this.pick,
            ...opts.dns,
            maxTTL: this.#maxTTL,
            maxItems: this.#maxItems
        };
        if (ips == null) {
            this.lookup(origin, newOpts, (err, addresses)=>{
                if (err || addresses == null || addresses.length === 0) {
                    cb(err ?? new InformationalError("No DNS entries found"));
                    return;
                }
                this.setRecords(origin, addresses);
                const records2 = this.#records.get(origin.hostname);
                const ip = this.pick(origin, records2, newOpts.affinity);
                let port;
                if (typeof ip.port === "number") {
                    port = `:${ip.port}`;
                } else if (origin.port !== "") {
                    port = `:${origin.port}`;
                } else {
                    port = "";
                }
                cb(null, `${origin.protocol}//${ip.family === 6 ? `[${ip.address}]` : ip.address}${port}`);
            });
        } else {
            const ip = this.pick(origin, ips, newOpts.affinity);
            if (ip == null) {
                this.#records.delete(origin.hostname);
                this.runLookup(origin, opts, cb);
                return;
            }
            let port;
            if (typeof ip.port === "number") {
                port = `:${ip.port}`;
            } else if (origin.port !== "") {
                port = `:${origin.port}`;
            } else {
                port = "";
            }
            cb(null, `${origin.protocol}//${ip.family === 6 ? `[${ip.address}]` : ip.address}${port}`);
        }
    }
    #defaultLookup(origin, opts, cb) {
        lookup3(origin.hostname, {
            all: true,
            family: this.dualStack === false ? this.affinity : 0,
            order: "ipv4first"
        }, (err, addresses)=>{
            if (err) {
                return cb(err);
            }
            const results = new Map();
            for (const addr of addresses){
                results.set(`${addr.address}:${addr.family}`, addr);
            }
            cb(null, results.values());
        });
    }
    #defaultPick(origin, hostnameRecords, affinity) {
        let ip = null;
        const { records: records2, offset } = hostnameRecords;
        let family;
        if (this.dualStack) {
            if (affinity == null) {
                if (offset == null || offset === maxInt) {
                    hostnameRecords.offset = 0;
                    affinity = 4;
                } else {
                    hostnameRecords.offset++;
                    affinity = (hostnameRecords.offset & 1) === 1 ? 6 : 4;
                }
            }
            if (records2[affinity] != null && records2[affinity].ips.length > 0) {
                family = records2[affinity];
            } else {
                family = records2[affinity === 4 ? 6 : 4];
            }
        } else {
            family = records2[affinity];
        }
        if (family == null || family.ips.length === 0) {
            return ip;
        }
        if (family.offset == null || family.offset === maxInt) {
            family.offset = 0;
        } else {
            family.offset++;
        }
        const position = family.offset % family.ips.length;
        ip = family.ips[position] ?? null;
        if (ip == null) {
            return ip;
        }
        if (Date.now() - ip.timestamp > ip.ttl) {
            family.ips.splice(position, 1);
            return this.pick(origin, hostnameRecords, affinity);
        }
        return ip;
    }
    setRecords(origin, addresses) {
        const timestamp2 = Date.now();
        const records2 = {
            records: {
                4: null,
                6: null
            }
        };
        for (const record3 of addresses){
            record3.timestamp = timestamp2;
            if (typeof record3.ttl === "number") {
                record3.ttl = Math.min(record3.ttl, this.#maxTTL);
            } else {
                record3.ttl = this.#maxTTL;
            }
            const familyRecords = records2.records[record3.family] ?? {
                ips: []
            };
            familyRecords.ips.push(record3);
            records2.records[record3.family] = familyRecords;
        }
        this.#records.set(origin.hostname, records2);
    }
    getHandler(meta, opts) {
        return new DNSDispatchHandler(this, meta, opts);
    }
};
var DNSDispatchHandler = class extends DecoratorHandler {
    #state = null;
    #opts = null;
    #dispatch = null;
    #handler = null;
    #origin = null;
    constructor(state, { origin, handler, dispatch }, opts){
        super(handler);
        this.#origin = origin;
        this.#handler = handler;
        this.#opts = {
            ...opts
        };
        this.#state = state;
        this.#dispatch = dispatch;
    }
    onError(err) {
        switch(err.code){
            case "ETIMEDOUT":
            case "ECONNREFUSED":
                {
                    if (this.#state.dualStack) {
                        this.#state.runLookup(this.#origin, this.#opts, (err2, newOrigin)=>{
                            if (err2) {
                                return this.#handler.onError(err2);
                            }
                            const dispatchOpts = {
                                ...this.#opts,
                                origin: newOrigin
                            };
                            this.#dispatch(dispatchOpts, this);
                        });
                        return;
                    }
                    this.#handler.onError(err);
                    return;
                }
            case "ENOTFOUND":
                this.#state.deleteRecord(this.#origin);
            default:
                this.#handler.onError(err);
                break;
        }
    }
};
module2.exports = (interceptorOpts)=>{
    if (interceptorOpts?.maxTTL != null && (typeof interceptorOpts?.maxTTL !== "number" || interceptorOpts?.maxTTL < 0)) {
        throw new InvalidArgumentError3("Invalid maxTTL. Must be a positive number");
    }
    if (interceptorOpts?.maxItems != null && (typeof interceptorOpts?.maxItems !== "number" || interceptorOpts?.maxItems < 1)) {
        throw new InvalidArgumentError3("Invalid maxItems. Must be a positive number and greater than zero");
    }
    if (interceptorOpts?.affinity != null && interceptorOpts?.affinity !== 4 && interceptorOpts?.affinity !== 6) {
        throw new InvalidArgumentError3("Invalid affinity. Must be either 4 or 6");
    }
    if (interceptorOpts?.dualStack != null && typeof interceptorOpts?.dualStack !== "boolean") {
        throw new InvalidArgumentError3("Invalid dualStack. Must be a boolean");
    }
    if (interceptorOpts?.lookup != null && typeof interceptorOpts?.lookup !== "function") {
        throw new InvalidArgumentError3("Invalid lookup. Must be a function");
    }
    if (interceptorOpts?.pick != null && typeof interceptorOpts?.pick !== "function") {
        throw new InvalidArgumentError3("Invalid pick. Must be a function");
    }
    const dualStack = interceptorOpts?.dualStack ?? true;
    let affinity;
    if (dualStack) {
        affinity = interceptorOpts?.affinity ?? null;
    } else {
        affinity = interceptorOpts?.affinity ?? 4;
    }
    const opts = {
        maxTTL: interceptorOpts?.maxTTL ?? 1e4,
        lookup: interceptorOpts?.lookup ?? null,
        pick: interceptorOpts?.pick ?? null,
        dualStack,
        affinity,
        maxItems: interceptorOpts?.maxItems ?? Infinity
    };
    const instance = new DNSInstance(opts);
    return (dispatch)=>{
        return function dnsInterceptor(origDispatchOpts, handler) {
            const origin = origDispatchOpts.origin.constructor === URL ? origDispatchOpts.origin : new URL(origDispatchOpts.origin);
            if (isIP2(origin.hostname) !== 0) {
                return dispatch(origDispatchOpts, handler);
            }
            instance.runLookup(origin, origDispatchOpts, (err, newOrigin)=>{
                if (err) {
                    return handler.onError(err);
                }
                let dispatchOpts = null;
                dispatchOpts = {
                    ...origDispatchOpts,
                    servername: origin.hostname,
                    origin: newOrigin,
                    headers: {
                        host: origin.hostname,
                        ...origDispatchOpts.headers
                    }
                };
                dispatch(dispatchOpts, instance.getHandler({
                    origin,
                    dispatch,
                    handler
                }, origDispatchOpts));
            });
            return true;
        };
    };
};

return module2.exports;
}
