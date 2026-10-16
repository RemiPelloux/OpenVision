import { KNv } from "./ComposerMentionPreviewPrimitives.js";
import { mi } from "./index_188.js";
import { x } from "./tslib.es6.js";
import { Anh, Mnh, XNv, ZNv, i2v } from "./xmo.js";
import { jsx as JM } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Pnh, tfo, Lnh, Nnh, Onh, nfo;
export { Lnh, Nnh, Onh, Pnh, nfo, tfo };
var __wakaru_Fnh_initialized = false;
export function Fnh() {
if (__wakaru_Fnh_initialized) return;
__wakaru_Fnh_initialized = true;
"use strict";
x(), mi(), KNv(), Pnh = 12, tfo = 4, Lnh = {
    id: "file-path-staircase",
    priority: 20,
    match: (e)=>e.type === "file" && XNv(e.payload),
    Preview: (e)=>JM(Mnh, {
            ...e
        })
}, Nnh = {
    id: "code-path-staircase",
    priority: 18,
    match: (e)=>e.type === "code" && ZNv(e.payload),
    Preview: (e)=>JM(Mnh, {
            ...e
        })
}, Onh = {
    id: "folder-staircase",
    priority: 10,
    match: (e)=>e.type === "folder" && Anh(e.payload),
    Preview: ({ item: e })=>{
        const t = Anh(e.payload) ? e.payload.relativePath : "";
        return JM(i2v, {
            relativePath: t
        });
    }
}, nfo = [
    Lnh,
    Nnh,
    Onh
];

}
