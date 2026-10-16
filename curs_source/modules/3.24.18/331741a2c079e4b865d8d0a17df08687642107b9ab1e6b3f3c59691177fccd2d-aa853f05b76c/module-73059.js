var o = require(21413), r = require(30740), i = require(9622), s = require(35517), a = require(78520), c = require(55909), u = require(93353), d = require(34770), p = require(55164), l = require(39022), g = require(90099), h = require("./module-25964.js"), E = require("./module-93413.js"), S = require(18415), f = require(59344), m = require("./module-73415.js"), v = require("./module-29539.js"), P = require("./module-6486.js");
const O = {
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
class _ extends g.Client {
    config;
    constructor(...[e]){
        const t = E.getRuntimeConfig(e || {});
        super(t), this.initConfig = t;
        const n = (m = t, Object.assign(m, {
            useDualstackEndpoint: m.useDualstackEndpoint ?? !1,
            useFipsEndpoint: m.useFipsEndpoint ?? !1,
            defaultSigningName: "signin"
        }));
        var m;
        const v = s.resolveUserAgentConfig(n), P = l.resolveRetryConfig(v), O = a.resolveRegionConfig(P), _ = o.resolveHostHeaderConfig(O), A = p.resolveEndpointConfig(_), C = ((e, t)=>{
            const n = Object.assign(S.getAwsRegionExtensionConfiguration(e), g.getDefaultExtensionConfiguration(e), f.getHttpHandlerExtensionConfiguration(e), ((e)=>{
                const t = e.httpAuthSchemes;
                let n = e.httpAuthSchemeProvider, o = e.credentials;
                return {
                    setHttpAuthScheme (e) {
                        const n = t.findIndex((t)=>t.schemeId === e.schemeId);
                        -1 === n ? t.push(e) : t.splice(n, 1, e);
                    },
                    httpAuthSchemes: ()=>t,
                    setHttpAuthSchemeProvider (e) {
                        n = e;
                    },
                    httpAuthSchemeProvider: ()=>n,
                    setCredentials (e) {
                        o = e;
                    },
                    credentials: ()=>o
                };
            })(e));
            return t.forEach((e)=>e.configure(n)), Object.assign(e, S.resolveAwsRegionExtensionConfiguration(n), g.resolveDefaultRuntimeConfig(n), f.resolveHttpHandlerRuntimeConfig(n), {
                httpAuthSchemes: (o = n).httpAuthSchemes(),
                httpAuthSchemeProvider: o.httpAuthSchemeProvider(),
                credentials: o.credentials()
            });
            var o;
        })(h.resolveHttpAuthSchemeConfig(A), e?.extensions || []);
        this.config = C, this.middlewareStack.use(u.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(s.getUserAgentPlugin(this.config)), this.middlewareStack.use(l.getRetryPlugin(this.config)), this.middlewareStack.use(d.getContentLengthPlugin(this.config)), this.middlewareStack.use(o.getHostHeaderPlugin(this.config)), this.middlewareStack.use(r.getLoggerPlugin(this.config)), this.middlewareStack.use(i.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(c.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: h.defaultSigninHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (e)=>new c.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": e.credentials
                })
        })), this.middlewareStack.use(c.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
class A extends g.Command.classBuilder().ep(O).m(function(e, t, n, o) {
    return [
        p.getEndpointPlugin(n, e.getEndpointParameterInstructions())
    ];
}).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(m.CreateOAuth2Token$).build() {
}
const C = {
    CreateOAuth2TokenCommand: A
};
class y extends _ {
}
g.createAggregatedClient(C, y);
exports.$Command = g.Command, exports.__Client = g.Client, exports.SigninServiceException = P.SigninServiceException, exports.CreateOAuth2TokenCommand = A, exports.OAuth2ErrorCode = {
    AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
    INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
    INVALID_REQUEST: "INVALID_REQUEST",
    SERVER_ERROR: "server_error",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
}, exports.Signin = y, exports.SigninClient = _, Object.prototype.hasOwnProperty.call(m, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: m.__proto__
}), Object.keys(m).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = m[e]);
}), Object.prototype.hasOwnProperty.call(v, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: v.__proto__
}), Object.keys(v).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = v[e]);
});
