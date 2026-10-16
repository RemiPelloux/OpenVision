Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveHttpAuthSchemeConfig = exports.defaultSSOOIDCHttpAuthSchemeProvider = exports.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
const o = require(58571), n = require(5944);
exports.defaultSSOOIDCHttpAuthSchemeParametersProvider = async (e, t, r)=>({
        operation: (0, n.getSmithyContext)(t).operation,
        region: await (0, n.normalizeProvider)(e.region)() || (()=>{
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    });
exports.defaultSSOOIDCHttpAuthSchemeProvider = (e)=>{
    const t = [];
    if ("CreateToken" === e.operation) t.push({
        schemeId: "smithy.api#noAuth"
    });
    else t.push(function(e) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sso-oauth",
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
        authSchemePreference: (0, n.normalizeProvider)(e.authSchemePreference ?? [])
    });
};
