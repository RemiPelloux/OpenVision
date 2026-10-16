import { Wff } from "./Ycg.js";
import { E } from "./tslib.es6.js";
import { useEffect as $ff } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as lXk } from "./react-runtime/react/esm-index-production.js";
var CMi, tDe, W_s, YYt, TMi, fct, TRl;
export { CMi, TMi, TRl, W_s, YYt, fct, tDe };
var __wakaru_aDn_initialized = false;
export function aDn() {
if (__wakaru_aDn_initialized) return;
__wakaru_aDn_initialized = true;
E(), CMi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", tDe = CMi ? lXk : $ff, W_s = {}, YYt = Wff(1), TMi = Wff(-1), fct = Object.freeze({
    Translate: {
        toString (t) {
            if (!t) return;
            const { x: e, y: n } = t;
            return "translate3d(" + (e ? Math.round(e) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
        }
    },
    Scale: {
        toString (t) {
            if (!t) return;
            const { scaleX: e, scaleY: n } = t;
            return "scaleX(" + e + ") scaleY(" + n + ")";
        }
    },
    Transform: {
        toString (t) {
            if (t) return [
                fct.Translate.toString(t),
                fct.Scale.toString(t)
            ].join(" ");
        }
    },
    Transition: {
        toString (t) {
            let { property: e, duration: n, easing: i } = t;
            return e + " " + n + "ms " + i;
        }
    }
}), TRl = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";

}
