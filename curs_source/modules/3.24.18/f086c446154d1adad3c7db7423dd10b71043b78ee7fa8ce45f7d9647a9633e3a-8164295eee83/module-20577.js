Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveRuntimeExtensions = void 0;
const i = require(18415), o = require(59344), r = require(90099), s = require("./module-743.js");
exports.resolveRuntimeExtensions = (e, t)=>{
    const n = Object.assign((0, i.getAwsRegionExtensionConfiguration)(e), (0, r.getDefaultExtensionConfiguration)(e), (0, o.getHttpHandlerExtensionConfiguration)(e), (0, s.getHttpAuthExtensionConfiguration)(e));
    return t.forEach((e)=>e.configure(n)), Object.assign(e, (0, i.resolveAwsRegionExtensionConfiguration)(n), (0, r.resolveDefaultRuntimeConfig)(n), (0, o.resolveHttpHandlerRuntimeConfig)(n), (0, s.resolveHttpAuthRuntimeConfig)(n));
};
