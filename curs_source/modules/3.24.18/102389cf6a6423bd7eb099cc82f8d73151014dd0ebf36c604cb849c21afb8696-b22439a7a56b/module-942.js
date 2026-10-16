Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const a = {}, n = {}, o = {}, s = new Map, t = new Map, r = {
        findMessage: (e)=>a[e],
        findEnum: (e)=>n[e],
        findService: (e)=>o[e],
        findExtensionFor (e, a) {
            var n, o;
            return null !== (o = null === (n = t.get(e)) || void 0 === n ? void 0 : n.get(a)) && void 0 !== o ? o : void 0;
        },
        findExtension (e) {
            var a;
            return null !== (a = s.get(e)) && void 0 !== a ? a : void 0;
        }
    };
    function i(e) {
        var l;
        if ("fields" in e) r.findMessage(e.typeName) || (a[e.typeName] = e, e.fields.list().forEach(m));
        else if ("methods" in e) {
            if (!r.findService(e.typeName)) {
                o[e.typeName] = e;
                for (const a of Object.values(e.methods))i(a.I), i(a.O);
            }
        } else if ("extendee" in e) {
            if (!s.has(e.typeName)) {
                s.set(e.typeName, e);
                const a = e.extendee.typeName;
                t.has(a) || t.set(a, new Map), null === (l = t.get(a)) || void 0 === l || l.set(e.field.no, e), i(e.extendee), m(e.field);
            }
        } else n[e.typeName] = e;
    }
    function m(e) {
        "message" == e.kind ? i(e.T) : "map" == e.kind && "message" == e.V.kind ? i(e.V.T) : "enum" == e.kind && i(e.T);
    }
    for (const a of e)i(a);
    return r;
};
