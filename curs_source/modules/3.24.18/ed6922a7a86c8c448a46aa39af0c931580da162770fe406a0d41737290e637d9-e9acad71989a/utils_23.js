import { aXs } from "./A3u.js";
import { Ai, jn } from "./HVr.js";
import { Hu } from "./chat_pb.js";
import { B4e } from "./composerNotificationService.js";
import { QL, So } from "./constants_8.js";
import { en } from "./dom_2.js";
import { EM, bR } from "./editor.js";
import { tki } from "./groupSelection.js";
import { VMe } from "./internalAgentToolsFileUtils.js";
import { s7i } from "./messageGrouping.js";
import { ji } from "./notification.js";
import { ko } from "./opener.js";
import { eF } from "./planFileUtils.js";
import { CRe, m5, qn } from "./qIc.js";
import { tXs } from "./timestampFormatting.js";
import { ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { b1, jbn } from "./utils_16.js";
var c7i, Ose, uSt, P3u, lXs, L3u;
export { L3u, Ose, P3u, c7i, lXs, uSt };
var __wakaru__C_initialized = false;
export function _C() {
if (__wakaru__C_initialized) return;
__wakaru__C_initialized = true;
"use strict";
x(), qn(), en(), So(), jn(), tXs(), Qt(), EM(), ji(), ko(), B4e(), Hu(), ql(), tki(), b1(), s7i(), VMe(), eF(), c7i = "composer-keep-all-no-inline-diffs-toast-shown", Ose = (e)=>Ai ? `\u2318${e}` : `^${e}`, uSt = async (e, t, n)=>{
    if (jbn(t, {
        filePathOrUri: e,
        selection: n?.selection
    })) return;
    let i;
    typeof e == "string" ? i = t.workspaceContextService.resolveRelativePath(e) : i = e, n?.selection && (i = m5(i, {
        startLineNumber: n.selection.startLineNumber,
        startColumn: n.selection.startColumn ?? 1,
        endLineNumber: n.selection.endLineNumber ?? n.selection.startLineNumber,
        endColumn: n.selection.endColumn ?? n.selection.startColumn ?? 1
    }));
    const r = i.with({
        fragment: "",
        query: ""
    });
    if (!await t.fileService.exists(r)) return;
    const o = n?.openToSide ?? !1, a = n?.preserveFocus ?? !0;
    if (n?.preferNeighboringGroup) if (o) {
        P3u(i, t, n.openToSide);
        return;
    } else {
        const c = aXs(t.editorGroupService);
        if (c) {
            const u = t.editorGroupService.activeGroup;
            c.focus(), await t.openerService.open(i, {
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !1,
                    revealIfOpened: !1,
                    source: bR.USER,
                    preserveFocus: a
                },
                fromUserGesture: !0
            }), a && u.focus();
            return;
        }
        if (t.editorService.activeEditor?.typeId === QL) {
            t.openerService.open(i, {
                openToSide: !0,
                editorOptions: {
                    revealIfVisible: !0,
                    revealIfOpened: !0,
                    source: bR.USER,
                    preserveFocus: a
                },
                fromUserGesture: !0
            });
            return;
        }
    }
    if (!o) {
        const c = t.editorService.activeEditorPane?.group ?? t.editorGroupService.activeGroup, l = t.editorGroupService.mainPart.getGroups(1), u = c ? [
            c,
            ...l.filter((p)=>p.id !== c.id)
        ] : l, h = CRe(u);
        if (h && c && h.id !== c.id) {
            h.focus(), await t.openerService.open(i, {
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !0,
                    revealIfOpened: !0,
                    source: bR.USER,
                    preserveFocus: a
                },
                fromUserGesture: !0
            }), a && c.focus();
            return;
        }
    }
    t.openerService.open(i, {
        openToSide: o,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: bR.USER,
            preserveFocus: a
        },
        fromUserGesture: !0
    });
}, P3u = async (e, t, n = !0, i)=>{
    if (jbn(t, {
        filePathOrUri: e,
        selection: i
    })) return;
    let r;
    if (typeof e == "string") {
        const a = e.trim();
        if (!a) return;
        r = t.workspaceContextService.resolveRelativePath(a);
    } else r = e;
    i && (r = m5(r, {
        startLineNumber: i.startLineNumber,
        startColumn: i.startColumn ?? 1,
        endLineNumber: i.endLineNumber ?? i.startLineNumber,
        endColumn: i.endColumn ?? i.startColumn ?? 1
    }));
    const s = r.with({
        fragment: "",
        query: ""
    });
    if (await t.fileService.exists(s)) if (n) {
        const a = aXs(t.editorGroupService);
        if (a) {
            const c = t.editorGroupService.activeGroup;
            a.focus(), await t.openerService.open(r, {
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !1,
                    revealIfOpened: !1,
                    source: bR.USER,
                    preserveFocus: !0
                },
                fromUserGesture: !0
            }), c.focus();
            return;
        }
        t.openerService.open(r, {
            openToSide: !0,
            editorOptions: {
                revealIfVisible: !0,
                revealIfOpened: !0,
                source: bR.USER,
                preserveFocus: !0
            },
            fromUserGesture: !0
        });
    } else t.openerService.open(r, {
        openToSide: !1,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: bR.USER,
            preserveFocus: !0
        },
        fromUserGesture: !0
    });
}, lXs = (e, t, n)=>{
    if (n?.preferNeighboringGroup) {
        L3u(e, t, n);
        return;
    }
    const i = e.uri.path ?? "", r = {
        startLineNumber: e.range.selectionStartLineNumber,
        startColumn: 1,
        endLineNumber: e.range.positionLineNumber,
        endColumn: 1
    };
    if (jbn(t, {
        filePathOrUri: i,
        selection: r
    })) return;
    const s = t.workspaceContextService.resolveRelativePath(i);
    if (!s) return;
    const o = m5(s, r), a = t.editorService.activeEditorPane?.group ?? t.editorGroupService.activeGroup, c = t.editorGroupService.mainPart.getGroups(1), l = a ? [
        a,
        ...c.filter((p)=>p.id !== a.id)
    ] : c, u = CRe(l), h = n?.preserveFocus;
    if (!n?.openToSide && u && a && u.id !== a.id) {
        u.focus(), t.openerService.open(o, {
            openToSide: !1,
            editorOptions: {
                revealIfVisible: !0,
                revealIfOpened: !0,
                source: bR.USER,
                preserveFocus: h
            },
            fromUserGesture: !0,
            ...n
        }).finally(()=>{
            h && a.focus();
        });
        return;
    }
    t.openerService.open(o, {
        openToSide: !1,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: bR.USER,
            preserveFocus: h
        },
        fromUserGesture: !0,
        ...n
    });
}, L3u = async (e, t, n)=>{
    const i = e.uri.path ?? "", r = {
        startLineNumber: e.range.selectionStartLineNumber,
        startColumn: 1,
        endLineNumber: e.range.positionLineNumber,
        endColumn: 1
    };
    if (jbn(t, {
        filePathOrUri: i,
        selection: r
    })) return;
    const s = t.workspaceContextService.resolveRelativePath(i);
    if (!s) return;
    const o = m5(s, r);
    if ((n?.preferNeighboringGroup ?? !0) && !n?.openToSide) {
        const c = aXs(t.editorGroupService);
        if (c) {
            const l = t.editorGroupService.activeGroup;
            c.focus(), await t.openerService.open(o, {
                ...n,
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !1,
                    revealIfOpened: !1,
                    source: bR.USER,
                    preserveFocus: n?.editorOptions?.preserveFocus,
                    ...n?.editorOptions
                },
                fromUserGesture: !0
            }), n?.editorOptions?.preserveFocus && l.focus();
            return;
        }
    }
    t.openerService.open(o, {
        ...n,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: bR.USER,
            ...n?.editorOptions
        },
        openToSide: n?.openToSide,
        fromUserGesture: !0
    });
};

}
