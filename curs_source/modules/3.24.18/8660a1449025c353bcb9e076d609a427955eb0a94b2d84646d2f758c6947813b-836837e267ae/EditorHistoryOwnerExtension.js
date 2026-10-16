import { Aw, Fy, MS, Rw, j1 } from "./LYd.js";
import { $kt } from "./index_171.js";
import { gE } from "./index_23.js";
import { Z01, b9r, jkt, y9r } from "./ipa.js";
import { E } from "./tslib.es6.js";
var Nxp, sMa, Lxp, Oxp, Fxp;
export { Fxp, Lxp, Nxp, Oxp, sMa };
var __wakaru_Q01_initialized = false;
export function Q01() {
if (__wakaru_Q01_initialized) return;
__wakaru_Q01_initialized = true;
"use strict";
E(), Fy(), $kt(), gE(), jkt(), Aw(), Nxp = "data-editor-owns-history", sMa = "cursor-editor-history-command", Lxp = {
    undo: b9r,
    redo: y9r
}, Oxp = new j1("editorHistoryOwner"), Fxp = Rw.create({
    name: "editorHistoryOwner",
    addProseMirrorPlugins () {
        const { editor: t } = this;
        return [
            new MS({
                key: Oxp,
                props: {
                    attributes: ()=>t.isEditable ? {
                            [Nxp]: "true"
                        } : {}
                },
                view (e) {
                    const n = (i)=>{
                        const r = Z01(i);
                        r === void 0 || !t.isEditable || (i.preventDefault(), Lxp[r](e.state, e.dispatch));
                    };
                    return e.dom.addEventListener(sMa, n), {
                        destroy () {
                            e.dom.removeEventListener(sMa, n);
                        }
                    };
                }
            })
        ];
    }
});

}
