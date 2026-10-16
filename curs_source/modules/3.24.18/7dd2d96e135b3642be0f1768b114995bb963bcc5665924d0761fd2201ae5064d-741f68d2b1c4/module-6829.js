"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeProtoRuntime = void 0;
const a = require("./module-609.js"), s = require("./module-5682.js"), o = require("./module-1802.js"), r = require("./module-536.js"), i = require("./module-7141.js"), A = require("./module-2672.js");
exports.makeProtoRuntime = function(e, n, t) {
    return {
        syntax: e,
        json: (0, r.makeJsonFormat)(),
        bin: (0, i.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, A.makeUtilCommon)()), {
            newFieldList: n,
            initFields: t
        }),
        makeMessageType (e, n, t) {
            return (0, s.makeMessageType)(this, e, n, t);
        },
        makeEnum: a.makeEnum,
        makeEnumType: a.makeEnumType,
        getEnumType: a.getEnumType,
        makeExtension (e, n, t) {
            return (0, o.makeExtension)(this, e, n, t);
        }
    };
};
