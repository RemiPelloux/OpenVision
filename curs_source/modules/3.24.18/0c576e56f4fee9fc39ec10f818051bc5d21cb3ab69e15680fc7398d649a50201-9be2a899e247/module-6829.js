"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const n = require("./module-609.js"), o = require("./module-5682.js"), s = require("./module-1802.js"), i = require("./module-536.js"), a = require("./module-7141.js"), c = require("./module-2672.js");
exports.makeProtoRuntime = function(e, t, r) {
    return {
        syntax: e,
        json: (0, i.makeJsonFormat)(),
        bin: (0, a.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, c.makeUtilCommon)()), {
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
