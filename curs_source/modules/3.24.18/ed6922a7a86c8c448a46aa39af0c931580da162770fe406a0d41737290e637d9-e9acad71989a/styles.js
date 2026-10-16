import { x } from "./tslib.es6.js";
import { jsx as zPg } from "./react-runtime/react/esm-jsx-runtime-production.js";
var YSn, XSn;
export { XSn, YSn };
var __wakaru_Jsl_initialized = false;
export function Jsl() {
if (__wakaru_Jsl_initialized) return;
__wakaru_Jsl_initialized = true;
x(), YSn = "base-ui-disable-scrollbar", XSn = {
    className: YSn,
    getElement (e) {
        return zPg("style", {
            nonce: e,
            href: YSn,
            precedence: "base-ui:low",
            children: `.${YSn}{scrollbar-width:none}.${YSn}::-webkit-scrollbar{display:none}`
        });
    }
}, process.env.NODE_ENV !== "production" && (XSn.getElement.displayName = "styleDisableScrollbar.getElement");

}
