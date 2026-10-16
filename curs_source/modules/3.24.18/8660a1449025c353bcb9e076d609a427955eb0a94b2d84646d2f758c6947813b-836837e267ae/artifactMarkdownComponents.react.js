import { oew } from "./ArtifactImage.react.js";
import { dew } from "./ArtifactTextReference.react.js";
import { few } from "./ArtifactVideo.react.js";
import { Gt } from "./Iwo.js";
import { u2l } from "./LocalImage.react.js";
import { nXt } from "./artifactUtils.js";
import { d_ } from "./index_205.js";
import { E } from "./tslib.es6.js";
import { fbs } from "./useResolveArtifactUrl.react.js";
import { createContext as vew } from "./react-runtime/react/esm-index-production.js";
var Obf, Fbf, Bbf, Ubf, jbf, bbs;
export { Bbf, Fbf, Obf, Ubf, bbs, jbf };
var __wakaru_M2l_initialized = false;
export function M2l() {
if (__wakaru_M2l_initialized) return;
__wakaru_M2l_initialized = true;
"use strict";
E(), d_(), Gt(), nXt(), oew(), dew(), few(), u2l(), fbs(), Obf = new Map([
    [
        ".mp4",
        "video/mp4"
    ],
    [
        ".webm",
        "video/webm"
    ],
    [
        ".mov",
        "video/quicktime"
    ],
    [
        ".m4v",
        "video/x-m4v"
    ],
    [
        ".ogv",
        "video/ogg"
    ]
]), Fbf = 256 * 1024 * 1024, Bbf = class {
    constructor(t){
        this._maxTotalBytes = t, this._entries = new Map, this._totalBytes = 0;
    }
    resolve(t, e, n) {
        const i = this._entries.get(t);
        if (i) return this._entries.delete(t), this._entries.set(t, i), i.url;
        const r = {
            sizeBytes: 0,
            url: n(t).then((s)=>{
                const o = URL.createObjectURL(new Blob([
                    s
                ], {
                    type: e
                }));
                return r.sizeBytes = s.byteLength, this._totalBytes += s.byteLength, this._evictOverBudget(t), o;
            })
        };
        return this._entries.set(t, r), r.url.catch(()=>{
            this._entries.get(t) === r && this._entries.delete(t);
        }), r.url;
    }
    _evictOverBudget(t) {
        for (const [e, n] of this._entries){
            if (this._totalBytes <= this._maxTotalBytes) return;
            e === t || n.sizeBytes === 0 || (this._entries.delete(e), this._totalBytes -= n.sizeBytes, n.url.then((i)=>URL.revokeObjectURL(i)));
        }
    }
}, Ubf = new Bbf(Fbf), jbf = 15e3, bbs = vew(void 0);

}
