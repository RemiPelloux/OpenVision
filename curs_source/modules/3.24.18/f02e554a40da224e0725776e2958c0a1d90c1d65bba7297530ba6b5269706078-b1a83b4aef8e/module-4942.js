"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createRegistry = void 0, exports.createRegistry = function(...t) {
    const e = {}, r = {}, n = {}, s = new Map, i = new Map, o = {
        findMessage: (t)=>e[t],
        findEnum: (t)=>r[t],
        findService: (t)=>n[t],
        findExtensionFor (t, e) {
            var r, n;
            return null !== (n = null === (r = i.get(t)) || void 0 === r ? void 0 : r.get(e)) && void 0 !== n ? n : void 0;
        },
        findExtension (t) {
            var e;
            return null !== (e = s.get(t)) && void 0 !== e ? e : void 0;
        }
    };
    function a(t) {
        var c;
        if ("fields" in t) o.findMessage(t.typeName) || (e[t.typeName] = t, t.fields.list().forEach(u));
        else if ("methods" in t) {
            if (!o.findService(t.typeName)) {
                n[t.typeName] = t;
                for (const e of Object.values(t.methods))a(e.I), a(e.O);
            }
        } else if ("extendee" in t) {
            if (!s.has(t.typeName)) {
                s.set(t.typeName, t);
                const e = t.extendee.typeName;
                i.has(e) || i.set(e, new Map), null === (c = i.get(e)) || void 0 === c || c.set(t.field.no, t), a(t.extendee), u(t.field);
            }
        } else r[t.typeName] = t;
    }
    function u(t) {
        "message" == t.kind ? a(t.T) : "map" == t.kind && "message" == t.V.kind ? a(t.V.T) : "enum" == t.kind && a(t.T);
    }
    for (const e of t)a(e);
    return o;
};
