Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mapOneOrManyArgs = void 0;
const s = require("./module-8143.js"), { isArray: o } = Array;
exports.mapOneOrManyArgs = function(e) {
    return (0, s.map)((a)=>(function(e, a) {
            return o(a) ? e(...a) : e(a);
        })(e, a));
};
