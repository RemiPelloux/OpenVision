var n = require(21413), r = require(30740), s = require(9622), i = require(35517), a = require(78520), c = require(55909), d = require(93353), u = require(34770), l = require(55164), p = require(39022), h = require(90099), g = require("./module-56475.js"), S = require("./module-34066.js"), f = require(18415), m = require(59344), E = require("./module-62372.js"), v = require("./module-8392.js"), P = require("./module-33784.js");
const y = {
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
class R extends h.Client {
    config;
    constructor(...[e]){
        const t = S.getRuntimeConfig(e || {});
        super(t), this.initConfig = t;
        const o = (E = t, Object.assign(E, {
            useDualstackEndpoint: E.useDualstackEndpoint ?? !1,
            useFipsEndpoint: E.useFipsEndpoint ?? !1,
            defaultSigningName: "awsssoportal"
        }));
        var E;
        const v = i.resolveUserAgentConfig(o), P = p.resolveRetryConfig(v), y = a.resolveRegionConfig(P), R = n.resolveHostHeaderConfig(y), O = l.resolveEndpointConfig(R), C = ((e, t)=>{
            const o = Object.assign(f.getAwsRegionExtensionConfiguration(e), h.getDefaultExtensionConfiguration(e), m.getHttpHandlerExtensionConfiguration(e), ((e)=>{
                const t = e.httpAuthSchemes;
                let o = e.httpAuthSchemeProvider, n = e.credentials;
                return {
                    setHttpAuthScheme (e) {
                        const o = t.findIndex((t)=>t.schemeId === e.schemeId);
                        -1 === o ? t.push(e) : t.splice(o, 1, e);
                    },
                    httpAuthSchemes: ()=>t,
                    setHttpAuthSchemeProvider (e) {
                        o = e;
                    },
                    httpAuthSchemeProvider: ()=>o,
                    setCredentials (e) {
                        n = e;
                    },
                    credentials: ()=>n
                };
            })(e));
            return t.forEach((e)=>e.configure(o)), Object.assign(e, f.resolveAwsRegionExtensionConfiguration(o), h.resolveDefaultRuntimeConfig(o), m.resolveHttpHandlerRuntimeConfig(o), {
                httpAuthSchemes: (n = o).httpAuthSchemes(),
                httpAuthSchemeProvider: n.httpAuthSchemeProvider(),
                credentials: n.credentials()
            });
            var n;
        })(g.resolveHttpAuthSchemeConfig(O), e?.extensions || []);
        this.config = C, this.middlewareStack.use(d.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(i.getUserAgentPlugin(this.config)), this.middlewareStack.use(p.getRetryPlugin(this.config)), this.middlewareStack.use(u.getContentLengthPlugin(this.config)), this.middlewareStack.use(n.getHostHeaderPlugin(this.config)), this.middlewareStack.use(r.getLoggerPlugin(this.config)), this.middlewareStack.use(s.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(c.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: g.defaultSSOHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (e)=>new c.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": e.credentials
                })
        })), this.middlewareStack.use(c.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
class O extends h.Command.classBuilder().ep(y).m(function(e, t, o, n) {
    return [
        l.getEndpointPlugin(o, e.getEndpointParameterInstructions())
    ];
}).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").sc(E.GetRoleCredentials$).build() {
}
const C = {
    GetRoleCredentialsCommand: O
};
class _ extends R {
}
h.createAggregatedClient(C, _), exports.$Command = h.Command, exports.__Client = h.Client, exports.SSOServiceException = P.SSOServiceException, exports.GetRoleCredentialsCommand = O, exports.SSO = _, exports.SSOClient = R, Object.prototype.hasOwnProperty.call(E, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: E.__proto__
}), Object.keys(E).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = E[e]);
}), Object.prototype.hasOwnProperty.call(v, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: v.__proto__
}), Object.keys(v).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = v[e]);
});
