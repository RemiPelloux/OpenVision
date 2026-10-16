import { it } from "./buffer.js";
import { E, Jr, ua } from "./configurationRegistry.js";
import { Ve } from "./errors.js";
import { Q, ne } from "./instantiation.js";
import { J, j } from "./lifecycle.js";
import { Ne } from "./nls.js";
import { pr, ri } from "./platform_2.js";
import { h } from "./tslib.es6.js";
function We(e) {
    return e ? e.message ? e.message : e.stack ? e.stack.split(`
`)[0] : String(e) : "Error";
}
function _7e(e = !0, t = !0) {
    if (uA === e && mA === t) return;
    uA = e, mA = t;
    const n = pr.as(Jr.Configuration), r = mS;
    mS = [
        {
            id: "http",
            order: 15,
            title: E(2221, null),
            type: "object",
            scope: 2,
            properties: {
                "http.useLocalProxyConfiguration": {
                    type: "boolean",
                    default: t,
                    markdownDescription: E(2222, null),
                    restricted: !0
                }
            }
        },
        {
            id: "http",
            order: 15,
            title: E(2223, null),
            type: "object",
            scope: 1,
            properties: {
                "http.electronFetch": {
                    type: "boolean",
                    default: !1,
                    description: E(2224, null),
                    restricted: !0
                }
            }
        },
        {
            id: "http",
            order: 15,
            title: E(2225, null),
            type: "object",
            scope: e ? 1 : 2,
            properties: {
                "http.proxy": {
                    type: "string",
                    pattern: "^(https?|socks|socks4a?|socks5h?)://([^:]*(:[^@]*)?@)?([^:]+|\\[[:0-9a-fA-F]+\\])(:\\d+)?/?$|^$",
                    markdownDescription: E(2226, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.proxyStrictSSL": {
                    type: "boolean",
                    default: !0,
                    markdownDescription: E(2227, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.proxyKerberosServicePrincipal": {
                    type: "string",
                    markdownDescription: E(2228, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.noProxy": {
                    type: "array",
                    items: {
                        type: "string"
                    },
                    markdownDescription: E(2229, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.proxyAuthorization": {
                    type: [
                        "null",
                        "string"
                    ],
                    default: null,
                    markdownDescription: E(2230, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.proxySupport": {
                    type: "string",
                    enum: [
                        "off",
                        "on",
                        "fallback",
                        "override"
                    ],
                    enumDescriptions: [
                        E(2231, null),
                        E(2232, null),
                        E(2233, null),
                        E(2234, null)
                    ],
                    default: "override",
                    markdownDescription: E(2235, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.systemCertificates": {
                    type: "boolean",
                    default: !0,
                    markdownDescription: E(2236, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.experimental.systemCertificatesV2": {
                    type: "boolean",
                    tags: [
                        "experimental"
                    ],
                    default: !1,
                    markdownDescription: E(2237, null, "`#http.useLocalProxyConfiguration#`"),
                    restricted: !0
                },
                "http.fetchAdditionalSupport": {
                    type: "boolean",
                    default: !0,
                    markdownDescription: E(2238, null, "`#http.useLocalProxyConfiguration#`", "`#http.proxySupport#`", "`#http.systemCertificates#`"),
                    restricted: !0
                }
            }
        }
    ], n.updateConfigurations({
        add: mS,
        remove: r
    });
}
var li, kG, SG, mS, uA, mA;
export { SG, We, _7e, kG, li, mA, mS, uA };
var __wakaru_fs_initialized = false;
export function fs() {
if (__wakaru_fs_initialized) return;
__wakaru_fs_initialized = true;
"use strict";
h(), it(), Ve(), j(), Ne(), ua(), ne(), ri(), li = Q("requestService"), kG = class {
    constructor(e){
        this.original = e;
    }
    toJSON() {
        if (!this.headers) {
            const e = Object.create(null);
            for(const t in this.original)t.toLowerCase() === "authorization" || t.toLowerCase() === "proxy-authorization" ? e[t] = "*****" : e[t] = this.original[t];
            this.headers = e;
        }
        return this.headers;
    }
}, SG = class extends J {
    constructor(e){
        super(), this.logService = e, this.counter = 0;
    }
    async logAndRequest(e, t) {
        const n = `#${++this.counter}: ${e.url}`;
        this.logService.trace(`${n} - begin`, e.type, new kG(e.headers ?? {}));
        try {
            const r = await t();
            return this.logService.trace(`${n} - end`, e.type, r.res.statusCode, r.res.headers), r;
        } catch (r) {
            throw this.logService.error(`${n} - error`, e.type, We(r)), r;
        }
    }
}, mS = [], uA = void 0, mA = void 0, _7e();

}
