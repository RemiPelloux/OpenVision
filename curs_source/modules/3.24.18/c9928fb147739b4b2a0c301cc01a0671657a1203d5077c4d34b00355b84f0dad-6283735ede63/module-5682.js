Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.makeMessageType = void 0;
const s = require("./module-4193.js");
exports.makeMessageType = function(e, a, n, o) {
    var r;
    const t = null !== (r = null == o ? void 0 : o.localName) && void 0 !== r ? r : a.substring(a.lastIndexOf(".") + 1), i = {
        [t]: function(a) {
            e.util.initFields(this), e.util.initPartial(a, this);
        }
    }[t];
    return Object.setPrototypeOf(i.prototype, new s.Message), Object.assign(i, {
        runtime: e,
        typeName: a,
        fields: e.util.newFieldList(n),
        fromBinary: (e, a)=>(new i).fromBinary(e, a),
        fromJson: (e, a)=>(new i).fromJson(e, a),
        fromJsonString: (e, a)=>(new i).fromJsonString(e, a),
        equals: (a, n)=>e.util.equals(i, a, n)
    }), i;
};
