"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const n = {}, a = {}, t = {}, s = new Map, o = new Map, r = {
        findMessage: (e)=>n[e],
        findEnum: (e)=>a[e],
        findService: (e)=>t[e],
        findExtensionFor (e, n) {
            var a, t;
            return null !== (t = null === (a = o.get(e)) || void 0 === a ? void 0 : a.get(n)) && void 0 !== t ? t : void 0;
        },
        findExtension (e) {
            var n;
            return null !== (n = s.get(e)) && void 0 !== n ? n : void 0;
        }
    };
    function i(e) {
        var l;
        if ("fields" in e) r.findMessage(e.typeName) || (n[e.typeName] = e, e.fields.list().forEach(A));
        else if ("methods" in e) {
            if (!r.findService(e.typeName)) {
                t[e.typeName] = e;
                for (const n of Object.values(e.methods))i(n.I), i(n.O);
            }
        } else if ("extendee" in e) {
            if (!s.has(e.typeName)) {
                s.set(e.typeName, e);
                const n = e.extendee.typeName;
                o.has(n) || o.set(n, new Map), null === (l = o.get(n)) || void 0 === l || l.set(e.field.no, e), i(e.extendee), A(e.field);
            }
        } else a[e.typeName] = e;
    }
    function A(e) {
        "message" == e.kind ? i(e.T) : "map" == e.kind && "message" == e.V.kind ? i(e.V.T) : "enum" == e.kind && i(e.T);
    }
    for (const n of e)i(n);
    return r;
};
