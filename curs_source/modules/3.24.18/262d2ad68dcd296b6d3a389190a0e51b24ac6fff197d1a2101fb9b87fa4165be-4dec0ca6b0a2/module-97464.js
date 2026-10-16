const { Retry: n, RETRY_MODES: o } = require("./module-66948.js"), { HttpRequest: s, parseUrl: i } = require("./module-73931.js"), { InvokeStore: a } = require("./module-18114.js"), { normalizeProvider: l } = require("./module-55909.js"), { platform: c, release: u } = require("./module-48161.js"), { versions: d, env: p } = require("./module-1708.js"), { isValidHostLabel: h, isIpAddress: m, customEndpointFunctions: f } = require("./module-29400.js"), { EndpointError: g, resolveEndpoint: y } = require("./module-29400.js");
exports.EndpointError = g, exports.isIpAddress = m, exports.resolveEndpoint = y;
const { loadConfig: v, NODE_REGION_CONFIG_OPTIONS: w, NODE_REGION_CONFIG_FILE_OPTIONS: b } = require("./module-86344.js"), { REGION_ENV_NAME: _, REGION_INI_NAME: S, resolveRegionConfig: x } = require("./module-86344.js");
exports.NODE_REGION_CONFIG_FILE_OPTIONS = b, exports.NODE_REGION_CONFIG_OPTIONS = w, exports.REGION_ENV_NAME = _, exports.REGION_INI_NAME = S, exports.resolveRegionConfig = x;
const k = {
    warningEmitted: !1
}, E = {
    name: "longPollMiddleware",
    tags: [
        "RETRY"
    ],
    step: "initialize",
    override: !0
};
function T(e, t, r) {
    e.__aws_sdk_context ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {}) : e.__aws_sdk_context = {
        features: {}
    }, e.__aws_sdk_context.features[t] = r;
}
n.v2026 ||= "object" == typeof process && "true" === process.env?.AWS_NEW_RETRIES_2026;
const C = (e)=>(t)=>async (r)=>{
            if (!s.isInstance(r.request)) return t(r);
            const { request: n } = r, { handlerProtocol: o = "" } = e.requestHandler.metadata || {};
            if (o.indexOf("h2") >= 0 && !n.headers[":authority"]) delete n.headers.host, n.headers[":authority"] = n.hostname + (n.port ? ":" + n.port : "");
            else if (!n.headers.host) {
                let e = n.hostname;
                null != n.port && (e += `:${n.port}`), n.headers.host = e;
            }
            return t(r);
        }, I = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: [
        "HOST"
    ],
    override: !0
}, A = ()=>(e, t)=>async (r)=>{
            try {
                const n = await e(r), { clientName: o, commandName: s, logger: i, dynamoDbDocumentClientOptions: a = {} } = t, { overrideInputFilterSensitiveLog: l, overrideOutputFilterSensitiveLog: c } = a, u = l ?? t.inputFilterSensitiveLog, d = c ?? t.outputFilterSensitiveLog, { $metadata: p, ...h } = n.output;
                return i?.info?.({
                    clientName: o,
                    commandName: s,
                    input: u(r.input),
                    output: d(h),
                    metadata: p
                }), n;
            } catch (e) {
                const { clientName: n, commandName: o, logger: s, dynamoDbDocumentClientOptions: i = {} } = t, { overrideInputFilterSensitiveLog: a } = i, l = a ?? t.inputFilterSensitiveLog;
                throw s?.error?.({
                    clientName: n,
                    commandName: o,
                    input: l(r.input),
                    error: e,
                    metadata: e.$metadata
                }), e;
            }
        }, P = {
    name: "loggerMiddleware",
    tags: [
        "LOGGER"
    ],
    step: "initialize",
    override: !0
}, M = {
    step: "build",
    tags: [
        "RECURSION_DETECTION",
        "TRACE_CONTEXT_PROPAGATION"
    ],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low"
}, R = "X-Amzn-Trace-Id", O = "traceparent", D = "tracestate", N = "baggage", F = ()=>(e)=>async (t)=>{
            const { request: r } = t;
            if (!s.isInstance(r)) return e(t);
            let n;
            {
                const e = Object.keys(r.headers ?? {}).find((e)=>e.toLowerCase() === R.toLowerCase()) ?? R;
                if (!r.headers.hasOwnProperty(e)) {
                    const e = process.env.AWS_LAMBDA_FUNCTION_NAME, t = process.env._X_AMZN_TRACE_ID;
                    n ??= await a.getInstanceAsync();
                    const o = n?.getXRayTraceId(), s = o ?? t, i = (e)=>"string" == typeof e && e.length > 0;
                    i(e) && i(s) && (r.headers[R] = s);
                }
            }
            !function(e) {
                for (const t of Object.keys(e)){
                    const r = t.toLowerCase();
                    t === r || r !== O && r !== D && r !== N || (e[r] = e[t], delete e[t]);
                }
            }(r.headers);
            if (!r.headers[O]) {
                const e = (n ??= await a.getInstanceAsync())?.getTraceparent?.();
                if (e) {
                    r.headers[O] = e;
                    const t = n?.getTracestate?.();
                    t && (r.headers[D] = t);
                    const o = n?.getBaggage?.();
                    o && (r.headers[N] = o);
                }
            }
            return e(t);
        };
