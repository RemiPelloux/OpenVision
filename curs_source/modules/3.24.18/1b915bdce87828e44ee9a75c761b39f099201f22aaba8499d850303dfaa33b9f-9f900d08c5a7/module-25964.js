Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveHttpAuthSchemeConfig = exports.defaultSigninHttpAuthSchemeProvider = exports.defaultSigninHttpAuthSchemeParametersProvider = void 0;
const o = require(58571), r = require(5944);
exports.defaultSigninHttpAuthSchemeParametersProvider = async (e, t, n)=>({
        operation: (0, r.getSmithyContext)(t).operation,
        region: await (0, r.normalizeProvider)(e.region)() || (()=>{
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    });
exports.defaultSigninHttpAuthSchemeProvider = (e)=>{
    const t = [];
    if ("CreateOAuth2Token" === e.operation) t.push({
        schemeId: "smithy.api#noAuth"
    });
    else t.push(function(e) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "signin",
                region: e.region
            },
            propertiesExtractor: (e, t)=>({
                    signingProperties: {
                        config: e,
                        context: t
                    }
                })
        };
    }(e));
    return t;
};
exports.resolveHttpAuthSchemeConfig = (e)=>{
    const t = (0, o.resolveAwsSdkSigV4Config)(e);
    return Object.assign(t, {
        authSchemePreference: (0, r.normalizeProvider)(e.authSchemePreference ?? [])
    });
};
