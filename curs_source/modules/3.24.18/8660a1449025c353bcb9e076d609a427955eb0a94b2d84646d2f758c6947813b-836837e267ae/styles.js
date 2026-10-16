import { E } from "./tslib.es6.js";
import { jsx as Zjy } from "./react-runtime/react/esm-jsx-runtime-production.js";
var uci, dci;
export { dci, uci };
var __wakaru_Flh_initialized = false;
export function Flh() {
if (__wakaru_Flh_initialized) return;
__wakaru_Flh_initialized = true;
E(), uci = "base-ui-disable-scrollbar", dci = {
    className: uci,
    getElement (t) {
        return Zjy("style", {
            nonce: t,
            href: uci,
            precedence: "base-ui:low",
            children: `.${uci}{scrollbar-width:none}.${uci}::-webkit-scrollbar{display:none}`
        });
    }
}, process.env.NODE_ENV !== "production" && (dci.getElement.displayName = "styleDisableScrollbar.getElement");

}
