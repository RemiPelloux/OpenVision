import * as Ipe from "./react-runtime/react/esm-index-production.js";
import * as ahi from "./react-runtime/react/esm-index-production.js";
import * as ihi from "./react-runtime/react/esm-index-production.js";
import * as lVn from "./react-runtime/react/esm-index-production.js";
import * as ohi from "./react-runtime/react/esm-index-production.js";
import { jsxs as rhi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as shi from "./react-runtime/react/esm-index-production.js";
import { jsx as uVn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { fq, wm } from "./x$r.js";
import { NZt } from "./Vg.js";
import { rd } from "./cn.ts";
import { i } from "./plugin-brand-icon.js";
import { Ho } from "./stylex.mjs";
import { Ki, ea } from "./useRenderElement.mjs";
export function RDe(r) {
    return Array.isArray(r) ? r.map((e)=>RDe(e)).join(",") : r == null ? "" : String(r);
}
i(RDe, "stringifyLocale");
var Rjr = new Map;
function Pjr(r, e) {
    const a = JSON.stringify({
        locale: RDe(r),
        options: e
    }), s = Rjr.get(a);
    if (s) return s;
    const l = new Intl.NumberFormat(r, e);
    return Rjr.set(a, l), l;
}
i(Pjr, "getFormatter");
function ZZt(r, e, a) {
    return r == null ? "" : Pjr(e, a).format(r);
}
i(ZZt, "formatNumber");
function jjr(r, e, a) {
    return r == null ? "" : a ? ZZt(r, e, a) : ZZt(r / 100, e, {
        style: "percent"
    });
}
i(jjr, "formatNumberValue"), ea();
var VZt = lVn.createContext(void 0);
VZt.displayName = "ProgressRootContext";
function Ube() {
    const r = lVn.useContext(VZt);
    if (r === void 0) throw new Error("Base UI: ProgressRootContext is missing. Progress parts must be placed within <Progress.Root>.");
    return r;
}
i(Ube, "useProgressRootContext");
var KZt = (function(r) {
    return r.complete = "data-complete", r.indeterminate = "data-indeterminate", r.progressing = "data-progressing", r;
})({}), Gbe = {
    status (r) {
        return r === "progressing" ? {
            [KZt.progressing]: ""
        } : r === "complete" ? {
            [KZt.complete]: ""
        } : r === "indeterminate" ? {
            [KZt.indeterminate]: ""
        } : null;
    }
};
function Ljr(r, e) {
    return e == null ? "indeterminate progress" : r || `${e}%`;
}
i(Ljr, "getDefaultAriaValueText");
export var Djr = Ipe.forwardRef(i(function(e, a) {
    const { format: s, getAriaValueText: l = Ljr, locale: u, max: p = 100, min: m = 0, value: b, render: g, className: _, children: v, style: x, ...C } = e, [E, A] = Ipe.useState(), $ = wm(s);
    let I = "indeterminate";
    Number.isFinite(b) && (I = b === p ? "complete" : "progressing");
    const N = jjr(b, u, $.current), R = Ipe.useMemo(()=>({
            status: I
        }), [
        I
    ]), P = {
        "aria-labelledby": E,
        "aria-valuemax": p,
        "aria-valuemin": m,
        "aria-valuenow": b ?? void 0,
        "aria-valuetext": l(N, b),
        role: "progressbar",
        children: rhi(Ipe.Fragment, {
            children: [
                v,
                uVn("span", {
                    role: "presentation",
                    style: fq,
                    children: "x"
                })
            ]
        })
    }, L = Ipe.useMemo(()=>({
            formattedValue: N,
            max: p,
            min: m,
            setLabelId: A,
            state: R,
            status: I,
            value: b
        }), [
        N,
        p,
        m,
        A,
        R,
        I,
        b
    ]), j = Ki("div", e, {
        state: R,
        ref: a,
        props: [
            P,
            C
        ],
        stateAttributesMapping: Gbe
    });
    return uVn(VZt.Provider, {
        value: L,
        children: j
    });
}, "ProgressRoot"));
Djr.displayName = "ProgressRoot", ea();
export var Fjr = ihi.forwardRef(i(function(e, a) {
    const { render: s, className: l, style: u, ...p } = e, { state: m } = Ube();
    return Ki("div", e, {
        state: m,
        ref: a,
        props: p,
        stateAttributesMapping: Gbe
    });
}, "ProgressTrack"));
Fjr.displayName = "ProgressTrack", ea();
function Ojr(r, e, a) {
    return (r - e) * 100 / (a - e);
}
i(Ojr, "valueToPercent");
export var zjr = ahi.forwardRef(i(function(e, a) {
    const { render: s, className: l, style: u, ...p } = e, { max: m, min: b, value: g, state: _ } = Ube(), v = Number.isFinite(g) && g !== null ? Ojr(g, b, m) : null, x = v == null ? {} : {
        insetInlineStart: 0,
        height: "inherit",
        width: `${v}%`
    };
    return Ki("div", e, {
        state: _,
        ref: a,
        props: [
            {
                style: x
            },
            p
        ],
        stateAttributesMapping: Gbe
    });
}, "ProgressIndicator"));
zjr.displayName = "ProgressIndicator", ea();
export var Bjr = ohi.forwardRef(i(function(e, a) {
    const { className: s, render: l, children: u, style: p, ...m } = e, { value: b, formattedValue: g, state: _ } = Ube(), v = b == null ? "indeterminate" : g, x = b == null ? null : g;
    return Ki("span", e, {
        state: _,
        ref: a,
        props: [
            {
                "aria-hidden": !0,
                children: typeof u == "function" ? u(v, b) : x
            },
            m
        ],
        stateAttributesMapping: Gbe
    });
}, "ProgressValue"));
Bjr.displayName = "ProgressValue", ea();
export var qjr = shi.forwardRef(i(function(e, a) {
    const { render: s, className: l, style: u, id: p, ...m } = e, { setLabelId: b, state: g } = Ube(), _ = NZt(p, b);
    return Ki("span", e, {
        state: g,
        ref: a,
        props: [
            {
                id: _,
                role: "presentation"
            },
            m
        ],
        stateAttributesMapping: Gbe
    });
}, "ProgressLabel"));
qjr.displayName = "ProgressLabel", Ho(), rd();

export var XQ = {};
Object.defineProperty(XQ, "Indicator", {
    enumerable: true,
    get: ()=>zjr
});
Object.defineProperty(XQ, "Label", {
    enumerable: true,
    get: ()=>qjr
});
Object.defineProperty(XQ, "Root", {
    enumerable: true,
    get: ()=>Djr
});
Object.defineProperty(XQ, "Track", {
    enumerable: true,
    get: ()=>Fjr
});
Object.defineProperty(XQ, "Value", {
    enumerable: true,
    get: ()=>Bjr
});
