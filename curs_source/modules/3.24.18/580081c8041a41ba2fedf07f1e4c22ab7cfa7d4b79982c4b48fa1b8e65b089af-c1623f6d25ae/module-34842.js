Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultEndpointResolver = void 0;
const i = require(41119), o = require(82713), r = require("./module-25103.js"), s = new o.EndpointCache({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS",
        "UseGlobalEndpoint"
    ]
});
exports.defaultEndpointResolver = (e, t = {})=>s.get(e, ()=>(0, o.decideEndpoint)(r.bdd, {
            endpointParams: e,
            logger: t.logger
        })), o.customEndpointFunctions.aws = i.awsEndpointFunctions;
