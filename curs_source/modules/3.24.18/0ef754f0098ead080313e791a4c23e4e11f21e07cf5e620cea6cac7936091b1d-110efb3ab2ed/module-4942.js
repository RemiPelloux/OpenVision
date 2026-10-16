"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const a = {}, n = {}, t = {}, s = new Map, o = new Map, r = {
        findMessage: (e)=>a[e],
        findEnum: (e)=>n[e],
        findService: (e)=>t[e],
        findExtensionFor (e, a) {
            var n, t;
            return null !== (t = null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(a)) && void 0 !== t ? t : void 0;
        },
        findExtension (e) {
            var a;
            return null !== (a = s.get(e)) && void 0 !== a ? a : void 0;
        }
    };
    function i(e) {
        var d;
        if ("fields" in e) r.findMessage(e.typeName) || (a[e.typeName] = e, e.fields.list().forEach(l));
        else if ("methods" in e) {
            if (!r.findService(e.typeName)) {
                t[e.typeName] = e;
                for (const a of Object.values(e.methods))i(a.I), i(a.O);
            }
        } else if ("extendee" in e) {
            if (!s.has(e.typeName)) {
                s.set(e.typeName, e);
                const a = e.extendee.typeName;
                o.has(a) || o.set(a, new Map), null === (d = o.get(a)) || void 0 === d || d.set(e.field.no, e), i(e.extendee), l(e.field);
            }
        } else n[e.typeName] = e;
    }
    function l(e) {
        "message" == e.kind ? i(e.T) : "map" == e.kind && "message" == e.V.kind ? i(e.V.T) : "enum" == e.kind && i(e.T);
    }
    for (const a of e)i(a);
    return r;
};
