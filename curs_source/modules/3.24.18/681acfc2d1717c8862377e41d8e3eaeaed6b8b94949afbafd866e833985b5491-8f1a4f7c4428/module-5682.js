"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const n = require("./module-4193.js");
exports.makeMessageType = function(e, t, A, r) {
    var o;
    const s = null !== (o = null == r ? void 0 : r.localName) && void 0 !== o ? o : t.substring(t.lastIndexOf(".") + 1), i = {
        [s]: function(t) {
            e.util.initFields(this), e.util.initPartial(t, this);
        }
    }[s];
    return Object.setPrototypeOf(i.prototype, new n.Message), Object.assign(i, {
        runtime: e,
        typeName: t,
        fields: e.util.newFieldList(A),
        fromBinary: (e, t)=>(new i).fromBinary(e, t),
        fromJson: (e, t)=>(new i).fromJson(e, t),
        fromJsonString: (e, t)=>(new i).fromJsonString(e, t),
        equals: (t, A)=>e.util.equals(i, t, A)
    }), i;
};
