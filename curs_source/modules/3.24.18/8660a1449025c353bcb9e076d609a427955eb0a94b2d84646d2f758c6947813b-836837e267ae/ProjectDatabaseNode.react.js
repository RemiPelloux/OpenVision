import { CBw, EBw, IBw, SBw, cYf, dYf, hYf, kBw, wBw, xBw } from "./BA.js";
import { Mph, PSt, fE, gli, nn, o6 } from "./LYd.js";
import { Njl } from "./ProjectDatabaseDocument_2.js";
import { uYf } from "./ProjectDatabaseView.react.js";
import { Mt } from "./index_197.js";
import { Unt } from "./index_41.js";
import { CKf, EKf, OCs, wKf } from "./migration-bridge_2.js";
import { Lit } from "./nca.js";
import { $Cs } from "./projectDatabaseProjection.js";
import { sYf } from "./projectDatabaseViewSource.js";
import { E } from "./tslib.es6.js";
import { jsx as FZt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as Ljl } from "./react-runtime/react/esm-index-production.js";
import { jsxs as NNn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as fBw } from "./react-runtime/react/esm-index-production.js";
var pYf, mYf, gYf, fYf, vYf;
export { fYf, gYf, mYf, pYf, vYf };
var __wakaru__Yf_initialized = false;
export function _Yf() {
if (__wakaru__Yf_initialized) return;
__wakaru__Yf_initialized = true;
"use strict";
E(), Mt(), OCs(), $Cs(), Njl(), sYf(), uYf(), pYf = 5, mYf = 2, gYf = {
    node: {
        k1xSpc: "glass-1lliihq",
        $$css: !0
    }
}, fYf = fBw(function({ node: e, editor: n, getPos: i, extension: r }) {
    const s = e.textContent, { board: o, diagnostics: a, loading: l } = EBw({
        loader: r.options.loadProjectDatabase,
        source: s
    }), c = Ljl(()=>{
        if (!(o === void 0 || o.config.defaultViewMode === "list" || o.config.defaultViewMode === "grid")) return Mph(CBw(o));
    }, [
        o
    ]), u = EKf({
        rootClass: "ui-project-database-node",
        stylexStyles: gYf.node,
        style: c === void 0 ? void 0 : {
            "--project-database-board-min-width": `${c}px`
        }
    }), d = r.options.onLinkClick, h = (g)=>{
        o !== void 0 && dYf({
            board: o,
            editor: n,
            getPos: i,
            node: e,
            update: {
                kind: "mode",
                mode: wBw(g)
            }
        });
    }, p = (g)=>{
        o !== void 0 && dYf({
            board: o,
            editor: n,
            getPos: i,
            node: e,
            update: {
                kind: "state",
                state: g
            }
        });
    };
    return NNn(Unt, {
        className: u.className,
        "data-project-database-node": "true",
        style: u.style,
        children: [
            NNn("div", {
                contentEditable: !1,
                "data-rte-prose-boundary": "",
                className: "glass-1lliihq",
                suppressContentEditableWarning: !0,
                children: [
                    l ? FZt(nn, {
                        as: "div",
                        color: "secondary",
                        role: "status",
                        size: "sm",
                        children: "Loading project tasks\u2026"
                    }) : null,
                    o !== void 0 ? NNn(Lit, {
                        renderLinkContent: r.options.renderLinkContent,
                        children: [
                            a.length > 0 ? FZt(kBw, {
                                diagnostics: a
                            }) : null,
                            FZt(cYf, {
                                board: o,
                                onLinkClick: d,
                                onViewModeChange: h,
                                onViewStateChange: p
                            })
                        ]
                    }) : null,
                    o === void 0 && !l ? FZt(SBw, {
                        diagnostics: a
                    }) : null
                ]
            }),
            FZt(gli, {
                className: "glass-1s85apg"
            })
        ]
    });
}), vYf = o6.create({
    name: "projectDatabase",
    group: "block",
    content: "text*",
    inline: !1,
    code: !0,
    marks: "",
    atom: !1,
    defining: !0,
    addOptions () {
        return {};
    },
    renderMarkdown (t) {
        return xBw(IBw(t));
    },
    parseHTML () {
        return [
            {
                tag: 'pre[data-language="cursor-project"]',
                preserveWhitespace: "full"
            },
            {
                tag: 'div[data-type="projectDatabase"]',
                preserveWhitespace: "full"
            },
            {
                tag: "pre",
                preserveWhitespace: "full",
                priority: 100,
                getAttrs: (t)=>t instanceof HTMLElement && (t.querySelector("code")?.classList.contains("language-cursor-project") || t.classList.contains("language-cursor-project") || t.getAttribute("data-language") === "cursor-project") ? null : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "pre",
            fE(t, {
                "data-language": "cursor-project",
                "data-type": "projectDatabase"
            }),
            [
                "code",
                {
                    class: "language-cursor-project"
                },
                0
            ]
        ];
    },
    addNodeView () {
        return PSt(fYf, {
            ignoreMutation: ()=>!0
        });
    },
    onCreate () {
        const t = this.editor.state.tr;
        hYf(this.editor.state, t) && this.editor.view.dispatch(t);
    },
    addProseMirrorPlugins () {
        return [
            new wKf({
                key: new CKf("projectDatabaseTransform"),
                appendTransaction (t, e, n) {
                    if (!t.some((r)=>r.docChanged)) return null;
                    const i = n.tr;
                    return hYf(n, i) ? i : null;
                }
            })
        ];
    }
});

}
