"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const t = require("./module-4193.js");
exports.makeMessageType = function(e, a, n, s) {
    var o;
    const r = null !== (o = null == s ? void 0 : s.localName) && void 0 !== o ? o : a.substring(a.lastIndexOf(".") + 1), i = {
        [r]: function(a) {
            e.util.initFields(this), e.util.initPartial(a, this);
        }
    }[r];
    return Object.setPrototypeOf(i.prototype, new t.Message), Object.assign(i, {
        runtime: e,
        typeName: a,
        fields: e.util.newFieldList(n),
        fromBinary: (e, a)=>(new i).fromBinary(e, a),
        fromJson: (e, a)=>(new i).fromJson(e, a),
        fromJsonString: (e, a)=>(new i).fromJsonString(e, a),
        equals: (a, n)=>e.util.equals(i, a, n)
    }), i;
};
