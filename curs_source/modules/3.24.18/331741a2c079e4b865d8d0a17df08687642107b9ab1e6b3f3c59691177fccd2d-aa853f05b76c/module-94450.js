Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultEndpointResolver = void 0;
const o = require(41119), r = require(82713), i = require("./module-59575.js"), s = new r.EndpointCache({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS"
    ]
});
exports.defaultEndpointResolver = (e, t = {})=>s.get(e, ()=>(0, r.decideEndpoint)(i.bdd, {
            endpointParams: e,
            logger: t.logger
        })), r.customEndpointFunctions.aws = o.awsEndpointFunctions;
