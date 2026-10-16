"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const t = require("./module-609.js"), s = require("./module-5682.js"), o = require("./module-1802.js"), r = require("./module-536.js"), i = require("./module-7141.js"), A = require("./module-2672.js");
exports.makeProtoRuntime = function(e, n, a) {
    return {
        syntax: e,
        json: (0, r.makeJsonFormat)(),
        bin: (0, i.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, A.makeUtilCommon)()), {
            newFieldList: n,
            initFields: a
        }),
        makeMessageType (e, n, a) {
            return (0, s.makeMessageType)(this, e, n, a);
        },
        makeEnum: t.makeEnum,
        makeEnumType: t.makeEnumType,
        getEnumType: t.getEnumType,
        makeExtension (e, n, a) {
            return (0, o.makeExtension)(this, e, n, a);
        }
    };
};
