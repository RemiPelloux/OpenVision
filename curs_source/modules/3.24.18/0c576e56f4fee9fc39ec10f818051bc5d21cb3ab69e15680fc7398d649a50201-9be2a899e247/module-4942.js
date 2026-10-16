"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const t = {}, r = {}, n = {}, o = new Map, s = new Map, i = {
        findMessage: (e)=>t[e],
        findEnum: (e)=>r[e],
        findService: (e)=>n[e],
        findExtensionFor (e, t) {
            var r, n;
            return null !== (n = null === (r = s.get(e)) || void 0 === r ? void 0 : r.get(t)) && void 0 !== n ? n : void 0;
        },
        findExtension (e) {
            var t;
            return null !== (t = o.get(e)) && void 0 !== t ? t : void 0;
        }
    };
    function a(e) {
        var u;
        if ("fields" in e) i.findMessage(e.typeName) || (t[e.typeName] = e, e.fields.list().forEach(c));
        else if ("methods" in e) {
            if (!i.findService(e.typeName)) {
                n[e.typeName] = e;
                for (const t of Object.values(e.methods))a(t.I), a(t.O);
            }
        } else if ("extendee" in e) {
            if (!o.has(e.typeName)) {
                o.set(e.typeName, e);
                const t = e.extendee.typeName;
                s.has(t) || s.set(t, new Map), null === (u = s.get(t)) || void 0 === u || u.set(e.field.no, e), a(e.extendee), c(e.field);
            }
        } else r[e.typeName] = e;
    }
    function c(e) {
        "message" == e.kind ? a(e.T) : "map" == e.kind && "message" == e.V.kind ? a(e.V.T) : "enum" == e.kind && a(e.T);
    }
    for (const t of e)a(t);
    return i;
};
