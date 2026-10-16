Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.STSClient = exports.__Client = void 0;
const i = require(21413), o = require(30740), r = require(9622), s = require(35517), a = require(78520), c = require(55909), l = require(93353), d = require(34770), u = require(55164), p = require(39022), g = require(90099);
Object.defineProperty(exports, "__Client", {
    enumerable: !0,
    get: function() {
        return g.Client;
    }
});
const m = require("./module-87812.js"), h = require("./module-412.js"), S = require("./module-72829.js"), f = require("./module-20577.js");
class v extends g.Client {
    config;
    constructor(...[e]){
        const t = (0, S.getRuntimeConfig)(e || {});
        super(t), this.initConfig = t;
        const n = (0, h.resolveClientEndpointParameters)(t), g = (0, s.resolveUserAgentConfig)(n), v = (0, p.resolveRetryConfig)(g), y = (0, a.resolveRegionConfig)(v), E = (0, i.resolveHostHeaderConfig)(y), P = (0, u.resolveEndpointConfig)(E), C = (0, m.resolveHttpAuthSchemeConfig)(P), A = (0, f.resolveRuntimeExtensions)(C, e?.extensions || []);
        this.config = A, this.middlewareStack.use((0, l.getSchemaSerdePlugin)(this.config)), this.middlewareStack.use((0, s.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, p.getRetryPlugin)(this.config)), this.middlewareStack.use((0, d.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, i.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, o.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, r.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, c.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: m.defaultSTSHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (e)=>new c.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": e.credentials,
                    "aws.auth#sigv4a": e.credentials
                })
        })), this.middlewareStack.use((0, c.getHttpSigningPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.STSClient = v;
