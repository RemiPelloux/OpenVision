"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const t = require("./module-609.js"), s = require("./module-5682.js"), o = require("./module-1802.js"), r = require("./module-536.js"), i = require("./module-7141.js"), l = require("./module-2672.js");
exports.makeProtoRuntime = function(e, a, n) {
    return {
        syntax: e,
        json: (0, r.makeJsonFormat)(),
        bin: (0, i.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, l.makeUtilCommon)()), {
            newFieldList: a,
            initFields: n
        }),
        makeMessageType (e, a, n) {
            return (0, s.makeMessageType)(this, e, a, n);
        },
        makeEnum: t.makeEnum,
        makeEnumType: t.makeEnumType,
        getEnumType: t.getEnumType,
        makeExtension (e, a, n) {
            return (0, o.makeExtension)(this, e, a, n);
        }
    };
};
