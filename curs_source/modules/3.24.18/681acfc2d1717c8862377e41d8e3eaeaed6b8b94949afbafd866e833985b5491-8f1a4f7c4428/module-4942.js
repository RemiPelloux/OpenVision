"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const t = {}, A = {}, n = {}, r = new Map, o = new Map, s = {
        findMessage: (e)=>t[e],
        findEnum: (e)=>A[e],
        findService: (e)=>n[e],
        findExtensionFor (e, t) {
            var A, n;
            return null !== (n = null === (A = o.get(e)) || void 0 === A ? void 0 : A.get(t)) && void 0 !== n ? n : void 0;
        },
        findExtension (e) {
            var t;
            return null !== (t = r.get(e)) && void 0 !== t ? t : void 0;
        }
    };
    function i(e) {
        var c;
        if ("fields" in e) s.findMessage(e.typeName) || (t[e.typeName] = e, e.fields.list().forEach(a));
        else if ("methods" in e) {
            if (!s.findService(e.typeName)) {
                n[e.typeName] = e;
                for (const t of Object.values(e.methods))i(t.I), i(t.O);
            }
        } else if ("extendee" in e) {
            if (!r.has(e.typeName)) {
                r.set(e.typeName, e);
                const t = e.extendee.typeName;
                o.has(t) || o.set(t, new Map), null === (c = o.get(t)) || void 0 === c || c.set(e.field.no, e), i(e.extendee), a(e.field);
            }
        } else A[e.typeName] = e;
    }
    function a(e) {
        "message" == e.kind ? i(e.T) : "map" == e.kind && "message" == e.V.kind ? i(e.V.T) : "enum" == e.kind && i(e.T);
    }
    for (const t of e)i(t);
    return s;
};
