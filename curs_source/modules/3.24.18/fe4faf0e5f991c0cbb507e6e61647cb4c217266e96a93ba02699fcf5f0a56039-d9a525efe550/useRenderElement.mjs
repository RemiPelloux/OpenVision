import { Tl, vd } from "./empty.mjs";
import { RTt, cki } from "./getReactElementRef.mjs";
import { MQn, lki } from "./getStateAttributesProps.mjs";
import { xw } from "./index_2.mjs";
import { IQn, oIe } from "./mergeObjects.mjs";
import { If, OTt, jQn } from "./mergeProps.mjs";
import { i } from "./plugin-brand-icon.js";
import { RQn, uki } from "./resolveClassName.mjs";
import { PQn, dki } from "./resolveStyle.mjs";
import { Q_, mC, mQn } from "./useMergedRefs.mjs";
import { NQn, PTt } from "./warn.mjs";
import { createElement as XWn } from "./react-runtime/react/esm-index-production.js";
import * as ZAe from "./react-runtime/react/esm-index-production.js";
function Ki(r, e, a = {}) {
    const s = e.render, l = OQn(e, a);
    if (a.enabled === !1) return null;
    const u = a.state ?? Tl;
    return BQn(r, s, l, u);
}
function OQn(r, e = {}) {
    const { className: a, style: s, render: l } = r, { state: u = Tl, ref: p, props: m, stateAttributesMapping: b, enabled: g = !0 } = e, _ = g ? RQn(a, u) : void 0, v = g ? PQn(s, u) : void 0, x = g ? MQn(u, b) : Tl, C = g && m ? zQn(m) : void 0, E = g ? oIe(x, C) ?? {} : Tl;
    return typeof document < "u" && (g ? Array.isArray(p) ? E.ref = mQn([
        E.ref,
        RTt(l),
        ...p
    ]) : E.ref = Q_(E.ref, RTt(l), p) : Q_(null, null)), g ? (_ !== void 0 && (E.className = OTt(E.className, _)), v !== void 0 && (E.style = oIe(E.style, v)), E) : Tl;
}
function zQn(r) {
    return Array.isArray(r) ? jQn(r) : If(void 0, r);
}
function BQn(r, e, a, s) {
    if (e) {
        if (typeof e == "function") return qQn(e), e(a, s);
        const l = If(a, e.props);
        l.ref = a.ref;
        let u = e;
        if (u?.$$typeof === GQn && (u = ZAe.Children.toArray(e)[0]), !ZAe.isValidElement(u)) throw new Error([
            "Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.",
            "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.",
            "https://base-ui.com/r/invalid-render-prop"
        ].join(`
`));
        return ZAe.cloneElement(u, l);
    }
    if (r && typeof r == "string") return UQn(r, a);
    throw new Error("Base UI: Render element or function are not defined.");
}
function qQn(r) {
    const e = r.name;
    e.length !== 0 && WQn.test(e) && HQn.test(e) && PTt(`The \`render\` prop received a function named \`${e}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function UQn(r, e) {
    return r === "button" ? XWn("button", {
        type: "button",
        ...e,
        key: e.key
    }) : r === "img" ? XWn("img", {
        alt: "",
        ...e,
        key: e.key
    }) : ZAe.createElement(r, e);
}
var GQn, WQn, HQn;
export { BQn, GQn, HQn, Ki, OQn, UQn, WQn, qQn, zQn };
var __wakaru_ea_initialized = false;
export function ea() {
if (__wakaru_ea_initialized) return;
__wakaru_ea_initialized = true;
mC(), cki(), IQn(), NQn(), vd(), lki(), uki(), dki(), xw(), i(Ki, "useRenderElement"), i(OQn, "useRenderElementProps"), i(zQn, "resolveRenderFunctionProps"), GQn = Symbol.for("react.lazy"), WQn = /^[A-Z][A-Za-z0-9$]*$/, HQn = /[a-z]/, i(BQn, "evaluateRenderProp"), i(qQn, "warnIfRenderPropLooksLikeComponent"), i(UQn, "renderTag");

}
