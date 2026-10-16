Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const o = require("./module-609.js"), s = require("./module-682.js"), t = require("./module-802.js"), r = require("./module-536.js"), i = require("./module-141.js"), m = require("./module-672.js");
exports.makeProtoRuntime = function(e, a, n) {
    return {
        syntax: e,
        json: (0, r.makeJsonFormat)(),
        bin: (0, i.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, m.makeUtilCommon)()), {
            newFieldList: a,
            initFields: n
        }),
        makeMessageType (e, a, n) {
            return (0, s.makeMessageType)(this, e, a, n);
        },
        makeEnum: o.makeEnum,
        makeEnumType: o.makeEnumType,
        getEnumType: o.getEnumType,
        makeExtension (e, a, n) {
            return (0, t.makeExtension)(this, e, a, n);
        }
    };
};
