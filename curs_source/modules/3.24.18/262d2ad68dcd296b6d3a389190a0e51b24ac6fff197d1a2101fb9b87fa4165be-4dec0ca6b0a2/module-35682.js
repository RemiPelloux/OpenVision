"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const n = require("./module-24193.js");
exports.makeMessageType = function(e, t, r, o) {
    var s;
    const i = null !== (s = null == o ? void 0 : o.localName) && void 0 !== s ? s : t.substring(t.lastIndexOf(".") + 1), a = {
        [i]: function(t) {
            e.util.initFields(this), e.util.initPartial(t, this);
        }
    }[i];
    return Object.setPrototypeOf(a.prototype, new n.Message), Object.assign(a, {
        runtime: e,
        typeName: t,
        fields: e.util.newFieldList(r),
        fromBinary: (e, t)=>(new a).fromBinary(e, t),
        fromJson: (e, t)=>(new a).fromJson(e, t),
        fromJsonString: (e, t)=>(new a).fromJsonString(e, t),
        equals: (t, r)=>e.util.equals(a, t, r)
    }), a;
};
