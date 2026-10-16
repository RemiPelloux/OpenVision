Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultEndpointResolver = void 0;
const o = require(41119), n = require(82713), i = require("./module-50532.js"), s = new n.EndpointCache({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS"
    ]
});
exports.defaultEndpointResolver = (e, t = {})=>s.get(e, ()=>(0, n.decideEndpoint)(i.bdd, {
            endpointParams: e,
            logger: t.logger
        })), n.customEndpointFunctions.aws = o.awsEndpointFunctions;
