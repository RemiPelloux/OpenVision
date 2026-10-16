import { S, Se, rn, tl, we } from "./HVr.js";
import { Vo } from "./actions.js";
import { GS } from "./errorMessage.js";
import { Fi } from "./files.js";
import { Ze, _t } from "./instantiation.js";
import { li } from "./network.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { C1g, Fos, N3t, O3t, Ywe, iKc, ij, vfe } from "./qIc.js";
import { Kp } from "./severity_2.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Qt } from "./uri.js";
var Wh, _S, rKc, Mki, Hos, sKc, S5, Wos, rj, jd, oKc, Vbn, vd, aKc;
export { Hos, Mki, S5, Vbn, Wh, Wos, _S, aKc, jd, oKc, rKc, rj, sKc, vd };
var __wakaru_xc_initialized = false;
export function xc() {
if (__wakaru_xc_initialized) return;
__wakaru_xc_initialized = true;
"use strict";
x(), rt(), gr(), Qt(), Se(), Ze(), rr(), Fi(), li(), GS(), Vo(), Kp(), Wh = {
    EditorPane: "workbench.contributions.editors",
    EditorFactory: "workbench.contributions.editor.inputFactories"
}, _S = {
    id: "default",
    displayName: S(4354, null),
    providerDisplayName: S(4355, null)
}, rKc = "workbench.editor.sidebysideEditor", Mki = "workbench.editors.textDiffEditor", Hos = "workbench.editors.binaryResourceDiffEditor", sKc = class {
    constructor(){
        this.mapIdToSaveSource = new Map;
    }
    registerSource(e, t) {
        let n = this.mapIdToSaveSource.get(e);
        return n || (n = {
            source: e,
            label: t
        }, this.mapIdToSaveSource.set(e, n)), n.source;
    }
    getSourceLabel(e) {
        return this.mapIdToSaveSource.get(e)?.label ?? e;
    }
}, S5 = new sKc, Wos = class extends we {
}, rj = ((e)=>(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.REPLACE = 1] = "REPLACE", e[e.MOVE = 2] = "MOVE", e[e.UNPIN = 3] = "UNPIN", e))(rj || {}), jd = ((e)=>(e[e.PRIMARY = 1] = "PRIMARY", e[e.SECONDARY = 2] = "SECONDARY", e[e.BOTH = 3] = "BOTH", e[e.ANY = 4] = "ANY", e))(jd || {}), oKc = class {
    getOriginalUri(e, t) {
        if (!e) return;
        if (vfe(e)) return vd.getOriginalUri(e.result, t);
        if (t?.supportSideBySide) {
            const { primary: i, secondary: r } = this.getSideEditors(e);
            if (i && r) {
                if (t?.supportSideBySide === 3) return {
                    primary: this.getOriginalUri(i, {
                        filterByScheme: t.filterByScheme
                    }),
                    secondary: this.getOriginalUri(r, {
                        filterByScheme: t.filterByScheme
                    })
                };
                if (t?.supportSideBySide === 4) return this.getOriginalUri(i, {
                    filterByScheme: t.filterByScheme
                }) ?? this.getOriginalUri(r, {
                    filterByScheme: t.filterByScheme
                });
                e = t.supportSideBySide === 1 ? i : r;
            }
        }
        if (ij(e) || N3t(e) || Ywe(e) || vfe(e) || O3t(e)) return;
        const n = C1g(e) ? e.preferredResource : e.resource;
        return !n || !t || !t.filterByScheme ? n : this.filterUri(n, t.filterByScheme);
    }
    getSideEditors(e) {
        return iKc(e) || Ywe(e) ? {
            primary: e.primary,
            secondary: e.secondary
        } : Fos(e) || ij(e) ? {
            primary: e.modified,
            secondary: e.original
        } : {
            primary: void 0,
            secondary: void 0
        };
    }
    getCanonicalUri(e, t) {
        if (!e) return;
        if (vfe(e)) return vd.getCanonicalUri(e.result, t);
        if (t?.supportSideBySide) {
            const { primary: i, secondary: r } = this.getSideEditors(e);
            if (i && r) {
                if (t?.supportSideBySide === 3) return {
                    primary: this.getCanonicalUri(i, {
                        filterByScheme: t.filterByScheme
                    }),
                    secondary: this.getCanonicalUri(r, {
                        filterByScheme: t.filterByScheme
                    })
                };
                if (t?.supportSideBySide === 4) return this.getCanonicalUri(i, {
                    filterByScheme: t.filterByScheme
                }) ?? this.getCanonicalUri(r, {
                    filterByScheme: t.filterByScheme
                });
                e = t.supportSideBySide === 1 ? i : r;
            }
        }
        if (ij(e) || N3t(e) || Ywe(e) || vfe(e) || O3t(e)) return;
        const n = e.resource;
        return !n || !t || !t.filterByScheme ? n : this.filterUri(n, t.filterByScheme);
    }
    filterUri(e, t) {
        if (Array.isArray(t)) {
            if (t.some((n)=>e.scheme === n)) return e;
        } else if (t === e.scheme) return e;
    }
}, Vbn = ((e)=>(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.KEYBOARD = 1] = "KEYBOARD", e[e.MOUSE = 2] = "MOUSE", e))(Vbn || {}), vd = new oKc, aKc = class {
    constructor(){
        this.editorSerializerConstructors = new Map, this.editorSerializerInstances = new Map;
    }
    start(e) {
        const t = this.instantiationService ??= e.get(_t);
        for (const [n, i] of this.editorSerializerConstructors)this.createEditorSerializer(n, i, t);
        this.editorSerializerConstructors.clear();
    }
    createEditorSerializer(e, t, n) {
        const i = n.createInstance(t);
        this.editorSerializerInstances.set(e, i);
    }
    registerFileEditorFactory(e) {
        if (this.fileEditorFactory) throw new Error("Can only register one file editor factory.");
        this.fileEditorFactory = e;
    }
    getFileEditorFactory() {
        return tl(this.fileEditorFactory);
    }
    registerEditorSerializer(e, t) {
        if (this.editorSerializerConstructors.has(e) || this.editorSerializerInstances.has(e)) throw new Error(`A editor serializer with type ID '${e}' was already registered.`);
        return this.instantiationService ? this.createEditorSerializer(e, t, this.instantiationService) : this.editorSerializerConstructors.set(e, t), rn(()=>{
            this.editorSerializerConstructors.delete(e), this.editorSerializerInstances.delete(e);
        });
    }
    getEditorSerializer(e) {
        return this.editorSerializerInstances.get(typeof e == "string" ? e : e.typeId);
    }
}, kn.add(Wh.EditorFactory, new aKc);

}
