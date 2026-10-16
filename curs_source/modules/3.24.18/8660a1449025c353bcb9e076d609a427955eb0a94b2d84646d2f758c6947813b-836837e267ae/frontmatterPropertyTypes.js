import { OV, XVf, fjl } from "./BA.js";
import { E } from "./tslib.es6.js";
var vjl, JVf, fce, eKf, tKf;
export { JVf, eKf, fce, tKf, vjl };
var __wakaru_nKf_initialized = false;
export function nKf() {
if (__wakaru_nKf_initialized) return;
__wakaru_nKf_initialized = true;
"use strict";
E(), vjl = [
    {
        kind: "string",
        label: "Text",
        icon: "paragraph",
        empty: ""
    },
    {
        kind: "number",
        label: "Number",
        icon: "binary",
        empty: 0
    },
    {
        kind: "boolean",
        label: "Checkbox",
        icon: "check-square",
        empty: !1
    },
    {
        kind: "stringArray",
        label: "Tags",
        icon: "tag",
        empty: []
    },
    {
        kind: "date",
        label: "Date",
        icon: "calendar",
        empty: void 0
    },
    {
        kind: "datetime",
        label: "Date with time",
        icon: "clock",
        empty: void 0
    }
], JVf = new Map(vjl.map((t)=>[
        t.kind,
        t
    ])), fce = {
    status: "lossy"
}, eKf = [
    {
        from: "number",
        to: "string",
        convert: (t)=>OV(String(t))
    },
    {
        from: "boolean",
        to: "string",
        convert: (t)=>OV(String(t))
    },
    {
        from: "date",
        to: "string",
        convert: (t)=>OV(t instanceof Date ? fjl(t) : String(t))
    },
    {
        from: "datetime",
        to: "string",
        convert: (t)=>OV(t instanceof Date ? t.toISOString() : String(t))
    },
    {
        from: "stringArray",
        to: "string",
        convert: (t)=>Array.isArray(t) ? OV(t.join(", ")) : fce
    },
    {
        from: "string",
        to: "number",
        convert: (t)=>{
            if (typeof t == "string" && t.trim() === "") return OV(0);
            const e = Number(t);
            return Number.isFinite(e) ? OV(e) : fce;
        }
    },
    {
        from: "date",
        to: "number",
        convert: (t)=>t instanceof Date ? OV(t.getTime()) : fce
    },
    {
        from: "datetime",
        to: "number",
        convert: (t)=>t instanceof Date ? OV(t.getTime()) : fce
    },
    {
        from: "string",
        to: "boolean",
        convert: (t)=>t === "true" ? OV(!0) : t === "false" || t === "" ? OV(!1) : fce
    },
    {
        from: "string",
        to: "stringArray",
        convert: (t)=>typeof t != "string" ? fce : OV(t === "" ? [] : t.split(",").map((e)=>e.trim()).filter(Boolean))
    },
    {
        from: "datetime",
        to: "date",
        convert: (t)=>t instanceof Date ? OV(new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))) : fce
    },
    {
        from: "string",
        to: "date",
        convert: (t)=>{
            if (typeof t != "string" || t.trim() === "") return fce;
            const e = new Date(t);
            return Number.isNaN(e.getTime()) ? fce : OV(new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())));
        }
    },
    {
        from: "number",
        to: "date",
        convert: (t)=>{
            const e = XVf(t);
            return e ? OV(new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))) : fce;
        }
    },
    {
        from: "date",
        to: "datetime",
        convert: (t)=>t instanceof Date ? OV(t) : fce
    },
    {
        from: "string",
        to: "datetime",
        convert: (t)=>{
            if (typeof t != "string" || t.trim() === "") return fce;
            const e = new Date(t);
            return Number.isNaN(e.getTime()) ? fce : OV(e);
        }
    },
    {
        from: "number",
        to: "datetime",
        convert: (t)=>{
            const e = XVf(t);
            return e ? OV(e) : fce;
        }
    }
], tKf = new Map(eKf.map((t)=>[
        `${t.from}:${t.to}`,
        t
    ]));

}
