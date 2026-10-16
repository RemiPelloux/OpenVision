"use strict";
require.d(exports, {
    N: ()=>m,
    P$: ()=>c,
    uW: ()=>l
});
var n = require("./module-6038.js");
class s extends n.Message {
    constructor(t){
        super(), this.code = 0, this.message = "", this.details = [], n.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new s).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new s).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new s).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(s, t, e);
    }
}
s.runtime = n.proto3, s.typeName = "google.rpc.Status", s.fields = n.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "details",
            kind: "message",
            T: n.Any,
            repeated: !0
        }
    ]);
var i = require("./module-328.js"), o = require("./module-6422.js"), a = require("./module-8032.js"), u = require("./module-6551.js");
const c = "0";
function l(t, e) {
    if (e) {
        if (t.set(u.OJ, e.code.toString(10)), t.set(u.vw, encodeURIComponent(e.rawMessage)), e.details.length > 0) {
            const r = new s({
                code: e.code,
                message: e.rawMessage,
                details: e.details.map((t)=>"getType" in t ? n.Any.pack(t) : new n.Any({
                        typeUrl: `type.googleapis.com/${t.type}`,
                        value: t.value
                    }))
            });
            t.set(u.P7, (0, o.Zj)(r));
        }
    } else t.set(u.OJ, c.toString());
    return t;
}
function m(t) {
    var e;
    const r = t.get(u.P7);
    if (null != r) {
        const e = (0, o.by)(r, s);
        if (0 == e.code) return;
        const n = new i.T(e.message, e.code, t);
        return n.details = e.details.map((t)=>({
                type: t.typeUrl.substring(t.typeUrl.lastIndexOf("/") + 1),
                value: t.value
            })), n;
    }
    const n = t.get(u.OJ);
    if (null != n) {
        if (n === c) return;
        const r = parseInt(n, 10);
        return r in a.C ? new i.T(decodeURIComponent(null !== (e = t.get(u.vw)) && void 0 !== e ? e : ""), r, t) : new i.T(`invalid grpc-status: ${n}`, a.C.Internal, t);
    }
}
