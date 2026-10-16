"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const n = require("./module-609.js"), o = require("./module-35682.js"), s = require("./module-1802.js"), i = require("./module-20536.js"), a = require("./module-47141.js"), l = require("./module-62672.js");
exports.makeProtoRuntime = function(e, t, r) {
    return {
        syntax: e,
        json: (0, i.makeJsonFormat)(),
        bin: (0, a.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, l.makeUtilCommon)()), {
            newFieldList: t,
            initFields: r
        }),
        makeMessageType (e, t, r) {
            return (0, o.makeMessageType)(this, e, t, r);
        },
        makeEnum: n.makeEnum,
        makeEnumType: n.makeEnumType,
        getEnumType: n.getEnumType,
        makeExtension (e, t, r) {
            return (0, s.makeExtension)(this, e, t, r);
        }
    };
};
