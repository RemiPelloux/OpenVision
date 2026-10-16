Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...e) {
    const t = {}, n = {}, r = {}, o = new Map, a = new Map, s = {
        findMessage: (e)=>t[e],
        findEnum: (e)=>n[e],
        findService: (e)=>r[e],
        findExtensionFor (e, t) {
            var n, r;
            return null !== (r = null === (n = a.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : void 0;
        },
        findExtension (e) {
            var t;
            return null !== (t = o.get(e)) && void 0 !== t ? t : void 0;
        }
    };
    function i(e) {
        var u;
        if ("fields" in e) s.findMessage(e.typeName) || (t[e.typeName] = e, e.fields.list().forEach(l));
        else if ("methods" in e) {
            if (!s.findService(e.typeName)) {
                r[e.typeName] = e;
                for (const t of Object.values(e.methods))i(t.I), i(t.O);
            }
        } else if ("extendee" in e) {
            if (!o.has(e.typeName)) {
                o.set(e.typeName, e);
                const t = e.extendee.typeName;
                a.has(t) || a.set(t, new Map), null === (u = a.get(t)) || void 0 === u || u.set(e.field.no, e), i(e.extendee), l(e.field);
            }
        } else n[e.typeName] = e;
    }
    function l(e) {
        "message" == e.kind ? i(e.T) : "map" == e.kind && "message" == e.V.kind ? i(e.V.T) : "enum" == e.kind && i(e.T);
    }
    for (const t of e)i(t);
    return s;
};
