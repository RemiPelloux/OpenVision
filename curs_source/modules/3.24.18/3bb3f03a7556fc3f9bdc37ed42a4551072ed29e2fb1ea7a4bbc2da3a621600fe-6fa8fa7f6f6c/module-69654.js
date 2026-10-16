var o = require(21413), n = require(30740), i = require(9622), s = require(35517), c = require(78520), a = require(55909), p = require(93353), d = require(34770), l = require(55164), u = require(39022), h = require(90099), E = require("./module-83209.js"), S = require("./module-79928.js"), g = require(18415), x = require(59344), f = require("./module-38950.js"), v = require("./module-87242.js"), O = require("./module-47647.js");
const m = {
    UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
    },
    Endpoint: {
        type: "builtInParams",
        name: "endpoint"
    },
    Region: {
        type: "builtInParams",
        name: "region"
    },
    UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
    }
};
class I extends h.Client {
    config;
    constructor(...[e]){
        const t = S.getRuntimeConfig(e || {});
        super(t), this.initConfig = t;
        const r = (f = t, Object.assign(f, {
            useDualstackEndpoint: f.useDualstackEndpoint ?? !1,
            useFipsEndpoint: f.useFipsEndpoint ?? !1,
            defaultSigningName: "sso-oauth"
        }));
        var f;
        const v = s.resolveUserAgentConfig(r), O = u.resolveRetryConfig(v), m = c.resolveRegionConfig(O), I = o.resolveHostHeaderConfig(m), _ = l.resolveEndpointConfig(I), C = ((e, t)=>{
            const r = Object.assign(g.getAwsRegionExtensionConfiguration(e), h.getDefaultExtensionConfiguration(e), x.getHttpHandlerExtensionConfiguration(e), ((e)=>{
                const t = e.httpAuthSchemes;
                let r = e.httpAuthSchemeProvider, o = e.credentials;
                return {
                    setHttpAuthScheme (e) {
                        const r = t.findIndex((t)=>t.schemeId === e.schemeId);
                        -1 === r ? t.push(e) : t.splice(r, 1, e);
                    },
                    httpAuthSchemes: ()=>t,
                    setHttpAuthSchemeProvider (e) {
                        r = e;
                    },
                    httpAuthSchemeProvider: ()=>r,
                    setCredentials (e) {
                        o = e;
                    },
                    credentials: ()=>o
                };
            })(e));
            return t.forEach((e)=>e.configure(r)), Object.assign(e, g.resolveAwsRegionExtensionConfiguration(r), h.resolveDefaultRuntimeConfig(r), x.resolveHttpHandlerRuntimeConfig(r), {
                httpAuthSchemes: (o = r).httpAuthSchemes(),
                httpAuthSchemeProvider: o.httpAuthSchemeProvider(),
                credentials: o.credentials()
            });
            var o;
        })(E.resolveHttpAuthSchemeConfig(_), e?.extensions || []);
        this.config = C, this.middlewareStack.use(p.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(s.getUserAgentPlugin(this.config)), this.middlewareStack.use(u.getRetryPlugin(this.config)), this.middlewareStack.use(d.getContentLengthPlugin(this.config)), this.middlewareStack.use(o.getHostHeaderPlugin(this.config)), this.middlewareStack.use(n.getLoggerPlugin(this.config)), this.middlewareStack.use(i.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(a.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: E.defaultSSOOIDCHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (e)=>new a.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": e.credentials
                })
        })), this.middlewareStack.use(a.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
class _ extends h.Command.classBuilder().ep(m).m(function(e, t, r, o) {
    return [
        l.getEndpointPlugin(r, e.getEndpointParameterInstructions())
    ];
}).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(f.CreateToken$).build() {
}
const C = {
    CreateTokenCommand: _
};
class P extends I {
}
h.createAggregatedClient(C, P);
exports.$Command = h.Command, exports.__Client = h.Client, exports.SSOOIDCServiceException = O.SSOOIDCServiceException, exports.AccessDeniedExceptionReason = {
    KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
}, exports.CreateTokenCommand = _, exports.InvalidRequestExceptionReason = {
    KMS_DISABLED_KEY: "KMS_DisabledException",
    KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
    KMS_INVALID_STATE: "KMS_InvalidStateException",
    KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
}, exports.SSOOIDC = P, exports.SSOOIDCClient = I, Object.prototype.hasOwnProperty.call(f, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: f.__proto__
}), Object.keys(f).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = f[e]);
}), Object.prototype.hasOwnProperty.call(v, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: v.__proto__
}), Object.keys(v).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = v[e]);
});
