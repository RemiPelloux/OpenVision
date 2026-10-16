"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const t = require("./module-4193.js");
exports.makeMessageType = function(e, n, a, s) {
    var o;
    const r = null !== (o = null == s ? void 0 : s.localName) && void 0 !== o ? o : n.substring(n.lastIndexOf(".") + 1), i = {
        [r]: function(n) {
            e.util.initFields(this), e.util.initPartial(n, this);
        }
    }[r];
    return Object.setPrototypeOf(i.prototype, new t.Message), Object.assign(i, {
        runtime: e,
        typeName: n,
        fields: e.util.newFieldList(a),
        fromBinary: (e, n)=>(new i).fromBinary(e, n),
        fromJson: (e, n)=>(new i).fromJson(e, n),
        fromJsonString: (e, n)=>(new i).fromJsonString(e, n),
        equals: (n, a)=>e.util.equals(i, n, a)
    }), i;
};
