"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const n = {}, t = {}, a = {}, s = new Map, o = new Map, r = {
        findMessage: (e)=>n[e],
        findEnum: (e)=>t[e],
        findService: (e)=>a[e],
        findExtensionFor (e, n) {
            var t, a;
            return null !== (a = null === (t = o.get(e)) || void 0 === t ? void 0 : t.get(n)) && void 0 !== a ? a : void 0;
        },
        findExtension (e) {
            var n;
            return null !== (n = s.get(e)) && void 0 !== n ? n : void 0;
        }
    };
    function i(e) {
        var c;
        if ("fields" in e) r.findMessage(e.typeName) || (n[e.typeName] = e, e.fields.list().forEach(A));
        else if ("methods" in e) {
            if (!r.findService(e.typeName)) {
                a[e.typeName] = e;
                for (const n of Object.values(e.methods))i(n.I), i(n.O);
            }
        } else if ("extendee" in e) {
            if (!s.has(e.typeName)) {
                s.set(e.typeName, e);
                const n = e.extendee.typeName;
                o.has(n) || o.set(n, new Map), null === (c = o.get(n)) || void 0 === c || c.set(e.field.no, e), i(e.extendee), A(e.field);
            }
        } else t[e.typeName] = e;
    }
    function A(e) {
        "message" == e.kind ? i(e.T) : "map" == e.kind && "message" == e.V.kind ? i(e.V.T) : "enum" == e.kind && i(e.T);
    }
    for (const n of e)i(n);
    return r;
};
