Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const r = require("./module-609.js"), o = require("./module-682.js"), a = require("./module-802.js"), s = require("./module-536.js"), i = require("./module-141.js"), l = require("./module-672.js");
exports.makeProtoRuntime = function(e, t, n) {
    return {
        syntax: e,
        json: (0, s.makeJsonFormat)(),
        bin: (0, i.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, l.makeUtilCommon)()), {
            newFieldList: t,
            initFields: n
        }),
        makeMessageType (e, t, n) {
            return (0, o.makeMessageType)(this, e, t, n);
        },
        makeEnum: r.makeEnum,
        makeEnumType: r.makeEnumType,
        getEnumType: r.getEnumType,
        makeExtension (e, t, n) {
            return (0, a.makeExtension)(this, e, t, n);
        }
    };
};
