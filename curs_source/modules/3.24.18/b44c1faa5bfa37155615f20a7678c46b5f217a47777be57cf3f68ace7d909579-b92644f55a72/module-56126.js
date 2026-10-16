"use strict";
function n(e) {
    return e.clone();
}
function s(e) {
    return {
        ...e,
        value: o(e.value)
    };
}
function o(e) {
    const t = e.clone();
    return a(t), t;
}
function i(e, t) {
    let r = e;
    for(; null !== r;){
        const n = Object.getOwnPropertyDescriptor(r, t);
        if (void 0 !== n) return void 0 !== n.get ? n.get.call(e) : n.value;
        r = Object.getPrototypeOf(r);
    }
}
function a(e) {
    !function(e) {
        const t = e.getType().runtime.bin, r = t.listUnknownFields(e);
        if (0 === r.length) return;
        const n = r.map((e)=>({
                no: e.no,
                wireType: e.wireType,
                data: e.data.slice()
            }));
        t.discardUnknownFields(e);
        for (const r of n)t.onUnknownField(e, r.no, r.wireType, r.data);
    }(e);
    for (const t of e.getType().fields.byMember()){
        const r = i(e, t.localName);
        if ("oneof" !== t.kind) if (t.repeated && Array.isArray(r)) for (const e of r)c(e);
        else if ("map" !== t.kind || null === r || "object" != typeof r) c(r);
        else for (const e of Object.values(r))c(e);
        else null !== r && "object" == typeof r && "value" in r && c(r.value);
    }
}
function c(e) {
    (function(e) {
        return "object" == typeof e && null !== e && "function" == typeof e.clone && "function" == typeof e.getType;
    })(e) && a(e);
}
function l(e) {
    return {
        ...e,
        ...void 0 === e.parent ? {} : {
            parent: {
                ...e.parent
            }
        },
        ...void 0 === e.updatedAt ? {} : {
            updatedAt: e.updatedAt.clone()
        },
        ...void 0 === e.workspace ? {} : {
            workspace: (t = e.workspace, {
                ...t,
                workspacePaths: [
                    ...t.workspacePaths
                ]
            })
        },
        queuedTurnIds: [
            ...e.queuedTurnIds
        ]
    };
    var t;
}
function u(e) {
    switch(e.event.case){
        case "snapshot":
            return {
                event: {
                    case: "snapshot",
                    value: {
                        sessions: e.event.value.sessions.map(l)
                    }
                }
            };
        case "added":
            return {
                event: {
                    case: "added",
                    value: {
                        session: l(e.event.value.session)
                    }
                }
            };
        case "updated":
            return {
                event: {
                    case: "updated",
                    value: {
                        session: l(e.event.value.session)
                    }
                }
            };
        case "deleted":
            return {
                event: {
                    case: "deleted",
                    value: {
                        sessionId: e.event.value.sessionId
                    }
                }
            };
        default:
            return e.event;
    }
}
function d(e) {
    return {
        ...e,
        metadata: void 0 === e.metadata ? void 0 : {
            ...e.metadata
        }
    };
}
require.d(exports, {
    C8: ()=>d,
    J5: ()=>l,
    VB: ()=>s,
    ks: ()=>n,
    q4: ()=>u
});
