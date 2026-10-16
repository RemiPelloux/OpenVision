import { GSv, jXl } from "./DOMVisualElement.mjs";
import { HXl } from "./build-styles.mjs";
import { PYl, aFi } from "./is-css-variable.mjs";
import { iYe, jQt } from "./keys-transform.mjs";
import { uv0 } from "./measure.mjs";
import { $Xl, VSv, WXl, ZYl, cv0, fv0 } from "./ofv.js";
import { ayv, lyv } from "./parse-transform.mjs";
import { KSv } from "./render.mjs";
import { GXl } from "./scrape-motion-values.mjs";
import { E } from "./tslib.es6.js";
var e1v;
export { e1v };
var __wakaru_vv0_initialized = false;
export function vv0() {
if (__wakaru_vv0_initialized) return;
__wakaru_vv0_initialized = true;
E(), aFi(), iYe(), lyv(), uv0(), GSv(), HXl(), KSv(), GXl(), e1v = class extends jXl {
    constructor(){
        super(...arguments), this.type = "html", this.renderInstance = VSv;
    }
    readValueFromInstance(t, e) {
        if (jQt.has(e)) return this.projection?.isProjecting ? ZYl(e) : ayv(t, e);
        {
            const n = fv0(t), i = (PYl(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return typeof i == "string" ? i.trim() : i;
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: e }) {
        return cv0(t, e);
    }
    build(t, e, n) {
        $Xl(t, e, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return WXl(t, e, n);
    }
};

}
