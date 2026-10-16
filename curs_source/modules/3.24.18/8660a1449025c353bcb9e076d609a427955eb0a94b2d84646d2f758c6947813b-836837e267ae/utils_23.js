import { Di, _r } from "./Iwo.js";
import { sSt } from "./LYd.js";
import { sd } from "./chat_pb.js";
import { Vst } from "./composerNotificationService.js";
import { XF, pa } from "./constants_8.js";
import { Hn } from "./dom_2.js";
import { T4, lL } from "./editor.js";
import { AVo } from "./groupSelection.js";
import { uqe } from "./internalAgentToolsFileUtils.js";
import { qSi } from "./messageGrouping.js";
import { Ks } from "./notification.js";
import { qc } from "./opener.js";
import { AB } from "./planFileUtils.js";
import { Czr } from "./timestampFormatting.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { hai, oT } from "./utils_16.js";
import { hFa } from "./yBp.js";
import { lne, pi } from "./ze.js";
var xzr, Cbe, IWt, EBp, mFa, IBp, YSi, xBp;
export { Cbe, EBp, IBp, IWt, YSi, mFa, xBp, xzr };
var __wakaru_rC_initialized = false;
export function rC() {
if (__wakaru_rC_initialized) return;
__wakaru_rC_initialized = true;
"use strict";
E(), pi(), Hn(), pa(), Di(), Czr(), fn(), T4(), Ks(), qc(), Vst(), sd(), Pu(), AVo(), oT(), qSi(), uqe(), AB(), xzr = "composer-keep-all-no-inline-diffs-toast-shown", Cbe = (t)=>_r ? `\u2318${t}` : `^${t}`, IWt = async (t, e, n)=>{
    if (hai(e, {
        filePathOrUri: t,
        selection: n?.selection
    })) return;
    let i;
    typeof t == "string" ? i = e.workspaceContextService.resolveRelativePath(t) : i = t, n?.selection && (i = lne(i, {
        startLineNumber: n.selection.startLineNumber,
        startColumn: n.selection.startColumn ?? 1,
        endLineNumber: n.selection.endLineNumber ?? n.selection.startLineNumber,
        endColumn: n.selection.endColumn ?? n.selection.startColumn ?? 1
    }));
    const r = i.with({
        fragment: "",
        query: ""
    });
    if (!await e.fileService.exists(r)) return;
    const o = n?.openToSide ?? !1, a = n?.preserveFocus ?? !0;
    if (n?.preferNeighboringGroup) if (o) {
        EBp(i, e, n.openToSide);
        return;
    } else {
        const l = hFa(e.editorGroupService);
        if (l) {
            const u = e.editorGroupService.activeGroup;
            l.focus(), await e.openerService.open(i, {
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !1,
                    revealIfOpened: !1,
                    source: lL.USER,
                    preserveFocus: a
                },
                fromUserGesture: !0
            }), a && u.focus();
            return;
        }
        if (e.editorService.activeEditor?.typeId === XF) {
            e.openerService.open(i, {
                openToSide: !0,
                editorOptions: {
                    revealIfVisible: !0,
                    revealIfOpened: !0,
                    source: lL.USER,
                    preserveFocus: a
                },
                fromUserGesture: !0
            });
            return;
        }
    }
    if (!o) {
        const l = e.editorService.activeEditorPane?.group ?? e.editorGroupService.activeGroup, c = e.editorGroupService.mainPart.getGroups(1), u = l ? [
            l,
            ...c.filter((h)=>h.id !== l.id)
        ] : c, d = sSt(u);
        if (d && l && d.id !== l.id) {
            d.focus(), await e.openerService.open(i, {
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !0,
                    revealIfOpened: !0,
                    source: lL.USER,
                    preserveFocus: a
                },
                fromUserGesture: !0
            }), a && l.focus();
            return;
        }
    }
    e.openerService.open(i, {
        openToSide: o,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: lL.USER,
            preserveFocus: a
        },
        fromUserGesture: !0
    });
}, EBp = async (t, e, n = !0, i)=>{
    if (hai(e, {
        filePathOrUri: t,
        selection: i
    })) return;
    let r;
    if (typeof t == "string") {
        const a = t.trim();
        if (!a) return;
        r = e.workspaceContextService.resolveRelativePath(a);
    } else r = t;
    i && (r = lne(r, {
        startLineNumber: i.startLineNumber,
        startColumn: i.startColumn ?? 1,
        endLineNumber: i.endLineNumber ?? i.startLineNumber,
        endColumn: i.endColumn ?? i.startColumn ?? 1
    }));
    const s = r.with({
        fragment: "",
        query: ""
    });
    if (await e.fileService.exists(s)) if (n) {
        const a = hFa(e.editorGroupService);
        if (a) {
            const l = e.editorGroupService.activeGroup;
            a.focus(), await e.openerService.open(r, {
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !1,
                    revealIfOpened: !1,
                    source: lL.USER,
                    preserveFocus: !0
                },
                fromUserGesture: !0
            }), l.focus();
            return;
        }
        e.openerService.open(r, {
            openToSide: !0,
            editorOptions: {
                revealIfVisible: !0,
                revealIfOpened: !0,
                source: lL.USER,
                preserveFocus: !0
            },
            fromUserGesture: !0
        });
    } else e.openerService.open(r, {
        openToSide: !1,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: lL.USER,
            preserveFocus: !0
        },
        fromUserGesture: !0
    });
}, mFa = (t, e, n)=>{
    if (n?.preferNeighboringGroup) {
        IBp(t, e, n);
        return;
    }
    const i = t.uri.path ?? "", r = {
        startLineNumber: t.range.selectionStartLineNumber,
        startColumn: 1,
        endLineNumber: t.range.positionLineNumber,
        endColumn: 1
    };
    if (hai(e, {
        filePathOrUri: i,
        selection: r
    })) return;
    const s = e.workspaceContextService.resolveRelativePath(i);
    if (!s) return;
    const o = lne(s, r), a = e.editorService.activeEditorPane?.group ?? e.editorGroupService.activeGroup, l = e.editorGroupService.mainPart.getGroups(1), c = a ? [
        a,
        ...l.filter((h)=>h.id !== a.id)
    ] : l, u = sSt(c), d = n?.preserveFocus;
    if (!n?.openToSide && u && a && u.id !== a.id) {
        u.focus(), e.openerService.open(o, {
            openToSide: !1,
            editorOptions: {
                revealIfVisible: !0,
                revealIfOpened: !0,
                source: lL.USER,
                preserveFocus: d
            },
            fromUserGesture: !0,
            ...n
        }).finally(()=>{
            d && a.focus();
        });
        return;
    }
    e.openerService.open(o, {
        openToSide: !1,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: lL.USER,
            preserveFocus: d
        },
        fromUserGesture: !0,
        ...n
    });
}, IBp = async (t, e, n)=>{
    const i = t.uri.path ?? "", r = {
        startLineNumber: t.range.selectionStartLineNumber,
        startColumn: 1,
        endLineNumber: t.range.positionLineNumber,
        endColumn: 1
    };
    if (hai(e, {
        filePathOrUri: i,
        selection: r
    })) return;
    const s = e.workspaceContextService.resolveRelativePath(i);
    if (!s) return;
    const o = lne(s, r);
    if ((n?.preferNeighboringGroup ?? !0) && !n?.openToSide) {
        const l = hFa(e.editorGroupService);
        if (l) {
            const c = e.editorGroupService.activeGroup;
            l.focus(), await e.openerService.open(o, {
                ...n,
                openToSide: !1,
                editorOptions: {
                    revealIfVisible: !1,
                    revealIfOpened: !1,
                    source: lL.USER,
                    preserveFocus: n?.editorOptions?.preserveFocus,
                    ...n?.editorOptions
                },
                fromUserGesture: !0
            }), n?.editorOptions?.preserveFocus && c.focus();
            return;
        }
    }
    e.openerService.open(o, {
        ...n,
        editorOptions: {
            revealIfVisible: !0,
            revealIfOpened: !0,
            source: lL.USER,
            ...n?.editorOptions
        },
        openToSide: n?.openToSide,
        fromUserGesture: !0
    });
}, YSi = new Map, xBp = 2e4;

}
