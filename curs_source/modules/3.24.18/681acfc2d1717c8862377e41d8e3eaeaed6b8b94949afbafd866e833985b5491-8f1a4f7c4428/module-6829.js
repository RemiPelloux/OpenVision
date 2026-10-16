"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const n = require("./module-609.js"), r = require("./module-5682.js"), o = require("./module-1802.js"), s = require("./module-536.js"), i = require("./module-7141.js"), a = require("./module-2672.js");
exports.makeProtoRuntime = function(e, t, A) {
    return {
        syntax: e,
        json: (0, s.makeJsonFormat)(),
        bin: (0, i.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, a.makeUtilCommon)()), {
            newFieldList: t,
            initFields: A
        }),
        makeMessageType (e, t, A) {
            return (0, r.makeMessageType)(this, e, t, A);
        },
        makeEnum: n.makeEnum,
        makeEnumType: n.makeEnumType,
        getEnumType: n.getEnumType,
        makeExtension (e, t, A) {
            return (0, o.makeExtension)(this, e, t, A);
        }
    };
};
