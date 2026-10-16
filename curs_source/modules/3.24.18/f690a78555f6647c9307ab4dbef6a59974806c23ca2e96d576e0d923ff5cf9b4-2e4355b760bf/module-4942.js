"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const A = {}, t = {}, n = {}, r = new Map, o = new Map, s = {
        findMessage: (e)=>A[e],
        findEnum: (e)=>t[e],
        findService: (e)=>n[e],
        findExtensionFor (e, A) {
            var t, n;
            return null !== (n = null === (t = o.get(e)) || void 0 === t ? void 0 : t.get(A)) && void 0 !== n ? n : void 0;
        },
        findExtension (e) {
            var A;
            return null !== (A = r.get(e)) && void 0 !== A ? A : void 0;
        }
    };
    function a(e) {
        var c;
        if ("fields" in e) s.findMessage(e.typeName) || (A[e.typeName] = e, e.fields.list().forEach(i));
        else if ("methods" in e) {
            if (!s.findService(e.typeName)) {
                n[e.typeName] = e;
                for (const A of Object.values(e.methods))a(A.I), a(A.O);
            }
        } else if ("extendee" in e) {
            if (!r.has(e.typeName)) {
                r.set(e.typeName, e);
                const A = e.extendee.typeName;
                o.has(A) || o.set(A, new Map), null === (c = o.get(A)) || void 0 === c || c.set(e.field.no, e), a(e.extendee), i(e.field);
            }
        } else t[e.typeName] = e;
    }
    function i(e) {
        "message" == e.kind ? a(e.T) : "map" == e.kind && "message" == e.V.kind ? a(e.V.T) : "enum" == e.kind && a(e.T);
    }
    for (const A of e)a(A);
    return s;
};
