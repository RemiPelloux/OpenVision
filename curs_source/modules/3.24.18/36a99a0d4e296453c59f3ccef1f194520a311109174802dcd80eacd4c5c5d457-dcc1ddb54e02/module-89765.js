Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultEndpointResolver = void 0;
const n = require(41119), r = require(82713), s = require("./module-78674.js"), i = new r.EndpointCache({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS"
    ]
});
exports.defaultEndpointResolver = (e, t = {})=>i.get(e, ()=>(0, r.decideEndpoint)(s.bdd, {
            endpointParams: e,
            logger: t.logger
        })), r.customEndpointFunctions.aws = n.awsEndpointFunctions;
