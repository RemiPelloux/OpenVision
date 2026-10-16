import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { Ki, Ot } from "./network.js";
import { E } from "./tslib.es6.js";
var CHe, Mqo, vz, tEr, kW, i0, hvn, Dqo, x7, Cl;
export { CHe, Cl, Dqo, Mqo, hvn, i0, kW, tEr, vz, x7 };
var __wakaru_Gu_initialized = false;
export function Gu() {
if (__wakaru_Gu_initialized) return;
__wakaru_Gu_initialized = true;
"use strict";
E(), It(), Ki(), CHe = "abort", Mqo = {
    ctrlCmd: !1,
    alt: !1,
    shift: !1
}, vz = ((t)=>(t[t.Blur = 1] = "Blur", t[t.Gesture = 2] = "Gesture", t[t.Other = 3] = "Other", t))(vz || {}), tEr = ((t)=>(t.QuickPick = "quickPick", t.InputBox = "inputBox", t.QuickWidget = "quickWidget", t))(tEr || {}), kW = ((t)=>(t[t.NONE = 0] = "NONE", t[t.FIRST = 1] = "FIRST", t[t.SECOND = 2] = "SECOND", t[t.LAST = 3] = "LAST", t))(kW || {}), i0 = ((t)=>(t[t.First = 1] = "First", t[t.Second = 2] = "Second", t[t.Last = 3] = "Last", t[t.Next = 4] = "Next", t[t.Previous = 5] = "Previous", t[t.NextPage = 6] = "NextPage", t[t.PreviousPage = 7] = "PreviousPage", t[t.NextSeparator = 8] = "NextSeparator", t[t.PreviousSeparator = 9] = "PreviousSeparator", t))(i0 || {}), hvn = ((t)=>(t[t.Title = 1] = "Title", t[t.Inline = 2] = "Inline", t[t.Input = 3] = "Input", t))(hvn || {}), Dqo = class {
    constructor(t){
        this.options = t;
    }
    getItemLabel(t) {
        return t.label;
    }
    getItemDescription(t) {
        if (!this.options?.skipDescription) return t.description;
    }
    getItemPath(t) {
        if (!this.options?.skipPath) return t.resource?.scheme === Ot.file ? t.resource.fsPath : t.resource?.path;
    }
}, x7 = new Dqo, Cl = jn("quickInputService");

}
