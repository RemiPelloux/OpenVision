import { Ze } from "./instantiation.js";
import { gt, li } from "./network.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var xis, Q7c, v5e, wW, v1, pmt, Iis, wre, Gs;
export { Gs, Iis, Q7c, pmt, v1, v5e, wW, wre, xis };
var __wakaru_Ya_initialized = false;
export function Ya() {
if (__wakaru_Ya_initialized) return;
__wakaru_Ya_initialized = true;
"use strict";
x(), Ze(), li(), xis = "abort", Q7c = {
    ctrlCmd: !1,
    alt: !1,
    shift: !1
}, v5e = ((e)=>(e[e.Blur = 1] = "Blur", e[e.Gesture = 2] = "Gesture", e[e.Other = 3] = "Other", e))(v5e || {}), wW = ((e)=>(e[e.NONE = 0] = "NONE", e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.LAST = 3] = "LAST", e))(wW || {}), v1 = ((e)=>(e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Last = 3] = "Last", e[e.Next = 4] = "Next", e[e.Previous = 5] = "Previous", e[e.NextPage = 6] = "NextPage", e[e.PreviousPage = 7] = "PreviousPage", e[e.NextSeparator = 8] = "NextSeparator", e[e.PreviousSeparator = 9] = "PreviousSeparator", e))(v1 || {}), pmt = ((e)=>(e[e.Title = 1] = "Title", e[e.Inline = 2] = "Inline", e[e.Input = 3] = "Input", e))(pmt || {}), Iis = class {
    constructor(e){
        this.options = e;
    }
    getItemLabel(e) {
        return e.label;
    }
    getItemDescription(e) {
        if (!this.options?.skipDescription) return e.description;
    }
    getItemPath(e) {
        if (!this.options?.skipPath) return e.resource?.scheme === gt.file ? e.resource.fsPath : e.resource?.path;
    }
}, wre = new Iis, Gs = vn("quickInputService");

}
