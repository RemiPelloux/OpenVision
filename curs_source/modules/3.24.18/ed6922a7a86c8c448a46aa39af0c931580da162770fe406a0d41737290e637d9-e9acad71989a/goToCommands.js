import { J8t, N9i, O$s, e4e, eRn } from "./De_3.js";
import { Ae, Im, S, Tw, Wb } from "./HVr.js";
import { Bn, Re, ei } from "./actions_2.js";
import { hS } from "./aria.js";
import { bn } from "./async.js";
import { Ja, md } from "./codeEditorService.js";
import { $n, ki, vi } from "./commands.js";
import { dn, he } from "./contextkey.js";
import { QV, of } from "./contextkeys.js";
import { Nv } from "./editorBrowser.js";
import { gd, gn } from "./editorContextKeys.js";
import { SI, yc } from "./editorExtensions.js";
import { dRe, efe } from "./editorState.js";
import { Y7, r6 } from "./embeddedCodeEditorWidget.js";
import { iyt } from "./goToSymbol.js";
import { Ze, _t } from "./instantiation.js";
import { Eg, _a } from "./iterator.js";
import { Dd, Ie, Pr, bh, fe } from "./keyCodes.js";
import { Jc, kh } from "./languageFeatures.js";
import { Wp } from "./languages.js";
import { d2, mKe } from "./messageController.js";
import { Cp, vp } from "./metricsService.js";
import { rt } from "./nls.js";
import { di, ji } from "./notification.js";
import { NO, lU } from "./peekView.js";
import { Yn, ya } from "./position.js";
import { gp, l2 } from "./progress.js";
import { Fp, Ys, ffg, jy, qe } from "./qIc.js";
import { dt, qi } from "./range.js";
import { D9i, Jue } from "./referencesController.js";
import { XK, xKe } from "./referencesModel.js";
import { QAn, dcv } from "./symbolNavigation.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
var tRn, nRn, iRn, O9i, F9i, B9i, U9i, $9i, rRn, H9i, t4e, e7t, B$s, U$s, $$s, H$s, Mku;
export { $$s, $9i, B$s, B9i, F9i, H$s, H9i, Mku, O9i, U$s, U9i, e7t, iRn, nRn, rRn, t4e, tRn };
var __wakaru_W9i_initialized = false;
export function W9i() {
if (__wakaru_W9i_initialized) return;
__wakaru_W9i_initialized = true;
"use strict";
x(), hS(), bn(), Pr(), gr(), Qt(), efe(), Nv(), yc(), md(), Y7(), ya(), qi(), gd(), Wp(), D9i(), xKe(), dcv(), mKe(), lU(), rt(), ei(), vi(), dn(), Ze(), ji(), gp(), iyt(), kh(), Eg(), of(), Cp(), Bn.appendMenuItem(Re.EditorContext, {
    submenu: Re.EditorContextPeek,
    title: S(1176, null),
    group: "navigation",
    order: 100
}), rRn = class Ywm {
    constructor(t, n){
        this.model = t, this.position = n;
    }
    static is(t) {
        return !t || typeof t != "object" ? !1 : !!(t instanceof Ywm || Yn.isIPosition(t.position) && t.model);
    }
}, H9i = class YWe extends SI {
    static all() {
        return YWe._allSymbolNavigationCommands.values();
    }
    static _patchConfig(t) {
        const n = {
            ...t,
            f1: !0
        };
        if (n.menu) for (const i of _a.wrap(n.menu))(i.id === Re.EditorContext || i.id === Re.EditorContextPeek) && (i.when = he.and(t.precondition, i.when));
        return n;
    }
    constructor(t, n){
        super(YWe._patchConfig(n)), this.configuration = t, YWe._allSymbolNavigationCommands.set(n.id, this);
    }
    runEditorCommand(t, n, i, r) {
        if (!n.hasModel()) return Promise.resolve(void 0);
        const s = t.get(di), o = t.get(Ja), a = t.get(l2), c = t.get(QAn), l = t.get(Jc), u = t.get(_t), h = t.get(vp), p = n.getModel(), g = n.getPosition(), f = rRn.is(i) ? i : new rRn(p, g), v = new dRe(n, 5), b = performance.now(), y = Tw(this._getLocationModel(l, f.model, f.position, v.token), v.token).then(async (T)=>{
            if (!T || v.token.isCancellationRequested) return;
            jy(T.ariaMessage);
            let E;
            if (T.referenceAt(p.uri, g)) {
                const R = this._getAlternativeCommand(n);
                R !== void 0 && !YWe._activeAlternativeCommands.has(R) && YWe._allSymbolNavigationCommands.has(R) && (E = YWe._allSymbolNavigationCommands.get(R));
            }
            this.configuration.onlyGoToDefIfDefAndSingleResult && (E = null);
            const A = T.references.length;
            if (A === 0) {
                if (!this.configuration.muteMessage) {
                    const R = p.getWordAtPosition(g);
                    d2.get(n)?.showMessage(this._getNoResultFoundMessage(R), g);
                }
            } else if (A === 1 && E) YWe._activeAlternativeCommands.add(this.desc.id), u.invokeFunction((R)=>E.runEditorCommand(R, n, i, r).finally(()=>{
                    YWe._activeAlternativeCommands.delete(this.desc.id);
                }));
            else return this._onResult(o, c, h, n, T, b, r);
        }, (T)=>{
            s.error(T);
        }).finally(()=>{
            v.dispose();
        });
        return a.showWhile(y, 250), y;
    }
    async _onResult(t, n, i, r, s, o, a) {
        const c = this._getGoToPreference(r);
        if (!(r instanceof r6) && (this.configuration.openInPeek || c === "peek" && s.references.length > 1)) {
            const l = performance.now() - o;
            i.distribution({
                stat: "editor.goToSymbol.duration",
                value: l,
                tags: {
                    type: this.desc.id,
                    outcome: "peek"
                }
            }), this._openInPeek(r, s, a);
        } else {
            const l = s.firstReference(), u = s.references.length > 1 && c === "gotoAndPeek", h = performance.now() - o;
            i.distribution({
                stat: "editor.goToSymbol.duration",
                value: h,
                tags: {
                    type: this.desc.id,
                    outcome: u ? "gotoAndPeek" : "goto"
                }
            });
            const p = await this._openReference(r, t, l, this.configuration.openToSide, !u);
            u && p ? this._openInPeek(p, s, a) : s.dispose(), c === "goto" && n.put(l);
        }
    }
    async _openReference(t, n, i, r, s) {
        let o;
        if (ffg(i) && (o = i.targetSelectionRange), o || (o = i.range), !o) return;
        const a = await n.openCodeEditor({
            resource: i.uri,
            options: {
                selection: dt.collapseToStart(o),
                selectionRevealType: 3,
                selectionSource: "code.jump"
            }
        }, t, r);
        if (a) {
            if (s) {
                const c = a.getModel(), l = a.createDecorationsCollection([
                    {
                        range: o,
                        options: {
                            description: "symbol-navigate-action-highlight",
                            className: "symbolHighlight"
                        }
                    }
                ]);
                setTimeout(()=>{
                    a.getModel() === c && l.clear();
                }, 350);
            }
            return a;
        }
    }
    _openInPeek(t, n, i) {
        const r = Jue.get(t);
        r && t.hasModel() ? r.toggleWidget(i ?? t.getSelection(), Wb((s)=>Promise.resolve(n)), this.configuration.openInPeek) : n.dispose();
    }
}, H9i._allSymbolNavigationCommands = new Map, H9i._activeAlternativeCommands = new Set, t4e = H9i, e7t = class extends t4e {
    async _getLocationModel(e, t, n, i) {
        return new XK(await e4e(e.definitionProvider, t, n, !1, i), S(1177, null));
    }
    _getNoResultFoundMessage(e) {
        return e && e.word ? S(1178, null, e.word) : S(1179, null);
    }
    _getAlternativeCommand(e) {
        return e.getOption(60).alternativeDefinitionCommand;
    }
    _getGoToPreference(e) {
        return e.getOption(60).multipleDefinitions;
    }
}, qe((tRn = class extends e7t {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: tRn.id,
            title: {
                ...Ae(1203, "Go to Definition"),
                mnemonicTitle: S(1180, null)
            },
            precondition: gn.hasDefinitionProvider,
            keybinding: [
                {
                    when: gn.editorTextFocus,
                    primary: fe.F12,
                    weight: 100
                },
                {
                    when: he.and(gn.editorTextFocus, QV),
                    primary: Ie.CtrlCmd | fe.F12,
                    weight: 100
                }
            ],
            menu: [
                {
                    id: Re.EditorContext,
                    group: "navigation",
                    order: 1.1
                },
                {
                    id: Re.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 2
                }
            ]
        }), ki.registerCommandAlias("editor.action.goToDeclaration", tRn.id);
    }
}, tRn.id = "editor.action.revealDefinition", tRn)), qe((nRn = class extends e7t {
    constructor(){
        super({
            openToSide: !0,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: nRn.id,
            title: Ae(1204, "Open Definition to the Side"),
            precondition: he.and(gn.hasDefinitionProvider, gn.isInEmbeddedEditor.toNegated()),
            keybinding: [
                {
                    when: gn.editorTextFocus,
                    primary: Ys(Dd, fe.F12),
                    mac: {
                        primary: Ys(bh, fe.F12)
                    },
                    weight: 100
                },
                {
                    when: he.and(gn.editorTextFocus, QV),
                    primary: Ys(Dd, Ie.CtrlCmd | fe.F12),
                    mac: {
                        primary: Ys(bh, Ie.CtrlCmd | fe.F12)
                    },
                    weight: 100
                }
            ]
        }), ki.registerCommandAlias("editor.action.openDeclarationToTheSide", nRn.id);
    }
}, nRn.id = "editor.action.revealDefinitionAside", nRn)), qe((iRn = class extends e7t {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: iRn.id,
            title: Ae(1205, "Peek Definition"),
            precondition: he.and(gn.hasDefinitionProvider, NO.notInPeekEditor, gn.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: gn.editorTextFocus,
                primary: Ie.Alt | fe.F12,
                linux: {
                    primary: Ie.CtrlCmd | Ie.Shift | fe.F10
                },
                weight: 100
            },
            menu: {
                id: Re.EditorContextPeek,
                group: "peek",
                order: 2
            }
        }), ki.registerCommandAlias("editor.action.previewDeclaration", iRn.id);
    }
}, iRn.id = "editor.action.peekDefinition", iRn)), B$s = class extends t4e {
    async _getLocationModel(e, t, n, i) {
        return new XK(await O$s(e.declarationProvider, t, n, !1, i), S(1181, null));
    }
    _getNoResultFoundMessage(e) {
        return e && e.word ? S(1182, null, e.word) : S(1183, null);
    }
    _getAlternativeCommand(e) {
        return e.getOption(60).alternativeDeclarationCommand;
    }
    _getGoToPreference(e) {
        return e.getOption(60).multipleDeclarations;
    }
}, qe((O9i = class extends B$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: O9i.id,
            title: {
                ...Ae(1206, "Go to Declaration"),
                mnemonicTitle: S(1184, null)
            },
            precondition: he.and(gn.hasDeclarationProvider, gn.isInEmbeddedEditor.toNegated()),
            menu: [
                {
                    id: Re.EditorContext,
                    group: "navigation",
                    order: 1.3
                },
                {
                    id: Re.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 3
                }
            ]
        });
    }
    _getNoResultFoundMessage(e) {
        return e && e.word ? S(1185, null, e.word) : S(1186, null);
    }
}, O9i.id = "editor.action.revealDeclaration", O9i)), qe(class extends B$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: "editor.action.peekDeclaration",
            title: Ae(1207, "Peek Declaration"),
            precondition: he.and(gn.hasDeclarationProvider, NO.notInPeekEditor, gn.isInEmbeddedEditor.toNegated()),
            menu: {
                id: Re.EditorContextPeek,
                group: "peek",
                order: 3
            }
        });
    }
}), U$s = class extends t4e {
    async _getLocationModel(e, t, n, i) {
        return new XK(await N9i(e.typeDefinitionProvider, t, n, !1, i), S(1187, null));
    }
    _getNoResultFoundMessage(e) {
        return e && e.word ? S(1188, null, e.word) : S(1189, null);
    }
    _getAlternativeCommand(e) {
        return e.getOption(60).alternativeTypeDefinitionCommand;
    }
    _getGoToPreference(e) {
        return e.getOption(60).multipleTypeDefinitions;
    }
}, qe((F9i = class extends U$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: F9i.ID,
            title: {
                ...Ae(1208, "Go to Type Definition"),
                mnemonicTitle: S(1190, null)
            },
            precondition: gn.hasTypeDefinitionProvider,
            keybinding: {
                when: gn.editorTextFocus,
                primary: 0,
                weight: 100
            },
            menu: [
                {
                    id: Re.EditorContext,
                    group: "navigation",
                    order: 1.4
                },
                {
                    id: Re.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 3
                }
            ]
        });
    }
}, F9i.ID = "editor.action.goToTypeDefinition", F9i)), qe((B9i = class extends U$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: B9i.ID,
            title: Ae(1209, "Peek Type Definition"),
            precondition: he.and(gn.hasTypeDefinitionProvider, NO.notInPeekEditor, gn.isInEmbeddedEditor.toNegated()),
            menu: {
                id: Re.EditorContextPeek,
                group: "peek",
                order: 4
            }
        });
    }
}, B9i.ID = "editor.action.peekTypeDefinition", B9i)), $$s = class extends t4e {
    async _getLocationModel(e, t, n, i) {
        return new XK(await eRn(e.implementationProvider, t, n, !1, i), S(1191, null));
    }
    _getNoResultFoundMessage(e) {
        return e && e.word ? S(1192, null, e.word) : S(1193, null);
    }
    _getAlternativeCommand(e) {
        return e.getOption(60).alternativeImplementationCommand;
    }
    _getGoToPreference(e) {
        return e.getOption(60).multipleImplementations;
    }
}, qe((U9i = class extends $$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: U9i.ID,
            title: {
                ...Ae(1210, "Go to Implementations"),
                mnemonicTitle: S(1194, null)
            },
            precondition: gn.hasImplementationProvider,
            keybinding: {
                when: gn.editorTextFocus,
                primary: Ie.CtrlCmd | fe.F12,
                weight: 100
            },
            menu: [
                {
                    id: Re.EditorContext,
                    group: "navigation",
                    order: 1.45
                },
                {
                    id: Re.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 4
                }
            ]
        });
    }
}, U9i.ID = "editor.action.goToImplementation", U9i)), qe(($9i = class extends $$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: $9i.ID,
            title: Ae(1211, "Peek Implementations"),
            precondition: he.and(gn.hasImplementationProvider, NO.notInPeekEditor, gn.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: gn.editorTextFocus,
                primary: Ie.CtrlCmd | Ie.Shift | fe.F12,
                weight: 100
            },
            menu: {
                id: Re.EditorContextPeek,
                group: "peek",
                order: 5
            }
        });
    }
}, $9i.ID = "editor.action.peekImplementation", $9i)), H$s = class extends t4e {
    _getNoResultFoundMessage(e) {
        return e ? S(1195, null, e.word) : S(1196, null);
    }
    _getAlternativeCommand(e) {
        return e.getOption(60).alternativeReferenceCommand;
    }
    _getGoToPreference(e) {
        return e.getOption(60).multipleReferences;
    }
}, qe(class extends H$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !1,
            muteMessage: !1
        }, {
            id: "editor.action.goToReferences",
            title: {
                ...Ae(1212, "Go to References"),
                mnemonicTitle: S(1197, null)
            },
            precondition: he.and(gn.hasReferenceProvider, NO.notInPeekEditor, gn.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: gn.editorTextFocus,
                primary: Ie.Shift | fe.F12,
                weight: 100
            },
            menu: [
                {
                    id: Re.EditorContext,
                    group: "navigation",
                    order: 1.45
                },
                {
                    id: Re.MenubarGoMenu,
                    precondition: null,
                    group: "4_symbol_nav",
                    order: 5
                }
            ]
        });
    }
    async _getLocationModel(t, n, i, r) {
        return new XK(await J8t(t.referenceProvider, n, i, !0, !1, r), S(1198, null));
    }
}), qe(class extends H$s {
    constructor(){
        super({
            openToSide: !1,
            openInPeek: !0,
            muteMessage: !1
        }, {
            id: "editor.action.referenceSearch.trigger",
            title: Ae(1213, "Peek References"),
            precondition: he.and(gn.hasReferenceProvider, NO.notInPeekEditor, gn.isInEmbeddedEditor.toNegated()),
            menu: {
                id: Re.EditorContextPeek,
                group: "peek",
                order: 6
            }
        });
    }
    async _getLocationModel(t, n, i, r) {
        return new XK(await J8t(t.referenceProvider, n, i, !1, !1, r), S(1199, null));
    }
}), Mku = class extends t4e {
    constructor(e, t, n){
        super(e, {
            id: "editor.action.goToLocation",
            title: Ae(1214, "Go to Any Symbol"),
            precondition: he.and(NO.notInPeekEditor, gn.isInEmbeddedEditor.toNegated())
        }), this._references = t, this._gotoMultipleBehaviour = n;
    }
    async _getLocationModel(e, t, n, i) {
        return new XK(this._references, S(1200, null));
    }
    _getNoResultFoundMessage(e) {
        return e && S(1201, null, e.word) || "";
    }
    _getGoToPreference(e) {
        return this._gotoMultipleBehaviour ?? e.getOption(60).multipleReferences;
    }
    _getAlternativeCommand() {}
}, ki.registerCommand({
    id: "editor.action.goToLocations",
    metadata: {
        description: "Go to locations from a position in a file",
        args: [
            {
                name: "uri",
                description: "The text document in which to start",
                constraint: Ee
            },
            {
                name: "position",
                description: "The position at which to start",
                constraint: Yn.isIPosition
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
    handler: async (e, t, n, i, r, s, o)=>{
        Im(Ee.isUri(t)), Im(Yn.isIPosition(n)), Im(Array.isArray(i)), Im(typeof r > "u" || typeof r == "string"), Im(typeof o > "u" || typeof o == "boolean");
        const a = e.get(Ja), c = await a.openCodeEditor({
            resource: t
        }, a.getFocusedCodeEditor());
        if (Fp(c)) return c.setPosition(n), c.revealPositionInCenterIfOutsideViewport(n, 0), c.invokeWithinContext((l)=>{
            const u = new class extends Mku {
                _getNoResultFoundMessage(h) {
                    return s || super._getNoResultFoundMessage(h);
                }
            }({
                muteMessage: !s,
                openInPeek: !!o,
                openToSide: !1
            }, i, r);
            l.get(_t).invokeFunction(u.run.bind(u), c);
        });
    }
}), ki.registerCommand({
    id: "editor.action.peekLocations",
    metadata: {
        description: "Peek locations from a position in a file",
        args: [
            {
                name: "uri",
                description: "The text document in which to start",
                constraint: Ee
            },
            {
                name: "position",
                description: "The position at which to start",
                constraint: Yn.isIPosition
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
    handler: async (e, t, n, i, r)=>{
        e.get($n).executeCommand("editor.action.goToLocations", t, n, i, r, void 0, !0);
    }
}), ki.registerCommand({
    id: "editor.action.findReferences",
    handler: (e, t, n)=>{
        Im(Ee.isUri(t)), Im(Yn.isIPosition(n));
        const i = e.get(Jc), r = e.get(Ja);
        return r.openCodeEditor({
            resource: t
        }, r.getFocusedCodeEditor()).then((s)=>{
            if (!Fp(s) || !s.hasModel()) return;
            const o = Jue.get(s);
            if (!o) return;
            const a = Wb((l)=>J8t(i.referenceProvider, s.getModel(), Yn.lift(n), !1, !1, l).then((u)=>new XK(u, S(1202, null)))), c = new dt(n.lineNumber, n.column, n.lineNumber, n.column);
            return Promise.resolve(o.toggleWidget(c, a, !1));
        });
    }
}), ki.registerCommandAlias("editor.action.showReferences", "editor.action.peekLocations");

}
