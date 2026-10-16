"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const n = require("./module-4193.js");
exports.makeMessageType = function(t, e, r, s) {
    var i;
    const o = null !== (i = null == s ? void 0 : s.localName) && void 0 !== i ? i : e.substring(e.lastIndexOf(".") + 1), a = {
        [o]: function(e) {
            t.util.initFields(this), t.util.initPartial(e, this);
        }
    }[o];
    return Object.setPrototypeOf(a.prototype, new n.Message), Object.assign(a, {
        runtime: t,
        typeName: e,
        fields: t.util.newFieldList(r),
        fromBinary: (t, e)=>(new a).fromBinary(t, e),
        fromJson: (t, e)=>(new a).fromJson(t, e),
        fromJsonString: (t, e)=>(new a).fromJsonString(t, e),
        equals: (e, r)=>t.util.equals(a, e, r)
    }), a;
};
