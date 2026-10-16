"use strict";
require.r(exports), require.d(exports, {
    DEFAULT_UA_APP_ID: ()=>n.b,
    getUserAgentMiddlewareOptions: ()=>g,
    getUserAgentPlugin: ()=>m,
    resolveUserAgentConfig: ()=>n.D,
    userAgentMiddleware: ()=>f
});
var n = require("./module-71747.js"), s = require("./module-41119.js"), i = require(50333), o = require(97464), a = require("./module-64972.js");
const c = /\d{12}\.ddb/;
const l = "user-agent", u = "x-amz-user-agent", d = /[^!$%&'*+\-.^_`|~\w]/g, h = /[^!$%&'*+\-.^_`|~\w#]/g;
const f = (e)=>(t, r)=>async (n)=>{
            const { request: d } = n;
            if (!i.K.isInstance(d)) return t(n);
            const { headers: h } = d, f = r?.userAgent?.map(p) || [], g = (await e.defaultUserAgentProvider()).map(p);
            await async function(e, t, r) {
                const n = r.request;
                if ("rpc-v2-cbor" === n?.headers?.["smithy-protocol"] && (0, o.setFeature)(e, "PROTOCOL_RPC_V2_CBOR", "M"), "function" == typeof t.retryStrategy) {
                    const r = await t.retryStrategy();
                    if ("string" == typeof r.mode) switch(r.mode){
                        case a.cm.ADAPTIVE:
                            (0, o.setFeature)(e, "RETRY_MODE_ADAPTIVE", "F");
                            break;
                        case a.cm.STANDARD:
                            (0, o.setFeature)(e, "RETRY_MODE_STANDARD", "E");
                    }
                }
                if ("function" == typeof t.accountIdEndpointMode) {
                    const r = e.endpointV2;
                    switch(String(r?.url?.hostname).match(c) && (0, o.setFeature)(e, "ACCOUNT_ID_ENDPOINT", "O"), await t.accountIdEndpointMode?.()){
                        case "disabled":
                            (0, o.setFeature)(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
                            break;
                        case "preferred":
                            (0, o.setFeature)(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
                            break;
                        case "required":
                            (0, o.setFeature)(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    }
                }
                const s = e.__smithy_context?.selectedHttpAuthScheme?.identity;
                if (s?.$source) {
                    const t = s;
                    t.accountId && (0, o.setFeature)(e, "RESOLVED_ACCOUNT_ID", "T");
                    for (const [r, n] of Object.entries(t.$source ?? {}))(0, o.setFeature)(e, r, n);
                }
            }(r, e, n);
            const m = r;
            g.push(`m/${function(e) {
                let t = "";
                for(const r in e){
                    const n = e[r];
                    if (!(t.length + n.length + 1 <= 1024)) break;
                    t.length ? t += "," + n : t += n;
                }
                return t;
            }(Object.assign({}, r.__smithy_context?.features, m.__aws_sdk_context?.features))}`);
            const y = e?.customUserAgent?.map(p) || [], w = await e.userAgentAppId();
            w && g.push(p([
                "app",
                `${w}`
            ]));
            const S = (0, s.getUserAgentPrefix)(), b = (S ? [
                S
            ] : []).concat([
                ...g,
                ...f,
                ...y
            ]).join(" "), E = [
                ...g.filter((e)=>e.startsWith("aws-sdk-")),
                ...y
            ].join(" ");
            return "browser" !== e.runtime ? (E && (h[u] = h[u] ? `${h[l]} ${E}` : E), h[l] = b) : h[u] = b, t({
                ...n,
                request: d
            });
        }, p = (e)=>{
    const t = e[0].split("/").map((e)=>e.replace(d, "-")).join("/"), r = e[1]?.replace(h, "-"), n = t.indexOf("/"), s = t.substring(0, n);
    let i = t.substring(n + 1);
    return "api" === s && (i = i.toLowerCase()), [
        s,
        i,
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
}, g = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: [
        "SET_USER_AGENT",
        "USER_AGENT"
    ],
    override: !0
}, m = (e)=>({
        applyToStack: (t)=>{
            t.add(f(e), g);
        }
    });
