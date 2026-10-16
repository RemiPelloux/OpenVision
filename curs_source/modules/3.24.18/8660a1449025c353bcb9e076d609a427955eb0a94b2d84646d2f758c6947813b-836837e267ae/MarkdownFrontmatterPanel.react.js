import { ACs, QVf, d9w, f9w, g9w, v9w } from "./BA.js";
import { r9w } from "./MarkdownFrontmatterPanel.css";
import { i9w } from "./SkillIconColorHeader.react.js";
import { lee } from "./Ycg.js";
import { nKf } from "./frontmatterPropertyTypes.js";
import { Mt } from "./index_197.js";
import { ho } from "./nca.js";
import { AZt } from "./sortable.esm.js";
import { xs } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { Y4w } from "./useFrontmatterActions.react.js";
import { jsxs as FG } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as PZt } from "./react-runtime/react/esm-index-production.js";
import { useCallback as e5 } from "./react-runtime/react/esm-index-production.js";
import { jsx as pv } from "./react-runtime/react/esm-jsx-runtime-production.js";
import s9w from "./react-runtime/react/esm-index-production.js";
var _Kf, bKf, yKf;
export { _Kf, bKf, yKf };
var __wakaru_S9w_initialized = false;
export function S9w() {
if (__wakaru_S9w_initialized) return;
__wakaru_S9w_initialized = true;
"use strict";
E(), Mt(), lee(), AZt(), nKf(), Y4w(), i9w(), r9w(), _Kf = s9w.memo(function({ entryKey: e, value: n, kind: i, dropIndicator: r, dispatch: s, existingKeys: o, onChangeType: a, onCut: l, onCopy: c, onPaste: u, isDuplicateKey: d, setTextProperty: h, endTextEdit: p, keyDescription: g }) {
    const { attributes: f, listeners: _, setNodeRef: b, isDragging: y } = ACs({
        id: e,
        disabled: d
    }), { role: S, ...k } = f, C = "Duplicate key in markdown source. Edit the raw frontmatter to resolve this before using preview controls.", T = PZt(()=>QVf(n, i), [
        i,
        n
    ]), I = e5((N)=>{
        s({
            type: "rename",
            currentKey: e,
            nextKey: N
        });
    }, [
        s,
        e
    ]), A = e5((N)=>{
        s({
            type: "set",
            key: e,
            value: N
        });
    }, [
        s,
        e
    ]), P = e5((N)=>{
        h(e, N);
    }, [
        e,
        h
    ]), M = e5(()=>{
        p(e);
    }, [
        p,
        e
    ]), O = FG("div", {
        className: "fm-row",
        "data-dragging": y || void 0,
        "data-drop-indicator": r || void 0,
        "data-readonly": d || void 0,
        ref: b,
        children: [
            FG("div", {
                className: "fm-row__label",
                children: [
                    d ? FG("span", {
                        className: "fm-row__handle fm-row__handle-group",
                        children: [
                            pv(ho, {
                                "aria-label": `${e} has duplicate frontmatter keys`,
                                className: "fm-row__handle-button",
                                disabled: !0,
                                icon: v9w(i),
                                size: "sm"
                            }),
                            pv("span", {
                                "aria-hidden": !0,
                                className: "fm-row__drag-handle-placeholder"
                            })
                        ]
                    }) : pv(g9w, {
                        dragAttributes: k,
                        dragListeners: _,
                        isDragging: y,
                        kind: i,
                        onChangeType: (N)=>a(e, N),
                        onCopy: ()=>c(e),
                        onCut: ()=>l(e),
                        onPaste: ()=>u(e),
                        onRemove: ()=>s({
                                type: "remove",
                                key: e
                            }),
                        propertyKey: e
                    }),
                    d ? pv("span", {
                        className: "fm-key",
                        children: e
                    }) : pv(d9w, {
                        description: g,
                        existingKeys: o,
                        onChange: I,
                        value: e
                    })
                ]
            }),
            pv("div", {
                className: "fm-row__value",
                children: d ? pv("span", {
                    className: "fm-readonly-value",
                    children: T || "Empty"
                }) : pv(f9w, {
                    kind: i,
                    onEndTextEdit: M,
                    onSetTextValue: P,
                    onSetValue: A,
                    propertyKey: e,
                    value: n
                })
            })
        ]
    });
    return d ? pv(xs, {
        content: C,
        placement: "top",
        children: O
    }) : O;
}), bKf = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
}, yKf = [];

}
