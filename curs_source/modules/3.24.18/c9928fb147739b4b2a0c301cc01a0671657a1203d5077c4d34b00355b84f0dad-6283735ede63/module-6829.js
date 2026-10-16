Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const s = require("./module-609.js"), o = require("./module-5682.js"), r = require("./module-1802.js"), t = require("./module-536.js"), i = require("./module-7141.js"), m = require("./module-2672.js");
exports.makeProtoRuntime = function(e, a, n) {
    return {
        syntax: e,
        json: (0, t.makeJsonFormat)(),
        bin: (0, i.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, m.makeUtilCommon)()), {
            newFieldList: a,
            initFields: n
        }),
        makeMessageType (e, a, n) {
            return (0, o.makeMessageType)(this, e, a, n);
        },
        makeEnum: s.makeEnum,
        makeEnumType: s.makeEnumType,
        getEnumType: s.getEnumType,
        makeExtension (e, a, n) {
            return (0, r.makeExtension)(this, e, a, n);
        }
    };
};
