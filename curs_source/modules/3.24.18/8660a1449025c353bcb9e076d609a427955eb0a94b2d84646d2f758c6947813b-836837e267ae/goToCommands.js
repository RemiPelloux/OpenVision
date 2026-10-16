import { At, D, Kv, XE, yx } from "./Iwo.js";
import { Ft, es, ji } from "./actions_2.js";
import { $3 } from "./aria.js";
import { qn } from "./async.js";
import { Ju, og } from "./codeEditorService.js";
import { hs, nr, rs } from "./commands.js";
import { Hi, mt } from "./contextkey.js";
import { Rve, x_ } from "./contextkeys.js";
import { xw } from "./editorBrowser.js";
import { cg, si } from "./editorContextKeys.js";
import { Ud, yP } from "./editorExtensions.js";
import { EHe, R5e } from "./editorState.js";
import { l_e, xwe } from "./embeddedCodeEditorWidget.js";
import { Kwt } from "./goToSymbol.js";
import { It, dn } from "./instantiation.js";
import { $0n, KDa, Kbi, kst, tWr } from "./ipa.js";
import { IT, np } from "./iterator.js";
import { Ma, Ze, bg, rf, ut } from "./keyCodes.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Iy } from "./languages.js";
import { Moi, _z } from "./messageController.js";
import { Uh, ip } from "./metricsService.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { $j, c_e } from "./peekView.js";
import { er, jc } from "./position.js";
import { ab, sne } from "./progress.js";
import { Qs, qt } from "./range.js";
import { U2e, zDa } from "./referencesController.js";
import { h_e, iSt } from "./referencesModel.js";
import { MI1, zbi } from "./symbolNavigation.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { Dj, Ht, Wl, qS, yPy } from "./ze.js";
var Ybi, Xbi, Zbi, nWr, iWr, rWr, sWr, oWr, Qbi, aWr, Ywt, H0n, YDa, XDa, ZDa, QDa, CPp;
export { CPp, H0n, QDa, Qbi, XDa, Xbi, YDa, Ybi, Ywt, ZDa, Zbi, aWr, iWr, nWr, oWr, rWr, sWr };
var __wakaru_JDa_initialized = false;
export function JDa() {
if (__wakaru_JDa_initialized) return;
__wakaru_JDa_initialized = true;
"use strict";
E(), $3(), qn(), Ma(), To(), fn(), R5e(), xw(), Ud(), og(), xwe(), jc(), Qs(), cg(), Iy(), zDa(), iSt(), MI1(), Moi(), c_e(), Bt(), es(), rs(), Hi(), It(), Ks(), ab(), Kwt(), Dg(), IT(), x_(), ip(), ji.appendMenuItem(Ft.EditorContext, {
    submenu: Ft.EditorContextPeek,
    title: D(1176, null),
    group: "navigation",
    order: 100
}), Qbi = class P2b {
    constructor(e, n){
        this.model = e, this.position = n;
    }
    static is(e) {
        return !e || typeof e != "object" ? !1 : !!(e instanceof P2b || er.isIPosition(e.position) && e.model);
    }
}, aWr = class gmt extends yP {
    static all() {
        return gmt._allSymbolNavigationCommands.values();
    }
    static _patchConfig(e) {
        const n = {
            ...e,
            f1: !0
        };
        if (n.menu) for (const i of np.wrap(n.menu))(i.id === Ft.EditorContext || i.id === Ft.EditorContextPeek) && (i.when = mt.and(e.precondition, i.when));
        return n;
    }
    constructor(e, n){
        super(gmt._patchConfig(n)), this.configuration = e, gmt._allSymbolNavigationCommands.set(n.id, this);
    }
    runEditorCommand(e, n, i, r) {
        if (!n.hasModel()) return Promise.resolve(void 0);
        const s = e.get(Wr), o = e.get(Ju), a = e.get(sne), l = e.get(zbi), c = e.get(Nd), u = e.get(dn), d = e.get(Uh), h = n.getModel(), p = n.getPosition(), g = Qbi.is(i) ? i : new Qbi(h, p), f = new EHe(n, 5), _ = performance.now(), b = yx(this._getLocationModel(c, g.model, g.position, f.token), f.token).then(async (y)=>{
            if (!y || f.token.isCancellationRequested) return;
            Dj(y.ariaMessage);
            let S;
            if (y.referenceAt(h.uri, p)) {
                const C = this._getAlternativeCommand(n);
                C !== void 0 && !gmt._activeAlternativeCommands.has(C) && gmt._allSymbolNavigationCommands.has(C) && (S = gmt._allSymbolNavigationCommands.get(C));
            }
            this.configuration.onlyGoToDefIfDefAndSingleResult && (S = null);
            const k = y.references.length;
            if (k === 0) {
                if (!this.configuration.muteMessage) {
                    const C = h.getWordAtPosition(p);
                    _z.get(n)?.showMessage(this._getNoResultFoundMessage(C), p);
                }
            } else if (k === 1 && S) gmt._activeAlternativeCommands.add(this.desc.id), u.invokeFunction((C)=>S.runEditorCommand(C, n, i, r).finally(()=>{
                    gmt._activeAlternativeCommands.delete(this.desc.id);
                }));
            else return this._onResult(o, l, d, n, y, _, r);
        }, (y)=>{
            s.error(y);
        }).finally(()=>{
            f.dispose();
        });
        return a.showWhile(b, 250), b;
    }
    async _onResult(e, n, i, r, s, o, a) {
        const l = this._getGoToPreference(r);
        if (!(r instanceof l_e) && (this.configuration.openInPeek || l === "peek" && s.references.length > 1)) {
            const c = performance.now() - o;
            i.distribution({
                stat: "editor.goToSymbol.duration",
                value: c,
                tags: {
                    type: this.desc.id,
                    outcome: "peek"
                }
            }), this._openInPeek(r, s, a);
        } else {
            const c = s.firstReference(), u = s.references.length > 1 && l === "gotoAndPeek", d = performance.now() - o;
            i.distribution({
                stat: "editor.goToSymbol.duration",
                value: d,
                tags: {
                    type: this.desc.id,
                    outcome: u ? "gotoAndPeek" : "goto"
                }
            });
            const h = await this._openReference(r, e, c, this.configuration.openToSide, !u);
            u && h ? this._openInPeek(h, s, a) : s.dispose(), l === "goto" && n.put(c);
        }
    }
    async _openReference(e, n, i, r, s) {
        let o;
        if (yPy(i) && (o = i.targetSelectionRange), o || (o = i.range), !o) return;
        const a = await n.openCodeEditor({
            resource: i.uri,
            options: {
                selection: qt.collapseToStart(o),
                selectionRevealType: 3,
                selectionSource: "code.jump"
            }
        }, e, r);
        if (a) {
            if (s) {
                const l = a.getModel(), c = a.createDecorationsCollection([
                    {
                        range: o,
                        options: {
                            description: "symbol-navigate-action-highlight",
                            className: "symbolHighlight"
                        }
                    }
                ]);
                setTimeout(()=>{
                    a.getModel() === l && c.clear();
                }, 350);
            }
            return a;
        }
    }
    _openInPeek(e, n, i) {
        const r = U2e.get(e);
        r && e.hasModel() ? r.toggleWidget(i ?? e.getSelection(), XE((s)=>Promise.resolve(n)), this.configuration.openInPeek) : n.dispose();
    }
}, aWr._allSymbolNavigationCommands = new Map, aWr._activeAlternativeCommands = new Set, Ywt = aWr, H0n = class extends Ywt {
    async _getLocationModel(t, e, n, i) {
        return new h_e(await kst(t.definitionProvider, e, n, !1, i), D(1177, null));
    }
    _getNoResultFoundMessage(t) {
        return t && t.word ? D(1178, null, t.word) : D(1179, null);
    }
    _getAlternativeCommand(t) {
        return t.getOption(60).alternativeDefinitionCommand;
    }
    _getGoToPreference(t) {
        return t.getOption(60).multipleDefinitions;
    }
}, Ht((Ybi = class extends H0n {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: Ybi.id,
            title: {
                ...At(1203, "Go to Definition"),
                mnemonicTitle: D(1180, null)
            },
            precondition: si.hasDefinitionProvider,
            keybinding: [
                {
                    when: si.editorTextFocus,
                    primary: Ze.F12,
                    weight: 100
                },
                {
                    when: mt.and(si.editorTextFocus, Rve),
                    primary: ut.CtrlCmd | Ze.F12,
                    weight: 100
                }
            ],
            menu: [
                {
                    id: Ft.EditorContext,
                    group: "navigation",
                    order: 1.1
                },
                {
                    id: Ft.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 2
                }
            ]
        }), hs.registerCommandAlias("editor.action.goToDeclaration", Ybi.id);
    }
}, Ybi.id = "editor.action.revealDefinition", Ybi)), Ht((Xbi = class extends H0n {
    constructor(){
        super({
            openToSide: !0,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: Xbi.id,
            title: At(1204, "Open Definition to the Side"),
            precondition: mt.and(si.hasDefinitionProvider, si.isInEmbeddedEditor.toNegated()),
            keybinding: [
                {
                    when: si.editorTextFocus,
                    primary: Wl(bg, Ze.F12),
                    mac: {
                        primary: Wl(rf, Ze.F12)
                    },
                    weight: 100
                },
                {
                    when: mt.and(si.editorTextFocus, Rve),
                    primary: Wl(bg, ut.CtrlCmd | Ze.F12),
                    mac: {
                        primary: Wl(rf, ut.CtrlCmd | Ze.F12)
                    },
                    weight: 100
                }
            ]
        }), hs.registerCommandAlias("editor.action.openDeclarationToTheSide", Xbi.id);
    }
}, Xbi.id = "editor.action.revealDefinitionAside", Xbi)), Ht((Zbi = class extends H0n {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: Zbi.id,
            title: At(1205, "Peek Definition"),
            precondition: mt.and(si.hasDefinitionProvider, $j.notInPeekEditor, si.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: si.editorTextFocus,
                primary: ut.Alt | Ze.F12,
                linux: {
                    primary: ut.CtrlCmd | ut.Shift | Ze.F10
                },
                weight: 100
            },
            menu: {
                id: Ft.EditorContextPeek,
                group: "peek",
                order: 2
            }
        }), hs.registerCommandAlias("editor.action.previewDeclaration", Zbi.id);
    }
}, Zbi.id = "editor.action.peekDefinition", Zbi)), YDa = class extends Ywt {
    async _getLocationModel(t, e, n, i) {
        return new h_e(await KDa(t.declarationProvider, e, n, !1, i), D(1181, null));
    }
    _getNoResultFoundMessage(t) {
        return t && t.word ? D(1182, null, t.word) : D(1183, null);
    }
    _getAlternativeCommand(t) {
        return t.getOption(60).alternativeDeclarationCommand;
    }
    _getGoToPreference(t) {
        return t.getOption(60).multipleDeclarations;
    }
}, Ht((nWr = class extends YDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: nWr.id,
            title: {
                ...At(1206, "Go to Declaration"),
                mnemonicTitle: D(1184, null)
            },
            precondition: mt.and(si.hasDeclarationProvider, si.isInEmbeddedEditor.toNegated()),
            menu: [
                {
                    id: Ft.EditorContext,
                    group: "navigation",
                    order: 1.3
                },
                {
                    id: Ft.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 3
                }
            ]
        });
    }
    _getNoResultFoundMessage(t) {
        return t && t.word ? D(1185, null, t.word) : D(1186, null);
    }
}, nWr.id = "editor.action.revealDeclaration", nWr)), Ht(class extends YDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: "editor.action.peekDeclaration",
            title: At(1207, "Peek Declaration"),
            precondition: mt.and(si.hasDeclarationProvider, $j.notInPeekEditor, si.isInEmbeddedEditor.toNegated()),
            menu: {
                id: Ft.EditorContextPeek,
                group: "peek",
                order: 3
            }
        });
    }
}), XDa = class extends Ywt {
    async _getLocationModel(t, e, n, i) {
        return new h_e(await tWr(t.typeDefinitionProvider, e, n, !1, i), D(1187, null));
    }
    _getNoResultFoundMessage(t) {
        return t && t.word ? D(1188, null, t.word) : D(1189, null);
    }
    _getAlternativeCommand(t) {
        return t.getOption(60).alternativeTypeDefinitionCommand;
    }
    _getGoToPreference(t) {
        return t.getOption(60).multipleTypeDefinitions;
    }
}, Ht((iWr = class extends XDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: iWr.ID,
            title: {
                ...At(1208, "Go to Type Definition"),
                mnemonicTitle: D(1190, null)
            },
            precondition: si.hasTypeDefinitionProvider,
            keybinding: {
                when: si.editorTextFocus,
                primary: 0,
                weight: 100
            },
            menu: [
                {
                    id: Ft.EditorContext,
                    group: "navigation",
                    order: 1.4
                },
                {
                    id: Ft.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 3
                }
            ]
        });
    }
}, iWr.ID = "editor.action.goToTypeDefinition", iWr)), Ht((rWr = class extends XDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: rWr.ID,
            title: At(1209, "Peek Type Definition"),
            precondition: mt.and(si.hasTypeDefinitionProvider, $j.notInPeekEditor, si.isInEmbeddedEditor.toNegated()),
            menu: {
                id: Ft.EditorContextPeek,
                group: "peek",
                order: 4
            }
        });
    }
}, rWr.ID = "editor.action.peekTypeDefinition", rWr)), ZDa = class extends Ywt {
    async _getLocationModel(t, e, n, i) {
        return new h_e(await Kbi(t.implementationProvider, e, n, !1, i), D(1191, null));
    }
    _getNoResultFoundMessage(t) {
        return t && t.word ? D(1192, null, t.word) : D(1193, null);
    }
    _getAlternativeCommand(t) {
        return t.getOption(60).alternativeImplementationCommand;
    }
    _getGoToPreference(t) {
        return t.getOption(60).multipleImplementations;
    }
}, Ht((sWr = class extends ZDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: sWr.ID,
            title: {
                ...At(1210, "Go to Implementations"),
                mnemonicTitle: D(1194, null)
            },
            precondition: si.hasImplementationProvider,
            keybinding: {
                when: si.editorTextFocus,
                primary: ut.CtrlCmd | Ze.F12,
                weight: 100
            },
            menu: [
                {
                    id: Ft.EditorContext,
                    group: "navigation",
                    order: 1.45
                },
                {
                    id: Ft.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 4
                }
            ]
        });
    }
}, sWr.ID = "editor.action.goToImplementation", sWr)), Ht((oWr = class extends ZDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: oWr.ID,
            title: At(1211, "Peek Implementations"),
            precondition: mt.and(si.hasImplementationProvider, $j.notInPeekEditor, si.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: si.editorTextFocus,
                primary: ut.CtrlCmd | ut.Shift | Ze.F12,
                weight: 100
            },
            menu: {
                id: Ft.EditorContextPeek,
                group: "peek",
                order: 5
            }
        });
    }
}, oWr.ID = "editor.action.peekImplementation", oWr)), QDa = class extends Ywt {
    _getNoResultFoundMessage(t) {
        return t ? D(1195, null, t.word) : D(1196, null);
    }
    _getAlternativeCommand(t) {
        return t.getOption(60).alternativeReferenceCommand;
    }
    _getGoToPreference(t) {
        return t.getOption(60).multipleReferences;
    }
}, Ht(class extends QDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: "editor.action.goToReferences",
            title: {
                ...At(1212, "Go to References"),
                mnemonicTitle: D(1197, null)
            },
            precondition: mt.and(si.hasReferenceProvider, $j.notInPeekEditor, si.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: si.editorTextFocus,
                primary: ut.Shift | Ze.F12,
                weight: 100
            },
            menu: [
                {
                    id: Ft.EditorContext,
                    group: "navigation",
                    order: 1.45
                },
                {
                    id: Ft.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 5
                }
            ]
        });
    }
    async _getLocationModel(e, n, i, r) {
        return new h_e(await $0n(e.referenceProvider, n, i, !0, !1, r), D(1198, null));
    }
}), Ht(class extends QDa {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: "editor.action.referenceSearch.trigger",
            title: At(1213, "Peek References"),
            precondition: mt.and(si.hasReferenceProvider, $j.notInPeekEditor, si.isInEmbeddedEditor.toNegated()),
            menu: {
                id: Ft.EditorContextPeek,
                group: "peek",
                order: 6
            }
        });
    }
    async _getLocationModel(e, n, i, r) {
        return new h_e(await $0n(e.referenceProvider, n, i, !1, !1, r), D(1199, null));
    }
}), CPp = class extends Ywt {
    constructor(t, e, n){
        super(t, {
            id: "editor.action.goToLocation",
            title: At(1214, "Go to Any Symbol"),
            precondition: mt.and($j.notInPeekEditor, si.isInEmbeddedEditor.toNegated())
        }), this._references = e, this._gotoMultipleBehaviour = n;
    }
    async _getLocationModel(t, e, n, i) {
        return new h_e(this._references, D(1200, null));
    }
    _getNoResultFoundMessage(t) {
        return t && D(1201, null, t.word) || "";
    }
    _getGoToPreference(t) {
        return this._gotoMultipleBehaviour ?? t.getOption(60).multipleReferences;
    }
    _getAlternativeCommand() {}
}, hs.registerCommand({
    id: "editor.action.goToLocations",
    metadata: {
        description: "Go to locations from a position in a file",
        args: [
            {
                name: "uri",
                description: "The text document in which to start",
                constraint: rt
            },
            {
                name: "position",
                description: "The position at which to start",
                constraint: er.isIPosition
            },
            {
                name: "locations",
                description: "An array of locations.",
                constraint: Array
            },
            {
                name: "multiple",
                description: "Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`"
            },
            {
                name: "noResultsMessage",
                description: "Human readable message that shows when locations is empty."
            }
        ]
    },
    handler: async (t, e, n, i, r, s, o)=>{
        Kv(rt.isUri(e)), Kv(er.isIPosition(n)), Kv(Array.isArray(i)), Kv(typeof r > "u" || typeof r == "string"), Kv(typeof o > "u" || typeof o == "boolean");
        const a = t.get(Ju), l = await a.openCodeEditor({
            resource: e
        }, a.getFocusedCodeEditor());
        if (qS(l)) return l.setPosition(n), l.revealPositionInCenterIfOutsideViewport(n, 0), l.invokeWithinContext((c)=>{
            const u = new class extends CPp {
                _getNoResultFoundMessage(d) {
                    return s || super._getNoResultFoundMessage(d);
                }
            }({
                muteMessage: !s,
                openInPeek: !!o,
                openToSide: !1
            }, i, r);
            c.get(dn).invokeFunction(u.run.bind(u), l);
        });
    }
}), hs.registerCommand({
    id: "editor.action.peekLocations",
    metadata: {
        description: "Peek locations from a position in a file",
        args: [
            {
                name: "uri",
                description: "The text document in which to start",
                constraint: rt
            },
            {
                name: "position",
                description: "The position at which to start",
                constraint: er.isIPosition
            },
            {
                name: "locations",
                description: "An array of locations.",
                constraint: Array
            },
            {
                name: "multiple",
                description: "Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`"
            }
        ]
    },
    handler: async (t, e, n, i, r)=>{
        t.get(nr).executeCommand("editor.action.goToLocations", e, n, i, r, void 0, !0);
    }
}), hs.registerCommand({
    id: "editor.action.findReferences",
    handler: (t, e, n)=>{
        Kv(rt.isUri(e)), Kv(er.isIPosition(n));
        const i = t.get(Nd), r = t.get(Ju);
        return r.openCodeEditor({
            resource: e
        }, r.getFocusedCodeEditor()).then((s)=>{
            if (!qS(s) || !s.hasModel()) return;
            const o = U2e.get(s);
            if (!o) return;
            const a = XE((c)=>$0n(i.referenceProvider, s.getModel(), er.lift(n), !1, !1, c).then((u)=>new h_e(u, D(1202, null)))), l = new qt(n.lineNumber, n.column, n.lineNumber, n.column);
            return Promise.resolve(o.toggleWidget(l, a, !1));
        });
    }
}), hs.registerCommandAlias("editor.action.showReferences", "editor.action.peekLocations");

}
