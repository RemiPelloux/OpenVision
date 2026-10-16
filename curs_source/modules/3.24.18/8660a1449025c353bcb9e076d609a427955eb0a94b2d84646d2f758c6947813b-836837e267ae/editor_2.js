import { D, Md, Pn, Qe, st } from "./Iwo.js";
import { F5e, Hvn, NVo, U5y, Wvn, _Re, cXd, hne } from "./LYd.js";
import { vu } from "./actions.js";
import { tT } from "./errorMessage.js";
import { ms } from "./files.js";
import { It, dn } from "./instantiation.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { ob } from "./severity_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn } from "./uri.js";
var Zv, sT, hXd, yIr, OVo, pXd, wW, FVo, pne, Nm, mXd, SIr, Wm, gXd;
export { FVo, Nm, OVo, SIr, Wm, Zv, gXd, hXd, mXd, pXd, pne, sT, wW, yIr };
var __wakaru_od_initialized = false;
export function od() {
if (__wakaru_od_initialized) return;
__wakaru_od_initialized = true;
"use strict";
E(), Bt(), To(), fn(), Qe(), It(), Eo(), ms(), Ki(), tT(), vu(), ob(), Zv = {
    EditorPane: "workbench.contributions.editors",
    EditorFactory: "workbench.contributions.editor.inputFactories"
}, sT = {
    id: "default",
    displayName: D(4354, null),
    providerDisplayName: D(4355, null)
}, hXd = "workbench.editor.sidebysideEditor", yIr = "workbench.editors.textDiffEditor", OVo = "workbench.editors.binaryResourceDiffEditor", pXd = class {
    constructor(){
        this.mapIdToSaveSource = new Map;
    }
    registerSource(t, e) {
        let n = this.mapIdToSaveSource.get(t);
        return n || (n = {
            source: t,
            label: e
        }, this.mapIdToSaveSource.set(t, n)), n.source;
    }
    getSourceLabel(t) {
        return this.mapIdToSaveSource.get(t)?.label ?? t;
    }
}, wW = new pXd, FVo = class extends st {
}, pne = ((t)=>(t[t.UNKNOWN = 0] = "UNKNOWN", t[t.REPLACE = 1] = "REPLACE", t[t.MOVE = 2] = "MOVE", t[t.UNPIN = 3] = "UNPIN", t))(pne || {}), Nm = ((t)=>(t[t.PRIMARY = 1] = "PRIMARY", t[t.SECONDARY = 2] = "SECONDARY", t[t.BOTH = 3] = "BOTH", t[t.ANY = 4] = "ANY", t))(Nm || {}), mXd = class {
    getOriginalUri(t, e) {
        if (!t) return;
        if (_Re(t)) return Wm.getOriginalUri(t.result, e);
        if (e?.supportSideBySide) {
            const { primary: i, secondary: r } = this.getSideEditors(t);
            if (i && r) {
                if (e?.supportSideBySide === 3) return {
                    primary: this.getOriginalUri(i, {
                        filterByScheme: e.filterByScheme
                    }),
                    secondary: this.getOriginalUri(r, {
                        filterByScheme: e.filterByScheme
                    })
                };
                if (e?.supportSideBySide === 4) return this.getOriginalUri(i, {
                    filterByScheme: e.filterByScheme
                }) ?? this.getOriginalUri(r, {
                    filterByScheme: e.filterByScheme
                });
                t = e.supportSideBySide === 1 ? i : r;
            }
        }
        if (hne(t) || Hvn(t) || F5e(t) || _Re(t) || Wvn(t)) return;
        const n = U5y(t) ? t.preferredResource : t.resource;
        return !n || !e || !e.filterByScheme ? n : this.filterUri(n, e.filterByScheme);
    }
    getSideEditors(t) {
        return cXd(t) || F5e(t) ? {
            primary: t.primary,
            secondary: t.secondary
        } : NVo(t) || hne(t) ? {
            primary: t.modified,
            secondary: t.original
        } : {
            primary: void 0,
            secondary: void 0
        };
    }
    getCanonicalUri(t, e) {
        if (!t) return;
        if (_Re(t)) return Wm.getCanonicalUri(t.result, e);
        if (e?.supportSideBySide) {
            const { primary: i, secondary: r } = this.getSideEditors(t);
            if (i && r) {
                if (e?.supportSideBySide === 3) return {
                    primary: this.getCanonicalUri(i, {
                        filterByScheme: e.filterByScheme
                    }),
                    secondary: this.getCanonicalUri(r, {
                        filterByScheme: e.filterByScheme
                    })
                };
                if (e?.supportSideBySide === 4) return this.getCanonicalUri(i, {
                    filterByScheme: e.filterByScheme
                }) ?? this.getCanonicalUri(r, {
                    filterByScheme: e.filterByScheme
                });
                t = e.supportSideBySide === 1 ? i : r;
            }
        }
        if (hne(t) || Hvn(t) || F5e(t) || _Re(t) || Wvn(t)) return;
        const n = t.resource;
        return !n || !e || !e.filterByScheme ? n : this.filterUri(n, e.filterByScheme);
    }
    filterUri(t, e) {
        if (Array.isArray(e)) {
            if (e.some((n)=>t.scheme === n)) return t;
        } else if (e === t.scheme) return t;
    }
}, SIr = ((t)=>(t[t.UNKNOWN = 0] = "UNKNOWN", t[t.KEYBOARD = 1] = "KEYBOARD", t[t.MOUSE = 2] = "MOUSE", t))(SIr || {}), Wm = new mXd, gXd = class {
    constructor(){
        this.editorSerializerConstructors = new Map, this.editorSerializerInstances = new Map;
    }
    start(t) {
        const e = this.instantiationService ??= t.get(dn);
        for (const [n, i] of this.editorSerializerConstructors)this.createEditorSerializer(n, i, e);
        this.editorSerializerConstructors.clear();
    }
    createEditorSerializer(t, e, n) {
        const i = n.createInstance(e);
        this.editorSerializerInstances.set(t, i);
    }
    registerFileEditorFactory(t) {
        if (this.fileEditorFactory) throw new Error("Can only register one file editor factory.");
        this.fileEditorFactory = t;
    }
    getFileEditorFactory() {
        return Md(this.fileEditorFactory);
    }
    registerEditorSerializer(t, e) {
        if (this.editorSerializerConstructors.has(t) || this.editorSerializerInstances.has(t)) throw new Error(`A editor serializer with type ID '${t}' was already registered.`);
        return this.instantiationService ? this.createEditorSerializer(t, e, this.instantiationService) : this.editorSerializerConstructors.set(t, e), Pn(()=>{
            this.editorSerializerConstructors.delete(t), this.editorSerializerInstances.delete(t);
        });
    }
    getEditorSerializer(t) {
        return this.editorSerializerInstances.get(typeof t == "string" ? t : t.typeId);
    }
}, Fi.add(Zv.EditorFactory, new gXd);

}
