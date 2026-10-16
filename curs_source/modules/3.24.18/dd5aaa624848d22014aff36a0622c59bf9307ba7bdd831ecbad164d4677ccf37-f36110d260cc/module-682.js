Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const r = require("./module-193.js");
exports.makeMessageType = function(e, t, n, o) {
    var a;
    const s = null !== (a = null == o ? void 0 : o.localName) && void 0 !== a ? a : t.substring(t.lastIndexOf(".") + 1), i = {
        [s]: function(t) {
            e.util.initFields(this), e.util.initPartial(t, this);
        }
    }[s];
    return Object.setPrototypeOf(i.prototype, new r.Message), Object.assign(i, {
        runtime: e,
        typeName: t,
        fields: e.util.newFieldList(n),
        fromBinary: (e, t)=>(new i).fromBinary(e, t),
        fromJson: (e, t)=>(new i).fromJson(e, t),
        fromJsonString: (e, t)=>(new i).fromJsonString(e, t),
        equals: (t, n)=>e.util.equals(i, t, n)
    }), i;
};
