Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const a = {}, n = {}, s = {}, o = new Map, r = new Map, t = {
        findMessage: (e)=>a[e],
        findEnum: (e)=>n[e],
        findService: (e)=>s[e],
        findExtensionFor (e, a) {
            var n, s;
            return null !== (s = null === (n = r.get(e)) || void 0 === n ? void 0 : n.get(a)) && void 0 !== s ? s : void 0;
        },
        findExtension (e) {
            var a;
            return null !== (a = o.get(e)) && void 0 !== a ? a : void 0;
        }
    };
    function i(e) {
        var l;
        if ("fields" in e) t.findMessage(e.typeName) || (a[e.typeName] = e, e.fields.list().forEach(m));
        else if ("methods" in e) {
            if (!t.findService(e.typeName)) {
                s[e.typeName] = e;
                for (const a of Object.values(e.methods))i(a.I), i(a.O);
            }
        } else if ("extendee" in e) {
            if (!o.has(e.typeName)) {
                o.set(e.typeName, e);
                const a = e.extendee.typeName;
                r.has(a) || r.set(a, new Map), null === (l = r.get(a)) || void 0 === l || l.set(e.field.no, e), i(e.extendee), m(e.field);
            }
        } else n[e.typeName] = e;
    }
    function m(e) {
        "message" == e.kind ? i(e.T) : "map" == e.kind && "message" == e.V.kind ? i(e.V.T) : "enum" == e.kind && i(e.T);
    }
    for (const a of e)i(a);
    return t;
};
