Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveHttpAuthSchemeConfig = exports.resolveStsAuthConfig = exports.defaultSTSHttpAuthSchemeProvider = exports.defaultSTSHttpAuthSchemeParametersProvider = void 0;
const i = require(58571), o = require("./module-81694.js"), r = require(55164), s = require(5944), a = require("./module-34842.js"), c = require("./module-78920.js");
var l;
function d(e) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "sts",
            region: e.region
        },
        propertiesExtractor: (e, t)=>({
                signingProperties: {
                    config: e,
                    context: t
                }
            })
    };
}
function u(e) {
    return {
        schemeId: "aws.auth#sigv4a",
        signingProperties: {
            name: "sts",
            region: e.region
        },
        propertiesExtractor: (e, t)=>({
                signingProperties: {
                    config: e,
                    context: t
                }
            })
    };
}
function p(e) {
    return {
        schemeId: "smithy.api#noAuth"
    };
}
exports.defaultSTSHttpAuthSchemeParametersProvider = (l = async (e, t, n)=>({
        operation: (0, s.getSmithyContext)(t).operation,
        region: await (0, s.normalizeProvider)(e.region)() || (()=>{
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    }), async (e, t, n)=>{
    if (!n) throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
    const i = await l(e, t, n), o = (0, s.getSmithyContext)(t)?.commandInstance?.constructor?.getEndpointParameterInstructions;
    if (!o) throw new Error(`getEndpointParameterInstructions() is not defined on '${t.commandName}'`);
    const a = await (0, r.resolveParams)(n, {
        getEndpointParameterInstructions: o
    }, e);
    return Object.assign(i, a);
});
var g, m, h;
exports.defaultSTSHttpAuthSchemeProvider = (g = a.defaultEndpointResolver, m = (e)=>{
    const t = [];
    return "AssumeRoleWithWebIdentity" === e.operation ? (t.push({
        schemeId: "smithy.api#noAuth"
    }), t.push(u(e))) : (t.push(d(e)), t.push(u(e))), t;
}, h = {
    "aws.auth#sigv4": d,
    "aws.auth#sigv4a": u,
    "smithy.api#noAuth": p
}, (e)=>{
    const t = g(e), n = t.properties?.authSchemes;
    if (!n) return m(e);
    const i = [];
    for (const t of n){
        const { name: r, properties: s = {}, ...a } = t, c = r.toLowerCase();
        let l;
        if (r !== c && console.warn(`HttpAuthScheme has been normalized with lowercasing: '${r}' to '${c}'`), "sigv4a" === c) {
            l = "aws.auth#sigv4a";
            const e = n.find((e)=>{
                const t = e.name.toLowerCase();
                return "sigv4a" !== t && t.startsWith("sigv4");
            });
            if ("none" === o.SignatureV4MultiRegion.sigv4aDependency() && e) continue;
        } else {
            if (!c.startsWith("sigv4")) throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${c}'`);
            l = "aws.auth#sigv4";
        }
        const d = h[l];
        if (!d) throw new Error(`Could not find HttpAuthOption create function for '${l}'`);
        const u = d(e);
        u.schemeId = l, u.signingProperties = {
            ...u.signingProperties || {},
            ...a,
            ...s
        }, i.push(u);
    }
    return i;
});
exports.resolveStsAuthConfig = (e)=>Object.assign(e, {
        stsClientCtor: c.STSClient
    });
exports.resolveHttpAuthSchemeConfig = (e)=>{
    const n = (0, exports.resolveStsAuthConfig)(e), o = (0, i.resolveAwsSdkSigV4Config)(n), r = (0, i.resolveAwsSdkSigV4AConfig)(o);
    return Object.assign(r, {
        authSchemePreference: (0, s.normalizeProvider)(e.authSchemePreference ?? [])
    });
};
