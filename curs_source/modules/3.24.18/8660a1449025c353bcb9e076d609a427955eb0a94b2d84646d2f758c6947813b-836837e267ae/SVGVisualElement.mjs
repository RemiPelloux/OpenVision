import { GSv, jXl } from "./DOMVisualElement.mjs";
import { s1v } from "./build-attrs.mjs";
import { o1v, qXl } from "./camel-case-attrs.mjs";
import { yXl } from "./camel-to-dash.mjs";
import { pSv, xXl } from "./defaults.mjs";
import { a1v, zXl } from "./is-svg-tag.mjs";
import { iYe, jQt } from "./keys-transform.mjs";
import { LXl, NSv } from "./models.mjs";
import { bXl, i1v, l1v, yv0 } from "./ofv.js";
import { Sv0 } from "./render_2.mjs";
import { c1v } from "./scrape-motion-values_2.mjs";
import { E } from "./tslib.es6.js";
var u1v;
export { u1v };
var __wakaru_kv0_initialized = false;
export function kv0() {
if (__wakaru_kv0_initialized) return;
__wakaru_kv0_initialized = true;
E(), iYe(), pSv(), NSv(), GSv(), yXl(), s1v(), o1v(), a1v(), Sv0(), c1v(), u1v = class extends jXl {
    constructor(){
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = LXl;
    }
    getBaseTargetFromProps(t, e) {
        return t[e];
    }
    readValueFromInstance(t, e) {
        if (jQt.has(e)) {
            const n = xXl(e);
            return n && n.default || 0;
        }
        return e = qXl.has(e) ? e : bXl(e), t.getAttribute(e);
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return l1v(t, e, n);
    }
    build(t, e, n) {
        i1v(t, e, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(t, e, n, i) {
        yv0(t, e, n, i);
    }
    mount(t) {
        this.isSVGTag = zXl(t.tagName), super.mount(t);
    }
};

}
