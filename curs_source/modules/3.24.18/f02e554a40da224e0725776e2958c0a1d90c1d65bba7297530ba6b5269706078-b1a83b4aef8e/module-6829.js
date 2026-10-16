"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const n = require("./module-609.js"), s = require("./module-5682.js"), i = require("./module-1802.js"), o = require("./module-536.js"), a = require("./module-7141.js"), u = require("./module-2672.js");
exports.makeProtoRuntime = function(t, e, r) {
    return {
        syntax: t,
        json: (0, o.makeJsonFormat)(),
        bin: (0, a.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, u.makeUtilCommon)()), {
            newFieldList: e,
            initFields: r
        }),
        makeMessageType (t, e, r) {
            return (0, s.makeMessageType)(this, t, e, r);
        },
        makeEnum: n.makeEnum,
        makeEnumType: n.makeEnumType,
        getEnumType: n.getEnumType,
        makeExtension (t, e, r) {
            return (0, i.makeExtension)(this, t, e, r);
        }
    };
};
