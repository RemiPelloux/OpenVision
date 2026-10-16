"use strict";
require.d(exports, {
    N: ()=>d,
    P$: ()=>l,
    uW: ()=>u
});
var n = require("./module-36038.js");
class s extends n.Message {
    constructor(e){
        super(), this.code = 0, this.message = "", this.details = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(s, e, t);
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
var o = require("./module-92801.js"), i = require("./module-42481.js"), a = require("./module-84959.js"), c = require("./module-46930.js");
const l = "0";
function u(e, t) {
    if (t) {
        if (e.set(c.OJ, t.code.toString(10)), e.set(c.vw, encodeURIComponent(t.rawMessage)), t.details.length > 0) {
            const r = new s({
                code: t.code,
                message: t.rawMessage,
                details: t.details.map((e)=>"getType" in e ? n.Any.pack(e) : new n.Any({
                        typeUrl: `type.googleapis.com/${e.type}`,
                        value: e.value
                    }))
            });
            e.set(c.P7, (0, i.Zj)(r));
        }
    } else e.set(c.OJ, l.toString());
    return e;
}
function d(e) {
    var t;
    const r = e.get(c.P7);
    if (null != r) {
        const t = (0, i.by)(r, s);
        if (0 == t.code) return;
        const n = new o.T(t.message, t.code, e);
        return n.details = t.details.map((e)=>({
                type: e.typeUrl.substring(e.typeUrl.lastIndexOf("/") + 1),
                value: e.value
            })), n;
    }
    const n = e.get(c.OJ);
    if (null != n) {
        if (n === l) return;
        const r = parseInt(n, 10);
        return r in a.C ? new o.T(decodeURIComponent(null !== (t = e.get(c.vw)) && void 0 !== t ? t : ""), r, e) : new o.T(`invalid grpc-status: ${n}`, a.C.Internal, e);
    }
}
