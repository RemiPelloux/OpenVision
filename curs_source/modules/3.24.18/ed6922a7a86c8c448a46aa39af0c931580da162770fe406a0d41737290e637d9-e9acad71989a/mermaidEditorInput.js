import { Se, ns, si, we } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { NBn, u8 } from "./markdownEditorInput.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var yIo, SIo, ILe, QLh;
export { ILe, QLh, SIo, yIo };
var __wakaru_mtr_initialized = false;
export function mtr() {
if (__wakaru_mtr_initialized) return;
__wakaru_mtr_initialized = true;
"use strict";
x(), _i(), Qt(), Se(), NBn(), si(), yIo = "workbench.input.mermaid", SIo = class N1r extends u8 {
    get typeId() {
        return yIo;
    }
    get editorId() {
        return N1r.EditorID;
    }
    getIcon() {
        return Pe.graph;
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: N1r.EditorID
            }
        };
    }
    matches(t) {
        return super.matches(t) ? !0 : t instanceof N1r ? t.resource.toString() === this.resource.toString() : !1;
    }
}, SIo.EditorID = "workbench.editor.mermaid", ILe = SIo, QLh = class extends we {
    canSerialize(e) {
        return e instanceof ILe;
    }
    serialize(e) {
        if (e instanceof ILe) return JSON.stringify(e.toJSON());
    }
    deserialize(e, t) {
        try {
            const n = JSON.parse(t);
            if (n.resource) return e.createInstance(ILe, Ee.parse(n.resource));
        } catch (n) {
            ns(n);
        }
    }
};

}
