Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onErrorResumeNextWith = void 0;
const s = require("./module-9031.js"), o = require("./module-5414.js");
exports.onErrorResumeNextWith = function(...e) {
    const a = (0, s.argsOrArgArray)(e);
    return (e)=>(0, o.onErrorResumeNext)(e, ...a);
};