const L = void 0;
const U = {
    partitions: [
        {
            id: "aws",
            outputs: {
                dnsSuffix: "amazonaws.com",
                dualStackDnsSuffix: "api.aws",
                implicitGlobalRegion: "us-east-1",
                name: "aws",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
            regions: {
                "af-south-1": {
                    description: "Africa (Cape Town)"
                },
                "ap-east-1": {
                    description: "Asia Pacific (Hong Kong)"
                },
                "ap-east-2": {
                    description: "Asia Pacific (Taipei)"
                },
                "ap-northeast-1": {
                    description: "Asia Pacific (Tokyo)"
                },
                "ap-northeast-2": {
                    description: "Asia Pacific (Seoul)"
                },
                "ap-northeast-3": {
                    description: "Asia Pacific (Osaka)"
                },
                "ap-south-1": {
                    description: "Asia Pacific (Mumbai)"
                },
                "ap-south-2": {
                    description: "Asia Pacific (Hyderabad)"
                },
                "ap-southeast-1": {
                    description: "Asia Pacific (Singapore)"
                },
                "ap-southeast-2": {
                    description: "Asia Pacific (Sydney)"
                },
                "ap-southeast-3": {
                    description: "Asia Pacific (Jakarta)"
                },
                "ap-southeast-4": {
                    description: "Asia Pacific (Melbourne)"
                },
                "ap-southeast-5": {
                    description: "Asia Pacific (Malaysia)"
                },
                "ap-southeast-6": {
                    description: "Asia Pacific (New Zealand)"
                },
                "ap-southeast-7": {
                    description: "Asia Pacific (Thailand)"
                },
                "aws-global": {
                    description: "aws global region"
                },
                "ca-central-1": {
                    description: "Canada (Central)"
                },
                "ca-west-1": {
                    description: "Canada West (Calgary)"
                },
                "eu-central-1": {
                    description: "Europe (Frankfurt)"
                },
                "eu-central-2": {
                    description: "Europe (Zurich)"
                },
                "eu-north-1": {
                    description: "Europe (Stockholm)"
                },
                "eu-south-1": {
                    description: "Europe (Milan)"
                },
                "eu-south-2": {
                    description: "Europe (Spain)"
                },
                "eu-west-1": {
                    description: "Europe (Ireland)"
                },
                "eu-west-2": {
                    description: "Europe (London)"
                },
                "eu-west-3": {
                    description: "Europe (Paris)"
                },
                "il-central-1": {
                    description: "Israel (Tel Aviv)"
                },
                "me-central-1": {
                    description: "Middle East (UAE)"
                },
                "me-south-1": {
                    description: "Middle East (Bahrain)"
                },
                "mx-central-1": {
                    description: "Mexico (Central)"
                },
                "sa-east-1": {
                    description: "South America (Sao Paulo)"
                },
                "us-east-1": {
                    description: "US East (N. Virginia)"
                },
                "us-east-2": {
                    description: "US East (Ohio)"
                },
                "us-west-1": {
                    description: "US West (N. California)"
                },
                "us-west-2": {
                    description: "US West (Oregon)"
                }
            }
        },
        {
            id: "aws-cn",
            outputs: {
                dnsSuffix: "amazonaws.com.cn",
                dualStackDnsSuffix: "api.amazonwebservices.com.cn",
                implicitGlobalRegion: "cn-northwest-1",
                name: "aws-cn",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^cn\\-\\w+\\-\\d+$",
            regions: {
                "aws-cn-global": {
                    description: "aws-cn global region"
                },
                "cn-north-1": {
                    description: "China (Beijing)"
                },
                "cn-northwest-1": {
                    description: "China (Ningxia)"
                }
            }
        },
        {
            id: "aws-eusc",
            outputs: {
                dnsSuffix: "amazonaws.eu",
                dualStackDnsSuffix: "api.amazonwebservices.eu",
                implicitGlobalRegion: "eusc-de-east-1",
                name: "aws-eusc",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
            regions: {
                "eusc-de-east-1": {
                    description: "AWS European Sovereign Cloud (Germany)"
                }
            }
        },
        {
            id: "aws-iso",
            outputs: {
                dnsSuffix: "c2s.ic.gov",
                dualStackDnsSuffix: "api.aws.ic.gov",
                implicitGlobalRegion: "us-iso-east-1",
                name: "aws-iso",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-global": {
                    description: "aws-iso global region"
                },
                "us-iso-east-1": {
                    description: "US ISO East"
                },
                "us-iso-west-1": {
                    description: "US ISO WEST"
                }
            }
        },
        {
            id: "aws-iso-b",
            outputs: {
                dnsSuffix: "sc2s.sgov.gov",
                dualStackDnsSuffix: "api.aws.scloud",
                implicitGlobalRegion: "us-isob-east-1",
                name: "aws-iso-b",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-b-global": {
                    description: "aws-iso-b global region"
                },
                "us-isob-east-1": {
                    description: "US ISOB East (Ohio)"
                },
                "us-isob-west-1": {
                    description: "US ISOB West"
                }
            }
        },
        {
            id: "aws-iso-e",
            outputs: {
                dnsSuffix: "cloud.adc-e.uk",
                dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
                implicitGlobalRegion: "eu-isoe-west-1",
                name: "aws-iso-e",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-e-global": {
                    description: "aws-iso-e global region"
                },
                "eu-isoe-west-1": {
                    description: "EU ISOE West"
                }
            }
        },
        {
            id: "aws-iso-f",
            outputs: {
                dnsSuffix: "csp.hci.ic.gov",
                dualStackDnsSuffix: "api.aws.hci.ic.gov",
                implicitGlobalRegion: "us-isof-south-1",
                name: "aws-iso-f",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-f-global": {
                    description: "aws-iso-f global region"
                },
                "us-isof-east-1": {
                    description: "US ISOF EAST"
                },
                "us-isof-south-1": {
                    description: "US ISOF SOUTH"
                }
            }
        },
        {
            id: "aws-us-gov",
            outputs: {
                dnsSuffix: "amazonaws.com",
                dualStackDnsSuffix: "api.aws",
                implicitGlobalRegion: "us-gov-west-1",
                name: "aws-us-gov",
                supportsDualStack: !0,
                supportsFIPS: !0
            },
            regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
            regions: {
                "aws-us-gov-global": {
                    description: "aws-us-gov global region"
                },
                "us-gov-east-1": {
                    description: "AWS GovCloud (US-East)"
                },
                "us-gov-west-1": {
                    description: "AWS GovCloud (US-West)"
                }
            }
        }
    ],
    version: "1.1"
};
let B = U, $ = "";
const q = (e)=>{
    const { partitions: t } = B;
    for (const r of t){
        const { regions: t, outputs: n } = r;
        for (const [r, o] of Object.entries(t))if (r === e) return {
            ...n,
            ...o
        };
    }
    for (const r of t){
        const { regionRegex: t, outputs: n } = r;
        if (new RegExp(t).test(e)) return {
            ...n
        };
    }
    const r = t.find((e)=>"aws" === e.id);
    if (!r) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    return {
        ...r.outputs
    };
}, j = (e, t = "")=>{
    B = e, $ = t;
}, J = ()=>$, z = /\d{12}\.ddb/;
const H = "user-agent", W = "x-amz-user-agent", G = /[^!$%&'*+\-.^_`|~\w]/g, Y = /[^!$%&'*+\-.^_`|~\w#]/g;
const V = (e)=>(t, r)=>async (n)=>{
            const { request: i } = n;
            if (!s.isInstance(i)) return t(n);
            const { headers: a } = i, l = r?.userAgent?.map(K) || [], c = (await e.defaultUserAgentProvider()).map(K);
            await async function(e, t, r) {
                const n = r.request;
                if ("rpc-v2-cbor" === n?.headers?.["smithy-protocol"] && T(e, "PROTOCOL_RPC_V2_CBOR", "M"), "function" == typeof t.retryStrategy) {
                    const r = await t.retryStrategy();
                    if ("string" == typeof r.mode) switch(r.mode){
                        case o.ADAPTIVE:
                            T(e, "RETRY_MODE_ADAPTIVE", "F");
                            break;
                        case o.STANDARD:
                            T(e, "RETRY_MODE_STANDARD", "E");
                    }
                }
                if ("function" == typeof t.accountIdEndpointMode) {
                    const r = e.endpointV2;
                    switch(String(r?.url?.hostname).match(z) && T(e, "ACCOUNT_ID_ENDPOINT", "O"), await t.accountIdEndpointMode?.()){
                        case "disabled":
                            T(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
                            break;
                        case "preferred":
                            T(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
                            break;
                        case "required":
                            T(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    }
                }
                const s = e.__smithy_context?.selectedHttpAuthScheme?.identity;
                if (s?.$source) {
                    const t = s;
                    t.accountId && T(e, "RESOLVED_ACCOUNT_ID", "T");
                    for (const [r, n] of Object.entries(t.$source ?? {}))T(e, r, n);
                }
            }(r, e, n);
            const u = r;
            c.push(`m/${function(e) {
                let t = "";
                for(const r in e){
                    const n = e[r];
                    if (!(t.length + n.length + 1 <= 1024)) break;
                    t.length ? t += "," + n : t += n;
                }
                return t;
            }(Object.assign({}, r.__smithy_context?.features, u.__aws_sdk_context?.features))}`);
            const d = e?.customUserAgent?.map(K) || [], p = await e.userAgentAppId();
            p && c.push(K([
                "app",
                `${p}`
            ]));
            const h = J(), m = (h ? [
                h
            ] : []).concat([
                ...c,
                ...l,
                ...d
            ]).join(" "), f = [
                ...c.filter((e)=>e.startsWith("aws-sdk-")),
                ...d
            ].join(" ");
            return "browser" !== e.runtime ? (f && (a[W] = a[W] ? `${a[H]} ${f}` : f), a[H] = m) : a[W] = m, t({
                ...n,
                request: i
            });
        }, K = (e)=>{
    const t = e[0].split("/").map((e)=>e.replace(G, "-")).join("/"), r = e[1]?.replace(Y, "-"), n = t.indexOf("/"), o = t.substring(0, n);
    let s = t.substring(n + 1);
    return "api" === o && (s = s.toLowerCase()), [
        o,
        s,
        r
    ].filter((e)=>e && e.length > 0).reduce((e, t, r)=>{
        switch(r){
            case 0:
                return t;
            case 1:
                return `${e}/${t}`;
            default:
                return `${e}#${t}`;
        }
    }, "");
}, Z = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: [
        "SET_USER_AGENT",
        "USER_AGENT"
    ],
    override: !0
}, X = {
    isCrtAvailable: !1
}, Q = ({ serviceId: e, clientVersion: t })=>{
    const r = (()=>{
        const e = [
            "deno",
            "bun",
            "llrt"
        ];
        for (const t of e)if (d[t]) return [
            `md/${t}`,
            d[t]
        ];
        return [
            "md/nodejs",
            d.node
        ];
    })();
    return async (n)=>{
        const o = [
            [
                "aws-sdk-js",
                t
            ],
            [
                "ua",
                "2.1"
            ],
            [
                `os/${c()}`,
                u()
            ],
            [
                "lang/js"
            ],
            r
        ], s = X.isCrtAvailable ? [
            "md/crt-avail"
        ] : null;
        s && o.push(s), e && o.push([
            `api/${e}`,
            t
        ]), p.AWS_EXECUTION_ENV && o.push([
            `exec-env/${p.AWS_EXECUTION_ENV}`
        ]);
        const i = await n?.userAgentAppId?.();
        return i ? [
            ...o,
            [
                `app/${i}`
            ]
        ] : [
            ...o
        ];
    };
}, ee = Q, te = "AWS_SDK_UA_APP_ID", re = "sdk_ua_app_id", ne = {
    environmentVariableSelector: (e)=>e[te],
    configFileSelector: (e)=>e[re] ?? e["sdk-ua-app-id"],
    default: L
}, oe = {
    os: (e)=>/iPhone|iPad|iPod/.test(e) ? "iOS" : /Macintosh|Mac OS X/.test(e) ? "macOS" : /Windows NT/.test(e) ? "Windows" : /Android/.test(e) ? "Android" : /Linux/.test(e) ? "Linux" : void 0,
    browser: (e)=>/EdgiOS|EdgA|Edg\//.test(e) ? "Microsoft Edge" : /Firefox\//.test(e) ? "Firefox" : /Chrome\//.test(e) ? "Chrome" : /Safari\//.test(e) ? "Safari" : void 0
}, se = (e, t = !1)=>{
    if (t) {
        for (const t of e.split("."))if (!se(t)) return !1;
        return !0;
    }
    return !!h(e) && !(e.length < 3 || e.length > 63) && e === e.toLowerCase() && !m(e);
}, ie = (e)=>{
    const t = e.split(":");
    if (t.length < 6) return null;
    const [r, n, o, s, i, ...a] = t;
    if ("arn" !== r || "" === n || "" === o || "" === a.join(":")) return null;
    return {
        partition: n,
        service: o,
        region: s,
        accountId: i,
        resourceId: a.map((e)=>e.split("/")).flat()
    };
}, ae = {
    isVirtualHostableS3Bucket: se,
    parseArn: ie,
    partition: q
};
f.aws = ae;
const le = (e)=>i(e.url);
const ce = {
    silence: !1
};
exports.DEFAULT_UA_APP_ID = L, exports.NODE_APP_ID_CONFIG_OPTIONS = ne, exports.UA_APP_ID_ENV_NAME = te, exports.UA_APP_ID_INI_NAME = re, exports.awsEndpointFunctions = ae, exports.createDefaultUserAgentProvider = Q, exports.createUserAgentStringParsingProvider = ({ serviceId: e, clientVersion: t })=>async (n)=>{
        const o = require("./module-36589.js"), s = o.parse ?? o.default.parse ?? (()=>""), i = "undefined" != typeof window && window?.navigator?.userAgent ? s(window.navigator.userAgent) : void 0, a = [
            [
                "aws-sdk-js",
                t
            ],
            [
                "ua",
                "2.1"
            ],
            [
                `os/${i?.os?.name || "other"}`,
                i?.os?.version
            ],
            [
                "lang/js"
            ],
            [
                "md/browser",
                `${i?.browser?.name ?? "unknown"}_${i?.browser?.version ?? "unknown"}`
            ]
        ];
        e && a.push([
            `api/${e}`,
            t
        ]);
        const l = await n?.userAgentAppId?.();
        return l && a.push([
            `app/${l}`
        ]), a;
    }, exports.crtAvailability = X, exports.defaultUserAgent = ee, exports.emitWarningIfUnsupportedVersion = (e)=>{
    if (e && !k.warningEmitted) {
        if ("true" === process.env.AWS_SDK_JS_NODE_VERSION_SUPPORT_WARNING_DISABLED) return void (k.warningEmitted = !0);
        const t = 22;
        parseInt(e.substring(1, e.indexOf("."))) < t && (k.warningEmitted = !0, process.emitWarning(`NodeVersionSupportWarning: The AWS SDK for JavaScript (v3)\nversions published after the first week of January 2027\nwill require node >=${t}. You are running node ${e}.\n\nTo continue receiving updates to AWS services, bug fixes,\nand security updates please upgrade to node >=${t}.\n\nMore information can be found at: https://a.co/c895JFp`));
    }
}, exports.fallback = oe, exports.getAwsRegionExtensionConfiguration = (e)=>({
        setRegion (t) {
            e.region = t;
        },
        region: ()=>e.region
    }), exports.getHostHeaderPlugin = (e)=>({
        applyToStack: (t)=>{
            t.add(C(e), I);
        }
    }), exports.getLoggerPlugin = (e)=>({
        applyToStack: (e)=>{
            e.add((e, t)=>async (r)=>{
                    try {
                        const n = await e(r), { clientName: o, commandName: s, logger: i, dynamoDbDocumentClientOptions: a = {} } = t, { overrideInputFilterSensitiveLog: l, overrideOutputFilterSensitiveLog: c } = a, u = l ?? t.inputFilterSensitiveLog, d = c ?? t.outputFilterSensitiveLog, { $metadata: p, ...h } = n.output;
                        return i?.info?.({
                            clientName: o,
                            commandName: s,
                            input: u(r.input),
                            output: d(h),
                            metadata: p
                        }), n;
                    } catch (e) {
                        const { clientName: n, commandName: o, logger: s, dynamoDbDocumentClientOptions: i = {} } = t, { overrideInputFilterSensitiveLog: a } = i, l = a ?? t.inputFilterSensitiveLog;
                        throw s?.error?.({
                            clientName: n,
                            commandName: o,
                            input: l(r.input),
                            error: e,
                            metadata: e.$metadata
                        }), e;
                    }
                }, P);
        }
    }), exports.getLongPollPlugin = (e)=>({
        applyToStack: (e)=>{
            e.add((e, t)=>async (r)=>(t.__retryLongPoll = !0, e(r)), E);
        }
    }), exports.getRecursionDetectionPlugin = (e)=>({
        applyToStack: (e)=>{
            e.add(F(), M);
        }
    }), exports.getUserAgentMiddlewareOptions = Z, exports.getUserAgentPlugin = (e)=>({
        applyToStack: (t)=>{
            t.add(V(e), Z);
        }
    }), exports.getUserAgentPrefix = J, exports.hostHeaderMiddleware = C, exports.hostHeaderMiddlewareOptions = I, exports.isVirtualHostableS3Bucket = se, exports.loggerMiddleware = A, exports.loggerMiddlewareOptions = P, exports.parseArn = ie, exports.partition = q, exports.recursionDetectionMiddleware = F, exports.recursionDetectionMiddlewareOptions = M, exports.resolveAwsRegionExtensionConfiguration = (e)=>({
        region: e.region()
    }), exports.resolveDefaultAwsRegionalEndpointsConfig = (e)=>{
    if ("function" != typeof e.endpointProvider) throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
    const { endpoint: t } = e;
    return void 0 === t && (e.endpoint = async ()=>le(e.endpointProvider({
            Region: "function" == typeof e.region ? await e.region() : e.region,
            UseDualStack: "function" == typeof e.useDualstackEndpoint ? await e.useDualstackEndpoint() : e.useDualstackEndpoint,
            UseFIPS: "function" == typeof e.useFipsEndpoint ? await e.useFipsEndpoint() : e.useFipsEndpoint,
            Endpoint: void 0
        }, {
            logger: e.logger
        }))), e;
}, exports.resolveHostHeaderConfig = function(e) {
    return e;
}, exports.resolveUserAgentConfig = function(e) {
    const t = l(e.userAgentAppId ?? L), { customUserAgent: r } = e;
    return Object.assign(e, {
        customUserAgent: "string" == typeof r ? [
            [
                r
            ]
        ] : r,
        userAgentAppId: async ()=>{
            const r = await t();
            if (!function(e) {
                return void 0 === e || "string" == typeof e && e.length <= 50;
            }(r)) {
                const t = "NoOpLogger" !== e.logger?.constructor?.name && e.logger ? e.logger : console;
                "string" != typeof r ? t?.warn("userAgentAppId must be a string or undefined.") : r.length > 50 && t?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
            }
            return r;
        }
    });
}, exports.setCredentialFeature = function(e, t, r) {
    return e.$source || (e.$source = {}), e.$source[t] = r, e;
}, exports.setFeature = T, exports.setPartitionInfo = j, exports.setTokenFeature = function(e, t, r) {
    return e.$source || (e.$source = {}), e.$source[t] = r, e;
}, exports.state = k, exports.stsRegionDefaultResolver = function(e = {}) {
    return v({
        ...w,
        default: async ()=>(ce.silence || console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly."), "us-east-1")
    }, {
        ...b,
        ...e
    });
}, exports.stsRegionWarning = ce, exports.toEndpointV1 = le, exports.useDefaultPartitionInfo = ()=>{
    j(U, "");
}, exports.userAgentMiddleware = V;
