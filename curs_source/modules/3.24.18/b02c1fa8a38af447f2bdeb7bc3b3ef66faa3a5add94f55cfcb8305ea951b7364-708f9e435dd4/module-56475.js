Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveHttpAuthSchemeConfig = exports.defaultSSOHttpAuthSchemeProvider = exports.defaultSSOHttpAuthSchemeParametersProvider = void 0;
const n = require(58571), r = require(5944);
exports.defaultSSOHttpAuthSchemeParametersProvider = async (e, t, o)=>({
        operation: (0, r.getSmithyContext)(t).operation,
        region: await (0, r.normalizeProvider)(e.region)() || (()=>{
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    });
exports.defaultSSOHttpAuthSchemeProvider = (e)=>{
    const t = [];
    if ("GetRoleCredentials" === e.operation) t.push({
        schemeId: "smithy.api#noAuth"
    });
    else t.push(function(e) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "awsssoportal",
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
    const t = (0, n.resolveAwsSdkSigV4Config)(e);
    return Object.assign(t, {
        authSchemePreference: (0, r.normalizeProvider)(e.authSchemePreference ?? [])
    });
};
