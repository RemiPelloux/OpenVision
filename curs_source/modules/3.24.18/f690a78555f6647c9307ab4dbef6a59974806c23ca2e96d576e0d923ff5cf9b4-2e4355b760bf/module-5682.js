"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const n = require("./module-4193.js");
exports.makeMessageType = function(e, A, t, r) {
    var o;
    const s = null !== (o = null == r ? void 0 : r.localName) && void 0 !== o ? o : A.substring(A.lastIndexOf(".") + 1), a = {
        [s]: function(A) {
            e.util.initFields(this), e.util.initPartial(A, this);
        }
    }[s];
    return Object.setPrototypeOf(a.prototype, new n.Message), Object.assign(a, {
        runtime: e,
        typeName: A,
        fields: e.util.newFieldList(t),
        fromBinary: (e, A)=>(new a).fromBinary(e, A),
        fromJson: (e, A)=>(new a).fromJson(e, A),
        fromJsonString: (e, A)=>(new a).fromJsonString(e, A),
        equals: (A, t)=>e.util.equals(a, A, t)
    }), a;
};
