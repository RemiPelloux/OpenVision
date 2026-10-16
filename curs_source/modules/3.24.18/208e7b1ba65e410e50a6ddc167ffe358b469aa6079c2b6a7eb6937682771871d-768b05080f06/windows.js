import { K0 } from "./cdpPort.js";
import { p6 } from "./color.js";
import { at } from "./configuration.js";
import { Ye } from "./environmentMainService.js";
import { Q, ne } from "./instantiation.js";
import { Ce } from "./path.js";
import { oe } from "./platform.js";
import { Tt } from "./productService.js";
import { gc } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Di } from "./window.js";
import { hp, ro } from "./window_2.js";
import JT from "electron";
var ct, QT;
export { QT, ct };
var __wakaru_pt_initialized = false;
export function pt() {
if (__wakaru_pt_initialized) return;
__wakaru_pt_initialized = true;
"use strict";
h(), p6(), Ce(), oe(), at(), K0(), Ye(), ne(), Tt(), gc(), Di(), hp(), ct = Q("windowsMainService"), ((e)=>{
    function t(r, s, i = JT.screen.getAllDisplays()) {
        if (r.trace(`window#validateWindowState: validating window state on ${i.length} display(s)`, s), typeof s.x != "number" || typeof s.y != "number" || typeof s.width != "number" || typeof s.height != "number") {
            r.trace("window#validateWindowState: unexpected type of state values");
            return;
        }
        if (s.width <= 0 || s.height <= 0) {
            r.trace("window#validateWindowState: unexpected negative values");
            return;
        }
        if (i.length === 1) {
            const d = n(i[0]);
            if (r.trace("window#validateWindowState: single monitor working area", d), d) {
                let u = function() {
                    !s || typeof s.x != "number" || typeof s.y != "number" || !d || (s.x < d.x && (s.x = d.x), s.y < d.y && (s.y = d.y));
                };
                var a = u;
                u(), s.width > d.width && (s.width = d.width), s.height > d.height && (s.height = d.height), s.x > d.x + d.width - 128 && (s.x = d.x + d.width - s.width), s.y > d.y + d.height - 128 && (s.y = d.y + d.height - s.height), u();
            }
            return s;
        }
        if (s.display && s.mode === 3) {
            const d = i.find((u)=>u.id === s.display);
            if (d && typeof d.bounds?.x == "number" && typeof d.bounds?.y == "number") {
                r.trace("window#validateWindowState: restoring fullscreen to previous display");
                const u = ro(3);
                return u.x = d.bounds.x, u.y = d.bounds.y, u;
            }
        }
        let o, l;
        try {
            o = JT.screen.getDisplayMatching({
                x: s.x,
                y: s.y,
                width: s.width,
                height: s.height
            }), l = n(o), r.trace("window#validateWindowState: multi-monitor working area", l);
        } catch (d) {
            r.error("window#validateWindowState: error finding display for window state", d);
        }
        if (o && l && s.x + s.width > l.x && s.y + s.height > l.y && s.x < l.x + l.width && s.y < l.y + l.height) return s;
        r.trace("window#validateWindowState: state is outside of the multi-monitor working area");
    }
    e.validateWindowState = t;
    function n(r) {
        if (r.workArea.width > 0 && r.workArea.height > 0) return r.workArea;
        if (r.bounds.width > 0 && r.bounds.height > 0) return r.bounds;
    }
})(QT || (QT = {}));

}
