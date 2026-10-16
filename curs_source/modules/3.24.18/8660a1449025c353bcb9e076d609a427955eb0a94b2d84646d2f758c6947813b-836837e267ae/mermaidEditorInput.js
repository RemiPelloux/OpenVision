import { Ei, Qe, st, xr } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { fG, pRn } from "./markdownEditorInput.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var Whl, Ghl, iVe, z1g;
export { Ghl, Whl, iVe, z1g };
var __wakaru_Qls_initialized = false;
export function Qls() {
if (__wakaru_Qls_initialized) return;
__wakaru_Qls_initialized = true;
"use strict";
E(), gs(), fn(), Qe(), pRn(), Ei(), Whl = "workbench.input.mermaid", Ghl = class IXs extends fG {
    get typeId() {
        return Whl;
    }
    get editorId() {
        return IXs.EditorID;
    }
    getIcon() {
        return yt.graph;
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: IXs.EditorID
            }
        };
    }
    matches(e) {
        return super.matches(e) ? !0 : e instanceof IXs ? e.resource.toString() === this.resource.toString() : !1;
    }
}, Ghl.EditorID = "workbench.editor.mermaid", iVe = Ghl, z1g = class extends st {
    canSerialize(t) {
        return t instanceof iVe;
    }
    serialize(t) {
        if (t instanceof iVe) return JSON.stringify(t.toJSON());
    }
    deserialize(t, e) {
        try {
            const n = JSON.parse(e);
            if (n.resource) return t.createInstance(iVe, rt.parse(n.resource));
        } catch (n) {
            xr(n);
        }
    }
};

}
