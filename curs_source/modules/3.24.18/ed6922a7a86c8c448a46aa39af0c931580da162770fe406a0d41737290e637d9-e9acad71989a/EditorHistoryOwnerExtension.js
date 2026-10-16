import { aNi, kiv, oNi, p4t } from "./f0s.js";
import { nZe } from "./index_165.js";
import { M0 } from "./index_18.js";
import { A_, bS, cy, rb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var dhu, m3s, hhu, phu, mhu;
export { dhu, hhu, m3s, mhu, phu };
var __wakaru_wiv_initialized = false;
export function wiv() {
if (__wakaru_wiv_initialized) return;
__wakaru_wiv_initialized = true;
"use strict";
x(), A_(), nZe(), M0(), p4t(), zS(), dhu = "data-editor-owns-history", m3s = "cursor-editor-history-command", hhu = {
    undo: oNi,
    redo: aNi
}, phu = new cy("editorHistoryOwner"), mhu = bS.create({
    name: "editorHistoryOwner",
    addProseMirrorPlugins () {
        const { editor: e } = this;
        return [
            new rb({
                key: phu,
                props: {
                    attributes: ()=>e.isEditable ? {
                            [dhu]: "true"
                        } : {}
                },
                view (t) {
                    const n = (i)=>{
                        const r = kiv(i);
                        r === void 0 || !e.isEditable || (i.preventDefault(), hhu[r](t.state, t.dispatch));
                    };
                    return t.dom.addEventListener(m3s, n), {
                        destroy () {
                            t.dom.removeEventListener(m3s, n);
                        }
                    };
                }
            })
        ];
    }
});

}
